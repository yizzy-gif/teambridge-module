// Persona-level usage section — stat cards + two-column chart layout.
// Rendered between Overview and Deployments on the PersonaDetail page.

import { useState, useMemo } from 'react';
import styled from 'styled-components';
import {
  SegmentedControl,
  ValueChangeLabel,
} from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  MOCK_NOW,
  PERSONA_USAGE_META,
  getWindow,
  getPriorWindow,
  filterByWindow,
  pctChange,
  countGoalsAchieved,
  countGoalsTotal,
} from '../../data/mockExecutions';
import type { TimeRange, ExecutionRecord } from '../../data/mockExecutions';

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
}

function fmtPct(n: number): string {
  return `${Math.round(n)}%`;
}

// 0–4 intensity bucket for heatmap cells based on count / maxCount ratio.
function heatmapLevel(count: number, maxCount: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  const ratio = count / Math.max(1, maxCount);
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

// Interpolate the Alloy AI gradient (#8C4FE2 → #446CFF) at a 0–100% stop.
function aiGradientColorAt(pct: number): string {
  const clamped = Math.max(0, Math.min(100, pct)) / 100;
  const r = Math.round(140 + (68 - 140) * clamped);
  const g = Math.round(79 + (108 - 79) * clamped);
  const b = Math.round(226 + (255 - 226) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

interface BarTooltipState {
  x: number;
  y: number;
  label: string;
  value: number;
  color: string;
}

function fmtCost(dollars: number): string {
  if (dollars < 0.01) return '$0.00';
  return `$${dollars.toFixed(2)}`;
}

// ── Bucketing ────────────────────────────────────────────────────────────────
// Daily buckets for 24h/7d/30d. Monthly buckets for 'all' — a year of
// daily bars is too dense to read, so we roll up to 12 month columns.

type Bucket = 'day' | 'month';

function bucketFor(range: TimeRange): Bucket {
  return range === 'all' ? 'month' : 'day';
}

function bucketKey(date: Date, bucket: Bucket): string {
  // ISO slices keep this tz-stable for comparison; labels stay local.
  return bucket === 'month'
    ? date.toISOString().slice(0, 7) // YYYY-MM
    : date.toISOString().slice(0, 10); // YYYY-MM-DD
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

// ── Styled primitives ────────────────────────────────────────────────────────

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`;

const SectionHeading = styled.h3`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4, 16px);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Header row inside the Credit Usage Over Time card — pairs the title
// block with the time-range segmented control, matching the global
// Usage page layout.
const ChartCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3, 12px);
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

// Dual-value card interior
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

// Chart card wrapper — $secondary applies the slate-50 recessed bg for
// the Outcome card, matching the global Usage page treatment.
const ChartCard = styled.div<{ $secondary?: boolean }>`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
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

// ── 2-col chart grid (Outcome | Specialist Activations) ──────────────────────

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-4, 16px);
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

// ── Chart hero (value + label + optional delta) ──────────────────────────────

const ChartHeroBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3, 12px);
  flex-wrap: wrap;
`;

const ChartHeroValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;

const ChartHeroLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;

// ── Outcome ratio bar ────────────────────────────────────────────────────────

const OutcomeHeroValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-content-primary);
`;

const OutcomeBarTrack = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 12px;
  flex: 1 1 auto;
  gap: 3px;
  background: var(--color-bg-tertiary);
  border-radius: 0;
  overflow: hidden;
`;

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
  &:hover {
    background: ${p => p.$color};
    opacity: 1;
  }
`;

// ── Heatmap (GitHub-style activity grid) ─────────────────────────────────────

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

const HeatmapGridWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  overflow: hidden;
`;

const HeatmapGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 14px);
  grid-auto-columns: 14px;
  gap: 3px;
  flex-shrink: 0;
