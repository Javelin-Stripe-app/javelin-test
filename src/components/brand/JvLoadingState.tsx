import { Box, Spinner, Inline, Banner } from '@stripe/ui-extension-sdk/ui';
import { useState, useEffect } from 'react';

interface JvLoadingStateProps {
  /** Initial status message. Brand voice: specific about what is happening. */
  message?: string;
  /** Timestamp when loading started (enables progressive messaging after 5s) */
  startedAt?: number;
  /** Force the extended-wait banner visible (useful for testing) */
  showExtendedWait?: boolean;
}

const JvLoadingState = ({
  message = 'Analyzing your data...',
  startedAt,
  showExtendedWait = false,
}: JvLoadingStateProps): JSX.Element => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startedAt) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startedAt]);

  const isExtended = showExtendedWait || (startedAt !== undefined && elapsed >= 5);
  const statusText = isExtended ? 'Fetching fresh data from Stripe...' : message;

  return (
    <Box css={{ padding: 'medium', stack: 'y', gap: 'small' }}>
      <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
        <Spinner size="small" />
        <Inline css={{ color: 'secondary' }}>{statusText}</Inline>
      </Box>
      {isExtended && (
        <Banner
          type="default"
          description="Still working — fetching the latest data from Stripe to give you an accurate answer."
        />
      )}
    </Box>
  );
};

export default JvLoadingState;
