import { type KnownLanguageCode } from "../../src/i18n";

/*
	{ group: 'controller', key: 'OAuth', titleKey: 'authentication' },
	{ group: 'controller', key: 'Info', titleKey: 'server_info' },
	{ group: 'controller', key: 'User', titleKey: 'users' },
	{ group: 'controller', key: 'Player', titleKey: 'players' },
	{ group: 'controller', key: 'Guild', titleKey: 'guilds' },
	{ group: 'controller', key: 'Variables', titleKey: 'server_variables' },
	{ group: 'controller', key: 'Chat', titleKey: 'chat' },
	{ group: 'controller', key: 'Logs', titleKey: 'logging' },
	{ group: 'controller', key: 'RootInfo', ignore: true },
	{ group: 'controller', key: 'Demo', ignore: true },
	{ group: 'controller', titleKey: (g, k) => (k ? `${g}_${k}` : g).toLocaleLowerCase() },
	{ group: 'enum', key: 'AdminAction', titleKey: 'admin_actions' },
     */

const SampleTitles = {
    authentication: 'Authentication',
    server_info: 'Server Info',
    users: 'Users',
    players: 'Players',
    guilds: 'Guilds',
    server_variables: 'Server Variables',
    chat: 'Chat',
    logging: 'Logging',
    admin_actions: 'Admin Actions',
    game_objects: 'Game Objects',
};

export type TitleKey = keyof typeof SampleTitles;
export const TitleKeys = Object.keys(SampleTitles) as TitleKey[];

export const LocalizedTitles: Record<KnownLanguageCode, Record<TitleKey, string>> = {
    "en-US": SampleTitles,
    es: {
        authentication: 'Authentication',
        server_info: 'Información del Servidor',
        users: 'Usuarios',
        players: 'Players',
        guilds: 'Guilds',
        server_variables: 'Variables del Servidor',
        chat: 'Chat',
        logging: 'Logging',
        admin_actions: 'Acciones de Administrador',
        game_objects: 'Objetos del juego'
    },
    fr: {
        authentication: 'Authentification',
        server_info: 'Informations Serveur',
        users: 'Utilisateurs',
        players: 'Joueurs',
        guilds: 'Guilds',
        server_variables: 'Server Variables',
        chat: 'Chat',
        logging: 'Logging',
        admin_actions: 'Actions administrateurs',
        game_objects: 'Objets du jeu',
    },
    it: {
        ...SampleTitles,
        authentication: 'Autenticazione',
        users: 'Utente',
        players: 'Giocatore',
        chat: 'Chat',
        admin_actions: 'Azioni dell\'amministratore'
    },
    nl: {
        ...SampleTitles,
    },
    "pt-BR": {
        authentication: 'Autenticação',
        server_info: 'Server Info',
        users: 'Users',
        players: 'Players',
        guilds: 'Guilds',
        server_variables: 'Server Variables',
        chat: 'Chat',
        logging: 'Logging',
        admin_actions: 'Admin Actions',
        game_objects: 'Objetos de Jogo',
    },
};