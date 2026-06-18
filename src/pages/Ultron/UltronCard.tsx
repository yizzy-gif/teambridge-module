/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — single case card.
   Renders one thread: header (avatar + title + status), the optional past-
   activity trail (resolved), and the case body (prompt + records + action pills,
   or live execution activities, or the resolved outcome). One card per feed row.
   DEMO ONLY — state lives in the shared store hook.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Avatar, StatusTag, Button, Save01Icon, ChevronDownIcon, ChevronSelectorVerticalIcon, CheckIcon, LinkExternal01Icon,
} from 'alloy-design-system';
import type { ThreadItem } from './types';
import {
  THREAD_SUBJECTS, threadAvatarUrl, THREAD_PROMPTS, threadDisplayTitle,
  WORKING_ACTIVITIES, THREAD_FOLLOWUPS, THREAD_RECORDS, THREAD_RESOLVED_RECORDS, activityForThread,
} from './fixtures';
import type { WorkingMilestone } from './fixtures';
import { RecordCard } from './RecordCard';
import {
  STATUS_META, isPurpleRow, isRefinementAction, OutcomeBlock, toneFor, UNRESOLVED_ACTIONS, WORKING_ICON,
  hasMultipleCtas, DO_IT_ALL_LABEL,
} from './ultronShared';
import { EXECUTION_ACTIVITIES, ACTIVITY_STEP_MS } from './store';
import { ActivityTrail } from './ActivityTrail';

