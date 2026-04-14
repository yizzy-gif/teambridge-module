// Donut chart showing breakdown of action categories across all execution steps
// in the selected time range. Uses the Alloy DonutChart component for the ring.

import React, { useMemo, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DonutChart } from 'alloy-design-system';
import type { DonutChartSegment } from 'alloy-design-system';
import { MOCK_EXECUTIONS, getWindow, filterByWindow } from '../../data/mockExecutions';
import type { TimeRange, ToolCategory, SpecialistType } from '../../data/mockExecutions';

interface ActionTypesDonutProps {
  specialistId: string;
  timeRange: TimeRange;
  deploymentTypeFilter?: SpecialistType | 'all';
}

// ── Category metadata ─────────────────────────────────────────────────────────

// Colors match the Tag color="blue|purple|matcha" dot tokens used in the activity table
const CATEGORY_META: { key: ToolCategory; label: string; color: string }[] = [
  { key: 'communication', label: 'Communication', color: 'var(--color-blue-bg-primary)'   },
  { key: 'data_cleanup',  label: 'Data Cleanup',  color: 'var(--color-purple-bg-primary)' },
  { key: 'scheduling',    label: 'Scheduling',    color: 'var(--color-matcha-bg-primary)'  },
];

// ── Styled components ─────────────────────────────────────────────────────────

const Card = styled.div`
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
  margin-bottom: var(--space-3, 12px);
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

const ChartBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
  min-height: 0;
`;

const ChartWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  position: relative;
`;

const CenterLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const CenterCount = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-2xl, 24px);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  color: var(--color-content-primary, #151515);
`;

const CenterSub = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-content-tertiary, #87919f);
`;

const Legend = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;

const LegendRow = styled.li`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  line-height: 1.4;
`;

const LegendDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full, 9999px);
  background: ${p => p.$color};
  flex-shrink: 0;
`;

const LegendLabel = styled.span`
  color: var(--color-content-secondary, #475569);
  flex: 1;
`;

const LegendValue = styled.span`
  font-weight: 500;
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
`;

// ── Component ─────────────────────────────────────────────────────────────────

export function ActionTypesDonut({ specialistId, timeRange, deploymentTypeFilter = 'all' }: ActionTypesDonutProps) {
  const chartWrapRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState(160);

  useEffect(() => {
    if (!chartWrapRef.current) return;
    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setChartSize(Math.floor(Math.min(width, height) * 0.85));
    });
    ro.observe(chartWrapRef.current);
    return () => ro.disconnect();
  }, []);

  const { segments, legendRows, total } = useMemo(() => {
    const allRecords = MOCK_EXECUTIONS.filter(r =>
      r.specialistId === specialistId &&
      (deploymentTypeFilter === 'all' || r.deploymentType === deploymentTypeFilter),
    );
    const window     = getWindow(timeRange);
    const records    = filterByWindow(allRecords, window);

    const counts: Record<ToolCategory, number> = {
      communication: 0,
      data_cleanup:  0,
      scheduling:    0,
    };

    for (const record of records) {
      for (const step of record.steps) {
        counts[step.toolCategory]++;
      }
    }

    const total = counts.communication + counts.data_cleanup + counts.scheduling;

    // DonutChart segments — include all categories (zero-value ones become invisible arcs)
    const segments: DonutChartSegment[] = CATEGORY_META.map(cat => ({
      label: cat.label,
      value: counts[cat.key],
      color: cat.color,
    }));

    // Legend rows with count + percentage
    const legendRows = CATEGORY_META.map(cat => ({
      key:      cat.key,
      label:    cat.label,
      color:    cat.color,
      count:    counts[cat.key],
      pct:      total > 0 ? Math.round((counts[cat.key] / total) * 100) : 0,
    }));

    return { segments, legendRows, total };
  }, [specialistId, timeRange, deploymentTypeFilter]);

  const centerLabel = total === 0 ? 'No activity' : undefined;

  // For the empty state, pass a single opaque grey segment so the ring looks muted
  const chartSegments: DonutChartSegment[] = total === 0
    ? [{ label: '', value: 1, color: 'var(--color-border-opaque, #e8eaee)' }]
    : segments;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tool Types</CardTitle>
        <CardSubtitle>Breakdown by tool</CardSubtitle>
      </CardHeader>

      <ChartBody>
        <ChartWrap ref={chartWrapRef}>
          <DonutChart
            segments={chartSegments}
            centerLabel={centerLabel}
            showLegend={false}
            size={chartSize}
          />
          {total > 0 && (
            <CenterLabel>
              <CenterCount>{total}</CenterCount>
              <CenterSub>Tools</CenterSub>
            </CenterLabel>
          )}
        </ChartWrap>

        {total > 0 && (
          <Legend>
            {legendRows.map(row => (
              <LegendRow key={row.key}>
                <LegendDot $color={row.color} />
                <LegendLabel>{row.label}</LegendLabel>
                <LegendValue>{row.count} · {row.pct}%</LegendValue>
              </LegendRow>
            ))}
          </Legend>
        )}
      </ChartBody>
    </Card>
  );
}
