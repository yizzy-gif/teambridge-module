/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — shared metadata, sorting, and the reusable case body.
   The case body (Timeline + Reasoning + Outcome) is rendered identically in
   the deck's expanded card and in an expanded stream row, so it lives here.
   ───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import styled from 'styled-components';
import {
  AIAssistantMessage, AILabel, AILoader,
  AIActivityTrail, AIActivityStep, Eyebrow,
  type StatusTagStatus,
  type AIActivityStepType,
} from 'alloy-design-system';
import type { ThreadItem, ThreadSeverity, ThreadStatus } from './types';

// ── Severity ───────────────────────────────────────────────────────────────

export const SEVERITY_RANK: Record<ThreadSeverity, number> = {
  high: 0, medium: 1, low: 2, none: 3,
};

/** Small leading severity dot (semantic/status tokens only). Reused in the
 *  secondary-nav thread rows and stream rows via a `data-severity` attribute. */
export const SeverityDot = styled.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;

/** Semantic card/dot tone: resolved-family → green, high severity → orange,
 *  everything else (medium / low / none) → slate. Single source for the
 *  detail card surface AND the sidebar dots so they always match. */
export type CardTone = 'orange' | 'green' | 'slate';

export function toneFor(thread: ThreadItem): CardTone {
  if (thread.status === 'resolved' || thread.status === 'auto_resolved' || thread.status === 'workflow_available') {
    return 'green';
  }
  return thread.severity === 'high' ? 'orange' : 'slate';
}

/** Dot colored by the same tone schema as the thread card. */
export const ToneDot = styled.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;

interface SeverityMeta {
  label: string;
  /** Severity StatusTag treatment. */
  tag: StatusTagStatus;
  /** Token for the leading severity dot fill (semantic/status tokens only). */
  dotColor: string;
}

export const SEVERITY_META: Record<ThreadSeverity, SeverityMeta> = {
  high:   { label: 'High',   tag: 'error',   dotColor: 'var(--color-error-fill)' },
  medium: { label: 'Medium', tag: 'warning', dotColor: 'var(--color-warning-fill)' },
  low:    { label: 'Low',    tag: 'neutral', dotColor: 'var(--color-slate-bg-secondary)' },
  none:   { label: 'None',   tag: 'neutral', dotColor: 'var(--color-slate-bg-tertiary)' },
};

// ── Status ───────────────────────────────────────────────────────────────────

interface StatusMeta {
  label: string;
  tag: StatusTagStatus;
}

export const STATUS_META: Record<ThreadStatus, StatusMeta> = {
  needs_approval:     { label: 'Needs approval', tag: 'warning' },
  recommended:        { label: 'Recommended',    tag: 'info' },
  in_progress:        { label: 'In progress',    tag: 'pending' },
  monitoring:         { label: 'Monitoring',     tag: 'neutral' },
  resolved:           { label: 'Resolved',       tag: 'success' },
  auto_resolved:      { label: 'Auto-resolved',  tag: 'success' },
  workflow_available: { label: 'Workflow ready', tag: 'neutral' },
};

// ── Membership / partitioning ────────────────────────────────────────────────

/** Deck membership: a thread awaiting a human decision. */
export const isDeckStatus = (s: ThreadStatus): boolean =>
  s === 'needs_approval' || s === 'recommended';

/**
 * Purple "save as workflow" treatment: an explicit workflow-ready thread, or a
 * resolved thread that surfaced a recurring-process opportunity.
 * (auto_resolved keeps its own success treatment even with an opportunity.)
 */
export const isPurpleRow = (t: ThreadItem): boolean =>
  t.status === 'workflow_available' ||
  (t.status === 'resolved' && t.workflowOpportunity != null);

/** Earlier secondary actions named like "Review …" / "Adjust …" are refinement
 *  stubs (out of scope): they render and toast but do NOT transition the case. */
export const isRefinementAction = (label: string): boolean =>
  /^(review|adjust)\b/i.test(label);

// ── Stream filter (lifecycle SegmentedControl) ───────────────────────────────

export type StreamFilter = 'all' | 'awaiting' | 'executing' | 'resolved';

export const STREAM_FILTERS: { value: StreamFilter; label: string }[] = [
  { value: 'all',       label: 'All' },
  { value: 'awaiting',  label: 'Awaiting' },
  { value: 'executing', label: 'Executing' },
  { value: 'resolved',  label: 'Resolved' },
];

export function matchesFilter(status: ThreadStatus, filter: StreamFilter): boolean {
  switch (filter) {
    case 'all':       return true;
    case 'awaiting':  return status === 'needs_approval' || status === 'recommended' || status === 'monitoring';
    case 'executing': return status === 'in_progress';
    case 'resolved':  return status === 'resolved' || status === 'auto_resolved' || status === 'workflow_available';
  }
}

