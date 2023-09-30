---
title: Conditions
---
## Overview
>Dynamic Requirements are used for conditional spawning and/or usage. When used, you can disable spawning or usage until the condition(s) are met.

![Dynamic Requirement](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b862e916-e132-4ba8-bf9f-6d956d2e0ea6)

1. Click `Add List` to add a `New Condition List`. You can change the name of the list after you've added it.
2. Click `Add Condition` to open the `Add/Edit Condition` window.

![Variable](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8bbdcd24-38bb-493c-bca4-44028b473503)

## Manage Conditions
>The Add/Edit Conditions allow you to add a condition to disable spawning and/or usage until the condition(s) are met. We will go over how each condition works. The global options are described here.

- *Has Else*: Ticking this box will check the next condition in the `Conditions` box.
- *Negated*: Ticking this box is a reversal of the condition check, Example: NOT (Variable Is).

### Variable Is

![Select Variable](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2dbb77ef-7a16-4d28-a546-0cc770ba3ea3)

- *Player Variable*: Allows you to select a player variable for conditional checking.
- *Global Variable*: Allows you to select a global variable for conditional checking.
- *Guild Variable*: Allows you to select a guild variable for conditional checking.
- *User Variable*: Allows you to select a user variable for conditional checking.

>Depending on which type of variable it is (`Integer`,`Boolean`,`String`). We will cover these in order.

#### Integers

![Integer](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2f965d54-403d-4893-afa2-7a204aee94e2)

- *Comparator*: Allows you to select a comparator to check integers. These options are as follows: (`Equal To`,`Greater Than or Equal To`, `Less Than or Equal To`, `Greater Than`, `Less Than`, `Does Not Equal`)
- *Static Value*: Allows you to select a static value to use the comparator on.
- *Player Variable Value*: Allows you to select a player variable to use the comparator on.
- *Global Variable Value*: Allows you to select a global variable to use the comparator on.
- *Guild Variable Value*: Allows you to select a guild variable to use the comparator on.
- *User Variable Value*: Allows you to select a user variable to use the comparator on.
- *Time System*: Allows you to use time system to use the comparator on.

#### Booleans

![Boolean](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/fcf347d4-37aa-41cd-8bd4-f7f66f4678d7)

- *Comparator*: Allows you to select a comparator to check booleans. The options are (`Equal To`, `Not Equal To`)
- *True/False*: Allows you to set true or false to use the comparator on.
- *Player Variable Value*: Allows you to select a player variable to use the comparator on.
- *Global Variable Value*: Allows you to select a global variable to use the comparator on.
- *Guild Variable Value*: Allows you to select a guild variable to use the comparator on.
- *User Variable Value*: Allows you to select a user variable to use the comparator on.
  
#### Strings

![String](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/cd71765a-07a3-4852-a0aa-8290502d5db2)

