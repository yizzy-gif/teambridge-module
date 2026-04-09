import styled from 'styled-components';

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

export function MarketplacePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Marketplace</PageTitle>
        <PageSubtitle>Discover and install apps for your workspace</PageSubtitle>
      </PageHeader>
      <CardGrid>
        {[
          { name: 'Slack', desc: 'Team messaging & notifications', tag: 'Installed' },
          { name: 'Greenhouse', desc: 'Recruiting & hiring pipeline', tag: 'Installed' },
          { name: 'Okta', desc: 'Single sign-on & identity', tag: 'Installed' },
          { name: 'Rippling', desc: 'Device & app management', tag: 'Available' },
          { name: 'Gusto', desc: 'Benefits & payroll sync', tag: 'Available' },
          { name: 'Lattice', desc: 'Performance management', tag: 'Available' },
        ].map(app => (
          <Card key={app.name}>
            <CardLabel>{app.name}</CardLabel>
            <CardDesc>{app.desc}</CardDesc>
            <Badge $color={app.tag === 'Installed' ? '#e8f5e9' : undefined}>{app.tag}</Badge>
          </Card>
        ))}
      </CardGrid>
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
