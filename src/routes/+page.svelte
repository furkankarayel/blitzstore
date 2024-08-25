<script lang="ts">
	import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_NAME, PUBLIC_SHOP_URL } from '$env/static/public';

	import ProductItem from '$lib/components/ProductItem.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import ReachUs from '$lib/components/ReachUs.svelte';
	import FeaturedProductFull from '../lib/components/FeaturedProductFull.svelte';
	import StepsBlock from '../lib/components/StepsBlock.svelte';
	import ProductFeatures from '../lib/components/ProductFeatures.svelte';

	export let data: any;
	let showcase = data.showcase;
	let tuFeatures = data.features.items;

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
	<title>{PUBLIC_SHOP_NAME} am Bodensee, Meckenbeuren</title>
	<meta
		name="description"
		content="Kastonia.de Bodensee Ihr Partner für Outdoor-Design: Elegante Terrassenüberdachungen, maßgeschneiderte Wintergärten, stilvolle Glasgeländer, robuste Aluminiumzäune und exklusive Pergolas – Qualität, die begeistert."
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>
