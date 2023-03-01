---
title: Sécurité Serveur
---

| Nom            | Type                                   | Exemple                      | Description                                                                          |
| -------------- | -------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ |
| PacketFlooding | Voir [PacketFlooding](#packetflooding) |
| IpBlacklist    | array                                  | ["127.0.0.1, 192.168.100.4"] | Configure une liste noire d'adresse IP pour les empêcher de se connecter au serveur. |

## Inondation de Paquets

| Nom                    | Type                                                   | Exemple | Description |
| ---------------------- | ------------------------------------------------------ | ------- | ----------- |
| EditorFloodThreshholds | Voir [EditorFloodThreshholds](#EditorFloodThreshholds) |
| PlayerFloodThreshholds | Voir [PlayerFloodThreshholds](#PlayerFloodThreshholds) |
| FloodThreshholds       | Voir [FloodThreshholds](#FloodThreshholds)             |

## Seuil d'Inondation Editeur

| Nom                 | Type   | Exemple    | Description                                                                                                                    |
| ------------------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| MaxPacketSize       | number | 2147483647 | Configure la taille maximum qu'un paquet de l'éditeur du réseau informatique peut atteindre avant d'être éjecté par l'éditeur. |
| MaxPacketPerSec     | number | 2147483647 | Configures le maximum de paquet par secondes qu'un éditeur peut envoyer avant d'être ejecté de l'éditeur.                      |
| KickAvgPacketPerSec | number | 2147483647 | Configure le maximum de paquets moyens par seconde qu'un éditeur peut envoyer avant d'être éjecté de l'éditeur.                |

## Seuil d'Inondation du Joueur

| Nom                 | Type   | Exemple    | Description                                                                                                                      |
| ------------------- | ------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configure la taille maximum qu'un paquet joueur connecté du réseau informatique peut atteindre avant que le joueur soit expulsé. |
| MaxPacketPerSec     | number | 2147483647 | Configure le maximum de paquets par secondes qu'un joueur connecté peut envoyer avant d'être éjecté.                             |
| KickAvgPacketPerSec | number | 2147483647 | Configure le maximum de paquets moyens par seconde qu'un joueur connecté peut envoyer avant d'être éjecté.                       |

## Seuil d'Inondation

| Nom                 | Type   | Exemple    | Description                                                                                                             |
| ------------------- | ------ | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| MaxPacketSize       | number | 2147483647 | Configure la taille maximum qu'un paquet client du réseau informatique peut atteindre avant que le client soit expulsé. |
| MaxPacketPerSec     | number | 2147483647 | Configure le maximum de paquets par secondes qu'un client peut envoyer avant d'être éjecté.                             |
| KickAvgPacketPerSec | number | 2147483647 | Configure le maximum de paquets moyens par seconde qu'un client peut envoyer avant d'être éjecté.                       |
