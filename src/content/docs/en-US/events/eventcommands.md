---
title: Event Commands
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

#### **Text Formatting**
The **Show Text** and **Show Options** commands allow you to format text using special commands. One of the supported formatting options is **colorizing text**.

##### **Text Color**
You can change the color of displayed text using the `\c{}` tag. This supports:

- **Named colors:**
  - `black`
  - `red`
  - `green`
  - `blue`
  - `yellow`
  - `orange`
  - `gray`
  - `cyan`
  - `pink`
  - `magenta`
  - `lightcoral`
  - `forestgreen`
  - `orangered`

**Example:**  
`\c{red}This is red text\c{}`  

- **Hex color codes:**  

**Example:**  
`\c{#87CEEB}This is sky blue text\c{}`  

**Example usage:**

![image](https://github.com/user-attachments/assets/511d5389-befb-43fa-b029-8fbbdd76122f)



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
Allows you to check against the in-game time frame. To use this properly, you will need to have configured your time ranges within the [Time Editor](../design/time.md)

![Intersect_Editor_UUdzg0i4ty](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/46f3fbe7-d436-46ad-86b0-b6aa4b4d638d)

- *Start Range Dropdown*: The start of your time range.
- *End Range Dropdown*: The end of your range

##### Condition: Can Start Quest...
Checks if the player can start a selected quest. To use this you will need to have at least one quest in the [Quest Editor](../design/quests.md)

![Intersect_Editor_UV8oOsLUOp](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d2ff9693-8054-4f85-a2c8-ebca818d8ff4)

- *Quest Dropdown*: Select the quest you want to check if they can start.

##### Condition: Quest Completed...
Checks if the player has completed the selected quest. To use this you will need to have at least one quest in the [Quest Editor](../design/quests.md)

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

---

## Player Control
The following commands allow you to manipulate various aspects of the player character.

### Restore HP
Allows you to add to the health (HP) of a player character.  Negative numbers will subtract from the HP Value.

![Intersect_Editor_ereex6B0VU](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/f48c5eb9-1e10-43db-ae13-ab1cf395030c)

- *Set Health*: Enter the numerical value you wish to increase or decrease the health vital.

### Restore MP
Allows you to add to the Mana (MP) of a player character. Negative numbers will subtract from the MP value.

![Intersect_Editor_HrxJeEPJlA](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/f6ddef42-d1bb-40d8-94a6-a022d4dcce28)

- *Set Mana*: Enter the numerical value you wish to increase or decrese the mana vital.

### Level Up Player
Increases the player level by 1.

### Give Experience
Allows you to give experience to the player character.

*Amount Type*: Select whether the type of experience is to be entered manually or from a variable.

Manual Experience

![Intersect_Editor_HrxJeEPJlA](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/b6f34295-0e59-4a41-8a73-706793a3eb8d)

- *Give Experience*: Enter the value of experience you wish to give.

Variable Experience

![Intersect_Editor_ArAwpUzjdP](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/77e9a972-b586-4e21-9c73-95abd76cb09b)

- *Variable Type Radio*: Select whether you are using a Player, Guild, or Global Variable. Must be Integer type.
- *Variable Dropdown Box*: Select the variable you wish to use to give experience.

Note: You can give negative experience via a variable type.

### Change Level

Allows you to specifically set the level of the player character.

![Intersect_Editor_ArAwpUzjdP](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/e3e3d20b-dca6-4de9-88df-acafea1dab0c)

- *Set Level*: Set the specific level you wish to have the player character made into.

### Change Spells
Allows you to add or remove spells from a player character's spellbook.

![Intersect_Editor_4DL2dQPpHZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/e3462c9a-e0dd-4f11-b2bf-4bc2e676d241)

- *Action*: Select whether you add or remove a spell.
- *Spell*: Select the spell you wish to add or remove.
- *Remove Bound Spell Checkbox*: Allows you to remove a spell that has been declared as "[bound](../design/spells.md/#general)".

### Change Items
Allows you to Give or take items from the player's inventory.

![Intersect_Editor_4DL2dQPpHZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/7fd79fdb-1ba7-4b1f-978d-458af1c0f7d4)

- *Action*: Select whether you are to Take or Give an item.
- *Item*: The item you are giving or taking.
- *Method*: If giving an item, select the method to handle it.
  - *Normal*: Will give the item if there is room to do so. Fails if the player does not have room in inventory.
  - *Allow Overflow*: Will give the item even if the user does not have room in their inventory.
  - *Up to Amount*: Will give the item to the player only if they have room in their inventory until the quantity selected is reached, or their inventory is full.
- *Amount Type*: Select method for deciding the amount you are giving. Manual you declare a given quantity, Variable you select the variable to use. Variable must be an integer to work.
- *Amount*: When manual amount type is selected, you will select the quantity you wish to give.

### Change Sprite
Allows you to change the sprite of the player's character. Sprites are found in your `resources\entities` folder and should be .png format.

![Intersect_Editor_4DL2dQPpHZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/8351776c-7c53-49b3-bcf2-c3e12bcdea56)

- *Sprite*: Select the sprite you wish to change them to.
- *Preview Box*: Allows you to see a preview of the sprite you have selected.

### Change Player Color
Allows you to change the color of the player sprite.

![Intersect_Editor_4DL2dQPpHZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/b89061e4-4cf9-41f7-beb2-c95c64d1d1f8)

- *Red*: Set's the Value of the red color channel. Range from 0-255.
- *Blue*: Set's the Value of the blue color channel. Range from 0-255.
- *Green*: Set's the Value of the green color channel. Range from 0-255.
- *Alpha*: Set's the Value of the alpha transparancy color channel. Range from 0-255.

Example:

![Intersect_Client_JnkfMLDdmP](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/cf76c129-4cde-457f-a594-d8b309a0e394)

### Change Face
Allows you to change the face used for the player character. Faces are found in your `resources\faces` folder and should be .png format.

![Intersect_Editor_uZddHfCntQ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/3249eae1-7e03-4c23-8815-511c23a4085c)

- *Face*: Select the face you wish to use.  
- *Preview Box*: Allows you to see a preview of the face you have selected.

### Change Gender
Changes the player character's gender to the desired value.

![Intersect_Editor_89srv4D7sW](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/0a2c847e-4c8c-43aa-a292-543d7495963b)

- *Gender*: Select whether to set to Male or Female gender.

### Set Access
Allows you to set a player to have elevated access.  BE CAREFUL USING THIS!!!

![Intersect_Editor_51wuJmfvIw](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/2c812024-14d2-4415-b6e3-c02609f55c92)

- *Access*: Select the access level you wish to give to the player.
  - *Regular User*: This is a standard access level for players.
  - *In-Game Moderator*: This gives moderator access to the player.  BE CAREFUL USING THIS!!!!
  - *Owner/Designer (Allows editor access)*: This gives full admin access to the user.  BE CAREFUL USING THIS!!!!

Note:  Be aware that using this event command can compramise the security of your game project and you should only give such access to those you trust.  Moderator will have access to anything you have placed a check on for access level Mod.  Owner/Designer however will have all the same access rights that you do. So....

BE. CAREFUL. USING. THIS. PLEASE!!!!!!!

### Change Class
Allows you to change the class of a character.

![Intersect_Editor_V5E19nq1sG](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/0f104e90-f3f8-4003-9186-e4fd9a4e9d68)

- *Class*: Select the class you wish to change the character to.

### Equip/Unequip Item
Allows you to force equip or unequip an item from a character.

![Intersect_Editor_JkwdgdIEWa](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/d37e860c-b530-4470-9837-e93e59159d1b)

- *Item*: Select the item you wish to equip.
- *Unequip? Checkbox*: If selected, will unequip the item listed above instead.

### Change Name Color
Allows you to set the display color of a character name.

![Intersect_Editor_F8ztCUKgKh](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/713815d4-367a-4a40-8743-a41fee11f271)

- *Select Color*: Allows you to select the color you want to change the player name to.
- *Override Admin Name Color?*: If selected, will override the default admin color given to admin access levels.
- *Remove Name Color?*: If selected, will clear any name color edits done previously.

### Change Player Label
Allows you to apply a label to a character that is visible beside their name.

![Intersect_Editor_nXSq7CfxZp](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/6751aca4-3e5e-4928-a7c6-f1fdb117c01e)

- *Label Position*: Select whether you want the label to be above or below the player name.
- *Value*: Enter the text, [chat commands](..design/chatcommands.md) or string type variable you wish to set the label to.
- *Select Color*: Allows you to set the color of the label.
- *Copy Player Name Color?*: If selected, color will copy the player name instead of what is selected above.

Example
![Intersect_Client_vFmzran69r](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/f92aabfe-68d7-4ecc-87f3-bdec2e72231d)

### Change Player Name
Set's the player name to the selected variable.

![Intersect_Editor_bB1gtr0X7M](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/3e1ab175-ada0-402d-8b87-b324a936e9dd)

- *Player Variable*: Select variable to use as the new player name.

### Reset Stat Point Allocations
Resets the character at current level as if they have not spent any stat points, allowing them to redistribute their points.

---

## Movement
These commands allow the manipulation of movement of the player or event. Many of these are useful to create scripted events such as an in-game cutscene.

### Warp Player
Allows you to warp the player to a specific map and location.

![Intersect_Editor_trSQiXmTB9](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/09b913a5-8de8-4416-b968-2c0e26c80663)

- *Map*: Select the map you wish to move to.
- *X Slider*: Select the 'X' value you wish to place the player on the selected map.
- *Y Slider*: Select the 'Y' value you wish to place the player on the selected map.
- *Dir*: Select the facing you wish to place the player, or if they will retain the direction they had prior to the warp.
- *Open Visual Interface*: Open's the map in question, allowing you to click exactly where you want the player to appear.
- *Change Instance Checkbox*: When checked, will allow you to set which instance category the new map will be in.

### Set Move Route
Allows you to setup a move route for the event or player.

![Intersect_Editor_JTegW46oi5](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/de3ef983-afe8-4a11-9c2e-9253e13b1e9d)

- *Entity Selection Box (Green)*: Select whether this move action will apply to the player or to the event itself.
- *Movement List (Red)*: Shows the list of currently applied move commands and the order they will be applied.
- *Command Box (Blue)*: List of commands that can be applied. Each move command is applied once.
  - *Move Up/Down/Left/Right*: Moves the entity in the desired cardinal direction.
  - *Move Up Left/Up Right/Down Right/Down Left*: Moves the entity in the desired diagonal direction.
  - *Move Randomly*: Moves the entity in any random directon.
  - *Step Forward*: Moves the entity one step forward in current facing direction.
  - *Step Backward*: Moves the entity one step backard while maintaining facing.
  - *Face Up/Down/Left/Right*: Faces the entity in the desired direction without leaving the current tile.
  - *Turn 90° Clockwise*: Turns the entity right/clockwise one facing.
  - *Turn 90° Counter Clockwise*: Turns the entity left/counter clockwise one facing.
  - *Turn 180°*: Turns the entity to face the opposite direction of it's current facing.
  - *Turn Randomly*: Turns the entity to a random facing.
  - *Wait 100ms/500ms/1000ms*: Pauses the movement route for the selected amount of time.
- *Ignore if Blocked*: If checked, the entity will follow the movement route even if it's path is blocked.
- *Repeat Route*: If checked, the route will repeat once it's reached the end of the route.

### Wait for Route Completion
Allows you to command an event to wait for a route completion declared using [Set Move Route](#set-move-route)

![Intersect_Editor_CItEFj2vKt](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/6ab07bdf-6b6e-4ae9-8e7e-6ec15787b0bc)

- *Entity*: Select whether you are waiting for the player or the event to complete.

### Hold and Release Player
Allows you to block inpute from the player or release control back to them.

### Spawn NPC
Allows you to spawn an NPC in relation to the event.

![Intersect_Editor_naQzgyLTV4](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/319af1bb-75e6-4c68-9222-207553aa86d4)![Intersect_Editor_ZzpnZkCwTF](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/cde2acfc-a4e6-46af-bc93-0c66e5efdb9f)

- *Spawn Type*: Select whether the entity will spawn on or around the entity or select a specific tile you wish it to spawn.

#### Specific Tile
- *Map*: Select the map it will spawn on.
- *X*: Select the 'X' coordinate for the spawn.
- *Y*: Select the 'Y' coordinate for the spawn.
- *Dir*: Select the directon the NPC will spawn facing.
- *Open Visual Interface*: Opens a window of the map, allowing you to click the spot for the spawn.

#### On/Around Entity
- *Entity*: Select if the spawn will be around the player or the event itself.
- *Relative Location Grid*: Use the 5x5 grid to select the position of the spawn relative to the entity, which is displayed as the 'E' at the center.
- *Relative to Entity Direction*: If checked, the spawn will take the direction of the entity in question with UP being the default facing.  If a square is selected in the upper region and the character is facing right, then the NPC will spawn to the right as to keep the entity in front.

### Despawn NPC
Will despawn NPC's associated with the event. This will not despawn NPC's spawned from other events or the map editor.

### Hide/Show Player
Will hide the player or show the player.

---

## Special Effects
These commands allow you to manipulate the change the presentation in some way.

### Play Animation
Plays a specified animation at a location designated.

![Intersect_Editor_aFRwopdhBB](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/0424e3ac-736b-4c26-a825-c1f75b7afe3c)![Intersect_Editor_9cOyfrVqcv](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/fdd6cd0b-b060-467c-a1f9-12b37c5bb948)

- *Animation*: Select the animation you wish to play. These must first be created in the [Animation Editor](../design/animation.md).
- *Spawn Type*: Select whether this animation will be on a Specific Tile, or On/Around Entity

#### Specific Tile
- *Map*: Select the map the animation will spawn on.
- *X*: Select the 'X' coordinate for the spawn.
- *Y*: Select the 'Y' coordinate for the spawn.
- *Dir*: Select the directon the animation will spawn facing.
- *Open Visual Interface*: Opens a window of the map, allowing you to click the spot for the spawn.

#### On/Around Entity
- *Entity*: Select if the spawn will be around the player or the event itself.
- *Relative Location Grid*: Use the 5x5 grid to select the position of the spawn relative to the entity, which is displayed as the 'E' at the center.
- *Relative to Entity Direction*: If checked, the spawn will take the direction of the entity in question with UP being the default facing.  If a square is selected in the upper region and the character is facing right, then the animation will spawn to the right as to keep the entity in front.
- *Rotate Relative to Direction*: If checked, the animation will rotate relative to the entity's facing.

### Play BGM
This will play a background music track, overriding the one currently being played in the map.

![Intersect_Editor_DiprKNgyZi](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/66976043-c394-479d-b54e-15aca4d79b97)

- *BGM*: Select the track you wish to play. These must be in `resources\music` and must be in the .ogg file format.

### Fadeout BGM
This will perform a slow fade on any background music currently playing.

### Play Sound
Allows you to play a specific sound file.

![Intersect_Editor_MnsLOGSUJx](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/cba5894d-f81d-47fd-938f-6c308e8a4f13)

- *Sound*: Select the sound you wish to play. These must be in `resources\sounds` and must be in the .wav format.

### Stop Sounds
This stops all sounds currently playing.

### Show Picture
This will allow you to display a picture over the client.

![Intersect_Editor_lD8btEhXH4](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/1aad65af-5c75-4f7e-b96a-ddc69421eacf)

- *Picture*: Select the image you wish to display. Image files are located in `resources\images` and can be .bmp, .png, or .jpg format.
- *Size*: Select the aspect ratio for the imate being displayed.
  - *Original*: Shows the image as is.
  - *Full Screen*: Stretches the image to fit the screen.
  - *Half Screen*: Stretches the image to fit half the screen.
  - *Stretch to Fit*: Stretches image to the nearest dimension to make the image fit the screen.
- *Hide After (ms)*: Hides the image automatically after the selected milliseconds. 
- *Click to close Image*: If checked, overrides the *Hide After* option and waits for the player to click the image to close it.
- *Wait until Closed*: IF checked, will pause the event process until after the image is closed.

### Hide Picture
Hides a picture that has already been displayed by the event.

---

## Quest Control
These commands allow you to control the starting, stopping, and overall flow of quests. To make use of any of these commands you will need to have configured at least one quest in the [Quest Editor](..\design\quests.md)

### Start Quest
Allows you to start or offer a quest to the player.

![Intersect_Editor_HgAkxuS2pP](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/12ad0c5f-6102-4572-b690-0b1d6b2503a3)

- *Quest*: Select the quest you wish to start.
- *Show Offer Window*: If checked, will display the offer window where the user can accept or reject a quest.

### Complete Quest Task
Allows you to complete a task on event driven quests tasks.

![Intersect_Editor_e9qg56UzqC](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/c63bd2bb-7116-413c-abd4-26ea7e3f0e3c)

- *Quest*: Select the quest you wish to complete a task for.
- *Task*: Select the task that is to be completed.

### End Quest
Commands the event to declare a quest as ended.

![Intersect_Editor_BggGcEIhU7](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/6e3aef91-1814-456f-be10-258c1aca2653)

- *Quest*: Select the quest you wish to complete.
- *Do not run completion event?*: If checked, will not run the completion events as setup in the quest editor.

---

## Etc
These commands are extra commands that do not fit elsewhere.

### Wait
Allows you to force the event process to wait a desired amount of time.

![Intersect_Editor_2OHF9tfZyy](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/31b18f4a-e8bc-4301-9e10-f7fa62017d0e)

- *Wait (ms)*: Enter the number of milliseconds you wish to wait.

---

## Shop and Bank
These commands allow you to open the various shop and bank windows.

### Open Bank
Allows the player to open their personal bank.

### Open Shop
Allows the player to open a given shop interface. To use this you must have at least one shop configured in the [Shops Editor](..\design\shops.md).

![Intersect_Editor_4E1aLbxI9d](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/edeb6bb4-72e5-45ce-a020-61fea5a5f409)

- *Shop*: Select the shop interface you wish to display to the player.

## Open Crafting Station
Allows the player to craft at a configured crafting table. To use, you will need to configure at least one crafting table in the [Crafting Table Editor](..\design\crafting.md).

![Intersect_Editor_vivXXl1NFR](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/bbbfbe18-9bf1-40c5-89ff-f6b2d783ac6a)

- *Table*: Select the crafting table you wish to display to the player.

---

## Guilds
Allows the various guild functions for creating or disbanding and managment.

### Create Guild
Allows the creation of a guild.

![Intersect_Editor_vivXXl1NFR](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/4e75983a-dfe0-4794-bbf3-f828ac128d4b)

- *Player Variable containing Guild Name*: This variable will be made into the guild name.

### Disband Guild
Allows the disbanding of the players guild.

### Open Guild Bank
Allows the plaeyr to open the guild bank.

### Set Guild Bank Slots Count
Allows to set the amount of bank slots the guild has. Requires the use of an integer variable from the variable editor.

![Intersect_Editor_PVhnmDq7ZS](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/b7535253-1ed7-407e-ba4b-5b9a3876c4cc)

- *Variable Selection Radio*: Selects the type of variable from Player, Global, or Guild.
- *Variable Dropdown Box*: Selects the variable to use.
