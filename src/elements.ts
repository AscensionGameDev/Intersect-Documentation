export function listenToEventFromAll(
	selector: string,
	event: string,
	listener: EventListener
) {
	const elements = document.querySelectorAll(selector);
	for (const element of elements) {
		element.addEventListener(event, listener);
		listener({ target: element } as unknown as Event);
	}
}
