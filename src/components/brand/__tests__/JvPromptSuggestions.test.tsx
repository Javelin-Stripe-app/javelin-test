import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button } from '@stripe/ui-extension-sdk/ui';
import JvPromptSuggestions from '../JvPromptSuggestions';

const SUGGESTIONS = [
  { label: "What's my MRR?", value: "What's my MRR?" },
  { label: 'Top customers', value: 'Who are my top 10 customers by revenue?' },
  { label: 'Churn rate', value: 'What is my churn rate this month?' },
];

describe('JvPromptSuggestions', () => {
  it('renders suggestion buttons', () => {
    const { wrapper } = render(
      <JvPromptSuggestions suggestions={SUGGESTIONS} onSelect={() => {}} />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBe(3);
    expect(wrapper.text).toContain("What's my MRR?");
    expect(wrapper.text).toContain('Top customers');
    expect(wrapper.text).toContain('Churn rate');
  });

  it('calls onSelect with the full value when a suggestion is pressed', () => {
    const onSelect = vi.fn();
    const { wrapper } = render(
      <JvPromptSuggestions suggestions={SUGGESTIONS} onSelect={onSelect} />,
    );

    wrapper.findAll(Button)[1].trigger('onPress');
    expect(onSelect).toHaveBeenCalledWith('Who are my top 10 customers by revenue?');
  });

  it('renders label section when provided', () => {
    const { wrapper } = render(
      <JvPromptSuggestions
        label="Try asking"
        suggestions={SUGGESTIONS}
        onSelect={() => {}}
      />,
    );

    expect(wrapper.text).toContain('Try asking');
  });

  it('does not render label section when omitted', () => {
    const { wrapper } = render(
      <JvPromptSuggestions suggestions={SUGGESTIONS} onSelect={() => {}} />,
    );

    expect(wrapper.text).not.toContain('Try asking');
  });

  it('renders empty list without error when suggestions is empty', () => {
    const { wrapper } = render(
      <JvPromptSuggestions suggestions={[]} onSelect={() => {}} />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBe(0);
  });
});
