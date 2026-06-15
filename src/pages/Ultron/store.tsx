/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — shared store hook.
   Called once (in App) so the secondary-nav sidebar and the main detail view
   share one source of truth. DEMO ONLY — in-memory, no backend.
   ───────────────────────────────────────────────────────────────────────────── */

import { useMemo, useReducer, useState } from 'react';
import { useToast } from 'alloy-design-system';
import { ultronThreads, RESOLVE_OUTCOMES } from './fixtures';
import type { ThreadItem, ThreadStatus } from './types';
import { SEVERITY_RANK } from './ultronShared';

// Demo lifecycle: how long a thread stays "in progress" (Live stream) before
// it auto-completes to "resolved" (Resolved). Demo-only simulated latency.
const RESOLVE_DELAY_MS = 1500;

type Action =
  | { type: 'commit'; threadId: string }
  | { type: 'resolve'; threadId: string };

function reducer(state: ThreadItem[], action: Action): ThreadItem[] {
  switch (action.type) {
    case 'commit':
      // Acting on a decision moves it into execution → it shifts from the
      // "Needs attention" group into "Live stream".
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'in_progress' as const } : t,
      );
    case 'resolve':
      // Execution completes → moves into "Resolved" with an outcome.
      return state.map(t =>
        t.id === action.threadId
          ? { ...t, status: 'resolved' as const, outcome: RESOLVE_OUTCOMES[t.id] ?? t.outcome }
          : t,
      );
  }
}

const GROUP_DEFS: { id: string; label: string; statuses: ThreadStatus[] }[] = [
  { id: 'needs_attention', label: 'Needs attention', statuses: ['needs_approval', 'recommended'] },
  { id: 'live',            label: 'Live stream',     statuses: ['in_progress', 'monitoring'] },
  { id: 'resolved',        label: 'Resolved',        statuses: ['resolved', 'auto_resolved', 'workflow_available'] },
];

export interface UltronGroup {
  id: string;
  label: string;
  threads: ThreadItem[];
}

export interface UltronStore {
  threads: ThreadItem[];
  groups: UltronGroup[];
  selectedId: string | null;
  selectedThread: ThreadItem | null;
  setSelectedId: (id: string) => void;
  commit: (threadId: string, label: string) => void;
  refine: (label: string) => void;
  saveWorkflow: (thread: ThreadItem) => void;
}

export function useUltronStore(): UltronStore {
  const [threads, dispatch] = useReducer(reducer, ultronThreads);
  const { toast } = useToast();

  // Default selection: the first thread that needs attention.
  const [selectedId, setSelectedId] = useState<string | null>(() => {
    const first = ultronThreads.find(
      t => t.status === 'needs_approval' || t.status === 'recommended',
    );
    return first?.id ?? ultronThreads[0]?.id ?? null;
  });

  const groups = useMemo<UltronGroup[]>(() => {
    const indexed = threads.map((item, index) => ({ item, index }));
    return GROUP_DEFS.map(g => ({
      id: g.id,
      label: g.label,
      threads: indexed
        .filter(x => g.statuses.includes(x.item.status))
        // severity-first, then authored recency (ascending fixture index)
        .sort((a, b) =>
          (SEVERITY_RANK[a.item.severity] - SEVERITY_RANK[b.item.severity]) || (a.index - b.index))
        .map(x => x.item),
    }));
  }, [threads]);

  const selectedThread = threads.find(t => t.id === selectedId) ?? null;

  const commit = (threadId: string, label: string) => {
    // Move to Live stream (executing), then auto-complete to Resolved.
    dispatch({ type: 'commit', threadId });
    toast.success('Action sent', { description: `Ultron is executing: ${label}.`, size: 'lg' });
    setTimeout(() => {
      dispatch({ type: 'resolve', threadId });
      toast.success('Resolved', { description: 'Ultron completed the work.', size: 'lg' });
    }, RESOLVE_DELAY_MS);
  };
  const refine = (label: string) => {
    toast.info('Refinement coming soon', {
      description: `“${label}” opens a plan refinement surface — demo stub.`,
      size: 'lg',
    });
  };
  const saveWorkflow = (thread: ThreadItem) => {
    toast.success('Saved to workflows — demo stub', {
      description: thread.workflowOpportunity ?? undefined,
      size: 'lg',
    });
  };

  return { threads, groups, selectedId, selectedThread, setSelectedId, commit, refine, saveWorkflow };
}
