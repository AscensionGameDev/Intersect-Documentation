# Serveur `config.json`

| Nom                           | Type    | Exemple     | Description                   |
|-------------------------------|---------|-------------|-------------------------------|
| GameName                      | string  | Intersect   | Configure le nom du jeu que ce serveur héberge. |
| ServerPort                    | number  | 5400        | Configure le port sur lequel ce serveur sera en écoute. |
| AdminOnly                     | boolean | false       | Configure si ce serveur autorisera seulement les membres du staff (Accès 1 ou plus) à se connecter. |
| BlockClientRegistrations      | boolean | false       | Configure si ce serveur bloquera l'enregistrement de nouveaux utilisateurs ou non. |
| AnimatedSprites               | array   | ["bat.png", "beholder.png"] | Configure quels sprites devraient toujours être animés, même s'ils restent sur place. |
| EventWatchdogKillThreshold    | number  | 5000        | Configure le nombre de commandes qu'un évènement peut exécuter en un seul tick serveur avant que le serveur considère qu'il boucle à l'infini et l'arrête. |
| OpenPortChecker               | boolean | true        | Configure si le serveur vérifie si il est bien connecté à internet chaque fois qu'il démarre. |
| ValidPasswordResetTimeMinutes | number  | 30          | Configure le temps (en minutes) qu'un lien de réinitialisation du mot de passe est valide. |
| UPnP                          | boolean | true        |                               |
| Chat                          | Voir [Chat](#chat)                                     |
| Combat                        | Voir [Combat](#combat)                                 |
| Equipment                     | Voir [Equipement](./configuration/equipment)             |
| GameDatabase                  | Voir [Base de Données Serveur](./configuration/server-database) |
| PlayerDatabase                | Voir [Base de Données Serveur](./configuration/server-database) |
| Map                           | Voir [Carte](#map)                                       |
| NPC                           | Voir [PNJ](#npc)                                       |
| Loot                          | Voir [Loot](#loot)                                     |
| Player                        | Voir [Joueur](#player)                                 |
| Party                         | Voir [Equipe](#party)                                   |
| Security                      | Voir [Sécurité Serveur](./configuration/server-security) |
| SmtpSettings                  | Voir [SMTP](#smtp)                                     |
| Sprites                       | Voir [Sprites](#sprites)                               |
| Passability                   | Voir [Passabilité](#passability)                       |


## Chat
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| MaxChatLength                     | number  | 120         | Configure la longueur maximum autorisée pour chaque message chat. |
| MinIntervalBetweenChats           | number  | 400         | Configure l'intervale minimum (en millisecondes) requis entre chaque message chat. |

## Combat
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| BlockingSlow                      | number  | 30          | Configure le pourcentage auquel ralentir un joueur lorsqu'il sont bloqués. |
| CombatTime                        | number  | 10000       | Configure combien de temps cela prend à un joueur pour ne plus être considéré en combat après leur dernière attaque ou la dernière fois qu'ils ont reçu des dégâts. |
| MaxAttackRate                     | number  | 200         | Configure le taux maximum auquel une entité peut potentiellement attaquer. |
| MaxDashSpeed                      | number  | 200         | Configure la vitesse maximum à laquelle un personnage peut charger. |
| MinAttackRate                     | number  | 500         | Configure le taux minimum auquel une entité peut potentiellement attaquer. |
| RegenTime                         | number  | 3000        | Configure le temps (en millisecondes) entre chaque tick de régénération vitale. |

## Carte
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| GameBorderStyle                   | number  | 0           | Configure la méthode avec laquelle la caméra est gérée par le moteur. **0** utilisera un monde transparent et tentera d'éviter de montrer des zones sans carte à l'intérieur. **1** utilisera un monde transparent et ne contraindra pas la caméra à une vue de la carte, la caméra est centrée en permanence sur le joueur. **2** n'utilisera pas un monde transparent et montrera chaque carte de lui-même quand vous traverserez le monde. |
| Height                            | number  | 26          | Configure le nombre de cases disponibles sur l'axe Y (vertical) sur chaque carte. **AVERTISSEMENT:** Cette valeur ne peut pas être changée à la volée et requerra que vous effaciez toutes vos cartes une fois le changement effectué! |
| ItemAttributeRespawnTime          | number  | 15000       | Configure le temps (en millisecondes) que ça prend à un objet engendré par l'attribut de l'objet carte pour réapparaître. |
| TileHeight                        | number  | 32          | Configure le nombre de pixels que chaque case de carte fait sur l'axe Y (vertical). |
| TileWidth                         | number  | 32          | Configure tle nombre de pixels que chaque case de carte fait sur l'axe X (horizontal). |
| Width                             | number  | 32          | Configure le nombre de cases disponibles sur l'axe X (horizontal) sur chaque carte. **AVERTISSEMENT:** Cette valeur ne peut pas être changée à la volée et requerra que vous effaciez toutes vos cartes une fois le changement effectué! |
| ZDimensionVisible                 | boolean | false       | Configure si la Dimension-Z est active. Voir [Dimensions-Z](./advanced/zdimensions) |

## PNJ
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| AllowResetRadius                  | boolean | false       | Configure si les PNJs se réinitialiseront si ils ont bougés du point initial où ils ont attaqué ou ont été attaqués. |
| AllowNewResetLocationBeforeFinish | boolean | false       | Configure si les PNJs sont autorisés à obtenir un nouveau point de centrage à partir de celui d'où il a été tiré avant d'être complètement réinitialisé au précédent. |
| ResetVitalsAndStatusses           | boolean | false       | Configure si les PNJs réinitialiseront leur état et leur statut à la réinitialisation. |
| ResetRadius                       | number  | 8           | Configure la portée (en cases) à laquelle un PNJ est autorisé à bouger à partir du point initial où ils ont attaqués ou ont été attaqués avant la réinitialisation.  |

## Loot
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| ItemDespawnTime                   | number  | 15000       | Configure le temps (en millisecondes) que ça prend au loot ou aux objets abandonnés au sol pour disparaître de la carte. |
| ItemOwnershipTime                 | number  | 5000        | Configure le temps (en millisecondes) que ça prend à un objet abndonné au sol pour ne plus être lié au propriétaire qui à causé son apparition en tuant des PNJs ou des joueurs ou en l'abandonnant au sol sur la carte. |
| ShowUnownedItems                  | boolean | false       | Configure si tout le monde sur la carte peut voir les objets dont ils ne sont pas propriétaires actuellement et ne sont pas éligibles pour le rammasser. |
| ConsolidateMapDrops               | boolean | true        | Configure si obtenir plusieurs exemplaires d'un objet sur la map à la fois consolide les exemplaires en un seul objet sur la carte ou si les exemplaires sont droppés individuellement sur la carte. |

## Joueur
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| ItemDropChance                    | number  | 0           | Configure les chances (pourcentage) qu'un joueur à de dropper des objets lors d'une élimination. |
| MaxBank                           | number  | 100         | Configure le nombre maximum d'emplacements de banque que chaque joueur possède. |
| MaxCharacters                     | number  | 1           | Configure le nombre maximum de personnages chaque compte utilisateur peut posséder. |
| MaxInventory                      | number  | 35          | Configure le nombre maximum d'emplacements d'inventaire chaque joueur possède. |
| MaxLevel                          | number  | 100         | Configure le niveau maximum qu'un joueur peut atteindre. |
| MaxSpells                         | number  | 35          | Configure le nombre maximum d'emplacements de sorts que chaque joueur possède. |
| MaxStat                           | number  | 255         | Configure le nombre maximum de points de statistique que l'on peut attribuer à chaque statistique. |
| RequestTimeout                    | number  | 300000      | Configure le maximum de temps (en millisecondes) une requête d'échange peut être laissée en attente avant d'être annulée automatiquement. |
| TradeRange                        | number  | 6           | Configure la portée maximum (en cases) a laquelle un joueur et le joueur avec lequel il essaie d'échanger doivent être. |

## Equipe
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| MaximumMembers                    | number  | 4           | Configure le nombre maximum de membres autorisés dans une équipe. |
| InviteRange                       | number  | 40          | Configure la portée maximum (en cases) a laquelle un joueur et le joueur qu'il essaie d'inviter dans l'équipe doivent être. |
| SharedXpRange                     | number  | 40          | Configure la portée maximum (en cases) a laquelle les membres d'équipe doivent être pour partager l'expérience ou les éliminations. |
| NpcDeathCommonEventStartRange     | number  | 0           | Configure la portée maximum (en cases) a laquelle les membres d'équipe doivent être pour déclencher un évènement commun d'élimination causé par un autre membre de l'équipe. |

## SMTP
### Voir [Mots de passe](./advanced/passwords)
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| FromAddress                       | string  | noreply@ascenciongamedev.com | Configure l'addresse de laquelle le serveur enverra des emails. |
| FromName                          | string  | Ascencion Game Development | Configure le nom que le serveur utilisera pour s'identifier dans les emails. |
| Host                              | string  | smtp.myprovider.com | Configure le serveur SMTP que le serveur utilisera pour envoyer des emails. |
| Port                              | number  | 587         | Configure le numéro de port utilisé pour communiquer avec le serveur SMTP. |
| UseSsl                            | boolean | true        | Configure si le serveur SMTP utilise le SSL. |
| Username                          | string  | myusername@myprovider.com | Configure le nom d'utilisateur utiliser pour authentification avec le serveur SMTP. |
| Password                          | string  | mypassword | Configure le mot de passe utilisé pour authentification avec le serveur SMTP. |

## Sprites
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| IdleFrames                        | number  | 4           | Configure le nombre de frames que le sprite d'animation d'inactivité contient. |
| NormalFrames                      | number  | 4           | Configure le nombre de frames que le sprite d'animation normal contient. |
| CastFrames                        | number  | 4           | Configure le nombre de frames que le sprite d'animation d'incantation contient. |
| AttackFrames                      | number  | 4           | Configure le nombre de frames que le sprite d'animation d'attaque contient. |
| ShootFrames                       | number  | 4           | Configure le nombre de frames que le sprite d'animation de tir contient. |
| WeaponFrames                      | number  | 4           | Configure le nombre de frames que le sprite d'animation d'attaque d'arme contient. |
| NormalSheetAttackFrame            | number  | 3           | Configure l'animation à utiliser à partir du journal normal pour l'attaque quand aucun sprite d'animation n'est disponible. |
| NormalSheetDashFrame              | number  | 1           | Configure l'animation à utiliser à partir du journal normal pour la charge quand aucun sprite d'animation n'est disponible. |
| MovingFrameDuration               | number  | 200         | Configure le temps (en millisecondes) que chaque frame de mouvement est affichée avant de passer à la suivante. |
| IdleFrameDuration                 | number  | 200         | Configure le temps (en millisecondes) que chaque frame d'animation d'inactivité est affichée avant de passer à la suivante. |
| TimeBeforeIdle                    | number  | 4000        | Configure le temps (en millisecondes) que ça prend après la dernière action du joueur avant que l'animation d'inactivité ne débute quand elle est disponible. |

## Passabilité
| Nom                               | Type    | Exemple     | Description |
|-----------------------------------|---------|-------------|-------------|
| Arena                             | boolean | false       | Configure si les joueurs peuvent se traverser en marchant sur les cartes de type arêne. |
| Normal                            | boolean | false       | Configure si les joueurs peuvent se traverser en marchant sur les cartes de type normal. |
| Safe                              | boolean | true        | Configure si les joueurs peuvent se traverser en marchant sur les cartes de type sauf. |