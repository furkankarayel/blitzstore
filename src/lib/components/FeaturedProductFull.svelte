<script lang="ts">
	import { PUBLIC_SHOP_URL, PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let item_index: number;
	export let name: string;
	export let image: string;
	export let description: string;
	export let link: string;
	export let action: string;
</script>

<div
	class={'w-full  h-64 mt-10 md:mx-2 rounded-md overflow-hidden relative drop-shadow-sm hover:drop-shadow-2xl'}
>
	<img class="h-64 w-full object-cover object-center" src={image} alt={name} />
	<div
		class="bg-gray-900 bg-opacity-50 flex items-center absolute inset-0 bg-gradient-to-r from-black/60"
	>
		<div class="px-10 xs:px-3 max-w-xl">
			<h2 class="text-2xl text-white font-semibold">{name}</h2>
			<p class="mt-2 text-gray-300">
				{description}
			</p>
			<a href={`${PUBLIC_SHOP_URL}${link}`}>
				<button
					class="flex items-center mt-4 px-3 py-2 bg-green-700 text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
				>
					<span>{action}</span>
					<svg class="h-5 w-5 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</button>
			</a>
		</div>
	</div>
</div>
