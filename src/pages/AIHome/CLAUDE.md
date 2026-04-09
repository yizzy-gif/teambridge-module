# AIHome Page Group

Primary nav item: `ai-home` (uses AI gradient via `aiItemId="ai-home"` in App.tsx)

## Secondary nav entries

| id              | label          | default |
|-----------------|----------------|---------|
| ai-new-chat     | New Chat       | yes     |
| ai-history      | History        |         |
| ai-prompts      | Saved Prompts  |         |
| ai-specialists  | Specialists    |         |

## Routing

Routing is handled by `AIHomeContent` in `src/App.tsx`.
`AIHomeContent` holds `selectedPersonaId` state and renders:

- `secActiveId === 'ai-specialists'` + `selectedPersonaId` set → `AISpecialistPersonaDetail`
- `secActiveId === 'ai-specialists'` + no persona selected → `AISpecialistsListPage`
- all other `secActiveId` values → existing `AIHomePage`

Navigating away from `ai-specialists` resets `selectedPersonaId` to `null` via `useEffect`.

## Pages

- `src/pages/AIHome/AISpecialists/index.tsx` — list of persona cards + "New Specialist" dialog
- `src/pages/AIHome/AISpecialists/PersonaDetail.tsx` — detail view with voice selector, usage stats, activity table

## Components

- `src/components/AISpecialists/PersonaCard.tsx` — clickable card (name, role, description)
- `src/components/AISpecialists/PersonaForm.tsx` — create/edit form (TextField, SelectField, TextArea from Alloy)
- `src/components/AISpecialists/VoiceSelector.tsx` — Alloy RadioGroup for 6 preset voices
- `src/components/AISpecialists/UsageStats.tsx` — 4 Alloy DataCards in a grid row
- `src/components/AISpecialists/ActivityTable.tsx` — Alloy Table filtered by personaId

## Data

- `src/data/mockPersonas.ts` — `Persona[]` with usage stats; swap array for API response
- `src/data/mockActivities.ts` — `Activity[]` linked by `personaId`; swap for API response
