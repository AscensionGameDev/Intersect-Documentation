/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const CLASS_MOBILE_SIDEBAR_TOGGLE = 'mobile-sidebar-toggle';

const MenuToggle: FunctionalComponent = () => {
	const [sidebarShown, setSidebarShown] = useState(false);

	useEffect(() => {
		if (sidebarShown) {
			document.body.classList.add(CLASS_MOBILE_SIDEBAR_TOGGLE);
		} else {
			document.body.classList.remove(CLASS_MOBILE_SIDEBAR_TOGGLE);
		}
	}, [sidebarShown]);

	return (
		<button
			type="button"
			aria-pressed={sidebarShown ? 'true' : 'false'}
			id="menu-toggle"
			onClick={() => setSidebarShown(!sidebarShown)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<span className="sr-only">Toggle sidebar</span>
		</button>
	);
};

export default MenuToggle;
