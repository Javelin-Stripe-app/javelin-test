import { Box, Inline, Divider } from '@stripe/ui-extension-sdk/ui';
import { JvSectionHeader, JvCard, JvPromptSuggestions } from '../components/brand';

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
      <JvSectionHeader
        title="Welcome to Javelin"
        subtitle="Ask me anything about your Stripe business. I can calculate metrics, analyze trends, and surface insights from your data."
      />

      {insights && insights.length > 0 && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Inline css={{ fontWeight: 'semibold' }}>Recent insights</Inline>
          {insights.map((insight) => (
            <JvCard key={insight.id} padding="small">
              <Inline css={{ color: 'secondary' }}>{insight.content}</Inline>
            </JvCard>
          ))}
        </Box>
      )}

      <Divider />

      <JvPromptSuggestions
        label="Try asking"
        suggestions={GUIDED_PROMPTS}
        onSelect={onSelectPrompt}
      />

      <Inline css={{ font: 'caption', color: 'secondary' }}>
        Javelin provides informational insights only, not financial or business advice. Always verify important decisions with your own analysis.
      </Inline>
    </Box>
  );
};

export default WelcomePrompt;
