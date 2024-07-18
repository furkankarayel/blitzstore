<script lang="ts">
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME, PUBLIC_SHOP_URL } from '$env/static/public';

	import ProductItem from '$lib/components/ProductItem.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import ReachUs from '$lib/components/ReachUs.svelte';
	import FeaturedProductFull from '../lib/components/FeaturedProductFull.svelte';
	import StepsBlock from '../lib/components/StepsBlock.svelte';
	import ProductFeatures from '../lib/components/ProductFeatures.svelte';

	export let data: any;
	let showcase = data.showcase;
	let tuFeatures = data.features.items;

	let featuredproducts = data.featured.items;

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	//let banners = data.carousels;
</script>

<svelte:head>
	<title>{PUBLIC_SHOP_NAME} am Bodensee, Meckenbeuren</title>
	<meta
		name="description"
		content="Kastonia.de Bodensee Ihr Partner für Outdoor-Design: Elegante Terrassenüberdachungen, maßgeschneiderte Wintergärten, stilvolle Glasgeländer, robuste Aluminiumzäune und exklusive Pergolas – Qualität, die begeistert."
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>

<div class="container mx-auto px-6 xs:px-0 sm:px-0">
	<div class="mx-3 my-5 xs:mx-0 md:mx-10">
		<div class="grid lg:grid-cols-3 gap-10">
			{#each featuredproducts as products}
				{#each products.expand.products as product}
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

		<section id="new-features" class="py-8 mt-10 sm:py-10 lg:py-16 relative overflow-hidden">
			<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="text-3xl font-bold leading-tight text-gray-900 xs:text-2xl xl:text-5xl">
						Merkmale unserer Terrassenüberdachungen
					</h2>

					<div
						class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24"
					>
						{#each tuFeatures as feature}
							<ProductFeatures
								name={feature.name}
								description={feature.description}
								icon={feature.icon}
							/>
						{/each}
					</div>
				</div>
			</div>
			<svg
				viewBox="0 0 1024 1024"
				class="absolute left-1/2 z-10 md:top-1/2 xs:top-1 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
				aria-hidden="true"
			>
				<circle
					cx="512"
					cy="512"
					r="512"
					fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
					fill-opacity="0.4"
				/>
				<defs>
					<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
						<stop stop-color="#15803d" />
						<stop offset="1" stop-color="#1d4ed8" />
					</radialGradient>
				</defs>
			</svg>
		</section>

		<section class="container mx-auto px-4 py-12 md:py-24">
			<div class="flex flex-col md:flex-row items-center justify-between sm:justify-center">
				<div class="w-full md:w-1/2 mb-8 md:mb-0">
					<h1
						class="text-4xl md:text-5xl xs:text-center md:text-left font-bold text-green-700 mb-5"
					>
						Willkommen bei Kastonia
					</h1>
					<p
						class=" xs:text-center md:text-left xs:text-md lg:text-lg xl:text-xl text-gray-800 mb-6"
					>
						Wir verwirklichen Ihre Träume für Sie. Designs für den Innen- und Außenbereich, die Sie
						sich schon immer gewünscht haben..
					</p>
					<div class="flex justify-center md:justify-start">
						<a
							href="#steps"
							on:click|preventDefault={scrollIntoView}
							class="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300"
							>Mehr erfahren</a
						>
					</div>
				</div>

				<div class="w-full md:w-1/2">
					<div class="bg-white rounded-lg shadow-lg p-6">
						<h2 class="text-2xl font-semibold text-center text-gray-800 mb-4">Warum uns wählen?</h2>
						<ul class="space-y-2 mb-6 xs:text-sm lg:text-md xl:text-lg">
							<li class="flex items-center">
								<svg
									class="w-4 h-4 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/></svg
								>
								Regionaler Handwerkbetrieb
							</li>
							<li class="flex items-center">
								<svg
									class="w-4 h-4 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/></svg
								>
								Schneller und zuverlässiger Service
							</li>
							<li class="flex items-center">
								<svg
									class="w-4 h-4 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/></svg
								>
								Maßgeschneiderte individuelle Lösungen
							</li>
							<li class="flex items-center">
								<svg
									class="w-4 h-4 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/></svg
								>
								Umfassende Beratung und Planung
							</li>
							<li class="flex items-center">
								<svg
									class="w-4 h-4 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/></svg
								>
								Hochwertige Materialien und Verarbeitung
							</li>
						</ul>
						<div class="space-y-4">
							<a
								href="#appointment"
								on:click|preventDefault={scrollIntoView}
								class="block text-center bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
								>Loslegen</a
							>
							<a
								href="{PUBLIC_SHOP_URL}/contact"
								class="block text-center border border-green-800 text-green-800 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition duration-300"
								>Berater kontaktieren</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		{#each showcase as showsection}
			<h2
				class="text-center font-extrabold xs:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:pt-10 xs:pb-6 md:pt-10 uppercase bg-gradient-to-b text-green-700 bg-clip-text"
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
		<div id="steps" class="mt-20">
			<StepsBlock />
		</div>

		<div id="appointment">
			<CallToAction />
		</div>
	</div>
	<ReachUs />
</div>
