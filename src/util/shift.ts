export type Tail<Tuple extends any[]> =
	((...args: Tuple) => any) extends ((_: any, ..._1: infer Rest) => any)
		? Rest : never;

export type Tail2<Tuple extends any[]> =
	((...args: Tuple) => any) extends ((_: any, _1: any, ..._2: infer Rest) => any)
		? Rest : never;

export type Tail4<Tuple extends any[]> =
	((...args: Tuple) => any) extends ((_: any, _1: any, _2: any, _3: any, ..._4: infer Rest) => any)
		? Rest : never;

export type Tail8<Tuple extends any[]> = Tail4<Tail4<Tuple>>;
export type Tail16<Tuple extends any[]> = Tail8<Tail8<Tuple>>;
export type Tail32<Tuple extends any[]> = Tail16<Tail16<Tuple>>;
export type Tail64<Tuple extends any[]> = Tail32<Tail32<Tuple>>;

export type Prepend<Tuple extends any[]> = Parameters<(_: -1, ..._1: Tuple) => any>;
export type Prepend2<Tuple extends any[]> = Parameters<(_: -1, _1: -1, ..._2: Tuple) => any>;
export type Prepend4<Tuple extends any[]> = Parameters<(_: -1, _1: -1, _2: -1, _3: -1, ..._4: Tuple) => any>;
export type Prepend8<Tuple extends any[]> = Parameters<(_: -1, _1: -1, _2: -1, _3: -1, _4: -1, _5: -1, _6: -1, _7: -1, ..._8: Tuple) => any>;
export type Prepend16<Tuple extends any[]> = Parameters<(_: -1, _1: -1, _2: -1, _3: -1, _4: -1, _5: -1, _6: -1, _7: -1, _8: -1, _9: -1, _10: -1, _11: -1, _12: -1, _13: -1, _14: -1, _15: -1, ..._16: Tuple) => any>;
export type Prepend32<Tuple extends any[]> = Prepend16<Prepend16<Tuple>>;
export type Prepend64<Tuple extends any[]> = Prepend32<Prepend32<Tuple>>;
