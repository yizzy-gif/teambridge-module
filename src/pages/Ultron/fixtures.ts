/* ─────────────────────────────────────────────────────────────────────────────
   Ultron demo fixtures
   Merged from the two source datasets:
     · ultron-demo-scenarios.json  → narrative fields (event, assessment,
       recommendation, outcome, workflowOpportunity), plus name + capability.
     · ultron-sample-threads.json  → severity, timeline shape, action labels
       where a scenario matched a thread.
   For scenarios with no thread match, severity / a 3–4 step timeline /
   1–2 action labels were authored from the recommendation text.

   Notes:
   · The "fill_rate_investigation" / Navigation Agent scenario is EXCLUDED.
   · `status` is not pinned to either source by the merge rules, so a coherent
     demo distribution was chosen to exercise every lifecycle state and the
     purple "save as workflow" path. Two scenarios were re-stated from
     'monitoring' for that purpose, flagged inline below:
       - credential_expiring → 'resolved'           (resolved + workflowOpportunity → purple row)
       - retention_risk      → 'workflow_available'  (explicit workflow-ready row)
   · Array order is authored most-recent-first; recency sorting relies on it.
   ───────────────────────────────────────────────────────────────────────────── */

import type { ThreadItem } from './types';

export const ultronThreads: ThreadItem[] = [
  // ── Deck members (needs_approval) ──────────────────────────────────────────
  {
    id: 'callout_recovery',
    name: 'Employee Call-Out Recovery',
    title: 'Maria Lopez called out of tomorrow’s RN shift',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'Maria Lopez called out of her RN shift tomorrow at 8:00 AM.',
    assessment: 'Coverage risk detected. No replacement assigned and shift begins in 18 hours.',
    recommendation: 'Contact top replacement candidates and notify manager.',
    outcome: null,
    workflowOpportunity: 'Automate future call-out recovery.',
    timeline: [
      { state: 'detected', headline: 'RN shift released for tomorrow morning', done: true },
      { state: 'assessment', headline: 'Coverage is at risk', done: true },
      { state: 'recommendation', headline: '12 qualified replacements identified', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    // Multi-action prompt → "Yes, do it all" primary + these individual actions.
    actions: ['Contact candidates', 'Notify manager'],
    timestamp: '8m ago',
  },
  {
    id: 'no_show',
    name: 'Employee No Show',
    title: 'John Smith failed to clock in for his shift',
    capability: 'Attendance Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'John Smith failed to clock in 20 minutes after shift start.',
    assessment: 'Likely no-show. Coverage risk detected.',
    recommendation: 'Contact employee, notify manager, begin replacement search.',
    outcome: null,
    workflowOpportunity: 'Automate no-show response.',
    timeline: [
      { state: 'detected', headline: 'No clock-in 20 minutes after shift start', done: true },
      { state: 'assessment', headline: 'Pattern matches a likely no-show', done: true },
      { state: 'recommendation', headline: 'Outreach + replacement plan prepared', done: true },
      { state: 'approval', headline: 'Approval required to begin recovery', done: false },
    ],
    actions: ['Reach out to John', 'Notify manager', 'Start replacement search'],
    timestamp: '14m ago',
  },
  {
    id: 'payroll_exception',
    name: 'Payroll Exception',
    title: 'Missing clock-out detected on a timesheet',
    capability: 'Payroll Operations',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Employee clocked in but never clocked out.',
    assessment: 'Payroll discrepancy detected.',
    recommendation: 'Approve estimated end time.',
    outcome: null,
    workflowOpportunity: 'Automate timesheet exception handling.',
    timeline: [
      { state: 'detected', headline: 'Open punch found on yesterday’s timesheet', done: true },
      { state: 'assessment', headline: 'Estimated end time derived from schedule', done: true },
      { state: 'recommendation', headline: 'Proposed correction ready for review', done: true },
      { state: 'approval', headline: 'Approval required to correct payroll', done: false },
    ],
    // "Review" is a refinement stub.
    actions: ['Review', 'Approve End Time'],
    timestamp: '22m ago',
  },

  // ── Deck members (recommended) ─────────────────────────────────────────────
  {
    id: 'fill_risk',
    name: 'Shift Unlikely To Fill',
    title: 'Weekend RN shift unlikely to fill at current rate',
    capability: 'Fill Optimization',
    status: 'recommended',
    severity: 'medium',
    event: 'Weekend RN shift has remained open for 5 days.',
    assessment: 'Fill probability is only 22% at current pay rate.',
    recommendation: 'Increase pay by $3/hr and notify nearby qualified workers.',
    outcome: null,
    workflowOpportunity: 'Auto-adjust rates when fill probability falls below threshold.',
    timeline: [
      { state: 'detected', headline: 'Shift open 5 days', done: true },
      { state: 'assessment', headline: 'Fill probability 22% at current rate', done: true },
      { state: 'recommendation', headline: 'Rate increase + targeted outreach proposed', done: false },
    ],
    actions: ['Raise pay $3/hr', 'Notify nearby workers'],
    timestamp: '35m ago',
  },
  {
    id: 'overtime_risk',
    name: 'Overtime Risk',
    title: 'Projected overtime exceeds budget this week',
    capability: 'Labor Optimization',
    status: 'recommended',
    severity: 'medium',
    event: 'Projected overtime exceeds budget by $4,200 this week.',
    assessment: 'Two employees account for most projected overtime.',
    recommendation: 'Rebalance schedules.',
    outcome: null,
    workflowOpportunity: 'Automate overtime optimization recommendations.',
    timeline: [
      { state: 'detected', headline: 'Projected overtime $4,200 over budget', done: true },
      { state: 'assessment', headline: 'Two employees drive most of the overage', done: true },
      { state: 'recommendation', headline: 'Schedule rebalance plan prepared', done: false },
    ],
    // "Review Schedule" is a refinement stub.
    actions: ['Review Schedule', 'Rebalance Schedules'],
    timestamp: '1h ago',
  },
  {
    id: 'order_fill_strategy',
    name: 'Open Order Optimization',
    title: 'High-priority facility order is not filling',
    capability: 'Marketplace Optimization',
    status: 'recommended',
    severity: 'medium',
    event: 'High-priority facility order is not filling.',
    assessment: 'Pay rate is below local market average.',
    recommendation: 'Increase rate and expand search radius.',
    outcome: null,
    workflowOpportunity: 'Automate fill strategy optimization.',
    timeline: [
      { state: 'detected', headline: 'Priority order stalled', done: true },
      { state: 'assessment', headline: 'Rate is below local market average', done: true },
      { state: 'recommendation', headline: 'Rate + radius adjustment proposed', done: false },
    ],
    // "Adjust Rate" is a refinement stub.
    actions: ['Raise the rate', 'Expand search radius'],
    timestamp: '1h ago',
  },
  {
    id: 'candidate_match',
    name: 'Strong Applicant Match',
    title: 'New CNA applicant is a 92% match',
    capability: 'Recruiting',
    status: 'recommended',
    severity: 'low',
    event: 'New CNA applicant submitted an application.',
    assessment: '92% match for open CNA position.',
    recommendation: 'Schedule interview.',
    outcome: null,
    workflowOpportunity: 'Auto-advance qualified applicants.',
    timeline: [
      { state: 'detected', headline: 'New CNA application received', done: true },
      { state: 'assessment', headline: '92% match for open position', done: true },
      { state: 'recommendation', headline: 'Interview recommended', done: false },
    ],
    actions: ['Schedule Interview'],
    timestamp: '2h ago',
  },

  // ── Stream members ─────────────────────────────────────────────────────────
  {
    id: 'autonomous_callout',
    name: 'Overnight Autonomous Recovery',
    title: 'Shift covered automatically overnight',
    capability: 'Autonomous Operations',
    status: 'auto_resolved',
    severity: 'high',
    event: 'Employee called out at 2:00 AM.',
    assessment: 'Coverage risk detected overnight.',
    recommendation: 'No approval required based on configured policy.',
    outcome: 'Replacement found in 17 minutes. Manager notified.',
    workflowOpportunity: 'Autonomous staffing recovery enabled.',
    timeline: [
      { state: 'detected', headline: 'Call-out received at 2:00 AM', done: true },
      { state: 'assessment', headline: 'Coverage risk + autonomous policy match', done: true },
      { state: 'execution', headline: 'Contacted candidates and filled the shift', done: true },
      { state: 'resolution', headline: 'Replacement confirmed · manager notified', done: true },
    ],
    actions: [],
    timestamp: '6h ago',
  },
  {
    id: 'attendance_risk',
    name: 'Attendance Risk Detected',
    title: 'Attendance trend worsening for one employee',
    capability: 'Workforce Insights',
    status: 'monitoring',
    severity: 'low',
    event: 'Employee has 4 late arrivals this month.',
    assessment: 'Attendance trend worsening.',
    recommendation: 'Manager coaching conversation recommended.',
    outcome: null,
    workflowOpportunity: 'Attendance escalation workflow.',
    timeline: [
      { state: 'detected', headline: '4 late arrivals this month', done: true },
      { state: 'assessment', headline: 'Trend is worsening month-over-month', done: true },
      { state: 'monitoring', headline: 'Watching for further attendance slips', done: false },
    ],
    actions: ['Open Coaching Note'],
    timestamp: '4h ago',
  },
  {
    id: 'credential_expiring',
    name: 'Credential Expiration',
    title: 'RN license renewed before expiration',
    capability: 'Compliance',
    // Re-stated from 'monitoring' → 'resolved' to exercise the
    // resolved-with-workflowOpportunity (purple) row treatment.
    status: 'resolved',
    severity: 'low',
    event: 'RN license expires in 14 days.',
    assessment: 'Future assignments may become non-compliant.',
    recommendation: 'Send renewal reminder and notify manager.',
    outcome: 'License renewed before expiration.',
    workflowOpportunity: 'Automate credential reminders.',
    timeline: [
      { state: 'detected', headline: 'RN license expires in 14 days', done: true },
      { state: 'assessment', headline: 'Upcoming assignments would be non-compliant', done: true },
      { state: 'recommendation', headline: 'Renewal reminder sent to employee + manager', done: true },
      { state: 'resolution', headline: 'License renewed before expiration', done: true },
    ],
    actions: ['Send Reminder'],
    timestamp: '3h ago',
  },
  {
    id: 'retention_risk',
    name: 'Employee Retention Risk',
    title: 'Top performer reduced availability by 60%',
    capability: 'Employee Retention',
    // Re-stated from 'monitoring' → 'workflow_available' to exercise the
    // explicit workflow-ready row treatment.
    status: 'workflow_available',
    severity: 'none',
    event: 'Top-performing RN reduced availability by 60%.',
    assessment: 'Potential retention risk detected.',
    recommendation: 'Schedule manager check-in.',
    outcome: 'Conversation scheduled.',
    workflowOpportunity: 'Retention risk monitoring.',
    timeline: [
      { state: 'detected', headline: 'Availability dropped 60%', done: true },
      { state: 'assessment', headline: 'Flagged as a retention risk', done: true },
      { state: 'recommendation', headline: 'Manager check-in scheduled', done: true },
      { state: 'workflow', headline: 'Recurring pattern ready to save as a workflow', done: true },
    ],
    actions: ['Schedule Check-In'],
    timestamp: 'Yesterday',
  },
  {
    id: 'unfilled_shift',
    name: 'Shift Still Unfilled',
    title: "Dana Whitfield's shift still has no replacement",
    capability: 'Coverage Recovery',
    status: 'unresolved',
    severity: 'high',
    event: 'Automated outreach closed with no acceptances.',
    assessment: 'No candidates accepted; the shift remains uncovered and needs a decision.',
    recommendation: 'Offer a $5/hr incentive or escalate to the on-call pool.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Replacement search opened', done: true },
      { state: 'execution', headline: 'Contacted 12 candidates — no acceptances', done: true },
      { state: 'assessment', headline: 'Shift still uncovered — needs a decision', done: false },
    ],
    // Unresolved cases use the shared UNRESOLVED_ACTIONS in the detail view;
    // these mirror them. "Revisit" / "Update" are stubs; "Resolve" runs the fix.
    actions: ['Revisit', 'Update', 'Resolve'],
    timestamp: '30m ago',
  },
];

