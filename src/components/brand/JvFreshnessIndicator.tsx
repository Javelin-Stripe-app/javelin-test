import { Badge } from '@stripe/ui-extension-sdk/ui';

interface JvFreshnessIndicatorProps {
  type: 'live' | 'cached';
  syncedAt?: string;
}

const JvFreshnessIndicator = ({ type, syncedAt }: JvFreshnessIndicatorProps): JSX.Element => {
  if (type === 'live') {
    return <Badge type="positive">Live data</Badge>;
  }
  const label = syncedAt
    ? `Data as of ${new Date(syncedAt).toLocaleString()}`
    : 'Data as of cache';
  return <Badge type="info">{label}</Badge>;
};

export default JvFreshnessIndicator;
