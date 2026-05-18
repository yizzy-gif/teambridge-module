// Execution records for AI Specialist usage tracking.
// All stat cards and chart data are derived by filtering + reducing this array.
// Swap the MOCK_EXECUTIONS export for a real API call when the backend is ready.

// ── Types ─────────────────────────────────────────────────────────────────────

export type ToolCategory = 'communication' | 'data_cleanup' | 'scheduling';
export type CommunicationChannel = 'chat' | 'email' | 'sms';
export type FeedbackValue = 'up' | 'down' | null;
export type TimeRange = '24h' | '7d' | '30d' | 'all';
export type SpecialistType = 'engage' | 'engage_less';
export type ActivationSource = 'workflow' | 'ponder';
export type EngagelessRunStatus = 'success' | 'in_progress' | 'incomplete';
export type EngageUserOutcome = 'goal_achieved' | 'completed_no_action' | 'in_progress';

export interface ConversationMessage {
  role: 'agent' | 'user';
  content: string;
}

export interface ConversationRecord {
  id: string;
  contactName: string;
  outcome: EngageUserOutcome;
  summary: string;
  thread: ConversationMessage[];
}

/** @deprecated Use ConversationRecord instead */
export type Conversation = ConversationRecord;

export interface Workflow { id: string; name: string; href: string; }
export interface TriggerSource { id: string; label: string; type: string; }
export interface ExecutionStep {
  offsetMs: number;
  /** Free-form description — used as the Outcome column for engage-less rows. */
  description: string;
  toolCategory: ToolCategory;
  channel?: CommunicationChannel;
  /** Short, polished label for the tool/action invoked (e.g. "Scan records").
   *  Surfaced in the engage-less Tool/Outcome table. When omitted, the table
   *  derives one from `description` via {@link deriveToolName}. */
  tool?: string;
}

export interface EngagelessExecution {
  id: string;
  specialistId: string;
  personaName: string;
  deploymentId: string;
  deploymentType: 'engage_less';
  activatedBy: ActivationSource;
  timestamp: string;
  trigger: TriggerSource;
  workflow: Workflow;
  steps: ExecutionStep[];
  durationMs: number;
  creditsUsed: number;
  status: EngagelessRunStatus;
  goal: string;
  outcomeSummaryFull: string;
  feedback: FeedbackValue;
}

export interface EngageExecution {
  id: string;
  specialistId: string;
  personaName: string;
  deploymentId: string;
  deploymentType: 'engage';
  activatedBy: ActivationSource;
  timestamp: string;
  trigger: TriggerSource;
  workflow: Workflow;
  steps: ExecutionStep[];
  durationMs: number;
  creditsUsed: number;
  goal: string;
  conversations: ConversationRecord[];
  outcomeSummaryFull: string;
  feedback: FeedbackValue;
}

export type ExecutionRecord = EngagelessExecution | EngageExecution;

export type DeploymentStatus = 'active' | 'paused';
export interface Deployment { id: string; personaId: string; workflow: Workflow; status: DeploymentStatus; type: SpecialistType; }
export interface PersonaUsageMeta { personaId: string; period: string; triggersReceived: number; triggersExecuted: number; }

// ── Plan constants ────────────────────────────────────────────────────────────

/** Workspace's monthly credit allowance. Drives the credit usage bar on the
 *  AI Usage page; the bar always reports against this cap regardless of the
 *  user's selected time range. */
export const MONTHLY_CREDIT_ALLOCATION = 500_000;

// ── Workflows ─────────────────────────────────────────────────────────────────

export const WORKFLOWS: Workflow[] = [
  { id: 'wf-001', name: 'Employee Profile Updates', href: '/workflows/wf-001' },
  { id: 'wf-002', name: 'Benefits Enrollment', href: '/workflows/wf-002' },
  { id: 'wf-003', name: 'Shift Coverage & Swaps', href: '/workflows/wf-003' },
  { id: 'wf-004', name: 'Schedule Change Notifications', href: '/workflows/wf-004' },
  { id: 'wf-005', name: 'New Hire Onboarding Checklist', href: '/workflows/wf-005' },
  { id: 'wf-006', name: 'Document Collection & Compliance', href: '/workflows/wf-006' },
  { id: 'wf-007', name: 'Customer Ticket Triage', href: '/workflows/wf-007' },
  { id: 'wf-008', name: 'Weekly Data Audit', href: '/workflows/wf-008' },
  { id: 'wf-009', name: 'Record Cleanup & Dedup', href: '/workflows/wf-009' },
  { id: 'wf-010', name: 'Ops Reporting', href: '/workflows/wf-010' },
];

// ── Deployments ───────────────────────────────────────────────────────────────

export const DEPLOYMENTS: Deployment[] = [
  // Erin (persona-001) — HR / People Ops
  { id: 'dep-001', personaId: 'persona-001', workflow: WORKFLOWS[0], status: 'active', type: 'engage' },
  { id: 'dep-002', personaId: 'persona-001', workflow: WORKFLOWS[1], status: 'active', type: 'engage' },
  { id: 'dep-003', personaId: 'persona-001', workflow: WORKFLOWS[7], status: 'active', type: 'engage_less' },

  // Sched (persona-002) — Scheduling / Shift Management
  { id: 'dep-004', personaId: 'persona-002', workflow: WORKFLOWS[2], status: 'active', type: 'engage' },
  { id: 'dep-005', personaId: 'persona-002', workflow: WORKFLOWS[3], status: 'active', type: 'engage' },
  { id: 'dep-006', personaId: 'persona-002', workflow: WORKFLOWS[2], status: 'paused', type: 'engage_less' },

  // Onbi (persona-003) — Onboarding
  { id: 'dep-007', personaId: 'persona-003', workflow: WORKFLOWS[4], status: 'active', type: 'engage' },
  { id: 'dep-008', personaId: 'persona-003', workflow: WORKFLOWS[5], status: 'active', type: 'engage_less' },
  { id: 'dep-009', personaId: 'persona-003', workflow: WORKFLOWS[4], status: 'active', type: 'engage_less' },

  // Cassie (persona-004) — Customer Support (Engage only)
  { id: 'dep-010', personaId: 'persona-004', workflow: WORKFLOWS[6], status: 'active', type: 'engage' },

  // DataOps (persona-005) — Operations / Data Management (Engage-less only)
  { id: 'dep-011', personaId: 'persona-005', workflow: WORKFLOWS[7], status: 'active', type: 'engage_less' },
  { id: 'dep-012', personaId: 'persona-005', workflow: WORKFLOWS[8], status: 'active', type: 'engage_less' },
  { id: 'dep-013', personaId: 'persona-005', workflow: WORKFLOWS[9], status: 'active', type: 'engage_less' },
];

// ── Executions ────────────────────────────────────────────────────────────────

