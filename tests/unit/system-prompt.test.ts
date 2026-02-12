/**
 * Unit tests for LLM system prompt construction and response formatting.
 */
import { describe, it, expect } from 'vitest';

const { buildSystemPrompt, buildUserPrompt } = await import(
  '../../supabase/functions/_shared/system-prompt.ts'
);

describe('buildSystemPrompt', () => {
  it('includes Stripe metric definitions', () => {
    const prompt = buildSystemPrompt();

    expect(prompt).toContain('MRR (Monthly Recurring Revenue)');
    expect(prompt).toContain('Churn Rate');
    expect(prompt).toContain('ARPU (Average Revenue Per User)');
    expect(prompt).toContain('LTV (Customer Lifetime Value)');
    expect(prompt).toContain('Revenue Breakdown');
  });

  it('includes clarification bias instructions', () => {
    const prompt = buildSystemPrompt();

    expect(prompt).toContain('Clarification Bias');
    expect(prompt).toContain('ambiguous');
  });

  it('includes response formatting rules', () => {
    const prompt = buildSystemPrompt();

    expect(prompt).toContain('freshness indicator');
    expect(prompt).toContain('informational, not financial');
  });

  it('injects business context when provided', () => {
    const context = { industry: 'SaaS', plan: 'enterprise', user_statements: ['We sell B2B'] };
    const prompt = buildSystemPrompt(context);

    expect(prompt).toContain('Business Context');
    expect(prompt).toContain('SaaS');
    expect(prompt).toContain('We sell B2B');
  });

  it('omits business context section when empty', () => {
    const prompt = buildSystemPrompt({});

    expect(prompt).not.toContain('Business Context');
  });

  it('omits business context section when undefined', () => {
    const prompt = buildSystemPrompt();

    expect(prompt).not.toContain('Business Context');
  });
});

describe('buildUserPrompt', () => {
  it('includes the user message', () => {
    const prompt = buildUserPrompt("What's my MRR?");

    expect(prompt).toContain("What's my MRR?");
  });

  it('includes metrics context when provided', () => {
    const metrics = { subscriptions: { totalActive: 50, totalAll: 75 } };
    const prompt = buildUserPrompt("What's my MRR?", metrics);

    expect(prompt).toContain('Data Context');
    expect(prompt).toContain('totalActive');
    expect(prompt).toContain('50');
  });

  it('includes freshness metadata for cached data', () => {
    const freshness = { type: 'cached' as const, syncedAt: '2026-02-12T10:00:00Z' };
    const prompt = buildUserPrompt("What's my MRR?", {}, freshness);

    expect(prompt).toContain('cached');
    expect(prompt).toContain('2026-02-12T10:00:00Z');
  });

  it('includes freshness metadata for live data', () => {
    const freshness = { type: 'live' as const };
    const prompt = buildUserPrompt("What's my MRR?", {}, freshness);

    expect(prompt).toContain('live');
  });

  it('omits metrics section when empty', () => {
    const prompt = buildUserPrompt("What's my MRR?", {});

    expect(prompt).not.toContain('Data Context');
  });
});
