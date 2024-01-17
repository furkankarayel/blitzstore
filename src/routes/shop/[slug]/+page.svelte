<script lang="ts">
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME } from '$env/static/public';
	import AccordionItem from '$lib/components/AccordionItem.svelte';

	export let data: any;
	$: products = data.items;
</script>

<svelte:head>
	<title>Kategorien | {PUBLIC_SHOP_NAME}</title>
	<meta name="description" content="" />
</svelte:head>

<div class="flex justify-center items-center gap-6 m-auto p-5 flex-wrap">
	<a class="hover:underline underline-offset-4" href="/shop/all">All</a>
	<a class="hover:underline underline-offset-4" href="/shop/terassenueberdachungen"
		>Terassenüberdachungen</a
	>
	<a class="hover:underline underline-offset-4" href="/shop/glasgelaender">Glasgeländer</a>
	<a class="hover:underline underline-offset-4" href="/shop/aluminiumzaeune">Aluminiumzäune</a>
	<a class="hover:underline underline-offset-4" href="/shop/massivholzmoebel">Massivholzmöbel</a>
	<a class="hover:underline underline-offset-4" href="/shop/fliesen">Fliesen</a>
</div>

<hr />

<div class="flex flex-col py-8 px-3 lg:flex-row md:px-20">
	<div class="mg-0 basis-1/6 flex flex-col pb-5 lg:mx-10">
		<h1 class="uppercase font-bold text-xl pb-4">FILTER</h1>
		<hr />
		<AccordionItem name="Preis">
			<p>TODO</p>
		</AccordionItem>
		<hr />
		<AccordionItem name="Produkt Typ">
			<p>TODO</p>
		</AccordionItem>
		<hr />
		<AccordionItem name="Verfügbarkeit">
			<p>TODO</p>
		</AccordionItem>
		<hr />
	</div>
	<div class="basis-5/6 flex flex-col">
		<div class="flex justify-between pb-4">
			<p>{products.length} Produkte</p>
			<div>
				<span class="text-gray-700">Filtern nach</span>
				<button>Neu</button>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
			{#each products as product}
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
	</div>
</div>
