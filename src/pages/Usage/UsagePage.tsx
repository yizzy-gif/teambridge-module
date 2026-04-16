import styled from 'styled-components';
import { SpecialistUsageContent } from '../AIHome/AISpecialists/SpecialistUsagePage';

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

// ── Component ────────────────────────────────────────────────────────────────

export function UsagePage() {
  return (
    <Page>
      <SpecialistUsageContent />
    </Page>
  );
}
