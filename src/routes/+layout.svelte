<script lang="ts">
	import '$lib/global.scss';

	let { children } = $props();
</script>

<nav class="container">
	<ul>
		<li><a href="/"><strong>Genshin Anomaly</strong></a></li>
	</ul>
	<ul>
		<li><a href="/">Home</a></li>
	</ul>
</nav>

<main class="container">
	{@render children()}
</main>
