<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
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
		images = images; // Trigger reactivity if needed
		scrollIntoView();
	}

	function generateStyle(src: string) {
		return src === active_image ? 'outline outline-2' : '';
	}
</script>

<div class="flex flex-col gap-5">
	<!-- Active Image with fixed aspect ratio -->
	<div class="maintain-aspect">
		<img
			class="image"
			src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{active_image}"
			alt={alt_text}
		/>
	</div>

	<!-- Thumbnail Gallery -->
	<div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
		{#each images as image}
			<div class="maintain-aspect">
				<button on:click={() => setImage(image)}>
					<img
						loading="lazy"
						class={`image ${generateStyle(image)}`}
						src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{image}"
						alt={alt_text}
					/>
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.maintain-aspect {
		position: relative;
		width: 100%;
		padding-top: 75%; /* This percentage adjusts the height relative to the width. 75% will work for a 4:3 aspect ratio */
		overflow: hidden;
	}
	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* This ensures the image covers the area without distortion */
	}
</style>
