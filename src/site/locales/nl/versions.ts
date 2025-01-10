import type { LocalizedSite } from '../../../i18n';

import * as latest from './latest';
import * as v0_8_0_beta_121 from './v0.8.0-beta.121';
import * as v0_7_1_beta from './v0.7.1-beta';

export const versions: Required<Pick<LocalizedSite, 'navbar' | 'sidebar'>> = {
	navbar: {
		'latest': latest.navbar,
		'v0.8.0-beta.121': v0_8_0_beta_121.navbar,
		'v0.7.1-beta': v0_7_1_beta.navbar,
	},
	sidebar: {
		'latest': latest.sidebar,
		'v0.8.0-beta.121': v0_8_0_beta_121.sidebar,
		'v0.7.1-beta': v0_7_1_beta.sidebar,
	},
};