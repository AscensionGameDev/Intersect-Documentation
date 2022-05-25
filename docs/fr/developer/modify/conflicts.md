# Gérer les Conflits
Un conflit de fusion se produit quand vous essayez de fusionner des branches où les mêmes lignes ou sections de code on été modifiées. Malheureusement dans ces cas là, Git requiert un peu d'aide pour arranger les choses.

Que vous travailliez avec des requêtes d'extraction ou que vous essayez de fusionner localement des branches vous aurez éventuellement affaire à un conflit de fusion.

Dans le cas d'un conflit de fusion Git vous alertera sur les fichiers qui ont besoin d'attention. A l'intérieur de chaque fichier vous trouverez des blocage de conflit.

![alerteconflit](https://www.ascensiongamedev.com/resources/filehost/46efc74d34c68ffe9a424b898f365cb8.png)

Voici un conflit auquel j'ai eu affaire récemment.

Le code original était le suivant:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
);
```

Nous travaillions sur la refactorisation de notre code en deux branches différentes en même temps. Dans une branche nous remplacions les utilisations du client avec ceux du joueur. Dans l'autre branche nous refactorions les couleurs.

Au moment de fusionner la seconde branche je devais résoudre le conflit suivant:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
<<<<<<< HEAD
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
=======
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
>>>>>>> updating-colors
);
```

Les ======= séparent le code des deux branches. Dans la moitié supérieure nous avons changé client à player. Dans la moitié inférieure nous avons changé CustomColors.NoTarget par CustomColors.Combat.NoTarget.

Dans certains cas vous déciderez de grader le code du dessus dans d'autres vous déciderez de garder le code du dessous. Dans ce cas nous voulons conserver le code des deux donc j'ai mis à jour le fichier manuellement pour finir avec le code.

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
);
```

Après avoir résolu le conflit, retirez les marqueurs de conflit et sauvegardez le fichier GitHub autorisant la fusion pour procéder comme prévu.

![fusionnable](https://www.ascensiongamedev.com/resources/filehost/98036a1ec4daea465a9526987444d8c7.png)

Dans vos efforts de programmation vous serez amené à rencontrer des conflits de fusions. Aussi ennuyeux soit-ils ils sont généralement assez simple à régler. Heureusement cet exemple est utile pour gérer ce processus.
