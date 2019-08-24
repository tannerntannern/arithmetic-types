// import { B, BitTuple } from '../util/binary';
// import { Add } from './add';
// import { BitShiftLeft } from './bitshift';
//
// type AddIf<N1 extends number, N2 extends number, If extends B> = 1 extends B ? Add<N1, N2> : N1;
// type BitShiftLeft2<N extends number> = BitShiftLeft<BitShiftLeft<N>>;
// type BitShiftLeft3<N extends number> = BitShiftLeft<BitShiftLeft2<N>>;
// type BitShiftLeft4<N extends number> = BitShiftLeft<BitShiftLeft3<N>>;
// type BitShiftLeft5<N extends number> = BitShiftLeft<BitShiftLeft4<N>>;
//
// type _Mult<
// 	N1 extends number,
// 	N2 extends number,
// 	Bit extends B[] = BitTuple<N2>,
// 	R0 extends number = AddIf<0, N1, Bit[5]>,
// 	R1 extends number = AddIf<R0, BitShiftLeft<N1>, Bit[4]>,
// 	R2 extends number = AddIf<R1, BitShiftLeft2<N1>, Bit[3]>,
// 	R3 extends number = AddIf<R2, BitShiftLeft3<N1>, Bit[2]>,
// 	R4 extends number = AddIf<R3, BitShiftLeft4<N1>, Bit[1]>,
// 	R5 extends number = AddIf<R4, BitShiftLeft5<N1>, Bit[0]>,
// > = R5;

// type T = _Mult<2, 2>;
