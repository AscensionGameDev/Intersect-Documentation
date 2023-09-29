---
title: Spells
---

## Overview
Spells can be created by clicking `Spell Editor` inside the `Game Editors` tab on the main interface.
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
- *Casting Requirements*: Clicking this will open another window which is used for `Conditions`. Refer to the `Conditions` documentation section for more information about this.
- *Cannot Cast Message*: Allows you to set a message as to why the spell can't cast.

### Spell Costs
![Spell Cost](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/07d3aa4d-4a9d-40ff-ba38-6b779eb32d04)

-*HP Cost*: Allows you to set an HP cost for casting the spell.
-*MP Cost*: Allows you to set an MP cost for casting the spell.
-*Cast Time (ms)*: Allows you to set a cast time for casting the spell in milliseconds. 1000 (ms) = 1 second.
-*Cooldown (ms)*: Allows you to set a cooldown timer in milliseconds. 1000 (ms) = 1 second. This disables the spell from being cast until the timer ends.
-*Cooldown Group*: Clicking the X next to this field allows you to create a group which you can place multiple spells in a cooldown catagory, which disables all those spells in the group from being cast until the cooldown timer ends.
-*Ignore Global Cooldown?*: Toggling this will ignore the global cooldown of spells. The `server config` has global cooldowns disabled by default.
-*Ignore Cooldown Reduction?*: Toggling this will disable/enable the players cooldown reduction percentage effect.

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

- *HOT/DOT*: Toggling this will enable/disable `Heal/Damage Over Time`.
- *Tick (ms)*: Allows you to set the tick timer in milliseconds, this will tick until the `Duration (ms)` expires. 1000 (ms) = 1 second.
- *Tick Animation*: Allows you to set an animation that will play per tick. Refer to the `Animation Editor` in the `Game Editors` tab on the main interface.

### Stat Modifiers
![Modifiers](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7914f51b-4d28-4a40-89f8-ae941dad78fc)

- *Attack*: Allows you to set an attack stat modifier that will last until the `Duration (ms)` expires.
- *Ability Pwr*: Allows you to set an ability power stat modifier that will last until the `Duration (ms)` expires.
- *Defense*: Allows you to set a defense stat modifier that will last until the `Duration (ms)` expires.
- *Magic Resist*: Allows you to set a magic resist stat modifier that will last until the `Duration (ms)` expires.
- *Speed*: Allows you to set a speed stat modifier that will last until the `Duration (ms)` expires

### Stat Boost/Effect Duration
![Duration](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4cb567b2-ef98-4528-8cab-4c43b509024c)

- *Duration (ms)*: Allows you to set the duration of the buffs/debuffs and HOT/DOT effects in milliseconds. 1000 (ms) = 1 second.

### Effect
![Effect](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7a2efe64-1136-4f47-a3cd-fe4e66821985)![Effect Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2a847639-c825-49eb-bf0a-bcfa36a080bc)

- *Extra Effect*: Allows you to add buffs/debuff effects. Please go [here](#extra-effects) for more information on each of the effects.

## Spell Types
- TODO

## Targetting Types
- TODO

## Extra Effect
- TODO
