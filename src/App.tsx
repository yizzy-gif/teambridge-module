import React, { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import type { PrimaryNavItem, SecondaryNavMenuEntry, SecondaryNavPageEntry, TopNavAction } from './types/nav';
import {
  AllPeoplePage, ContractorsPage, EmployeesPage,
  EngineeringPage, DesignPage, MarketingPage, OperationsPage,
} from './pages/engaged';
import {
  HomeIcon, MessageCircleIcon, InboxIcon, ReceiptCheckIcon, AIStarIcon,
  MarketplaceIcon, AppToolIcon, PlusIcon,
  DocumentIcon, FormIcon, TasksIcon, PolicyIcon, AutomationIcon, PayrollIcon, ESignIcon,
} from './components/PrimaryNav/NavIcons';
import {
  Users03Icon, File04Icon, ClipboardCheckIcon,
  Grid01Icon, GitBranch01Icon, FeatherIcon, LineChartUp01Icon, SettingsGearIcon,
  HomeLineIcon, BarChart02Icon, ListBulletIcon, CheckCircleIcon, Breadcrumb,
} from 'alloy-design-system';
import { HeadingText } from './components/TopNav/TopNav.styles';
import policyActiveUrl from './assets/policy-icon-active.svg';
import automationActiveUrl from './assets/automation-icon-active.svg';
import {
  HomePage, EngagedPage, InboxPage, InvoicePage, AIHomePage,
  MarketplacePage, CustomAppPage, AddAppPage,
  DocumentStudioPage, FormPage, TasksPage, PolicyPage,
  AutomationPage, PayrollPage, ESignPage,
} from './pages';
import { AISpecialistsListPage } from './pages/AIHome/AISpecialists';
import { AISpecialistPersonaDetail } from './pages/AIHome/AISpecialists/PersonaDetail';

// ── Nav item definitions ──────────────────────────────────────────────────

const PRIMARY_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'home',     label: 'Home',    icon: <HomeIcon /> },
  { id: 'engaged',  label: 'Engaged', icon: <MessageCircleIcon />, hasUnread: true },
  { id: 'inbox',    label: 'Inbox',   icon: <InboxIcon />, hasUnread: true },
  { id: 'invoice',  label: 'Invoice', icon: <ReceiptCheckIcon /> },
  { id: 'ai-home',  label: 'AI Home', icon: <AIStarIcon /> },
];

const TOOL_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'marketplace', label: 'Marketplace', icon: <MarketplaceIcon /> },
  { id: 'app-tool',    label: 'Custom App',  icon: <AppToolIcon /> },
  { id: 'add-app',     label: 'Add App',     icon: <PlusIcon /> },
];

const BOTTOM_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'docs',       label: 'Document Studio', icon: <DocumentIcon /> },
  { id: 'form',       label: 'Form',            icon: <FormIcon /> },
  { id: 'tasks',      label: 'Tasks',           icon: <TasksIcon /> },
  { id: 'policy',     label: 'Policy',          icon: <PolicyIcon />, activeIcon: <img src={policyActiveUrl} width={16} height={16} style={{ display: 'block' }} alt="" /> },
  { id: 'automation', label: 'Automation',      icon: <AutomationIcon />, activeIcon: <img src={automationActiveUrl} width={16} height={16} style={{ display: 'block' }} alt="" /> },
  { id: 'payroll',    label: 'Payroll',         icon: <PayrollIcon /> },
  { id: 'esign',      label: 'E-Sign Studio',   icon: <ESignIcon /> },
];

// ── Per-app secondary nav configuration ──────────────────────────────────

interface SecItemDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
}
interface SecGroupDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children: SecItemDef[];
}
type SecEntryDef = SecItemDef | { group: SecGroupDef };

interface AppSecConfig {
  /** ID of item selected by default when entering this app */
  defaultId: string;
  entries: SecEntryDef[];
}

