---
title: Commands
---
Commands are sorted into various categories and allow you instruct and manipulate your events in various ways.

---

## Dialogue
These commands allow you to display text in various ways to players

### Show Text
Allows you to display a textbox that will pop up for the player.

![Intersect_Editor_FIY6fUUBWB](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/cfa9d9b1-2993-471b-b331-f4ad7b18277d)

- *Text*: This is the text to be displayed. Allows the use of Chat commands.
- *Face*: This allows you to select a face that will appear in the chatbox. These are in your "\resources\faces\" folder. You can see a preview of the face in the box to the side.

### Show Options
Allows you to give options to the player.

![Intersect_Editor_ZO0JIt7xho](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/a0fce1b6-9d8c-4477-92c9-bf9b230f47b0)

- *Text*: This is the text to be displayed. Allows the use of Chat commands.
- *Option 1-4*: This will allow you to set the text for the button the player sees. 
- *Face*: This allows you to select a face that will appear in the chatbox. These are in your "\resources\faces\" folder. You can see a preview of the face in the box to the side.

#### Using the Options Command

![Intersect_Editor_9FrXetZSYg](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/ba6759a3-db88-4d1c-bed7-0abc2896066c)

When you use the Options Command, you will have the associated tree for all options you entered. The event will work through the branch based on the player's input.

![Intersect_Editor_0mvcMwBwCg](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/edc4cea1-d458-41e4-992c-7d9bd1ea264f)

### Input Variable
Asks the player to type something in, and then set it to a variable.

![Intersect_Editor_HHK53z6F26](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d765d083-d9a8-4223-b216-f8351fbac1d2)

- *Text*: This is the text displayed to the user, typically telling them what they are meant to enter.
- *Variable Type*: The four radio buttons allow you to select if this is a Player, Guild, Global, or User variable.
- *Variable Selection Box*: The dropdown box will show you a list of all variables you have of the type selected.
- *Minimum Value*: The minimum number of characters for the player to enter.
- *Maximum Value*: The maximum number of characters for the player to enter.

### Add Chatbox Text
Displays text in the chat window.

![Intersect_Editor_MijvVbAruJ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/2804cabb-e8f3-4732-adce-2fab03b035a1)

- *Text*: This is the text to be displayed. Allows the use of Chat commands.
- *Color*: The color the text will appear in the chat window.
- *Channel*: This decides what chat channel the text will appear in.
- *Show Chat Bubble*: This allows the event to display the text as a chat bubble like you would see from players.

---

## Logic Flow
These commands allow you to control the flow of the event and edit variables.

### Set Variable
Allows you to set a variable to a desired value.

![Intersect_Editor_Siu5JV0GJr](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/c407a7ee-9ed9-4f77-b773-0742d9411c93)

- *Select Variable Radio Button*: Select the type of variable you wish to set; Player, Global, Guild, or User.
- *Select Variable Dropdown*: Once the variable type is selected, all variables of the desired type will be shown here. Choose which you want to set.
- *Party Sync*: Check this box if the variable being set should be set across all players in the party.

#### Boolean Variable Type
These options are specific to boolean variables.

![Intersect_Editor_GXrqCu299W](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/c4276319-a9a4-46f1-b021-3c6ae19d7f30)

- *True*: Sets the variable to true.
- *False*: Sets the variable to false.
- *Player Variable Value*: Sets to the same value as the selected player variable.
- *Global Variable Value*: Sets to the same value as the selected global variable.
- *Guild Variable Value*: Sets to the same value as the selected guild variable.
- *User Variable Value*: Sets to the same value as the selected user variable.

#### Integer Variable Type
These options are specific to integer variables.

![Intersect_Editor_UkMSKPyk0S](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d0328375-b4a3-4f72-b450-5176a8d90c27)

- *Integer Variable Radio Selection*: Performs the selected operation.
  
 | Operation   | Usage
 | ---------   | --------------------
 | Set         | Sets the selected variable to the desired value.
 | Add         | Adds to the selected variable.
 | Subtract    | Subtracts from the selected variable.
 | Multiply    | Multiplies the selected variable.
 | Divide      | Divides the selected variable.
 | LShift      | Performs a left shift operation on the variable.  Effectively a division by 2 for each lshift
 | RShift      | Performs a left shift operation on the variable.  Effectively a multiplication by 2 for each lshift
 | Random      | Sets the selected variable to a random value between your selected Low and High ranges.
 | System Time | Sets the variable to the current HOST COMPUTER system time in unix timestamp format.

