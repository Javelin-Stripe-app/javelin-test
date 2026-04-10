# Javelin Brand Component Specification

**Version:** 1.0
**Date:** 2026-03-10
**Status:** Ready for implementation
**Scope:** Brand-aligned component layer for the Javelin Stripe App extension
**Dependencies:** `openspec/brand-guidelines.md` (v1.0 MVB), `.ops/analysis/stripe-app-design-boundaries.md`

---

## 1. Brand Constraint Audit

This audit maps every element from `openspec/brand-guidelines.md` against the hard constraints of the Stripe Apps styling model. The status categories are:

- **CAN** -- The brand element can be applied directly within Stripe Apps
- **CANNOT** -- The brand element is blocked by Stripe's sandbox/serialization model
- **PARTIAL** -- Some aspect can be approximated; the rest requires fallback

| Brand Element | Status | Rationale | Approved Fallback |
|---|---|---|---|
| **Voice & Tone** (Direct, Capable, Clear, Honest) | CAN | All text content is authored by Javelin. Voice is the primary brand lever inside the app (brand-guidelines.md S7.3). No Stripe constraint on copy. | N/A -- full control |
| **Language Dos/Don'ts** (word lists, jargon policy) | CAN | Text content is fully controlled. Word choice, sentence structure, and terminology are unconstrained. | N/A -- full control |
| **Messaging Framework** (onboarding, in-product, confirmations) | CAN | All user-facing strings, error messages, labels, descriptions, and prompt suggestions are authored by Javelin. | N/A -- full control |
| **Brand Name Usage** ("Javelin" capitalization, article rules) | CAN | Applied through authored text. Consistent usage enforced at the component level through prop defaults and copy constants. | N/A -- full control |
| **Information Architecture** (content organization, flow sequencing) | CAN | How content is organized within ContextView/FocusView, section ordering, empty state narratives, and progressive disclosure patterns are all under Javelin's control. | N/A -- full control |
| **Javelin Indigo (#4F46E5)** | CANNOT | `Box` and `Inline` `css` prop accepts only semantic color tokens (`primary`, `secondary`, `container`, etc.). No hex values, no RGB, no custom colors. | Use `primary` semantic token for accent color (Stripe renders this in its own primary blue). Brand indigo reserved for app icon, marketplace images, and external touchpoints. |
| **Javelin Deep (#3730A3)** | CANNOT | Same constraint as above. No custom hex colors in `css` prop. | Use `container` or `offset` background tokens for depth/emphasis. |
| **Javelin Light (#C7D2FE)** | CANNOT | No custom hex colors. | Use `container` background token for light emphasis areas. |
| **Signal Green (#10B981)** | PARTIAL | The `success` semantic color token exists and maps to green tones in Stripe's system. `Badge type="positive"` renders green. The exact shade is Stripe's, not Javelin's. | Use `success` color token and `Badge type="positive"`. Accept Stripe's green as the in-product success color. |
| **Alert Amber (#F59E0B)** | PARTIAL | The `warning` semantic color token exists. `Badge type="warning"` and `Banner type="critical"` cover warning states. Stripe's amber may differ from Javelin's. | Use `warning` color token and `Badge type="warning"`. Accept Stripe's warning color. |
| **Neutral 900 (#111827)** | PARTIAL | Default text color in Stripe's system is dark/near-black. The `primary` text color token approximates this. | Use default text rendering (no color override) or `color: 'primary'` on `Inline`. |
| **Neutral 100 (#F3F4F6)** | PARTIAL | The `container` and `offset` background tokens provide light gray backgrounds. Stripe determines the exact shade. | Use `backgroundColor: 'container'` on `Box`. |
| **Inter font family** | CANNOT | Stripe controls all typography rendering. No custom font faces, no `font-family` property. Stripe uses its own system font stack. | Accept Stripe's typography. Inter is used only on external touchpoints (website, docs, pitch deck). |
| **Font weight (Semibold headings)** | PARTIAL | `fontWeight: 'semibold'` and `fontWeight: 'bold'` tokens are available on `Inline`. `font: 'heading'` provides heading treatment. Weight is controllable within Stripe's token set. | Use `fontWeight: 'semibold'` on `Inline` for emphasis. Use `font: 'heading'` for section headers. |
| **Line height (1.5-1.6)** | CANNOT | No `lineHeight` property in the `css` prop. Stripe controls line height through font tokens. | Accept Stripe's line height. It is optimized for readability within the Dashboard. |
| **Iconography (outlined, geometric, 24x24, 2px stroke)** | PARTIAL | The `Icon` component renders from Stripe's built-in icon set. Custom SVG icons cannot be injected. However, the app icon (marketplace) is fully custom. | Use Stripe's `Icon` component with the closest matching icon name. Reserve custom iconography for marketplace listing images and external materials. |
| **Logo / Precision Mark** | CANNOT | No custom images in the main UI flow except via `Img` with an external URL or bundled asset. The logo appears in the app icon (marketplace, Dashboard app list) but not inside the extension UI itself. | Logo appears in: (1) `icon.png` at 300x300px, (2) marketplace listing images, (3) external touchpoints. Not rendered inside the extension. |
| **Color palette (7 total)** | CANNOT | See individual color entries above. The entire brand palette is blocked from in-product use. Stripe's semantic token system replaces it. | Map each brand intent to the nearest Stripe semantic token (see Section 2). |
| **Spacing (brand-specific rhythm)** | PARTIAL | Spacing tokens are available (`xxsmall` through `xxlarge`) but values are Stripe's (2px, 4px, 8px, 16px, 24px, 32px, 48px). These are a standard 8px scale, which aligns well with modern design practice. | Use Stripe's spacing tokens directly. The 8px base scale is compatible with brand intent. Define a consistent internal spacing vocabulary mapped to tokens (see Section 2). |
| **Tagline ("Tell Stripe what to do.")** | CAN | Can be rendered as text in onboarding, welcome state, and view descriptions. | N/A -- full control |
| **Brand Archetype expression (Magician + Sage)** | CAN | Archetype expression is behavioral and verbal, not visual. The Magician manifests through "describe what you want and it appears" interactions. The Sage manifests through transparency, explanations, and honest limitations. Both are expressed through voice, content patterns, and interaction design. | N/A -- full control via voice and UX patterns |

### Audit Summary

| Category | CAN | CANNOT | PARTIAL | Notes |
|---|---|---|---|---|
| Voice & Messaging | 6 | 0 | 0 | Voice is the dominant brand lever. Full control. |
| Colors | 0 | 3 | 4 | All colors map to semantic tokens. Exact shades differ. |
| Typography | 0 | 2 | 1 | Font family blocked. Weight partially controllable. |
| Iconography | 0 | 0 | 1 | Limited to Stripe's icon set inside the app. |
| Logo | 0 | 1 | 0 | Only appears as app icon, not in extension UI. |
| Spacing | 0 | 0 | 1 | Token scale is compatible. Values are Stripe's. |
| **Total** | **6** | **6** | **7** | |

**[insight] The audit confirms the brand guidelines' core assertion (S7.3): inside the product, Javelin's brand IS its voice. The component layer must therefore be engineered primarily as a voice and interaction pattern system, with structural consistency (spacing, layout rhythm) as the secondary brand signal, and visual styling as a tertiary concern mapped to Stripe's tokens.**

---

## 2. Brand Token Mapping

This section maps Javelin's brand design language to the available Stripe design tokens. These mappings define the "brand-compliant defaults" that components in Section 3 will use.

### 2.1 Color Mapping

| Javelin Brand Intent | Javelin Hex | Stripe Color Token | Context | Fidelity |
|---|---|---|---|---|
| Primary accent | `#4F46E5` (Indigo) | `primary` (text/icon), `info` (background) | Links, emphasis text, active states | Low -- Stripe renders its own blue, not Javelin indigo |
| Dark emphasis | `#3730A3` (Deep) | `container` (background) | Card backgrounds, grouped sections | Low -- maps to gray, not deep indigo |
| Light highlight | `#C7D2FE` (Light) | `container` (background) | Subtle emphasis, user message bubbles | Low -- maps to gray, not indigo tint |
| Success / positive | `#10B981` (Green) | `success` (text), `positive` (Badge type) | Metric improvements, confirmations, live data | Medium -- both are green; exact shade differs |
| Warning / attention | `#F59E0B` (Amber) | `warning` (text), `attention` (background), `warning` (Badge type) | Warnings, requires-attention states | Medium -- both are amber/yellow family |
| Error / critical | (not in brand palette) | `critical` (text/background), `negative` (Badge type) | Errors, destructive actions | N/A -- using Stripe's native critical state |
| Primary text | `#111827` (Neutral 900) | `primary` (text color) | All body text | High -- both are near-black |
| Secondary text | (implicit from palette) | `secondary` (text color) | Descriptions, metadata, timestamps | High -- standard secondary treatment |
| Background (light) | `#F3F4F6` (Neutral 100) | `container` (background) | Cards, grouped content | Medium -- both are light gray |
| Background (base) | `#FFFFFF` (White) | (default, no token needed) | Base canvas | High -- Stripe's default is white |

### 2.2 Typography Mapping

| Javelin Brand Intent | Javelin Spec | Stripe Font Token | Token Variant | Fidelity |
|---|---|---|---|---|
| Section heading | Inter Semibold | `font: 'heading'` | -- | Medium -- Stripe's heading font, not Inter |
| Subsection heading | Inter Semibold | `fontWeight: 'semibold'` | with default font | Medium -- weight matches, face differs |
| Body text | Inter Regular | (default rendering) | -- | Medium -- Stripe's body font, not Inter |
| Caption / metadata | Inter Regular, smaller | `font: 'caption'` | -- | Medium -- appropriate scale, different face |
| Code / technical | JetBrains Mono | `font: 'code'` | -- | Medium -- Stripe provides monospace for code |
| Emphasis | Inter Medium/Semibold | `fontWeight: 'semibold'` | -- | High -- weight token matches intent |
| Strong emphasis | Inter Bold | `fontWeight: 'bold'` | -- | High -- weight token matches intent |

### 2.3 Spacing Mapping

Javelin's brand guidelines do not prescribe specific spacing values, so this mapping defines a brand-consistent spacing vocabulary using Stripe's tokens. The principle is: generous but purposeful spacing that reflects the Magician archetype (clean, uncluttered, confident).

| Brand Spacing Intent | Stripe Token | Pixel Value | Usage |
|---|---|---|---|
| Micro gap (related elements) | `xsmall` | 4px | Between label and value in a metric, between icon and text |
| Element gap (siblings) | `small` | 8px | Between items in a list, between badges, between buttons |
| Section gap (content groups) | `medium` | 16px | Between content sections, between card content blocks |
| Region gap (major sections) | `large` | 24px | Between major page regions, above/below dividers |
| Container padding | `medium` | 16px | Inner padding of cards, panels, content containers |
| Compact padding | `small` | 8px | Inner padding of dense elements (badges, chips, inline cards) |
| Page margin | `medium` | 16px | Outer margin of view content |

### 2.4 Layout Pattern Mapping

| Brand Intent | Stripe Layout Tokens | Usage |
|---|---|---|
| Vertical content flow | `stack: 'y'` | Default for all content containers. Content reads top-to-bottom. |
| Horizontal action row | `stack: 'x', gap: 'small'` | Button groups, badge rows, metadata pairs |
| Centered empty state | `stack: 'y', alignX: 'center'` | Empty states, loading states |
| Space-between header | `stack: 'x', distribute: 'space-between', alignY: 'center'` | Section headers with actions |
| Full-width container | `width: 'fill'` | Input fields, content areas |
| Wrapping tag row | `stack: 'x', gap: 'small', wrap: 'wrap'` | Prompt suggestion buttons, chip groups |

### 2.5 Semantic State Mapping

| Brand State | Stripe Background Token | Stripe Text Token | Badge Type | Banner Type |
|---|---|---|---|---|
| Neutral / information | `container` | `secondary` | `info` | `default` |
| Success / positive | `success` | `success` | `positive` | (not available -- use `default` with success copy) |
| Warning / attention | `attention` | `warning` | `warning` | `critical` (only option with urgency) |
| Error / critical | `critical` | `critical` | `negative` | `critical` |
| Active / selected | `container` | `primary` | -- | -- |
| Disabled | -- | `secondary` | -- | -- |

---

## 3. Component Specifications

Each component below is a thin, brand-aligned wrapper around Stripe UI Toolkit primitives. They enforce consistent spacing, token usage, and voice patterns. They do NOT introduce custom styling beyond what Stripe tokens allow.

**Naming convention:** All brand components use the `Jv` prefix (short for Javelin) to distinguish them from raw Stripe Toolkit components and existing app components. This is intentional -- it signals "this component enforces brand standards" without being verbose.

**File location:** `src/components/brand/`

---

### 3.1 JvSectionHeader

**Purpose:** Consistent section header with optional trailing action. Used at the top of content groups throughout the app. Enforces heading font treatment and Javelin's direct voice pattern (short, action-oriented titles).

**Stripe primitives:** `Box`, `Inline`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `font` | `'heading'` | Brand headings use semibold treatment |
| `stack` | `'x'` | Horizontal layout for title + optional action |
| `distribute` | `'space-between'` | Action aligned right per Dashboard convention |
| `alignY` | `'center'` | Vertical center alignment for mixed-height children |
| `marginBottom` | `'medium'` | Section gap below header |

**Props interface:**

```typescript
interface JvSectionHeaderProps {
  /** Section title. Keep to 3-5 words. Brand voice: direct, specific. */
  title: string;
  /** Optional trailing action (Button, Link, or any Stripe component) */
  action?: React.ReactNode;
  /** Optional subtitle/description below the title */
  subtitle?: string;
}
```

**Key behavior:**
- Title renders in `font: 'heading'` via `Inline`
- Subtitle, if provided, renders below the title in `color: 'secondary'`, `font: 'caption'`
- When `action` is provided, title and action are laid out horizontally with `distribute: 'space-between'`
- When no action, Box simplifies to `stack: 'y'`
- Enforces brand voice through JSDoc guidance: titles should be short noun phrases or imperatives ("Recent insights", "Your metrics", "Conversations"), never vague ("Overview", "Details", "Data")

**Composition:**

```
Box (stack: x | y, distribute: space-between, alignY: center, marginBottom: medium)
  Box (stack: y, gap: xsmall)
    Inline (font: heading) -> title
    [Inline (font: caption, color: secondary) -> subtitle]
  [action slot]
```

---

### 3.2 JvCard

**Purpose:** Content card with consistent padding, background, and internal spacing. The primary container for grouped content. Enforces the "clean, uncluttered" visual rhythm of the Magician archetype.

**Stripe primitives:** `Box`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `padding` | `'medium'` | Standard container padding (16px) |
| `backgroundColor` | `'container'` | Subtle background differentiation |
| `stack` | `'y'` | Vertical content flow |
| `gap` | `'small'` | Consistent internal spacing |

**Props interface:**

```typescript
interface JvCardProps {
  children: React.ReactNode;
  /** Override default padding for dense contexts */
  padding?: 'small' | 'medium';
  /** Remove background for transparent card (content grouping only) */
  transparent?: boolean;
}
```

**Key behavior:**
- Default padding is `medium`. Dense contexts (nested cards, compact lists) can use `small`.
- Background defaults to `container`. When `transparent` is true, no background is applied -- the card becomes a spacing/grouping wrapper only.
- Internal gap is always `small` (8px) between direct children. Individual children that need more space should use their own margin tokens.
- Does not render a border or shadow (Stripe tokens do not support custom borders/shadows in `Box`).

**Composition:**

```
Box (padding: medium|small, backgroundColor: container|undefined, stack: y, gap: small)
  children
```

---

### 3.3 JvStatusIndicator

**Purpose:** Semantic status display that maps business states to Stripe's Badge types with brand-consistent labels. Used for data freshness, metric trends, action states, and system health.

**Stripe primitives:** `Badge`, `Box`, `Inline`

**Brand tokens applied:**

| Status | Badge type | Rationale |
|---|---|---|
| `positive` | `positive` | Revenue up, healthy metric, live data, action completed |
| `negative` | `negative` | Revenue down, unhealthy metric, error state |
| `warning` | `warning` | Approaching threshold, stale data, needs attention |
| `info` | `info` | Neutral information, cached data, informational state |

**Props interface:**

```typescript
type StatusVariant = 'positive' | 'negative' | 'warning' | 'info';

interface JvStatusIndicatorProps {
  /** Status variant determining color and icon treatment */
  variant: StatusVariant;
  /** Display label. Brand voice: concise, specific. "MRR up 12%" not "Positive trend detected" */
  label: string;
  /** Optional secondary text for context (e.g., "vs. last month") */
  context?: string;
}
```

**Key behavior:**
- Renders a `Badge` with the mapped `type` prop
- When `context` is provided, renders the context text as a secondary `Inline` with `color: 'secondary'` and `font: 'caption'` adjacent to the badge
- Brand voice enforcement: labels should be specific and data-driven. The JSDoc encourages "MRR up 12%" over "Positive trend." This aligns with Javelin's Sage archetype (transparent, evidence-based).
- The component does NOT wrap the Badge in additional padding -- it is designed to be composed inside other containers (JvCard, JvMetricDisplay).

**Composition:**

```
Box (stack: x, gap: xsmall, alignY: center)
  Badge (type: positive|negative|warning|info) -> label
  [Inline (font: caption, color: secondary) -> context]
```

---

### 3.4 JvEmptyState

**Purpose:** Empty state display for views and sections with no content. Enforces Javelin's brand voice for empty states: confident, action-oriented, never apologetic. Aligns with Magician archetype ("I can build that for you") rather than generic empty states ("No data found").

**Stripe primitives:** `Box`, `Inline`, `Button`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `padding` | `'large'` | Generous padding for visual breathing room |
| `stack` | `'y'` | Vertical content flow |
| `gap` | `'medium'` | Clear separation between title, description, and action |
| `alignX` | `'center'` | Centered layout for empty states |

**Props interface:**

```typescript
interface JvEmptyStateProps {
  /**
   * Primary message. Brand voice: direct, forward-looking.
   * GOOD: "No conversations yet"
   * BAD: "It looks like you haven't started any conversations"
   */
  title: string;
  /**
   * Supporting text. Brand voice: suggest action, be specific.
   * GOOD: "Ask a question to get started. Try: 'What's my MRR?'"
   * BAD: "You can use the input below to begin a conversation with our AI assistant"
   */
  description?: string;
  /** Optional CTA button */
  action?: {
    label: string;
    onPress: () => void;
  };
  /** Optional prompt suggestions (renders as secondary button row) */
  suggestions?: Array<{
    label: string;
    value: string;
  }>;
  /** Callback when a suggestion is selected */
  onSelectSuggestion?: (value: string) => void;
}
```

**Key behavior:**
- Title renders in `fontWeight: 'semibold'`, not `font: 'heading'` -- empty states are transitional, not primary content.
- Description renders in `color: 'secondary'`.
- Action button renders as `type="primary"` when provided.
- Suggestions render as a wrapping row of `type="secondary"` small buttons -- same pattern as the existing WelcomePrompt component.
- The component is intentionally opinionated about copy style. JSDoc comments on `title` and `description` include brand voice guidance with good/bad examples.
- No icon or illustration (Stripe's Icon set is limited; using an icon for decoration conflicts with "functional iconography" brand principle).

**Composition:**

```
Box (padding: large, stack: y, gap: medium, alignX: center)
  Inline (fontWeight: semibold) -> title
  [Inline (color: secondary) -> description]
  [Button (type: primary, onPress) -> action.label]
  [Box (stack: x, gap: small, wrap: wrap)
    Button[] (type: secondary, size: small, onPress) -> suggestions]
```

---

### 3.5 JvMetricDisplay

**Purpose:** Display a single metric with its label, value, and optional trend indicator. This is a critical component for Javelin's analytics UI. Enforces the Sage archetype: transparent data presentation with clear context.

**Stripe primitives:** `Box`, `Inline`, `Badge`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `stack` | `'y'` | Label above value (conventional metric layout) |
| `gap` | `'xsmall'` | Tight coupling between label and value |
| `font` on label | `'caption'` | Label is secondary to the value |
| `color` on label | `'secondary'` | De-emphasized label |
| `fontWeight` on value | `'bold'` | Value is the primary data point |

**Props interface:**

```typescript
type TrendDirection = 'up' | 'down' | 'flat';

interface JvMetricDisplayProps {
  /**
   * Metric label. Use Stripe's terminology (MRR, churn rate, ARPU).
   * Brand voice: use the operator's language, not technical jargon.
   */
  label: string;
  /**
   * Formatted metric value. Pre-format with currency symbols, percentages, etc.
   * The component renders this as-is -- it does not format numbers.
   */
  value: string;
  /** Optional trend direction. Renders a colored badge. */
  trend?: {
    direction: TrendDirection;
    /** Trend label, e.g., "+12%" or "-3.2%". Be specific. */
    label: string;
  };
  /** Optional freshness indicator */
  freshness?: {
    type: 'live' | 'cached';
    syncedAt?: string;
  };
  /** Size variant -- 'default' for dashboard cards, 'compact' for inline/table contexts */
  size?: 'default' | 'compact';
}
```

**Key behavior:**
- Label renders above value in `font: 'caption'`, `color: 'secondary'`.
- Value renders in `fontWeight: 'bold'` (default size) or `fontWeight: 'semibold'` (compact size).
- Trend badge maps direction to Badge type: `up` -> `positive`, `down` -> `negative`, `flat` -> `info`.
- Freshness indicator renders as a small `Badge type="info"` or `Badge type="positive"` below the value (same pattern as MessageBubble's existing freshness display).
- `compact` size variant uses tighter spacing (`gap: 'xxsmall'`) and `fontWeight: 'semibold'` instead of `bold` for the value.
- The component does NOT fetch or calculate metrics. It is a pure display component. Data fetching is the caller's responsibility.

**Composition:**

```
Box (stack: y, gap: xsmall|xxsmall)
  Inline (font: caption, color: secondary) -> label
  Box (stack: x, gap: small, alignY: center)
    Inline (fontWeight: bold|semibold) -> value
    [Badge (type: positive|negative|info) -> trend.label]
  [Badge (type: info|positive, size: small) -> freshness indicator]
```

---

### 3.6 JvActionBar

**Purpose:** Consistent action grouping for primary and secondary actions at the bottom or end of a content section. Enforces Javelin's interaction pattern: primary action is always prominent, secondary is always available, destructive actions require confirmation.

**Stripe primitives:** `Box`, `Button`, `Divider`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `stack` | `'x'` | Horizontal button row |
| `gap` | `'small'` | Standard button spacing |
| `distribute` | `'space-between'` (when destructive action present) or `'packed'` | Destructive actions are visually separated |
| `alignY` | `'center'` | Vertical alignment for mixed-size buttons |
| `paddingTop` | `'medium'` | Visual separation from content above |

**Props interface:**

```typescript
interface JvActionBarAction {
  /** Button label. Brand voice: verb-first, specific. "Update 23 subscriptions" not "Submit" */
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

interface JvActionBarProps {
  /** Primary action. Renders as type="primary" button. */
  primary: JvActionBarAction;
  /** Optional secondary action. Renders as type="secondary" button. */
  secondary?: JvActionBarAction;
  /**
   * Optional destructive action. Renders as type="destructive" button.
   * Visually separated from primary/secondary with space-between distribution.
   */
  destructive?: JvActionBarAction;
  /** Show a divider line above the action bar */
  showDivider?: boolean;
}
```

**Key behavior:**
- Primary action always renders on the right (end) of the bar.
- Secondary action renders to the left of primary.
- When a destructive action is provided, it renders on the far left with `distribute: 'space-between'` separating it from the primary/secondary group. This visual separation is a safety pattern aligned with Javelin's "transparent and safe" brand value.
- When `showDivider` is true, a `Divider` component renders above the action bar for visual separation from content.
- Brand voice enforcement: action labels should be verb-first and specific. JSDoc guidance included.

**Composition:**

```
Box (stack: y)
  [Divider]
  Box (stack: x, gap: small, distribute: space-between|packed, alignY: center, paddingTop: medium)
    [Button (type: destructive) -> destructive.label]
    Box (stack: x, gap: small)
      [Button (type: secondary) -> secondary.label]
      Button (type: primary) -> primary.label
```

---

### 3.7 JvConfirmationPrompt

**Purpose:** Safety confirmation dialog for destructive or high-impact actions. Implements Javelin's core brand value: "Say what you did and why." Every action is explained, confirmed, and reversible. This component ensures that write operations follow the Sage archetype pattern of transparency.

**Stripe primitives:** `Box`, `Inline`, `Banner`, `Button`, `Divider`

**Brand tokens applied:**

| Token | Value | Rationale |
|---|---|---|
| `padding` | `'medium'` | Standard container padding |
| `backgroundColor` | `'container'` | Visual distinction from surrounding content |
| `stack` | `'y'` | Vertical layout for explanation + actions |
| `gap` | `'medium'` | Clear separation between explanation and actions |
| Banner `type` | `'critical'` | High-visibility for destructive actions |

**Props interface:**

```typescript
interface JvConfirmationPromptProps {
  /**
   * What will happen. Brand voice: specific and honest.
   * GOOD: "Update 23 subscriptions to the Pro plan"
   * BAD: "Are you sure you want to proceed?"
   */
  title: string;
  /**
   * Detailed explanation of what changes and what cannot be undone.
   * Brand voice: factual, complete, no hedging.
   * GOOD: "This will change the plan for 23 active subscriptions. 2 subscriptions with pending invoices will be skipped. This action can be reversed."
   * BAD: "This action may affect some subscriptions."
   */
  description: string;
  /**
   * Optional list of specific items affected.
   * Shows users exactly what will change (Sage transparency).
   */
  affectedItems?: Array<{
    label: string;
    detail?: string;
  }>;
  /** Confirm action. Label should describe the action, not "OK" or "Yes". */
  onConfirm: () => void;
  confirmLabel: string;
  /** Cancel action */
  onCancel: () => void;
  cancelLabel?: string;
  /** Whether this is a destructive (irreversible) action */
  destructive?: boolean;
  /** Loading state during action execution */
  loading?: boolean;
}
```

**Key behavior:**
- Banner renders at the top with `type="critical"` for destructive actions, `type="default"` for non-destructive confirmations.
- `affectedItems`, when provided, renders as a compact list showing each item. This implements the Sage transparency pattern: the user sees exactly what will change before confirming.
- Confirm button renders as `type="destructive"` when `destructive` is true, `type="primary"` otherwise. Label must be action-specific ("Update 23 subscriptions", "Delete this dashboard"), never generic ("OK", "Yes", "Confirm").
- Cancel button renders as `type="secondary"`. Default label is "Cancel".
- When `loading` is true, confirm button shows disabled state. Cancel remains available (users can always back out).
- JSDoc includes brand voice examples for title and description to guide developers toward the Sage transparency pattern.

**Composition:**

```
Box (padding: medium, backgroundColor: container, stack: y, gap: medium)
  Banner (type: critical|default, title, description)
  [Box (stack: y, gap: xsmall)
    [Box (stack: x, gap: small) per affectedItem
      Inline (fontWeight: semibold) -> item.label
      Inline (color: secondary) -> item.detail]]
  Divider
  Box (stack: x, gap: small, distribute: space-between)
    Button (type: secondary) -> cancelLabel
    Button (type: destructive|primary, disabled: loading) -> confirmLabel
```

---

### 3.8 Additional Brand Pattern Components

These are smaller, supplementary components that enforce brand patterns observed in the existing codebase. They formalize patterns already present in `MessageBubble`, `ThinkingIndicator`, and `WelcomePrompt`.

#### 3.8.1 JvFreshnessIndicator

**Purpose:** Display data freshness state. Formalizes the pattern already in MessageBubble. Implements the Sage value of transparency about data currency.

**Stripe primitives:** `Badge`

**Props interface:**

```typescript
interface JvFreshnessIndicatorProps {
  type: 'live' | 'cached';
  syncedAt?: string;
}
```

**Key behavior:**
- `live` renders `Badge type="positive"` with label "Live data"
- `cached` renders `Badge type="info"` with label "Data as of {formatted timestamp}"
- Extracted from MessageBubble to be reusable across metric displays, dashboard headers, and data tables.

#### 3.8.2 JvLoadingState

**Purpose:** Brand-consistent loading indicator with progressive status messages. Formalizes the ThinkingIndicator pattern.

**Stripe primitives:** `Box`, `Spinner`, `Inline`, `Banner`

**Props interface:**

```typescript
interface JvLoadingStateProps {
  /** Initial status message */
  message?: string;
  /** Timestamp when loading started (enables progressive messaging) */
  startedAt?: number;
  /** Whether to show the extended-wait banner */
  showExtendedWait?: boolean;
}
```

**Key behavior:**
- Renders `Spinner` with adjacent status text in `color: 'secondary'`
- When `startedAt` is provided and elapsed time exceeds 5 seconds, message updates to a more specific status ("Fetching fresh data from Stripe...") and an optional Banner appears.
- Brand voice: loading messages are specific about what is happening, not generic. "Analyzing your data..." not "Loading..." -- aligns with the Sage transparency principle.

#### 3.8.3 JvPromptSuggestions

**Purpose:** Render a row of prompt suggestion buttons. Formalizes the pattern in WelcomePrompt's guided prompts section.

**Stripe primitives:** `Box`, `Button`, `Inline`

**Props interface:**

```typescript
interface PromptSuggestion {
  /** Short label displayed on the button */
  label: string;
  /** Full prompt value sent when selected (may differ from label) */
  value: string;
}

interface JvPromptSuggestionsProps {
  /** Section label above the suggestions */
  label?: string;
  suggestions: PromptSuggestion[];
  onSelect: (value: string) => void;
}
```

**Key behavior:**
- Optional label renders in `fontWeight: 'semibold'` (e.g., "Try asking")
- Suggestions render as `type="secondary"` `size="small"` buttons in a wrapping horizontal row (`stack: 'x'`, `gap: 'small'`, `wrap: 'wrap'`)
- Brand voice: suggestion labels should use the operator's language. "What's my MRR?" not "Calculate monthly recurring revenue."

---

## 4. Marketplace Compliance Review

This section verifies that the proposed brand component layer meets Stripe App Marketplace requirements. References: `.stripe-apps-docs/publishing-guide.md`, `.stripe-apps-docs/core-concepts.md`.

### 4.1 Technical Compliance

| Requirement | Status | Evidence |
|---|---|---|
| **Uses only Stripe UI Toolkit components** | PASS | All 10 components compose exclusively from: `Box`, `Inline`, `Button`, `Badge`, `Banner`, `Divider`, `Spinner`. No raw HTML, no custom CSS, no external UI libraries. |
| **Only Box and Inline use css prop** | PASS | All `css` prop usage is on `Box` and `Inline` only. No `css` prop on `Button`, `Badge`, `Banner`, or other components. |
| **css prop uses only design tokens** | PASS | All values are Stripe design tokens (`'medium'`, `'small'`, `'container'`, `'heading'`, `'secondary'`, etc.). No hex values, no RGB, no arbitrary numbers, no custom strings. |
| **React 17 compatible** | PASS | No React 18/19 features used (`useTransition`, `useDeferredValue`, `use()`, etc.). `useState`, `useEffect`, `useCallback` only. |
| **No custom HTML elements** | PASS | No `<div>`, `<span>`, `<input>`, `<form>`, or any other HTML elements in component JSX. |
| **No CSS file imports** | PASS | No `.css`, `.module.css`, or CSS-in-JS imports in any component specification. |
| **No DOM manipulation** | PASS | No `ref` props, no `document.querySelector`, no DOM APIs. |
| **Serialization-safe props** | PASS | All component props are serializable types (strings, numbers, booleans, arrays of plain objects). No `Map`, `Set`, `Date` objects, or class instances as props. Callbacks are simple function references. |

### 4.2 Naming Compliance

| Requirement | Status | Evidence |
|---|---|---|
| **App name under 35 chars** | PASS | "Javelin" is 7 characters. |
| **No forbidden words in name** | PASS | Does not contain "Stripe", "app", "free", or "paid". |
| **Subtitle under 80 chars** | PASS | "AI-powered builder for custom workflows, dashboards, and automations in Stripe" is 79 characters. |
| **About under 1,000 chars** | PASS | Proposed About text is ~550 characters per brand guidelines S7.1. |
| **Feature descriptions under 300 chars each** | PASS | Three features defined in brand guidelines S7.1, all under limit. |

### 4.3 Image Compliance

| Requirement | Status | Notes |
|---|---|---|
| **App icon: 300x300px min, 1:1, PNG/JPG, <10MB** | NEEDS ACTION | Current `icon.png` exists but is assessed as weak (radial gradient blob). Brand guidelines recommend replacement with Precision Mark before marketplace listing. |
| **Feature images: 1600px+ wide, show app in Dashboard context** | NEEDS ACTION | No feature images created yet. Must show Javelin within the Stripe Dashboard drawer. Must use mock data. |
| **No real customer data in images** | ACKNOWLEDGED | All screenshots and images must use mock/demo data. |

### 4.4 Content Compliance

| Requirement | Status | Evidence |
|---|---|---|
| **Clear permission purpose descriptions** | PASS | All 7 permissions in `stripe-app.json` have specific `purpose` fields. Brand voice (Direct, Clear) naturally produces compliant purpose descriptions. |
| **CSP declarations cover external APIs** | PASS | `content_security_policy` in manifest covers Supabase, OpenRouter, and OpenAI endpoints. |
| **Post-install action configured** | PASS | `post_install_action` set to `"onboarding"` type. |
| **Sandbox install compatible** | PASS | `sandbox_install_compatible: true` in manifest. |
| **Privacy policy URL** | NEEDS ACTION | Not yet configured. Required before public distribution. |
| **Support channels** | NEEDS ACTION | Not yet configured. Required before public distribution. |

### 4.5 UX Pattern Compliance

| Requirement | Status | Evidence |
|---|---|---|
| **Loading states provided** | PASS | `JvLoadingState` component handles loading with progressive messaging. |
| **Error states handled** | PASS | `JvConfirmationPrompt` and `Banner type="critical"` patterns cover error display. ChatView already handles error states with dismissible banners. |
| **Empty states provided** | PASS | `JvEmptyState` component with action-oriented copy patterns. |
| **Destructive action safety** | PASS | `JvConfirmationPrompt` implements explanation-confirmation-reversal pattern. `JvActionBar` visually separates destructive actions. |

### 4.6 Compliance Summary

| Category | Pass | Needs Action | Fail |
|---|---|---|---|
| Technical | 8 | 0 | 0 |
| Naming | 5 | 0 | 0 |
| Images | 1 | 2 | 0 |
| Content | 4 | 2 | 0 |
| UX Patterns | 4 | 0 | 0 |
| **Total** | **22** | **4** | **0** |

**Needs Action items (pre-marketplace submission):**
1. Replace `icon.png` with Precision Mark logo at 300x300px minimum
2. Create 3+ feature images (1600px+ wide) showing Javelin in Dashboard context
3. Add privacy policy URL to listing
4. Add support channel(s) with response time estimates

---

## 5. Conflict Resolution Notes

Every conflict between Javelin's brand guidelines and Stripe's platform constraints is documented here with the approved fallback and rationale for accepting it.

| Conflict | Approved Fallback | Rationale |
|---|---|---|
| **Brand colors cannot be applied in-product.** Javelin defines 7 specific hex colors (S5.2). Stripe allows only semantic tokens. | Map brand intent to nearest Stripe semantic token (see S2.1). Reserve exact hex colors for app icon, marketplace images, and external touchpoints. | The brand guidelines explicitly acknowledge this (S5.2: "Inside the Stripe App UI, you cannot apply these colors directly...The brand colors above apply to the icon, marketplace listing images, external marketing, documentation, and any future website."). This is a known constraint, not a surprise conflict. Stripe's semantic tokens are designed for cross-theme consistency (light/dark mode) which benefits the user. |
| **Inter/JetBrains Mono cannot be used as fonts in-product.** Javelin specifies Inter for headings/body and JetBrains Mono for code (S5.3). Stripe controls all font rendering. | Accept Stripe's system font stack for all in-product typography. Use `font` and `fontWeight` tokens for hierarchy. Reserve Inter and JetBrains Mono for external touchpoints. | Brand guidelines already state this (S5.3: "For the Stripe App UI: Typography is controlled entirely by Stripe's design system. Javelin has no control over fonts inside the extension. This is fine -- it reinforces the 'ecosystem-native' pillar."). The Sage archetype (trustworthy, competent) is served by matching the Dashboard's existing typographic conventions rather than fighting them. |
| **Custom iconography cannot be rendered in-product.** Javelin specifies outlined, geometric, 24x24px icons (S5.4). Stripe provides a fixed icon set via the `Icon` component. | Use Stripe's `Icon` component with the semantically closest icon name for functional icons. Reserve custom iconography for marketplace screenshots, documentation, and marketing materials. | Javelin's icon style direction (outlined, geometric, functional) is intentionally aligned with Stripe's own icon aesthetic, minimizing visual friction. For cases where no Stripe icon matches the needed concept, use text labels instead of forcing a mismatched icon. |
| **Line height cannot be controlled.** Brand guidelines specify 1.5-1.6 line height for body text. Stripe's font tokens set their own line height. | Accept Stripe's line height. | Stripe's line height is optimized for readability within the Dashboard viewport. Overriding it (if possible) would risk accessibility regression. The brand specification of 1.5-1.6 is already within standard web readability norms and likely close to Stripe's value. |
| **No border, shadow, or elevation tokens.** JvCard cannot express depth through borders or shadows -- only through `backgroundColor`. | Use `backgroundColor: 'container'` for card differentiation. Use `Divider` for explicit section separation. | Stripe Apps intentionally flatten visual hierarchy to maintain consistency with the Dashboard. Cards differentiated by background color alone are sufficient. This constraint actually reinforces the Magician archetype: clean, uncluttered, focused on content. |
| **Badge color cannot be overridden.** JvStatusIndicator maps status to Badge types, but the exact colors (green, red, amber, blue) are Stripe's palette, not Javelin's. | Accept Stripe's Badge colors. Brand colors for status states are used only in external materials. | The semantic meaning (positive = green, negative = red) is universal and matches Javelin's intent. The exact shade difference (Javelin's `#10B981` vs. Stripe's success green) is invisible to users who never see them side by side. |
| **`Banner` has limited type options.** Only `default` and `critical` are available. There is no `success` or `warning` banner type. | Use `Banner type="default"` for informational and success messages (with copy that conveys success). Use `Banner type="critical"` for errors, warnings, and destructive confirmations. Differentiate through copy, not color. | This reinforces the core brand insight: voice is the primary differentiator. A Banner that says "Done. Dashboard created with 3 charts." communicates success through copy without needing a green banner. The Sage archetype values clear language over visual signals. |
| **No custom animations or transitions.** Brand guidelines do not specify motion, but loading/transition states benefit from animation in consumer UX. | Use `Spinner` for loading states. Use progressive text updates (ThinkingIndicator pattern) for extended operations. No custom animation. | Stripe's sandbox prevents `requestAnimationFrame`, CSS animations, and DOM transitions. The existing ThinkingIndicator pattern (text updates on an interval) is effective and brand-aligned: it tells the user what is happening (Sage transparency) rather than showing a generic animation. |
| **App icon is the only visual brand asset in the Dashboard.** The Javelin logo/mark appears only as the small app icon next to the app name in the Stripe drawer header. | Invest in a high-quality, distinctive app icon (Precision Mark concept). This is the single pixel-level brand touchpoint inside the Dashboard. | The icon is the first thing users see when the app drawer opens and the primary visual differentiator in the marketplace grid. It must be distinctive at 32px (drawer) and compelling at 300px (marketplace). All other in-product branding is voice and behavior. |
| **`ContextView` title is plain text only.** Cannot include brand marks, styled text, or icons in the view title. | Use "Javelin" as the plain text title. Brand personality comes from the content below the title, not the title itself. | The title bar is a Stripe standard UI element. Consistent treatment across all apps builds trust. Users know they are in the Javelin app from the title text and icon; additional branding in the title would feel forced. |

### Conflict Resolution Principles

Three principles guided all fallback decisions:

1. **Voice over visuals.** When a visual brand element is blocked, the fallback is always to strengthen the verbal/behavioral expression of the same brand intent. A "success" state expressed as "Done. Built your dashboard." is stronger brand expression than a green background that users do not consciously attribute to Javelin.

2. **Native over novel.** When Stripe provides a standard pattern (Badge colors, font rendering, spacing scale), adopt it rather than working around it. Users trust the Dashboard's visual language. Javelin's brand goal is to feel like "Stripe got smarter" (core value #4), not like a foreign interface was installed.

3. **Invest where it matters.** The app icon and marketplace listing images are the only places where Javelin has full visual control inside the Stripe ecosystem. These assets receive the full brand treatment (Indigo palette, Precision Mark, Inter typography) and should be treated as high-value brand investments.

---

## Appendix A: Component Implementation Priority

| Priority | Component | Rationale |
|---|---|---|
| 1 | `JvSectionHeader` | Used in every view. Low complexity. Immediate consistency win. |
| 2 | `JvCard` | Used extensively in chat thread, settings, insights. Normalizes spacing. |
| 3 | `JvEmptyState` | Improves first-impression experience. Replaces ad-hoc empty patterns. |
| 4 | `JvMetricDisplay` | Core to the analytics UI. Currently handled inline. |
| 5 | `JvStatusIndicator` | Normalizes Badge usage across the app. |
| 6 | `JvActionBar` | Needed for write operations (upcoming builder features). |
| 7 | `JvConfirmationPrompt` | Needed for destructive write operations (upcoming). |
| 8 | `JvFreshnessIndicator` | Extracts existing pattern from MessageBubble. Low urgency. |
| 9 | `JvLoadingState` | Extracts existing pattern from ThinkingIndicator. Low urgency. |
| 10 | `JvPromptSuggestions` | Extracts existing pattern from WelcomePrompt. Low urgency. |

## Appendix B: Existing Component Migration Map

This maps existing components to the brand components they should adopt.

| Existing Component | Brand Components to Adopt | Migration Notes |
|---|---|---|
| `WelcomePrompt` | `JvSectionHeader`, `JvEmptyState`, `JvPromptSuggestions`, `JvCard` | Refactor to compose brand components. Welcome title becomes `JvSectionHeader`. Prompt buttons become `JvPromptSuggestions`. Insights section uses `JvCard`. |
| `MessageBubble` | `JvCard`, `JvFreshnessIndicator` | User messages use `JvCard` with `container` background. Freshness badge extracted to `JvFreshnessIndicator`. |
| `InsightCard` | `JvCard`, `JvActionBar` | Wrap insight content in `JvCard`. Feedback buttons become a compact `JvActionBar` variant. |
| `ThinkingIndicator` | `JvLoadingState` | Direct replacement. `JvLoadingState` formalizes the same pattern. |
| `ClarificationPrompt` | `JvCard`, `JvPromptSuggestions` | Banner + options pattern. Options become `JvPromptSuggestions`. Container becomes `JvCard`. |
| `ConversationList` | `JvSectionHeader`, `JvEmptyState`, `JvCard` | Header becomes `JvSectionHeader` with close action. Empty state becomes `JvEmptyState`. Each conversation item uses `JvCard`. |
| `ChatInput` | (no brand component needed) | ChatInput is a functional component. Its brand expression is the placeholder text and label, which should follow voice guidelines. |
| `ChatView` | `JvLoadingState`, `JvSectionHeader` | Loading state uses `JvLoadingState`. Composed primarily of other components. |

## Appendix C: Voice Pattern Reference (Quick Reference for Developers)

Since voice is the primary brand lever, this appendix provides copy patterns for developers implementing the brand components.

### Status Messages

| Context | Pattern | Example |
|---|---|---|
| Action completed | "Done. {what was done}." | "Done. Dashboard created with 3 charts." |
| Action in progress | "{what is happening}..." | "Analyzing your data..." |
| Extended wait | "Still working -- {specific reason}." | "Still working -- fetching the latest data from Stripe." |
| Error (recoverable) | "{What went wrong}. {What to do}." | "Something went wrong. Please try again." |
| Error (auth) | "Your session has expired. {Recovery action}." | "Your session has expired. Please re-authorize Javelin." |
| Error (service) | "{Service} is temporarily unavailable. {When to retry}." | "AI service is temporarily unavailable. Try again in a moment." |

### Empty States

| Context | Title Pattern | Description Pattern |
|---|---|---|
| No conversations | "No conversations yet" | "Ask a question to get started." |
| No data | "No {data type} found" | "Javelin needs {specific data} to show this. {How to get it}." |
| First use | Javelin's greeting (per S4.3 onboarding) | "I'm Javelin. Describe what you need and I'll build it." |

### Confirmation Prompts

| Context | Title Pattern | Description Pattern |
|---|---|---|
| Bulk update | "Update {count} {items}" | "{What changes}. {What doesn't change}. {Reversibility}." |
| Delete | "Delete {item}" | "This removes {what}. {Reversibility}." |
| Non-destructive | "{Action} {target}" | "{What happens}. {Any side effects}." |

---

*Generated by Brand Specialist sub-agent*
*Specification version: 1.0*
*This is a living document. Review when new Stripe UI Toolkit components are added or brand guidelines are updated.*
