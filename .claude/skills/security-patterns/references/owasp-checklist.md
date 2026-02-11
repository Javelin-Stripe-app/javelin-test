# OWASP Top 10 Checklist for Supabase + Stripe Apps

Detailed security checks tailored to this stack: **Supabase (Edge Functions), Stripe Apps, Stripe OAuth**.

Use this checklist when:
- Reviewing PRs (code-reviewer, security-auditor)
- Designing new features (security-engineer)
- Auditing existing code

---

## 1. Broken Access Control

**Risk:** Users access resources they shouldn't (other users' data, admin functions).

### Checks

- [ ] **RLS enabled** on all tables with user data
- [ ] **RLS policies tested** with multiple user accounts
- [ ] **User ID from session only** (`user.id`), NEVER from request body/query/headers
- [ ] **Authorization checks** on EVERY Edge Function endpoint
- [ ] **No client-side auth logic** — auth checks happen on server (Edge Functions)
- [ ] **Admin routes protected** — verify role from session, not request
- [ ] **Direct object references** validated (user can't access resources belonging to someone else)

### Edge Function Specific

```typescript
// BAD: User ID from request
Deno.serve(async (req) => {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId') // ATTACKER CONTROLS THIS
})

// GOOD: User ID from session
Deno.serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  )
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const userId = user.id // TRUSTED
})
```

### Supabase RLS Example

```sql
CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);
```

---

## 2. Cryptographic Failures

**Risk:** Sensitive data exposed due to weak crypto, missing encryption, or hardcoded secrets.

### Checks

- [ ] **HTTPS enforced** (Supabase does this by default)
- [ ] **No secrets in code** (API keys, passwords, tokens)
- [ ] **Secrets in environment variables** (`.env.local`, Supabase Dashboard)
- [ ] **`.env` files in `.gitignore`**
- [ ] **No secrets in logs** (no `console.log(Deno.env.toObject())`)
- [ ] **Supabase service role key NEVER exposed** to client
- [ ] **Sensitive data encrypted at rest** (Supabase encrypts by default)

### Verification

```bash
# Check staged files for secrets before commit
git diff --staged | grep -i 'password\|api_key\|secret\|token'

# Should return nothing
```

### Server-Side Secrets (Edge Functions)

```typescript
// All env vars in Edge Functions are server-side only
const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') // Bypasses RLS!
```

---

## 3. Injection

**Risk:** SQL injection, command injection, XSS, etc.

### SQL Injection

- [ ] **No raw SQL** with user input
- [ ] **Supabase client** for all queries (parameterized)
- [ ] **No string concatenation** in queries

```typescript
// GOOD: Parameterized query
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('email', userEmail)

// BAD: String concatenation
const query = `SELECT * FROM users WHERE email = '${userEmail}'` // VULNERABLE
```

### XSS (Cross-Site Scripting)

- [ ] **User-generated content sanitized** before rendering
- [ ] **React escapes by default** (don't use `dangerouslySetInnerHTML` without sanitization)

### Command Injection

- [ ] **No shell commands** with user input
- [ ] **If shell commands required**, use parameterized APIs (not `exec`)

---

## 4. Insecure Design

**Risk:** Missing threat modeling, insufficient security requirements.

### Checks

- [ ] **Threat model exists** for new features (STRIDE framework)
- [ ] **Security requirements** defined in design docs
- [ ] **Attack scenarios considered** (what could go wrong?)
- [ ] **Defense in depth** (multiple layers of security)

---

## 5. Security Misconfiguration

**Risk:** Default settings, unnecessary features, missing security headers.

### Checks

- [ ] **No default credentials** (Supabase generates secure defaults)
- [ ] **Security headers configured** on Edge Function responses
- [ ] **Error messages don't leak info** (no stack traces in production)
- [ ] **CORS configured** (not `*` in production)

### Edge Function Security Headers

```typescript
// Set security headers on responses
const headers = new Headers({
  'Content-Type': 'application/json',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
})

return new Response(JSON.stringify(data), { headers })
```

### Error Handling

```typescript
// BAD: Leaks internal details
catch (error) {
  return new Response(error.stack, { status: 500 })
}

// GOOD: Generic error
catch (error) {
  console.error('Internal error:', error) // Server logs only
  return new Response('Internal Server Error', { status: 500 })
}
```

---

## 6. Vulnerable and Outdated Components

**Risk:** Using dependencies with known vulnerabilities.

### Checks

- [ ] **`npm audit` passes** (no high/critical vulnerabilities)
- [ ] **Dependencies up to date** (especially security-critical ones)
- [ ] **Lockfile committed** (`package-lock.json` ensures reproducible builds)

### Critical Dependencies to Monitor

- `react`, `react-dom` (React 17 for Stripe App UI)
- `@supabase/supabase-js`
- `@stripe/ui-extension-sdk`
- `stripe` (Node SDK)
- `zod` (input validation)

---

## 7. Identification and Authentication Failures

**Risk:** Weak auth, session fixation, credential stuffing.

### Checks

- [ ] **Stripe OAuth used** for Stripe API access
- [ ] **Token expiration handled** (1hr access, 1yr refresh rolling)
- [ ] **Session verified on EVERY request** (don't cache session indefinitely)

### Stripe OAuth Security

- [ ] **OAuth permissions requested broadly** with clear purpose fields
- [ ] **Redirect URIs whitelisted** in `stripe-app.json` manifest (`allowed_redirect_uris`)
- [ ] **State parameter used** (CSRF protection)
- [ ] **Access tokens stored in Secret Store** (not .env or application storage)
- [ ] **Refresh token rotation** handled (1yr rolling expiry)

---

## 8. Software and Data Integrity Failures

**Risk:** Unsigned code, unverified webhooks, CI/CD compromise.

### Checks

- [ ] **Stripe webhook signatures verified**
- [ ] **CI/CD secrets secured** (use GitHub Secrets, not hardcoded)
- [ ] **Dependency integrity** (package-lock.json committed)

### Stripe Webhook Verification

```typescript
// supabase/functions/stripe-webhook/index.ts
import Stripe from 'stripe'

Deno.serve(async (req) => {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!)

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
    // Webhook is verified, safe to process
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return new Response('Webhook Error', { status: 400 })
  }
})
```

---

## 9. Security Logging and Monitoring Failures

**Risk:** Attacks go undetected, incidents can't be investigated.

### Checks

- [ ] **Audit logs** for sensitive actions (data mutations, role changes)
- [ ] **Log security events** (failed auth, unauthorized access attempts)
- [ ] **No sensitive data in logs** (passwords, tokens, PII)
- [ ] **Logs include** user ID, timestamp, action, request ID

---

## 10. Server-Side Request Forgery (SSRF)

**Risk:** Attacker tricks server into making requests to internal/external resources.

### Checks

- [ ] **User-provided URLs validated** (whitelist, not blacklist)
- [ ] **No arbitrary fetch** from user input
- [ ] **Internal IPs blocked** (127.0.0.1, 169.254.x.x, 10.x.x.x)
- [ ] **Timeout on external requests** (prevent resource exhaustion)

---

## Summary: Pre-Merge Security Gate

Before approving any PR, verify:

- [ ] **A1: Broken Access Control** — Auth checks present, RLS enabled
- [ ] **A2: Cryptographic Failures** — No secrets in code/logs
- [ ] **A3: Injection** — Input validated, parameterized queries
- [ ] **A4: Insecure Design** — Threat model exists
- [ ] **A5: Security Misconfiguration** — Security headers, no debug mode
- [ ] **A6: Vulnerable Components** — `npm audit` passes
- [ ] **A7: Auth Failures** — Session verified on every request
- [ ] **A8: Integrity Failures** — Webhook signatures verified
- [ ] **A9: Logging Failures** — Actions logged, no sensitive data
- [ ] **A10: SSRF** — URLs validated/whitelisted

If ANY check fails: **REQUEST_CHANGES**, create remediation ticket.

---

## Remediation Severity Levels

**SEV-1 (Critical):**
- Secrets in code/logs
- Missing auth checks
- RLS disabled on user data tables
- SQL injection vulnerabilities

**SEV-2 (High):**
- Missing input validation
- Unverified webhook signatures
- Missing rate limiting on auth endpoints
- PII in logs

**SEV-3 (Medium):**
- Missing security headers
- Outdated dependencies with known CVEs
- Missing audit logs

**SEV-1/2 block merge. SEV-3 can be deferred** (create ticket, don't block).
