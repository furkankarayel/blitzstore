<script>
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Kastonia.de Shop</title>

	<meta name="description" content="Kastonia.de Shop" />
</svelte:head>

<Navbar />
<slot />
<Footer />
