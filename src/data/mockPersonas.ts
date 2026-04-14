// Mock persona data for the AI Specialists page group.
// Swap the mockPersonas array for a real API response when the backend is ready.

export type VoiceOption = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
  voice: VoiceOption;
  creditsUsed: number;
  numberOfRuns: number;
  triggers: number;
  numberOfActivities: number;
}

export const mockPersonas: Persona[] = [
  {
    id: 'persona-1',
    name: 'HR Assistant',
    role: 'Human Resources',
    description: 'Answers employee questions about benefits, policies, and onboarding processes.',
    voice: 'nova',
    creditsUsed: 142_800,
    numberOfRuns: 312,
    triggers: 28,
    numberOfActivities: 89,
  },
  {
    id: 'persona-2',
    name: 'Payroll Advisor',
    role: 'Finance',
    description: 'Handles payroll queries, variance summaries, and contractor invoice status.',
    voice: 'alloy',
    creditsUsed: 98_400,
    numberOfRuns: 201,
    triggers: 14,
    numberOfActivities: 47,
  },
  {
    id: 'persona-3',
    name: 'Compliance Guide',
    role: 'Legal & Compliance',
    description: 'Summarizes regulatory requirements, flags policy gaps, and drafts compliance memos.',
    voice: 'onyx',
    creditsUsed: 76_200,
    numberOfRuns: 155,
    triggers: 11,
    numberOfActivities: 33,
  },
  {
    id: 'persona-4',
    name: 'Recruiting Screener',
    role: 'Talent Acquisition',
    description: 'Pre-screens candidates, scores resumes against JD criteria, and schedules interviews.',
    voice: 'shimmer',
    creditsUsed: 54_600,
    numberOfRuns: 87,
    triggers: 9,
    numberOfActivities: 21,
  },
  {
    id: 'persona-002',
    name: 'Ops Coordinator',
    role: 'Operations',
    description: 'Manages operational workflows, coordinates scheduling across teams, and handles data reconciliation tasks.',
    voice: 'alloy',
    creditsUsed: 2_280,
    numberOfRuns: 5,
    triggers: 5,
    numberOfActivities: 5,
  },
];
