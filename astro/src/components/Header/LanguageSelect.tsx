/** @jsxImportSource react */
import type { FunctionComponent } from 'react';
import './LanguageSelect.css';
import {
	LANGUAGES, LANGUAGE_CODES, PATTERN_LANGUAGE_CODE 
} from '../../i18n';
import { SITE } from '../../site';

const LanguageSelect: FunctionComponent<{ lang: string }> = ({ lang }) => {
	return (
		<div className="language-select-wrapper">
			<svg
				className="translation"
				aria-hidden="true"
				focusable="false"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 88.6 77.3"
				height="1.2rem"
				width="1.2rem"
			>
				<path
					fill="currentColor"
					d="M61,24.6h7.9l18.7,51.6h-7.7l-5.4-15.5H54.3l-5.6,15.5h-7.2L61,24.6z M72.6,55l-8-22.8L56.3,55H72.6z"
				/>
				<path
					fill="currentColor"
					// eslint-disable-next-line max-len
					d="M53.6,60.6c-10-4-16-9-22-14c0,0,1.3,1.3,0,0c-6,5-20,13-20,13l-4-6c8-5,10-6,19-13c-2.1-1.9-12-13-13-19h8 c4,9,10,14,10,14c10-8,10-19,10-19h8c0,0-1,13-12,24l0,0c5,5,10,9,19,13L53.6,60.6z M1.6,16.6h56v-8h-23v-7h-9v7h-24V16.6z"
				/>
			</svg>
			<select
				className="language-select"
				value={lang}
				onChange={(e) => {
					const newLang = e.target.value;
					let actualDest = window.location.pathname.replace(
						PATTERN_LANGUAGE_CODE,
						newLang
					);
					if (actualDest == '/') actualDest = '/introduction';
					window.location.pathname = window.location.pathname.replace(
						PATTERN_LANGUAGE_CODE,
						newLang
					);
				}}
			>
				{LANGUAGE_CODES.filter(
					(langCode) => !(SITE[langCode]?.disabled ?? false)
				).map((langCode) => {
					const language = LANGUAGES[langCode];
					return (
						<option value={langCode} key={langCode}>
							{language.name[langCode]}
						</option>
					);
				})}
			</select>
			<svg
				className="dropdown"
				aria-hidden="true"
				focusable="false"
				role="img"
				fill="currentColor"
				height="0.75em"
				width="0.75em"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 330.00 330.00"
			>
				<path
					// eslint-disable-next-line max-len
					d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
				></path>
			</svg>
		</div>
	);
};

export default LanguageSelect;
