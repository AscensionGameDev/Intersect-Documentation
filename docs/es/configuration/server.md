# Server `config.json`

| Nombre                        | Tipo     | Ejemplo     | Descripción                   |
|-------------------------------|----------|-------------|-------------------------------|
| GameName                      | texto    | Intersect   | Configura el nombre del juego que hostea este servidor. |
| ServerPort                    | número   | 5400        | Configura el puerto al que escuchará el servidor. |
| AdminOnly                     | booleano | false       | Configura si este servidor solo permitirá conectarse a miembros del staff (Access 1 i superior). |
| BlockClientRegistrations      | booleano | false       | Configura si el servidor impedirá que se registren nuevos usuarios o no. |
| AnimatedSprites               | array    | ["bat.png", "beholder.png"] | Configura qué sprites estarán en constante animación, incluso cuando no estén en movimiento. |
| ValidPasswordResetTimeMinutes | número   | 30          | Configura el tiempo(en minutos) durante el cual un link de restablecimiento de contraseña será válido. |
| MaxClientConnections          | número   | 100         | Configura la cantidad de clientes, hayan iniciado sesión o no, que pueden establecer conexión con el servidor simultaneamente. |
| MaximumLoggedinUsers          | número   | 50          | Configura la cantidad de clientes que pueden iniciar sesión al mismo tiempo. |
| UPnP                          | booleano | true        | Configura si el servidor usará el protocolo UPnP o no. |
| EventWatchdogKillThreshold    | número   | 5000        | Configura la cantidad que comandos que un evento puede ejecutar en un solo tick del servidor antes de que sea considerado un bucle infinito y sea finalizado. |
| OpenPortChecker               | booleano | true        | Configura si el servidor comprobará si es accesible a través de internet cada vez que sea iniciado. |
| Chat                          | Ver [Chat](#chat)                                     |
| Combat                        | Ver [Combat](#combat)                                 |
| Equipment                     | Ver [Equipment](./configuration/equipment)             |
| GameDatabase                  | Ver [Server Database](./configuration/server-database) |
| PlayerDatabase                | Ver [Server Database](./configuration/server-database) |
| Map                           | Ver [Map](#map)                                       |
| NPC                           | Ver [NPC](#npc)                                       |
| Loot                          | Ver [Loot](#loot)                                     |
| Player                        | Ver [Player](#player)                                 |
| Party                         | Ver [Party](#party)                                   |
| Security                      | Ver [Server Security](./configuration/server-security) |
| SmtpSettings                  | Ver [SMTP](#smtp)                                     |
| Sprites                       | Ver [Sprites](#sprites)                               |
| Passability                   | Ver [Passability](#passability)                       |


## Chat
| Nombre                            | Tipo     | Ejemplo     | Descripción                   |
|-----------------------------------|----------|-------------|-------------------------------|
| MaxChatLength                     | número   | 120         | Configura la cantidad máxima de caracteres permitida en los mensajes del chat. |
| MinIntervalBetweenChats           | número   | 400         | Configura el intervalo de tiempo mínimo(en milisegundos) requerido entre cada mensaje del chat. |
| ShowAnnouncementBanners           | booleano | true        | Configura si mostrar o no banners de los anuncios en la pantalla de juego o no. |
| AnnouncementDisplayDuration       | número   | 15000       | Configura el tiempo(en milisegundos) que serán mostrados los banners de los anuncios en la pantalla de juego si éstos han sido habilitados. |

## Combat
| Nombre                            | Tipo     | Ejemplo     | Descripción                   |
|-----------------------------------|----------|-------------|-------------------------------|
| BlockingSlow                      | número   | 30          | Configura el porcentaje por el cual los jugadores serán ralentizados mientras bloqueen. |
| CombatTime                        | número   | 10000       | Configura la cantidad de tiempo(en milisegundos) tras el último ataque de un jugador o tras la última vez que un jugador recibe daño para que deje de considerarse que está en combate. |
| MaxAttackRate                     | número   | 200         | Configura el ritmo máximo al que una entidad puede atacar. |
| MaxDashSpeed                      | número   | 200         | Configura la velocidad máxima a la cual un jugador puede realizar un dash. |
| MinAttackRate                     | número   | 500         | Configura el ritmo mínimo al que una entidad puede atacar. |
| RegenTime                         | número   | 3000        | Configura el tiempo(en milisegundos) entre cada tick de regeneración de salud. |
| EnableCombatChatMessages          | booleano | false       | Configura si los mensajes de chat de combate están habilitados o no. |
| MovementCancelsCast               | booleano | false       | Configura si el jugador puede desplazarse para cancelar los lanzamientos de hechizos o no. |
| MatchGroupCooldowns               | booleano | true        | Configura si los cooldowns del mismo grupo de cooldowns deben coincidir o no. |
| MatchGroupCooldownHighest         | booleano | true        | Configura si los cooldowns del mismo grupo coincidirán con el cooldown más elevado de entre todos ellos si está habilitado, o si coincidirán con el cooldown del objeto o hechizo utilizado en ese momento si no está habilitado. Solamente se tiene en cuenta si **MatchGroupCooldowns** está habilitado. |
| LinkSpellAndItemCooldowns         | booleano | true        | Configura si objetos y hechizos pueden estar juntos en el mismo grupo de cooldowns o no. Solamente se tiene en cuenta si **MatchGroupCooldowns** está habilitado. |
| EnableGlobalCooldowns             | booleano | false       | Configura si utilizar un objeto o un hechizo debería activar un cooldown global o no. |
| GlobalCooldownDuration            | número   | 1500        | Configura la duración(en milisegundos) de los cooldown globales. Solamente se tiene en cuenta si **EnableGlobalCooldowns** está habilitado. |
| MaxPlayerAutoTargetRadius         | número   | 15          | Configura la distancia máxima permitida a la que se puede autoapuntar a un objetivo. |

## Map
| Nombre                            | Tipo     | Ejemplo     | Descripción                   |
|-----------------------------------|----------|-------------|-------------------------------|
| GameBorderStyle                   | número   | 0           | Configura la manera en la que la cámara es manejada por el sistema. **0** indicará un mundo sin junturas y evitará mostrar áreas sin mapas. **1** indicará un mundo sin junturas y no limitará la cámara a la vista de los mapas, centrando la cámara en el jugador en todo momento. **2** indicará un mundo con junturas y mostrará cada mapa por sí solo mientras el jugador recorre el mundo. |
| Height                            | número   | 26          | Configura la cantidad de tiles disponibles en el eje Y(vertical) en cada mapa. **ADVERTENCIA:** ¡Este valor no puede ser modificado sobre la marcha y modificarlo requerirá que todos los mapas existentes sean eliminados! |
| ItemAttributeRespawnTime          | número   | 15000       | Configura la cantidad de tiempo(en milisegundos) requerido para que los objetos generados por el Atributo Objeto del Mapa reaparezcan. |
| TileHeight                        | número   | 32          | Configura la cantidad de píxeles que cada tile del mapa tiene en el eje Y(vertical). |
| TileWidth                         | número   | 32          | Configura la cantidad de píxeles que cada tile del mapa tiene en el eje X(horizontal). |
| Width                             | número   | 32          | Configura la cantidad de tiles disponibles en el eje X(horizontal) en cada mapa. **ADVERTENCIA:** ¡Este valor no puede ser modificado sobre la marcha y modificarlo requerirá que todos los mapas existentes sean eliminados! |
| ZDimensionVisible                 | booleano | false       | Configura si la Dimensión Z está habilitada. Ver [Dimensión Z](./advanced/zdimensions) |

## Player
| Nombre                            | Tipo     | Ejemplo     | Descripción                   |
|-----------------------------------|----------|-------------|-------------------------------|
| ItemDropChance                    | número   | 0           | Configura la posibilidad(porcentaje) de que un jugador suelte objetos al morir. |
| MaxBank                           | número   | 100         | Configura la cantidad máxima de ranuras que cada jugador tiene en el banco de almacenamiento. |
| MaxCharacters                     | número   | 1           | Configura la cantidad máxima de personajes que puede tener un jugador en su cuenta. |
| MaxInventory                      | número   | 35          | Configura la cantidad máxima de ranuras que cada jugador tiene en su inventario. |
| MaxLevel                          | número   | 100         | Configura el nivel máximo que puede alcanzar un personaje. |
| MaxSpells                         | número   | 35          | Configura la cantidad máxima de ranuras de hechizo que tiene cada jugador. |
| MaxStat                           | número   | 255         | Configura la cantidad máxima de puntos de estadísticas que cada estadística puede tener. |
| RequestTimeout                    | número   | 300000      | Configura la cantidad de tiempo(en milisegundos) que una petición de comercio puede estar pendiente de respuesta antes de que se cancele automaticamente. |
| TradeRange                        | número   | 6           | Configura la distancia(en tiles) a la que deben estar 2 jugadores para que puedan enviarse peticiones de comercio. |
| AllowCombatMovement               | booleano | true        | Configura si las entidades pueden moverse o no mientras el contador de tiempo de sus ataques llega a 0. |
| ShowLevelByName                   | booleano | false       | Configura si el nivel del jugador será mostrado junto a su nombre o no. |

## Party
| Nombre                            | Tipo     | Ejemplo     | Descripción                   |
|-----------------------------------|----------|-------------|-------------------------------|
| MaximumMembers                    | número   | 4           | Configura la cantidad máxima permitida de integrantes en party. |
| InviteRange                       | número   | 40          | Configura la distancia(en tiles) a la que deben estar 2 jugadores para que puedan enviarse invitaciones de party. |
| SharedXpRange                     | número   | 40          | Configura la distancia(en tiles) a la que deben estar los integrantes de la party para compartir experiencia al matar. |
| NpcDeathCommonEventStartRange     | número   | 0           | Configura la distancia(en tiles) a la que deben estar los integrantes de la party para activar Common Events por las muertes causadas por los otros integrantes. |

## NPC
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| AllowResetRadius                  | boolean | false       | Configures whether NPCs will reset after being moved away from the initial point they were first attacked on or started attacking. |
| AllowNewResetLocationBeforeFinish | boolean | false       | Configures whether NPCs are allowed to obtain a new center point from which they have been pulled before having fully reset to the last. |
| ResetVitalsAndStatusses           | boolean | false       | Configures whether NPCs will fully reset their vitals and statuses when resetting. |
| ResetRadius                       | number  | 8           | Configures the range (in tiles) in which an NPC is allowed to move from the initial point they were first attacked on or started attacking before resetting.  |

## Loot
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| ItemDespawnTime                   | number  | 15000       | Configures the time (in milliseconds) which it takes for loot and dropped items to despawn from the map. |
| ItemOwnershipTime                 | number  | 5000        | Configures the time (in milliseconds) which it takes for a dropped item to no longer be owned by the player that caused it to drop through either killing NPCs and Players or dropping it on the map. |
| ShowUnownedItems                  | boolean | false       | Configures whether everyone on the map can see items that they are not currently the owner of and not eligible to pick up. |
| ConsolidateMapDrops               | boolean | true        | Configures whether dropping multiple of an item to the map at once consolidates the drops into a single object on the map, or whether it drops multiple on the map at once. |

## SMTP
### See [Passwords](./advanced/passwords)
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| FromAddress                       | string  | noreply@ascenciongamedev.com | Configures the address from which the server will send e-mails. |
| FromName                          | string  | Ascencion Game Development | Configures the name the server will use to identify itself as within e-mails. |
| Host                              | string  | smtp.myprovider.com | Configures the SMTP server the server will use to send out e-mails. |
| Port                              | number  | 587         | Configures the port number used to communicate with the SMTP server. |
| UseSsl                            | boolean | true        | Configures whether the SMTP server uses SSL. |
| Username                          | string  | myusername@myprovider.com | Configures the username used to authenticate with the SMTP server. |
| Password                          | string  | mypassword | Configures the password used to authenticate with the SMTP server. |

## Sprites
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| IdleFrames                        | number  | 4           | Configures the amount of frames the idle animation sprite contains. |
| NormalFrames                      | number  | 4           | Configures the amount of frames the normal animation sprite contains. |
| CastFrames                        | number  | 4           | Configures the amount of frames the cast animation sprite contains. |
| AttackFrames                      | number  | 4           | Configures the amount of frames the attack animation sprite contains. |
| ShootFrames                       | number  | 4           | Configures the amount of frames the shoot attack animation sprite contains. |
| WeaponFrames                      | number  | 4           | Configures the amount of frames the weapon attack animation sprite contains. |
| NormalSheetAttackFrame            | number  | 3           | Configures the animation from from the normal sheet to use for attacking when no animation sprites are available. |
| NormalSheetDashFrame              | number  | 1           | Configures the animation from from the normal sheet to use for dashing when no animation sprites are available. |
| MovingFrameDuration               | number  | 200         | Configures the time (in milliseconds) each movement frame is displayed before moving on to the next. |
| IdleFrameDuration                 | number  | 200         | Configures the time (in milliseconds) each idle frame is displayed before moving on to the next. |
| TimeBeforeIdle                    | number  | 4000        | Configures the time (in milliseconds) it takes after a player's last action before the idle animation starts playing when available. |

## Passability
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| Arena                             | boolean | false       | Configures whether players can walk through eachother in Arena map types. |
| Normal                            | boolean | false       | Configures whether players can walk through eachother in Normal map types. |
| Safe                              | boolean | true        | Configures whether players can walk through eachother in Safe map types. |
