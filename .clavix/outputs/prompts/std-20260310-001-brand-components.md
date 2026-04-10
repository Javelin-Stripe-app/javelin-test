# Clavix Improved Prompt — Brand Components

**Generated:** 2026-03-10
**Depth:** standard (auto-selected, quality score 52%)
**Status:** Implemented

---

## Optimized Prompt

```
Role: Use the `brand-specialist` agent to audit the existing brand guidelines and
design a brand-aligned component layer for the Stripe App extension.

Context files to load (in order):
1. `openspec/brand-guidelines.md` — brand voice, colors, typography, spacing
2. `docs/brand-guidelines.html` — visual HTML reference
3. `.stripe-apps-docs/ui-components.md` — all 34 Stripe UI Toolkit components and styling constraints
4. `.stripe-apps-docs/publishing-guide.md` — Stripe App Marketplace listing and visual guidelines

Objective:
Design a `src/components/brand/` component library that applies the product's brand
guidelines to the Stripe UI Toolkit, within the hard constraints of the Stripe Apps
serialization model.

Non-negotiable constraints (Stripe Apps platform limits):
- Only Stripe UI Toolkit components (Box, Inline, Button, etc.) — no custom HTML/CSS
- Only `Box` and `Inline` accept the `css` prop — all other components have preset styles
- The `css` prop accepts design tokens ONLY: spacing (xxsmall–xxlarge), semantic colors
  (primary, success, container), font tokens (heading), layout (stack: x|y|z)
- No hex colors, RGB values, custom fonts, or arbitrary CSS values
- React 17 only — no React 18/19 features

Deliverables:
1. Brand constraint audit — Which brand guidelines can/cannot be applied within
   Stripe Apps' styling limits, with clear CAN / CANNOT / PARTIAL classifications
2. Brand token mapping — Map brand colors, typography, and spacing to the nearest
   available Stripe design tokens
3. Component specification list — Named components to create
   (e.g., BrandHeader, BrandCard, BrandStatusBadge, BrandEmptyState) with the
   Stripe Toolkit primitives each wraps and which brand tokens each applies
4. Marketplace compliance review — Confirm proposed components meet Stripe App
   Marketplace visual and UX guidelines from publishing-guide.md
5. Conflict resolution notes — For each brand element that conflicts with platform
   constraints, document the approved fallback and rationale

Success criteria:
- All proposed components use only allowed Stripe UI Toolkit primitives
- Brand identity is preserved to maximum extent within platform constraints
- No Stripe Marketplace guidelines are violated
- Components work across both ContextView and FocusView viewport types
- Output is a clear spec the `Fullstack Developer` agent can implement directly
```

---

## Implementation Notes

- Brand spec produced at: `openspec/brand-component-specification.md`
- Components implemented at: `src/components/brand/`
- 10 components total: JvSectionHeader, JvCard, JvStatusIndicator, JvEmptyState,
  JvMetricDisplay, JvActionBar, JvConfirmationPrompt, JvFreshnessIndicator,
  JvLoadingState, JvPromptSuggestions
- Barrel export: `src/components/brand/index.ts`
