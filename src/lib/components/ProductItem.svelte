<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';

	export let title: string;
	export let image: string;
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
</script>

<div
	class="w-full max-w-sm mx-auto rounded-md drop-shadow-sm xs:my-3 hover:drop-shadow-2xl overflow-hidden relative"
>
	<a
		class="block"
		href={link}
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:touchstart={() => (hovered = true)}
		on:touchend={() => (hovered = false)}
	>
		<img src={image} alt={title} class="h-56 w-full object-cover" />

		<div class="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-md">
			{title}
		</div>

		<div class="flex justify-center gap-3">
			{#if PUBLIC_SHOP_MODE != '0'}
				{#if salePrice === 0}
					<span class="font-medium">€{price}</span>
				{:else}
					<span class="text-red-600 font-medium">€{salePrice}</span>
					<span class="text-gray-600 line-through font-light">€{price}</span>
				{/if}
			{/if}
		</div>
	</a>
</div>
