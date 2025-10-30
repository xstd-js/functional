import { type BidirectionalUnaryFunctions } from './bidirectional-unary-functions.js';

export function chainBidirectionalUnaryFunctions<A, B>(
  a: BidirectionalUnaryFunctions<A, B>,
): BidirectionalUnaryFunctions<A, B>;
export function chainBidirectionalUnaryFunctions<A, B, C>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
): BidirectionalUnaryFunctions<A, C>;
export function chainBidirectionalUnaryFunctions<A, B, C, D>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
): BidirectionalUnaryFunctions<A, D>;
export function chainBidirectionalUnaryFunctions<A, B, C, D, E>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
  d: BidirectionalUnaryFunctions<D, E>,
): BidirectionalUnaryFunctions<A, E>;
export function chainBidirectionalUnaryFunctions<A, B, C, D, E, F>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
  d: BidirectionalUnaryFunctions<D, E>,
  e: BidirectionalUnaryFunctions<E, F>,
): BidirectionalUnaryFunctions<A, F>;
export function chainBidirectionalUnaryFunctions<A, B, C, D, E, F, G>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
  d: BidirectionalUnaryFunctions<D, E>,
  e: BidirectionalUnaryFunctions<E, F>,
  f: BidirectionalUnaryFunctions<F, G>,
): BidirectionalUnaryFunctions<A, G>;
export function chainBidirectionalUnaryFunctions<A, B, C, D, E, F, G, H>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
  d: BidirectionalUnaryFunctions<D, E>,
  e: BidirectionalUnaryFunctions<E, F>,
  f: BidirectionalUnaryFunctions<F, G>,
  g: BidirectionalUnaryFunctions<G, H>,
): BidirectionalUnaryFunctions<A, H>;
export function chainBidirectionalUnaryFunctions<A, B, C, D, E, F, G, H, I>(
  a: BidirectionalUnaryFunctions<A, B>,
  b: BidirectionalUnaryFunctions<B, C>,
  c: BidirectionalUnaryFunctions<C, D>,
  d: BidirectionalUnaryFunctions<D, E>,
  e: BidirectionalUnaryFunctions<E, F>,
  f: BidirectionalUnaryFunctions<F, G>,
  g: BidirectionalUnaryFunctions<G, H>,
  h: BidirectionalUnaryFunctions<H, I>,
): BidirectionalUnaryFunctions<H, I>;
export function chainBidirectionalUnaryFunctions(
  ...bidirectionalUnaryFunctions: BidirectionalUnaryFunctions<any, any>[]
): BidirectionalUnaryFunctions<any, any>;
export function chainBidirectionalUnaryFunctions(
  ...bidirectionalUnaryFunctions: BidirectionalUnaryFunctions<any, any>[]
): BidirectionalUnaryFunctions<any, any> {
  return {
    inOut: (input: any): any => {
      for (let i: number = 0; i < bidirectionalUnaryFunctions.length; i++) {
        input = bidirectionalUnaryFunctions[i].inOut(input);
      }
      return input;
    },
    outIn: (input: any): any => {
      for (let i: number = bidirectionalUnaryFunctions.length - 1; i >= 0; i--) {
        input = bidirectionalUnaryFunctions[i].outIn(input);
      }
      return input;
    },
  };
}
