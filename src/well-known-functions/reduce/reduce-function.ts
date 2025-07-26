export interface ReduceFunction<GIn, GOut> {
  (accumulator: GOut, value: GIn): GOut;
}
