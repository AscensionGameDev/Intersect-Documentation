---
title: Fusionner
---

Arrivé à ce point vous devriez avoir créé une branche, fait quelques modifications de code, engagé ces changements, testé si ils fonctionnent (avec un peu de chance), et vous êtes maintenant prêt à ramener ces changements dans une de vos branches principales (dans Master ou Development).

Nous appelons ce processus fusion et c'est vraiment simple, vous pouvez le faire via l'application Bureau GitHub ou via l'interface en ligne de Demande d'Extraction GitHub. Je vais vous montrer ces deux méthode ci-dessous.

## Fusionner avec le Bureau GitHub

Avant d'essayer de fusionner il est important que vous soyez passé sur la branche dans laquelle vous voulez effectuer la fusion. (Pas la branche où vous avez travaillé!) Sélectionnez cette branche dans l'application de Bureau GitHub.

![sélectionbase](https://www.ascensiongamedev.com/resources/filehost/193129a8fb4dd77d1eec2c29b2583df3.png)

Ensuite, cliquez sur la branche en haut et fusionner dans la Branche Actuelle

![commencerfusion](https://www.ascensiongamedev.com/resources/filehost/d22e9b7cbf41e3073217ad58a6597002.png)

Sélectionnez la branche sur laquelle vous avez travaillé et de laquelle vous voulez fusionner. Puis appuyez sur le bouton de fusion.

![sélectionnerbranche](https://www.ascensiongamedev.com/resources/filehost/cbb1f1c35f427e1025d4036032203f27.png)

Le Bureau GitHub vous montrera que la fusion à été effectuée avec succès.

![fusionréussie](https://www.ascensiongamedev.com/resources/filehost/55464e25d7bc626f09db13a49229474b.png)

Finalement mettez en avant votre branche avec les changements de fusion sur GitHub.

![miseenavant](https://www.ascensiongamedev.com/resources/filehost/d068a4be230a1b9dd5160cdec27854dd.png)

## Fusionner avec GitHub En Ligne

Autrement vous pouvez utiliser l'interface de requête d'extraction en ligne de GitHub pour gérer la fusion de branches. Si vous avez un réglage de protection de branche, ou si vous voulez fusionner dans votre branche principale pour permettre les revues alors la méthode ci-dessus utilisant l'application de bureau ne fonctionnera pas. En oûtre, l'interface de requête d'extraction est ce qui doit être utilisé pour apporter des mises à jour officielles dans votre repo privé et soumettre du code que vous avez écris pour contribuer au repo officiel vous devriez toujours choisir de faire ainsi. Créer une requête d'extraction est très simple.

Commencer par vous rendre sur GitHub.com et naviguez jusqu'à votre repo personnel. Cliquez sur l'étiquette Requête Extraction puis sur le bouton Nouvelle Requête d'Extraction.

![repo](https://www.ascensiongamedev.com/resources/filehost/c2325ab7d146e6c14c8ee0b8fd55126e.png)

Nous fusionnons le code à l'intérieur de nos propres repos actuellement donc assurez vous que le dépot de base et le dépôt de tête pointent vers votre repo.

![sélectionnerbase](https://www.ascensiongamedev.com/resources/filehost/233438cb778047f05be3123090091b91.png)

Vous voyez la flêche? Cela signifie que la sélection de droite sera fusionner vers la sélection de gauche. Nous voulons fusionner la branche sur laquelle nous travaillons dans la branche originelle avec laquelle nous avons commencé. Je fusionne ma branche propre dans développement.

![sélectionnerbranches](https://www.ascensiongamedev.com/resources/filehost/bd156fb7af53cdaf8d85815adc61a3d7.png)

une fois que les repos et les branches sont sélectionnées GitHub devrait vous signifier qu'il vous est possible de fusionner et vous pouvez créer une requête d'extraction.

![créerpr](https://www.ascensiongamedev.com/resources/filehost/ec2f2f1b96426a6cf319204c69d0d11f.png)

GitHub vous amènera à un écran final où vous pourrez fournir un titre et une description pour votre demande d'extraction. Une fois prêt vous devrez appuyer sur le bouton Créer Requête d'Extraction une dernière fois.

![submitpr](https://www.ascensiongamedev.com/resources/filehost/aad119f6989a96665daabbd920183621.png)

Avec la Requête d'Extraction ouverte vous pouvez finalement cliquer sur le bouton Fusionner requête d'extraction pour fusionner votre code.

![fusion](https://www.ascensiongamedev.com/resources/filehost/906da6cf3ccd473900c5b30c6768266f.png)

une fois la fusion complète vous pouvez finalement retourner à l'application de Bureau GitHub Desktop, sélectionner votre branche de base, et extraire les changements de GitHub. (Vous aurez peut être besoin de les chercher d'abord!)

![extraction](https://www.ascensiongamedev.com/resources/filehost/cfb1dc1b3d9c6cb5aef42d20eff0a3ed.png)
