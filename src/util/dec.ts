import {B} from './binary';
import { Integers } from './integers';
import { Prepend, Prepend2, Prepend4, Prepend8, Prepend16, Prepend32, Prepend64 } from './shift';

type Minus1 = Prepend<Integers>;
type Minus2 = Prepend<Minus1>;
type Minus4 = Prepend2<Minus2>;
type Minus8 = Prepend4<Minus4>;
type Minus16 = Prepend8<Minus8>;
type Minus32 = Prepend16<Minus16>;
type Minus64 = Prepend32<Minus32>;
type Minus128 = Prepend64<Minus64>;

export type Dec<V extends number> = Minus1[V];
export type Dec2<V extends number> = Minus2[V];
export type Dec4<V extends number> = Minus4[V];
export type Dec8<V extends number> = Minus8[V];
export type Dec16<V extends number> = Minus16[V];
export type Dec32<V extends number> = Minus32[V];
export type Dec64<V extends number> = Minus64[V];
export type Dec128<V extends number> = Minus128[V];

export type DecIf<V extends number, If extends B> = If extends 1 ? Dec<V> : V;
export type Dec2If<V extends number, If extends B> = If extends 1 ? Dec2<V> : V;
export type Dec4If<V extends number, If extends B> = If extends 1 ? Dec4<V> : V;
export type Dec8If<V extends number, If extends B> = If extends 1 ? Dec8<V> : V;
export type Dec16If<V extends number, If extends B> = If extends 1 ? Dec16<V> : V;
export type Dec32If<V extends number, If extends B> = If extends 1 ? Dec32<V> : V;
export type Dec64If<V extends number, If extends B> = If extends 1 ? Dec64<V> : V;
export type Dec128If<V extends number, If extends B> = If extends 1 ? Dec128<V> : V;
