---
title: Base de Données Serveur
---


| Nom                           | Type    | Exemple     | Description |
|-------------------------------|---------|-------------|-------------|
| Type                          | string  | sqlite      | Configure le type de base de données à laquelle le serveur se connectera. Supporte actuellement **sqlite** et **mysql**.|
| Server                        | string  | localhost   | Configure la base de donnée serveur à laquelle le serveur se connectera. (si applicable) |
| Port                          | number  | 3306        | Configure le port de la base donnée auquel le serveur se connectera. (si applicable) |
| Database                      | string  |             | Configure le nom de la base donnée à laquelle le serveur se connectera. (si applicable) |
| Username                      | string  |             | Configure le nom d'utilisateur que le serveur utilisera pour se connecter à la base de données. (si applicable) |
| Password                      | string  |             | Configure le mot de passe que le serveur utilisera pour se connecter à la base de données. (si applicable) |
| LogLevel                      | string  | Error       | Configure le niveau de log à maintenir en ce qui concerne les intéractions avec la base de donnée. (Erreur, Avertissement, Info) |