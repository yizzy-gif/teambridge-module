import styled from 'styled-components';

export const SECONDARY_NAV_WIDTH = '270px';

export const SecondaryNavRoot = styled.nav<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${p => (p.$isVisible ? SECONDARY_NAV_WIDTH : '0px')};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  transition: width 200ms ease;
`;

// ── Part 1: Top (sticky header + search) ──────────────────────────────────

export const NavTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 270px;
`;

export const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`;

export const NavHeading = styled.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;


export const SearchRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0 12px 8px;
`;

export const FilterBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  background: var(--color-bg-primary, white);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  color: var(--color-content-secondary, #1c222a);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

// ── Part 2: Middle (scrollable menu items) ────────────────────────────────

export const NavMiddle = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  width: 270px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`;

/** Group accordion row — layout matches ListItem with --li-px:0 */
export const GroupRow = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 8px 0 0;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-content-tertiary, #475569);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
    border-radius: 6px;
  }
`;

/** 32×32 icon slot — matches SecNavIconSlot for visual alignment */
export const GroupIconSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const GroupLabel = styled.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GroupChevron = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);
  transform: rotate(${p => (p.$expanded ? '0deg' : '-90deg')});
  transition: transform 150ms ease-in-out;

  svg {
    width: 16px;
    height: 16px;
  }
`;

/**
 * Children container — indented so child labels align with the group label.
 */
export const GroupChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
`;

/** Wrapper for GroupRow + GroupChildren — keeps internal gap tight */
export const MenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// ── Part 3: Bottom (page entries, bottom-aligned) ─────────────────────────

export const NavBottom = styled.div`
  flex-shrink: 0;
  width: 270px;
  padding: 8px 12px;
`;

export const BottomDivider = styled.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  margin-bottom: 8px;
`;

export const BottomItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`;

// ── Shared icon slot for single-level menu items ──────────────────────────

export const SecNavIconSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TrailingIconBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-content-tertiary, #475569);
  }
`;
