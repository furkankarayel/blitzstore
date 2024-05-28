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

<style>
	:root {
		--font-body: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--font-mono: 'Fira Mono', monospace;
		--color-bg-0: rgb(75, 86, 87);
		--color-bg-1: hsl(249, 36%, 86%);
		--color-bg-2: hsl(255, 44%, 95%);
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		background-color: var(--color-bg-1);
		background-size: 100vw 100vh;
		background-image: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.75) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}
</style>
