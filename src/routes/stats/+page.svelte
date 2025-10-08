<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { data, getDataPoint } from '$lib/data';

	import { mdiInformation } from '@mdi/js';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	interface Loc {
		name: string;
		value: number;
	}

	onMount(() => {
		if (page.url.hash == '#' || page.url.hash == '') {
			goto('/');
		}
	});

	let locations: Loc[] = $derived(
		page.url.hash
			.substring(1)
			.split(';')
			.filter((v) => v != '')
			.map((v) => {
				const split = v.split(':');
				return { name: decodeURIComponent(split[0]), value: parseFloat(split[1]) };
			})
	);

	let opts: Options = $state({
		default: true,
		v1_3_laternRite: false,
		v1_6_goldenApple: false,
		v2_0_lostRiches: false,
		v2_2_shadow: false,
		show_changes: false,
		hide_finished: false
	});

	function countNotes(loc: Loc) {
		let i = 0;
		const info = data[loc.name];

		for (const [id, v] of Object.entries(opts)) {
			if (!v) {
				continue;
			}

			if (info.notes && info.notes[id as keyof Options]) {
				i++;
			}
		}

		return i;
	}

	let notesOpen = $state(false);
	let notesLoc: DataPoint | undefined = $state(undefined);
	let notesName = $state('');
</script>

{#if notesLoc != undefined}
	<Modal bind:open={notesOpen}>
		<header>
			<p>
				<strong>
					{$_('modal_notes_title', { values: { area: $_(notesName) } })}
				</strong>
			</p>
		</header>
		{#if !notesLoc.notes}
			<i>{$_('modal_notes_none')}</i>
		{:else}
			<ul>
				{#each Object.entries(notesLoc.notes) as [id, note]}
					{#if opts[id as keyof Options]}
						<li>{note}</li>
					{/if}
				{/each}
			</ul>
		{/if}

		<footer>
			<button onclick={() => (notesOpen = false)}>{$_('modal_notes_close')}</button>
		</footer>
	</Modal>
{/if}

<div class="grid">
	<article>
		<h3>{$_('customize')}</h3>
		<p>{$_('participated_events')}</p>
		<label>
			<input type="checkbox" bind:checked={opts.v1_3_laternRite} />
			{$_('v1_3_laternRite')}
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v1_6_goldenApple} />
			{$_('v1_6_goldenApple')}
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v2_0_lostRiches} />
			{$_('v2_0_lostRiches')}
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v2_2_shadow} />
			{$_('v2_2_shadow')}
		</label>
		<h3>{$_('settings')}</h3>
		<label>
			<input type="checkbox" bind:checked={opts.show_changes} />
			{$_('show_changes')}
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.hide_finished} />
			{$_('hide_finished')}
		</label>
	</article>

	<table>
		<thead>
			<tr>
				<th>{$_('location')}</th>
				<th>{$_('progress')}</th>
				<th>{$_('max')}</th>
				<th>{$_('progressbar')}</th>
				{#if opts.show_changes}
					<th class="change">{$_('mora')}%</th>
					<th class="change">{$_('chest')}%</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each locations as loc, i}
				{@const info = data[loc.name]}
				{@const newRegion = i == 0 ? true : info.region != data[locations[i - 1].name].region}
				{#if info}
					{@const max = getDataPoint(info.max, opts)}
					{@const noteCount = countNotes(loc)}
					{#if newRegion}
					<tr class="region">
						<td colspan="6">
							<strong>{$_(info.region)}</strong>
						</td>
					</tr>
					{/if}
					{#if !opts.hide_finished || max > loc.value}
					<tr>
							<td>
								<span>
									{$_(loc.name)}

									{#if noteCount > 0}
										<button
											role="link"
											class="warnings"
											data-tooltip={$_('area_notes_tooltip', { values: {
												count: noteCount
											} })}
											onclick={() => {
												notesOpen = true;
												notesName = loc.name;
												notesLoc = info;
											}}
										>
											<Icon d={mdiInformation}></Icon>
											{countNotes(loc)}
										</button>
									{/if}</span
								>
							</td>
							<td>
								<span
									class:rainbow={loc.value > max}
									data-tooltip={loc.value > max
										? $_('exceeds_max_tooltip')
										: undefined}
								>
									{loc.value.toFixed(1)}%
								</span>
							</td>
							<td>
								{max.toFixed(1)}%
							</td>
							<td><progress value={loc.value} {max} class:success={loc.value >= max}></progress></td
							>
							{#if opts.show_changes}
								<td class="change">
									{info.moraChanges}
								</td>
								<td class="change">
									{info.chestChanges}
								</td>
							{/if}
						</tr>
					{/if}
				{/if}
			{:else}
				<tr>
					<td colspan={4}>
						<h1 aria-busy="true">{$_('modal_loading')}</h1>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 2fr;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}

	thead {
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.region td {
		text-align: center !important;
	}

	td:first-child,
	th:first-child,
	td:nth-child(4),
	th:nth-child(4) {
		text-align: start;
		white-space: wrap;
	}

	td:first-child span {
		display: flex;
		gap: 0.25em;
	}

	td progress {
		vertical-align: middle;
	}

	td,
	th {
		text-align: end;
		white-space: nowrap;
	}
	.change {
		text-align: center;
	}

	.rainbow {
		background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet, red);
		background-clip: text;
		color: transparent;
		animation: rainbow_animation 30s linear infinite;
		background-size: 400% 100%;
		font-weight: bold;
	}

	@keyframes rainbow_animation {
		0% {
			background-position: 0 0;
		}

		100% {
			background-position: 400% 0;
		}
	}
</style>