/** Person each case is about — drives the deck card's profile avatar (with an
 *  initials fallback when the photo can't load). */
export const THREAD_SUBJECTS: Record<string, string> = {
  callout_recovery: 'Maria Lopez',
  no_show: 'John Smith',
  payroll_exception: 'Devon Carter',
  fill_risk: 'Priya Nair',
  overtime_risk: 'Marcus Lee',
  order_fill_strategy: 'Elena Rossi',
  candidate_match: 'Aisha Khan',
  autonomous_callout: 'Nina Alvarez',
  attendance_risk: 'Tyler Brooks',
  credential_expiring: 'Robert Chen',
  retention_risk: 'Sara Donovan',
  unfilled_shift: 'Dana Whitfield',
};

/** Card title prefixed with the subject's name, e.g. "Marcus Lee projected
 *  overtime exceeds budget this week". Titles that already lead with the name
 *  are left untouched; a leading acronym (RN, CNA) keeps its casing. */
export function threadDisplayTitle(thread: ThreadItem): string {
  const name = THREAD_SUBJECTS[thread.id];
  if (!name || thread.title.startsWith(name)) return thread.title;
  const firstWord = thread.title.split(' ')[0] ?? '';
  const keepCase = firstWord === firstWord.toUpperCase(); // acronym like "RN" / "CNA"
  const rest = keepCase ? thread.title : thread.title.charAt(0).toLowerCase() + thread.title.slice(1);
  return `${name} ${rest}`;
}

