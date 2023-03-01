import { Argument, program } from 'commander';
import {
	cp, mkdir, readdir, stat, unlink
} from 'fs/promises';
import {
	join, relative, resolve
} from 'path';
import { valid } from 'semver';

async function migrateLocale(cwd: string, version: string, collectionPath: string, locale: string) {
	const localePath = join(collectionPath, locale);
	const versionPath = join(localePath, `v${version}`);
	const versionStat = await stat(versionPath).catch(error => {
		if (error.code === 'ENOENT') {
			return null;
		}

		throw new Error(error);
	});

	if (versionStat !== null) {
		console.error(`Skipping version '${version}' for ${locale} because it already exists in ${localePath}`);
		return;
	}

	const names = await readdir(localePath);

	// Omit pre-existing version directories
	const nonVersionNames = names.filter(name => valid(name) === null);

	// Create the new version directory
	await mkdir(versionPath);

	console.group('Copying files to new version directory...');
	for (const name of nonVersionNames) {
		try {
			const sourcePath = join(localePath, name);
			const targetPath = join(versionPath, name);

			console.info(`Copying '${name}' from ${relative(cwd, sourcePath)} to '${relative(cwd, targetPath)}'`);
			await cp(sourcePath, targetPath, {
				errorOnExist: true,
				preserveTimestamps: true,
				recursive: true,
			});
		} catch (error) {
			console.groupEnd();
			console.error(error);

			console.warn(`Failed to migrate version '${version}' because an error occurred while copying '${name}', reverting changes from this command...`);
			await unlink(versionPath);
			return;
		}
	}

	console.groupEnd();
	console.info(`Finished creating a copy for version ${version} for ${locale}!`);
}

async function migrateCollection(cwd: string, version: string, contentPath: string, collection: string) {
	const collectionPath = join(contentPath, collection);

	// Skip files (like config.ts)
	const collectionStat = await stat(collectionPath);
	if (!collectionStat.isDirectory()) {
		return;
	}

	for (const locale of await readdir(collectionPath)) {
		await migrateLocale(cwd, version, collectionPath, locale);
	}
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
}

program
	.version('0.1.0')
	.description('Copies current version files into a versioned subdirectory')
	.addArgument(new Argument('<version>').argRequired())
	.action(migrateVersion)
	.parse(process.argv);
