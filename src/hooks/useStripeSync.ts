import { useState, useCallback } from 'react';
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
}

interface UseStripeSyncReturn {
  syncAll: () => Promise<void>;
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
  });
  const [error, setError] = useState<string | null>(null);

  const syncAll = useCallback(async () => {
    setSyncing(true);
    setError(null);
    setProgress({ completed: 0, total: OBJECT_TYPES.length });

    try {
      for (const objectType of OBJECT_TYPES) {
        setProgress((prev) => ({ ...prev, current: objectType }));

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

        setProgress((prev) => ({
          ...prev,
          completed: prev.completed + 1,
        }));
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sync failed';
      setError(message);
    } finally {
      setSyncing(false);
    }
  }, []);

  return { syncAll, syncing, progress, error };
}
