---
title: Créer des Nouveaux Paquets
---


Les données envoyées entre le client, l'éditeur et le serveur sont envoyés sous forme de paquets. Les Paquets sont définis dans Intersect.Core/Networking/Packets.

Les paquets sont stockés dans les dossiers Client/Editeur/Serveur basés sur l'expéditeur. Par exemple le LoginPacket envoyé à partir du client se trouvera dans le dossier client.

Créer des nouveaux paquets est aussi simple que de créer des nouvelles classes dans ces dossiers en héritance de CerasPacket et ainsi écrivent certains envois et gère le code.


## Envoyer des Paquets

le client, l'éditeur et le serveur ont chacun une classe d'Envoi de Paquets dans le dossier Mise en Réseau.

Pour faire court vous aurez besoin de créer une instance de votre classe de paquets, ensuite passez la par la fonction SendPacket pertinente.


## Gestion des Paquets

Le client, l'éditeur et le server possèdent aussi une classe PacketHandler dans le dossier de Mise en Réseau Networking folder.

Vous aurez besoin de créer une fonction HandlePacket qui accepte les nouveaux paquets que vous aurez créé.



Maintenant que vous avez créé une nouvelle classe de paquets, écrit le code pour envoyer le paquet, et écrit le gestionnaire vous avez terminé written! Simple non?

