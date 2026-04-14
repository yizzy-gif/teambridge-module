# AIHome Page Group

Primary nav item: `ai-home` (uses AI gradient via `aiItemId="ai-home"` in App.tsx)

## Secondary nav entries

| id           | label         | default | parent group     |
|--------------|---------------|---------|------------------|
| ai-new-chat  | New Chat      | yes     |                  |
| ai-history   | History       |         |                  |
| ai-prompts   | Saved Prompts |         |                  |
| ai-personas  | Personas      |         | Specialist group |

The "Specialist" group (`ai-specialists`) is a collapsible nav group containing Personas.

Note: Usage has moved to a top-level page entry in the sidebar (above Settings). See `src/pages/Usage/`.

## Routing

Routing is handled by `AIHomeContent` in `src/App.tsx`.
`AIHomeContent` holds `selectedPersonaId` state and renders:

- `secActiveId === 'ai-personas'` + `selectedPersonaId` set → `AISpecialistPersonaDetail`
- `secActiveId === 'ai-personas'` + no persona selected → `AISpecialistsListPage`
- all other `secActiveId` values → existing `AIHomePage`

Navigating away from `ai-personas` resets `selectedPersonaId` to `null` via `useEffect`.

## Pages

- `src/pages/AIHome/AISpecialists/index.tsx` — list of persona cards + "New Specialist" dialog
- `src/pages/AIHome/AISpecialists/PersonaDetail.tsx` — detail view with overview (header + edit dialog) and deployments table, vertically stacked
- `src/pages/AIHome/AISpecialists/SpecialistUsagePage.tsx` — specialist usage content (rendered inside top-level Usage page as "Specialists" tab)

## Components

- `src/components/AISpecialists/PersonaCard.tsx` — clickable card (name, role, description)
- `src/components/AISpecialists/PersonaForm.tsx` — create/edit form (TextField, SelectField, TextArea from Alloy)
- `src/components/AISpecialists/VoiceSelector.tsx` — Alloy RadioGroup for 6 preset voices
- `src/components/AISpecialists/UsageSummaryCards.tsx` — 4 Alloy DataCards; accepts optional `records` prop for pre-filtered data
- `src/components/AISpecialists/UsageTrendChart.tsx` — stacked bar chart by outcome; accepts optional `records` prop
- `src/components/AISpecialists/TokenUsagePanel.tsx` — area chart + cost efficiency; accepts optional `records` prop
- `src/components/AISpecialists/SpecialistActivityTable.tsx` — expandable activity table; accepts optional `records`, `showPersonaColumn` props
- `src/components/AISpecialists/MultiTagInput.tsx` — tag input with autocomplete for role tags

## Data

- `src/data/mockPersonas.ts` — `Persona[]` with usage stats; swap array for API response
- `src/data/mockExecutions.ts` — `ExecutionRecord[]` with `personaName` field, `Deployment[]`, helper functions; swap for API response
