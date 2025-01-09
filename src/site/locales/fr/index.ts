import type { LocalizedSite } from '../../../i18n';

import * as latest from './latest';
import * as v071beta from './v0.7.1-beta';

export default <LocalizedSite>{
	title: 'Documentation Intersect',
	description:
		'Le moteur moderne de création de mmorpg 2d, open source et gratuit.',
	components: {
		HashGenerator: {
			digestPlaceholder:
				'Cela sera mis à jour avec le hachage une fois l\'entrée fournie',
			inputPlaceholder:
				'Saisissez le texte à hacher (ceci est traité comme un mot de passe !)',
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
		latest: latest.navbar,
		'v0.7.1-beta': v071beta.navbar,
	},
	sidebar: {
		latest: latest.sidebar,
		'v0.7.1-beta': v071beta.sidebar,
	},
};
