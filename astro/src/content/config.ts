import { defineCollection, z } from 'astro:content';
import {
	DEFAULT_LANGUAGE_CODE,
	LANGUAGE_CODES
} from '../i18n';
import { SITE } from '../site';

const defaultSite = SITE[DEFAULT_LANGUAGE_CODE];

const docs = defineCollection({
	schema: z.object({
		title: z.string().default(defaultSite.title),
		description: z.string().default(defaultSite.description),
		lang: z.union([z.literal('en-US'), z.literal('es')]).default(SITE.defaultLanguage),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		ogLocale: z.string().optional(),
	}),
});

export const collections = { docs };
