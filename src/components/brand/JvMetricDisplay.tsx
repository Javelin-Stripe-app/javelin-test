import { Box, Inline, Badge } from '@stripe/ui-extension-sdk/ui';

export type TrendDirection = 'up' | 'down' | 'flat';

const TREND_BADGE_TYPE: Record<TrendDirection, 'positive' | 'negative' | 'info'> = {
  up: 'positive',
  down: 'negative',
  flat: 'info',
};

interface JvMetricDisplayProps {
  /**
   * Metric label. Use Stripe's terminology (MRR, churn rate, ARPU).
   * Brand voice: use the operator's language, not technical jargon.
   */
  label: string;
  /**
   * Formatted metric value. Pre-format with currency symbols, percentages, etc.
   * The component renders this as-is — it does not format numbers.
   */
  value: string;
  /** Optional trend direction. Renders a colored badge. */
  trend?: {
    direction: TrendDirection;
    /** Trend label, e.g., "+12%" or "-3.2%". Be specific. */
    label: string;
  };
  /** Optional freshness indicator */
  freshness?: {
    type: 'live' | 'cached';
    syncedAt?: string;
  };
  /** Size variant — 'default' for dashboard cards, 'compact' for inline/table contexts */
  size?: 'default' | 'compact';
}

const JvMetricDisplay = ({
  label,
  value,
  trend,
  freshness,
  size = 'default',
}: JvMetricDisplayProps): JSX.Element => {
  const valueWeight = size === 'compact' ? 'semibold' : 'bold';
  const gapSize = size === 'compact' ? 'xxsmall' : 'xsmall';

  return (
    <Box css={{ stack: 'y', gap: gapSize }}>
      <Inline css={{ font: 'caption', color: 'secondary' }}>{label}</Inline>
      <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
        <Inline css={{ fontWeight: valueWeight }}>{value}</Inline>
        {trend && (
          <Badge type={TREND_BADGE_TYPE[trend.direction]}>{trend.label}</Badge>
        )}
      </Box>
      {freshness && (
        <Badge type={freshness.type === 'live' ? 'positive' : 'info'}>
          {freshness.type === 'live'
            ? 'Live data'
            : `Data as of ${freshness.syncedAt ? new Date(freshness.syncedAt).toLocaleString() : 'cache'}`}
        </Badge>
      )}
    </Box>
  );
};

export default JvMetricDisplay;
