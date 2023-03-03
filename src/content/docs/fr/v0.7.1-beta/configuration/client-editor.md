---
title: Client et Editeur `config.json`
---

| Nom            | Type     | Exemple                           | Description                                                                                                                             |
| -------------- | -------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Host           | string   | localhost                         | L'adresse IP ou le nom d'hôte du serveur.                                                                                               |
| Port           | integer  | 5400                              | Le port du serveur.                                                                                                                     |
| GameFont       | string   | sourcesansproblack                | Le nom de la police à utiliser pour le rendu non-UI.                                                                                    |
| EntityNameFont | string   | sourcesansproblack                | Le nom de la police à utiliser pour les noms d'entités.                                                                                 |
| ChatBubbleFont | string   | sourcesansproblack                | Le nom de la police à utiliser pour les texte de bulle chat.                                                                            |
| ActionMsgFont  | string   | sourcesansproblack                | Le nom de la police à utiliser pour les messages d'actions.                                                                             |
| UIFont         | string   | sourcesansproblack,8              | Le nom et la taille de la police utilisée pour les fenêtre sans style (comme debug/admin) délimitées par des parenthèses (`name,size`). |
| ChatLines      | integer  | 100                               | Le nombre de ligne à sauvegarder pour le défilement retour du chat.                                                                     |
| MenuMusic      | string   | Game-Menu_Looping.ogg             | Le nom du fichier musiques à jouer sur le menu principal (Le fichier doit se trouver dans `resources/music`).                           |
| MenuBackground | string   | background.png                    | LE nom du fichier image à afficher sur le menu principal (Le fichier doit se trouver dans `resources/gui`).                             |
| IntroImages    | string[] |                                   |                                                                                                                                         |
| UpdateUrl      | string   | http://localhost:8080/update.json | L'URL pour aller au fichier du manifeste de mise à jour généré par l'éditeur (voir [Auto Updater](./deploy/autoupdater.html)).          |
