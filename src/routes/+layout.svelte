<script lang="ts">
	import '$lib/global.scss';

	import ogImage from '$lib/assets/open-graph.png';

	import { register, init, getLocaleFromNavigator, _, locale, locales } from 'svelte-i18n';

	async function setup() {
		register('en', () => import('$lib/locales/en.json'));
		register('zh-Hans', () => import('$lib/locales/zh-Hans.json'));

		function getFinalInitialLocale() {
			var zhForm, orgNavLang = (getLocaleFromNavigator() || ""), navLang = orgNavLang.toLowerCase();
			if((navLang !== null) && (navLang.startsWith("zh"))) {
				if((navLang.indexOf("-tw") !== -1) || (navLang.indexOf("-hk") !== -1) || (navLang.indexOf("-mo") !== -1) || (navLang.indexOf("-hant") !== -1)) {
					zhForm = "zh-Hant";
				} else {
					zhForm = "zh-Hans";
				}
			}
			return(zhForm || orgNavLang.split('-')[0]);
		}

		return await Promise.allSettled([
			init({
				fallbackLocale: 'en',
				initialLocale: getFinalInitialLocale()
			})
		])
	};

	const setupResult = setup();

	const languageNames = {
		'en': "English",
		'zh-Hans': "简体中文"
	};

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

{#await setupResult}{:then}
<nav class="container">
	<ul>
		<li><a href="/"><strong>Genshin Anomaly</strong></a></li>
	</ul>
	<ul>
		<li><a href="/">{$_('home')}</a></li>
		<li><a href="/percentages">{$_('percentages')}</a></li>
		<li>
			<select bind:value={$locale}>
				{#each $locales as l}
					<option value={l}>{(languageNames as any)[l]}</option>
				{/each}
			</select>
		</li>
	</ul>
</nav>

<main class="container">
	{@render children()}
</main>

<footer class="container">
	<p>
		<small>
			{@html $_('powered_by', { values: { company: '<a href="https://moonsha.de" target="_blank">Moonshade</a>' } })} -
			<a href="https://github.com/JoLoZ/genshin-anomaly" target="_blank">{$_('source_code')}</a> -
			<a href="https://github.com/JoLoZ/genshin-anomaly/issues" target="_blank">{$_('report_issue')}</a>
		</small>
	</p>
</footer>

<style>
	footer {
		text-align: center;
	}
</style>
{:catch error}{/await}
