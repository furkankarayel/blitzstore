<script lang="ts">
	import { PUBLIC_SHOP_MODE } from '$env/static/public';
	import { Image } from '@unpic/svelte';

	export let title: string;
	export let image: string;
	export let hoverImage = '';
	export let price: number;
	export let salePrice: number = 0;
	export let link: string;

	let hovered = false;
	const mobileStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};

	const desktopStyles = {
		borderRadius: 3,
		padding: '3px 5px',
		border: '1px solid transparent'
	};
</script>

<div class="flex flex-col">
	<div
		class="bg-white saturate-150 overflow-hidden rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
	>
		<a
			class="aspect-square block"
			href={link}
			on:mouseenter={() => (hovered = true)}
			on:mouseleave={() => (hovered = false)}
			on:touchstart={() => (hovered = true)}
			on:touchend={() => (hovered = false)}
		>
			<div class="relative overflow-hidden bg-cover bg-no-repeat">
				<Image
					class="object-cover aspect-square rounded-t-lg"
					loading="lazy"
					src={hovered && hoverImage.length !== 0 ? hoverImage : image}
					alt="{title} image"
				/>
			</div>

			<div
				class="flex flex-col justify-start break-words items-center flex-grow leading-tight gap-1 xs:font-sm sm:font-sm"
			>
				<div
					class="p-3 text-base text-neutral-600 xs:text-xs sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-xl"
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
			</div>
		</a>
	</div>
</div>
