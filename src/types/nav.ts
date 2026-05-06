import type { ReactNode } from 'react';

export interface PrimaryNavItem {
  id: string;
  label: string;
  icon: ReactNode;
  /** Optional icon to show when the item is active. Falls back to `icon` if not provided. */
  activeIcon?: ReactNode;
  isActive?: boolean;
  hasUnread?: boolean;
  onClick?: () => void;
}

export interface SecondaryNavItem {
  id: string;
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SecondaryNavSection {
  id: string;
  heading?: string;
  items: SecondaryNavItem[];
}

// ── New menu entry types ───────────────────────────────────────────────────

export interface SecondaryNavMenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  /** Optional trailing element (e.g. a pin / dismiss button) shown on the right edge. */
  trailingSlot?: ReactNode;
}

export interface SecondaryNavMenuGroup {
  id: string;
  label: string;
  icon?: ReactNode;
  /** Optional trailing element rendered before the chevron (badge, tag, etc.). */
  trailingBadge?: ReactNode;
  defaultExpanded?: boolean;
  children: SecondaryNavMenuItem[];
}

export interface SecondaryNavSectionLabel {
  id: string;
  label: string;
}

export type SecondaryNavMenuEntry =
  | { type: 'single'; item: SecondaryNavMenuItem }
  | { type: 'group'; group: SecondaryNavMenuGroup }
  | { type: 'label'; label: SecondaryNavSectionLabel };

/** Bottom page entries (e.g. Usage, Settings) */
export interface SecondaryNavPageEntry {
  id: string;
  label: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export interface UserProfile {
  name: string;
  initials: string;
  avatarColor?: string;
}

export interface Workspace {
  id: string;
  name: string;
  logoUrl?: string;
  initial?: string;
}

export interface TopNavAction {
  id: string;
  label: string;
  variant: 'primary' | 'secondary' | 'icon';
  onClick?: () => void;
}
