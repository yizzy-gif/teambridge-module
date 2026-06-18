/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Record card.
   A compact context reference to the record a question is about (worker, shift,
   location, policy…): avatar + role eyebrow + title + dot-separated meta, with
   an open-record affordance. Bordered, rounded, sits under the prompt.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { Avatar, Button, ArrowUpRightIcon } from 'alloy-design-system';
import type { RecordRef } from './fixtures';
import { threadAvatarUrl } from './fixtures';

export function RecordCard({ record }: { record: RecordRef }) {
  return (
    <Card>
      <Avatar size="lg" src={threadAvatarUrl(record.avatarSeed)} name={record.title} alt={record.title} />
      <Body>
        <Role>{record.eyebrow}</Role>
        <Title>{record.title}</Title>
        <Meta>{record.meta.join(' · ')}</Meta>
      </Body>
      <Button variant="ghost" size="xs" iconOnly aria-label="Open record">
        <ArrowUpRightIcon size={16} />
      </Button>
    </Card>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  flex: 1;
`;

const Role = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;

const Title = styled.span`
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const Meta = styled.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-inverse-tertiary);
`;