`;

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

// ── Alloy chart-style tooltip (dark pill, follows cursor) ────────────────────

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


// Right column panel
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


// ── Component ────────────────────────────────────────────────────────────────

interface PersonaUsageSectionProps {
  personaId: string;
}

export function PersonaUsageSection({ personaId }: PersonaUsageSectionProps) {
  // Each chart card owns its own time range (matches the global page pattern).
  // - `goalsRange` drives the Outcome / Success Rate card.
  // - `timeRange` is kept for any remaining consumers; not surfaced as a
  //   visible control since the stat cards / credit chart were removed.
  const [timeRange] = useState<TimeRange>('7d');
  const [goalsRange, setGoalsRange] = useState<TimeRange>('7d');
  const [outcomeTooltip, setOutcomeTooltip] = useState<BarTooltipState | null>(null);
  const [heatmapTooltip, setHeatmapTooltip] = useState<BarTooltipState | null>(null);

  const personaRecords = useMemo(
    () => MOCK_EXECUTIONS.filter(r => r.specialistId === personaId),
    [personaId],
  );

  const currentWindow = getWindow(timeRange);
  const priorWindow = getPriorWindow(timeRange);
  const currentRecords = useMemo(() => filterByWindow(personaRecords, currentWindow), [personaRecords, timeRange]);
  const priorRecords = useMemo(() => filterByWindow(personaRecords, priorWindow), [personaRecords, timeRange]);

  // Per-card windows for the Outcome / Success Rate card.
  const goalsWindow = getWindow(goalsRange);
  const goalsPriorWindow = getPriorWindow(goalsRange);
  const goalsRecords = useMemo(
    () => filterByWindow(personaRecords, goalsWindow),
    [personaRecords, goalsRange],
  );
  const goalsPriorRecords = useMemo(
    () => filterByWindow(personaRecords, goalsPriorWindow),
    [personaRecords, goalsRange],
  );

  // Outcome breakdown (engage conversations + engage-less runs) for the
  // success-rate card. Uses the Outcome card's own time range.
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

  // Heatmap — 52-week persona-specific activity, anchored to MOCK_NOW and
  // independent of any segmented control on the page.
  const activationsHeatmap = useMemo(() => {
    const MIN_WEEKS = 52;
    const counts: Record<string, number> = {};
    for (const r of personaRecords) {
      const key = new Date(r.timestamp).toISOString().slice(0, 10);
      counts[key] = (counts[key] ?? 0) + 1;
    }
    const endAligned = new Date(MOCK_NOW);
    endAligned.setUTCHours(0, 0, 0, 0);
    endAligned.setUTCDate(endAligned.getUTCDate() + (6 - endAligned.getUTCDay())); // → Saturday
    const start = new Date(endAligned);
    start.setUTCDate(start.getUTCDate() - (MIN_WEEKS * 7 - 1)); // → Sunday, MIN_WEEKS back

    const days: Array<{ date: Date; iso: string; count: number }> = [];
    const cur = new Date(start);
    while (cur <= endAligned) {
      const iso = cur.toISOString().slice(0, 10);
      days.push({ date: new Date(cur), iso, count: counts[iso] ?? 0 });
      cur.setUTCDate(cur.getUTCDate() + 1);
    }
    const weeks: typeof days[] = [];
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
    const maxCount = Math.max(1, ...days.map(d => d.count));
    return { weeks, maxCount };
  }, [personaRecords]);

  // ── Meta for Specialist Activated% ────────────────────────────────────────
  const periodKey = timeRange;
  const priorPeriodKey = `prior_${timeRange}`;
  const meta = PERSONA_USAGE_META.find(m => m.personaId === personaId && m.period === periodKey);
  const priorMeta = PERSONA_USAGE_META.find(m => m.personaId === personaId && m.period === priorPeriodKey);

  const activatedPct = meta && meta.triggersReceived > 0
    ? (meta.triggersExecuted / meta.triggersReceived) * 100
    : 0;
  const priorActivatedPct = priorMeta && priorMeta.triggersReceived > 0
    ? (priorMeta.triggersExecuted / priorMeta.triggersReceived) * 100
    : 0;

  // ── Goal Achieved ─────────────────────────────────────────────────────────
  // Goals card stats — scoped to the Outcome card's own time range.
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

  // ── Goal Success Rate ─────────────────────────────────────────────────────
  const goalSuccessRate = totalCurrent > 0 ? (resolvedCurrent / totalCurrent) * 100 : 0;
  const priorGoalSuccessRate = totalPrior > 0 ? (resolvedPrior / totalPrior) * 100 : 0;

  // ── Goal Value ────────────────────────────────────────────────────────────
  const goalValue = totalCredits > 0 ? resolvedCurrent / (totalCredits / 1000) : null;
  const priorGoalValue = priorTotalCredits > 0 ? resolvedPrior / (priorTotalCredits / 1000) : null;

  // ── Credit chart data (min/max credits per bucket) ─────────────────────────
  // Daily buckets for 24h/7d/30d; monthly for 'all'.
  const { rangeData, activeDays } = useMemo(() => {
    const bucket = bucketFor(timeRange);
    const creditsByBucket: Record<string, number[]> = {};
    for (const r of currentRecords) {
      const k = bucketKey(new Date(r.timestamp), bucket);
      if (!creditsByBucket[k]) creditsByBucket[k] = [];
      creditsByBucket[k].push(r.creditsUsed);
    }
    const buckets = eachBucketInRange(currentWindow.from, currentWindow.to, bucket);
    const rangeData = buckets.map(d => {
      const k = bucketKey(d, bucket);
      const values = creditsByBucket[k] ?? [];
      if (values.length === 0) {
        return { label: bucketLabel(d, bucket), min: 0, max: 0, count: 0, hasData: false };
      }
      return {
        label: bucketLabel(d, bucket),
        min: Math.min(...values),
        max: Math.max(...values),
        count: values.length,
        hasData: true,
      };
    });
    const activeDays = rangeData.filter(d => d.hasData).length;
    return { rangeData, activeDays };
  }, [currentRecords, timeRange]);

  return (
    <Section>
      <StatBadgeGradientDefs />
      <ChartGrid>
        {/* ─ Outcome / Success Rate ───────────────────────────────────────── */}
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
            const achievedPct = (goalsByOutcome.achieved / goalsByOutcome.total) * 100;
            const cnaPct = (goalsByOutcome.completedNoAction / goalsByOutcome.total) * 100;
            const ipPct = (goalsByOutcome.inProgress / goalsByOutcome.total) * 100;
            const segments = [
              { label: 'Goal Achieved',       value: goalsByOutcome.achieved,          color: 'var(--Alloy-green-500)',                 pct: achievedPct, startPct: 0,                    endPct: achievedPct,                          muted: false },
              { label: 'Completed No Action', value: goalsByOutcome.completedNoAction, color: 'var(--Alloy-slate-400, #9ca3af)',        pct: cnaPct,      startPct: achievedPct,          endPct: achievedPct + cnaPct,                 muted: true },
              { label: 'In Progress',         value: goalsByOutcome.inProgress,        color: 'var(--Alloy-blue-500, #446cff)',         pct: ipPct,       startPct: achievedPct + cnaPct, endPct: achievedPct + cnaPct + ipPct,         muted: true },
            ];
            return (
              <>
                <ChartHeroBlock>
                  <OutcomeHeroValue>{fmtPct(goalSuccessRate)}</OutcomeHeroValue>
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

        {/* ─ Specialist Activations (heatmap) ─────────────────────────────── */}
        <ChartCard>
          <ChartCardHeader>
            <div>
              <ChartTitle>Specialist Activations</ChartTitle>
              <ChartSubtitle>Daily activity over the past year</ChartSubtitle>
            </div>
          </ChartCardHeader>
          <ChartHeroBlock>
            <ChartHeroValue>{(meta?.triggersExecuted ?? 0).toLocaleString('en-US')}</ChartHeroValue>
            <ChartHeroLabel>Activations</ChartHeroLabel>
            <Change current={meta?.triggersExecuted ?? 0} prior={priorMeta?.triggersExecuted ?? 0} />
          </ChartHeroBlock>
          <HeatmapSection>
            <HeatmapGridWrap>
              <HeatmapGrid
                role="img"
                aria-label={`Daily activations heatmap with max ${activationsHeatmap.maxCount} in a single day`}
                onMouseLeave={() => setHeatmapTooltip(null)}
              >
                {activationsHeatmap.weeks.flatMap((week, wi) =>
                  week.map((day, di) => {
                    const level = heatmapLevel(day.count, activationsHeatmap.maxCount);
                    const dateLabel = day.date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      timeZone: 'UTC',
                    });
                    return (
                      <HeatmapCell
                        key={`${wi}-${di}`}
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
        </ChartCard>
      </ChartGrid>

      {/* Floating tooltips (fixed-position, track cursor). */}
      {outcomeTooltip && (
        <ChartTooltip style={{ left: outcomeTooltip.x, top: outcomeTooltip.y }}>
          <ChartTooltipLabel>{outcomeTooltip.label}</ChartTooltipLabel>
          <ChartTooltipValueRow>
            <ChartTooltipDot $color={outcomeTooltip.color} />
            {outcomeTooltip.value}
          </ChartTooltipValueRow>
        </ChartTooltip>
      )}
      {heatmapTooltip && (
        <ChartTooltip style={{ left: heatmapTooltip.x, top: heatmapTooltip.y }}>
          <ChartTooltipLabel>{heatmapTooltip.label}</ChartTooltipLabel>
          <ChartTooltipValueRow>
            <ChartTooltipDot $color={heatmapTooltip.color} />
            {heatmapTooltip.value} activation{heatmapTooltip.value === 1 ? '' : 's'}
          </ChartTooltipValueRow>
        </ChartTooltip>
      )}
    </Section>
  );
}
