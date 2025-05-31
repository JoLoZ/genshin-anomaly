<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();

	function handleBookmarkClick(e: MouseEvent) {
		e.preventDefault();
	}
</script>

<h1>Genshin Exploration Tracker</h1>

<p>Drag this button into your bookmark bar and click it twice to get started!</p>

<a
	role="button"
	draggable
	href="javascript:{data.bookmark.replaceAll('%ORIGIN%', page.url.origin)}"
	onclick={handleBookmarkClick}>Genshin Exploration</a
>
