import { describe, expect, it } from 'vitest';
import { DISCARD_TOKEN } from './discard-token.js';

describe('discard-token', () => {
  it('should be an unique symbol', () => {
    expect(typeof DISCARD_TOKEN).toBe('symbol');
  });
});
