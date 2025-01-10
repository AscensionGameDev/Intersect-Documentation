---
title: Crafting
---

## Overview

You can access the `Crafts Editor` from the `Game Editors` tab in the *Intersect Editor*. 

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/75291cb2-ade4-4ae9-bc13-84d44ff59f79)

## Managing Crafts

![Manage](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ae74a6dd-00ba-47f6-9dac-4055f86a2d52)

- Clicking on the first icon here will create a new craft. Shortcut = Ctrl+N
- Clicking on a craft in the list and clicking the second icon will delete that craft.
- Clicking the third icon will catagorize your crafts in alphabetical order.
- Clicking on a craft in the list and clicking the fourth icon will copy that craft. Shortcut = Ctrl+C
- Clicking on a craft in the list and clicking the fifth icon will paste your copied craft. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a craft (Does not revert deletion).

## Adding/Editing Crafts

When you initially open the Crafts Editor, the list will be empty. Click the `New Craft` button to get started.

![Screenshot 2023-04-17 125802](https://user-images.githubusercontent.com/6025436/232596781-cff0b5ef-5a89-4684-b78c-379c13024924.png)

When clicking the `New Craft` button, it will create a new crafting recipe that by default is named `New Craft`.

![Screenshot 2023-04-06 225249](https://user-images.githubusercontent.com/6025436/230551615-4eca4e0f-e8bf-465c-9ae7-48b2a2ee52e6.png)

Click on the `New Craft` that was just created; this will open up the editor for that individual craft.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f7c59966-97fd-4564-a9d2-249145747641)

- *Name*: the in-game name of the crafting recipe.
- *Folder*: used to organize your crafts in the editor.
- *Item*: the item that will be created by the crafting process; creating these items is via the `Items Editor` in the `Game Editors` menu.
- *Quantity*: the number of items that will be created.
- *Time (ms)*: the delay in milliseconds before the crafting process is completed after a user starts the process.
- *Failure (%)*: the whole-number percentage chance that a crafting operation will fail.
- *Item Loss (%)*: the whole-number percentage chance that a failed crafting operation will consume the ingredients despite failing.
- *Craft Requirements*: a requirements editor that is used to configure what conditions a player must meet before they are able to use this specific crafting recipe. Click [here](./conditions.md) for more information on conditions.
- *Ingredients*: the ingredients necessary to use this crafting recipe.
- *Common Event*: a global event that will run after the crafting process is completed. The common event is only ran *AFTER* the crafting processing is completed. Click [here](../events/common.md) for more information about common events!

![Screenshot 2023-04-17 131408](https://user-images.githubusercontent.com/6025436/232599864-8b5ebb37-59ed-4930-81e8-1c946d6a8430.png)

The buttons at the bottom of the `Ingredients` section of the editor are used to manage the list of ingredients:

- *New*: adds a new ingredient to the list of required ingredients.
- *Delete*: removes the ingredient you highlight in the list by clicking on the name.
- *Duplicate* : creates and adds to the list a duplicate of the highlighted ingredient.

![Screenshot 2023-04-06 234027](https://user-images.githubusercontent.com/6025436/230555943-5a87f48d-fde5-4111-8f90-d419763b5ec8.png)

When an ingredient is highlighted in the list, the specific item for the "ingredient" and the quantity are able to be selected:

- *Item*: a dropdown with all of the items that can be selected for this ingredients; `None` is not an item, it is a placeholder for "no item."
- *Quantity*: The whole number of the specified item that are required for this ingredient.

Note: the *item* and *quantity* data fields will change the *currently selected* ingredient from the 'ingredients' list.

## Crafting Tables Editor

## Overview

You can access the `Craft Tables Editor` from the `Game Editors` tab in the *Intersect Editor*.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/885abc9f-187c-4b75-ad30-d0534b1e41a8)

## Managing Crafting Tables

![Manage](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/fc0dd1ee-953b-4883-9702-00e8a8bdbcd0)

- Clicking on the first icon here will create a new crafting table. Shortcut = Ctrl+N
- Clicking on a crafting table in the list and clicking the second icon will delete that crafting table.
- Clicking the third icon will catagorize your crafting tables in alphabetical order.
- Clicking on a crafting table in the list and clicking the fourth icon will copy that crafting table. Shortcut = Ctrl+C
- Clicking on a crafting table in the list and clicking the fifth icon will paste your copied crafting table. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a crafting table (Does not revert deletion).

## Adding/Editing Crafting Tables

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/5b009978-d318-4cf3-aac5-52e11de6e1e5)

- *Name*: Allows you to set a name to your crafting table.
- *Folder*: Clicking the + next to this field allows you to create a folder for organization.

### Crafts

![Crafts](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/08dad00b-dc83-4ed8-ac23-c29b85d89212)

- *Add Item To Be Crafted*: Allows you to select an item from the `Craft Editor` to add to this craft table.
- *Add Selected*: Adds the current item to the craft table.
- *Remove Selected*: Select a craft item from the list and click this to remove the craft.

### Opening Craft Table

![Event](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b91cb083-910a-4822-8f0c-439e00c77730)![Screenshot_1](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/00b9a26a-fa91-4b1d-96e8-8f494962b7c0)

We use the event system to open craft tables which allows the player to craft items. Click [here](../events/introduction.md) for more information on how to use events.


