---
title: Items
---
Let's get to know the interface of the item editor.
![Interface Editor](http://www.ascensiongamedev.com/resources/filehost/03a1fb85b49283d4e5f7a695580e8c82.png)

On the left:
New, Delete, Copy and Paste, Undo Changes, and Item List.

On the right:
We have the item settings.

Let's start with the general, that regardless of the type you choose will remain constant.

 - Name: Name of the item.
 - Desc: Item Description.
 - Pic: Icon that will represent the item.
 - Price: Value that defines the price for which the store will buy this item.
 - Animation: Animation that the item will execute.
 - Bound?: Item blocked. It can not be dropped, but can be passed through trading.
 - Stackable?: Stack equal items in one slot.
 - Edit Usage Requirements: To edit the requirements to player can use the item.

Now depending on the type of the chosen item we will have more configuration options.
For now we will know what are the types of items that the Intersect offers us.

 1. Equipment: Items that the character can equip.
 2. Consumable: Items that the character can consume.
 3. Currency: Default currency to set in the Shop Editor.
 4. Magic: Item that will allow the player to learn a new spell.
 5. Event: Item that will trigger a common event.
 6. Bag: Item that allows the player an additional inventory, with a limited amount of space.

> Consumable Items, Magic Items, and Event Items are consumables, disappear from the inventory when they are used.

> The maximum limit of the bag is equal to the maximum limit of the inventory defined in config.xml in the resources folder inside the server folder. But you can put values smaller than this limit.

Let's understand how each of these types works on the next page.