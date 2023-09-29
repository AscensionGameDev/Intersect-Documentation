---
title: Classes
---

Creating classes is done via the `Class Editor` under the `Game Editors` menu.

## Managing Classes

![CRUD and Sorting Menu](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/1427a95c-c983-495c-908c-417bfbdd235f)

- Clicking on the first icon here will create a new class. Shortcut = Ctrl+N
- Clicking on a class in the list and clicking the second icon will delete that class.
- Clicking the third icon will catagorize your classes in alphabetical order.
- Clicking on a class in the list and clicking the fourth icon will copy that class. Shortcut = Ctrl+C
- Clicking on a class in the list and clicking the fifth icon will paste your copied class. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a class (Does not revert deletion).

## Editing Classes

![Class Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/34209309-3973-4965-9fc8-86c8d5a36e86)

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/bf66d18c-4b5b-4bdf-975b-a1975309a3e6)

- *Name*: Gives your class a name.
- *Folder*: Clicking on the X next to this field allows you to create a folder for class organization.
- *Class Locked*: Clicking this will disable the class from being used at character creation, however; you can set this class to players via event command.
  
### Sprite & Face

![Sprite and Face](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ec59884a-82cf-4a7a-a41b-2e173e1f4295)

- *Gender*: Selects the gender which you want to add.
- *Add Sprite*: You can view your sprite and face selection on the right of this. Your sprites will be located in your clients `resources\entities` folder. Your faces will be located in your clients `resources\faces` folder.
- *Remove Sprite*: You can remove a sprite from the list by clicking on the sprite name in the box on the left and then clicking this to remove.

### Regen

![Regen](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/832bd473-c97b-4b86-a0ba-3bb1582f0c53)

- *HP (%)*: Setting this allows you to set the classes HP regen percentage per tick. Tick timer for regen can be modified inside the servers config file. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.
- *MP (%)*: Setting this allows you to set the classes MP regen percentage per tick. Tick timer for regen can be modified inside the servers config file. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.

### Leveling Up

![Leveling Up](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b5f0f1dd-d2b5-472a-b228-beb019837e8f)

- *Base Exp to Level*: This sets a first level exp base value.
- *Exp Increase (Per Level %)*: Use this to increase the following levels exp bases by percentage.
- *Exp Grid*: This shows you the calculated exp grid based on the values you've used. You can reset the grid back to default.
- *Static & Percentage*: Toggling this option allows you to award points per level based on a static value or by percentage value.
- *Max HP (+)*: Gives the class the amount of max hit points per level.
- *Max MP (+)*: Gives the class the amount of max mana points per level.
- *Armor (+)*: Gives the class the amount of defense points per level.
- *Magic Resist (+)*: Gives the class the amount of magic resist points per level.
- *Attack (+)*: Gives the class the amount of attack points per level.
- *Ability Power (+)*: Gives the class the amount of magic attack points per level.
- *Speed (+)*: Gives the class the amount of speed points per level.
- *Points (+)*: Gives the class the amount of points per level which they can use to boost any stat except Max HP/MP.

### Spawn Point

![Spawn Point](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ca3939a0-962b-41c3-a19d-2cd090212dba)

- *Map*: Allows you to set a map for a spawn point. This affects the class starting spawn as well as respawning unless force changed within an Event.
- *X*: Allows you to set the X position of the map for spawning.
- *Y*: Allows you to set the Y position of the map for spawning.
- *Dir*: Allows you to set the direction which the class will be facing.
- *Open Visible Interface*: Allows you to click the positioning and map in this visible interface! Just select the map in the list, then click at the X/Y of where you want your class to spawn.

### Base Stats

![Base Stats](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/e32a3d46-88fb-450d-b0df-c8ba0f717fa0)

- *HP*: Gives the class the amount of starting health points.
- *MP*: Gives the class the amount of starting mana points.
- *Armor (+)*: Gives the class the amount of starting defense points.
- *Magic Resist (+)*: Gives the class the amount of starting magic resist points.
- *Attack (+)*: Gives the class the amount of starting attack points.
- *Ability Power (+)*: Gives the class the amount of starting magic attack points.
- *Speed (+)*: Gives the class the amount of starting speed points.
- *Points (+)*: Gives the class the amount of starting points which they can use to boost any stat except Max HP/MP.

### Spells

![Spells](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/71a74204-c892-42eb-96cb-f60f5f6ee5c7)

- *Spell*: You can select a spell from the drop down list. If you don't have any spells created, refer to the Spell Editor in the 'Game Editors' tab on the main interface.
- *Level*: You can define at which level the class will get the spell.
- *Add Spell*: With these two above settings selected, click this to push it to the list.
- *Remove Spell*: Clicking a spell in the list and clicking this will remove the spell from the list.

### Spawn Items

![Spawn Items](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b4b2791b-4e95-4fa4-8b40-151dafce9ade)

- *Item*: You can select an item from the drop down list. If you don't have any items created, refer to the `Item Editor` in the `Game Editors` tab on the main interface.
- *Amount*: You can select an amount of which of that item you want to give at the start.
- *Add Item*: With these two above settings selected, click this to push it to the list.
- *Remove Item*: Clicking an item in the list and clicking this will remove the item from the list.

### Combat (Unarmed)

![Combat Unarmed](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/82166ad7-8f21-4574-af0a-1d78325df985)

- *Base Damage*: Setting this will give the class a raw base damage value.
- *Crit Chance (%)*: Setting this will increase the crit chance percentage.
- *Crit Multiplier (Default 1.5x)*: Setting this will increase the crit damage based on a multiplier of the base damage.
- *Damage Type*: Setting this will allow you to select whether the damage is Physical, Magic or True. True damage negates resistance.
- *Scaling Stat*: Setting this will link the base damage with the class stat selected here.
- *Scaling Amount (%)*: Setting this will scale the scaling stat based on percentage. Example, if the class has 10 Attack and its scaled amount is set at 50%. The base damage will include 5 Attack as base damage before resistances.
- *Sprite Attack Animation*: You can select a sprite attack animation here. The sprite needs to be located in your clients `resources/entities` folder and they must be in `.png` format with the naming convention, `spritename_attack_customname.png`. This option will override the engine default sprite animation named, `spritename_attack.png`.
- *Extra Attack Animation*: You can select an extra attack animation here. If you don't have any animations created, refer to the `Animation Editor` in the `Game Editors` tab on the main interface.

### Attack Speed
- *Modifier*: Setting this will allow you to set an attack speed modifier.
- *Value*: Allows you to set the modifier value based in (ms).
