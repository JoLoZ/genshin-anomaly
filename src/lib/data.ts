export const data: Record<string, DataPoint> = {
	'Starfell Valley': {
		max: (opts) => {
			if (opts.v1_6_goldenApple) {
				return 102.5;
			}
			return 102.1;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off',
			v1_6_goldenApple: '+1 Chest (+0.5%) from 1.6 Golden Apple Archipelago Event'
		},
		region: 'Mondstadt'
	},
	'Galesong Hill': {
		max: 123.9,
		notes: { default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off' },
		region: 'Mondstadt'
	},
	'Windwail Highland': {
		max: 109.1,
		notes: {
			default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off'
		},
		region: 'Mondstadt'
	},
	'Brightcrown Mountains': {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 106.6;
			}
			return 106.1;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off',
			v2_2_shadow: '+1 Chest (+0.5%) from 2.2 Shadow of the Ancients Event'
		},
		region: 'Mondstadt'
	},
	'Bishui Plain': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 106.2;
			}
			return 105.7;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+2 (+0.5%) Chest from 1.3 Lantern Rite Event'
		},
		region: 'Liyue'
	},
	Minlin: {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 110.1;
			}
			return 109.9;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+3 Chest (+0.3%) from 1.3 Lantern Rite Event'
		},
		region: 'Liyue'
	},
	'Sea of Clouds': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 109.8;
			}
			return 108;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+2 Chests (+1.8%) from 1.3 Lantern Rite Event'
		},
		region: 'Liyue'
	},

	Lisha: {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 110.8;
			}
			if (opts.v2_2_shadow) {
				return 109.7;
			}
			if (opts.v1_3_laternRite) {
				return 110;
			}
			return 109.1;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+1 Chests (+0.9%) from 1.3 Lantern Rite Event',
			v2_2_shadow: '+1 Chest (+0.6%) from 2.2 Shadow of the Ancients Event'
		},
		region: 'Liyue'
	},
	'Qiongji Estuary': {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 109.4;
			}
			if (opts.v2_2_shadow) {
				return 107.6;
			}
			if (opts.v1_3_laternRite) {
				return 108.7;
			}

			return 107.3;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+4 Chests (+1.4%) from 1.3 Lantern Rite Event',
			v2_2_shadow: '+1 Chest (+0.3%) from 2.2 Shadow of the Ancients Event'
		},
		region: 'Liyue'
	},
	'Narukami Island': {
		max: 111.7,
		notes: {
			v2_0_lostRiches: 'your Exploration Progress can be higher due to the 2.0 Lost Riches Event'
		},
		region: 'Inazuma'
	},
	Kannazuka: {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 115.7;
			}

			return 115.3;
		},
		notes: {
			v2_2_shadow: '+1 (+0.5%) Chest from 2.2 Shadow of the Ancients Event',
			v2_0_lostRiches: 'your Exploration Progress can be higher due to 2.0 Lost Riches Event'
		},
		region: 'Inazuma'
	},
	'Yashiori Island': {
		max: 118.5,
		notes: {
			v2_0_lostRiches: 'your Exploration Progress can be higher due to 2.0 Lost Riches Event'
		},
		region: 'Inazuma'
	},
	'Seirai Island': { max: 110, region: 'Inazuma' },
	'Watatsumi Island': {
		max: 109.6,
		notes: { default: 'There are 4 missable Wooden crates in Suigetsu Pool, each worth 0.5%' },
		region: 'Inazuma'
	},
	'Tsurumi Island': { max: 110, region: 'Inazuma' },
	'Lokapala Jungle': { max: 120.4, region: 'Sumeru' },
	'Ardravi Valley': { max: 112.5, region: 'Sumeru' },
	'Vissudha Field': { max: 114.5, region: 'Sumeru' },
	'Ashavan Realm': { max: 115.4, region: 'Sumeru' },
	'Avidya Forest': { max: 116.4, region: 'Sumeru' },
	'Lost Nursery': { max: 108, region: 'Sumeru' },
	Vanarana: { max: 113.8, region: 'Sumeru' },
	'Land of Lower Setekh': { max: 114.5, region: 'Sumeru' },
	'Hypostyle Desert': { max: 119.1, region: 'Sumeru' },
	'Land of Upper Setekh': { max: 112.8, region: 'Sumeru' },
	'Desert of Hadramaveth': { max: 113.4, region: 'Sumeru' },
	'Gavireh Lajavard': { max: 118.8, region: 'Sumeru' },
	'Realm of Farakhkert': { max: 117.8, region: 'Sumeru' },
	'Belleau Region': { max: 112.4, region: 'Fontaine' },
	'Beryl Region': { max: 110.6, region: 'Fontaine' },
	'Court of Fontaine': { max: 110.2, region: 'Fontaine' },
	'Liffey Region': { max: 112.1, region: 'Fontaine' },
	'Fontaine Research Institute of Kinetic Energy Engineering Region': {
		max: 111.8,
		region: 'Fontaine'
	},
	'Erinnyes Forest': { max: 106.9, region: 'Fontaine' },
	'Morte Region': {
		max: 114.1,
		notes: {
			default:
				'Fixed Exploration % calculation in December 2023. Max Exploration progress can be 114.6'
		},
		region: 'Fontaine'
	},
	'Nostoi Region': { max: 109.9, region: 'Fontaine' },
	'Tequemecan Valley': { max: 109.8, region: 'Natlan' },
	'Basin of Unnumbered Flames': { max: 113, region: 'Natlan' },
	'Toyac Springs': { max: 112.9, region: 'Natlan' },
	'Coatepec Mountain': { max: 111.4, region: 'Natlan' },
	'Tezcatepetonco Range': { max: 111.4, region: 'Natlan' },
	Ochkanatlan: { max: 109.7, region: 'Natlan' },
	'Quahuacan Cliff': { max: 108.5, region: 'Natlan' },
	Atocpan: { max: 110, region: 'Natlan' }
};

export function getDataPoint(v: dataSource, opts: Options) {
	if (typeof v == 'function') {
		return v(opts);
	}

	return v;
}
