<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { Image } from '@unpic/svelte';
	export let productId: string;
	export let images: any;
	export let alt_text: string;
	let top_image: any;

	let original_image = images[0];

	let active_image = images[0];

	$: {
		if (original_image !== images[0]) {
			active_image = images[0];
			original_image = images[0];
		}
	}

	function scrollIntoView() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function setImage(src: string) {
		active_image = src;
		images = images;
		scrollIntoView();
	}

	function generateStyle(src: string) {
		return src === active_image ? 'outline outline-2' : '';
	}
</script>

<div class="flex flex-col gap-5">
	<Image
		class="w-full shadow-lg"
		id="top_image"
		layout="constrained"
		src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{active_image}"
		width="700"
		height="700"
		alt={alt_text}
	/>

	<div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
		{#each images as image}
			<button on:click={() => setImage(image)}>
				<Image
					layout="constrained"
					loading="lazy"
					class={generateStyle(image)}
					src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{image}"
					width="700"
					height="700"
					alt={alt_text}
				/>
			</button>
		{/each}
	</div>
</div>
