// Three horizontal comparison bars — one per goal-efficiency metric.
// Each metric is normalized to its own max (current vs prior) so the bar fill
// and prior marker share the same scale. A colored delta indicates whether the
// trend is positive or negative for that metric (Goal Value: higher is better;
// Credits per Goal & Estimated Cost: lower is better).

import React from 'react';
import styled from 'styled-components';
import { pctChange, CREDIT_COST_RATE } from '../../data/mockExecutions';

interface MetricsComparisonProps {
  goalValue: number | null;
  priorGoalValue: number | null;
  creditsPerGoal: number | null;
  priorCreditsPerGoal: number | null;
  estimatedCost: number;
  priorEstimatedCost: number;
}

const ComparisonWrap = styled.div`
  padding: var(--space-5, 20px);
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;

const ComparisonTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--color-content-tertiary, #87919f);
`;

const ComparisonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ComparisonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-2, 8px);
`;

const ComparisonLabel = styled.span`
  font-size: 12px;
  color: var(--color-content-secondary, #475569);
`;

const ComparisonValue = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

const BarTrack = styled.div`
  position: relative;
  height: 8px;
  border-radius: var(--radius-full, 9999px);
  background: var(--color-bg-tertiary, #f1f2f4);
  overflow: visible;
`;

const BarFill = styled.div<{ $pct: number; $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${p => Math.min(100, Math.max(2, p.$pct))}%;
  border-radius: var(--radius-full, 9999px);
  background: ${p => p.$color};
  transition: width 620ms cubic-bezier(0.77, 0, 0.175, 1),
              background 320ms ease;
`;

const PriorMarker = styled.div<{ $pct: number }>`
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: ${p => Math.min(100, Math.max(0, p.$pct))}%;
  width: 2px;
  background: var(--color-content-tertiary, #87919f);
  border-radius: 1px;
  transition: left 620ms cubic-bezier(0.77, 0, 0.175, 1);
`;

const ComparisonFoot = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
`;

// ── Formatting helpers ───────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(Math.round(n));
}

function fmtCost(dollars: number): string {
  if (dollars < 0.01) return '$0.00';
  return `$${dollars.toFixed(2)}`;
}

function fmtDeltaPct(d: number | null): string {
  if (d === null) return '—';
  const sign = d > 0 ? '+' : '';
  return `${sign}${d.toFixed(1)}%`;
}

export { CREDIT_COST_RATE };

// Per-metric normalization: bar fill = current / max(current, prior).
// Marker at prior / max. Both metrics compared on the same scale for that row.
function bar(current: number | null, prior: number | null) {
  if (current === null || prior === null || (current === 0 && (prior ?? 0) === 0)) {
    return { currentPct: 0, priorPct: 0 };
  }
  const max = Math.max(current, prior ?? 0);
  if (max === 0) return { currentPct: 0, priorPct: 0 };
  return {
    currentPct: (current / max) * 100,
    priorPct: ((prior ?? 0) / max) * 100,
  };
}

export function MetricsComparison({
  goalValue,
  priorGoalValue,
  creditsPerGoal,
  priorCreditsPerGoal,
  estimatedCost,
  priorEstimatedCost,
}: MetricsComparisonProps) {
  const gv = bar(goalValue, priorGoalValue);
  const cpg = bar(creditsPerGoal, priorCreditsPerGoal);
  const cost = bar(estimatedCost, priorEstimatedCost);

  const gvDelta = goalValue !== null && priorGoalValue !== null
    ? pctChange(goalValue, priorGoalValue) : null;
  const cpgDelta = creditsPerGoal !== null && priorCreditsPerGoal !== null
    ? pctChange(creditsPerGoal, priorCreditsPerGoal) : null;
  const costDelta = pctChange(estimatedCost, priorEstimatedCost);

  const success = 'var(--color-success, #16a34a)';
  const error = 'var(--color-error, #dc2626)';
  const neutral = 'var(--Alloy-blue-500, #446cff)';

  const gvColor = gvDelta === null ? neutral : gvDelta >= 0 ? success : error;
  const cpgColor = cpgDelta === null ? neutral : cpgDelta <= 0 ? success : error;
  const costColor = costDelta === null ? neutral : costDelta <= 0 ? success : error;

  return (
    <ComparisonWrap>
      <ComparisonTitle>Compared to prior period</ComparisonTitle>

      {/* Goal Value — higher is better */}
      <ComparisonRow>
        <ComparisonHeader>
          <ComparisonLabel>Goal Value</ComparisonLabel>
          <ComparisonValue>
            {goalValue !== null ? `${goalValue.toFixed(1)} / 1k` : '—'}
          </ComparisonValue>
        </ComparisonHeader>
        <BarTrack>
          <BarFill $pct={gv.currentPct} $color={gvColor} />
          {priorGoalValue !== null && <PriorMarker $pct={gv.priorPct} />}
        </BarTrack>
        <ComparisonFoot>
          <span>
            Prior: {priorGoalValue !== null ? `${priorGoalValue.toFixed(1)} / 1k` : '—'}
          </span>
          <span style={{ color: gvColor }}>{fmtDeltaPct(gvDelta)}</span>
        </ComparisonFoot>
      </ComparisonRow>

      {/* Credits per Goal — lower is better */}
      <ComparisonRow>
        <ComparisonHeader>
          <ComparisonLabel>Credits per Goal</ComparisonLabel>
          <ComparisonValue>
            {creditsPerGoal !== null ? fmtNum(creditsPerGoal) : '—'}
          </ComparisonValue>
        </ComparisonHeader>
        <BarTrack>
          <BarFill $pct={cpg.currentPct} $color={cpgColor} />
          {priorCreditsPerGoal !== null && <PriorMarker $pct={cpg.priorPct} />}
        </BarTrack>
        <ComparisonFoot>
          <span>
            Prior: {priorCreditsPerGoal !== null ? fmtNum(priorCreditsPerGoal) : '—'}
          </span>
          <span style={{ color: cpgColor }}>{fmtDeltaPct(cpgDelta)}</span>
        </ComparisonFoot>
      </ComparisonRow>

      {/* Estimated Cost — lower is better */}
      <ComparisonRow>
        <ComparisonHeader>
          <ComparisonLabel>Estimated Cost</ComparisonLabel>
          <ComparisonValue>{fmtCost(estimatedCost)}</ComparisonValue>
        </ComparisonHeader>
        <BarTrack>
          <BarFill $pct={cost.currentPct} $color={costColor} />
          <PriorMarker $pct={cost.priorPct} />
        </BarTrack>
        <ComparisonFoot>
          <span>Prior: {fmtCost(priorEstimatedCost)}</span>
          <span style={{ color: costColor }}>{fmtDeltaPct(costDelta)}</span>
        </ComparisonFoot>
      </ComparisonRow>
    </ComparisonWrap>
  );
}
