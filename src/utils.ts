export function unique<T>(value: T, index: number, array: Array<T>) {
	return array.indexOf(value) === index;
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
