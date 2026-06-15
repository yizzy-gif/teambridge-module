/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — main detail view.
   Shows the thread selected in the Ultron sidebar (grouped Needs attention /
   Live stream / Resolved). Actionable threads show the recommendation prompt +
   action pills; every thread shows its case body (timeline + reasoning +
   outcome). DEMO ONLY — state lives in the shared store hook.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import {
  Avatar, StatusTag, Button, Save01Icon, Link01Icon, AILoader,
} from 'alloy-design-system';
import type { ThreadItem } from './types';
import { THREAD_SUBJECTS, threadAvatarUrl, THREAD_PROMPTS } from './fixtures';
import {
  STATUS_META, isPurpleRow, isRefinementAction, OutcomeBlock, toneFor,
} from './ultronShared';

interface UltronPageProps {
  thread: ThreadItem | null;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

export function UltronPage({ thread, onAction, onRefinement, onSaveWorkflow }: UltronPageProps) {
  if (!thread) {
    return (
      <Page>
        <Empty role="status">Select a thread to view it.</Empty>
      </Page>
    );
  }

  const actionable = thread.status === 'needs_approval' || thread.status === 'recommended';
  const executing = thread.status === 'in_progress';
  const primaryLabel = thread.actions[thread.actions.length - 1];
  const secondaryLabels = thread.actions.slice(0, -1);
  const purple = isPurpleRow(thread);

  // Card tone (shared with the sidebar dots): green / orange / slate.
  const tone = toneFor(thread);

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  return (
    <Page>
      <Card data-tone={tone}>
        <CardHeader>
          <HeaderLeft>
            <Avatar
              size="sm"
              src={threadAvatarUrl(thread.id)}
              name={THREAD_SUBJECTS[thread.id]}
              alt={THREAD_SUBJECTS[thread.id] ?? ''}
            />
            <HeaderText>
              <CardTitle>{thread.title}</CardTitle>
            </HeaderText>
          </HeaderLeft>
          <Tags>
            {!actionable && (
              <StatusTag status={STATUS_META[thread.status].tag} size="sm">
                {STATUS_META[thread.status].label}
              </StatusTag>
            )}
            <Button variant="ghost" size="xs" iconOnly aria-label="Open case">
              <Link01Icon size={16} />
            </Button>
          </Tags>
        </CardHeader>

        <CardBody>
          {actionable && <Prompt>{THREAD_PROMPTS[thread.id] ?? thread.recommendation}</Prompt>}

          {executing && (
            <Executing role="status">
              <AILoader size="sm" variant="gradient" state="loading" aria-label="Working" />
              <span>Ultron is working on it…</span>
            </Executing>
          )}

          <OutcomeBlock thread={thread} />

          {(actionable || purple) && (
            <Actions>
              {actionable && primaryLabel && (
                <Pill variant="primary" size="sm" onClick={() => trigger(primaryLabel)}>
                  {primaryLabel}
                </Pill>
              )}
              {actionable && secondaryLabels.map(label => (
                <Pill key={label} variant="tertiary" size="sm" onClick={() => trigger(label)}>
                  {label}
                </Pill>
              ))}
              {actionable && (
                <OtherPill variant="tertiary" size="sm" onClick={() => onRefinement('Other')}>
                  Other
                </OtherPill>
              )}
              {purple && (
                <Button
                  variant="secondary" size="sm"
                  leadingArtwork={<Save01Icon size={14} />}
                  onClick={() => onSaveWorkflow(thread)}
                >
                  Save as workflow
                </Button>
              )}
            </Actions>
          )}
        </CardBody>
      </Card>
    </Page>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-4);
  @media (min-width: 1001px) {
    padding-left: 120px;
    padding-right: 120px;
  }
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  overflow: hidden;

  /* Semantic card tone: high severity → orange, resolved-family → green,
     everything else (medium / low / none) → slate. */
  /* Soft tonal glow layered ON TOP of the base bg (background-image only, so
     the base background-color from the Card rule is preserved). */
  &[data-tone='orange'] {
    background-image: radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-orange-bg-secondary) 14%, transparent) 0%, transparent 50%);
    border-color: var(--color-orange-border-tertiary);
  }
  &[data-tone='green'] {
    background-image: radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-green-bg-secondary) 14%, transparent) 0%, transparent 50%);
    border-color: var(--color-green-border-tertiary);
  }
  &[data-tone='slate'] {
    background-image: radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-slate-bg-secondary) 14%, transparent) 0%, transparent 50%);
    border-color: var(--color-slate-border-tertiary);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  background: transparent;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const CardTitle = styled.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-4);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`;

const Executing = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`;

const Prompt = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
`;

const Pill = styled(Button)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;

const OtherPill = styled(Button)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;

const Empty = styled.div`
  padding: var(--space-16);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;
