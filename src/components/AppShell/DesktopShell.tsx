// DesktopShell — the >=768px layout. This is the verbatim body of the
// original AppShell, extracted so AppShell can branch between desktop
// and mobile chromes without changing either.

import { PrimaryNav } from '../PrimaryNav';
import { SecondaryNav } from '../SecondaryNav';
import { TopNav } from '../TopNav';
import { AppShellRoot, MainArea, ContentArea, ContentMain } from './AppShell.styles';
import type { AppShellProps } from './AppShell';

export function DesktopShell({
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
