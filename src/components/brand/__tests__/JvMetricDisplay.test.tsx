import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Badge } from '@stripe/ui-extension-sdk/ui';
import JvMetricDisplay from '../JvMetricDisplay';

describe('JvMetricDisplay', () => {
  it('renders label and value', () => {
    const { wrapper } = render(
      <JvMetricDisplay label="MRR" value="$5,200" />,
    );

    expect(wrapper.text).toContain('MRR');
    expect(wrapper.text).toContain('$5,200');
  });

  it('renders trend badge with positive type for up direction', () => {
    const { wrapper } = render(
      <JvMetricDisplay
        label="MRR"
        value="$5,200"
        trend={{ direction: 'up', label: '+12%' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('positive');
    expect(badge!.text).toContain('+12%');
  });

  it('renders trend badge with negative type for down direction', () => {
    const { wrapper } = render(
      <JvMetricDisplay
        label="Churn"
        value="3.2%"
        trend={{ direction: 'down', label: '-0.5%' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge!.props.type).toBe('negative');
  });

  it('renders trend badge with info type for flat direction', () => {
    const { wrapper } = render(
      <JvMetricDisplay
        label="ARPU"
        value="$85"
        trend={{ direction: 'flat', label: '0%' }}
      />,
    );

    const badge = wrapper.find(Badge);
    expect(badge!.props.type).toBe('info');
  });

  it('renders freshness badge for live data', () => {
    const { wrapper } = render(
      <JvMetricDisplay
        label="MRR"
        value="$5,200"
        freshness={{ type: 'live' }}
      />,
    );

    const badges = wrapper.findAll(Badge);
    const freshnessBadge = badges.find((b) => b.text.includes('Live data'));
    expect(freshnessBadge).not.toBeNull();
    expect(freshnessBadge!.props.type).toBe('positive');
  });

  it('does not render trend badge when trend is omitted', () => {
    const { wrapper } = render(
      <JvMetricDisplay label="MRR" value="$5,200" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).toBeNull();
  });
});
