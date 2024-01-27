<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME } from '$env/static/public';
	import planning from '$lib/assets/planning.jpg';
	import CallToAction from '$lib/components/CallToAction.svelte';

	export let data: any;
	let showcase = data.showcase;
	let banners = data.carousels;
</script>

<svelte:head>
	<title>Willkommen bei {PUBLIC_SHOP_NAME}</title>
	<meta
		name="description"
		content="Entdecken Sie bei Kastonia.de exzellentes Outdoor-Design: Elegante Terrassenüberdachungen, maßgeschneiderte Wintergärten, stilvolle Glasgeländer, robuste Aluminiumzäune und edle Massivholztische. Perfektionieren Sie Ihr Zuhause mit unseren Feinsteinzeugfliesen – Qualität, die begeistert."
	/>
</svelte:head>

{#if banners.length !== 0}
	<Carousel {banners} />
{/if}

<div class="mx-3 my-5 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1
					class="text-4xl drop-shadow-lg md:text-4xl lg:text-4xl xl:text-7xl lg:text-right font-bold tracking-tight"
				>
					Beste Qualität & gutes Design
				</h1>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-base">
					Entdecken Sie hochwertige Outdoor- als auch Indoor Lösungen, die überzeugen.
					Feinsteinzeugfliesen, Massivholztische, Terassenüberdachungen, Glasgeländer und noch
					vieles mehr.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2
			class="text-center font-extrabold xs:text-2xl md:text-3xl pt-10 pb-10 uppercase drop-shadow-lg"
		>
			{showsection.name}
		</h2>

		<div class="grid xs:gap-3 md:gap-9 grid-cols-2 lg:grid-cols-4">
			{#each showsection.expand.products as product (product.id)}
				<ProductItem
					title={product.name}
					image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
						.images[0]}"
					hoverImage={product.images.length > 1
						? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}`
						: ''}
					price={product.price}
					salePrice={product.sale_price}
					link="/products/{product.slug}"
				/>
			{/each}
		</div>
	{/each}

	<CallToAction />
</div>
