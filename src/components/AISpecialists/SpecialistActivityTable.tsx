// Full activity table for an AI Specialist's execution history.
// Features: 4-filter bar (action category / outcome / workflow / trigger source),
// expandable step timeline, thumbs feedback (controlled, wirable to API via onChange).

import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  CellText,
  Tag,
  StatusTag,
  SelectField,
  ChevronDownIcon,
  ChevronRightIcon,
  Eyebrow,
  ToggleButton,
} from 'alloy-design-system';
import type { StatusTagStatus } from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  getWindow,
  filterByWindow,
} from '../../data/mockExecutions';
import type {
  ExecutionRecord,
  ExecutionStep,
  OutcomeStatus,
  FeedbackValue,
  TimeRange,
} from '../../data/mockExecutions';

// ── Formatting helpers ────────────────────────────────────────────────────────

const MOCK_NOW = new Date('2026-04-09T00:00:00Z');

function formatTimestamp(iso: string): string {
  const ts = new Date(iso);
  const diffMs = MOCK_NOW.getTime() - ts.getTime();
  const diffH  = diffMs / 3_600_000;

  if (diffH < 1)  return `${Math.round(diffMs / 60_000)}m ago`;
  if (diffH < 24) return `${Math.round(diffH)}h ago`;
  return ts.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function fmtDuration(ms: number): string {
  if (ms === 0)    return '—';
  if (ms < 1000)   return `${Math.round(ms)}ms`;
  if (ms < 60_000) return `${(ms / 1000).toFixed(1)}s`;
  const m = Math.floor(ms / 60_000);
  const s = Math.round((ms % 60_000) / 1000);
  return `${m}m ${s}s`;
}

function fmtOffset(ms: number): string {
  if (ms === 0) return '+0s';
  return `+${(ms / 1000).toFixed(1)}s`;
}

// ── Outcome status → Tag props ────────────────────────────────────────────────

const OUTCOME_STATUS_TAG: Record<OutcomeStatus, { status: StatusTagStatus; label: string }> = {
  resolved:   { status: 'success', label: 'Resolved'   },
  partial:    { status: 'pending', label: 'Partial'     },
  escalated:  { status: 'warning', label: 'Escalated'   },
  unresolved: { status: 'error',   label: 'Unresolved'  },
  error:      { status: 'error',   label: 'Error'       },
};

// ── Action category → Tag props ───────────────────────────────────────────────

const ACTION_TAG_PROPS: Record<ActionCategory, { color: string; label: string }> = {
  communication: { color: 'blue',   label: 'Communication' },
  data_cleanup:  { color: 'purple', label: 'Data Cleanup'  },
  scheduling:    { color: 'matcha', label: 'Scheduling'    },
};

// ── Styled primitives ─────────────────────────────────────────────────────────

const FilterBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`;

const TableWrapper = styled.div`
  overflow: hidden;
`;

const EmptyRow = styled.tr`
  background: var(--color-bg-primary, #fff);
`;

const EmptyCell = styled.td`
  text-align: center;
  color: var(--color-content-tertiary, #87919f);
  padding: 32px 16px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
`;

const DurationCell = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  min-width: 80px;
`;

const DurationBarTrack = styled.div`
  flex: 1;
  height: 5px;
  border-radius: var(--radius-full, 9999px);
  background: var(--color-bg-tertiary, #eceef1);
  overflow: hidden;
  min-width: 40px;
`;

const DurationBarFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${p => Math.max(p.$pct, 4)}%;
  border-radius: var(--radius-full, 9999px);
  background: var(--Alloy-blue-300, #93b4fd);
`;

// Vertically-stacked sections inside the expanded row
const DetailSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: var(--space-5, 20px);
  align-items: flex-start;
`;

const WorkflowLink = styled.a`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-xs, 2px);
  }
`;

// ── Expand toggle ─────────────────────────────────────────────────────────────

const ExpandToggle = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  color: var(--color-content-tertiary, #87919f);
  flex-shrink: 0;
  &:hover { color: var(--color-content-primary, #151515); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;

// ── Expanded step timeline ────────────────────────────────────────────────────

const ExpandedContent = styled.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`;

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: var(--space-2, 8px) var(--space-3, 12px);
  align-items: baseline;
  padding: var(--space-2, 8px) 0;
  position: relative;

  /* Vertical connector line */
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 28px;
    bottom: -8px;
    width: 1px;
    background: var(--color-border-opaque, #e8eaee);
  }
`;

const StepDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full, 9999px);
  background: var(--color-border-opaque, #e8eaee);
  border: 2px solid var(--color-bg-secondary, #f6f7f9);
  box-shadow: 0 0 0 1px var(--color-border-opaque, #e8eaee);
  margin: 0 auto;
  flex-shrink: 0;
`;

const StepOffset = styled.span`
  font-family: var(--font-mono, Geist Mono, monospace);
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  text-align: right;
`;

const StepDesc = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`;

const FullSummary = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`;

// ── Feedback ──────────────────────────────────────────────────────────────────

function ThumbsUpSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor"/>
    </svg>
  );
}

function ThumbsDownSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z" stroke="currentColor"/>
    </svg>
  );
}

interface FeedbackProps {
  value: FeedbackValue;
  onChange: (next: FeedbackValue) => void;
}

const FeedbackRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
`;

const FeedbackLabel = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`;


function Feedback({ value, onChange }: FeedbackProps) {
  return (
    <FeedbackRow>
      <ToggleButton
        defaultVariant="ghost"
        size="md"
        iconOnly
        selected={value === 'up'}
        onSelectedChange={() => onChange(value === 'up' ? null : 'up')}
        aria-label="Mark as helpful"
      >
        <ThumbsUpSVG />
      </ToggleButton>
      <ToggleButton
        defaultVariant="ghost"
        size="md"
        iconOnly
        selected={value === 'down'}
        onSelectedChange={() => onChange(value === 'down' ? null : 'down')}
        aria-label="Mark as not helpful"
      >
        <ThumbsDownSVG />
      </ToggleButton>
    </FeedbackRow>
  );
}

// ── Step timeline rendered inside expanded row ────────────────────────────────

function StepTimeline({ steps }: { steps: ExecutionStep[] }) {
  return (
    <Timeline aria-label="Execution steps">
      {steps.map((step, i) => {
        const { color, label } = ACTION_TAG_PROPS[step.actionCategory];
        return (
          <TimelineItem key={i}>
            {/* Offset column */}
            <StepOffset>{fmtOffset(step.offsetMs)}</StepOffset>
            {/* Description column */}
            <StepDesc>{step.description}</StepDesc>
            {/* Category tag column */}
            <Tag variant="subtle" color={color as any} size="sm">{label}</Tag>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

// ── Row ───────────────────────────────────────────────────────────────────────

interface RowProps {
  record: ExecutionRecord;
  expanded: boolean;
  onToggle: () => void;
  feedback: FeedbackValue;
  onFeedback: (next: FeedbackValue) => void;
  maxDurationMs: number;
}

function ExecutionRow({ record, expanded, onToggle, feedback, onFeedback, maxDurationMs }: RowProps) {
  const { status: outcomeStatus, label: outcomeLabel } = OUTCOME_STATUS_TAG[record.outcomeStatus];
  const stepCount = record.steps.length;
  const durationPct = maxDurationMs > 0 ? (record.durationMs / maxDurationMs) * 100 : 0;

  return (
    <>
      <TableRow hoverable>
        {/* Timestamp */}
        <TableCell>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ExpandToggle
              aria-label={expanded ? 'Collapse row' : 'Expand row'}
              aria-expanded={expanded}
              onClick={onToggle}
            >
              {expanded
                ? <ChevronDownIcon size={14} />
                : <ChevronRightIcon size={14} />}
            </ExpandToggle>
            <CellText variant="secondary">{formatTimestamp(record.timestamp)}</CellText>
          </div>
        </TableCell>

        {/* Trigger */}
        <TableCell>
          <CellText>{record.trigger.label}</CellText>
        </TableCell>

        {/* Actions — step count */}
        <TableCell>
          <CellText variant="secondary">
            {stepCount} {stepCount === 1 ? 'action' : 'actions'}
          </CellText>
        </TableCell>

        {/* Duration — proportional bar + label */}
        <TableCell>
          <DurationCell>
            <DurationBarTrack>
              <DurationBarFill $pct={durationPct} />
            </DurationBarTrack>
            <CellText variant="secondary">{fmtDuration(record.durationMs)}</CellText>
          </DurationCell>
        </TableCell>

        {/* Outcome — badge only */}
        <TableCell>
          <StatusTag status={outcomeStatus} size="sm">
            {outcomeLabel}
          </StatusTag>
        </TableCell>
      </TableRow>

      {expanded && (
        <tr>
          <ExpandedContent colSpan={5}>
            <DetailSections>
              <TopRow>
                <Section>
                  <Eyebrow>Workflow</Eyebrow>
                  <WorkflowLink href={record.workflow.href}>
                    {record.workflow.name}
                  </WorkflowLink>
                </Section>

                <Section>
                  <Eyebrow>Summary of actions</Eyebrow>
                  <FullSummary>{record.outcomeSummaryFull}</FullSummary>
                </Section>
              </TopRow>

              <hr style={{ margin: 0, border: 'none', borderTop: '1px solid var(--color-border-opaque)' }} />

              <Section>
                <Eyebrow>Span details</Eyebrow>
                <StepTimeline steps={record.steps} />
              </Section>

              <Section>
                <Eyebrow>Rate helpful?</Eyebrow>
                <Feedback value={feedback} onChange={onFeedback} />
              </Section>
            </DetailSections>
          </ExpandedContent>
        </tr>
      )}
    </>
  );
}

// ── Filter options ────────────────────────────────────────────────────────────

const ACTION_OPTIONS = [
  { value: 'all',           label: 'All types'      },
  { value: 'communication', label: 'Communication'  },
  { value: 'data_cleanup',  label: 'Data Cleanup'   },
  { value: 'scheduling',    label: 'Scheduling'     },
];

const OUTCOME_OPTIONS = [
  { value: 'all',        label: 'All statuses' },
  { value: 'resolved',   label: 'Resolved'     },
  { value: 'unresolved', label: 'Unresolved'   },
  { value: 'escalated',  label: 'Escalated'    },
  { value: 'partial',    label: 'Partial'      },
  { value: 'error',      label: 'Error'        },
];

// ── Main component ────────────────────────────────────────────────────────────

interface SpecialistActivityTableProps {
  specialistId: string;
  timeRange: TimeRange;
}

export function SpecialistActivityTable({ specialistId, timeRange }: SpecialistActivityTableProps) {
  const [actionFilter,   setActionFilter]   = useState<string>('all');
  const [outcomeFilter,  setOutcomeFilter]  = useState<string>('all');
  const [expandedId,     setExpandedId]     = useState<string | null>(null);
  const [feedbackMap,    setFeedbackMap]    = useState<Record<string, FeedbackValue>>(() =>
    Object.fromEntries(MOCK_EXECUTIONS.map(r => [r.id, r.feedback])),
  );

  // Base records filtered to the active time window
  const windowRecords = useMemo(() => {
    const window = getWindow(timeRange);
    return filterByWindow(
      MOCK_EXECUTIONS.filter(r => r.specialistId === specialistId),
      window,
    ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [specialistId, timeRange]);

  // Apply all combinable filters
  const rows = useMemo(() => {
    return windowRecords
      .filter(r =>
        actionFilter === 'all' ||
        r.steps.some(s => s.actionCategory === actionFilter),
      )
      .filter(r =>
        outcomeFilter === 'all' || r.outcomeStatus === outcomeFilter,
      );
  }, [windowRecords, actionFilter, outcomeFilter]);

  // Max duration across visible rows — used to scale the duration bar
  const maxDurationMs = useMemo(
    () => rows.reduce((max, r) => Math.max(max, r.durationMs), 0),
    [rows],
  );

  function handleFeedback(id: string, next: FeedbackValue) {
    setFeedbackMap(prev => ({ ...prev, [id]: next }));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3, 12px)' }}>
      <FilterBarWrapper>
        <div style={{ width: 150 }}>
          <SelectField
            size="sm"
            options={ACTION_OPTIONS}
            value={actionFilter}
            onChange={setActionFilter}
          />
        </div>
        <div style={{ width: 150 }}>
          <SelectField
            size="sm"
            options={OUTCOME_OPTIONS}
            value={outcomeFilter}
            onChange={setOutcomeFilter}
          />
        </div>
      </FilterBarWrapper>

      <TableWrapper>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>Timestamp</TableHead>
              <TableHead>Trigger</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Outcome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <EmptyRow>
                <EmptyCell colSpan={5}>No activity matches the current filters.</EmptyCell>
              </EmptyRow>
            ) : (
              rows.map(record => (
                <ExecutionRow
                  key={record.id}
                  record={record}
                  expanded={expandedId === record.id}
                  onToggle={() =>
                    setExpandedId(prev => (prev === record.id ? null : record.id))
                  }
                  feedback={feedbackMap[record.id] ?? null}
                  onFeedback={next => handleFeedback(record.id, next)}
                  maxDurationMs={maxDurationMs}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
