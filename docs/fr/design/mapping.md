# Mapping

Une large majorité du temps passé à créer un ORPG 2D le sera à concevoir des cartes afin de créer un monde de jeu étendu.

Les étapes suivantes vous préparerons à créer votre première carte.

**Commencer le Mapping:**
>- Cliquez sur l' **Outil Stylo** ![Outil Stylo](https://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png) dans la barre de menu au dessus de votre carte.
>- Sélectionnez **Cases** dans le panneau **Couche Carte**.
>- Utilisez votre souris pour sélectionner une case ou un groupe de cases à placer sur votre carte vide. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
>- Finalement cliquez et glisser votre souris sur la partie vide de la carte pour placer les cases sélectionnées. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
>- Bravo, vous savez mapper! N'oubliez pas de sauvegarder les changements en cliquant l'icône de sauvegarde dans le coin supérieur gauche de votre écran. ![](https://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png)

## Couches
En créant votre carte vous vous rendrez compte que vous voulez placer des objets comme des maisons, des arbres et des arbustes au dessus du sol. C'est là que les couches entrent en jeu. Sous les étiquettes **Cases** dans votre panneau **Couches Carte** vous verrez un groupe de 5 icônes.

![Couches Cartes](https://www.ascensiongamedev.com/resources/filehost/e96fbf144210c97ebdd679bfac49e06a.png)

Chacun de ces icônes représente une couche de carte. Si vous cliquez-gauche l'un des icônes vous changerez de couche. Le portrait du personnage sur la couche sélectionné sera légèrement coloré.

Les cases sur la première couche apparaîtront sous les cases des autres couches. Les cases de la seconde couche apparaîtront sous les cases de la troisième, quatrième et cinquième couches.

Avant d'aller plus loin, donnons un nom à ces couches. Nous nous réferons à elles par:
- Ground
- Mask
- Mask 2
- Fringe
- Fringe 2

Utiliser des couches de cases multiples dans votre carte vous permet de placer des arbres, et d'autres objets au dessus des autres cases. <a href="http://www.ascensiongamedev.com/resources/filehost/1b0126badf74d9bcdd0fd115e476c106.gif" data-lity><i class="fa fa-play-circle"></i></a>

Vous avez remarqué comme les deux derniers icônes sont dessinés par dessus le portrait du personnage? Ceux-ci sont les deux couches Fringe, et elles existent au dessus des joueurs et des pnjs en jeu.

Dans la démonstration ci-dessus, j'ai placé des arbres sur la couche Mask. Les cases de la couche Ground et les arbres sur la couche Mask sont affichés sous mon personnage en jeu donnant un effet non désiré de mon personnage marchant par dessus l'arbre entier.

![](https://www.ascensiongamedev.com/resources/filehost/5db4fbdae4be4fe060651bb3849d2300.gif)

La solution n'est pas aussi simple que de placer l'arbre entier sur la couche Fringe, nous ne voulons pas que le tronc de l'arbre soit par dessus mon personnage <a href="http://www.ascensiongamedev.com/resources/filehost/6814ea253162f66d65bae1012f9ca605.gif" data-lity><i class="fa fa-play-circle"></i></a>, nous devons trouver un compromis.

La solution dans ce cas est de placer la moitié inférieure de l'arbre sur la couche Mask, et la moitié supérieure de l'arbre sur la couche Fringe. <a href="http://www.ascensiongamedev.com/resources/filehost/be935bfd755be1bf55ed9ec34e989949.gif" data-lity><i class="fa fa-play-circle"></i></a>

Nous arrivons finalement à l'effet voulu grâce aux couches!

![Couches de Travail](https://www.ascensiongamedev.com/resources/filehost/6c2d4d1d52fd65145f5e44271b3b1bd1.gif)

## Attributs
Si vous avez suivi les étapes ci-dessus vous avez probablement remarqué un gros défaut dans notre jeu désormais. Vous pouvez marcher **au travers** de l'arbre! <a href="http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif" data-lity><i class="fa fa-play-circle"></i></a>

Pas d'inquiétude cependant, cette section va vous aider à réparer ça! Les attributs sont comme une sixième couche de la carte. Les attributs vous permettent de placer des cases avec des propriétés spéciales comme par exemple de devenir des blocages au travers des quels le joueur ne peux pas passer.

Retournez à votre éditeur et ouvrez l'étiquette **Attributs** dans le panneau **Couches Carte**. Sélectionnez l'attribut **Bloquer** et placez le par dessus le tronc de votre arbre. <a href="http://www.ascensiongamedev.com/resources/filehost/60984ce488de64b42ddec0bed012cb52.gif" data-lity><i class="fa fa-play-circle"></i></a>

En utilisant l'attribut **Bloquer** vous allez vous apercevoir que vous avez finalement un arbre avec un rendu correct et en dépit de vos efforts, vous ne pourrez plus passer au travers.

![Non Plus Aucune Attache!](https://www.ascensiongamedev.com/resources/filehost/8ae4ea6cfdb97b1f7e1cf0efa4d1677a.gif)

Vous n'utiliserez pas les autres attributs autant que l'attribut **Bloquer**. Ceci dit voici un aperçu rapide du reste des attributs et ce qu'ils font.

|Attribut|Description|
| ------------ | ------------ |
|Bloquer| Marque une case sur la carte comme étant infranchissable, ni les pnjs ni les joueurs ne pourront passer au travers de cases bloquées.|
|Blocage PnJ|Agi comme une case bloquante seulement pour les pnjs. Souvent utilisé pour que les monstres ne puissent pas entrer dans des zones sauves ou pour bloquer des passages.|
|Téléporteur|Quand des joueurs marchent sur une case téléporteur ils seront téléportés à l'endroit de votre choix dans le jeu.|
|Apparition Objet|L'objet de votre choix et son apparence apparaîtra périodiquement à ce moment.|
|Son Carte|Un effet de son sera joué lors du passage sur les cases où cet attribut aura été placé. LE son s'amplifiera ou diminuera si le joueur approche ou s'éloigne de cet attribut.|
|Ressource|Une ressource récoltable apparaîtra sur la case utilisant cet attribut. Communément utilisé pour la coupe du bois, le minage, la pêche et plus. Nous en discuterons plus tard dans la documentation sur l'éditeur de ressources.|
|Animation|Une animation de l'éditeur d'animation sera jouée sur cette case. Les animations lorsqu'elles sont bien réglées peuvent rendre vivant votre monde de jeu. Ex: <a href="https://www.freemmorpgmaker.com/wp-content/uploads/2017/10/windmill.gif" data-lity><i class="fa fa-play-circle"></i></a>|
|Pierre à Grappin|Quand combiné avec des projectiles de grappin vous pouvez autoriser le joueur à passer sur des terrains où il ne pourrait pas le faire. Ce sera expliqué plus loin dans la documentation sur l'éditeur de projectiles et des exemples.|
|Glisser|Cette case force le joueur à glisser dans la direction de votre choix. Vous pouvez l'utiliser pour des puzzles, des pièges et bien plus!|

## Barre d'Outils

## Propriétés

## Effets de lumière

## Evènements
