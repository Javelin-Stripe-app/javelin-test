import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Spinner, Banner } from '@stripe/ui-extension-sdk/ui';
import JvLoadingState from '../JvLoadingState';

describe('JvLoadingState', () => {
  it('renders spinner and default status message', () => {
    const { wrapper } = render(<JvLoadingState />);

    const spinner = wrapper.find(Spinner);
    expect(spinner).not.toBeNull();
    expect(wrapper.text).toContain('Analyzing your data...');
  });

  it('renders custom message when provided', () => {
    const { wrapper } = render(
      <JvLoadingState message="Fetching your top customers..." />,
    );

    expect(wrapper.text).toContain('Fetching your top customers...');
  });

  it('shows extended-wait banner when showExtendedWait is true', () => {
    const { wrapper } = render(<JvLoadingState showExtendedWait />);

    const banner = wrapper.find(Banner);
    expect(banner).not.toBeNull();
    expect(banner!.props.description).toContain('Still working');
  });

  it('does not show extended-wait banner by default', () => {
    const { wrapper } = render(<JvLoadingState />);

    const banner = wrapper.find(Banner);
    expect(banner).toBeNull();
  });

  it('shows extended message text when showExtendedWait is true', () => {
    const { wrapper } = render(<JvLoadingState showExtendedWait />);

    expect(wrapper.text).toContain('Fetching fresh data from Stripe...');
  });
});
