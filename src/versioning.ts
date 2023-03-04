import type { KnownLanguageCode } from './i18n';

export type Version = `v${string}`;

export type VersionKey = Version | 'latest';

export type LabeledVersion = {
	label: Version | string;
	value: VersionKey;
};

export type VersionedLookup<TValue> = Record<VersionKey, Record<KnownLanguageCode, TValue>>;

const PATTERN_VERSION = /^v\d+(.\d+(.\d+)?)?(-[^+]+)?(\+.+)?$/;

export function getVersion(pathname: string): Version | undefined {
	const [possibleVersion] = pathname.split('/', 3).slice(1);
	return possibleVersion && PATTERN_VERSION.test(possibleVersion) ? (possibleVersion as Version) : undefined;
}
