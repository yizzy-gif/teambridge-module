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
    // "Review Plan" is a refinement stub (renders + toasts, no transition).
    actions: ['Review Plan', 'Confirm & Send'],
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
    actions: ['Notify Manager', 'Start Replacement Search'],
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
    actions: ['Increase Rate', 'Launch Outreach'],
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
    actions: ['Adjust Rate', 'Expand Search'],
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
};

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
};

/** Outcome populated when an actioned thread auto-completes (demo lifecycle:
 *  Needs attention → Live stream → Resolved). */
export const RESOLVE_OUTCOMES: Record<string, string> = {
  callout_recovery: 'Sarah accepted the shift. Coverage restored.',
  no_show: 'Replacement assigned and the shift is covered.',
  payroll_exception: 'Estimated end time approved. Payroll corrected.',
  fill_risk: 'Rate raised and outreach sent — shift filled within 24 hours.',
  overtime_risk: 'Schedules rebalanced. Projected overtime down 35%.',
  order_fill_strategy: 'Rate raised and radius expanded — three candidates applied.',
  candidate_match: 'Interview scheduled with the applicant.',
};
