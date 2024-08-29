<script lang="ts">
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME, PUBLIC_SHOP_URL } from '$env/static/public';

	import ProductItem from '$lib/components/ProductItem.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import ReachUs from '$lib/components/ReachUs.svelte';
	import FeaturedProductFull from '../lib/components/FeaturedProductFull.svelte';
	import StepsBlock from '../lib/components/StepsBlock.svelte';
	import ProductFeatures from '../lib/components/ProductFeatures.svelte';

	export let data: any;
	let showcase = data.showcase.items;
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
	<title>{PUBLIC_SHOP_NAME} - Perfektion für Ihre Felgen – Qualität, die glänzt.</title>
	<meta name="description" content="`{PUBLIC_SHOP_NAME}`" />
</svelte:head>

<div class="container mx-auto px-6 xs:px-0 sm:px-0">
	<div class="mx-3 my-5 xs:mx-0 md:mx-10">
		<section id="new-features" class="py-8 mt-10 sm:py-10 lg:py-16 relative overflow-hidden">
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

		<section class="container mx-auto py-12 md:py-24">
			<div class="flex flex-col md:flex-row items-center justify-between sm:justify-center">
				<div class="xs:w-full md:w-1/2 mb-8 md:mb-0 p-10">
					<h1
						class="text-4xl md:text-2xl xs:text-xl xs:text-center md:text-left font-bold text-[#441c24] mb-5"
					>
						Willkommen bei <br />
						{PUBLIC_SHOP_NAME}
					</h1>
					<p
						class=" xs:text-center md:text-left xs:text-md lg:text-lg xl:text-xl text-gray-800 mb-6"
					>
						Wir bringen Ihre Felgen in Bestform. Mit modernster Technik und präziser Handwerkskunst
						verleihen wir Ihren Felgen neuen Glanz und schützen sie langfristig.
					</p>
					<div class="flex justify-center md:justify-start">
						<a
							href="#steps"
							on:click|preventDefault={scrollIntoView}
							class="inline-block bg-[#441c24] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#70313E] transition duration-300"
							>Mehr erfahren</a
						>
					</div>
				</div>

				<div class="xs:w-full md:w-1/2">
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
								Professionelle Instandsetzung und Veredelung
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
								Modernste CNC- und Pulverbeschichtungstechnik
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
								Individuelle Farb- und Designmöglichkeiten
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
								Hochwertige Felgenaufbereitung
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
								Langlebiger Schutz durch keramische Versiegelung
							</li>
						</ul>
						<div class="space-y-4">
							<a
								href="#appointment"
								on:click|preventDefault={scrollIntoView}
								class="block text-center bg-[#441c24] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#70313E] transition duration-300"
								>Loslegen</a
							>
							<a
								href="{PUBLIC_SHOP_URL}/contact"
								class="block text-center border border-[#441c24] text-[#441c24] font-semibold px-6 py-3 rounded-lg hover:bg-[#FFECF0] transition duration-300"
								>Berater kontaktieren</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		{#each showcase as showsection}
			<h2
				class="text-center font-extrabold xs:text-lg md:text-xl lg:text-2xl xl:text-3xl xs:pt-10 xs:pb-6 md:pt-10 uppercase bg-gradient-to-b text-[#441c24] bg-clip-text"
			>
				{showsection.name}
			</h2>
			<div class="grid gap-6 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
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
	</div>
	<ReachUs />
</div>
