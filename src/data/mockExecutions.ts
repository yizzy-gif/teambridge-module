// Execution records for AI Specialist usage tracking.
// All stat cards and chart data are derived by filtering + reducing this array.
// Swap the MOCK_EXECUTIONS export for a real API call when the backend is ready.

// ── Types ─────────────────────────────────────────────────────────────────────

export type ToolCategory = 'communication' | 'data_cleanup' | 'scheduling';
export type CommunicationChannel = 'chat' | 'email' | 'sms';
export type FeedbackValue = 'up' | 'down' | null;
export type TimeRange = '24h' | '7d' | '30d';
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
export interface ExecutionStep { offsetMs: number; description: string; toolCategory: ToolCategory; channel?: CommunicationChannel; }

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
    creditsUsed: 1250,
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
    creditsUsed: 1800,
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
    creditsUsed: 34500,
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
    creditsUsed: 980,
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
    creditsUsed: 31200,
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
    creditsUsed: 2100,
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
    creditsUsed: 1650,
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
    creditsUsed: 38900,
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
    creditsUsed: 1420,
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
    creditsUsed: 2200,
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
    creditsUsed: 28600,
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
    creditsUsed: 12400,
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
    creditsUsed: 1100,
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
    creditsUsed: 2800,
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
    creditsUsed: 680,
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
    creditsUsed: 890,
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
    creditsUsed: 450,
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
    creditsUsed: 42800,
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
    creditsUsed: 47200,
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
    creditsUsed: 18600,
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
    creditsUsed: 22100,
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
    creditsUsed: 39500,
    status: 'in_progress',
    goal: 'Identify and resolve data inconsistencies in employee records',
    outcomeSummaryFull: 'Weekly data audit scanned 2,412 records. Found 5 with stale location data: 3 auto-corrected, 2 flagged for review. Report generation pending \u2014 awaiting confirmation from ops lead before posting.',
    feedback: null,
  },
];

// ── Persona Usage Metadata ────────────────────────────────────────────────────

export const PERSONA_USAGE_META: PersonaUsageMeta[] = [
  // Erin (persona-001)
  { personaId: 'persona-001', period: '7d', triggersReceived: 12, triggersExecuted: 9 },
  { personaId: 'persona-001', period: 'prior_7d', triggersReceived: 10, triggersExecuted: 7 },

  // Sched (persona-002)
  { personaId: 'persona-002', period: '7d', triggersReceived: 8, triggersExecuted: 6 },
  { personaId: 'persona-002', period: 'prior_7d', triggersReceived: 11, triggersExecuted: 9 },

  // Onbi (persona-003)
  { personaId: 'persona-003', period: '7d', triggersReceived: 6, triggersExecuted: 5 },
  { personaId: 'persona-003', period: 'prior_7d', triggersReceived: 4, triggersExecuted: 3 },

  // Cassie (persona-004)
  { personaId: 'persona-004', period: '7d', triggersReceived: 15, triggersExecuted: 12 },
  { personaId: 'persona-004', period: 'prior_7d', triggersReceived: 13, triggersExecuted: 10 },

  // DataOps (persona-005)
  { personaId: 'persona-005', period: '7d', triggersReceived: 9, triggersExecuted: 8 },
  { personaId: 'persona-005', period: 'prior_7d', triggersReceived: 7, triggersExecuted: 7 },
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
