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
import { Button, ChevronLeftIcon, ChevronRightIcon } from 'alloy-design-system';
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
  /** Ids acted on from Live, in action order — render as lingering doppelgangers. */
  doppelgangerIds: string[];
  /** Thread the sidebar has selected — expanded + scrolled into view. */
  selectedId: string | null;
  /** Change the selected thread (drives the Done section's prev/next pager). */
  onSelectThread: (id: string) => void;
  onAction: (threadId: string, label: string) => void;
  onRefinement: (label: string) => void;
  onSaveWorkflow: (thread: ThreadItem) => void;
}

export function UltronPage({
  threads, stageById, section, doppelgangerIds, selectedId, onSelectThread, onAction, onRefinement, onSaveWorkflow,
}: UltronPageProps) {
  const bySeverity = (a: { t: ThreadItem; index: number }, b: { t: ThreadItem; index: number }) =>
    (SEVERITY_RANK[a.t.severity] - SEVERITY_RANK[b.t.severity]) || (a.index - b.index);
  const isDone = (t: ThreadItem) => SECTION_STATUSES.done.includes(t.status);

  // Cases shown in the active section. Live is special: alongside the active
  // needs-attention cases it keeps the doppelgangers of everything acted on —
  // they linger (mirroring the case's state as it moves through Working) and
  // sink to the bottom of the feed once they reach a Done state.
  let ids: string[];
  if (section === 'live') {
    const liveSet = new Set<string>(doppelgangerIds);
    threads.forEach(t => { if (SECTION_STATUSES.live.includes(t.status)) liveSet.add(t.id); });
    const active = threads
      .map((t, index) => ({ t, index }))
      .filter(({ t }) => liveSet.has(t.id) && !isDone(t))
      .sort(bySeverity)
      .map(({ t }) => t.id);
    // Done doppelgangers pinned to the bottom, in the order they were acted on.
    const done = doppelgangerIds.filter(id => {
      const t = threads.find(x => x.id === id);
      return !!t && isDone(t);
    });
    ids = [...active, ...done];
  } else if (section === 'working') {
    // Working keeps every in-flight case until it reaches Done — including ones
    // that have flipped back to a follow-up question — so the card never drops
    // out of the Working page mid-flow.
    const workSet = new Set<string>();
    doppelgangerIds.forEach(id => {
      const t = threads.find(x => x.id === id);
      if (t && !isDone(t)) workSet.add(id);
    });
    threads.forEach(t => { if (SECTION_STATUSES.working.includes(t.status)) workSet.add(t.id); });
    ids = threads
      .map((t, index) => ({ t, index }))
      .filter(({ t }) => workSet.has(t.id))
      .sort(bySeverity)
      .map(({ t }) => t.id);
  } else {
    ids = threads
      .map((t, index) => ({ t, index }))
      .filter(({ t }) => SECTION_STATUSES[section].includes(t.status))
      .sort(bySeverity)
      .map(({ t }) => t.id);
  }

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

  // Done is paged one case at a time: the page shows a single completed event,
  // and the pager steps to the previous/next done case. The current case is the
  // sidebar selection when it's a done case, otherwise the first in the section.
  const doneCurrentId = section === 'done'
    ? (selectedId && ids.includes(selectedId) ? selectedId : ids[0] ?? null)
    : null;
  const doneIndex = doneCurrentId ? ids.indexOf(doneCurrentId) : -1;

  return (
    <Page>
      <Scroll>
      {/* Full-width sticky header (spans the main container, keeps page padding). */}
      <FeedHeader>
        <HeaderSolid><UltronIdentityCard /></HeaderSolid>
        <HeaderFade aria-hidden="true" />
      </FeedHeader>
      {section === 'done' ? (
        <Feed>
          {doneCurrentId === null ? (
            <Empty role="status">{EMPTY_COPY.done}</Empty>
          ) : (() => {
            const thread = threads.find(t => t.id === doneCurrentId);
            if (!thread) return null;
            return (
              <>
                <Pager role="navigation" aria-label="Completed cases">
                  <Button
                    variant="tertiary"
                    size="sm"
                    leadingArtwork={<ChevronLeftIcon size={16} />}
                    disabled={doneIndex <= 0}
                    onClick={() => onSelectThread(ids[doneIndex - 1])}
                  >
                    Previous
                  </Button>
                  <PagerCount aria-live="polite">{doneIndex + 1} of {ids.length}</PagerCount>
                  <Button
                    variant="tertiary"
                    size="sm"
                    trailingArtwork={<ChevronRightIcon size={16} />}
                    disabled={doneIndex >= ids.length - 1}
                    onClick={() => onSelectThread(ids[doneIndex + 1])}
                  >
                    Next
                  </Button>
                </Pager>
                {/* One event per page: the single case is always open (no accordion). */}
                <UltronCard
                  key={thread.id}
                  thread={thread}
                  stage={stageById[thread.id] ?? 0}
                  expanded
                  onToggle={() => {}}
                  onAction={onAction}
                  onRefinement={onRefinement}
                  onSaveWorkflow={onSaveWorkflow}
                />
              </>
            );
          })()}
        </Feed>
      ) : (
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
      )}
      </Scroll>
      {/* Bottom dissolve: a band fixed to the foot of the page; cases scroll
          behind it and fade out as they pass under. */}
      <BottomFade aria-hidden="true" />
    </Page>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

/* Relative shell: holds the scroll area and the fixed bottom band. */
const Page = styled.div`
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`;

/* The actual scroller — the feed lives here. */
const Scroll = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 var(--space-5) var(--space-5);
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

/* Prev / position / next pager for the Done section's one-event-per-page view. */
const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

const PagerCount = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-tertiary);
  white-space: nowrap;
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
  height: 36px;
  background: linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 100%);
  pointer-events: none;
`;

/* Bottom dissolve: a 120px band pinned to the foot of the scroll area, opaque
   page bg at the bottom fading to transparent at the top, so cases melt into the
   page as they scroll off. Negative margin overlays it on the feed (no dead
   scroll space); pointer-events:none keeps the cases beneath it clickable. */
/* Fixed to the foot of the page (not part of the scroll flow): cases scroll
   behind it and dissolve. Inset L/R to line up with the feed/header. */
const BottomFade = styled.div`
  position: absolute;
  left: var(--space-5);
  right: var(--space-5);
  bottom: 0;
  height: 120px;
  background: linear-gradient(to top, var(--color-bg-primary) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
`;
