<script lang="ts">
	import { page } from '$app/state';
	import { _ } from 'svelte-i18n';

	let { data } = $props();

	let shake = $state(false);

	function handleBookmarkClick(e: MouseEvent) {
		e.preventDefault();
		shake = true;
		setTimeout(() => (shake = false), 250);
	}
</script>

<div class="header">
	<div class:shake>
		<h1>{$_('main_heading')}</h1>

		<p>{$_('main_desc')}</p>

		<a
			draggable
			href={`javascript:${data.bookmark.replaceAll('%ORIGIN%', page.url.origin)}`}
			class="link"
			onclick={handleBookmarkClick}>Genshin Anomaly</a
		>
	</div>
</div>

<style>
	.header {
		min-height: var(--full-height);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}

	.shake {
		animation: horizontal-shaking 0.25s infinite;
	}

	@keyframes horizontal-shaking {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(0.5em);
		}
		50% {
			transform: translateX(-0.5em);
		}
		75% {
			transform: translateX(0.5em);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
