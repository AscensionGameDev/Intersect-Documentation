import type { Root } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';


export type RewriteUrlsOptions = {
	appendTrailingSlash?: boolean;
	trimExtensions?: Array<string>;
};

type SanitizedRewriteUrlsOptions = Required<RewriteUrlsOptions>;

function sanitize(options?: RewriteUrlsOptions): SanitizedRewriteUrlsOptions {
	const sanitized: SanitizedRewriteUrlsOptions = {
		appendTrailingSlash: true,
		trimExtensions: ['md']
	};

	const trimExtensions = options?.trimExtensions;
	if (Array.isArray(trimExtensions)) {
		sanitized.trimExtensions = [...trimExtensions];
	}

	return sanitized;
}

const PATTERN_STARTS_WITH_RELATIVE = /^(\.{1,2}\/?)+/;
const PATTERN_STARTS_WITH_HTTP_LOCALHOST = /^http:\/\/localhost\//;

const rewriteUrls: Plugin<[RewriteUrlsOptions?], Root> = (options) => {
	const { appendTrailingSlash, trimExtensions } = sanitize(options);

	return (root) => {
		visit(root, 'element', (node) => {
			if (node.type !== 'element') {
				// This is because node for some reason is not just Element in
				// this case, and typescript doesn't appreciate the ambiguity
				return;
			}

			if (node.tagName !== 'a') {
				// Not an <a>? Skip.
				return;
			}

			if (!node.properties) {
				// No properties? Skip.
				return;
			}

			if (!('href' in node.properties) || typeof node.properties.href !== 'string') {
				// No href property or it isn't a string? Skip.
				return;
			}

			// We need to add *something* to be the base URL if the href is relative
			const url = new URL(node.properties.href, 'http://localhost');
			for (const extension of trimExtensions) {
				if (url.pathname.endsWith(`.${extension}`)) {
					url.pathname = url.pathname.slice(0, -(1 + extension.length));

					if (appendTrailingSlash) {
						url.pathname += '/';
					}

					// Only replace once, we are not going to handle x.html.md and turn it into x
					break;
				}
			}

			// We need to account for URL trimming relative paths
			const matchesRelative = PATTERN_STARTS_WITH_RELATIVE.exec(node.properties.href);

			// If the HREF *already* started with http://localhost, don't remove it
			if (!PATTERN_STARTS_WITH_HTTP_LOCALHOST.test(node.properties.href) && !matchesRelative) {
				node.properties.href = url.href;
				return;
			}

			// Remove the http://localhost we added to the start when validating the URL
			node.properties.href = url.href.replace(PATTERN_STARTS_WITH_HTTP_LOCALHOST, '');

			// If we had a relative path
			if (matchesRelative) {
				const [match] = matchesRelative;
				// TODO: Figure out a way to know the URL so that we can
				//   resolve it correctly instead of just assuming trailing slash
				node.properties.href = '../' + match + node.properties.href;
			}
		});
	};
};

export { rewriteUrls };

export default rewriteUrls;
