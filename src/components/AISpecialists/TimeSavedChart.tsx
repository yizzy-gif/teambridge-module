// Area-fade chart for Time Saved per period, visually matched to
// CreditRangeChart (Credit Usage Over Time): top cap line per bucket with a
// soft AI-gradient fill underneath, y-axis labels at the card's left edge.

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface TimeSavedPoint {
  label: string;
  /** Time saved for this bucket, in milliseconds. */
  savedMs: number;
}

interface TimeSavedChartProps {
  data: TimeSavedPoint[];
  /** Y-axis unit selector: 'min' shows minutes, 'hour' shows hours. */
  unit: 'min' | 'hour';
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
`;

const AxisLabel = styled.text`
  fill: var(--color-content-tertiary, #87919f);
  font-size: 11px;
`;

// AI gradient stops — purple → blue slice of var(--gradient-ai)
const AI_STOP_1 = '#8c4fe2';
const AI_STOP_2 = '#446cff';

const StepPath = styled.path`
  fill: none;
  stroke: url(#timesaved-stroke);
  stroke-width: 2.5;
  stroke-linejoin: miter;
  stroke-linecap: butt;
`;

const FillBar = styled.rect`
  fill: url(#timesaved-fill);
`;

const HoverDot = styled.circle`
  fill: ${AI_STOP_2};
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
  background: var(--color-bg-always-dark, #0f172a);
  color: var(--color-bg-always-light, #ffffff);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  border-radius: var(--radius-md, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: var(--shadow-below-md, 0 4px 12px rgba(0, 0, 0, 0.15));
  z-index: var(--z-tooltip, 999);
`;

const TooltipLabel = styled.div`
  font-weight: 600;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.65);
`;

const TooltipRow = styled.div`
  font-size: 11px;
  color: var(--color-bg-always-light, #ffffff);
`;

function fmtAxis(ms: number, unit: 'min' | 'hour'): string {
  if (unit === 'hour') {
    const h = ms / 3_600_000;
    if (h === 0) return '0h';
    return h >= 10 ? `${Math.round(h)}h` : `${h.toFixed(1)}h`;
  }
  const m = ms / 60_000;
  if (m === 0) return '0m';
  return `${Math.round(m)}m`;
}

function fmtTooltip(ms: number): string {
  if (ms < 60_000) return `${Math.round(ms / 1_000)}s`;
  const totalMin = Math.round(ms / 60_000);
  if (totalMin < 60) return `${totalMin} min`;
  const hours = Math.floor(totalMin / 60);
  const minutes = totalMin % 60;
  return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
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

export function TimeSavedChart({ data, unit, height = 200 }: TimeSavedChartProps) {
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

  // ── Layout (mirrors CreditRangeChart for visual parity) ───────────────────
  const padL = 44;
  const padR = 0;
  const padT = 20;
  const padB = 20;
  const innerW = Math.max(width - padL - padR, 1);
  const innerH = height - padT - padB;

  const values = data.map(d => d.savedMs);
  const maxVal = Math.max(0, ...values);
  // Round axis up to a clean tick value; fall back so empty data still renders
  // a sane y-axis (5 minutes if minute unit, 1 hour if hour unit).
  const fallback = unit === 'hour' ? 3_600_000 : 5 * 60_000;
  const niceMax = maxVal > 0 ? niceRound(maxVal) : fallback;

  const tickCount = 4;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (niceMax * i) / tickCount);

  const yFor = (v: number) => padT + innerH - (v / niceMax) * innerH;
  const bandW = innerW / Math.max(1, data.length);
  const leftFor = (i: number) => padL + bandW * i;
  const rightFor = (i: number) => padL + bandW * (i + 1);
  const centerFor = (i: number) => padL + bandW * (i + 0.5);

  // Top cap line — one horizontal segment per bucket, no vertical connectors.
  const stepPath = (() => {
    if (data.length === 0) return '';
    const parts: string[] = [];
    data.forEach((d, i) => {
      const y = yFor(d.savedMs);
      const xL = leftFor(i);
      const xR = rightFor(i);
      parts.push(`M ${xL} ${y}`);
      parts.push(`L ${xR} ${y}`);
    });
    return parts.join(' ');
  })();

  // Filled bars — one per bucket, gradient fades downward.
  const fillBars: Array<{ x: number; y: number; width: number; height: number }> = [];
  data.forEach((d, i) => {
    if (d.savedMs <= 0) return;
    const topY = yFor(d.savedMs);
    const xL = leftFor(i);
    const xR = rightFor(i);
    fillBars.push({
      x: xL,
      y: topY,
      width: Math.max(xR - xL, 0),
      height: padT + innerH - topY,
    });
  });

  const hovered = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <ChartWrap ref={wrapRef} $height={height}>
      <ChartSvg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          {/* Vertical AI gradient (purple → blue) for the top cap line. */}
          <linearGradient id="timesaved-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={AI_STOP_1} />
            <stop offset="100%" stopColor={AI_STOP_2} />
          </linearGradient>
          {/* AI gradient for bar fills — soft 30% purple at the top fading
              to fully transparent at the bottom. */}
          <linearGradient id="timesaved-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={AI_STOP_1} stopOpacity="0.3" />
            <stop offset="100%" stopColor={AI_STOP_2} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y-axis gridlines span the full chart; labels sit in the left
            gutter at the card's edge so they don't overlap the first bar. */}
        {ticks.map((t, i) => (
          <g key={`t-${i}`}>
            <GridLine x1={0} x2={width - padR} y1={yFor(t)} y2={yFor(t)} />
            <AxisLabel x={0} y={yFor(t) - 6} textAnchor="start">
              {fmtAxis(t, unit)}
            </AxisLabel>
          </g>
        ))}

        {/* Filled bars */}
        {fillBars.map((b, i) => (
          <FillBar key={`b-${i}`} x={b.x} y={b.y} width={b.width} height={b.height} />
        ))}

        {/* Top cap step line */}
        {stepPath && <StepPath d={stepPath} />}

        {/* Hover dot */}
        {hovered && hoverIndex !== null && hovered.savedMs > 0 && (
          <HoverDot cx={centerFor(hoverIndex)} cy={yFor(hovered.savedMs)} r={4} />
        )}

        {/* Hit areas */}
        {data.map((d, i) => (
          <HitArea
            key={`hit-${i}`}
            x={leftFor(i)}
            y={padT}
            width={bandW}
            height={innerH}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}

        {/* X-axis labels — sparse for dense ranges, edge-anchored at first/last. */}
        {(() => {
          const minSpacingPx = 45;
          const step = Math.max(1, Math.ceil(minSpacingPx / bandW));
          const lastIdx = data.length - 1;
          return data.map((d, i) => {
            const isFirst = i === 0;
            const isLast = i === lastIdx;
            const isEdge = isFirst || isLast;
            if (!isEdge && i % step !== 0) return null;
            const x = isFirst
              ? padL
              : isLast
                ? width - padR
                : centerFor(i);
            const anchor = isFirst ? 'start' : isLast ? 'end' : 'middle';
            return (
              <AxisLabel
                key={`xl-${i}`}
                x={x}
                y={height - padB + 18}
                textAnchor={anchor}
              >
                {d.label}
              </AxisLabel>
            );
          });
        })()}
      </ChartSvg>

      {hovered && hoverIndex !== null && hovered.savedMs > 0 && (
        <Tooltip $x={centerFor(hoverIndex)} $y={yFor(hovered.savedMs)}>
          <TooltipLabel>{hovered.label}</TooltipLabel>
          <TooltipRow>{fmtTooltip(hovered.savedMs)} saved</TooltipRow>
        </Tooltip>
      )}
    </ChartWrap>
  );
}
