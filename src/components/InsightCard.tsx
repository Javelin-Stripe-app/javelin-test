import { Box, Banner, Button, Inline } from '@stripe/ui-extension-sdk/ui';
import { useState } from 'react';
import { apiClient } from '../lib/api-client';

interface InsightCardProps {
  insightId: string;
  messageId: string;
  content: string;
}

const InsightCard = ({ insightId, messageId, content }: InsightCardProps) => {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFeedback = async (rating: 'positive' | 'negative') => {
    if (submitting || feedback) return;
    setSubmitting(true);
    try {
      await apiClient('/insights-feedback', {
        method: 'POST',
        body: { insightId, messageId, rating },
      });
      setFeedback(rating);
    } catch {
      // Silently fail — feedback is non-critical
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box css={{ padding: 'small', stack: 'y', gap: 'small' }}>
      <Banner type="default" title="Insight" description={content} />
      <Box css={{ stack: 'x', gap: 'small' }}>
        <Button
          type={feedback === 'positive' ? 'primary' : 'secondary'}
          size="small"
          disabled={submitting || feedback !== null}
          onPress={() => handleFeedback('positive')}
        >
          <Inline>{feedback === 'positive' ? 'Helpful' : 'Helpful?'}</Inline>
        </Button>
        <Button
          type={feedback === 'negative' ? 'primary' : 'secondary'}
          size="small"
          disabled={submitting || feedback !== null}
          onPress={() => handleFeedback('negative')}
        >
          <Inline>{feedback === 'negative' ? 'Not helpful' : 'Not helpful?'}</Inline>
        </Button>
      </Box>
    </Box>
  );
};

export default InsightCard;
