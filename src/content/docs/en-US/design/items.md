---
title: Items
---

## Overview
Creating items are done via the `Item Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/62eb26ef-89cd-47c4-aff3-f9ec8780af98)

## Managing Items
![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/29045f19-a4b1-47ef-bfe4-9102ca2abc58)

- Clicking on the first icon here will create a new item. Shortcut = Ctrl+N
- Clicking on an item in the list and clicking the second icon will delete that item.
- Clicking the third icon will catagorize your items in alphabetical order.
- Clicking on an item in the list and clicking the fourth icon will copy that item. Shortcut = Ctrl+C
- Clicking on an item in the list and clicking the fifth icon will paste your copied item. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to an item (Does not revert deletion).

## Editing Items

### General
![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f4fbdac4-92a8-4b1f-9704-28072e7efbcd)

- *Name*: Allows you to set a name for your item.
- *Folder*: Clicking on the X next to this field allows you to create a folder for item organization.
- *Type*: Please click [here](#item-types) for more information on each item type.
- *Rarity*: Allows you to set a rarity to your items which will change the color of the item name in the description window and when mouse hovering the items on the map.
- *Desc*: Allows you to write a description of the item which will show in the description window.
- *Can Drop?*: Ticking this off will disable the item from being dropped.
- *Can Trade?*: Ticking this off will disable the item from being traded.
- *Can Sell?*: Ticking this off will disable the item from being sold.
- *Can Bank?*: Ticking this off will disable the item from being banked.
- *Can Guild Bank?*: Ticking this off will disable the item from being guild banked.
- *Can Bag?*: Ticking this off will disable the item from being bagged.
- *Drop chance on Death (%)*: Allows you to set a percentage value of whether you want the item to be dropped upon death.
- *Item Despawn Time (ms)*: Allows you to set a despawn timer on the dropped item in milliseconds. 1000 (ms) = 1 second.
- *Pic*: Allows you to set a pic for the item that will be shown in the game. The location for these images would be in the clients `resources\items` folder.
- *Hue*: `Red, Green, Blue, Alpha` adds a hue color and alpha change to your items image in the game.
- *Price*: Allows you to set a price at which the item can be sold.
- *Animation On Use*: Todo
- *Equipment Animation*: Todo

### Usage Requirements
![Requirements](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/706a3b3e-2631-441d-aa50-90fa9291a31c)

### Cooldown Options
![Cooldown Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7e2a5918-3146-492a-8bd6-232c93fa2c66)

### Stackable Options
![Stackable Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/3f2dcf96-f3f7-49c0-9d61-8ffd7ff64777)

## Item Types

### None
When this type is selected, it is an item that has no click interaction with the character.

### Equipment
When this type is selected, it shows you another container window on the bottom where you can select which equipment type your item is.

![Equipment Slot](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/0a1876df-99e1-48df-8439-169027bb37f7)

#### Helmet Type
#### Armor Type
#### Weapon Type
#### Shield Type
#### Boot Type

### Consumable
When this type is selected, it shows you another container window which allows you to set the vitals upon use.

![Consumable](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/315a661e-ee56-4b43-aba6-48afbe1f5661)

### Currency
When this type is selected, it defines the item as currency which will automatically set it as stackable.

![Stackable Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c8690d83-e460-44c4-9e88-cd4117c39a7b)

### Spell
When this type is selected, it shows you another container window which you can select a spell from the spell editors list to cast as an item.

![Spell](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f3811299-49b4-422e-95f7-8db0727a23d9)

### Event
When this type is selected, it shows you another container window which you can select an event from the list of common events when using the item.

![Event](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b5da3c25-8818-4139-aa6b-93a5caaedf0a)

### Bag
When this type is selected, it shows you another container window which you can select the amount of slots within the item to be used like a bag.

![Bag](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/e74e3bf7-d6e4-4e7b-915a-69a2d8429457)
