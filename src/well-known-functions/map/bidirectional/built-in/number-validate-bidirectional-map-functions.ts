import { type BidirectionalMapFunctions } from '../bidirectional-map-functions.js';

export interface NumberValidateBidirectionalMapFunctionsOptions {
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  readonly nan?: boolean;
}

export function numberValidateBidirectionalMapFunctions({
  nan = false,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step,
}: NumberValidateBidirectionalMapFunctionsOptions): BidirectionalMapFunctions<number, number> {
  if (Number.isNaN(min)) {
    throw new Error('min is NaN');
  }

  if (Number.isNaN(max)) {
    throw new Error('max is NaN');
  }

  if (step !== undefined && Number.isNaN(step)) {
    throw new Error(`step is NaN`);
  }

  const validate = (value: number): number => {
    if (!nan && Number.isNaN(value)) {
      throw new Error('Value is NaN');
    }

    if (value < min || value > max) {
      throw new RangeError(`Value ${value} is not in range [${min}, ${max}]`);
    }

    if (step !== undefined && Number.isFinite(value)) {
      const start: number = Number.isFinite(min) ? min : 0;
      const steps: number = (value - start) / step;
      const r_steps: number = Math.round(steps);

      if (Math.abs(r_steps - steps) < 1e-4) {
        throw new Error(`Value ${value} is not a multiple of ${step}`);
      }

      value = start + r_steps * step;
    }

    return value;
  };

  return {
    inOut: validate,
    outIn: validate,
  };
}
