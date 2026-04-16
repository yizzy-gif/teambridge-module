// Activity table for AI Specialist execution history.
// Collapsed row: Time → Specialist → Outcome → Credits → Cost
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
  ChevronDownIcon,
  ChevronRightIcon,
  Eyebrow,
  Button,
} from 'alloy-design-system';
import {
  MOCK_EXECUTIONS,
  CREDIT_COST_RATE,
  getWindow,
  filterByWindow,
} from '../../data/mockExecutions';
import { mockPersonas } from '../../data/mockPersonas';
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

function formatRelativeTimestamp(iso: string): string {
  const ts = new Date(iso);
  const diffMs = MOCK_NOW.getTime() - ts.getTime();
  const diffH  = diffMs / 3_600_000;
  if (diffH < 1)  return `${Math.round(diffMs / 60_000)}m ago`;
  if (diffH < 24) return `${Math.round(diffH)}h ago`;
  return ts.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
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

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4, 16px);
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5, 20px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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
  &:hover { text-decoration: underline; }
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

const ExpandedContent = styled.td`
  padding: var(--space-6, 24px);
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

// ── Thread viewer ────────────────────────────────────────────────────────────

const ThreadContainer = styled.div`
  padding: var(--space-3, 12px) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;

const ThreadMessage = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 var(--space-2, 8px);
  font-family: var(--font-mono, 'Geist Mono', monospace);
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-content-secondary, #475569);
`;

const ThreadRole = styled.span<{ $isAgent: boolean }>`
  font-weight: 600;
  white-space: nowrap;
  color: ${p => p.$isAgent ? 'var(--color-content-link, #446cff)' : 'var(--color-content-primary, #151515)'};
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
  gap: var(--space-2, 8px) var(--space-3, 12px);
  align-items: baseline;
  padding: var(--space-2, 8px) 0;
  position: relative;
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

