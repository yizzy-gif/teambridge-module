// Summary stat cards for the AI Specialist usage section.
// All values derived by filtering ExecutionRecord[] — no separate data structures.

import React from 'react';
import styled from 'styled-components';
import {
  DataCard,
  ValueChangeLabel,
  BarChart02Icon,
  CheckCircleIcon,
  ClockIcon,
  CoinsStacked03Icon,
} from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  getWindow,
  getPriorWindow,
  filterByWindow,
  computeStats,
  pctChange,
} from '../../data/mockExecutions';
import type { TimeRange } from '../../data/mockExecutions';
// Success Rate now counts resolved + partial as successful (see computeStats).

interface UsageSummaryCardsProps {
  specialistId: string;
  timeRange: TimeRange;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-3, 12px);
`;

function fmtTokens(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

function fmtDuration(ms: number): string {
  if (ms === 0) return '—';
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

function fmtPct(n: number): string {
  return `${Math.abs(n).toFixed(1)}%`;
}

function rangeLabel(range: TimeRange): string {
  if (range === '24h') return '24 hours';
  if (range === '7d')  return '7 days';
  return '30 days';
}

interface ChangeProps {
  current: number;
  prior: number;
  /** When true, "up" is bad (e.g. response time) */
  invertDirection?: boolean;
}

function Change({ current, prior, invertDirection = false }: ChangeProps) {
  const delta = pctChange(current, prior);
  if (delta === null) return null;

  const isUp = delta > 0;
  const trend = isUp ? 'up' : 'down';
  // positive severity = green, negative = red
  const isPositive = invertDirection ? !isUp : isUp;
  const severity = Math.abs(delta) < 0.5
    ? undefined // neutral (no meaningful change)
    : isPositive ? 'positive' : 'negative';

  const label = `${delta > 0 ? '+' : ''}${fmtPct(delta)}`;
  return (
    <ValueChangeLabel
      mode="trend"
      value={label}
      trend={trend}
      severity={severity}
    />
  );
}

export function UsageSummaryCards({ specialistId, timeRange }: UsageSummaryCardsProps) {
  const allRecords = MOCK_EXECUTIONS.filter(r => r.specialistId === specialistId);

  const currentWindow = getWindow(timeRange);
  const priorWindow   = getPriorWindow(timeRange);

  const current = computeStats(filterByWindow(allRecords, currentWindow));
  const prior   = computeStats(filterByWindow(allRecords, priorWindow));

  return (
    <Grid>
      <DataCard
        color="blue"
        icon={<BarChart02Icon size={24} />}
        label="Total Runs"
        value={current.totalRuns}
        change={
          <Change current={current.totalRuns} prior={prior.totalRuns} />
        }
      />
      <DataCard
        color="green"
        icon={<CheckCircleIcon size={24} />}
        label="Success Rate"
        value={`${current.successRate.toFixed(1)}%`}
        change={
          <Change
            current={current.successRate}
            prior={prior.successRate}
          />
        }
      />
      <DataCard
        color="purple"
        icon={<ClockIcon size={24} />}
        label="Avg Response"
        value={fmtDuration(current.avgDurationMs)}
        change={
          <Change
            current={current.avgDurationMs}
            prior={prior.avgDurationMs}
            invertDirection
          />
        }
      />
      <DataCard
        color="orange"
        icon={<CoinsStacked03Icon size={24} />}
        label="Token Usage"
        value={fmtTokens(current.totalTokens)}
        change={
          <Change current={current.totalTokens} prior={prior.totalTokens} />
        }
      />
    </Grid>
  );
}
