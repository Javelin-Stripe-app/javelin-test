import { useState, useCallback, useRef } from 'react';
import stripe from '../lib/stripe-client';
import { apiClient } from '../lib/api-client';

const OBJECT_TYPES = [
  'customers',
  'subscriptions',
  'invoices',
  'charges',
  'products',
  'prices',
] as const;

type ObjectType = (typeof OBJECT_TYPES)[number];

export type SyncFailureReason = 'permission_denied' | 'network_error' | 'unknown';

function classifySyncError(err: unknown): SyncFailureReason {
  const msg = (err instanceof Error ? err.message : String(err)).toLowerCase();
  if (msg.includes('permission') || msg.includes('403') || msg.includes('forbidden')) {
    return 'permission_denied';
  }
  if (msg.includes('network') || msg.includes('fetch') || msg.includes('err_name_not_resolved') || msg.includes('failed to fetch')) {
    return 'network_error';
  }
  return 'unknown';
}

interface SyncProgress {
  completed: number;
  total: number;
  current?: ObjectType;
  failed: ObjectType[];
}

interface UseStripeSyncReturn {
  syncAll: () => Promise<boolean>;
  syncing: boolean;
  progress: SyncProgress;
  error: string | null;
  dominantFailureReason: SyncFailureReason | null;
}

async function fetchStripeObjects(objectType: ObjectType) {
  switch (objectType) {
    case 'customers':
      return stripe.customers.list({ limit: 100 });
    case 'subscriptions':
      return stripe.subscriptions.list({ limit: 100 });
    case 'invoices':
      return stripe.invoices.list({ limit: 100 });
    case 'charges':
      return stripe.charges.list({ limit: 100 });
    case 'products':
      return stripe.products.list({ limit: 100 });
    case 'prices':
      return stripe.prices.list({ limit: 100 });
  }
}

export function useStripeSync(): UseStripeSyncReturn {
  const [syncing, setSyncing] = useState(false);
  const [progress, setProgress] = useState<SyncProgress>({
    completed: 0,
    total: OBJECT_TYPES.length,
    failed: [],
  });
  const [error, setError] = useState<string | null>(null);
  const [dominantFailureReason, setDominantFailureReason] = useState<SyncFailureReason | null>(null);
  const syncingRef = useRef(false);

  const syncAll = useCallback(async (): Promise<boolean> => {
    // Prevent concurrent syncs
    if (syncingRef.current) return false;
    syncingRef.current = true;

    setSyncing(true);
    setError(null);
    setDominantFailureReason(null);
    setProgress({ completed: 0, total: OBJECT_TYPES.length, failed: [] });

    const failed: ObjectType[] = [];
    const failureReasons: Record<string, SyncFailureReason> = {};
    let lastError = '';

    for (const objectType of OBJECT_TYPES) {
      setProgress((prev) => ({ ...prev, current: objectType }));

      try {
        const response = await fetchStripeObjects(objectType);

        if (response.data.length > 0) {
          await apiClient('/sync-data', {
            method: 'POST',
            body: {
              objectType,
              records: response.data,
            },
          });
        }
      } catch (err) {
        // Log but continue with remaining types
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`Sync failed for ${objectType}:`, msg);
        lastError = msg;
        failed.push(objectType);
        failureReasons[objectType] = classifySyncError(err);
      }

      setProgress((prev) => ({
        ...prev,
        completed: prev.completed + 1,
        failed: [...failed],
      }));
    }

    syncingRef.current = false;
    setSyncing(false);

    const succeeded = OBJECT_TYPES.length - failed.length;

    // Compute dominant failure reason
    if (failed.length > 0) {
      const reasons = Object.values(failureReasons);
      const allSame = reasons.every((r) => r === reasons[0]);
      const dominant = allSame
        ? reasons[0]
        : reasons.includes('permission_denied')
          ? 'permission_denied'
          : 'unknown';
      setDominantFailureReason(dominant);

      if (succeeded === 0) {
        const errorMsg =
          dominant === 'permission_denied'
            ? 'Sync failed: App permissions were denied. Try re-uploading or re-installing the app.'
            : dominant === 'network_error'
              ? 'Sync failed: Network error while contacting Stripe.'
              : `Sync failed: ${lastError}`;
        setError(errorMsg);
        return false;
      }

      setError(`Synced ${succeeded}/${OBJECT_TYPES.length} types. Failed: ${failed.join(', ')}`);
    }

    return succeeded > 0;
  }, []);

  return { syncAll, syncing, progress, error, dominantFailureReason };
}
