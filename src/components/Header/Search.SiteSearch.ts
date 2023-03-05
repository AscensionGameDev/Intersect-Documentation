import type { KnownLanguageCode } from '../../i18n';
import type { IndexedDocument } from '../../pages/search/[langCode].json';

import { getCacheStrategy } from '../../caching';
import { buildSlug } from '../../slugs';
import { emphasizeMarked, markCaseInsensitive } from '../../utils';
import {
	VersionKey, VersionedLookup, getVersion
} from '../../versioning';

type SearchStatus = 'empty' | 'has-error' | 'has-results' | 'loading';

const SEARCH_STATUSES: readonly [...SearchStatus[]] = [
	'empty',
	'has-error',
	'has-results',
	'loading',
];

class SiteSearch extends HTMLElement {
	private readonly _langCode: KnownLanguageCode;
	private readonly _loading: Promise<VersionedLookup<IndexedDocument[]>>;
	private readonly _sha: string;
	private readonly _version: VersionKey;

	constructor() {
		super();

		const langCode = this.getAttribute('lang-code') ?? 'en-US';
		this._langCode = langCode as KnownLanguageCode;

		const sha = this.getAttribute('sha');
		if (sha === null) {
			throw new Error(
				'This needs to be in a git repository, failed to get current commit SHA.'
			);
		}
		this._sha = sha;

		this._version = getVersion(location.pathname) ?? 'latest';

		const template = document.querySelector(
			'template[name="site-search"]'
		) as HTMLTemplateElement;

		const shadowRoot = this.attachShadow({ mode: 'closed' });
		const shadowProxy = new Proxy<
			Record<string | number | symbol, any>
		>(this, {
			get: (target, key) =>
				key === 'shadowRoot' ? shadowRoot : target[key],
			set: (target, key, value) => (target[key] = value),
		});

		shadowRoot.appendChild(template.content.cloneNode(true));

		const searchContainer = shadowRoot.querySelector(
			'.search-container'
		) as HTMLDivElement;

		searchContainer.classList.add('loading');

		const modalContainer = searchContainer.querySelector(
			'.modal.container'
		) as HTMLElement;
		modalContainer.addEventListener('click', ({ target }) => {
			if (target === modalContainer) {
				modalContainer.classList.remove('open');
			}
		});
		modalContainer.addEventListener('keypress', (event) => {
			console.log(event);
		});

		const dummyTrigger = searchContainer.querySelector(
			'button.dummy.trigger'
		) as HTMLButtonElement;

		const input = searchContainer.querySelector(
			'input'
		) as HTMLInputElement;

		if (dummyTrigger) {
			dummyTrigger.addEventListener('click', () => {
				modalContainer.classList.add('open');
				input.focus();
			});
		}

		this.loadData = this.loadData.bind(shadowProxy);
		this.setStatus = this.setStatus.bind(shadowProxy);
		this.updateResults = this.updateResults.bind(shadowProxy);

		input?.addEventListener('input', (event) =>
			this.updateResults(event as InputEvent)
		);

		this._loading = this.loadData();
	}

	private async loadData() {
		const searchContainer =
			this.shadowRoot?.querySelector('.search-container');
		if (!searchContainer) {
			throw new Error('Invalid container!');
		}

		const url = `/search/${this._langCode}.json`;
		const cache = getCacheStrategy(url, this._sha);

		const searchResponse = await fetch(url, {
			cache,
		});

		if (!searchResponse.ok) {
			searchContainer.classList.add('has-error');
			console.log('error');
			return {} as any;
		}

		try {
			return (await searchResponse.json()) as Record<
				KnownLanguageCode,
				IndexedDocument[]
			>;
		} catch (error) {
			console.error(error);
			searchContainer.classList.add('has-error');
			return {} as any;
		} finally {
			searchContainer.classList.remove('loading');
		}
	}

	private setStatus(status: SearchStatus): void;
	private setStatus(status: 'has-error', message: string): void;
	private setStatus(status: SearchStatus, message?: string) {
		const searchContainer =
			this.shadowRoot?.querySelector('.search-container');
		if (!searchContainer) {
			return;
		}

		if (message) {
			const errorContainer = searchContainer.querySelector('.error');
			if (errorContainer) {
				errorContainer.textContent = message;
			} else {
				console.error(
					`Failed to get error container, unable to show message: ${message}`
				);
			}
		}

		const toDisable = SEARCH_STATUSES.filter((name) => name !== status);
		for (const name of toDisable) {
			searchContainer.classList.remove(name);
		}

		searchContainer.classList.add(status);
	}

	private async updateResults(event: InputEvent) {
		if (!this.shadowRoot) {
			this.setStatus(
				'has-error',
				'Display error, please try refreshing the page!'
			);
			console.error(new Error('Missing shadow root!'));
			return;
		}

		const target = event.target as HTMLInputElement;

		const data = await this._loading;

		const { value: query } = target;

		const versionSpace = data[this._version];
		if (!versionSpace) {
			return;
		}

		const searchSpace = versionSpace[this._langCode];

		const results = !query
			? []
			: searchSpace.filter(
				(entry) =>
					entry.title.includes(query) ||
					entry.description?.includes(query) ||
					entry.pathname.includes(query)
			);

		const resultsContainer = this.shadowRoot?.querySelector('.results');
		if (!resultsContainer) {
			this.setStatus(
				'has-error',
				'Display error, please try refreshing the page!'
			);
			console.error(new Error('Missing results container!'));
			return;
		}

		const resultElements = results.map(({ pathname, title }) => {
			const result = document.createElement('span');

			const resultLink = document.createElement('a');
			const slug = buildSlug(this._langCode, pathname, this._version);
			resultLink.href = slug;

			resultLink.textContent = markCaseInsensitive(
				title,
				query
			).markedText;
			resultLink.innerHTML = emphasizeMarked(
				resultLink.innerHTML,
				query
			);

			result.appendChild(resultLink);
			return result;
		});

		while (resultsContainer.lastChild) {
			resultsContainer.removeChild(resultsContainer.lastChild);
		}

		for (const resultElement of resultElements) {
			resultsContainer.appendChild(resultElement);
		}

		if (resultElements.length > 0) {
			this.setStatus('has-results');
		} else {
			this.setStatus('empty');
		}
	}
}

if (!customElements.get('site-search')) {
	customElements.define('site-search', SiteSearch);
}
