import type { Site } from '../../i18n';

import enUS from './en-US';
import es from './es';
import fr from './fr';
import it from './it';
import nl from './nl';
import ptBR from './pt-BR';

export const SITE: Site = {
	defaultLanguage: 'en-US',
	repository: {
		type: 'github',
		name: 'AscensionGameDev/Intersect-Documentation',
		branchName: 'main',
		pathInRepository: 'src/content/docs'
	},
	// repository: {
	// 	type: 'git',
	// 	baseUrl: new URL(
	// 		'https://github.com/AscensionGameDev/Intersect-Documentation/tree/main/src/content/docs'
	// 	),
	// },
	communityUrl: new URL('https://discord.gg/qaJ8kRmdKA'),
	editUrl: new URL(
		'https://github.com/AscensionGameDev/Intersect-Documentation/tree/main/src/content/docs'
	),
	'en-US': enUS,
	es,
	fr,
	it,
	nl,
	'pt-BR': ptBR,
};
