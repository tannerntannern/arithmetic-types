import { Dec, Dec2, Dec4, Dec8, Dec16 } from './dec';

export type B = 0 | 1;

export type BitTuple<
	R0 extends number,
	R0D16 extends number = Dec16<R0>,
	B0 extends B = -1 extends R0D16 ? 0 : 1,
	R1 extends number = [R0, R0D16][B0],
	R1D8 extends number = Dec8<R1>,
	B1 extends B = -1 extends R1D8 ? 0 : 1,
	R2 extends number = [R1, R1D8][B1],
	R2D4 extends number = Dec4<R2>,
	B2 extends B = -1 extends R2D4 ? 0 : 1,
	R3 extends number = [R2, R2D4][B2],
	R3D2 extends number = Dec2<R3>,
	B3 extends B = -1 extends R3D2 ? 0 : 1,
	R4 extends number = [R3, R3D2][B3],
	R4D1 extends number = Dec<R4>,
	B4 extends B = -1 extends R4D1 ? 0 : 1
> = [B0, B1, B2, B3, B4];
