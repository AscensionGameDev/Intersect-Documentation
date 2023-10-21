---
title: Npcs
---

## Overview

Creating NPC's are done via the `Npc Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7848642e-095d-4791-b80d-1ed974518ec1)

## Managing Npcs

![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/53e5b5b0-3b96-4aff-af5e-bd1361714e3f)


- Clicking on the first icon here will create a new Npc. Shortcut = Ctrl+N
- Clicking on an Npc in the list and clicking the second icon will delete that Npc.
- Clicking the third icon will catagorize your Npcs in alphabetical order.
- Clicking on an Npc in the list and clicking the fourth icon will copy that Npc. Shortcut = Ctrl+C
- Clicking on an Npc in the list and clicking the fifth icon will paste your copied Npc. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to an Npc (Does not revert deletion).

## Editing Npcs

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f7d0c209-8f8a-487d-bda2-99d083e6363e)

- *Name*: Allows you to give your Npc a name.
- *Folder*: Clicking the + next to this field allows you to create a folder in the Npc list for organization.
- *Level*: Allows you to give your Npc a level.
- *Sprite*: Allows you to select a sprite for your Npc. The sprites will be located in your clients subfolder, `resources\entities`.
- *Hue*: Allows you to give your sprite a hue color within the client.

### Common Event

![Common E](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4c10bd12-2f76-4c6b-a779-29efbabb4a2c)

- *On Death (for killer)*: Allows you to set a common event on Npc death for the killer. Click [here](../events/common.md) for more information on how to create common events!
- *On Death (for party)*: Allows you to set a common event on Npc death for the party.

### Stats

![Stats](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8bdf5576-716c-490b-a131-422154c4ccb6)

- *HP*: Allows you to set the Npcs HP.
- *Mana*: Allows you to set the Npcs Mana.
- *Attack*: Allows you to set the Npcs Attack.
- *Ability Pwr*: Allows you to set the Npcs Ability Power.
- *Defense*: Allows you to set the Npcs Defense.
- *Magic Resist*: Allows you to set the Npcs Magic Resist.
- *Speed*: Allows you to set the Npcs Speed.
- *Exp*: Allows you to set the Npcs Experience reward.

### Regen

![Regen](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d0bbc80e-76df-4221-9c4e-c10193a531a8)


- HP (%): Setting this allows you to set the Npcs HP regen percentage per tick. Tick timer for regen can be modified inside the `servers config` file. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.
- MP (%): Setting this allows you to set the Npcs MP regen percentage per tick.

### Spells

![Spells](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/bafefd80-7687-4b82-8a7a-ca1eb62546d6)

- *Spell*: Allows you to select a spell from the spell editors list.
- *Add*: Allows you to add the spell.
- *Remove*: Clicking on a spell in the list and then clicking remove will remove the spell from the list.
- *Frequency*: Allows you to set the frequency of the spell being cast.

### Drops

![Drops](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/3b9a72b8-0f66-4d3e-9343-841ebe0171e1)

- *Item*: Allows you to select an item from the item editors list.
- *Amount*: Allows you to set an amount of the item you want the Npc to drop.
- *Chance (%)*: Allows you to set a percentage chance that you want the Npc to drop.
- *Spawn loot for all attackers*: Toggling this will allow the drop to be for all attackers.
- *Add*: After setting all the above settings, clicking add will add the item to the list.
- *Remove*: Clicking on an item inside the list and clicking this will remove the item from the list.

### Combat

![Combat](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/daa42766-b0e1-464d-a263-52eb34420788)

- Base Damage: Setting this will give the Npc a raw base damage value.
- Crit Chance (%): Setting this will increase the crit chance percentage.
- Crit Multiplier (Default 1.5x): Setting this will increase the crit damage based on a multiplier of the base damage.
- Damage Type: Setting this will allow you to select whether the damage is Physical, Magic or True. True damage negates resistance.
- Scaling Stat: Setting this will link the base damage with the Npcs stat selected here.
- Scaling Amount (%): Setting this will scale the scaling stat based on percentage. Example, if the Npc has 10 Attack and its scaled amount is set at 50%. The base damage will include 5 Attack as base damage before resistances.
- Attack Animation: You can select an attack animation here. If you don’t have any animations created, refer to the `Animation Editor` in the `Game Editors` tab on the main interface.

### Attack Speed

- Modifier: Setting this will allow you to set an attack speed modifier.
- Value: Allows you to set the modifier value based in (ms).

### Immunities

![Immunities](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f50c8caf-915d-4cbe-800f-40077b8c66ca)

- *Immunities*: Allows you to select any or all immunities for the Npc.
- *Tenacity (%)*: Allows you to set a percentage rate for tenacity, tenacity will cut the duration of any immunities.

### Behavior

![Screenshot_1](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/733e4726-9fee-45c9-b2e6-43ac16accd5c)

- *Aggressive*: Toggling this will make the Npc aggressive, dependant on `Sight Range`.
- *Swarm*: Toggling this will make this Npc charge in a group if more than one on the map.
- *Focus Highest Damage Dealer*: Toggling this will force the Npc to focus on the highest damage dealer.
- *Sight Range*: Allows you to set a sight range in tiles for when the player is within the sight range, the Npc will attack if aggressive.
- *Reset Radius*: Allows you to set a reset radius in tiles for when the player is outside the radius, the Npc will lose target and go back to where they were.
- *Movement*: Allows you to set the movement of the Npc.
- *Spawn Duration (ms)*: Allows you to set a respawn timer. 1000 (ms) = 1 second.
- *Flee Health (%)*: Allows you to set a percentage on how much health the Npc has before it flees.
- *Player Friend/Protector*: Allows you to set conditions that when it's met, this Npc will be the players friend.
- *Attack Player on Sight*: Allows you to set conditions that when it's met, this Npc will attack the player on sight.
- *Player Can Attack (Default = True)*: Allows you to set conditions that when it's not met, the player can not attack this Npc. Click [here](./conditions.md) for more information about setting conditions.

### Npc vs Npc (Combat/Hostility)

![Npc vs Npc](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/5e1829d6-7dcf-4fc0-a9c5-fee429aa0610)

- *Enabled?*: Toggling this will enable/disable Npc vs Npc.
- *Attack Allies?*: Toggling this will allow the Npc to attack allies of it.
- *NPC*: Allows you to set an Npc from the Npc Editor list.
- *Add*: Allows you to add the Npc to the list.
- *Remove*: Clicking on an Npc in the list and then clicking remove will remove the Npc from the list.

### Setting Npcs

![Screenshot_4](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/3856c27a-a5df-47aa-bc82-3e1c4f7e177c)

Clicking on the NPC tab within the map editor will allow you to set your NPC's. You can declare their spawn location or have it randomized. Make sure to save your map after you've added them to the map.

