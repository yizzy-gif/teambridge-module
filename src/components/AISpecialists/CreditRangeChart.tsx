// Step-line chart for Credit Usage Over Time.
// Morphs between time ranges by interpolating the step path + hatch positions
// using requestAnimationFrame. Uses Alloy design tokens.

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface CreditRangePoint {
  label: string;
  min: number;
  max: number;
  count: number;
  hasData: boolean;
}

interface CreditRangeChartProps {
  data: CreditRangePoint[];
  height?: number;
}

const ChartWrap = styled.div<{ $height: number }>`
  position: relative;
  width: 100%;
  height: ${p => p.$height}px;
`;

const ChartSvg = styled.svg`
  display: block;
  font-family: var(--font-sans, Geist, sans-serif);
`;

const GridLine = styled.line`
  stroke: var(--color-border-opaque, #e8eaee);
  stroke-width: 1;
  /* Match the morph duration + eased curve for a synchronized feel. */
  transition: y1 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y2 620ms cubic-bezier(0.77, 0, 0.175, 1);
`;

const AxisLabel = styled.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
  transition: x 620ms cubic-bezier(0.77, 0, 0.175, 1),
              y 620ms cubic-bezier(0.77, 0, 0.175, 1);
`;

const StepPath = styled.path`
  fill: none;
  stroke: var(--color-content-primary, #151515);
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const HatchBar = styled.rect`
  fill: url(#hatch-fade);
`;

const HoverDot = styled.circle`
  fill: var(--color-content-primary, #151515);
  stroke: var(--color-bg-primary, #ffffff);
  stroke-width: 2;
`;

const HitArea = styled.rect`
  fill: transparent;
  cursor: pointer;
`;

const Tooltip = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${p => p.$x}px;
  top: ${p => p.$y}px;
  transform: translate(-50%, calc(-100% - 10px));
  background: var(--color-bg-inverse, #151515);
  color: var(--color-content-inverse, #ffffff);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  border-radius: var(--radius-md, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const TooltipLabel = styled.div`
  font-weight: 600;
  margin-bottom: 2px;
`;

const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-size: 11px;
  color: var(--color-content-inverse-secondary, #d4d8de);
`;

function fmtCredits(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}k`;
  return n.toLocaleString('en-US');
}

function fmtCreditsAxis(n: number): string {
  if (n === 0) return '$0';
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

function niceRound(v: number): number {
  if (v === 0) return 0;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const candidates = [1, 1.2, 1.5, 1.6, 1.8, 2, 2.2, 2.4, 2.5, 2.8, 3, 3.2, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10];
  const normalized = v / mag;
  for (const c of candidates) {
    if (c >= normalized) return c * mag;
  }
  return 10 * mag;
}

/** Resample a value array to a target length by linear interpolation so the
 *  step path can morph between 24h (1 bucket), 7d (7), and 30d (30) with a
 *  matching number of segments on both sides of the transition. */
function resample(values: number[], targetLen: number): number[] {
  if (values.length === 0) return new Array(targetLen).fill(0);
  if (values.length === targetLen) return values.slice();
  const out: number[] = [];
  for (let i = 0; i < targetLen; i++) {
    const t = targetLen === 1 ? 0 : (i / (targetLen - 1)) * (values.length - 1);
    const lo = Math.floor(t);
    const hi = Math.min(lo + 1, values.length - 1);
    const frac = t - lo;
    out.push(values[lo] + (values[hi] - values[lo]) * frac);
  }
  return out;
}

// Ease in–out quart — gentler start/finish than cubic for a softer morph.
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

export function CreditRangeChart({ data, height = 220 }: CreditRangeChartProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        if (w > 0) setWidth(w);
      }
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Animation state: interpolate between previous and current data ───────
  const [animProgress, setAnimProgress] = useState(1);
  const fromDataRef = useRef<CreditRangePoint[]>(data);
  const lastDataRef = useRef<CreditRangePoint[]>(data);

  useEffect(() => {
    if (lastDataRef.current === data) return; // Same reference, no real change

    // Capture the data we're animating FROM (whatever we had on last render).
    fromDataRef.current = lastDataRef.current;
    lastDataRef.current = data;

    // Respect reduced-motion preferences — snap to final state.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setAnimProgress(1);
      return;
    }

    const start = performance.now();
    const duration = 620; // Longer for a more cinematic morph
    setAnimProgress(0);

    let rafId: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setAnimProgress(easeInOutQuart(t));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [data]);

  const fromData = animProgress < 1 ? fromDataRef.current : data;

  // ── Layout ────────────────────────────────────────────────────────────────
  const padL = 48;
  const padR = 16;
  const padT = 12;
  const padB = 32;
  const innerW = Math.max(width - padL - padR, 1);
  const innerH = height - padT - padB;

  // Render N points based on the MAX of from/to so we can morph both ways.
  const renderN = Math.max(fromData.length, data.length);

  // Resample both sides so we always have `renderN` paired values.
  const fromMax = resample(fromData.map(d => (d.hasData ? d.max : 0)), renderN);
  const toMax = resample(data.map(d => (d.hasData ? d.max : 0)), renderN);

  // Blend between from→to by animProgress.
  const blendedMax = fromMax.map((v, i) => v + (toMax[i] - v) * animProgress);

  // Compute axis max based on the blended values.
  const blendedMaxVal = Math.max(...blendedMax, 0);
  const niceMax = blendedMaxVal > 0 ? niceRound(blendedMaxVal) : 10;

  const tickCount = 4;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (niceMax * i) / tickCount);

  const yFor = (v: number) => padT + innerH - (v / niceMax) * innerH;
  const bandW = innerW / renderN;
  const leftFor = (i: number) => padL + bandW * i;
  const rightFor = (i: number) => padL + bandW * (i + 1);
  const centerFor = (i: number) => padL + bandW * (i + 0.5);

  // Stepped path using the blended max values.
  const stepPath = (() => {
    if (blendedMax.length === 0) return '';
    const parts: string[] = [];
    blendedMax.forEach((v, i) => {
      const y = yFor(v);
      const xL = leftFor(i);
      const xR = rightFor(i);
      if (i === 0) parts.push(`M ${xL} ${y}`);
      else parts.push(`L ${xL} ${y}`);
      parts.push(`L ${xR} ${y}`);
    });
    return parts.join(' ');
  })();

  // Hatch bars — positions and heights driven by blended values.
  const hatchBars: Array<{ x: number; y: number; height: number }> = [];
  const hatchSpacing = 4;
  blendedMax.forEach((v, i) => {
    if (v <= 0) return;
    const topY = yFor(v);
    const xL = leftFor(i);
    const xR = rightFor(i);
    for (let x = xL + 1; x < xR - 1; x += hatchSpacing) {
      hatchBars.push({ x, y: topY, height: padT + innerH - topY });
    }
  });

  // Use the real (target) data for labels, tooltips, hit areas (no morph needed).
  const labelsBandW = innerW / data.length;
  const labelsLeftFor = (i: number) => padL + labelsBandW * i;
  const labelsCenterFor = (i: number) => padL + labelsBandW * (i + 0.5);

  const hovered = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <ChartWrap ref={wrapRef} $height={height}>
      <ChartSvg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="hatch-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-content-primary, #151515)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-content-primary, #151515)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y-axis gridlines + labels (smooth transition on tick positions) */}
        {ticks.map((t, i) => (
          <g key={`t-${i}`}>
            <GridLine x1={padL} x2={width - padR} y1={yFor(t)} y2={yFor(t)} />
            <AxisLabel x={padL - 8} y={yFor(t) + 4} textAnchor="end">
              {fmtCreditsAxis(t)}
            </AxisLabel>
          </g>
        ))}

        {/* Hatch bars — interpolated positions */}
        {hatchBars.map((h, i) => (
          <HatchBar key={`h-${i}`} x={h.x - 0.5} y={h.y} width={1} height={h.height} />
        ))}

        {/* Morphing step line */}
        {stepPath && <StepPath d={stepPath} />}

        {/* Hover dot (uses the target data's actual position) */}
        {hovered && hoverIndex !== null && hovered.hasData && animProgress === 1 && (
          <HoverDot cx={labelsCenterFor(hoverIndex)} cy={yFor(hovered.max)} r={4} />
        )}

        {/* Hit areas — track the target data (disabled during animation to avoid flicker) */}
        {animProgress === 1 && data.map((d, i) => (
          <HitArea
            key={`hit-${i}`}
            x={labelsLeftFor(i)}
            y={padT}
            width={labelsBandW}
            height={innerH}
            onMouseEnter={() => d.hasData && setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}

        {/* X-axis day labels — sparse for dense ranges */}
        {(() => {
          const minSpacingPx = 45;
          const step = Math.max(1, Math.ceil(minSpacingPx / labelsBandW));
          return data.map((d, i) => {
            const isEdge = i === 0 || i === data.length - 1;
            if (!isEdge && i % step !== 0) return null;
            return (
              <AxisLabel
                key={`xl-${i}`}
                x={labelsCenterFor(i)}
                y={height - padB + 18}
                textAnchor="middle"
              >
                {d.label}
              </AxisLabel>
            );
          });
        })()}
      </ChartSvg>

      {hovered && hoverIndex !== null && hovered.hasData && animProgress === 1 && (
        <Tooltip $x={labelsCenterFor(hoverIndex)} $y={yFor(hovered.max)}>
          <TooltipLabel>{hovered.label}</TooltipLabel>
          {hovered.min === hovered.max ? (
            <TooltipRow>{fmtCredits(hovered.min)} credits</TooltipRow>
          ) : (
            <TooltipRow>
              {fmtCredits(hovered.min)} – {fmtCredits(hovered.max)} credits
            </TooltipRow>
          )}
          <TooltipRow>
            {hovered.count} {hovered.count === 1 ? 'run' : 'runs'}
          </TooltipRow>
        </Tooltip>
      )}
    </ChartWrap>
  );
}
