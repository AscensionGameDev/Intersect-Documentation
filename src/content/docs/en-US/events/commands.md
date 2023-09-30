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
##### Condition: Has item...
##### Condition: Class is...
##### Condition: Knows ability...
##### Condition: Level or Stat is...
##### Condition: Self Switch is...
##### Condition: Power level is...
##### Condition: Time is between...
##### Condition: Can Start Quest...
##### Condition: Quest Completed...
##### Condition: No NPC's on Map...
##### Condition: Gender is...
##### Condition: Map is...
##### Condition: Item Equipped is...
##### Condition: Has X Free Inventory slots...
##### Condition: In Guild with at least Rank...
##### Condition: Map Zone Type is...
##### Condition: Check Equipped Slot...
