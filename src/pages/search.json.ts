import { getCollection } from 'astro:content';
import { getLangCode, KnownLanguageCode } from '../i18n';
import { SITE } from '../site';
import { resolveSlug } from '../slugs';

export type IndexedDocument = {
	body: string;
	description?: string;
	// dir: string;
	pathname: string;
	lang: string;
	ogLocale: string | undefined;
	title: string;
};

// export type SearchIndex = Record<;

// function index(entry: CollectionEntry<'docs'>) {

// }

export async function get() {
	const docs = await getCollection('docs');

	const docsByLocale = docs
		.reduce((localeMap, {
			body,
			data: {
				description,
				lang,
				ogLocale,
				title
			},
			id,
			slug
		}) => {
			const langCode = getLangCode(id);
			const site = SITE[langCode];

			const trimmedBody = body?.trim();
			if (!trimmedBody) {
				return localeMap;
			}

			const doc: IndexedDocument = {
				body: trimmedBody,
				lang,
				ogLocale,
				pathname: resolveSlug(langCode, slug).slice(langCode.length + 1),
				title
			};

			if (description && description !== site.description) {
				doc.description = description;
			}

			if (!(langCode in localeMap)) {
				localeMap[langCode] = [];
			}

			localeMap[langCode].push(doc);

			return localeMap;
		}, <Record<KnownLanguageCode, IndexedDocument[]>>{});

	return {
		body: JSON.stringify(docsByLocale)
	};
}
