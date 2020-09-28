# Server `config.json`

| Name                          | Type    | Example     | Description                   |
|-------------------------------|---------|-------------|-------------------------------|
| GameName                      | string  | Intersect   |                               |
| ServerPort                    | number  | 5400        |                               |
| AdminOnly                     | boolean | false       |                               |
| BlockClientRegistrations      | boolean | false       |                               |
| AnimatedSprites               | array   |             |                               |
| EventWatchdogKillThreshold    | number  | 5000        |                               |
| OpenPortChecker               | boolean | true        |                               |
| ValidPasswordResetTimeMinutes | number  | 30          |                               |
| UPnP                          | boolean | true        |                               |
| Chat                          | See [Chat](#chat)                                     |
| Combat                        | See [Combat](#combat)                                 |
| Equipment                     | See [Equipment](/configuration/equipment)             |
| GameDatabase                  | See [Server Database](/configuration/server-database) |
| PlayerDatabase                | See [Server Database](/configuration/server-database) |
| Map                           | See [Map](#map)                                       |
| Player                        | See [Player](#player)                                 |
| Party                         | See [Party](#party)                                   |
| Security                      | See [Server Security](/configuration/server-security) |
| Loot                          | see [Loot](#loot)                                     |
| SmtpSettings                  | See [SMTP](#smtp)                                     |
| Passability                   | See [Passability](#passability)                       |


## Chat
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| MaxChatLength                 | number  | 120         |             |
| MinIntervalBetweenChats       | number  | 400         |             |

## Combat
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| BlockingSlow                  | number  | 30          |             |
| CombatTime                    | number  | 10000       |             |
| MaxAttackRate                 | number  | 200         |             |
| MaxDashSpeed                  | number  | 200         |             |
| MinAttackRate                 | number  | 500         |             |
| RegenTime                     | number  | 3000        |             |

## Map
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| GameBorderStyle               | number  | 0           |             |
| Height                        | number  | 26          |             |
| ItemAttributeRespawnTime      | number  | 15000       |             |
| TileHeight                    | number  | 32          |             |
| TileWidth                     | number  | 32          |             |
| Width                         | number  | 32          |             |
| ZDimensionVisible             | boolean | false       |             |

## Player
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| ItemDropChance                | number  | 0           |             |
| MaxBank                       | number  | 100         |             |
| MaxCharacters                 | number  | 1           |             |
| MaxInventory                  | number  | 35          |             |
| MaxLevel                      | number  | 100         |             |
| MaxSpells                     | number  | 35          |             |
| MaxStat                       | number  | 255         |             |
| RequestTimeout                | number  | 300000      |             |
| TradeRange                    | number  | 6           |             |

## Party
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| MaximumMembers                | number  | 4           |             |
| InviteRange                   | number  | 40          |             |
| SharedXpRange                 | number  | 40          |             |
| NpcDeathCommonEventStartRange | number  | 0           |             |

## Loot
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| ItemDespawnTime               | number  | 15000       |             |
| ItemOwnershipTime             | number  | 5000        |             |
| ShowUnownedItems              | boolean | false       |             |
| ConsolidateMapDrops           | boolean | true        |             |

## SMTP
### See [Passwords](/advanced/passwords)
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| FromAddress                   | string  |             |             |
| FromName                      | string  |             |             |
| Host                          | string  |             |             |
| Port                          | number  | 587         |             |
| UseSsl                        | boolean | true        |             |
| Username                      | string  |             |             |
| Password                      | string  |             |             |

## Passability
| Name                          | Type    | Example     | Description |
|-------------------------------|---------|-------------|-------------|
| Arena                         | boolean | false       |             |
| Normal                        | boolean | false       |             |
| Safe                          | boolean | true        |             |