/** Demo placeholder profile photo, stable per case (seeded by thread id). */
export const threadAvatarUrl = (id: string): string =>
  `https://i.pravatar.cc/80?u=${id}`;

/** The recommendation phrased as a question — a clear call to action that the
 *  decision buttons answer. Shown as the card prompt (falls back to the
 *  imperative `recommendation` if missing). */
export const THREAD_PROMPTS: Record<string, string> = {
  callout_recovery: 'Want me to contact the top replacement candidates and notify the manager?',
  no_show: 'Want me to reach out to John, notify the manager, and start a replacement search?',
  payroll_exception: 'Approve the estimated end time?',
  fill_risk: 'Want me to raise pay by $3/hr and notify nearby qualified workers?',
  overtime_risk: 'Want me to rebalance the schedules to cut the projected overtime?',
  order_fill_strategy: 'Want me to raise the rate and expand the search radius?',
  candidate_match: 'Want me to schedule an interview with this applicant?',
  credential_expiring: 'Want me to send a renewal reminder and notify the manager?',
  attendance_risk: 'Want me to open a coaching note for the manager?',
  retention_risk: 'Want me to schedule a manager check-in?',
  autonomous_callout: 'No action needed — Ultron handled this automatically.',
  unfilled_shift: 'Want me to offer a $5/hr incentive and escalate to the on-call pool?',
};

