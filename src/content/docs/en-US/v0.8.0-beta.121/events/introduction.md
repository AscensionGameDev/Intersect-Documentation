---
title: Introduction
---

Events are the backbone of the interactivity in your game. 

Events can be created directly on maps, but global events can also be made with the common events editor. Each event acts as a container for what you are wanting to do in your game so multiple events may be running or accessible globally or on a specific map at any given time.

Below are a handful of interactions that you can accomplish with events:
 - Give quests
 - Open shops
 - Environmental puzzles
 - Chests
 - Doors animations
 - Cutscenes
 - Conversations and dialog prompts
 - And just about anything you would want to do outside of combat.

In this section, we will do our best to explain anything you need to get started. If you're new and need to start from the beginning, continue reading. Or you can see an exhaustive list of the [Event Commands](../events/eventcommands.md), or if you just need to see how things work in practice, you can check out our [Examples](../events/examples.md) page.

---

## Overview

To begin, we'll start with the basic events you can place down on your maps.

To place an event, you'll need to open the event tab in your map editor on the [Map Layers](../start/overview.md#map_layers)

![Screenshot of Map Editor Tabs](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/7066070a-e4ff-471c-8d85-1964beed3d18)

Now you can double click on your map to place the event.

## Map Event Editor
This is the editor you will see when placing Map Events. If you want to know about common events and how they differ, see the [Common Events](../events/common.md) section.

![Screenshot of Event Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/374569ee-30f8-485b-a9c8-f7a8f0bb4097)

We will go through this section by section.

### General
Basic info and behavior for the event.

![Screenshot of General Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/c6d3fdb8-cabc-4361-8b97-7d6b66a4a397)

- *Name*: This is the name of the event as it will appear to the world.
- *Global Event*: If checked, the event will play for anyone when triggered.

### Page Options
These allow you to add and remove pages to your events. There is no upper limit to the number of pages, but you should limit it to as many pages as you need for your event to function.

![Screenshot of Page Options Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/1d2049d7-f04d-45d3-89b2-507c702bc6ea)

- *New Page*: Adds a new page.
- *Copy Page*: Copies the currently selected page.
- *Paste Page*: Paste a page you previously copy onto the currently selected page.
- *Delete Page*: Removes the currently selected page.
- *Clear Page*: Erases the data of the page as if you had just created a new page.

### Conditions
Here you can set the conditions it will spawn under. You will use this to create list(s) and if any of the conditions are true, the event can run/spawn

![Screenshot of Conditions Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/03d63922-4e53-4b4f-b45a-0346aa514b93)

For a detailed breakdown on these conditions and how to use them, you can refer to the [Conditions List](../design/conditions.md). These are similar to the [Event Commands](../events/eventcommands.md) but the way they are selected/applied varies a bit.

### Entity Options
These options allow you to control the event and set a visual for it.

![Screenshot of Entity Options Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/68d4eba5-5432-436d-a087-920c1bd017f0)

- *Preview Window*: This is what the event entity will look like. You can double click this window to select a sprite or tileset image for the entity. Sprites must be in the `resources/entities` folder and tilesets must be in the `resources/tilesets` folder.
- *Animation Dropdown*: You can also add an animation to your event or select an animation as the only thing that will be visible.  Animations must first be made in the [Animations Editor](../design/index.md) to be able to select anything here.
- *Movement*: If you wish your entity/event to move, these options allow you to set it's behavior.
  - *Type*: Select the type of movement. None is the default and the event will not move. Random will have it move in a random direction at the intervals decided below, or Move Route will have it follow a move route that you must set using the "Set Route" button.
  - *Speed*: Sets the speed setting for the event.
  - *Freq*: Sets the frequency, or how often, the event will execute a move.
  - *Layer*: Sets if the event is on the same layer as the player, or if they are above or below the player.

### Entity Inspector Options
The Entity Inspector is what allows a player to click the event/entity and get a target box, allowing them to see some information on the event.

![Screenshot of Entity Inspector Options Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/ab6c3fe8-7e0c-4414-a238-023e3cf619bf)

- *Disable Inspector Checkbox*: If checked, these options are disabled and the player can not click the entity.
- *Face*: This dropdown allows you to select a face for the entity.  These are located in `resources/faces`.
- *Inspector Description*: This is the text that is displayed to the player.

Example

![Screenshot of example entity options filled out](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/34cd2aca-8602-47fb-a96e-d727de9aa602)
![GIF of how those example settings appear in game](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/8ac0677c-9e35-4720-9501-682b14e7ac80)

### Extras
These are some options you can have that change different aspects of the event.

![Screenshot of Extras Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/fc209662-ca44-4e77-b4c8-8da23ea30e9d)

- *Passable*: If checked, collision is removed from the event.
- *Hide Name*: If checked, will hide the name of the event.
- *Dir Fix*: If checked, fixes the direction of the entity so that it does not turn to face the player.
- *Walking Anim*: If checked will pull the walking animation for the sprite.
- *Interaction Freeze*: If checked, interacting with the event will cause the event/entity to freeze and not do anything else like walking off.
- *Ignore NPC Avoids*: If checked, will ignore blocks labeled with NPC Avoids in the Attributes section of the Map Editor

### Trigger
This decides what actually triggers the event and makes it run it's command list. 

![Screenshot of Trigger Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/837d039b-da8d-427e-a97a-3198f8a5dcb3)

In the dropdown you can select:
- *Action Button*: The player must interact directly with the event.
- *Player Collide*: The player must walk INTO the same square as the event.
- *Autorun*: This event is constantly running. BE AWARE THIS SHOULD BE USED SPARINGLY!
- *Player Bump*: The player only needs to come into contact with the entity.

### Commands
This is where all the magic for events happens and where you will tell your event what it actually does using [Event Commands](../events/eventcommands.md).

![Screenshot of Commands Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/f29b37cd-212b-4f69-922b-ed493132e264)

- To add a command, **DOUBLE CLICK** anywhere you see a `@` symbol. 
- If you double click a command that you already have placed, it will ask you to add a command and insert it in place, pushing the previous command down.

You will be presented with the Add Command window.

![Screenshot of Add Commands Group](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/529d0e98-9c48-4459-acf0-6285c9393dc5)

These commands are detailed in the [Event Commands](../events/eventcommands.md) section. Some if not most commands will create additional input sections (the `@`) allowing you to enter more commands.

![Screenshot of example options command](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/0968b94c-1c45-4dc1-9fd4-bb029c6f25b3)

#### Command Flow
It is worth noting how the commands flow through.  When a command is triggered via it's [Trigger](#trigger) from above and assuming it meets all it's [Conditions](#conditions) above, it will start it's commands **FROM THE TOP** and work **DOWN**. Commands that have multiple choices like the [Show Options](../events/eventcommands.md#show-options) or the [Conditional Branch](../events/eventcommand.md#conditional-branch) will have an indented `@` and will execute when the option or condition is chosen, skipping any of the non-relevant ones before leaving the case and continuing down.  An Event only ends when you reach the end of the command window or use an [Exit Event Process](../events/eventcommands.md#exit-event-process) command.
