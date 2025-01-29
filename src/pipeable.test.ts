import { describe, expect, it } from 'vitest';
import { Pipeable } from './pipeable.js';

describe('Pipeable', () => {
  it('should pipe values', () => {
    class PipeableTest extends Pipeable {
      constructor(public readonly value: number) {
        super();
      }
    }
    expect(new PipeableTest(1).pipe((_) => _.value * 2)).toBe(2);
  });
});
