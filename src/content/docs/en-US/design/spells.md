---
title: Spells
---

## Overview
>Spells can be created by clicking `Spell Editor` inside the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2bc7b67c-f188-43b4-860e-1fcdaa40bd71)

## Managing Spells
![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ded6a3ca-84fe-410d-8812-7f7c2b104df4)

- Clicking on the first icon here will create a new spell. Shortcut = Ctrl+N
- Clicking on a spell in the list and clicking the second icon will delete that spell.
- Clicking the third icon will catagorize your spells in alphabetical order.
- Clicking on a spell in the list and clicking the fourth icon will copy that spell. Shortcut = Ctrl+C
- Clicking on a spell in the list and clicking the fifth icon will paste your copied spell. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a spell (Does not revert deletion).

## Editing Spells

### General
![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/857971fe-a4dd-4180-9918-2c53dac6c60b)

- *Name*: Gives a name to the spell.
- *Folder*: Clicking on the X next to this field allows you to create a folder for spell organization.
- *Type*: Sets a type of spell. Please go [here](#spell-types) for more information on spell types.
- *Icon*: Allows you to set an icon to the clients spell slot. Icons are located in your clients sub folder `resources\spells`.
- *Desc*: Allows you to add a description to your spell.
- *Bound*: Toggling this will make your spell bound to a character which disables the character from unlearning it.
- *Sprite Cast Anim*: You can select a sprite cast animation here. The sprite needs to be located in your clients `resources/entities` folder and they must be in `.png` format with the naming convention, `spritename_cast_customname.png`. This option will override the engine default sprite animation named, `spritename_cast.png`.
- *Extra Cast Anim*: You can select an extra cast animation here. If you don't have any animations created, refer to the `Animation Editor` in the `Game Editors` tab on the main interface.
- *Casting Requirements*: Clicking this will open another window which is used for `Conditions`. Refer to the [Conditions](./conditions.md) documentation section for more information about this.
- *Cannot Cast Message*: Allows you to set a message as to why the spell can't cast.

### Spell Costs
![Spell Cost](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/07d3aa4d-4a9d-40ff-ba38-6b779eb32d04)

- *HP Cost*: Allows you to set an HP cost for casting the spell.
- *MP Cost*: Allows you to set an MP cost for casting the spell.
- *Cast Time (ms)*: Allows you to set a cast time for casting the spell in milliseconds. 1000 (ms) = 1 second.
- *Cooldown (ms)*: Allows you to set a cooldown timer in milliseconds. 1000 (ms) = 1 second. This disables the spell from being cast until the timer ends.
- *Cooldown Group*: Clicking the X next to this field allows you to create a group which you can place multiple spells in a cooldown catagory, which disables all those spells in the group from being cast until the cooldown timer ends.
- *Ignore Global Cooldown?*: Toggling this will ignore the global cooldown of spells. The `server config` has global cooldowns disabled by default.
- *Ignore Cooldown Reduction?*: Toggling this will disable/enable the players cooldown reduction percentage effect.

### Targetting Info
![Targetting](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8fea8781-e9f3-44d1-9666-6581e9e2b367)![Targetting Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/342947c3-efb1-4ff2-9d21-02bed40088f9)

- *Target Types*: Selecting this will allow you to set a targetting type for the spell. Please go [here](#targetting-types) for more information on each of the targetting types.

### Damage
![Combat Spell](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f7ca4842-090a-4c53-bbce-3a0f902381f7)

- *Friendly*: Toggling this will define whether the spell is friendly or not.
- *HP Damage*: When a spell is defined friendly, use negative values for healing HP as opposed to using positive values for damaging.
- *MP Damage*: When a spell is defined friendly, use negative values for healing MP as opposed to using positive values for damaging.
- *Damage Type*: Setting this will allow you to select whether the damage is Physical, Magic or True. True damage negates resistance.
- *Scaling Stat*: Setting this will link the spell damage with the players stat selected here.
- *Scaling Amount (%)*: Setting this will scale the scaling stat based on percentage. Example, if the player has 10 Ability Power and its scaled amount is set at 50%. The spell damage will include 5 Ability Power as total damage before resistances.
- *Crit Chance (%)*: Setting this will increase the crit chance percentage.
- *Crit Multiplier (Default 1.5x)*: Setting this will increase the crit damage based on a multiplier of the spell damage.

### Heal/Damage Over Time
![HOT](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8edeaeca-b4ca-4929-8671-22fa5497dad9)

- *HOT/DOT?*: Toggling this will enable/disable `Heal/Damage Over Time`.
- *Tick (ms)*: Allows you to set the tick timer in milliseconds, this will tick until the `Duration (ms)` expires. 1000 (ms) = 1 second.
- *Tick Animation*: Allows you to set an animation that will play per tick. Refer to the `Animation Editor` in the `Game Editors` tab on the main interface.

### Stat Modifiers
![Modifiers](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7914f51b-4d28-4a40-89f8-ae941dad78fc)

- *Attack*: Allows you to set an attack stat modifier that will last until the `Duration (ms)` expires.
- *Ability Pwr*: Allows you to set an ability power stat modifier that will last until the `Duration (ms)` expires.
- *Defense*: Allows you to set a defense stat modifier that will last until the `Duration (ms)` expires.
- *Magic Resist*: Allows you to set a magic resist stat modifier that will last until the `Duration (ms)` expires.
- *Speed*: Allows you to set a speed stat modifier that will last until the `Duration (ms)` expires.

### Stat Boost/Effect Duration
![Duration](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4cb567b2-ef98-4528-8cab-4c43b509024c)

- *Duration (ms)*: Allows you to set the duration of the buffs/debuffs and HOT/DOT effects in milliseconds. 1000 (ms) = 1 second.

### Effect
![Effect Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2a847639-c825-49eb-bf0a-bcfa36a080bc)![Transform](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/85fa9ed0-8cf8-410d-ad20-eeda52b9e57c)


- *Silence*: Makes the target unable to spell cast until the `Duration (ms)` expires.
- *Stun*: Makes the target unable to move or attack until the `Duration (ms)` expires.
- *Snare*: Makes the target unable to move until the `Duration (ms)` expires.
- *Blind*: Makes the target unable to melee hit until the `Duration (ms)` expires.
- *Stealth*: Makes the target invisible until the `Duration (ms)` expires.
- *Transform*: Allows you to change the characters sprite until the `Duration (ms)` expires. Refer to the second screenshot above.
- *Cleanse*: Removes all debuffs from the target.
- *Invulnerable*: Makes the target unabled to be damaged until the `Duration (ms)` expires.
- *Shield*: Grants the target a shield based on HP setting until the `Duration (ms)` expires.
- *Sleep*: Makes the target go to sleep until the `Duration (ms)` expires.
- *OnHit*: Adds an onhit effect to the target until the `Duration (ms)` expires.
- *Taunt*: Makes the target turn berserk until the `Duration (ms)` expires.

## Spell Types
>You can select a spell type from this drop down menu.

![Spell Types](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/c3dac624-eb60-4471-b590-5a431d8a7207)

### Combat Spell
>This is the default type which we've covered above.

### Warp To Map
>Selecting this type will open this container window on the spell editor. Upon casting, it will warp the character to a defined Map/X/Y.

![Warp To Map](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4aa858ab-bb35-4536-b5d6-93ac9dddf747)

- *Map*: Allows you to set a map to warp to.
- *X*: Allows you to set the maps X position to warp to.
- *Y*: Allows you to set the maps Y position to warp to.
- *Dir*: Allows you to set the position which the character will be facing.
- *Open Visual Interface*: This opens an interface which you can click to define the warp Map/X/Y automatically.

### Warp To Target
>Selecting this type will automatically set the targetting type. Upon casting, it will warp the character to the target.

![Warp To Target](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/e17f40f9-2761-4a2b-b0c0-91ac94650ab9)

- *Target Type*: This type is automatically set when selecting the spell type and can not be changed.
- *Cast Range (tiles)*: Allows you to set a range in tiles for which this spell can be cast.

### Dash
>Selecting this type will open this container window on the spell editor. Upon casting, it will create a dash effect based on the options defined.

![Dash](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/555735f5-1caa-4611-a5c1-3c362c89f85a)

- *Dash Range (tiles)*: Allows you to set a dash range in tiles.
- *Map Blocks*: With this ticked, it will ignore collisions with map block attributes.
- *Active Resources*: With this ticked, it will ignore collisions with active resources on the map.
- *Inactive Resources*: With this ticked, it will ignore collisions with inactive resources on the map.
- *Z-Dimension Blocks*: With this ticked, it will ignore collisions with Z-Dimension blocks on the map.

### Event
>Selecting this type will open this contain window on the spell editor. Upon casting, it will process an event selected. Refer to the [Events](..events/introduction.md) documentation for more information on how to create events!

![Event](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4522beac-6c92-41b2-afdb-6f4f081b22ac)

## Targetting Types
>You can select a targetting type from this drop down menu.

![Targetting Options](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4b7f9cdb-279c-480c-a6f3-f584ae48232d)

### Self
>Selecting this type will only allow the spell to be cast on themselves.

### Single Target (includes self)
>Selecting this type will allow the spell to be cast on a single target, including self.

![Single Target](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/a5cf2cd8-663e-4f76-9180-367386f08072)

- *Cast Range (tiles)*: Allows you to set a cast range in tiles.
- *Hit Radius*: Allows you to set a hit radius.

### AOE
>Selecting this type will allow the spell to affect all within the hit radius defined.

![AOE](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/1ac2c7de-4955-4a32-8d64-84dfe79566d8)

- *Hit Radius*: Allows you to set a hit radius.

### Linear (projectile)
>Selecting this type will allow the spell to be a linear projectile selected from the projectile list.

![Projectile](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/546bf857-1cd9-478b-a505-a40247647c87)

- *Projectile*: Allows you to choose from a list of projectiles. If you have no projectiles created, refer to the `Projectile Editor` from the `Game Editors` tab on the main interface.

### On Hit
>Selecting this type will allow the spell to be an On Hit effect.

![On Hit](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/554b9ce9-05dc-45c3-8969-1297f86dbe09)

- *Duration (ms)*: Allows you to set the duration of the effect in milliseconds. 1000 (ms) = 1 second.

### Trap
>Selecting this type will allow the spell to act as a trap.

![Trap](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/234a90cd-fafc-4e70-afb1-30c90712e80a)

- *Duration (ms)*: Allows you to set the duration of the effect in milliseconds. 1000 (ms) = 1 second.
