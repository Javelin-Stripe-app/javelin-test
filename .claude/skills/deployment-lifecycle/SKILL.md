---
name: deployment-lifecycle
description: Deployment workflow patterns for Supabase + Stripe Apps — environment promotion, feature flags, rollback procedures, and CI/CD pipeline stages.
---

# Deployment Lifecycle

Deployment workflow patterns for Supabase Edge Functions + Stripe Apps, covering environment promotion, feature flags, rollback, and CI/CD pipeline integration.

## Scope

**Use for:**
- Designing deployment strategies for new features
- Environment promotion workflows (dev -> staging -> production)
- Feature flag patterns using environment variables
- Rollback procedures
- CI/CD pipeline stages and smoke tests
- Coordinating database migrations with deployments
- Stripe App upload and review process

**Not for:**
- Infrastructure provisioning (Supabase account setup)
- DNS or domain configuration
- Database migration planning (see `db-migration` skill)
- Stripe App publishing details (see `.stripe-apps-docs/publishing-guide.md`)

---

# Environment Strategy

## Three Environments

| Environment | Supabase Project | Stripe App         | Branch   |
|-------------|------------------|--------------------|----------|
| Dev         | Dev project      | Local dev server   | Feature  |
| Staging     | Staging project  | Uploaded (test)    | `staging`|
| Production  | Prod project     | Published (live)   | `main`   |

## Environment Variable Setup

Environment variables are set in the **Supabase Dashboard** per project (not in code):

```bash
# Per-environment (Supabase Dashboard → Edge Functions → Secrets)
SUPABASE_URL=                        # Auto-set by Supabase
SUPABASE_ANON_KEY=                   # Auto-set by Supabase
SUPABASE_SERVICE_ROLE_KEY=           # Auto-set by Supabase
STRIPE_SECRET_KEY=                   # per-environment (test vs live)
STRIPE_WEBHOOK_SECRET=               # per-environment

# Feature flags
FF_ENABLE_BATCH_EXPORT=true
FF_ENABLE_METADATA_EDITOR=false
```

Stripe App UI does not use environment variables — it accesses configuration via `stripe-app.json` constants and the Extension Context.

---

# CI/CD Pipeline Stages

```
Push to feature branch
  |
  v
[1. Lint & Type Check] -----> fail? -> block merge
  |
  v
[2. Unit & Integration Tests] -> fail? -> block merge
  |
  v
[3. Build Stripe App] -------> fail? -> block merge
  |
  v
[4. Deploy Edge Functions (Dev)] --> test against dev Supabase
  |
  v
[5. E2E Tests on Dev] -------> fail? -> block merge
  |
  v
PR approved + merged to main
  |
  v
[6. Deploy Edge Functions (Prod)] -> supabase functions deploy
  |
  v
[7. Upload Stripe App] ------> stripe apps upload
  |
  v
[8. Smoke Tests] ------------> fail? -> rollback Edge Functions
```

## GitHub Actions Example

```yaml
# .github/workflows/ci.yml
name: CI
on:
  pull_request:
    branches: [main, staging]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run test:coverage

  e2e:
    needs: check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm run test:e2e
        env:
          SUPABASE_URL: ${{ secrets.DEV_SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.DEV_SUPABASE_ANON_KEY }}
```

---

# Feature Flags

Use Supabase Edge Function environment variables for feature flags. No external service needed for small teams.

## Pattern

```typescript
// supabase/functions/_shared/flags.ts
export const flags = {
  batchExport: Deno.env.get('FF_ENABLE_BATCH_EXPORT') === 'true',
  metadataEditor: Deno.env.get('FF_ENABLE_METADATA_EDITOR') === 'true',
} as const

export type FeatureFlag = keyof typeof flags
```

## Usage in Edge Functions

```typescript
// supabase/functions/batch-export/index.ts
import { flags } from '../_shared/flags.ts'

Deno.serve(async (req) => {
  if (!flags.batchExport) {
    return new Response(
      JSON.stringify({ error: { code: 'NOT_FOUND', message: 'Not found' } }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    )
  }
  // ... feature logic
})
```

## Flag Lifecycle

