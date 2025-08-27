interface Options {
	default: true;
	v1_3_laternRite: boolean;
	v1_6_goldenApple: boolean;
	v2_0_lostRiches: boolean;
	v2_2_shadow: boolean;
	show_changes: boolean;
	hide_finished: boolean;
}

interface DataPoint {
	max: dataSource;
	notes?: Partial<Record<keyof Options, string>>;
	region: 'Mondstadt' | 'Liyue' | 'Inazuma' | 'Sumeru' | 'Fontaine' | 'Natlan' | 'Nod-Krai';
	moraChanges: string;
	chestChanges: string;
}

type dataSource = number | ((opts: Options) => number);
