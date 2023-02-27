---
title: Créer des Patchs
---


Un patch Git est un fichier texte qui contient une ou plusieurs engagements Git. En utilisant GitHub vous pouvez très facilement exporter votre travail dans des patchs pour pouvoir le distribuer extérieurement par fusion caractérisée et des requêtes d'extraction. Utiliser des patchs est la méthode defacto pour partager des éditions de code sur Ascension Game Dev.

La meilleure méthode est de créer une bifurcation de la branche master ou development, faire vos changements, les engager puis de créer un patch basé sur votre branche.

Ouvrez l'invite de commande dans votre annuaire de dépôt local. Ceci peut être fait simplement en  cliquant Dépôt -> Ouvrir Dans Invite Commande dans le Bureau GitHub.

![invitecommande](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

Ensuite tapez la commande suivante.Assurez vous d'être toujours sur la branche où vous avez effectués vos modifications. Dans la commande remplacez master si vous avez bifurqué originellement depuis development.

```
git format-patch master --stdout > patchName.patch
```

![créerpatch](https://www.ascensiongamedev.com/resources/filehost/ad6434b2e74bb658b8565b6dd227d961.png)

Le fichier patch que vous avez créé peut être trouvé dans l'annuaire de votre dépôt local.

Vous pouvez uploader votre patch sur [Diffy](https://diffy.org) pour voir ses contenus.
