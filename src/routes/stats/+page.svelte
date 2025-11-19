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

	function getNotes(loc: string) {
		if (loc == '') {
			return [];
		}

		const info = data[loc];

		let notes: string[] = [];

		for (const [id, v] of Object.entries(opts)) {
			if (!v) {
				continue;
			}

			if (info.notes && info.notes[id as keyof Options]) {
				notes.push(info.notes[id as keyof Options] || 'ERROR');
			}
		}

		return notes;
	}

	let noteModal = $state('');
	let noteModalOpen = $state(false);
</script>

<Modal bind:open={noteModalOpen}>
	<strong>
		{$_('modal_notes_title', { values: { area: $_(noteModal) } })}
	</strong><br />
	{#if getNotes(noteModal).length == 0}
		<i>{$_('modal_notes_none')}</i>
	{:else}
		<ul>
			{#each getNotes(noteModal) as note}
				<li>{note}</li>
			{/each}
		</ul>
	{/if}

	<nav>
		<button onclick={() => (noteModalOpen = false)} class="max">{$_('modal_notes_close')}</button>
	</nav>
</Modal>

<div class="grid">
	<article>
		<h3>{$_('customize')}</h3>
		<p>{$_('participated_events')}</p>

		{#each ['v1_3_laternRite', 'v1_6_goldenApple', 'v2_0_lostRiches', 'v2_2_shadow'] as (keyof Options)[] as id}
			<div class="field middle-align">
				<nav>
					<div class="max">
						<div>{$_(id)}</div>
					</div>
					<label class="switch">
						<input type="checkbox" bind:checked={opts[id]} />
						<span></span>
					</label>
				</nav>
			</div>
		{/each}

		<h3>{$_('settings')}</h3>
		{#each ['show_changes', 'hide_finished'] as (keyof Options)[] as id}
			<div class="field middle-align">
				<nav>
					<div class="max">
						<div>{$_(id)}</div>
					</div>
					<label class="switch">
						<input type="checkbox" bind:checked={opts[id]} />
						<span></span>
					</label>
				</nav>
			</div>
		{/each}
	</article>

	<div class="scroll">
		<table class="border">
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
						{@const notes = getNotes(loc.name)}
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
										<nav class="middle-align">
											<span class="name">
												{$_(loc.name)}
											</span>

											{#if notes.length > 0}
												<button
													class="small transparent link"
													onclick={() => {
														noteModal = loc.name;
														noteModalOpen = true;
													}}
												>
													<Icon d={mdiInformation}></Icon>
													{notes.length}
													{#if notes.length == 1}
														<div class="tooltip max">
															{notes[0]}
														</div>
													{:else}
														<div class="tooltip">
															{$_('area_notes_tooltip', {
																values: {
																	count: notes.length
																}
															})}
														</div>
													{/if}
												</button>
											{/if}
										</nav>
									</span>
								</td>
								<td>
									<span class:rainbow={loc.value > max}>
										{loc.value.toFixed(1)}%
										{#if loc.value > max}
											<div class="tooltip">{$_('exceeds_max_tooltip')}</div>
										{/if}
									</span>
								</td>
								<td>
									{max.toFixed(1)}%
								</td>
								<td>
									<progress
										class="large"
										value={loc.value}
										{max}
										class:light-green-text={loc.value >= max}
									></progress>
								</td>
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
		min-height: 3rem;
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
	.name {
		padding: var(--_padding) 0;
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
