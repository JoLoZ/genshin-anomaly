<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';

	let uid = $state('');
	let modalOpen = $state(false);

	let link = $derived.by(() => {
		let extra = '#/ys';

		if (uid != '') {
			let server = '';

			const serverMap: Record<string, string> = {
				'6': 'os_usa',
				'7': 'os_euro',
				'8': 'os_asia',
				'9': 'os_cht'
			};

			server = serverMap[uid[0]] || '_ERROR';

			extra = `#/ys/exploration?role_id=${uid}&server=${server}`;
		}

		return 'https://act.hoyolab.com/app/community-game-records-sea/index.html' + extra;
	});

	let uidInvalid = $derived(uid == '' ? undefined : link.includes('_ERROR'));

	let outdatedBookmark = $state(false);

	const latestVersion = 3;

	onMount(() => {
		if (page.url.hash == '#' || !page.url.hash) {
			goto('/');
		}

		const version = parseInt(page.url.hash.substring(1));
		if (version < latestVersion) {
			outdatedBookmark = true;
		}
	});
</script>

<Modal bind:open={outdatedBookmark}>
	<header>
		<strong>Outdated Bookmark</strong>
	</header>
	<p>We've released a new version of the bookmark script that features improved stability.</p>
	<p>
		Please update your bookmark by removing it and adding the current version from our homepage.
	</p>
	<footer>
		<a href="/" role="button"> Continue </a>
	</footer>
</Modal>

<Modal bind:open={modalOpen}>
	<p>Once the page has loaded, click on the bookmark again to continue.</p>
	<footer>
		<button class="secondary" onclick={() => (modalOpen = false)}>Cancel</button>

		<a href={link} role="button"> I understand </a>
	</footer>
</Modal>

<div class="wrapper">
	<div class="grid">
		<article>
			<h2>Your own Exploration Stats</h2>
			<p>You have to be logged into Hoyolab</p>

			<button
				onclick={() => {
					uid = '';
					modalOpen = true;
				}}
			>
				Check your own
			</button>
		</article>
		<article>
			<h2>Someone elses Exploration Stats</h2>
			<p>Only works if the account have public battle chronicle displayed</p>
			<form
				onsubmit={(e) => {
					e.preventDefault();
					if (uidInvalid) {
						return;
					}
					modalOpen = true;
				}}
			>
				<!-- svelte-ignore a11y_no_redundant_roles -->
				<fieldset role="group">
					<input
						type="text"
						placeholder="Genshin UID"
						required
						bind:value={uid}
						aria-invalid={uidInvalid}
					/>
					<input type="submit" value="Check" />
				</fieldset>
			</form>
		</article>
	</div>
</div>

<style>
	.wrapper {
		min-height: var(--full-height);

		display: flex;
		align-items: center;
	}
	.grid {
		width: 100%;
	}
</style>
