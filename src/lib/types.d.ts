interface Options {
	default: true;
	v1_3_laternRite: boolean;
	v1_6_goldenApple: boolean;
	v2_0_lostRiches: boolean;
	v2_2_shadow: boolean;
}

interface DataPoint {
	max: dataSource;
	notes?: Partial<Record<keyof Options, string>>;
}

type dataSource = number | ((opts: Options) => number);
