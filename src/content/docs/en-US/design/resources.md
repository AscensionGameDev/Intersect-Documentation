---
title: Resources
---

## Overview

Creating resources are done via the `Resource Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c9929824-60dc-4a52-8fee-37c04f3f50d7)

## Managing Resources

![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4d8beb8e-7045-413a-8340-22990625cf9e)


- Clicking on the first icon here will create a new resource. Shortcut = Ctrl+N
- Clicking on a resource in the list and clicking the second icon will delete that resource.
- Clicking the third icon will catagorize your resources in alphabetical order.
- Clicking on a resource in the list and clicking the fourth icon will copy that resource. Shortcut = Ctrl+C
- Clicking on a resource in the list and clicking the fifth icon will paste your copied resource. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a resource (Does not revert deletion).

## Editing Resources

### General

![Screenshot_1](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/74522b59-d707-4bc3-8416-d653c2ff8e70)

- *Name*: Allows you to give your resource a name.
- *Folder*: Clicking on the + will allow you to create a folder for resource organization in the list.
- *Tool Type*: Allows you to set a tool to use for this resource. Tool types can be added from the `server config` file, under `ToolTypes`.
- *Min HP*: Allows you to set a minimum HP for this resource.
- *Max HP*: Allows you to set a maximum HP for this resource.
- *Spawn Duration (ms)*: Allows you to set a spawn rate in milliseconds for this resource. 1000 (ms) = 1 second.
- *Animation*: Allows you to set an animation that will play when exhausted.
- *Walkable before resource removal?*: Ticking this box will allow players to walk through the resource when active.
- *Walkable after resource removal?*: Ticking this box will allow players to walk through the resource when exhausted.

### Drops

![Drops](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/a86dfd86-0a45-41f2-8ad4-2c12510efd6d)

- *Item*: Allows you to select an item from the item editor which will be dropped after the resource is exhausted.
- *Amount*: Allows you to set an amount of the item which will be dropped after the resource is exhausted.
- *Chance (%)*: Allows you to set a percentage chance of when this item will be dropped.
- *Add*: Allows you to add the item inside the drop list when all these options are set.
- *Remove*: Allows you to remove the item from the drop list.

### Regen

![Regen](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c889a014-c8b2-4077-be2d-81decfed5774)


- *HP (%)*: Setting this allows you to set the resources HP regen percentage per tick. Tick timer for regen can be modified inside the `servers config` file. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.

### Common Event

![Common](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/01edfeb7-09a0-44c3-8197-6373d340fe96)

- *Event*: Allows you to select an event from the `Common Event Editor` within the `Game Editors` tab on the main interface. Click [here](../events/common.md) for more information on Common Events.

### Requirements

![Reqs](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/348d224f-66cc-4ff1-9094-0f454fef89d1)

- *Harvesting Requirements*: Allows you to set conditions that enables/disables the resource from being harvested. Click [here](./conditions.md) for more information on Conditions.
- *Cannot Harvest Message*: Allows you to set a message that will tell the players why the resource can not be harvested.

### Graphics

![Graphic](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/467a5831-d51a-4d70-b21b-a04220fa1e59)

- *Initial Graphic*: Allows you to select a graphic from the clients subfolder, `resources\resources`.
- *Exhausted Graphic*: Allows you to select a graphic from the same clients subfolder.
- *Below Entities*: Ticking this box will render the resource under the player.
- *From Tileset*: Ticking this box will allow you to select a graphic from the tilesets found in your clients subfolder, `resources\tilesets`.

### Placing Resources

![Screenshot_1](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/9ededdb2-1b74-4c97-ae7f-0b2bfb6ff38d)

Within the map editor, we can click on the attribute tab and set a resource attribute.
