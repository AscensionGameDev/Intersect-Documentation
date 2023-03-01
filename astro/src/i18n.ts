export enum KnownLanguageCodes {
	'en-US',
	es,
	fr,
	it,
	nl,
	'pt-BR'
}

export type KnownLanguageCode = keyof typeof KnownLanguageCodes;

export interface Language {
	name: Record<KnownLanguageCode, string>;
}

export const LANGUAGES: Record<KnownLanguageCode, Language> = {
	'en-US': {
		name: {
			'en-US': 'English (US)',
			es: 'Inglés (EEUU)',
			fr: 'Anglais',
			it: 'Inglese',
			nl: 'Engels',
			'pt-BR': 'Inglês'
		}
	},
	es: {
		name: {
			'en-US': 'Spanish',
			es: 'Español',
			fr: 'Espagnol',
			it: 'Spagnolo',
			nl: 'Spaans',
			'pt-BR': 'Espanhol'
		}
	},
	fr: {
		name: {
			'en-US': 'French',
			es: 'Francés',
			fr: 'Français',
			it: 'Spagnolo',
			nl: 'Frans',
			'pt-BR': 'Francês'
		}
	},
	it: {
		name: {
			'en-US': 'Italian',
			es: 'Italiano',
			fr: 'Italien',
			it: 'Italiano',
			nl: 'Italiaans',
			'pt-BR': 'Italiano'
		}
	},
	nl: {
		name: {
			'en-US': 'Dutch',
			es: 'Neerlandés',
			fr: 'Néerlandais',
			it: 'Olandese',
			nl: 'Nederlands',
			'pt-BR': 'Neerlandês'
		}
	},
	'pt-BR': {
		name: {
			'en-US': 'Portguese (BR)',
			es: 'Portugués (BR)',
			fr: 'Portugais (BR)',
			it: 'Portoghese (BR)',
			nl: 'Portugees (BR)',
			'pt-BR': 'Portugûes (BR)'
		}
	}
};

export const DEFAULT_LANGUAGE_CODE: KnownLanguageCode = 'en-US';

export const LANGUAGE_CODES: readonly KnownLanguageCode[] = Object.keys(LANGUAGES).map(value => value as KnownLanguageCode);

export type Localizable<T> = Record<KnownLanguageCode, T>;

export type General = {
	EditThisPage: string;
	JoinOurCommunity: string;
};

export type NavbarLink = {
	link: string;
	title: string;
};

export type NavbarItem = NavbarLink;

export type SidebarLink = string | {
	link: string;
	name?: string;
	title: string;
	type?: string;
};

export type SidebarSection = {
	children: Array<SidebarLink | SidebarSection>;
	collapsable?: boolean;
	title: string;
};

export type SidebarItem = SidebarLink | SidebarSection;

export interface LocalizedSidebar {
	[partialUrl: string]: Array<SidebarItem> | LocalizedSidebar;
}

export type VersionedNavbar = Record<string, Array<NavbarItem>>;

export interface LocalizedSite {
	disabled?: boolean;
	title: string;
	description: string;
	general: General;
	navbar?: VersionedNavbar;
	sidebar?: LocalizedSidebar;
}

type BaseGitRepository = {
	branchName: string;
	pathInRepository?: string;
};

type GitRepository = BaseGitRepository & {
	type: 'github';
	name: string;
} | {
	type: 'git';
	baseUrl: URL;
};

export type Repository = GitRepository;

type EditUrlInfo = {
	editUrl: URL;
};

type RepositoryInfo = {
	repository: Repository;
}

export type EditInfo = EditUrlInfo | (Partial<EditUrlInfo> & RepositoryInfo);

export type Site = Localizable<LocalizedSite> & EditInfo & {
	communityUrl: URL;
	defaultLanguage: KnownLanguageCode;
};

export const PATTERN_LANGUAGE_CODE = /([a-z]{2}(?:-[A-Z]{2})?)/;

export function getLangCode(pathname: string) {
	const match = pathname.match(PATTERN_LANGUAGE_CODE);
	const langCode = match ? match[1] : DEFAULT_LANGUAGE_CODE;
	return langCode as KnownLanguageCode;
}
