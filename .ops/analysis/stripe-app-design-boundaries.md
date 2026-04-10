# Stripe App Design Boundaries & Constraints

> Research analysis of what is and isn't possible when designing UI for Stripe Apps (Dashboard extensions).

---

## 1. Component Requirements

### Are we required to use only Stripe UI Toolkit components?

**Yes.** Stripe Apps do not support arbitrary HTML. The React tree is serialized and passed to the Stripe Dashboard to be rendered — the actual DOM is inaccessible from app code running in the sandboxed iframe. This means:

- **No raw HTML elements** — `<div>`, `<span>`, `<input>`, `<form>`, etc. are not allowed
- **No custom DOM manipulation** — `document.querySelector`, `ref` props, etc. do not work
- **All UI must be composed from the 34 Stripe UI Toolkit components** imported from `@stripe/ui-extension-sdk/ui`

> *"Extensions don't support arbitrary HTML. Instead, they exclusively use UI components provided by Stripe."*
> — [How UI extensions work](https://docs.stripe.com/stripe-apps/how-ui-extensions-work)

### Can we create custom React components?

**Yes, with caveats.** You can create your own React components that **compose** Stripe UI Toolkit components internally. This is standard practice for organizing code. However:

- Custom components **must only render Toolkit components** in their JSX — no raw HTML
- Custom components **can accept complex data types** (nested objects, circular references) as props, but cannot pass unserializable types (`Map`, `Set`) directly to Toolkit components
- Custom components **cannot use React refs** — the DOM is inaccessible
- **Functions passed to Toolkit components become asynchronous** due to serialization proxying

**What works:**
```tsx
// ✅ Custom component composing Toolkit components
const CustomerCard = ({ name, email }: Props) => (
  <Box css={{ stack: 'y', gap: 'small', padding: 'medium' }}>
    <Inline css={{ font: 'heading' }}>{name}</Inline>
    <Inline css={{ color: 'secondary' }}>{email}</Inline>
  </Box>
);
```

**What doesn't work:**
```tsx
// ❌ Custom component using raw HTML
const CustomerCard = ({ name }: Props) => (
  <div className="card">
    <h2>{name}</h2>
  </div>
);
```

### Can we use raw HTML elements alongside Toolkit components?

**No.** The serialization model explicitly prevents this. Only Stripe UI Toolkit components are recognized during serialization and rendering.

---

## 2. Styling Constraints

### Can we use Tailwind CSS?

**No.** Tailwind generates CSS class names applied to HTML elements. Since Stripe Apps:
1. Do not support raw HTML elements (no `<div className="...">`)
2. Do not render to a DOM you control (the iframe is sandboxed)
3. Use a proprietary design token system via the `css` prop

There is no mechanism to inject or apply Tailwind utility classes. The `css` prop on `Box` and `Inline` accepts a **constrained object** with predefined token values — not arbitrary CSS strings or class names.

### Can we use CSS Modules, CSS files, or CSS-in-JS?

**No.** There is no way to:
- Import `.css` or `.module.css` files for styling
- Use CSS-in-JS libraries (styled-components, emotion, etc.)
- Apply inline CSS strings to components
- Access the DOM to inject `<style>` tags

### What styling mechanisms are available?

Styling is limited to the `css` prop on `Box` and `Inline` components, using Stripe's design token system:

**Styleable containers:**
| Component | Analogous to | Styling |
|-----------|-------------|---------|
| `Box` | `<div>` | Full `css` prop support |
| `Inline` | `<span>` | Full `css` prop support |

**All other components have preset styles** that cannot be overridden (with rare exceptions documented per-component).

> *"Custom styling of UI elements is intentionally limited. This is to maintain platform consistency with core UI elements and to ensure a high accessibility bar."*
> — [Design your app](https://docs.stripe.com/stripe-apps/design)

### Available design tokens

**Spacing (used in `padding`, `margin`, `gap`):**
| Token | Value |
|-------|-------|
| `0` | 0px |
| `xxsmall` | 2px |
| `xsmall` | 4px |
| `small` | 8px |
| `medium` | 16px |
| `large` | 24px |
| `xlarge` | 32px |
| `xxlarge` | 48px |

**Sizing (used in `width`, `height`):**
- Fractional: `1/2`, `1/3`, `2/3`, `1/4`, `3/4`, `1/5`–`4/5`, `1/6`–`5/6`, `1/12`–`11/12`
- Special: `fill` (100%), `min`, `max`, `fit`
- Absolute: `0`

**Layout:**
- `stack`: `x` (horizontal), `y` (vertical), `z` (layered)
- `alignX`: `start`, `center`, `end`, `stretch`
- `alignY`: `top`, `center`, `baseline`, `bottom`, `stretch`
- `distribute`: `space-between`, `packed`
- `wrap`: `wrap`
- `overflow` / `overflowX` / `overflowY`: `visible`, `hidden`, `scroll`, `auto`

**Typography:**
- `font`: `heading` and other preset tokens (no custom font faces)
- `fontWeight`: preset weight tokens
- `textAlign`: `center`, etc.
- `textTransform`: `uppercase`, etc.
- `textOverflow`, `whiteSpace`, `overflowWrap`: standard text handling

**Colors:**
- `backgroundColor`: `container` and other semantic tokens
- `color`: `primary`, `success`, `secondary`, and other semantic tokens
- `fill`: icon color tokens
- `keyline`: `neutral` and other border tokens

> *"Unlike in vanilla CSS, you can't choose arbitrary font faces and styles."*
> — [Style your app](https://docs.stripe.com/stripe-apps/style)

---

## 3. Layout & Visual Boundaries

### Available view types

| View | Behavior | Use case |
|------|----------|----------|
| `ContextView` | Renders in a drawer alongside Dashboard content | Primary view — most viewports |
| `FocusView` | Full-width modal overlay with backdrop | Complex forms, multi-step flows |
| `SettingsView` | Dedicated settings page | `settings` viewport only |
| `SignInView` | Authentication screen | Login/OAuth flows |

### Viewport constraints

- **ContextView** renders in a fixed-width drawer on the right side of the Dashboard. You do not control the drawer width.
- **FocusView** takes over the full viewport but still renders within the Stripe Dashboard frame.
- You cannot create floating windows, modals (other than FocusView), popups, or overlays outside the extension viewport.
- There are **no responsive breakpoints** — the viewport is determined by the view type, not screen size.

### Can we control spacing, typography, or color beyond Toolkit defaults?

**Partially.** Using `Box` and `Inline`:
- **Spacing:** Yes, using the token scale (`xxsmall` through `xxlarge`)
- **Typography:** Limited to `font` and `fontWeight` tokens — no custom fonts, font sizes, or line heights
- **Colors:** Limited to semantic color tokens — no hex values, RGB, or custom colors
- **Layout:** Uses Stripe's proprietary stack system (`stack: 'x'|'y'|'z'`), not CSS flexbox/grid directly

### Fixed navigation patterns

- Views must be wrapped in a top-level view component (`ContextView`, `FocusView`, etc.)
- `ContextView` provides a built-in title bar header
- `FocusView` provides a built-in close button and title
- Tab navigation is available via the `Tabs` component
- There is no custom header, footer, sidebar, or navigation bar component

---

## 4. Unsupported Patterns

### Common UI patterns NOT possible in Stripe Apps

| Pattern | Why it's blocked |
|---------|-----------------|
| **Custom modals/dialogs** | No DOM access; only `FocusView` exists |
| **Custom tooltips/popovers** | Must use `Tooltip` and `Menu` components |
| **Drag and drop** | No DOM events or refs available |
| **Canvas/SVG rendering** | No raw HTML elements allowed |
| **Custom animations/transitions** | No CSS animations, no `requestAnimationFrame` |
| **Rich text editors** | No `contentEditable`, no raw `<textarea>` control |
| **File upload UI** | No `<input type="file">` element |
| **Custom scrollbars** | No DOM styling access |
| **Responsive layouts** | No media queries; viewport is fixed by view type |
| **iframes within the extension** | Already sandboxed; nested iframes not supported |
| **localStorage/indexedDB** | Sandboxed iframe has `null` origin; blocked |
| **BroadcastChannel** | Blocked by sandbox |
| **Custom routing** | No client-side router; navigation is view-switching |
| **Web Workers** | Not available in sandboxed context |

### Known developer pain points

1. **Input lag** — The Dashboard serializes and proxies all input data, causing perceptible lag with React controlled components. Consider debouncing or using uncontrolled patterns where possible.
2. **No refs** — Cannot measure DOM elements, focus inputs programmatically, or integrate with DOM-dependent libraries.
3. **Async functions** — All callback functions become asynchronous after serialization, which can cause unexpected behavior with synchronous patterns.
4. **Limited data types** — Cannot pass `Map`, `Set`, `Date` objects, or class instances to Toolkit components.
5. **No custom branding** — The only branding element is the app indicator (icon + color). You cannot theme the entire app.

---

## 5. Summary: What We Can and Cannot Do

### ✅ CAN do
- Compose Stripe UI Toolkit components into custom React components
- Use `Box` and `Inline` for layout with design token styling
- Use all 34 Toolkit components (views, layout, navigation, content, forms, charts)
- Call Stripe APIs via the authenticated HTTP client
- Call external APIs (with CSP declaration in manifest)
- Use `showToast()` for notifications
- Use `Tabs` for section navigation
- Use `FocusView` for modal-like focused workflows
- Use `useStorage` for cross-viewport state
- Use Stripe's Figma UI toolkit for design planning
- Set a brand icon and brand color for app identity

### ❌ CANNOT do
- Use Tailwind CSS, CSS Modules, styled-components, or any external styling
- Use raw HTML elements (`div`, `span`, `input`, etc.)
- Import CSS files
- Use custom fonts, colors (hex/RGB), or arbitrary spacing values
- Access the DOM (refs, querySelector, etc.)
- Use localStorage, indexedDB, or BroadcastChannel
- Create custom modals, drag-and-drop, file uploads, or canvas graphics
- Use React 18/19 features
- Apply responsive breakpoints or media queries
- Use any UI library other than Stripe UI Toolkit

---

## 6. Recommendations for This Project

Based on these constraints, our CLAUDE.md rules are correctly aligned:

1. **No Tailwind** — confirmed; not possible in Stripe Apps
2. **No custom HTML/CSS** — confirmed; the serialization model prevents it
3. **Stripe UI Toolkit only** — confirmed; the only path for UI rendering
4. **React 17 only** — confirmed; Stripe Apps SDK requires it
5. **No shadcn/ui or Headless UI** — confirmed; these require DOM access and custom HTML

**Design approach:** All UI design must be planned within the 34-component vocabulary of the Stripe UI Toolkit. Use `Box` for layout composition and `Inline` for text styling. Accept the design token constraints as non-negotiable — they exist for accessibility and platform consistency.

**Figma resource:** Stripe provides an official [Figma UI Toolkit](https://www.figma.com/community/file/1105918844720321397/stripe-apps-ui-toolkit) for design planning.

---

## Sources

- [Style your app — Stripe Docs](https://docs.stripe.com/stripe-apps/style)
- [Design your app — Stripe Docs](https://docs.stripe.com/stripe-apps/design)
- [How UI extensions work — Stripe Docs](https://docs.stripe.com/stripe-apps/how-ui-extensions-work)
- [Build a UI — Stripe Docs](https://docs.stripe.com/stripe-apps/build-ui)
- [UI components — Stripe Docs](https://docs.stripe.com/stripe-apps/components)
- [Stripe Apps UI Toolkit — Figma](https://www.figma.com/community/file/1105918844720321397/stripe-apps-ui-toolkit)
- Local reference: `.stripe-apps-docs/ui-components.md`, `.stripe-apps-docs/core-concepts.md`, `.stripe-apps-docs/sdk-api.md`
