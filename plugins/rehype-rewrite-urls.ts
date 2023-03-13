import type { Root } from 'hast';
import type { Plugin } from 'unified';

import {
	dirname,
	extname,
	join,
	posix,
	relative,
	resolve,
	sep,
} from 'path';
import { visit } from 'unist-util-visit';


export type RewriteUrlsOptions = {
	appendTrailingSlash?: boolean;
	contentRoot?: string;
	trimExtensions?: Array<string>;
};

type SanitizedRewriteUrlsOptions = Required<RewriteUrlsOptions>;

function sanitize(options?: RewriteUrlsOptions): SanitizedRewriteUrlsOptions {
	const sanitized: SanitizedRewriteUrlsOptions = {
		appendTrailingSlash: true,
		contentRoot: 'src/content/docs',
		trimExtensions: ['md', 'mdx']
	};

	const trimExtensions = options?.trimExtensions;
	if (Array.isArray(trimExtensions)) {
		sanitized.trimExtensions = [...trimExtensions];
	}

	return sanitized;
}

const PATTERN_STARTS_WITH_RELATIVE = /^(\.{1,2}\/?)+/;

const rewriteUrls: Plugin<[RewriteUrlsOptions?], Root> = (options) => {
	const {
		appendTrailingSlash,
		contentRoot,
		trimExtensions
	} = sanitize(options);

	return (root, file) => {
		const [currentFile] = file.history;

		if (currentFile === undefined) {
			throw new Error('Current file is unknown.');
		}

		const resolvedContentRoot = resolve(join(file.cwd, contentRoot));

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

			const originalHref = node.properties.href;

			// We need to account for URL trimming relative paths
			const matchesRelative = PATTERN_STARTS_WITH_RELATIVE.exec(node.properties.href);

			if (!matchesRelative) {
				// Make no changes
				return;
			}

			const currentDir = dirname(currentFile);
			const resolvedTargetPath = resolve(currentDir, originalHref);
			const relativeToRoot = relative(resolvedContentRoot, resolvedTargetPath);
			let dirtyHref = `/${relativeToRoot.replace(/^\.\//, '')}`;

			for (const extension of trimExtensions) {
				if (dirtyHref.endsWith(`.${extension}`)) {
					dirtyHref = dirtyHref.slice(0, -(1 + extension.length));

					// Only replace once, we are not going to handle x.html.md and turn it into x
					break;
				}
			}

			if (appendTrailingSlash && extname(dirtyHref) == '') {
				dirtyHref += '/';
			}

			const href = sep !== posix.sep ? dirtyHref.replace(sep, posix.sep) : dirtyHref;
			node.properties.href = href;
		});
	};
};

export { rewriteUrls };

export default rewriteUrls;