1. **Add**: Set `FF_<NAME>=false` in all Supabase projects
2. **Enable dev**: Set `true` in Dev Supabase project
3. **Enable staging**: Set `true` in Staging Supabase project
4. **Enable production**: Set `true` in Production Supabase project
5. **Remove**: After stable in production, remove flag and dead code path

---

# Database Migration Coordination

Cross-reference: `db-migration` skill for migration planning.

## Deploy Order for Schema Changes

**Expand phase (safe to deploy):**
1. Deploy migration adding new columns/tables (backward-compatible)
2. Deploy Edge Functions that write to both old and new schema
3. Backfill data if needed

**Contract phase (after verification):**
1. Deploy Edge Functions that read only from new schema
2. Deploy migration removing old columns/tables
3. Verify no errors in production logs

**Rule:** Migrations run BEFORE Edge Function deploys. Configure this in CI:

```yaml
# In deployment pipeline
- name: Run migrations
  run: npx supabase db push --linked
  env:
    SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}

- name: Deploy Edge Functions
  run: npx supabase functions deploy
  env:
    SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
```

---

# Rollback Procedures

## Edge Function Rollback

Supabase Edge Functions can be redeployed from a previous git commit:

```bash
# Rollback to previous commit
git checkout <previous-commit> -- supabase/functions/
supabase functions deploy
```

## Stripe App Rollback

Stripe Apps versions are managed via `stripe apps upload`. To rollback:
- Upload a previous known-good version
- Stripe App versions are immutable once published — you upload a new version with the old code

## Rollback Decision Matrix

| Signal                        | Action                        |
|-------------------------------|-------------------------------|
| Smoke tests fail              | Immediate Edge Function rollback |
| Error rate > 1% (5 min)      | Immediate Edge Function rollback |
| Stripe App UI broken          | Upload previous app version   |
| Single user report            | Investigate, no auto-rollback |

Rollback does NOT revert database migrations. Plan migrations to be backward-compatible (expand/contract pattern).

## Smoke Tests

Run after every production deploy:

```typescript
// scripts/smoke-test.ts
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://xxx.supabase.co'

const checks = [
  { name: 'Health check', url: '/functions/v1/health', status: 200 },
  { name: 'Items endpoint (unauthed)', url: '/functions/v1/items', status: 401 },
]

for (const check of checks) {
  const res = await fetch(`${SUPABASE_URL}${check.url}`, { redirect: 'manual' })
  if (res.status !== check.status) {
    console.error(`FAIL: ${check.name} - expected ${check.status}, got ${res.status}`)
    process.exit(1)
  }
  console.log(`PASS: ${check.name}`)
}
```

---

# Health Check Endpoint

```typescript
// supabase/functions/health/index.ts
Deno.serve(async () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
    }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})
```

---

# Stripe App Deployment

## Local Development

```bash
# Start local dev server (previews in Stripe Dashboard)
stripe apps start

# Hot-reloads on file changes
# Press Enter to open browser (Chrome, Firefox, Edge — not Safari)
```

## Upload for Review

```bash
# Upload app for review
stripe apps upload

# Check upload status
stripe apps versions list
```

## Post-Upload Checklist

- [ ] All Edge Functions deployed to production Supabase
- [ ] Database migrations applied
- [ ] Feature flags set correctly in production
- [ ] Smoke tests pass
- [ ] Stripe App uploaded and passing review checks

---

# SDD Phase Integration

## Design Phase
- Include "Deployment Strategy" section in `openspec/changes/<change-name>/design.md`:
  - Feature flag requirements
  - Migration deploy order (coordinate with `db-migration` skill)
  - Rollback considerations
  - Stripe App upload timing relative to Edge Function deploys

## Tasks Phase
- Add deployment tasks in `openspec/changes/<change-name>/tasks.md`:
  - Environment variable setup per Supabase project
  - Feature flag creation
  - Smoke test additions
  - Migration coordination steps
  - Stripe App upload task

## Apply Phase
- Verify feature flag is disabled in production before merge
- Deploy Edge Functions before uploading Stripe App
- Run smoke tests after deploy
- Monitor error rate for 15 minutes post-deploy

## Archive Phase
- Document post-deploy verification results
- Clean up feature flags after stable rollout
- Update environment variable documentation if changed

---
