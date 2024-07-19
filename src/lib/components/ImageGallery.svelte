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
		return src === active_image ? 'outline outline-2 brightness-100' : '';
	}
</script>

<div class="flex flex-col gap-4">
	<!-- Active Image -->
	<div class="active-image-container maintain-aspect">
		<img
			id="activeImage"
			class="image rounded-lg"
			src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{active_image}"
			alt={alt_text}
		/>
	</div>

	<!-- Thumbnail Gallery -->
	<div class="grid gap-3 grid-cols-10 lg:grid-cols-10">
		{#each images as image}
			<div class="thumbnail-container maintain-aspect">
				<button on:click={() => setImage(image)}>
					<img
						loading="lazy"
						class="thumbnail image rounded-lg brightness-50"
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
		width: 80%;
		padding-top: 100%; /* Adjusts the height relative to the width */
		overflow: hidden;
	}
	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the area without distortion */
	}
	.active-image-container {
		width: 100%;
		height: auto;
		padding-top: 56.25%; /* 16:9 Aspect Ratio for active image */
	}
	.thumbnail-container {
		width: 100%;
		height: auto;
		padding-top: 50%; /* Smaller aspect ratio for thumbnails */
	}
	.thumbnail {
		opacity: 0.7;
		cursor: pointer;
	}
	.thumbnail:hover {
		opacity: 1;
	}
</style>
