---
title: Application de Patchs
---

Les patchs GitHub sont très simples à appliquer et ils vous permettent de vérifier leur compatibilité avant de le faire.

Veuillez noter, qu'appliquer des patchs git modifie le code source de votre moteur. Les Patchs peuvent impacter les performances et introduire des bugs dans votre jeu. Installez seulement des patchs provenant de développeurs certifiés!

Téléchargez votre patch et placez le tout en haut de votre dépôt Intersect. Puis ouvrez une fenêtre d'invite de commande et naviguez jusqu'à votre repo Intersect local. Cela peut être effectué simplement en cliquant sur Repository -> Open In Command Prompt within GitHub Desktop.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

Pour vérifier la compatibilité entrez la commande suivante en remplaçant le nom de fichier du patch par celui que vous avez téléchargé. Si il ya des défauts de compatibilité, l'auteur du patch devra peut être refaire le patch en utilisant votre version d' Intersect, ou vous avez peut être appliqué de multiples patchs qui entrent en conflit et ne sont pas compatibles les uns avec les autres.

```
git apply --check patchName.patch
```

![check](https://www.ascensiongamedev.com/resources/filehost/e3e6c8d588a49bd1ef2ebd69c67f115f.png)

Si aucune erreur n'apparaît le patch est compatible, exécutez les commandes suivantes pour appliquer le patch. Vous verrez peut être des avertissements, mais tant qu'il ne contienne aucune erreur vous pouvez y aller!

```
git am --signoff < patchName.patch
```

![apply](https://www.ascensiongamedev.com/resources/filehost/7fb32c944b7147a3397c8a39e634af1f.png)

Si vous avez besoin de retirer un patch utilisez la commande -R de l'application git apply comme montrer ci-dessous

```
git apply -R patchName.patch
```

![reverting](https://www.ascensiongamedev.com/resources/filehost/cbd407c31ce1c87beaaea3277e32a788.png)
