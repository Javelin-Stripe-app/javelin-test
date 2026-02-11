---
name: security-patterns
description: Security knowledge for Supabase + Stripe Apps stack — auth patterns, OWASP checks, threat modeling, and secure implementation guidance.
---

# Security Patterns

Consolidated security knowledge for building secure features on Supabase (Edge Functions) + Stripe Apps + Stripe OAuth.

## Scope

**Use for:**
- Defining security patterns for new features
- Auditing implementations for vulnerabilities
- Reviewing code for security compliance
- Threat modeling API endpoints and data flows

**Not for:**
- Infrastructure security (hosting, network, DNS)
- Third-party service security (that's their job)

---

# Authentication & Authorization

## Stripe App UI Authentication

Stripe App UI extensions run inside the Stripe Dashboard. The signed-in Dashboard user is **automatically authenticated** by the Stripe Apps platform. No additional auth logic is needed in extension UI code — the user context is provided via `ExtensionContextValue`.

## Stripe OAuth Flow

This project uses **Stripe OAuth 2.0** for API access (`stripe_api_access_type: "oauth"`, `distribution_type: "public"`).

- Access tokens expire after **1 hour**
- Refresh tokens expire after **1 year** (rolling — renewed on each exchange)
- Tokens are stored via the **Stripe Secret Store API** — never in `.env` or application storage
- Redirect URIs must be whitelisted in `stripe-app.json` (`allowed_redirect_uris`)

## Supabase Edge Functions Auth Pattern

For backend operations, use Supabase Edge Functions with token-based authentication.

```typescript
// supabase/functions/some-function/index.ts
import { createClient } from '@supabase/supabase-js'

Deno.serve(async (req) => {
  const authHeader = req.headers.get('Authorization')

  if (!authHeader) {
    return new Response('Unauthorized', { status: 401 })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  )

  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user || error) {
    return new Response('Unauthorized', { status: 401 })
  }

  // User ID from session, NEVER from request
  const userId = user.id

  // ... proceed with authenticated logic
})
```

## Authorization Rules

**NEVER bypass Supabase RLS (Row Level Security).**

- User ID comes from verified session/token, NEVER from request body/query/headers
- RLS policies enforce data access control at the database level
- Every table with user data MUST have RLS enabled
- Client code CANNOT bypass RLS (it's enforced server-side by Postgres)

### Stripe OAuth Permissions

- **Request permissions broadly by category** with clear `purpose` fields in the manifest. Downgrading is frictionless (app-controlled), but upgrading requires explicit user re-approval.
- Do not add Stripe API permissions without spec reference and explicit justification.

---

# Input Validation

## Server-Side Validation (Required)

**NEVER trust client input.** Validate everything on the server.

### Pattern: Zod Schemas

```typescript
import { z } from 'zod'

const UserCreateSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  role: z.enum(['user', 'admin']),
})

Deno.serve(async (req) => {
  const body = await req.json()

  const result = UserCreateSchema.safeParse(body)

  if (!result.success) {
    return new Response(
      JSON.stringify({ error: 'Invalid input', details: result.error.issues }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const validatedData = result.data
  // ... proceed with validated data
})
```

### Validation Checklist

- [ ] **Length limits** on all string inputs (prevent DoS)
- [ ] **Type validation** (string, number, boolean, enum)
- [ ] **Format validation** (email, URL, UUID)
- [ ] **Range validation** for numbers
- [ ] **Enum whitelisting** for fixed sets of values
- [ ] **Sanitization** of HTML/Markdown if displayed

### SQL Injection Prevention

Use **Supabase client** or **parameterized queries** only. NEVER build SQL strings from user input.

```typescript
// GOOD: Parameterized query
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)

// BAD: String concatenation (DO NOT DO THIS)
const query = `SELECT * FROM users WHERE id = '${userId}'`
```

---

# Secrets Management

## What Goes Where

### Environment Variables

**Local development only (`.env.local`).** Never commit these files.

```bash
# .env.local (local dev) / Supabase Dashboard (production)
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Server-Side Only

All environment variables in Supabase Edge Functions are server-side only. There is no client-side exposure risk as there is no standalone web app.

- `SUPABASE_URL` — Used by Edge Functions
- `SUPABASE_ANON_KEY` — Used by Edge Functions (respects RLS)
- `SUPABASE_SERVICE_ROLE_KEY` — NEVER expose; bypasses RLS!
- `STRIPE_SECRET_KEY` — Server-only
- `STRIPE_WEBHOOK_SECRET` — Server-only

### Stripe Secret Store API

For credentials that persist per Stripe account (OAuth tokens, external API keys), use the **Stripe Secret Store API**:

```typescript
// Store a secret
await stripe.apps.secrets.create({
  scope: { type: 'account' },
  name: 'OAUTH_ACCESS_TOKEN',
  payload: accessToken,
})

// Retrieve a secret
const secret = await stripe.apps.secrets.find({
  scope: { type: 'account' },
  name: 'OAUTH_ACCESS_TOKEN',
  expand: ['payload'],
})
```

### .gitignore

Verify these are ignored:

```
.env
.env.*
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### Secret Stores (Production)

For production, use:
- Supabase Dashboard Environment Variables (encrypted, for Edge Functions)
- Stripe Secret Store API (for per-account third-party credentials)

NEVER hardcode secrets in code, even for "temporary" testing.

---

# Threat Modeling

Use this framework when designing new features.

## STRIDE Framework

For each new endpoint or data flow, ask:

**S — Spoofing:** Can someone impersonate another user?
- Mitigation: Verify session, never trust client-provided user IDs

**T — Tampering:** Can data be modified in transit or at rest?
- Mitigation: HTTPS (enforced), database constraints, audit logs

**R — Repudiation:** Can a user deny performing an action?
- Mitigation: Audit logs with user ID + timestamp

**I — Information Disclosure:** Can unauthorized users access data?
- Mitigation: RLS policies, auth checks, no sensitive data in logs

**D — Denial of Service:** Can the endpoint be overwhelmed?
- Mitigation: Rate limiting, input size limits, pagination

**E — Elevation of Privilege:** Can a user gain unauthorized permissions?
- Mitigation: RLS policies, role checks, server-side validation

## Threat Modeling Checklist

For each new feature:

- [ ] Identify all endpoints and data flows
- [ ] Apply STRIDE to each endpoint
- [ ] Document required auth/authz checks
- [ ] Define input validation requirements
- [ ] Identify sensitive data (PII, PHI, credentials)
- [ ] Specify logging requirements (what to log, what NOT to log)
- [ ] Consider rate limiting needs
- [ ] Review for OWASP Top 10 vulnerabilities (see `references/owasp-checklist.md`)

---

# Supabase Row Level Security (RLS)

## Non-Negotiable Rule

**Every table with user data MUST have RLS enabled.**

## RLS Pattern: User-Owned Data

```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);
```

## RLS Pattern: Shared Data

```sql
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM project_members
      WHERE project_members.project_id = projects.id
      AND project_members.user_id = auth.uid()
    )
  );
```

## Bypassing RLS (Service Role)

**Only use `SUPABASE_SERVICE_ROLE_KEY` on the server** for admin operations.

```typescript
// Server-side only (Edge Functions)!
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, // Bypasses RLS!
)

// Use sparingly, only for admin/system operations
const { data, error } = await supabaseAdmin
  .from('users')
  .select('*')
```

NEVER expose service role key to client.

---

# Logging & Monitoring

## What to Log

- Request ID
- User ID (from session)
- Timestamp
- Action/event type
- Non-sensitive error codes
- Performance metrics (latency, size)

## What NOT to Log

- Passwords (plaintext or hashed)
- API keys / tokens
- PII/PHI payloads (names, emails, addresses, health data)
- Full request/response bodies (may contain secrets)

## Safe Logging Pattern

```typescript
// GOOD: Log metadata only
console.log({
  requestId: generateId(),
  userId: user.id,
  action: 'user.update',
  timestamp: new Date().toISOString(),
  success: true,
})

// BAD: Log sensitive data
console.log({
  user: { email: 'user@example.com', password: 'abc123' }, // DO NOT DO THIS
})
```

---

# Stripe Security

## Webhook Signature Verification

**ALWAYS verify webhook signatures.** Unsigned webhooks can be forged.

```typescript
// supabase/functions/stripe-webhook/index.ts
import Stripe from 'stripe'

Deno.serve(async (req) => {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!)

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return new Response('Webhook Error', { status: 400 })
  }

  // ... process verified event
})
```

---

# Rate Limiting

## Pattern: Supabase Edge Function Rate Limiting

```typescript
// supabase/functions/_shared/rate-limit.ts
import { createClient } from '@supabase/supabase-js'

export async function checkRateLimit(req: Request, limit = 10, windowSec = 10) {
  const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1'

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  const windowStart = new Date(Date.now() - windowSec * 1000).toISOString()
  const { count } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .gte('created_at', windowStart)

  if ((count ?? 0) >= limit) {
    return new Response('Too Many Requests', { status: 429 })
  }

  await supabase.from('rate_limits').insert({ ip })
  return null // proceed
}
```

## When to Rate Limit

- All public API endpoints
- Auth-related endpoints (prevent brute force)
- High-cost operations (reports, bulk queries)

---

# OWASP Top 10 Quick Reference

For detailed checks, see `references/owasp-checklist.md`.

1. **Broken Access Control** -> RLS policies, auth checks
2. **Cryptographic Failures** -> HTTPS, env vars, no hardcoded secrets
3. **Injection** -> Parameterized queries, input validation
4. **Insecure Design** -> Threat modeling (STRIDE)
5. **Security Misconfiguration** -> No default passwords, secure headers
6. **Vulnerable Components** -> Dependency scanning (npm audit)
7. **Identification/Authentication Failures** -> Stripe OAuth, session checks
8. **Software/Data Integrity Failures** -> Webhook signature verification
9. **Security Logging Failures** -> Log actions, not sensitive data
10. **SSRF** -> Validate/whitelist external URLs

---

# Security Checklist (New Features)

Before marking a feature "done":

- [ ] All endpoints require authentication (unless explicitly public)
- [ ] User ID extracted from session, NEVER from request
- [ ] RLS policies defined and tested
- [ ] Input validation on all server endpoints (Zod schemas)
- [ ] No secrets in code, logs, or diffs
- [ ] Stripe webhook signatures verified
- [ ] Rate limiting applied to public/high-cost endpoints
- [ ] Sensitive data NOT logged (PII, PHI, passwords, tokens)
- [ ] OWASP Top 10 reviewed (see `references/owasp-checklist.md`)
- [ ] Threat model documented (STRIDE)

---

# SDD Phase Integration

Security concerns must be addressed at every phase of the OpenSpec pipeline:

## Specs Phase
- Add security acceptance scenarios to `openspec/changes/<change-name>/specs/<capability>/spec.md`
- Every capability spec MUST include authentication, authorization, and input validation acceptance criteria
- Identify sensitive data fields (PII/PHI) and document required handling in the spec

## Design Phase
- Document the STRIDE threat model in `openspec/changes/<change-name>/design.md`
- Include a "Security Design" section covering: auth flow, data encryption, RLS policies, rate limiting
- Document all third-party integrations and their security implications

## Tasks Phase
- Add security verification tasks to `openspec/changes/<change-name>/tasks.md`
- Each task touching auth, data access, or external APIs must include security acceptance checks
- Include tasks for: RLS policy creation/testing, input validation implementation, audit logging setup

## Apply Phase
- Run the Security Checklist (above) before marking any task as complete
- Verify all RLS policies are tested with both authorized and unauthorized access
- Confirm no secrets appear in code, logs, or diffs
- Validate OWASP Top 10 coverage for all new endpoints

---

# When to Escalate

If you encounter:
- Security requirement conflicting with spec -> Flag the conflict in `openspec/changes/<change-name>/proposal.md` or `design.md`
- Vulnerability in existing code -> Create remediation task in `openspec/changes/<change-name>/tasks.md`
- Dependency with known CVE -> Update dependency, document rationale in `openspec/changes/<change-name>/design.md`

---

# References

- `references/owasp-checklist.md` — Detailed OWASP Top 10 checks for Supabase + Stripe Apps
