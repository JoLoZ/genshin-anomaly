<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';

	let el: HTMLDialogElement;

	let {
		open = $bindable(false),
		children,
		...rest
	}: { open: boolean; children: Snippet } & HTMLDialogAttributes = $props();

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

<div class="overlay" class:active={open}></div>
<dialog bind:this={el} {...rest}>
	{@render children()}
</dialog>
