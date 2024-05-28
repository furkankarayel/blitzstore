<script>
	import '$lib/app.css';
	// @ts-ignore
	import Navbar from '$lib/components/Navbar.svelte';
	// @ts-ignore
	import Footer from '$lib/components/Footer.svelte';
	// @ts-ignore
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
	// @ts-ignore
	import Analytics from '$lib/analytics.svelte';
</script>

<svelte:head>
	<title>Home | {PUBLIC_SHOP_NAME}</title>
</svelte:head>

<Analytics />
<Navbar />
<slot />
<Footer />
