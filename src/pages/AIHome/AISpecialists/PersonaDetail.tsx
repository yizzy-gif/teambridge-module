// Single AI Specialist persona detail page.
// Header: Figma node 642:8177 — avatar badge, name+voice pill, role, description, pencil edit.
// Pencil opens an "Edit Persona" Alloy Dialog with image selector, name, voice, role fields.
// Voice section removed from page body (moved into edit dialog).

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  VolumeMaxIcon,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  Button,
  TextField,
  SelectField,
  TextArea,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  CellText,
  StatusTag,
  Tag,
} from 'alloy-design-system';
import { mockPersonas } from '../../../data/mockPersonas';
import { MultiTagInput } from '../../../components/AISpecialists/MultiTagInput';
import { PersonaUsageSection } from '../../../components/AISpecialists/PersonaUsageSection';
import { SpecialistActivityTable } from '../../../components/AISpecialists/SpecialistActivityTable';
import type { VoiceOption } from '../../../data/mockPersonas';
import { DEPLOYMENTS } from '../../../data/mockExecutions';
import type { TimeRange } from '../../../data/mockExecutions';

// Role tag suggestions derived from all existing personas
const ROLE_SUGGESTIONS = Array.from(new Set(mockPersonas.map(p => p.role)));

interface AISpecialistPersonaDetailProps {
  personaId: string;
  onBack: () => void;
}

// Inline pencil SVG — Edit03Icon exists in Alloy but is not exported from its public index
function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 11.5L2.5 14l2.5-.5L13.414 5.086a1 1 0 0 0 0-1.414L12.328 2.586a1 1 0 0 0-1.414 0L2 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10 4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// User/profile SVG for avatar upload placeholder
function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const VOICE_OPTIONS = [
  { value: 'alloy',   label: 'Alloy'   },
  { value: 'echo',    label: 'Echo'    },
  { value: 'fable',   label: 'Fable'   },
  { value: 'onyx',    label: 'Onyx'    },
  { value: 'nova',    label: 'Nova'    },
  { value: 'shimmer', label: 'Shimmer' },
];

const EDIT_FORM_ID = 'edit-persona-form';

// Override Alloy Dialog's overflow:hidden/.content overflow-y:auto so the
// SelectField dropdown panel can escape its containing block.
const EditPersonaDialogFix = createGlobalStyle`
  [role="dialog"][aria-label="Edit Persona"] > div {
    overflow: visible !important;
  }
`;

// ── Styled primitives ─────────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;

/* ── Header card ─────────────────────────────────────────────────────────── */

const HeaderCard = styled.div`
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: var(--space-4, 16px);
`;