- *Static Value Radio*: Perform the top operation by a set value.
- *Player Variable Value*: Perform the top operation by using the selected player variable.
- *Global Variable Value*: Perform the top operaton by using the selected global variable.
- *Guild Variable Value*: Perform the selected opteration by using the selected guild variable.
- *User Variable Value*: Perform the selected operation by using the selected user variable.

### Set Self Switch
Sets the self switch values of the event to the desired true/false value.

![Intersect_Editor_9uGJE8XyPy](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/f2a43aa3-fab9-44cb-98b2-f76fc1ce82c4)

- *Set Self Switch*: Select which switch you are changing.
- *Value dropdown*:  Sets the selected switch to true or false.

### Conditional Branch
Conditional branches allow you to have different results based on variable values, user input, and many other options.  

![Intersect_Editor_9vHiAFsFQ5](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/e84d2ce1-90ec-48ae-b784-128f8e1a24da)
![Intersect_Editor_jqIO0b29Ih](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/e4aa49b8-baec-4f25-be6b-9cc43fb26300)

- *Condition Type*: Select what condition you will use to compare.
- *Has Else Checkbox*: Allows you to designate if there is an "else" statement to the condition.
- *Negated Checkbox*: If checked, it will look for the NOT version of the condition set.

The command screen will now have a section for if the condition is true, and if "Has Else" was selected, a direction to move on if the condition failed.

