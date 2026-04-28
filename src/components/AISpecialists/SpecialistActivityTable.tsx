// Activity table for AI Specialist execution history.
// Collapsed row: Time → [Persona] → Workflow → Goal → Credits → Outcome
// Expanded: Engage shows per-user conversations with threads; Engage-less shows timeline.

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
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Eyebrow,
  RefreshCw04Icon,
  Button,
} from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  CREDIT_COST_RATE,
  getWindow,
  filterByWindow,
} from '../../data/mockExecutions';
import { mockPersonas } from '../../data/mockPersonas';
import { PersonaAvatar } from './PersonaAvatar';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type {
  ExecutionRecord,
  ExecutionStep,
  EngageExecution,
  EngagelessExecution,
  ConversationRecord,
  ConversationMessage,
  TimeRange,
  SpecialistType,
  ToolCategory,
} from '../../data/mockExecutions';

// ── Formatting helpers ────────────────────────────────────────────────────────

const MOCK_NOW = new Date('2026-04-15T00:00:00Z');

function formatAbsoluteTimestamp(iso: string): string {
  const ts = new Date(iso);
  return ts.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

/** Human-friendly relative time. Within ~7 days we show "Just now" /
 *  "N min ago" / "N hours ago" / "N days ago"; older than that we fall
 *  back to the absolute date so the age is unambiguous. */
function formatRelativeTimestamp(iso: string): string {
  const ts = new Date(iso);
  const diffMs = MOCK_NOW.getTime() - ts.getTime();
  const diffMin = Math.round(diffMs / 60_000);
  const diffH = Math.round(diffMs / 3_600_000);
  const diffD = Math.round(diffMs / 86_400_000);

  if (diffMs < 60_000) return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffH < 24) return diffH === 1 ? '1 hour ago' : `${diffH} hours ago`;
  if (diffD < 7) return diffD === 1 ? '1 day ago' : `${diffD} days ago`;
  // Older than a week — show the full date (e.g. "Apr 3, 2026").
  return ts.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtDuration(ms: number): string {
  if (ms === 0) return '—';
  if (ms < 1000) return `${Math.round(ms)}ms`;
  if (ms < 60_000) return `${(ms / 1000).toFixed(1)}s`;
  const m = Math.floor(ms / 60_000);
  const s = Math.round((ms % 60_000) / 1000);
  return `${m}m ${s}s`;
}

function fmtCreditsComma(n: number): string {
  return n.toLocaleString('en-US');
}

function fmtCost(credits: number): string {
  const cost = (credits / 1_000_000) * CREDIT_COST_RATE;
  if (cost < 0.0001) return '$0.00';
  return `$${cost.toFixed(4)}`;
}

function fmtOffset(ms: number): string {
  if (ms === 0) return '+0s';
  return `+${(ms / 1000).toFixed(1)}s`;
}

/** Deterministic avatar URL for a contact name. Uses pravatar.cc with a stable
 *  numeric seed derived from the name so the same person always shows the same face. */
function avatarUrlFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0;
  }
  const seed = Math.abs(hash) % 70 + 1; // pravatar has ~70 unique photos at /img/{1..70}
  return `https://i.pravatar.cc/48?img=${seed}`;
}

/** Deterministic background color for a persona name. Each persona gets a
 *  distinct Alloy color token so the chips read as part of the same design
 *  system as the charts + tags elsewhere in the app. Hex fallbacks mirror
 *  alloy-design-system/src/styles/tokens.css in case the var isn't loaded. */
// ── Tool category → Tag props ─────────────────────────────────────────────────

const ACTION_TAG_PROPS: Record<ToolCategory, { color: string; label: string }> = {
  communication: { color: 'blue', label: 'Communication' },
  data_cleanup: { color: 'purple', label: 'Data Cleanup' },
  scheduling: { color: 'matcha', label: 'Scheduling' },
};

// ── Styled primitives ─────────────────────────────────────────────────────────

const FilterBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  flex-wrap: wrap;
`;

const TableWrapper = styled.div<{ $columnCount: number }>`
  overflow: hidden;

  /* Force even column widths on the outer activity table only.
     Scoped via > table to avoid affecting the nested conversations table inside expanded rows. */
  & > table {
    table-layout: fixed;
    width: 100%;
  }
  /* Credits (2nd-to-last) is narrow — short numeric values; Goal
     (3rd-to-last) gets double the share of a regular column so long
     goal descriptions have room to breathe. Plain percentages (not
     calc()) are required here — Chrome/Safari ignore differing calc()
     widths under table-layout: fixed and flatten them to equal columns. */
  /* Column width weights: Goal gets 3×, all other non-Credits columns
     get 1×. Credits is pinned to a narrow 6%. Share formula keeps the
     row at exactly 100% regardless of columnCount.
       shares = (columnCount - 2) others + 3 (Goal) = columnCount + 1
       one share = 94% / (columnCount + 1) */
  & > table > thead > tr > th:not(:nth-last-child(2)):not(:nth-last-child(3)),
  & > table > tbody > tr > td:not(:nth-last-child(2)):not(:nth-last-child(3)) {
    width: ${p => (94 / (p.$columnCount + 1)).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(3),
  & > table > tbody > tr > td:nth-last-child(3) {
    width: ${p => ((94 / (p.$columnCount + 1)) * 3).toFixed(4)}%;
  }
  & > table > thead > tr > th:nth-last-child(2),
  & > table > tbody > tr > td:nth-last-child(2) {
    width: 6%;
  }
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4, 16px);
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DetailValue = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-primary, #151515);
`;

const WorkflowLink = styled.a`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  &:hover { text-decoration: underline; }
`;

/* CellText variant that truncates with ellipsis for long goal descriptions.
   Inherits CellText's typography via styled(CellText). */
const TruncatedCellText = styled(CellText)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Round avatar for the conversations list — deterministic photo per contact name.
const ContactAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--color-bg-tertiary, #f1f2f4);
`;

// Wrapper for the per-persona SVG avatar in the Persona column.
const PersonaAvatarWrap = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PersonaCellInner = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  min-width: 0;
`;

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

/* Split-cell variants so the right cell's left edge aligns with the Specialist column header. */
const ExpandedMetaCell = styled.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`;

const ExpandedMainCell = styled.td`
  padding: var(--space-6, 24px) var(--space-6, 24px) var(--space-6, 24px) var(--space-5, 20px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`;

/* Single full-width cell that contains the metadata + conversations
   sections. Using one td with a grid inside sidesteps the parent
   table's fixed column widths — we get a true 50/50 split on wide
   viewports and a stacked column on narrow ones. */
const ExpandedStackedCell = styled.td`
  padding: var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  vertical-align: top;
`;

const ExpandedGrid = styled.div<{ $stacked: boolean }>`
  display: grid;
  grid-template-columns: ${p => (p.$stacked ? '1fr' : '1fr 1fr')};
  gap: var(--space-6, 24px);
  align-items: start;
`;

const ExpandedFooterCell = styled.td`
  padding: 0 var(--space-6, 24px) var(--space-6, 24px);
  background: var(--color-bg-secondary, #f6f7f9);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
`;

const FullSummary = styled.p`
  margin: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`;

// ── Outcome tag (fixed-width) ────────────────────────────────────────────────

const OutcomeTagWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  /* Fixed-width tags so ✓, single digits, and double digits all align */
  & > span {
    min-width: 28px;
    justify-content: center;
    text-align: center;
  }
`;


// ── Collapsible section ──────────────────────────────────────────────────────

const CollapsibleHeader = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  &:hover { color: var(--color-content-secondary, #475569); }
`;

const SystemPromptBox = styled.div`
  background: var(--color-bg-tertiary, #f1f2f4);
  border-radius: var(--radius-md, 8px);
  padding: var(--space-4, 16px);
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
  white-space: pre-wrap;
`;

const RecalcRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`;

const LastCalcText = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`;

const TransparentTableWrap = styled.div`
  /* Override alloy table backgrounds so the conversations table blends with the expanded row bg */
  table, thead, tbody, tr, th, td {
    background: transparent !important;
  }
`;

// ── Timeline styles ──────────────────────────────────────────────────────────

const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: var(--space-2, 8px);
  align-items: baseline;
  padding: var(--space-2, 8px) 0;
  position: relative;
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 28px;
    bottom: -8px;
    width: 1px;
    background: var(--color-border-opaque, #e8eaee);
  }
`;

const StepOffset = styled.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 11px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  text-align: left;
`;

const StepDesc = styled.span`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-content-secondary, #475569);
`;

// ── Sub-components ────────────────────────────────────────────────────────────

function StepTimeline({ steps }: { steps: ExecutionStep[] }) {
  return (
    <Timeline aria-label="Execution steps">
      {steps.map((step, i) => {
        const { color, label } = ACTION_TAG_PROPS[step.toolCategory];
        return (
          <TimelineItem key={i}>
            <StepOffset>{fmtOffset(step.offsetMs)}</StepOffset>
            <StepDesc>{step.description}</StepDesc>
            <Tag variant="subtle" color={color as any} size="sm">{label}</Tag>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

// Indent the conversation timeline so the leading role label aligns
// with the "User" column name (after the chevron + avatar gutter of the
// enclosing conversations sub-table row).
const ThreadTimeline = styled(Timeline)`
  padding-left: 56px;
`;

function ThreadViewer({ thread }: { thread: ConversationMessage[] }) {
  return (
    <ThreadTimeline aria-label="Conversation turns">
      {thread.map((msg, i) => {
        const isAgent = msg.role === 'agent';
        return (
          <TimelineItem key={i}>
            <StepOffset>{isAgent ? 'Agent' : 'User'}</StepOffset>
            <StepDesc>{msg.content}</StepDesc>
          </TimelineItem>
        );
      })}
    </ThreadTimeline>
  );
}

// ── Outcome cell ─────────────────────────────────────────────────────────────

function OutcomeCell({ record }: { record: ExecutionRecord }) {
  if (record.deploymentType === 'engage_less') {
    const r = record as EngagelessExecution;
    if (r.status === 'success') return <Tag variant="subtle" color="green" size="sm"><CheckIcon size={12} /></Tag>;
    if (r.status === 'in_progress') return <Tag variant="subtle" color="neutral" size="sm"><RefreshCw04Icon size={12} /></Tag>;
    return null; // incomplete — blank
  }

  const r = record as EngageExecution;
  const goalCount = r.conversations.filter(c => c.outcome === 'goal_achieved').length;
  const noActionCount = r.conversations.filter(c => c.outcome === 'completed_no_action').length;
  const inProgressCount = r.conversations.filter(c => c.outcome === 'in_progress').length;

  return (
    <>
      {inProgressCount > 0 && <Tag variant="subtle" color="blue" size="sm">{inProgressCount}</Tag>}
      {noActionCount > 0 && <Tag variant="subtle" color="neutral" size="sm">{noActionCount}</Tag>}
      {goalCount > 0 && <Tag variant="subtle" color="green" size="sm">{goalCount}</Tag>}
      {goalCount === 0 && noActionCount === 0 && inProgressCount === 0 && (
        <Tag variant="subtle" color="neutral" size="sm">0</Tag>
      )}
    </>
  );
}

// ── Conversation outcome badge ───────────────────────────────────────────────

function ConversationOutcomeBadge({ outcome }: { outcome: string }) {
  switch (outcome) {
    case 'goal_achieved':
      return <StatusTag size="sm" status="success">Goal Achieved</StatusTag>;
    case 'completed_no_action':
      return <StatusTag size="sm" status="neutral">Completed No Action</StatusTag>;
    case 'in_progress':
      return <StatusTag size="sm" status="info">In Progress</StatusTag>;
    default:
      return null;
  }
}

// ── Engage expanded detail ───────────────────────────────────────────────────
// Returns two <tr> rows directly so the metadata cell spans the Time column
// and the conversations cell spans the Specialist + Outcome + Credits + Cost
// columns, aligning its left edge with the Specialist column header.

function EngageExpandedDetail({ record, mainColSpan, totalCols }: { record: EngageExecution; mainColSpan: number; totalCols: number }) {
  const [expandedConvId, setExpandedConvId] = useState<string | null>(null);
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
  // Stack the two cells once the viewport gets narrow enough that the
  // desktop "Time column + main column" split crushes the conversations
  // sub-table. 1024px roughly matches the tablet/narrow-desktop cutoff
  // where the split layout stops having room to breathe.
  const isNarrow = useMediaQuery('(max-width: 1023px)');

  const persona = mockPersonas.find(p => p.id === record.specialistId);

  const toggleConv = (id: string) => {
    setExpandedConvId(prev => (prev === id ? null : id));
  };

  // On mobile, the metadata + conversations collapse into a single
  // full-width cell that stacks the two sections vertically — they'd
  // otherwise share the cramped Time column width.
  const metaSection = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 24px)' }}>
      <Section>
        <Eyebrow>Goal</Eyebrow>
        <FullSummary>{record.goal}</FullSummary>
      </Section>

      <Section>
        <Eyebrow>Summary</Eyebrow>
        <FullSummary>{record.outcomeSummaryFull}</FullSummary>
      </Section>
    </div>
  );

  const conversationsSection = (
    <Section>
      <Eyebrow>Conversations</Eyebrow>
      <TransparentTableWrap><Table size="sm">
        <TableHeader>
          <TableRow hoverable={false}>
            <TableHead>User</TableHead>
            <TableHead>Outcome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {record.conversations.map(conv => (
            <React.Fragment key={conv.id}>
              <TableRow>
                <TableCell>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
                    onClick={() => toggleConv(conv.id)}
                    role="button"
                    aria-expanded={expandedConvId === conv.id}
                  >
                    <ExpandToggle as="span" style={{ cursor: 'inherit' }}>
                      {expandedConvId === conv.id ? <ChevronDownIcon size={12} /> : <ChevronRightIcon size={12} />}
                    </ExpandToggle>
                    <ContactAvatar src={avatarUrlFor(conv.contactName)} alt="" />
                    <CellText>{conv.contactName}</CellText>
                  </div>
                </TableCell>
                <TableCell>
                  <ConversationOutcomeBadge outcome={conv.outcome} />
                </TableCell>
              </TableRow>
              {expandedConvId === conv.id && (
                <tr>
                  <td colSpan={2} style={{ padding: '0 16px 16px' }}>
                    <ThreadViewer thread={conv.thread} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      </TransparentTableWrap>
    </Section>
  );

  return (
    <>
      {/* Top row — single full-width cell with a two-column grid inside.
          50/50 on wide viewports, stacks on narrow. */}
      <tr>
        <ExpandedStackedCell colSpan={totalCols}>
          <ExpandedGrid $stacked={isNarrow}>
            {metaSection}
            {conversationsSection}
          </ExpandedGrid>
        </ExpandedStackedCell>
      </tr>

      {/* Footer row — system prompt + recalculate, full table width */}
      <tr>
        <ExpandedFooterCell colSpan={totalCols}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 24px)' }}>
            <Section>
              <CollapsibleHeader onClick={() => setShowSystemPrompt(!showSystemPrompt)}>
                {showSystemPrompt ? <ChevronDownIcon size={12} /> : <ChevronRightIcon size={12} />}
                System Prompt
              </CollapsibleHeader>
              {showSystemPrompt && persona && (
                <SystemPromptBox>{persona.configuration.instructions}</SystemPromptBox>
              )}
            </Section>

            <RecalcRow>
              <Button size="sm" variant="secondary" onClick={() => {}}>Recalculate Outcome</Button>
              <LastCalcText>Last calculated {formatAbsoluteTimestamp(MOCK_NOW.toISOString())}</LastCalcText>
            </RecalcRow>
          </div>
        </ExpandedFooterCell>
      </tr>
    </>
  );
}

// ── Engage-less expanded detail ──────────────────────────────────────────────
// Same structural pattern as the engage variant: a top row with a 2-column
// grid (Goal + Summary on the left, Span Details on the right) and a
// footer row with the system-prompt disclosure + recalculate button.

function EngagelessExpandedDetail({ record, totalCols }: { record: EngagelessExecution; totalCols: number }) {
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
  const isNarrow = useMediaQuery('(max-width: 1023px)');
  const persona = mockPersonas.find(p => p.id === record.specialistId);

  const metaSection = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 24px)' }}>
      <Section>
        <Eyebrow>Goal</Eyebrow>
        <FullSummary>{record.goal}</FullSummary>
      </Section>
      <Section>
        <Eyebrow>Summary</Eyebrow>
        <FullSummary>{record.outcomeSummaryFull}</FullSummary>
      </Section>
    </div>
  );

  const spanDetailsSection = (
    <Section>
      <Eyebrow>Span details</Eyebrow>
      <StepTimeline steps={record.steps} />
    </Section>
  );

  return (
    <>
      {/* Top row — 2-col grid (meta left, span details right). Stacks on narrow viewports. */}
      <tr>
        <ExpandedStackedCell colSpan={totalCols}>
          <ExpandedGrid $stacked={isNarrow}>
            {metaSection}
            {spanDetailsSection}
          </ExpandedGrid>
        </ExpandedStackedCell>
      </tr>

      {/* Footer row — system prompt + recalculate, full table width */}
      <tr>
        <ExpandedFooterCell colSpan={totalCols}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6, 24px)' }}>
            <Section>
              <CollapsibleHeader onClick={() => setShowSystemPrompt(!showSystemPrompt)}>
                {showSystemPrompt ? <ChevronDownIcon size={12} /> : <ChevronRightIcon size={12} />}
                System Prompt
              </CollapsibleHeader>
              {showSystemPrompt && persona && (
                <SystemPromptBox>{persona.configuration.instructions}</SystemPromptBox>
              )}
            </Section>

            <RecalcRow>
              <Button size="sm" variant="secondary" onClick={() => {}}>Recalculate Outcome</Button>
              <LastCalcText>Last calculated {formatAbsoluteTimestamp(MOCK_NOW.toISOString())}</LastCalcText>
            </RecalcRow>
          </div>
        </ExpandedFooterCell>
      </tr>
    </>
  );
}

// ── Row ───────────────────────────────────────────────────────────────────────

interface RowProps {
  record: ExecutionRecord;
  expanded: boolean;
  onToggle: () => void;
  showPersonaColumn: boolean;
}

function ExecutionRow({ record, expanded, onToggle, showPersonaColumn }: RowProps) {
  const isEngage = record.deploymentType === 'engage';
  // Total column count — drives colSpans for expanded rows.
  // Columns: Time → [Persona] → Workflow → Goal → Credits → Outcome
  const totalCols = showPersonaColumn ? 6 : 5;
  // Conversations cell spans everything right of Time.
  const mainColSpan = totalCols - 1;

  return (
    <>
      <TableRow hoverable>
        {/* Time */}
        <TableCell>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ExpandToggle aria-label={expanded ? 'Collapse row' : 'Expand row'} aria-expanded={expanded} onClick={onToggle}>
              {expanded ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
            </ExpandToggle>
            <CellText variant="secondary" title={formatAbsoluteTimestamp(record.timestamp)}>
              {formatRelativeTimestamp(record.timestamp)}
            </CellText>
          </div>
        </TableCell>

        {/* Persona — shown only in aggregate views */}
        {showPersonaColumn && (
          <TableCell>
            <PersonaCellInner>
              <PersonaAvatarWrap aria-hidden="true">
                <PersonaAvatar personaName={record.personaName} size={24} />
              </PersonaAvatarWrap>
              <CellText>{record.personaName}</CellText>
            </PersonaCellInner>
          </TableCell>
        )}

        {/* Workflow — the workflow this specialist was deployed to */}
        <TableCell>
          <WorkflowLink
            href={record.workflow.href}
            onClick={e => e.stopPropagation()}
            title={record.workflow.name}
          >
            {record.workflow.name}
          </WorkflowLink>
        </TableCell>

        {/* Goal — the specialist's goal for this execution */}
        <TableCell>
          <TruncatedCellText variant="secondary" title={record.goal}>
            {record.goal}
          </TruncatedCellText>
        </TableCell>

        {/* Credits */}
        <TableCell>
          <CellText variant="secondary">{fmtCreditsComma(record.creditsUsed)}</CellText>
        </TableCell>

        {/* Outcome — rightmost, right-aligned */}
        <TableCell align="right">
          <OutcomeTagWrap style={{ justifyContent: 'flex-end' }}>
            <OutcomeCell record={record} />
          </OutcomeTagWrap>
        </TableCell>
      </TableRow>

      {expanded && (
        isEngage ? (
          /* Both variants now render their own <tr> rows (top split + footer)
             so the layout is consistent: left column = goal/summary,
             right column = conversations or span details. */
          <EngageExpandedDetail
            record={record as EngageExecution}
            mainColSpan={mainColSpan}
            totalCols={totalCols}
          />
        ) : (
          <EngagelessExpandedDetail
            record={record as EngagelessExecution}
            totalCols={totalCols}
          />
        )
      )}
    </>
  );
}

// ── Filter options ────────────────────────────────────────────────────────────

const PERSONA_OPTIONS = [
  { value: 'all', label: 'All Personas' },
  ...mockPersonas.map(p => ({ value: p.id, label: p.name })),
];

const TYPE_OPTIONS = [
  { value: 'all', label: 'All Types' },
  { value: 'engage', label: 'Engage' },
  { value: 'engage_less', label: 'Engage-less' },
];

const OUTCOME_OPTIONS = [
  { value: 'all', label: 'All Outcomes' },
  { value: 'success', label: 'Success' },
  { value: 'in_progress', label: 'In Progress' },
];

const ACTIVATION_OPTIONS = [
  { value: 'all', label: 'All Sources' },
  { value: 'workflow', label: 'Workflow' },
  { value: 'ponder', label: 'Ponder' },
];

// ── Filter logic ─────────────────────────────────────────────────────────────

function matchesOutcomeFilter(record: ExecutionRecord, filter: string): boolean {
  if (filter === 'all') return true;
  if (record.deploymentType === 'engage_less') {
    const r = record as EngagelessExecution;
    if (filter === 'success') return r.status === 'success';
    if (filter === 'in_progress') return r.status === 'in_progress';
    return true;
  }
  const r = record as EngageExecution;
  if (filter === 'success') return r.conversations.some(c => c.outcome === 'goal_achieved');
  if (filter === 'in_progress') {
    const hasGoal = r.conversations.some(c => c.outcome === 'goal_achieved');
    const hasInProgress = r.conversations.some(c => c.outcome === 'in_progress');
    return !hasGoal && hasInProgress;
  }
  return true;
}

// ── Main component ────────────────────────────────────────────────────────────

interface SpecialistActivityTableProps {
  specialistId?: string | null;
  timeRange: TimeRange;
  deploymentTypeFilter?: SpecialistType | 'all';
  records?: ExecutionRecord[];
  showPersonaColumn?: boolean;
  /** When false, the table omits its own filter bar. Use when the hosting
   *  page renders a filter bar of its own so the user sees a single control. */
  showFilters?: boolean;
}

export function SpecialistActivityTable({ specialistId, timeRange, deploymentTypeFilter = 'all', records: recordsProp, showFilters = true }: SpecialistActivityTableProps) {
  const [personaFilter, setPersonaFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [outcomeFilter, setOutcomeFilter] = useState<string>('all');
  const [activationFilter, setActivationFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const windowRecords = useMemo(() => {
    const window = getWindow(timeRange);
    const base = recordsProp ?? MOCK_EXECUTIONS.filter(r =>
      (!specialistId || r.specialistId === specialistId) &&
      (deploymentTypeFilter === 'all' || r.deploymentType === deploymentTypeFilter),
    );
    return filterByWindow(base, window)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [specialistId, timeRange, deploymentTypeFilter, recordsProp]);

  const rows = useMemo(() => {
    return windowRecords
      .filter(r => personaFilter === 'all' || r.specialistId === personaFilter)
      .filter(r => typeFilter === 'all' || r.deploymentType === typeFilter)
      .filter(r => matchesOutcomeFilter(r, outcomeFilter))
      .filter(r => activationFilter === 'all' || r.activatedBy === activationFilter);
  }, [windowRecords, personaFilter, typeFilter, outcomeFilter, activationFilter]);

  // Only show persona filter when not scoped to a single persona
  // Show Persona column + filter only in aggregate views (when no specialistId is provided).
  const showPersonaFilter = !specialistId;
  const showPersonaColumn = !specialistId;
  // Columns: Time → [Persona] → Workflow → Goal → Credits → Outcome
  const totalCols = showPersonaColumn ? 6 : 5;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3, 12px)' }}>
      {showFilters && (
        <FilterBarWrapper>
          {showPersonaFilter && (
            <div style={{ width: 160 }}>
              <SelectField size="sm" options={PERSONA_OPTIONS} value={personaFilter} onChange={setPersonaFilter} />
            </div>
          )}
          <div style={{ width: 150 }}>
            <SelectField size="sm" options={TYPE_OPTIONS} value={typeFilter} onChange={setTypeFilter} />
          </div>
          <div style={{ width: 150 }}>
            <SelectField size="sm" options={OUTCOME_OPTIONS} value={outcomeFilter} onChange={setOutcomeFilter} />
          </div>
          <div style={{ width: 150 }}>
            <SelectField size="sm" options={ACTIVATION_OPTIONS} value={activationFilter} onChange={setActivationFilter} />
          </div>
        </FilterBarWrapper>
      )}

      <TableWrapper $columnCount={totalCols}>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>Time</TableHead>
              {showPersonaColumn && <TableHead>Persona</TableHead>}
              <TableHead>Workflow</TableHead>
              <TableHead>Goal</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead align="right">Outcome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <EmptyRow>
                <EmptyCell colSpan={totalCols}>No activity matches the current filters.</EmptyCell>
              </EmptyRow>
            ) : (
              rows.map(record => (
                <ExecutionRow
                  key={record.id}
                  record={record}
                  expanded={expandedId === record.id}
                  onToggle={() => setExpandedId(prev => (prev === record.id ? null : record.id))}
                  showPersonaColumn={showPersonaColumn}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
