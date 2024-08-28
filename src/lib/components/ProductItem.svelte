<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';

	export let title: string;
	export let description: string;
	export let image: string;
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
</script>

<div class="w-full max-w-sm mx-auto xs:my-3 relative">
	<a
		class="block"
		href={link}
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:touchstart={() => (hovered = true)}
		on:touchend={() => (hovered = false)}
	>
		<img src={image} alt={description} class="h-56 w-full object-cover rounded-3xl" />

		<div
			class="rounded-b-xl absolute bottom-0 w-full bg-gradient-to-r from-[#441c24] text-transparent to-transparent text-white p-3 lg:text-md md:text-sm break-words"
		>
			{title}
		</div>

		<div class="flex justify-center gap-3">
			{#if PUBLIC_SHOP_MODE != '0'}
				{#if salePrice === 0}{:else}
					<span class="text-red-600 font-medium">€{salePrice}</span>
					<span class="text-gray-600 line-through font-light">€{price}</span>
				{/if}
			{/if}
		</div>
	</a>
</div>