- *Conparator*: Allows you to select a comparator to check strings. The options are (`Equal To`, `Contains`).
- *Static Value*: Allows you to set a string to use the comparator on. `Equal To` is case sensitive. Text variables work in this field! Click [here](https://www.ascensiongamedev.com/topic/749-event-text-variables/) for more information about them.

### Has Item

![Has Item](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/fa89c860-9995-4998-acbc-105f20e7d05f)

- *Amount Type*: Allows you to use a manual amount type or a variable value amount type.
- *Has at least*: When using manual type, you can type the amount value in this field.
- *Player Variable*: When using variable type, you can select a player variable to check the amount value of an item.
- *Global Variable*: When using variable type, you can select a global variable to check the amount value of an item.
- *Guild Variable*: When using variable type, you can select a guild variable to check the amount value of an item.
- *Item*: Allows you to select the item you want to check if a player has.
- *Check Bank?*: Ticking this box will allow you to check the players bank for the item and amount.

### Class Is

![Class Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/5834f5c9-76c1-4516-965b-a15749bb0c08)

- *Class*: Allows you to select a class to use the comparator on.

### Knows Spell

![Knows Spell](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c8fc5735-7a93-4918-83be-98fc81fb8be5)

- *Spell*: Allows you to select a spell to use the comparator on.

### Level Or Stat Is

![Level Or Stat Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/11152128-be29-4e3f-bc41-58986329dcab)

- *Level or Stat*: Allows you to select the level or stat to check.
- *Comparator*: Allows you to select the comparator to check the level or stat to. These options are as follows: (`Equal To`,`Greater Than or Equal To`, `Less Than or Equal To`, `Greater Than`, `Less Than`, `Does Not Equal`)
- *Value*: Allows you to set a value to use the comparator on.
- *Ignore equipment & spell buffs.*: Ticking this box will ignore the stat increases done by equipment or spell buffs.

### Self Switch Is

![Self Switch Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/6d2a856d-03bf-487f-a4c5-bb1c74eabc45)

- *Self Switch*: Allows you to select which self switch to check. Options are (`A`, `B`, `C`, `D`)
- *Is*: Allows you to select true or false to the comparator.
 
### Power Level Is

![Power Level Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2da52717-b032-44cf-a321-2c54eea2bff1)

- *Power*: Allows you to select (`Mod or Admin`, `Admin`) to use the comparator on.

### Time Is Between

![Time is Between](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/057d26dd-fb16-49c6-b275-ea555f955843)

- *Start Range*: Allows you to set the start range, the range is defined in `Time Editor` from the `Game Editors` tab on the main interface, as per day/night cycles.
- *End Range*: Allows you to set the end range, the range is defined in `Time Editor` from the `Game Editors` tab on the main interface, as per day/night cycles.

### Can Start Quest

![Can Start Quest](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2232617f-ce0a-4c08-8b99-83b6a3869db8)

- *Quest*: Allows you to select a quest from the `Quest Editor` to use the comparator to. You can go to `Quest Editor` from the `Game Editors` tab on the main interface to create a quest!

### Quest In Progress

![Quest In Progress](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/edec113a-2480-452b-b642-9fcea4d50794)![Task Types](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/cb37be9f-2d76-419b-a4de-bc6ec9a2206c)

- *Quest*: Allows you to select the quest you want to check in progress.
- *Is*: You can select the task comparator here.
- *Task*: Allows you to select the task to use the comparator on.

### Quest Complete

![Quest Complete](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/5dd5ee80-3761-4261-bec6-d531e515948c)

- *Quest*: Allows you to select a quest from the `Quest Editor` to use the comparator to. You can go to `Quest Editor` from the `Game Editors` tab on the main interface to create a quest!

### No NPCs On Map

![No NPCs On Map](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/aa5d287f-2fe2-4990-8461-38438c56ff3f)

- *Specify NPC?*: Allows you to specify a certain NPC to use the comparator on. Otherwise it will check if No NPCs are on the map.

### Gender Is

![Gender Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/799ee44d-49da-490c-804f-d97235f7c7c0)

- *Gender*: Allows you to select the gender to use the comparator on.

### Map Is

![Map Is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/540327e5-9425-466f-98b3-d4e060b40b06)

- *Select Map*: Allows you to select a map in the list to use the comparator on.

### Item Equipped Is

![Item Equipped is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/a338b94e-9719-4c57-8f78-bcca2228bcee)

- *Item*: Allows you to select the item which you want to check if is equipped.

### Has X Free Inventory Slots

![Has X Free Inventory Slots](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/01bdfa2f-ab72-4d5c-be8d-54cca86b03c0)

- *Amount Type*: Allows you to use a manual amount type or a variable value amount type.
- *Has at least*: When using manual type, you can type the amount value in this field.
- *Player Variable*: When using variable type, you can select a player variable to check the amount value of inventory slots open.
- *Global Variable*: When using variable type, you can select a global variable to check the amount value of inventory slots open.
- *Guild Variable*: When using variable type, you can select a guild variable to check the amount value of inventory slots open.

### In Guild With At Least Rank

![In Guild With At Least Rank](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4979283f-ca01-4cae-ab03-ac14637f57f0)

- *Rank*: Allows you to select which rank to use the comparator on. The options are (`Master`, `Officer`, `Member`, `Newbie`)

### Map Zone Type Is

![Map Zone Type is](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/1becf3dd-9365-42d2-bebc-23b206127a34)

- *Zone Type*: Allows you to select which map zone type to use the comparator on. The options are (`Normal`, `Safe`, `Arena`)

### Check Equipped Slot

![Check Equipped Slot](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/fe07c7a4-b408-44d5-9361-cece22dacc64)

- *Slot*: Allows you to select which slot you want to check equipped. The options are (`Helmet`, `Armor`, `Weapon`, `Shield`, `Boots`)
