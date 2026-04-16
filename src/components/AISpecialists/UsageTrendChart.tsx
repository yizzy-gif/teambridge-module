// Stacked bar chart: daily run volume broken out by Success / In Progress / Incomplete.
// Falls back to an empty state when fewer than 3 days have any activity.

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { BarChart } from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  getWindow,
  filterByWindow,
} from '../../data/mockExecutions';
import type { TimeRange, SpecialistType, ExecutionRecord, EngagelessExecution, EngageExecution } from '../../data/mockExecutions';

interface UsageTrendChartProps {
  specialistId?: string | null;
  timeRange: TimeRange;
  deploymentTypeFilter?: SpecialistType | 'all';
  /** Pre-filtered records — when provided, specialistId & deploymentTypeFilter are ignored. */
  records?: ExecutionRecord[];
}

const Card = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
  margin-bottom: var(--space-4, 16px);
`;

const CardTitle = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  color: var(--color-content-primary, #151515);
`;

const CardSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-content-tertiary, #87919f);
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

function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10); // 'YYYY-MM-DD'
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

/** Classify a record into a chart segment. */
function classifyRecord(r: ExecutionRecord): 'success' | 'in_progress' | 'incomplete' {
  if (r.deploymentType === 'engage_less') {
    return (r as EngagelessExecution).status;
  }
  const eg = r as EngageExecution;
  const hasGoal = eg.conversations.some(c => c.outcome === 'goal_achieved');
  if (hasGoal) return 'success';
  const hasInProgress = eg.conversations.some(c => c.outcome === 'in_progress');
  if (hasInProgress) return 'in_progress';
  return 'incomplete';
}

export function UsageTrendChart({ specialistId, timeRange, deploymentTypeFilter = 'all', records: recordsProp }: UsageTrendChartProps) {
  const { series, labels, activeDays } = useMemo(() => {
    const allRecords = recordsProp ?? MOCK_EXECUTIONS.filter(r =>
      (!specialistId || r.specialistId === specialistId) &&
      (deploymentTypeFilter === 'all' || r.deploymentType === deploymentTypeFilter),
    );
    const window = getWindow(timeRange);
    const records = filterByWindow(allRecords, window);

    // Bucket counts by calendar day and outcome segment
    type DayBuckets = Record<string, number>;
    const successByDay:        DayBuckets = {};
    const inProgressByDay:     DayBuckets = {};
    const notSuccessfulByDay:  DayBuckets = {};

    for (const r of records) {
      const k = dayKey(new Date(r.timestamp));
      const segment = classifyRecord(r);
      switch (segment) {
        case 'success':        successByDay[k]       = (successByDay[k]       ?? 0) + 1; break;
        case 'in_progress':    inProgressByDay[k]    = (inProgressByDay[k]    ?? 0) + 1; break;
        case 'incomplete': notSuccessfulByDay[k] = (notSuccessfulByDay[k] ?? 0) + 1; break;
      }
    }

    const days   = eachDayInRange(window.from, window.to);
    const labels = days.map(dayLabel);
    const keys   = days.map(dayKey);

    const activeDays = keys.filter(k =>
      (successByDay[k] ?? 0) +
      (inProgressByDay[k]  ?? 0) +
      (notSuccessfulByDay[k] ?? 0) > 0,
    ).length;

    const series = [
      {
        label: 'Success',
        data:  keys.map(k => successByDay[k]       ?? 0),
        color: 'var(--Alloy-green-500)',
      },
      {
        label: 'In Progress',
        data:  keys.map(k => inProgressByDay[k]    ?? 0),
        color: 'var(--Alloy-orange-400)',
      },
      {
        label: 'Incomplete',
        data:  keys.map(k => notSuccessfulByDay[k] ?? 0),
        color: 'var(--Alloy-neutral-300)',
      },
    ];

    return { series, labels, activeDays };
  }, [specialistId, timeRange, deploymentTypeFilter, recordsProp]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Trend</CardTitle>
        <CardSubtitle>Daily run volume by outcome</CardSubtitle>
      </CardHeader>
      {activeDays < 3 ? (
        <EmptyState>Not enough activity yet to show trends</EmptyState>
      ) : (
        <BarChart
          series={series}
          labels={labels}
          variant="stacked"
          height={220}
          showLegend
          showGrid
          barRadius={2}
        />
      )}
    </Card>
  );
}
