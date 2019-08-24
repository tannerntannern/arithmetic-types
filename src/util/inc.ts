import { B } from './binary';
import { Tail, Tail2, Tail4, Tail8, Tail16 } from './shift';
import { Integers } from './integers';

type Add1 = Tail<Integers>;
type Add2 = Tail<Add1>;
type Add4 = Tail2<Add2>;
type Add8 = Tail4<Add4>;
type Add16 = Tail8<Add8>;
type Add32 = Tail16<Add16>;
// type Add64 = Tail32<Add32>;
// type Add128 = Tail64<Add64>;

export type Inc<V extends number> = Add1[V];
export type Inc2<V extends number> = Add2[V];
export type Inc4<V extends number> = Add4[V];
export type Inc8<V extends number> = Add8[V];
export type Inc16<V extends number> = Add16[V];
export type Inc32<V extends number> = Add32[V];
// export type Inc64<V extends number> = Add64[V];
// export type Inc128<V extends number> = Add128[V];

export type IncIf<V extends number, If extends B> = If extends 1 ? Inc<V> : V;
export type Inc2If<V extends number, If extends B> = If extends 1 ? Inc2<V> : V;
export type Inc4If<V extends number, If extends B> = If extends 1 ? Inc4<V> : V;
export type Inc8If<V extends number, If extends B> = If extends 1 ? Inc8<V> : V;
export type Inc16If<V extends number, If extends B> = If extends 1 ? Inc16<V> : V;
export type Inc32If<V extends number, If extends B> = If extends 1 ? Inc32<V> : V;
// export type Inc64If<V extends number, If extends B> = If extends 1 ? Inc64<V> : V;
// export type Inc128If<V extends number, If extends B> = If extends 1 ? Inc128<V> : V;