const StepOffset = styled.span`
  font-family: var(--font-mono, 'Geist Mono', monospace);
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

function ThreadViewer({ thread }: { thread: ConversationMessage[] }) {
  return (
    <ThreadContainer>
      {thread.map((msg, i) => (
        <ThreadMessage key={i}>
          <ThreadRole $isAgent={msg.role === 'agent'}>[{msg.role === 'agent' ? 'Agent' : 'User'}]</ThreadRole>
          <span>{msg.content}</span>
        </ThreadMessage>
      ))}
    </ThreadContainer>
  );
}

// ── Outcome cell ─────────────────────────────────────────────────────────────

function OutcomeCell({ record }: { record: ExecutionRecord }) {
  if (record.deploymentType === 'engage_less') {
    const r = record as EngagelessExecution;
    if (r.status === 'success') return <Tag variant="subtle" color="green" size="sm">✓</Tag>;
    if (r.status === 'in_progress') return <Tag variant="subtle" color="blue" size="sm">⟳</Tag>;
    return null; // incomplete — blank
  }

  const r = record as EngageExecution;
  const goalCount = r.conversations.filter(c => c.outcome === 'goal_achieved').length;
  const noActionCount = r.conversations.filter(c => c.outcome === 'completed_no_action').length;
  const inProgressCount = r.conversations.filter(c => c.outcome === 'in_progress').length;

  return (
    <>
      {goalCount > 0 && <Tag variant="subtle" color="green" size="sm">{goalCount}</Tag>}
      {noActionCount > 0 && <Tag variant="subtle" color="neutral" size="sm">{noActionCount}</Tag>}
      {inProgressCount > 0 && <Tag variant="subtle" color="blue" size="sm">{inProgressCount}</Tag>}
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

function EngageExpandedDetail({ record }: { record: EngageExecution }) {
  const [expandedConvs, setExpandedConvs] = useState<Set<string>>(new Set());
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);

  const persona = mockPersonas.find(p => p.id === record.specialistId);

  const toggleConv = (id: string) => {
    setExpandedConvs(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const reachedOut = record.conversations.map(c => c.contactName).join(', ');

  return (
    <DetailSections>
      <TwoColumnLayout>
        {/* Left column — metadata */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4, 16px)' }}>
          <Section>
            <Eyebrow>Reached out to</Eyebrow>
            <DetailValue>{reachedOut}</DetailValue>
          </Section>

          <Section>
            <Eyebrow>Goal</Eyebrow>
            <FullSummary>{record.goal}</FullSummary>
          </Section>

          <Section>
            <Eyebrow>Summary</Eyebrow>
            <FullSummary>{record.outcomeSummaryFull}</FullSummary>
          </Section>
        </div>

        {/* Right column — conversations */}
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
                        aria-expanded={expandedConvs.has(conv.id)}
                      >
                        <ExpandToggle as="span" style={{ cursor: 'inherit' }}>
                          {expandedConvs.has(conv.id) ? <ChevronDownIcon size={12} /> : <ChevronRightIcon size={12} />}
                        </ExpandToggle>
                        <CellText>{conv.contactName}</CellText>
                      </div>
                    </TableCell>
                    <TableCell>
                      <ConversationOutcomeBadge outcome={conv.outcome} />
                    </TableCell>
                  </TableRow>
                  {expandedConvs.has(conv.id) && (
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
      </TwoColumnLayout>

      {/* System prompt */}
      <Section>
        <CollapsibleHeader onClick={() => setShowSystemPrompt(!showSystemPrompt)}>
          {showSystemPrompt ? <ChevronDownIcon size={12} /> : <ChevronRightIcon size={12} />}
          System Prompt
        </CollapsibleHeader>
        {showSystemPrompt && persona && (
          <SystemPromptBox>{persona.configuration.instructions}</SystemPromptBox>
        )}
      </Section>

      {/* Recalculate */}
      <RecalcRow>
        <Button size="sm" variant="secondary" onClick={() => {}}>Recalculate Outcome</Button>
        <LastCalcText>Last calculated {formatAbsoluteTimestamp(MOCK_NOW.toISOString())}</LastCalcText>
      </RecalcRow>
    </DetailSections>
  );
}

// ── Engage-less expanded detail ──────────────────────────────────────────────

function EngagelessExpandedDetail({ record }: { record: EngagelessExecution }) {
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
  const persona = mockPersonas.find(p => p.id === record.specialistId);

  return (
    <DetailSections>
      <Section>
        <Eyebrow>Goal</Eyebrow>
        <FullSummary>{record.goal}</FullSummary>
      </Section>

      <Section>
        <Eyebrow>Summary</Eyebrow>
        <FullSummary>{record.outcomeSummaryFull}</FullSummary>
      </Section>

      <hr style={{ margin: 0, border: 'none', borderTop: '1px solid var(--color-border-opaque)' }} />

      <Section>
        <Eyebrow>Span details</Eyebrow>
        <StepTimeline steps={record.steps} />
      </Section>

      <hr style={{ margin: 0, border: 'none', borderTop: '1px solid var(--color-border-opaque)' }} />

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
    </DetailSections>
  );
}

// ── Row ───────────────────────────────────────────────────────────────────────

interface RowProps {
  record: ExecutionRecord;
  expanded: boolean;
  onToggle: () => void;
}

function ExecutionRow({ record, expanded, onToggle }: RowProps) {
  const isEngage = record.deploymentType === 'engage';

  return (
    <>
      <TableRow hoverable>
        {/* Time */}
        <TableCell>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ExpandToggle aria-label={expanded ? 'Collapse row' : 'Expand row'} aria-expanded={expanded} onClick={onToggle}>
              {expanded ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
            </ExpandToggle>
            <CellText variant="secondary">{formatAbsoluteTimestamp(record.timestamp)}</CellText>
          </div>
        </TableCell>

        {/* Specialist */}
        <TableCell>
          <CellText>{record.personaName}</CellText>
        </TableCell>

        {/* Outcome */}
        <TableCell>
          <OutcomeTagWrap>
            <OutcomeCell record={record} />
          </OutcomeTagWrap>
        </TableCell>

        {/* Credits */}
        <TableCell>
          <CellText variant="secondary">{fmtCreditsComma(record.creditsUsed)}</CellText>
        </TableCell>

        {/* Cost */}
        <TableCell>
          <CellText variant="secondary">{fmtCost(record.creditsUsed)}</CellText>
        </TableCell>
      </TableRow>

      {expanded && (
        <tr>
          <ExpandedContent colSpan={5}>
            {isEngage ? (
              <EngageExpandedDetail record={record as EngageExecution} />
            ) : (
              <EngagelessExpandedDetail record={record as EngagelessExecution} />
            )}
          </ExpandedContent>
        </tr>
      )}
    </>
  );
}

// ── Filter options ────────────────────────────────────────────────────────────

const PERSONA_OPTIONS = [
  { value: 'all', label: 'All Specialists' },
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
}

export function SpecialistActivityTable({ specialistId, timeRange, deploymentTypeFilter = 'all', records: recordsProp }: SpecialistActivityTableProps) {
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
  const showPersonaFilter = !specialistId;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3, 12px)' }}>
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

      <TableWrapper>
        <Table size="sm">
          <TableHeader>
            <TableRow hoverable={false}>
              <TableHead>Time</TableHead>
              <TableHead>Specialist</TableHead>
              <TableHead>Outcome</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>Cost</TableHead>
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
                  onToggle={() => setExpandedId(prev => (prev === record.id ? null : record.id))}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
