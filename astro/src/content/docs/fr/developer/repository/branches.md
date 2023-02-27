---
title: Branches
---


Le dépôt possède de multiples branches pour pouvoir séparer les versions multiples et permet de réparer les bugs à la fois sur les anciennes parutions et les actuelles, plutôt que de seulement inclure les réparations de bug dans la nouvelle parution et de dire aux personnes d' "attendre" jusqu'à ce qu'elle atteigne sa date de parution.

Actuellement, Intersect possède 3 branches séparées pour différentes versions.

|        Nom  | Version Actuelle | Notes                                                                         |
|------------:|-----------------|-------------------------------------------------------------------------------|
|      master | 0.6.1           | Reçois seulement les réparations de bug critiques, il est attendu qu'il ne soit pas souvent modifié.               |
|  prerelease | 0.6.2           | Reçois toutes les réparations de bug avec des alternatives relativement mineures, comme des fonctionnalités ayant un impact mineur sur le code. <br/><br/> **Seuls les changements de schéma de base de données critiques sont faits dans cette branche.** |
| development | 0.7.0           | Volatile. Peut inclure des changements majeurs à la fois sur la structure codebase et la structure database. |

Quand de nouvelles versions sont parues, la branche **prerelease** remplace la branche **master**.

Les parutions d'étape importantes (Beta 6, Beta 7, Beta 8, 1.0) resteront en **development** jusqu'à ce qu'elle soient prêtes pour que le public commence à l'utiliser et à la tester.

Quand des parutions d'étape importantes atteignent la **prerelease**, la **development** deviendra la parutions d'étape importante suivante. la branche **prerelease** est essentiellement une branche "parution candidature".

Quand des parutions d'étape importantes atteignent la **master**, la **prerelease** deviendra le patch de version suivant, et la **development** sera la parution d'étape importante suivante.

Pour les betas, les versions de parution d'étape importantes suivront ce modèle: `0.<beta number>.<patch number>`.
Pour les parutions post-1.0, le chiffrage de parution d'étape importante suivra ce modèle: `<major>.<minor>.<patch/hotfix>`.

Vous pouvez créer une branche et changer de branche en utilisant l'application de bureau GitHub en cliquant sur le menu déroulant de la branche:

![GitHub desktop app branch dropdown](https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png)

Quand vous créez une bifurcation vous devriez toujours aller chercher les derniers changements pour cette branche. Lors de la réparation d'un bug, une nouvelle branche basée sur la branche avec le numéro de version le plus bas affectée par le bug.

Un bénéfice du système d'engagement et de bifurcation est que nous pouvons fusionner les changements dans la master et ensuite fusionner les changements de la master dans la prerealease pendant le développement. De cette façon nous ne réparons pas les bugs indépendamment sur chaque branche à partir de rien et à la place nous avons seulement à résoudre les conflits dûs aux changements entre versions s'il y en a.

Les branches pour réparer des bugs sont habituellement nommées selon la convention suivante:

`fix-<issue number>-<bug name>`

Les branches pour implémenter de nouvelles fonctionnalités sont habituellement nommées selon la convention suivante:

`feature-<issue number>-<feature name>`
