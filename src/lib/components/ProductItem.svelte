<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';

	export let title: string;
	export let image: string;
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
</script>

<div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
	<a
		class="block"
		href={link}
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
		on:touchstart={() => (hovered = true)}
		on:touchend={() => (hovered = false)}
	>
		<img class="h-56 w-full object-cover" src={image} alt={title} />

		<div
			class="p-3 text-base text-neutral-600 xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-lg"
		>
			<a href={link}> {title}</a>
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
