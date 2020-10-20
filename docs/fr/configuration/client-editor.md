# Client et Éditeur `config.json`

| Nom           | Type     | Example                           | Description                                                                                                    |
|----------------|----------|-----------------------------------|----------------------------------------------------------------------------------------------------------------|
| Host           | string   | localhost                         | L'adresse IP ou le nom d’hôte du serveur.                                                                     |
| Port           | integer  | 5400                              | Le port utilisé par le serveur.                                                                                |
| GameFont       | string   | sourcesansproblack                | Le nom de la police de caractère à utiliser pour les rendus hors UI.                                           |
| EntityNameFont | string   | sourcesansproblack                | Le nom de la police de caractère à utiliser pour les noms des entités.                                        |
| ChatBubbleFont | string   | sourcesansproblack                | Le nom de la police de caractère à utiliser pour les bulles de textes.                                         |
| ActionMsgFont  | string   | sourcesansproblack                | Le nom de la police de caractère à utiliser pour les messages d'action.                                        |
| UIFont         | string   | sourcesansproblack,8              | Le nom et taille de la police de caractère à utiliser pour les fenêtres non personnalisées (débogue/admin) séparé par une virgule (`nom,taille`). |
| ChatLines      | integer  | 100                               | Le nombre de lignes que le chat sauvegarde en défilement arrière.                                              |
| MenuMusic      | string   | Game-Menu_Looping.ogg             | Le nom de la piste sonore a joué sur le menu principal (le fichier doit être dans `resources/music`).          |
| MenuBackground | string   | background.png                    | Le nom de l'image à afficher sur le menu principal (le fichier doit être dans `resources/gui`).                |
| IntroImages    | string[] |                                   |                                                                                                                |
| UpdateUrl      | string   | http://localhost:8080/update.json | L'adresse URL dans le fichier de mise à jour généré par l'éditeur (voir [Mise à jour automatique](./deploy/autoupdater.html)).   |
