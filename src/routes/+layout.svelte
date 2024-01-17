<script>
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_SHOP_NAME } from '$env/static/public';
</script>

<svelte:head>
	<title>Home | {PUBLIC_SHOP_NAME}</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
