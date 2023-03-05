import { simpleGit } from 'simple-git';

export type Metadata = {
	sha: string;
};

export async function getMetadata() {
	const sha = await simpleGit().revparse('HEAD');

	const metadata: Metadata = { sha };

	return metadata;
}
