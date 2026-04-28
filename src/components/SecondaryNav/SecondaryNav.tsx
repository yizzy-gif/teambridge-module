import { useState } from 'react';
import { ListItem, ChevronDownIcon, SearchField, Button } from 'alloy-design-system';
import type {
  SecondaryNavMenuEntry,
  SecondaryNavMenuItem,
  SecondaryNavMenuGroup,
  SecondaryNavPageEntry,
} from '../../types/nav';
import {
  SecondaryNavRoot,
  NavTop, HeadingRow, NavHeading,
  HeaderActions, SearchRow, FilterBtn,
  NavMiddle,
  GroupRow, GroupIconSlot, GroupLabel, GroupChevron, GroupChildren, MenuGroupWrapper,
  SecNavIconSlot,
  NavBottom, BottomDivider, BottomItemIcon,
} from './SecondaryNav.styles';

// ── Inline icons ───────────────────────────────────────────────────────────

function AsteriskIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function FilterLinesIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// Shared CSS vars for 32px list item height
const LIST_ITEM_SIZE_STYLE = {
  '--li-min-height': '32px',
  '--li-py': '0px',
  '--li-px': '0px',
  '--li-gap': '4px',
  borderRadius: '6px',
  paddingRight: '8px',
  borderBottom: 'none',
} as React.CSSProperties;

// ── Menu sub-components ────────────────────────────────────────────────────

function MenuSingleItem({ item }: { item: SecondaryNavMenuItem }) {
  return (
    <ListItem
      label={
        <span style={{ color: 'var(--color-content-tertiary, #475569)', letterSpacing: '-0.084px' }}>
          {item.label}
        </span>
      }
      leadingSlot={
        <SecNavIconSlot>
          {item.icon ?? <AsteriskIcon />}
        </SecNavIconSlot>
      }
      selected={item.isActive}
      onClick={item.onClick}
      divider={false}
      size="md"
      aria-current={item.isActive ? 'page' : undefined}
      style={LIST_ITEM_SIZE_STYLE}
    />
  );
}

function MenuGroupItem({ group }: { group: SecondaryNavMenuGroup }) {
  const [expanded, setExpanded] = useState(group.defaultExpanded ?? true);

  return (
    <MenuGroupWrapper>
      <GroupRow onClick={() => setExpanded(e => !e)} aria-expanded={expanded}>
        <GroupIconSlot>{group.icon ?? <AsteriskIcon />}</GroupIconSlot>
        <GroupLabel>{group.label}</GroupLabel>
        <GroupChevron $expanded={expanded}>
          <ChevronDownIcon size={16} />
        </GroupChevron>
      </GroupRow>

      {expanded && (
        <GroupChildren>
          {group.children.map(child => (
            <ListItem
              key={child.id}
              label={
                <span style={{ color: 'var(--color-content-tertiary, #475569)', letterSpacing: '-0.084px' }}>
                  {child.label}
                </span>
              }
              leadingSlot={
                <SecNavIconSlot>{child.icon ?? null}</SecNavIconSlot>
              }
              selected={child.isActive}
              onClick={child.onClick}
              divider={false}
              size="md"
              aria-current={child.isActive ? 'page' : undefined}
              style={LIST_ITEM_SIZE_STYLE}
            />
          ))}
        </GroupChildren>
      )}
    </MenuGroupWrapper>
  );
}

// ── Component ──────────────────────────────────────────────────────────────

export interface SecondaryNavProps {
  /** Section heading */
  heading: string;
  /** Whether the panel is visible (width animates to 0 when false) */
  isVisible: boolean;
  /** Part 2: menu entries (single items or accordion groups) */
  menuEntries?: SecondaryNavMenuEntry[];
  /** Part 3: bottom page entries (static, no active state) */
  pageEntries?: SecondaryNavPageEntry[];
  /** Show the search + filter bar */
  showSearch?: boolean;
  /** Search value (controlled) */
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onHeaderAction1?: () => void;
  onHeaderAction2?: () => void;
  onFilterClick?: () => void;
}

export function SecondaryNav({
  heading,
  isVisible,
  menuEntries = [],
  pageEntries = [],
  showSearch = true,
  searchValue = '',
  onSearchChange,
  onHeaderAction1,
  onHeaderAction2,
  onFilterClick,
}: SecondaryNavProps) {
  return (
    <SecondaryNavRoot $isVisible={isVisible} aria-label="Secondary navigation">

      {/* Part 1: Top — heading + trailing buttons + search/filter */}
      <NavTop>
        <HeadingRow>
          <NavHeading>{heading}</NavHeading>
          <HeaderActions>
            <Button variant="ghost" size="sm" iconOnly onClick={onHeaderAction1} aria-label="Action">
              <AsteriskIcon />
            </Button>
            <Button variant="ghost" size="sm" iconOnly onClick={onHeaderAction2} aria-label="Action">
              <AsteriskIcon />
            </Button>
          </HeaderActions>
        </HeadingRow>

        {showSearch && (
          <SearchRow>
            <SearchField
              size="sm"
              placeholder="Search..."
              value={searchValue}
              onChange={e => onSearchChange?.(e.target.value)}
            />
            <FilterBtn onClick={onFilterClick} aria-label="Filter">
              <FilterLinesIcon />
            </FilterBtn>
          </SearchRow>
        )}
      </NavTop>

      {/* Part 2: Middle — menu items (single or group accordion) */}
      <NavMiddle>
        {menuEntries.map(entry =>
          entry.type === 'single'
            ? <MenuSingleItem key={entry.item.id} item={entry.item} />
            : <MenuGroupItem key={entry.group.id} group={entry.group} />
        )}
      </NavMiddle>

      {/* Part 3: Bottom — page entries (static, no active state) */}
      {pageEntries.length > 0 && (
        <NavBottom>
          <BottomDivider />
          {pageEntries.map(entry => (
            <ListItem
              key={entry.id}
              label={
                <span style={{ color: 'var(--color-content-inverse-tertiary, #87919f)', letterSpacing: '-0.084px' }}>
                  {entry.label}
                </span>
              }
              leadingSlot={
                <BottomItemIcon>
                  {entry.icon ?? <AsteriskIcon />}
                </BottomItemIcon>
              }
              onClick={entry.onClick}
              selected={entry.isActive ?? false}
              divider={false}
              size="md"
              aria-current={entry.isActive ? 'page' : undefined}
              style={LIST_ITEM_SIZE_STYLE}
            />
          ))}
        </NavBottom>
      )}

    </SecondaryNavRoot>
  );
}
