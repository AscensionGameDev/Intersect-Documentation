---
title: Crafting
---
You can access the 'Crafts Editor' and the 'Crafting Table Editor' from the 'Game Editors' tab in the *Intersect Editor*. These are the two main editors you will need to use to set up a crafting system in your game.<br>
![1](https://user-images.githubusercontent.com/6025436/230551569-6aae6d99-1416-4dbd-8eb2-fe86069df07e.png)

## Crafts Editor

When you initially open the 'Crafts Editor,' there will be nothing really notable in the display. You'll have to click the 'New Craft' button to start designing your crafting system.<br>
![Screenshot 2023-04-06 231135](https://user-images.githubusercontent.com/6025436/230552242-00e0c109-5a32-4296-b166-2da44cec6742.png)

Once you click the 'New Craft' button, it will create a crafting recipe in your game. It will initially be called 'New Craft' when you create it.<br>
![Screenshot 2023-04-06 225249](https://user-images.githubusercontent.com/6025436/230551615-4eca4e0f-e8bf-465c-9ae7-48b2a2ee52e6.png)

You'll want to click the 'New Craft' recipe that is now listed in the *Crafts Editor*. When you click it, it will display the crafting recipe properties, such as the recipe name, the item that will be crafted, required ingredient items, and etc.<br>
![Screenshot 2023-04-06 225303](https://user-images.githubusercontent.com/6025436/230551645-caabfedf-5413-4ff2-89bc-8a1288c4fb03.png)<br>
The data fields should be fairly self-explanatory.<br>
- *Name*: the in-game name of the crafting recipe.<br>
- *Folder*: used to organize your crafts in the editor.<br>
- *Item*: the item that will be crafted.<br>
- *Quantity*: the amount of items which will be crafted from the *Item* data field.<br>
- *Time (ms)*: the amount of time it takes to craft the item in-game, in milliseconds (1000ms = 1 second).<br>
- *Failure (%)*: the chance that the player may fail crafting the item.<br>
- *Item Loss (%)*: the chance, when the player fails crafting the item, that all crafting recipe ingredient items are destroyed.
- *Craft Requirements*: you can set specific requirements to be able to craft the item. If a player doesn't meet the requirements listed there, they will not be able to see the craft recipe in the crafting window in-game.<br>
- *Ingredients*: the items that the player must have to be able to craft the item. It defines the 'crafting recipe.'
- *Common Event*: you can set a specific 'common event' to run when the craft is attempted. The commone event is only ran *AFTER* the crafting processing is completed.<br><br>

![Screenshot 2023-04-06 234149](https://user-images.githubusercontent.com/6025436/230556117-b6f25ba7-5187-4445-9aa8-34973c50ba5e.png)<br>

At the bottom of the interface, you will see the buttons 'New,' 'Delete,' and 'Duplicate.' These buttons are used to add/remove items from the crafting recipe ingredient list, *'Ingredients'*.<br>
- *New*: this will allow you to add items which will be required to be able to craft the item.<br>
- *Delete*: this will delete an item from the crafting ingredients list.
- *Duplicate* : this will add a duplication of the highlighted ingredient item that is already on the list.
<br>

![Screenshot 2023-04-06 234027](https://user-images.githubusercontent.com/6025436/230555943-5a87f48d-fde5-4111-8f90-d419763b5ec8.png)

When you click 'new,' it will add a new ingredient requirement for the crafting recipe. Though, it will by default be 'none,' which isn't actually an item. You will, therefore, need to select an existing item from the item database to add it as a required crafting recipe ingredient. Two new data feilds will also appear in the editor.<br>
- *Item*: the item that is required as a crafting ingredient.<br>
- *Quantity*: the number of items, from the *Item* data field, which is required as a crafting ingredient.<br>

Note: the *item* and *quantity* data fields will change the *currently selected* ingredient from the 'ingredients' list.<br>

## Table Editor

- Editor Fields & What they do

![Screenshot 2023-04-06 225409](https://user-images.githubusercontent.com/6025436/230551671-a3b1e422-8e44-484c-9413-c72cbeb4380e.png)
