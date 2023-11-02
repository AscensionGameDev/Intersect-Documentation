---
title: Variables
---

## Overview
Creating variables are done via the `Variable Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/d984e2f1-11df-4e6d-bf40-f4666d2bf228)

## Managing Variables

![Management](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b4da65ff-3e1d-4602-bb00-7663c2460833)

- Clicking on the first icon will create a new variable.
- Clicking on the variable in the list and clicking the second icon will delete that variable.
- Clicking on the third icon will sort the variables in alphabetical order.
- Clicking on the fourth icon will revert changes to a variable (Does not revert deletion).

## Adding Variables

### Variable Type

![Variable Type](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/3dbc5e48-9ce6-4c1d-ae21-a9c8ffd1d5eb)

> Clicking these allows you to add/edit the variables defined. (`Player Variables`, `Global Variables`, `Guild Variables`, `User Variables`).

- *Player variables*: These variables are saved within a character instance.
- *Global variables*: These variables are saved by the server which you can manually change the values within the Variable Editor.
- *Guild variables*: These variables are saved inside a guild instance.
- *User variables*: These variables are saved within an account instance.

### Variable List

![Variable List](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/27c1f905-5f7f-45f5-86e8-fcd1d1816c48)

> Clicking on the variable in this list will open the variable editor container window.

### Variable Editor

![Variable Boolean](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4ca4cd26-23bf-49de-95c2-276285f845e7)

- *Name*: Allows you to set a name for your variable.
- *Folder*: Clicking on the + next to this field will allow you to create a folder for variable organization.
- *Type*: Allows you to set a variable type. The options are (`Boolean`, `String`, `Integer`)
- *Text Id*: Allows you to set an ID which can be called within a text event command. The variable text commands are below.

		\pv{ID} will show you the player variable within a text event command. 

		\gv{ID} will show you the global variable within a text event command. 

		\guildvar{ID} will show you the guild variable within a text event command. 

		\uservar{ID} will show you the user variable within a text event command.
