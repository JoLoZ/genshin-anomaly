<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

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

			server = serverMap[uid.at(-9) || ''] || '_ERROR';

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
		if (version < latestVersion && version != 0) {
			outdatedBookmark = true;
		}
	});
</script>

<Modal bind:open={outdatedBookmark}>
	<strong>{$_('modal_outdated_title')}</strong>
	<p>{$_('modal_outdated_desc_1')}</p>
	<p>{$_('modal_outdated_desc_2')}</p>

	<footer>
		<a href="/" class="button">{$_('modal_continue')}</a>
	</footer>
</Modal>

<Modal bind:open={modalOpen}>
	<p>{$_('modal_launcher_loading')}</p>
	<nav class="right-align">
		<button class="secondary" onclick={() => (modalOpen = false)}
			>{$_('modal_launcher_cancel')}</button
		>

		<a href={link} class="button">{$_('modal_launcher_understand')}</a>
	</nav>
</Modal>

<div class="wrapper">
	<div class="grid">
		<article>
			<h4>{$_('modal_launcher_title_own')}</h4>
			<p>{$_('modal_launcher_desc_own')}</p>

			<button
				onclick={() => {
					uid = '';
					modalOpen = true;
				}}
			>
				{$_('modal_launcher_check_own')}
			</button>
		</article>
		<article>
			<h4>{$_('modal_launcher_title_other')}</h4>
			<p>{$_('modal_launcher_desc_other')}</p>
			<form
				onsubmit={(e) => {
					e.preventDefault();
					if (uidInvalid) {
						return;
					}
					modalOpen = true;
				}}
			>
				<nav>
					<div class="field label border max" class:invalid={uidInvalid}>
						<input type="text" id="other-uid" bind:value={uid} required />
						<label for="#other-uid">{$_('modal_launcher_placeholder_uid')}</label>
					</div>
					<button type="submit">{$_('modal_launcher_check_other')}</button>
				</nav>
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
		grid-template-columns: 1fr 1fr;
	}
	form {
		margin-block-start: 0 !important;
	}
</style>