const APP_SEC_CONFIG: Record<string, AppSecConfig> = {
  'home': {
    defaultId: 'home-overview',
    entries: [
      { id: 'home-overview', label: 'Overview',  icon: <HomeLineIcon size={16} /> },
      { id: 'home-activity', label: 'Activity',  icon: <ListBulletIcon size={16} /> },
      { id: 'home-analytics',label: 'Analytics', icon: <BarChart02Icon size={16} /> },
    ],
  },
  'engaged': {
    defaultId: 'all-people',
    entries: [
      { id: 'all-people',  label: 'All People',  icon: <Users03Icon size={16} /> },
      { id: 'contractors', label: 'Contractors', icon: <File04Icon size={16} /> },
      { id: 'employees',   label: 'Employees',   icon: <ClipboardCheckIcon size={16} /> },
      { group: {
        id: 'groups', label: 'Groups', icon: <Grid01Icon size={16} />,
        children: [
          { id: 'engineering', label: 'Engineering', icon: <GitBranch01Icon size={16} /> },
          { id: 'design',      label: 'Design',      icon: <FeatherIcon size={16} /> },
          { id: 'marketing',   label: 'Marketing',   icon: <LineChartUp01Icon size={16} /> },
          { id: 'operations',  label: 'Operations',  icon: <SettingsGearIcon size={16} /> },
        ],
      }},
    ],
  },
  'inbox': {
    defaultId: 'inbox-all',
    entries: [
      { id: 'inbox-all',      label: 'All',             icon: <ListBulletIcon size={16} /> },
      { id: 'inbox-action',   label: 'Action Required', icon: <CheckCircleIcon size={16} /> },
      { id: 'inbox-mentions', label: 'Mentions',        icon: <Users03Icon size={16} /> },
      { id: 'inbox-notify',   label: 'Notifications',   icon: <HomeLineIcon size={16} /> },
    ],
  },
  'invoice': {
    defaultId: 'invoice-all',
    entries: [
      { id: 'invoice-all',     label: 'All Invoices', icon: <ListBulletIcon size={16} /> },
      { id: 'invoice-pending', label: 'Pending',      icon: <ClipboardCheckIcon size={16} /> },
      { id: 'invoice-paid',    label: 'Paid',         icon: <CheckCircleIcon size={16} /> },
      { id: 'invoice-overdue', label: 'Overdue',      icon: <BarChart02Icon size={16} /> },
    ],
  },
  'ai-home': {
    defaultId: 'ai-new-chat',
    entries: [
      { id: 'ai-new-chat',    label: 'New Chat',      icon: <HomeLineIcon size={16} /> },
      { id: 'ai-history',     label: 'History',       icon: <ListBulletIcon size={16} /> },
      { id: 'ai-prompts',     label: 'Saved Prompts', icon: <ClipboardCheckIcon size={16} /> },
      { id: 'ai-specialists', label: 'Specialists',   icon: <Users03Icon size={16} /> },
    ],
  },
  'marketplace': {
    defaultId: 'mp-installed',
    entries: [
      { id: 'mp-installed',   label: 'Installed',    icon: <CheckCircleIcon size={16} /> },
      { id: 'mp-browse',      label: 'Browse All',   icon: <Grid01Icon size={16} /> },
      { id: 'mp-categories',  label: 'Categories',   icon: <ListBulletIcon size={16} /> },
    ],
  },
  'app-tool': {
    defaultId: 'at-overview',
    entries: [
      { id: 'at-overview', label: 'Overview',      icon: <HomeLineIcon size={16} /> },
      { id: 'at-config',   label: 'Configuration', icon: <SettingsGearIcon size={16} /> },
      { id: 'at-logs',     label: 'Logs',          icon: <ListBulletIcon size={16} /> },
    ],
  },
  'add-app': {
    defaultId: 'aa-integrations',
    entries: [
      { id: 'aa-integrations', label: 'Integrations', icon: <Grid01Icon size={16} /> },
      { id: 'aa-import',       label: 'Import',       icon: <File04Icon size={16} /> },
      { id: 'aa-oauth',        label: 'OAuth Apps',   icon: <SettingsGearIcon size={16} /> },
    ],
  },
  'docs': {
    defaultId: 'docs-all',
    entries: [
      { id: 'docs-all',    label: 'All Documents', icon: <ListBulletIcon size={16} /> },
      { id: 'docs-drafts', label: 'Drafts',        icon: <ClipboardCheckIcon size={16} /> },
      { id: 'docs-sent',   label: 'Sent',          icon: <File04Icon size={16} /> },
      { id: 'docs-signed', label: 'Signed',        icon: <CheckCircleIcon size={16} /> },
    ],
  },
  'form': {
    defaultId: 'form-all',
    entries: [
      { id: 'form-all',      label: 'All Forms', icon: <ListBulletIcon size={16} /> },
      { id: 'form-active',   label: 'Active',    icon: <CheckCircleIcon size={16} /> },
      { id: 'form-drafts',   label: 'Drafts',    icon: <ClipboardCheckIcon size={16} /> },
      { id: 'form-archived', label: 'Archived',  icon: <File04Icon size={16} /> },
    ],
  },
  'tasks': {
    defaultId: 'tasks-mine',
    entries: [
      { id: 'tasks-mine',      label: 'My Tasks',   icon: <HomeLineIcon size={16} /> },
      { id: 'tasks-team',      label: 'Team Tasks', icon: <Users03Icon size={16} /> },
      { id: 'tasks-completed', label: 'Completed',  icon: <CheckCircleIcon size={16} /> },
      { id: 'tasks-overdue',   label: 'Overdue',    icon: <BarChart02Icon size={16} /> },
    ],
  },
  'policy': {
    defaultId: 'policy-all',
    entries: [
      { id: 'policy-all',      label: 'All Policies', icon: <ListBulletIcon size={16} /> },
      { id: 'policy-published',label: 'Published',    icon: <CheckCircleIcon size={16} /> },
      { id: 'policy-review',   label: 'Under Review', icon: <ClipboardCheckIcon size={16} /> },
      { id: 'policy-drafts',   label: 'Drafts',       icon: <File04Icon size={16} /> },
    ],
  },
  'automation': {
    defaultId: 'auto-active',
    entries: [
      { id: 'auto-active',    label: 'Active',    icon: <CheckCircleIcon size={16} /> },
      { id: 'auto-templates', label: 'Templates', icon: <Grid01Icon size={16} /> },
      { id: 'auto-history',   label: 'History',   icon: <ListBulletIcon size={16} /> },
    ],
  },
  'payroll': {
    defaultId: 'pay-overview',
    entries: [
      { id: 'pay-overview',     label: 'Overview',    icon: <HomeLineIcon size={16} /> },
      { id: 'pay-employees',    label: 'Employees',   icon: <Users03Icon size={16} /> },
      { id: 'pay-contractors',  label: 'Contractors', icon: <File04Icon size={16} /> },
      { id: 'pay-history',      label: 'History',     icon: <ListBulletIcon size={16} /> },
    ],
  },
  'esign': {
    defaultId: 'esign-awaiting',
    entries: [
      { id: 'esign-awaiting',   label: 'Awaiting Signature', icon: <ClipboardCheckIcon size={16} /> },
      { id: 'esign-completed',  label: 'Completed',          icon: <CheckCircleIcon size={16} /> },
      { id: 'esign-templates',  label: 'Templates',          icon: <File04Icon size={16} /> },
      { id: 'esign-voided',     label: 'Voided',             icon: <ListBulletIcon size={16} /> },
    ],
  },
};

