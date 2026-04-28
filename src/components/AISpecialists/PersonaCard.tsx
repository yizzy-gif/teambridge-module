// Clickable card representing a single AI Specialist persona in the list view.

import React from 'react';
import styled from 'styled-components';
import { VolumeMaxIcon } from 'alloy-design-system';
import type { Persona } from '../../data/mockPersonas';
import { PersonaAvatar } from './PersonaAvatar';

interface PersonaCardProps {
  persona: Persona;
  onClick: (id: string) => void;
}

const Root = styled.div`
  position: relative;
  background: var(--color-bg-secondary, #f6f7f9);
  border-radius: var(--radius-lg, 12px);
  padding: 24px;
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

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding-right: 56px;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--color-content-primary, #151515);
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  border: 1px solid var(--color-border-opaque, #dfdfdf);
  border-radius: var(--radius-button, 6px);
  background: var(--color-bg-primary, #fff);
  overflow: hidden;
  flex-shrink: 0;
`;

const PillIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
`;

const PillLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  padding-right: 8px;
  white-space: nowrap;
`;

const Role = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
  letter-spacing: -0.078px;
`;

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-content-tertiary, #87919f);
`;

const CardAvatar = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  pointer-events: none;

  svg { width: 100%; height: 100%; display: block; }
`;

export function PersonaCard({ persona, onClick }: PersonaCardProps) {
  const voiceLabel = persona.voice.charAt(0).toUpperCase() + persona.voice.slice(1);

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
      <NameRow>
        <Name>{persona.name}</Name>
        <Pill>
          <PillIcon>
            <VolumeMaxIcon size={12} />
          </PillIcon>
          <PillLabel>{voiceLabel}</PillLabel>
        </Pill>
      </NameRow>
      <Role>{persona.role}</Role>
      <Description>{persona.description}</Description>

      <CardAvatar aria-hidden="true">
        <PersonaAvatar personaId={persona.id} size={44} />
      </CardAvatar>
    </Root>
  );
}
