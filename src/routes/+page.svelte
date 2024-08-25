<script lang="ts">
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME, PUBLIC_SHOP_URL } from '$env/static/public';

	import ProductItem from '$lib/components/ProductItem.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import ReachUs from '$lib/components/ReachUs.svelte';
	import FeaturedProductFull from '../lib/components/FeaturedProductFull.svelte';
	import StepsBlock from '../lib/components/StepsBlock.svelte';
	import ProductFeatures from '../lib/components/ProductFeatures.svelte';

	export let data: any;

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
	<title>{PUBLIC_SHOP_NAME}</title>
	<meta name="description" content="FM-Felgentechnik.de" />
</svelte:head>
