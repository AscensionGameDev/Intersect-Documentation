---
title: Crafting
---

## Crafts Editor

### Accessing the Editors
You can access the `Crafts Editor` and the `Crafting Table Editor` from the `Game Editors` tab in the *Intersect Editor*. These are the two main editors you will need to use to set up a crafting system in your game.

![1](https://user-images.githubusercontent.com/6025436/230551569-6aae6d99-1416-4dbd-8eb2-fe86069df07e.png)

### Getting Started
When you initially open the Crafts Editor, the list will be empty. Click the `New Craft` button to get started.

![Screenshot 2023-04-17 125802](https://user-images.githubusercontent.com/6025436/232596781-cff0b5ef-5a89-4684-b78c-379c13024924.png)

When clicking the `New Craft` button, it will create a new crafting recipe that by default is named `New Craft`.

![Screenshot 2023-04-06 225249](https://user-images.githubusercontent.com/6025436/230551615-4eca4e0f-e8bf-465c-9ae7-48b2a2ee52e6.png)

Click on the `New Craft` that was just created; this will open up the editor for that individual craft.

![Screenshot 2023-04-06 225303](https://user-images.githubusercontent.com/6025436/230551645-caabfedf-5413-4ff2-89bc-8a1288c4fb03.png)

- *Name*: the in-game name of the crafting recipe.
- *Folder*: used to organize your crafts in the editor.
- *Item*: the item that will be created by the crafting process; creating these items is via the `Items Editor` in the `Game Editors` menu.
- *Quantity*: the number of items that will be created.
- *Time (ms)*: the delay in milliseconds before the crafting process is completed after a user starts the process.
- *Failure (%)*: the whole-number percentage chance that a crafting operation will fail.
- *Item Loss (%)*: the whole-number percentage chance that a failed crafting operation will consume the ingredients despite failing.
- *Craft Requirements*: a requirements editor that is used to configure what conditions a player must meet before they are able to use this specific crafting recipe.
- *Ingredients*: the ingredients necessary to use this crafting recipe.
- *Common Event*: a global event that will run after the crafting process is completed. The common event is only ran *AFTER* the crafting processing is completed.

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

`TODO`

![Screenshot 2023-04-06 225409](https://user-images.githubusercontent.com/6025436/230551671-a3b1e422-8e44-484c-9413-c72cbeb4380e.png)
