import { type UnaryFunction } from '../unary-function.js';

export interface BidirectionalUnaryFunctions<GIn, GOut> {
  readonly inOut: UnaryFunction<GIn, GOut>;
  readonly outIn: UnaryFunction<GOut, GIn>;
}
