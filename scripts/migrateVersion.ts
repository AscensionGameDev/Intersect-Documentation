import { Argument, program } from 'commander';
import {
	cp, mkdir, readdir, stat, unlink,
	writeFile
} from 'fs/promises';
import {
	basename,
	join, relative, resolve 
} from 'path';
import { valid } from 'semver';
import { exists } from '../src/lib/fs';

async function migrateLocale(
	cwd: string,
	version: string,
	collection: string,
	collectionPath: string,
	locale: string
) {
	const localePath = join(collectionPath, locale);
	const versionPath = join(localePath, `v${version}`);

	if (await exists(versionPath)) {
		console.warn(
			`Skipping content for '${collection}' for version '${version}' for ${locale} because it already exists in ${localePath}`
		);
		return;
	}

	const names = await readdir(localePath);

	// Omit pre-existing version directories
	const nonVersionNames = names.filter((name) => valid(name) === null);

	// Create the new version directory
	await mkdir(versionPath);

	console.group('Copying files to new version directory...');
	for (const name of nonVersionNames) {
		if (name.startsWith('.')) {
			// These are likely configuration files
			continue;
		}

		try {
			const sourcePath = join(localePath, name);
			const targetPath = join(versionPath, name);

			console.info(
				`Copying '${name}' from ${relative(cwd, sourcePath)} to '${relative(
					cwd,
					targetPath
				)}'`
			);
			await cp(sourcePath, targetPath, {
				errorOnExist: true,
				preserveTimestamps: true,
				recursive: true,
			});
		} catch (error) {
			console.groupEnd();
			console.error(error);

			console.warn(
				`Failed to migrate version '${version}' because an error occurred while copying '${name}', reverting changes from this command...`
			);
			await unlink(versionPath);
			return;
		}
	}

	console.groupEnd();
	console.info(
		`Finished creating a copy for version ${version} for ${locale}!`
	);
}

async function migrateCollection(
	cwd: string,
	version: string,
	contentPath: string,
	collection: string
) {
	const collectionPath = join(contentPath, collection);

	// Skip files (like config.ts)
	const collectionStat = await stat(collectionPath);
	if (!collectionStat.isDirectory()) {
		return;
	}

	for (const locale of await readdir(collectionPath)) {
		await migrateLocale(cwd, version, collection, collectionPath, locale);
	}
}

async function migrateLocalization(_cwd: string, version: string, localizationPath: string, locale: string) {
	const localeDir = join(localizationPath, locale);
	const localeVersionPath = join(localeDir, `v${version}.ts`);

	const localeLatestPath = join(localeDir, `latest.ts`);
	if (!await exists(localeLatestPath)) {
		throw new Error(`Localization files for ${locale} for latest are missing? Is this a new locale? Path: ${localeLatestPath}`);
	}

	if (!await exists(localeVersionPath)) {
		try {
			console.info(`Copying latest.ts to v${version}.ts for ${locale}...`);
			await cp(localeLatestPath, localeVersionPath, {
				errorOnExist: true,
				preserveTimestamps: true,
				recursive: true,
			});
		} catch (error) {
			console.groupEnd();
			console.error(error);
	
			console.warn(
				`Failed to migrate localization files for ${locale} for version '${version}' because an error occurred while copying 'latest.ts', reverting changes from this command...`
			);
			try {
				await unlink(localeVersionPath);
			} catch (_) {
				// do nothing
			}
			return;
		}
	} else {
		console.warn(`Localization files for ${locale} for v${version} already exist, skipping the copy from latest...`);
	}

	console.info(`Updating versions.ts for ${locale}...`);
	const versionsAvailable = (await readdir(localeDir))
		.map(n => basename(n, '.ts'))
		.filter(n => n !== 'versions' && (n === 'latest' || n.startsWith('v')))
		.toSorted((a, b) => a === 'latest' ? -1 : (b === 'latest' ? 1 : b.localeCompare(a)))
		.map(name => ({
			name,
			safeName: name.replace(/[-\.]/g, '_')
		}));
	const versionsSource = `import type { LocalizedSite } from '../../../i18n';

${versionsAvailable.map(({ name, safeName }) => `import * as ${safeName} from './${name}';`).join('\n')}

export const versions: Required<Pick<LocalizedSite, 'navbar' | 'sidebar'>> = {
	navbar: {
${versionsAvailable.map(({ name, safeName }) => `\t\t'${name}': ${safeName}.navbar,`).join('\n')}
	},
	sidebar: {
${versionsAvailable.map(({ name, safeName }) => `\t\t'${name}': ${safeName}.sidebar,`).join('\n')}
	},
};`;
	
	const versionsPath = join(localeDir, 'versions.ts');
	try {
		await writeFile(versionsPath, versionsSource, 'utf-8');
	} catch (error) {
		console.error(error);
		console.error(`Failed to write updated versions import to ${versionsPath}`);
		return;
	}

	console.info(`Done migrating localizations for v${version} for ${locale}`);
}

async function migrateVersion(...args: unknown[]) {
	const version = valid(args[0] as string);

	if (typeof version !== 'string') {
		throw new Error('<version> argument must be a valid semantic version!');
	}

	const cwd = process.cwd();
	console.info(`Running migration in: ${cwd}`);

	const contentPath = resolve(cwd, 'src', 'content');

	for (const collection of await readdir(contentPath)) {
		await migrateCollection(cwd, version, contentPath, collection);
	}

	const localizationPath = resolve(cwd, 'src', 'site', 'locales');
	const availableLocales = await readdir(localizationPath);
	for (const locale of availableLocales) {
		// Skip files (like index.ts)
		const localeStat = await stat(join(localizationPath, locale));
		if (!localeStat.isDirectory()) {
			continue;
		}

		await migrateLocalization(cwd, version, localizationPath, locale);
	}
}

program
	.version('0.1.0')
	.description('Copies current version files into a versioned subdirectory')
	.addArgument(new Argument('<version>').argRequired())
	.action(migrateVersion)
	.parse(process.argv);
