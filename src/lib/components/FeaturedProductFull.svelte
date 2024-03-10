<script lang="ts">
	import { PUBLIC_SHOP_URL, PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	export let products: object;
	let layoutProducts: any;
	layoutProducts = [
		[products[0].expand.products[0]], // First group with max width
		[products[0].expand.products[1], products[0].expand.products[2]]
	];
	console.log(layoutProducts);
</script>

{#each layoutProducts as group, groupIndex}
	<div class={groupIndex === 0 ? '' : 'md:flex mt-8'}>
		{#each group as product}
			<div
				class="{group.length != 1
					? 'w-full '
					: ''}h-64 mt-10 md:mx-4 rounded-md overflow-hidden bg-cover bg-center {group.length != 1
					? 'md:w-1/2'
					: ''}"
				style="background-image: url({PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
					.images[0]})"
			>
				<div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
					<div class="px-10 xs:px-3 max-w-xl">
						<h2 class="text-2xl text-white font-semibold">{product.name}</h2>
						<p class="mt-2 text-gray-300">
							{product.description}
						</p>

						<a href="{PUBLIC_SHOP_URL}/products/{product.slug}">
							<button
								class="flex items-center mt-4 px-3 py-2 bg-green-700 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
							>
								<span>Entdecken</span>
								<svg
									class="h-5 w-5 mx-2"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg
								>
							</button>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/each}
