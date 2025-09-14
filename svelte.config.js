import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-static for GitHub Pages
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false,
			appDir: 'app' // Using 'app' without underscore
		}),
		paths: {
			base: '', // Empty base path for root domain deployment
		},
		prerender: {
			entries: ['*'], // Prerender all routes
			crawl: true,    // Enable crawling to find all routes
			handleHttpError: ({ path, referrer, message }) => {
				// Log the error but don't fail the build
				console.warn(`Prerendering error for ${path}: ${message}`);
				return;
			}
		}
	}
};

export default config;
