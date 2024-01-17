import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$src: resolve('./src'),
					$components: resolve('./src/components'),
					$sections: resolve('./src/sections')
				}
			}
		}
	}
};

export default config;
