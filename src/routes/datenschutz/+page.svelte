<script lang="ts">
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: any;
	let page = data;
</script>

<svelte:head>
	<title>{page.title} | {PUBLIC_SHOP_NAME}</title>
	<meta name="description" content={page.seo_description} />
</svelte:head>

<section class="bg-white">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold drop-shadow-lg text-center text-gray-900"
		>
			{page.header}
		</h2>

		<div class="flex flex-col gap-2 break-words">
			<SvelteMarkdown source={page.content} />
		</div>
	</div>
</section>
