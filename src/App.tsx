import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  HomeLineIcon, BarChart02Icon, ListBulletIcon, CheckCircleIcon, FolderIcon, Breadcrumb,
  Button,
  Tag, Badge, ZapIcon,
  Pin01Icon,
  AlertTriangleIcon, Save01Icon,
  useToast,
} from 'alloy-design-system';
import { HeadingText } from './components/TopNav/TopNav.styles';
import policyActiveUrl from './assets/policy-icon-active.svg';
import automationActiveUrl from './assets/automation-icon-active.svg';
import {
  HomePage, EngagedPage, InboxPage, InvoicePage, AIHomePage,
  MarketplacePage, MarketplaceAppPage, InstalledAppsPage, MarketplaceLandingPage, CustomAppPage, AddAppPage,
  DocumentStudioPage, FormPage, TasksPage, PolicyPage,
  AutomationPage, PayrollPage, ESignPage,
  getMarketplaceAppIcon,
  MP_NAV_ID_TO_COMMUNITY,
  getAppNameById,
} from './pages';
import {
  UltronPage, MemoryPage, AccountDatabasePage, useUltronStore, ACCOUNT_COLLECTIONS, AgentMark,
  type UltronSection,
} from './pages/Ultron';
import { AISpecialistsListPage } from './pages/AIHome/AISpecialists';
import { AISpecialistPersonaDetail } from './pages/AIHome/AISpecialists/PersonaDetail';
import { UsagePage } from './pages/Usage';
import { mockPersonas } from './data/mockPersonas';
import { useHashSync } from './nav/hashSync';
import type { MobileModuleGroup } from './components/AppShell/MobileShell';

// ── Nav item definitions ──────────────────────────────────────────────────

const PRIMARY_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'home',     label: 'Home',    icon: <HomeIcon /> },
  { id: 'engaged',  label: 'Engaged', icon: <MessageCircleIcon />, hasUnread: true },
  { id: 'inbox',    label: 'Inbox',   icon: <InboxIcon />, hasUnread: true },
  { id: 'invoice',  label: 'Invoice', icon: <ReceiptCheckIcon /> },
  { id: 'ai-home',  label: 'AI Home', icon: <AIStarIcon /> },
];

const TOOL_ITEMS: Omit<PrimaryNavItem, 'isActive' | 'onClick'>[] = [
  { id: 'apps', label: 'Apps', icon: <MarketplaceIcon /> },
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
  /** When true, this item supports being pinned to the primary nav. */
  pinnable?: boolean;
}
interface SecGroupDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
  trailingBadge?: React.ReactNode;
  children: SecItemDef[];
}
interface SecLabelDef {
  kind: 'label';
  id: string;
  label: string;
}
type SecEntryDef = SecItemDef | { group: SecGroupDef } | SecLabelDef;

interface AppSecConfig {
  /** ID of item selected by default when entering this app */
  defaultId: string;
  /** Optional pinned page selected by default (overrides defaultId visually) */
  defaultPageId?: string;
  entries: SecEntryDef[];
}

