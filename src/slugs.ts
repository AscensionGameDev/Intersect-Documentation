import type { KnownLanguageCode } from './i18n';

export function buildSlug(
	langCode: KnownLanguageCode,
	pathname: string,
	version: string
) {
	try {
		/* fully qualified URL */
		new URL(pathname);
		return pathname;
	} catch {
		/* ignore */
	}

	const parts = [langCode, version === 'latest' ? '' : version, pathname];

	const dirty = `/${parts.join('/')}`;
	const sanitized = dirty.replace(/\/+/g, '/');
	return sanitized;
}

export function resolveSlug(
	langCode: KnownLanguageCode,
	slug: string,
	version?: string
): string;
export function resolveSlug(
	langCode: KnownLanguageCode,
	slug?: string,
	version?: string
): string | undefined;
export function resolveSlug(
	langCode: KnownLanguageCode,
	slug?: string,
	version?: string
) {
	if (typeof slug !== 'string') {
		return slug;
	}

	if (slug.startsWith(langCode.toLowerCase())) {
		slug = slug.replace(langCode.toLowerCase(), langCode);
	}

	if (version) {
		slug = slug.replace(version.replaceAll('.', ''), version);
	}

	if (!slug.startsWith('/')) {
		slug = `/${slug}`;
	}

	if (!slug.endsWith('/')) {
		slug += '/';
	}

	return slug;
}
