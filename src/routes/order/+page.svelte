<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
	import { emptyCart } from '$lib/stores';

	const url = $page.url;

	let orderSuccess = url.searchParams.get('success') === 'true';

	if (orderSuccess) {
		emptyCart();
	}
</script>

<svelte:head>
	<title>Bestellung | {PUBLIC_SHOP_NAME}</title>
</svelte:head>

{#if orderSuccess}
	<div
		class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg flex flex-col items-center"
		role="alert"
	>
		<p class="p-20 font-bold text-5xl text-center">Bestellung abgeschlossen</p>
		<p class="pb-20 text-xl text-center">
			Vielen Dank für Ihren Einkauf! Wir hoffen bald wieder von Ihnen zu hören!
		</p>
	</div>
{:else}
	<div
		class="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg flex flex-col items-center"
		role="alert"
	>
		<p class="p-20 font-bold text-5xl text-center">Oh...</p>
		<p class="pb-20 text-xl text-center">
			Es scheint etwas schief gelaufen zu sein da Ihre <b>Bestellung fehlschlug</b>...
		</p>
	</div>
{/if}
