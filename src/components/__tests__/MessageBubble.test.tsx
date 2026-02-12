import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Badge } from '@stripe/ui-extension-sdk/ui';
import MessageBubble from '../MessageBubble';

describe('MessageBubble', () => {
  it('renders user message with "You" label', () => {
    const { wrapper } = render(
      <MessageBubble role="user" content="What is my MRR?" />,
    );

    expect(wrapper.text).toContain('You');
    expect(wrapper.text).toContain('What is my MRR?');
  });

  it('renders assistant message with "Javelin" label', () => {
    const { wrapper } = render(
      <MessageBubble role="assistant" content="Your MRR is $5,000." />,
    );

    expect(wrapper.text).toContain('Javelin');
    expect(wrapper.text).toContain('Your MRR is $5,000.');
  });

  it('shows freshness badge for cached data on assistant messages', () => {
    const { wrapper } = render(
      <MessageBubble
        role="assistant"
        content="Your MRR is $5,000."
        freshness={{ type: 'cached', syncedAt: '2026-02-12T10:00:00Z' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('info');
    expect(badge!.text).toContain('Data as of');
  });

  it('shows live data badge for live freshness', () => {
    const { wrapper } = render(
      <MessageBubble
        role="assistant"
        content="Your MRR is $5,000."
        freshness={{ type: 'live' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('positive');
    expect(badge!.text).toContain('Live data');
  });

  it('does not show freshness badge on user messages', () => {
    const { wrapper } = render(
      <MessageBubble
        role="user"
        content="Test"
        freshness={{ type: 'live' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).toBeNull();
  });

  it('does not show freshness badge when not provided', () => {
    const { wrapper } = render(
      <MessageBubble role="assistant" content="Test" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).toBeNull();
  });
});
