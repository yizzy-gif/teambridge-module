import { useState } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, ListItem,
  ArrowNarrowRightIcon,
  SearchField,
  Dialog, DialogHeader, DialogContent, DialogFooter,
  CheckCircleIcon, ZapIcon,
} from 'alloy-design-system';

// ── Shared primitives ──────────────────────────────────────────────────────

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  height: 100%;
  font-family: var(--font-sans, Geist, sans-serif);
  color: var(--color-content-primary, #151515);
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
`;

const PageSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-content-secondary, #475569);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`;

const Card = styled.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`;

const CardValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
`;

const CardDesc = styled.div`
  font-size: 13px;
  color: var(--color-content-secondary, #475569);
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 64px 32px;
  border: 1.5px dashed var(--color-border-opaque, #e8eaee);
  border-radius: 12px;
  color: var(--color-content-tertiary, #87919f);
  text-align: center;
`;

const EmptyTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-content-secondary, #475569);
`;

const EmptyDesc = styled.div`
  font-size: 13px;
  max-width: 320px;
`;

const SectionHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
  margin-bottom: -8px;
`;

const ListCard = styled.div`
  background: var(--color-bg-primary, #fff);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  border-radius: 10px;
  overflow: hidden;
`;

const ListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  &:last-child { border-bottom: none; }
`;

const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const RowTitle = styled.div`font-weight: 500;`;

const RowMeta = styled.div`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
`;

const Badge = styled.span<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  background: ${p => p.$color ?? 'var(--color-bg-secondary, #f6f7f9)'};
  color: var(--color-content-secondary, #475569);
`;

// ── Pages ──────────────────────────────────────────────────────────────────

export function HomePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Home</PageTitle>
        <PageSubtitle>Overview of your workspace activity</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card>
          <CardLabel>Active Workers</CardLabel>
          <CardValue>142</CardValue>
          <CardDesc>Across 6 departments</CardDesc>
        </Card>
        <Card>
          <CardLabel>Open Tasks</CardLabel>
          <CardValue>38</CardValue>
          <CardDesc>12 due this week</CardDesc>
        </Card>
        <Card>
          <CardLabel>Pending Approvals</CardLabel>
          <CardValue>7</CardValue>
          <CardDesc>Awaiting your review</CardDesc>
        </Card>
        <Card>
          <CardLabel>Documents</CardLabel>
          <CardValue>94</CardValue>
          <CardDesc>4 require signatures</CardDesc>
        </Card>
      </CardGrid>
      <SectionHeading>Recent Activity</SectionHeading>
      <ListCard>
        <ListRow>
          <RowLeft><RowTitle>Sarah Kim onboarded</RowTitle><RowMeta>Engineering · 2h ago</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Completed</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Q4 Payroll processed</RowTitle><RowMeta>Finance · 5h ago</RowMeta></RowLeft>
          <Badge $color="#e3f2fd">Processed</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Policy update: PTO 2025</RowTitle><RowMeta>HR · Yesterday</RowMeta></RowLeft>
          <Badge>Draft</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>NDA — Alex Torres</RowTitle><RowMeta>Legal · 2d ago</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Pending</Badge>
        </ListRow>
      </ListCard>
    </Page>
  );
}

export function EngagedPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Engaged</PageTitle>
        <PageSubtitle>Active conversations with your team</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Open Threads</CardLabel><CardValue>24</CardValue><CardDesc>8 need a reply</CardDesc></Card>
        <Card><CardLabel>Resolved Today</CardLabel><CardValue>11</CardValue><CardDesc>↑ 22% vs yesterday</CardDesc></Card>
        <Card><CardLabel>Avg Response</CardLabel><CardValue>42m</CardValue><CardDesc>Within SLA target</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Conversations</SectionHeading>
      <ListCard>
        <ListRow>
          <RowLeft><RowTitle>James: "When does my PTO reset?"</RowTitle><RowMeta>Engineering · 10m ago</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Pending</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Maria: "Benefits enrollment question"</RowTitle><RowMeta>Design · 1h ago</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Pending</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Dev team: "Remote work policy"</RowTitle><RowMeta>Operations · 3h ago</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Resolved</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Priya: "Expense reimbursement"</RowTitle><RowMeta>Finance · Yesterday</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Resolved</Badge>
        </ListRow>
      </ListCard>
    </Page>
  );
}

export function InboxPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Inbox</PageTitle>
        <PageSubtitle>Notifications and items requiring your attention</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Unread</CardLabel><CardValue>18</CardValue><CardDesc>Since last visit</CardDesc></Card>
        <Card><CardLabel>Action Required</CardLabel><CardValue>5</CardValue><CardDesc>Approvals & reviews</CardDesc></Card>
        <Card><CardLabel>Mentions</CardLabel><CardValue>3</CardValue><CardDesc>In documents & tasks</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Inbox</SectionHeading>
      <ListCard>
        <ListRow>
          <RowLeft><RowTitle>Payroll approval needed</RowTitle><RowMeta>From Finance · Now</RowMeta></RowLeft>
          <Badge $color="#fce4ec">Action required</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>New hire offer letter ready</RowTitle><RowMeta>From HR · 30m ago</RowMeta></RowLeft>
          <Badge $color="#fce4ec">Action required</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>@mentioned in Policy draft</RowTitle><RowMeta>From Legal · 2h ago</RowMeta></RowLeft>
          <Badge $color="#e3f2fd">Mention</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Task assigned: Q1 review</RowTitle><RowMeta>From Manager · 4h ago</RowMeta></RowLeft>
          <Badge>New</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>E-Sign complete: NDA</RowTitle><RowMeta>System · Yesterday</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Complete</Badge>
        </ListRow>
      </ListCard>
    </Page>
  );
}

