// LLM Provider abstraction layer
// Enables swapping models without rewriting business logic

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMOptions {
  maxTokens?: number;
  temperature?: number;
  retries?: number;
}

export interface LLMResponse {
  content: string;
  usage: { promptTokens: number; completionTokens: number };
}

export interface LLMProvider {
  chat(messages: ChatMessage[], options?: LLMOptions): Promise<LLMResponse>;
}

export class LLMError extends Error {
  code: string;
  status: number;
  retryable: boolean;

  constructor(message: string, code: string, status: number, retryable: boolean) {
    super(message);
    this.code = code;
    this.status = status;
    this.retryable = retryable;
  }
}

// OpenAI-compatible provider (works with OpenAI, DeepSeek, Kimi, etc.)
export class OpenAICompatibleProvider implements LLMProvider {
  private apiUrl: string;
  private apiKey: string;
  private model: string;

  constructor(config: { apiUrl: string; apiKey: string; model: string }) {
    this.apiUrl = config.apiUrl;
    this.apiKey = config.apiKey;
    this.model = config.model;
  }

  async chat(messages: ChatMessage[], options?: LLMOptions): Promise<LLMResponse> {
    const maxRetries = options?.retries ?? 1;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      if (attempt > 0) {
        // Exponential backoff: 2s, 4s
        await new Promise((r) => setTimeout(r, 2000 * attempt));
      }

      const response = await fetch(`${this.apiUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          max_tokens: options?.maxTokens || 1000,
          temperature: options?.temperature || 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const choice = data.choices?.[0];

        return {
          content: choice?.message?.content || '',
          usage: {
            promptTokens: data.usage?.prompt_tokens || 0,
            completionTokens: data.usage?.completion_tokens || 0,
          },
        };
      }

      const isRetryable = response.status === 429 || response.status >= 500;

      if (!isRetryable || attempt === maxRetries) {
        const errText = await response.text();
        const code = response.status === 429 ? 'rate_limited' : 'llm_error';
        const msg = response.status === 429
          ? 'AI service is temporarily busy. Please try again in a moment.'
          : `AI service error (${response.status})`;
        console.error(`LLM API error (${response.status}):`, errText);
        throw new LLMError(msg, code, response.status, isRetryable);
      }

      lastError = new Error(`LLM API error (${response.status})`);
      console.warn(`LLM retry ${attempt + 1}/${maxRetries} after ${response.status}`);
    }

    throw lastError || new LLMError('LLM request failed', 'llm_error', 500, false);
  }
}

// Factory function — reads config from env
export function createLLMProvider(): LLMProvider {
  const apiUrl = Deno.env.get('LLM_API_URL') || 'https://api.openai.com/v1';
  const apiKey = Deno.env.get('LLM_API_KEY')!;
  const model = Deno.env.get('LLM_MODEL') || 'gpt-4o-mini';

  if (!apiKey) {
    throw new Error('LLM_API_KEY environment variable is required');
  }

  return new OpenAICompatibleProvider({ apiUrl, apiKey, model });
}
