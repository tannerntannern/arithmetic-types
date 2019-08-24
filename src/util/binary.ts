import { IncIf, Inc2If, Inc4If, Inc8If, Inc16If, Inc32If } from './inc';
import { Dec, Dec2, Dec4, Dec8, Dec16, Dec32 } from './dec';

export type B = 0 | 1;

type Overflow<N extends number> = -1 extends N ? 0 : 1;

export type BitTuple<
	R0 extends number,
	R0D extends number = Dec32<R0>,
	B0 extends B = Overflow<R0D>,

	R1 extends number = [R0, R0D][B0],
	R1D extends number = Dec16<R1>,
	B1 extends B = Overflow<R1D>,

	R2 extends number = [R1, R1D][B1],
	R2D extends number = Dec8<R2>,
	B2 extends B = Overflow<R2D>,

	R3 extends number = [R2, R2D][B2],
	R3D extends number = Dec4<R3>,
	B3 extends B = Overflow<R3D>,

	R4 extends number = [R3, R3D][B3],
	R4D extends number = Dec2<R4>,
	B4 extends B = Overflow<R4D>,

	R5 extends number = [R4, R4D][B4],
	R5D extends number = Dec<R5>,
	B5 extends B = Overflow<R5D>,
> = [B0, B1, B2, B3, B4, B5];

export type Number<
	BitTuple extends [B, B, B, B, B, B],
	R0 extends number = Inc32If<0, BitTuple[0]>,
	R1 extends number = Inc16If<R0, BitTuple[1]>,
	R2 extends number = Inc8If<R1, BitTuple[2]>,
	R3 extends number = Inc4If<R2, BitTuple[3]>,
	R4 extends number = Inc2If<R3, BitTuple[4]>,
	R5 extends number = IncIf<R4, BitTuple[5]>,
> = R5;
