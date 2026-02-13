import { useState, useCallback, useRef } from 'react';
import { apiClient } from '../lib/api-client';

export type AuthState = 'checking' | 'healthy' | 'missing' | 'expired' | 'error';

export interface AuthStatus {
  state: AuthState;
  expiresAt: string | null;
}

export function useAuthStatus() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>({
    state: 'checking',
    expiresAt: null,
  });
  const checkingRef = useRef(false);

  const checkAuth = useCallback(async (): Promise<AuthStatus> => {
    if (checkingRef.current) return authStatus;
    checkingRef.current = true;

    setAuthStatus({ state: 'checking', expiresAt: null });

    try {
      const response = await apiClient<{ expiresAt: string }>('/auth-refresh');
      const status: AuthStatus = {
        state: 'healthy',
        expiresAt: response.data?.expiresAt || null,
      };
      setAuthStatus(status);
      checkingRef.current = false;
      return status;
    } catch (err: unknown) {
      const errorObj = err as { error?: { code?: string } };
      const code = errorObj?.error?.code;

      let status: AuthStatus;
      if (code === 'token_not_found') {
        status = { state: 'missing', expiresAt: null };
      } else if (code === 'refresh_token_expired') {
        status = { state: 'expired', expiresAt: null };
      } else {
        status = { state: 'error', expiresAt: null };
      }

      setAuthStatus(status);
      checkingRef.current = false;
      return status;
    }
  }, [authStatus]);

  return { authStatus, checkAuth };
}
