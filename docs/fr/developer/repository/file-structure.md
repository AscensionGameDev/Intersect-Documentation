# Structure de Fichier

La structure de fichiers de niveau supérieur du dépôt est définie comme suit pour la version actuelle:

|             Fichier/Annuaire | Description                                                                                                                                       |
|---------------------------:|---------------------------------------------------------------------------------------------------------------------------------------------------|
|              Documentation | License pour chaque programme individuel et les raccourcis vers ces documents.                                                                                |
|           Intersect (Core) | Ensemble partagé entre le Client, l'Editeur et le Serveur. Contient les définitions de classes pour les objets de jeu, les configurations et d'autres.                    |
| Intersect.Client.Framework | Code client abstrait pour la relecture audio, la gestion de fichier, la sortie graphique et plus. Contient aussi notre librairie Gwen UI lourdement modifiée.     |
|           Intersect.Client | Le code Client Intersect actuel. MonoGame hérite de la Mise en Réseau Client pour alimenter le moteur en utilisant MonoGame DesktopGl pour l'accompagnement inter-plateforme. |
|           Intersect.Editor | L'Editeur de Jeu Intersect qui est lui aussi alimenté par MonoGame DirectX. DirectX est requis dû à notre utilisation de SwapChainRenderTargets.                       |
|           Intersect.Server | Le Serveur Intersect qui fonctionne comme une application de console. Ce serveur faisant autorité contrôle chaque action entreprise dans les jeux Intersect.               |
|           Intersect.Shared | Fonctions d'assistant partagé et d'informations pour tous les programmes ci dessous.                                                                               |
|          Intersect.Tests.* | Unité de test pour tous les programmes listés ci dessous.                                                                                                |
|                 AUTHORS.md | Liste des Auteurs et Contributeurs d'Intersect.                                                                                                       |
|         CODE_OF_CONDUCT.md | Documentation sur le dépôt de code Intersect et ses lignes de guide de conduite.                                                                             |
|            CONTRIBUTING.md | Documentation pour contribuer à la base de code Intersect.                                                                                         |
|              Intersect.sln | Fichier Visual Studio Solution qui charge tous les programmes mentionnés précédemment dans Visual Studio.                                                       |
|                  README.md | Fichier Readme pour GitHub qui décrit le moteur Intersect, les librairies que nous utilisons et plus.                                                           |
