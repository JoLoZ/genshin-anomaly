<script lang="ts">
	import 'beercss/dist/cdn/beer.min.css';
	import 'beercss/dist/cdn/beer.min.js';
	import '$lib/global.scss';

	import ogImage from '$lib/assets/open-graph.png';

	import { register, init, getLocaleFromNavigator, _, locale, locales } from 'svelte-i18n';
	import Icon from '$lib/components/Icon.svelte';
	import {  mdiClose, mdiMenuDown } from '@mdi/js';
	import { onMount } from 'svelte';

	const languageNames: Record<string, string> = {
		en: 'English',
		'zh-Hans': '简体中文'
	};

	async function setup() {
		register('en', () => import('$lib/locales/en.json'));
		register('zh-Hans', () => import('$lib/locales/zh-Hans.json'));

		function getFinalInitialLocale() {
			let zhForm,
				orgNavLang = getLocaleFromNavigator() || '',
				navLang = orgNavLang.toLowerCase();
			if (navLang !== null && navLang.startsWith('zh')) {
				if (
					navLang.indexOf('-tw') !== -1 ||
					navLang.indexOf('-hk') !== -1 ||
					navLang.indexOf('-mo') !== -1 ||
					navLang.indexOf('-hant') !== -1
				) {
					zhForm = 'zh-Hant';
				} else {
					zhForm = 'zh-Hans';
				}
			}
			return zhForm || orgNavLang.split('-')[0];
		}

		return await Promise.allSettled([
			init({
				fallbackLocale: 'en',
				initialLocale: getFinalInitialLocale()
			})
		]);
	}

	const setupResult = setup();

	let { children } = $props();

	let announcementActive = $state(false);

	onMount(() => {
		if (localStorage.getItem('lastAnnouncement') != 'designFeedback') {
			announcementActive = true;
		}
	});

	function hideAnnouncement() {
		localStorage.setItem('lastAnnouncement', 'designFeedback');
		announcementActive = false;
	}
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

{#await setupResult then}
	<header>
		<nav>
			<h6 class="max"><a href="/">Genshin Anomaly</a></h6>
			<div class="field suffix border small">
				<select bind:value={$locale}>
					{#each $locales as l}
						<option value={l}>{languageNames[l]}</option>
					{/each}
				</select>
				<Icon d={mdiMenuDown}></Icon>
			</div>
		</nav>
	</header>

	<main class="responsive">
		{@render children()}
	</main>

	<footer class="container">
		<p>
			{@html $_('powered_by', {
				values: {
					company: '<a href="https://moonsha.de" class="link" target="_blank">Moonshade</a>'
				}
			})} -
			<a href="https://github.com/JoLoZ/genshin-anomaly" class="link" target="_blank"
				>{$_('source_code')}</a
			>
			-
			<a href="https://github.com/JoLoZ/genshin-anomaly/issues" class="link" target="_blank"
				>{$_('report_issue')}</a
			>
			-
			<a href="https://forms.m2.moonsha.dev/form/F8gNNQY4" class="link" target="_blank"
				>{$_('announcement_designFeedback_footer')}</a
			>
		</p>
	</footer>

	<div class="snackbar" class:active={announcementActive}>
		<div class="max">{$_('announcement_designFeedback_text')}</div>
		<a class="inverse-link" target="_blank" href="https://forms.m2.moonsha.dev/form/F8gNNQY4">
			{$_('announcement_designFeedback_link')}
		</a>
		<button class="transparent square" onclick={hideAnnouncement}><Icon d={mdiClose}></Icon></button
		>
	</div>
{/await}

<style>
	footer {
		text-align: center;
	}
</style>
