// Execution records for AI Specialist usage tracking.
// All stat cards and chart data are derived by filtering + reducing this array.
// Swap the MOCK_EXECUTIONS export for a real API call when the backend is ready.

// ── Types ─────────────────────────────────────────────────────────────────────

export type ActionCategory = 'communication' | 'data_cleanup' | 'scheduling';
export type OutcomeStatus = 'resolved' | 'unresolved' | 'escalated' | 'partial' | 'error';
export type CommunicationChannel = 'chat' | 'email' | 'sms';
export type FeedbackValue = 'up' | 'down' | null;
export type TimeRange = '24h' | '7d' | '30d';

export interface Workflow {
  id: string;
  name: string;
  href: string;
}

export interface TriggerSource {
  id: string;
  label: string;
  type: string;
}

export interface ExecutionStep {
  offsetMs: number;
  description: string;
  actionCategory: ActionCategory;
  channel?: CommunicationChannel;
}

export interface ExecutionRecord {
  id: string;
  specialistId: string;
  timestamp: string;
  trigger: TriggerSource;
  workflow: Workflow;
  steps: ExecutionStep[];
  durationMs: number;
  tokensUsed: number;
  outcomeStatus: OutcomeStatus;
  outcomeSummaryShort: string;
  outcomeSummaryFull: string;
  feedback: FeedbackValue;
}

// ── Workflows ─────────────────────────────────────────────────────────────────

export const WORKFLOWS: Workflow[] = [
  // HR Assistant (persona-1)
  { id: 'wf-onboarding',  name: 'New Hire Onboarding',    href: '/workflows/wf-onboarding'  },
  { id: 'wf-shift-mgmt',  name: 'Shift Management',       href: '/workflows/wf-shift-mgmt'  },
  { id: 'wf-hr-inbox',    name: 'HR Inbox Triage',         href: '/workflows/wf-hr-inbox'    },
  { id: 'wf-ops-checkin', name: 'Ops Weekly Check-in',     href: '/workflows/wf-ops-checkin' },
  { id: 'wf-compliance',  name: 'Compliance & Filing',     href: '/workflows/wf-compliance'  },
  // Payroll Advisor (persona-2)
  { id: 'wf-payroll',     name: 'Payroll Processing',      href: '/workflows/wf-payroll'     },
  { id: 'wf-contractor',  name: 'Contractor Management',   href: '/workflows/wf-contractor'  },
  // Compliance Guide (persona-3)
  { id: 'wf-policy-mgmt', name: 'Policy Management',       href: '/workflows/wf-policy-mgmt' },
  { id: 'wf-comp-review', name: 'Compliance Review',       href: '/workflows/wf-comp-review' },
  // Recruiting Screener (persona-4)
  { id: 'wf-screening',   name: 'Candidate Screening',     href: '/workflows/wf-screening'   },
  { id: 'wf-interviews',  name: 'Interview Scheduling',    href: '/workflows/wf-interviews'  },
];

// ── Deployments ───────────────────────────────────────────────────────────────

export type DeploymentStatus = 'active' | 'paused';

export interface Deployment {
  id: string;
  personaId: string;
  workflow: Workflow;
  status: DeploymentStatus;
}

export const DEPLOYMENTS: Deployment[] = [
  { id: 'dep-001', personaId: 'persona-1', workflow: WORKFLOWS[0], status: 'active'  },
  { id: 'dep-002', personaId: 'persona-1', workflow: WORKFLOWS[1], status: 'active'  },
  { id: 'dep-003', personaId: 'persona-1', workflow: WORKFLOWS[2], status: 'paused'  },
  { id: 'dep-004', personaId: 'persona-1', workflow: WORKFLOWS[3], status: 'active'  },
  { id: 'dep-005', personaId: 'persona-1', workflow: WORKFLOWS[4], status: 'active'  },
];

// ── Mock data ─────────────────────────────────────────────────────────────────
// Current period: Apr 1–8 2026. Prior period: Mar 25–31 2026.

