<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { data, getDataPoint } from '$lib/data';

	import { mdiInformation } from '@mdi/js';
	import { onMount } from 'svelte';

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
		v2_2_shadow: false
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
				<strong>Notes on {notesName}</strong>
			</p>
		</header>
		{#if !notesLoc.notes}
			<i>There are no notes for this area</i>
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
			<button onclick={() => (notesOpen = false)}>Close</button>
		</footer>
	</Modal>
{/if}

<div class="grid">
	<article>
		<h2>Customize</h2>
		<p>I've participated in these events:</p>
		<label>
			<input type="checkbox" bind:checked={opts.v1_3_laternRite} />
			1.3 Lantern Rite Event
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v1_6_goldenApple} />
			1.6 Golden Apple Archipelago Event
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v2_0_lostRiches} />
			2.0 Lost Riches Event
		</label>
		<label>
			<input type="checkbox" bind:checked={opts.v2_2_shadow} />
			2.2 Shadow of the Ancients Event
		</label>
	</article>

	<table>
		<thead>
			<tr>
				<th>Location</th>
				<th>Progress</th>
				<th>Max</th>
				<th>Progress</th>
			</tr>
		</thead>
		<tbody>
			{#each locations as loc}
				{@const info = data[loc.name]}
				{#if info}
					{@const max = getDataPoint(info.max, opts)}
					{@const noteCount = countNotes(loc)}
					<tr>
						<td>
							<span>
								{loc.name}

								{#if noteCount > 0}
									<button
										role="link"
										class="warnings"
										data-tooltip="There {noteCount == 1
											? 'is'
											: 'are'} {noteCount} note{noteCount == 1 ? '' : 's'} about this area"
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
									? 'This percentage is above the currently known maximum'
									: undefined}
							>
								{loc.value.toFixed(1)}%
							</span>
						</td>
						<td>
							{max.toFixed(1)}%
						</td>
						<td><progress value={loc.value} {max} class:success={loc.value >= max}></progress></td>
					</tr>
				{/if}
			{:else}
				<tr>
					<td colspan={4}>
						<h1 aria-busy="true">Crunching numbers...</h1>
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

	td:first-child,
	th:first-child,
	td:last-child,
	th:last-child {
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
