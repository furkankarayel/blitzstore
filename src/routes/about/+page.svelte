<script lang="ts">
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: any;
	let page = data;
	let content = data.content;
	let original_data = data;
	$: {
		if (original_data !== data) {
			page = data;
			content = data.content;
			original_data = data;
		}
	}
</script>

<svelte:head>
	<title>{data.title} | {PUBLIC_SHOP_NAME}</title>
	<meta name="description" content={data.seo_description} />
</svelte:head>

<section class="bg-white">
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold drop-shadow-lg text-center text-gray-900 dark:text-white"
		>
			{data.header}
		</h2>
		{#if content.length !== 0}
			<div class="flex flex-col gap-2">
				<SvelteMarkdown source={content} />
			</div>
		{/if}
	</div>
</section>