const AvatarBadge = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-button, 6px);
  background: var(--gradient-ai, linear-gradient(135deg, #8c4fe2, #446cff, #1edfde));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
`;

const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  flex: 1;
  min-width: 0;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1, 4px);
  flex-wrap: wrap;
`;

const PersonaName = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VoicePill = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border: 1px solid var(--color-border-opaque, #cbd0d7);
  border-radius: var(--radius-button, 6px);
  overflow: hidden;
  flex-shrink: 0;
`;

const VoicePillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`;

const VoicePillLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #2b333f);
  padding-right: 6px;
  white-space: nowrap;
`;

const PersonaRole = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-content-secondary, #475569);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PersonaDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-tertiary, #87919f);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EditIconButton = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #87919f);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;

/* ── Edit dialog ─────────────────────────────────────────────────────────── */

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;

/* Avatar upload area */
const AvatarUpload = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4, 16px);
`;

const AvatarPreview = styled.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 12px);
  background: var(--gradient-ai, linear-gradient(135deg, #8c4fe2, #446cff, #1edfde));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
`;

const AvatarUploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AvatarUploadLabel = styled.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
`;

const AvatarUploadHint = styled.div`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-tertiary, #87919f);
`;

const UploadButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-link, #446cff);
  cursor: pointer;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`;

/* ── Section heading ─────────────────────────────────────────────────────── */

const SectionHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`;

/* ── Deployments section layout ──────────────────────────────────────────── */

const DeploymentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
`;

const WorkflowLink = styled.a`
  color: var(--color-content-link, #446cff);
  text-decoration: none;
  font-weight: 500;
  &:hover { text-decoration: underline; }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
    border-radius: var(--radius-sm, 4px);
  }
`;

const DeploymentsEmptyState = styled.div`
  padding: 48px 0;
  text-align: center;
  font-size: 13px;
  color: var(--color-content-tertiary, #87919f);
`;

/* ── Tab bar ────────────────────────────────────────────────────────────── */

const TabBarContainer = styled.div`
  display: flex;
  gap: var(--space-1, 4px);
  border-bottom: 1px solid var(--color-border-secondary, #e2e4e8);
`;

const TabButton = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  padding: var(--space-2, 8px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: ${p => (p.$active ? 600 : 400)};
  line-height: 20px;
  color: ${p =>
    p.$active
      ? 'var(--color-content-primary, #151515)'
      : 'var(--color-content-tertiary, #87919f)'};
  border-bottom: 2px solid
    ${p => (p.$active ? 'var(--color-content-primary, #151515)' : 'transparent')};
  margin-bottom: -1px;
  transition: color 150ms ease, border-color 150ms ease;
  &:hover {
    color: var(--color-content-primary, #151515);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export function AISpecialistPersonaDetail({ personaId, onBack }: AISpecialistPersonaDetailProps) {
  const persona = mockPersonas.find(p => p.id === personaId);

  // Displayed values — updated when the user saves the edit dialog
  const [displayName, setDisplayName] = useState(persona?.name ?? '');
  const [displayTags, setDisplayTags] = useState<string[]>(
    persona?.role ? [persona.role] : [],
  );
  const [displayDescription, setDisplayDescription] = useState(persona?.description ?? '');
  const [selectedVoice, setSelectedVoice] = useState<VoiceOption>(persona?.voice ?? 'alloy');

  const [editOpen, setEditOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'deployments' | 'activities'>('activities');
  const [activityTimeRange, setActivityTimeRange] = useState<TimeRange>('7d');

  // Edit form state (ephemeral until saved)
  const [editName, setEditName] = useState('');
  const [editTags, setEditTags] = useState<string[]>([]);
  const [editVoice, setEditVoice] = useState<string>('alloy');
  const [editDescription, setEditDescription] = useState('');

  if (!persona) {
    return (
      <Page>
        <p>Specialist not found.</p>
      </Page>
    );
  }

  const voiceLabel = selectedVoice.charAt(0).toUpperCase() + selectedVoice.slice(1);
  const initial = displayName.charAt(0).toUpperCase();

  function handleEditOpen() {
    setEditName(displayName);
    setEditTags(displayTags);
    setEditVoice(selectedVoice);
    setEditDescription(displayDescription);
    setEditOpen(true);
  }

  function handleEditSave(e: React.FormEvent) {
    e.preventDefault();
    setDisplayName(editName);
    setDisplayTags(editTags);
    setDisplayDescription(editDescription);
    setSelectedVoice(editVoice as VoiceOption);
    setEditOpen(false);
  }

  // Deployments for this persona
  const personaDeployments = DEPLOYMENTS.filter(d => d.personaId === personaId);

  return (
    <Page>
      {/* ── Zone 1: Overview (untouched) ──────────────────────────────────── */}
      <HeaderCard>
        <AvatarBadge>{initial}</AvatarBadge>

        <HeaderGroup>
          <NameRow>
            <PersonaName>{displayName}</PersonaName>
            <VoicePill>
              <VoicePillIcon>
                <VolumeMaxIcon size={12} />
              </VoicePillIcon>
              <VoicePillLabel>{voiceLabel}</VoicePillLabel>
            </VoicePill>
          </NameRow>
          <PersonaRole>{displayTags.join(' · ')}</PersonaRole>
          <PersonaDescription>{displayDescription}</PersonaDescription>
        </HeaderGroup>

        <EditIconButton aria-label="Edit specialist" onClick={handleEditOpen}>
          <PencilIcon />
        </EditIconButton>
      </HeaderCard>

      {/* Edit Persona dialog */}
      {editOpen && <EditPersonaDialogFix />}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} size="md" aria-label="Edit Persona">
        <DialogHeader onClose={() => setEditOpen(false)}>
          Edit Persona
        </DialogHeader>
        <DialogContent style={{ overflow: 'visible' }}>
          <EditForm id={EDIT_FORM_ID} onSubmit={handleEditSave}>
            {/* Image / avatar selector */}
            <AvatarUpload>
              <AvatarPreview>{editName.charAt(0).toUpperCase() || <UserIcon />}</AvatarPreview>
              <AvatarUploadInfo>
                <AvatarUploadLabel>Profile image</AvatarUploadLabel>
                <AvatarUploadHint>Recommended: 256×256px, PNG or JPG</AvatarUploadHint>
                <UploadButton type="button">Upload image</UploadButton>
              </AvatarUploadInfo>
            </AvatarUpload>

            <TextField
              label="Name"
              required
              value={editName}
              onChange={e => setEditName(e.target.value)}
              placeholder="e.g. HR Assistant"
            />
            <SelectField
              label="Voice"
              required
              size="sm"
              leadingIcon={<VolumeMaxIcon size={14} />}
              options={VOICE_OPTIONS}
              value={editVoice}
              onChange={setEditVoice}
              placeholder="Select a voice…"
            />
            <MultiTagInput
              label="Role"
              required
              value={editTags}
              onChange={setEditTags}
              suggestions={ROLE_SUGGESTIONS}
              placeholder="Add a role tag…"
            />
            <TextArea
              label="Description"
              required
              value={editDescription}
              onChange={e => setEditDescription(e.target.value)}
              placeholder="e.g. Answers employee questions about benefits and policies."
              rows={3}
            />
          </EditForm>
        </DialogContent>
        <DialogFooter>
          <Button variant="secondary" size="sm" onClick={() => setEditOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" type="submit" form={EDIT_FORM_ID}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>

      {/* ── Zone 2: Usage Stats & Charts ──────────────────────────────────── */}
      <PersonaUsageSection personaId={personaId} />

      {/* ── Zone 3: Deployments / Activities (tabbed) ────────────────────── */}
      <DeploymentsSection>
        <TabBarContainer>
          <TabButton $active={activeTab === 'activities'} onClick={() => setActiveTab('activities')}>
            Activities
          </TabButton>
          <TabButton $active={activeTab === 'deployments'} onClick={() => setActiveTab('deployments')}>
            Deployments
          </TabButton>
        </TabBarContainer>

        {activeTab === 'deployments' && (
          <>
            {personaDeployments.length === 0 ? (
              <DeploymentsEmptyState>
                This persona hasn't been added to any workflows yet.
              </DeploymentsEmptyState>
            ) : (
              <Table size="md">
                <TableHeader>
                  <TableRow hoverable={false}>
                    <TableHead>Workflow</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {personaDeployments.map(dep => (
                    <TableRow key={dep.id}>
                      <TableCell>
                        <WorkflowLink href={dep.workflow.href}>
                          <CellText>{dep.workflow.name}</CellText>
                        </WorkflowLink>
                      </TableCell>
                      <TableCell>
                        <Tag
                          size="sm"
                          color={dep.type === 'engage' ? 'purple' : 'grey'}
                        >
                          {dep.type === 'engage' ? 'Engage' : 'Engage-less'}
                        </Tag>
                      </TableCell>
                      <TableCell>
                        <StatusTag
                          size="sm"
                          status={dep.status === 'active' ? 'success' : 'warning'}
                        >
                          {dep.status === 'active' ? 'Active' : 'Paused'}
                        </StatusTag>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </>
        )}

        {activeTab === 'activities' && (
          <SpecialistActivityTable
            specialistId={personaId}
            timeRange={activityTimeRange}
          />
        )}
      </DeploymentsSection>
    </Page>
  );
}
