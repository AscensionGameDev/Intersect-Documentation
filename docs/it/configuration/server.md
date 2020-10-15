# Server `config.json`

| Name                          | Type    | Example     | Description                   |
|-------------------------------|---------|-------------|-------------------------------|
| GameName                      | string  | Intersect   | Configures the name of the game this server hosts. |
| ServerPort                    | number  | 5400        | Configures the port this server will listen on. |
| AdminOnly                     | boolean | false       | Configures whether this server will only allow staff members (Access 1 or above) to log in. |
| BlockClientRegistrations      | boolean | false       | Configures whether this server will block new user registrations or not. |
| AnimatedSprites               | array   | ["bat.png", "beholder.png"] | Configures which sprites should always be animating, even when standing still. |
| EventWatchdogKillThreshold    | number  | 5000        | Configures the amount of commands an event may execute within a single server tick before the server considers it to be looping infinitely and kills it off. |
| OpenPortChecker               | boolean | true        | Configures whether the server will check if it can be reached from the internet each time it starts. |
| ValidPasswordResetTimeMinutes | number  | 30          | Configures the time (in minutes) a password reset link is valid for. |
| UPnP                          | boolean | true        |                               |
| Chat                          | See [Chat](#chat)                                     |
| Combat                        | See [Combat](#combat)                                 |
| Equipment                     | See [Equipment](./configuration/equipment)             |
| GameDatabase                  | See [Server Database](./configuration/server-database) |
| PlayerDatabase                | See [Server Database](./configuration/server-database) |
| Map                           | See [Map](#map)                                       |
| NPC                           | See [NPC](#npc)                                       |
| Loot                          | see [Loot](#loot)                                     |
| Player                        | See [Player](#player)                                 |
| Party                         | See [Party](#party)                                   |
| Security                      | See [Server Security](./configuration/server-security) |
| SmtpSettings                  | See [SMTP](#smtp)                                     |
| Sprites                       | See [Sprites](#sprites)                               |
| Passability                   | See [Passability](#passability)                       |


## Chat
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| MaxChatLength                     | number  | 120         | Configures the maximum allowed length of each chat message. |
| MinIntervalBetweenChats           | number  | 400         | Configures the minimum interval (in milliseconds) required between each chat message. |

## Combat
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| BlockingSlow                      | number  | 30          | Configures the percentage by which to slow a player down while they are blocking. |
| CombatTime                        | number  | 10000       | Configures the amount of time it takes for a player to no longer be considered in combat after their last attack or the last time they took damage. |
| MaxAttackRate                     | number  | 200         | Configures the maximum rate at which an entity could potentially attack. |
| MaxDashSpeed                      | number  | 200         | Configures the maximum speed at which a player can dash. |
| MinAttackRate                     | number  | 500         | Configures the minimum rate at which an entity could potentially attack. |
| RegenTime                         | number  | 3000        | Configures the time (in milliseconds) between each Vital regeneration tick. |

## Map
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| GameBorderStyle                   | number  | 0           | Configures the method in which the camera is handled by the engine. **0** will use a seamless world and try to avoid showing areas with no maps in them. **1** will use a seamless world and not constrain the camera to the map view, centering the camera on the player at all times. **2** will not use a seamless world and show each map on its own as you traverse the world. |
| Height                            | number  | 26          | Configures the amount of tiles available on the Y (vertical) axis on each map. **WARNING:** This value can not be changed on the fly and will require you to delete your existing maps when changed! |
| ItemAttributeRespawnTime          | number  | 15000       | Configures the amount of time (in milliseconds) it takes for items spawned through the Item Map Attribute to respawn. |
| TileHeight                        | number  | 32          | Configures the amount of pixels each map tile is on the Y (vertical) axis. |
| TileWidth                         | number  | 32          | Configures the amount of pixels each map tile is on the X (horizontal) axis. |
| Width                             | number  | 32          | Configures the amount of tiles available on the X (horizontal) axis on each map. **WARNING:** This value can not be changed on the fly and will require you to delete your existing maps when changed! |
| ZDimensionVisible                 | boolean | false       | Configures whether the Z-Dimension is enabled. See [Z-Dimensions](./advanced/zdimensions) |

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

## Player
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| ItemDropChance                    | number  | 0           | Configures the chance (percentage) of when a player will drop items upon death. |
| MaxBank                           | number  | 100         | Configures the maximum amount of bank slots each player has. |
| MaxCharacters                     | number  | 1           | Configures the maximum amount of characters each user account can have. |
| MaxInventory                      | number  | 35          | Configures the maximum amount of inventory slots each player has. |
| MaxLevel                          | number  | 100         | Configures the maximum level a player character can reach. |
| MaxSpells                         | number  | 35          | Configures the maximum amount of spell slots each player has. |
| MaxStat                           | number  | 255         | Configures the maximum amount of stat points any given stat can have. |
| RequestTimeout                    | number  | 300000      | Configures the maximum amount of time (in milliseconds) a trade request can be left pending before cancelling it automatically. |
| TradeRange                        | number  | 6           | Configures the range (in tiles) in which the player and the player they are attempting to trade with must reside within. |

## Party
| Name                              | Type    | Example     | Description |
|-----------------------------------|---------|-------------|-------------|
| MaximumMembers                    | number  | 4           | Configures the maximum amount of party members allowed. |
| InviteRange                       | number  | 40          | Configures the range (in tiles) in which the player and the player they are attempting to invite to a party must reside within. |
| SharedXpRange                     | number  | 40          | Configures the range (in tiles) in which party members have to be for them to share experience on kills. |
| NpcDeathCommonEventStartRange     | number  | 0           | Configures the range (in tiles) in which party members have to be for them to trigger Common Events from deaths caused by other party members. |

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
