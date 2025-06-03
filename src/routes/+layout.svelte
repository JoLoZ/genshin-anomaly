<script lang="ts">
	import '$lib/global.scss';

	import ogImage from '$lib/assets/open-graph.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Genshin Anomaly</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Genshin Anomaly" />
	<meta property="og:image" content={ogImage} />
	<meta
		property="og:description"
		content="Keep track of your Genshin Impact world exploration beyond 100%"
	/>
	<meta name="theme-color" content="#017FC0" />
</svelte:head>

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

<footer class="container">
	<p>
		<small>
			Powered by <a href="https://moonsha.de" target="_blank">Moonshade</a> -
			<a href="https://github.com/JoLoZ/genshin-anomaly" target="_blank">Source Code</a> -
			<a href="https://github.com/JoLoZ/genshin-anomaly/issues" target="_blank">Report issue</a>
		</small>
	</p>
</footer>

<style>
	footer {
		text-align: center;
	}
</style>
