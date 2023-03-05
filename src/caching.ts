export function getCacheStrategy(
	request: RequestInfo | URL,
	sha: string
): RequestCache {
	const storedSha = localStorage.getItem('sha');

	try {
		if (sha !== storedSha) {
			caches.delete(request.toString());
			return 'no-cache';
		} else {
			return 'force-cache';
		}
	} finally {
		if (sha !== null) {
			localStorage.setItem('sha', sha);
		} else {
			localStorage.removeItem('sha');
		}
	}
}
