import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Button } from '@stripe/ui-extension-sdk/ui';
import JvSectionHeader from '../JvSectionHeader';

describe('JvSectionHeader', () => {
  it('renders the title', () => {
    const { wrapper } = render(<JvSectionHeader title="Recent insights" />);

    expect(wrapper.text).toContain('Recent insights');
  });

  it('renders subtitle when provided', () => {
    const { wrapper } = render(
      <JvSectionHeader title="Your metrics" subtitle="Updated just now" />,
    );

    expect(wrapper.text).toContain('Your metrics');
    expect(wrapper.text).toContain('Updated just now');
  });

  it('does not render subtitle when omitted', () => {
    const { wrapper } = render(<JvSectionHeader title="Conversations" />);

    expect(wrapper.text).not.toContain('Updated');
  });

  it('renders action slot when provided', () => {
    const { wrapper } = render(
      <JvSectionHeader
        title="Conversations"
        action={<Button type="secondary" onPress={() => {}}>View all</Button>}
      />,
    );

    const button = wrapper.find(Button);
    expect(button).not.toBeNull();
    expect(wrapper.text).toContain('View all');
  });
});
