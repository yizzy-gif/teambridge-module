// Persona-level usage section — stat cards + two-column chart layout.
// Rendered between Overview and Deployments on the PersonaDetail page.

import { useState, useMemo } from 'react';
import styled from 'styled-components';
import {
  SegmentedControl,
  DataCard,
  ValueChangeLabel,
  CheckCircleIcon,
  Target04Icon,
  CoinsStacked03Icon,
} from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  PERSONA_USAGE_META,
  getWindow,
  getPriorWindow,
  filterByWindow,
  pctChange,
  countGoalsAchieved,
  countGoalsTotal,
} from '../../data/mockExecutions';
import type { TimeRange, ExecutionRecord } from '../../data/mockExecutions';
import { CreditRangeChart } from './CreditRangeChart';

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
}

function fmtPct(n: number): string {
  return `${Math.round(n)}%`;
}

function fmtCost(dollars: number): string {
  if (dollars < 0.01) return '$0.00';
  return `$${dollars.toFixed(2)}`;
}

function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function dayLabel(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function eachDayInRange(from: Date, to: Date): Date[] {
  const days: Date[] = [];
  const cur = new Date(from);
  cur.setUTCHours(0, 0, 0, 0);
  const end = new Date(to);
  end.setUTCHours(0, 0, 0, 0);
  while (cur <= end) {
    days.push(new Date(cur));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return days;
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

const SectionHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4, 16px);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

// Chart card wrapper
const ChartCard = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
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


// ── Component ────────────────────────────────────────────────────────────────

interface PersonaUsageSectionProps {
  personaId: string;
}

export function PersonaUsageSection({ personaId }: PersonaUsageSectionProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');

  const personaRecords = useMemo(
    () => MOCK_EXECUTIONS.filter(r => r.specialistId === personaId),
    [personaId],
  );

  const currentWindow = getWindow(timeRange);
  const priorWindow = getPriorWindow(timeRange);
  const currentRecords = useMemo(() => filterByWindow(personaRecords, currentWindow), [personaRecords, timeRange]);
  const priorRecords = useMemo(() => filterByWindow(personaRecords, priorWindow), [personaRecords, timeRange]);

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
  const resolvedCurrent = countGoalsAchieved(currentRecords);
  const resolvedPrior = countGoalsAchieved(priorRecords);
  const totalCurrent = countGoalsTotal(currentRecords);
  const totalPrior = countGoalsTotal(priorRecords);

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

  // ── Credit chart data (min/max credits per day) ───────────────────────────
  const { rangeData, activeDays } = useMemo(() => {
    const creditsByDay: Record<string, number[]> = {};
    for (const r of currentRecords) {
      const k = dayKey(new Date(r.timestamp));
      if (!creditsByDay[k]) creditsByDay[k] = [];
      creditsByDay[k].push(r.creditsUsed);
    }
    const days = eachDayInRange(currentWindow.from, currentWindow.to);
    const rangeData = days.map(d => {
      const k = dayKey(d);
      const values = creditsByDay[k] ?? [];
      if (values.length === 0) {
        return { label: dayLabel(d), min: 0, max: 0, count: 0, hasData: false };
      }
      return {
        label: dayLabel(d),
        min: Math.min(...values),
        max: Math.max(...values),
        count: values.length,
        hasData: true,
      };
    });
    const activeDays = rangeData.filter(d => d.hasData).length;
    return { rangeData, activeDays };
  }, [currentRecords, timeRange]);

  // ── Right column metrics ──────────────────────────────────────────────────
  const creditsPerGoal = resolvedCurrent > 0 ? totalCredits / resolvedCurrent : null;
  const priorCreditsPerGoal = resolvedPrior > 0 ? priorTotalCredits / resolvedPrior : null;
  const estimatedCost = (totalCredits / 1_000_000) * CREDIT_COST_RATE;
  const priorEstimatedCost = (priorTotalCredits / 1_000_000) * CREDIT_COST_RATE;

  return (
    <Section>
      <SectionHeading>Usage</SectionHeading>

      <TopBar>
        <SegmentedControl
          value={timeRange}
          onChange={(v: string) => setTimeRange(v as TimeRange)}
          size="sm"
        >
          <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
          <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
          <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
        </SegmentedControl>
      </TopBar>

      {/* ── Stat Cards ──────────────────────────────────────────────────────── */}
      <StatsGrid>
        <DataCard
          color="green"
          icon={<Target04Icon size={24} />}
          label="Specialist Activated%"
          value={fmtPct(activatedPct)}
          change={<Change current={activatedPct} prior={priorActivatedPct} />}
        />
        <DataCard
          color="blue"
          icon={<CheckCircleIcon size={24} />}
          label="Goal Achieved"
          value={`${resolvedCurrent} / ${totalCurrent}`}
          change={<Change current={resolvedCurrent} prior={resolvedPrior} />}
        />
        <DataCard
          color="orange"
          icon={<CoinsStacked03Icon size={24} />}
          label="Credit Used"
          value={fmtNum(totalCredits)}
          change={<Change current={totalCredits} prior={priorTotalCredits} />}
        />
      </StatsGrid>

      {/* ── Credit Usage Over Time — full width ─────────────────────────────── */}
      <ChartCard>
        <div>
          <ChartTitle>Credit Usage Over Time</ChartTitle>
          <ChartSubtitle>Total credits consumed per day</ChartSubtitle>
        </div>
        {activeDays < 3 ? (
          <EmptyState>Not enough activity yet to show trends</EmptyState>
        ) : (
          <CreditRangeChart data={rangeData} />
        )}
      </ChartCard>
    </Section>
  );
}
