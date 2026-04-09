// Voice selector for a single AI Specialist persona.
// Renders an Alloy RadioGroup with 6 preset voice options.
// Each option label includes a Microphone02Icon as a preview indicator.

import React from 'react';
import styled from 'styled-components';
import { RadioGroup, Microphone02Icon } from 'alloy-design-system';
import type { VoiceOption } from '../../data/mockPersonas';

interface VoiceSelectorProps {
  value: string;
  onChange: (voice: VoiceOption) => void;
}

const VoiceLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);
`;

const VOICE_NAMES: VoiceOption[] = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];

const VOICE_OPTIONS = VOICE_NAMES.map(v => ({
  value: v,
  label: (
    <VoiceLabel>
      <Microphone02Icon size={14} />
      {v.charAt(0).toUpperCase() + v.slice(1)}
    </VoiceLabel>
  ),
}));

export function VoiceSelector({ value, onChange }: VoiceSelectorProps) {
  return (
    <RadioGroup
      label="Voice"
      options={VOICE_OPTIONS}
      value={value}
      onChange={v => onChange(v as VoiceOption)}
      orientation="horizontal"
    />
  );
}