export function InvoicePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Invoice</PageTitle>
        <PageSubtitle>Track and manage contractor invoices</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Pending Payment</CardLabel><CardValue>$24.5k</CardValue><CardDesc>6 invoices</CardDesc></Card>
        <Card><CardLabel>Paid This Month</CardLabel><CardValue>$88.2k</CardValue><CardDesc>23 invoices</CardDesc></Card>
        <Card><CardLabel>Overdue</CardLabel><CardValue>$3.1k</CardValue><CardDesc>2 invoices</CardDesc></Card>
        <Card><CardLabel>Disputes</CardLabel><CardValue>1</CardValue><CardDesc>Awaiting resolution</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Invoices</SectionHeading>
      <ListCard>
        <ListRow>
          <RowLeft><RowTitle>INV-2024-089 · Alex Torres</RowTitle><RowMeta>$4,200 · Due Mar 30</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Pending</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>INV-2024-088 · Rahul Dev</RowTitle><RowMeta>$7,500 · Due Apr 1</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Pending</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>INV-2024-087 · Studio Nine</RowTitle><RowMeta>$12,000 · Paid Mar 20</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Paid</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>INV-2024-086 · Nomad Labs</RowTitle><RowMeta>$3,100 · Overdue Mar 15</RowMeta></RowLeft>
          <Badge $color="#fce4ec">Overdue</Badge>
        </ListRow>
      </ListCard>
    </Page>
  );
}

export function AIHomePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>AI Home</PageTitle>
        <PageSubtitle>Your AI-powered workspace assistant</PageSubtitle>
      </PageHeader>
      <EmptyState>
        <EmptyTitle>Ask anything about your workforce</EmptyTitle>
        <EmptyDesc>Summarize payroll trends, draft policy updates, answer compliance questions, and more.</EmptyDesc>
      </EmptyState>
      <SectionHeading>Suggested Prompts</SectionHeading>
      <CardGrid>
        <Card><CardDesc>"Summarize headcount changes this quarter"</CardDesc></Card>
        <Card><CardDesc>"Draft a remote work policy update"</CardDesc></Card>
        <Card><CardDesc>"Which contractors have expiring contracts?"</CardDesc></Card>
        <Card><CardDesc>"Show payroll variance vs last month"</CardDesc></Card>
      </CardGrid>
    </Page>
  );
}

// ── Marketplace (Last Mile Apps) ───────────────────────────────────────────

const MpPage = styled(Page)`
  padding-bottom: var(--space-16, 64px);
`;

const MpHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-8, 32px) 0 var(--space-2, 8px);
  text-align: center;
`;


const MpHeadline = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`;

const MpSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`;

const SearchWrap = styled.div`
  width: 100%;
  max-width: 720px;
  margin: var(--space-3, 12px) auto 0;
  position: relative;
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 50;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-lg, 0 12px 24px rgba(15, 23, 42, 0.12));
  max-height: 360px;
  overflow-y: auto;
  text-align: left;
`;

const SearchDropdownEmpty = styled.div`
  padding: var(--space-4, 16px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`;

const SearchResultIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm, 8px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 18px;
    height: 18px;
  }
`;

const SectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin: var(--space-8, 32px) auto 0;
  width: 100%;
  max-width: 720px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const SectionCaption = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`;

const FeaturedMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
  margin-top: var(--space-1, 4px);
`;

const SectionTitleText = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`;

const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-1, 4px) var(--space-2, 8px);
  margin-top: var(--space-3, 12px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PopularListItem = styled(ListItem)`
  border-radius: 12px;
  --li-hover-bg: var(--color-bg-secondary);

  & [class*='_description_'] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }
`;

const PopularLeading = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`;

const RankNumber = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  text-align: center;
  min-width: 24px;
`;

const PopularIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & > div,
  & svg {
    width: 24px;
    height: 24px;
  }
`;

const PopularDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const PopularDescLine = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PopularByline = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;

const BylineDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-content-tertiary);
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4, 16px);
  margin-top: var(--space-3, 12px);
  padding-bottom: var(--space-12, 48px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: var(--space-4, 16px);
  align-items: flex-start;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 14px);
  padding: var(--space-5, 20px);
  cursor: pointer;
  transition:
    background var(--duration-fast, 120ms) var(--ease-default, ease),
    border-color var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-bg-tertiary);
    border-color: var(--color-border-hover);
  }
`;

const FeaturedIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg, 16px);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturedBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  min-width: 0;
`;

const FeaturedName = styled.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;

const FeaturedDesc = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// ── Geometric shape icons (reference: Cool Shapes / flat color shapes) ────

