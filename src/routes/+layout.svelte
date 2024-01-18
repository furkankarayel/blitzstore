<script>
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
	import Analytics from '$lib/analytics.svelte';
</script>

<svelte:head>
	<title>Home | {PUBLIC_SHOP_NAME}</title>
</svelte:head>

<Analytics />
<Navbar />
<slot />
<Footer />
