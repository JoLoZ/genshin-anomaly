export const data: Record<string, DataPoint> = {
	'Starfell Valley': { max: 102.1 },
	'Galesong Hill': { max: 123.9 },
	'Windwail Highland': {
		max: (opts) => {
			if (opts.v1_6_goldenApple) {
				return 109.6;
			}
			return 109.1;
		},
		notes: { default: 'Default test note', v1_6_goldenApple: 'Tagged test note' }
	},
	'Brightcrown Mountains': {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 106.6;
			}
			return 106.1;
		}
	},
	'Bishui Plain': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 106.2;
			}
			return 105.7;
		}
	},
	Minlin: {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 110.1;
			}
			return 109.9;
		}
	},
	'Sea of Clouds': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 109.8;
			}
			return 108;
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
		}
	},
	'Narukami Island': { max: 111.7 },
	Kannazuka: {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 115.7;
			}
			return 115.3;
		}
	},
	'Yashiori Island': { max: 118.5 },
	'Seirai Island': { max: 110 },
	'Watatsumi Island': { max: 109.6 },
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
	'Morte Region': { max: 114.1 },
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
