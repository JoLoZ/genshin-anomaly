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
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.3%-0.4%'
	},
	'Galesong Hill': {
		max: 123.9,
		notes: { default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off' },
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.6%-0.7%'
	},
	'Windwail Highland': {
		max: 109.1,
		notes: {
			default: 'Due to early Version bugs and bug fixes, Mondstadt numbers can be off'
		},
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
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
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
	},
	'Bishui Plain': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 106.0;
			}
			return 105.7;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+2 (+0.5%) Chest from 1.3 Lantern Rite Event'
		},
		region: 'Liyue',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.2%-0.3%'
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
		region: 'Liyue',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.1%-0.2%'
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
		region: 'Liyue',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},

	Lisha: {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 110.2;
			}
			if (opts.v2_2_shadow) {
				return 109.7;
			}
			if (opts.v1_3_laternRite) {
				return 109.7;
			}
			return 109.1;
		},
		notes: {
			default: 'Due to early Version bugs and bug fixes, Liyue numbers can be off',
			v1_3_laternRite: '+1 Chests (+0.6%) from 1.3 Lantern Rite Event',
			v2_2_shadow: '+1 Chest (+0.6%) from 2.2 Shadow of the Ancients Event'
		},
		region: 'Liyue',
		moraChanges: '--',
		chestChanges: '0.5%-0.6%'
	},
	'Qiongji Estuary': {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 109;
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
		region: 'Liyue',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Narukami Island': {
		max: 111.7,
		notes: {
			v2_0_lostRiches: 'your Exploration Progress can be higher due to the 2.0 Lost Riches Event'
		},
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
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
		region: 'Inazuma',
		moraChanges: '0.4%-0.5%',
		chestChanges: '0.4%-0.5%'
	},
	'Yashiori Island': {
		max: 118.5,
		notes: {
			v2_0_lostRiches: 'your Exploration Progress can be higher due to 2.0 Lost Riches Event'
		},
		region: 'Inazuma',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'Seirai Island': {
		max: 110,
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Watatsumi Island': {
		max: 109.6,
		notes: { default: 'There are 4 missable Wooden crates in Suigetsu Pool, each worth 0.5%' },
		region: 'Inazuma',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'Tsurumi Island': {
		max: 110,
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Lokapala Jungle': {
		max: 120.4,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'Ardravi Valley': {
		max: 112.5,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Vissudha Field': {
		max: 114.5,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.7%-0.8%'
	},
	'Ashavan Realm': {
		max: 115.4,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Avidya Forest': {
		max: 116.4,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'Lost Nursery': {
		max: 108,
		region: 'Sumeru',
		moraChanges: '1.6%-1.7%',
		chestChanges: '4.0%-4.1%'
	},
	Vanarana: { max: 113.8, region: 'Sumeru', moraChanges: '1.2%-1.3%', chestChanges: '3.0%-3.1%' },
	'Land of Lower Setekh': {
		max: 114.5,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Hypostyle Desert': {
		max: 119.1,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Land of Upper Setekh': {
		max: 112.8,
		region: 'Sumeru',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.8%-0.9%'
	},
	'Desert of Hadramaveth': {
		max: 113.4,
		region: 'Sumeru',
		moraChanges: '<0.1%',
		chestChanges: '0.1%-0.2%'
	},
	'Gavireh Lajavard': {
		max: 118.8,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Realm of Farakhkert': {
		max: 117.8,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Belleau Region': {
		max: 112.4,
		region: 'Fontaine',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.0%-1.1%'
	},
	'Beryl Region': {
		max: 110.6,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Court of Fontaine': {
		max: 110.2,
		region: 'Fontaine',
		moraChanges: '<0.1%',
		chestChanges: '0.2%-0.3%'
	},
	'Liffey Region': {
		max: 112.1,
		region: 'Fontaine',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'Fontaine Research Institute of Kinetic Energy Engineering Region': {
		max: 111.8,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Erinnyes Forest': {
		max: 106.9,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Morte Region': {
		max: 114.1,
		notes: {
			default:
				'Fixed Exploration % calculation in December 2023. Max Exploration progress can be 114.6'
		},
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Nostoi Region': {
		max: 109.9,
		region: 'Fontaine',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.2%-1.3%'
	},
	'Tequemecan Valley': {
		max: 109.8,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Basin of Unnumbered Flames': {
		max: 113,
		region: 'Natlan',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'Toyac Springs': {
		max: 112.9,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Coatepec Mountain': {
		max: 111.4,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Tezcatepetonco Range': {
		max: 111.4,
		region: 'Natlan',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	Ochkanatlan: {
		max: 109.7,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Quahuacan Cliff': {
		max: 108.5,
		region: 'Natlan',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.9%-1.0%'
	},
	Atocpan: {
		max: 110,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Easybreeze Holiday Resort': {
		max: 0,
		region: 'Natlan',
		notes: {
			default:
				'Yet unknown Data'
		},
		moraChanges: '--',
		chestChanges: '--'
	}
};

export function getDataPoint(v: dataSource, opts: Options) {
	if (typeof v == 'function') {
		return v(opts);
	}

	return v;
}
