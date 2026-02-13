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
  const syncingRef = useRef(false);

  const syncAll = useCallback(async (): Promise<boolean> => {
    // Prevent concurrent syncs
    if (syncingRef.current) return false;
    syncingRef.current = true;

    setSyncing(true);
    setError(null);
    setProgress({ completed: 0, total: OBJECT_TYPES.length, failed: [] });

    const failed: ObjectType[] = [];
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

    if (failed.length > 0 && succeeded === 0) {
      setError(`Sync failed: ${lastError}`);
      return false;
    }

    if (failed.length > 0) {
      setError(`Synced ${succeeded}/${OBJECT_TYPES.length} types. Failed: ${failed.join(', ')}`);
    }

    return succeeded > 0;
  }, []);

  return { syncAll, syncing, progress, error };
}
