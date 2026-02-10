# Stripe Apps: Publishing Guide

> **DISAMBIGUATION:** This covers publishing to the **Stripe App Marketplace**.
> NOT deploying a payment integration — that's Stripe Payments.
> For manifest reference, see `core-concepts.md`. For CLI commands, see `cli-reference.md`.

---

## Pre-Submission Checklist

Before uploading, verify all of the following:

- [ ] `stripe-app.json` has correct `id`, `version`, `name`, and `icon`
- [ ] Distribution set: `stripe apps set distribution public`
- [ ] All permissions granted with clear purpose descriptions
- [ ] No localhost or dummy URLs in `allowed_redirect_uris`
- [ ] `sandbox_install_compatible` set to `true`
- [ ] App icon is 300x300px PNG, matches manifest `icon` path
- [ ] App tested in both sandbox and live modes
- [ ] App tested with different user roles
- [ ] No hardcoded API keys in source code
- [ ] CSP declarations cover all external API endpoints

---

## Naming Rules

| Rule | Detail |
|------|--------|
| Max length | 35 characters |
| Forbidden words | "Stripe", "app", "free", "paid" |
| Must match | Name in manifest must match name in listing |

---

## Manifest Preparation

```bash
# 1. Set distribution type
stripe apps set distribution public

# 2. Grant all required permissions
stripe apps grant permission "customer_read" "Read customer data for sync"
stripe apps grant permission "secret_write" "Store OAuth credentials"

# 3. Upload
stripe apps upload
```

**Critical checks:**
- Remove localhost URLs from `allowed_redirect_uris`
- Ensure logo path in manifest matches the actual file
- Set `sandbox_install_compatible: true`
- Include `ui_extension.views` only if your app has Dashboard UI

---

## Listing Fields

### Required fields

| Field | Limit | Details |
|-------|-------|---------|
| **Name** | 35 chars | Must match manifest name |
| **Icon** | 300x300px min, 1:1 ratio, <10MB | PNG/JPG, must match manifest icon |
| **Built by** | 80 chars | Individual or organization name |
| **Category** | Single selection | Stripe may adjust if needed |
| **Subtitle** | 80 chars | Concise value summary — avoid jargon |
| **About** | 1,000 chars | Company description + app description |
| **Works with** | Auto-populated | Specify Dashboard sections (Payments, Customers, etc.) |
| **Key Features** | Up to 3 | Must explain value, use cases, problem-solving |
| **Pricing** | Selection | Clarify free, trial, or paid model |
| **Support channels** | 1-2 | Include response time estimates |
| **Privacy policy** | URL | Must cover both company and app policies |

### Optional fields

| Field | Details |
|-------|---------|
| Terms of Service | URL |
| Company website | URL |
| FAQ page | URL |
| Technical documentation | URL |

---

## Image Specifications

### Key Feature Images

| Spec | Requirement |
|------|-------------|
| Width | Min 1,600px |
| Height | No maximum |
| File size | <10MB |
| Format | PNG or JPG |
| Content | Show app within Stripe Dashboard context |
| Tools | Use Figma UI Toolkit for mockups |
| Rules | No real customer data; no test screenshots |

### App Icon

| Spec | Requirement |
|------|-------------|
| Aspect ratio | Exactly 1:1 (square) |
| Size | Min 300x300px |
| Quality | High resolution |
| File size | <10MB |
| Must match | Manifest `icon` field |

---

## Test Credentials

You must provide test credentials to Stripe reviewers:

| Requirement | Detail |
|-------------|--------|
| Username + password | For each service the app connects to |
| Role | Highest access level (e.g., admin) |
| MFA | Disabled, or provide bypass instructions |
| Supporting data | CSV files or sample data if needed |
| Region-specific | Credentials for any geographic restrictions |
| Real accounts | **NEVER** use real, non-test accounts |

### Document these user scenarios:
1. Sign-in and authentication flow
2. Core feature usage (step-by-step)
3. Data export/integration processes
4. Installation instructions

---

## Review Process

### Timeline

**Expected turnaround: 4 business days**

### Submission steps

1. Update manifest (permissions, distribution, icons)
2. Prepare app (auth, OAuth, UI, integrations)
3. Write listing (all required fields)
4. Submit for review
5. Wait for decision

### Post-approval

1. Navigate to Apps page in Stripe Dashboard
2. Click "Review and publish" to preview listing
3. Optionally "Cancel and edit" for changes
4. Click "Publish" to go live
5. App analytics available within 24 hours

---

## Common Rejection Reasons

Review these carefully before submitting:

| Rejection Reason | How to Avoid |
|-----------------|--------------|
| Incomplete testing guidelines | Provide detailed step-by-step test instructions |
| Vague permission descriptions | Explain exactly why each permission is needed |
| Broken or localhost redirect URIs | Remove all development URLs |
| Poor image quality | Use high-res images showing app in Dashboard context |
| Branding violations | Don't use "Stripe" in app name |
| Unverified auth flows | Test complete OAuth/sign-in flows end-to-end |
| Missing post-install instructions | Document what users should do after installing |
| Invalid test credentials | Ensure credentials work and MFA is disabled |
| Hard-coded API keys | Use Secret Store or environment variables |
| Not tested across modes | Test in both sandbox and live modes |
| Not tested across roles | Test with different user role levels |
| OAuth apps using auth link | Use public link, not authentication link |
| No Dashboard UI in feature images | Show your app's interface in key feature screenshots |
| Checkout app routing to Stripe | Route to external payment page, not Stripe directly |

---

## Post-Publication

- Any Stripe user can discover and install your app
- Material changes require re-submission and re-review
- Monitor app analytics in the Dashboard
- Keep test credentials updated and valid
- Update app promptly when Stripe SDK versions change
