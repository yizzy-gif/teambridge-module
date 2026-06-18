/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — past-activity trail.
   A vertical timeline of milestones with a connector line. Milestones that
   carry detail blocks are individually collapsible (paragraph / labeled bullet
   list / labeled check list).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import styled from 'styled-components';
import { CheckIcon, ChevronDownIcon } from 'alloy-design-system';
import type { ActivityMilestone } from './fixtures';
import { WORKING_ICON } from './ultronShared';

export function ActivityTrail({ milestones }: { milestones: ActivityMilestone[] }) {
  return (
    <Trail>
      {milestones.map((m, i) => (
        <MilestoneRow key={i} milestone={m} last={i === milestones.length - 1} />
      ))}
    </Trail>
  );
}

function MilestoneRow({ milestone, last }: { milestone: ActivityMilestone; last: boolean }) {
  const hasBlocks = !!milestone.blocks?.length;
  const [open, setOpen] = useState(true);
  const Icon = WORKING_ICON[milestone.icon] ?? WORKING_ICON.clock;

  return (
    <Row>
      <IconCol>
        <IconBadge aria-hidden="true"><Icon size={16} /></IconBadge>
        {!last && <Connector />}
      </IconCol>
      <Content $last={last}>
        <Header
          as={hasBlocks ? 'button' : 'div'}
          type={hasBlocks ? 'button' : undefined}
          $interactive={hasBlocks}
          aria-expanded={hasBlocks ? open : undefined}
          onClick={hasBlocks ? () => setOpen(o => !o) : undefined}
        >
          <Headline>{milestone.headline}</Headline>
          {hasBlocks && (
            <Chevron data-open={open || undefined} aria-hidden="true"><ChevronDownIcon size={14} /></Chevron>
          )}
        </Header>

        {hasBlocks && open && (
          <Blocks>
            {milestone.blocks!.map((b, j) => (
              <Block key={j}>
                {b.text && <BlockText>{b.text}</BlockText>}
                {b.label && <BlockLabel>{b.label}</BlockLabel>}
                {b.bullets && (
                  <BulletList>
                    {b.bullets.map((x, k) => <li key={k}>{x}</li>)}
                  </BulletList>
                )}
                {b.checks && (
                  <CheckList>
                    {b.checks.map((x, k) => (
                      <li key={k}><CheckIcon size={14} /><span>{x}</span></li>
                    ))}
                  </CheckList>
                )}
              </Block>
            ))}
          </Blocks>
        )}
      </Content>
    </Row>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Trail = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`;

const Row = styled.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`;

const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-4);
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-secondary);
`;

/* Dashed vertical line connecting one milestone's icon to the next. Multiply
   blend lets the light slate dashes darken against the card's tonal background
   instead of sitting on top as a flat gray. */
const Connector = styled.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;

const Content = styled.div<{ $last?: boolean }>`
  flex: 1;
  min-width: 0;
  padding-bottom: ${p => (p.$last ? '0' : 'var(--space-4)')};
`;

const Header = styled.div<{ $interactive?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${p => (p.$interactive ? 'pointer' : 'default')};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

const Headline = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  line-height: var(--line-height-snug);
`;

const Chevron = styled.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(180deg); }
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const BlockText = styled.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;

const BlockLabel = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`;

const CheckList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
  & li svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }
`;
