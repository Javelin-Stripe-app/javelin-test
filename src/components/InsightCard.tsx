import { useState } from 'react';
import { Accordion, AccordionItem, Box, Inline } from '@stripe/ui-extension-sdk/ui';
import { apiClient } from '../lib/api-client';
import { JvActionBar } from './brand';

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
    <Accordion>
      <AccordionItem title="Insight">
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Inline css={{ color: 'secondary' }}>{content}</Inline>
          <JvActionBar
            primary={{
              label: feedback === 'positive' ? 'Helpful ✓' : 'Helpful?',
              onPress: () => handleFeedback('positive'),
              disabled: submitting || feedback !== null,
            }}
            secondary={{
              label: feedback === 'negative' ? 'Not helpful ✓' : 'Not helpful?',
              onPress: () => handleFeedback('negative'),
              disabled: submitting || feedback !== null,
            }}
          />
        </Box>
      </AccordionItem>
    </Accordion>
  );
};

export default InsightCard;
