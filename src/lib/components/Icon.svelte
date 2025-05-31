<script lang="ts">
	let { d }: { d: string } = $props();
</script>

<svg viewBox="0 0 24 24">
	<path {d}></path>
</svg>

<style>
	svg {
		display: inline-block;
		height: 1em;
		fill: currentColor;
	}
</style>
