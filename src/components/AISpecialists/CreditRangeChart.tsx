// Vertical range-bar chart for Credit Usage Over Time.
// For each day bucket, renders a rounded pill from min credits to max credits
// observed across execution records that day. Uses Alloy design tokens.
// Measures its own container width so the SVG renders 1:1 without stretching.
// Hover on a bar to see a tooltip with the exact range.

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface CreditRangePoint {
  label: string;
  /** Min credits used on this day (across all runs). */
  min: number;
  /** Max credits used on this day (across all runs). */
  max: number;
  /** Number of runs on this day. */
  count: number;
  hasData: boolean;
}

interface CreditRangeChartProps {
  data: CreditRangePoint[];
  /** Optional chart height in px. Defaults to 220. */
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

const RangeBar = styled.line<{ $dimmed?: boolean }>`
  stroke: var(--Alloy-blue-500, #446cff);
  stroke-width: 8;
  stroke-linecap: round;
  opacity: ${p => p.$dimmed ? 0.45 : 1};
  transition: opacity 120ms ease;
`;

// Invisible wider hit area so hover/pointer activation is easy.
const HitArea = styled.rect`
  fill: transparent;
  cursor: pointer;
`;

const Tooltip = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  left: ${p => p.$x}px;
  top: ${p => p.$y}px;
  transform: translate(-50%, calc(-100% - 8px));
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
  if (n >= 10_000) return `${(n / 1_000).toFixed(1)}k`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(2)}k`;
  return n.toLocaleString('en-US');
}

function niceRound(v: number): number {
  if (v === 0) return 0;
  // Round up to the nearest "nice" number for axis ticks.
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  const normalized = v / mag;
  let nice: number;
  if (normalized <= 1) nice = 1;
  else if (normalized <= 2) nice = 2;
  else if (normalized <= 2.5) nice = 2.5;
  else if (normalized <= 5) nice = 5;
  else nice = 10;
  return nice * mag;
}

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

  const padL = 52;
  const padR = 16;
  const padT = 12;
  const padB = 32;
  const innerW = Math.max(width - padL - padR, 1);
  const innerH = height - padT - padB;

  const hasAny = data.some(d => d.hasData);
  const maxVal = hasAny ? Math.max(...data.filter(d => d.hasData).map(d => d.max)) : 0;
  // Add ~15% headroom, then round to a nice axis max.
  const niceMax = maxVal > 0 ? niceRound(maxVal * 1.15) : 10;

  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (niceMax * i) / tickCount);

  const yFor = (v: number) => padT + innerH - (v / niceMax) * innerH;
  const xFor = (i: number) => padL + innerW * ((i + 0.5) / data.length);
  const bandWidth = data.length > 0 ? innerW / data.length : innerW;

  const hovered = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <ChartWrap ref={wrapRef} $height={height}>
      <ChartSvg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Y-axis gridlines + credit labels */}
        {ticks.map((t, i) => (
          <g key={i}>
            <GridLine x1={padL} x2={width - padR} y1={yFor(t)} y2={yFor(t)} />
            <AxisLabel x={padL - 8} y={yFor(t) + 4} textAnchor="end">
              {fmtCredits(t)}
            </AxisLabel>
          </g>
        ))}

        {/* Range bars */}
        {data.map((d, i) => {
          if (!d.hasData) return null;
          const yTop = yFor(d.max);
          const yBot = d.min === d.max ? yTop + 8 : yFor(d.min);
          const dimmed = hoverIndex !== null && hoverIndex !== i;
          return <RangeBar key={`bar-${i}`} x1={xFor(i)} x2={xFor(i)} y1={yTop} y2={yBot} $dimmed={dimmed} />;
        })}

        {/* Hit areas for hover (per day band, full chart height) */}
        {data.map((d, i) => (
          <HitArea
            key={`hit-${i}`}
            x={xFor(i) - bandWidth / 2}
            y={padT}
            width={bandWidth}
            height={innerH}
            onMouseEnter={() => d.hasData && setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}

        {/* X-axis day labels */}
        {data.map((d, i) => (
          <AxisLabel key={`xl-${i}`} x={xFor(i)} y={height - padB + 18} textAnchor="middle">
            {d.label}
          </AxisLabel>
        ))}
      </ChartSvg>

      {/* Tooltip */}
      {hovered && hoverIndex !== null && hovered.hasData && (
        <Tooltip $x={xFor(hoverIndex)} $y={yFor(hovered.max)}>
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
