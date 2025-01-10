---
title: Server `config.json`
---

| Nombre                        | Tipo                                                   | Ejemplo                     | Descripción                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GameName                      | texto                                                  | Intersect                   | Configura el nombre del juego que hostea este servidor.                                                                                                       |
| ServerPort                    | número                                                 | 5400                        | Configura el puerto al que escuchará el servidor.                                                                                                             |
| AdminOnly                     | booleano                                               | false                       | Configura si este servidor solo permitirá conectarse a miembros del staff (Access 1 i superior).                                                              |
| BlockClientRegistrations      | booleano                                               | false                       | Configura si el servidor impedirá que se registren nuevos usuarios o no.                                                                                      |
| UPnP                          | booleano                                               | true                        | Configura si el servidor usará el protocolo UPnP o no.                                                                                                        |
| OpenPortChecker               | booleano                                               | true                        | Configura si el servidor comprobará si es accesible a través de internet cada vez que sea iniciado.                                                           |
| AnimatedSprites               | array                                                  | ["bat.png", "beholder.png"] | Configura qué sprites estarán en constante animación, incluso cuando no estén en movimiento.                                                                  |
| Chat                          | Ver [Chat](#chat)                                      |
| Combat                        | Ver [Combat](#combat)                                  |
| Equipment                     | Ver [Equipment](./configuration/equipment)             |
| EventWatchdogKillThreshold    | número                                                 | 5000                        | Configura la cantidad que comandos que un evento puede ejecutar en un solo tick del servidor antes de que sea considerado un bucle infinito y sea finalizado. |
| GameDatabase                  | Ver [Server Database](./configuration/server-database) |
| Loot                          | Ver [Loot](#loot)                                      |
| Map                           | Ver [Map](#map)                                        |
| MaxClientConnections          | número                                                 | 100                         | Configura la cantidad de clientes, hayan iniciado sesión o no, que pueden establecer conexión con el servidor simultaneamente.                                |
| MaximumLoggedinUsers          | número                                                 | 50                          | Configura la cantidad de clientes que pueden iniciar sesión al mismo tiempo.                                                                                  |
| NPC                           | Ver [NPC](#npc)                                        |
| Party                         | Ver [Party](#party)                                    |
| Passability                   | Ver [Passability](#passability)                        |
| Player                        | Ver [Player](#player)                                  |
| PlayerDatabase                | Ver [Server Database](./configuration/server-database) |
| Security                      | Ver [Server Security](./configuration/server-security) |
| SmtpSettings                  | Ver [SMTP](#smtp)                                      |
| Sprites                       | Ver [Sprites](#sprites)                                |
| ValidPasswordResetTimeMinutes | número                                                 | 30                          | Configura el tiempo(en minutos) durante el cual un link de restablecimiento de contraseña será válido.                                                        |

## Chat

| Nombre                      | Tipo     | Ejemplo | Descripción                                                                                                                                 |
| --------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxChatLength               | número   | 120     | Configura la cantidad máxima de caracteres permitida en los mensajes del chat.                                                              |
| MinIntervalBetweenChats     | número   | 400     | Configura el intervalo de tiempo mínimo(en milisegundos) requerido entre cada mensaje del chat.                                             |
| ShowAnnouncementBanners     | booleano | true    | Configura si mostrar o no banners de los anuncios en la pantalla de juego o no.                                                             |
| AnnouncementDisplayDuration | número   | 15000   | Configura el tiempo(en milisegundos) que serán mostrados los banners de los anuncios en la pantalla de juego si éstos han sido habilitados. |

## Combat

| Nombre                    | Tipo     | Ejemplo | Descripción                                                                                                                                                                                                                                                                                                |
| ------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlockingSlow              | número   | 30      | Configura el porcentaje por el cual los jugadores serán ralentizados mientras bloqueen.                                                                                                                                                                                                                    |
| CombatTime                | número   | 10000   | Configura la cantidad de tiempo(en milisegundos) tras el último ataque de un jugador o tras la última vez que un jugador recibe daño para que deje de considerarse que está en combate.                                                                                                                    |
| MaxAttackRate             | número   | 200     | Configura el ritmo máximo al que una entidad puede atacar.                                                                                                                                                                                                                                                 |
| MaxDashSpeed              | número   | 200     | Configura la velocidad máxima a la cual un jugador puede realizar un dash.                                                                                                                                                                                                                                 |
| MinAttackRate             | número   | 500     | Configura el ritmo mínimo al que una entidad puede atacar.                                                                                                                                                                                                                                                 |
| RegenTime                 | número   | 3000    | Configura el tiempo(en milisegundos) entre cada tick de regeneración de salud.                                                                                                                                                                                                                             |
| EnableCombatChatMessages  | booleano | false   | Configura si los mensajes de chat de combate están habilitados o no.                                                                                                                                                                                                                                       |
| MovementCancelsCast       | booleano | false   | Configura si el jugador puede desplazarse para cancelar los lanzamientos de hechizos o no.                                                                                                                                                                                                                 |
| MatchGroupCooldowns       | booleano | true    | Configura si los cooldowns del mismo grupo de cooldowns deben coincidir o no.                                                                                                                                                                                                                              |
| MatchGroupCooldownHighest | booleano | true    | Configura si los cooldowns del mismo grupo coincidirán con el cooldown más elevado de entre todos ellos si está habilitado, o si coincidirán con el cooldown del objeto o hechizo utilizado en ese momento si no está habilitado. Solamente se tiene en cuenta si **MatchGroupCooldowns** está habilitado. |
| LinkSpellAndItemCooldowns | booleano | true    | Configura si objetos y hechizos pueden estar juntos en el mismo grupo de cooldowns o no. Solamente se tiene en cuenta si **MatchGroupCooldowns** está habilitado.                                                                                                                                          |
| EnableGlobalCooldowns     | booleano | false   | Configura si utilizar un objeto o un hechizo debería activar un cooldown global o no.                                                                                                                                                                                                                      |
| GlobalCooldownDuration    | número   | 1500    | Configura la duración(en milisegundos) de los cooldown globales. Solamente se tiene en cuenta si **EnableGlobalCooldowns** está habilitado.                                                                                                                                                                |
| MaxPlayerAutoTargetRadius | número   | 15      | Configura la distancia máxima permitida a la que se puede autoapuntar a un objetivo.                                                                                                                                                                                                                       |

## Loot

| Nombre                    | Tipo     | Ejemplo | Descripción                                                                                                                                                                                                                              |
| ------------------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemDespawnTime           | número   | 15000   | Configura el tiempo(en milisegundos) que tardan los botines y los objetos tirados en el suelo en desaparecer.                                                                                                                            |
| ItemOwnershipTime         | número   | 5000    | Configura el tiempo(en milisegundos) que tardan los objetos tirados en el suelo por matar NPCs o jugadores en perder la protección anti robo.                                                                                            |
| ShowUnownedItems          | booleano | false   | Configura si todos los jugadores pueden ver objetos en el suelo que no les pertenecen y que no pueden recoger.                                                                                                                           |
| ConsolidateMapDrops       | booleano | true    | Configura si cuando caen varios objetos iguales al suelo deberían caer todos juntos y recogerse todos a la vez en caso de que el valor sea true, o si deben caer por separado y recogerse uno por uno en caso de que el valor sea false. |
| EnableLootWindow          | booleano | true    | Configura si la ventana de loot estará habilitada o no en los clientes.                                                                                                                                                                  |
| MaximumLootWindowItems    | número   | 10      | Configura la cantidad máxima de objetos mostrados en la ventana de loot. Solamente se tiene en cuenta si **EnableLootWindow** está habilitado.                                                                                           |
| MaximumLootWindowDistance | número   | 3       | Configura la cantidad de tiles alrededor del jugador en la que la ventana de loot buscará el botín. Solamente se tiene en cuenta si **EnableLootWindow** está habilitado.                                                                |

## Map

| Nombre                   | Tipo     | Ejemplo | Descripción                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GameBorderStyle          | número   | 0       | Configura la manera en la que la cámara es manejada por el sistema. **0** indicará un mundo sin junturas y evitará mostrar áreas sin mapas. **1** indicará un mundo sin junturas y no limitará la cámara a la vista de los mapas, centrando la cámara en el jugador en todo momento. **2** indicará un mundo con junturas y mostrará cada mapa por sí solo mientras el jugador recorre el mundo. |
| Height                   | número   | 26      | Configura la cantidad de tiles disponibles en el eje Y(vertical) en cada mapa. **ADVERTENCIA:** ¡Este valor no puede ser modificado sobre la marcha y modificarlo requerirá que todos los mapas existentes sean eliminados!                                                                                                                                                                      |
| ItemAttributeRespawnTime | número   | 15000   | Configura la cantidad de tiempo(en milisegundos) requerido para que los objetos generados por el Atributo Objeto del Mapa reaparezcan.                                                                                                                                                                                                                                                           |
| TileHeight               | número   | 32      | Configura la cantidad de píxeles que cada tile del mapa tiene en el eje Y(vertical).                                                                                                                                                                                                                                                                                                             |
| TileWidth                | número   | 32      | Configura la cantidad de píxeles que cada tile del mapa tiene en el eje X(horizontal).                                                                                                                                                                                                                                                                                                           |
| Width                    | número   | 32      | Configura la cantidad de tiles disponibles en el eje X(horizontal) en cada mapa. **ADVERTENCIA:** ¡Este valor no puede ser modificado sobre la marcha y modificarlo requerirá que todos los mapas existentes sean eliminados!                                                                                                                                                                    |
| ZDimensionVisible        | booleano | false   | Configura si la Dimensión Z está habilitada. Ver [Dimensión Z](./advanced/zdimensions)                                                                                                                                                                                                                                                                                                           |

## NPC

| Nombre                            | Tipo     | Ejemplo | Descripción                                                                                                                                                                                                              |
| --------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AllowResetRadius                  | booleano | false   | Configura si los NPCs se resetearán tras haberse alejado del punto inicial en el que entraron en combate.                                                                                                                |
| ResetRadius                       | número   | 8       | Configura el rango(en tiles) en el que los NPCs tienen permitido moverse desde el punto inicial en el que entraron en combate antes de resetearse. Solamente se tiene en cuenta si **AllowResetRadius** está habilitado. |
| AllowNewResetLocationBeforeFinish | booleano | false   | Configura si los NPCs pueden obtener un nuevo punto de reseteo antes de haberse reseteado completamente hasta el punto inicial en el que entraron en combate.                                                            |
| ResetVitalsAndStatusses           | booleano | false   | Configura si los NPCs resetearán también su salud y sus estados cuando se reseteen.                                                                                                                                      |
| ShowLevelByName                   | booleano | false   | Configura si el nivel del npc será mostrado junto a su nombre o no.                                                                                                                                                      |

## Party

| Nombre                        | Tipo   | Ejemplo | Descripción                                                                                                                                                      |
| ----------------------------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaximumMembers                | número | 4       | Configura la cantidad máxima permitida de integrantes en party.                                                                                                  |
| InviteRange                   | número | 40      | Configura la distancia(en tiles) a la que deben estar 2 jugadores para que puedan enviarse invitaciones de party.                                                |
| SharedXpRange                 | número | 40      | Configura la distancia(en tiles) a la que deben estar los integrantes de la party para compartir experiencia al matar.                                           |
| NpcDeathCommonEventStartRange | número | 0       | Configura la distancia(en tiles) a la que deben estar los integrantes de la party para activar Common Events por las muertes causadas por los otros integrantes. |

## Passability

| Nombre | Tipo     | Ejemplo | Descripción                                                                                      |
| ------ | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| Arena  | booleano | false   | Configura si los jugadores pueden pasar a través de otros jugadores en los mapas de tipo Arena.  |
| Normal | booleano | false   | Configura si los jugadores pueden pasar a través de otros jugadores en los mapas de tipo Normal. |
| Safe   | booleano | true    | Configura si los jugadores pueden pasar a través de otros jugadores en los mapas de tipo Safe.   |

## Player

| Nombre              | Tipo     | Ejemplo | Descripción                                                                                                                                               |
| ------------------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ItemDropChance      | número   | 0       | Configura la posibilidad(porcentaje) de que un jugador suelte objetos al morir.                                                                           |
| MaxBank             | número   | 100     | Configura la cantidad máxima de ranuras que cada jugador tiene en el banco de almacenamiento.                                                             |
| MaxCharacters       | número   | 1       | Configura la cantidad máxima de personajes que puede tener un jugador en su cuenta.                                                                       |
| MaxInventory        | número   | 35      | Configura la cantidad máxima de ranuras que cada jugador tiene en su inventario.                                                                          |
| MaxLevel            | número   | 100     | Configura el nivel máximo que puede alcanzar un personaje.                                                                                                |
| MaxSpells           | número   | 35      | Configura la cantidad máxima de ranuras de hechizo que tiene cada jugador.                                                                                |
| MaxStat             | número   | 255     | Configura la cantidad máxima de puntos de estadísticas que cada estadística puede tener.                                                                  |
| RequestTimeout      | número   | 300000  | Configura la cantidad de tiempo(en milisegundos) que una petición de comercio puede estar pendiente de respuesta antes de que se cancele automaticamente. |
| TradeRange          | número   | 6       | Configura la distancia(en tiles) a la que deben estar 2 jugadores para que puedan enviarse peticiones de comercio.                                        |
| AllowCombatMovement | booleano | true    | Configura si las entidades pueden moverse o no mientras el contador de tiempo de sus ataques llega a 0.                                                   |
| ShowLevelByName     | booleano | false   | Configura si el nivel del jugador será mostrado junto a su nombre o no.                                                                                   |

## SMTP

### See [Passwords](./advanced/passwords)

| Nombre      | Tipo     | Ejemplo                      | Descripción                                                                                   |
| ----------- | -------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| FromAddress | texto    | noreply@ascenciongamedev.com | Configura la dirección desde la que el servidor enviará e-mails.                              |
| FromName    | texto    | Ascencion Game Development   | Configura el nombre que el servidor utilizará para identificarse a sí mismo en los e-mails.   |
| Host        | texto    | smtp.myprovider.com          | Configura el servidor SMTP que el servidor de Intersect Engine utilizará para enviar e-mails. |
| Port        | número   | 587                          | Configura el puerto usado para comunicarse con el servidor SMTP.                              |
| UseSsl      | booleano | true                         | Configura si el servidor SMTP utiliza SSL.                                                    |
| Username    | texto    | myusername@myprovider.com    | Configura el usuario utilizado para autentificarse con el servidor SMTP.                      |
| Password    | texto    | mypassword                   | Configura la contraseña utilizada para autentificarse con el servidor SMTP.                   |

## Sprites

| Nombre                 | Tipo   | Ejemplo | Descripción                                                                                                                                                               |
| ---------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IdleFrames             | número | 4       | Configura la cantidad de frames que contiene la animación de inactividad.                                                                                                 |
| NormalFrames           | número | 4       | Configura la cantidad de frames que contiene la animación estándar(usada principalmente para el movimiento).                                                              |
| CastFrames             | número | 4       | Configura la cantidad de frames que contiene la animación de lanzamiento de hechizos.                                                                                     |
| AttackFrames           | número | 4       | Configura la cantidad de frames que contiene la animación de ataque.                                                                                                      |
| ShootFrames            | número | 4       | Configura la cantidad de frames que contiene la animación de disparo.                                                                                                     |
| WeaponFrames           | número | 4       | Configura la cantidad de frames que contiene la animación de ataque con arma.                                                                                             |
| NormalSheetAttackFrame | número | 3       | Configura el frame de la animación estándar que se usará al atacar si no hay otras animaciones disponibles.                                                               |
| NormalSheetDashFrame   | número | 1       | Configura el frame de la animación estándar que se usará al realizar un dash si no hay otras animaciones disponibles.                                                     |
| MovingFrameDuration    | número | 200     | Configura el tiempo(en milisegundos) que se muestra cada frame de movimiento antes de pasar al siguiente.                                                                 |
| IdleFrameDuration      | número | 200     | Configura el tiempo(en milisegundos) que se muestra cada frame de la animación de inactividad antes de pasar a la siguiente.                                              |
| TimeBeforeIdle         | número | 4000    | Configura el tiempo(en milisegundos) que tiene que pasar desde la última acción del jugador para que empiece a mostrarse la animación de inactividad, si está disponible. |
