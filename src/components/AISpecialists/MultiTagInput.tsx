// Multi-tag input with autocomplete suggestions.
// Tags display as removable chips; typing filters suggestions; Enter or click to add.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { XIcon } from 'alloy-design-system';

export interface MultiTagInputProps {
  label?: React.ReactNode;
  required?: boolean;
  value: string[];
  onChange: (tags: string[]) => void;
  suggestions?: string[];
  placeholder?: string;
}

// ── Styled primitives ─────────────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const Label = styled.label`
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-primary, #151515);
  cursor: default;
`;

const RequiredMark = styled.span`
  color: var(--color-content-error, #e5484d);
  margin-left: 2px;
`;

const ChipsContainer = styled.div<{ $focused: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  min-height: 36px;
  background: var(--color-bg-primary, #fff);
  border: 1px solid ${({ $focused }) =>
    $focused ? 'var(--color-border-focus, #446cff)' : 'var(--color-border-opaque, #cbd0d7)'};
  border-radius: var(--radius-button, 6px);
  box-shadow: ${({ $focused }) =>
    $focused
      ? '0 0 0 3px color-mix(in srgb, var(--color-border-focus, #446cff) 18%, transparent)'
      : 'none'};
  cursor: text;
  transition:
    border-color var(--duration-fast, 120ms),
    box-shadow var(--duration-fast, 120ms);
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 5px 2px 8px;
  background: var(--color-bg-secondary, #f6f7f9);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-full, 9999px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-xs, 12px);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-tight, 1.25);
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
`;

const ChipRemove = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-content-tertiary, #87919f);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
    color: var(--color-content-primary, #151515);
  }
`;

const TextInput = styled.input`
  all: unset;
  flex: 1;
  min-width: 80px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-normal, 1.5);
  color: var(--color-content-primary, #151515);
  &::placeholder {
    color: var(--color-content-disabled, #b3b9c4);
  }
`;

const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: var(--radius-button, 6px);
  box-shadow: var(--shadow-below-md);
  z-index: var(--z-dropdown, 200);
  padding: var(--space-1, 4px);
  max-height: 200px;
  overflow-y: auto;
`;

const SuggestionRow = styled.button`
  all: unset;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: var(--text-sm, 13px);
  font-weight: var(--font-weight-normal, 400);
  line-height: var(--line-height-snug, 1.375);
  color: var(--color-content-secondary, #475569);
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
    color: var(--color-content-primary, #151515);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export function MultiTagInput({
  label,
  required,
  value,
  onChange,
  suggestions = [],
  placeholder,
}: MultiTagInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Suggestions not already selected, filtered by what's typed
  const filtered = suggestions.filter(
    s => !value.includes(s) && s.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const showDropdown = focused && (filtered.length > 0 || inputValue.trim().length > 0);

  const addTag = useCallback(
    (tag: string) => {
      const trimmed = tag.trim();
      if (trimmed && !value.includes(trimmed)) {
        onChange([...value, trimmed]);
      }
      setInputValue('');
    },
    [value, onChange],
  );

  const removeTag = useCallback(
    (tag: string) => {
      onChange(value.filter(t => t !== tag));
    },
    [value, onChange],
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim()) addTag(inputValue);
    } else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
      removeTag(value[value.length - 1]);
    }
  }

  return (
    <Wrapper>
      {label && (
        <Label onClick={() => inputRef.current?.focus()}>
          {label}
          {required && <RequiredMark aria-hidden="true">*</RequiredMark>}
        </Label>
      )}
      <ChipsContainer
        ref={containerRef}
        $focused={focused}
        onClick={() => inputRef.current?.focus()}
      >
        {value.map(tag => (
          <Chip key={tag}>
            {tag}
            <ChipRemove
              type="button"
              aria-label={`Remove ${tag}`}
              onMouseDown={e => {
                e.preventDefault();
                removeTag(tag);
              }}
            >
              <XIcon size={10} />
            </ChipRemove>
          </Chip>
        ))}
        <TextInput
          ref={inputRef}
          value={inputValue}
          placeholder={value.length === 0 ? placeholder : ''}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
        />
        {showDropdown && (
          <DropdownPanel>
            {filtered.map(s => (
              <SuggestionRow
                key={s}
                type="button"
                onMouseDown={e => {
                  e.preventDefault();
                  addTag(s);
                }}
              >
                {s}
              </SuggestionRow>
            ))}
            {inputValue.trim() && !value.includes(inputValue.trim()) && !filtered.includes(inputValue.trim()) && (
              <SuggestionRow
                type="button"
                onMouseDown={e => {
                  e.preventDefault();
                  addTag(inputValue);
                }}
              >
                Add &ldquo;{inputValue.trim()}&rdquo;
              </SuggestionRow>
            )}
          </DropdownPanel>
        )}
      </ChipsContainer>
    </Wrapper>
  );
}
