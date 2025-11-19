<script lang="ts">
	let { d, size }: { d: string; size?: 'tiny' | 'small' | 'large' | 'extra' } = $props();
</script>

<i>
	<svg viewBox="0 0 24 24" class={size}>
		<path {d}></path>
	</svg>
</i>
