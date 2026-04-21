// Specialist Usage content — aggregated view across all personas.
// Rendered inside the top-level UsagePage as the "Specialists" tab content.
// Metrics structure mirrors the single-persona usage section.

import { useState, useMemo } from 'react';
import styled from 'styled-components';
import {
  SegmentedControl,
  SelectField,
  DataCard,
  ValueChangeLabel,
  Eyebrow,
} from 'alloy-design-system';
import { SpecialistActivityTable } from '../../../components/AISpecialists/SpecialistActivityTable';
import { CreditRangeChart } from '../../../components/AISpecialists/CreditRangeChart';
import {
  MOCK_EXECUTIONS,
  PERSONA_USAGE_META,
  CREDIT_COST_RATE,
  MONTHLY_CREDIT_ALLOCATION,
  MOCK_NOW,
  WORKFLOWS,
  getWindow,
  getPriorWindow,
  filterByWindow,
  pctChange,
  countGoalsAchieved,
  countGoalsTotal,
} from '../../../data/mockExecutions';
import type { TimeRange, ExecutionRecord, EngagelessExecution, EngageExecution } from '../../../data/mockExecutions';

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
}

function fmtPct(n: number): string {
  return `${Math.round(n)}%`;
}

// Map a per-day activation count to a 0–4 heatmap intensity bucket based
// on its ratio against the window's max (quarter thresholds).
function heatmapLevel(count: number, maxCount: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  const ratio = count / Math.max(1, maxCount);
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

// Interpolate the Alloy AI gradient (purple → blue) at a 0–100% stop.
// Used to slice the gradient across outcome-bar segments so each segment
// shows the portion of the gradient that matches its position along the
// whole bar, keeping the appearance of one continuous gradient.
function aiGradientColorAt(pct: number): string {
  const clamped = Math.max(0, Math.min(100, pct)) / 100;
  const r = Math.round(140 + (68 - 140) * clamped);
  const g = Math.round(79 + (108 - 79) * clamped);
  const b = Math.round(226 + (255 - 226) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

function fmtCost(dollars: number): string {
  if (dollars < 0.01) return '$0.00';
  return `$${dollars.toFixed(2)}`;
}

// Daily buckets for 24h/7d/30d; monthly for 'all' (a year of daily
// columns is too dense, so we roll up to ~12 month columns).
type Bucket = 'day' | 'month';

function bucketFor(range: TimeRange): Bucket {
  return range === 'all' ? 'month' : 'day';
}

function bucketKey(date: Date, bucket: Bucket): string {
  return bucket === 'month'
    ? date.toISOString().slice(0, 7)
    : date.toISOString().slice(0, 10);
}

function bucketLabel(date: Date, bucket: Bucket): string {
  return bucket === 'month'
    ? date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
    : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function eachBucketInRange(from: Date, to: Date, bucket: Bucket): Date[] {
  const out: Date[] = [];
  const cur = new Date(from);
  const end = new Date(to);
  if (bucket === 'month') {
    cur.setUTCDate(1);
    cur.setUTCHours(0, 0, 0, 0);
    end.setUTCDate(1);
    end.setUTCHours(0, 0, 0, 0);
    while (cur <= end) {
      out.push(new Date(cur));
      cur.setUTCMonth(cur.getUTCMonth() + 1);
    }
  } else {
    cur.setUTCHours(0, 0, 0, 0);
    end.setUTCHours(0, 0, 0, 0);
    while (cur <= end) {
      out.push(new Date(cur));
      cur.setUTCDate(cur.getUTCDate() + 1);
    }
  }
  return out;
}

function fmtDelta(delta: number | null, invertDirection: boolean): {
  label: string;
  color: string;
} | null {
  if (delta === null || Math.abs(delta) < 0.5) return null;
  const isUp = delta > 0;
  const isPositive = invertDirection ? !isUp : isUp;
  const arrow = isUp ? '↑' : '↓';
  const sign = isUp ? '+' : '';
  return {
    label: `${sign}${Math.abs(delta).toFixed(1)}% ${arrow}`,
    color: isPositive
      ? 'var(--color-success, #16a34a)'
      : 'var(--color-error, #dc2626)',
  };
}

interface ChangeProps {
  current: number;
  prior: number;
  invertDirection?: boolean;
}

function Change({ current, prior, invertDirection = false }: ChangeProps) {
  const delta = pctChange(current, prior);
  if (delta === null) return null;
  const isUp = delta > 0;
  const trend = isUp ? 'up' as const : 'down' as const;
  const isPositive = invertDirection ? !isUp : isUp;
  const severity = Math.abs(delta) < 0.5
    ? undefined
    : isPositive ? 'positive' as const : 'negative' as const;
  const label = `${delta > 0 ? '+' : ''}${Math.abs(delta).toFixed(1)}%`;
  return <ValueChangeLabel mode="trend" value={label} trend={trend} severity={severity} />;
}

// ── Styled primitives ────────────────────────────────────────────────────────

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
`;

// ── Credit-card inner layout ─────────────────────────────────────────────────

const CreditStatBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`;

const CreditStatRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

// Hero credit card — period label, big number, MoM delta, credit usage bar.
// Always scoped to the current calendar month.
// Typography leans on Alloy tokens (.heading-lg, .paragraph-sm, <Eyebrow>)
// and semantic color tokens so the card sits correctly alongside DataCard.
const HeroCreditCard = styled.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: var(--color-bg-primary);
`;

// Big hero number — Alloy heading-xl sizing (40px / --text-4-5xl) applied
// via the raw token because the typography utility classes aren't loaded
// globally in this app. Medium weight for display prominence.
const HeroValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;

const HeroCompareValue = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`;

const CreditBarLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`;

// Tally-stripe treatment — the bar looks like a row of thin vertical
// tick marks instead of a solid fill. Implemented as a repeating mask of
// card-colored "gaps" on top of a single background (grey for the track,
// AI gradient for the fill). Both layers use the same stripe period so
// ticks line up seamlessly between the used and remaining regions.
const STRIPE_PERIOD = 3;  // px (2px tick + 1px gap)
const STRIPE_MASK = `repeating-linear-gradient(
  to right,
  transparent 0,
  transparent 2px,
  var(--color-bg-primary, #fff) 2px,
  var(--color-bg-primary, #fff) ${STRIPE_PERIOD}px
)`;

const CreditBarTrack = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  /* Pull the bar up so the gap between the used/remaining labels and
     the track reads as 8px instead of the card's default 12px flex gap. */
  margin-top: -4px;
  background: ${STRIPE_MASK}, var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`;

const CreditBarFill = styled.div<{ $pct: number }>`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${p => p.$pct}%;
  background: ${STRIPE_MASK},
    var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%));
  border-radius: inherit;
`;

// ── Dashboard 2×2 grid — four equal-width cards ──────────────────────────────
// Row 1: Credit Usage hero | Credit Usage Over Time
// Row 2: Goals by Outcome  | Specialist Activations (heatmap)
// align-items: stretch keeps the two cards in a row equal height.

const ChartGrid = styled.div`
  display: grid;
  /* minmax(0, 1fr) prevents columns from being expanded by wide chart
     content (default 1fr has a min of auto, which respects content size). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

// Chart-card hero stat block (sits between the title and the chart body).
// Matches the Alloy DataCard hierarchy: big number (heading-lg) + small
// label (paragraph-sm) + ValueChangeLabel for trend.
const ChartHeroBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-wrap: wrap;
`;

const ChartHeroValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl, matches HeroValue */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;

const ChartHeroLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);  /* 12px — Alloy paragraph-sm */
  color: var(--color-content-tertiary);
`;

// Legend shared by the outcome ratio bar — dot + label + count rows.
const DonutLegend = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  flex: 1;
  min-width: 140px;
`;

const DonutLegendRow = styled.li`
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: var(--space-2, 8px);
  align-items: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`;

const DonutLegendDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${p => p.$color};
`;

const DonutLegendValue = styled.span`
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

// ── Outcome ratio bar — replaces the donut with a stacked horizontal bar ─────
// Segments are proportional to value; each uses the same palette as the
// tooltip. `flex: 1` lets the bar grow to fill whatever vertical space is
// left in the card after the title/hero above, matching the visual weight
// of the Credit Usage card in the same row.
const OutcomeBarTrack = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* No fixed/min height — the bar grows to fill whatever space the card
     has left after the title + hero. Since the Goals card shares a row
     with Current Session (align-items: stretch), the bar ends up sized
     to match whatever vertical room the left card leaves behind. */
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  /* Grey track — gaps between segments show this so the three
     outcome slices read as distinct chunks. */
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`;

// Each segment carries its own slice of the AI gradient via
// $gradientStart / $gradientEnd props (computed from the segment's
// cumulative left-offset vs. total). Rendered together, the three
// segments form one continuous purple→blue ramp with visible gaps.
// $muted drops the opacity so non-success outcomes read as secondary.
const OutcomeBarSegment = styled.div<{
  $pct: number;
  $color: string;
  $gradientStart: string;
  $gradientEnd: string;
  $muted?: boolean;
}>`
  width: ${p => p.$pct}%;
  background: linear-gradient(to right, ${p => p.$gradientStart}, ${p => p.$gradientEnd});
  border-radius: 2px;
  opacity: ${p => (p.$muted ? 0.2 : 1)};
  transition: background 120ms ease, opacity 120ms ease, width 150ms ease;
  cursor: default;
  /* Hover: segment transforms to its labeled outcome color
     (green = achieved, slate = no action, blue = in progress) and
     pops back to full opacity. */
  &:hover {
    background: ${p => p.$color};
    opacity: 1;
  }
`;

// Alloy chart-tooltip treatment — dark pill, follows the cursor, fixed
// positioned so it floats above everything. Mirrors the CSS in
// alloy-design-system/src/components/Charts/DonutChart.module.css.
const ChartTooltip = styled.div`
  position: fixed;
  z-index: var(--z-tooltip, 999);
  background: var(--color-bg-always-dark, #0f172a);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-2, 8px) var(--space-3, 12px);
  box-shadow: var(--shadow-below-md, 0 6px 16px rgba(0, 0, 0, 0.18));
  pointer-events: none;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transform: translate(-50%, calc(-100% - 10px));
  font-family: var(--font-sans);
`;

const ChartTooltipLabel = styled.span`
  font-size: var(--text-xs, 12px);
  color: rgba(255, 255, 255, 0.65);
`;

const ChartTooltipValueRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-bg-always-light, #fff);
`;

const ChartTooltipDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$color};
`;

// Big success-rate number above the bar — matches the Credit Usage card's
// HeroValue (Alloy heading-xl / 40px) so the two hero stats read as peers.
const OutcomeHeroValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);  /* 40px — Alloy heading-xl */
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;

const OutcomeHeroLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

// ── GitHub-style activation heatmap ──────────────────────────────────────────
// Five intensity levels keyed off a normalized ratio of count / maxCount.
// Levels 1–4 use the Alloy AI gradient (purple → blue, same as the Credit
// Usage bar) with increasing opacity so the scale reads as a continuous
// AI-branded ramp instead of a single flat accent color.
const HEATMAP_LEVEL_BG = [
  'var(--color-bg-tertiary, #f1f2f4)',
  'linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))',
  'linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))',
  'linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))',
  'var(--gradient-ai, linear-gradient(to right, #8c4fe2 0%, #446cff 100%))',
] as const;

const HeatmapSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

// Row that wraps the heatmap grid, anchors it to the right edge, and
// clips any overflow off the left. When the grid ends up wider than the
// card (lots of historical weeks), only the most recent columns stay
// visible and older ones disappear past the left edge — no horizontal
// scroll, cells stay fixed-size.
const HeatmapGridWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`;

// Fixed-size 14px squares arranged as 7 rows per column. The wrap above
// controls how much of the grid is visible — cells never stretch.
const HeatmapGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`;

// Every cell renders at its real intensity — the heatmap shows the full
// history so the rightmost (newest) cells tell the at-a-glance recency
// story. No in-range gating: cells don't disappear just because they
// fall outside the table's global time-range filter.
const HeatmapCell = styled.div<{ $level: 0 | 1 | 2 | 3 | 4 }>`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${p => HEATMAP_LEVEL_BG[p.$level]};
  transition: background 120ms ease;
`;

const HeatmapLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: flex-end;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 12px);
  color: var(--color-content-tertiary);
  margin-top: var(--space-2, 8px);
`;

const HeatmapLegendSquare = styled.span<{ $level: 0 | 1 | 2 | 3 | 4 }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${p => HEATMAP_LEVEL_BG[p.$level]};
`;

const DualValueCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DualLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;

const DualValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

const ChartColumns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
  gap: var(--space-5, 20px);
  align-items: stretch;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div<{ $secondary?: boolean }>`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  /* $secondary cards use the Alloy recessed surface token for a
     subtle tonal break from the default white cards around them. */
  background: ${p =>
    p.$secondary
      ? 'var(--color-bg-secondary, #f6f7f9)'
      : 'var(--color-bg-primary, #fff)'};
`;

const ChartTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);
`;

const ChartSubtitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`;

const GoalPanel = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const GoalMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-4, 16px) var(--space-5, 20px);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  }
`;

const MetricLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;

const MetricValueRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2, 8px);
`;

const MetricValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-content-primary, #151515);
`;

const MetricDelta = styled.span<{ $color: string }>`
  font-size: 12px;
  font-weight: 500;
  color: ${p => p.$color};
`;

const RadialWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-4, 16px) var(--space-5, 20px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`;

const RadialSvg = styled.svg`
  flex-shrink: 0;
`;

const RadialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ActivitiesHeading = styled.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

const FilterBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`;

/* Right-aligned child inside the activities filter bar — used to pin
   the time-range segmented control to the end of the row. */
const FilterBarSpacer = styled.div`
  margin-left: auto;
`;

// Row inside the Credit Usage Over Time card that pairs the title/subtitle
// block on the left with the time-range segmented control on the right.
const ChartCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;

// Stat-card badge treatment — soft AI-gradient wash on the background, full
// AI-gradient stroke on the icon (via the <StatBadgeGradientDefs /> SVG).
const GradientBadgeDataCard = styled(DataCard)<{ $variant?: 'ai' }>`
  & > div[aria-hidden='true'] {
    background: linear-gradient(
      to right,
      rgba(140, 79, 226, 0.16),
      rgba(68, 108, 255, 0.16)
    );
    color: transparent;
  }
  & > div[aria-hidden='true'] svg path,
  & > div[aria-hidden='true'] svg circle,
  & > div[aria-hidden='true'] svg rect {
    stroke: url(#ai-gradient-stroke);
  }
`;

/** Hidden SVG def providing the AI gradient for `stroke: url(#...)` refs. */
function StatBadgeGradientDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ai-gradient-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8c4fe2" />
          <stop offset="100%" stopColor="#446cff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Filter option builders ───────────────────────────────────────────────────

const SPECIALIST_TYPE_OPTIONS = [
  { value: 'all',         label: 'All Types'    },
  { value: 'engage',      label: 'Engage'       },
  { value: 'engage_less', label: 'Engage-less'  },
];

const WORKFLOW_OPTIONS = [
  { value: 'all', label: 'All Workflows' },
  ...WORKFLOWS.map(w => ({ value: w.id, label: w.name })),
];

const OUTCOME_OPTIONS = [
  { value: 'all',         label: 'All Outcomes' },
  { value: 'success',     label: 'Success'      },
  { value: 'in_progress', label: 'In Progress'  },
];

const ACTIVATION_OPTIONS = [
  { value: 'all',      label: 'All Sources' },
  { value: 'workflow', label: 'Workflow'     },
  { value: 'ponder',   label: 'Ponder'      },
];

// ── Component ────────────────────────────────────────────────────────────────

interface BarTooltipState {
  x: number;
  y: number;
  label: string;
  value: number;
  color: string;
}

export function SpecialistUsageContent() {
  // Each chart card owns its own time-range state so the segmented
  // control on one card doesn't reach across and change others.
  //  - `creditChartRange` — Credit Usage Over Time card
  //  - `goalsRange` — Goals by Outcome card
  //  - `timeRange` — drives the Activities table (and Specialist
  //    Activations stats/heatmap default). Controlled via a segmented
  //    selector inline with the Activities filter bar.
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [creditChartRange, setCreditChartRange] = useState<TimeRange>('7d');
  const [goalsRange, setGoalsRange] = useState<TimeRange>('7d');
  const [typeFilter, setTypeFilter] = useState('all');
  const [workflowFilter, setWorkflowFilter] = useState('all');
  const [outcomeFilter, setOutcomeFilter] = useState('all');
  const [activationFilter, setActivationFilter] = useState('all');
  const [outcomeTooltip, setOutcomeTooltip] = useState<BarTooltipState | null>(null);
  const [heatmapTooltip, setHeatmapTooltip] = useState<BarTooltipState | null>(null);

  // Central filtered records — drives all child components
  const filteredRecords = useMemo<ExecutionRecord[]>(() => {
    return MOCK_EXECUTIONS.filter(r => {
      if (typeFilter !== 'all' && r.deploymentType !== typeFilter) return false;
      if (workflowFilter !== 'all' && r.workflow.id !== workflowFilter) return false;
      if (activationFilter !== 'all' && r.activatedBy !== activationFilter) return false;
      if (outcomeFilter !== 'all') {
        if (r.deploymentType === 'engage_less') {
          const el = r as EngagelessExecution;
          if (outcomeFilter === 'success' && el.status !== 'success') return false;
          if (outcomeFilter === 'in_progress' && el.status !== 'in_progress') return false;
        } else {
          const eg = r as EngageExecution;
          if (outcomeFilter === 'success' && !eg.conversations.some(c => c.outcome === 'goal_achieved')) return false;
          if (outcomeFilter === 'in_progress') {
            const hasGoal = eg.conversations.some(c => c.outcome === 'goal_achieved');
            const hasInProgress = eg.conversations.some(c => c.outcome === 'in_progress');
            if (hasGoal || !hasInProgress) return false;
          }
        }
      }
      return true;
    });
  }, [typeFilter, workflowFilter, outcomeFilter, activationFilter]);

  const currentWindow = getWindow(timeRange);
  const priorWindow = getPriorWindow(timeRange);
  const currentRecords = useMemo(() => filterByWindow(filteredRecords, currentWindow), [filteredRecords, timeRange]);
  const priorRecords = useMemo(() => filterByWindow(filteredRecords, priorWindow), [filteredRecords, timeRange]);

  // Per-card windows + records so each chart card can move independently.
  const creditChartWindow = getWindow(creditChartRange);
  const creditChartRecords = useMemo(
    () => filterByWindow(filteredRecords, creditChartWindow),
    [filteredRecords, creditChartRange],
  );
  const goalsWindow = getWindow(goalsRange);
  const goalsPriorWindow = getPriorWindow(goalsRange);
  const goalsRecords = useMemo(
    () => filterByWindow(filteredRecords, goalsWindow),
    [filteredRecords, goalsRange],
  );
  const goalsPriorRecords = useMemo(
    () => filterByWindow(filteredRecords, goalsPriorWindow),
    [filteredRecords, goalsRange],
  );

  // ── Specialist Activated% (aggregate across all personas) ─────────────────
  // The Specialist Activations card always uses a fixed 7-day window for
  // its hero stat so the Activities filter bar's segmented control can't
  // change the card's numbers or heatmap. (Only the Activities table
  // follows `timeRange`.)
  const SPECIALIST_STAT_PERIOD: TimeRange = '7d';
  const metaRecords = PERSONA_USAGE_META.filter(m => m.period === SPECIALIST_STAT_PERIOD);
  const priorMetaRecords = PERSONA_USAGE_META.filter(m => m.period === `prior_${SPECIALIST_STAT_PERIOD}`);

  const totalTriggersReceived = metaRecords.reduce((s, m) => s + m.triggersReceived, 0);
  const totalTriggersExecuted = metaRecords.reduce((s, m) => s + m.triggersExecuted, 0);
  const priorTriggersReceived = priorMetaRecords.reduce((s, m) => s + m.triggersReceived, 0);
  const priorTriggersExecuted = priorMetaRecords.reduce((s, m) => s + m.triggersExecuted, 0);

  const activatedPct = totalTriggersReceived > 0
    ? (totalTriggersExecuted / totalTriggersReceived) * 100 : 0;
  const priorActivatedPct = priorTriggersReceived > 0
    ? (priorTriggersExecuted / priorTriggersReceived) * 100 : 0;

  // ── Goal Achieved ─────────────────────────────────────────────────────────
  // Goals card stats — scoped to the Goals card's own time range.
  const resolvedCurrent = countGoalsAchieved(goalsRecords);
  const resolvedPrior = countGoalsAchieved(goalsPriorRecords);
  const totalCurrent = countGoalsTotal(goalsRecords);
  const totalPrior = countGoalsTotal(goalsPriorRecords);

  // ── Ponder Chats & Messages ───────────────────────────────────────────────
  const ponderChats = currentRecords.filter(r =>
    r.steps.some(s => s.toolCategory === 'communication' && s.channel === 'chat'),
  ).length;
  const ponderMessages = currentRecords.filter(r =>
    r.steps.some(s => s.toolCategory === 'communication' && (s.channel === 'email' || s.channel === 'sms')),
  ).length;
  const priorPonderChats = priorRecords.filter(r =>
    r.steps.some(s => s.toolCategory === 'communication' && s.channel === 'chat'),
  ).length;
  const priorPonderMessages = priorRecords.filter(r =>
    r.steps.some(s => s.toolCategory === 'communication' && (s.channel === 'email' || s.channel === 'sms')),
  ).length;

  // ── Credit Used ───────────────────────────────────────────────────────────
  const totalCredits = currentRecords.reduce((s, r) => s + r.creditsUsed, 0);
  const priorTotalCredits = priorRecords.reduce((s, r) => s + r.creditsUsed, 0);

  // ── Monthly credit hero (fixed to current calendar month) ─────────────────
  // Scoped to the current calendar month, not the selected time range —
  // the hero card always reports against the monthly allocation regardless
  // of the 24h/7d/30d/All selector below. Also computes prior-month total
  // so we can surface MoM delta as a badge.
  const monthlyBar = useMemo(() => {
    const monthStart = new Date(Date.UTC(MOCK_NOW.getUTCFullYear(), MOCK_NOW.getUTCMonth(), 1));
    const nextMonthStart = new Date(Date.UTC(MOCK_NOW.getUTCFullYear(), MOCK_NOW.getUTCMonth() + 1, 1));
    const priorMonthStart = new Date(Date.UTC(MOCK_NOW.getUTCFullYear(), MOCK_NOW.getUTCMonth() - 1, 1));
    const sumInRange = (from: Date, to: Date) =>
      MOCK_EXECUTIONS.reduce((sum, r) => {
        const t = new Date(r.timestamp).getTime();
        return t >= from.getTime() && t < to.getTime() ? sum + r.creditsUsed : sum;
      }, 0);
    const used = sumInRange(monthStart, nextMonthStart);
    const priorUsed = sumInRange(priorMonthStart, monthStart);
    const remaining = Math.max(0, MONTHLY_CREDIT_ALLOCATION - used);
    const pct = Math.min(100, (used / MONTHLY_CREDIT_ALLOCATION) * 100);
    const label = monthStart
      .toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
      .toUpperCase();
    const momDelta = priorUsed > 0 ? ((used - priorUsed) / priorUsed) * 100 : 0;

    // Time remaining until the session (calendar month) resets — used in
    // the card subtitle. Normalized to days, or hours when less than a day.
    const msToReset = nextMonthStart.getTime() - MOCK_NOW.getTime();
    const days = Math.floor(msToReset / 86_400_000);
    const hours = Math.floor(msToReset / 3_600_000);
    const resetsIn =
      days >= 1 ? `${days} day${days === 1 ? '' : 's'}`
      : hours >= 1 ? `${hours} hour${hours === 1 ? '' : 's'}`
      : 'less than an hour';

    return { used, priorUsed, remaining, pct, label, momDelta, resetsIn };
  }, []);

  // ── Heatmap data for Specialist Activations ──────────────────────────────
  // Anchored to MOCK_NOW and a fixed 52-week history — completely
  // independent of `timeRange` so the Activities filter bar's segmented
  // control can't shift or recolor the heatmap. Counts come from the
  // full MOCK_EXECUTIONS dataset (not the time-windowed subset) for the
  // same reason.
  const activationsHeatmap = useMemo(() => {
    const MIN_WEEKS = 52;

    const counts: Record<string, number> = {};
    for (const r of MOCK_EXECUTIONS) {
      const key = new Date(r.timestamp).toISOString().slice(0, 10);
      counts[key] = (counts[key] ?? 0) + 1;
    }

    // End always MOCK_NOW, aligned forward to Saturday so each column is
    // a full week.
    const endAligned = new Date(MOCK_NOW);
    endAligned.setUTCHours(0, 0, 0, 0);
    endAligned.setUTCDate(endAligned.getUTCDate() + (6 - endAligned.getUTCDay()));

    // Start MIN_WEEKS back from endAligned, landing on a Sunday.
    const start = new Date(endAligned);
    start.setUTCDate(start.getUTCDate() - (MIN_WEEKS * 7 - 1));

    const days: Array<{ date: Date; iso: string; count: number; inRange: boolean }> = [];
    const cur = new Date(start);
    while (cur <= endAligned) {
      const iso = cur.toISOString().slice(0, 10);
      const count = counts[iso] ?? 0;
      days.push({ date: new Date(cur), iso, count, inRange: true });
      cur.setUTCDate(cur.getUTCDate() + 1);
    }
    const weeks: typeof days[] = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
    const maxCount = Math.max(1, ...days.map(d => d.count));
    return { weeks, maxCount };
  }, []);

  // ── Tier 2 / Activations Per Day (bar chart) ──────────────────────────────
  const activationsPerDay = useMemo(() => {
    const bucket = bucketFor(timeRange);
    const countsByBucket: Record<string, number> = {};
    for (const r of currentRecords) {
      const k = bucketKey(new Date(r.timestamp), bucket);
      countsByBucket[k] = (countsByBucket[k] ?? 0) + 1;
    }
    const buckets = eachBucketInRange(currentWindow.from, currentWindow.to, bucket);
    const labels = buckets.map(d => bucketLabel(d, bucket));
    const data = buckets.map(d => countsByBucket[bucketKey(d, bucket)] ?? 0);
    const activeBuckets = data.filter(n => n > 0).length;
    const total = data.reduce((s, n) => s + n, 0);
    const avgPerDay = activeBuckets > 0 ? total / activeBuckets : 0;
    return { labels, data, total, avgPerDay };
  }, [currentRecords, timeRange]);

  // ── Tier 2 / Goals by Outcome (donut chart) ───────────────────────────────
  const goalsByOutcome = useMemo(() => {
    let achieved = 0;
    let completedNoAction = 0;
    let inProgress = 0;
    for (const r of goalsRecords) {
      if (r.deploymentType === 'engage') {
        for (const c of r.conversations) {
          if (c.outcome === 'goal_achieved') achieved++;
          else if (c.outcome === 'completed_no_action') completedNoAction++;
          else if (c.outcome === 'in_progress') inProgress++;
        }
      } else {
        if (r.status === 'success') achieved++;
        else if (r.status === 'incomplete') completedNoAction++;
        else if (r.status === 'in_progress') inProgress++;
      }
    }
    const total = achieved + completedNoAction + inProgress;
    return { achieved, completedNoAction, inProgress, total };
  }, [goalsRecords]);

  // ── Tier 2 / Credit Usage Over Time (min/max bar-range chart) ─────────────
  // Scoped to the Credit Usage card's own time range (creditChartRange).
  const { rangeData, activeDays } = useMemo(() => {
    const bucket = bucketFor(creditChartRange);
    const creditsByBucket: Record<string, number[]> = {};
    for (const r of creditChartRecords) {
      const k = bucketKey(new Date(r.timestamp), bucket);
      if (!creditsByBucket[k]) creditsByBucket[k] = [];
      creditsByBucket[k].push(r.creditsUsed);
    }
    const buckets = eachBucketInRange(creditChartWindow.from, creditChartWindow.to, bucket);
    const rangeData = buckets.map(d => {
      const k = bucketKey(d, bucket);
      const values = creditsByBucket[k] ?? [];
      if (values.length === 0) return { label: bucketLabel(d, bucket), min: 0, max: 0, count: 0, hasData: false };
      return {
        label: bucketLabel(d, bucket),
        min: Math.min(...values),
        max: Math.max(...values),
        count: values.length,
        hasData: true,
      };
    });
    const activeDays = rangeData.filter(d => d.hasData).length;
    // For the 'all' view, the 1-year window produces mostly empty months.
    // Trim leading/trailing empty buckets so the x-axis focuses on months
    // that actually have activity instead of a flat $0 year with one bar.
    if (creditChartRange === 'all' && activeDays > 0) {
      const first = rangeData.findIndex(d => d.hasData);
      const last = rangeData.length - 1 - [...rangeData].reverse().findIndex(d => d.hasData);
      return { rangeData: rangeData.slice(first, last + 1), activeDays };
    }
    return { rangeData, activeDays };
  }, [creditChartRecords, creditChartRange]);

  // ── Goal Success Rate ─────────────────────────────────────────────────────
  const goalSuccessRate = totalCurrent > 0 ? (resolvedCurrent / totalCurrent) * 100 : 0;
  const priorGoalSuccessRate = totalPrior > 0 ? (resolvedPrior / totalPrior) * 100 : 0;

  // ── Goal Value ────────────────────────────────────────────────────────────
  const goalValue = totalCredits > 0 ? resolvedCurrent / (totalCredits / 1000) : null;
  const priorGoalValue = priorTotalCredits > 0 ? resolvedPrior / (priorTotalCredits / 1000) : null;


  // ── Right column metrics ──────────────────────────────────────────────────
  const creditsPerGoal = resolvedCurrent > 0 ? totalCredits / resolvedCurrent : null;
  const priorCreditsPerGoal = resolvedPrior > 0 ? priorTotalCredits / resolvedPrior : null;
  const estimatedCost = (totalCredits / 1_000_000) * CREDIT_COST_RATE;
  const priorEstimatedCost = (priorTotalCredits / 1_000_000) * CREDIT_COST_RATE;

  return (
    <ContentWrapper>
      <StatBadgeGradientDefs />

      {/* ══════════ DASHBOARD 2×2 GRID ══════════
           Row 1: Credit Usage (hero + bar) | Credit Usage Over Time
           Row 2: Goals by Outcome          | Specialist Activations (heatmap) */}
      <ChartGrid>

        {/* Row 1, Left — Credit Usage hero (current calendar month) */}
        <HeroCreditCard>
          <CreditStatBlock>
            {/* Title + subtitle grouped in an unstyled wrapper so they sit
                tight against each other (like ChartCardHeader does in the
                other chart cards). CreditStatBlock's gap then only applies
                between this header group and the HeroValue below. */}
            <div>
              <ChartTitle>Current Session</ChartTitle>
              <ChartSubtitle>Resets in {monthlyBar.resetsIn}</ChartSubtitle>
            </div>
            {/* Hero row — percentage on the left, MoM delta + compare
                text inline to the right so the card uses one tight line
                for the headline stat instead of stacking two. */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3, 12px)', flexWrap: 'wrap' }}>
              <HeroValue>{fmtPct(monthlyBar.pct)}</HeroValue>
              <CreditStatRow>
                {/* Credits used going UP is a regression — flip severity so
                    an increase reads "negative" (red). */}
                <ValueChangeLabel
                  mode="trend"
                  value={`${monthlyBar.momDelta >= 0 ? '+' : ''}${monthlyBar.momDelta.toFixed(1)}%`}
                  trend={monthlyBar.momDelta >= 0 ? 'up' : 'down'}
                  severity={
                    Math.abs(monthlyBar.momDelta) < 0.05
                      ? undefined
                      : monthlyBar.momDelta >= 0
                        ? 'negative'
                        : 'positive'
                  }
                />
                <span>
                  {monthlyBar.momDelta >= 0 ? 'than' : 'less than'} last month:{' '}
                  <HeroCompareValue>{monthlyBar.priorUsed.toLocaleString('en-US')}</HeroCompareValue>
                </span>
              </CreditStatRow>
            </div>
          </CreditStatBlock>
          <CreditBarLabels>
            <span>{monthlyBar.used.toLocaleString('en-US')} used</span>
            <span>{monthlyBar.remaining.toLocaleString('en-US')} remaining</span>
          </CreditBarLabels>
          <CreditBarTrack
            role="progressbar"
            aria-label={`Monthly credit usage for ${monthlyBar.label}`}
            aria-valuemin={0}
            aria-valuemax={MONTHLY_CREDIT_ALLOCATION}
            aria-valuenow={monthlyBar.used}
          >
            <CreditBarFill $pct={monthlyBar.pct} />
          </CreditBarTrack>
        </HeroCreditCard>

        {/* Row 1, Right — Goals by Outcome (stacked ratio bar + tooltip) */}
        <ChartCard $secondary>
          <ChartCardHeader>
            <div>
              <ChartTitle>Success Rate</ChartTitle>
              <ChartSubtitle>Breakdown by Achieved, Completed No Action, and In Progress</ChartSubtitle>
            </div>
            <SegmentedControl
              value={goalsRange}
              onChange={(v: string) => setGoalsRange(v as TimeRange)}
              size="sm"
            >
              <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
              <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
              <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
              <SegmentedControl.Item value="all">All</SegmentedControl.Item>
            </SegmentedControl>
          </ChartCardHeader>
          {goalsByOutcome.total === 0 ? (
            <EmptyState>No goals in this period</EmptyState>
          ) : (() => {
            // Each segment owns a slice of the AI gradient based on its
            // cumulative left offset / right edge as a % of the whole bar.
            // Hover swaps in the StatusTag outcome color (green/slate/blue).
            const achievedPct = (goalsByOutcome.achieved / goalsByOutcome.total) * 100;
            const cnaPct = (goalsByOutcome.completedNoAction / goalsByOutcome.total) * 100;
            const ipPct = (goalsByOutcome.inProgress / goalsByOutcome.total) * 100;
            const segments = [
              {
                label: 'Goal Achieved',
                value: goalsByOutcome.achieved,
                color: 'var(--Alloy-green-500)',
                pct: achievedPct,
                startPct: 0,
                endPct: achievedPct,
                muted: false,
              },
              {
                label: 'Completed No Action',
                value: goalsByOutcome.completedNoAction,
                color: 'var(--Alloy-slate-400, #9ca3af)',
                pct: cnaPct,
                startPct: achievedPct,
                endPct: achievedPct + cnaPct,
                muted: true,
              },
              {
                label: 'In Progress',
                value: goalsByOutcome.inProgress,
                color: 'var(--Alloy-blue-500, #446cff)',
                pct: ipPct,
                startPct: achievedPct + cnaPct,
                endPct: achievedPct + cnaPct + ipPct,
                muted: true,
              },
            ];
            return (
              <>
                <ChartHeroBlock>
                  <OutcomeHeroValue>{fmtPct(goalSuccessRate)}</OutcomeHeroValue>
                  {/* Delta vs. prior equivalent period. A rising success
                      rate is positive — use the default Change helper
                      (no inverted direction). */}
                  <Change current={goalSuccessRate} prior={priorGoalSuccessRate} />
                </ChartHeroBlock>
                <OutcomeBarTrack
                  role="img"
                  aria-label={`Goals by outcome: ${goalsByOutcome.achieved} achieved, ${goalsByOutcome.completedNoAction} completed with no action, ${goalsByOutcome.inProgress} in progress`}
                  onMouseLeave={() => setOutcomeTooltip(null)}
                >
                  {segments.map((seg) => (
                    <OutcomeBarSegment
                      key={seg.label}
                      $pct={seg.pct}
                      $color={seg.color}
                      $gradientStart={aiGradientColorAt(seg.startPct)}
                      $gradientEnd={aiGradientColorAt(seg.endPct)}
                      $muted={seg.muted}
                      onMouseMove={(e) => setOutcomeTooltip({
                        x: e.clientX,
                        y: e.clientY,
                        label: seg.label,
                        value: seg.value,
                        color: seg.color,
                      })}
                    />
                  ))}
                </OutcomeBarTrack>
              </>
            );
          })()}
        </ChartCard>

        {/* Row 2, Left — Credit Usage Over Time (min/max bar-range) */}
        <ChartCard>
          <ChartCardHeader>
            <div>
              <ChartTitle>Credit Usage Over Time</ChartTitle>
              <ChartSubtitle>
                {creditChartRange === 'all' ? 'Total credits consumed per month' : 'Total credits consumed per day'}
              </ChartSubtitle>
            </div>
            <SegmentedControl
              value={creditChartRange}
              onChange={(v: string) => setCreditChartRange(v as TimeRange)}
              size="sm"
            >
              <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
              <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
              <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
              <SegmentedControl.Item value="all">All</SegmentedControl.Item>
            </SegmentedControl>
          </ChartCardHeader>
          {activeDays < (creditChartRange === 'all' ? 1 : 3) ? (
            <EmptyState>Not enough activity yet to show trends</EmptyState>
          ) : (
            /* Chart height sized to match the Specialist Activations
               card's natural content height (header + hero + heatmap +
               legend + padding), so Row 2 cards sit at matching height
               without either card leaving a big empty strip. */
            <CreditRangeChart data={rangeData} height={200} />
          )}
        </ChartCard>

        {/* Row 2, Right — Specialist Activations heatmap (GitHub-style) */}
        <ChartCard>
          <ChartCardHeader>
            <div>
              <ChartTitle>Specialist Activations</ChartTitle>
              <ChartSubtitle>Daily activity over the past year</ChartSubtitle>
            </div>
          </ChartCardHeader>
          <ChartHeroBlock>
            <ChartHeroValue>{totalTriggersExecuted.toLocaleString('en-US')}</ChartHeroValue>
            <ChartHeroLabel>Activations</ChartHeroLabel>
            <Change current={totalTriggersExecuted} prior={priorTriggersExecuted} />
          </ChartHeroBlock>
          {activationsPerDay.total === 0 ? (
            <EmptyState>No activations in this period</EmptyState>
          ) : (
            <HeatmapSection>
              <HeatmapGridWrap>
              <HeatmapGrid
                role="img"
                aria-label={`Daily activations heatmap with max ${activationsHeatmap.maxCount} in a single day`}
                onMouseLeave={() => setHeatmapTooltip(null)}
              >
                {/* Grid fills row-by-row; emit day-of-week rows outer,
                    week columns inner, so cell (wi, di) lands at column
                    wi on row di exactly like a GitHub heatmap. */}
                {Array.from({ length: 7 }, (_, di) =>
                  activationsHeatmap.weeks.map((week, wi) => {
                    const day = week[di];
                    if (!day) return <HeatmapCell key={`${di}-${wi}`} $level={0} />;
                    const level = heatmapLevel(day.count, activationsHeatmap.maxCount);
                    const dateLabel = day.date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      timeZone: 'UTC',
                    });
                    return (
                      <HeatmapCell
                        key={`${di}-${wi}`}
                        $level={level}
                        onMouseMove={(e) => setHeatmapTooltip({
                          x: e.clientX,
                          y: e.clientY,
                          label: dateLabel,
                          value: day.count,
                          color: HEATMAP_LEVEL_BG[level],
                        })}
                      />
                    );
                  })
                )}
              </HeatmapGrid>
              </HeatmapGridWrap>
              <HeatmapLegend>
                <span>Less</span>
                <HeatmapLegendSquare $level={0} />
                <HeatmapLegendSquare $level={1} />
                <HeatmapLegendSquare $level={2} />
                <HeatmapLegendSquare $level={3} />
                <HeatmapLegendSquare $level={4} />
                <span>More</span>
              </HeatmapLegend>
            </HeatmapSection>
          )}
        </ChartCard>
      </ChartGrid>

      {/* Floating tooltip for the Goals-by-Outcome stacked bar. Rendered
          here (top level of the page) rather than inside the chart card
          so it can escape the card's overflow/padding context. Position
          is fixed and tracks the cursor. */}
      {outcomeTooltip && (
        <ChartTooltip style={{ left: outcomeTooltip.x, top: outcomeTooltip.y }}>
          <ChartTooltipLabel>{outcomeTooltip.label}</ChartTooltipLabel>
          <ChartTooltipValueRow>
            <ChartTooltipDot $color={outcomeTooltip.color} />
            {outcomeTooltip.value}
          </ChartTooltipValueRow>
        </ChartTooltip>
      )}

      {/* Matching Alloy-styled tooltip for the heatmap cells. */}
      {heatmapTooltip && (
        <ChartTooltip style={{ left: heatmapTooltip.x, top: heatmapTooltip.y }}>
          <ChartTooltipLabel>{heatmapTooltip.label}</ChartTooltipLabel>
          <ChartTooltipValueRow>
            <ChartTooltipDot $color={heatmapTooltip.color} />
            {heatmapTooltip.value} activation{heatmapTooltip.value === 1 ? '' : 's'}
          </ChartTooltipValueRow>
        </ChartTooltip>
      )}

      {/* ══════════ TIER 3 — filter bar + activity table ══════════ */}
      <ActivitiesHeading>Activities</ActivitiesHeading>
      <FilterBarWrapper>
        <div style={{ width: 160 }}>
          <SelectField
            size="sm"
            options={SPECIALIST_TYPE_OPTIONS}
            value={typeFilter}
            onChange={setTypeFilter}
          />
        </div>
        <div style={{ width: 180 }}>
          <SelectField
            size="sm"
            options={WORKFLOW_OPTIONS}
            value={workflowFilter}
            onChange={setWorkflowFilter}
          />
        </div>
        <div style={{ width: 160 }}>
          <SelectField
            size="sm"
            options={OUTCOME_OPTIONS}
            value={outcomeFilter}
            onChange={setOutcomeFilter}
          />
        </div>
        <div style={{ width: 150 }}>
          <SelectField
            size="sm"
            options={ACTIVATION_OPTIONS}
            value={activationFilter}
            onChange={setActivationFilter}
          />
        </div>
        {/* Right-aligned time range for the Activities table only. */}
        <FilterBarSpacer>
          <SegmentedControl
            value={timeRange}
            onChange={(v: string) => setTimeRange(v as TimeRange)}
            size="sm"
          >
            <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
            <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
            <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
            <SegmentedControl.Item value="all">All</SegmentedControl.Item>
          </SegmentedControl>
        </FilterBarSpacer>
      </FilterBarWrapper>
      <SpecialistActivityTable
        timeRange={timeRange}
        records={filteredRecords}
        showFilters={false}
      />

    </ContentWrapper>
  );
}
