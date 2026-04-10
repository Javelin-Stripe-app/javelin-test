---
id: std-20260310-002-brand-redesign
depthUsed: standard
timestamp: 2026-03-10T00:00:00Z
executed: false
originalPrompt: "based on openspec/brand-guidelines.md openspec/brand-component-specification.md docs src/components/brand we need to redesign the app front-end experience to match our brand."
---

# Improved Prompt

## Objective
Redesign the Stripe App UI to consistently apply the Javelin brand system
across all existing views and components.

## Reference Materials
- Brand guidelines: `openspec/brand-guidelines.md`
- Brand component spec: `openspec/brand-component-specification.md`
- Existing brand components: `src/components/brand/` (10 Jv-prefixed components)
- Visual HTML references: `docs/brand-guidelines.html`, `docs/brand-components.html`

## Scope
Audit and update all views in `src/views/` to:
1. Replace ad-hoc layout patterns with brand components (JvSectionHeader, JvCard,
   JvMetricDisplay, JvEmptyState, JvLoadingState, etc.)
2. Apply brand design tokens consistently (spacing, color, typography) via Box/Inline
   css prop — no custom values
3. Enforce JvStatusIndicator for all status/state indicators
4. Use JvActionBar for all primary action surfaces
5. Apply JvConfirmationPrompt for all destructive or irreversible actions

## Constraints (Non-negotiable)
- React 17 only — no React 18/19 APIs
- Stripe UI Toolkit components only — no raw HTML, no CSS imports, no Tailwind
- Only Box and Inline accept the css prop; use design tokens only (no hex, no px values)
- All brand components are prefixed `Jv` — use them from `src/components/brand/`
- No cross-feature imports — shared code goes in `lib/` or `components/`

## Expected Output
- Updated view files with brand components applied
- No net-new components unless a gap exists in the brand component library
- Each updated view must cover all 4 UI states: loading, empty, error, populated
- All existing tests must remain passing; add tests for any new component usage

## Acceptance Criteria
- [ ] Every view uses at least JvSectionHeader and JvCard where appropriate
- [ ] No raw HTML elements (`<div>`, `<span>`, etc.) in view files
- [ ] No hex colors, arbitrary spacing, or custom CSS in any component
- [ ] All status indicators use JvStatusIndicator
- [ ] All loading states use JvLoadingState
- [ ] All empty states use JvEmptyState
- [ ] `npm run lint`, `npm run typecheck`, and `npm run test` all pass

## Quality Scores
- **Clarity**: 55% → 90%
- **Efficiency**: 65% → 80%
- **Structure**: 45% → 95%
- **Completeness**: 38% → 92%
- **Actionability**: 42% → 90%
- **Overall**: 48% → 89% (production-ready)

## Original Prompt
```
based on openspec/brand-guidelines.md openspec/brand-component-specification.md docs src/components/brand we need to redesign the app front-end experience to match our brand.
```
