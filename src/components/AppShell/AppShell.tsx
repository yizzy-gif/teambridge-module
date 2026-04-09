import type { ReactNode } from 'react';
import { PrimaryNav } from '../PrimaryNav';
import { SecondaryNav } from '../SecondaryNav';
import { TopNav } from '../TopNav';
import { AppShellRoot, MainArea, ContentArea, ContentMain } from './AppShell.styles';
import type { PrimaryNavProps } from '../PrimaryNav';
import type { SecondaryNavProps } from '../SecondaryNav';
import type { TopNavProps } from '../TopNav';

export interface AppShellProps
  extends PrimaryNavProps,
    Omit<SecondaryNavProps, 'isVisible' | 'heading'>,
    Omit<TopNavProps, never> {
  /** Content rendered in the main area */
  children: ReactNode;
  /** Heading shown in the SecondaryNav panel header */
  secNavHeading: string;
  /** Whether the secondary nav panel is shown */
  showSecondaryNav?: boolean;
}

export function AppShell({
  // PrimaryNav props
  items,
  toolItems,
  bottomItems,
  workspace,
  user,
  onWorkspaceClick,
  onUserClick,
  onSettingsClick,
  newItemId,
  aiItemId,
  // SecondaryNav props (heading separated)
  secNavHeading,
  menuEntries,
  pageEntries,
  showSearch,
  searchValue,
  onSearchChange,
  onHeaderAction1,
  onHeaderAction2,
  onFilterClick,
  // TopNav props
  heading,
  actions,
  showActivityButton,
  showPonderButton,
  onActivityClick,
  onPonderClick,
  onDotsClick,
  // AppShell own
  children,
  showSecondaryNav = true,
}: AppShellProps) {
  return (
    <AppShellRoot>
      <PrimaryNav
        items={items}
        toolItems={toolItems}
        bottomItems={bottomItems}
        workspace={workspace}
        user={user}
        onWorkspaceClick={onWorkspaceClick}
        onUserClick={onUserClick}
        onSettingsClick={onSettingsClick}
        newItemId={newItemId}
        aiItemId={aiItemId}
      />

      <MainArea>
        {showSecondaryNav && (
          <SecondaryNav
            heading={secNavHeading}
            menuEntries={menuEntries}
            pageEntries={pageEntries}
            isVisible={true}
            showSearch={showSearch}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onHeaderAction1={onHeaderAction1}
            onHeaderAction2={onHeaderAction2}
            onFilterClick={onFilterClick}
          />
        )}

        <ContentArea>
          <TopNav
            heading={heading}
            actions={actions}
            showActivityButton={showActivityButton}
            showPonderButton={showPonderButton}
            onActivityClick={onActivityClick}
            onPonderClick={onPonderClick}
            onDotsClick={onDotsClick}
          />
          <ContentMain>
            {children}
          </ContentMain>
        </ContentArea>
      </MainArea>
    </AppShellRoot>
  );
}
