import { SettingsView, Box, Inline } from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useEffect } from 'react';
import { initApiClient } from '../lib/api-client';
import { useAuthStatus } from '../hooks/useAuthStatus';
import type { AuthState } from '../hooks/useAuthStatus';
import {
  JvCard,
  JvSectionHeader,
  JvLoadingState,
  JvStatusIndicator,
  JvActionBar,
} from '../components/brand';
import type { StatusVariant } from '../components/brand';

function getStatusVariant(state: AuthState): StatusVariant {
  if (state === 'healthy') return 'positive';
  if (state === 'missing' || state === 'expired') return 'warning';
  if (state === 'unreachable') return 'negative';
  return 'info';
}

function getStatusLabel(state: AuthState, expiresAt: string | null): string {
  if (state === 'healthy' && expiresAt) {
    const minutesLeft = Math.round((new Date(expiresAt).getTime() - Date.now()) / 60000);
    return `Connected (expires in ${minutesLeft} min)`;
  }
  if (state === 'healthy') return 'Connected';
  if (state === 'missing' || state === 'expired') return 'Not connected';
  if (state === 'unreachable') return 'Backend unreachable';
  return 'Unable to check';
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
      <Box css={{ padding: 'medium', stack: 'y', gap: 'medium' }}>
        <JvCard>
          <JvSectionHeader title="Stripe access" />
          {isChecking ? (
            <JvLoadingState message="Checking connection..." />
          ) : (
            <JvStatusIndicator
              variant={getStatusVariant(authStatus.state)}
              label={statusLabel}
            />
          )}
          {showExplanation && (
            <Inline css={{ color: 'secondary' }}>
              OAuth connection is required. Please re-install the app to reconnect your Stripe
              account.
            </Inline>
          )}
        </JvCard>
        <JvActionBar
          primary={{ label: 'Check status', onPress: () => { void checkAuth(); }, disabled: isChecking }}
        />
      </Box>
    </SettingsView>
  );
};

export default AppSettingsView;
