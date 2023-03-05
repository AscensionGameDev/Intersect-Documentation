import { SITE } from './locales';

function joinPath(...segments: string[]) {
	return segments.join('/').replace(/\/{2,}/, '/');
}

export function getPathInRepo(documentId: string) {
	if ('editUrl' in SITE && SITE.editUrl !== undefined) {
		return documentId;
	} else if ('repository' in SITE) {
		const { repository } = SITE;
		switch (repository.type) {
			case 'github':
				return joinPath(repository.pathInRepository ?? '', documentId);

			case 'git':
				return documentId;

			default:
				throw new Error('Not implemented');
		}
	}

	throw new Error('Unreachable');
}

export function getEditUrl(documentId: string) {
	if ('editUrl' in SITE && SITE.editUrl !== undefined) {
		const editUrl = new URL(SITE.editUrl);
		editUrl.pathname = joinPath(editUrl.pathname, documentId);
		return editUrl;
	} else if ('repository' in SITE) {
		const { repository } = SITE;
		switch (repository.type) {
			case 'github':
				return new URL(
					joinPath(
						`https://github.com/${repository.name}/tree/${repository.branchName}`,
						repository.pathInRepository ?? '',
						documentId
					)
				);

			case 'git': {
				const gitUrl = new URL(repository.baseUrl);
				gitUrl.pathname = joinPath(gitUrl.pathname, documentId);
				return gitUrl;
			}

			default:
				throw new Error('Not implemented');
		}
	}

	throw new Error('Unreachable');
}
