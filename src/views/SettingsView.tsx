import { SettingsView, Box, Inline, Button, Spinner, Banner } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useEffect } from 'react';
import { initApiClient } from '../lib/api-client';
import { useAuthStatus } from '../hooks/useAuthStatus';
import type { AuthState } from '../hooks/useAuthStatus';

function getStatusLabel(state: AuthState, expiresAt: string | null): string {
  if (state === 'checking') return 'Checking...';
  if (state === 'healthy' && expiresAt) {
    const minutesLeft = Math.round((new Date(expiresAt).getTime() - Date.now()) / 60000);
    return `Connected (expires in ${minutesLeft} min)`;
  }
  if (state === 'healthy') return 'Connected';
  if (state === 'missing' || state === 'expired') return 'Using app permissions';
  return 'Unable to check';
}

function getStatusType(state: AuthState): 'default' | 'caution' {
  if (state === 'healthy') return 'default';
  return 'caution';
}

const AppSettingsView = ({ userContext }: ExtensionContextValue) => {
  if (userContext?.id && userContext?.account?.id) {
    initApiClient(userContext.id, userContext.account.id);
  }

  const { authStatus, checkAuth } = useAuthStatus();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const isChecking = authStatus.state === 'checking';
  const statusLabel = getStatusLabel(authStatus.state, authStatus.expiresAt);
  const showExplanation = authStatus.state === 'missing' || authStatus.state === 'expired';

  return (
    <SettingsView>
      <Box css={{ padding: 'medium', stack: 'y', gap: 'large' }}>
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Inline css={{ font: 'heading', fontWeight: 'bold' }}>Stripe access</Inline>
          <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
            {isChecking ? (
              <Spinner size="small" />
            ) : (
              <Banner
                type={getStatusType(authStatus.state)}
                description={statusLabel}
              />
            )}
          </Box>
        </Box>

        {showExplanation && (
          <Box css={{ stack: 'y', gap: 'small' }}>
            <Inline css={{ color: 'secondary' }}>
              Full OAuth connection is established during app install. If not connected, Javelin
              uses built-in app permissions to sync your data.
            </Inline>
          </Box>
        )}

        <Box>
          <Button
            type="secondary"
            onPress={checkAuth}
            disabled={isChecking}
          >
            Check status
          </Button>
        </Box>
      </Box>
    </SettingsView>
  );
};

export default AppSettingsView;
