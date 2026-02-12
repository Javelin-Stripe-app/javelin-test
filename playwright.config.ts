import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  use: {
    baseURL:
      process.env.SUPABASE_FUNCTIONS_URL ||
      'https://tecvycpmzcxxoqmtttjy.supabase.co/functions/v1',
  },
  projects: [
    {
      name: 'api',
      testMatch: '**/*.spec.ts',
    },
  ],
});
