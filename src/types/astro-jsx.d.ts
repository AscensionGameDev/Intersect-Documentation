/// <reference lib="dom" />
/* eslint @typescript-eslint/no-unused-vars: off */
/* patches for astro-jsx.d.ts */
declare namespace astroHTML.JSX {
	interface HTMLAttributes {
		'is:inline'?: boolean;
	}
}