// ── Helpers ────────────────────────────────────────────────────────────────

/** Build SecondaryNavMenuEntry[] from config + current active state */
function buildMenuEntries(
  appId: string,
  secActiveId: string,
  setSecActiveId: (id: string) => void,
): SecondaryNavMenuEntry[] {
  const config = APP_SEC_CONFIG[appId];
  if (!config) return [];

  return config.entries.map(entry => {
    if ('group' in entry) {
      const g = entry.group;
      return {
        type: 'group' as const,
        group: {
          id: g.id,
          label: g.label,
          icon: g.icon,
          defaultExpanded: true,
          children: g.children.map(child => ({
            id: child.id,
            label: child.label,
            icon: child.icon,
            isActive: secActiveId === child.id,
            onClick: () => setSecActiveId(child.id),
          })),
        },
      };
    }
    return {
      type: 'single' as const,
      item: {
        id: entry.id,
        label: entry.label,
        icon: entry.icon,
        isActive: secActiveId === entry.id,
        onClick: () => setSecActiveId(entry.id),
      },
    };
  });
}

/** Look up label + optional group parent label for a secActiveId */
function lookupSecItem(appId: string, secActiveId: string): { label: string; parentLabel?: string } | undefined {
  const config = APP_SEC_CONFIG[appId];
  if (!config) return undefined;
  for (const entry of config.entries) {
    if ('group' in entry) {
      for (const child of entry.group.children) {
        if (child.id === secActiveId) return { label: child.label, parentLabel: entry.group.label };
      }
    } else if (entry.id === secActiveId) {
      return { label: entry.label };
    }
  }
  return undefined;
}

// ── Page labels (for SecondaryNav heading) ────────────────────────────────

const APP_LABELS: Record<string, string> = {
  'home':        'Home',
  'engaged':     'Engaged',
  'inbox':       'Inbox',
  'invoice':     'Invoice',
  'ai-home':     'AI Home',
  'marketplace': 'Marketplace',
  'app-tool':    'Custom App',
  'add-app':     'Add App',
  'docs':        'Document Studio',
  'form':        'Form',
  'tasks':       'Tasks',
  'policy':      'Policy Engine',
  'automation':  'Automation',
  'payroll':     'Payroll',
  'esign':       'E-Sign Studio',
};

// ── Static bottom page entries ────────────────────────────────────────────

const pageEntries: SecondaryNavPageEntry[] = [
  { id: 'settings', label: 'Settings' },
];

