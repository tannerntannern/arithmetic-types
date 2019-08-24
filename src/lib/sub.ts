import {B, BitTuple} from '../util/binary';
import { DecIf, Dec2If, Dec4If, Dec8If, Dec16If, Dec32If } from '../util/dec';

type _Sub<
	N1 extends number,
	N2 extends number,
	Bit extends B[] = BitTuple<N2>,
	R0 extends number = DecIf<N1, Bit[5]>,
	R1 extends number = Dec2If<R0, Bit[4]>,
	R2 extends number = Dec4If<R1, Bit[3]>,
	R3 extends number = Dec8If<R2, Bit[2]>,
	R4 extends number = Dec16If<R3, Bit[1]>,
	R5 extends number = Dec32If<R4, Bit[0]>,
> = R5;

export type Sub<N1 extends number, N2 extends number> = _Sub<N1, N2>;
