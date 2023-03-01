import type { Primitive, ZodLiteral } from 'astro/zod';
import { defineCollection, z } from 'astro:content';
import { DEFAULT_LANGUAGE_CODE, LANGUAGE_CODES } from '../i18n';
import { SITE } from '../site';

const defaultSite = SITE[DEFAULT_LANGUAGE_CODE];

function createLiteralUnion<T extends Primitive>(values: readonly T[]) {
	return values.map((value) => z.literal(value)) as unknown as readonly [
		ZodLiteral<T>,
		ZodLiteral<T>,
		...ZodLiteral<T>[]
	];
}

const ZOD_LANGUAGE_CODES = createLiteralUnion(LANGUAGE_CODES);

const docs = defineCollection({
	schema: z.object({
		title: z.string().default(defaultSite.title),
		description: z.string().default(defaultSite.description),
		lang: z.union(ZOD_LANGUAGE_CODES).default(SITE.defaultLanguage),
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
