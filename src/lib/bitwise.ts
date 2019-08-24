import { B, BitTuple, Number } from '../util/binary';

type AndBit<B1 extends B, B2 extends B> = 1 extends B1 ? (1 extends B2 ? 1 : 0) : 0;
type OrBit<B1 extends B, B2 extends B> = 1 extends B1 ? 1 : (1 extends B2 ? 1 : 0);

type _And<
	N1 extends number,
	N2 extends number,
	Bit1 extends B[] = BitTuple<N1>,
	Bit2 extends B[] = BitTuple<N2>,
> = [
	AndBit<Bit1[0], Bit2[0]>,
	AndBit<Bit1[1], Bit2[1]>,
	AndBit<Bit1[2], Bit2[2]>,
	AndBit<Bit1[3], Bit2[3]>,
	AndBit<Bit1[4], Bit2[4]>,
	AndBit<Bit1[5], Bit2[5]>,
];

type _Or<
	N1 extends number,
	N2 extends number,
	Bit1 extends B[] = BitTuple<N1>,
	Bit2 extends B[] = BitTuple<N2>,
> = [
	OrBit<Bit1[0], Bit2[0]>,
	OrBit<Bit1[1], Bit2[1]>,
	OrBit<Bit1[2], Bit2[2]>,
	OrBit<Bit1[3], Bit2[3]>,
	OrBit<Bit1[4], Bit2[4]>,
	OrBit<Bit1[5], Bit2[5]>,
];

type And<N1 extends number, N2 extends number> = Number<_And<N1, N2>>;

type Or<N1 extends number, N2 extends number> = Number<_Or<N1, N2>>;