const ShapeWrap = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ShapeCircle({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><circle cx="20" cy="20" r="16" fill={color} /></svg>;
}
function ShapeSquare({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><rect x="6" y="6" width="28" height="28" rx="4" fill={color} /></svg>;
}
function ShapeTriangle({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><path d="M20 5 L36 33 L4 33 Z" fill={color} /></svg>;
}
function ShapeHexagon({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><path d="M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z" fill={color} /></svg>;
}
function ShapePentagon({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><path d="M20 4 L36 16 L30 34 L10 34 L4 16 Z" fill={color} /></svg>;
}
function ShapeFlower({ color, size = 40 }: { color: string; size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <g fill={color}>
        <circle cx="20" cy="9" r="6" />
        <circle cx="31" cy="20" r="6" />
        <circle cx="20" cy="31" r="6" />
        <circle cx="9" cy="20" r="6" />
      </g>
      <circle cx="20" cy="20" r="5" fill="#fff" />
    </svg>
  );
}
function ShapeStar({ color, size = 40 }: { color: string; size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <path
        d="M20 4 C21 14 26 19 36 20 C26 21 21 26 20 36 C19 26 14 21 4 20 C14 19 19 14 20 4 Z"
        fill={color}
      />
    </svg>
  );
}
function ShapeOctagon({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><path d="M14 4 L26 4 L36 14 L36 26 L26 36 L14 36 L4 26 L4 14 Z" fill={color} /></svg>;
}
function ShapeDiamond({ color, size = 40 }: { color: string; size?: number }) {
  return <svg viewBox="0 0 40 40" width={size} height={size}><path d="M20 4 L36 20 L20 36 L4 20 Z" fill={color} /></svg>;
}

// ── Public icon helper for navigation ─────────────────────────────────────

const APP_ID_TO_SHAPE: Record<string, (size: number) => React.ReactNode> = {
  'mp-shift-marketplace':  s => <ShapeCircle   color="var(--color-blue-content-secondary, #4A8AB8)"   size={s} />,
  'mp-availability':       s => <ShapeHexagon  color="var(--color-green-content-secondary, #7BB97A)"  size={s} />,
  'mp-time-clock':         s => <ShapeDiamond  color="var(--color-orange-content-secondary, #E08B4A)" size={s} />,
  'mp-messaging':          s => <ShapeFlower   color="var(--color-pink-content-secondary, #E68FB6)"   size={s} />,
  'mp-client-portal':      s => <ShapeStar     color="var(--color-azure-content-secondary, #5B3DF0)"  size={s} />,
  'mp-labor-cost':         s => <ShapeSquare   color="var(--color-purple-content-secondary, #9C8AE0)" size={s} />,
  'mp-compliance-monitor': s => <ShapeOctagon  color="var(--color-red-content-secondary, #D9534F)"    size={s} />,
  'mp-recruiting':         s => <ShapePentagon color="var(--color-yellow-content-secondary, #E8C547)" size={s} />,
  'mp-credential':         s => <ShapeTriangle color="var(--color-matcha-content-secondary, #3CB6A8)" size={s} />,
  'mp-performance':        s => <ShapeStar     color="var(--color-purple-content-secondary, #9C8AE0)" size={s} />,
};

export function getMarketplaceAppIcon(id: string, size = 16): React.ReactNode {
  const fn = APP_ID_TO_SHAPE[id];
  return fn ? fn(size) : null;
}

type Complexity = 'low' | 'medium' | 'high';
type Impact = 'low' | 'medium' | 'high';
type AppStatus = 'recommended' | 'optional';

interface AppPreview {
  tagline: string;
  recommendedFor: string[];
  capabilities: string[];
  businessValue: string[];
  setupComplexity: Complexity;
  estimatedImpact: Impact;
  status: AppStatus;
}

interface AppDef {
  id: string;
  name: string;
  description: string;
  category: string;
  targetUsers: string[];
  coreFeatures: string[];
  author: string;
  installs: string;
  rating: number;
  shape: React.ReactNode;
  preview: AppPreview;
}

const COMMUNITY_APPS: AppDef[] = [
  {
    id: 'shift_marketplace',
    name: 'Shift Marketplace',
    description: 'Internal marketplace where employees can claim open shifts.',
    category: 'Scheduling',
    targetUsers: ['Managers', 'Employees'],
    coreFeatures: ['Open shift board', 'Shift claim approvals', 'Real-time notifications', 'Eligibility filtering'],
    author: 'Tito Goldstein',
    installs: '142',
    rating: 4.9,
    shape: <ShapeCircle color="var(--color-blue-content-secondary, #4A8AB8)" />,
    preview: {
      tagline: 'Let eligible workers claim open shifts faster.',
      recommendedFor: ['staffing', 'hospitality', 'light industrial'],
      capabilities: ['Open shift board', 'Employee shift claiming', 'Manager approval workflow', 'Eligibility rules', 'Real-time notifications', 'Shift fill-rate tracking'],
      businessValue: ['Reduce manual scheduling work', 'Improve shift coverage', 'Increase employee flexibility'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'labor_cost_forecasting',
    name: 'Labor Cost Forecasting',
    description: 'Predict labor costs based on schedules, overtime, and demand.',
    category: 'Analytics',
    targetUsers: ['Operations', 'Finance'],
    coreFeatures: ['Projected payroll calculations', 'Overtime risk alerts', 'Budget vs actual tracking', 'Department cost breakdowns'],
    author: 'Simon Karlsson',
    installs: '87',
    rating: 4.6,
    shape: <ShapeSquare color="var(--color-purple-content-secondary, #9C8AE0)" />,
    preview: {
      tagline: 'Forecast payroll costs before schedules are finalized.',
      recommendedFor: ['finance teams', 'operations leaders', 'large hourly teams'],
      capabilities: ['Projected labor cost', 'Overtime risk detection', 'Budget vs scheduled cost', 'Department cost breakdown', 'Location-level forecasting', 'Exportable reports'],
      businessValue: ['Control labor spend', 'Prevent avoidable overtime', 'Improve budget planning'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'employee_availability_portal',
    name: 'Employee Availability Portal',
    description: 'Allow workers to manage and submit availability preferences.',
    category: 'Workforce Management',
    targetUsers: ['Employees'],
    coreFeatures: ['Recurring availability', 'Time-off requests', 'Availability conflicts', 'Manager approvals'],
    author: 'Renee Park',
    installs: '64',
    rating: 4.5,
    shape: <ShapeHexagon color="var(--color-green-content-secondary, #7BB97A)" />,
    preview: {
      tagline: 'Let employees manage when they can work.',
      recommendedFor: ['part-time teams', 'flexible scheduling teams', 'student workers'],
      capabilities: ['Recurring availability', 'One-time availability changes', 'Time-off requests', 'Manager approvals', 'Conflict detection', 'Availability history'],
      businessValue: ['Reduce scheduling conflicts', 'Improve employee satisfaction', 'Help managers build better schedules'],
      setupComplexity: 'low',
      estimatedImpact: 'medium',
      status: 'recommended',
    },
  },
  {
    id: 'compliance_monitor',
    name: 'Compliance Monitor',
    description: 'Track labor law violations and scheduling compliance issues.',
    category: 'Compliance',
    targetUsers: ['HR', 'Operations'],
    coreFeatures: ['Missed break alerts', 'Overtime compliance', 'Predictive scheduling checks', 'Audit logs'],
    author: 'Tito Goldstein',
    installs: '58',
    rating: 4.7,
    shape: <ShapeOctagon color="var(--color-red-content-secondary, #D9534F)" />,
    preview: {
      tagline: 'Detect scheduling and labor compliance risks before they become issues.',
      recommendedFor: ['large teams', 'regulated workforces', 'multi-state operations'],
      capabilities: ['Overtime alerts', 'Missed break detection', 'Scheduling rule checks', 'Audit logs', 'Compliance reporting', 'Exception workflows'],
      businessValue: ['Lower compliance risk', 'Create audit-ready records', 'Help managers act before violations occur'],
      setupComplexity: 'high',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'smart_time_clock',
    name: 'Smart Time Clock',
    description: 'Mobile and kiosk-based clock-in system with GPS validation.',
    category: 'Time Tracking',
    targetUsers: ['Employees', 'Managers'],
    coreFeatures: ['GPS clock-ins', 'Photo verification', 'Auto break tracking', 'Late arrival alerts'],
    author: 'Marcus Chen',
    installs: '116',
    rating: 4.8,
    shape: <ShapeDiamond color="var(--color-orange-content-secondary, #E08B4A)" />,
    preview: {
      tagline: 'Clock in with GPS, kiosk, and photo validation.',
      recommendedFor: ['field teams', 'multi-location teams', 'hourly workforces'],
      capabilities: ['Mobile clock-in', 'Kiosk mode', 'GPS validation', 'Photo verification', 'Late arrival alerts', 'Break tracking'],
      businessValue: ['Reduce time theft', 'Improve payroll accuracy', 'Give managers real-time attendance visibility'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'recruiting_pipeline_dashboard',
    name: 'Recruiting Pipeline Dashboard',
    description: 'Manage applicants, interviews, and onboarding workflows.',
    category: 'Hiring',
    targetUsers: ['Recruiters', 'Managers'],
    coreFeatures: ['Applicant tracking', 'Interview scheduling', 'Hiring stages', 'Offer management'],
    author: 'Aisha Patel',
    installs: '42',
    rating: 4.1,
    shape: <ShapePentagon color="var(--color-yellow-content-secondary, #E8C547)" />,
    preview: {
      tagline: 'Track applicants from lead to active worker.',
      recommendedFor: ['staffing agencies', 'high-volume hiring teams'],
      capabilities: ['Applicant tracking', 'Hiring stages', 'Interview scheduling', 'Offer status', 'Onboarding handoff', 'Recruiter performance metrics'],
      businessValue: ['Improve hiring visibility', 'Speed up onboarding', 'Reduce candidate drop-off'],
      setupComplexity: 'high',
      estimatedImpact: 'medium',
      status: 'optional',
    },
  },
  {
    id: 'workforce_messaging_center',
    name: 'Workforce Messaging Center',
    description: 'Centralized communication hub for workforce operations.',
    category: 'Communication',
    targetUsers: ['Managers', 'Employees'],
    coreFeatures: ['Group messaging', 'Schedule announcements', 'Read receipts', 'Emergency alerts'],
    author: 'Simon Karlsson',
    installs: '94',
    rating: 4.4,
    shape: <ShapeFlower color="var(--color-pink-content-secondary, #E68FB6)" />,
    preview: {
      tagline: 'Centralize team communication around shifts and operations.',
      recommendedFor: ['distributed teams', 'field teams', 'large workforces'],
      capabilities: ['Group announcements', 'Shift-specific messages', 'Read receipts', 'Emergency alerts', 'Manager-to-worker messaging', 'Message history'],
      businessValue: ['Improve communication speed', 'Reduce missed updates', 'Keep operational messages tied to work'],
      setupComplexity: 'medium',
      estimatedImpact: 'medium',
      status: 'recommended',
    },
  },
  {
    id: 'client_staffing_portal',
    name: 'Client Staffing Portal',
    description: 'External-facing portal where clients request and monitor staffing.',
    category: 'Customer Experience',
    targetUsers: ['Clients'],
    coreFeatures: ['Shift requests', 'Worker approvals', 'Live staffing updates', 'Invoice visibility'],
    author: 'Daniela Cruz',
    installs: '31',
    rating: 4.7,
    shape: <ShapeStar color="var(--color-azure-content-secondary, #5B3DF0)" />,
    preview: {
      tagline: 'Give clients a portal to request, approve, and track staffing.',
      recommendedFor: ['staffing agencies', 'security', 'events', 'facilities'],
      capabilities: ['Client shift requests', 'Worker approval visibility', 'Live staffing status', 'Request history', 'Basic invoice visibility', 'Client-specific permissions'],
      businessValue: ['Improve client experience', 'Reduce back-and-forth communication', 'Increase visibility into staffing fulfillment'],
      setupComplexity: 'high',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'credential_tracker',
    name: 'Credential Tracker',
    description: 'Track employee certifications, licenses, and expiration dates.',
    category: 'Compliance',
    targetUsers: ['HR', 'Compliance Teams'],
    coreFeatures: ['Expiration reminders', 'Document uploads', 'Certification validation', 'Compliance reporting'],
    author: 'Renee Park',
    installs: '49',
    rating: 4.3,
    shape: <ShapeTriangle color="var(--color-matcha-content-secondary, #3CB6A8)" />,
    preview: {
      tagline: 'Track certifications, licenses, and required worker documents.',
      recommendedFor: ['healthcare staffing', 'security', 'transportation', 'skilled labor'],
      capabilities: ['Credential uploads', 'Expiration reminders', 'Approval workflows', 'Worker eligibility rules', 'Document status tracking', 'Compliance reports'],
      businessValue: ['Avoid assigning unqualified workers', 'Reduce manual document tracking', 'Maintain compliance visibility'],
      setupComplexity: 'medium',
      estimatedImpact: 'medium',
      status: 'recommended',
    },
  },
  {
    id: 'performance_insights_dashboard',
    name: 'Performance Insights Dashboard',
    description: 'Measure workforce performance and operational efficiency.',
    category: 'Analytics',
    targetUsers: ['Executives', 'Managers'],
    coreFeatures: ['Attendance scoring', 'Shift fulfillment metrics', 'Employee reliability rankings', 'Location performance analytics'],
    author: 'Marcus Chen',
    installs: '73',
    rating: 4.0,
    shape: <ShapeStar color="var(--color-purple-content-secondary, #9C8AE0)" />,
    preview: {
      tagline: 'Measure attendance, reliability, and workforce performance.',
      recommendedFor: ['operations leaders', 'account managers', 'executives'],
      capabilities: ['Attendance scoring', 'Reliability rankings', 'Shift fulfillment metrics', 'No-show tracking', 'Location performance', 'Manager dashboards'],
      businessValue: ['Identify top performers', 'Spot operational issues', 'Improve workforce planning'],
      setupComplexity: 'medium',
      estimatedImpact: 'medium',
      status: 'optional',
    },
  },
];

// ── Preview Dialog ─────────────────────────────────────────────────────────

const DialogTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  width: 100%;
`;

const DialogIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 28px;
    height: 28px;
  }
`;

const DialogTitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`;

const DialogAppName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  letter-spacing: var(--tracking-tight, -0.01em);
`;

const DialogRating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`;

const RatingStar = styled.span`
  color: var(--color-yellow-content-secondary, #E8C547);
  font-size: var(--text-base, 1rem);
  line-height: 1;
`;

const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8, 32px);
`;

const Tagline = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1, 4px);
`;

const DialogSectionTitle = styled.h4`
  margin: 0 0 var(--space-2, 8px) 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-semibold, 600);
  letter-spacing: var(--tracking-wider, 0.05em);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;

const DialogList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
`;

const DialogListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);

  & > svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: var(--color-green-content-secondary, #7BB97A);
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5, 20px);
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  position: relative;

  & + & {
    padding-left: var(--space-5, 20px);
  }

  & + &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--color-border-opaque);
  }
`;

const StatLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-tertiary);
  letter-spacing: var(--tracking-wide, 0.02em);
  text-transform: uppercase;
`;

const StatValue = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`;

const LEVEL_VALUE: Record<'low' | 'medium' | 'high', number> = { low: 1, medium: 2, high: 3 };

interface LevelBarProps {
  value: 'low' | 'medium' | 'high';
  /** When true, "high" is the best (e.g. impact). When false, "low" is the best (e.g. setup complexity). */
  higherIsBetter?: boolean;
}

const LevelBarRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const LevelTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const LevelSegment = styled.div<{ $filled: boolean; $color: 'green' | 'yellow' | 'red' }>`
  height: 6px;
  border-radius: var(--radius-xs, 2px);
  background: ${p => {
    if (!p.$filled) return 'var(--color-bg-tertiary, #eef0f3)';
    if (p.$color === 'green')  return 'var(--color-green-content-secondary, #7BB97A)';
    if (p.$color === 'yellow') return 'var(--color-yellow-content-secondary, #E8C547)';
    return 'var(--color-red-content-secondary, #D9534F)';
  }};
`;

const LevelLabel = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
  text-transform: capitalize;
`;

function LevelBar({ value, higherIsBetter = false }: LevelBarProps) {
  const filled = LEVEL_VALUE[value];
  const color: 'green' | 'yellow' | 'red' = (() => {
    if (higherIsBetter) {
      if (value === 'high')   return 'green';
      if (value === 'medium') return 'yellow';
      return 'red';
    }
    if (value === 'low')    return 'green';
    if (value === 'medium') return 'yellow';
    return 'red';
  })();

  return (
    <LevelBarRoot>
      <LevelTrack>
        {[1, 2, 3].map(i => (
          <LevelSegment key={i} $filled={i <= filled} $color={color} />
        ))}
      </LevelTrack>
      <LevelLabel>{value}</LevelLabel>
    </LevelBarRoot>
  );
}

const UseAppButton = styled(Button)`
  &&& {
    background-color: var(--color-bg-inverse-primary);
    color: var(--color-content-inverse-primary);
    border-color: transparent;
  }
  &&&:hover:not(:disabled) {
    background-color: var(--color-bg-inverse-secondary);
  }
  &&&:active:not(:disabled) {
    background-color: var(--color-bg-inverse-tertiary);
  }
`;

function AppPreviewDialog({ app, onClose }: { app: AppDef | null; onClose: () => void }) {
  if (!app) return null;
  return (
    <Dialog open={!!app} onClose={onClose} size="lg" aria-label={`${app.name} preview`}>
      <DialogHeader onClose={onClose}>
        <DialogTitleRow>
          <DialogIcon>{app.shape}</DialogIcon>
          <DialogTitleText>
            <DialogAppName>{app.name}</DialogAppName>
            <DialogRating>
              <RatingStar aria-hidden>★</RatingStar>
              <span>{app.rating.toFixed(1)}</span>
              <span aria-hidden>·</span>
              <span>{app.installs} installed</span>
            </DialogRating>
          </DialogTitleText>
          {app.preview.status === 'recommended' && (
            <Tag size="sm" variant="subtle" color="green">Recommended</Tag>
          )}
          {app.preview.status === 'optional' && (
            <Tag size="sm" variant="subtle" color="neutral">Optional</Tag>
          )}
        </DialogTitleRow>
      </DialogHeader>

      <DialogContent>
        <DialogBody>
          <StatGrid>
            <StatCard>
              <StatLabel>Category</StatLabel>
              <StatValue>{app.category}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Setup</StatLabel>
              <LevelBar value={app.preview.setupComplexity} />
            </StatCard>
            <StatCard>
              <StatLabel>Impact</StatLabel>
              <LevelBar value={app.preview.estimatedImpact} higherIsBetter />
            </StatCard>
          </StatGrid>

          <Tagline>{app.preview.tagline}</Tagline>

          <div>
            <DialogSectionTitle>Recommended for</DialogSectionTitle>
            <TagRow>
              {app.preview.recommendedFor.map(item => (
                <Tag key={item} size="sm" variant="outline" color="neutral">{item}</Tag>
              ))}
            </TagRow>
          </div>

          <div>
            <DialogSectionTitle>Capabilities</DialogSectionTitle>
            <DialogList>
              {app.preview.capabilities.map(cap => (
                <DialogListItem key={cap}>
                  <CheckCircleIcon size={16} />
                  <span>{cap}</span>
                </DialogListItem>
              ))}
            </DialogList>
          </div>

          <div>
            <DialogSectionTitle>Business value</DialogSectionTitle>
            <DialogList>
              {app.preview.businessValue.map(value => (
                <DialogListItem key={value}>
                  <ZapIcon size={16} />
                  <span>{value}</span>
                </DialogListItem>
              ))}
            </DialogList>
          </div>
        </DialogBody>
      </DialogContent>

      <DialogFooter>
        <UseAppButton variant="primary" size="md" trailingArtwork={<ArrowNarrowRightIcon size={14} />}>
          Use App
        </UseAppButton>
      </DialogFooter>
    </Dialog>
  );
}

export function MarketplacePage() {
  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppDef | null>(null);

  const popular = COMMUNITY_APPS.slice(0, 4);
  const featured = COMMUNITY_APPS.slice(4);

  const trimmedSearch = search.trim();
  const searchResults = trimmedSearch.length === 0
    ? []
    : COMMUNITY_APPS.filter(app =>
        app.name.toLowerCase().includes(trimmedSearch.toLowerCase()) ||
        app.description.toLowerCase().includes(trimmedSearch.toLowerCase()),
      );
  const showDropdown = searchFocused && trimmedSearch.length > 0;

  const handleResultClick = (app: AppDef) => {
    setSelectedApp(app);
    setSearch('');
    setSearchFocused(false);
  };

  return (
    <MpPage>
      <MpHero>
        <MpHeadline>Community Apps</MpHeadline>
        <MpSubtitle>
          Discover shared workforce apps built by your team — combine forms, automations, and dashboards
          to run last-mile operations.
        </MpSubtitle>
        <SearchWrap>
          <SearchField
            size="md"
            placeholder="Search community apps"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
          />
          {showDropdown && (
            <SearchDropdown>
              {searchResults.length === 0 ? (
                <SearchDropdownEmpty>No apps match your search</SearchDropdownEmpty>
              ) : (
                searchResults.map(app => (
                  <ListItem
                    key={app.id}
                    size="md"
                    divider={false}
                    interactive
                    onClick={() => handleResultClick(app)}
                    label={app.name}
                    description={app.description}
                    leadingSlot={
                      <SearchResultIcon>
                        <ShapeWrap>{app.shape}</ShapeWrap>
                      </SearchResultIcon>
                    }
                    trailingSlot={
                      app.preview.status === 'recommended'
                        ? <Tag size="sm" variant="subtle" color="green">Recommended</Tag>
                        : <Tag size="sm" variant="subtle" color="neutral">Optional</Tag>
                    }
                  />
                ))
              )}
            </SearchDropdown>
          )}
        </SearchWrap>
      </MpHero>

      {popular.length > 0 && (
        <SectionBlock>
          <SectionHeader>
            <SectionTitleText>Popular</SectionTitleText>
            <SectionCaption>Most installed apps in your workspace</SectionCaption>
          </SectionHeader>
          <PopularGrid>
            {popular.map((app, i) => (
              <PopularListItem
                key={app.name}
                size="md"
                divider={false}
                interactive
                onClick={() => setSelectedApp(app)}
                label={app.name}
                description={
                  <PopularDescWrap>
                    <PopularDescLine>{app.description}</PopularDescLine>
                    <PopularByline>{app.installs} installed</PopularByline>
                  </PopularDescWrap>
                }
                leadingSlot={
                  <PopularLeading>
                    <RankNumber>{i + 1}</RankNumber>
                    <PopularIcon>
                      <ShapeWrap>{app.shape}</ShapeWrap>
                    </PopularIcon>
                  </PopularLeading>
                }
              />
            ))}
          </PopularGrid>
        </SectionBlock>
      )}

      {featured.length > 0 && (
        <SectionBlock>
          <SectionHeader>
            <SectionTitleText>Featured</SectionTitleText>
            <SectionCaption>Curated picks across categories</SectionCaption>
          </SectionHeader>
          <FeaturedGrid>
            {featured.map(app => (
              <FeaturedCard key={app.name} onClick={() => setSelectedApp(app)} role="button" tabIndex={0}>
                <FeaturedIcon>
                  <ShapeWrap>{app.shape}</ShapeWrap>
                </FeaturedIcon>
                <FeaturedBody>
                  <FeaturedName>{app.name}</FeaturedName>
                  <FeaturedDesc>{app.description}</FeaturedDesc>
                  <FeaturedMeta>
                    <Tag size="sm" variant="subtle" color="neutral">{app.category}</Tag>
                    {app.targetUsers.map(user => (
                      <Tag key={user} size="sm" variant="outline" color="neutral">{user}</Tag>
                    ))}
                  </FeaturedMeta>
                </FeaturedBody>
              </FeaturedCard>
            ))}
          </FeaturedGrid>
        </SectionBlock>
      )}

      <AppPreviewDialog app={selectedApp} onClose={() => setSelectedApp(null)} />
    </MpPage>
  );
}

export function MarketplaceAppPage({ name }: { name: string }) {
  return (
    <Page>
      <PageHeader>
        <PageTitle>{name}</PageTitle>
        <PageSubtitle>One of your installed apps from Last Mile Apps.</PageSubtitle>
      </PageHeader>
      <EmptyState>
        <EmptyTitle>{name}</EmptyTitle>
        <EmptyDesc>This app's content will render here.</EmptyDesc>
      </EmptyState>
    </Page>
  );
}

export function CustomAppPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Custom App</PageTitle>
        <PageSubtitle>Your organization's custom-built application</PageSubtitle>
      </PageHeader>
      <EmptyState>
        <EmptyTitle>Custom App</EmptyTitle>
        <EmptyDesc>This space is configured by your organization. Contact your admin to set up this module.</EmptyDesc>
      </EmptyState>
    </Page>
  );
}

export function AddAppPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Add App</PageTitle>
        <PageSubtitle>Connect a new app to your workspace</PageSubtitle>
      </PageHeader>
      <CardGrid>
        {['HRIS Integration', 'Payroll Sync', 'ATS Connector', 'SSO Provider', 'Time Tracking', 'Benefits Admin'].map(name => (
          <Card key={name}>
            <CardLabel>Integration</CardLabel>
            <CardDesc>{name}</CardDesc>
            <Badge>Connect</Badge>
          </Card>
        ))}
      </CardGrid>
    </Page>
  );
}

export function DocumentStudioPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Document Studio</PageTitle>
        <PageSubtitle>Create and manage employment documents</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Total Documents</CardLabel><CardValue>247</CardValue><CardDesc>Across all templates</CardDesc></Card>
        <Card><CardLabel>Drafts</CardLabel><CardValue>12</CardValue><CardDesc>In progress</CardDesc></Card>
        <Card><CardLabel>Sent for Signature</CardLabel><CardValue>8</CardValue><CardDesc>Awaiting completion</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Documents</SectionHeading>
      <ListCard>
        <ListRow>
          <RowLeft><RowTitle>Offer Letter — Sarah Kim</RowTitle><RowMeta>Offer Letter · Created today</RowMeta></RowLeft>
          <Badge $color="#fff8e1">Draft</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Employment Contract — Dev Team</RowTitle><RowMeta>Contract · Mar 22</RowMeta></RowLeft>
          <Badge $color="#e3f2fd">Sent</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>NDA — Alex Torres</RowTitle><RowMeta>NDA · Mar 20</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Signed</Badge>
        </ListRow>
        <ListRow>
          <RowLeft><RowTitle>Contractor Agreement — Nomad Labs</RowTitle><RowMeta>Agreement · Mar 18</RowMeta></RowLeft>
          <Badge $color="#e8f5e9">Signed</Badge>
        </ListRow>
      </ListCard>
    </Page>
  );
}

export function FormPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Form</PageTitle>
        <PageSubtitle>Build and distribute forms across your organization</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Active Forms</CardLabel><CardValue>18</CardValue><CardDesc>Collecting responses</CardDesc></Card>
        <Card><CardLabel>Responses Today</CardLabel><CardValue>34</CardValue><CardDesc>Across all forms</CardDesc></Card>
        <Card><CardLabel>Completion Rate</CardLabel><CardValue>91%</CardValue><CardDesc>↑ 4% this week</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Forms</SectionHeading>
      <ListCard>
        {[
          { title: 'New Hire Onboarding', responses: '12 responses', status: 'Active' },
          { title: 'Benefits Enrollment 2025', responses: '89 responses', status: 'Active' },
          { title: 'Equipment Request', responses: '7 responses', status: 'Active' },
          { title: 'Exit Interview', responses: '3 responses', status: 'Closed' },
        ].map(f => (
          <ListRow key={f.title}>
            <RowLeft><RowTitle>{f.title}</RowTitle><RowMeta>{f.responses}</RowMeta></RowLeft>
            <Badge $color={f.status === 'Active' ? '#e8f5e9' : undefined}>{f.status}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function TasksPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Tasks</PageTitle>
        <PageSubtitle>Manage and track HR workflows</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>My Tasks</CardLabel><CardValue>14</CardValue><CardDesc>5 due today</CardDesc></Card>
        <Card><CardLabel>Team Tasks</CardLabel><CardValue>62</CardValue><CardDesc>Across 4 assignees</CardDesc></Card>
        <Card><CardLabel>Completed</CardLabel><CardValue>38</CardValue><CardDesc>This month</CardDesc></Card>
        <Card><CardLabel>Overdue</CardLabel><CardValue>3</CardValue><CardDesc>Needs attention</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Due Soon</SectionHeading>
      <ListCard>
        {[
          { title: 'Complete I-9 verification — Sarah Kim', due: 'Today', color: '#fce4ec' },
          { title: 'Send equipment checklist', due: 'Today', color: '#fce4ec' },
          { title: 'Review offer letter — Jun Park', due: 'Tomorrow', color: '#fff8e1' },
          { title: 'Schedule orientation session', due: 'Mar 28', color: '#fff8e1' },
          { title: 'Update org chart', due: 'Mar 30', color: undefined },
        ].map(t => (
          <ListRow key={t.title}>
            <RowLeft><RowTitle>{t.title}</RowTitle><RowMeta>Due {t.due}</RowMeta></RowLeft>
            <Badge $color={t.color}>{t.due}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function PolicyPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Policy Engine</PageTitle>
        <PageSubtitle>Author, version, and distribute company policies</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Published Policies</CardLabel><CardValue>43</CardValue><CardDesc>Across 8 categories</CardDesc></Card>
        <Card><CardLabel>Under Review</CardLabel><CardValue>6</CardValue><CardDesc>Awaiting approval</CardDesc></Card>
        <Card><CardLabel>Acknowledgments</CardLabel><CardValue>94%</CardValue><CardDesc>Team completion rate</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Policies</SectionHeading>
      <ListCard>
        {[
          { title: 'Remote Work Policy 2025', category: 'Workplace', status: 'Published', color: '#e8f5e9' },
          { title: 'PTO & Leave Guidelines', category: 'Benefits', status: 'Published', color: '#e8f5e9' },
          { title: 'Code of Conduct v3', category: 'Compliance', status: 'Under Review', color: '#fff8e1' },
          { title: 'Data & Privacy Policy', category: 'Legal', status: 'Under Review', color: '#fff8e1' },
          { title: 'Expense Reimbursement', category: 'Finance', status: 'Draft', color: undefined },
        ].map(p => (
          <ListRow key={p.title}>
            <RowLeft><RowTitle>{p.title}</RowTitle><RowMeta>{p.category}</RowMeta></RowLeft>
            <Badge $color={p.color}>{p.status}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function AutomationPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Automation</PageTitle>
        <PageSubtitle>Build and monitor automated HR workflows</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Active Automations</CardLabel><CardValue>21</CardValue><CardDesc>Running across modules</CardDesc></Card>
        <Card><CardLabel>Runs Today</CardLabel><CardValue>148</CardValue><CardDesc>0 errors</CardDesc></Card>
        <Card><CardLabel>Time Saved</CardLabel><CardValue>12h</CardValue><CardDesc>This week</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Active Automations</SectionHeading>
      <ListCard>
        {[
          { title: 'New hire onboarding sequence', trigger: 'On hire date', runs: '3 today', color: '#e8f5e9' },
          { title: 'Policy acknowledgment reminder', trigger: 'Weekly · Mon 9am', runs: '89 this week', color: '#e8f5e9' },
          { title: 'Payroll cutoff alert', trigger: 'Monthly · 3 days before', runs: '1 this month', color: '#e8f5e9' },
          { title: 'Contract expiry warning', trigger: '30 days before expiry', runs: '2 today', color: '#e8f5e9' },
        ].map(a => (
          <ListRow key={a.title}>
            <RowLeft><RowTitle>{a.title}</RowTitle><RowMeta>{a.trigger} · {a.runs}</RowMeta></RowLeft>
            <Badge $color={a.color}>Active</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function PayrollPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Payroll</PageTitle>
        <PageSubtitle>Process and manage payroll for your workforce</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Next Run</CardLabel><CardValue>Apr 1</CardValue><CardDesc>6 days away</CardDesc></Card>
        <Card><CardLabel>Total Payroll</CardLabel><CardValue>$214k</CardValue><CardDesc>This cycle</CardDesc></Card>
        <Card><CardLabel>Employees</CardLabel><CardValue>87</CardValue><CardDesc>Full-time & part-time</CardDesc></Card>
        <Card><CardLabel>Contractors</CardLabel><CardValue>24</CardValue><CardDesc>Pending 3 invoices</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Payroll Runs</SectionHeading>
      <ListCard>
        {[
          { period: 'Mar 1–15, 2025', total: '$106,400', status: 'Processed', color: '#e8f5e9' },
          { period: 'Feb 15–28, 2025', total: '$104,200', status: 'Processed', color: '#e8f5e9' },
          { period: 'Feb 1–14, 2025', total: '$103,800', status: 'Processed', color: '#e8f5e9' },
          { period: 'Jan 15–31, 2025', total: '$101,500', status: 'Archived', color: undefined },
        ].map(r => (
          <ListRow key={r.period}>
            <RowLeft><RowTitle>{r.period}</RowTitle><RowMeta>{r.total}</RowMeta></RowLeft>
            <Badge $color={r.color}>{r.status}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function ESignPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>E-Sign Studio</PageTitle>
        <PageSubtitle>Send, track, and collect electronic signatures</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Awaiting Signature</CardLabel><CardValue>8</CardValue><CardDesc>Sent to recipients</CardDesc></Card>
        <Card><CardLabel>Completed This Month</CardLabel><CardValue>31</CardValue><CardDesc>All signatures collected</CardDesc></Card>
        <Card><CardLabel>Avg Turnaround</CardLabel><CardValue>1.4d</CardValue><CardDesc>From send to signed</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Pending Signatures</SectionHeading>
      <ListCard>
        {[
          { title: 'Offer Letter — Sarah Kim', sent: 'Today', status: 'Awaiting', color: '#fff8e1' },
          { title: 'NDA — Rahul Dev', sent: 'Mar 23', status: 'Awaiting', color: '#fff8e1' },
          { title: 'Contract — Studio Nine', sent: 'Mar 21', status: 'Awaiting', color: '#fff8e1' },
          { title: 'Amendment — Alex Torres', sent: 'Mar 20', status: 'Signed', color: '#e8f5e9' },
          { title: 'IP Agreement — Jun Park', sent: 'Mar 19', status: 'Signed', color: '#e8f5e9' },
        ].map(d => (
          <ListRow key={d.title}>
            <RowLeft><RowTitle>{d.title}</RowTitle><RowMeta>Sent {d.sent}</RowMeta></RowLeft>
            <Badge $color={d.color}>{d.status}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}
