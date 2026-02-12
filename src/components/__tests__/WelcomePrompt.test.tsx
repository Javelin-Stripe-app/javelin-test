import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button } from '@stripe/ui-extension-sdk/ui';
import WelcomePrompt from '../WelcomePrompt';

describe('WelcomePrompt', () => {
  it('renders welcome heading and description', () => {
    const { wrapper } = render(
      <WelcomePrompt onSelectPrompt={() => {}} />,
    );

    expect(wrapper.text).toContain('Welcome to Javelin');
    expect(wrapper.text).toContain('Ask me anything');
  });

  it('renders guided prompt buttons', () => {
    const { wrapper } = render(
      <WelcomePrompt onSelectPrompt={() => {}} />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBeGreaterThanOrEqual(3);
    expect(wrapper.text).toContain("What's my MRR?");
    expect(wrapper.text).toContain("How's churn trending?");
  });

  it('calls onSelectPrompt when a prompt chip is tapped', () => {
    const onSelect = vi.fn();
    const { wrapper } = render(
      <WelcomePrompt onSelectPrompt={onSelect} />,
    );

    const buttons = wrapper.findAll(Button);
    // Trigger the first prompt button
    buttons[0].trigger('onPress');

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("What's my MRR?");
  });

  it('renders insights when provided', () => {
    const insights = [
      { id: 'insight-1', content: 'Churn up 15% this month' },
      { id: 'insight-2', content: 'MRR crossed $5k' },
    ];

    const { wrapper } = render(
      <WelcomePrompt onSelectPrompt={() => {}} insights={insights} />,
    );

    expect(wrapper.text).toContain('Recent insights');
    expect(wrapper.text).toContain('Churn up 15% this month');
    expect(wrapper.text).toContain('MRR crossed $5k');
  });

  it('hides insights section when no insights', () => {
    const { wrapper } = render(
      <WelcomePrompt onSelectPrompt={() => {}} insights={[]} />,
    );

    expect(wrapper.text).not.toContain('Recent insights');
  });
});
