import { Box, Inline, Button } from '@stripe/ui-extension-sdk/ui';

const GUIDED_PROMPTS = [
  { label: "What's my MRR?", value: "What's my MRR?" },
  { label: "How's churn trending?", value: "How is my churn rate trending over the last 3 months?" },
  { label: 'Revenue by product', value: "What's my revenue breakdown by product?" },
  { label: 'Top customers', value: 'Who are my top 10 customers by revenue?' },
  { label: 'Growth rate', value: "What's my MRR growth rate?" },
];

interface WelcomePromptProps {
  onSelectPrompt: (prompt: string) => void;
  insights?: Array<{ id: string; content: string }>;
}

const WelcomePrompt = ({ onSelectPrompt, insights }: WelcomePromptProps) => {
  return (
    <Box css={{ padding: 'medium', stack: 'y', gap: 'medium' }}>
      <Box css={{ stack: 'y', gap: 'small' }}>
        <Inline css={{ font: 'heading' }}>Welcome to Javelin</Inline>
        <Inline css={{ color: 'secondary' }}>
          Ask me anything about your Stripe business. I can calculate metrics, analyze trends, and
          surface insights from your data.
        </Inline>
      </Box>

      {insights && insights.length > 0 && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Inline css={{ fontWeight: 'semibold' }}>Recent insights</Inline>
          {insights.map((insight) => (
            <Box
              key={insight.id}
              css={{ padding: 'small', backgroundColor: 'container', stack: 'y', gap: 'xsmall' }}
            >
              <Inline css={{ color: 'secondary' }}>{insight.content}</Inline>
            </Box>
          ))}
        </Box>
      )}

      <Box css={{ stack: 'y', gap: 'small' }}>
        <Inline css={{ fontWeight: 'semibold' }}>Try asking</Inline>
        <Box css={{ stack: 'x', gap: 'small', wrap: 'wrap' }}>
          {GUIDED_PROMPTS.map((prompt) => (
            <Button
              key={prompt.value}
              type="secondary"
              size="small"
              onPress={() => onSelectPrompt(prompt.value)}
            >
              {prompt.label}
            </Button>
          ))}
        </Box>
      </Box>

      <Box css={{ marginTop: 'small' }}>
        <Inline css={{ font: 'caption', color: 'secondary' }}>
          Javelin provides informational insights only, not financial or business advice. Always verify important decisions with your own analysis.
        </Inline>
      </Box>
    </Box>
  );
};

export default WelcomePrompt;
