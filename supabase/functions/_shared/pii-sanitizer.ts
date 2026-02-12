// Sanitizes customer PII before sending data context to LLM
// Replaces names, emails with anonymized tokens
// Mapping exists only in request memory — never persisted

interface SanitizationResult {
  sanitizedText: string;
  tokenMap: Map<string, string>;
}

export function sanitizeForLLM(text: string, piiValues: string[]): SanitizationResult {
  const tokenMap = new Map<string, string>();
  let sanitized = text;
  let tokenCounter = 1;

  for (const pii of piiValues) {
    if (!pii || pii.length < 2) continue;
    const token = `[ENTITY_${tokenCounter}]`;
    tokenMap.set(token, pii);
    // Replace all occurrences
    sanitized = sanitized.split(pii).join(token);
    tokenCounter++;
  }

  return { sanitizedText: sanitized, tokenMap };
}

// Restore PII tokens in LLM response back to real values
export function restorePII(text: string, tokenMap: Map<string, string>): string {
  let restored = text;
  for (const [token, value] of tokenMap) {
    restored = restored.split(token).join(value);
  }
  return restored;
}
