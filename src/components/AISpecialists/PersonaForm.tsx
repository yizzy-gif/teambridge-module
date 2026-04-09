// Form for creating or editing an AI Specialist persona.
// Buttons are intentionally excluded — render them in a DialogFooter and
// submit via the form's id prop: <Button type="submit" form={id} />.

import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, SelectField, TextArea } from 'alloy-design-system';
import type { VoiceOption } from '../../data/mockPersonas';

export interface PersonaFormValues {
  name: string;
  role: string;
  voice: VoiceOption;
  description: string;
}

interface PersonaFormProps {
  /** HTML id applied to the <form> element — used by external submit buttons via form= attribute */
  id?: string;
  initialValues?: Partial<PersonaFormValues>;
  onSubmit: (values: PersonaFormValues) => void;
}

const VOICE_OPTIONS = [
  { value: 'alloy',   label: 'Alloy'   },
  { value: 'echo',    label: 'Echo'    },
  { value: 'fable',   label: 'Fable'   },
  { value: 'onyx',    label: 'Onyx'    },
  { value: 'nova',    label: 'Nova'    },
  { value: 'shimmer', label: 'Shimmer' },
];

const FormRoot = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4, 16px);
`;

export function PersonaForm({ id, initialValues, onSubmit }: PersonaFormProps) {
  const [name,        setName       ] = useState(initialValues?.name        ?? '');
  const [role,        setRole       ] = useState(initialValues?.role        ?? '');
  const [voice,       setVoice      ] = useState<string>(initialValues?.voice ?? '');
  const [description, setDescription] = useState(initialValues?.description ?? '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ name, role, voice: voice as VoiceOption, description });
  }

  return (
    <FormRoot id={id} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="e.g. HR Assistant"
      />
      <TextField
        label="Role"
        required
        value={role}
        onChange={e => setRole(e.target.value)}
        placeholder="e.g. Human Resources"
      />
      <SelectField
        label="Voice"
        required
        options={VOICE_OPTIONS}
        value={voice}
        onChange={setVoice}
        placeholder="Select a voice…"
      />
      <TextArea
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="What does this specialist do?"
        rows={3}
      />
    </FormRoot>
  );
}
