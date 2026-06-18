/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — sectioned feed (Live / Working / Done).
   One scrolling page whose content depends on the active section:
     · live    — cases that need attention (the entry feed)
     · working — cases Ultron is actively working (in-progress / monitoring)
     · done    — terminal cases (resolved / auto-resolved / unresolved / workflow)
   The Ultron identity card heads every section; the cases below are laid out as
   a vertical accordion (one card open at a time). DEMO ONLY — state lives in the
   shared store hook.
   ───────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { ThreadItem, ThreadStatus } from './types';
import { SEVERITY_RANK } from './ultronShared';
import { UltronIdentityCard } from './UltronIdentityCard';
import { UltronCard } from './UltronCard';

/** Which lifecycle bucket the page is showing. Mirrors the sidebar groups. */
export type UltronSection = 'live' | 'working' | 'done';

const SECTION_STATUSES: Record<UltronSection, ThreadStatus[]> = {
  live:    ['needs_approval', 'recommended'],
  working: ['in_progress', 'monitoring'],
  done:    ['resolved', 'auto_resolved', 'workflow_available', 'unresolved'],
};

const EMPTY_COPY: Record<UltronSection, string> = {
  live:    'Nothing needs your attention right now.',
  working: 'Ultron isn’t actively working anything right now.',
  done:    'No completed cases yet.',
};

interface UltronPageProps {
  /** Full thread list from the store (current state per thread). */
  threads: ThreadItem[];
  /** Decision stage per thread id (0 = first CTA, 1 = follow-up CTA). */
  stageById: Record<string, number>;
  /** Active section — Live, Working, or Done. */
  section: UltronSection;
  /** Thread the sidebar has selected — expanded + scrolled into view. */
  selectedId: string | null;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

export function UltronPage({
  threads, stageById, section, selectedId, onAction, onRefinement, onSaveWorkflow,
}: UltronPageProps) {
  // Cases in the active section, severity-first then by authored recency.
  const ids = threads
    .map((t, index) => ({ t, index }))
    .filter(({ t }) => SECTION_STATUSES[section].includes(t.status))
    .sort((a, b) =>
      (SEVERITY_RANK[a.t.severity] - SEVERITY_RANK[b.t.severity]) || (a.index - b.index))
    .map(({ t }) => t.id);

  // Accordion: at most one card open at a time, defaulting to the selected case.
  const [expandedId, setExpandedId] = useState<string | null>(() => selectedId ?? null);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // The last selection we scrolled to. Seeded on first run with the initial
  // selection so the feed opens at the top (the Ultron identity card — the
  // entry point) instead of jumping to the default case. Comparing values
  // (rather than a mount flag) also makes this safe under StrictMode's
  // double-invoked effects.
  const lastScrolledId = useRef<string | null | undefined>(undefined);

  // Selecting a case in the sidebar expands it (collapsing any other) and
  // scrolls it into view within the section.
  useEffect(() => {
    if (lastScrolledId.current === undefined) { lastScrolledId.current = selectedId; return; }
    if (!selectedId || selectedId === lastScrolledId.current) return;
    lastScrolledId.current = selectedId;
    setExpandedId(selectedId);
    cardRefs.current[selectedId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedId]);

  return (
    <Page>
      {/* Full-width sticky header (spans the main container, keeps page padding). */}
      <FeedHeader>
        <HeaderSolid><UltronIdentityCard /></HeaderSolid>
        <HeaderFade aria-hidden="true" />
      </FeedHeader>
      <Feed>
        {ids.length === 0 ? (
          <Empty role="status">{EMPTY_COPY[section]}</Empty>
        ) : (
          ids.map(id => {
            const thread = threads.find(t => t.id === id);
            if (!thread) return null;
            return (
              <CardSlot key={id} ref={el => { cardRefs.current[id] = el; }}>
                <UltronCard
                  thread={thread}
                  stage={stageById[id] ?? 0}
                  expanded={expandedId === id}
                  onToggle={() => setExpandedId(cur => (cur === id ? null : id))}
                  onAction={onAction}
                  onRefinement={onRefinement}
                  onSaveWorkflow={onSaveWorkflow}
                />
              </CardSlot>
            );
          })
        )}
      </Feed>
    </Page>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Page = styled.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: 0 var(--space-5) var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`;

/* Vertical feed column — centered, comfortable reading width. */
const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

/* Anchor for scroll-into-view; scroll-margin keeps the card clear of the top
   edge when the sidebar selects it. */
const CardSlot = styled.div`
  scroll-margin-top: var(--space-5);
`;

const Empty = styled.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;

/* Fixed feed header: the Ultron identity rides an opaque band pinned to the top,
   with a 48px gradient fade beneath it (page bg 100% → transparent 0%, top to
   bottom) so cases dissolve as they scroll underneath. */
const FeedHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const HeaderSolid = styled.div`
  padding-top: var(--space-5);
  background: var(--color-bg-primary);
`;

const HeaderFade = styled.div`
  height: 48px;
  background: linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 100%);
  pointer-events: none;
`;