const topNavActions: TopNavAction[] = [
  { id: 'new',    label: 'New',    variant: 'secondary' },
  { id: 'invite', label: 'Invite', variant: 'primary' },
];

// ── Engaged sub-page routing ──────────────────────────────────────────────

function EngagedContent({ secActiveId }: { secActiveId: string }) {
  switch (secActiveId) {
    case 'contractors': return <ContractorsPage />;
    case 'employees':   return <EmployeesPage />;
    case 'engineering': return <EngineeringPage />;
    case 'design':      return <DesignPage />;
    case 'marketing':   return <MarketingPage />;
    case 'operations':  return <OperationsPage />;
    default:            return <AllPeoplePage />;
  }
}

function AIHomeContent({ secActiveId }: { secActiveId: string }) {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);

  useEffect(() => {
    if (secActiveId !== 'ai-specialists') setSelectedPersonaId(null);
  }, [secActiveId]);

  if (secActiveId === 'ai-specialists') {
    if (selectedPersonaId) {
      return (
        <AISpecialistPersonaDetail
          personaId={selectedPersonaId}
          onBack={() => setSelectedPersonaId(null)}
        />
      );
    }
    return <AISpecialistsListPage onPersonaClick={setSelectedPersonaId} />;
  }
  return <AIHomePage />;
}

function PageContent({ activeId, secActiveId }: { activeId: string; secActiveId: string }) {
  switch (activeId) {
    case 'home':        return <HomePage />;
    case 'engaged':     return <EngagedContent secActiveId={secActiveId} />;
    case 'inbox':       return <InboxPage />;
    case 'invoice':     return <InvoicePage />;
    case 'ai-home':     return <AIHomeContent secActiveId={secActiveId} />;
    case 'marketplace': return <MarketplacePage />;
    case 'app-tool':    return <CustomAppPage />;
    case 'add-app':     return <AddAppPage />;
    case 'docs':        return <DocumentStudioPage />;
    case 'form':        return <FormPage />;
    case 'tasks':       return <TasksPage />;
    case 'policy':      return <PolicyPage />;
    case 'automation':  return <AutomationPage />;
    case 'payroll':     return <PayrollPage />;
    case 'esign':       return <ESignPage />;
    default:            return <HomePage />;
  }
}

// ── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [activeId, setActiveId] = useState('home');
  const [secActiveId, setSecActiveId] = useState(APP_SEC_CONFIG['home'].defaultId);
  const [search, setSearch] = useState('');

  // Switch primary app + reset secondary selection to default
  function handleAppSelect(id: string) {
    setActiveId(id);
    setSecActiveId(APP_SEC_CONFIG[id]?.defaultId ?? '');
  }

  const withActive = (items: typeof PRIMARY_ITEMS): PrimaryNavItem[] =>
    items.map(item => ({
      ...item,
      isActive: item.id === activeId,
      onClick: () => handleAppSelect(item.id),
    }));

  // TopNav heading: no app-level prefix (shown in SecondaryNav already)
  // — top-level item: just the item label
  // — group child: Breadcrumb "GroupName / ItemName"
  const secMeta = lookupSecItem(activeId, secActiveId);
  const topNavHeading: React.ReactNode = (() => {
    if (!secMeta) return <HeadingText>{APP_LABELS[activeId] ?? activeId}</HeadingText>;
    if (secMeta.parentLabel) {
      return (
        <Breadcrumb
          separator="chevron"
          items={[
            { label: secMeta.parentLabel },
            { label: secMeta.label },
          ]}
        />
      );
    }
    return <HeadingText>{secMeta.label}</HeadingText>;
  })();

  return (
    <AppShell
      // PrimaryNav
      items={withActive(PRIMARY_ITEMS)}
      toolItems={withActive(TOOL_ITEMS)}
      bottomItems={withActive(BOTTOM_ITEMS)}
      workspace={{ id: 'acme', name: '{Account.name}', initial: 'A' }}
      user={{ name: 'Tito Goldstein', initials: 'TG', avatarColor: '#ee9c2d' }}
      newItemId="app-tool"
      aiItemId="ai-home"
      // SecondaryNav
      secNavHeading={APP_LABELS[activeId] ?? activeId}
      menuEntries={buildMenuEntries(activeId, secActiveId, setSecActiveId)}
      pageEntries={pageEntries}
      showSecondaryNav={true}
      showSearch
      searchValue={search}
      onSearchChange={setSearch}
      // TopNav — only shows current secondary selection (app shown in SecNav)
      heading={topNavHeading}
      actions={topNavActions}
      showActivityButton
      showPonderButton
    >
      <PageContent activeId={activeId} secActiveId={secActiveId} />
    </AppShell>
  );
}