/** Real, scenario-specific milestones shown one-by-one while a thread executes
 *  (Live stream): outreach → monitoring → acceptance. Three per case to match
 *  the execution timing. Falls back to generic labels if a case has none. */
/** `icon` is a key mapped to an Alloy icon in the view (fixtures can't hold JSX). */
export type WorkingIcon = 'send' | 'clock' | 'done' | 'rate' | 'chart' | 'edit' | 'alert';

export interface WorkingMilestone {
  icon: WorkingIcon;
  headline: string;
  detail: string;
}

export const WORKING_ACTIVITIES: Record<string, WorkingMilestone[]> = {
  callout_recovery: [
    { icon: 'send',  headline: 'Outreach sent to 12 candidates', detail: 'Coverage requests delivered to qualified RNs.' },
    { icon: 'clock', headline: 'Tracking responses', detail: '3 viewed · 1 interested · 0 accepted.' },
    { icon: 'done',  headline: 'Sarah Kim is the strongest match', detail: 'Available, 94% match.' },
  ],
  no_show: [
    { icon: 'send',  headline: 'Contacting John and replacements', detail: 'Outreach sent; manager notified.' },
    { icon: 'clock', headline: 'Tracking responses', detail: 'Waiting on candidate confirmations.' },
    { icon: 'done',  headline: 'Replacement confirmed', detail: 'Coverage secured for the shift.' },
  ],
  payroll_exception: [
    { icon: 'clock', headline: 'Estimating end time', detail: 'Deriving from schedule and punch history.' },
    { icon: 'edit',  headline: 'Applying correction', detail: 'Updating the open timesheet.' },
    { icon: 'done',  headline: 'Payroll corrected', detail: 'Adjustment recorded for approval.' },
  ],
  fill_risk: [
    { icon: 'rate',  headline: 'Raising pay by $3/hr', detail: 'Updating the posting rate.' },
    { icon: 'send',  headline: 'Notifying nearby workers', detail: 'Targeted outreach to qualified RNs.' },
    { icon: 'done',  headline: 'Two qualified RNs applied', detail: 'Awaiting your approval.' },
  ],
  overtime_risk: [
    { icon: 'chart', headline: 'Rebalancing schedules', detail: 'Shifting hours off two over-budget employees.' },
    { icon: 'send',  headline: 'Confirming swaps', detail: 'Notifying affected employees.' },
    { icon: 'done',  headline: 'Overtime reduced', detail: 'Projected overage down 35%.' },
  ],
  order_fill_strategy: [
    { icon: 'rate',  headline: 'Raising rate & expanding radius', detail: 'Updating the order parameters.' },
    { icon: 'send',  headline: 'Re-marketing the order', detail: 'Reaching a wider candidate pool.' },
    { icon: 'done',  headline: 'Candidates applying', detail: 'Three qualified candidates so far.' },
  ],
  candidate_match: [
    { icon: 'clock', headline: 'Finding an interview slot', detail: 'Checking mutual availability.' },
    { icon: 'send',  headline: 'Sending the invite', detail: 'Notifying the applicant and hiring manager.' },
    { icon: 'done',  headline: 'Interview completed — strong feedback', detail: 'Ready for a decision.' },
  ],
  unfilled_shift: [
    { icon: 'rate',  headline: 'Adding a $5/hr incentive', detail: 'Updating the shift offer.' },
    { icon: 'send',  headline: 'Escalating to the on-call pool', detail: 'Notifying available on-call RNs.' },
    { icon: 'done',  headline: 'On-call RN accepted', detail: 'Coverage restored with the incentive.' },
  ],
};

