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
  LineChart,
  BarChart02Icon,
  CheckCircleIcon,
  Target04Icon,
  CoinsStacked03Icon,
  MessageDotsSquareIcon,
  ArrowCircleBrokenRightIcon,
} from 'alloy-design-system';
import { UsageTrendChart } from '../../../components/AISpecialists/UsageTrendChart';
import {
  MOCK_EXECUTIONS,
  PERSONA_USAGE_META,
  CREDIT_COST_RATE,
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

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3, 12px);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-4, 16px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
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

const FilterBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`;

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

export function SpecialistUsageContent() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [typeFilter, setTypeFilter] = useState('all');
  const [workflowFilter, setWorkflowFilter] = useState('all');
  const [outcomeFilter, setOutcomeFilter] = useState('all');
  const [activationFilter, setActivationFilter] = useState('all');

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

  // ── Specialist Activated% (aggregate across all personas) ─────────────────
  const periodKey = timeRange;
  const priorPeriodKey = `prior_${timeRange}`;
  const metaRecords = PERSONA_USAGE_META.filter(m => m.period === periodKey);
  const priorMetaRecords = PERSONA_USAGE_META.filter(m => m.period === priorPeriodKey);

  const totalTriggersReceived = metaRecords.reduce((s, m) => s + m.triggersReceived, 0);
  const totalTriggersExecuted = metaRecords.reduce((s, m) => s + m.triggersExecuted, 0);
  const priorTriggersReceived = priorMetaRecords.reduce((s, m) => s + m.triggersReceived, 0);
  const priorTriggersExecuted = priorMetaRecords.reduce((s, m) => s + m.triggersExecuted, 0);

  const activatedPct = totalTriggersReceived > 0
    ? (totalTriggersExecuted / totalTriggersReceived) * 100 : 0;
  const priorActivatedPct = priorTriggersReceived > 0
    ? (priorTriggersExecuted / priorTriggersReceived) * 100 : 0;

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

  // ── Credit chart data ─────────────────────────────────────────────────────
  const { chartSeries, chartLabels, activeDays } = useMemo(() => {
    const creditsByDay: Record<string, number> = {};
    for (const r of currentRecords) {
      const k = dayKey(new Date(r.timestamp));
      creditsByDay[k] = (creditsByDay[k] ?? 0) + r.creditsUsed;
    }
    const days = eachDayInRange(currentWindow.from, currentWindow.to);
    const labels = days.map(dayLabel);
    const keys = days.map(dayKey);
    const data = keys.map(k => creditsByDay[k] ?? 0);
    const active = data.filter(v => v > 0).length;
    const series = [{
      label: 'Credits',
      data,
      color: 'var(--Alloy-blue-500)',
      area: true,
    }];
    return { chartSeries: series, chartLabels: labels, activeDays: active };
  }, [currentRecords, timeRange]);

  // ── Right column metrics ──────────────────────────────────────────────────
  const creditsPerGoal = resolvedCurrent > 0 ? totalCredits / resolvedCurrent : null;
  const priorCreditsPerGoal = resolvedPrior > 0 ? priorTotalCredits / resolvedPrior : null;
  const estimatedCost = (totalCredits / 1_000_000) * CREDIT_COST_RATE;
  const priorEstimatedCost = (priorTotalCredits / 1_000_000) * CREDIT_COST_RATE;

  const cpgDelta = creditsPerGoal !== null && priorCreditsPerGoal !== null
    ? pctChange(creditsPerGoal, priorCreditsPerGoal) : null;
  const costDelta = pctChange(estimatedCost, priorEstimatedCost);

  const cpgDeltaFmt = fmtDelta(cpgDelta, true);
  const costDeltaFmt = fmtDelta(costDelta, true);
  const gsrDelta = pctChange(goalSuccessRate, priorGoalSuccessRate);
  const gsrDeltaFmt = fmtDelta(gsrDelta, false);

  // Radial SVG for goal success rate
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (goalSuccessRate / 100) * circumference;

  return (
    <ContentWrapper>
      <TopBar>
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
        </FilterBarWrapper>
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
          color="purple"
          icon={<MessageDotsSquareIcon size={24} />}
          label="Ponder Chats & Messages"
          value={`${ponderChats} / ${ponderMessages}`}
          change={<Change current={ponderChats + ponderMessages} prior={priorPonderChats + priorPonderMessages} />}
        />
        <DataCard
          color="orange"
          icon={<CoinsStacked03Icon size={24} />}
          label="Credit Used"
          value={fmtNum(totalCredits)}
          change={<Change current={totalCredits} prior={priorTotalCredits} />}
        />
        <DataCard
          color="green"
          icon={<BarChart02Icon size={24} />}
          label="Goal Success Rate"
          value={fmtPct(goalSuccessRate)}
          change={<Change current={goalSuccessRate} prior={priorGoalSuccessRate} />}
        />
        <DataCard
          color="blue"
          icon={<ArrowCircleBrokenRightIcon size={24} />}
          label="Goal Value"
          value={goalValue !== null ? `${goalValue.toFixed(1)} goals/1k credits` : '—'}
          change={
            goalValue !== null && priorGoalValue !== null
              ? <Change current={goalValue} prior={priorGoalValue} />
              : null
          }
        />
      </StatsGrid>

      {/* ── Two-Column Charts ───────────────────────────────────────────────── */}
      <ChartColumns>
        <ChartCard>
          <div>
            <ChartTitle>Credit Usage Over Time</ChartTitle>
            <ChartSubtitle>Total credits consumed per day</ChartSubtitle>
          </div>
          {activeDays < 3 ? (
            <EmptyState>Not enough activity yet to show trends</EmptyState>
          ) : (
            <LineChart
              series={chartSeries}
              labels={chartLabels}
              height={200}
              showGrid
              showLegend={false}
              smooth
              yUnit=""
            />
          )}
        </ChartCard>

        <GoalPanel>
          {/* Goal Success Rate radial */}
          <RadialWrap>
            <RadialSvg width="72" height="72" viewBox="0 0 72 72">
              <circle
                cx="36" cy="36" r={radius}
                fill="none"
                stroke="var(--color-border-opaque, #e8eaee)"
                strokeWidth="6"
              />
              <circle
                cx="36" cy="36" r={radius}
                fill="none"
                stroke="var(--color-success, #16a34a)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${strokeDash} ${circumference}`}
                transform="rotate(-90 36 36)"
              />
              <text
                x="36" y="36"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-content-primary, #151515)"
              >
                {fmtPct(goalSuccessRate)}
              </text>
            </RadialSvg>
            <RadialInfo>
              <MetricLabel>Goal Success Rate</MetricLabel>
              {gsrDeltaFmt && (
                <MetricDelta $color={gsrDeltaFmt.color}>{gsrDeltaFmt.label}</MetricDelta>
              )}
            </RadialInfo>
          </RadialWrap>

          {/* Credits per Goal */}
          <GoalMetric>
            <MetricLabel>Credits per Goal</MetricLabel>
            <MetricValueRow>
              <MetricValue>
                {creditsPerGoal !== null ? `${fmtNum(creditsPerGoal)} credits/goal` : '—'}
              </MetricValue>
              {cpgDeltaFmt && (
                <MetricDelta $color={cpgDeltaFmt.color}>{cpgDeltaFmt.label}</MetricDelta>
              )}
            </MetricValueRow>
          </GoalMetric>

          {/* Estimated Cost */}
          <GoalMetric>
            <MetricLabel>Estimated Cost</MetricLabel>
            <MetricValueRow>
              <MetricValue>{fmtCost(estimatedCost)}</MetricValue>
              {costDeltaFmt && (
                <MetricDelta $color={costDeltaFmt.color}>{costDeltaFmt.label}</MetricDelta>
              )}
            </MetricValueRow>
          </GoalMetric>
        </GoalPanel>
      </ChartColumns>

    </ContentWrapper>
  );
}
