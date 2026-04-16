// Credit Usage panel — right-column replacement for the Tool Types donut.
// Top section: area chart of daily credit consumption.
// Bottom section: cost efficiency summary (credits/resolved run, estimated cost, deltas).

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { LineChart } from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  MOCK_NOW,
  CREDIT_COST_RATE,
  getWindow,
  getPriorWindow,
  filterByWindow,
  pctChange,
  countGoalsAchieved,
} from '../../data/mockExecutions';
import type { TimeRange, SpecialistType, ExecutionRecord } from '../../data/mockExecutions';

interface CreditUsagePanelProps {
  specialistId?: string | null;
  timeRange: TimeRange;
  deploymentTypeFilter?: SpecialistType | 'all';
  /** Pre-filtered records — when provided, specialistId & deploymentTypeFilter are ignored. */
  records?: ExecutionRecord[];
}

// ── Day helpers (shared pattern with UsageTrendChart) ──────────────────────────

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

// ── Formatting helpers ─────────────────────────────────────────────────────────

function fmtCost(dollars: number): string {
  if (dollars < 0.01) return '$0.00';
  if (dollars < 1)    return `$${dollars.toFixed(2)}`;
  if (dollars < 10)   return `$${dollars.toFixed(2)}`;
  return `$${dollars.toFixed(2)}`;
}

function fmtCreditsInt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
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

// ── Styled primitives ──────────────────────────────────────────────────────────

const Panel = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
  padding: var(--space-5, 20px) var(--space-5, 20px) var(--space-4, 16px);
`;

const PanelTitle = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  color: var(--color-content-primary, #151515);
`;

const PanelSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-content-tertiary, #87919f);
`;

// Chart section — flex-grows to fill available space
const ChartSection = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0 var(--space-4, 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`;

// Cost efficiency card at the bottom
const EfficiencyCard = styled.div`
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
  padding: var(--space-4, 16px) var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  flex-shrink: 0;
`;

const EfficiencyRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MetricLabel = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
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
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: var(--color-content-primary, #151515);
`;

const MetricDelta = styled.span<{ $color: string }>`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 500;
  color: ${p => p.$color};
`;

// ── Component ──────────────────────────────────────────────────────────────────

export function CreditUsagePanel({
  specialistId,
  timeRange,
  deploymentTypeFilter = 'all',
  records: recordsProp,
}: CreditUsagePanelProps) {
  const allRecords = useMemo(() =>
    recordsProp ?? MOCK_EXECUTIONS.filter(r =>
      (!specialistId || r.specialistId === specialistId) &&
      (deploymentTypeFilter === 'all' || r.deploymentType === deploymentTypeFilter),
    ),
  [specialistId, deploymentTypeFilter, recordsProp]);

  // ── Area chart data ──────────────────────────────────────────────────────────

  const { chartSeries, chartLabels, activeDays } = useMemo(() => {
    const window  = getWindow(timeRange);
    const records = filterByWindow(allRecords, window);

    const creditsByDay: Record<string, number> = {};
    for (const r of records) {
      const k = dayKey(new Date(r.timestamp));
      creditsByDay[k] = (creditsByDay[k] ?? 0) + r.creditsUsed;
    }

    const days   = eachDayInRange(window.from, window.to);
    const labels = days.map(dayLabel);
    const keys   = days.map(dayKey);

    const data = keys.map(k => creditsByDay[k] ?? 0);
    const activeDays = data.filter(v => v > 0).length;

    const chartSeries = [
      {
        label: 'Credits',
        data,
        color: 'var(--Alloy-blue-500)',
        area: true,
      },
    ];

    return { chartSeries, chartLabels: labels, activeDays };
  }, [allRecords, timeRange]);

  // ── Cost efficiency data ─────────────────────────────────────────────────────

  const { current: eff, prior: priorEff } = useMemo(() => {
    const currentWindow = getWindow(timeRange);
    const priorWindow   = getPriorWindow(timeRange);

    function compute(records: typeof allRecords) {
      const totalCredits  = records.reduce((s, r) => s + r.creditsUsed, 0);
      const resolvedRuns = countGoalsAchieved(records);
      const creditsPerResolved = resolvedRuns > 0 ? totalCredits / resolvedRuns : null;
      const estimatedCost = (totalCredits / 1_000_000) * CREDIT_COST_RATE;
      return { totalCredits, resolvedRuns, creditsPerResolved, estimatedCost };
    }

    return {
      current: compute(filterByWindow(allRecords, currentWindow)),
      prior:   compute(filterByWindow(allRecords, priorWindow)),
    };
  }, [allRecords, timeRange]);

  const tprDelta = eff.creditsPerResolved !== null && priorEff.creditsPerResolved !== null
    ? pctChange(eff.creditsPerResolved, priorEff.creditsPerResolved)
    : null;
  const costDelta = pctChange(eff.estimatedCost, priorEff.estimatedCost);

  const tprDeltaFmt  = fmtDelta(tprDelta,  true);  // lower is better
  const costDeltaFmt = fmtDelta(costDelta, true);   // lower is better

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Credit Usage</PanelTitle>
        <PanelSubtitle>Consumption over time</PanelSubtitle>
      </PanelHeader>

      <ChartSection>
        {activeDays < 3 ? (
          <EmptyState>Not enough activity yet to show trends</EmptyState>
        ) : (
          <LineChart
            series={chartSeries}
            labels={chartLabels}
            height={160}
            showGrid
            showLegend={false}
            smooth
            yUnit=""
          />
        )}
      </ChartSection>

      <EfficiencyCard>
        <EfficiencyRow>
          <MetricLabel>Credits / resolved run</MetricLabel>
          <MetricValueRow>
            <MetricValue>
              {eff.creditsPerResolved !== null
                ? `${fmtCreditsInt(eff.creditsPerResolved)} credits/run`
                : '—'}
            </MetricValue>
            {tprDeltaFmt && (
              <MetricDelta $color={tprDeltaFmt.color}>{tprDeltaFmt.label}</MetricDelta>
            )}
          </MetricValueRow>
        </EfficiencyRow>

        <EfficiencyRow>
          <MetricLabel>Estimated cost</MetricLabel>
          <MetricValueRow>
            <MetricValue>{fmtCost(eff.estimatedCost)}</MetricValue>
            {costDeltaFmt && (
              <MetricDelta $color={costDeltaFmt.color}>{costDeltaFmt.label}</MetricDelta>
            )}
          </MetricValueRow>
        </EfficiencyRow>
      </EfficiencyCard>
    </Panel>
  );
}
