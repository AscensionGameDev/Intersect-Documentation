---
title: Base de Données
---


Intersect possède 2 bases de données, une qui stocke les données de jeu comme les objets, les cartes, les ressources, les évènements, etc et une autre qui stocke toutes les données relatives aux comptes du joueur.

Les tableaux des 2 bases de données sont générés automatiquement en fonction d'un contexte. Le player context et le game context sont définis dans les fichiers source suivants:
 - Intersect.Server/Database/GameData/GameContext.cs
 - Intersect.Server/Database/PlayerData/PlayerContext.cs

Les Contextes consistent à utiliser des DBSets qui finissent par devenir des tableaux. Les DBSets sont créés depuis les classes C#.

Le contexte classes définit aussi les relations entre les tableaux. Vous pouvez en apprendre plus sur ceci dans la documentation Coeur du Cadre D'entité si cela vous intéresse.


## Champs de Base de Données

Les champs sont automatiquement créés des propriétés publiques d'une classe à peu près comme les tableaux sont créés automatiquement des classes à partir des DBSets dans un contexte.

Si vous regardez la classe Utilisateurs dans le serveur (Interect.Server/Database/PlayerData/User.cs) vous verrez des champs pour l'id utilisateur, le nom, le mot de passe, le salt, l'email et plus.

Veuillez noter, que le Cadre d'Entité peut seulement supporter les types basiques (integers, strings, blobs, et les références aux autres classes qui existent sous forme de DBSet). Dû à ces limitations nous désignons certains champs complexes comme `[NonMappé]` et avons un second champ de chaîne de caractère qui converti un champ complexe en json. Pour un exemple de ceci voir User.Power et User.PowerJson. Notez comme la propriété de PowerJson possède une propriété de nom de colonne donc elle est stockée dans la base de données dans le champ Power.


## Ajouter des Champs

Pour ajouter un champ à la base de donnée, créez une nouvelle propriété publique dans la classe qui est stockée à l'intérieur du Cadre d'Entité. Dans cet exemple je vais ajouter un champ pour chaque utilisateur qui piste leur dernière adresse ip utilisée.

J'ai ajouté la propriété suivante à la classe User:
```
public string LastUsedIp { get; set; }
```

## Créer une Migration

Après avoir apporté des changements aux classes du Cadre d'Entités vous devrez créer une migration. Pour créer une migration, il y a pas mal d'étapes de réglages:

- [définissez votre projet commencé sur le serveur Intersect, et le type de construction NoFody](https://www.ascensiongamedev.com/resources/filehost/13a8de43d24b7595cacb37c5c99c65f1.png)
- [Maintenant construisez votre serveur. La construction avec la configuration NoFody génèrera une poignée de dlls requis.](https://www.ascensiongamedev.com/resources/filehost/73271e21395e697efb06cf7d28f0f14d.png)
- [Dans VS ouvrez une Console de Gestion de Pack Nuget. (Outils -> Gestion de Pack Nuget -> Console de Gestion de Pack)](https://www.ascensiongamedev.com/resources/filehost/c51298fbaf5e35a654b43c915ab5375f.png)
- [A l'intérieur de la Console de Gestion de Pack Nuget définissez votre projet par défaut dans Intersect.Server](https://www.ascensiongamedev.com/resources/filehost/2eea276e85b6258c5b844f392acdfd15.png)

Maintenant vous êtes prêt à générer la migration. Entrez la commande suivante dans la console de gestion de pack:
```
Add-Migration -Context [ContextHere] [InsertMigrationNameHere]
```

Remplacez `[ContextHere]` par GameContext ou PlayerContext en fonction de la base de données que vous avez modifiée.

Remplacez `[InsertMigrationNameHere]` par un court identifiant expliquant à quoi la migration sert.

Dans l'exemple j'ai ajouté une propriété LastUsedId à la classe Users. Dans ce cas j'utiliserai la commande suivante:
```
Add-Migration -Context PlayerContext AddingLastUsedIpToUsers
```

Votre migration devrait apparaître comme un [fichier code source](https://www.ascensiongamedev.com/resources/filehost/500983d59ef1b372947c3c2e9ff5aa47.png). Sauvegardez le.

Maintenant nous avons effectués les changements de la configuration de la solution à partir de NoFody pour Débugger et faire fonctionner votre serveur.

Vous serez gratifié d'une [invitation de migration](https://www.ascensiongamedev.com/resources/filehost/a0eca1c08ed9ad5b5324ef4502cded49.png).


## Limitations de Migration

Dû aux (actuelles) limitations, les champs Sqlite ne peuvent pas être renommés ou retirés. Nous avons quelques champs que nous gardons à disposition qui ne sont pas utilisés dû à ces limitations. Il est attendu que cette fonctionnalité soit disponibles prochainement.


## Les Migrations sont à Sens Unique

Malheureusement les migrations sont à sens unique dû aux limitations avec le Sqlite. Si les utilisateurs veulent désinstaller des modifications de source qui altèrent la base de données ils devront utiliser des outils extérieurs pour retirer les champs de la base de données ou revenir à une version précédente à celle où les modifications ont été installées.





