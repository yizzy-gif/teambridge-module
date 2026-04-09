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

// ── Sub-pages ──────────────────────────────────────────────────────────────

export function AllPeoplePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>All People</PageTitle>
        <PageSubtitle>Everyone across your workforce</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Total Headcount</CardLabel><CardValue>166</CardValue><CardDesc>Active workers</CardDesc></Card>
        <Card><CardLabel>Employees</CardLabel><CardValue>87</CardValue><CardDesc>Full-time & part-time</CardDesc></Card>
        <Card><CardLabel>Contractors</CardLabel><CardValue>24</CardValue><CardDesc>Active engagements</CardDesc></Card>
        <Card><CardLabel>New This Month</CardLabel><CardValue>5</CardValue><CardDesc>Onboarding in progress</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent People</SectionHeading>
      <ListCard>
        {[
          { name: 'Sarah Kim', meta: 'Engineering · Joined today', badge: 'New', color: '#e8f5e9' },
          { name: 'Jun Park', meta: 'Design · Joined Mar 20', badge: 'Active', color: '#e3f2fd' },
          { name: 'Alex Torres', meta: 'Legal · Contractor', badge: 'Contractor', color: undefined },
          { name: 'Maria Santos', meta: 'HR · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Rahul Dev', meta: 'Engineering · Contractor', badge: 'Contractor', color: undefined },
        ].map(p => (
          <ListRow key={p.name}>
            <RowLeft><RowTitle>{p.name}</RowTitle><RowMeta>{p.meta}</RowMeta></RowLeft>
            <Badge $color={p.color}>{p.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function ContractorsPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Contractors</PageTitle>
        <PageSubtitle>Independent contractors and freelancers</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Active</CardLabel><CardValue>24</CardValue><CardDesc>Current engagements</CardDesc></Card>
        <Card><CardLabel>Expiring Soon</CardLabel><CardValue>3</CardValue><CardDesc>Within 30 days</CardDesc></Card>
        <Card><CardLabel>Avg Rate</CardLabel><CardValue>$95/h</CardValue><CardDesc>Across all contracts</CardDesc></Card>
        <Card><CardLabel>Pending Invoices</CardLabel><CardValue>6</CardValue><CardDesc>Awaiting payment</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Active Contractors</SectionHeading>
      <ListCard>
        {[
          { name: 'Alex Torres', meta: 'Legal · Contract ends Apr 30', badge: 'Active', color: '#e3f2fd' },
          { name: 'Rahul Dev', meta: 'Engineering · Contract ends May 15', badge: 'Active', color: '#e3f2fd' },
          { name: 'Studio Nine', meta: 'Design · Contract ends Mar 31', badge: 'Expiring', color: '#fff8e1' },
          { name: 'Nomad Labs', meta: 'Marketing · Contract ends Apr 10', badge: 'Active', color: '#e3f2fd' },
          { name: 'Priya Mehta', meta: 'Finance · Contract ends Mar 28', badge: 'Expiring', color: '#fff8e1' },
        ].map(c => (
          <ListRow key={c.name}>
            <RowLeft><RowTitle>{c.name}</RowTitle><RowMeta>{c.meta}</RowMeta></RowLeft>
            <Badge $color={c.color}>{c.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function EmployeesPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Employees</PageTitle>
        <PageSubtitle>Full-time and part-time employees</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Total Employees</CardLabel><CardValue>87</CardValue><CardDesc>Full-time & part-time</CardDesc></Card>
        <Card><CardLabel>On Leave</CardLabel><CardValue>4</CardValue><CardDesc>Current leave requests</CardDesc></Card>
        <Card><CardLabel>Open Roles</CardLabel><CardValue>7</CardValue><CardDesc>Currently recruiting</CardDesc></Card>
        <Card><CardLabel>Avg Tenure</CardLabel><CardValue>2.4y</CardValue><CardDesc>Across all employees</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Recent Activity</SectionHeading>
      <ListCard>
        {[
          { name: 'Sarah Kim', meta: 'Engineering · Onboarding', badge: 'New hire', color: '#e8f5e9' },
          { name: 'Jun Park', meta: 'Design · Active', badge: 'Active', color: '#e3f2fd' },
          { name: 'Maria Santos', meta: 'HR · On leave', badge: 'On leave', color: '#fff8e1' },
          { name: 'David Chen', meta: 'Operations · Active', badge: 'Active', color: '#e3f2fd' },
          { name: 'Lisa Wong', meta: 'Finance · Active', badge: 'Active', color: '#e3f2fd' },
        ].map(e => (
          <ListRow key={e.name}>
            <RowLeft><RowTitle>{e.name}</RowTitle><RowMeta>{e.meta}</RowMeta></RowLeft>
            <Badge $color={e.color}>{e.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function EngineeringPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Engineering</PageTitle>
        <PageSubtitle>Engineering department overview</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Headcount</CardLabel><CardValue>32</CardValue><CardDesc>Employees & contractors</CardDesc></Card>
        <Card><CardLabel>Open Roles</CardLabel><CardValue>3</CardValue><CardDesc>Backend & platform</CardDesc></Card>
        <Card><CardLabel>Avg Tenure</CardLabel><CardValue>2.8y</CardValue><CardDesc>Across the team</CardDesc></Card>
        <Card><CardLabel>On Leave</CardLabel><CardValue>1</CardValue><CardDesc>Returning Apr 7</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Team Members</SectionHeading>
      <ListCard>
        {[
          { name: 'Sarah Kim', meta: 'Software Engineer · New hire', badge: 'New', color: '#e8f5e9' },
          { name: 'Rahul Dev', meta: 'Senior Engineer · Contractor', badge: 'Contractor', color: undefined },
          { name: 'Tom Nguyen', meta: 'Tech Lead · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Aisha Osei', meta: 'Platform Engineer · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'James Ruiz', meta: 'Backend Engineer · On leave', badge: 'On leave', color: '#fff8e1' },
        ].map(m => (
          <ListRow key={m.name}>
            <RowLeft><RowTitle>{m.name}</RowTitle><RowMeta>{m.meta}</RowMeta></RowLeft>
            <Badge $color={m.color}>{m.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function DesignPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Design</PageTitle>
        <PageSubtitle>Design department overview</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Headcount</CardLabel><CardValue>11</CardValue><CardDesc>Employees & contractors</CardDesc></Card>
        <Card><CardLabel>Open Roles</CardLabel><CardValue>1</CardValue><CardDesc>Senior product designer</CardDesc></Card>
        <Card><CardLabel>Avg Tenure</CardLabel><CardValue>1.9y</CardValue><CardDesc>Across the team</CardDesc></Card>
        <Card><CardLabel>On Leave</CardLabel><CardValue>0</CardValue><CardDesc>Everyone active</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Team Members</SectionHeading>
      <ListCard>
        {[
          { name: 'Jun Park', meta: 'Product Designer · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Studio Nine', meta: 'Design Agency · Contractor', badge: 'Contractor', color: undefined },
          { name: 'Maria Santos', meta: 'UX Researcher · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Cleo Barros', meta: 'Brand Designer · Employee', badge: 'Active', color: '#e3f2fd' },
        ].map(m => (
          <ListRow key={m.name}>
            <RowLeft><RowTitle>{m.name}</RowTitle><RowMeta>{m.meta}</RowMeta></RowLeft>
            <Badge $color={m.color}>{m.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function MarketingPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Marketing</PageTitle>
        <PageSubtitle>Marketing department overview</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Headcount</CardLabel><CardValue>9</CardValue><CardDesc>Employees & contractors</CardDesc></Card>
        <Card><CardLabel>Open Roles</CardLabel><CardValue>1</CardValue><CardDesc>Growth marketer</CardDesc></Card>
        <Card><CardLabel>Avg Tenure</CardLabel><CardValue>1.5y</CardValue><CardDesc>Across the team</CardDesc></Card>
        <Card><CardLabel>Campaigns Active</CardLabel><CardValue>4</CardValue><CardDesc>This quarter</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Team Members</SectionHeading>
      <ListCard>
        {[
          { name: 'Nomad Labs', meta: 'Content Agency · Contractor', badge: 'Contractor', color: undefined },
          { name: 'Elena Voss', meta: 'Marketing Manager · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Oscar Tran', meta: 'Growth · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Binta Diallo', meta: 'Brand · Employee', badge: 'Active', color: '#e3f2fd' },
        ].map(m => (
          <ListRow key={m.name}>
            <RowLeft><RowTitle>{m.name}</RowTitle><RowMeta>{m.meta}</RowMeta></RowLeft>
            <Badge $color={m.color}>{m.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}

export function OperationsPage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Operations</PageTitle>
        <PageSubtitle>Operations department overview</PageSubtitle>
      </PageHeader>
      <CardGrid>
        <Card><CardLabel>Headcount</CardLabel><CardValue>18</CardValue><CardDesc>Employees & contractors</CardDesc></Card>
        <Card><CardLabel>Open Roles</CardLabel><CardValue>2</CardValue><CardDesc>Ops & logistics</CardDesc></Card>
        <Card><CardLabel>Avg Tenure</CardLabel><CardValue>3.1y</CardValue><CardDesc>Most tenured dept</CardDesc></Card>
        <Card><CardLabel>On Leave</CardLabel><CardValue>1</CardValue><CardDesc>Returning Apr 2</CardDesc></Card>
      </CardGrid>
      <SectionHeading>Team Members</SectionHeading>
      <ListCard>
        {[
          { name: 'David Chen', meta: 'Operations Lead · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Fatou Mbaye', meta: 'Logistics Manager · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Carlos Ibarra', meta: 'IT Operations · Employee', badge: 'Active', color: '#e3f2fd' },
          { name: 'Ingrid Lund', meta: 'Facilities · On leave', badge: 'On leave', color: '#fff8e1' },
        ].map(m => (
          <ListRow key={m.name}>
            <RowLeft><RowTitle>{m.name}</RowTitle><RowMeta>{m.meta}</RowMeta></RowLeft>
            <Badge $color={m.color}>{m.badge}</Badge>
          </ListRow>
        ))}
      </ListCard>
    </Page>
  );
}
