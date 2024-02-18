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
	<section class="text-gray-800 text-center lg:text-left lg:px-32 md:py-14">
		<div class="grid md:grid-cols-2 md:py-14 gap-6 mb-10 xl:gap-12 justify-center">
			<div class="mb-6 xs:mb-0 lg:mb-0">
				<h1
					class="text-4xl drop-shadow-lg xs:text-xl md:text-2xl lg:text-4xl xl:text-7xl md:text-right font-bold tracking-tight"
				>
					Hervorragende Qualität & gutes Design
				</h1>
			</div>
			<div class="mb-3 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 xs:text-xs md:text-md lg:text-lg">
					Entdecken Sie hochwertige Lösungen für den Außen- und Innenbereich, die überzeugen.
					Feinsteinzeugfliesen, Massivholztische, Terrassenüberdachungen, Glasgeländer und vieles
					mehr.
				</p>
			</div>
		</div>
		<div class="grid md:grid-cols-2 md:py-14 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 xs:mb-0 lg:mb-0 md:order-last lg:order-last">
				<h1
					class="text-4xl drop-shadow-lg xs:text-xl md:text-2xl lg:text-4xl xl:text-7xl md:text-left font-bold tracking-tight"
				>
					Mehr Individualität
				</h1>
			</div>
			<div class="mb-3 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 xs:text-xs md:text-md lg:text-lg">
					Unser Team arbeitet derzeit mit Hochdruck daran, Ihnen eine schnelle und einfache
					Möglichkeit zu bieten, unsere Produktlinien individuell nach Ihren Wünschen zu gestalten.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2
			class="text-center font-extrabold xs:text-lg md:text-3xl xs:pt-10 xs:pb-6 md:pt-10 md:pb-12 uppercase drop-shadow-lg"
		>
			{showsection.name}
		</h2>

		<div class="grid xs:gap-5 md:gap-30 md:pb-10 grid-cols-2 lg:grid-cols-4">
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
