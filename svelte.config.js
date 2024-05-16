import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// default options are fine for most static deployments
			// these can be customized as needed
			strict: false,
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			routes: { include: ['/*'], exclude: ['<all>', '/sitemap.xml'] }
		})
	}
};

export default config;
