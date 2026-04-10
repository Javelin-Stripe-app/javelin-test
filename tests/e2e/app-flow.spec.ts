import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Javelin Stripe App
 *
 * Stripe Apps run as iframes within the Stripe Dashboard.
 * Full E2E testing requires:
 * 1. `stripe apps start` running locally (serves the app)
 * 2. A Stripe test account with the app installed
 * 3. Navigating to the Stripe Dashboard and interacting with the app iframe
 *
 * For CI, these tests use a simplified approach:
 * - Test the Edge Function API endpoints directly (covered by integration tests)
 * - Test the React components in isolation (covered by unit tests)
 * - This file documents the manual E2E test plan for QA
 */

// Helper: base URL for Edge Functions
const BASE_URL =
  process.env.SUPABASE_FUNCTIONS_URL ||
  'https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1';

test.describe('Javelin App E2E Flow', () => {
  test.describe('Install & OAuth Flow', () => {
    test.skip('should complete OAuth authorization', async ({ page }) => {
      // Manual test: Install app -> Click "Connect Stripe" -> Complete OAuth -> Redirect to chat
    });

    test.skip('should handle OAuth errors gracefully', async ({ page }) => {
      // Manual test: Simulate OAuth error -> Show error Banner -> Allow retry
    });
  });

  test.describe('First Sync', () => {
    test.skip(
      'should trigger initial data sync after OAuth',
      async ({ page }) => {
        // Manual test: After OAuth -> Sync starts automatically -> Progress shown -> Completion
      }
    );
  });

  test.describe('Chat Flow', () => {
    test('should send a question and receive a response via API', async ({
      request,
    }) => {
      const signature = Buffer.from(
        JSON.stringify({
          account_id: 'acct_test_e2e',
          user_id: 'usr_test_e2e',
        })
      ).toString('base64');

      const response = await request.post(`${BASE_URL}/chat-message`, {
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': signature,
        },
        data: { content: 'What is my MRR?' },
      });

      // May get rate_limited (429) or success (200)
      expect([200, 429]).toContain(response.status());

      if (response.status() === 200) {
        const body = await response.json();
        expect(body.data).toHaveProperty('conversationId');
        expect(body.data).toHaveProperty('message');
        expect(body.data.message.role).toBe('assistant');
      }
    });

    test.skip('should display conversation history', async ({ page }) => {
      // Manual test: Open history -> See past conversations -> Click to load
    });
  });

  test.describe('Insights', () => {
    test.skip('should display welcome insights on idle', async ({ page }) => {
      // Manual test: Open app without recent chat -> See welcome insights
    });

    test.skip('should allow feedback on insights', async ({ page }) => {
      // Manual test: See insight -> Click thumbs up/down -> State updates
    });
  });

  // Cleanup
  test.afterAll(async ({ request }) => {
    const signature = Buffer.from(
      JSON.stringify({
        account_id: 'acct_test_e2e',
        user_id: 'usr_test_e2e',
      })
    ).toString('base64');

    await request.delete(`${BASE_URL}/account-data`, {
      headers: {
        'stripe-signature': signature,
      },
    });
  });
});
