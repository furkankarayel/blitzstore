<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';

	export let title: string;
	export let image: string;
	export let hoverImage = '';
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
</script>

<div class="flex flex-col justify-center items-center">
	<a
		class="aspect-square block mb-6 "
		href={link}
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:touchstart={() => (hovered = true)}
		on:touchend={() => (hovered = false)}
	>
		<img
			class="object-cover aspect-square "
			width="700"
			height="700"
			loading="lazy"
			src={hovered && hoverImage.length !== 0 ? hoverImage : image}
			alt="{title} image"
		/>
	</a>
	<div class="flex flex-col justify-start flex-grow text-center leading-tight gap-1">
		<a class="font-light" href={link}>{title}</a>
		<div class="flex justify-center gap-3 ">
			{#if PUBLIC_SHOP_MODE != '0'}
				{#if salePrice === 0}
					<span class="font-medium">€{price}</span>
				{:else}
					<span class="text-red-600 font-medium">€{salePrice}</span>
					<span class="text-gray-600 line-through font-light">€{price}</span>
				{/if}
			{/if}
		</div>
	</div>
</div>
