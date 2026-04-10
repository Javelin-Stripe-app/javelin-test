# Javelin Privacy Policy

**Last updated:** February 2026

## What Data We Collect

Javelin accesses your Stripe account data through the Stripe API to provide business intelligence insights. The following data types are cached:

- **Subscriptions** — Status, pricing, billing periods, customer associations
- **Invoices** — Amounts, status, line items, currency
- **Charges** — Amounts, status, currency
- **Customers** — Name, email (used only for context; anonymized before AI processing)
- **Products** — Name, active status
- **Prices** — Amount, currency, billing interval

All data is scoped to your Stripe account and stored in an isolated, encrypted database.

## How We Use Your Data

- **Metric Calculations** — MRR, churn rate, ARPU, LTV, and revenue breakdowns are computed server-side from cached data.
- **AI-Powered Insights** — Your data context is sent to a language model to generate answers and proactive insights. **Customer names and emails are anonymized before AI processing** and are never sent to the AI provider.
- **Conversation History** — Your chat messages and AI responses are stored to maintain conversation context.
- **Business Context** — Statements you make about your business (e.g., "We sell B2B SaaS") are stored to improve response relevance.

## Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| Cached Stripe objects | Purged after 60 days of inactivity |
| Sync job records | Purged after 30 days |
| Audit logs | Purged after 90 days |
| Conversations & messages | Retained until account deletion |
| Business context | Retained until account deletion |

## Data Deletion

- **Uninstall**: When you uninstall Javelin, all data associated with your Stripe account is permanently deleted across all tables.
- **Manual deletion**: You may request full data deletion at any time by contacting support.

## Data Security

- All data is encrypted at rest and in transit.
- Row-Level Security (RLS) ensures your data is never accessible by other accounts.
- OAuth tokens are stored in the Stripe Secret Store, not in our database.
- PII (customer names, emails) is anonymized before being sent to AI providers.
- Audit logs record only action types, request IDs, and timestamps — never PII.

## Third-Party Services

- **Supabase** — Database hosting and Edge Function execution
- **LLM Provider** — AI response generation (receives anonymized data only)
- **Stripe** — OAuth authentication and data source

## AI Disclaimer

Javelin provides informational insights only, not financial or business advice. Always verify important decisions with your own analysis.

## Contact

For privacy questions or data deletion requests, contact the Javelin team through the Stripe App Marketplace.
