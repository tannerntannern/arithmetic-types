import { B, BitTuple } from '../util/binary';
import { IncIf, Inc2If, Inc4If, Inc8If, Inc16If, Inc32If } from '../util/inc';

type _Add<
	N1 extends number,
	N2 extends number,
	Bit extends B[] = BitTuple<N2>,
	R0 extends number = IncIf<N1, Bit[5]>,
	R1 extends number = Inc2If<R0, Bit[4]>,
	R2 extends number = Inc4If<R1, Bit[3]>,
	R3 extends number = Inc8If<R2, Bit[2]>,
	R4 extends number = Inc16If<R3, Bit[1]>,
	R5 extends number = Inc32If<R4, Bit[0]>,
> = R5;

export type Add<N1 extends number, N2 extends number> = _Add<N1, N2>;

export function add<N1 extends number, N2 extends number>(n1: N1, n2: N2): Add<N1, N2> {
	return n1 + n2 as any;
}