/** Multi-step cases: after the first action's work completes, Ultron asks a
 *  follow-up question (the case returns to "Needs attention") before the
 *  second action resolves it. */
/** A record the question references (a worker, shift, location, policy…),
 *  shown as a context card under the prompt. */
export interface RecordRef {
  eyebrow: string;
  title: string;
  meta: string[];
  avatarSeed: string;
}

export interface ThreadFollowUp {
  prompt: string;
  actions: string[];
  working: WorkingMilestone[];
  record?: RecordRef;
}

export const THREAD_FOLLOWUPS: Record<string, ThreadFollowUp> = {
  callout_recovery: {
    prompt: 'Sarah Kim (94% match) is available. Assign her to the shift?',
    actions: ['Review', 'Assign Sarah'],
    working: [
      { icon: 'edit',  headline: 'Assigning Sarah to the shift', detail: '' },
      { icon: 'clock', headline: 'Updating the schedule', detail: '' },
      { icon: 'done',  headline: 'Coverage confirmed', detail: '' },
    ],
    record: { eyebrow: 'RN', title: 'Sarah Kim', meta: ['Los Angeles', '4 yr Exp', 'Available immediately'], avatarSeed: 'sarah_kim' },
  },
  fill_risk: {
    prompt: 'Two RNs applied. Approve the top applicant for the shift?',
    actions: ['Review', 'Approve Applicant'],
    working: [
      { icon: 'edit',  headline: 'Approving the applicant', detail: '' },
      { icon: 'clock', headline: 'Updating the schedule', detail: '' },
      { icon: 'done',  headline: 'Shift filled', detail: '' },
    ],
    record: { eyebrow: 'RN', title: 'Jordan Reyes', meta: ['Top applicant', '3 yr Exp', 'Available'], avatarSeed: 'jordan_reyes' },
  },
  candidate_match: {
    prompt: 'The interview went well. Send an offer to the candidate?',
    actions: ['Review', 'Send Offer'],
    working: [
      { icon: 'send',  headline: 'Sending the offer', detail: '' },
      { icon: 'clock', headline: 'Awaiting acceptance', detail: '' },
      { icon: 'done',  headline: 'Offer accepted', detail: '' },
    ],
    record: { eyebrow: 'CNA Applicant', title: 'Aisha Khan', meta: ['Interview: strong', '2 yr Exp', 'Available'], avatarSeed: 'candidate_match' },
  },
};

/** Stage-0 record(s) referenced by each thread's question. A single record for
 *  most cases; a short ranked list where the question is about choosing among
 *  candidates (rendered as a vertical stack of record cards). */
export const THREAD_RECORDS: Record<string, RecordRef | RecordRef[]> = {
  callout_recovery: [
    { eyebrow: 'RN', title: 'Sarah Kim',    meta: ['94% match', 'Available now', 'Strong attendance'], avatarSeed: 'sarah_kim' },
    { eyebrow: 'RN', title: 'James Carter',  meta: ['91% match', 'Available now', 'Good attendance'],   avatarSeed: 'james_carter' },
    { eyebrow: 'RN', title: 'Priya Patel',   meta: ['88% match', 'Available now', 'Within radius'],     avatarSeed: 'priya_patel' },
  ],
  no_show:           { eyebrow: 'RN', title: 'John Smith', meta: ['No-show', 'Day shift', '20m late'], avatarSeed: 'no_show' },
  payroll_exception: { eyebrow: 'Timesheet', title: 'Devon Carter', meta: ['Missing clock-out', 'Yesterday'], avatarSeed: 'payroll_exception' },
  candidate_match:   { eyebrow: 'CNA Applicant', title: 'Aisha Khan', meta: ['92% match', '2 yr Exp', 'Available'], avatarSeed: 'candidate_match' },
  unfilled_shift:    { eyebrow: 'Open RN shift', title: 'Saturday · 7:00 PM', meta: ['Night', '1 RN needed', 'No replacement'], avatarSeed: 'unfilled_shift' },
};

/** The record a resolved thread fulfilled — the assigned/approved/hired person,
 *  shown on the resolved card so the final outcome has a concrete subject. */
