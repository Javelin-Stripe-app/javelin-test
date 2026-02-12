import { Box, Spinner, Inline, Banner } from '@stripe/ui-extension-sdk/ui';
import { useState, useEffect } from 'react';

interface ThinkingIndicatorProps {
  startedAt: number;
}

const ThinkingIndicator = ({ startedAt }: ThinkingIndicatorProps) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startedAt]);

  const statusText =
    elapsed >= 5 ? 'Fetching fresh data from Stripe...' : 'Analyzing your data...';

  return (
    <Box css={{ padding: 'medium', stack: 'y', gap: 'small' }}>
      <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
        <Spinner size="small" />
        <Inline css={{ color: 'secondary' }}>{statusText}</Inline>
      </Box>
      {elapsed >= 5 && (
        <Banner
          type="default"
          description="Still working — fetching the latest data from Stripe to give you an accurate answer."
        />
      )}
    </Box>
  );
};

export default ThinkingIndicator;
