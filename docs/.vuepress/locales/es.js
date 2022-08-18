module.exports = {
    code: 'es',
    locale: {
        lang: 'es',
        title: 'Documentación de Intersect',
        description: 'El creador moderno de MMORPG 2D gratuito y de código abierto.'
    },
    themeConfig: {
        selectText: 'Idiomas',
        label: 'Español',
        ariaLabel: 'Idiomas',
        editLinkText: 'Ayúdenos a mejorar esta página.',
        nav: [
            {
                text: 'Documentación de usuario',
                link: '/',
            },
            {
                text: 'Referencia para API Web',
                link: '/api/v1/',
            },
            {
                text: 'Guías de Desarrollador',
                link: '/developer/',
            },
            {
                text: 'Comunidad de soporte (Inglés)',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: 'Información de la API',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
                },
                {
                    title: 'Puntos de Conexión',
                    collapsable: true,
                    children: [
                        '/api/v1/endpoints/authentication.md',
                        '/api/v1/endpoints/admin.md',
                        '/api/v1/endpoints/chat.md',
                        '/api/v1/endpoints/gameobjects.md',
                        '/api/v1/endpoints/info.md',
                        '/api/v1/endpoints/logs.md',
                        '/api/v1/endpoints/players.md',
                        '/api/v1/endpoints/users.md',
                        '/api/v1/endpoints/variables.md',
                    ]
                },
                {
                    title: 'Avanzado',
                    collapsable: true,
                    children: [
                        '/api/v1/advanced/securing.md',
                    ]
                },
            ],
            '/developer/': [
                {
                    title: 'Introducción',
                    collapsable: true,
                    children: [
                        '/developer/',
                    ]
                },
                {
                    title: 'Primeros pasos',
                    collapsable: true,
                    children: [
                        '/developer/start/vs.md',
                        '/developer/start/github.md',
                        '/developer/start/compiling.md'
                    ]
                },
                {
                    title: 'Repositorio',
                    collapsable: true,
                    children: [
                        '/developer/repository/',
                        '/developer/repository/branches.md',
                        '/developer/repository/file-structure.md',
                        '/developer/repository/forking.md'
                    ]
                },
                {
                    title: 'Realizar cambios',
                    collapsable: true,
                    children: [
                        '/developer/modify/procedure.md',
                        '/developer/modify/merging.md',
                        '/developer/modify/conflicts.md',
                    ]
                },
                {
                    title: 'Mantenerse al día',
                    collapsable: true,
                    children: [
                        '/developer/pullrequests/pulling.md',
                    ]
                },
                {
                    title: 'Compartir y contribuir',
                    collapsable: true,
                    children: [
                        '/developer/sharing/creating.md',
                        '/developer/sharing/applying.md',
                        '/developer/sharing/contributing.md',
                    ]
                },
                {
                    title: 'Avanzado',
                    collapsable: true,
                    children: [
                        '/developer/advanced/database.md',
                        '/developer/advanced/packets.md',
                        '/developer/advanced/eventcommands.md',
                    ]
                },
            ],
            '/': [
                {
                    title: 'Información del Proyecto',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Primeros pasos',
                    collapsable: true,
                    children: [
                        '/start/download.md',
                        '/start/setup.md',
                        '/start/login.md',
                        '/start/overview.md',
                    ]
                },
                {
                    title: 'Editores',
                    collapsable: true,
                    children: [
                        '/design/animations.md',
                        '/design/classes.md',
                        '/design/conditions.md',
                        '/design/crafting.md',
                        '/design/items.md',
                        '/design/lighting.md',
                        '/design/mapping.md',
                        '/design/npcs.md',
                        '/design/projectiles.md',
                        '/design/quests.md',
                        '/design/resources.md',
                        '/design/shops.md',
                        '/design/spells.md',
                        '/design/resources.md',
                        '/design/time.md',
                        '/design/world.md',
                    ]
                },
                {
                    title: 'Eventos',
                    collapsable: true,
                    children: [
                        '/events/introduction.md',
                        '/events/commands.md',
                        '/events/pages.md',
                        '/events/common.md',
                        '/events/examples.md',
                    ]
                },
                {
                    title: 'Configuración',
                    collapsable: true,
                    children: [
                        '/configuration/client-editor.md',
                        '/configuration/server.md',
                        '/configuration/server-database.md',
                        '/configuration/server-security.md',
                        '/configuration/equipment.md',
                        {
                            title: 'Avanzado',
                            collapsable: true,
                            children: [
                                '/advanced/assets.md',
                                '/advanced/fonts.md',
                                '/advanced/formulas.md',
                                '/advanced/translations.md',
                                '/advanced/interface.md',
                                '/advanced/zdimensions.md',
                                '/advanced/sizes.md',
                                '/advanced/passwords.md',
                            ]
                        }
                    ]
                },
                {
                    title: 'Despliegue',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: 'Actualizando',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    }
};
