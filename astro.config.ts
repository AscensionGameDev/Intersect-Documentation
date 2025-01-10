import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as RehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeVideo from '@ascensiongamedev/rehype-video';
import remarkLint from 'remark-lint';
import remarkReferenceLinks from 'remark-reference-links';
import remarkValidateLinks from 'remark-validate-links';

import rehypeRewriteUrls from './plugins/rehype-rewrite-urls';

import { h } from 'hastscript';
import { fromHtml } from 'hast-util-from-html';
import { readFileSync } from 'fs';
import { join } from 'path';

const linkIconSvgPath = join(process.cwd(), 'public', 'link.svg');
const linkIcon = readFileSync(linkIconSvgPath, 'utf-8');

// Would like to add but are "unmaintained":
// rehype-minify-url	https://github.com/rehypejs/rehype-minify/tree/main/packages/rehype-minify-url
// remark-a11y-emoji	https://github.com/florianeckerstorfer/remark-a11y-emoji

// Would like to add but are "dead":
// remark-lint-no-dead-urls	https://github.com/davidtheclark/remark-lint-no-dead-urls
// remark-relative-links https://github.com/zslabs/remark-relative-links

// https://astro.build/config
export default defineConfig({
	output: 'static',
	// adapter: nodeAdapter({
	// 	mode: 'standalone'
	// }),
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
			rehypeRewriteUrls,
			rehypeSlug,
			rehypeVideo,
			[
				/* this order matters, it must come after rehypeSlug */
				rehypeAutolinkHeadings,
				<RehypeAutolinkHeadingsOptions>{
					behavior: 'append',
					content() {
						return h(
							'span',
							{ class: 'icon icon-link' },
							fromHtml(linkIcon).children.filter(({ type }) => type === 'element')
						);
					}
				}
			]
		],
		remarkPlugins: [
			remarkLint,
			remarkReferenceLinks,
			remarkValidateLinks
		],
	},
	site: 'https://docs.freemmorpgmaker.com/',
	trailingSlash: 'ignore'
});
