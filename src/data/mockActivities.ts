// Mock activity data for the AI Specialists activity table.
// Each record is linked to a persona via personaId.
// Swap for a real API response when the backend is ready.

export type ActivityCategory = 'Communication' | 'Data Modification' | 'Automation';

export interface Activity {
  id: string;
  time: string;
  span: string;
  typeOfAction: string;
  triggerType: string;
  personaId: string;
  category: ActivityCategory;
}

export const mockActivities: Activity[] = [
  { id: 'act-1', time: 'Today 14:32',   span: '1.2s', typeOfAction: 'Policy lookup',        triggerType: 'Manual',    personaId: 'persona-1', category: 'Communication'    },
  { id: 'act-2', time: 'Today 13:10',   span: '0.8s', typeOfAction: 'Benefits summary',     triggerType: 'Scheduled', personaId: 'persona-1', category: 'Communication'    },
  { id: 'act-3', time: 'Today 11:55',   span: '2.4s', typeOfAction: 'Payroll variance',     triggerType: 'Webhook',   personaId: 'persona-2', category: 'Data Modification' },
  { id: 'act-4', time: 'Yesterday',     span: '1.5s', typeOfAction: 'Invoice status check', triggerType: 'Manual',    personaId: 'persona-2', category: 'Data Modification' },
  { id: 'act-5', time: 'Yesterday',     span: '0.9s', typeOfAction: 'Compliance flag',      triggerType: 'Scheduled', personaId: 'persona-3', category: 'Automation'        },
  { id: 'act-6', time: 'Apr 5',         span: '3.1s', typeOfAction: 'Resume screen',        triggerType: 'Webhook',   personaId: 'persona-4', category: 'Automation'        },
  { id: 'act-7', time: 'Apr 5',         span: '1.7s', typeOfAction: 'Interview schedule',   triggerType: 'Manual',    personaId: 'persona-4', category: 'Automation'        },
];
