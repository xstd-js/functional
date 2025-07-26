import { GenericFunction } from './generic-function.js';

export type InferFunctionThis<GFunction extends GenericFunction> = GFunction extends (
  this: infer GThis,
  ...args: any[]
) => any
  ? GThis
  : never;
