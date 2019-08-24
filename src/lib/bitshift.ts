import { B, BitTuple, Number } from '../util/binary';

type _BitShiftLeft<
	N extends number,
	Bit extends B[] = BitTuple<N>
> = [Bit[1], Bit[2], Bit[3], Bit[4], Bit[5], 0];

type _BitShiftRight<
	N extends number,
	Bit extends B[] = BitTuple<N>
> = [0, Bit[0], Bit[1], Bit[2], Bit[3], Bit[4]];

export type BitShiftLeft<N extends number> = Number<_BitShiftLeft<N>>;

export type BitShiftRight<N extends number> = Number<_BitShiftRight<N>>;

const bitMask = 63;

export function bitShiftLeft<N extends number>(n: N): BitShiftLeft<N> {
	return ((n << 1) & bitMask) as any;
}

export function bitShiftRight<N extends number>(n: N): BitShiftRight<N> {
	return ((n >> 1) & bitMask) as any;
}