export const THREAD_RESOLVED_RECORDS: Record<string, RecordRef> = {
  callout_recovery:   { eyebrow: 'RN · Assigned',       title: 'Sarah Kim',    meta: ['Coverage restored', 'Night shift', 'Tomorrow 8:00 AM'], avatarSeed: 'sarah_kim' },
  no_show:            { eyebrow: 'RN · Replacement',    title: 'Priya Patel',  meta: ['Shift covered', 'Day shift'],                          avatarSeed: 'priya_patel' },
  fill_risk:          { eyebrow: 'RN · Approved',       title: 'Jordan Reyes', meta: ['Shift filled', '3 yr Exp'],                            avatarSeed: 'jordan_reyes' },
  candidate_match:    { eyebrow: 'CNA · Offer accepted', title: 'Aisha Khan',   meta: ['Onboarding started', '2 yr Exp'],                       avatarSeed: 'candidate_match' },
  autonomous_callout: { eyebrow: 'RN · Auto-assigned',  title: 'Daniel Brooks', meta: ['ICU · Night shift', '7:00 PM–7:00 AM', '6 yr Exp'],       avatarSeed: 'auto_fill' },
};

/** Past-activity breakdown shown (expandable) on a resolved card. A block is a
 *  paragraph, and/or a labeled bullet list, and/or a labeled check list. */
export interface ActivityBlock {
  text?: string;
  label?: string;
  bullets?: string[];
  checks?: string[];
}

export interface ActivityMilestone {
  icon: WorkingIcon;
  headline: string;
  blocks?: ActivityBlock[];
}