interface UltronCardProps {
  thread: ThreadItem;
  stage: number;
  /** Whether this card is the one expanded in the feed (accordion). */
  expanded: boolean;
  /** Toggle this card open/closed — the feed collapses any other open card. */
  onToggle: () => void;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

export function UltronCard({ thread, stage, expanded, onToggle, onAction, onRefinement, onSaveWorkflow }: UltronCardProps) {
  const [savedWorkflow, setSavedWorkflow] = useState(false);

  const needsDecision = thread.status === 'needs_approval' || thread.status === 'recommended';
  const actionable = needsDecision || thread.status === 'unresolved';
  const executing = thread.status === 'in_progress';
  const isResolved = thread.status === 'resolved' || thread.status === 'auto_resolved';

  // On the follow-up stage, show the second question + its actions/milestones.
  const followUp = THREAD_FOLLOWUPS[thread.id];
  const onFollowUp = stage === 1 && !!followUp;

  const prompt = onFollowUp
    ? followUp.prompt
    : (THREAD_PROMPTS[thread.id] ?? thread.recommendation);
  // The record(s) the question references (worker / shift / candidates …), for
  // context. May be a single record or a ranked list (rendered as a stack).
  const recordRef = onFollowUp ? followUp.record : THREAD_RECORDS[thread.id];
  const records = recordRef ? (Array.isArray(recordRef) ? recordRef : [recordRef]) : [];
  const milestones = onFollowUp
    ? followUp.working
    : (WORKING_ACTIVITIES[thread.id] ?? EXECUTION_ACTIVITIES.map(headline => ({ icon: 'clock' as const, headline, detail: '' })));
  // Unresolved cases share one generic set of resolution options.
  const actions = thread.status === 'unresolved'
    ? UNRESOLVED_ACTIONS
    : onFollowUp ? followUp.actions : thread.actions;
  // When the question bundles several actions, collapse to a single combined
  // "Yes, do it all" primary plus the "Other" escape hatch — no per-action
  // buttons. Otherwise the last action is the primary and the rest secondaries.
  const multiCta = needsDecision && hasMultipleCtas(prompt);
  const primaryLabel = multiCta ? DO_IT_ALL_LABEL : actions[actions.length - 1];
  const secondaryLabels = multiCta ? [] : actions.slice(0, -1);
  const purple = isPurpleRow(thread);

  // Whether the card has any body content. Monitoring threads carry no body
  // section, so we skip the body wrapper entirely rather than render an empty
  // white box under the header.
  const hasBody = actionable || executing || isResolved || purple;

  // Card tone (shared with the sidebar dots): green / orange / slate.
  const tone = toneFor(thread);

  const trigger = (label: string) => {
    if (isRefinementAction(label)) onRefinement(label);
    else onAction(thread.id, label);
  };

  return (
    <Card data-tone={tone} $expanded={expanded}>
      <CardHeader
        type="button"
        aria-expanded={expanded}
        aria-label={expanded ? 'Collapse case' : 'Expand case'}
        onClick={onToggle}
      >
        <HeaderLeft>
          <Avatar
            size="sm"
            src={threadAvatarUrl(thread.id)}
            name={THREAD_SUBJECTS[thread.id]}
            alt={THREAD_SUBJECTS[thread.id] ?? ''}
          />
          <HeaderText>
            <CardTitle>{threadDisplayTitle(thread)}</CardTitle>
            {/* Collapsed only — when expanded the full prompt is shown in the body. */}
            {!expanded && <CardSubtitle>{thread.recommendation}</CardSubtitle>}
          </HeaderText>
        </HeaderLeft>
        <Tags>
          {!needsDecision && (
            <StatusTag status={STATUS_META[thread.status].tag} size="sm">
              {STATUS_META[thread.status].label}
            </StatusTag>
          )}
          <Chevron aria-hidden="true">
            {expanded ? <ChevronSelectorVerticalIcon size={16} /> : <ChevronDownIcon size={16} />}
          </Chevron>
        </Tags>
      </CardHeader>

      {expanded && isResolved && (
        <TrailRegion>
          <TrailInner>
            <ActivityTrail milestones={activityForThread(thread)} />
          </TrailInner>
        </TrailRegion>
      )}

      {expanded && hasBody && (
      <CardBody>
        {actionable && <Prompt>{prompt}</Prompt>}

        {actionable && records.length > 0 && (
          <RecordList>
            {records.map((r, i) => <RecordCard key={i} record={r} />)}
          </RecordList>
        )}

        {executing && <ExecutionActivities milestones={milestones} />}

        {isResolved && (
          <>
            <OutcomeBlock thread={thread} />
            {THREAD_RESOLVED_RECORDS[thread.id] && (
              <RecordCard record={THREAD_RESOLVED_RECORDS[thread.id]} />
            )}
          </>
        )}

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
              savedWorkflow ? (
                <Button
                  variant="secondary" size="sm"
                  leadingArtwork={<CheckIcon size={14} />}
                  trailingArtwork={<LinkExternal01Icon size={14} />}
                  onClick={() => onSaveWorkflow(thread)}
                >
                  Saved
                </Button>
              ) : (
                <Button
                  variant="secondary" size="sm"
                  leadingArtwork={<Save01Icon size={14} />}
                  onClick={() => { onSaveWorkflow(thread); setSavedWorkflow(true); }}
                >
                  Save as workflow
                </Button>
              )
            )}
          </Actions>
        )}
      </CardBody>
      )}
    </Card>
  );
}

