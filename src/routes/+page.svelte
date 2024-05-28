<script lang="ts">
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME } from '$env/static/public';

	import ProductItem from '$lib/components/ProductItem.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import ReachUs from '$lib/components/ReachUs.svelte';
	import FeaturedProductFull from '../lib/components/FeaturedProductFull.svelte';

	export let data: any;
	let showcase = data.showcase;
	let featuredproducts = data.featured.items;
	let len_featProducts = featuredproducts[0].products.length;
	//let banners = data.carousels;
</script>

<svelte:head>
	<title>{PUBLIC_SHOP_NAME} am Bodensee, Meckenbeuren</title>
	<meta
		name="description"
		content="Kastonia.de Bodensee Ihr Partner für Outdoor-Design: Elegante Terrassenüberdachungen, maßgeschneiderte Wintergärten, stilvolle Glasgeländer, robuste Aluminiumzäune und exklusive Pergolas – Qualität, die begeistert."
	/>
</svelte:head>

<div class="container mx-auto px-6 xs:px-0 sm:px-0">
	<div class="mx-3 my-5 xs:mx-0 md:mx-10">
		<div class="grid lg:grid-cols-3 gap-10">
			{#each featuredproducts as products}
				{#each products.expand.products as product, productIndex}
					<FeaturedProductFull
						name={product.name}
						description={product.description}
						image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
							.images[1]}"
						link="/products/{product.slug}"
						action={'Entdecken'}
					/>
				{/each}
			{/each}
		</div>
		<section class="text-gray xs:mt-12 lg:my-10 gap-10">
			<div class="grid md:grid-cols-2 xs:p-0 mb-3 gap-6">
				<div>
					<h1
						class="text-3xl xs:text-3xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-b drop-shadow-custom hover:drop-shadow-customhov from-black text-transparent to-gray-400 bg-clip-text"
					>
						Hervorragende <br /> Qualität & <br /> gutes Design
					</h1>
				</div>
				<div class="flex flex-col justify-center">
					<p class="text-gray-800 xs:text-md lg:text-md xl:text-xl">
						Entdecken Sie hochwertige Lösungen für den Außen- und Innenbereich, die überzeugen.
						Feinsteinzeugfliesen, Massivholztische, Terrassenüberdachungen, Glasgeländer und vieles
						mehr.
					</p>
				</div>
			</div>
			<div class="grid md:grid-cols-2 justify-center p-20 xs:p-0 mb-3 gap-6">
				<div class="md:order-last lg:order-last">
					<h1
						class="text-3xl xs:text-3xl lg:text-5xl xl:text-6xl drop-shadow-custom hover:drop-shadow-customhov md:text-left font-bold tracking-tight bg-gradient-to-b from-black text-transparent to-gray-400 bg-clip-text"
					>
						Mehr <br /> Individualität
					</h1>
				</div>
				<div class="flex flex-col justify-center">
					<p class="text-gray-800 xs:text-md lg:text-md xl:text-xl">
						Unser Team arbeitet derzeit mit Hochdruck daran, Ihnen eine schnelle und einfache
						Möglichkeit zu bieten, unsere Produktlinien individuell nach Ihren Wünschen zu
						gestalten.
					</p>
				</div>
			</div>
		</section>

		{#each showcase as showsection}
			<h2
				class="text-center font-extrabold xs:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:pt-10 xs:pb-6 md:pt-10 uppercase bg-gradient-to-b from-black text-transparent to-gray-300 bg-clip-text"
			>
				{showsection.name}
			</h2>
			<div class="grid gap-6 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
				{#each showsection.expand.products as product (product.id)}
					<ProductItem
						title={product.name}
						image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
							.images[0]}"
						hoverImage={product.images.length > 1
							? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}`
							: ''}
						description={product.seo_description}
						price={product.price}
						salePrice={product.sale_price}
						link="/products/{product.slug}"
					/>
				{/each}
			</div>
		{/each}

		<CallToAction />
	</div>
	<ReachUs />
</div>
