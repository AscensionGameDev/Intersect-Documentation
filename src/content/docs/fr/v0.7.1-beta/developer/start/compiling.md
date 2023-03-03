---
title: Compilation
---

La première étape avant de faire des changements du code source est de le compiler. Intersect est relié à des dizaines de librairies externes et d'outils (ie MonoGame, Newtonsoft Json.Net, etc) et notre projet est construit pour aller chercher automatiquement ces dépendances à partir de Nuget.

Pour commencer ouvrez le fichier Intersect.sln dans le dossier Intersect-Engine. La réponse devrait être ouverte dans Visual Studio 2019.

![réponse](https://www.ascensiongamedev.com/resources/filehost/bb694eabb570f22d541f87d1db2fc68f.png)

Dans la plupart des cas tout ce que vous aurez à faire c'est de taper Build -> Build Solution en haut de votre fenêtre Visual Studio et il ira chercher toutes les dépendances automatiquement pour vous.

![construction](https://www.ascensiongamedev.com/resources/filehost/c1c27a3366987a9279610e40667eecf0.png)

Votre première construction se finira sûrement avec des erreurs vues ci-dessous. Ceci est dû au programme qui télécharge les dépendances pendant une construction dont dépend une construction réussie.

![erreurs](https://www.ascensiongamedev.com/resources/filehost/3ddd530d599409f7a8a69a510fa3ab70.png)

Si vous rencontrez une des erreurs ci-dessus cliquez juste sur Build > Clean Solution and then Build -> Build Solution again. Si ça ne fonctionne pas essayez de redémarrer visual studio.

![nettoyer](https://www.ascensiongamedev.com/resources/filehost/068c7b0d67e8fa94d998f8b2151f98a1.png)

Visual Studio vous notifiera de la réussite d'une construction dans le coin inférieur gauche de votre ide.

![réussite](https://www.ascensiongamedev.com/resources/filehost/cfbb467b54914238dcadcde9383f342f.png)

La version compilée d'Intersect peut être trouvée dans votre annuaire Intersect-Engine/build. Il ya aura beaucoup de fichiers xml à côté des exécutables mais vous devriez seulement vous préoccuper des fichiers .exe et .pdb pour le Client, l'Editeur et le Serveur pour l'instant.

![production](https://www.ascensiongamedev.com/resources/filehost/5c0070679608ae4d663de3bc34c4527b.png)

** Veuillez noter que si vous voulez faire fonctionner votre client ou votre éditeur en utilisant le debugger vous devrez [télécharger et inclure les actifs appropriés](https://github.com/AscensionGameDev/Intersect-Assets) dans les annuaires /build/debug/client and /build/debug/editor. **
