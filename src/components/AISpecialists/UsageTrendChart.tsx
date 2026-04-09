// Stacked bar chart: daily run volume broken out by outcome status.
// Falls back to an empty state when fewer than 3 days have any activity.

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { BarChart } from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  getWindow,
  filterByWindow,
} from '../../data/mockExecutions';
import type { TimeRange } from '../../data/mockExecutions';

interface UsageTrendChartProps {
  specialistId: string;
  timeRange: TimeRange;
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

export function UsageTrendChart({ specialistId, timeRange }: UsageTrendChartProps) {
  const { series, labels, activeDays } = useMemo(() => {
    const allRecords = MOCK_EXECUTIONS.filter(r => r.specialistId === specialistId);
    const window = getWindow(timeRange);
    const records = filterByWindow(allRecords, window);

    // Bucket counts by calendar day and outcome status
    type DayBuckets = Record<string, number>;
    const resolvedByDay:   DayBuckets = {};
    const partialByDay:    DayBuckets = {};
    const escalatedByDay:  DayBuckets = {};
    const unresolvedByDay: DayBuckets = {};
    const errorByDay:      DayBuckets = {};

    for (const r of records) {
      const k = dayKey(new Date(r.timestamp));
      switch (r.outcomeStatus) {
        case 'resolved':   resolvedByDay[k]   = (resolvedByDay[k]   ?? 0) + 1; break;
        case 'partial':    partialByDay[k]    = (partialByDay[k]    ?? 0) + 1; break;
        case 'escalated':  escalatedByDay[k]  = (escalatedByDay[k]  ?? 0) + 1; break;
        case 'unresolved': unresolvedByDay[k] = (unresolvedByDay[k] ?? 0) + 1; break;
        case 'error':      errorByDay[k]      = (errorByDay[k]      ?? 0) + 1; break;
      }
    }

    const days   = eachDayInRange(window.from, window.to);
    const labels = days.map(dayLabel);
    const keys   = days.map(dayKey);

    const activeDays = keys.filter(k =>
      (resolvedByDay[k] ?? 0) +
      (partialByDay[k]  ?? 0) +
      (escalatedByDay[k]  ?? 0) +
      (unresolvedByDay[k] ?? 0) +
      (errorByDay[k]    ?? 0) > 0,
    ).length;

    const series = [
      {
        label: 'Resolved',
        data:  keys.map(k => resolvedByDay[k]   ?? 0),
        color: 'var(--Alloy-green-500)',
      },
      {
        label: 'Partial',
        data:  keys.map(k => partialByDay[k]    ?? 0),
        color: 'var(--Alloy-azure-400)',
      },
      {
        label: 'Escalated',
        data:  keys.map(k => escalatedByDay[k]  ?? 0),
        color: 'var(--Alloy-orange-400)',
      },
      {
        label: 'Unresolved',
        data:  keys.map(k => unresolvedByDay[k] ?? 0),
        color: 'var(--Alloy-red-400)',
      },
      {
        label: 'Error',
        data:  keys.map(k => errorByDay[k]      ?? 0),
        color: 'var(--Alloy-red-600)',
      },
    ];

    return { series, labels, activeDays };
  }, [specialistId, timeRange]);

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
