# Brand Specialist Memory

## Key Brand Decisions (2026-03-10)

### Positioning
- **Positioning statement:** "To founders and ops leads... Javelin is the AI-powered builder inside your Stripe Dashboard that turns plain-language instructions into working workflows, dashboards, and automations -- because every other tool is a read-only analyst. Javelin is the only one that builds."
- **Core differentiator:** Builder, not analyst. In-dashboard AND read-write. Empty quadrant in competitive landscape.
- **Category:** "In-platform AI builder" (new micro-category)
- **Brand essence:** "Precision power for operators" -- direct, capable, immediate

### Archetype & Personality
- **Primary archetype:** Magician (transforms complexity into effortless outcomes)
- **Secondary archetype:** Sage (trustworthiness, transparency, competence)
- **Voice attributes (ranked):** Direct, Capable, Clear, Honest
- **Personality anti-patterns:** Not playful, not corporate, not aggressive, not falsely humble

### Name & Tagline
- **Name:** Javelin -- assessed as strong. Encodes precision, directness, speed.
- **Tagline (primary):** "Tell Stripe what to do."
- **Marketplace subtitle:** "AI-powered builder for custom workflows, dashboards, and automations in Stripe"
- **Trademark risk:** Multiple "Javelin" entities exist in tech (Javelin Technologies/TriMech for CAD, Hexagon JAVELIN for manufacturing). Different market segments, low conflict risk. Formal USPTO Class 42 search recommended before marketing investment.

### Visual Identity
- **Primary color:** Javelin Indigo #4F46E5 (differentiated from Stripe purple #635BFF)
- **Dark variant:** #3730A3 | **Light tint:** #C7D2FE
- **Secondary:** Signal Green #10B981, Alert Amber #F59E0B, Neutral 900 #111827, Neutral 100 #F3F4F6
- **Typography:** Inter (display + body), JetBrains Mono (code) -- external touchpoints only
- **Iconography:** Outlined, geometric, functional, monochromatic
- **Logo direction:** Concept A "Precision Mark" recommended -- abstract geometric javelin trajectory

### Critical Constraints
- Primary UI is Stripe App -- no custom CSS, no custom fonts, no custom colors in product
- In-product brand expression = voice and tone only (Stripe UI Toolkit controls all visuals)
- Current icon (radial gradient blob) is weak -- needs replacement before marketplace listing
- App ID is com.javelin.analytics -- may need updating if scope expands beyond analytics

### Competitive Brand Intelligence
- ChartMogul: Sage archetype, teal/green, professional/authoritative -- reports, not builds
- Baremetrics: Everyman archetype, orange/coral, casual/friendly -- external, not native
- Coefficient: Sage, blue, technical/utility -- spreadsheet-based, not conversational
- None occupy in-dashboard + read-write quadrant

### Brand Component Layer (2026-03-10)
- **Spec file:** `openspec/brand-component-specification.md` (v1.0)
- **Prefix convention:** `Jv` prefix for brand components (JvCard, JvSectionHeader, etc.)
- **Component directory:** `src/components/brand/`
- **Core principle:** Voice over visuals. Native over novel. Invest where it matters (icon + marketplace images).
- **10 brand components defined:** JvSectionHeader, JvCard, JvStatusIndicator, JvEmptyState, JvMetricDisplay, JvActionBar, JvConfirmationPrompt, JvFreshnessIndicator, JvLoadingState, JvPromptSuggestions
- **Key audit finding:** 6 brand elements CAN apply, 6 CANNOT, 7 PARTIAL. Voice is the primary lever.
- **Stripe token mapping:** Brand colors map to semantic tokens (primary, success, warning, critical, container). No hex colors in-product.
- **Marketplace pre-submission needs:** Replace icon.png, create 3+ feature images, add privacy policy URL, add support channels
- **Migration map:** Existing components (WelcomePrompt, MessageBubble, InsightCard, ThinkingIndicator, ClarificationPrompt, ConversationList) should adopt brand components

### Files
- Brand guidelines: `openspec/brand-guidelines.md` (v1.0, MVB stage)
- Brand component spec: `openspec/brand-component-specification.md` (v1.0)
- Product vision: `openspec/product-vision-strategy.md`
- App manifest: `stripe-app.json` (name: "Javelin", id: com.javelin.analytics)
