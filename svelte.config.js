import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	runtime: 'edge',
	kit: {
		adapter: adapter(),
		prerender: {
			concurrency: 1, // had to be set to 1 instead of 3
			crawl: true,
			handleHttpError: 'ignore'
		}
	}
};

export default config;
