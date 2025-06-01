<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	let shake = $state(false);

	function handleBookmarkClick(e: MouseEvent) {
		e.preventDefault();
		shake = true;
		setTimeout(() => (shake = false), 250);
	}
</script>

<header>
	<div class:shake>
		<h1>Genshin Exploration Tracker</h1>

		<p>Drag this link into your bookmark bar and click it twice to get started!</p>

		<a
			draggable
			href="javascript:{data.bookmark.replaceAll('%ORIGIN%', page.url.origin)}"
			onclick={handleBookmarkClick}>Genshin Anomaly</a
		>
	</div>
</header>

<style>
	header {
		min-height: calc(100vh - var(--pico-nav-element-spacing-vertical) * 4);
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
