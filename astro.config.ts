import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeVideo from 'rehype-video';
import remarkLint from 'remark-lint';
import remarkReferenceLinks from 'remark-reference-links';
import remarkValidateLinks from 'remark-validate-links';

import rehypeRewriteUrls from './plugins/rehype-rewrite-urls';

// Would like to add but are "unmaintained":
// rehype-minify-url	https://github.com/rehypejs/rehype-minify/tree/main/packages/rehype-minify-url
// remark-a11y-emoji	https://github.com/florianeckerstorfer/remark-a11y-emoji

// Would like to add but are "dead":
// remark-lint-no-dead-urls	https://github.com/davidtheclark/remark-lint-no-dead-urls
// remark-relative-links https://github.com/zslabs/remark-relative-links

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
				},
			},
		}),
	],
	markdown: {
		gfm: true,
		rehypePlugins: [
			rehypeAutolinkHeadings,
			rehypeRewriteUrls,
			rehypeSlug,
			[
				rehypeVideo,
				{ details: false }
			],
		],
		remarkPlugins: [
			remarkLint,
			remarkReferenceLinks,
			remarkValidateLinks
		],
	},
	site: 'https://docs.freemmorpgmaker.com/',
	trailingSlash: 'always',
});
