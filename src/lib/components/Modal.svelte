<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let el: HTMLDialogElement;

	let { open = $bindable(false), children }: { open: boolean; children: Snippet } = $props();

	onMount(() => {
		$effect(() => {
			if (open) {
				el.showModal();
			} else {
				el.close();
			}
		});

		el.addEventListener('close', () => (open = false));
	});
</script>

<dialog bind:this={el}>
	<article>
		{@render children()}
	</article>
</dialog>
