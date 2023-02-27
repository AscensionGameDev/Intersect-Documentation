---
title: Distribution
---


Une fois que vous avez un jeu fonctionnel vous voudrez le partager avec vos amis. Ceci vous donnera une vue d'ensemble de comment préparer votre jeu pour la distribution et vous expliquera quels fichiers envoyer à vos joueurs.


## Préparation

Avant d'envoyer votre jeu à quelqu'un vous devez remplir votre adresse ip d'hébergeur ou de domaine et la reporter dans le fichier `Client and Editor/Resources/Config.json`.

L'hôte et le port peuvent généralement être trouvés sur votre console serveur.

![InfoConnection](https://www.ascensiongamedev.com/resources/filehost/70a5bade6f21a447be2fc5cd67f595e2.png)

Entrez l'hôte et le port dans vos configuration clients comme suit:

![Configuration](https://www.ascensiongamedev.com/resources/filehost/92bf25d1b796322e3b44538ae614b33f.png)

Si il est impossible au joueur de se connecter à votre serveur veuillez s'il vous plaît [lire ce topic traitant des firewalls et du transfert de port](https://www.ascensiongamedev.com/topic/3432-read-first-getting-your-game-online/), il contient des informations supplémentaires sur comment recevoir de l'aide si nécessaire.


## Autonomie

Si vous voulez distribuer votre jeu sans aucune sorte de possibilité de mise à jour vous devrez envoyer toutes les ressources d'avance. Créer un zip archive ou installateur avec les fichiers suivants:

- Intersect Client.exe
- Intersect Client.pdb
- Resources/*.*

**Note:** Resources/mapcache.db est pour les éditeurs, et peut devenir relativement lourde en poids de données. Il est préférable de l'effacer, et vous devriez supprimer ce fichier plutôt que de l'envoyer à vos joueurs.


## Outil de Mise à Jour Automatique

Si vous voulez distribuer votre jeu en utilisant l'outil de mise à jour Intersect alors les fichiers à inclure dans votre archive installateur/zip sont un peu plus nombreux. Cliquez ici pour les instructions sur comment [régler et configurer votre outil de mise à jour](autoupdater.md).

Les fichiers que vous devrez inclure sont les suivants:
- Intersect Client.exe
- Intersect Client.pdb
- Resources/Config.json
- Resources/Client_Strings.json
- Resources/Updater/*.*


## Notes Importantes

Si vous distribuez votre jeu avec un installateur, définissez la cible d'installation par défaut dans l'annuaire `C:\Users\<Username>\AppData\Local\<GameName>` à la place des dossiers Program Files or Program Files (x86) ainsi vos utilisateurs n'auront pas besoin de droits admin exécuter ou mettre à jour votre jeu!
