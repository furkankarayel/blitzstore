import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), enhancedImages()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		include: ['svelte-carousel']
	}
};

export default config;
