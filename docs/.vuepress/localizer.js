const availableLocales = require('./locales');

function mapLocaleToVuepressLocales({ code, locale }) {
    return { [`/${code}/`]: locale };
}

function mapUrl(code, url) {
    if (/^https?:\/\//i.test(url)) {
        return url;
    }

    return `/${code}${url}`;
}

function mapNav(code, nav) {
    return nav.map(navItem => ({
        ...navItem,
        link: mapUrl(code, navItem.link)
    }));
}

function mapSidebarItems(code, sidebarItems) {
    return sidebarItems.map(sidebarItem => {
        switch (typeof sidebarItem) {
            case 'string':
                return mapUrl(code, sidebarItem);

            case 'object':
                if (Array.isArray(sidebarItem)) {
                    return [
                        mapUrl(sidebarItem[0]),
                        ...sidebarItem.slice(1)
                    ];
                }

                return {
                    ...sidebarItem,
                    children: mapSidebarItems(code, sidebarItem.children || [])
                };

            default:
                console.error(`Unsupported sidebar item type: ${typeof sidebarItem}`);
        }
    });
}

function mapSidebar(code, sidebar) {
    if (Array.isArray(sidebar)) {
        return mapSidebarItems(code, sidebar);
    }

    const sidebarKeys = Object.keys(sidebar);
    return Object.assign({},
        ...sidebarKeys.map(sidebarKey => ({
            [mapUrl(code, sidebarKey)]: mapSidebarItems(code, sidebar[sidebarKey])
        }))
    );
}

function mapLocaleToVuepressThemeConfigLocales({ code, themeConfig }) {
    const { nav, sidebar } = themeConfig;
    return {
        [`/${code}/`]: {
            ...themeConfig,
            nav: mapNav(code, nav),
            sidebar: mapSidebar(code, sidebar)
        }
    };
}

module.exports = {
    locales: Object.assign({}, ...availableLocales.map(mapLocaleToVuepressLocales)),
    themeConfig: {
        locales: Object.assign({}, ...availableLocales.map(mapLocaleToVuepressThemeConfigLocales))
    }
};

if (process.env.DEBUG) {
    const fs = require('fs');
    try { !fs.existsSync('./.temp') && fs.mkdirSync('./.temp'); } catch (error) { console.error(error); }
    fs.writeFileSync(`./.temp/locales.json`, JSON.stringify(module.exports, null, 2), 'utf-8');
    process.exit(0);
}
