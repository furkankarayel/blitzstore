<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';

	import { addToCart } from '$lib/stores';
	import type { CartItem } from '$lib/stores';
	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import ProductDetails from '$lib/components/ProductDetails.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_MODE, PUBLIC_SHOP_NAME } from '$env/static/public';

	export let data: any;
	let original_data = data;
	let product = data;
	let quantity = 1;

	$: {
		if (original_data !== data) {
			product = data;
			product.images = product.images;
			quantity = 1;
			original_data = data;
		}
	}

	function prepareToCart() {
		let item: CartItem;
		item = {
			id: product.id,
			name: product.name,
			slug: product.slug,
			thumbnail: `${product.images[0]}?thumb=100x100`,
			price: product.price,
			salePrice: product.sale_price,
			quantity: quantity
		};

		addToCart(item);
	}
</script>

<svelte:head>
	<title>{product.name} | {PUBLIC_SHOP_NAME}</title>
	<meta name="description" content={product.seo_description} />
</svelte:head>

<div class="flex flex-col mx-3 py-10 gap-5 lg:mx-10 lg:flex-row lg:gap-8">
	<div class="basis-1/2 px-8">
		<ImageGallery productId={product.id} images={product.images} alt_text={product.name} />
	</div>
	<div class="basis-1/2 flex flex-col gap-8 px-8">
		<h1 class="font-extrabold text-4xl mt-3 xs:text-3xl sm:text-5xl">{product.name}</h1>
		{#if PUBLIC_SHOP_MODE != '0' && product.price != 0}
			<div class="flex items-end gap-2">
				{#if product.sale_price === 0}
					<span class="text-3xl">{product.price} €</span>
				{:else}
					<span class="text-3xl text-red-600">{product.sale_price} €</span>
					<span class="text-xl text-gray-600 line-through">${product.price}</span>
				{/if}
			</div>
		{/if}

		<div class="flex flex-col">
			<!-- Not needed <p>Beschreibung</p>-->
			<ProductDetails source={product.details} />
		</div>
		{#if PUBLIC_SHOP_MODE != '0'}
			<div class="flex flex-col gap-2">
				<p>Menge</p>
				<QuantityInput bind:count={quantity} />
			</div>
			<button
				class="w-full h-12 px-6 text-white font-bold transition-colors duration-150 bg-[#441c24] focus:shadow shadow-sm hover:bg-[#70313E]"
				on:click={() => prepareToCart()}
			>
				Warenkorb hinzufügen
			</button>
		{/if}
	</div>
</div>

<div class="flex flex-col-reverse px-10 gap-20 lg:flex-row">
	<p class="text-gray-600" />
	{#if product.related_products.length !== 0}
		<div class="basis">
			<p class="font-bold text-xl uppercase">Ähnliche Produkte</p>

			<div class="grid gap-12 pr-5 py-5 md:grid-cols-4 xs:grid-cols-1">
				{#each product.expand.related_products as relatedProduct (relatedProduct.id)}
					<ProductItem
						title={relatedProduct.name}
						image="{PUBLIC_POCKETBASE_URL}/api/files/{relatedProduct.collectionName}/{relatedProduct.id}/{relatedProduct
							.images[0]}"
						hoverImage={relatedProduct.images.length > 1
							? `${PUBLIC_POCKETBASE_URL}/api/files/${relatedProduct.collectionName}/${relatedProduct.id}/${relatedProduct.images[1]}`
							: ''}
						price={relatedProduct.price}
						salePrice={relatedProduct.sale_price}
						link="/products/{relatedProduct.slug}"
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
