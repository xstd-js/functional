import { None } from '@xstd/none';

export interface MapFilterFunction<GIn, GOut> {
  (value: GIn): GOut | None;
}