const THREAD_ACTIVITY: Record<string, ActivityMilestone[]> = {
  callout_recovery: [
    {
      icon: 'clock',
      headline: 'RN shift released for tomorrow morning',
      blocks: [{ text: 'Maria Lopez called out of her 8:00 AM RN shift, leaving it open.' }],
    },
    {
      icon: 'alert',
      headline: 'Coverage is at risk',
      blocks: [{
        bullets: [
          'Shift begins in 18 hours',
          'No replacement currently assigned',
          'Similar shifts typically require 4–6 hours to fill',
          'Staffing levels would fall below target',
        ],
      }],
    },
    {
      icon: 'send',
      headline: '12 qualified replacements identified',
      blocks: [
        { text: 'Ultron found employees that match role requirements, availability, attendance history, and commute distance.' },
        { label: 'Top Matches', bullets: ['Sarah Kim — 94%', 'James Carter — 91%', 'Priya Patel — 88%'] },
        { label: 'Matching Factors', checks: ['RN qualified', 'Available during shift', 'Strong attendance history', 'Within commute radius'] },
      ],
    },
    {
      icon: 'done',
      headline: 'Sarah Kim assigned — coverage restored',
      blocks: [{ checks: ['Shift assigned to Sarah Kim', 'Schedule updated', 'Manager notified'] }],
    },
  ],
  autonomous_callout: [
    {
      icon: 'clock',
      headline: 'Call-out received at 2:00 AM',
      blocks: [{ text: 'Nina Alvarez reported she could not work her overnight RN shift.' }],
    },
    {
      icon: 'alert',
      headline: 'Coverage risk + autonomous policy match',
      blocks: [{
        bullets: [
          'Shift starts in under 5 hours',
          'No replacement assigned',
          'Unit would fall below minimum safe staffing',
          'Matches the "autonomous overnight recovery" policy',
        ],
      }],
    },
    {
      icon: 'edit',
      headline: 'Contacted candidates and filled the shift',
      blocks: [
        { text: 'Ultron ranked qualified RNs by availability, attendance, and commute, then reached out automatically — no approval required under policy.' },
        { label: 'Outreach', bullets: ['Messaged 8 qualified RNs', 'First positive reply in 9 min', 'Daniel Brooks accepted'] },
        { label: 'Matching Factors', checks: ['RN qualified', 'Available overnight', 'Strong attendance history', 'Within commute radius'] },
      ],
    },
    {
      icon: 'done',
      headline: 'Replacement confirmed · manager notified',
      blocks: [{
        checks: ['Shift assigned to Daniel Brooks', 'Schedule updated', 'Manager notified', 'Resolved in 17 minutes'],
      }],
    },
  ],
  no_show: [
    {
      icon: 'clock',
      headline: 'No clock-in 20 minutes after shift start',
      blocks: [{ text: 'John Smith was scheduled at 7:00 AM and has not badged in or responded to the reminder.' }],
    },
    {
      icon: 'alert',
      headline: 'Pattern matches a likely no-show',
      blocks: [{ bullets: ['2 no-shows in the last 30 days', 'No reply to the clock-in reminder', 'Past the 15-minute grace window'] }],
    },
    {
      icon: 'send',
      headline: 'Outreach + replacement plan prepared',
      blocks: [
        { text: 'Ultron drafted outreach to John and lined up replacements in case he does not respond.' },
        { label: 'Replacement shortlist', bullets: ['Priya Patel — available now', 'James Carter — available now'] },
      ],
    },
    {
      icon: 'edit',
      headline: 'Approval required to begin recovery',
      blocks: [{ text: 'Awaiting approval to message John, alert the manager, and start the replacement search.' }],
    },
  ],
  payroll_exception: [
    {
      icon: 'clock',
      headline: 'Open punch found on yesterday’s timesheet',
      blocks: [{ text: 'Devon Carter clocked in at 9:02 AM but never recorded a clock-out.' }],
    },
    {
      icon: 'alert',
      headline: 'Estimated end time derived from schedule',
      blocks: [{ bullets: ['Scheduled shift ended at 5:00 PM', 'No clock-out event recorded', 'Last badge activity at 4:54 PM'] }],
    },
    {
      icon: 'send',
      headline: 'Proposed correction ready for review',
      blocks: [
        { text: 'Ultron proposes a 5:00 PM end time based on the posted schedule.' },
        { label: 'Proposed correction', checks: ['End time set to 5:00 PM', '8.0 hours logged', 'No overtime triggered'] },
      ],
    },
    {
      icon: 'edit',
      headline: 'Approval required to correct payroll',
      blocks: [{ text: 'Approval required before the timesheet is corrected and sent to payroll.' }],
    },
  ],
  fill_risk: [
    {
      icon: 'clock',
      headline: 'Shift open 5 days',
      blocks: [{ text: 'A weekend RN shift has gone unclaimed for five days.' }],
    },
    {
      icon: 'alert',
      headline: 'Fill probability 22% at current rate',
      blocks: [{ bullets: ['Comparable shifts pay $3–4/hr more', 'Only 4 qualified workers in range', 'Weekend demand is high'] }],
    },
    {
      icon: 'send',
      headline: 'Rate increase + targeted outreach proposed',
      blocks: [
        { text: 'Ultron recommends a $3/hr increase plus outreach to nearby qualified RNs.' },
        { label: 'Projected impact', bullets: ['Fill probability rises to ~68%', 'Est. added cost: $36 for the shift'] },
      ],
    },
  ],
  overtime_risk: [
    {
      icon: 'clock',
      headline: 'Projected overtime $4,200 over budget',
      blocks: [{ text: 'This week’s projected overtime is $4,200 above the labor budget.' }],
    },
    {
      icon: 'alert',
      headline: 'Two employees drive most of the overage',
      blocks: [{ label: 'Top contributors', bullets: ['Marcus Lee — 11 OT hrs', 'Dana Whitfield — 7 OT hrs'] }],
    },
    {
      icon: 'send',
      headline: 'Schedule rebalance plan prepared',
      blocks: [
        { text: 'Ultron prepared a rebalance that shifts hours to under-utilized staff.' },
        { label: 'Plan', bullets: ['Move 9 hrs to the part-time pool', 'Projected overtime down 35%'] },
      ],
    },
  ],
  order_fill_strategy: [
    {
      icon: 'clock',
      headline: 'Priority order stalled',
      blocks: [{ text: 'A high-priority facility order has received no applicants.' }],
    },
    {
      icon: 'alert',
      headline: 'Rate is below local market average',
      blocks: [{ bullets: ['Rate is 12% below local market', 'Search radius capped at 15 mi', '3 similar orders filled at higher rates'] }],
    },
    {
      icon: 'send',
      headline: 'Rate + radius adjustment proposed',
      blocks: [
        { text: 'Ultron recommends raising the rate and widening the search radius.' },
        { label: 'Adjustment', bullets: ['Rate +$2.50/hr', 'Radius 15 → 30 mi'] },
      ],
    },
  ],
  candidate_match: [
    {
      icon: 'clock',
      headline: 'New CNA application received',
      blocks: [{ text: 'Aisha Khan applied for the open CNA position.' }],
    },
    {
      icon: 'alert',
      headline: '92% match for open position',
      blocks: [{ label: 'Why it matches', checks: ['CNA certified', '2 yr experience', 'Within commute radius', 'Available for open shifts'] }],
    },
    {
      icon: 'send',
      headline: 'Interview recommended',
      blocks: [{ text: 'Ultron recommends scheduling an interview this week.' }],
    },
  ],
  credential_expiring: [
    {
      icon: 'clock',
      headline: 'RN license expires in 14 days',
      blocks: [{ text: 'Robert Chen’s RN license is set to expire in two weeks.' }],
    },
    {
      icon: 'alert',
      headline: 'Upcoming assignments would be non-compliant',
      blocks: [{ bullets: ['3 upcoming shifts fall after the expiration date', 'Those assignments would be out of compliance'] }],
    },
    {
      icon: 'send',
      headline: 'Renewal reminder sent to employee + manager',
      blocks: [{ text: 'Reminders went to Robert and his manager with renewal instructions and a deadline.' }],
    },
    {
      icon: 'done',
      headline: 'License renewed before expiration',
      blocks: [{ checks: ['License renewed', 'Compliance restored', 'Upcoming shifts cleared'] }],
    },
  ],
  retention_risk: [
    {
      icon: 'clock',
      headline: 'Availability dropped 60%',
      blocks: [{ text: 'A top-performing RN cut their availability by 60% this month.' }],
    },
    {
      icon: 'alert',
      headline: 'Flagged as a retention risk',
      blocks: [{ bullets: ['Availability down 60% month-over-month', 'Declined the last 3 offered shifts', 'Strong historical performer'] }],
    },
    {
      icon: 'send',
      headline: 'Manager check-in scheduled',
      blocks: [{ text: 'A check-in was scheduled so the manager can understand the change and respond early.' }],
    },
    {
      icon: 'done',
      headline: 'Recurring pattern ready to save as a workflow',
      blocks: [{ text: 'This pattern recurs — Ultron can monitor it automatically as a saved workflow.' }],
    },
  ],
  attendance_risk: [
    {
      icon: 'clock',
      headline: '4 late arrivals this month',
      blocks: [{ text: 'Tyler Brooks has arrived late four times this month.' }],
    },
    {
      icon: 'alert',
      headline: 'Trend is worsening month-over-month',
      blocks: [{ bullets: ['Up from 1 late arrival last month', 'Averaging 12 minutes late', 'Concentrated on early shifts'] }],
    },
    {
      icon: 'clock',
      headline: 'Watching for further attendance slips',
      blocks: [{ text: 'Ultron is monitoring for further slips before recommending a coaching escalation.' }],
    },
  ],
  unfilled_shift: [
    {
      icon: 'clock',
      headline: 'Replacement search opened',
      blocks: [{ text: 'A replacement search opened for Dana Whitfield’s uncovered shift.' }],
    },
    {
      icon: 'edit',
      headline: 'Contacted 12 candidates — no acceptances',
      blocks: [
        { text: 'Automated outreach completed with no acceptances.' },
        { label: 'Outreach', bullets: ['12 qualified candidates contacted', '0 acceptances', 'Most common decline reason: distance'] },
      ],
    },
    {
      icon: 'alert',
      headline: 'Shift still uncovered — needs a decision',
      blocks: [{ text: 'The shift remains uncovered and needs a decision — add an incentive or escalate to the on-call pool.' }],
    },
  ],
};

