export const data: Record<string, DataPoint> = {
	'Starfell Valley': {
		max: 102.1,
		notes: { default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off' }
	},
	'Galesong Hill': {
		max: 123.9,
		notes: { default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off' }
	},
	'Windwail Highland': {
		max: (opts) => {
			if (opts.v1_6_goldenApple) {
				return 109.6;
			}
			return 109.1;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off',
			v1_6_goldenApple: '+1 Chest (+0,5%) from 1.6 Golden Apple Archipelago Event'
		}
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
			v2_2_shadow: '+1 Chest (+0,5%) from 2.2 Shadow of the Ancients Event'
		}
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
			v1_3_laternRite: '+2 (+0,5%) Chest from 1.3 Lantern Rite Event'
		}
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
			v1_3_laternRite: '+3 Chest (+0,3%) from 1.3 Lantern Rite Event'
		}
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
			v1_3_laternRite: '+2 Chests (+1,8%) from 1.3 Lantern Rite Event'
		}
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
			v1_3_laternRite: '+1 Chests (+0,9%) from 1.3 Lantern Rite Event',
			v2_2_shadow: '+1 Chest (+0,6%) from 2.2 Shadow of the Ancients Event'
		}
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
			v1_3_laternRite: '+4 Chests (+1,4%) from 1.3 Lantern Rite Event',
			v2_2_shadow: '+1 Chest (+0,3%) from 2.2 Shadow of the Ancients Event'
		}
	},
	'Narukami Island': {
		max: 111.7,
		notes: { v2_0_lostRiches: 'your Exploration Progress can be higher due to the 2.0 Lost Riches Event' }
	},
	Kannazuka: {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 115.7;
			}

			return 115.3;
		},
		notes: {
			v2_2_shadow: '+1 (+0,5%) Chest from 2.2 Shadow of the Ancients Event',
			v2_0_lostRiches: 'your Exploration Progress can be higher due to 2.0 Lost Riches Event'
		}
	},
	'Yashiori Island': {
		max: 118.5,
		notes: { v2_0_lostRiches: 'your Exploration Progress can be higher due to 2.0 Lost Riches Event' }
	},
	'Seirai Island': { max: 110 },
	'Watatsumi Island': { max: 109.6 ,
		notes: { default: 'There are 4 missable Wooden crates in Suigetsu Pool, each worth 0.5%'}
	},
	'Tsurumi Island': { max: 110 },
	'Lokapala Jungle': { max: 120.4 },
	'Ardravi Valley': { max: 112.5 },
	'Vissudha Field': { max: 114.5 },
	'Ashavan Realm': { max: 115.4 },
	'Avidya Forest': { max: 116.4 },
	'Lost Nursery': { max: 108 },
	Vanarana: { max: 113.8 },
	'Land of Lower Setekh': { max: 114.5 },
	'Hypostyle Desert': { max: 119.1 },
	'Land of Upper Setekh': { max: 112.8 },
	'Desert of Hadramaveth': { max: 113.4 },
	'Gavireh Lajavard': { max: 118.8 },
	'Realm of Farakhkert': { max: 117.8 },
	'Belleau Region': { max: 112.4 },
	'Beryl Region': { max: 110.6 },
	'Court of Fontaine': { max: 110.2 },
	'Liffey Region': { max: 112.1 },
	'Fontaine Research Institute of Kinetic Energy Engineering Region': { max: 111.8 },
	'Erinnyes Forest': { max: 106.9 },
	'Morte Region': { max: 114.1 ,
		notes: {default: 'Fixed Exploration % calculation in December 2023. MaxExploration progress can be 114.6'}
	},
	'Nostoi Region': { max: 109.9 },
	'Tequemecan Valley': { max: 109.8 },
	'Basin of Unnumbered Flames': { max: 113 },
	'Toyac Springs': { max: 112.9 },
	'Coatepec Mountain': { max: 111.4 },
	'Tezcatepetonco Range': { max: 111.4 },
	Ochkanatlan: { max: 109.7 },
	'Quahuacan Cliff': { max: 108.5 },
	Atocpan: { max: 110 }
};

export function getDataPoint(v: dataSource, opts: Options) {
	if (typeof v == 'function') {
		return v(opts);
	}

	return v;
}
