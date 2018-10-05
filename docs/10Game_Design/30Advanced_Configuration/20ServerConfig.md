---
title: Server Config
---
Configuration files are read and interpreted whenever Intersect launches. They are used mostly for common constants defined by the developer on launch without the need of source code edits and recompiling. Intersect reads config files in XML format so its important that all variables are within their apropriate XML tags. XML is CaSe sEnSItiVe so make sure your tags are as well.

The configuration file for the Server can be found at the following path: Server/resources/config.xml

Language: This is used to set the language for your game. This can range from English to Chinese or even Clingon - assuming you have the language XML file for it! Additional language files not included in the default engine can be downloaded on the forums. The client and editor will read a language XML file on launch in the directory /resources/languages/ and the filename you specify within the language tags. Default is english.

Port: This is the port your server will listen for connections on.  This value must match the port value in the Client & Editor config.xml files.

GameName: The name of your game.

MOTD: Message Of The Day - used for anouncements in game and welcome messages for when users log in to your server.

MaxNpcDrops: Used for defining the maximum number of items an npc can hold and will drop on death. Default 10.

MaxStat: Maximum values for player stats. Preventing players adding points in a single stat. Default 255.

MaxLevel: Maximum level a player can reach in game. Default 100.

MaxInventory: Maximum item slots in a players inventory excluding additional bags. Default 35.

MaxSpells: Maximum spells a player can learn at a given time. Default 35.

MaxBank: Maximum item slots in a player bank. Default 100.

Equipment: Used for dynamic equipment types. To add a new equipment type add a new slot tag with the ID number of the next equipment type and inside the tags the name of the new equipment type.

WeaponSlot and ShieldSlot point to the equipment slots that contain weapons and shields. This is required for calculating combat interactions.

ToolTypes: Used for dynamic resource tools for interacting with different resources. I.e. you want an axe to chop down a tree not a fishing rod. To add a new tool type add a new slot tag with the ID number of the next tool type and inside the tags the name of the new tool type.

ItemSpawnTime & ItemDespawnTime: Used for timing when items on the ground respawn or dropped items despawn to avoid the map cluttering up with dropped items. Default 15000ms

Combat:

RegenTime: Regenerate health at each interval. Default 3000ms

MinAttackRate: Slowest attack speed a player can have. Default 1 attack per 1000ms.

MaxAttackRate: Fastest attack speed a player can have. Default 1 attack per 200ms.

BlockingSlow: Slow player move speed when blocking. Default 30%

CritChance: Chance for landing a critical hit. Default 20%

CritMultiplier: Damage increase when landing a critical hit. Default 150%

MaxDashSpeed: Speed of a player whilst dashing. Default 200.

Map:

BorderStyle: MapBorder Override. 0 for seamless with scrolling that stops on world edges. 1 for non-seamless, and 2 for seamless where the camera knows no boundaries. (Black borders where the world ends)

The following fields are heavily advised to never be changed. Maps are seemless so there is little reason to change this.
MapWidth: Number of tiles for the width of a map. Default 32.
MapHeight: Number of tiles for the height of a map. Default 26.
TileWidth: Width of a tile in pixels. Default 32.
TileHeight: Height of a tile in pixels. Default 32.

Paperdoll: Used for organising the order of equipment paperdolls to be rendered on the player in the client. Paperdoll is rendered in the following order when the player is facing in the direction of the tag. If you want to change when each piece of equipment gets rendered swap the equipment names.

Passibility: Used for enabling players to walk through each other in certain zones but solid for combat zones. This prevents players blocking small passageways or running over each other during combat. True = Passable, False = Blocked.