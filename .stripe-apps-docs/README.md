# Stripe Apps Reference Docs

> **DISAMBIGUATION:** This project builds a **Stripe App** (Dashboard extension).
> These docs cover the **Stripe Apps SDK** — NOT Stripe Payments (`@stripe/stripe-js`).
> If you're looking for checkout, PaymentElement, or payment intents — STOP. Wrong context.

---

## What is this directory?

Curated reference files for AI agents working on this Stripe App. Each file is distilled from verified Stripe documentation and structured for fast agent scanning.

## When to read these files

Read the relevant file **before** writing any Stripe App code. Do not rely on training data — Stripe Apps patterns differ significantly from the far more common Stripe Payments patterns.

## File Index

| File | Contents | Read when... |
|------|----------|--------------|
| `core-concepts.md` | Architecture, manifest, viewports, permissions, auth, Secret Store, project structure, dev workflow | Starting any Stripe App work; understanding how the app is structured |
| `ui-components.md` | All 34 UI Toolkit components (Views, Layout, Navigation, Content, Forms, Charts), import patterns, view registration | Building or modifying UI extension views |
| `sdk-api.md` | `ExtensionContextValue` type, utility functions, hooks, common patterns | Accessing context, calling APIs, managing state in extensions |
| `cli-reference.md` | Prerequisites, all `stripe apps` commands, flags, dev workflow | Running CLI commands, creating views, uploading builds |
| `publishing-guide.md` | Naming rules, manifest prep, listing fields, image specs, test credentials, review process, rejection checklist | Preparing for marketplace submission |

## Key reminders

- React 17 only in extension UI code
- `@stripe/ui-extension-sdk` is the SDK — never `@stripe/stripe-js`
- All UI must use Stripe UI Toolkit components — no custom HTML/CSS
- `stripe-app.json` is the manifest — check it for permissions and CSP
- Secret Store API for credentials — not `.env` files
