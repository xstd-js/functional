import { type BidirectionalMapFunctions } from '../bidirectional-map-functions.js';

export const DIV10_BIDIRECTIONAL_MAP_FUNCTIONS: BidirectionalMapFunctions<number, number> =
  Object.freeze({
    inOut: (input: number): number => input / 10,
    outIn: (input: number): number => input * 10,
  });
