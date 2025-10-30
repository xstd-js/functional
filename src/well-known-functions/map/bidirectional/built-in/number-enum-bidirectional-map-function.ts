import { type BidirectionalMapFunctions } from '../bidirectional-map-functions.js';

export function numberEnumBidirectionalMapFunctions<GEnum extends string>(
  _enum: Record<GEnum, number>,
): BidirectionalMapFunctions<number, GEnum> {
  const inverseEnum: Record<number, GEnum> = Object.fromEntries(
    Object.entries(_enum).map(([key, value]: [string, unknown]): [unknown, string] => [value, key]),
  );

  return {
    inOut: (input: number): GEnum => inverseEnum[input] as GEnum,
    outIn: (input: GEnum): number => _enum[input] as number,
  };
}
