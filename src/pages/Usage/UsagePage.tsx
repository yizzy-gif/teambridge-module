import { useState } from 'react';
import styled from 'styled-components';
import { SpecialistUsageContent } from '../AIHome/AISpecialists/SpecialistUsagePage';

// ── Tab config ───────────────────────────────────────────────────────────────

interface TabDef {
  key: string;
  label: string;
}

const TABS: TabDef[] = [
  { key: 'specialists', label: 'Specialists' },
];

// ── Styled primitives ────────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6, 24px);
  padding: var(--space-8, 32px);
  min-height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: var(--color-content-primary, #151515);
`;

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

// ── Component ────────────────────────────────────────────────────────────────

export function UsagePage() {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  return (
    <Page>
      <PageTitle>Usage</PageTitle>

      <TabBarContainer>
        {TABS.map(tab => (
          <TabButton
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabBarContainer>

      {activeTab === 'specialists' && <SpecialistUsageContent />}
    </Page>
  );
}