#### Condition Types
The following table is a summary of the condition types. Clicking any condition will take you to a breakdown of it's window.
| Condition                               | Use
| ---------------------------------------------------------------------------- | -----------------------------
| [Variable Is...](#condition-variable-is)                                     | Checks the value of a variable.
| [Has Item...](#condition-has-item)                                           | Checks if the player has an item.
| [Class is...](#condition-class-is)                                           | Checks the player's class.
| [Knows ability...](#condition-knows-ability)                                 | Checks if the player knows a given ability.
| [Level or Stat is...](#condition-level-or-stat-is)                           | Checks the players level or given stat.
| [Self Switch is...](#condition-self-switch-is)                               | Checks the value of a self switch.
| [Power level is...](#condition-power-level-is)                               | Checks the players power level.
| [Time is between...](#condition-time-is-between)                             | Checks the in-game time.
| [Can Start Quest...](#condition-can-start-quest)                             | Checks if the player can start a given quest.
| [Quest Completed...](#condition-quest-completed)                             | Checks if the player has completed a given quest.
| [No NPC's on Map...](#condition-no-npcs-on-map)                              | Checks if there are no NPC's on the selected map.
| [Gender is...](#condition-gender-is)                                         | Checks the gender of the player's character.
| [Map is...](#condition-map-is)                                               | Checks the Map that the player is currently on.
| [Item Equipped is...](#condition-item-equipped-is)                           | Checks if the player has a specific item equipped.
| [Has X free Inventory slots...](#condition-has-x-free-inventory-slots)       | Checks if the player has a specified number of free inventory slots.
| [In Guild with at least Rank...](#condition-in-guild-with-at-least-rank)     | Checks the rank of the player within their guild.
| [Map Zone Type is...](#condition-map-zone-type-is)                           | Checks the zone type of the map.
| [Check Equipped Slot...](#condition-check-equipped-slot)                     | Checks for items in equipment slots.

##### Condition: Variable is...
Checks the value of a variable.  
![Intersect_Editor_bF7xX845RW](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/88375bbb-0004-4095-b17a-dffdbe9d066e)

- *Variable Selection Radio*: Select the type of variable; Player, Global, Guild, or User.
- *Variable Selection Dropdown*: Selects the desired variable.
Numeric Variables will have the following...
- *Comparator*: Select how you are comparing the variable. Depending on the type of variable you will have the options:
  - *Equal to*: Check if the value is equal to your selection.
  - *Greater than or Equal to*: Check if the value is equal to or higher than your selection.
  - *Less than or Equal to*: Check if the value is equal to or lower than your selection.
  - *Greater than*: Checks if the value is greater than your selection.
  - *Less than*: Checks if the value is less than your selection.
  - *Does not Equal*: True if the value is anything BUT your selection.
- *Static Value Radio*: Perform the top operation by a set value.
- *Player Variable Value*: Perform the top operation by using the selected player variable.
- *Global Variable Value*: Perform the top operaton by using the selected global variable.
- *Guild Variable Value*: Perform the selected opteration by using the selected guild variable.
- *User Variable Value*: Perform the selected operation by using the selected user variable.
String Variables will have the following...
- *Comparator*: Select how you are comparing the variable. Depending on the type of variable you will have the options:
  - *Equal to*: Check if the variable has the string as listed.
  - *Contains*: Check if the string has the value listed anywher in it.
- *Static Value*: The text string you are checking against.
Boolean Variables will have...
- *Comparator*: Select how you are comparing the variable. Depending on the type of variable you will have the options:
  - *Equal to*: True if they match.
  - *Does not Equal*: True if they don't match.
- *True/False Radio*: Declares if you're comparing to true or false values.
- *Player Variable Value*: Perform the top operation by using the selected player variable.
- *Global Variable Value*: Perform the top operaton by using the selected global variable.
- *Guild Variable Value*: Perform the selected opteration by using the selected guild variable.
- *User Variable Value*: Perform the selected operation by using the selected user variable.


##### Condition: Has item...
This condition checks if the user posseses an item.

![Intersect_Editor_DxT8Ld8wnS](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/e5daa1e9-ff3a-4341-8c9b-47e9ac1e39e5)

- *Amount Type Radio*: Allows you to set manual value or refer to a variable for the amount.
- *Item Dropdown*: Select the item that you are checking for.
- *Check Bank*: Allows you to include the characters bank in addition to their inventory.


##### Condition: Class is...
Checks the player's class for the conditional.

![Intersect_Editor_7hgapRadDB](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/542ac77a-1532-40ea-8125-fd342e8e74fd)

- *Class Dropdown*: Select the class you want to check for.

##### Condition: Knows ability...
Check the players known abilities to see if they posses it.

![Intersect_Editor_ZRInGtaxpu](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d791673e-90a6-4b3d-9a6f-9146d40f6d4c)

- *Spell Dropdown*: Select the spell you want to check against.

##### Condition: Level or Stat is...
Check the player's level or a given stat and it's value.

![Intersect_Editor_9j4OZLkHIJ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/05472258-84ee-4e9d-9662-d1b9cf4469b4)

- *Level or Stat Dropdown*: Select which you are wanting to compare to.
- *Comparator*: Select how you are comparing the level or stat. Your options are
  - *Equal to*: Check if the value is equal to your selection.
  - *Greater than or Equal to*: Check if the value is equal to or higher than your selection.
  - *Less than or Equal to*: Check if the value is equal to or lower than your selection.
  - *Greater than*: Checks if the value is greater than your selection.
  - *Less than*: Checks if the value is less than your selection.
  - *Does not Equal*: True if the value is anything BUT your selection.
- *Value*: The value you are comparing against.
- *Ignor equipment & ability buffs checkbox*: Checking this will allow you to check against the character's raw values without any bonuses.


##### Condition: Self Switch is...
Allows you to compare against the value of a self switch.

![Intersect_Editor_UIPxyTEDOU](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/a05c2110-ea9a-48f3-a306-fb156c7102c1)

- *Self Switch Dropdown*: Select the self switch you wish to check.
- *Is Dropdown*: Select true or false for the value you wish to check.


##### Condition: Power level is...
Checks the player's access level.

![Intersect_Editor_yxgfZDvnQ2](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/c5c26b26-0230-40b1-88f2-dc5983bbe4ca)

- *Power Dropdown*: Select if you want Mod and Admin or just Admin power level checked.

##### Condition: Time is between...
Allows you to check against the in-game time frame. To use this properly, you will need to have configured your time ranges within the [Time Editor](https://docs.freemmorpgmaker.com/en-US/design/time/)

![Intersect_Editor_UUdzg0i4ty](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/46f3fbe7-d436-46ad-86b0-b6aa4b4d638d)

- *Start Range Dropdown*: The start of your time range.
- *End Range Dropdown*: The end of your range

##### Condition: Can Start Quest...
Checks if the player can start a selected quest. To use this you will need to have at least one quest in the [Quest Editor](https://docs.freemmorpgmaker.com/en-US/design/quests/)

![Intersect_Editor_UV8oOsLUOp](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d2ff9693-8054-4f85-a2c8-ebca818d8ff4)

- *Quest Dropdown*: Select the quest you want to check if they can start.

##### Condition: Quest Completed...
Checks if the player has completed the selected quest. To use this you will need to have at least one quest in the [Quest Editor](https://docs.freemmorpgmaker.com/en-US/design/quests/)

![Intersect_Editor_gVZWNKo60q](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/4f5d0ed6-6bb0-463d-b664-bb64e63768f8)

- *Quest Dropdown*: Select the quest you want to check if they have completed.

##### Condition: No NPC's on Map...
Allows you to check for any or specific NPC's on the map.

![Intersect_Editor_mAjW1JFXiL](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/ff06dfa9-cd33-485b-8298-db028efb692d)

- *Specify NPC Checkbox*: If selected allows you to select a specific NPC to check for on the map. If unchecked, it will check for all NPC's.
- *NPC Dropdown*: If you are specifying a NPC, this box will be avaliable.  Select the NPC you wish to check for.

##### Condition: Gender is...
Allows you to check against the gender of the player.

![Intersect_Editor_HngRHcgXG0](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/0485b96a-5356-4a7a-b0d3-51164e3cded1)

- *Gender Dropdown*: Used to select Male or Female for the condition.

##### Condition: Map is...
Allows you to check the condition if the player is on a specific map.

![Intersect_Editor_BrFsqnV0MN](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/0bebff3c-662a-4104-9dd8-039fbc2fbe88)

- *Select Map Button*: Allows you to select the map you wish to check against.
  
##### Condition: Item Equipped is...
Allows you to check if a player has a given Item equipped.  This does not include inventory slots.

![Intersect_Editor_vJifrG8Umu](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/ea04ba2b-8025-4d7b-af71-41b792c18edf)

- *Item Dropdown*: Select the item you want to check they have equipped.

##### Condition: Has X Free Inventory slots...
Checks the player's inventory to see if they have a desired number of inventory slots empty.

![Intersect_Editor_M5kgVVss2U](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/95ec73a9-9640-4092-99e6-cafeb7954999)

- *Amount Type*: Manual allows you to select a specific number.  Variable will use a variable to get the number.

##### Condition: In Guild with at least Rank...
Checks against the rank a player has within their guild.

![Intersect_Editor_sXYEgQrDLO](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/40030b22-b5ec-4278-8b4b-49b30e9b2c52)

- *Rank Dropdown*: Select the lowest rank you wish to check against.

##### Condition: Map Zone Type is...
Checks the zone type of the map.

![Intersect_Editor_2Ccbme3CB4](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/09130cdd-a241-4f38-8412-dd9376222dac)

- *Zone Type Dropdown*: Select the type of zone you wish to check for.

##### Condition: Check Equipped Slot...
Checks if a given equipment slot has any equipment in it.

![Intersect_Editor_7kuZ57fsQi](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/559402be-1d11-4133-81f9-4053709db5b2)

- *Slot Dropdown*: Select the equipment slot you wish to see if it has equpment in it.

### Exit Event Process
This command when reached will immediatly exit the event logic, keeping anything else below from running.

### Label and Go To Label
Label command allows you to set a label in your event commands and loop it back around to the label

![Intersect_Editor_a7wy7pCsxU](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/929325bb-b312-45ad-9612-8886e87bacf7)

- *Label Dropdown*: Allows you to name the label.

Labels are case sensitive and must be unique within the event.  When the event logic hits a label, nothing happens immediately.  Once it hits the Go To command, it jumps straight to the label listed and continues back down.

Example:

![Intersect_Editor_jUEW2Rpq98](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/23dfe78a-fdf4-4221-aaa1-a225524082c7)

You can see that the label is created at the top.  Goes down.  If you get to the "Go To Label" command by answering No twice, you'll go right back to the top.  Noe that the "Show Text" on the second no will never execute in this current setup.

### Start Common Event
Allows you to trigger a common event.

![Intersect_Editor_r4tXg7Sk1E](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/3cf8881f-659f-44a4-9033-c1ed1cb7ad44)

- *Common Event Dropdown*: Select the common event you wish to trigger.
