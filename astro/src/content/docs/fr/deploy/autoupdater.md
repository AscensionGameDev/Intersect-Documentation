---
title: Mise à Jour Automatique
---


le stockage de fichier et la bande passante ont un coût! Nous n'avons pas les capacités ou les fonds nécessaires pour héberger vos données de jeu et les mises à jour pour vous. Vous devrez investir dans un plan d'hébergement web de votre choix pour pouvoir distribuer les mises à jour de votre jeu à vos joueurs.

Des sites statiques d'hébergement comme les pages Amazon S3 et GitHub fonctionneront bien, mais un hébergeur web avec la possibilité d'utiliser le php est à préférer pour [des mises à jour rapides et d'autre bénéfices](#advancedconfiguration) sur lesquels vous pouvez en apprendre d'avantage plus tard.


## Création

Pour créer une mise à jour rien de plus simple, ouvrez votre éditeur et cliquez le bouton `Outils > Packer Mise à Jour`. Il vous sera demandé de sélectionner un dossier vide, et après quelques traitements les fichiers de mise à jour apparaîtront dedans.

![Packer](https://www.ascensiongamedev.com/resources/filehost/04a7eded08d3e90c55ca21e8e5fabedd.png)


## Mise à jour

Utilisez FTP ou le programme de transfert de fichiers de votre choix pour mettre en ligne les contenus de votre mise à jour de votre dossier de mise à jour sur votre hébergeur web.

**Note:** Si vous utilisez FileZilla vous devez être sûr que vous utilisez des mises à jour binaires. Allez dans `Edit > Settings > File transfer settings > ASCII/Binary`. [Définissez le comme toujours binaire](https://www.ascensiongamedev.com/resources/filehost/ff040970742cd777a2c5a0b546fd7231.png).


## Configuration

Après avoir mis en ligne votre mise à jour ouvrez le navigateur web de votre choix et rendez vous au fichier update.json pour vérifier qu'il est bien en ligne, si vous pouvez voir votre fichier update.json dans votre navigateur web vous êtes prêt à poursuivre.

Copiez l'URL du fichier dans `Client and Editor/resources/config.json` dans le champ `UpdateUrl`.

Vous pouvez changer les graphismes et la police de l'écran de mise à jour, ils peuvent être trouvé dans l'annuaire `Client and Editor/Resources/Updater`.


## Mise à Jour Futures

Pour les packs de mise à jour à venir utilisez le bouton `Outils > Packer Mise à jour` dans l'éditeur et mettez en ligne la nouvelle mise à jour sur votre hébergeur web en écrasant tous les fichiers existants. Tous les nouveaux graphismes et les versions d'Intersect versions seront inclues et distribuées à vos joueurs la prochaine fois qu'il lanceront le jeu.


## Configuration Avancée

Les option de configuration avancée suivant sont complètement optionnels. Si vous ne savez pas exactement pourquoi vous voulez les utiliser alors ignorez les! Ces deux options requièrent que votre hébergeur web puisse se servir de pages php et exécuter des scripts php.


### Génération Données Meta Dynamique  (Optionnel, Beta)

A la place d'utiliser la fonction `Editeur -> Outils -> Packer Mise à jour` pour générer vos données meta update.json pour vous, vous pouvez utiliser le script `update.php`. Le script scannera votre hébergeur web pour les fichiers et génèrera automatiquement la configuration de mise à jour à la volée. C'est utile si vous voulez autoriser les autres membres de votre équipe à glisser -> dropper des actifs ou des mises à jour sur votre serveur web sans avoir à utiliser l'éditeur pour packer une mise à jour conséquente pour chaque petit changement.

L'inconvénient de ce script est que vérifier les mises à jour prendra un peu plus longtemps, donc il est préférable de l'utiliser par commodité durant le développement. Quand vous lancez votre jeu il est préférable d'utiliser les fichiers statiques update.json car il seront plus rapides et solliciterons moins votre serveur.

Après avoir placé le script dans votre dossier de mise à jour sur votre hébergeur web, modifiez votre `UpdateUrl` dans le fichier `Client and Editor/Resources/Config.json` pour pointer vers `update.php`.

[Téléchargement ici](https://www.ascensiongamedev.com/resources/filehost/1c6fa0679887918ed6d54b6609afd1ca.zip)


### Diffusion en Flux Continu des Téléchargements (Optionnel, Beta)

A la place d'avoir un client avec des centaines ou des milliers de fichiers HTTP de téléchargements depuis votre serveur web, vous pouvez recourir à votre client pour obtenir une liste de tous les fichiers en même temps et les renvoyer en une seule connection au travers d'une diffusion en flux continu. Si vous utilisez le script `update.php` vous pouvez aussi bien placer simplement au dessus ce script `stream.php` dans votre dossier de mise à jour et vous devriez être prêt.

Si vous voulez utiliser ce script avec des fichiers update.json statiques vous devrez modifier votre fichier `update.json` pour y inclure la ligne suivante sous la ligne `TrustCache`.

`'StreamingUrl': 'https://<path to stream.php>',`

[Téléchargement ici](https://www.ascensiongamedev.com/resources/filehost/972d4c5a35cc8a7c4930029b41b30360.zip)
