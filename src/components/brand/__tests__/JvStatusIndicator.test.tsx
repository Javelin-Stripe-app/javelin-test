import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Badge } from '@stripe/ui-extension-sdk/ui';
import JvStatusIndicator from '../JvStatusIndicator';

describe('JvStatusIndicator', () => {
  it('renders a badge with the correct type and label', () => {
    const { wrapper } = render(
      <JvStatusIndicator variant="positive" label="MRR up 12%" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('positive');
    expect(badge!.text).toContain('MRR up 12%');
  });

  it('renders negative variant', () => {
    const { wrapper } = render(
      <JvStatusIndicator variant="negative" label="Churn up 3%" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge!.props.type).toBe('negative');
  });

  it('renders warning variant', () => {
    const { wrapper } = render(
      <JvStatusIndicator variant="warning" label="Stale data" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge!.props.type).toBe('warning');
  });

  it('renders context text when provided', () => {
    const { wrapper } = render(
      <JvStatusIndicator variant="info" label="$5,200" context="vs. last month" />,
    );

    expect(wrapper.text).toContain('vs. last month');
  });

  it('does not render context when omitted', () => {
    const { wrapper } = render(
      <JvStatusIndicator variant="positive" label="Live data" />,
    );

    expect(wrapper.text).not.toContain('vs.');
  });
});
