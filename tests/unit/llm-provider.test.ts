/**
 * Unit tests for LLM provider abstraction.
 * Tests: OpenAI-compatible provider, request formatting, response parsing.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Stub Deno.env before import
vi.stubGlobal('Deno', {
  env: {
    get: vi.fn((key: string) => {
      const vals: Record<string, string> = {
        LLM_API_URL: 'https://api.test.com/v1',
        LLM_API_KEY: 'test-api-key',
        LLM_MODEL: 'test-model',
      };
      return vals[key];
    }),
  },
});

const { OpenAICompatibleProvider, createLLMProvider } = await import(
  '../../supabase/functions/_shared/llm-provider.ts'
);

describe('OpenAICompatibleProvider', () => {
  let originalFetch: typeof globalThis.fetch;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('sends correct request format to chat completions endpoint', async () => {
    const mockResponse = {
      choices: [{ message: { content: 'Your MRR is $5,000.' } }],
      usage: { prompt_tokens: 150, completion_tokens: 30 },
    };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const provider = new OpenAICompatibleProvider({
      apiUrl: 'https://api.test.com/v1',
      apiKey: 'test-key',
      model: 'test-model',
    });

    const result = await provider.chat([
      { role: 'system', content: 'You are a billing assistant.' },
      { role: 'user', content: "What's my MRR?" },
    ]);

    // Verify fetch was called with correct params
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = (globalThis.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(url).toBe('https://api.test.com/v1/chat/completions');
    expect(options.method).toBe('POST');
    expect(options.headers['Authorization']).toBe('Bearer test-key');

    const body = JSON.parse(options.body);
    expect(body.model).toBe('test-model');
    expect(body.messages.length).toBe(2);
    expect(body.temperature).toBe(0.3); // default

    // Verify response parsing
    expect(result.content).toBe('Your MRR is $5,000.');
    expect(result.usage.promptTokens).toBe(150);
    expect(result.usage.completionTokens).toBe(30);
  });

  it('respects custom options (maxTokens, temperature)', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          choices: [{ message: { content: 'Response' } }],
          usage: { prompt_tokens: 50, completion_tokens: 10 },
        }),
    });

    const provider = new OpenAICompatibleProvider({
      apiUrl: 'https://api.test.com/v1',
      apiKey: 'test-key',
      model: 'test-model',
    });

    await provider.chat(
      [{ role: 'user', content: 'Hello' }],
      { maxTokens: 500, temperature: 0.7 },
    );

    const body = JSON.parse(
      (globalThis.fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body,
    );
    expect(body.max_tokens).toBe(500);
    expect(body.temperature).toBe(0.7);
  });

  it('throws on API error response', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      text: () => Promise.resolve('Rate limit exceeded'),
    });

    const provider = new OpenAICompatibleProvider({
      apiUrl: 'https://api.test.com/v1',
      apiKey: 'test-key',
      model: 'test-model',
    });

    await expect(
      provider.chat([{ role: 'user', content: 'Hello' }], { retries: 0 }),
    ).rejects.toThrow('AI service is temporarily busy');
  });

  it('handles missing usage data gracefully', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          choices: [{ message: { content: 'Response' } }],
          // No usage field
        }),
    });

    const provider = new OpenAICompatibleProvider({
      apiUrl: 'https://api.test.com/v1',
      apiKey: 'test-key',
      model: 'test-model',
    });

    const result = await provider.chat([{ role: 'user', content: 'Hello' }]);

    expect(result.content).toBe('Response');
    expect(result.usage.promptTokens).toBe(0);
    expect(result.usage.completionTokens).toBe(0);
  });

  it('handles empty choices array', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          choices: [],
          usage: { prompt_tokens: 50, completion_tokens: 0 },
        }),
    });

    const provider = new OpenAICompatibleProvider({
      apiUrl: 'https://api.test.com/v1',
      apiKey: 'test-key',
      model: 'test-model',
    });

    const result = await provider.chat([{ role: 'user', content: 'Hello' }]);

    expect(result.content).toBe('');
  });
});

describe('createLLMProvider', () => {
  it('creates provider from environment variables', () => {
    const provider = createLLMProvider();

    expect(provider).toBeDefined();
    expect(typeof provider.chat).toBe('function');
  });

  it('throws when LLM_API_KEY is missing', () => {
    const originalGet = Deno.env.get;
    (Deno.env as { get: ReturnType<typeof vi.fn> }).get = vi.fn((key: string) => {
      if (key === 'LLM_API_KEY') return undefined;
      return originalGet(key);
    });

    expect(() => createLLMProvider()).toThrow('LLM_API_KEY environment variable is required');

    (Deno.env as { get: ReturnType<typeof vi.fn> }).get = originalGet;
  });
});