const APP_SEC_CONFIG: Record<string, AppSecConfig> = {
  'home': {
    defaultId: 'home-overview',
    // Home's secondary nav body is overridden (see `homeBody` in App) with the
    // Ultron / Account-database sidebar; these entries are not rendered.
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
      { group: {
        id: 'ai-specialists', label: 'Specialist', icon: <Users03Icon size={16} />,
        children: [
          { id: 'ai-personas', label: 'Personas',  icon: <Users03Icon size={16} /> },
        ],
      }},
    ],
  },
  'apps': {
    defaultId: 'my-apps',
    entries: [
      { group: {
        id: 'mp-team-apps', label: 'Team apps', icon: <Users03Icon size={16} />,
        trailingBadge: <Tag size="sm" variant="subtle" color="neutral">5</Tag>,
        children: [
          { id: 'mp-shift-marketplace',  label: 'Shift Marketplace',           icon: getMarketplaceAppIcon('mp-shift-marketplace'),  pinnable: true },
          { id: 'mp-availability',       label: 'Employee Availability',       icon: getMarketplaceAppIcon('mp-availability'),       pinnable: true },
          { id: 'mp-time-clock',         label: 'Smart Time Clock',            icon: getMarketplaceAppIcon('mp-time-clock'),         pinnable: true },
          { id: 'mp-messaging',          label: 'Messaging Center',            icon: getMarketplaceAppIcon('mp-messaging'),          pinnable: true },
          { id: 'mp-client-portal',      label: 'Client Staffing Portal',      icon: getMarketplaceAppIcon('mp-client-portal'),      pinnable: true },
        ],
      }},
      { group: {
        id: 'mp-background-apps', label: 'Background apps', icon: <ZapIcon size={16} />,
        trailingBadge: <Tag size="sm" variant="subtle" color="neutral">5</Tag>,
        children: [
          { id: 'mp-labor-cost',         label: 'Labor Cost Forecasting',      icon: getMarketplaceAppIcon('mp-labor-cost'),         pinnable: true },
          { id: 'mp-compliance-monitor', label: 'Compliance Monitor',          icon: getMarketplaceAppIcon('mp-compliance-monitor'), pinnable: true },
          { id: 'mp-recruiting',         label: 'Recruiting Pipeline',         icon: getMarketplaceAppIcon('mp-recruiting'),         pinnable: true },
          { id: 'mp-credential',         label: 'Credential Tracker',          icon: getMarketplaceAppIcon('mp-credential'),         pinnable: true },
          { id: 'mp-performance',        label: 'Performance Insights',        icon: getMarketplaceAppIcon('mp-performance'),        pinnable: true },
        ],
      }},
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
  isPageActive: boolean,
  pinnedAppIds: string[] = [],
  onTogglePin?: (id: string) => void,
): SecondaryNavMenuEntry[] {
  const config = APP_SEC_CONFIG[appId];
  if (!config) return [];

  const renderPinButton = (id: string) => {
    const isPinned = pinnedAppIds.includes(id);
    return (
      <PinButton
        type="button"
        $pinned={isPinned}
        aria-label={isPinned ? 'Unpin from sidebar' : 'Pin to sidebar'}
        onClick={(e) => {
          e.stopPropagation();
          onTogglePin?.(id);
        }}
      >
        <Pin01Icon size={14} />
      </PinButton>
    );
  };

  return config.entries.map(entry => {
    if ('group' in entry) {
      const g = entry.group;
      return {
        type: 'group' as const,
        group: {
          id: g.id,
          label: g.label,
          icon: g.icon,
          trailingBadge: g.trailingBadge,
          defaultExpanded: true,
          children: g.children.map(child => ({
            id: child.id,
            label: child.label,
            icon: child.icon,
            isActive: !isPageActive && secActiveId === child.id,
            onClick: () => setSecActiveId(child.id),
            trailingSlot: child.pinnable && onTogglePin ? renderPinButton(child.id) : undefined,
          })),
        },
      };
    }
    if ('kind' in entry && entry.kind === 'label') {
      return {
        type: 'label' as const,
        label: { id: entry.id, label: entry.label },
      };
    }
    const item = entry as SecItemDef;
    return {
      type: 'single' as const,
      item: {
        id: item.id,
        label: item.label,
        icon: item.icon,
        isActive: !isPageActive && secActiveId === item.id,
        onClick: () => setSecActiveId(item.id),
      },
    };
  });
}

const PinButton = styled.button<{ $pinned: boolean }>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${p => (p.$pinned ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)')};
  opacity: ${p => (p.$pinned ? 1 : 0.5)};
  transition: background 120ms ease, color 120ms ease, opacity 120ms ease;
  margin-right: 4px;

  &:hover {
    opacity: 1;
    background: var(--color-bg-tertiary, rgba(21, 21, 21, 0.08));
    color: var(--color-content-primary);
  }

  &:focus-visible {
    opacity: 1;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`;

/** Look up label + optional group parent label for a secActiveId */
function lookupSecItem(appId: string, secActiveId: string): { label: string; parentLabel?: string } | undefined {
  const config = APP_SEC_CONFIG[appId];
  if (!config) return undefined;
  for (const entry of config.entries) {
    if ('group' in entry) {
      for (const child of entry.group.children) {
        if (child.id === secActiveId) return { label: child.label, parentLabel: entry.group.label };
      }
    } else if ('kind' in entry && entry.kind === 'label') {
      continue;
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
  'apps': 'Apps',
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

// (pageEntries moved inside App component to support active state)

// Group icons for the Ultron secondary-nav groups (Needs attention / Live
// stream / Resolved), keyed by the store group id.
const HOME_GROUP_ICON: Record<string, React.ReactNode> = {
  needs_attention: <AlertTriangleIcon size={16} />,
  live:            <AgentMark mark="lines" size={32} tone="light" state="active" coreHalo={false} />,
  resolved:        <CheckCircleIcon size={16} />,
};

const DEFAULT_TOP_NAV_ACTIONS: TopNavAction[] = [
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

function AIHomeContent({
  secActiveId,
  selectedPersonaId,
  setSelectedPersonaId,
}: {
  secActiveId: string;
  selectedPersonaId: string | null;
  setSelectedPersonaId: (id: string | null) => void;
}) {
  useEffect(() => {
    if (secActiveId !== 'ai-personas') setSelectedPersonaId(null);
  }, [secActiveId]);

  if (secActiveId === 'ai-personas') {
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

const COMMUNITY_APP_LABELS: Record<string, string> = {
  'shift_marketplace':              'Shift Marketplace',
  'labor_cost_forecasting':         'Labor Cost Forecasting',
  'employee_availability_portal':   'Employee Availability Portal',
  'compliance_monitor':             'Compliance Monitor',
  'smart_time_clock':               'Smart Time Clock',
  'recruiting_pipeline_dashboard':  'Recruiting Pipeline Dashboard',
  'workforce_messaging_center':     'Workforce Messaging Center',
  'client_staffing_portal':         'Client Staffing Portal',
  'credential_tracker':             'Credential Tracker',
  'performance_insights_dashboard': 'Performance Insights Dashboard',
};

function PageContent({
  activeId,
  secActiveId,
  activePageId,
  selectedPersonaId,
  setSelectedPersonaId,
  onOpenCommunity,
  onOpenInstalled,
  onOpenApp,
  pinnedAppIds,
  onTogglePin,
  installedAppIds,
  onInstallApp,
  onUninstallApp,
  lastOpenedAtById,
}: {
  activeId: string;
  secActiveId: string;
  activePageId: string | null;
  selectedPersonaId: string | null;
  setSelectedPersonaId: (id: string | null) => void;
  onOpenCommunity?: () => void;
  onOpenInstalled?: () => void;
  onOpenApp?: (appId: string) => void;
  pinnedAppIds?: string[];
  onTogglePin?: (appId: string) => void;
  installedAppIds?: string[];
  onInstallApp?: (appId: string) => void;
  onUninstallApp?: (appId: string) => void;
  lastOpenedAtById?: Record<string, number>;
}) {
  switch (activeId) {
    case 'home':        return <HomePage />;
    case 'engaged':     return <EngagedContent secActiveId={secActiveId} />;
    case 'inbox':       return <InboxPage />;
    case 'invoice':     return <InvoicePage />;
    case 'ai-home':     return <AIHomeContent secActiveId={secActiveId} selectedPersonaId={selectedPersonaId} setSelectedPersonaId={setSelectedPersonaId} />;
    case 'apps':
      if (secActiveId === 'app-marketplace' && !activePageId?.startsWith('app:')) {
        return (
          <MarketplacePage
            installedAppIds={installedAppIds}
            onInstallApp={onInstallApp}
            onUninstallApp={onUninstallApp}
            onOpenApp={onOpenApp}
          />
        );
      }
      if (activePageId?.startsWith('app:')) {
        const appId = activePageId.slice(4);
        const appLabel = COMMUNITY_APP_LABELS[appId] ?? 'App';
        return <MarketplaceAppPage name={appLabel} />;
      }
      // Installed Apps is the marketplace landing page.
      return (
        <InstalledAppsPage
          onOpenCommunity={onOpenCommunity}
          onOpenApp={onOpenApp}
          pinnedAppIds={pinnedAppIds}
          onTogglePin={onTogglePin}
          installedAppIds={installedAppIds}
          onUninstallApp={onUninstallApp}
          lastOpenedAtById={lastOpenedAtById}
        />
      );
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
  const [selectedPersonaId, setSelectedPersonaId] = useState<string | null>(null);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  // Marketplace pinning: ids of apps the user has pinned to the primary nav.
  const [pinnedAppIds, setPinnedAppIds] = useState<string[]>([]);
  // Apps the user has installed from the marketplace. Empty by default —
  // populated when the user clicks "Use App" in the preview dialog.
  const [installedAppIds, setInstalledAppIds] = useState<string[]>([]);
  // Timestamp (ms epoch) of the last interaction (install or open) per app id.
  // Drives the "Just now / X minutes ago" label on the My Apps list.
  const [lastOpenedAtById, setLastOpenedAtById] = useState<Record<string, number>>({});
  const { toast } = useToast();
  const handleInstallApp = (id: string) => {
    const alreadyInstalled = installedAppIds.includes(id);
    setInstalledAppIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    setLastOpenedAtById(prev => ({ ...prev, [id]: Date.now() }));
    if (!alreadyInstalled) {
      const name = getAppNameById(id);
      toast.success(name ? `${name} added to My Apps` : 'App added to My Apps');
    }
  };
  const handleUninstallApp = (id: string) => {
    const wasInstalled = installedAppIds.includes(id);
    setInstalledAppIds(prev => prev.filter(p => p !== id));
    setLastOpenedAtById(prev => { const { [id]: _, ...rest } = prev; return rest; });
    if (wasInstalled) {
      const name = getAppNameById(id);
      toast.info(name ? `${name} removed from My Apps` : 'App removed from My Apps');
    }
  };
  const handleAppOpened = (id: string) => {
    setLastOpenedAtById(prev => ({ ...prev, [id]: Date.now() }));
  };
  // Home secondary-nav body toggle: 'ultron' shows Ultron threads grouped by
  // lifecycle; 'account' shows the (stubbed) Account database collections.
  const [homeView, setHomeView] = useState<'ultron' | 'account' | 'memory'>('ultron');
  // Which Ultron section the feed is showing: Live, Working, or Done.
  const [homeSection, setHomeSection] = useState<UltronSection>('live');
  const [accountCollection, setAccountCollection] = useState('employees');
  // Shared Ultron store (threads + grouping + selection) — drives both the
  // sidebar and the main detail view.
  const ultron = useUltronStore();

  // Per-module memory of the last-visited sub-section (mobile-only
  // behavior — desktop still resets to defaultId when switching apps).
  const [lastSecByModule, setLastSecByModule] = useState<Record<string, string>>({});

  // Keep the sub-section memory up to date whenever the user navigates
  // within a module.
  useEffect(() => {
    if (!secActiveId) return;
    setLastSecByModule(prev => (prev[activeId] === secActiveId ? prev : { ...prev, [activeId]: secActiveId }));
  }, [activeId, secActiveId]);

  // URL-hash sync — deep links like #ai-home/ai-personas/persona/erin
  // survive refresh on both mobile and desktop.
  useHashSync(
    { activeId, secActiveId, selectedPersonaId, activePageId },
    { setActiveId, setSecActiveId, setSelectedPersonaId, setActivePageId },
  );

  // Switch primary app + reset secondary selection to default
  function handleAppSelect(id: string) {
    const config = APP_SEC_CONFIG[id];
    setActiveId(id);
    setSecActiveId(config?.defaultId ?? '');
    setActivePageId(config?.defaultPageId ?? null);
  }

  // Mobile-only: switch primary app and restore its last-visited sub-
  // section (falling back to defaultId, then to the first menu entry).
  function handleMobileNavigate(id: string) {
    const config = APP_SEC_CONFIG[id];
    const remembered = lastSecByModule[id];
    const fallback = config?.defaultId ?? '';
    setActiveId(id);
    setSecActiveId(remembered ?? fallback);
    setActivePageId(remembered ? null : (config?.defaultPageId ?? null));
    setSelectedPersonaId(null);
  }

  // Wrapper: clicking a menu entry clears any active page entry
  function handleSecNavClick(id: string) {
    setSecActiveId(id);
    setActivePageId(null);
  }

  const pageEntries: SecondaryNavPageEntry[] = [
    ...(activeId === 'apps'
      ? [
          {
            id: 'app-marketplace',
            label: 'App Marketplace',
            icon: <Users03Icon size={16} />,
            isActive: secActiveId === 'app-marketplace',
            onClick: () => { setSecActiveId('app-marketplace'); setActivePageId(null); },
          },
        ]
      : []),
    ...(activeId === 'home' || activeId === 'apps'
      ? []
      : [
          {
            id: 'usage',
            label: 'Usage',
            icon: <BarChart02Icon size={16} />,
            isActive: activePageId === 'usage',
            onClick: () => setActivePageId('usage'),
          },
        ]),
    ...(activeId === 'home'
      ? [{
          id: 'memory',
          label: 'Memory',
          icon: <Save01Icon size={16} />,
          isActive: homeView === 'memory',
          onClick: () => setHomeView('memory'),
        }]
      : []),
    { id: 'settings', label: 'Settings', icon: <SettingsGearIcon size={16} /> },
  ];

  const withActive = (items: typeof PRIMARY_ITEMS): PrimaryNavItem[] =>
    items.map(item => ({
      ...item,
      isActive:
        item.id === activeId &&
        // When a pinned app's page is open, the pinned tool item owns the
        // active state — don't also light up the parent Marketplace item.
        !(item.id === 'apps' && activePageId?.startsWith('app:')),
      onClick: () => handleAppSelect(item.id),
    }));

  // Build the marketplace tool nav with any pinned-app icons inserted right
  // after the Marketplace entry.
  const lookupMarketplaceItem = (id: string): SecItemDef | undefined => {
    const config = APP_SEC_CONFIG['apps'];
    if (!config) return undefined;
    for (const entry of config.entries) {
      if ('group' in entry) {
        const found = entry.group.children.find(c => c.id === id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const handleTogglePin = (id: string) => {
    const willPin = !pinnedAppIds.includes(id);
    setPinnedAppIds(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
    const label = lookupMarketplaceItem(id)?.label;
    if (willPin) {
      toast.success(label ? `${label} pinned to sidebar` : 'App pinned to sidebar');
    } else {
      toast.info(label ? `${label} unpinned from sidebar` : 'App unpinned from sidebar');
    }
  };

  const handlePinnedClick = (id: string) => {
    setActiveId('apps');
    setSecActiveId(id);
    const communityId = MP_NAV_ID_TO_COMMUNITY[id];
    setActivePageId(communityId ? `app:${communityId}` : null);
  };

  const pinnedToolItems: PrimaryNavItem[] = pinnedAppIds
    .map(id => {
      const item = lookupMarketplaceItem(id);
      if (!item) return null;
      const communityId = MP_NAV_ID_TO_COMMUNITY[id];
      const expectedPageId = communityId ? `app:${communityId}` : null;
      return {
        id: `pinned-${id}`,
        label: item.label,
        icon: item.icon,
        isActive: activeId === 'apps' && activePageId === expectedPageId,
        onClick: () => handlePinnedClick(id),
      } as PrimaryNavItem;
    })
    .filter((x): x is PrimaryNavItem => x !== null);

  const toolItemsWithPins: PrimaryNavItem[] = (() => {
    const base = withActive(TOOL_ITEMS);
    if (pinnedToolItems.length === 0) return base;
    const idx = base.findIndex(it => it.id === 'apps');
    if (idx === -1) return [...base, ...pinnedToolItems];
    return [...base.slice(0, idx + 1), ...pinnedToolItems, ...base.slice(idx + 1)];
  })();

  // TopNav heading: no app-level prefix (shown in SecondaryNav already)
  // — top-level item: just the item label
  // — group child: Breadcrumb "GroupName / ItemName"
  // — persona detail: Breadcrumb "Specialists > PersonaName"
  const secMeta = lookupSecItem(activeId, secActiveId);
  const topNavHeading: React.ReactNode = (() => {
    if (activePageId === 'usage') return <HeadingText>Usage</HeadingText>;
    if (activeId === 'home') {
      return <HeadingText>{homeView === 'memory' ? 'Memory' : homeView === 'account' ? 'Account database' : 'Ultron'}</HeadingText>;
    }
    if (activeId === 'apps' && secActiveId === 'app-marketplace' && !activePageId?.startsWith('app:')) {
      return (
        <Breadcrumb
          separator="chevron"
          items={[
            { label: 'Apps', onClick: () => { setSecActiveId('my-apps'); setActivePageId(null); } },
            { label: 'App Marketplace' },
          ]}
        />
      );
    }
    if (activeId === 'apps' && activePageId?.startsWith('app:')) {
      const appId = activePageId.slice(4);
      const appLabel = COMMUNITY_APP_LABELS[appId] ?? 'App';
      return (
        <Breadcrumb
          separator="chevron"
          items={[
            { label: 'Apps', onClick: () => setActivePageId(null) },
            { label: appLabel },
          ]}
        />
      );
    }
    if (activeId === 'apps') {
      return <HeadingText>Apps</HeadingText>;
    }
    if (activeId === 'ai-home' && secActiveId === 'ai-personas' && selectedPersonaId) {
      const persona = mockPersonas.find(p => p.id === selectedPersonaId);
      return (
        <Breadcrumb
          separator="chevron"
          items={[
            { label: 'Personas', onClick: () => setSelectedPersonaId(null) },
            { label: persona?.name ?? 'Persona' },
          ]}
        />
      );
    }
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

  // Mobile breadcrumb labels — same logic as topNavHeading but plain
  // strings, suitable for the ellipsis-truncated BreadcrumbButton.
  const mobilePrimaryLabel = activePageId === 'usage' ? 'Usage' : (APP_LABELS[activeId] ?? activeId);
  const mobileSecondaryLabel = activePageId === 'usage'
    ? undefined
    : activeId === 'apps' && secActiveId === 'app-marketplace' && !activePageId?.startsWith('app:')
      ? 'App Marketplace'
      : secMeta
        ? (secMeta.parentLabel ? `${secMeta.parentLabel} / ${secMeta.label}` : secMeta.label)
        : undefined;

  // ── Home: secondary-nav header toggle + body override ───────────────
  // A single button toggles the Home sidebar between the Ultron thread groups
  // and the (stubbed) Account database — it's labelled with the view it switches
  // TO (on Ultron → "Account DB", otherwise → "Ultron"). Rendered only for Home.
  const homeHeaderSlot = activeId === 'home' ? (
    homeView === 'ultron' ? (
      <Button
        size="sm"
        variant="tertiary"
        leadingArtwork={<FolderIcon size={16} />}
        onClick={() => setHomeView('account')}
      >
        Account DB
      </Button>
    ) : (
      <Button
        size="sm"
        variant="tertiary"
        leadingArtwork={
          <AgentMark mark="circle" size={16} tone="light" state="idle" aria-label="Ultron" />
        }
        onClick={() => setHomeView('ultron')}
      >
        Ultron
      </Button>
    )
  ) : undefined;

  // Home renders its secondary-nav menu through the standard pipeline (same
  // MenuGroupItem / MenuSingleItem components as every other app) so the rows
  // match: collapsible groups, 32px rows, tertiary labels, Tag counts.
  const homeMenuEntries: SecondaryNavMenuEntry[] = activeId !== 'home'
    ? []
    : homeView === 'account'
      ? ACCOUNT_COLLECTIONS.map(c => ({
          type: 'single' as const,
          item: {
            id: c.id, label: c.label, icon: c.icon,
            isActive: accountCollection === c.id,
            onClick: () => setAccountCollection(c.id),
          },
        }))
      : ultron.groups.flatMap<SecondaryNavMenuEntry>(g => {
          // The needs-attention cases ARE the feed, so the group collapses into a
          // single "Live" entry that jumps to the top of the feed when clicked.
          if (g.id === 'needs_attention') {
            return [{
              type: 'single' as const,
              item: {
                id: 'live-feed',
                label: 'Live',
                icon: <AgentMark mark="circle" size={32} tone="light" state="active" coreHalo={false} />,
                isActive: homeView === 'ultron' && homeSection === 'live',
                onClick: () => { setHomeView('ultron'); setHomeSection('live'); if (g.threads[0]) ultron.setSelectedId(g.threads[0].id); },
              },
            }];
          }
          // Working and Done are their own pages (sections); a child opens its
          // case on that page.
          const childSection: UltronSection = g.id === 'resolved' ? 'done' : 'working';
          const groupEntry = {
            type: 'group' as const,
            group: {
              id: g.id,
              label: g.label,
              icon: HOME_GROUP_ICON[g.id],
              trailingBadge: <Badge>{g.threads.length}</Badge>,
              defaultExpanded: true,
              outlined: false,
              children: g.threads.map(t => ({
                id: t.id,
                label: t.name,
                // Working cases carry Ultron's identity mark (orbiting while it
                // processes, idling while it monitors); Done cases carry the
                // Pulse mark — the breathing core, signalling a settled case.
                icon: childSection === 'working'
                  ? <AgentMark mark="orbit" size={32} tone="light" state={t.status === 'in_progress' ? 'active' : 'idle'} aria-label="Working" coreHalo={false} />
                  : <AgentMark mark="pulse" size={32} tone="light" state={t.status === 'unresolved' ? 'idle' : 'static'} color={t.status === 'unresolved' ? 'var(--color-orange-content-tertiary)' : 'var(--color-content-disabled)'} aria-label="Done" />,
                isActive: homeView === 'ultron' && homeSection === childSection && ultron.selectedId === t.id,
                onClick: () => { setHomeView('ultron'); setHomeSection(childSection); ultron.setSelectedId(t.id); },
              })),
            },
          };
          // Divider above the Done group.
          return g.id === 'resolved'
            ? [{ type: 'divider' as const, id: 'done-divider' }, groupEntry]
            : [groupEntry];
        });

  // Module catalog for PrimarySheet + ModuleDrawer. Groups mirror the
  // three-tier layout of the desktop PrimaryNav (main / tools /
  // bottom) so users see the same structure in both chromes.
  const mobileModuleGroups: MobileModuleGroup[] = [
    { id: 'main',   label: 'Workspace', items: withActive(PRIMARY_ITEMS) },
    { id: 'tools',  label: 'Tools',     items: toolItemsWithPins },
    { id: 'bottom', label: 'Apps',      items: withActive(BOTTOM_ITEMS) },
  ];

  return (
    <AppShell
      // PrimaryNav
      items={withActive(PRIMARY_ITEMS)}
      toolItems={toolItemsWithPins}
      bottomItems={withActive(BOTTOM_ITEMS)}
      workspace={{ id: 'acme', name: '{Account.name}', initial: 'A' }}
      user={{ name: 'Tito Goldstein', initials: 'TG', avatarColor: '#ee9c2d' }}
      newItemId="app-tool"
      aiItemId="ai-home"
      // SecondaryNav
      secNavHeading={APP_LABELS[activeId] ?? activeId}
      menuEntries={activeId === 'home'
        ? homeMenuEntries
        : buildMenuEntries(activeId, secActiveId, handleSecNavClick, activePageId !== null, pinnedAppIds, handleTogglePin)}
      // Ultron's identity card is now the feed's entry point (see UltronPage),
      // so the sidebar no longer repeats it as a menu header.
      menuHeader={undefined}
      pageEntries={pageEntries}
      showSecondaryNav={activeId !== 'apps'}
      showTopNav={!(activeId === 'home' && homeView === 'ultron')}
      showSearch={activeId !== 'home'}
      searchValue={search}
      onSearchChange={setSearch}
      headerSlot={homeHeaderSlot}
      // TopNav — only shows current secondary selection (app shown in SecNav)
      heading={topNavHeading}
      actions={activeId === 'home' || activeId === 'ai-home' || activeId === 'apps' || activePageId === 'usage' ? [] : DEFAULT_TOP_NAV_ACTIONS}
      showActivityButton
      showPonderButton
      noBorder={
        activeId === 'apps' &&
        secActiveId === 'app-marketplace' &&
        !activePageId?.startsWith('app:')
      }
      // Mobile chrome opt-in
      mobileNav={{
        activeId,
        secActiveId,
        activePageId,
        selectedPersonaId,
        moduleGroups: mobileModuleGroups,
        primaryLabel: mobilePrimaryLabel,
        secondaryLabel: mobileSecondaryLabel,
        onMobileNavigate: handleMobileNavigate,
        onSelectPersona: setSelectedPersonaId,
      }}
    >
      {activePageId === 'usage' ? (
        <UsagePage />
      ) : activeId === 'home' ? (
        homeView === 'memory' ? (
          <MemoryPage />
        ) : homeView === 'account' ? (
          <AccountDatabasePage collectionId={accountCollection} />
        ) : (
          <UltronPage
            threads={ultron.threads}
            stageById={ultron.stageById}
            section={homeSection}
            doppelgangerIds={ultron.doppelgangerIds}
            selectedId={ultron.selectedId}
            onSelectThread={ultron.setSelectedId}
            onAction={ultron.commit}
            onRefinement={ultron.refine}
            onSaveWorkflow={ultron.saveWorkflow}
          />
        )
      ) : (
        <PageContent
          activeId={activeId}
          secActiveId={secActiveId}
          activePageId={activePageId}
          selectedPersonaId={selectedPersonaId}
          setSelectedPersonaId={setSelectedPersonaId}
          onOpenCommunity={() => { setSecActiveId('app-marketplace'); setActivePageId(null); }}
          onOpenInstalled={() => setActivePageId(null)}
          onOpenApp={(id) => { handleAppOpened(id); setActivePageId(`app:${id}`); }}
          pinnedAppIds={pinnedAppIds}
          onTogglePin={handleTogglePin}
          installedAppIds={installedAppIds}
          onInstallApp={handleInstallApp}
          onUninstallApp={handleUninstallApp}
          lastOpenedAtById={lastOpenedAtById}
        />
      )}
    </AppShell>
  );
}
