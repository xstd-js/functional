import { DiscardToken } from './discard-token.js';

export interface MapFilterFunction<GIn, GOut> {
  (value: GIn): GOut | DiscardToken;
}
