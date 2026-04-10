import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button } from '@stripe/ui-extension-sdk/ui';
import JvEmptyState from '../JvEmptyState';

describe('JvEmptyState', () => {
  it('renders the title', () => {
    const { wrapper } = render(<JvEmptyState title="No conversations yet" />);

    expect(wrapper.text).toContain('No conversations yet');
  });

  it('renders description when provided', () => {
    const { wrapper } = render(
      <JvEmptyState
        title="No conversations yet"
        description="Ask a question to get started."
      />,
    );

    expect(wrapper.text).toContain('Ask a question to get started.');
  });

  it('renders primary action button when provided', () => {
    const onPress = vi.fn();
    const { wrapper } = render(
      <JvEmptyState
        title="No conversations yet"
        action={{ label: 'Start a conversation', onPress }}
      />,
    );

    const button = wrapper.find(Button);
    expect(button).not.toBeNull();
    expect(wrapper.text).toContain('Start a conversation');
  });

  it('calls action handler when button is pressed', () => {
    const onPress = vi.fn();
    const { wrapper } = render(
      <JvEmptyState
        title="No data"
        action={{ label: 'Get started', onPress }}
      />,
    );

    wrapper.find(Button)!.trigger('onPress');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders suggestion buttons with correct labels', () => {
    const onSelect = vi.fn();
    const suggestions = [
      { label: "What's my MRR?", value: "What's my MRR?" },
      { label: 'Top customers', value: 'Who are my top 10 customers by revenue?' },
    ];

    const { wrapper } = render(
      <JvEmptyState
        title="No conversations yet"
        suggestions={suggestions}
        onSelectSuggestion={onSelect}
      />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBe(2);
    expect(wrapper.text).toContain("What's my MRR?");
    expect(wrapper.text).toContain('Top customers');
  });

  it('calls onSelectSuggestion with full value when suggestion is pressed', () => {
    const onSelect = vi.fn();
    const suggestions = [
      { label: 'Top customers', value: 'Who are my top 10 customers by revenue?' },
    ];

    const { wrapper } = render(
      <JvEmptyState
        title="No conversations yet"
        suggestions={suggestions}
        onSelectSuggestion={onSelect}
      />,
    );

    wrapper.find(Button)!.trigger('onPress');
    expect(onSelect).toHaveBeenCalledWith('Who are my top 10 customers by revenue?');
  });

  it('does not render suggestions when onSelectSuggestion is missing', () => {
    const { wrapper } = render(
      <JvEmptyState
        title="No conversations yet"
        suggestions={[{ label: "What's my MRR?", value: "What's my MRR?" }]}
      />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBe(0);
  });
});
