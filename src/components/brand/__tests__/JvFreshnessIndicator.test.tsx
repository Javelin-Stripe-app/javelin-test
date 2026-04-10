import { describe, it, expect } from 'vitest';
import { render } from '@stripe/ui-extension-sdk/testing';
import { Badge } from '@stripe/ui-extension-sdk/ui';
import JvFreshnessIndicator from '../JvFreshnessIndicator';

describe('JvFreshnessIndicator', () => {
  it('renders live data badge with positive type', () => {
    const { wrapper } = render(<JvFreshnessIndicator type="live" />);

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('positive');
    expect(badge!.text).toContain('Live data');
  });

  it('renders cached badge with info type', () => {
    const { wrapper } = render(
      <JvFreshnessIndicator type="cached" syncedAt="2026-03-10T10:00:00Z" />,
    );

    const badge = wrapper.find(Badge);
    expect(badge).not.toBeNull();
    expect(badge!.props.type).toBe('info');
    expect(badge!.text).toContain('Data as of');
  });

  it('renders fallback label for cached without syncedAt', () => {
    const { wrapper } = render(<JvFreshnessIndicator type="cached" />);

    const badge = wrapper.find(Badge);
    expect(badge!.text).toContain('Data as of cache');
  });
});
