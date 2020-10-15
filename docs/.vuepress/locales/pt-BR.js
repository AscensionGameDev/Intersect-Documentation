module.exports = {
    code: 'pt-BR',
    locale: {
        lang: 'pt-BR',
        title: 'Intersect',
        description: 'O criador de mmorpg 2d moderno, open-source, gratuito'
    },
    themeConfig: {
        selectText: 'Linguagens',
        label: 'Portugûes (BR)',
        ariaLabel: 'Linguagens',
        editLinkText: 'Nos ajude a melhorar essa página.',
        nav: [
            {
                text: 'Documentos do usuário',
                link: '/',
            },
            {
                text: 'Referência API',
                link: '/api/v1/',
            },
            {
                text: 'Guias do desenvolvedor',
                link: '/dev/',
            },
            {
                text: 'Comunidade de Apoio',
                link: 'https://www.ascensiongamedev.com/forum/53-questions-and-answers/'
            }
        ],
        sidebar: {
            '/api/v1/': [
                {
                    title: 'Informação API',
                    collapsable: true,
                    children: [
                        '/api/v1/',
                        '/api/v1/introduction/setup.md',
                        '/api/v1/introduction/config.md',
                        '/api/v1/introduction/roles.md'
                    ]
                },
                {
                    title: 'Endpoints',
                    collapsable: true,
                    children: [
                        '/api/v1/endpoints/authentication.md',
                        '/api/v1/endpoints/admin.md',
                        '/api/v1/endpoints/chat.md',
                        '/api/v1/endpoints/info.md',
                        '/api/v1/endpoints/gameobjects.md',
                        '/api/v1/endpoints/users.md',
                        '/api/v1/endpoints/players.md',
                        '/api/v1/endpoints/variables.md',
                    ]
                },
                {
                    title: 'Avançado',
                    collapsable: true,
                    children: [
                        '/api/v1/advanced/securing.md',
                    ]
                },
            ],
            '/dev/': [
                {
                    title: 'Informação do desenvolvedor',
                    collapsable: true,
                    children: [
                        '/dev/',
                    ]
                },
                {
                    title: 'Começando',
                    collapsable: true,
                    children: [
                        '/dev/start/vs.md',
                        '/dev/start/github.md',
                        '/dev/start/compiling.md',
                        '/dev/start/layout.md',
                    ]
                },
                {
                    title: 'Fazendo mudanças',
                    collapsable: true,
                    children: [
                        '/dev/modify/procedure.md',
                        '/dev/modify/merging.md',
                        '/dev/modify/conflicts.md',
                    ]
                },
                {
                    title: 'Mantendo-se atualizado',
                    collapsable: true,
                    children: [
                        '/dev/pullrequests/pulling.md',
                    ]
                },
                {
                    title: 'Compartilhamento e contribuições',
                    collapsable: true,
                    children: [
                        '/dev/sharing/creating.md',
                        '/dev/sharing/applying.md',
                        '/dev/sharing/contributing.md',
                    ]
                },
                {
                    title: 'Avançado',
                    collapsable: true,
                    children: [
                        '/dev/advanced/database.md',
                        '/dev/advanced/packets.md',
                        '/dev/advanced/eventcommands.md',
                    ]
                },
            ],
            '/': [
                {
                    title: 'Informações do Projeto',
                    collapsable: true,
                    children: [
                        '/',
                        '/project/about.md',
                    ]
                },
                {
                    title: 'Começando',
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
                    title: 'Configuração',
                    collapsable: true,
                    children: [
                        '/configuration/client-editor.md',
                        '/configuration/server.md',
                        '/configuration/server-database.md',
                        '/configuration/server-security.md',
                        '/configuration/equipment.md',
                        {
                            title: 'Avançado',
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
                    title: 'Distribuição',
                    collapsable: true,
                    children: [
                        '/deploy/forwarding.md',
                        '/deploy/packing.md',
                        '/deploy/distributing.md',
                        '/deploy/autoupdater.md'
                    ]
                },
                {
                    title: 'Atualizando',
                    collapsable: true,
                    children: [
                        '/upgrade/upgrading.md',
                    ]
                },
            ],
        },
    }
};
