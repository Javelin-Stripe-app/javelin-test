import {
  ContextView,
  Box,
  Spinner,
  Inline,
  Banner,
  Button,
  Icon,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useState, useEffect, useCallback } from 'react';
import { apiClient, initApiClient } from '../lib/api-client';
import { useStripeSync } from '../hooks/useStripeSync';

type OnboardingState = 'auth' | 'syncing' | 'success' | 'error';

const OBJECT_TYPE_LABELS: Record<string, string> = {
  customers: 'Customers',
  subscriptions: 'Subscriptions',
  invoices: 'Invoices',
  charges: 'Charges',
  products: 'Products',
  prices: 'Prices',
};

const OnboardingView = ({ userContext, oauthContext }: ExtensionContextValue) => {
  if (userContext?.id && userContext?.account?.id) {
    initApiClient(userContext.id, userContext.account.id);
  }

  const [state, setState] = useState<OnboardingState>('auth');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [authCallbackSucceeded, setAuthCallbackSucceeded] = useState(false);
  const { syncAll, syncing, progress, error: syncError } = useStripeSync();

  const handleSetup = useCallback(async () => {
    // Step 1: Try auth-callback if we have an OAuth code
    if (oauthContext?.code && !oauthContext?.error) {
      try {
        await apiClient('/auth-callback', {
          method: 'POST',
          body: {
            code: oauthContext.code,
            state: oauthContext.state || '',
            verifier: oauthContext.verifier || '',
          },
        });
        setAuthCallbackSucceeded(true);
      } catch {
        // Auth callback failed — continue with SDK sync anyway
        console.warn('auth-callback failed, proceeding with SDK-based sync');
      }
    }

    // Step 2: Always run SDK-based sync
    setState('syncing');
    try {
      await syncAll();

      // Step 3: If auth-callback succeeded, also trigger backend sync for completeness
      if (authCallbackSucceeded) {
        try {
          await apiClient('/sync-trigger', { method: 'POST', body: {} });
        } catch {
          // Non-critical — SDK sync already populated the cache
        }
      }

      setState('success');
    } catch {
      setState('error');
      setErrorMessage('Failed to sync your Stripe data. Please try again.');
    }
  }, [oauthContext, syncAll, authCallbackSucceeded]);

  useEffect(() => {
    handleSetup();
  }, [handleSetup]);

  // Update state if sync error occurs
  useEffect(() => {
    if (syncError) {
      setState('error');
      setErrorMessage(syncError);
    }
  }, [syncError]);

  return (
    <ContextView title="Welcome to Javelin">
      <Box css={{ padding: 'medium', stack: 'y', gap: 'medium', alignX: 'center' }}>
        {(state === 'auth' || (state === 'syncing' && syncing)) && (
          <>
            <Spinner />
            <Inline css={{ font: 'heading' }}>
              {state === 'auth' ? 'Connecting to Stripe...' : 'Syncing your data...'}
            </Inline>
            {state === 'syncing' && progress.current && (
              <Box css={{ stack: 'y', gap: 'small', width: 'fill' }}>
                <Inline css={{ color: 'secondary' }}>
                  Syncing {OBJECT_TYPE_LABELS[progress.current] || progress.current} ({progress.completed + 1}/{progress.total})
                </Inline>
                {Object.keys(OBJECT_TYPE_LABELS).map((type) => {
                  const idx = Object.keys(OBJECT_TYPE_LABELS).indexOf(type);
                  const isComplete = idx < progress.completed;
                  const isCurrent = type === progress.current;
                  return (
                    <Box key={type} css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
                      {isComplete && <Icon name="check" />}
                      {isCurrent && <Spinner size="small" />}
                      <Inline css={{ color: isComplete || isCurrent ? 'primary' : 'secondary' }}>
                        {OBJECT_TYPE_LABELS[type]}
                      </Inline>
                    </Box>
                  );
                })}
              </Box>
            )}
          </>
        )}

        {state === 'success' && (
          <>
            <Banner
              type="default"
              title="Setup complete!"
              description="Javelin is ready. Your data has been synced — you can start asking questions right away."
            />
            <Inline css={{ color: 'secondary' }}>
              Open the Javelin drawer from any page in your Stripe Dashboard to get started.
            </Inline>
          </>
        )}

        {state === 'error' && (
          <>
            <Banner type="critical" title="Setup failed" description={errorMessage} />
            <Button type="primary" onPress={handleSetup}>
              Retry
            </Button>
          </>
        )}
      </Box>
    </ContextView>
  );
};

export default OnboardingView;
