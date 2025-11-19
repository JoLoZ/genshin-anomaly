<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="wrapper">
	<h1>{$_('stats_unavailable_title')}</h1>
	<p>{$_('stats_unavailable_desc')}</p>
	<a href="/stats/launcher#0" class="button">{$_('try_another_uid')}</a>
</div>

<style>
	.wrapper {
		min-height: var(--full-height);

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
</style>