// ── Sorting ──────────────────────────────────────────────────────────────────
// `index` is the original fixture position (authored most-recent-first), so
// "most recent first" == ascending index.

export function compareDeck(
  a: { item: ThreadItem; index: number },
  b: { item: ThreadItem; index: number },
): number {
  const sev = SEVERITY_RANK[a.item.severity] - SEVERITY_RANK[b.item.severity];
  if (sev !== 0) return sev;
  // needs_approval before recommended at equal severity.
  const aApproval = a.item.status === 'needs_approval' ? 0 : 1;
  const bApproval = b.item.status === 'needs_approval' ? 0 : 1;
  if (aApproval !== bApproval) return aApproval - bApproval;
  return a.index - b.index;
}

export function compareStream(
  a: { item: ThreadItem; index: number },
  b: { item: ThreadItem; index: number },
): number {
  const sev = SEVERITY_RANK[a.item.severity] - SEVERITY_RANK[b.item.severity];
  if (sev !== 0) return sev;
  return a.index - b.index;
}

// ── Timeline step typing ─────────────────────────────────────────────────────

const STATE_TO_STEP_TYPE: Record<string, AIActivityStepType> = {
  detected: 'search',
  assessment: 'thinking',
  recommendation: 'content',
  approval: 'tool',
  execution: 'tool',
  resolution: 'content',
  monitoring: 'thinking',
  workflow: 'code',
};

// ── Reusable bits ────────────────────────────────────────────────────────────

/** "Teambridge AI" identity label with the animated star, for AI messages. */
export function UltronLabel() {
  return (
    <AILabel avatar={<AILoader size="xs" variant="gradient" state="ready" />}>
      Ultron
    </AILabel>
  );
}

/** Ultron's recommendation, rendered as a compact assistant message. */
export function RecommendationMessage({ recommendation }: { recommendation: string }) {
  return (
    <AIAssistantMessage label={<UltronLabel />}>
      {recommendation}
    </AIAssistantMessage>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

const OutcomeRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-success-bg);
  color: var(--color-success-content);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
`;

const OutcomeLabel = styled.span`
  font-weight: var(--font-weight-semibold);
`;

/** Standalone Outcome line for resolved / auto_resolved cases (no thinking or
 *  reasoning) — used where the case body's timeline + reasoning are omitted. */
export function OutcomeBlock({ thread }: { thread: ThreadItem }) {
  if (!((thread.status === 'resolved' || thread.status === 'auto_resolved') && thread.outcome)) {
    return null;
  }
  return (
    <OutcomeRow>
      <OutcomeLabel>Outcome</OutcomeLabel>
      <span>{thread.outcome}</span>
    </OutcomeRow>
  );
}

/**
 * Shared case body: Timeline (AIActivityTrail) + Reasoning (assessment as an
 * AIAssistantMessage) + an Outcome line for resolved / auto_resolved cases.
 * Identical in the deck's expanded card and an expanded stream row.
 */
export function CaseBody({ thread }: { thread: ThreadItem }) {
  const isDone =
    thread.status === 'resolved' ||
    thread.status === 'auto_resolved' ||
    thread.status === 'workflow_available';

  const firstPending = thread.timeline.findIndex(s => !s.done);

  // Controlled, default-open: AIActivityTrail's own effect resets a passed
  // `defaultExpanded` back to the (collapsed) state-derived default on mount
  // for live/done trails, so we drive `expanded` directly to keep steps shown.
  const [trailOpen, setTrailOpen] = useState(true);

  return (
    <Body>
      <Section>
        <Eyebrow>Timeline</Eyebrow>
        <AIActivityTrail
          state={isDone ? 'done' : 'live'}
          expanded={trailOpen}
          onToggle={setTrailOpen}
        >
          {thread.timeline.map((step, i) => {
            // Completed → done; the single live step → active (visually distinct);
            // any later not-done steps stay pending (the trail hides those).
            const status =
              step.done ? 'done' : i === firstPending ? 'active' : 'pending';
            return (
              <AIActivityStep
                key={step.state + i}
                type={STATE_TO_STEP_TYPE[step.state] ?? 'thinking'}
                status={status}
              >
                {step.headline}
              </AIActivityStep>
            );
          })}
        </AIActivityTrail>
      </Section>

      <Section>
        <Eyebrow>Reasoning</Eyebrow>
        <AIAssistantMessage label={<UltronLabel />}>
          {thread.assessment}
        </AIAssistantMessage>
      </Section>

      {(thread.status === 'resolved' || thread.status === 'auto_resolved') && thread.outcome && (
        <OutcomeRow>
          <OutcomeLabel>Outcome</OutcomeLabel>
          <span>{thread.outcome}</span>
        </OutcomeRow>
      )}
    </Body>
  );
}
