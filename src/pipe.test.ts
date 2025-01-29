import { describe, expect, it } from 'vitest';
import { pipe } from './pipe.js';

describe('pipe', () => {
  it('should pipe values', () => {
    expect(pipe(1, (_) => _ * 2)).toBe(2);
  });
});
