// AI Specialists list page.
// Displays all persona cards and a "New Specialist" dialog for creating new personas.

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  Button,
  PlusIcon,
} from 'alloy-design-system';
import { mockPersonas } from '../../../data/mockPersonas';
import { PersonaCard } from '../../../components/AISpecialists/PersonaCard';
import { PersonaForm } from '../../../components/AISpecialists/PersonaForm';
import type { PersonaFormValues } from '../../../components/AISpecialists/PersonaForm';

interface AISpecialistsListPageProps {
  onPersonaClick: (id: string) => void;
}

const FORM_ID = 'new-specialist-form';

// ── Styled primitives — follows the pattern from src/pages/index.tsx ─────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;

const PageTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-3, 12px);
`;

// ── Component ─────────────────────────────────────────────────────────────────

export function AISpecialistsListPage({ onPersonaClick }: AISpecialistsListPageProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleSubmit(_values: PersonaFormValues) {
    // TODO: wire to API — for now just close the dialog
    setDialogOpen(false);
  }

  return (
    <Page>
      <PageTitleRow>
        <PageTitle>Personas</PageTitle>
        <Button
          variant="primary"
          size="sm"
          leadingArtwork={<PlusIcon />}
          onClick={() => setDialogOpen(true)}
        >
          New Persona
        </Button>
      </PageTitleRow>

      <CardGrid>
        {mockPersonas.map(persona => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            onClick={onPersonaClick}
          />
        ))}
      </CardGrid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} size="md">
        <DialogHeader onClose={() => setDialogOpen(false)}>
          New Specialist
        </DialogHeader>
        <DialogContent>
          <PersonaForm
            id={FORM_ID}
            onSubmit={handleSubmit}
          />
        </DialogContent>
        <DialogFooter>
          <Button variant="secondary" size="sm" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" type="submit" form={FORM_ID}>
            Create Specialist
          </Button>
        </DialogFooter>
      </Dialog>
    </Page>
  );
}