export const MOCK_EXECUTIONS: ExecutionRecord[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // persona-1 — HR Assistant
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: 'exec-001',
    specialistId: 'persona-1',
    timestamp: '2026-04-08T14:23:00Z',
    trigger: { id: 'trig-001', label: 'New message from Maria in #onboarding', type: 'chat_message' },
    workflow: WORKFLOWS[0],
    steps: [
      { offsetMs: 0,   description: 'Received chat message from Maria asking about the new hire checklist', actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 400, description: "Looked up onboarding checklist template for Maria's role",            actionCategory: 'data_cleanup'  },
      { offsetMs: 900, description: 'Replied in #onboarding with the 5-step process and handbook link',     actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1200,
    tokensUsed: 340,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered onboarding question with checklist and handbook link',
    outcomeSummaryFull: 'Maria asked about the new hire checklist in #onboarding. The specialist retrieved the checklist template for her role, replied with the 5-step onboarding process, and linked to the internal handbook. Maria confirmed it was helpful.',
    feedback: null,
  },
  {
    id: 'exec-002',
    specialistId: 'persona-1',
    timestamp: '2026-04-08T11:05:00Z',
    trigger: { id: 'trig-002', label: 'Availability form submitted by Jake', type: 'form_submission' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,    description: 'Received availability form submission from Jake',                      actionCategory: 'data_cleanup'  },
      { offsetMs: 600,  description: 'Parsed preferred hours and date constraints from form data',           actionCategory: 'data_cleanup'  },
      { offsetMs: 1400, description: 'Cross-referenced open shifts for week of April 13',                    actionCategory: 'scheduling'    },
      { offsetMs: 2800, description: "Created draft shift assignment matching Jake's availability",          actionCategory: 'scheduling'    },
      { offsetMs: 3200, description: 'Sent assignment to manager approval queue with summary',               actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3400,
    tokensUsed: 780,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: "Created draft shift assignment from Jake's availability form",
    outcomeSummaryFull: 'Jake submitted an availability form. The specialist parsed his preferred hours, cross-referenced open shifts for the week of April 13, and created a draft assignment. The assignment was saved as pending manager approval with a summary of the match.',
    feedback: 'up',
  },
  {
    id: 'exec-003',
    specialistId: 'persona-1',
    timestamp: '2026-04-07T17:48:00Z',
    trigger: { id: 'trig-003', label: 'Inbound SMS from employee #1042', type: 'inbound_sms' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,   description: 'Received SMS asking about PTO balance',                                actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 300, description: 'Looked up PTO balance and accrual rate for employee #1042',            actionCategory: 'data_cleanup'  },
      { offsetMs: 750, description: 'Replied via SMS with current balance (8 days) and accrual rate',       actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 950,
    tokensUsed: 210,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered PTO balance inquiry via SMS',
    outcomeSummaryFull: 'Employee texted asking about remaining PTO days. The specialist looked up their balance and accrual rate, then replied with the current total of 8 days and the monthly accrual. No follow-up was needed.',
    feedback: null,
  },
  {
    id: 'exec-004',
    specialistId: 'persona-1',
    timestamp: '2026-04-07T09:12:00Z',
    trigger: { id: 'trig-004', label: 'Inbound email from unknown sender', type: 'inbound_email' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0,   description: 'Received inbound email for HR inbox triage',                           actionCategory: 'communication', channel: 'email' },
      { offsetMs: 150, description: 'Attempted to parse sender header — malformed format detected',         actionCategory: 'data_cleanup'  },
    ],
    durationMs: 200,
    tokensUsed: 0,
    outcomeStatus: 'error',
    outcomeSummaryShort: 'Failed to parse inbound email — malformed sender header',
    outcomeSummaryFull: 'An inbound email triggered the specialist but the sender header was malformed and could not be parsed. Processing stopped before any reply was generated. The original email was flagged for manual review in the HR inbox.',
    feedback: 'down',
  },
  {
    id: 'exec-005',
    specialistId: 'persona-1',
    timestamp: '2026-04-06T13:30:00Z',
    trigger: { id: 'trig-005', label: 'Weekly check-in schedule fired', type: 'scheduled' },
    workflow: WORKFLOWS[3],
    steps: [
      { offsetMs: 0,    description: 'Scheduled weekly check-in trigger fired',                             actionCategory: 'scheduling'    },
      { offsetMs: 800,  description: 'Collected check-in responses from 8 team members',                    actionCategory: 'data_cleanup'  },
      { offsetMs: 2400, description: 'Compiled summary with highlights and flagged 2 unresolved blockers',   actionCategory: 'data_cleanup'  },
      { offsetMs: 4600, description: 'Posted weekly digest to #ops-updates channel',                        actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5200,
    tokensUsed: 1450,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Compiled and posted weekly check-in digest for Team Ops',
    outcomeSummaryFull: 'The weekly check-in trigger fired and the specialist compiled responses from 8 team members. It generated a summary highlighting wins, flagged two unresolved blockers, and posted the digest to #ops-updates. All respondents were accounted for.',
    feedback: 'up',
  },
  {
    id: 'exec-006',
    specialistId: 'persona-1',
    timestamp: '2026-04-05T16:02:00Z',
    trigger: { id: 'trig-006', label: 'Shift swap discussion in #scheduling', type: 'chat_message' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,    description: 'Detected shift swap request between two employees in #scheduling',    actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 500,  description: "Verified both employees' availability for the requested dates",       actionCategory: 'scheduling'    },
      { offsetMs: 1100, description: 'Checked for scheduling conflicts against team calendar',               actionCategory: 'scheduling'    },
      { offsetMs: 1500, description: 'Updated shift assignments with the swap',                             actionCategory: 'scheduling'    },
      { offsetMs: 1700, description: 'Posted confirmation with updated shift details in #scheduling',       actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1800,
    tokensUsed: 520,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Processed shift swap and confirmed updated assignments',
    outcomeSummaryFull: "Two employees discussed a shift swap in #scheduling and tagged the specialist. It confirmed both parties' availability, checked for calendar conflicts, executed the swap, and posted a confirmation with the updated shift details.",
    feedback: null,
  },
  {
    id: 'exec-007',
    specialistId: 'persona-1',
    timestamp: '2026-04-04T08:45:00Z',
    trigger: { id: 'trig-007', label: 'Time-off request form submitted', type: 'form_submission' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,    description: 'Received time-off request form for April 18–20',                      actionCategory: 'data_cleanup'  },
      { offsetMs: 400,  description: 'Validated requested dates against team calendar',                      actionCategory: 'scheduling'    },
      { offsetMs: 900,  description: 'Detected potential coverage gap on April 19 — only 1 team member scheduled', actionCategory: 'scheduling' },
      { offsetMs: 1200, description: 'Flagged request as pending manager review with coverage conflict note',actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1400,
    tokensUsed: 380,
    outcomeStatus: 'escalated',
    outcomeSummaryShort: 'Time-off request flagged for manager — coverage gap detected',
    outcomeSummaryFull: 'A time-off request was submitted for April 18–20. The specialist validated the dates and found a potential coverage gap on April 19 with only one team member scheduled. The request was escalated to the manager with a note about the conflict rather than auto-approving.',
    feedback: 'up',
  },
  {
    id: 'exec-008',
    specialistId: 'persona-1',
    timestamp: '2026-04-03T10:20:00Z',
    trigger: { id: 'trig-008', label: 'Inbound SMS from employee #1087', type: 'inbound_sms' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,   description: 'Received SMS asking about upcoming shift schedule',                    actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 350, description: 'Retrieved published schedule for employee #1087',                      actionCategory: 'data_cleanup'  },
      { offsetMs: 800, description: 'Replied via SMS with 3 upcoming shifts including dates, times, and locations', actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 1100,
    tokensUsed: 290,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Sent upcoming shift details via SMS',
    outcomeSummaryFull: 'An employee texted asking about their shifts for the upcoming week. The specialist pulled the published schedule and replied with dates, times, and locations for their three assigned shifts. The employee did not follow up.',
    feedback: null,
  },
  {
    id: 'exec-009',
    specialistId: 'persona-1',
    timestamp: '2026-04-02T15:55:00Z',
    trigger: { id: 'trig-009', label: 'Inbound email with attachment from employee', type: 'inbound_email' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0,    description: 'Received email with signed policy acknowledgment PDF attachment',     actionCategory: 'communication', channel: 'email' },
      { offsetMs: 600,  description: 'Extracted signer name and signature date from PDF',                   actionCategory: 'data_cleanup'  },
      { offsetMs: 1800, description: 'Matched signer to employee record in system',                         actionCategory: 'data_cleanup'  },
      { offsetMs: 2900, description: "Filed document in the compliance folder under the employee's profile",actionCategory: 'data_cleanup'  },
      { offsetMs: 3800, description: 'Sent confirmation email to HR that the document was received and filed', actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4100,
    tokensUsed: 920,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Extracted, matched, and filed signed policy acknowledgment',
    outcomeSummaryFull: 'An employee emailed a signed policy acknowledgment PDF. The specialist extracted the signer name and date, matched it to the employee record, filed the document in the compliance folder, and sent a confirmation to HR.',
    feedback: 'up',
  },
  {
    id: 'exec-010',
    specialistId: 'persona-1',
    timestamp: '2026-04-01T12:00:00Z',
    trigger: { id: 'trig-010', label: 'Weekly check-in schedule fired', type: 'scheduled' },
    workflow: WORKFLOWS[3],
    steps: [
      { offsetMs: 0,   description: 'Scheduled weekly check-in trigger fired',                              actionCategory: 'scheduling'    },
      { offsetMs: 400, description: 'Queried for team check-in responses — none submitted yet',             actionCategory: 'data_cleanup'  },
      { offsetMs: 650, description: 'Posted reminder to #ops-updates requesting responses',                 actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 800,
    tokensUsed: 90,
    outcomeStatus: 'partial',
    outcomeSummaryShort: 'No check-in responses yet — posted reminder to team',
    outcomeSummaryFull: 'The weekly check-in trigger fired but no team members had submitted responses yet. The specialist posted a reminder to #ops-updates. The digest will be compiled once responses come in at the next scheduled interval.',
    feedback: null,
  },
  {
    id: 'exec-011',
    specialistId: 'persona-1',
    timestamp: '2026-04-08T09:30:00Z',
    trigger: { id: 'trig-011', label: 'Employee data import flagged inconsistencies', type: 'form_submission' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0,    description: 'Received notification of data inconsistencies in employee import batch', actionCategory: 'data_cleanup' },
      { offsetMs: 500,  description: 'Identified 3 records with mismatched phone number formats',            actionCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Normalized phone numbers to E.164 format',                            actionCategory: 'data_cleanup' },
      { offsetMs: 1800, description: 'Flagged 1 record with duplicate email — could not auto-resolve',      actionCategory: 'data_cleanup' },
      { offsetMs: 2200, description: 'Sent summary to HR channel with 3 fixed and 1 requiring manual review', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2400,
    tokensUsed: 610,
    outcomeStatus: 'partial',
    outcomeSummaryShort: 'Fixed 3 phone formats, escalated 1 duplicate email for review',
    outcomeSummaryFull: "An employee data import had inconsistencies. The specialist normalized 3 mismatched phone numbers to E.164 format automatically. One record had a duplicate email address that couldn't be auto-resolved and was flagged for HR to review manually.",
    feedback: null,
  },
  {
    id: 'exec-012',
    specialistId: 'persona-1',
    timestamp: '2026-04-06T07:15:00Z',
    trigger: { id: 'trig-012', label: 'Callout SMS from employee #1023', type: 'inbound_sms' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,    description: "Received SMS from employee #1023 calling out sick for today's shift", actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 300,  description: 'Identified affected shift: April 6, 8:00 AM – 4:00 PM, Warehouse B', actionCategory: 'scheduling'    },
      { offsetMs: 900,  description: 'Searched for available replacements with matching role and availability', actionCategory: 'scheduling' },
      { offsetMs: 1600, description: 'Found 2 candidates — sent replacement request SMS to first candidate', actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 2400, description: 'First candidate accepted — updated shift assignment',                  actionCategory: 'scheduling'    },
      { offsetMs: 2800, description: 'Replied to original employee confirming shift is covered',             actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 3000, description: 'Notified manager in #shift-updates of the swap',                      actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3200,
    tokensUsed: 870,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Replaced sick callout — shift covered by backup employee',
    outcomeSummaryFull: 'Employee #1023 texted in sick. The specialist identified the affected shift, found available replacements, and secured a backup within minutes. The original employee was confirmed covered, and the manager was notified in #shift-updates.',
    feedback: 'up',
  },

  // persona-1 prior period (Mar 25–31)
  { id: 'exec-p01', specialistId: 'persona-1', timestamp: '2026-03-31T10:20:00Z',
    trigger: { id: 'trig-p01', label: 'Inbound SMS from employee #1031', type: 'inbound_sms' }, workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,   description: 'Received SMS asking about benefits enrollment deadline', actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 250, description: 'Looked up benefits enrollment window for Q2',           actionCategory: 'data_cleanup'  },
      { offsetMs: 600, description: 'Replied with deadline date and enrollment link',        actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 950, tokensUsed: 300, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered benefits enrollment inquiry via SMS', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p02', specialistId: 'persona-1', timestamp: '2026-03-30T14:15:00Z',
    trigger: { id: 'trig-p02', label: 'Policy question in #hr-general', type: 'chat_message' }, workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0,    description: 'Received question about remote work policy in #hr-general', actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 400,  description: 'Retrieved current remote work policy document',            actionCategory: 'data_cleanup'  },
      { offsetMs: 2100, description: 'Replied with policy summary and linked to full document',   actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2500, tokensUsed: 720, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered remote work policy question in chat', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p03', specialistId: 'persona-1', timestamp: '2026-03-29T09:05:00Z',
    trigger: { id: 'trig-p03', label: 'Inbound email with missing headers', type: 'inbound_email' }, workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0,   description: 'Received inbound email for HR inbox triage',      actionCategory: 'communication', channel: 'email' },
      { offsetMs: 180, description: 'Failed to parse email — required headers missing', actionCategory: 'data_cleanup'  },
    ],
    durationMs: 180, tokensUsed: 0, outcomeStatus: 'error',
    outcomeSummaryShort: 'Email processing failed — missing headers', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p04', specialistId: 'persona-1', timestamp: '2026-03-28T16:30:00Z',
    trigger: { id: 'trig-p04', label: 'Shift availability form submitted', type: 'form_submission' }, workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,    description: 'Received shift availability form submission', actionCategory: 'data_cleanup' },
      { offsetMs: 500,  description: 'Parsed preferred hours and constraints',       actionCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Matched to open shifts for the upcoming week', actionCategory: 'scheduling'   },
      { offsetMs: 1600, description: 'Created draft shift assignment for manager review', actionCategory: 'scheduling' },
    ],
    durationMs: 1600, tokensUsed: 480, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Created draft shift assignment from availability form', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p05', specialistId: 'persona-1', timestamp: '2026-03-27T11:00:00Z',
    trigger: { id: 'trig-p05', label: 'Weekly check-in schedule fired', type: 'scheduled' }, workflow: WORKFLOWS[3],
    steps: [
      { offsetMs: 0,    description: 'Scheduled weekly check-in trigger fired',         actionCategory: 'scheduling'    },
      { offsetMs: 600,  description: 'Collected check-in responses from 6 team members', actionCategory: 'data_cleanup' },
      { offsetMs: 3000, description: 'Compiled summary with wins and open items',        actionCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Posted weekly digest to #ops-updates',             actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 4800, tokensUsed: 1100, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Compiled and posted weekly check-in digest', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p06', specialistId: 'persona-1', timestamp: '2026-03-26T08:45:00Z',
    trigger: { id: 'trig-p06', label: 'Inbound SMS from employee #1019', type: 'inbound_sms' }, workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0,   description: 'Received SMS asking about upcoming shift schedule', actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 300, description: 'Retrieved published schedule for employee #1019',   actionCategory: 'data_cleanup'  },
      { offsetMs: 900, description: 'Replied via SMS with shift dates and times',        actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 1100, tokensUsed: 310, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Sent upcoming shift details via SMS', outcomeSummaryFull: '', feedback: null },

  // ════════════════════════════════════════════════════════════════════════════
  // persona-2 — Payroll Advisor
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: 'exec-201',
    specialistId: 'persona-2',
    timestamp: '2026-04-08T13:10:00Z',
    trigger: { id: 'trig-201', label: 'Payroll question from Alex in #finance', type: 'chat_message' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,   description: 'Received chat message from Alex asking about Q1 bonus calculation',   actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 500, description: 'Retrieved bonus eligibility rules and Q1 performance multipliers',    actionCategory: 'data_cleanup'  },
      { offsetMs: 1100,'description': 'Calculated estimated bonus for Alex based on current records',       actionCategory: 'data_cleanup'  },
      { offsetMs: 1600, description: 'Replied in #finance with breakdown and link to full policy doc',      actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1900,
    tokensUsed: 420,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Explained Q1 bonus calculation with breakdown',
    outcomeSummaryFull: 'Alex asked about how the Q1 bonus was calculated. The specialist retrieved eligibility rules and performance multipliers, computed an estimated figure based on current records, and replied with a detailed breakdown. Alex confirmed the answer matched his expectations.',
    feedback: 'up',
  },
  {
    id: 'exec-202',
    specialistId: 'persona-2',
    timestamp: '2026-04-08T09:45:00Z',
    trigger: { id: 'trig-202', label: 'Contractor invoice submitted via email', type: 'inbound_email' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0,    description: 'Received contractor invoice email from vendor',                       actionCategory: 'communication', channel: 'email' },
      { offsetMs: 700,  description: 'Extracted invoice number, amount, and due date from attachment',     actionCategory: 'data_cleanup'  },
      { offsetMs: 1500, description: 'Matched invoice to open purchase order in system',                    actionCategory: 'data_cleanup'  },
      { offsetMs: 2200, description: 'Detected PO amount mismatch — invoice total 12% over approved PO',   actionCategory: 'data_cleanup'  },
      { offsetMs: 2700, description: 'Flagged invoice for finance manager review with discrepancy note',    actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 3000,
    tokensUsed: 650,
    outcomeStatus: 'escalated',
    outcomeSummaryShort: 'Invoice flagged — amount exceeds approved PO by 12%',
    outcomeSummaryFull: 'A contractor submitted an invoice via email. The specialist extracted the key fields and matched it to the open purchase order, but found the total was 12% above the approved amount. The invoice was flagged for the finance manager with a note on the discrepancy rather than auto-approving.',
    feedback: null,
  },
  {
    id: 'exec-203',
    specialistId: 'persona-2',
    timestamp: '2026-04-07T15:30:00Z',
    trigger: { id: 'trig-203', label: 'Payroll variance report requested via form', type: 'form_submission' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,    description: 'Received payroll variance report request form',                       actionCategory: 'data_cleanup'  },
      { offsetMs: 600,  description: 'Pulled payroll data for March vs February comparison',                actionCategory: 'data_cleanup'  },
      { offsetMs: 2100, description: 'Identified 4 employees with unusual hour changes (>20% variance)',    actionCategory: 'data_cleanup'  },
      { offsetMs: 3400, description: 'Generated variance report PDF with flagged entries highlighted',      actionCategory: 'data_cleanup'  },
      { offsetMs: 4100, description: 'Emailed report to requester with summary of flagged records',         actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4500,
    tokensUsed: 1080,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Generated payroll variance report with 4 flagged entries',
    outcomeSummaryFull: 'A payroll variance report was requested for the March vs February period. The specialist pulled payroll data, identified four employees with more than 20% hour variance, and generated a highlighted PDF report. The report was emailed to the requester with a brief summary.',
    feedback: 'up',
  },
  {
    id: 'exec-204',
    specialistId: 'persona-2',
    timestamp: '2026-04-06T08:00:00Z',
    trigger: { id: 'trig-204', label: 'Scheduled bi-weekly payroll run', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,    description: 'Bi-weekly payroll processing trigger fired',                          actionCategory: 'scheduling'    },
      { offsetMs: 1200, description: 'Validated timesheets for 47 employees — 45 approved, 2 pending',      actionCategory: 'data_cleanup'  },
      { offsetMs: 3800, description: 'Calculated gross pay, deductions, and net amounts for approved records', actionCategory: 'data_cleanup' },
      { offsetMs: 6200, description: 'Flagged 2 timesheets missing manager sign-off for manual review',     actionCategory: 'data_cleanup'  },
      { offsetMs: 7000, description: 'Submitted payroll batch for 45 employees and posted summary to #payroll-ops', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 7400,
    tokensUsed: 1920,
    outcomeStatus: 'partial',
    outcomeSummaryShort: 'Payroll processed for 45 of 47 — 2 timesheets pending sign-off',
    outcomeSummaryFull: 'The bi-weekly payroll run processed 45 of 47 employee timesheets successfully. Two records were missing required manager sign-off and were held back for manual review. The approved batch was submitted and a summary posted to #payroll-ops.',
    feedback: null,
  },
  {
    id: 'exec-205',
    specialistId: 'persona-2',
    timestamp: '2026-04-05T11:20:00Z',
    trigger: { id: 'trig-205', label: 'Direct deposit question via SMS', type: 'inbound_sms' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,   description: 'Received SMS from employee asking why direct deposit was delayed',     actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 400, description: 'Looked up direct deposit status for the employee in payroll system',   actionCategory: 'data_cleanup'  },
      { offsetMs: 900, description: 'Found bank routing number on file is invalid — deposit was rejected',  actionCategory: 'data_cleanup'  },
      { offsetMs: 1300, description: 'Replied via SMS with explanation and link to update banking info',    actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 1600,
    tokensUsed: 310,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Identified rejected deposit — invalid routing number on file',
    outcomeSummaryFull: 'An employee texted asking why their direct deposit had not arrived. The specialist found the bank routing number on file was invalid, causing the deposit to be rejected by the bank. The employee was texted an explanation and a link to update their banking information.',
    feedback: null,
  },
  {
    id: 'exec-206',
    specialistId: 'persona-2',
    timestamp: '2026-04-04T14:00:00Z',
    trigger: { id: 'trig-206', label: 'Contractor payment batch export failed', type: 'scheduled' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0,   description: 'Scheduled contractor payment export job triggered',                    actionCategory: 'scheduling'    },
      { offsetMs: 300, description: 'Attempted to connect to payment processor API — timeout after 30s',    actionCategory: 'data_cleanup'  },
    ],
    durationMs: 350,
    tokensUsed: 0,
    outcomeStatus: 'error',
    outcomeSummaryShort: 'Payment export failed — payment processor API timed out',
    outcomeSummaryFull: 'The scheduled contractor payment export triggered but the payment processor API timed out after 30 seconds. No payments were submitted. The failure was logged and the finance team was notified via email to retry manually.',
    feedback: 'down',
  },
  {
    id: 'exec-207',
    specialistId: 'persona-2',
    timestamp: '2026-04-03T09:50:00Z',
    trigger: { id: 'trig-207', label: 'New contractor onboarding form submitted', type: 'form_submission' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0,    description: 'Received contractor onboarding form for new vendor',                  actionCategory: 'data_cleanup'  },
      { offsetMs: 500,  description: 'Validated tax ID (EIN) and W-9 document against IRS format',          actionCategory: 'data_cleanup'  },
      { offsetMs: 1300, description: 'Created contractor profile in accounts payable system',               actionCategory: 'data_cleanup'  },
      { offsetMs: 2000, description: 'Sent welcome email to contractor with payment terms and portal link', actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2400,
    tokensUsed: 560,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Onboarded new contractor — profile created and welcome email sent',
    outcomeSummaryFull: 'A new contractor submitted their onboarding form. The specialist validated the EIN and W-9 document, created the contractor profile in the accounts payable system, and sent a welcome email with payment terms and a portal link.',
    feedback: 'up',
  },
  {
    id: 'exec-208',
    specialistId: 'persona-2',
    timestamp: '2026-04-02T16:15:00Z',
    trigger: { id: 'trig-208', label: 'Payroll correction request via email', type: 'inbound_email' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,    description: 'Received email requesting correction to March payroll for employee #2041', actionCategory: 'communication', channel: 'email' },
      { offsetMs: 800,  description: 'Pulled original payroll record and compared against submitted correction', actionCategory: 'data_cleanup' },
      { offsetMs: 2000, description: 'Identified missing 8 hours of overtime from March 28',                actionCategory: 'data_cleanup'  },
      { offsetMs: 3100, description: 'Submitted payroll correction request with supporting timesheet data', actionCategory: 'data_cleanup'  },
      { offsetMs: 3800, description: 'Emailed confirmation to employee and CC\'d HR with correction details', actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4200,
    tokensUsed: 840,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Identified and submitted payroll correction for missed overtime',
    outcomeSummaryFull: 'An employee emailed requesting a payroll correction for March. The specialist found 8 hours of overtime from March 28 had not been applied, submitted a correction request with the supporting timesheet, and confirmed the update with the employee and HR.',
    feedback: 'up',
  },

  // persona-2 prior period (Mar 25–31)
  { id: 'exec-p201', specialistId: 'persona-2', timestamp: '2026-03-31T11:00:00Z',
    trigger: { id: 'trig-p201', label: 'Payroll question in #finance', type: 'chat_message' }, workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,   description: 'Received question about holiday pay calculation',    actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 400, description: 'Retrieved holiday pay policy for the employee class', actionCategory: 'data_cleanup'  },
      { offsetMs: 900, description: 'Replied with calculation method and expected amount', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1100, tokensUsed: 280, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered holiday pay calculation question', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p202', specialistId: 'persona-2', timestamp: '2026-03-29T14:30:00Z',
    trigger: { id: 'trig-p202', label: 'Contractor invoice submitted', type: 'inbound_email' }, workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0,    description: 'Received contractor invoice via email',                    actionCategory: 'communication', channel: 'email' },
      { offsetMs: 600,  description: 'Extracted invoice details and matched to purchase order', actionCategory: 'data_cleanup'  },
      { offsetMs: 1400, description: 'Invoice approved — submitted for payment processing',      actionCategory: 'data_cleanup'  },
      { offsetMs: 1900, description: 'Sent payment confirmation to contractor',                  actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2100, tokensUsed: 490, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Processed contractor invoice — submitted for payment', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p203', specialistId: 'persona-2', timestamp: '2026-03-28T09:00:00Z',
    trigger: { id: 'trig-p203', label: 'Scheduled bi-weekly payroll run', type: 'scheduled' }, workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,    description: 'Bi-weekly payroll trigger fired',                             actionCategory: 'scheduling'    },
      { offsetMs: 1000, description: 'Validated 44 employee timesheets — all approved',             actionCategory: 'data_cleanup'  },
      { offsetMs: 3500, description: 'Calculated pay amounts and deductions',                        actionCategory: 'data_cleanup'  },
      { offsetMs: 5800, description: 'Submitted full payroll batch and posted summary',             actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 6200, tokensUsed: 1640, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Full payroll batch processed for 44 employees', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p204', specialistId: 'persona-2', timestamp: '2026-03-26T15:00:00Z',
    trigger: { id: 'trig-p204', label: 'Direct deposit SMS inquiry', type: 'inbound_sms' }, workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,   description: 'Received SMS asking about direct deposit timing',           actionCategory: 'communication', channel: 'sms' },
      { offsetMs: 350, description: 'Checked payroll schedule and bank processing window',        actionCategory: 'data_cleanup'  },
      { offsetMs: 700, description: 'Replied with expected deposit date and processing timeline', actionCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 900, tokensUsed: 220, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Clarified direct deposit timing via SMS', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p205', specialistId: 'persona-2', timestamp: '2026-03-25T10:30:00Z',
    trigger: { id: 'trig-p205', label: 'Payroll correction form submitted', type: 'form_submission' }, workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0,    description: 'Received payroll correction form for employee #2019',      actionCategory: 'data_cleanup'  },
      { offsetMs: 700,  description: 'Compared original record against correction request',       actionCategory: 'data_cleanup'  },
      { offsetMs: 1500, description: 'Could not verify correction without manager approval',      actionCategory: 'data_cleanup'  },
      { offsetMs: 1800, description: 'Flagged for manager sign-off before processing',            actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2000, tokensUsed: 430, outcomeStatus: 'escalated',
    outcomeSummaryShort: 'Payroll correction pending manager approval', outcomeSummaryFull: '', feedback: null },

  // ════════════════════════════════════════════════════════════════════════════
  // persona-3 — Compliance Guide
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: 'exec-301',
    specialistId: 'persona-3',
    timestamp: '2026-04-08T10:00:00Z',
    trigger: { id: 'trig-301', label: 'Policy question in #legal', type: 'chat_message' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,   description: 'Received question about GDPR data retention requirements in #legal',  actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 600, description: 'Retrieved GDPR Article 5(1)(e) summary and company data retention schedule', actionCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Replied with plain-language summary and link to internal retention policy', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1700,
    tokensUsed: 510,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered GDPR data retention question with policy reference',
    outcomeSummaryFull: 'A team member asked about GDPR data retention requirements in #legal. The specialist retrieved the relevant GDPR article summary and the company\'s internal data retention schedule, then replied with a plain-language explanation and a link to the full internal policy.',
    feedback: 'up',
  },
  {
    id: 'exec-302',
    specialistId: 'persona-3',
    timestamp: '2026-04-07T14:20:00Z',
    trigger: { id: 'trig-302', label: 'Compliance audit form submitted', type: 'form_submission' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0,    description: 'Received quarterly compliance self-audit form submission',            actionCategory: 'data_cleanup'  },
      { offsetMs: 800,  description: 'Parsed 14 checklist items across 3 compliance domains',              actionCategory: 'data_cleanup'  },
      { offsetMs: 2200, description: 'Identified 2 items marked non-compliant: missing access review and expired vendor NDA', actionCategory: 'data_cleanup' },
      { offsetMs: 3500, description: 'Generated audit summary with remediation steps for each gap',        actionCategory: 'data_cleanup'  },
      { offsetMs: 4400, description: 'Emailed audit report to compliance officer with gap summary',         actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4900,
    tokensUsed: 1240,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Audit form processed — 2 compliance gaps identified and reported',
    outcomeSummaryFull: 'A quarterly compliance self-audit form was submitted with 14 checklist items. The specialist identified two non-compliant items — a missing access review and an expired vendor NDA — and generated a report with remediation steps. The report was emailed to the compliance officer.',
    feedback: 'up',
  },
  {
    id: 'exec-303',
    specialistId: 'persona-3',
    timestamp: '2026-04-07T08:30:00Z',
    trigger: { id: 'trig-303', label: 'Regulatory update email from external body', type: 'inbound_email' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0,    description: 'Received regulatory update email from state labor board',             actionCategory: 'communication', channel: 'email' },
      { offsetMs: 900,  description: 'Extracted key regulatory changes from the 12-page document',         actionCategory: 'data_cleanup'  },
      { offsetMs: 3100, description: 'Cross-referenced changes against 3 internal policies for impact',    actionCategory: 'data_cleanup'  },
      { offsetMs: 4800, description: '2 internal policies require updates — flagged for legal team review', actionCategory: 'data_cleanup'  },
      { offsetMs: 5200, description: 'Posted regulatory alert summary to #legal-updates channel',          actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5600,
    tokensUsed: 1680,
    outcomeStatus: 'partial',
    outcomeSummaryShort: '2 policy updates flagged after regulatory change — pending legal review',
    outcomeSummaryFull: 'A regulatory update was received from the state labor board. The specialist extracted key changes and cross-referenced them against internal policies, finding that two policies require updates. The changes were flagged for the legal team to review, and a summary was posted to #legal-updates.',
    feedback: null,
  },
  {
    id: 'exec-304',
    specialistId: 'persona-3',
    timestamp: '2026-04-06T09:15:00Z',
    trigger: { id: 'trig-304', label: 'Scheduled monthly compliance check', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0,    description: 'Monthly compliance check trigger fired',                              actionCategory: 'scheduling'    },
      { offsetMs: 1500, description: 'Verified all employee certifications are current (32 of 32 valid)',   actionCategory: 'data_cleanup'  },
      { offsetMs: 3200, description: 'Checked vendor contract expiry dates — 1 NDA expiring in 14 days',   actionCategory: 'data_cleanup'  },
      { offsetMs: 4600, description: 'Sent expiry warning to procurement team for the near-expiring NDA',  actionCategory: 'communication', channel: 'email' },
      { offsetMs: 5100, description: 'Posted monthly compliance status summary to #legal-updates',         actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5500,
    tokensUsed: 1310,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Monthly compliance check passed — 1 vendor NDA expiry warning sent',
    outcomeSummaryFull: 'The monthly compliance check found all 32 employee certifications current. One vendor NDA was identified as expiring in 14 days, and a warning was sent to the procurement team. A full status summary was posted to #legal-updates.',
    feedback: 'up',
  },
  {
    id: 'exec-305',
    specialistId: 'persona-3',
    timestamp: '2026-04-05T13:00:00Z',
    trigger: { id: 'trig-305', label: 'Policy exception request submitted', type: 'form_submission' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,   description: 'Received policy exception request for remote work outside approved countries', actionCategory: 'data_cleanup' },
      { offsetMs: 700, description: 'Reviewed request against current remote work and tax nexus policies',  actionCategory: 'data_cleanup'  },
      { offsetMs: 1600, description: 'Identified potential tax nexus risk in requested country',             actionCategory: 'data_cleanup'  },
      { offsetMs: 2100, description: 'Escalated to legal counsel with risk summary before approval',         actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2500,
    tokensUsed: 720,
    outcomeStatus: 'escalated',
    outcomeSummaryShort: 'Policy exception escalated — potential tax nexus risk identified',
    outcomeSummaryFull: 'A policy exception was requested for remote work from a country outside the approved list. The specialist identified a potential tax nexus risk and escalated the request to legal counsel with a risk summary before any approval could be granted.',
    feedback: null,
  },
  {
    id: 'exec-306',
    specialistId: 'persona-3',
    timestamp: '2026-04-03T11:45:00Z',
    trigger: { id: 'trig-306', label: 'Vendor NDA request via email', type: 'inbound_email' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,    description: 'Received NDA request from prospective vendor',                        actionCategory: 'communication', channel: 'email' },
      { offsetMs: 500,  description: 'Confirmed standard mutual NDA template applies to this vendor type',  actionCategory: 'data_cleanup'  },
      { offsetMs: 1100, description: 'Generated pre-populated NDA from standard template with vendor details', actionCategory: 'data_cleanup' },
      { offsetMs: 2000, description: 'Sent NDA draft to vendor and CC\'d legal team for records',           actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2400,
    tokensUsed: 590,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Generated and sent standard NDA to prospective vendor',
    outcomeSummaryFull: 'A prospective vendor requested an NDA. The specialist confirmed the standard mutual NDA template was appropriate, generated a pre-populated draft, and sent it to the vendor with the legal team CC\'d for records.',
    feedback: 'up',
  },
  {
    id: 'exec-307',
    specialistId: 'persona-3',
    timestamp: '2026-04-02T09:00:00Z',
    trigger: { id: 'trig-307', label: 'Policy document indexing failed', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,   description: 'Scheduled policy document re-indexing job triggered',                  actionCategory: 'scheduling'    },
      { offsetMs: 200, description: 'Attempted to access document store — permission denied error returned', actionCategory: 'data_cleanup'  },
    ],
    durationMs: 250,
    tokensUsed: 0,
    outcomeStatus: 'error',
    outcomeSummaryShort: 'Policy document indexing failed — permission denied',
    outcomeSummaryFull: 'The scheduled policy document re-indexing job triggered but received a permission denied error when attempting to access the document store. No documents were indexed. The IT team was notified to review service account permissions.',
    feedback: 'down',
  },

  // persona-3 prior period (Mar 25–31)
  { id: 'exec-p301', specialistId: 'persona-3', timestamp: '2026-03-31T13:00:00Z',
    trigger: { id: 'trig-p301', label: 'Compliance question in #legal', type: 'chat_message' }, workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0,   description: 'Received question about data breach notification timelines', actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 500, description: 'Retrieved GDPR and state law notification requirements',     actionCategory: 'data_cleanup'  },
      { offsetMs: 1200, description: 'Replied with 72-hour GDPR rule and state-specific deadlines', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1500, tokensUsed: 460, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Answered breach notification deadline question', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p302', specialistId: 'persona-3', timestamp: '2026-03-29T10:30:00Z',
    trigger: { id: 'trig-p302', label: 'Vendor NDA request via email', type: 'inbound_email' }, workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,    description: 'Received NDA request from vendor',                       actionCategory: 'communication', channel: 'email' },
      { offsetMs: 500,  description: 'Generated NDA from standard template',                   actionCategory: 'data_cleanup'  },
      { offsetMs: 1400, description: 'Sent NDA to vendor and CC\'d legal',                     actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1700, tokensUsed: 410, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Sent standard NDA to vendor', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p303', specialistId: 'persona-3', timestamp: '2026-03-28T08:45:00Z',
    trigger: { id: 'trig-p303', label: 'Scheduled monthly compliance check', type: 'scheduled' }, workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0,    description: 'Monthly compliance check trigger fired',                 actionCategory: 'scheduling'    },
      { offsetMs: 1200, description: 'Verified employee certifications — all current',         actionCategory: 'data_cleanup'  },
      { offsetMs: 2800, description: 'Checked vendor contracts — none expiring within 30 days', actionCategory: 'data_cleanup' },
      { offsetMs: 3900, description: 'Posted all-clear status to #legal-updates',              actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 4200, tokensUsed: 980, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Monthly compliance check passed — no issues found', outcomeSummaryFull: '', feedback: 'up' },
  { id: 'exec-p304', specialistId: 'persona-3', timestamp: '2026-03-26T14:00:00Z',
    trigger: { id: 'trig-p304', label: 'Policy exception request submitted', type: 'form_submission' }, workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0,   description: 'Received policy exception request',                        actionCategory: 'data_cleanup' },
      { offsetMs: 600, description: 'Reviewed against current policy — exception approved within guidelines', actionCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Sent approval confirmation with conditions to requester', actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1500, tokensUsed: 380, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Policy exception approved within guidelines', outcomeSummaryFull: '', feedback: null },

  // ════════════════════════════════════════════════════════════════════════════
  // persona-4 — Recruiting Screener
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: 'exec-401',
    specialistId: 'persona-4',
    timestamp: '2026-04-08T15:00:00Z',
    trigger: { id: 'trig-401', label: 'Resume submitted for Senior Engineer role', type: 'form_submission' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Received resume submission for Senior Engineer (Backend) role',       actionCategory: 'data_cleanup'  },
      { offsetMs: 800,  description: 'Extracted skills, experience, and education from resume',             actionCategory: 'data_cleanup'  },
      { offsetMs: 2100, description: 'Scored candidate against JD criteria: 87/100 — strong match',        actionCategory: 'data_cleanup'  },
      { offsetMs: 3000, description: 'Added candidate to ATS with score and summary notes',                actionCategory: 'data_cleanup'  },
      { offsetMs: 3600, description: 'Sent initial screening email to candidate with next steps',           actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4100,
    tokensUsed: 970,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Resume scored 87/100 — candidate advanced to screening round',
    outcomeSummaryFull: 'A resume was submitted for the Senior Engineer (Backend) role. The specialist extracted key qualifications and scored the candidate at 87/100 against the job description criteria. The candidate was added to the ATS and sent an initial screening email with next steps.',
    feedback: 'up',
  },
  {
    id: 'exec-402',
    specialistId: 'persona-4',
    timestamp: '2026-04-08T11:30:00Z',
    trigger: { id: 'trig-402', label: 'Interview scheduling request from recruiter', type: 'chat_message' },
    workflow: WORKFLOWS[10],
    steps: [
      { offsetMs: 0,   description: 'Received scheduling request for 3 panel interviews in #recruiting',    actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 700, description: 'Checked calendar availability for 4 interviewers across 3 time zones', actionCategory: 'scheduling'    },
      { offsetMs: 2000, description: 'Found 2 overlapping windows — proposed Tuesday and Thursday slots',   actionCategory: 'scheduling'    },
      { offsetMs: 2800, description: 'Sent calendar invites to all interviewers and the candidate',         actionCategory: 'communication', channel: 'email' },
      { offsetMs: 3200, description: 'Posted interview schedule summary in #recruiting',                    actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3600,
    tokensUsed: 740,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Scheduled 3 panel interviews across Tuesday and Thursday',
    outcomeSummaryFull: 'A recruiter requested scheduling for three panel interviews. The specialist checked availability for four interviewers across three time zones, found two viable windows on Tuesday and Thursday, and sent calendar invites to all parties with a summary posted in #recruiting.',
    feedback: 'up',
  },
  {
    id: 'exec-403',
    specialistId: 'persona-4',
    timestamp: '2026-04-07T13:45:00Z',
    trigger: { id: 'trig-403', label: 'Bulk resume import from job board', type: 'form_submission' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Received bulk import of 18 resumes from LinkedIn job posting',        actionCategory: 'data_cleanup'  },
      { offsetMs: 1500, description: 'Extracted and scored all 18 resumes against Product Designer JD',    actionCategory: 'data_cleanup'  },
      { offsetMs: 6200, description: '6 candidates scored above threshold (75+), 12 below threshold',      actionCategory: 'data_cleanup'  },
      { offsetMs: 7000, description: 'Added qualifying candidates to ATS; archived below-threshold resumes', actionCategory: 'data_cleanup' },
      { offsetMs: 7800, description: 'Posted screening results summary to #talent-ops',                    actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 8400,
    tokensUsed: 2240,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: '6 of 18 candidates advanced — bulk resume batch processed',
    outcomeSummaryFull: 'A batch of 18 resumes was imported from a LinkedIn job posting for the Product Designer role. The specialist scored all candidates against the JD, advancing 6 who scored above 75 and archiving the remaining 12. Results were posted to #talent-ops.',
    feedback: 'up',
  },
  {
    id: 'exec-404',
    specialistId: 'persona-4',
    timestamp: '2026-04-06T10:00:00Z',
    trigger: { id: 'trig-404', label: 'Interview rescheduling request from candidate', type: 'inbound_email' },
    workflow: WORKFLOWS[10],
    steps: [
      { offsetMs: 0,    description: 'Received email from candidate requesting to reschedule Thursday interview', actionCategory: 'communication', channel: 'email' },
      { offsetMs: 500,  description: 'Checked interviewer availability for alternative slots this week',    actionCategory: 'scheduling'    },
      { offsetMs: 1400, description: 'No interviewer overlap found for remaining days this week',            actionCategory: 'scheduling'    },
      { offsetMs: 1800, description: 'Flagged rescheduling to recruiter — requires manual coordination for next week', actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2100,
    tokensUsed: 390,
    outcomeStatus: 'escalated',
    outcomeSummaryShort: 'Reschedule request escalated — no slots available this week',
    outcomeSummaryFull: 'A candidate requested to reschedule their Thursday interview. The specialist checked interviewer availability for the remainder of the week but found no overlapping slots. The request was escalated to the recruiter for manual coordination into next week.',
    feedback: null,
  },
  {
    id: 'exec-405',
    specialistId: 'persona-4',
    timestamp: '2026-04-05T14:30:00Z',
    trigger: { id: 'trig-405', label: 'Candidate rejection batch via form', type: 'form_submission' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Received rejection batch form for 8 candidates from last week\'s screen', actionCategory: 'data_cleanup' },
      { offsetMs: 400,  description: 'Updated ATS status to Rejected for all 8 candidates',                 actionCategory: 'data_cleanup'  },
      { offsetMs: 900,  description: 'Generated personalized rejection emails using template and role context', actionCategory: 'communication', channel: 'email' },
      { offsetMs: 1800, description: 'Sent rejection emails to all 8 candidates',                           actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2200,
    tokensUsed: 620,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Sent 8 personalized rejection emails and updated ATS',
    outcomeSummaryFull: 'A rejection batch was submitted for 8 candidates from last week\'s screening round. The specialist updated their ATS status, generated personalized rejection emails using the role context, and sent all 8 emails. All ATS records were confirmed updated.',
    feedback: null,
  },
  {
    id: 'exec-406',
    specialistId: 'persona-4',
    timestamp: '2026-04-04T09:00:00Z',
    trigger: { id: 'trig-406', label: 'Resume submitted — incomplete application', type: 'form_submission' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,   description: 'Received resume submission for Operations Manager role',               actionCategory: 'data_cleanup'  },
      { offsetMs: 600, description: 'Detected missing required fields: cover letter and salary expectation', actionCategory: 'data_cleanup'  },
    ],
    durationMs: 700,
    tokensUsed: 80,
    outcomeStatus: 'unresolved',
    outcomeSummaryShort: 'Application incomplete — missing cover letter and salary expectation',
    outcomeSummaryFull: 'A resume was submitted for the Operations Manager role but the application was missing two required fields: a cover letter and salary expectation. The specialist flagged the incomplete submission and did not score or advance the candidate. An email was queued for the candidate but not sent as the email field was also empty.',
    feedback: null,
  },
  {
    id: 'exec-407',
    specialistId: 'persona-4',
    timestamp: '2026-04-03T16:00:00Z',
    trigger: { id: 'trig-407', label: 'Scheduled weekly pipeline report', type: 'scheduled' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Weekly recruiting pipeline report trigger fired',                     actionCategory: 'scheduling'    },
      { offsetMs: 1000, description: 'Aggregated pipeline data: 24 active candidates across 6 open roles', actionCategory: 'data_cleanup'  },
      { offsetMs: 3200, description: 'Computed stage conversion rates and average time-to-screen metrics',  actionCategory: 'data_cleanup'  },
      { offsetMs: 4800, description: 'Generated pipeline report with funnel visualization',                 actionCategory: 'data_cleanup'  },
      { offsetMs: 5600, description: 'Sent report to HR director and posted summary to #talent-ops',        actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 6100,
    tokensUsed: 1540,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Weekly pipeline report generated — 24 candidates across 6 roles',
    outcomeSummaryFull: 'The weekly recruiting pipeline report was generated for 24 active candidates across 6 open roles. The specialist computed stage conversion rates and time-to-screen metrics, produced a funnel report, and sent it to the HR director with a summary in #talent-ops.',
    feedback: 'up',
  },
  {
    id: 'exec-408',
    specialistId: 'persona-4',
    timestamp: '2026-04-02T11:15:00Z',
    trigger: { id: 'trig-408', label: 'Offer letter request from hiring manager', type: 'inbound_email' },
    workflow: WORKFLOWS[10],
    steps: [
      { offsetMs: 0,    description: 'Received offer letter request for accepted candidate',                actionCategory: 'communication', channel: 'email' },
      { offsetMs: 500,  description: 'Retrieved approved compensation package and start date from ATS',    actionCategory: 'data_cleanup'  },
      { offsetMs: 1300, description: 'Generated offer letter from template with candidate and role details', actionCategory: 'data_cleanup' },
      { offsetMs: 2100, description: 'Sent offer letter to candidate and CC\'d hiring manager and HR',     actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2500,
    tokensUsed: 680,
    outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Offer letter generated and sent to candidate',
    outcomeSummaryFull: 'A hiring manager requested an offer letter for an accepted candidate. The specialist retrieved the approved compensation package from the ATS, generated the letter from the standard template, and sent it to the candidate with the hiring manager and HR copied.',
    feedback: 'up',
  },

  // persona-4 prior period (Mar 25–31)
  { id: 'exec-p401', specialistId: 'persona-4', timestamp: '2026-03-31T14:00:00Z',
    trigger: { id: 'trig-p401', label: 'Resume submitted for Designer role', type: 'form_submission' }, workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Received resume for Product Designer role',         actionCategory: 'data_cleanup'  },
      { offsetMs: 700,  description: 'Scored candidate against JD — 79/100',             actionCategory: 'data_cleanup'  },
      { offsetMs: 1600, description: 'Added to ATS and sent initial outreach email',      actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1900, tokensUsed: 490, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Resume scored 79/100 — candidate advanced', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p402', specialistId: 'persona-4', timestamp: '2026-03-30T10:00:00Z',
    trigger: { id: 'trig-p402', label: 'Interview scheduling request', type: 'chat_message' }, workflow: WORKFLOWS[10],
    steps: [
      { offsetMs: 0,    description: 'Received scheduling request for 2 interviews',       actionCategory: 'communication', channel: 'chat' },
      { offsetMs: 800,  description: 'Found available slots for both interviewer groups',   actionCategory: 'scheduling'    },
      { offsetMs: 1700, description: 'Sent calendar invites and posted schedule summary',   actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2000, tokensUsed: 410, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Scheduled 2 interviews', outcomeSummaryFull: '', feedback: 'up' },
  { id: 'exec-p403', specialistId: 'persona-4', timestamp: '2026-03-28T13:00:00Z',
    trigger: { id: 'trig-p403', label: 'Scheduled weekly pipeline report', type: 'scheduled' }, workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Weekly pipeline report trigger fired',                actionCategory: 'scheduling'    },
      { offsetMs: 900,  description: 'Aggregated 18 active candidates across 5 open roles', actionCategory: 'data_cleanup' },
      { offsetMs: 3000, description: 'Generated pipeline report and sent to HR director',   actionCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3400, tokensUsed: 890, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Weekly pipeline report sent — 18 candidates across 5 roles', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p404', specialistId: 'persona-4', timestamp: '2026-03-27T09:30:00Z',
    trigger: { id: 'trig-p404', label: 'Bulk resume import from job board', type: 'form_submission' }, workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0,    description: 'Received bulk import of 10 resumes',                 actionCategory: 'data_cleanup'  },
      { offsetMs: 1200, description: 'Scored all 10 resumes — 3 above threshold, 7 below', actionCategory: 'data_cleanup'  },
      { offsetMs: 2100, description: 'Archived below-threshold; added qualifying to ATS',  actionCategory: 'data_cleanup'  },
    ],
    durationMs: 2400, tokensUsed: 680, outcomeStatus: 'partial',
    outcomeSummaryShort: '3 of 10 candidates advanced from bulk import', outcomeSummaryFull: '', feedback: null },
  { id: 'exec-p405', specialistId: 'persona-4', timestamp: '2026-03-25T15:30:00Z',
    trigger: { id: 'trig-p405', label: 'Offer letter request from hiring manager', type: 'inbound_email' }, workflow: WORKFLOWS[10],
    steps: [
      { offsetMs: 0,    description: 'Received offer letter request',                      actionCategory: 'communication', channel: 'email' },
      { offsetMs: 500,  description: 'Retrieved compensation package from ATS',            actionCategory: 'data_cleanup'  },
      { offsetMs: 1200, description: 'Generated and sent offer letter to candidate',       actionCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1500, tokensUsed: 360, outcomeStatus: 'resolved',
    outcomeSummaryShort: 'Offer letter generated and sent', outcomeSummaryFull: '', feedback: 'up' },
];

// ── Time-range helpers ────────────────────────────────────────────────────────

export const MOCK_NOW = new Date('2026-04-09T00:00:00Z');

export interface TimeWindow {
  from: Date;
  to: Date;
}

export function getWindow(range: TimeRange, now: Date = MOCK_NOW): TimeWindow {
  const to = now;
  const from = new Date(now);
  if (range === '24h') from.setHours(from.getHours() - 24);
  if (range === '7d')  from.setDate(from.getDate() - 7);
  if (range === '30d') from.setDate(from.getDate() - 30);
  return { from, to };
}

export function getPriorWindow(range: TimeRange, now: Date = MOCK_NOW): TimeWindow {
  const { from, to } = getWindow(range, now);
  const duration = to.getTime() - from.getTime();
  return {
    from: new Date(from.getTime() - duration),
    to:   from,
  };
}

export function filterByWindow(
  records: ExecutionRecord[],
  window: TimeWindow,
): ExecutionRecord[] {
  return records.filter(r => {
    const ts = new Date(r.timestamp).getTime();
    return ts >= window.from.getTime() && ts < window.to.getTime();
  });
}

// ── Stat computation ──────────────────────────────────────────────────────────

export interface UsageStats {
  totalRuns: number;
  successRate: number;
  avgDurationMs: number;
  totalTokens: number;
}

export function computeStats(records: ExecutionRecord[]): UsageStats {
  const totalRuns = records.length;
  const successCount = records.filter(
    r => r.outcomeStatus === 'resolved' || r.outcomeStatus === 'partial',
  ).length;
  const successRate = totalRuns > 0 ? (successCount / totalRuns) * 100 : 0;
  const avgDurationMs =
    totalRuns > 0
      ? records.reduce((sum, r) => sum + r.durationMs, 0) / totalRuns
      : 0;
  const totalTokens = records.reduce((sum, r) => sum + r.tokensUsed, 0);
  return { totalRuns, successRate, avgDurationMs, totalTokens };
}

export function pctChange(current: number, prior: number): number | null {
  if (prior === 0) return null;
  return ((current - prior) / prior) * 100;
}