const STATE_ICON: Record<string, WorkingIcon> = {
  detected: 'clock', assessment: 'alert', recommendation: 'send',
  approval: 'edit', execution: 'edit', resolution: 'done',
  monitoring: 'clock', workflow: 'done',
};

/** Per-state detail sentence, sourced from the thread's own narrative fields so
 *  every derived milestone carries a sub-level explanation. Falls back to the
 *  assessment (always present) when the preferred field is empty. */
const STATE_DETAIL: Record<string, (t: ThreadItem) => string | null | undefined> = {
  detected:       t => t.event,
  assessment:     t => t.assessment,
  recommendation: t => t.recommendation,
  approval:       t => t.recommendation,
  execution:      t => t.recommendation,
  resolution:     t => t.outcome ?? t.recommendation,
  monitoring:     t => t.assessment,
  workflow:       t => t.workflowOpportunity ?? t.recommendation,
};

/** The activity breakdown for a thread: an authored rich version where one
 *  exists, otherwise derived from the timeline — each step gets a detail block
 *  drawn from the thread's narrative so no milestone is left bare. */
export function activityForThread(thread: ThreadItem): ActivityMilestone[] {
  return THREAD_ACTIVITY[thread.id]
    ?? thread.timeline.map(s => {
      const detail = STATE_DETAIL[s.state]?.(thread) ?? thread.assessment;
      return {
        icon: STATE_ICON[s.state] ?? 'clock',
        headline: s.headline,
        blocks: detail ? [{ text: detail }] : undefined,
      };
    });
}

/** Outcome populated when an actioned thread auto-completes (demo lifecycle:
 *  Needs attention → Live stream → Resolved). */
export const RESOLVE_OUTCOMES: Record<string, string> = {
  callout_recovery: 'Sarah Kim assigned. Coverage restored.',
  no_show: 'Replacement assigned and the shift is covered.',
  payroll_exception: 'Estimated end time approved. Payroll corrected.',
  fill_risk: 'Top applicant approved — shift filled.',
  overtime_risk: 'Schedules rebalanced. Projected overtime down 35%.',
  order_fill_strategy: 'Rate raised and radius expanded — three candidates applied.',
  candidate_match: 'Offer accepted — candidate hired.',
  unfilled_shift: 'On-call RN accepted with the incentive. Coverage restored.',
};
