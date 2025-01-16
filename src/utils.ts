export function unique<T>(value: T, index: number, array: Array<T>) {
	return array.indexOf(value) === index;
}

export type FileSystemNode = { [key: string]: FileSystemNode };

export function treeFromPaths(paths: string[]): FileSystemNode {
	const root: FileSystemNode = {};
	for (const fsPath of paths) {
		const segments = fsPath.split('/');
		let current = root;
		for (const segment of segments) {
			if (!(segment in current)) {
				current[segment] = {};
			}

			current = current[segment]!;
		}
	}
	return root;
}

export function existsTree(tree: FileSystemNode, dirname: string): boolean {
	const segments = dirname.split('/');
	let current = tree;
	const visitedSegments: string[] = [];
	for (const segment of segments) {
		visitedSegments.push(segment);
		if (!(segment in current)) {
			return false;
		}

		current = current[segment]!;
	}

	return true;
}

export function readdirTree(tree: FileSystemNode, dirname: string): string[] {
	const segments = dirname.split('/');
	let current = tree;
	const visitedSegments: string[] = [];
	for (const segment of segments) {
		visitedSegments.push(segment);
		if (!(segment in current)) {
			throw new Error(`'${visitedSegments.join('/')}' does not exist in tree`);
		}

		current = current[segment]!;
	}

	return Object.keys(current);
}

export function markCaseInsensitive(text: string, search: string) {
	const normalizedText = text.toLocaleUpperCase();
	const normalizedSearch = search.toLocaleUpperCase();

	const matches: Array<string> = [];
	const markedText = [...text];
	let index = normalizedText.length;
	while (index > 0) {
		const markIndex = normalizedText.lastIndexOf(
			normalizedSearch,
			index - 1
		);
		if (markIndex > -1) {
			markedText.splice(
				markIndex + search.length,
				0,
				'\0'
			);
			markedText.splice(markIndex, 0, '\0');
			matches.push(
				text.slice(markIndex, markIndex + search.length)
			);
		}
		index = markIndex - 1;
	}

	return {
		markedText: markedText.join(''),
		matches: matches.filter(unique),
	} as const;
}

export function emphasizeMarked(
	html: string,
	search: string,
	tag = 'strong'
) {
	return html.replace(
		new RegExp(`\0(${search})\0`, 'gi'),
		(_, marked) => `<${tag}>${marked}</${tag}>`
	);
}
