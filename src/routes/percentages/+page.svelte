<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<table>
	<thead>
		<tr>
			<th>{$_('region')}</th>
			<th>{$_('location')}<br />{$_('percentchan')}</th>
			<th class="percentages">{$_('mora')}</th>
			<th class="percentages">{$_('chest')}</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="4" class="region">{$_('Mondstadt')}</td>
			<td class="subregion">{$_('Starfell Valley')}</td>
			<td class="region">--</td>
			<td class="region">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Galesong Hill')}</td>
			<td class="percentages">--</td>
			<td class="percentages">0.6%-0.7%</td>
		</tr>
		<tr>
			<td>{$_('Windwail Highland')}</td>
			<td class="percentages">--</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td>{$_('Brightcrown Mountains')}</td>
			<td class="percentages">--</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td rowspan="5" class="region">{$_('Liyue')}</td>
			<td class="subregion">{$_('Bishui Plain')}</td>
			<td class="region">0.2%-0.3%</td>
			<td class="region">0.2%-0.3%</td>
		</tr>
		<tr>
			<td>{$_('Minlin')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.1%-0.2%</td>
		</tr>
		<tr>
			<td>{$_('Sea of Clouds')}</td>
			<td class="percentages">0.3%-0.4%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Lisha')}</td>
			<td class="percentages">--</td>
			<td class="percentages">0.5%-0.6%</td>
		</tr>
		<tr>
			<td>{$_('Qiongji Estuary')}</td>
			<td class="percentages">0.3%-0.4%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td rowspan="6" class="region">{$_('Inazuma')}</td>
			<td class="subregion">{$_('Narukami Island')}</td>
			<td class="region">0.3%-0.4%</td>
			<td class="region">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Kannazuka')}</td>
			<td class="percentages">0.4%-0.5%</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td>{$_('Yashiori Island')}</td>
			<td class="percentages">0.5%-0.6%</td>
			<td class="percentages">0.5%-0.6%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Seirai Island')}</td>
			<td class="v-switch">0.3%-0.4%</td>
			<td class="v-switch">0.3%-0.4%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Watatsumi Island')}</td>
			<td class="v-switch">0.5%-0.6%</td>
			<td class="v-switch">0.5%-0.6%</td>
		</tr>
		<tr>
			<td>{$_('Tsurumi Island')}</td>
			<td class="percentages">0.3%-0.4%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td rowspan="13" class="region">{$_('Sumeru')}</td>
			<td class="subregion">{$_('Lokapala Jungle')}</td>
			<td class="region">0.2%-0.3%</td>
			<td class="region">0.6%-0.7%</td>
		</tr>
		<tr>
			<td>{$_('Ardravi Valley')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td>{$_('Vissudha Field')}</td>
			<td class="percentages">0.2%-0.3%</td>
			<td class="percentages">0.7%-0.8%</td>
		</tr>
		<tr>
			<td>{$_('Ashavan Realm')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Avidya Forest')}</td>
			<td class="percentages">0.2%-0.3%</td>
			<td class="percentages">0.6%-0.7%</td>
		</tr>
		<tr>
			<td>{$_('Lost Nursery')}</td>
			<td class="percentages">1.6%-1.7%</td>
			<td class="percentages">4.0%-4.1%</td>
		</tr>
		<tr>
			<td>{$_('Vanarana')}</td>
			<td class="percentages">1.2%-1.3%</td>
			<td class="percentages">3.0%-3.1%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Land of Lower Setekh')}</td>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.4%-0.5%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Hypostyle Desert')}</td>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.3%-0.4%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Land of Upper Setekh')}</td>
			<td class="v-switch">0.3%-0.4%</td>
			<td class="v-switch">0.8%-0.9%</td>
		</tr>
		<tr>
			<td>{$_('Desert of Hadramaveth')}</td>
			<td class="percentages">0.0%-0.1%</td>
			<td class="percentages">0.1%-0.2%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Gavireh Lajavard')}</td>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.4%-0.5%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Realm of Farakhkert')}</td>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.3%-0.4%</td>
		</tr>
		<tr>
			<td rowspan="8" class="region">{$_('Fontaine')}</td>
			<td class="subregion">{$_('Belleau Region')}</td>
			<td class="region">0.4%-0.5%</td>
			<td class="region">1.0%-1.1%</td>
		</tr>
		<tr>
			<td>{$_('Beryl Region')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Court of Fontaine')}</td>
			<td class="percentages">0.1%</td>
			<td class="percentages">0.2%-0.3%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Liffey Region')}</td>
			<td class="v-switch">0.2%-0.3%</td>
			<td class="v-switch">0.5%-0.6%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion"
				>{$_('Fontaine Research Institute of Kinetic Energy Engineering Region')}</td
			>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Erinnyes Forest')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Morte Region')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Nostoi Region')}</td>
			<td class="v-switch">0.4%-0.5%</td>
			<td class="v-switch">1.2%-1.3%</td>
		</tr>
		<tr>
			<td rowspan="9" class="region">{$_('Natlan')}</td>
			<td class="subregion">{$_('Tequemecan Valley')}</td>
			<td class="region">0.1%-0.2%</td>
			<td class="region">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Basin of Unnumbered Flames')}</td>
			<td class="percentages">0.2%-0.3%</td>
			<td class="percentages">0.5%-0.6%</td>
		</tr>
		<tr>
			<td>{$_('Toyac Springs')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.4%-0.5%</td>
		</tr>
		<tr>
			<td>{$_('Coatepec Mountain')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Tezcatepetonco Range')}</td>
			<td class="v-switch">0.2%-0.3%</td>
			<td class="v-switch">0.5%-0.6%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Ochkanatlan')}</td>
			<td class="v-switch">0.1%-0.2%</td>
			<td class="v-switch">0.3%-0.4%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Quahuacan Cliff')}</td>
			<td class="v-switch">0.3%-0.4%</td>
			<td class="v-switch">0.9%-1.0%</td>
		</tr>
		<tr>
			<td>{$_('Atocpan')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
		<tr>
			<td class="v-switch-subregion">{$_('Easybreeze Holiday Resort')}</td>
			<td class="v-switch">0.0%-0.1%</td>
			<td class="v-switch">0.2%-0.3%</td>
		</tr>
		<tr>
			<td rowspan="3" class="region">{$_('Nod-Krai')}</td>
			<td class="subregion">{$_('Paha Isle')}</td>
			<td class="region">0.1%-0.2%</td>
			<td class="region">0.3%-0.4%</td>
		</tr>
		<tr>
			<td>{$_('Lempo Isle')}</td>
			<td class="percentages">0.0%-0.1%</td>
			<td class="percentages">0.2%-0.3%</td>
		</tr>
		<tr>
			<td>{$_('Hiisi Island')}</td>
			<td class="percentages">0.1%-0.2%</td>
			<td class="percentages">0.3%-0.4%</td>
		</tr>
	</tbody>
</table>

<style>
	.percentages {
		text-align: center;
	}
	.region {
		text-align: center;
		border-top-style: solid;
		border-top-color: var(--pico-color);
		border-top-width: 2px;
	}
	.subregion {
		border-top-style: solid;
		border-top-color: var(--pico-color);
		border-top-width: 2px;
	}
	.v-switch-subregion {
		background-color: var(--pico-table-row-stripped-background-color);
	}
	.v-switch {
		background-color: var(--pico-table-row-stripped-background-color);
		text-align: center;
	}
</style>
