<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME } from '$env/static/public';
	import planning from '$lib/assets/planning.jpg';

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

<div class="mx-3 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1
					class="text-5xl drop-shadow-lg md:text-6xl xl:text-7xl lg:text-right font-bold tracking-tight"
				>
					Beste Qualität & gutes Design
				</h1>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Entdecken Sie hochwertige Outdoor- als auch Indoor Lösungen, die überzeugen.
					Feinsteinzeugfliesen, Massivholztische, Terassenüberdachungen, Glasgeländer und noch
					vieles mehr.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2 class="text-center font-extrabold text-4xl pt-20 pb-12 uppercase drop-shadow-lg">
			{showsection.name}
		</h2>

		<div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
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

	<div class="container my-24 mx-auto md:px-6 sm:px-0">
		<!-- Section: Design Block -->
		<section>
			<div
				class="relative overflow-hidden saturate-150 bg-cover bg-no-repeat bg-[50%] bg-[url('$lib/assets/planning.jpg')] h-[500px]"
			/>
			<div class="container mx-auto px-6 md:px-12 xl:px-32">
				<div class="text-center">
					<div
						class="mt-[-170px] block rounded-lg px-6 py-12 bg-white/30 backdrop-blur-xl md:py-16 md:px-12"
					>
						<h1
							class="drop-shadow-lg mb-10 xs:text-3xl sm:text-3xl md:text-3xl xl:text-5xl lg:text-center font-bold tracking-tight"
						>
							Gute Dinge brauchen Planung
						</h1>
						<p class="text-gray-500 text-lg xs:text-black sm:text-grey md:text-grey lg:text-grey">
							Für ein optimales Endergebnis ist eine sorgfältige Planung entscheidend. <br />Wir
							stehen Ihnen bei der Gestaltung von Terrassenüberdachungen, Kaltwintergärten und
							Geländern zur Seite.
						</p>
						<div class="flex justify-center">
							<a
								class="bg-yellow-300 mt-10 hover:bg-yellow-500 drop-shadow-sm text-black font-bold py-5 px-5 rounded"
								href="/contact">Jetzt einen Termin vereinbaren</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Section: Design Block -->
	</div>
	<!-- <section class="text-gray-800 text-center mt-20 lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1
					class="drop-shadow-lg xs:text-3xl sm:text-3xl  md:text-3xl xl:text-5xl lg:text-right font-bold tracking-tight"
				>
					Gute Dinge brauchen Planung
				</h1>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Für ein optimales Endergebnis ist eine sorgfältige Planung entscheidend. Wir stehen Ihnen
					bei der Gestaltung von Terrassenüberdachungen, Kaltwintergärten und Geländern zur Seite.
					<br />
					<br />
					Kontaktieren Sie uns jetzt für eine detaillierte Angebotserstellung.
				</p>
			</div>
		</div>
	</section> -->
</div>
