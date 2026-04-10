import { ContextView, Box, Inline } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useState, useEffect, useCallback, useRef } from 'react';
import { apiClient, initApiClient } from '../lib/api-client';
import {
  JvCard,
  JvSectionHeader,
  JvLoadingState,
  JvStatusIndicator,
  JvActionBar,
} from '../components/brand';

type OnboardingState = 'auth' | 'syncing' | 'success' | 'error';

const OnboardingView = ({ userContext, oauthContext }: ExtensionContextValue) => {
  if (userContext?.id && userContext?.account?.id) {
    initApiClient(userContext.id, userContext.account.id);
  }

  const [state, setState] = useState<OnboardingState>('auth');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const hasRun = useRef(false);

  const handleSetup = useCallback(async () => {
    // Prevent double-execution from React strict mode or dep changes
    if (hasRun.current) return;
    hasRun.current = true;

    // Step 1: Check for OAuth errors
    if (oauthContext?.error) {
      setState('error');
      setErrorMessage(
        `Authorization was denied or failed (${oauthContext.error}). Please uninstall and re-install the app to try again.`,
      );
      hasRun.current = false;
      return;
    }

    // Step 2: Exchange OAuth code if available (public distribution)
    // Private apps skip this — backend uses STRIPE_SECRET_KEY fallback
    if (oauthContext?.code) {
      try {
        await apiClient('/auth-callback', {
          method: 'POST',
          body: {
            code: oauthContext.code,
            state: oauthContext.state || '',
            verifier: oauthContext.verifier || '',
          },
        });
      } catch {
        setState('error');
        setErrorMessage(
          'Authorization failed. Please re-install the app to reconnect your Stripe account.',
        );
        hasRun.current = false;
        return;
      }
    }

    // Step 3: Trigger backend sync (server-side, paginated)
    setState('syncing');
    try {
      await apiClient('/sync-trigger', { method: 'POST' });
    } catch {
      // Non-critical — sync may complete asynchronously
    }

    setState('success');
  }, [oauthContext]);

  useEffect(() => {
    handleSetup();
  }, [handleSetup]);

  const handleRetry = useCallback(() => {
    hasRun.current = false;
    setErrorMessage('');
    setState('auth');
    handleSetup();
  }, [handleSetup]);

  return (
    <ContextView title="Welcome to Javelin">
      <Box css={{ padding: 'medium', stack: 'y', gap: 'medium' }}>
        {(state === 'auth' || state === 'syncing') && (
          <JvCard>
            <JvSectionHeader
              title={state === 'auth' ? 'Connecting to Stripe...' : 'Syncing your data...'}
            />
            <JvLoadingState
              message={state === 'auth' ? 'Establishing connection...' : 'Syncing your data...'}
            />
          </JvCard>
        )}

        {state === 'success' && (
          <JvCard>
            <JvStatusIndicator
              variant="positive"
              label="Setup complete!"
              context="Your data has been synced — you can start asking questions right away."
            />
            <Inline css={{ color: 'secondary' }}>
              Open the Javelin drawer from any page in your Stripe Dashboard to get started.
            </Inline>
          </JvCard>
        )}

        {state === 'error' && (
          <JvCard>
            <JvStatusIndicator
              variant="negative"
              label="Setup failed"
              context={errorMessage}
            />
            <JvActionBar primary={{ label: 'Retry', onPress: handleRetry }} />
          </JvCard>
        )}
      </Box>
    </ContextView>
  );
};

export default OnboardingView;
