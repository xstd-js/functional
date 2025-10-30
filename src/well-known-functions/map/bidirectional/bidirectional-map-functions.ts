import { type MapFunction } from '../map-function.js';

export interface BidirectionalMapFunctions<GIn, GOut> {
  readonly inOut: MapFunction<GIn, GOut>;
  readonly outIn: MapFunction<GOut, GIn>;
}
