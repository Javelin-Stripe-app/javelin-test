/**
 * Unit tests for PII sanitization layer.
 * Tests: customer names, emails are anonymized before LLM; no PII leaks; restore works.
 */
import { describe, it, expect } from 'vitest';

// Import the pure functions — these have no Deno-specific dependencies
// We use a dynamic import trick to load from the Edge Functions path
// For vitest, we set up path aliases or copy the source.

// Since the PII sanitizer has no external imports, we can inline-import it:
const { sanitizeForLLM, restorePII } = await import(
  '../../supabase/functions/_shared/pii-sanitizer.ts'
);

describe('sanitizeForLLM', () => {
  it('replaces customer names with entity tokens', () => {
    const text = 'Customer John Smith has 3 subscriptions.';
    const piiValues = ['John Smith'];

    const result = sanitizeForLLM(text, piiValues);

    expect(result.sanitizedText).toBe('Customer [ENTITY_1] has 3 subscriptions.');
    expect(result.sanitizedText).not.toContain('John Smith');
    expect(result.tokenMap.get('[ENTITY_1]')).toBe('John Smith');
  });

  it('replaces customer emails with entity tokens', () => {
    const text = 'Email contact: john@example.com, revenue $500';
    const piiValues = ['john@example.com'];

    const result = sanitizeForLLM(text, piiValues);

    expect(result.sanitizedText).toBe('Email contact: [ENTITY_1], revenue $500');
    expect(result.sanitizedText).not.toContain('john@example.com');
  });

  it('replaces multiple PII values with sequential tokens', () => {
    const text = 'Alice pays $100/mo, Bob pays $200/mo, alice@test.com owes $50.';
    const piiValues = ['Alice', 'Bob', 'alice@test.com'];

    const result = sanitizeForLLM(text, piiValues);

    expect(result.sanitizedText).toBe(
      '[ENTITY_1] pays $100/mo, [ENTITY_2] pays $200/mo, [ENTITY_3] owes $50.',
    );
    expect(result.tokenMap.size).toBe(3);
  });

  it('replaces all occurrences of the same PII value', () => {
    const text = 'Alice subscribed. Alice upgraded. Alice cancelled.';
    const piiValues = ['Alice'];

    const result = sanitizeForLLM(text, piiValues);

    expect(result.sanitizedText).toBe(
      '[ENTITY_1] subscribed. [ENTITY_1] upgraded. [ENTITY_1] cancelled.',
    );
    // Should not contain any "Alice"
    expect(result.sanitizedText).not.toContain('Alice');
  });

  it('skips empty or very short PII values', () => {
    const text = 'Customer A has a subscription.';
    const piiValues = ['', 'A', null as unknown as string];

    const result = sanitizeForLLM(text, piiValues);

    // Single character "A" should be skipped (< 2 chars)
    expect(result.sanitizedText).toBe(text);
    expect(result.tokenMap.size).toBe(0);
  });

  it('handles empty PII list', () => {
    const text = 'Revenue is $10,000 MRR.';

    const result = sanitizeForLLM(text, []);

    expect(result.sanitizedText).toBe(text);
    expect(result.tokenMap.size).toBe(0);
  });

  it('preserves non-PII data (amounts, dates, metric values)', () => {
    const text = 'John Smith: MRR $5,000 since 2024-01-15, churn 3.2%, ARPU $125.50';
    const piiValues = ['John Smith'];

    const result = sanitizeForLLM(text, piiValues);

    expect(result.sanitizedText).toContain('$5,000');
    expect(result.sanitizedText).toContain('2024-01-15');
    expect(result.sanitizedText).toContain('3.2%');
    expect(result.sanitizedText).toContain('$125.50');
    expect(result.sanitizedText).not.toContain('John Smith');
  });
});

describe('restorePII', () => {
  it('restores entity tokens back to original PII values', () => {
    const tokenMap = new Map([
      ['[ENTITY_1]', 'John Smith'],
      ['[ENTITY_2]', 'john@example.com'],
    ]);
    const text = 'Your customer [ENTITY_1] ([ENTITY_2]) has high revenue.';

    const result = restorePII(text, tokenMap);

    expect(result).toBe('Your customer John Smith (john@example.com) has high revenue.');
  });

  it('restores multiple occurrences of the same token', () => {
    const tokenMap = new Map([['[ENTITY_1]', 'Alice']]);
    const text = '[ENTITY_1] has revenue. [ENTITY_1] also has churn.';

    const result = restorePII(text, tokenMap);

    expect(result).toBe('Alice has revenue. Alice also has churn.');
  });

  it('handles empty token map (no PII was sanitized)', () => {
    const tokenMap = new Map<string, string>();
    const text = 'Your MRR is $5,000.';

    const result = restorePII(text, tokenMap);

    expect(result).toBe(text);
  });

  it('round-trips: sanitize then restore returns original', () => {
    const original = 'Customer Jane Doe (jane@corp.com) has MRR of $3,000.';
    const piiValues = ['Jane Doe', 'jane@corp.com'];

    const sanitized = sanitizeForLLM(original, piiValues);
    const restored = restorePII(sanitized.sanitizedText, sanitized.tokenMap);

    expect(restored).toBe(original);
  });
});
