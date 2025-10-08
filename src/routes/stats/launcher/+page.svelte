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
				'1': 'os_asia',
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
		if (version < latestVersion && version != 0) {
			outdatedBookmark = true;
		}
	});
</script>

<Modal bind:open={outdatedBookmark}>
	<header>
		<strong>{$_('modal_outdated_title')}</strong>
	</header>
	<p>{$_('modal_outdated_desc_1')}</p>
	<p>{$_('modal_outdated_desc_2')}</p>
	<footer>
		<a href="/" role="button">{$_('modal_continue')}</a>
	</footer>
</Modal>

<Modal bind:open={modalOpen}>
	<p>{$_('modal_launcher_loading')}</p>
	<footer>
		<button class="secondary" onclick={() => (modalOpen = false)}>{$_('modal_launcher_cancel')}</button>

		<a href={link} role="button">{$_('modal_launcher_understand')}</a>
	</footer>
</Modal>

<div class="wrapper">
	<div class="grid">
		<article>
			<h2>{$_('modal_launcher_title_own')}</h2>
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
			<h2>{$_('modal_launcher_title_other')}</h2>
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
				<!-- svelte-ignore a11y_no_redundant_roles -->
				<fieldset role="group">
					<input
						type="text"
						placeholder={$_('modal_launcher_placeholder_uid')}
						required
						bind:value={uid}
						aria-invalid={uidInvalid}
					/>
					<input type="submit" value={$_('modal_launcher_check_other')} />
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
