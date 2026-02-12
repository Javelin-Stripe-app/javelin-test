import { describe, it, expect, vi } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Banner, Button } from '@stripe/ui-extension-sdk/ui';
import ClarificationPrompt from '../ClarificationPrompt';

describe('ClarificationPrompt', () => {
  const options = [
    { label: 'Last 30 days', value: '30d' },
    { label: 'Last 90 days', value: '90d' },
    { label: 'All time', value: 'all' },
  ];

  it('renders clarification question in a Banner', () => {
    const { wrapper } = render(
      <ClarificationPrompt
        question="What time period are you interested in?"
        options={options}
        onSelect={() => {}}
      />,
    );

    const banner = wrapper.find(Banner);
    expect(banner).not.toBeNull();
    expect(banner!.props.title).toBe('Clarification needed');
    expect(banner!.props.description).toContain('What time period');
  });

  it('renders all option buttons', () => {
    const { wrapper } = render(
      <ClarificationPrompt
        question="What time period?"
        options={options}
        onSelect={() => {}}
      />,
    );

    const buttons = wrapper.findAll(Button);
    expect(buttons.length).toBe(3);
    expect(buttons[0].text).toContain('Last 30 days');
    expect(buttons[1].text).toContain('Last 90 days');
    expect(buttons[2].text).toContain('All time');
  });

  it('calls onSelect with the option value when clicked', () => {
    const onSelect = vi.fn();
    const { wrapper } = render(
      <ClarificationPrompt
        question="What time period?"
        options={options}
        onSelect={onSelect}
      />,
    );

    const buttons = wrapper.findAll(Button);
    buttons[1].trigger('onPress');

    expect(onSelect).toHaveBeenCalledWith('90d');
  });
});
