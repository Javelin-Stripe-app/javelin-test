import {
  ContextView,
  Box,
  Spinner,
  Inline,
  Banner,
  Button,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useState, useEffect, useCallback } from 'react';
import { apiClient, initApiClient } from '../lib/api-client';

type OnboardingState = 'processing' | 'success' | 'error';

const OnboardingView = ({ userContext, oauthContext }: ExtensionContextValue) => {
  // Initialize API client with Stripe context for signature verification
  if (userContext?.id && userContext?.account?.id) {
    initApiClient(userContext.id, userContext.account.id);
  }
  const [state, setState] = useState<OnboardingState>('processing');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOAuth = useCallback(async () => {
    // Check for OAuth error
    if (oauthContext?.error) {
      setState('error');
      setErrorMessage(`Authorization failed: ${oauthContext.error}`);
      return;
    }

    // Check for OAuth code
    if (!oauthContext?.code) {
      setState('error');
      setErrorMessage('No authorization code received. Please try installing again.');
      return;
    }

    try {
      // Exchange code for tokens via Edge Function
      await apiClient('/auth-callback', {
        method: 'POST',
        body: {
          code: oauthContext.code,
          state: oauthContext.state || '',
          verifier: oauthContext.verifier || '',
        },
      });

      // Trigger initial data sync
      await apiClient('/sync-trigger', {
        method: 'POST',
        body: {},
      });

      setState('success');
    } catch {
      setState('error');
      setErrorMessage('Failed to complete setup. Please try again.');
    }
  }, [oauthContext]);

  useEffect(() => {
    handleOAuth();
  }, [handleOAuth]);

  return (
    <ContextView title="Welcome to Javelin">
      <Box css={{ padding: 'medium', stack: 'y', gap: 'medium', alignX: 'center' }}>
        {state === 'processing' && (
          <>
            <Spinner />
            <Inline>Setting up Javelin...</Inline>
            <Inline css={{ color: 'secondary' }}>
              Connecting to your Stripe account and syncing your data.
            </Inline>
          </>
        )}

        {state === 'success' && (
          <>
            <Banner
              type="default"
              title="Setup complete!"
              description="Javelin is ready. Your data is syncing in the background — you can start asking questions right away."
            />
            <Inline css={{ color: 'secondary' }}>
              Open the Javelin drawer from any page in your Stripe Dashboard to get started.
            </Inline>
          </>
        )}

        {state === 'error' && (
          <>
            <Banner type="critical" title="Setup failed" description={errorMessage} />
            <Button type="primary" onPress={handleOAuth}>
              Retry
            </Button>
          </>
        )}
      </Box>
    </ContextView>
  );
};

export default OnboardingView;
