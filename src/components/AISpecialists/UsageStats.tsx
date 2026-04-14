// Usage statistics row for a single AI Specialist persona.
// Renders 4 Alloy DataCards: Credits Used, Number of Runs, Triggers, Number of Activities.

import React from 'react';
import styled from 'styled-components';
import { DataCard, BarChart02Icon, ArrowCircleBrokenRightIcon, Target04Icon, ListBulletIcon } from 'alloy-design-system';
import type { Persona } from '../../data/mockPersonas';

interface UsageStatsProps {
  persona: Persona;
  dayRange?: '7d' | '30d' | '90d';
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-3, 12px);
`;

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

// Scale factor relative to the 30d baseline stored in mockPersonas
const RANGE_SCALE: Record<'7d' | '30d' | '90d', number> = {
  '7d':  7 / 30,
  '30d': 1,
  '90d': 3,
};

export function UsageStats({ persona, dayRange = '30d' }: UsageStatsProps) {
  const scale = RANGE_SCALE[dayRange];
  return (
    <Row>
      <DataCard
        color="blue"
        icon={<BarChart02Icon size={24} />}
        label="Credits Used"
        value={fmt(Math.round(persona.creditsUsed * scale))}
      />
      <DataCard
        color="purple"
        icon={<ArrowCircleBrokenRightIcon size={24} />}
        label="Number of Runs"
        value={Math.round(persona.numberOfRuns * scale)}
      />
      <DataCard
        color="green"
        icon={<Target04Icon size={24} />}
        label="Triggers"
        value={Math.round(persona.triggers * scale)}
      />
      <DataCard
        color="orange"
        icon={<ListBulletIcon size={24} />}
        label="Number of Activities"
        value={Math.round(persona.numberOfActivities * scale)}
      />
    </Row>
  );
}