// ── Execution activities ──────────────────────────────────────────────────────
// While a thread executes (Live stream), step through the activity labels one
// at a time. Each label slides up + fades in (keyed remount replays the
// animation); the previous one is replaced as the next arrives.
function ExecutionActivities({ milestones }: { milestones: WorkingMilestone[] }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= milestones.length - 1) return;
    const t = setTimeout(() => setStep(s => s + 1), ACTIVITY_STEP_MS);
    return () => clearTimeout(t);
  }, [step, milestones.length]);

  const m = milestones[Math.min(step, milestones.length - 1)];
  const Icon = WORKING_ICON[m.icon];

  return (
    <Executing role="status" aria-live="polite">
      <ActivityRow key={step}>
        <ActivityIcon aria-hidden="true"><Icon size={16} /></ActivityIcon>
        <ActivityHeadline>
          {m.headline}
          <Dots aria-hidden="true"><span>.</span><span>.</span><span>.</span></Dots>
        </ActivityHeadline>
      </ActivityRow>
    </Executing>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div<{ $expanded: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  /* Collapsed cards sit flat (no shadow); an expanded card rests with a shadow.
     Hovering any card lifts it with an enhanced shadow + a subtle rise. */
  box-shadow: ${p => (p.$expanded ? 'var(--shadow-below-md)' : 'none')};
  overflow: hidden;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-below-high);
  }

  /* Gradient border ring: a 1px tonal line that fades right → left (full color
     at the right edge, transparent at the left). Painted on a ::before whose
     fill is masked to just the border band, so it respects the rounded corners
     (border-image would square them off). Only the expanded card paints it
     (darker -border-secondary, per data-tone below); collapsed cards stay
     borderless. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
    transition: background var(--duration-fast) var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
    &::before { transition: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     everything else (medium / low / none) → slate. */
  /* Collapsed cards take a flat tonal fill (the tone's bg-tertiary, no
     gradient); expanded cards keep the soft tonal glow layered on the base bg. */
  &[data-tone='orange'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-orange-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-orange-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-orange-bg-tertiary);`)}
    &::before { background: ${p => (p.$expanded
      ? 'linear-gradient(to left, var(--color-orange-border-secondary) 0%, color-mix(in srgb, var(--color-orange-border-secondary) 35%, transparent) 100%)'
      : 'transparent')}; }
  }
  &[data-tone='green'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-green-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-green-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-green-bg-tertiary);`)}
    &::before { background: ${p => (p.$expanded
      ? 'linear-gradient(to left, var(--color-green-border-secondary) 0%, color-mix(in srgb, var(--color-green-border-secondary) 35%, transparent) 100%)'
      : 'transparent')}; }
  }
  &[data-tone='slate'] {
    ${p => (p.$expanded
      ? `background-image:
          radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, var(--color-slate-bg-secondary) 18%, transparent) 0%, transparent 60%),
          linear-gradient(color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent), color-mix(in srgb, var(--color-slate-bg-secondary) 8%, transparent));`
      : `background-image: none;
         background-color: var(--color-slate-bg-tertiary);`)}
    &::before { background: ${p => (p.$expanded
      ? 'linear-gradient(to left, var(--color-slate-border-secondary) 0%, color-mix(in srgb, var(--color-slate-border-secondary) 35%, transparent) 100%)'
      : 'transparent')}; }
  }
`;

/* The whole header is the accordion toggle — a real button reset to look like
   the row it replaces. */
const CardHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  width: 100%;
  margin: 0;
  padding: var(--space-2) var(--space-3);
  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  /* No background highlight — the hover affordance is the card's tonal border
     (see Card below). */
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-border-focus);
  }
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

/* One-line summary of Ultron's question/suggestion — Alloy paragraph / small,
   muted (content-inverse-tertiary), truncated to a single line. */
const CardSubtitle = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;

/* Header chevron — rotates 180° to point up when the card is expanded. */
/* Collapsed shows a down chevron (expand affordance); expanded swaps to the
   up-down selector (see header). No rotation — the icon itself conveys state. */
const Chevron = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-tertiary);
`;

/* Past-activity trail, rendered on the card's tonal background ABOVE the white
   body. Only mounts while the card is expanded, so it needs no collapse anim.
   The left inset (space-4) centers the trail icons under the header avatar; the
   trail's own icon→text gap then carries the headline text out to align with
   the header title. */
const TrailRegion = styled.div`
  overflow: hidden;
`;

const TrailInner = styled.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-3);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`;

const Executing = styled.div`
  font-family: var(--font-sans);
  overflow: hidden;
`;

/* Each activity slides up from below while fading in. */
const activityIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-3)); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ActivityRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  animation: ${activityIn} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ActivityIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-content-secondary);
`;

const ActivityHeadline = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
`;

/* Animated trailing ellipsis — three dots blink in sequence. */
const blink = keyframes`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;

const Dots = styled.span`
  & > span {
    animation: ${blink} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;

/* Vertical stack of context record cards (e.g. ranked candidate matches). */
const RecordList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
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

  /* Outlined (secondary) pills get a strong dark border. */
  &[data-variant='tertiary'] {
    border-color: var(--color-content-primary);
  }
`;

const OtherPill = styled(Button)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;