export const MOCK_EXECUTIONS: ExecutionRecord[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // ERIN (persona-001) — 5 executions
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-001: Erin engage — Employee profile update
  {
    id: 'exec-001',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-001',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-09T14:05:00Z',
    trigger: { id: 'trig-001', label: 'Profile update request from Amy Chen', type: 'form_submission' },
    workflow: WORKFLOWS[0],
    steps: [
      { offsetMs: 0, description: 'Received profile update request form', toolCategory: 'data_cleanup' },
      { offsetMs: 800, description: 'Validated new address and emergency contact', toolCategory: 'data_cleanup' },
      { offsetMs: 2400, description: 'Sent confirmation to Amy via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3200,
    creditsUsed: 350,
    goal: 'Help employees update their profile information accurately',
    conversations: [
      {
        id: 'conv-001',
        contactName: 'Amy Chen',
        outcome: 'goal_achieved',
        summary: 'Erin helped Amy update her home address and emergency contact after her recent move.',
        thread: [
          { role: 'agent', content: 'Hi Amy! I received your profile update request. I see you want to change your home address and emergency contact. Let me pull up your current info.' },
          { role: 'user', content: 'Yes, I moved last month. New address is 742 Evergreen Terrace, Springfield.' },
          { role: 'agent', content: 'Got it! I\'ve updated your address to 742 Evergreen Terrace, Springfield. I also see you want to update your emergency contact \u2014 who should that be?' },
          { role: 'user', content: 'My partner, Jordan Chen. Phone is 555-0147.' },
          { role: 'agent', content: 'Done! Your emergency contact is now Jordan Chen at 555-0147. Both changes are saved. Is there anything else you need?' },
          { role: 'user', content: 'No, that\'s everything. Thanks!' },
        ],
      },
      {
        id: 'conv-002',
        contactName: 'Marcus Rivera',
        outcome: 'goal_achieved',
        summary: 'Marcus updated his legal name and tax withholding with Erin\'s assistance.',
        thread: [
          { role: 'agent', content: 'Hi Marcus, I see you submitted a profile update. It looks like you want to change your legal name. I\'ll need to verify a few things first.' },
          { role: 'user', content: 'Sure. My new legal name is Marcus A. Rivera. I also need to update my W-4 withholding.' },
          { role: 'agent', content: 'I\'ve updated your legal name. For the W-4 change, I\'ll need your new filing status and number of allowances.' },
          { role: 'user', content: 'Married filing jointly, 2 allowances.' },
          { role: 'agent', content: 'All set! Name updated and W-4 withholding changed to MFJ with 2 allowances. You\'ll see the payroll change reflected next pay cycle.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Processed two employee profile updates: Amy Chen updated her address and emergency contact; Marcus Rivera updated his legal name and tax withholding. Both changes validated and saved.',
    feedback: 'up',
  },

  // exec-002: Erin engage — Benefits enrollment
  {
    id: 'exec-002',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-002',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-11T09:30:00Z',
    trigger: { id: 'trig-002', label: 'Open enrollment window reminder', type: 'scheduled' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0, description: 'Triggered benefits enrollment outreach', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Identified 3 employees who haven\'t enrolled', toolCategory: 'data_cleanup' },
      { offsetMs: 1800, description: 'Sent reminders via email', toolCategory: 'communication', channel: 'email' },
      { offsetMs: 3200, description: 'Followed up with direct chat messages', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 4100,
    creditsUsed: 500,
    goal: 'Ensure all eligible employees complete benefits enrollment before the deadline',
    conversations: [
      {
        id: 'conv-003',
        contactName: 'Priya Patel',
        outcome: 'goal_achieved',
        summary: 'Priya completed her dental and vision enrollment after Erin walked her through the options.',
        thread: [
          { role: 'agent', content: 'Hi Priya! Just a reminder that open enrollment closes this Friday. I noticed you haven\'t selected your dental and vision plans yet. Would you like help choosing?' },
          { role: 'user', content: 'Oh I forgot about that. What are my options for dental?' },
          { role: 'agent', content: 'You have two dental options: Basic (covers preventive at 100%, major at 50%, $18/mo) or Premium (covers preventive at 100%, major at 80%, ortho included, $34/mo). Which sounds better for your needs?' },
          { role: 'user', content: 'I\'ll go with Premium since I might need braces next year.' },
          { role: 'agent', content: 'Great choice! I\'ve enrolled you in the Premium dental plan. For vision, the standard plan covers an annual exam and $150 toward frames. Want to add that too?' },
          { role: 'user', content: 'Yes, add the vision plan. Thanks for the help!' },
          { role: 'agent', content: 'You\'re all set! Premium dental + standard vision are now active. You\'ll get a confirmation email shortly.' },
        ],
      },
      {
        id: 'conv-004',
        contactName: 'Jake Morrison',
        outcome: 'completed_no_action',
        summary: 'Jake confirmed he intentionally opted out of supplemental benefits this year.',
        thread: [
          { role: 'agent', content: 'Hi Jake, this is a friendly reminder that benefits enrollment closes Friday. You haven\'t made any selections yet. Need any help?' },
          { role: 'user', content: 'No thanks, I\'m staying on my spouse\'s plan this year. I don\'t need any of the supplemental options.' },
          { role: 'agent', content: 'Understood! I\'ll mark you as intentionally opted out. If anything changes, you can always reach out before the deadline.' },
        ],
      },
      {
        id: 'conv-005',
        contactName: 'Taylor Kim',
        outcome: 'in_progress',
        summary: 'Taylor asked for more time to review options with their partner before deciding.',
        thread: [
          { role: 'agent', content: 'Hi Taylor! Open enrollment closes Friday. Would you like help selecting your benefits?' },
          { role: 'user', content: 'I need to talk to my partner first. Can I get back to you tomorrow?' },
          { role: 'agent', content: 'Of course! I\'ll follow up tomorrow afternoon. The deadline is Friday at 5 PM, so there\'s still time.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Reached out to 3 employees about open enrollment. Priya Patel completed dental and vision enrollment. Jake Morrison confirmed intentional opt-out. Taylor Kim requested follow-up tomorrow.',
    feedback: null,
  },

  // exec-003: Erin engage-less — Weekly data audit for HR records
  {
    id: 'exec-003',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-003',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-07T06:15:00Z',
    trigger: { id: 'trig-003', label: 'Weekly HR data audit scheduled', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Weekly HR data audit initiated', toolCategory: 'scheduling' },
      { offsetMs: 1500, description: 'Scanned 850 employee records for missing fields', toolCategory: 'data_cleanup' },
      { offsetMs: 3800, description: 'Found 6 records with outdated manager assignments', toolCategory: 'data_cleanup' },
      { offsetMs: 5200, description: 'Auto-corrected 4 based on recent org chart changes', toolCategory: 'data_cleanup' },
      { offsetMs: 6100, description: 'Flagged 2 records for manual HR review', toolCategory: 'data_cleanup' },
      { offsetMs: 6800, description: 'Posted audit summary to #hr-ops channel', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 7200,
    creditsUsed: 9660,
    status: 'success',
    goal: 'Identify and resolve data inconsistencies in HR employee records',
    outcomeSummaryFull: 'Weekly HR data audit scanned 850 employee records. Found 6 with outdated manager assignments, auto-corrected 4 using the latest org chart, and flagged 2 for manual review. Summary posted to #hr-ops.',
    feedback: 'up',
  },

  // exec-004: Erin engage — Another profile update batch
  {
    id: 'exec-004',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-001',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-13T11:00:00Z',
    trigger: { id: 'trig-004', label: 'Profile update request from Robin Lee', type: 'form_submission' },
    workflow: WORKFLOWS[0],
    steps: [
      { offsetMs: 0, description: 'Received profile update form', toolCategory: 'data_cleanup' },
      { offsetMs: 600, description: 'Validated phone number format', toolCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Sent confirmation via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1800,
    creditsUsed: 270,
    goal: 'Help employees update their profile information accurately',
    conversations: [
      {
        id: 'conv-006',
        contactName: 'Robin Lee',
        outcome: 'goal_achieved',
        summary: 'Robin updated their phone number and preferred pronouns.',
        thread: [
          { role: 'agent', content: 'Hi Robin! I got your profile update request. You want to change your phone number and add preferred pronouns, correct?' },
          { role: 'user', content: 'Yes! New phone is 555-0283 and pronouns are they/them.' },
          { role: 'agent', content: 'Updated! Phone number is now 555-0283 and pronouns set to they/them. These will appear on your internal profile and directory listing.' },
          { role: 'user', content: 'Perfect, thanks!' },
        ],
      },
      {
        id: 'conv-007',
        contactName: 'Devon Okafor',
        outcome: 'goal_achieved',
        summary: 'Devon changed their direct deposit information with verification.',
        thread: [
          { role: 'agent', content: 'Hi Devon, I see a request to update your direct deposit info. For security, I\'ll need to verify your identity first. Can you confirm the last four digits of your SSN?' },
          { role: 'user', content: 'Last four is 7291.' },
          { role: 'agent', content: 'Verified! Please share your new bank routing and account numbers.' },
          { role: 'user', content: 'Routing: 021000021, Account: 483920174.' },
          { role: 'agent', content: 'Your direct deposit has been updated. The change will take effect next pay period. You\'ll get a confirmation email.' },
          { role: 'user', content: 'Great, appreciate it.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Processed two profile updates: Robin Lee updated phone and pronouns; Devon Okafor updated direct deposit with identity verification. All changes saved successfully.',
    feedback: null,
  },

  // exec-005: Erin engage-less — HR data audit (second run)
  {
    id: 'exec-005',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-003',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-14T06:15:00Z',
    trigger: { id: 'trig-005', label: 'Weekly HR data audit scheduled', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Weekly HR data audit initiated', toolCategory: 'scheduling' },
      { offsetMs: 1200, description: 'Scanned 852 employee records', toolCategory: 'data_cleanup' },
      { offsetMs: 3100, description: 'Found 3 records with missing department codes', toolCategory: 'data_cleanup' },
      { offsetMs: 4200, description: 'All 3 auto-corrected using org chart', toolCategory: 'data_cleanup' },
      { offsetMs: 4900, description: 'Posted audit summary to #hr-ops', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5400,
    creditsUsed: 8740,
    status: 'success',
    goal: 'Identify and resolve data inconsistencies in HR employee records',
    outcomeSummaryFull: 'Weekly HR audit scanned 852 records. Found 3 with missing department codes; all were auto-corrected via org chart mapping. Zero manual flags this week.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCHED (persona-002) — 4 executions
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-006: Sched engage — Shift coverage outreach
  {
    id: 'exec-006',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-004',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-08T07:30:00Z',
    trigger: { id: 'trig-006', label: 'Shift coverage needed for warehouse team', type: 'manager_request' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Received shift coverage request from manager', toolCategory: 'scheduling' },
      { offsetMs: 600, description: 'Identified 5 eligible employees for the shift', toolCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Sent coverage requests via SMS', toolCategory: 'communication', channel: 'sms' },
      { offsetMs: 3800, description: 'Processed responses and confirmed coverage', toolCategory: 'scheduling' },
    ],
    durationMs: 4500,
    creditsUsed: 590,
    goal: 'Find replacement coverage for open shifts as quickly as possible',
    conversations: [
      {
        id: 'conv-008',
        contactName: 'Luis Hernandez',
        outcome: 'goal_achieved',
        summary: 'Luis agreed to cover the Saturday morning warehouse shift.',
        thread: [
          { role: 'agent', content: 'Hi Luis, there\'s an open shift this Saturday 6AM-2PM at the warehouse. Are you available to cover?' },
          { role: 'user', content: 'Yeah I can do that. Overtime rate?' },
          { role: 'agent', content: 'Yes, it qualifies for 1.5x overtime since it\'s your 6th day this week. I\'ll confirm you for the shift.' },
          { role: 'user', content: 'Sounds good, sign me up.' },
          { role: 'agent', content: 'You\'re confirmed for Saturday 6AM-2PM warehouse shift. I\'ve notified your manager. Thanks, Luis!' },
        ],
      },
      {
        id: 'conv-009',
        contactName: 'Mei Zhang',
        outcome: 'completed_no_action',
        summary: 'Mei was unavailable due to a family event but thanked Sched for asking.',
        thread: [
          { role: 'agent', content: 'Hi Mei, there\'s an open Saturday morning shift at the warehouse. Would you be able to cover 6AM-2PM?' },
          { role: 'user', content: 'Sorry, I have a family thing Saturday. Can\'t make it this time.' },
          { role: 'agent', content: 'No problem at all! I\'ll check with others. Have a great weekend, Mei.' },
        ],
      },
      {
        id: 'conv-010',
        contactName: 'Andre Williams',
        outcome: 'completed_no_action',
        summary: 'Andre declined due to his child\'s soccer game.',
        thread: [
          { role: 'agent', content: 'Hi Andre, we have an open shift Saturday 6AM-2PM at the warehouse. Any chance you can cover?' },
          { role: 'user', content: 'My kid has a soccer game Saturday morning. Can\'t do it this week.' },
          { role: 'agent', content: 'Totally understand! Thanks for letting me know. Enjoy the game!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Shift coverage request for Saturday warehouse shift. Contacted 3 eligible employees: Luis Hernandez accepted at overtime rate, Mei Zhang and Andre Williams were unavailable. Coverage secured.',
    feedback: 'up',
  },

  // exec-007: Sched engage — Schedule change notifications
  {
    id: 'exec-007',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-005',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-10T16:00:00Z',
    trigger: { id: 'trig-007', label: 'Manager updated next week schedule for retail team', type: 'schedule_change' },
    workflow: WORKFLOWS[3],
    steps: [
      { offsetMs: 0, description: 'Detected schedule changes for retail team', toolCategory: 'scheduling' },
      { offsetMs: 400, description: 'Computed affected employees (4 shift changes)', toolCategory: 'data_cleanup' },
      { offsetMs: 1000, description: 'Sent personalized schedule update notifications', toolCategory: 'communication', channel: 'sms' },
      { offsetMs: 2800, description: 'Collected acknowledgments', toolCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 3400,
    creditsUsed: 460,
    goal: 'Notify employees of schedule changes and collect acknowledgments',
    conversations: [
      {
        id: 'conv-011',
        contactName: 'Sam Torres',
        outcome: 'goal_achieved',
        summary: 'Sam acknowledged her new Tuesday start time.',
        thread: [
          { role: 'agent', content: 'Hi Sam, your shift next Tuesday has been updated. New time: 10AM-6PM (was 8AM-4PM). Please reply OK to acknowledge.' },
          { role: 'user', content: 'OK, thanks for the heads up.' },
        ],
      },
      {
        id: 'conv-012',
        contactName: 'Nina Johansson',
        outcome: 'goal_achieved',
        summary: 'Nina confirmed her additional Thursday shift.',
        thread: [
          { role: 'agent', content: 'Hi Nina, you\'ve been added to the Thursday closing shift next week (3PM-11PM). Can you confirm you\'re available?' },
          { role: 'user', content: 'That works for me. I\'ll be there.' },
          { role: 'agent', content: 'Thanks, Nina! You\'re confirmed for Thursday 3PM-11PM.' },
        ],
      },
      {
        id: 'conv-013',
        contactName: 'Chris Dalton',
        outcome: 'in_progress',
        summary: 'Chris hasn\'t responded to the schedule change notification yet.',
        thread: [
          { role: 'agent', content: 'Hi Chris, your Wednesday shift has been moved to Thursday 8AM-4PM next week. Please reply to confirm.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Notified 3 retail team members of schedule changes. Sam Torres and Nina Johansson acknowledged. Chris Dalton has not yet responded; follow-up queued for tomorrow morning.',
    feedback: null,
  },

  // exec-008: Sched engage-less — Auto shift reconciliation
  {
    id: 'exec-008',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-006',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-12T05:00:00Z',
    trigger: { id: 'trig-008', label: 'Weekly shift reconciliation for all locations', type: 'scheduled' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Shift reconciliation job started', toolCategory: 'scheduling' },
      { offsetMs: 2000, description: 'Compared scheduled shifts vs time-clock entries for 120 employees', toolCategory: 'data_cleanup' },
      { offsetMs: 5500, description: 'Detected 8 discrepancies across 3 locations', toolCategory: 'data_cleanup' },
      { offsetMs: 7200, description: 'Auto-resolved 5 minor clock-in rounding differences', toolCategory: 'data_cleanup' },
      { offsetMs: 8600, description: 'Flagged 3 significant discrepancies for manager review', toolCategory: 'data_cleanup' },
      { offsetMs: 9200, description: 'Sent reconciliation report to managers via email', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 9800,
    creditsUsed: 10890,
    status: 'success',
    goal: 'Reconcile scheduled shifts with actual time-clock entries to detect discrepancies',
    outcomeSummaryFull: 'Weekly shift reconciliation compared 120 employees across 3 locations. Found 8 discrepancies: 5 auto-resolved (rounding differences), 3 flagged for manager review. Report emailed to location managers.',
    feedback: null,
  },

  // exec-009: Sched engage — Ponder-initiated shift swap suggestion
  {
    id: 'exec-009',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-004',
    deploymentType: 'engage',
    activatedBy: 'ponder',
    timestamp: '2026-04-14T10:20:00Z',
    trigger: { id: 'trig-009', label: 'Ponder detected potential scheduling conflict for next week', type: 'ai_suggestion' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Ponder identified overlapping shift requests', toolCategory: 'scheduling' },
      { offsetMs: 800, description: 'Analyzed swap options based on employee preferences', toolCategory: 'data_cleanup' },
      { offsetMs: 1600, description: 'Proposed swap to affected employees via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2400,
    creditsUsed: 400,
    goal: 'Proactively resolve scheduling conflicts before they cause coverage gaps',
    conversations: [
      {
        id: 'conv-014',
        contactName: 'Luis Hernandez',
        outcome: 'goal_achieved',
        summary: 'Luis agreed to swap his Monday for Wednesday to resolve the conflict.',
        thread: [
          { role: 'agent', content: 'Hi Luis, I noticed a potential scheduling conflict next Monday \u2014 you and Mei are both assigned to the morning shift, but we only need one person. Would you be open to swapping to Wednesday morning instead?' },
          { role: 'user', content: 'Wednesday works fine for me. Go ahead and swap it.' },
          { role: 'agent', content: 'Done! You\'re now scheduled for Wednesday morning instead of Monday. Mei will keep the Monday shift. Thanks for being flexible!' },
        ],
      },
      {
        id: 'conv-015',
        contactName: 'Mei Zhang',
        outcome: 'goal_achieved',
        summary: 'Mei confirmed she\'s keeping her Monday shift as originally scheduled.',
        thread: [
          { role: 'agent', content: 'Hi Mei, just a heads up \u2014 I resolved a scheduling overlap for next Monday. You\'ll keep your morning shift as planned. No changes needed on your end.' },
          { role: 'user', content: 'Great, thanks for sorting that out.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Ponder detected a Monday shift overlap between Luis and Mei. Sched proposed a swap: Luis moved to Wednesday, Mei kept Monday. Both confirmed. Conflict resolved proactively.',
    feedback: 'up',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ONBI (persona-003) — 4 executions
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-010: Onbi engage — New hire onboarding conversations
  {
    id: 'exec-010',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-007',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-02T09:00:00Z',
    trigger: { id: 'trig-010', label: 'New hire start date: 3 employees joining April 2', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'New hire onboarding triggered for 3 employees', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Generated personalized welcome packets', toolCategory: 'data_cleanup' },
      { offsetMs: 1800, description: 'Sent welcome messages via email', toolCategory: 'communication', channel: 'email' },
      { offsetMs: 3200, description: 'Followed up with checklist links via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 4000,
    creditsUsed: 620,
    goal: 'Guide new hires through their first-day onboarding checklist',
    conversations: [
      {
        id: 'conv-016',
        contactName: 'Aisha Mahmoud',
        outcome: 'goal_achieved',
        summary: 'Aisha completed all first-day onboarding tasks with Onbi\'s guidance.',
        thread: [
          { role: 'agent', content: 'Welcome to the team, Aisha! I\'m Onbi, your onboarding assistant. I\'ve sent your welcome packet to your email. Let\'s get you set up \u2014 first up, have you been able to log into the employee portal?' },
          { role: 'user', content: 'Thanks! Yes, I logged in this morning. What do I do next?' },
          { role: 'agent', content: 'Great! Next steps: (1) Complete your tax forms in the Benefits section, (2) Upload your ID photo for your badge, and (3) Review the employee handbook. I\'ll check in once you\'re through those.' },
          { role: 'user', content: 'All done with those three! The handbook was really helpful.' },
          { role: 'agent', content: 'Awesome work! Your first-day checklist is 100% complete. Tomorrow I\'ll walk you through your team-specific setup. Enjoy the rest of your first day!' },
        ],
      },
      {
        id: 'conv-017',
        contactName: 'Ryan Brooks',
        outcome: 'in_progress',
        summary: 'Ryan completed portal login but hasn\'t finished tax forms yet.',
        thread: [
          { role: 'agent', content: 'Welcome, Ryan! I\'m Onbi, here to help with onboarding. Have you had a chance to log into the employee portal?' },
          { role: 'user', content: 'Hey! Yes just got in. I\'m having trouble with the tax form though \u2014 it\'s not loading right.' },
          { role: 'agent', content: 'That sounds like a browser issue. Try clearing your cache or switching to Chrome. If it still doesn\'t work, I can send you a direct PDF link as a workaround.' },
          { role: 'user', content: 'Let me try Chrome first. I\'ll message you back if it doesn\'t work.' },
        ],
      },
      {
        id: 'conv-018',
        contactName: 'Sofia Gutierrez',
        outcome: 'goal_achieved',
        summary: 'Sofia completed all onboarding steps and scheduled her team intro meeting.',
        thread: [
          { role: 'agent', content: 'Welcome aboard, Sofia! I\'m your onboarding assistant. Ready to tackle your first-day checklist?' },
          { role: 'user', content: 'Absolutely! I already did the tax forms and uploaded my photo. What\'s left?' },
          { role: 'agent', content: 'You\'re ahead of the game! Just two more items: review the employee handbook and schedule your team intro meeting with your manager. Want me to help find a meeting time?' },
          { role: 'user', content: 'Yes please! Anytime tomorrow afternoon works for me.' },
          { role: 'agent', content: 'I see your manager has tomorrow at 2PM open. I\'ve booked a 30-minute intro meeting for you both. Handbook reviewed?' },
          { role: 'user', content: 'Yep, just finished reading it. All done!' },
          { role: 'agent', content: 'Your first-day onboarding is complete! Meeting set for tomorrow at 2PM. Great start, Sofia!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Onboarded 3 new hires on April 2. Aisha Mahmoud and Sofia Gutierrez completed all first-day tasks. Ryan Brooks is in progress (tax form loading issue). Sofia\'s team intro meeting scheduled.',
    feedback: 'up',
  },

  // exec-011: Onbi engage-less — Document collection audit
  {
    id: 'exec-011',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-008',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-05T07:00:00Z',
    trigger: { id: 'trig-011', label: 'Compliance document audit for Q2 hires', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0, description: 'Document compliance audit started for Q2 hires', toolCategory: 'scheduling' },
      { offsetMs: 1800, description: 'Checked I-9, W-4, and NDA status for 14 recent hires', toolCategory: 'data_cleanup' },
      { offsetMs: 3600, description: 'Found 2 employees missing signed NDAs', toolCategory: 'data_cleanup' },
      { offsetMs: 4200, description: 'Found 1 employee with incomplete I-9 Section 2', toolCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Generated compliance exception report', toolCategory: 'data_cleanup' },
      { offsetMs: 5200, description: 'Emailed report to HR compliance team', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 5600,
    creditsUsed: 8010,
    status: 'success',
    goal: 'Ensure all new hire documents are collected and compliant within required timeframes',
    outcomeSummaryFull: 'Document audit for 14 Q2 hires: 2 missing signed NDAs (Ryan Brooks, Kenji Tanaka) and 1 incomplete I-9 Section 2 (Fatima Al-Said). Exception report sent to HR compliance team.',
    feedback: null,
  },

  // exec-012: Onbi engage-less — Onboarding checklist audit
  {
    id: 'exec-012',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-009',
    deploymentType: 'engage_less',
    activatedBy: 'ponder',
    timestamp: '2026-04-10T08:00:00Z',
    trigger: { id: 'trig-012', label: 'Ponder detected stale onboarding checklists', type: 'ai_suggestion' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Ponder flagged 3 checklists stale for >5 days', toolCategory: 'scheduling' },
      { offsetMs: 900, description: 'Reviewed checklist completion status', toolCategory: 'data_cleanup' },
      { offsetMs: 1800, description: 'Two checklists at 80%+ completion, one at 40%', toolCategory: 'data_cleanup' },
      { offsetMs: 2400, description: 'Sent nudge reminders to HR team via email', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2800,
    creditsUsed: 3470,
    status: 'in_progress',
    goal: 'Ensure onboarding checklists are completed within the target timeframe',
    outcomeSummaryFull: 'Ponder detected 3 onboarding checklists stale for over 5 days. Two are near completion (80%+), one is significantly behind (40%). Nudge reminders sent to HR team for follow-up.',
    feedback: null,
  },

  // exec-013: Onbi engage — Follow-up with new hire who had issues
  {
    id: 'exec-013',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-007',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-03T10:30:00Z',
    trigger: { id: 'trig-013', label: 'Day-2 onboarding follow-up triggered', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Day-2 onboarding follow-up initiated', toolCategory: 'scheduling' },
      { offsetMs: 400, description: 'Checked incomplete items from day 1', toolCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Sent follow-up messages via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1800,
    creditsUsed: 310,
    goal: 'Follow up with new hires who have incomplete onboarding items from day 1',
    conversations: [
      {
        id: 'conv-019',
        contactName: 'Ryan Brooks',
        outcome: 'goal_achieved',
        summary: 'Ryan completed his tax forms after receiving the direct PDF link.',
        thread: [
          { role: 'agent', content: 'Hey Ryan! Following up from yesterday. Were you able to get the tax form working in Chrome?' },
          { role: 'user', content: 'No luck with Chrome either. Can you send me that PDF link you mentioned?' },
          { role: 'agent', content: 'Sure! Here\'s the direct link to the fillable PDF: [link]. Fill it out, sign it, and upload it to the Documents section in your portal.' },
          { role: 'user', content: 'That worked! Just uploaded the completed form.' },
          { role: 'agent', content: 'I can see it in the system. Your day-1 checklist is now 100% complete! Today\'s items: (1) Complete your department safety training and (2) Set up your development environment. Ready to tackle those?' },
          { role: 'user', content: 'On it! Thanks for the help, Onbi.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Day-2 follow-up: Ryan Brooks completed his tax forms via direct PDF workaround. His day-1 checklist is now at 100%. Day-2 items assigned.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CASSIE (persona-004) — 4 executions (Engage only)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-014: Cassie engage — Customer ticket triage batch
  {
    id: 'exec-014',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-06T13:00:00Z',
    trigger: { id: 'trig-014', label: 'New support tickets received (batch of 4)', type: 'ticket_created' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Received batch of 4 new support tickets', toolCategory: 'communication' },
      { offsetMs: 600, description: 'Categorized tickets by priority and type', toolCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Sent initial responses to customers via email', toolCategory: 'communication', channel: 'email' },
      { offsetMs: 3800, description: 'Engaged customers in live chat for urgent tickets', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5200,
    creditsUsed: 780,
    goal: 'Triage incoming support tickets and provide timely first responses',
    conversations: [
      {
        id: 'conv-020',
        contactName: 'Martha Grant',
        outcome: 'goal_achieved',
        summary: 'Cassie resolved Martha\'s billing discrepancy by applying a credit.',
        thread: [
          { role: 'agent', content: 'Hi Martha, thanks for reaching out! I see your ticket about a billing discrepancy on your last invoice. Let me look into that right away.' },
          { role: 'user', content: 'Yes, I was charged $149 but my plan is $99/month. This has happened two months in a row.' },
          { role: 'agent', content: 'I found the issue \u2014 an add-on service was accidentally enabled on your account in February. I\'ve removed it and applied a $100 credit for the overcharges. Your next invoice will reflect the correction.' },
          { role: 'user', content: 'Thank you so much! That was fast.' },
          { role: 'agent', content: 'Happy to help! You\'ll see the $100 credit on your next statement. Is there anything else I can assist with?' },
          { role: 'user', content: 'No, that\'s all. Thanks again!' },
        ],
      },
      {
        id: 'conv-021',
        contactName: 'Derek Foster',
        outcome: 'goal_achieved',
        summary: 'Derek\'s login issue was resolved by resetting his MFA configuration.',
        thread: [
          { role: 'agent', content: 'Hi Derek, I see you\'re having trouble logging in. Can you tell me what error message you\'re seeing?' },
          { role: 'user', content: 'It says my MFA code is invalid every time I try. I changed phones last week.' },
          { role: 'agent', content: 'That explains it \u2014 your MFA is still linked to your old device. I\'ve reset your MFA configuration. You\'ll receive a setup email to register your new phone. Try that and let me know.' },
          { role: 'user', content: 'Got the email and re-registered. I\'m in now!' },
          { role: 'agent', content: 'Glad that worked! Your account is all set. Let me know if you need anything else.' },
        ],
      },
      {
        id: 'conv-022',
        contactName: 'Kelly Zhao',
        outcome: 'in_progress',
        summary: 'Kelly reported a data export bug that needs engineering investigation.',
        thread: [
          { role: 'agent', content: 'Hi Kelly, I received your ticket about the CSV export issue. Can you describe what\'s happening?' },
          { role: 'user', content: 'When I export my report to CSV, the date columns are all showing as Unix timestamps instead of readable dates.' },
          { role: 'agent', content: 'Thanks for the details. I\'ve been able to reproduce this on my end. This looks like it needs an engineering fix. I\'m escalating to our dev team with priority P2. I\'ll keep you updated on the timeline.' },
          { role: 'user', content: 'OK, appreciate you looking into it. How long does P2 usually take?' },
          { role: 'agent', content: 'P2 issues are typically resolved within 3-5 business days. I\'ll follow up with you by Friday with an update either way.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Triaged 3 customer tickets. Martha Grant: billing credit applied, resolved. Derek Foster: MFA reset, resolved. Kelly Zhao: CSV export bug escalated to engineering as P2.',
    feedback: 'up',
  },

  // exec-015: Cassie engage — Follow-up on open tickets
  {
    id: 'exec-015',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-09T10:00:00Z',
    trigger: { id: 'trig-015', label: 'Daily open-ticket follow-up check', type: 'scheduled' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Daily open-ticket follow-up triggered', toolCategory: 'scheduling' },
      { offsetMs: 300, description: 'Found 2 tickets awaiting customer response >24h', toolCategory: 'data_cleanup' },
      { offsetMs: 800, description: 'Sent follow-up emails', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1200,
    creditsUsed: 190,
    goal: 'Follow up on open tickets that have been waiting for customer response',
    conversations: [
      {
        id: 'conv-023',
        contactName: 'Kelly Zhao',
        outcome: 'goal_achieved',
        summary: 'Kelly confirmed the CSV export fix is working after the patch.',
        thread: [
          { role: 'agent', content: 'Hi Kelly, following up on your CSV export issue. Our engineering team deployed a fix yesterday. Could you try exporting your report again?' },
          { role: 'user', content: 'Just tested it \u2014 dates are showing correctly now. Thanks!' },
          { role: 'agent', content: 'Wonderful! I\'m closing this ticket as resolved. Don\'t hesitate to reach out if anything else comes up.' },
        ],
      },
      {
        id: 'conv-024',
        contactName: 'Omar Haddad',
        outcome: 'completed_no_action',
        summary: 'Omar said his issue resolved itself after a browser update.',
        thread: [
          { role: 'agent', content: 'Hi Omar, checking in on your ticket about the dashboard loading slowly. Are you still experiencing the issue?' },
          { role: 'user', content: 'Actually it started working fine after I updated Chrome. I think it was a browser thing.' },
          { role: 'agent', content: 'Good to hear it\'s resolved! I\'ll close the ticket. Let us know if it happens again.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Followed up on 2 open tickets. Kelly Zhao confirmed CSV export fix is working. Omar Haddad\'s dashboard issue self-resolved after browser update. Both tickets closed.',
    feedback: null,
  },

  // exec-016: Cassie engage — Ponder-initiated proactive outreach
  {
    id: 'exec-016',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'ponder',
    timestamp: '2026-04-12T14:30:00Z',
    trigger: { id: 'trig-016', label: 'Ponder detected usage drop for 2 accounts', type: 'ai_suggestion' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Ponder flagged 2 accounts with 60%+ usage drop', toolCategory: 'data_cleanup' },
      { offsetMs: 400, description: 'Reviewed account activity and recent tickets', toolCategory: 'data_cleanup' },
      { offsetMs: 1000, description: 'Sent proactive check-in emails', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1600,
    creditsUsed: 250,
    goal: 'Proactively reach out to accounts showing significant usage drops',
    conversations: [
      {
        id: 'conv-025',
        contactName: 'Evelyn Marsh',
        outcome: 'goal_achieved',
        summary: 'Evelyn appreciated the outreach; she was confused by the new UI and got help navigating it.',
        thread: [
          { role: 'agent', content: 'Hi Evelyn, I noticed your team\'s usage has dropped recently. Is everything working OK? We want to make sure you\'re getting the most out of the platform.' },
          { role: 'user', content: 'Honestly, since the last update the new dashboard is confusing. I can\'t find the reports I used to run.' },
          { role: 'agent', content: 'I totally understand \u2014 the reports moved to the Analytics tab in the new layout. Would you like me to walk you through the new navigation?' },
          { role: 'user', content: 'Yes, that would be great.' },
          { role: 'agent', content: 'Here\'s a quick guide: Analytics > Custom Reports > select your template. Your saved reports are all still there. I\'ve also pinned a shortcut to your dashboard sidebar so they\'re one click away.' },
          { role: 'user', content: 'Oh perfect, found them! Thanks for reaching out.' },
        ],
      },
      {
        id: 'conv-026',
        contactName: 'Raj Patel',
        outcome: 'in_progress',
        summary: 'Raj mentioned his team is evaluating a competitor. Flagged for account management.',
        thread: [
          { role: 'agent', content: 'Hi Raj, I noticed your team\'s activity has been lower than usual lately. Wanted to check in \u2014 is there anything we can help with?' },
          { role: 'user', content: 'We\'re actually evaluating a few other tools right now. The pricing increase last quarter was a factor.' },
          { role: 'agent', content: 'I appreciate your honesty. I\'d like to connect you with our account manager to discuss options that might work better for your budget. Would that be OK?' },
          { role: 'user', content: 'Sure, have them reach out.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Proactively contacted 2 accounts with usage drops. Evelyn Marsh: resolved UI confusion, pinned report shortcuts. Raj Patel: flagged for account manager outreach due to competitor evaluation.',
    feedback: 'down',
  },

  // exec-017: Cassie engage — Urgent ticket
  {
    id: 'exec-017',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-14T15:45:00Z',
    trigger: { id: 'trig-017', label: 'P1 support ticket: API outage reported', type: 'ticket_created' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'P1 ticket received: customer reporting API outage', toolCategory: 'communication' },
      { offsetMs: 200, description: 'Checked internal status page \u2014 no known issues', toolCategory: 'data_cleanup' },
      { offsetMs: 600, description: 'Initiated live chat with customer', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 980,
    creditsUsed: 130,
    goal: 'Respond to P1 tickets within 5 minutes and begin troubleshooting immediately',
    conversations: [
      {
        id: 'conv-027',
        contactName: 'Nadia Volkov',
        outcome: 'in_progress',
        summary: 'Nadia reported 500 errors on the API; Cassie escalated to on-call engineering.',
        thread: [
          { role: 'agent', content: 'Hi Nadia, I see you\'re reporting API errors. I\'m looking into this right now. Can you share the specific endpoint and error codes you\'re seeing?' },
          { role: 'user', content: 'We\'re getting 500 errors on /api/v2/reports. Started about 20 minutes ago. It\'s blocking our production pipeline.' },
          { role: 'agent', content: 'I\'ve confirmed no issues on our public status page, which means this might be isolated. I\'m escalating to our on-call engineer immediately with a P1 flag. They\'ll join this chat within 10 minutes. In the meantime, does your pipeline have a fallback to the v1 endpoint?' },
          { role: 'user', content: 'We can try v1 as a temporary workaround. Please keep me posted on the fix.' },
        ],
      },
    ],
    outcomeSummaryFull: 'P1 ticket from Nadia Volkov: 500 errors on /api/v2/reports. Internal status page clear. Escalated to on-call engineer. Customer using v1 fallback. Response time: under 2 minutes.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DATAOPS (persona-005) — 5 executions (Engage-less only)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-018: DataOps engage-less — Weekly data audit
  {
    id: 'exec-018',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-011',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-07T06:00:00Z',
    trigger: { id: 'trig-018', label: 'Weekly data audit scheduled', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Weekly audit trigger fired', toolCategory: 'scheduling' },
      { offsetMs: 1200, description: 'Scanned 2,400 employee records for inconsistencies', toolCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Found 12 records with missing department codes', toolCategory: 'data_cleanup' },
      { offsetMs: 6200, description: 'Auto-corrected 9 using org chart mapping', toolCategory: 'data_cleanup' },
      { offsetMs: 7800, description: 'Flagged 3 ambiguous records for manual review', toolCategory: 'data_cleanup' },
      { offsetMs: 8400, description: 'Generated audit report and posted to #data-ops', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 9200,
    creditsUsed: 11980,
    status: 'success',
    goal: 'Identify and resolve data inconsistencies in employee records',
    outcomeSummaryFull: 'Weekly data audit scanned 2,400 employee records. Found 12 with missing department codes, auto-corrected 9 using org chart data, and flagged 3 for manual review. Audit report posted to #data-ops.',
    feedback: 'up',
  },

  // exec-019: DataOps engage-less — Record cleanup & dedup
  {
    id: 'exec-019',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-012',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-08T02:00:00Z',
    trigger: { id: 'trig-019', label: 'Nightly record deduplication job', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0, description: 'Nightly dedup job started', toolCategory: 'scheduling' },
      { offsetMs: 2200, description: 'Compared 3,100 contact records using fuzzy matching', toolCategory: 'data_cleanup' },
      { offsetMs: 6400, description: 'Identified 18 potential duplicate pairs', toolCategory: 'data_cleanup' },
      { offsetMs: 8100, description: 'Auto-merged 14 high-confidence duplicates', toolCategory: 'data_cleanup' },
      { offsetMs: 9000, description: 'Queued 4 low-confidence pairs for human review', toolCategory: 'data_cleanup' },
      { offsetMs: 9600, description: 'Updated dedup log and posted summary', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 10000,
    creditsUsed: 13220,
    status: 'success',
    goal: 'Eliminate duplicate contact records to maintain data integrity',
    outcomeSummaryFull: 'Nightly dedup scanned 3,100 contact records. Found 18 potential duplicates: 14 auto-merged (high confidence), 4 queued for human review (low confidence). Dedup log updated.',
    feedback: null,
  },

  // exec-020: DataOps engage-less — Ops reporting
  {
    id: 'exec-020',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-013',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-10T07:00:00Z',
    trigger: { id: 'trig-020', label: 'Weekly ops report generation', type: 'scheduled' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0, description: 'Ops report generation started', toolCategory: 'scheduling' },
      { offsetMs: 800, description: 'Aggregated metrics from 5 data sources', toolCategory: 'data_cleanup' },
      { offsetMs: 2400, description: 'Computed week-over-week trends', toolCategory: 'data_cleanup' },
      { offsetMs: 3200, description: 'Generated formatted report PDF', toolCategory: 'data_cleanup' },
      { offsetMs: 3800, description: 'Emailed report to ops leadership', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4200,
    creditsUsed: 5210,
    status: 'success',
    goal: 'Generate and distribute the weekly operations report to leadership',
    outcomeSummaryFull: 'Weekly ops report generated: aggregated data from 5 sources, computed WoW trends, formatted PDF created and emailed to ops leadership.',
    feedback: null,
  },

  // exec-021: DataOps engage-less — Record cleanup (incomplete run)
  {
    id: 'exec-021',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-012',
    deploymentType: 'engage_less',
    activatedBy: 'ponder',
    timestamp: '2026-04-13T03:00:00Z',
    trigger: { id: 'trig-021', label: 'Ponder detected orphaned records in staging table', type: 'ai_suggestion' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0, description: 'Ponder flagged 42 orphaned records in staging', toolCategory: 'data_cleanup' },
      { offsetMs: 1600, description: 'Attempted to match orphans to master records', toolCategory: 'data_cleanup' },
      { offsetMs: 3200, description: 'Matched 28 records, 14 remain unresolvable', toolCategory: 'data_cleanup' },
      { offsetMs: 3800, description: 'Process halted: missing reference table access', toolCategory: 'data_cleanup' },
    ],
    durationMs: 4000,
    creditsUsed: 6190,
    status: 'incomplete',
    goal: 'Clean up orphaned records in the staging table',
    outcomeSummaryFull: 'Ponder detected 42 orphaned records in staging. Matched 28 to master records, but 14 remain unresolved. Process halted due to missing access to the customer reference table. Manual intervention required.',
    feedback: 'down',
  },

  // exec-022: DataOps engage-less — Second weekly audit
  {
    id: 'exec-022',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-011',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-14T06:00:00Z',
    trigger: { id: 'trig-022', label: 'Weekly data audit scheduled', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Weekly audit trigger fired', toolCategory: 'scheduling' },
      { offsetMs: 1400, description: 'Scanned 2,412 employee records', toolCategory: 'data_cleanup' },
      { offsetMs: 4200, description: 'Found 5 records with stale location data', toolCategory: 'data_cleanup' },
      { offsetMs: 5800, description: 'Auto-corrected 3 based on recent office moves', toolCategory: 'data_cleanup' },
      { offsetMs: 6800, description: 'Flagged 2 for manual review', toolCategory: 'data_cleanup' },
    ],
    durationMs: 7400,
    creditsUsed: 11060,
    status: 'in_progress',
    goal: 'Identify and resolve data inconsistencies in employee records',
    outcomeSummaryFull: 'Weekly data audit scanned 2,412 records. Found 5 with stale location data: 3 auto-corrected, 2 flagged for review. Report generation pending \u2014 awaiting confirmation from ops lead before posting.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ERIN (persona-001) — 5 additional executions (total 10)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-023: Erin engage — PTO / leave request questions
  {
    id: 'exec-023',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-001',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-01T10:15:00Z',
    trigger: { id: 'trig-023', label: 'Leave request submitted by Hannah Park', type: 'form_submission' },
    workflow: WORKFLOWS[0],
    steps: [
      { offsetMs: 0, description: 'Received PTO request form', toolCategory: 'data_cleanup' },
      { offsetMs: 700, description: 'Checked accrual balance and blackout dates', toolCategory: 'data_cleanup' },
      { offsetMs: 1800, description: 'Responded to employee via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2400,
    creditsUsed: 290,
    goal: 'Help employees understand and submit leave requests accurately',
    conversations: [
      {
        id: 'conv-050',
        contactName: 'Hannah Park',
        outcome: 'goal_achieved',
        summary: 'Hannah confirmed her PTO balance and submitted a 5-day request.',
        thread: [
          { role: 'agent', content: 'Hi Hannah! I see your PTO request for May 4-8. You currently have 72 hours accrued, which easily covers the 40 hours you\'re requesting.' },
          { role: 'user', content: 'Perfect. Is that week OK to take off?' },
          { role: 'agent', content: 'It\'s outside any blackout windows, so you\'re good to go. I\'ve routed the request to your manager for approval. You\'ll hear back within 2 business days.' },
          { role: 'user', content: 'Thanks!' },
        ],
      },
      {
        id: 'conv-051',
        contactName: 'Bryan Osei',
        outcome: 'completed_no_action',
        summary: 'Bryan learned he didn\'t have enough accrued time and withdrew the request.',
        thread: [
          { role: 'agent', content: 'Hi Bryan, I reviewed your leave request for 6 days next month. You currently have 32 hours accrued, which covers only 4 days.' },
          { role: 'user', content: 'Ah, I didn\'t realize. Let me just withdraw it and plan for something shorter later.' },
          { role: 'agent', content: 'No problem \u2014 I\'ve withdrawn the request. You\'ll accrue another 16 hours by end of June if that helps with planning.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Processed 2 leave requests. Hannah Park: 5-day PTO approved and routed to manager. Bryan Osei: withdrew request after learning of insufficient accrual.',
    feedback: null,
  },

  // exec-024: Erin engage — Benefits policy inquiry
  {
    id: 'exec-024',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-002',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-04T14:22:00Z',
    trigger: { id: 'trig-024', label: 'FSA question from employee chat', type: 'inbound_message' },
    workflow: WORKFLOWS[1],
    steps: [
      { offsetMs: 0, description: 'Inbound FSA question received', toolCategory: 'communication' },
      { offsetMs: 600, description: 'Looked up current plan documents', toolCategory: 'data_cleanup' },
      { offsetMs: 1500, description: 'Answered employee via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2100,
    creditsUsed: 250,
    goal: 'Answer benefits policy questions accurately and promptly',
    conversations: [
      {
        id: 'conv-052',
        contactName: 'Lena Ortiz',
        outcome: 'goal_achieved',
        summary: 'Lena got clarity on dependent-care FSA limits before submitting a claim.',
        thread: [
          { role: 'agent', content: 'Hi Lena! I got your question about the dependent-care FSA. What would you like to know?' },
          { role: 'user', content: 'What\'s the annual limit and can I use it for summer camp?' },
          { role: 'agent', content: 'The 2026 limit is $5,000 per household ($2,500 if married filing separately). Day camps qualify \u2014 overnight camps do not. Keep receipts and submit through the FSA portal.' },
          { role: 'user', content: 'Exactly what I needed. Thanks!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Answered Lena Ortiz\'s dependent-care FSA question: confirmed $5,000 annual limit and that day camps are eligible expenses.',
    feedback: 'up',
  },

  // exec-025: Erin engage — Ponder-initiated policy clarification
  {
    id: 'exec-025',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-001',
    deploymentType: 'engage',
    activatedBy: 'ponder',
    timestamp: '2026-04-11T16:40:00Z',
    trigger: { id: 'trig-025', label: 'Ponder flagged repeat questions about bereavement policy', type: 'ai_suggestion' },
    workflow: WORKFLOWS[0],
    steps: [
      { offsetMs: 0, description: 'Ponder detected 4 bereavement policy questions this week', toolCategory: 'data_cleanup' },
      { offsetMs: 900, description: 'Drafted clarification message', toolCategory: 'data_cleanup' },
      { offsetMs: 2100, description: 'Messaged affected employees via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 2800,
    creditsUsed: 370,
    goal: 'Proactively clarify confusing policies when multiple employees ask similar questions',
    conversations: [
      {
        id: 'conv-053',
        contactName: 'Kim Alvarez',
        outcome: 'goal_achieved',
        summary: 'Kim got confirmation that bereavement leave covers her aunt.',
        thread: [
          { role: 'agent', content: 'Hi Kim, I wanted to follow up on your question about bereavement leave. Our policy covers immediate family including aunts and uncles \u2014 you\'re eligible for up to 3 paid days.' },
          { role: 'user', content: 'Oh good. I\'ll submit the request today.' },
          { role: 'agent', content: 'Take the time you need. If travel is involved I can also help route a request for an extra unpaid day.' },
        ],
      },
      {
        id: 'conv-054',
        contactName: 'Nate Holloway',
        outcome: 'goal_achieved',
        summary: 'Nate learned step-parent qualifies for bereavement under the policy.',
        thread: [
          { role: 'agent', content: 'Hi Nate, following up on your bereavement question. Step-parents are included in our policy\'s definition of immediate family \u2014 so you qualify for up to 5 days.' },
          { role: 'user', content: 'Thank you, that\'s really helpful.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Ponder flagged a pattern of bereavement policy questions. Erin proactively clarified coverage for Kim Alvarez (aunt) and Nate Holloway (step-parent). Both confirmed eligibility.',
    feedback: 'up',
  },

  // exec-026: Erin engage-less — Role audit sweep
  {
    id: 'exec-026',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-003',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-06T05:45:00Z',
    trigger: { id: 'trig-026', label: 'Monthly role-title audit', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Role audit job started', toolCategory: 'scheduling' },
      { offsetMs: 1600, description: 'Compared HRIS titles with org chart of record', toolCategory: 'data_cleanup' },
      { offsetMs: 3400, description: 'Found 11 mismatches \u2014 titles vs compensation band', toolCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Auto-corrected 7 based on approved promotions', toolCategory: 'data_cleanup' },
      { offsetMs: 5600, description: 'Flagged 4 for comp-team review', toolCategory: 'data_cleanup' },
    ],
    durationMs: 6100,
    creditsUsed: 8230,
    status: 'success',
    goal: 'Keep job titles consistent with approved compensation bands',
    outcomeSummaryFull: 'Monthly role audit found 11 title/band mismatches across 850 records. 7 were auto-corrected using the approved promotion log; 4 were escalated to the compensation team.',
    feedback: null,
  },

  // exec-027: Erin engage-less — Employment verification batch
  {
    id: 'exec-027',
    specialistId: 'persona-001',
    personaName: 'Erin',
    deploymentId: 'dep-003',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-12T08:30:00Z',
    trigger: { id: 'trig-027', label: 'Daily employment verification batch', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'Verification batch started', toolCategory: 'scheduling' },
      { offsetMs: 1100, description: 'Processed 18 incoming verification requests', toolCategory: 'data_cleanup' },
      { offsetMs: 2900, description: 'Generated 18 standardized verification letters', toolCategory: 'data_cleanup' },
      { offsetMs: 3700, description: 'Emailed letters to requesting parties', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 4200,
    creditsUsed: 5540,
    status: 'success',
    goal: 'Respond to third-party employment verification requests same-day',
    outcomeSummaryFull: 'Processed 18 employment verification requests for mortgage, rental, and loan applications. All standardized letters generated and emailed same-day.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCHED (persona-002) — 6 additional executions (total 10)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-028: Sched engage — Shift swap request
  {
    id: 'exec-028',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-004',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-02T12:10:00Z',
    trigger: { id: 'trig-028', label: 'Shift swap request from Tara Bishop', type: 'form_submission' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Swap request received', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Identified eligible swap partners', toolCategory: 'data_cleanup' },
      { offsetMs: 1100, description: 'Messaged candidates via SMS', toolCategory: 'communication', channel: 'sms' },
      { offsetMs: 2400, description: 'Confirmed accepted swap and updated schedule', toolCategory: 'scheduling' },
    ],
    durationMs: 3000,
    creditsUsed: 410,
    goal: 'Facilitate shift swaps between eligible employees',
    conversations: [
      {
        id: 'conv-055',
        contactName: 'Tara Bishop',
        outcome: 'goal_achieved',
        summary: 'Tara swapped her Friday closing for Tuesday morning.',
        thread: [
          { role: 'agent', content: 'Hi Tara, I received your swap request. I found 2 eligible partners. Sending requests now.' },
          { role: 'user', content: 'Thanks, hoping someone can take Friday.' },
          { role: 'agent', content: 'Jordan accepted the swap. You\'ll now work Tuesday 8AM-4PM instead of Friday closing.' },
          { role: 'user', content: 'Perfect, thanks!' },
        ],
      },
      {
        id: 'conv-056',
        contactName: 'Jordan Kwan',
        outcome: 'goal_achieved',
        summary: 'Jordan accepted the Friday closing shift in exchange.',
        thread: [
          { role: 'agent', content: 'Hi Jordan, Tara is looking to swap her Friday 3PM-11PM for your Tuesday 8AM-4PM. Interested?' },
          { role: 'user', content: 'Yes, that works for me.' },
          { role: 'agent', content: 'Swap confirmed. You\'re on for Friday closing.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Shift swap completed between Tara Bishop and Jordan Kwan. Tara moved from Friday closing to Tuesday morning. Schedule updated.',
    feedback: null,
  },

  // exec-029: Sched engage — Schedule change confirmation batch
  {
    id: 'exec-029',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-005',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-05T09:20:00Z',
    trigger: { id: 'trig-029', label: 'Manager published new schedule \u2014 warehouse', type: 'schedule_change' },
    workflow: WORKFLOWS[3],
    steps: [
      { offsetMs: 0, description: 'Detected published schedule', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Computed per-employee deltas for 9 people', toolCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Sent confirmation SMS to each affected employee', toolCategory: 'communication', channel: 'sms' },
    ],
    durationMs: 2600,
    creditsUsed: 440,
    goal: 'Make sure every employee acknowledges their upcoming schedule',
    conversations: [
      {
        id: 'conv-057',
        contactName: 'Isabel Moreno',
        outcome: 'goal_achieved',
        summary: 'Isabel confirmed her new schedule.',
        thread: [
          { role: 'agent', content: 'Hi Isabel, your warehouse schedule for next week: Mon/Wed/Fri 6AM-2PM. Reply OK to confirm.' },
          { role: 'user', content: 'OK' },
        ],
      },
      {
        id: 'conv-058',
        contactName: 'Wade Sullivan',
        outcome: 'in_progress',
        summary: 'Wade has not responded yet.',
        thread: [
          { role: 'agent', content: 'Hi Wade, you\'re scheduled Tues/Thurs/Sat 2PM-10PM next week. Reply OK to confirm.' },
        ],
      },
      {
        id: 'conv-059',
        contactName: 'Priya Natarajan',
        outcome: 'goal_achieved',
        summary: 'Priya acknowledged her updated hours.',
        thread: [
          { role: 'agent', content: 'Hi Priya, your updated schedule: Wed-Sun 10AM-6PM. Reply OK to confirm.' },
          { role: 'user', content: 'OK thanks' },
        ],
      },
    ],
    outcomeSummaryFull: 'Sent schedule confirmations to 3 warehouse team members. Isabel Moreno and Priya Natarajan confirmed. Wade Sullivan has not yet responded.',
    feedback: null,
  },

  // exec-030: Sched engage — Coverage outreach (short staffed)
  {
    id: 'exec-030',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-004',
    deploymentType: 'engage',
    activatedBy: 'ponder',
    timestamp: '2026-04-08T18:45:00Z',
    trigger: { id: 'trig-030', label: 'Ponder predicted understaffing for tomorrow\'s dinner rush', type: 'ai_suggestion' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Ponder flagged dinner-shift staffing gap', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Pulled list of eligible off-duty staff', toolCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Sent coverage offers via SMS', toolCategory: 'communication', channel: 'sms' },
      { offsetMs: 3200, description: 'Confirmed two accepts', toolCategory: 'scheduling' },
    ],
    durationMs: 3800,
    creditsUsed: 480,
    goal: 'Close predicted coverage gaps before the shift starts',
    conversations: [
      {
        id: 'conv-060',
        contactName: 'Riley McCabe',
        outcome: 'goal_achieved',
        summary: 'Riley picked up the 5-9PM dinner shift.',
        thread: [
          { role: 'agent', content: 'Hi Riley, tomorrow 5-9PM dinner shift needs coverage. Available?' },
          { role: 'user', content: 'Sure, I can do that.' },
          { role: 'agent', content: 'You\'re on. Thanks, Riley!' },
        ],
      },
      {
        id: 'conv-061',
        contactName: 'Deion Hart',
        outcome: 'goal_achieved',
        summary: 'Deion accepted a 6-10PM support shift.',
        thread: [
          { role: 'agent', content: 'Hey Deion, tomorrow 6-10PM we could use extra support. Can you cover?' },
          { role: 'user', content: 'Yep, sign me up.' },
          { role: 'agent', content: 'Confirmed. Appreciate it!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Ponder predicted understaffing for tomorrow\'s dinner rush. Sched contacted 5 off-duty staff; Riley McCabe and Deion Hart accepted. Gap closed.',
    feedback: 'up',
  },

  // exec-031: Sched engage-less — Timecard audit
  {
    id: 'exec-031',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-006',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-03T04:30:00Z',
    trigger: { id: 'trig-031', label: 'Bi-weekly timecard audit', type: 'scheduled' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Audit job started', toolCategory: 'scheduling' },
      { offsetMs: 1800, description: 'Reviewed timecards for 220 hourly employees', toolCategory: 'data_cleanup' },
      { offsetMs: 5100, description: 'Found 14 missed punches', toolCategory: 'data_cleanup' },
      { offsetMs: 7200, description: 'Auto-corrected 10 using scheduled-shift inference', toolCategory: 'data_cleanup' },
      { offsetMs: 8200, description: 'Flagged 4 for manager confirmation', toolCategory: 'data_cleanup' },
    ],
    durationMs: 8900,
    creditsUsed: 11540,
    status: 'success',
    goal: 'Catch and resolve missing timecard punches before payroll runs',
    outcomeSummaryFull: 'Bi-weekly timecard audit covered 220 hourly employees. 14 missed punches detected: 10 inferred from scheduled shifts, 4 flagged for manager review. Ready for payroll.',
    feedback: 'up',
  },

  // exec-032: Sched engage-less — Shift gap detection
  {
    id: 'exec-032',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-006',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-09T04:00:00Z',
    trigger: { id: 'trig-032', label: 'Daily next-7-day shift gap scan', type: 'scheduled' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Shift gap scan started', toolCategory: 'scheduling' },
      { offsetMs: 1400, description: 'Analyzed forecasted demand vs published schedule', toolCategory: 'data_cleanup' },
      { offsetMs: 3600, description: 'Found 6 under-staffed shift windows', toolCategory: 'data_cleanup' },
      { offsetMs: 4600, description: 'Posted coverage needs to #scheduling channel', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 5200,
    creditsUsed: 7500,
    status: 'success',
    goal: 'Identify shift gaps 7 days in advance so managers can act',
    outcomeSummaryFull: 'Daily shift gap scan detected 6 under-staffed windows across next 7 days (3 dinner, 2 weekend morning, 1 overnight). Coverage needs posted for managers.',
    feedback: null,
  },

  // exec-033: Sched engage-less — Schedule reconciliation (in progress)
  {
    id: 'exec-033',
    specialistId: 'persona-002',
    personaName: 'Sched',
    deploymentId: 'dep-006',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-15T05:00:00Z',
    trigger: { id: 'trig-033', label: 'Weekly reconciliation cross-location', type: 'scheduled' },
    workflow: WORKFLOWS[2],
    steps: [
      { offsetMs: 0, description: 'Reconciliation started', toolCategory: 'scheduling' },
      { offsetMs: 2100, description: 'Pulled shift data from 4 of 5 locations', toolCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Waiting on missing export from Store 17', toolCategory: 'data_cleanup' },
    ],
    durationMs: 5100,
    creditsUsed: 5290,
    status: 'in_progress',
    goal: 'Reconcile scheduled shifts with time-clock entries across all locations',
    outcomeSummaryFull: 'Cross-location reconciliation running. 4 of 5 location exports received; waiting on Store 17 data before completing the compare.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ONBI (persona-003) — 6 additional executions (total 10)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-034: Onbi engage — Document follow-up
  {
    id: 'exec-034',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-007',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-01T13:00:00Z',
    trigger: { id: 'trig-034', label: 'Missing documents reminder \u2014 day 4 new hires', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Day-4 doc check triggered', toolCategory: 'scheduling' },
      { offsetMs: 500, description: 'Identified 2 new hires missing I-9 Section 2', toolCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Sent reminders via email', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1900,
    creditsUsed: 260,
    goal: 'Ensure new hires complete compliance documents on time',
    conversations: [
      {
        id: 'conv-062',
        contactName: 'Kenji Tanaka',
        outcome: 'goal_achieved',
        summary: 'Kenji uploaded his I-9 supporting documents.',
        thread: [
          { role: 'agent', content: 'Hi Kenji! Friendly reminder \u2014 your I-9 Section 2 is due by end of week. You can upload a passport or license + SS card.' },
          { role: 'user', content: 'Just uploaded my passport. Is that enough?' },
          { role: 'agent', content: 'Yes! Passport is a List A document and satisfies the I-9 on its own. You\'re all set.' },
        ],
      },
      {
        id: 'conv-063',
        contactName: 'Fatima Al-Said',
        outcome: 'in_progress',
        summary: 'Fatima said she\'ll upload her documents this evening.',
        thread: [
          { role: 'agent', content: 'Hi Fatima, just a reminder your I-9 Section 2 documents are still outstanding.' },
          { role: 'user', content: 'Oh sorry \u2014 I\'ll upload them tonight when I get home.' },
          { role: 'agent', content: 'No worries, thanks for the heads up!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Day-4 document reminders sent. Kenji Tanaka completed I-9 upload. Fatima Al-Said committed to upload tonight.',
    feedback: null,
  },

  // exec-035: Onbi engage — Orientation scheduling
  {
    id: 'exec-035',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-007',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-07T10:15:00Z',
    trigger: { id: 'trig-035', label: 'Schedule orientation for April cohort', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Orientation scheduling triggered', toolCategory: 'scheduling' },
      { offsetMs: 700, description: 'Checked facilitator availability', toolCategory: 'data_cleanup' },
      { offsetMs: 1600, description: 'Sent invites to 5 new hires', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2300,
    creditsUsed: 320,
    goal: 'Book and confirm orientation sessions for new cohorts',
    conversations: [
      {
        id: 'conv-064',
        contactName: 'Gabriela Reyes',
        outcome: 'goal_achieved',
        summary: 'Gabriela confirmed her orientation slot.',
        thread: [
          { role: 'agent', content: 'Hi Gabriela! Welcome again. I\'m scheduling orientation for April 14 at 9AM. Does that time work for you?' },
          { role: 'user', content: 'Yes that works!' },
          { role: 'agent', content: 'Great, invite sent. See you there!' },
        ],
      },
      {
        id: 'conv-065',
        contactName: 'Theo Whitfield',
        outcome: 'goal_achieved',
        summary: 'Theo accepted the orientation invite.',
        thread: [
          { role: 'agent', content: 'Hi Theo! Orientation for your cohort is April 14, 9AM. Good to go?' },
          { role: 'user', content: 'All set.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Orientation scheduled for April cohort on April 14 at 9AM. Gabriela Reyes and Theo Whitfield confirmed.',
    feedback: 'up',
  },

  // exec-036: Onbi engage — New hire check-in (week 2)
  {
    id: 'exec-036',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-007',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-11T14:30:00Z',
    trigger: { id: 'trig-036', label: 'Week-2 new hire check-in', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Week-2 check-in triggered', toolCategory: 'scheduling' },
      { offsetMs: 400, description: 'Pulled progress status for each new hire', toolCategory: 'data_cleanup' },
      { offsetMs: 1100, description: 'Sent check-in messages via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1700,
    creditsUsed: 270,
    goal: 'Check in with new hires 2 weeks in to surface blockers',
    conversations: [
      {
        id: 'conv-066',
        contactName: 'Aisha Mahmoud',
        outcome: 'goal_achieved',
        summary: 'Aisha reported a smooth onboarding so far.',
        thread: [
          { role: 'agent', content: 'Hi Aisha! It\'s been two weeks \u2014 how\'s it going? Anything you\'re stuck on?' },
          { role: 'user', content: 'Going great! My team has been super welcoming. No blockers.' },
          { role: 'agent', content: 'Wonderful! I\'ll check back at the 30-day mark. Let me know anytime if something comes up.' },
        ],
      },
      {
        id: 'conv-067',
        contactName: 'Ryan Brooks',
        outcome: 'goal_achieved',
        summary: 'Ryan flagged a software access issue that Onbi routed to IT.',
        thread: [
          { role: 'agent', content: 'Hi Ryan, it\'s been 2 weeks \u2014 how are things going?' },
          { role: 'user', content: 'Pretty good. One thing: I still don\'t have access to the analytics tool.' },
          { role: 'agent', content: 'Let me get that routed to IT right now. You should have access by end of day.' },
          { role: 'user', content: 'Thanks!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Week-2 check-ins with 2 new hires. Aisha Mahmoud: smooth start, no blockers. Ryan Brooks: analytics tool access ticket created with IT.',
    feedback: null,
  },

  // exec-037: Onbi engage-less — Checklist audit (compliance)
  {
    id: 'exec-037',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-009',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-06T07:30:00Z',
    trigger: { id: 'trig-037', label: 'Weekly onboarding checklist audit', type: 'scheduled' },
    workflow: WORKFLOWS[4],
    steps: [
      { offsetMs: 0, description: 'Checklist audit started', toolCategory: 'scheduling' },
      { offsetMs: 1000, description: 'Reviewed 22 active onboarding plans', toolCategory: 'data_cleanup' },
      { offsetMs: 3100, description: '19 on-track, 3 behind schedule', toolCategory: 'data_cleanup' },
      { offsetMs: 4000, description: 'Generated audit summary', toolCategory: 'data_cleanup' },
    ],
    durationMs: 4600,
    creditsUsed: 5990,
    status: 'success',
    goal: 'Track onboarding progress across all active new hires',
    outcomeSummaryFull: 'Audited 22 active onboarding plans. 19 on-track, 3 behind schedule (>3 days stale). Summary emailed to people-ops lead.',
    feedback: null,
  },

  // exec-038: Onbi engage-less — Document validation sweep
  {
    id: 'exec-038',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-008',
    deploymentType: 'engage_less',
    activatedBy: 'ponder',
    timestamp: '2026-04-13T07:00:00Z',
    trigger: { id: 'trig-038', label: 'Ponder flagged upcoming I-9 deadlines', type: 'ai_suggestion' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0, description: 'Document validation sweep started', toolCategory: 'scheduling' },
      { offsetMs: 1200, description: 'Cross-checked I-9 expirations against current employees', toolCategory: 'data_cleanup' },
      { offsetMs: 2800, description: 'Found 4 records with re-verification due in 30 days', toolCategory: 'data_cleanup' },
      { offsetMs: 3700, description: 'Generated re-verification task list for HR', toolCategory: 'data_cleanup' },
    ],
    durationMs: 4200,
    creditsUsed: 6470,
    status: 'success',
    goal: 'Catch expiring work authorizations before they lapse',
    outcomeSummaryFull: 'Ponder flagged upcoming I-9 deadlines. Sweep found 4 employees whose work authorization re-verification is due in the next 30 days. Task list created for HR.',
    feedback: 'up',
  },

  // exec-039: Onbi engage-less — Compliance status check (incomplete)
  {
    id: 'exec-039',
    specialistId: 'persona-003',
    personaName: 'Onbi',
    deploymentId: 'dep-008',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-14T07:45:00Z',
    trigger: { id: 'trig-039', label: 'Monthly compliance status check', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [
      { offsetMs: 0, description: 'Compliance check started', toolCategory: 'scheduling' },
      { offsetMs: 1500, description: 'Processed 40 of 68 training compliance records', toolCategory: 'data_cleanup' },
      { offsetMs: 3600, description: 'LMS API rate limit hit \u2014 paused before completion', toolCategory: 'data_cleanup' },
    ],
    durationMs: 3900,
    creditsUsed: 4090,
    status: 'incomplete',
    goal: 'Verify all employees meet monthly compliance training requirements',
    outcomeSummaryFull: 'Compliance status check processed 40 of 68 records before the LMS API rate limit blocked further reads. Remaining 28 will retry tonight.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CASSIE (persona-004) — 6 additional executions (total 10, Engage only)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-040: Cassie engage — FAQ / how-to question
  {
    id: 'exec-040',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-03T11:15:00Z',
    trigger: { id: 'trig-040', label: 'Inbound chat \u2014 how-to question', type: 'inbound_message' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Inbound chat received', toolCategory: 'communication' },
      { offsetMs: 500, description: 'Looked up related FAQ articles', toolCategory: 'data_cleanup' },
      { offsetMs: 1200, description: 'Responded with walkthrough', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1800,
    creditsUsed: 200,
    goal: 'Answer product how-to questions quickly using FAQ knowledge',
    conversations: [
      {
        id: 'conv-068',
        contactName: 'Harper Stone',
        outcome: 'goal_achieved',
        summary: 'Harper learned how to invite team members to a shared workspace.',
        thread: [
          { role: 'agent', content: 'Hi Harper! Happy to help \u2014 what are you trying to do?' },
          { role: 'user', content: 'How do I invite people to my workspace?' },
          { role: 'agent', content: 'Go to Settings > Members, click \u201cInvite\u201d, and enter their email. They\'ll get a link to join. You can also set their role there.' },
          { role: 'user', content: 'Got it, thanks!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Harper Stone asked how to invite team members. Cassie walked through the Settings > Members flow. Resolved in chat.',
    feedback: 'up',
  },

  // exec-041: Cassie engage — Refund request
  {
    id: 'exec-041',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-05T15:50:00Z',
    trigger: { id: 'trig-041', label: 'Refund request ticket', type: 'ticket_created' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Refund ticket received', toolCategory: 'communication' },
      { offsetMs: 500, description: 'Pulled customer billing history', toolCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Issued pro-rated refund', toolCategory: 'data_cleanup' },
      { offsetMs: 2200, description: 'Emailed confirmation', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2800,
    creditsUsed: 320,
    goal: 'Process straightforward refund requests same-day within policy',
    conversations: [
      {
        id: 'conv-069',
        contactName: 'Mira Okonkwo',
        outcome: 'goal_achieved',
        summary: 'Mira received a pro-rated refund for canceling her annual plan early.',
        thread: [
          { role: 'agent', content: 'Hi Mira, I see you\'re canceling and requesting a refund. Since you\'re 4 months into your annual plan, you\'re eligible for a pro-rated refund of $319.92.' },
          { role: 'user', content: 'Sounds fair. Please process it.' },
          { role: 'agent', content: 'Done! Refund of $319.92 will hit your card in 3-5 business days. Sorry to see you go \u2014 best of luck!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Processed pro-rated refund of $319.92 for Mira Okonkwo\'s annual plan cancellation. Confirmation emailed.',
    feedback: null,
  },

  // exec-042: Cassie engage — Product issue / bug report
  {
    id: 'exec-042',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-08T09:30:00Z',
    trigger: { id: 'trig-042', label: 'Bug report from enterprise account', type: 'ticket_created' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Bug report received', toolCategory: 'communication' },
      { offsetMs: 500, description: 'Reproduced issue in staging', toolCategory: 'data_cleanup' },
      { offsetMs: 2200, description: 'Filed engineering ticket', toolCategory: 'data_cleanup' },
      { offsetMs: 3100, description: 'Updated customer via chat', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 3800,
    creditsUsed: 440,
    goal: 'Triage and file bug reports with enough detail for engineering',
    conversations: [
      {
        id: 'conv-070',
        contactName: 'Logan Pierce',
        outcome: 'in_progress',
        summary: 'Logan\'s chart rendering bug was reproduced and filed with engineering.',
        thread: [
          { role: 'agent', content: 'Hi Logan, thanks for the detailed bug report on the chart rendering. I was able to reproduce it \u2014 looks like it\'s triggered by datasets over 10k rows.' },
          { role: 'user', content: 'Yeah we hit that threshold yesterday. Any ETA?' },
          { role: 'agent', content: 'I\'ve filed ENG-4812 with priority P2. Expected fix in the next release. I\'ll keep you posted.' },
          { role: 'user', content: 'Thanks!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Reproduced Logan Pierce\'s chart rendering bug at >10k rows. Filed ENG-4812 at P2. Customer updated with timeline.',
    feedback: null,
  },

  // exec-043: Cassie engage — Account question
  {
    id: 'exec-043',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-10T12:45:00Z',
    trigger: { id: 'trig-043', label: 'Account question from customer chat', type: 'inbound_message' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Inbound chat received', toolCategory: 'communication' },
      { offsetMs: 400, description: 'Reviewed account settings', toolCategory: 'data_cleanup' },
      { offsetMs: 1300, description: 'Walked customer through the change', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 1900,
    creditsUsed: 230,
    goal: 'Help customers manage account details and settings',
    conversations: [
      {
        id: 'conv-071',
        contactName: 'Tessa Alvarado',
        outcome: 'goal_achieved',
        summary: 'Tessa updated her billing email successfully.',
        thread: [
          { role: 'agent', content: 'Hi Tessa! How can I help?' },
          { role: 'user', content: 'I need to change the email invoices go to.' },
          { role: 'agent', content: 'Go to Billing > Contacts > Edit, then enter the new email. Want me to walk through it with you?' },
          { role: 'user', content: 'I found it \u2014 thanks, updated!' },
          { role: 'agent', content: 'Great! Next invoice will go to the new address.' },
        ],
      },
      {
        id: 'conv-072',
        contactName: 'Jin Park',
        outcome: 'goal_achieved',
        summary: 'Jin changed his workspace name with Cassie\'s guidance.',
        thread: [
          { role: 'agent', content: 'Hi Jin, what do you need help with?' },
          { role: 'user', content: 'Renaming my workspace. Where do I do that?' },
          { role: 'agent', content: 'Settings > Workspace > rename field at the top. Save and it\'ll update everywhere.' },
          { role: 'user', content: 'Done. Thanks!' },
        ],
      },
    ],
    outcomeSummaryFull: 'Helped 2 customers: Tessa Alvarado updated billing email; Jin Park renamed his workspace. Both resolved in chat.',
    feedback: null,
  },

  // exec-044: Cassie engage — Ponder-driven proactive FAQ share
  {
    id: 'exec-044',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'ponder',
    timestamp: '2026-04-12T10:00:00Z',
    trigger: { id: 'trig-044', label: 'Ponder detected cluster of duplicate FAQ questions', type: 'ai_suggestion' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Ponder clustered 5 duplicate questions', toolCategory: 'data_cleanup' },
      { offsetMs: 600, description: 'Drafted answer and reference link', toolCategory: 'data_cleanup' },
      { offsetMs: 1400, description: 'Replied to affected users via email', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 2000,
    creditsUsed: 290,
    goal: 'Batch-resolve common FAQ questions efficiently',
    conversations: [
      {
        id: 'conv-073',
        contactName: 'Sasha Bellamy',
        outcome: 'goal_achieved',
        summary: 'Sasha got the SSO setup guide and confirmed completion.',
        thread: [
          { role: 'agent', content: 'Hi Sasha! I saw your question about SSO. Here\'s our updated setup guide that walks through Okta, Azure AD, and Google: [link].' },
          { role: 'user', content: 'Thanks, this is exactly what I needed.' },
          { role: 'agent', content: 'Glad it helped! Ping me if you hit anything weird during setup.' },
        ],
      },
      {
        id: 'conv-074',
        contactName: 'Marcus Lin',
        outcome: 'completed_no_action',
        summary: 'Marcus already figured it out on his own but appreciated the link.',
        thread: [
          { role: 'agent', content: 'Hi Marcus, about your SSO question \u2014 here\'s the updated setup guide: [link].' },
          { role: 'user', content: 'Oh I worked it out last night, but thanks!' },
        ],
      },
      {
        id: 'conv-075',
        contactName: 'Naomi Hughes',
        outcome: 'in_progress',
        summary: 'Naomi is still working through SSO config with her IT team.',
        thread: [
          { role: 'agent', content: 'Hi Naomi, saw your SSO question. Here\'s the setup guide: [link]. Let me know if you run into anything.' },
          { role: 'user', content: 'Thanks, our IT is reviewing. Will follow up if we\'re stuck.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Ponder clustered 3 SSO setup questions. Cassie proactively shared the updated guide. Sasha Bellamy resolved; Marcus Lin already done; Naomi Hughes in progress with IT.',
    feedback: 'up',
  },

  // exec-045: Cassie engage — Product feedback triage
  {
    id: 'exec-045',
    specialistId: 'persona-004',
    personaName: 'Cassie',
    deploymentId: 'dep-010',
    deploymentType: 'engage',
    activatedBy: 'workflow',
    timestamp: '2026-04-13T16:20:00Z',
    trigger: { id: 'trig-045', label: 'Feature request submitted via in-app form', type: 'form_submission' },
    workflow: WORKFLOWS[6],
    steps: [
      { offsetMs: 0, description: 'Feature request received', toolCategory: 'communication' },
      { offsetMs: 500, description: 'Logged in product feedback tracker', toolCategory: 'data_cleanup' },
      { offsetMs: 1100, description: 'Thanked customer and explained next steps', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 1700,
    creditsUsed: 190,
    goal: 'Route product feedback to the right team and close the loop with customers',
    conversations: [
      {
        id: 'conv-076',
        contactName: 'Owen Barrett',
        outcome: 'goal_achieved',
        summary: 'Owen got confirmation his feature request was logged for review.',
        thread: [
          { role: 'agent', content: 'Hi Owen! Thanks for the thoughtful request on custom export templates \u2014 I\'ve logged it in our feedback tracker for the product team to review.' },
          { role: 'user', content: 'Appreciate you taking it seriously. Any chance it\'ll be considered?' },
          { role: 'agent', content: 'The product team reviews requests monthly. I\'ll tag you when there\'s an update so you\'ll know either way.' },
        ],
      },
    ],
    outcomeSummaryFull: 'Owen Barrett\'s feature request (custom export templates) logged in product feedback tracker. Customer notified of the monthly review cadence.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DATAOPS (persona-005) — 5 additional executions (total 10, Engage-less only)
  // ═══════════════════════════════════════════════════════════════════════════

  // exec-046: DataOps engage-less — ETL validation
  {
    id: 'exec-046',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-011',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-02T03:30:00Z',
    trigger: { id: 'trig-046', label: 'Nightly ETL validation run', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'ETL validation started', toolCategory: 'scheduling' },
      { offsetMs: 2400, description: 'Compared source vs warehouse row counts', toolCategory: 'data_cleanup' },
      { offsetMs: 5600, description: 'Row counts match across 14 tables', toolCategory: 'data_cleanup' },
      { offsetMs: 7800, description: 'Spot-checked 6 sampled columns for drift', toolCategory: 'data_cleanup' },
      { offsetMs: 9600, description: 'Posted green-light summary', toolCategory: 'communication', channel: 'chat' },
    ],
    durationMs: 10200,
    creditsUsed: 15200,
    status: 'success',
    goal: 'Verify nightly ETL completed correctly before downstream jobs run',
    outcomeSummaryFull: 'Nightly ETL validation green across 14 tables. Row counts match source; sampled columns show no drift. Downstream reports cleared to run.',
    feedback: 'up',
  },

  // exec-047: DataOps engage-less — Compliance check (PII scan)
  {
    id: 'exec-047',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-011',
    deploymentType: 'engage_less',
    activatedBy: 'ponder',
    timestamp: '2026-04-04T02:00:00Z',
    trigger: { id: 'trig-047', label: 'Ponder suggested PII scan after schema change', type: 'ai_suggestion' },
    workflow: WORKFLOWS[7],
    steps: [
      { offsetMs: 0, description: 'PII scan started after schema change', toolCategory: 'scheduling' },
      { offsetMs: 3400, description: 'Scanned 28 newly added columns', toolCategory: 'data_cleanup' },
      { offsetMs: 7200, description: 'Flagged 3 columns as likely PII (email, phone, DOB)', toolCategory: 'data_cleanup' },
      { offsetMs: 9600, description: 'Applied masking policy to flagged columns', toolCategory: 'data_cleanup' },
      { offsetMs: 10800, description: 'Logged compliance action in audit trail', toolCategory: 'data_cleanup' },
    ],
    durationMs: 11400,
    creditsUsed: 19240,
    status: 'success',
    goal: 'Detect and protect newly introduced PII columns automatically',
    outcomeSummaryFull: 'Post-schema PII scan of 28 new columns. Flagged 3 as PII (email, phone, DOB) and applied masking policy. Audit trail updated.',
    feedback: 'up',
  },

  // exec-048: DataOps engage-less — Record cleanup (null normalization)
  {
    id: 'exec-048',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-012',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-09T02:30:00Z',
    trigger: { id: 'trig-048', label: 'Nightly null normalization', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0, description: 'Null normalization job started', toolCategory: 'scheduling' },
      { offsetMs: 2100, description: 'Scanned 4,200 records for string \u201cnull\u201d / empty / N/A values', toolCategory: 'data_cleanup' },
      { offsetMs: 5400, description: 'Normalized 312 records to SQL NULL', toolCategory: 'data_cleanup' },
      { offsetMs: 7200, description: 'Re-ran downstream aggregations', toolCategory: 'data_cleanup' },
    ],
    durationMs: 7900,
    creditsUsed: 10190,
    status: 'success',
    goal: 'Normalize inconsistent null representations across tables',
    outcomeSummaryFull: 'Nightly null normalization: scanned 4,200 records, converted 312 inconsistent null representations to SQL NULL, and re-ran downstream aggregations.',
    feedback: null,
  },

  // exec-049: DataOps engage-less — Monthly ops report
  {
    id: 'exec-049',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-013',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-11T07:30:00Z',
    trigger: { id: 'trig-049', label: 'Monthly ops report generation', type: 'scheduled' },
    workflow: WORKFLOWS[9],
    steps: [
      { offsetMs: 0, description: 'Monthly report generation started', toolCategory: 'scheduling' },
      { offsetMs: 1200, description: 'Aggregated metrics from 8 data sources', toolCategory: 'data_cleanup' },
      { offsetMs: 3600, description: 'Computed month-over-month trends', toolCategory: 'data_cleanup' },
      { offsetMs: 4800, description: 'Generated formatted PDF and distribution list email', toolCategory: 'communication', channel: 'email' },
    ],
    durationMs: 5400,
    creditsUsed: 8900,
    status: 'success',
    goal: 'Deliver the monthly operations report to executive distribution',
    outcomeSummaryFull: 'Monthly ops report generated from 8 sources, MoM trends computed, PDF distributed to executive list.',
    feedback: null,
  },

  // exec-050: DataOps engage-less — Record cleanup (in progress)
  {
    id: 'exec-050',
    specialistId: 'persona-005',
    personaName: 'DataOps',
    deploymentId: 'dep-012',
    deploymentType: 'engage_less',
    activatedBy: 'workflow',
    timestamp: '2026-04-15T02:45:00Z',
    trigger: { id: 'trig-050', label: 'Nightly record cleanup', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [
      { offsetMs: 0, description: 'Cleanup job started', toolCategory: 'scheduling' },
      { offsetMs: 2800, description: 'Processed 1,600 of 3,200 records', toolCategory: 'data_cleanup' },
      { offsetMs: 6100, description: 'Job still running at scheduled checkpoint', toolCategory: 'data_cleanup' },
    ],
    durationMs: 6400,
    creditsUsed: 6860,
    status: 'in_progress',
    goal: 'Clean up stale and malformed contact records nightly',
    outcomeSummaryFull: 'Nightly cleanup job processed 1,600 of 3,200 records before the reporting checkpoint. Remaining records will complete in the continuation run.',
    feedback: null,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HISTORICAL EXECUTIONS (Jan–Mar 2026) — compact engage-less records added
  // to give the "All" time-range view real month-over-month variation on the
  // Credit Usage Over Time chart. Credit totals ramp up toward April 2026
  // to read as a rising trend.
  // ═══════════════════════════════════════════════════════════════════════════

  // ── January 2026 (~45k credits) ────────────────────────────────────────────
  {
    id: 'exec-h01', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-011',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-01-09T03:00:00Z',
    trigger: { id: 'trig-h01', label: 'Weekly data audit', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [{ offsetMs: 0, description: 'Weekly audit batch', toolCategory: 'data_cleanup' }],
    durationMs: 5400, creditsUsed: 14_200, status: 'success',
    goal: 'Audit records weekly', outcomeSummaryFull: 'Weekly audit completed.', feedback: 'up',
  },
  {
    id: 'exec-h02', specialistId: 'persona-003', personaName: 'Onbi', deploymentId: 'dep-008',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-01-17T11:20:00Z',
    trigger: { id: 'trig-h02', label: 'Document collection batch', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [{ offsetMs: 0, description: 'Collected onboarding docs', toolCategory: 'data_cleanup' }],
    durationMs: 4200, creditsUsed: 16_500, status: 'success',
    goal: 'Collect onboarding documents', outcomeSummaryFull: 'All outstanding documents collected.', feedback: 'up',
  },
  {
    id: 'exec-h03', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-012',
    deploymentType: 'engage_less', activatedBy: 'ponder', timestamp: '2026-01-26T18:45:00Z',
    trigger: { id: 'trig-h03', label: 'Record cleanup', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [{ offsetMs: 0, description: 'Deduped contact records', toolCategory: 'data_cleanup' }],
    durationMs: 5100, creditsUsed: 14_800, status: 'success',
    goal: 'Dedup contact records', outcomeSummaryFull: 'Merged 48 duplicate records.', feedback: null,
  },

  // ── February 2026 (~55k credits) ───────────────────────────────────────────
  {
    id: 'exec-h04', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-011',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-02-03T04:00:00Z',
    trigger: { id: 'trig-h04', label: 'Weekly data audit', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [{ offsetMs: 0, description: 'Weekly audit batch', toolCategory: 'data_cleanup' }],
    durationMs: 5600, creditsUsed: 13_700, status: 'success',
    goal: 'Audit records weekly', outcomeSummaryFull: 'Weekly audit completed.', feedback: 'up',
  },
  {
    id: 'exec-h05', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-013',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-02-11T08:15:00Z',
    trigger: { id: 'trig-h05', label: 'Ops reporting', type: 'scheduled' },
    workflow: WORKFLOWS[9],
    steps: [{ offsetMs: 0, description: 'Generated ops report', toolCategory: 'data_cleanup' }],
    durationMs: 4800, creditsUsed: 15_200, status: 'success',
    goal: 'Generate ops report', outcomeSummaryFull: 'Report generated and distributed.', feedback: 'up',
  },
  {
    id: 'exec-h06', specialistId: 'persona-003', personaName: 'Onbi', deploymentId: 'dep-008',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-02-19T10:00:00Z',
    trigger: { id: 'trig-h06', label: 'Document collection batch', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [{ offsetMs: 0, description: 'Collected onboarding docs', toolCategory: 'data_cleanup' }],
    durationMs: 4100, creditsUsed: 13_400, status: 'success',
    goal: 'Collect onboarding documents', outcomeSummaryFull: 'All outstanding documents collected.', feedback: null,
  },
  {
    id: 'exec-h07', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-012',
    deploymentType: 'engage_less', activatedBy: 'ponder', timestamp: '2026-02-25T21:30:00Z',
    trigger: { id: 'trig-h07', label: 'Record cleanup', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [{ offsetMs: 0, description: 'Deduped contact records', toolCategory: 'data_cleanup' }],
    durationMs: 5200, creditsUsed: 12_900, status: 'incomplete',
    goal: 'Dedup contact records', outcomeSummaryFull: 'Partial cleanup — 65% of batch processed.', feedback: null,
  },

  // ── March 2026 (~70k credits) ──────────────────────────────────────────────
  {
    id: 'exec-h08', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-011',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-03-05T03:00:00Z',
    trigger: { id: 'trig-h08', label: 'Weekly data audit', type: 'scheduled' },
    workflow: WORKFLOWS[7],
    steps: [{ offsetMs: 0, description: 'Weekly audit batch', toolCategory: 'data_cleanup' }],
    durationMs: 5400, creditsUsed: 17_600, status: 'success',
    goal: 'Audit records weekly', outcomeSummaryFull: 'Weekly audit completed.', feedback: 'up',
  },
  {
    id: 'exec-h09', specialistId: 'persona-003', personaName: 'Onbi', deploymentId: 'dep-008',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-03-12T14:10:00Z',
    trigger: { id: 'trig-h09', label: 'Document collection batch', type: 'scheduled' },
    workflow: WORKFLOWS[5],
    steps: [{ offsetMs: 0, description: 'Collected onboarding docs', toolCategory: 'data_cleanup' }],
    durationMs: 4400, creditsUsed: 18_300, status: 'success',
    goal: 'Collect onboarding documents', outcomeSummaryFull: 'All outstanding documents collected.', feedback: 'up',
  },
  {
    id: 'exec-h10', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-012',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-03-21T19:50:00Z',
    trigger: { id: 'trig-h10', label: 'Record cleanup', type: 'scheduled' },
    workflow: WORKFLOWS[8],
    steps: [{ offsetMs: 0, description: 'Deduped contact records', toolCategory: 'data_cleanup' }],
    durationMs: 5300, creditsUsed: 16_800, status: 'success',
    goal: 'Dedup contact records', outcomeSummaryFull: 'Merged 53 duplicate records.', feedback: null,
  },
  {
    id: 'exec-h11', specialistId: 'persona-005', personaName: 'DataOps', deploymentId: 'dep-013',
    deploymentType: 'engage_less', activatedBy: 'workflow', timestamp: '2026-03-28T22:00:00Z',
    trigger: { id: 'trig-h11', label: 'Ops reporting', type: 'scheduled' },
    workflow: WORKFLOWS[9],
    steps: [{ offsetMs: 0, description: 'Generated ops report', toolCategory: 'data_cleanup' }],
    durationMs: 4900, creditsUsed: 17_400, status: 'success',
    goal: 'Generate ops report', outcomeSummaryFull: 'Report generated and distributed.', feedback: 'up',
  },
];

// ── Persona Usage Metadata ────────────────────────────────────────────────────

export const PERSONA_USAGE_META: PersonaUsageMeta[] = [
  // Erin (persona-001)
  { personaId: 'persona-001', period: '7d', triggersReceived: 12, triggersExecuted: 9 },
  { personaId: 'persona-001', period: 'prior_7d', triggersReceived: 10, triggersExecuted: 7 },
  { personaId: 'persona-001', period: 'all', triggersReceived: 248, triggersExecuted: 201 },

  // Sched (persona-002)
  { personaId: 'persona-002', period: '7d', triggersReceived: 8, triggersExecuted: 6 },
  { personaId: 'persona-002', period: 'prior_7d', triggersReceived: 11, triggersExecuted: 9 },
  { personaId: 'persona-002', period: 'all', triggersReceived: 173, triggersExecuted: 141 },

  // Onbi (persona-003)
  { personaId: 'persona-003', period: '7d', triggersReceived: 6, triggersExecuted: 5 },
  { personaId: 'persona-003', period: 'prior_7d', triggersReceived: 4, triggersExecuted: 3 },
  { personaId: 'persona-003', period: 'all', triggersReceived: 96, triggersExecuted: 82 },

  // Cassie (persona-004)
  { personaId: 'persona-004', period: '7d', triggersReceived: 15, triggersExecuted: 12 },
  { personaId: 'persona-004', period: 'prior_7d', triggersReceived: 13, triggersExecuted: 10 },
  { personaId: 'persona-004', period: 'all', triggersReceived: 312, triggersExecuted: 254 },

  // DataOps (persona-005)
  { personaId: 'persona-005', period: '7d', triggersReceived: 9, triggersExecuted: 8 },
  { personaId: 'persona-005', period: 'prior_7d', triggersReceived: 7, triggersExecuted: 7 },
  { personaId: 'persona-005', period: 'all', triggersReceived: 186, triggersExecuted: 165 },
];

// ── Constants ─────────────────────────────────────────────────────────────────

export const CREDIT_COST_RATE = 3.00;
export const MOCK_NOW = new Date('2026-04-15T00:00:00Z');

// ── Helper Functions ──────────────────────────────────────────────────────────

export interface TimeWindow { from: Date; to: Date; }

export function getWindow(range: TimeRange, now: Date = MOCK_NOW): TimeWindow {
  const to = now;
  const from = new Date(now);
  if (range === '24h') from.setHours(from.getHours() - 24);
  if (range === '7d')  from.setDate(from.getDate() - 7);
  if (range === '30d') from.setDate(from.getDate() - 30);
  // "All" spans a year back from now — generous enough to cover every
  // mock record while still giving getPriorWindow a finite duration.
  if (range === 'all') from.setFullYear(from.getFullYear() - 1);
  return { from, to };
}

export function getPriorWindow(range: TimeRange, now: Date = MOCK_NOW): TimeWindow {
  const { from, to } = getWindow(range, now);
  const duration = to.getTime() - from.getTime();
  return { from: new Date(from.getTime() - duration), to: from };
}

export function filterByWindow(records: ExecutionRecord[], window: TimeWindow): ExecutionRecord[] {
  return records.filter(r => {
    const ts = new Date(r.timestamp).getTime();
    return ts >= window.from.getTime() && ts < window.to.getTime();
  });
}

export function pctChange(current: number, prior: number): number | null {
  if (prior === 0 && current === 0) return null;
  if (prior === 0) return 100;
  return ((current - prior) / prior) * 100;
}

export function countGoalsAchieved(records: ExecutionRecord[]): number {
  let total = 0;
  for (const r of records) {
    if (r.deploymentType === 'engage_less') {
      if ((r as EngagelessExecution).status === 'success') total += 1;
    } else {
      total += (r as EngageExecution).conversations.filter(c => c.outcome === 'goal_achieved').length;
    }
  }
  return total;
}

export function countGoalsTotal(records: ExecutionRecord[]): number {
  let total = 0;
  for (const r of records) {
    if (r.deploymentType === 'engage_less') {
      total += 1;
    } else {
      total += (r as EngageExecution).conversations.length;
    }
  }
  return total;
}

// ── Engage-less step normalization ────────────────────────────────────────────
// The engage-less expanded view renders a Tool / Outcome table (matching the
// engage Conversations table). Each step needs a short polished label for the
// Tool column. Rather than hand-author one per step across ~150 steps, derive
// it from the existing description verb. Hand-authored `tool` values on a
// step override the derived label.

const COMMUNICATION_TOOL_BY_CHANNEL: Record<NonNullable<CommunicationChannel>, string> = {
  chat: 'Post to channel',
  email: 'Send email',
  sms: 'Send SMS',
};

const COMMUNICATION_TOOL_BY_VERB: Record<string, string> = {
  posted: 'Post to channel',
  post: 'Post to channel',
  shared: 'Post to channel',
  share: 'Post to channel',
  notified: 'Send notification',
  notify: 'Send notification',
  emailed: 'Send email',
  email: 'Send email',
  sent: 'Send message',
  send: 'Send message',
  routed: 'Route notification',
  pinged: 'Send notification',
  messaged: 'Send message',
  delivered: 'Deliver message',
  distributed: 'Distribute report',
  forwarded: 'Forward message',
  broadcast: 'Broadcast message',
};

const DATA_CLEANUP_TOOL_BY_VERB: Record<string, string> = {
  scanned: 'Scan records',
  scan: 'Scan records',
  compared: 'Compare records',
  compare: 'Compare records',
  checked: 'Check records',
  'cross-checked': 'Cross-check records',
  'spot-checked': 'Spot-check records',
  reviewed: 'Review records',
  review: 'Review records',
  found: 'Detect anomalies',
  detected: 'Detect anomalies',
  detect: 'Detect anomalies',
  identified: 'Identify candidates',
  identify: 'Identify candidates',
  flagged: 'Flag for review',
  flag: 'Flag for review',
  queued: 'Queue for review',
  'auto-corrected': 'Auto-correct fields',
  corrected: 'Auto-correct fields',
  'auto-resolved': 'Auto-resolve',
  resolved: 'Auto-resolve',
  'auto-merged': 'Auto-merge duplicates',
  merged: 'Merge records',
  matched: 'Reconcile records',
  reconciled: 'Reconcile records',
  validated: 'Validate document',
  validate: 'Validate document',
  verified: 'Verify records',
  verification: 'Verify records',
  verify: 'Verify records',
  generated: 'Generate report',
  generate: 'Generate report',
  updated: 'Update record',
  received: 'Receive request',
  saved: 'Save record',
  archived: 'Archive record',
  applied: 'Apply rules',
  apply: 'Apply rules',
  recalculated: 'Recalculate values',
  attempted: 'Reconcile records',
  analyzed: 'Analyze data',
  analyze: 'Analyze data',
  aggregated: 'Aggregate data',
  aggregate: 'Aggregate data',
  computed: 'Compute metrics',
  compute: 'Compute metrics',
  collected: 'Collect data',
  collect: 'Collect data',
  pulled: 'Pull data',
  pull: 'Pull data',
  processed: 'Process records',
  process: 'Process records',
  deduped: 'Dedupe records',
  dedupe: 'Dedupe records',
  normalized: 'Normalize fields',
  normalize: 'Normalize fields',
  logged: 'Log audit trail',
  log: 'Log audit trail',
  redacted: 'Redact PII',
  redact: 'Redact PII',
  audit: 'Audit records',
  audited: 'Audit records',
  reconciliation: 'Reconcile records',
  're-ran': 'Re-run job',
  rerun: 'Re-run job',
  halted: 'Halt run',
  waiting: 'Await dependency',
  await: 'Await dependency',
};

const SCHEDULING_TOOL_BY_VERB: Record<string, string> = {
  triggered: 'Trigger run',
  trigger: 'Trigger run',
  started: 'Initiate run',
  start: 'Initiate run',
  initiated: 'Initiate run',
  initiate: 'Initiate run',
  fired: 'Trigger run',
  scheduled: 'Schedule job',
  schedule: 'Schedule job',
  dispatched: 'Dispatch job',
  enqueued: 'Enqueue job',
  ponder: 'Trigger run',
  flagged: 'Trigger run',
};

const STOP_WORDS = new Set(['a', 'an', 'the', 'all', 'and', 'or', 'of', 'to', 'for', 'with', 'in', 'on', 'at', 'by']);

/**
 * Derive a short, presentable tool label from an execution step. The label is
 * shown in the "Tool" column of the engage-less expanded view. Used as a
 * fallback when a step doesn't carry a hand-authored `tool` value.
 *
 * Walks every word in `description` against the category's verb map. This
 * tolerates descriptions that lead with a noun, numeral, or scope adjective
 * ("Weekly HR data audit initiated", "3 employees missing NDAs", "Ops report
 * generation started") — they still resolve to a sensible action verb.
 */
export function deriveToolName(step: ExecutionStep): string {
  const dict =
    step.toolCategory === 'communication' ? COMMUNICATION_TOOL_BY_VERB
    : step.toolCategory === 'data_cleanup' ? DATA_CLEANUP_TOOL_BY_VERB
    : SCHEDULING_TOOL_BY_VERB;
  const tokens = step.description
    .toLowerCase()
    .replace(/[#,.]/g, ' ')
    .split(/\s+/)
    .filter(t => t && !STOP_WORDS.has(t) && !/^\d+%?$/.test(t));
  for (const t of tokens) {
    if (dict[t]) return dict[t];
  }
  if (step.toolCategory === 'communication') {
    return step.channel ? COMMUNICATION_TOOL_BY_CHANNEL[step.channel] : 'Send notification';
  }
  if (step.toolCategory === 'scheduling') return 'Schedule job';
  return 'Inspect data';
}

// Apply derivation in place so every engage-less step gets a `tool` value at
// module load. Hand-authored values pass through unchanged.
for (const record of MOCK_EXECUTIONS) {
  if (record.deploymentType !== 'engage_less') continue;
  for (const step of record.steps) {
    if (step.tool == null) step.tool = deriveToolName(step);
  }
}

// ── Engage-less primary tool (one per execution) ──────────────────────────────
// The engage-less expanded view renders a single Tool / Outcome row per
// activity. The tool label maps to the workflow's purpose (Document Collection
// → "Validate document", Weekly Data Audit → "Run data audit", etc.). Falls
// back to the first step's derived tool if a workflow isn't in the map.

const WORKFLOW_TOOL_BY_ID: Record<string, string> = {
  'wf-005': 'Run onboarding checklist',
  'wf-006': 'Validate document',
  'wf-007': 'Triage ticket',
  'wf-008': 'Run data audit',
  'wf-009': 'Run dedupe job',
  'wf-010': 'Generate ops report',
};

/**
 * Surface a single, polished tool label for an engage-less execution. The
 * label appears as the only row in the expanded view's Tool/Outcome table,
 * so it should read as the overall capability invoked (not a per-step verb).
 */
export function derivePrimaryTool(record: EngagelessExecution): string {
  const mapped = WORKFLOW_TOOL_BY_ID[record.workflow.id];
  if (mapped) return mapped;
  // Last-resort fallback — first step's tool.
  return record.steps[0]?.tool ?? deriveToolName(record.steps[0] ?? { offsetMs: 0, description: '', toolCategory: 'data_cleanup' });
}

/**
 * Map an engage-less run status to the public-facing outcome label used in the
 * Outcome status tag.
 */
export function primaryOutcomeLabel(status: EngagelessRunStatus): string {
  if (status === 'success') return 'Succeeded';
  if (status === 'in_progress') return 'In Progress';
  return 'Failed';
}

// ── Stat computation ──────────────────────────────────────────────────────────

export interface UsageStats {
  totalRuns: number;
  goalsAchieved: number;
  goalsTotal: number;
  successRate: number;
  avgDurationMs: number;
  totalCredits: number;
}

export function computeStats(records: ExecutionRecord[]): UsageStats {
  const totalRuns = records.length;
  const goalsAchieved = countGoalsAchieved(records);
  const goalsTotal = countGoalsTotal(records);
  const successRate = goalsTotal > 0 ? (goalsAchieved / goalsTotal) * 100 : 0;
  const avgDurationMs =
    totalRuns > 0
      ? records.reduce((sum, r) => sum + r.durationMs, 0) / totalRuns
      : 0;
  const totalCredits = records.reduce((sum, r) => sum + r.creditsUsed, 0);
  return { totalRuns, goalsAchieved, goalsTotal, successRate, avgDurationMs, totalCredits };
}

// ── Time-saved model ──────────────────────────────────────────────────────────
// Manual baselines: how long a human took to complete the same workflow + goal,
// stored per (workflowId, goal) pair. Used to estimate time saved by AI
// specialists vs manual completion.

export interface ManualBaseline {
  workflowId: string;
  /** Matches the `goal` field on ExecutionRecord exactly. */
  goal: string;
  /** Average human completion time, in milliseconds. */
  avgManualDurationMs: number;
  /** How many manual completions this average is based on. */
  sampleSize: number;
  /** Whether the baseline is real historical data or an admin estimate. */
  source: 'historical' | 'estimate';
}

export interface AccountConfig {
  /** Hourly labor rate in dollars used to convert time saved into cost saved. */
  hourlyRate: number;
}

export const ACCOUNT_CONFIG: AccountConfig = {
  hourlyRate: 30,
};

export const MANUAL_BASELINES: ManualBaseline[] = [
  // HR / People Ops
  { workflowId: 'wf-001', goal: 'Help employees update their profile information accurately', avgManualDurationMs: 900_000,   sampleSize: 45, source: 'historical' }, // 15 min
  { workflowId: 'wf-001', goal: 'Help employees understand and submit leave requests accurately', avgManualDurationMs: 1_200_000, sampleSize: 28, source: 'historical' }, // 20 min
  { workflowId: 'wf-001', goal: 'Proactively clarify confusing policies when multiple employees ask similar questions', avgManualDurationMs: 1_500_000, sampleSize: 18, source: 'estimate' }, // 25 min
  { workflowId: 'wf-002', goal: 'Ensure all eligible employees complete benefits enrollment before the deadline', avgManualDurationMs: 1_800_000, sampleSize: 22, source: 'historical' }, // 30 min
  { workflowId: 'wf-002', goal: 'Answer benefits policy questions accurately and promptly', avgManualDurationMs: 1_200_000, sampleSize: 36, source: 'historical' }, // 20 min

  // Scheduling
  { workflowId: 'wf-003', goal: 'Find replacement coverage for open shifts as quickly as possible', avgManualDurationMs: 2_400_000, sampleSize: 38, source: 'historical' }, // 40 min
  { workflowId: 'wf-003', goal: 'Proactively resolve scheduling conflicts before they cause coverage gaps', avgManualDurationMs: 1_800_000, sampleSize: 60, source: 'historical' }, // 30 min
  { workflowId: 'wf-003', goal: 'Facilitate shift swaps between eligible employees', avgManualDurationMs: 1_500_000, sampleSize: 33, source: 'historical' }, // 25 min
  { workflowId: 'wf-003', goal: 'Reconcile scheduled shifts with actual time-clock entries to detect discrepancies', avgManualDurationMs: 2_700_000, sampleSize: 14, source: 'estimate' }, // 45 min
  { workflowId: 'wf-003', goal: 'Close predicted coverage gaps before the shift starts', avgManualDurationMs: 1_500_000, sampleSize: 21, source: 'historical' }, // 25 min
  { workflowId: 'wf-004', goal: 'Notify employees of schedule changes and collect acknowledgments', avgManualDurationMs: 600_000, sampleSize: 52, source: 'historical' }, // 10 min
  { workflowId: 'wf-004', goal: 'Make sure every employee acknowledges their upcoming schedule', avgManualDurationMs: 900_000, sampleSize: 27, source: 'historical' }, // 15 min

  // Onboarding
  { workflowId: 'wf-005', goal: 'Guide new hires through their first-day onboarding checklist', avgManualDurationMs: 2_100_000, sampleSize: 19, source: 'historical' }, // 35 min
  { workflowId: 'wf-005', goal: 'Follow up with new hires who have incomplete onboarding items from day 1', avgManualDurationMs: 1_500_000, sampleSize: 25, source: 'historical' }, // 25 min
  { workflowId: 'wf-005', goal: 'Check in with new hires 2 weeks in to surface blockers', avgManualDurationMs: 1_200_000, sampleSize: 17, source: 'historical' }, // 20 min
  { workflowId: 'wf-005', goal: 'Ensure onboarding checklists are completed within the target timeframe', avgManualDurationMs: 1_800_000, sampleSize: 11, source: 'estimate' }, // 30 min
  { workflowId: 'wf-006', goal: 'Collect onboarding documents', avgManualDurationMs: 1_800_000, sampleSize: 24, source: 'historical' }, // 30 min
  { workflowId: 'wf-006', goal: 'Verify all employees meet monthly compliance training requirements', avgManualDurationMs: 3_600_000, sampleSize: 12, source: 'estimate' }, // 60 min
  { workflowId: 'wf-006', goal: 'Catch expiring work authorizations before they lapse', avgManualDurationMs: 1_500_000, sampleSize: 8, source: 'estimate' }, // 25 min

  // Customer Support
  { workflowId: 'wf-007', goal: 'Respond to P1 tickets within 5 minutes and begin troubleshooting immediately', avgManualDurationMs: 900_000, sampleSize: 80, source: 'historical' }, // 15 min
  { workflowId: 'wf-007', goal: 'Triage incoming support tickets and provide timely first responses', avgManualDurationMs: 720_000, sampleSize: 64, source: 'historical' }, // 12 min
  { workflowId: 'wf-007', goal: 'Process straightforward refund requests same-day within policy', avgManualDurationMs: 900_000, sampleSize: 40, source: 'historical' }, // 15 min
  { workflowId: 'wf-007', goal: 'Batch-resolve common FAQ questions efficiently', avgManualDurationMs: 600_000, sampleSize: 55, source: 'historical' }, // 10 min
  { workflowId: 'wf-007', goal: 'Route product feedback to the right team and close the loop with customers', avgManualDurationMs: 1_200_000, sampleSize: 22, source: 'historical' }, // 20 min

  // Data Ops
  { workflowId: 'wf-008', goal: 'Audit records weekly', avgManualDurationMs: 5_400_000, sampleSize: 20, source: 'historical' }, // 90 min
  { workflowId: 'wf-008', goal: 'Identify and resolve data inconsistencies in HR employee records', avgManualDurationMs: 4_500_000, sampleSize: 18, source: 'historical' }, // 75 min
  { workflowId: 'wf-008', goal: 'Identify and resolve data inconsistencies in employee records', avgManualDurationMs: 4_500_000, sampleSize: 16, source: 'historical' }, // 75 min
  { workflowId: 'wf-009', goal: 'Dedup contact records', avgManualDurationMs: 2_700_000, sampleSize: 15, source: 'historical' }, // 45 min
  { workflowId: 'wf-009', goal: 'Eliminate duplicate contact records to maintain data integrity', avgManualDurationMs: 2_700_000, sampleSize: 12, source: 'historical' }, // 45 min
  { workflowId: 'wf-009', goal: 'Clean up orphaned records in the staging table', avgManualDurationMs: 1_800_000, sampleSize: 10, source: 'historical' }, // 30 min
  { workflowId: 'wf-009', goal: 'Normalize inconsistent null representations across tables', avgManualDurationMs: 3_000_000, sampleSize: 9, source: 'estimate' }, // 50 min
  { workflowId: 'wf-010', goal: 'Generate ops report', avgManualDurationMs: 3_600_000, sampleSize: 18, source: 'historical' }, // 60 min
  { workflowId: 'wf-010', goal: 'Generate and distribute the weekly operations report to leadership', avgManualDurationMs: 4_500_000, sampleSize: 14, source: 'historical' }, // 75 min
  { workflowId: 'wf-010', goal: 'Deliver the monthly operations report to executive distribution', avgManualDurationMs: 5_400_000, sampleSize: 6, source: 'estimate' }, // 90 min
];

/** Lookup helper — finds a baseline matching the (workflowId, goal) pair. */
export function findBaseline(
  baselines: ManualBaseline[],
  workflowId: string,
  goal: string,
): ManualBaseline | undefined {
  return baselines.find(b => b.workflowId === workflowId && b.goal === goal);
}

export interface TimeSavedSummary {
  totalTimeSavedMs: number;
  costSaved: number;
  goalsWithBaseline: number;
  goalsWithoutBaseline: number;
}

/** Compute aggregate time saved across a set of executions. Only successful
 *  goals contribute. Goals without a matching baseline are counted in
 *  `goalsWithoutBaseline` so callers can surface coverage gaps. */
export function calculateTimeSaved(
  executions: ExecutionRecord[],
  baselines: ManualBaseline[] = MANUAL_BASELINES,
  config: AccountConfig = ACCOUNT_CONFIG,
): TimeSavedSummary {
  let totalTimeSavedMs = 0;
  let goalsWithBaseline = 0;
  let goalsWithoutBaseline = 0;

  for (const exec of executions) {
    const baseline = findBaseline(baselines, exec.workflow.id, exec.goal);

    if (exec.deploymentType === 'engage_less') {
      if (exec.status !== 'success') continue;
      if (!baseline) { goalsWithoutBaseline += 1; continue; }
      totalTimeSavedMs += Math.max(baseline.avgManualDurationMs - exec.durationMs, 0);
      goalsWithBaseline += 1;
    } else {
      const resolvedCount = exec.conversations.filter(c => c.outcome === 'goal_achieved').length;
      if (resolvedCount === 0) continue;
      if (!baseline) { goalsWithoutBaseline += resolvedCount; continue; }
      const durationPerConversation = exec.durationMs / Math.max(1, exec.conversations.length);
      const savedPerGoal = Math.max(baseline.avgManualDurationMs - durationPerConversation, 0);
      totalTimeSavedMs += savedPerGoal * resolvedCount;
      goalsWithBaseline += resolvedCount;
    }
  }

  const totalHoursSaved = totalTimeSavedMs / 3_600_000;
  const costSaved = totalHoursSaved * config.hourlyRate;
  return { totalTimeSavedMs, costSaved, goalsWithBaseline, goalsWithoutBaseline };
}

/** Per-bucket breakdown of time saved. Buckets default to ISO date strings,
 *  but the caller can pass a custom `bucketFn` to roll up to months etc. */
export function timeSavedByBucket(
  executions: ExecutionRecord[],
  bucketFn: (timestamp: string) => string,
  baselines: ManualBaseline[] = MANUAL_BASELINES,
): Record<string, number> {
  const out: Record<string, number> = {};
  for (const exec of executions) {
    const baseline = findBaseline(baselines, exec.workflow.id, exec.goal);
    if (!baseline) continue;
    let savedMs = 0;
    if (exec.deploymentType === 'engage_less') {
      if (exec.status !== 'success') continue;
      savedMs = Math.max(baseline.avgManualDurationMs - exec.durationMs, 0);
    } else {
      const resolvedCount = exec.conversations.filter(c => c.outcome === 'goal_achieved').length;
      if (resolvedCount === 0) continue;
      const durationPerConversation = exec.durationMs / Math.max(1, exec.conversations.length);
      savedMs = Math.max(baseline.avgManualDurationMs - durationPerConversation, 0) * resolvedCount;
    }
    if (savedMs <= 0) continue;
    const key = bucketFn(exec.timestamp);
    out[key] = (out[key] ?? 0) + savedMs;
  }
  return out;
}
