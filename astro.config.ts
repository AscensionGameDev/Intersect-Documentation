import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		// Enable Preact to support Preact JSX components.
		preact(),
		sitemap({
			i18n: {
				defaultLocale: 'en-US',
				locales: {
					'en-US': 'en-US',
					es: 'es',
					fr: 'fr',
					it: 'it',
					nl: 'nl',
					'pt-BR': 'pt-BR',
				}
			}
		}),
	],
	markdown: {},
	site: 'https://docs.freemmorpgmaker.com/',
});
