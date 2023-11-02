---
title: Shops
---

## Overview
Creating shops are done via the `Shop Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ebbc0ef1-62f7-4f8e-93a2-21791d210bc4)

## Managing Shops

![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/2d04d389-171c-464d-ae94-bd5ea01b213f)

- Clicking on the first icon here will create a new shop. Shortcut = Ctrl+N
- Clicking on a shop in the list and clicking the second icon will delete that shop.
- Clicking the third icon will catagorize your shops in alphabetical order.
- Clicking on a shop in the list and clicking the fourth icon will copy that shop. Shortcut = Ctrl+C
- Clicking on a shop in the list and clicking the fifth icon will paste your copied shop. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a shop (Does not revert deletion).

## Editing Shops

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ab7b1de4-1b8f-41c0-8d59-6e73c4212dbc)

- *Name*: Allows you to set a name for your shop.
- *Folder*: Clicking on the + next to this field will allow you to create a folder in the list for shop organization.
- *Default Currency*: Allows you to select an item to be considered as the default currency.
- *Buy Sound*: Allows you to add a sound when a purchase has been made. Sounds can be found in your clients subfolder, `resources\sounds` and they're in `.WAV` format.
- *Sell Sound*: Allows you to add a sound when selling an item.
 
### Items Sold

![Item Sold](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/997e27a1-af4c-4f13-978a-8753478f0c81)

- *Sort Arrows*: Allows you to sort your items within the shop UI.
- *Add Item to be Sold*: Allows you to select an item from the item editor which you wish to be sold.
- *Sell for*: Allows you to select a currency item which the player will buy with.
- *Sell Cost*: Allows you to set a price of the item.
- *Add Selected*: Allows you to add the item to the shop when you've set the options.
- *Remove Selected*: Allows you to remove an item from the list when selected.

### Items Bought

![Items Bought](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7f7a9b53-8915-43e1-8de1-475cd0ab4a56)

- *Whitelist*: Ticking this box will allow you to add items that will only be bought by this shop. The shop will buy all items if none are added to the list.
- *Blacklist*: Ticking this box will allow you to add items that will be blocked from being bought by this shop.
- *Add Item*: Allows you to select an item from the item editor that you wish to be bought or blocked from this shop.
- *Buy for*: Allows you to select a currency item that the shop will buy for.
- *Sell Amount*: Allows you to set a price of the item.
- *Add Item*: Allows you to add the item to the shop when you've set the options.
- *Remove Selected*: Allows you to remove an item from the list when selected.

### Opening Shop

![Screenshot_2](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/5eb7e14e-bd6e-4075-a387-8afa450bf7fd)![Screenshot_3](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/9d6be5dc-38d1-4a2f-8d71-f5e7b96a06f1)


We use the event system to open shops which allows the player to buy/sell items. Click [here](../events/introduction.md) for more information on how to use events.
