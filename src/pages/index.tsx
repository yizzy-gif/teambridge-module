import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  Button, Tag, ListItem, Eyebrow,
  ArrowNarrowRightIcon,
  SearchField,
  Dialog, DialogHeader, DialogContent, DialogFooter,
  CheckCircleIcon, ZapIcon,
  SearchSmIcon, XIcon,
  Pin01Icon, Download01Icon, ClockIcon, BookmarkIcon,
  Badge as AlloyBadge,
  AIComposerInput,
  ComposerActions, ComposerSendButton,
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

const MlLandingPage = styled(MpPage)`
  position: relative;
  isolation: isolate;
  /* Reserve room for the 12px bottom margin so the parent doesn't need
     to scroll (which would surface a vertical scrollbar gap on the right). */
  height: calc(100% - 12px);
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  padding-bottom: var(--space-6, 24px);
  border-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: transparent;
  background-image: linear-gradient(180deg, var(--color-bg-secondary, #F6F7F9) 0%, transparent 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${marketplaceHeroBg});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100% auto;
    transform-origin: 50% 0%;
    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
    pointer-events: none;
    animation: mlHeroBreathe 32s ease-in-out infinite;
  }

  @keyframes mlHeroBreathe {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.08); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before { animation: none; }
  }

  /* Dark mode: swap to dark variant of the same SVG (transparent base, screen blend) */
  @media (prefers-color-scheme: dark) {
    &::before {
      background-image: url(${marketplaceHeroBgDark});
    }
  }
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
  width: 70%;
  max-width: 1280px;

  @media (max-width: 900px) {
    width: 100%;
  }
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

const FeaturedFooter = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  margin-top: auto;
  padding-top: var(--space-2, 8px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-1, 4px) var(--space-2, 8px);
  margin-top: var(--space-3, 12px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PopularListItem = styled(ListItem)`
  border-radius: 12px;
  --li-hover-bg: var(--color-bg-tertiary);

  & [class*='_description_'] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }

  /* Subtle scale-up on the app shape when hovering the row. */
  &:hover [data-role='popular-icon'] > * {
    transform: scale(1.12);
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

  & > * {
    transition: transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4, 16px);
  margin-top: var(--space-3, 12px);
  padding-bottom: var(--space-12, 48px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  background: var(--color-bg-primary);
  border: none;
  border-radius: var(--radius-lg, 14px);
  padding: var(--space-5, 20px);
  cursor: pointer;
  box-shadow: var(--shadow-below-md);
  transition:
    background var(--duration-fast, 120ms) var(--ease-default, ease),
    box-shadow var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)),
    transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));

  &:hover {
    background: var(--color-bg-secondary);
    box-shadow: var(--shadow-below-high);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    transition-duration: var(--duration-fast, 120ms);
  }

  &:hover [data-role='featured-icon'] > * {
    transform: scale(1.12);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background var(--duration-fast, 120ms) var(--ease-default, ease);
    &:hover, &:active { transform: none; }
  }
`;

const FeaturedTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2, 8px);
`;

const FeaturedIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg, 14px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    width: 32px;
    height: 32px;
  }

  /* Inner shape scales up on card hover for a subtle response. */
  & > * {
    transition: transform var(--duration-slow, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  }
`;

const FeaturedSavedPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--color-bg-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-primary);
`;

const FeaturedBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  min-width: 0;
  flex: 1;
`;

const FeaturedAuthor = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);

  & strong {
    font-weight: var(--font-weight-medium, 500);
    color: var(--color-content-secondary);
  }

  & span {
    color: var(--color-content-tertiary);
  }
`;

const FeaturedName = styled.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  color: var(--color-content-primary);
`;

const FeaturedDesc = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  'mp-client-portal':      s => <ShapeHexagon  color="var(--color-azure-content-secondary, #5B3DF0)"  size={s} />,
  'mp-labor-cost':         s => <ShapeSquare   color="var(--color-purple-content-secondary, #9C8AE0)" size={s} />,
  'mp-compliance-monitor': s => <ShapeOctagon  color="var(--color-red-content-secondary, #D9534F)"    size={s} />,
  'mp-recruiting':         s => <ShapePentagon color="var(--color-yellow-content-secondary, #E8C547)" size={s} />,
  'mp-credential':         s => <ShapeTriangle color="var(--color-matcha-content-secondary, #3CB6A8)" size={s} />,
  'mp-performance':        s => <ShapeTriangle color="var(--color-purple-content-secondary, #9C8AE0)" size={s} />,
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
  /** Background services run without UI; the preview dialog skips the screenshot. */
  appType?: 'team' | 'background';
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
    shape: <ShapeHexagon color="var(--color-azure-content-secondary, #5B3DF0)" />,
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
    shape: <ShapeTriangle color="var(--color-purple-content-secondary, #9C8AE0)" />,
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

// Background services — automated apps that run without a user-facing UI.
const BACKGROUND_MARKETPLACE_APPS: AppDef[] = [
  {
    id: 'auto_shift_optimizer',
    name: 'Auto Shift Optimizer',
    description: 'Automatically balances schedules based on labor demand, overtime risk, and worker availability.',
    category: 'Scheduling',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Auto-fill open shifts', 'Minimize overtime', 'Balance worker hours', 'Optimize labor coverage', 'Apply scheduling rules'],
    author: 'Teambridge',
    installs: '128',
    rating: 4.8,
    shape: <ShapeCircle color="var(--color-green-content-secondary, #7BB97A)" />,
    preview: {
      tagline: 'Automatically balance schedules for cost and coverage.',
      recommendedFor: ['staffing', 'hospitality', 'healthcare'],
      capabilities: ['Auto-fill open shifts', 'Minimize overtime', 'Balance worker hours', 'Optimize labor coverage', 'Apply scheduling rules'],
      businessValue: ['Reduce overtime spend', 'Improve coverage', 'Free up scheduler time'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'payroll_export_engine',
    name: 'Payroll Export Engine',
    description: 'Processes approved timesheets and generates payroll-ready exports automatically.',
    category: 'Payroll',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Aggregate timesheets', 'Calculate regular and overtime hours', 'Generate payroll exports', 'Validate missing punches', 'Detect payroll anomalies'],
    author: 'Teambridge',
    installs: '109',
    rating: 4.7,
    shape: <ShapeSquare color="var(--color-matcha-content-secondary, #3CB6A8)" />,
    preview: {
      tagline: 'Turn approved timesheets into payroll-ready exports.',
      recommendedFor: ['staffing', 'finance', 'operations'],
      capabilities: ['Aggregate timesheets', 'Calculate regular and overtime hours', 'Generate payroll exports', 'Validate missing punches', 'Detect payroll anomalies'],
      businessValue: ['Cut manual payroll work', 'Reduce errors', 'Speed up payroll cycles'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'attendance_anomaly_detector',
    name: 'Attendance Anomaly Detector',
    description: 'Monitors attendance patterns and flags suspicious or unusual behavior automatically.',
    category: 'Attendance',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Detect repeated late arrivals', 'Identify missed punches', 'Flag unusual clock-in locations', 'Track no-show trends', 'Generate risk scores'],
    author: 'Teambridge',
    installs: '74',
    rating: 4.6,
    shape: <ShapeOctagon color="var(--color-orange-content-secondary, #E08B4A)" />,
    preview: {
      tagline: 'Surface attendance issues before they become a problem.',
      recommendedFor: ['operations', 'compliance', 'staffing'],
      capabilities: ['Detect repeated late arrivals', 'Identify missed punches', 'Flag unusual clock-in locations', 'Track no-show trends', 'Generate risk scores'],
      businessValue: ['Reduce no-shows', 'Catch time-theft early', 'Improve workforce reliability'],
      setupComplexity: 'low',
      estimatedImpact: 'medium',
      status: 'optional',
    },
  },
  {
    id: 'credential_expiration_monitor',
    name: 'Credential Expiration Monitor',
    description: 'Automatically tracks certification expirations and prevents invalid worker assignments.',
    category: 'Compliance',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Monitor expiration dates', 'Send renewal reminders', 'Restrict non-compliant workers', 'Track uploaded documents', 'Generate compliance reports'],
    author: 'Teambridge',
    installs: '63',
    rating: 4.5,
    shape: <ShapeTriangle color="var(--color-blue-content-secondary, #4A8AB8)" />,
    preview: {
      tagline: 'Keep credentials current and assignments compliant.',
      recommendedFor: ['healthcare', 'security', 'compliance'],
      capabilities: ['Monitor expiration dates', 'Send renewal reminders', 'Restrict non-compliant workers', 'Track uploaded documents', 'Generate compliance reports'],
      businessValue: ['Avoid compliance violations', 'Prevent invalid assignments', 'Automate renewal nudges'],
      setupComplexity: 'low',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'smart_notification_router',
    name: 'Smart Notification Router',
    description: 'Routes notifications to the right employees based on urgency, role, and shift context.',
    category: 'Communication',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Priority-based notifications', 'Role-aware targeting', 'SMS and push delivery', 'Escalation workflows', 'Quiet-hour controls'],
    author: 'Teambridge',
    installs: '88',
    rating: 4.4,
    shape: <ShapeFlower color="var(--color-azure-content-secondary, #5B3DF0)" />,
    preview: {
      tagline: 'Send the right message to the right people, automatically.',
      recommendedFor: ['operations', 'communications', 'staffing'],
      capabilities: ['Priority-based notifications', 'Role-aware targeting', 'SMS and push delivery', 'Escalation workflows', 'Quiet-hour controls'],
      businessValue: ['Reduce noise', 'Faster response times', 'Better escalation paths'],
      setupComplexity: 'low',
      estimatedImpact: 'medium',
      status: 'optional',
    },
  },
  {
    id: 'invoice_generation_engine',
    name: 'Invoice Generation Engine',
    description: 'Automatically converts approved labor hours into client invoices.',
    category: 'Billing',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Generate invoices from shifts', 'Apply bill rates', 'Calculate overtime billing', 'Create invoice PDFs', 'Track invoice status'],
    author: 'Teambridge',
    installs: '52',
    rating: 4.3,
    shape: <ShapePentagon color="var(--color-pink-content-secondary, #E68FB6)" />,
    preview: {
      tagline: 'Turn shifts into client invoices without manual entry.',
      recommendedFor: ['staffing agencies', 'finance', 'operations'],
      capabilities: ['Generate invoices from shifts', 'Apply bill rates', 'Calculate overtime billing', 'Create invoice PDFs', 'Track invoice status'],
      businessValue: ['Faster billing cycles', 'Fewer billing errors', 'Better revenue visibility'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
    },
  },
  {
    id: 'worker_matching_engine',
    name: 'Worker Matching Engine',
    description: 'Automatically recommends the best workers for open shifts using availability and performance data.',
    category: 'Staffing',
    appType: 'background',
    targetUsers: ['System'],
    coreFeatures: ['Skill-based matching', 'Availability filtering', 'Distance calculations', 'Performance-based recommendations', 'Compliance-aware matching'],
    author: 'Teambridge',
    installs: '46',
    rating: 4.2,
    shape: <ShapeDiamond color="var(--color-pink-content-secondary, #E68FB6)" />,
    preview: {
      tagline: 'Surface the best worker for every open shift.',
      recommendedFor: ['staffing agencies', 'operations', 'recruiting'],
      capabilities: ['Skill-based matching', 'Availability filtering', 'Distance calculations', 'Performance-based recommendations', 'Compliance-aware matching'],
      businessValue: ['Better fill rates', 'Higher worker satisfaction', 'Reduce coordinator effort'],
      setupComplexity: 'medium',
      estimatedImpact: 'high',
      status: 'recommended',
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
  gap: var(--space-4, 16px);
`;

const ScreenshotFrame = styled.div`
  /* Plain pass-through wrapper. */
`;

const Screenshot = styled.div`
  width: 100%;
  position: relative;
  background: transparent;
  /* Opacity fade: fully opaque until 75%, then fades to transparent over the
     final 25% of the image height. */
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
          mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);

  & > svg,
  & > img {
    width: 100%;
    height: auto;
    display: block;
    background: transparent;
    border-radius: 6px;
  }
`;

// ── App preview mockups (stylized screenshots) ───────────────────────────

interface MockProps { color: string; soft: string }

function MockShiftMarketplace({ color }: MockProps) {
  const filters = [
    { label: 'All open shifts', count: 42, active: true },
    { label: 'This weekend', count: 14 },
    { label: 'Premium pay', count: 8 },
    { label: 'Near me', count: 19 },
  ];
  const shifts = [
    { role: 'Line Cook', when: 'Sat · 10AM – 6PM · Downtown · 2.1 mi', pay: '$22.50/hr', tag: 'Eligible', tagBg: '#DCFCE7', tagColor: '#166534', iconBg: '#DCFCE7' },
    { role: 'Server', when: 'Sat · 4PM – 11PM · Westside · 4.8 mi', pay: '$18.00/hr + tips', tag: 'Eligible', tagBg: '#DCFCE7', tagColor: '#166534', iconBg: '#DCFCE7' },
    { role: 'Shift Lead', when: 'Sun · 6AM – 2PM · Northgate · 0.9 mi', pay: '$26.00/hr', tag: 'Premium', tagBg: '#DBEAFE', tagColor: '#1E40AF', iconBg: '#DBEAFE' },
    { role: 'Dishwasher', when: 'Sun · 12PM – 8PM · Downtown · 2.1 mi', pay: '$17.50/hr', tag: 'Pending', tagBg: '#F1F5F9', tagColor: '#475569', iconBg: '#DCFCE7' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgShift" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgShift)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Shift Marketplace ·</text>
      <text x="78" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Open shifts</text>
      <line x1="14" y1="40" x2="386" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Sidebar filters */}
      <text x="22" y="56" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.5">FILTERS</text>
      {filters.map((f, i) => (
        <g key={f.label} transform={`translate(18, ${66 + i * 18})`}>
          {f.active && <rect x="0" y="-4" width="100" height="14" rx="4" fill="#F1F5F9" />}
          <text x="6" y="6" fontFamily="Geist, sans-serif" fontSize="6" fontWeight={f.active ? '600' : '500'} fill="#0f172a">{f.label}</text>
          <text x="92" y="6" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.5" textAnchor="end">{f.count}</text>
        </g>
      ))}
      <text x="22" y="156" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.5">LOCATION</text>
      {[{l:'Downtown',c:12},{l:'Westside',c:7}].map((d, i) => (
        <g key={d.l} transform={`translate(24, ${166 + i * 14})`}>
          <text x="0" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fill="#0f172a">{d.l}</text>
          <text x="86" y="6" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">{d.c}</text>
        </g>
      ))}
      <line x1="124" y1="40" x2="124" y2="211" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Search and filter row */}
      <rect x="132" y="50" width="178" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <circle cx="140" cy="57" r="2.5" fill="none" stroke="#0f172a" strokeOpacity="0.4" strokeWidth="0.6" />
      <text x="146" y="60" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5">Role, location, date</text>
      <rect x="314" y="50" width="40" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="334" y="60" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.7" textAnchor="middle">📅 This wk</text>
      <rect x="358" y="50" width="22" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="369" y="60" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.7" textAnchor="middle">⚙ 3</text>
      {/* Shifts list */}
      {shifts.map((s, i) => (
        <g key={i} transform={`translate(132, ${74 + i * 32})`}>
          <rect width="248" height="28" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
          <rect x="6" y="6" width="16" height="16" rx="3" fill={s.iconBg} />
          <rect x="10" y="10" width="8" height="8" rx="1" fill="none" stroke={s.tagColor} strokeWidth="0.6" />
          <text x="28" y="13" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">{s.role}</text>
          <text x="28" y="22" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{s.when}</text>
          <text x="180" y="13" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" textAnchor="end">{s.pay}</text>
          <rect x={s.tag === 'Pending' ? 152 : 158} y="16" width={s.tag === 'Pending' ? 28 : 22} height="7" rx="3" fill={s.tagBg} />
          <text x={s.tag === 'Pending' ? 166 : 169} y="21" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill={s.tagColor} textAnchor="middle">{s.tag}</text>
          <rect x="186" y="6" width="56" height="16" rx="4" fill="#0f172a" />
          <text x="214" y="16" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#fff" textAnchor="middle">Claim shift</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockLaborCost({ color }: MockProps) {
  const stats = [
    { label: 'PROJECTED PAYROLL', value: '$84.2k', sub: '+3.4% vs budget' },
    { label: 'BUDGET', value: '$81.5k', bar: 0.84, barColor: '#D97706' },
    { label: 'OVERTIME RISK', value: '$3.1k', sub: '7 staff at risk', valueColor: '#D97706' },
    { label: 'LOCATIONS', value: '3 / 9', sub: 'Over budget' },
  ];
  const variance = [
    { dept: 'Front of house', amount: '+$1,840', color: '#D97706' },
    { dept: 'Kitchen',        amount: '−$420',  color: '#16A34A' },
    { dept: 'Catering',       amount: '+$960',  color: '#D97706' },
    { dept: 'Custodial',      amount: '+$120',  color: '#0f172a' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgLabor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgLabor)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Labor Cost Forecasting ·</text>
      <text x="92" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Forecast overview</text>
      <text x="22" y="48" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Next week's projection</text>
      <text x="22" y="58" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">May 11 – May 17 · all locations</text>
      <rect x="276" y="42" width="56" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="304" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7" textAnchor="middle">📅 Next wk</text>
      <rect x="336" y="42" width="48" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="360" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7" textAnchor="middle">⬇ Export</text>
      {stats.map((s, i) => (
        <g key={i} transform={`translate(${22 + i * 91}, 70)`}>
          <rect width="84" height="44" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
          <text x="8" y="10" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">{s.label}</text>
          <text x="8" y="26" fontFamily="Geist, sans-serif" fontSize="14" fontWeight="700" fill={s.valueColor ?? '#0f172a'}>{s.value}</text>
          {s.bar !== undefined ? (
            <>
              <rect x="8" y="32" width="68" height="4" rx="2" fill="#0f172a" opacity="0.06" />
              <rect x="8" y="32" width={68 * s.bar} height="4" rx="2" fill={s.barColor} />
            </>
          ) : (
            <text x="8" y="38" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{s.sub}</text>
          )}
        </g>
      ))}
      {/* Daily labor cost vs budget chart */}
      <rect x="22" y="120" width="208" height="86" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="30" y="132" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.55">DAILY LABOR COST VS BUDGET</text>
      <rect x="206" y="125" width="20" height="9" rx="4" fill="#F1F5F9" />
      <text x="216" y="131" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.7" textAnchor="middle">Forecast</text>
      <line x1="32" y1="172" x2="222" y2="172" stroke="#D97706" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
      <path d="M32 188 L62 178 L92 182 L122 168 L152 156 L182 152 L212 162" stroke="#3B82F6" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 188 L62 178 L92 182 L122 168 L152 156 L182 152 L212 162 L212 198 L32 198 Z" fill="#3B82F6" opacity="0.1" />
      <circle cx="32" cy="201" r="1.5" fill="#0f172a" />
      <text x="38" y="203" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.6">Projected</text>
      <line x1="68" y1="201" x2="76" y2="201" stroke="#D97706" strokeWidth="0.8" />
      <text x="80" y="203" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.6">Budget</text>
      {/* Variance by department */}
      <rect x="238" y="120" width="142" height="86" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="246" y="132" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.55">VARIANCE BY DEPARTMENT</text>
      {variance.map((v, i) => (
        <g key={v.dept} transform={`translate(246, ${144 + i * 14})`}>
          <text x="0" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a">{v.dept}</text>
          <text x="126" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="700" fill={v.color} textAnchor="end">{v.amount}</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockAvailability({ color, soft }: MockProps) {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const times = ['8 AM','12 PM','4 PM','8 PM'];
  // a=available, t=time off, o=off
  const grid: ('a'|'t'|'o')[][] = [
    ['a','a','a','a','o','a','o'],
    ['a','a','a','a','o','a','o'],
    ['a','a','a','t','o','a','o'],
    ['o','a','a','o','o','o','o'],
  ];
  const cell = (state: 'a'|'t'|'o') => {
    if (state === 'a') return { fill: color, op: 0.18, text: 'Available', textColor: color };
    if (state === 't') return { fill: '#E08B4A', op: 0.18, text: 'Time off', textColor: '#A95F1F' };
    return { fill: '#0f172a', op: 0.04, text: 'Off', textColor: '#0f172a' };
  };
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgAvail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgAvail)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="30" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Availability ·</text>
      <text x="50" y="30" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Your availability</text>
      <text x="22" y="49" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Weekly availability</text>
      <text x="22" y="60" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.55">Recurring · effective May 6 onward</text>
      <rect x="278" y="42" width="60" height="14" rx="7" fill="#fff" stroke="#e2e8f0" />
      <text x="284" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7">✓ Saved 2 min ago</text>
      <rect x="342" y="42" width="42" height="14" rx="4" fill="#0f172a" />
      <text x="348" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#fff" fontWeight="600">Submit</text>
      <g transform="translate(22, 70)">
        {days.map((d, i) => (
          <text key={d} x={28 + i * 46} y="8" fontFamily="Geist, sans-serif" fontSize="7" fontWeight="600" fill="#0f172a" opacity="0.6">{d}</text>
        ))}
        {times.map((t, r) => (
          <g key={t}>
            <text x="0" y={32 + r * 30} fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">{t}</text>
            {grid[r].map((s, c) => {
              const cfg = cell(s);
              return (
                <g key={c}>
                  <rect x={20 + c * 46} y={18 + r * 30} width="42" height="22" rx="4" fill={cfg.fill} opacity={cfg.op} />
                  <text x={24 + c * 46} y={32 + r * 30} fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill={cfg.textColor}>{cfg.text}</text>
                </g>
              );
            })}
          </g>
        ))}
      </g>
      <rect x="22" y="195" width="44" height="9" rx="4" fill={color} opacity="0.18" />
      <text x="28" y="201" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill={color}>Available</text>
      <rect x="68" y="195" width="64" height="9" rx="4" fill="#E08B4A" opacity="0.18" />
      <text x="74" y="201" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#A95F1F">Time off requested</text>
      <rect x="134" y="195" width="46" height="9" rx="4" fill="#0f172a" opacity="0.05" stroke="#0f172a" strokeOpacity="0.15" />
      <text x="140" y="201" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.7">Unavailable</text>
    </svg>
  );
}

function MockCompliance({ color }: MockProps) {
  const stats = [
    { label: 'COMPLIANCE SCORE', value: '94', suffix: '/100', bar: 0.94, barColor: '#16A34A' },
    { label: 'OPEN VIOLATIONS',  value: '7', sub: '3 critical · 4 moderate', valueColor: '#991B1B' },
    { label: 'AT-RISK STAFF',    value: '12', sub: 'Of 218 active' },
    { label: 'RESOLVED',         value: '23', sub: 'Avg 4.2 hrs', valueColor: '#16A34A' },
  ];
  const violations = [
    { name: 'Approaching overtime',     who: 'Maria Alvarez',  dept: 'Front of house', sev: 'Sev 2', sevBg: '#FEF3C7', sevColor: '#92400E' },
    { name: 'Missed meal break',        who: 'Devon Park',     dept: 'Kitchen',        sev: 'Sev 1', sevBg: '#FEE2E2', sevColor: '#991B1B' },
    { name: 'Back-to-back close/open',  who: 'Riley Chen',     dept: 'Front of house', sev: 'Sev 2', sevBg: '#FEF3C7', sevColor: '#92400E' },
    { name: 'Minor working past 10 PM', who: 'Sam Iyer',       dept: 'Hosting',        sev: 'Sev 1', sevBg: '#FEE2E2', sevColor: '#991B1B' },
    { name: 'Unsigned timecard',        who: 'Jordan Reyes',   dept: 'Catering',       sev: 'Sev 3', sevBg: '#FEF9C3', sevColor: '#854D0E' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgCompliance" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgCompliance)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Compliance Monitor ·</text>
      <text x="84" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Compliance overview</text>
      <line x1="14" y1="40" x2="386" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
      {stats.map((s, i) => (
        <g key={i} transform={`translate(${22 + i * 91}, 50)`}>
          <rect width="84" height="44" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
          <text x="8" y="10" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">{s.label}</text>
          <text x="8" y="26" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="700" fill={s.valueColor ?? '#0f172a'}>{s.value}</text>
          {s.suffix && <text x={8 + 18} y="26" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">{s.suffix}</text>}
          {s.bar !== undefined ? (
            <>
              <rect x="8" y="32" width="68" height="4" rx="2" fill="#0f172a" opacity="0.06" />
              <rect x="8" y="32" width={68 * s.bar} height="4" rx="2" fill={s.barColor} />
            </>
          ) : (
            <text x="8" y="38" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{s.sub}</text>
          )}
        </g>
      ))}
      {/* Active violations table */}
      <rect x="22" y="100" width="358" height="106" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="30" y="112" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="700" fill="#0f172a">Active violations</text>
      <text x="370" y="112" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">Last 7 days · ⬇ Export</text>
      <rect x="22" y="118" width="358" height="12" fill="#F8FAFC" />
      <text x="30" y="126" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.55">VIOLATION</text>
      <text x="160" y="126" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.55">EMPLOYEE</text>
      <text x="240" y="126" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.55">DEPT</text>
      <text x="304" y="126" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.55">SEV</text>
      <text x="344" y="126" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" opacity="0.55">STATUS</text>
      {violations.map((v, i) => (
        <g key={i} transform={`translate(30, ${136 + i * 14})`}>
          <text x="0" y="6" fontFamily="Geist, sans-serif" fontSize="5" fill="#DC2626">⚠</text>
          <text x="6" y="6" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="500" fill="#0f172a">{v.name}</text>
          <text x="130" y="6" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a">{v.who}</text>
          <text x="210" y="6" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.7">{v.dept}</text>
          <rect x="270" y="0" width="22" height="9" rx="4" fill={v.sevBg} />
          <text x="281" y="6" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill={v.sevColor} textAnchor="middle">{v.sev}</text>
          <rect x="305" y="0" width="38" height="9" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
          <text x="324" y="6" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="500" fill="#0f172a" opacity="0.7" textAnchor="middle">In review</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockTimeClock({ color }: MockProps) {
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgClock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgClock)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Smart Time Clock ·</text>
      <text x="78" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Clock in</text>
      <line x1="14" y1="40" x2="386" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Center area */}
      <text x="142" y="60" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.6" textAnchor="middle">TUESDAY · MAY 6 · 8:57 AM</text>
      <circle cx="142" cy="130" r="56" fill="#0f172a" />
      <text x="142" y="118" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#fff" opacity="0.5" textAnchor="middle">TAP TO</text>
      <text x="142" y="138" fontFamily="Geist, sans-serif" fontSize="20" fontWeight="700" fill="#fff" textAnchor="middle">Clock in</text>
      <text x="142" y="152" fontFamily="Geist, sans-serif" fontSize="5" fill="#fff" opacity="0.5" textAnchor="middle">8:57:14 AM</text>
      <rect x="86" y="194" width="56" height="12" rx="6" fill="#DCFCE7" />
      <text x="114" y="202" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#166534" textAnchor="middle">📍 GPS verified</text>
      <rect x="146" y="194" width="48" height="12" rx="6" fill="#DBEAFE" />
      <text x="170" y="202" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#1E40AF" textAnchor="middle">📷 Photo ready</text>
      {/* Today's shift card */}
      <rect x="244" y="50" width="136" height="44" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="252" y="62" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">TODAY'S SHIFT</text>
      <text x="252" y="76" fontFamily="Geist, sans-serif" fontSize="6.5" fontWeight="700" fill="#0f172a">Line Cook · 9 AM – 5 PM</text>
      <text x="252" y="86" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">Downtown · 30 min unpaid break</text>
      {/* Pay period card */}
      <rect x="244" y="100" width="136" height="50" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="252" y="112" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">THIS PAY PERIOD</text>
      <text x="252" y="128" fontFamily="Geist, sans-serif" fontSize="14" fontWeight="700" fill="#0f172a">28.5</text>
      <text x="280" y="128" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.55">hrs</text>
      <rect x="252" y="134" width="120" height="3" rx="1.5" fill="#0f172a" opacity="0.06" />
      <rect x="252" y="134" width="74" height="3" rx="1.5" fill="#0f172a" />
      <text x="252" y="146" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">62% of 46 hr cap</text>
      {/* Recent card */}
      <rect x="244" y="156" width="136" height="50" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="252" y="168" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">RECENT</text>
      <rect x="252" y="174" width="10" height="10" rx="2" fill="#DCFCE7" />
      <path d="M254 179 L256 181 L260 177" stroke="#16A34A" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="266" y="180" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a">Clock out</text>
      <text x="266" y="186" fontFamily="Geist, sans-serif" fontSize="4" fill="#0f172a" opacity="0.55">Yesterday · 5:02 PM</text>
      <rect x="252" y="190" width="10" height="10" rx="2" fill="#DBEAFE" />
      <text x="254" y="198" fontFamily="Geist, sans-serif" fontSize="6" fill="#1E40AF">📅</text>
      <text x="266" y="196" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a">Break ended</text>
      <text x="266" y="202" fontFamily="Geist, sans-serif" fontSize="4" fill="#0f172a" opacity="0.55">Yesterday · 1:30 PM</text>
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockRecruiting({ color }: MockProps) {
  const stages = [
    { name: 'APPLIED', count: 24, items: [
      { name: 'Casey Wu', role: 'Line Cook', tag: 'Line', tagColor: '#3B82F6', tagBg: '#DBEAFE' },
      { name: 'Pat Diaz', role: 'Server', tag: 'Server', tagColor: '#7C3AED', tagBg: '#EDE9FE' },
      { name: 'Mae Lin', role: 'Server', tag: 'Server', tagColor: '#7C3AED', tagBg: '#EDE9FE' },
    ]},
    { name: 'SCREENING', count: 11, items: [
      { name: 'Avery Cole', role: 'Shift Lead', tag: 'Shift', tagColor: '#8B5CF6', tagBg: '#EDE9FE' },
      { name: 'Tomi Asuka', role: 'Line Cook', tag: 'Line', tagColor: '#3B82F6', tagBg: '#DBEAFE' },
    ]},
    { name: 'INTERVIEW', count: 6, items: [
      { name: 'Ren Park', role: 'Line Cook', tag: 'Line', tagColor: '#3B82F6', tagBg: '#DBEAFE' },
      { name: 'Jules Vance', role: 'Manager', tag: 'Manager', tagColor: '#D97706', tagBg: '#FEF3C7' },
    ]},
    { name: 'OFFER', count: 3, items: [
      { name: 'Sam Patel', role: 'Server', tag: 'Server', tagColor: '#16A34A', tagBg: '#DCFCE7' },
      { name: 'Iris Bek', role: 'Shift Lead', tag: 'Shift', tagColor: '#16A34A', tagBg: '#DCFCE7' },
    ]},
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgRecruit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgRecruit)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Recruiting ·</text>
      <text x="50" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Pipeline</text>
      <text x="22" y="48" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Candidate pipeline</text>
      <text x="22" y="58" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">44 active candidates · 3 ready for onboarding</text>
      <rect x="200" y="42" width="62" height="14" rx="4" fill="#fff" stroke="#e2e8f0" />
      <circle cx="208" cy="49" r="3" fill="none" stroke="#0f172a" strokeOpacity="0.5" strokeWidth="0.8" />
      <text x="216" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Search</text>
      <rect x="266" y="42" width="48" height="14" rx="4" fill="#fff" stroke="#e2e8f0" />
      <text x="272" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7">All roles</text>
      <rect x="318" y="42" width="60" height="14" rx="4" fill="#0f172a" />
      <text x="324" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#fff" fontWeight="600">+ Add</text>
      {stages.map((s, i) => (
        <g key={s.name} transform={`translate(${22 + i * 90}, 70)`}>
          <rect width="84" height="138" rx="8" fill="#F8FAFC" />
          <text x="8" y="14" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a" opacity="0.55">{s.name}</text>
          <text x="74" y="14" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a" opacity="0.55" textAnchor="end">{s.count}</text>
          {s.items.map((it, j) => (
            <g key={j} transform={`translate(6, ${22 + j * 32})`}>
              <rect width="72" height="28" rx="6" fill="#fff" />
              <circle cx="12" cy="10" r="4" fill="#0f172a" opacity="0.1" />
              <text x="20" y="11" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a">{it.name}</text>
              <text x="20" y="18" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">{it.role}</text>
              <rect x="6" y="20" width={it.tag.length * 3.5 + 6} height="6" rx="3" fill={it.tagBg} />
              <text x={9} y="24.5" fontFamily="Geist, sans-serif" fontSize="4" fontWeight="600" fill={it.tagColor}>{it.tag}</text>
              <text x="68" y="24.5" fontFamily="Geist, sans-serif" fontSize="4" fill="#0f172a" opacity="0.4" textAnchor="end">2d</text>
            </g>
          ))}
          <rect x="6" y={22 + s.items.length * 32} width="72" height="22" rx="6" fill="none" stroke="#0f172a" strokeOpacity="0.15" strokeDasharray="2 2" />
          <text x="42" y={36 + s.items.length * 32} fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.4" textAnchor="middle">+ Drop here</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockMessaging({ color }: MockProps) {
  const channels = [
    { name: '#shift-alerts', preview: 'New shift opened: Sat Line Cook', time: '3 min', active: true },
    { name: 'Front of house', preview: 'Maria: Trading Friday close, anyone?', time: '12 min' },
    { name: '#emergency', preview: 'Storm closure in effect for Westside', time: '1 hr' },
    { name: 'Closing crew', preview: 'Rotation posted for the week', time: '3 hr' },
    { name: 'Catering team', preview: 'Approved: Hartford banquet roster', time: 'Yest' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgMsg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgMsg)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Messaging Center ·</text>
      <text x="76" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Team inbox</text>
      <line x1="14" y1="40" x2="386" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Sidebar */}
      <rect x="14" y="40" width="120" height="171" fill="#F8FAFC" />
      <text x="22" y="55" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Channels</text>
      <text x="124" y="55" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5" textAnchor="end">+</text>
      {channels.map((c, i) => (
        <g key={c.name} transform={`translate(18, ${64 + i * 28})`}>
          {c.active && <rect x="-2" y="-2" width="116" height="24" rx="4" fill="#fff" />}
          <text x="0" y="6" fontFamily="Geist, sans-serif" fontSize="6" fontWeight={c.active ? '600' : '500'} fill="#0f172a">{c.name}</text>
          <text x="112" y="6" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.45" textAnchor="end">{c.time}</text>
          <text x="0" y="14" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{c.preview.length > 28 ? c.preview.slice(0, 28) + '...' : c.preview}</text>
        </g>
      ))}
      {/* Main pane */}
      <text x="142" y="55" fontFamily="Geist, sans-serif" fontSize="8" fontWeight="700" fill="#0f172a">#shift-alerts</text>
      <text x="142" y="65" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">42 members · auto-broadcast</text>
      <rect x="296" y="46" width="50" height="13" rx="6" fill="#FEE2E2" />
      <text x="304" y="55" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#B91C1C">⚠ Emergency</text>
      <rect x="349" y="46" width="32" height="13" rx="4" fill="#0f172a" />
      <text x="365" y="55" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#fff" textAnchor="middle">Broadcast</text>
      <line x1="142" y1="72" x2="381" y2="72" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Messages */}
      <rect x="142" y="80" width="190" height="22" rx="4" fill="#F8FAFC" />
      <text x="148" y="89" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a">A new shift was just opened: Saturday Line</text>
      <text x="148" y="97" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a">Cook · Downtown Kitchen · $22.50/hr</text>
      <rect x="142" y="108" width="170" height="36" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <rect x="148" y="113" width="34" height="8" rx="4" fill="#DBEAFE" />
      <text x="151" y="119" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#3B82F6">Linked shift</text>
      <text x="186" y="119" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">Sat · 10 AM – 6 PM · 2.1 mi</text>
      <text x="148" y="130" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Line Cook · Downtown Kitchen</text>
      <rect x="148" y="134" width="32" height="8" rx="4" fill="#0f172a" />
      <text x="164" y="140" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#fff" textAnchor="middle">Claim shift</text>
      <rect x="184" y="134" width="36" height="8" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
      <text x="202" y="140" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" textAnchor="middle">View details</text>
      <rect x="218" y="150" width="156" height="20" rx="6" fill="#0f172a" />
      <text x="226" y="159" fontFamily="Geist, sans-serif" fontSize="5" fill="#fff">Posting to floor leads first — please</text>
      <text x="226" y="166" fontFamily="Geist, sans-serif" fontSize="5" fill="#fff">confirm receipt.</text>
      <rect x="142" y="176" width="100" height="14" rx="4" fill="#DCFCE7" />
      <text x="148" y="185" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#166534">✓ Read</text>
      <text x="170" y="185" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.6">18 of 42 read · 4 ack</text>
      <rect x="142" y="195" width="240" height="12" rx="6" fill="#F8FAFC" stroke="#e2e8f0" strokeWidth="0.4" />
      <text x="148" y="203" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.4">💬 Message #shift-alerts</text>
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockClientPortal({ color }: MockProps) {
  const stats = [
    { label: 'ACTIVE REQUESTS', value: '4', sub: '2 filling · 1 filled' },
    { label: 'WORKERS PLACED (MTD)', value: '38', sub: '+12% vs last month' },
    { label: 'FILL RATE', value: '96%', bar: 0.96, barColor: '#16A34A' },
  ];
  const requests = [
    { name: 'Saturday banquet',   sub: 'Apex Hotels · 12 servers · 3 leads', pct: 0.67, status: 'Filling',       statusBg: '#DBEAFE', statusColor: '#1E40AF', barColor: '#3B82F6', iconBg: '#DBEAFE' },
    { name: 'Weekend cleaning crew', sub: 'Brightway Offices · 8 cleaners',  pct: 1.00, status: 'Filled',       statusBg: '#DCFCE7', statusColor: '#166534', barColor: '#16A34A', iconBg: '#DCFCE7' },
    { name: 'Conference setup',   sub: 'Hartford Convention · 24 staff',     pct: 0.41, status: 'Action needed', statusBg: '#FEF3C7', statusColor: '#92400E', barColor: '#D97706', iconBg: '#FEF3C7' },
    { name: 'Overnight inventory', sub: 'Polaris Logistics · 6 warehouse',   pct: 0.05, status: 'New',           statusBg: '#F1F5F9', statusColor: '#475569', barColor: '#3B82F6', iconBg: '#DBEAFE' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgStaffing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgStaffing)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Staffing Portal ·</text>
      <text x="72" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Your requests</text>
      <text x="22" y="48" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Welcome back, Apex Hotels</text>
      <text x="22" y="58" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">4 active requests · 2 awaiting your approval</text>
      <rect x="262" y="42" width="56" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="290" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7" textAnchor="middle">📅 This mo</text>
      <rect x="322" y="42" width="62" height="14" rx="4" fill="#0f172a" />
      <text x="353" y="52" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#fff" textAnchor="middle">+ New request</text>
      {stats.map((s, i) => (
        <g key={i} transform={`translate(${22 + i * 121}, 68)`}>
          <rect width="114" height="42" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
          <text x="8" y="10" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">{s.label}</text>
          <text x="8" y="26" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a">{s.value}</text>
          {s.bar !== undefined ? (
            <>
              <rect x="8" y="32" width="98" height="4" rx="2" fill="#0f172a" opacity="0.06" />
              <rect x="8" y="32" width={98 * s.bar} height="4" rx="2" fill={s.barColor} />
            </>
          ) : (
            <text x="8" y="38" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{s.sub}</text>
          )}
        </g>
      ))}
      {/* Open requests panel */}
      <rect x="22" y="116" width="358" height="90" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="30" y="128" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="700" fill="#0f172a">Open requests</text>
      <text x="370" y="128" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">Sorted by status</text>
      <line x1="30" y1="134" x2="372" y2="134" stroke="#e2e8f0" strokeWidth="0.4" />
      {requests.map((r, i) => (
        <g key={i} transform={`translate(30, ${140 + i * 16})`}>
          <rect width="14" height="12" rx="3" fill={r.iconBg} />
          <circle cx="5" cy="5" r="1.5" fill={r.statusColor} />
          <circle cx="9" cy="5" r="1.5" fill={r.statusColor} />
          <text x="20" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a">{r.name}</text>
          <text x="20" y="11" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">{r.sub}</text>
          <rect x="166" y="3" width="80" height="3" rx="1.5" fill="#0f172a" opacity="0.06" />
          <rect x="166" y="3" width={80 * r.pct} height="3" rx="1.5" fill={r.barColor} />
          <text x="166" y="11" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">{Math.round(r.pct * 100)}% fulfilled</text>
          <rect x="252" y="0" width="50" height="11" rx="5" fill={r.statusBg} />
          <text x="277" y="7" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill={r.statusColor} textAnchor="middle">{r.status}</text>
          <rect x="306" y="0" width="22" height="11" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
          <text x="317" y="7" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" textAnchor="middle">View</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockCredential({ color }: MockProps) {
  const stats = [
    { label: 'ACTIVE', value: '182', sub: 'Verified & current', color: '#16A34A' },
    { label: 'EXPIRING SOON', value: '14', sub: 'Within 30 days', color: '#D97706' },
    { label: 'EXPIRED', value: '3', sub: 'Blocking shift assignment', color: '#DC2626' },
    { label: 'PENDING REVIEW', value: '8', sub: 'Awaiting approval', color: '#0f172a' },
  ];
  const alerts = [
    { name: 'Food handler permit', who: 'Maria Alvarez · Expires in 14 days', tag: 'Action soon', tagBg: '#FEF3C7', tagColor: '#92400E', iconBg: '#FEF3C7', iconStroke: '#D97706' },
    { name: 'CPR certification', who: 'Devon Park · Expires in 92 days', tag: 'Active', tagBg: '#DCFCE7', tagColor: '#166534', iconBg: '#DCFCE7', iconStroke: '#16A34A' },
    { name: 'Driver license', who: 'Riley Chen · Expired 3 days ago', tag: 'Expired', tagBg: '#FEE2E2', tagColor: '#991B1B', iconBg: '#FEE2E2', iconStroke: '#DC2626' },
    { name: 'ServSafe manager', who: 'Jordan Reyes · Expires in 6 months', tag: 'Active', tagBg: '#DCFCE7', tagColor: '#166534', iconBg: '#DCFCE7', iconStroke: '#16A34A' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgCred" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgCred)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Credential Tracker ·</text>
      <text x="80" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Credential overview</text>
      <text x="22" y="48" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Credential overview</text>
      <text x="22" y="58" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">218 active employees · 9 credential types tracked</text>
      <rect x="262" y="42" width="64" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="270" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7">All credentials</text>
      <rect x="328" y="42" width="56" height="14" rx="4" fill="#0f172a" />
      <text x="356" y="52" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#fff" textAnchor="middle">+ Upload</text>
      {stats.map((s, i) => (
        <g key={i} transform={`translate(${22 + i * 91}, 70)`}>
          <rect width="84" height="44" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
          <text x="8" y="10" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.55">{s.label}</text>
          <text x="8" y="26" fontFamily="Geist, sans-serif" fontSize="14" fontWeight="700" fill={s.color}>{s.value}</text>
          <text x="8" y="38" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.55">{s.sub}</text>
        </g>
      ))}
      <rect x="22" y="120" width="358" height="86" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="30" y="132" fontFamily="Geist, sans-serif" fontSize="7" fontWeight="700" fill="#0f172a">Expiration alerts</text>
      <text x="370" y="132" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">Sorted by urgency</text>
      <line x1="30" y1="138" x2="372" y2="138" stroke="#e2e8f0" strokeWidth="0.4" />
      {alerts.map((a, i) => (
        <g key={i} transform={`translate(30, ${143 + i * 16})`}>
          <rect width="12" height="12" rx="2" fill={a.iconBg} />
          <path d={`M2 4 L4 4 L4 2 L8 2 L8 4 L10 4 L10 9 L2 9 Z`} fill="none" stroke={a.iconStroke} strokeWidth="0.6" />
          <text x="18" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a">{a.name}</text>
          <text x="18" y="11" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">{a.who}</text>
          <rect x="280" y="2" width={a.tag.length * 3.5 + 8} height="9" rx="4" fill={a.tagBg} />
          <text x={284} y="8" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill={a.tagColor}>{a.tag}</text>
          <rect x="324" y="1" width="20" height="11" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
          <text x="334" y="8" fontFamily="Geist, sans-serif" fontSize="4.5" fontWeight="600" fill="#0f172a" textAnchor="middle">View</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

function MockPerformance({ color }: MockProps) {
  const stats = [
    { label: 'RELIABILITY SCORE', value: '94', suffix: '/100', sub: '', valueColor: '#0f172a', bar: 0.94, barColor: '#16A34A' },
    { label: 'ATTENDANCE RATE', value: '96.2%', sub: '+0.8% vs prev', valueColor: '#0f172a' },
    { label: 'NO-SHOW RATE', value: '1.8%', sub: '-0.4% vs prev', valueColor: '#DC2626' },
    { label: 'AVG TENURE', value: '2.4 yr', sub: 'Across all roles', valueColor: '#0f172a' },
  ];
  const performers = [
    { rank: 1, name: 'Maria Alvarez', role: 'Front of house', score: '98%', delta: '+4', deltaColor: '#16A34A' },
    { rank: 2, name: 'Devon Park', role: 'Kitchen', score: '97%', delta: '+2', deltaColor: '#16A34A' },
    { rank: 3, name: 'Riley Chen', role: 'Hosting', score: '95%', delta: '—', deltaColor: '#0f172a' },
    { rank: 4, name: 'Sam Iyer', role: 'Catering', score: '93%', delta: '-1', deltaColor: '#DC2626' },
  ];
  return (
    <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgPerf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8E9F4" />
          <stop offset="55%" stopColor="#EFEAFB" />
          <stop offset="100%" stopColor="#DCE7FB" />
        </linearGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bgPerf)" />
      <rect x="14" y="14" width="372" height="197" rx="10" fill="#fff" />
      <text x="22" y="29" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Performance Insights ·</text>
      <text x="92" y="29" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a">Performance overview</text>
      <text x="22" y="48" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="700" fill="#0f172a">Performance overview</text>
      <text x="22" y="58" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">Last 30 days · 218 active employees · 9 locations</text>
      <rect x="280" y="42" width="50" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="287" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7">📅 Last 30d</text>
      <rect x="334" y="42" width="44" height="14" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="356" y="52" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.7" textAnchor="middle">⬇ Export</text>
      {stats.map((s, i) => (
        <g key={i} transform={`translate(${22 + i * 91}, 70)`}>
          <rect width="84" height="44" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
          <text x="8" y="10" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill="#0f172a" opacity="0.55">{s.label}</text>
          <text x="8" y="26" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="700" fill={s.valueColor}>{s.value}</text>
          {s.suffix && <text x={8 + s.value.length * 7.5} y="26" fontFamily="Geist, sans-serif" fontSize="6" fill="#0f172a" opacity="0.5">{s.suffix}</text>}
          {s.bar !== undefined ? (
            <>
              <rect x="8" y="32" width="68" height="4" rx="2" fill="#0f172a" opacity="0.06" />
              <rect x="8" y="32" width={68 * s.bar} height="4" rx="2" fill={s.barColor} />
            </>
          ) : (
            <text x="8" y="38" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5">{s.sub}</text>
          )}
        </g>
      ))}
      {/* Attendance trend */}
      <rect x="22" y="120" width="178" height="86" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="30" y="132" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.55">ATTENDANCE TREND</text>
      <text x="192" y="132" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">Daily</text>
      <line x1="30" y1="180" x2="192" y2="180" stroke="#0f172a" strokeOpacity="0.05" strokeWidth="0.5" />
      <path d="M30 175 L50 165 L70 170 L90 155 L110 162 L130 145 L150 152 L170 138 L192 142" stroke="#3B82F6" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 175 L50 165 L70 170 L90 155 L110 162 L130 145 L150 152 L170 138 L192 142 L192 200 L30 200 Z" fill="#3B82F6" opacity="0.08" />
      {/* Top performers */}
      <rect x="208" y="120" width="172" height="86" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
      <text x="216" y="132" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a" opacity="0.55">TOP PERFORMERS</text>
      <text x="372" y="132" fontFamily="Geist, sans-serif" fontSize="5" fill="#0f172a" opacity="0.5" textAnchor="end">Reliability</text>
      {performers.map((p, i) => (
        <g key={i} transform={`translate(216, ${140 + i * 16})`}>
          <text x="0" y="8" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a" opacity="0.55">{p.rank}.</text>
          <text x="10" y="6" fontFamily="Geist, sans-serif" fontSize="5.5" fontWeight="600" fill="#0f172a">{p.name}</text>
          <text x="10" y="12" fontFamily="Geist, sans-serif" fontSize="4.5" fill="#0f172a" opacity="0.55">{p.role}</text>
          <text x="138" y="8" fontFamily="Geist, sans-serif" fontSize="6" fontWeight="600" fill="#0f172a" textAnchor="end">{p.score}</text>
          <text x="156" y="8" fontFamily="Geist, sans-serif" fontSize="5" fontWeight="600" fill={p.deltaColor} textAnchor="end">{p.delta}</text>
        </g>
      ))}
      <rect x="0" y="0" width="0" height="0" fill={color} />
    </svg>
  );
}

import marketplaceHeroBg from '../assets/marketplace-hero-bg.svg';
import marketplaceHeroBgDark from '../assets/marketplace-hero-bg-dark.svg';
import shiftMarketplacePreview from '../assets/marketplace-previews/shift-marketplace.png';
import laborCostPreview from '../assets/marketplace-previews/labor-cost-forecasting.png';
import availabilityPreview from '../assets/marketplace-previews/employee-availability-portal.png';
import compliancePreview from '../assets/marketplace-previews/compliance-monitor.png';
import timeClockPreview from '../assets/marketplace-previews/smart-time-clock.png';
import recruitingPreview from '../assets/marketplace-previews/recruiting-pipeline-dashboard.png';
import messagingPreview from '../assets/marketplace-previews/workforce-messaging-center.png';
import clientPortalPreview from '../assets/marketplace-previews/client-staffing-portal.png';
import credentialPreview from '../assets/marketplace-previews/credential-tracker.png';
import performancePreview from '../assets/marketplace-previews/performance-insights-dashboard.png';

const APP_PREVIEW_IMAGE: Record<string, string> = {
  'shift_marketplace':              shiftMarketplacePreview,
  'labor_cost_forecasting':         laborCostPreview,
  'employee_availability_portal':   availabilityPreview,
  'compliance_monitor':             compliancePreview,
  'smart_time_clock':               timeClockPreview,
  'recruiting_pipeline_dashboard':  recruitingPreview,
  'workforce_messaging_center':     messagingPreview,
  'client_staffing_portal':         clientPortalPreview,
  'credential_tracker':             credentialPreview,
  'performance_insights_dashboard': performancePreview,
};

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
`;

function AppPreviewMock({ id, name }: { id: string; name?: string }) {
  const src = APP_PREVIEW_IMAGE[id];
  if (!src) return null;
  return <PreviewImg src={src} alt={name ? `${name} preview` : 'App preview'} />;
}

const ScreenshotLabel = styled.div`
  position: absolute;
  bottom: var(--space-3, 12px);
  left: var(--space-3, 12px);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  padding: 4px 10px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: 999px;
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

const DialogSectionTitleWrap = styled.div`
  margin: 0 0 var(--space-2, 8px) 0;
`;

function DialogSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <DialogSectionTitleWrap>
      <Eyebrow as="h4">{children}</Eyebrow>
    </DialogSectionTitleWrap>
  );
}

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

function AppPreviewDialog(props: {
  app: AppDef | null;
  onClose: () => void;
  isInstalled?: boolean;
  onInstall?: (id: string) => void;
  onUninstall?: (id: string) => void;
  onOpenApp?: (id: string) => void;
}) {
  const { onClose, isInstalled, onInstall, onUninstall, onOpenApp } = props;
  // Keep the last non-null app around while the close animation plays so the
  // dialog still has content to render after `app` flips back to null.
  const [lastApp, setLastApp] = useState<AppDef | null>(props.app);
  useEffect(() => {
    if (props.app) setLastApp(props.app);
  }, [props.app]);
  const isOpen = props.app !== null;
  const app = lastApp;
  if (!app) return null;
  return (
    <Dialog open={isOpen} onClose={onClose} size="lg" aria-label={`${app.name} preview`}>
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
          {app.appType !== 'background' && (
            <ScreenshotFrame>
              <Screenshot>
                <AppPreviewMock id={app.id} name={app.name} />
              </Screenshot>
            </ScreenshotFrame>
          )}

          <StatGrid>
            <StatCard>
              <Eyebrow>Category</Eyebrow>
              <StatValue>{app.category}</StatValue>
            </StatCard>
            <StatCard>
              <Eyebrow>Setup</Eyebrow>
              <LevelBar value={app.preview.setupComplexity} />
            </StatCard>
            <StatCard>
              <Eyebrow>Impact</Eyebrow>
              <LevelBar value={app.preview.estimatedImpact} higherIsBetter />
            </StatCard>
          </StatGrid>

          <div>
            <DialogSectionTitle>Description</DialogSectionTitle>
            <Tagline>{app.preview.tagline}</Tagline>
          </div>

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
        {isInstalled ? (
          <>
            <Button
              variant="secondary"
              size="md"
              onClick={() => { onUninstall?.(app.id); onClose(); }}
            >
              Uninstall
            </Button>
            <UseAppButton
              variant="primary"
              size="md"
              trailingArtwork={<ArrowNarrowRightIcon size={14} />}
              onClick={() => { onOpenApp?.(app.id); onClose(); }}
            >
              Open
            </UseAppButton>
          </>
        ) : (
          <UseAppButton
            variant="primary"
            size="md"
            trailingArtwork={<ArrowNarrowRightIcon size={14} />}
            onClick={() => { onInstall?.(app.id); onClose(); }}
          >
            Use App
          </UseAppButton>
        )}
      </DialogFooter>
    </Dialog>
  );
}

export function MarketplacePage({
  installedAppIds = [],
  onInstallApp,
  onUninstallApp,
  onOpenApp,
}: {
  installedAppIds?: string[];
  onInstallApp?: (appId: string) => void;
  onUninstallApp?: (appId: string) => void;
  onOpenApp?: (appId: string) => void;
} = {}) {
  const [search, setSearch] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedApp, setSelectedApp] = useState<AppDef | null>(null);

  const teamApps = COMMUNITY_APPS;
  // Popular = most-installed apps across both team and background services.
  const popular = [...COMMUNITY_APPS, ...BACKGROUND_MARKETPLACE_APPS]
    .slice()
    .sort((a, b) => parseInt(b.installs, 10) - parseInt(a.installs, 10))
    .slice(0, 6);
  // Featured = a hand-picked mix from both team and background lists,
  // intentionally a different cut than Popular so they don't overlap.
  const FEATURED_APP_IDS = [
    'compliance_monitor',
    'credential_expiration_monitor',
    'performance_insights_dashboard',
    'auto_shift_optimizer',
  ];
  const allApps = [...COMMUNITY_APPS, ...BACKGROUND_MARKETPLACE_APPS];
  const featured = FEATURED_APP_IDS
    .map(id => allApps.find(a => a.id === id))
    .filter((a): a is AppDef => Boolean(a));

  const trimmedSearch = search.trim();
  const searchResults = trimmedSearch.length === 0
    ? []
    : [...COMMUNITY_APPS, ...BACKGROUND_MARKETPLACE_APPS].filter(app =>
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
    <MlLandingPage>
      <MpHero>
        <MpHeadline>App Marketplace</MpHeadline>
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
            <SearchDropdown onMouseDown={(e) => e.preventDefault()}>
              {searchResults.length === 0 ? (
                <SearchDropdownEmpty>No apps match your search</SearchDropdownEmpty>
              ) : (
                searchResults.map(app => (
                  <ListItem
                    key={app.id}
                    size="md"
                    divider={false}
                    interactive
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleResultClick(app);
                    }}
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
            <SectionCaption>Most installed apps across your workspace</SectionCaption>
          </SectionHeader>
          <PopularGrid>
            {popular.map((app, i) => (
              <PopularListItem
                key={app.id}
                size="md"
                divider={false}
                interactive
                onClick={() => setSelectedApp(app)}
                label={app.name}
                description={
                  <PopularDescWrap>
                    <PopularDescLine>{app.description}</PopularDescLine>
                    <PopularByline>
                      <Download01Icon size={12} />
                      {app.installs} installed
                    </PopularByline>
                  </PopularDescWrap>
                }
                leadingSlot={
                  <PopularLeading>
                    <RankNumber>{i + 1}</RankNumber>
                    <PopularIcon data-role="popular-icon">
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
                <FeaturedTopRow>
                  <FeaturedIcon data-role="featured-icon">
                    <ShapeWrap>{app.shape}</ShapeWrap>
                  </FeaturedIcon>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={installedAppIds.includes(app.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!installedAppIds.includes(app.id)) onInstallApp?.(app.id);
                    }}
                  >
                    {installedAppIds.includes(app.id) ? 'Installed' : 'Install'}
                  </Button>
                </FeaturedTopRow>
                <FeaturedBody>
                  <FeaturedAuthor>
                    <strong>{app.category}</strong>
                  </FeaturedAuthor>
                  <FeaturedName>{app.name}</FeaturedName>
                  <FeaturedDesc>{app.description}</FeaturedDesc>
                  <FeaturedMeta>
                    {app.targetUsers.map(user => (
                      <Tag key={user} size="sm" variant="outline" color="neutral">{user}</Tag>
                    ))}
                  </FeaturedMeta>
                  <FeaturedFooter>
                    <Download01Icon size={14} />
                    {app.installs} installs
                  </FeaturedFooter>
                </FeaturedBody>
              </FeaturedCard>
            ))}
          </FeaturedGrid>
        </SectionBlock>
      )}

      {teamApps.length > 0 && (
        <SectionBlock>
          <SectionHeader>
            <SectionTitleText>Team apps</SectionTitleText>
            <SectionCaption>Apps with a UI your team uses to run last-mile operations</SectionCaption>
          </SectionHeader>
          <FeaturedGrid>
            {teamApps.map(app => (
              <FeaturedCard key={app.id} onClick={() => setSelectedApp(app)} role="button" tabIndex={0}>
                <FeaturedTopRow>
                  <FeaturedIcon data-role="featured-icon">
                    <ShapeWrap>{app.shape}</ShapeWrap>
                  </FeaturedIcon>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={installedAppIds.includes(app.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!installedAppIds.includes(app.id)) onInstallApp?.(app.id);
                    }}
                  >
                    {installedAppIds.includes(app.id) ? 'Installed' : 'Install'}
                  </Button>
                </FeaturedTopRow>
                <FeaturedBody>
                  <FeaturedAuthor>
                    <strong>{app.category}</strong>
                  </FeaturedAuthor>
                  <FeaturedName>{app.name}</FeaturedName>
                  <FeaturedDesc>{app.description}</FeaturedDesc>
                  <FeaturedMeta>
                    {app.targetUsers.map(user => (
                      <Tag key={user} size="sm" variant="outline" color="neutral">{user}</Tag>
                    ))}
                  </FeaturedMeta>
                  <FeaturedFooter>
                    <Download01Icon size={14} />
                    {app.installs} installs
                  </FeaturedFooter>
                </FeaturedBody>
              </FeaturedCard>
            ))}
          </FeaturedGrid>
        </SectionBlock>
      )}

      <SectionBlock>
        <SectionHeader>
          <SectionTitleText>Background apps</SectionTitleText>
          <SectionCaption>Automated services that run in the background — no UI required</SectionCaption>
        </SectionHeader>
        <FeaturedGrid>
          {BACKGROUND_MARKETPLACE_APPS.map(app => (
            <FeaturedCard key={app.id} onClick={() => setSelectedApp(app)} role="button" tabIndex={0}>
              <FeaturedTopRow>
                <FeaturedIcon data-role="featured-icon">
                  <ShapeWrap>{app.shape}</ShapeWrap>
                </FeaturedIcon>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={installedAppIds.includes(app.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!installedAppIds.includes(app.id)) onInstallApp?.(app.id);
                  }}
                >
                  {installedAppIds.includes(app.id) ? 'Installed' : 'Install'}
                </Button>
              </FeaturedTopRow>
              <FeaturedBody>
                <FeaturedAuthor>
                  <strong>{app.category}</strong>
                </FeaturedAuthor>
                <FeaturedName>{app.name}</FeaturedName>
                <FeaturedDesc>{app.description}</FeaturedDesc>
                <FeaturedMeta>
                  {app.targetUsers.map(user => (
                    <Tag key={user} size="sm" variant="outline" color="neutral">{user}</Tag>
                  ))}
                </FeaturedMeta>
              </FeaturedBody>
            </FeaturedCard>
          ))}
        </FeaturedGrid>
      </SectionBlock>

      <AppPreviewDialog
        app={selectedApp}
        onClose={() => setSelectedApp(null)}
        isInstalled={selectedApp ? installedAppIds.includes(selectedApp.id) : false}
        onInstall={onInstallApp}
        onUninstall={onUninstallApp}
        onOpenApp={onOpenApp}
      />
    </MlLandingPage>
  );
}

// ── Marketplace Landing (new default page) ───────────────────────────────

const MlHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4, 16px);
  padding: var(--space-10, 40px) 0 var(--space-2, 8px);
  text-align: center;
`;

const MlHeadline = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4-5xl, 2.5rem);
  line-height: var(--line-height-tight, 1.1);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`;

const MlSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
  max-width: 560px;
`;

const MlComposerWrap = styled.div`
  width: 100%;
  max-width: 720px;
  margin-top: var(--space-4, 16px);
  text-align: left;

  /* Alloy's AIComposerInput wrapper adds 8px padding around the card —
     remove it here so the card stretches edge-to-edge to match the
     sections below. (Card visuals are owned by Alloy now.) */
  [class*='_wrapper_znaes'] {
    padding: 0;
  }
`;

const MlComposerGlowWrap = styled.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: 24px;
    background:
      radial-gradient(ellipse 55% 70% at 12% 50%, rgba(140, 79, 226, 0.8) 0%, rgba(140, 79, 226, 0) 70%),
      radial-gradient(ellipse 55% 70% at 50% 50%, rgba(68, 108, 255, 0.75) 0%, rgba(68, 108, 255, 0) 70%),
      radial-gradient(ellipse 55% 70% at 88% 50%, rgba(30, 223, 222, 0.75) 0%, rgba(30, 223, 222, 0) 70%);
    filter: blur(14px);
    z-index: -1;
    pointer-events: none;
  }
`;

const MlComposerHint = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-disabled);
  display: block;
  text-align: center;
  margin-top: var(--space-2, 8px);
`;

const MlSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  width: 70%;
  max-width: 1280px;
  margin: var(--space-10, 40px) auto 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const MlSectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3, 12px);
`;

const MlSectionHeading = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-2xl, 1.5rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.01em);
  color: var(--color-content-primary);
`;

const MlSectionCaption = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-secondary);
`;

const MlRecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MlRecCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3, 12px);
  padding: var(--space-4, 16px);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 14px);
  background: var(--color-bg-primary);
  cursor: pointer;
  transition: border-color 120ms ease, box-shadow 120ms ease;

  &:hover {
    border-color: var(--color-border-hover, #cfd4dc);
    box-shadow: var(--shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.04));
  }
`;

const MlRecHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`;

const MlRecIconTile = styled.div`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  display: flex;
  align-items: center;
  justify-content: center;

  & svg { width: 26px; height: 26px; }
`;

const MlRecName = styled.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;

const MlRecNameWrap = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MlRecNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
`;

const MlRecDesc = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.45);
  color: var(--color-content-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MlRecMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2, 8px);
  margin-top: auto;
`;

const MlRecTimestamp = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;

const MlCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const MlCategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  padding: var(--space-4, 16px);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md, 12px);
  background: var(--color-bg-primary);
  cursor: pointer;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: var(--color-border-hover, #cfd4dc);
    background: var(--color-bg-secondary);
  }
`;

const MlCategoryName = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;

const MlCategoryCount = styled.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;

const RECOMMENDED_APP_IDS = ['shift_marketplace', 'smart_time_clock', 'compliance_monitor'];
// Community apps that were just published — surface a "New" badge in the cards.
const NEW_COMMUNITY_APP_IDS = new Set([
  'compliance_monitor',
  'performance_insights_dashboard',
]);
const RECOMMENDED_APP_INSTALLS: Record<string, number> = {
  shift_marketplace: 1284,
  smart_time_clock: 932,
  compliance_monitor: 467,
};
const MARKETPLACE_CATEGORIES = [
  { name: 'Scheduling',           count: 1 },
  { name: 'Time Tracking',        count: 1 },
  { name: 'Workforce Management', count: 1 },
  { name: 'Compliance',           count: 2 },
  { name: 'Analytics',            count: 2 },
  { name: 'Communication',        count: 1 },
  { name: 'Hiring',               count: 1 },
  { name: 'Customer Experience',  count: 1 },
];

export function MarketplaceLandingPage({
  onOpenInstalled,
  onOpenCommunity,
  onOpenApp,
}: {
  onOpenInstalled?: () => void;
  onOpenCommunity?: () => void;
  onOpenApp?: (appId: string) => void;
}) {
  const [prompt, setPrompt] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppDef | null>(null);
  const recommended = COMMUNITY_APPS.filter(app => RECOMMENDED_APP_IDS.includes(app.id));
  const recentlyUsed = [...INSTALLED_APP_IDS]
    .map(id => COMMUNITY_APPS.find(a => a.id === id))
    .filter((a): a is AppDef => Boolean(a))
    .slice(0, 3);
  const recentlyUsedLabels: Record<string, string> = {
    shift_marketplace: '3 minutes ago',
    smart_time_clock: '2 hours ago',
    workforce_messaging_center: '5 days ago',
  };

  return (
    <MlLandingPage>
      <MlHero>
        <MlHeadline>Marketplace</MlHeadline>
        <MlSubtitle>
          Discover, install, and build last-mile workforce apps. Describe what your team needs and
          we'll surface the right apps or build a new one with you.
        </MlSubtitle>
        <MlComposerWrap>
          <MlComposerGlowWrap>
            <AIComposerInput
              value={prompt}
              onChange={setPrompt}
              placeholder="Describe the app you want — e.g. 'Track equipment checked out by location and notify managers when overdue'"
              maxRows={6}
            >
              <ComposerActions>
                <ComposerSendButton
                  state={prompt.trim().length === 0 ? 'disabled-invalid' : 'ready'}
                  aria-label="Generate app"
                />
              </ComposerActions>
            </AIComposerInput>
          </MlComposerGlowWrap>
          <MlComposerHint>Powered by Teambridge AI</MlComposerHint>
        </MlComposerWrap>
      </MlHero>

      {recentlyUsed.length > 0 && (
        <MlSection>
          <MlSectionHeader>
            <div>
              <MlSectionHeading>Recently used</MlSectionHeading>
              <MlSectionCaption>Apps you've opened recently</MlSectionCaption>
            </div>
            {onOpenInstalled && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenInstalled}
                trailingArtwork={<ArrowNarrowRightIcon size={14} />}
              >
                View installed apps
              </Button>
            )}
          </MlSectionHeader>
          <MlRecGrid>
            {recentlyUsed.map(app => (
              <MlRecCard key={app.id} onClick={() => onOpenApp?.(app.id)}>
                <MlRecHeader>
                  <MlRecIconTile>{app.shape}</MlRecIconTile>
                  <div>
                    <MlRecName>{app.name}</MlRecName>
                    <MlSectionCaption>{app.category}</MlSectionCaption>
                  </div>
                </MlRecHeader>
                <MlRecDesc>{app.description}</MlRecDesc>
                <MlRecMeta>
                  <MlRecTimestamp>
                    <ClockIcon size={12} />
                    {recentlyUsedLabels[app.id] ?? 'Recently'}
                  </MlRecTimestamp>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e) => { e.stopPropagation(); onOpenApp?.(app.id); }}
                  >
                    Open
                  </Button>
                </MlRecMeta>
              </MlRecCard>
            ))}
          </MlRecGrid>
        </MlSection>
      )}

      <MlSection>
        <MlSectionHeader>
          <div>
            <MlSectionHeading>Recommended</MlSectionHeading>
            <MlSectionCaption>Curated for workforce teams like yours</MlSectionCaption>
          </div>
          {onOpenCommunity && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenCommunity}
              trailingArtwork={<ArrowNarrowRightIcon size={14} />}
            >
              Browse all
            </Button>
          )}
        </MlSectionHeader>
        <MlRecGrid>
          {recommended.map(app => (
            <MlRecCard key={app.id} onClick={() => setSelectedApp(app)}>
              <MlRecHeader>
                <MlRecIconTile>{app.shape}</MlRecIconTile>
                <MlRecNameWrap>
                  <MlRecNameRow>
                    <MlRecName>{app.name}</MlRecName>
                    {NEW_COMMUNITY_APP_IDS.has(app.id) && (
                      <AlloyBadge variant="primary">New</AlloyBadge>
                    )}
                  </MlRecNameRow>
                  <MlSectionCaption>{app.category}</MlSectionCaption>
                </MlRecNameWrap>
              </MlRecHeader>
              <MlRecDesc>{app.description}</MlRecDesc>
              <MlRecMeta>
                <MlRecTimestamp>
                  <Download01Icon size={12} />
                  {(RECOMMENDED_APP_INSTALLS[app.id] ?? 0).toLocaleString()} installs
                </MlRecTimestamp>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => { e.stopPropagation(); onOpenApp?.(app.id); }}
                >
                  Use App
                </Button>
              </MlRecMeta>
            </MlRecCard>
          ))}
        </MlRecGrid>
      </MlSection>

      <AppPreviewDialog app={selectedApp} onClose={() => setSelectedApp(null)} />
    </MlLandingPage>
  );
}

// ── Installed Apps ────────────────────────────────────────────────────────

const InstalledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
`;

const InstalledSearchFill = styled.div`
  flex: 1 1 auto;
  min-width: 0;

  & [class*='_shell_'] {
    width: 100%;
    height: 36px;
    min-height: 36px;
  }
`;

const InstalledHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const InstalledTitle = styled.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl, 1.875rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: var(--tracking-tight, -0.02em);
  color: var(--color-content-primary);
`;

const InstalledSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-secondary);
`;

const InstalledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);

  & > button {
    height: 36px;
    min-height: 36px;
    width: 36px;
    min-width: 36px;
  }

  & > button:not([aria-label="Search installed apps"]):not([aria-label="Clear search"]) {
    width: auto;
    min-width: 0;
  }
`;

const InstalledSearchExpand = styled.div`
  width: 320px;
  max-width: 100%;
  animation: searchExpand 180ms var(--ease-default, ease);

  & [class*='_shell_'] {
    height: 36px;
    min-height: 36px;
  }

  @keyframes searchExpand {
    from { opacity: 0; transform: translateX(8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const InstalledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 8px);
  margin-top: var(--space-8, 32px);
`;

const InstalledDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 4px);
`;

const InstalledLastOpened = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1, 4px);
  font-family: var(--font-sans);
  font-size: var(--text-xs, 0.75rem);
  color: var(--color-content-tertiary);
`;

const InstalledTrailing = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2, 8px);

  /* Match pin button to the Uninstall button height. */
  & > button[data-variant] {
    height: 24px;
    min-height: 24px;
  }
`;

const InstalledPinButton = styled.button<{ $pinned: boolean }>`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  color: ${p => (p.$pinned ? 'var(--color-content-primary)' : 'var(--color-content-tertiary)')};
  opacity: ${p => (p.$pinned ? 1 : 0.6)};
  transition: background 120ms ease, color 120ms ease, opacity 120ms ease;

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

const InstalledSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  margin-bottom: var(--space-1, 4px);
`;

const InstalledSectionTitle = styled.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg, 1.125rem);
  line-height: var(--line-height-snug, 1.2);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;

const InstalledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3, 12px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const InstalledItem = styled(ListItem)`
  --li-px: var(--space-4, 16px);
  --li-hover-bg: var(--color-bg-secondary);
  border-radius: var(--radius-md, 12px);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  align-items: flex-start;

  & [class*='_leadingSlot_'],
  & [class*='_trailingSlot_'] {
    align-self: flex-start;
  }

  & [class*='_description_'] {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    font-size: var(--text-sm, 0.875rem);
    line-height: var(--line-height-relaxed, 1.5);
    color: var(--color-content-secondary);
  }

  /* The "last opened" timestamp lives inside the description block but
     reads as a separate, quieter line — keep it on the tertiary color. */
  & [class*='_description_'] [data-role='installed-last-opened'] {
    color: var(--color-content-tertiary);
  }
`;

const InstalledZeroState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2, 8px);
  padding: var(--space-8, 32px) var(--space-6, 24px);
  border-radius: var(--radius-md, 12px);
  border: 1px dashed var(--color-border-opaque);
  background: var(--color-bg-primary);
`;

const InstalledZeroTitle = styled.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base, 1rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--color-content-primary);
`;

const InstalledZeroDesc = styled.p`
  margin: 0;
  max-width: 480px;
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--line-height-relaxed, 1.5);
  color: var(--color-content-secondary);
`;

const InstalledEmpty = styled.div`
  padding: var(--space-6, 24px);
  font-family: var(--font-sans);
  font-size: var(--text-sm, 0.875rem);
  color: var(--color-content-tertiary);
  text-align: center;
`;

const TEAM_APP_IDS = ['shift_marketplace', 'employee_availability_portal', 'smart_time_clock', 'workforce_messaging_center', 'client_staffing_portal'];
const BACKGROUND_APP_IDS = ['labor_cost_forecasting', 'compliance_monitor', 'recruiting_pipeline_dashboard', 'credential_tracker', 'performance_insights_dashboard'];

// Maps the community-app id (used in COMMUNITY_APPS / INSTALLED_APP_IDS) to
// the marketplace secondary-nav id used by the primary-nav pin lookup.
const COMMUNITY_TO_MP_NAV_ID: Record<string, string> = {
  shift_marketplace:                'mp-shift-marketplace',
  employee_availability_portal:     'mp-availability',
  smart_time_clock:                 'mp-time-clock',
  workforce_messaging_center:       'mp-messaging',
  client_staffing_portal:           'mp-client-portal',
  labor_cost_forecasting:           'mp-labor-cost',
  compliance_monitor:               'mp-compliance-monitor',
  recruiting_pipeline_dashboard:    'mp-recruiting',
  credential_tracker:               'mp-credential',
  performance_insights_dashboard:   'mp-performance',
};
export const MP_NAV_ID_TO_COMMUNITY: Record<string, string> = Object.fromEntries(
  Object.entries(COMMUNITY_TO_MP_NAV_ID).map(([k, v]) => [v, k]),
);

export function getAppNameById(id: string): string | undefined {
  return [...COMMUNITY_APPS, ...BACKGROUND_MARKETPLACE_APPS].find(a => a.id === id)?.name;
}
const INSTALLED_APP_IDS = new Set([
  'shift_marketplace',
  'smart_time_clock',
  'workforce_messaging_center',
  'compliance_monitor',
  'performance_insights_dashboard',
]);

export function InstalledAppsPage({
  onOpenCommunity,
  onOpenApp,
  pinnedAppIds = [],
  onTogglePin,
  installedAppIds = [],
  onUninstallApp,
  lastOpenedAtById = {},
}: {
  onOpenCommunity?: () => void;
  onOpenApp?: (appId: string) => void;
  pinnedAppIds?: string[];
  onTogglePin?: (appId: string) => void;
  installedAppIds?: string[];
  onUninstallApp?: (appId: string) => void;
  lastOpenedAtById?: Record<string, number>;
}) {
  const [search, setSearch] = useState('');
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const closeSearch = () => {
    setSearch('');
    setSearchExpanded(false);
  };
  const openSearch = () => {
    setSearchExpanded(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };

  const matches = (app: AppDef) => {
    const q = search.trim().toLowerCase();
    if (q.length === 0) return true;
    return app.name.toLowerCase().includes(q) || app.description.toLowerCase().includes(q);
  };

  const installedSet = new Set(installedAppIds);
  const allApps = [...COMMUNITY_APPS, ...BACKGROUND_MARKETPLACE_APPS];
  const teamApps = allApps.filter(a => a.appType !== 'background' && installedSet.has(a.id) && matches(a));
  const backgroundApps = allApps.filter(a => a.appType === 'background' && installedSet.has(a.id) && matches(a));
  const hasNoInstalls = installedAppIds.length === 0;

  const formatRelative = (ts: number | undefined): string | null => {
    if (!ts) return null;
    const diff = Date.now() - ts;
    if (diff < 45_000) return 'Just now';
    const minutes = Math.round(diff / 60_000);
    if (minutes < 60) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    const hours = Math.round(minutes / 60);
    if (hours < 24) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    const days = Math.round(hours / 24);
    if (days < 7) return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    const weeks = Math.round(days / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  };

  const renderItem = (app: AppDef) => (
    <InstalledItem
      key={app.id}
      size="lg"
      divider={false}
      interactive
      onClick={() => onOpenApp?.(app.id)}
      label={app.name}
      description={
        <InstalledDescWrap>
          <span>{app.description}</span>
          {(() => {
            const label = formatRelative(lastOpenedAtById[app.id]);
            if (!label) return null;
            return (
              <InstalledLastOpened data-role="installed-last-opened">
                <ClockIcon size={12} />
                {label}
              </InstalledLastOpened>
            );
          })()}
        </InstalledDescWrap>
      }
      leadingSlot={
        <SearchResultIcon>
          <ShapeWrap>{app.shape}</ShapeWrap>
        </SearchResultIcon>
      }
      trailingSlot={
        <InstalledTrailing>
          {onTogglePin && (() => {
            const mpId = COMMUNITY_TO_MP_NAV_ID[app.id];
            if (!mpId) return null;
            const isPinned = pinnedAppIds.includes(mpId);
            return (
              <InstalledPinButton
                type="button"
                $pinned={isPinned}
                aria-label={isPinned ? 'Unpin from left nav' : 'Pin to left nav'}
                title={isPinned ? 'Unpin from left nav' : 'Pin to left nav'}
                onClick={(e) => { e.stopPropagation(); onTogglePin(mpId); }}
              >
                <Pin01Icon size={16} fill={isPinned ? 'currentColor' : 'none'} />
              </InstalledPinButton>
            );
          })()}
          <Button
            variant="secondary"
            size="sm"
            onClick={(e) => { e.stopPropagation(); onUninstallApp?.(app.id); }}
          >
            Uninstall
          </Button>
        </InstalledTrailing>
      }
    />
  );

  return (
    <MpPage>
      <InstalledHeader>
        <InstalledSearchFill>
          <SearchField
            size="md"
            placeholder="Search installed apps"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </InstalledSearchFill>
        {onOpenCommunity && (
          <Button
            variant="secondary"
            size="md"
            onClick={onOpenCommunity}
            trailingArtwork={<ArrowNarrowRightIcon size={14} />}
          >
            App Marketplace
          </Button>
        )}
      </InstalledHeader>

      <InstalledSection>
        <InstalledSectionHeader>
          <InstalledSectionTitle>Team apps</InstalledSectionTitle>
          <AlloyBadge variant="neutral">{teamApps.length}</AlloyBadge>
        </InstalledSectionHeader>
        {teamApps.length === 0 ? (
          <InstalledZeroState>
            <InstalledZeroTitle>No team apps installed yet</InstalledZeroTitle>
            <InstalledZeroDesc>
              Browse the App Marketplace and click <strong>Use App</strong> on a
              team app to install it here.
            </InstalledZeroDesc>
            {onOpenCommunity && (
              <Button
                variant="secondary"
                size="sm"
                onClick={onOpenCommunity}
                trailingArtwork={<ArrowNarrowRightIcon size={14} />}
              >
                Browse App Marketplace
              </Button>
            )}
          </InstalledZeroState>
        ) : (
          <InstalledList>
            {teamApps.map(app => renderItem(app))}
          </InstalledList>
        )}
      </InstalledSection>

      <InstalledSection>
        <InstalledSectionHeader>
          <InstalledSectionTitle>Background apps</InstalledSectionTitle>
          <AlloyBadge variant="neutral">{backgroundApps.length}</AlloyBadge>
        </InstalledSectionHeader>
        {backgroundApps.length === 0 ? (
          <InstalledZeroState>
            <InstalledZeroTitle>No background apps installed yet</InstalledZeroTitle>
            <InstalledZeroDesc>
              Browse the App Marketplace and click <strong>Use App</strong> on a
              background service to install it here.
            </InstalledZeroDesc>
            {onOpenCommunity && (
              <Button
                variant="secondary"
                size="sm"
                onClick={onOpenCommunity}
                trailingArtwork={<ArrowNarrowRightIcon size={14} />}
              >
                Browse App Marketplace
              </Button>
            )}
          </InstalledZeroState>
        ) : (
          <InstalledList>
            {backgroundApps.map(app => renderItem(app))}
          </InstalledList>
        )}
      </InstalledSection>
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
