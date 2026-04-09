// Clickable card representing a single AI Specialist persona in the list view.

import React from 'react';
import styled from 'styled-components';
import type { Persona } from '../../data/mockPersonas';

interface PersonaCardProps {
  persona: Persona;
  onClick: (id: string) => void;
}

const Root = styled.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-lg, 12px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  transition: box-shadow var(--duration-base, 150ms) var(--ease-default, ease);
  &:hover {
    box-shadow: var(--shadow-below-md);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;

const Role = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`;

const Description = styled.div`
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
  line-height: 1.5;
  margin-top: 4px;
`;

export function PersonaCard({ persona, onClick }: PersonaCardProps) {
  return (
    <Root
      role="button"
      tabIndex={0}
      onClick={() => onClick(persona.id)}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(persona.id);
        }
      }}
    >
      <Role>{persona.role}</Role>
      <Name>{persona.name}</Name>
      <Description>{persona.description}</Description>
    </Root>
  );
}
