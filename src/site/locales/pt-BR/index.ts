import type { LocalizedSite } from '../../../i18n';

import { versions } from './versions';

export default <LocalizedSite>{
	title: 'Documentação do Intersect',
	description: 'O criador de mmorpg 2d moderno, open-source, gratuito',
	components: {
		HashGenerator: {
			digestPlaceholder:
				'This will update with the hash once input is provided',
			inputPlaceholder:
				'Input text to be hashed (this is treated like a password!)',
		},
		Search: {
			DisplayError: 'Display error, please try refreshing the page!',
			Empty: 'There are no results, try typing something else to search!',
			FailedToLoadSearchIndex: 'Failed to load search index! Please try refreshing the page.',
			NoSearchIndexForLanguage: 'Search is not available for this language!',
			NoSearchIndexForVersion: 'There is no search index for the specified version of the engine.',
			OpenSearch: 'Open Search',
		},
		VersionPicker: { Latest: 'Latest' },
	},
	general: {
		EditThisPage: 'Edit this page',
		JoinOurCommunity: 'Join our Discord',
		OnThisPage: 'On this page',
		More: 'More',
	},
	navbar: {
		...versions.navbar,
	},
	sidebar: {
		...versions.sidebar,
	},
};
