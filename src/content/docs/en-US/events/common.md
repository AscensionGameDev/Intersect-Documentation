---
title: Common Events
---

Common Events are very similar to map events in most ways. The key difference being that they are not linked to any specific map so they are triggered differently than Map Events.

To access the Common Event Editor, click the `Game Editors` tab in the main window

![Finding the Common Event Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/29d90f76-085e-4270-8525-3659aaef470e)

Once you open it, you will be met with the main Common Event Editor window.

![Intersect Common Event Editor Main Window](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/7b483bb2-ccb1-4b5b-a277-9d9405f35a53)

Along the top, you have the following buttons:
- *New*: Creates a new common event. When Clicking New, you will generate an event named `New Event`.
- *Delete*: Deletes the currently selected event.
- *Order Alphabetically*: Sorts your events alphabetically.
- *Copy Event*: Copies the currently selected event.
- *Paste Event*: Pastes an event previously copied.

You can use the search bar to search for events by name. Double clicking any event in the list will open it.

## Overview

The Common Event Editor is mostly similar to the [Map Based Event Editor](../events/introduction.md) except in the following ways.
- There is no Entity Options. Anything involvint an entity is not relevant to common events.
- Triggers are different. Since we're not on a map, triggers are done by various game states.
- No Global Option. By nature, common events are always able to trigger or be called.

![The Common Event Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/47b838f2-7478-45ec-bf61-7609663969d1)

### General
Basic info and behavior for the event.

![Common Event General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/5f500ab7-b838-46fe-bbf4-f3531c0e44c1)

- *Name*: This is the name of the event as it will appear in the editor.

### Page Options
These allow you to add and remove pages to your events. There is no upper limit to the number of pages, but you should limit it to as many pages as you need for your event to function.

![Intersect_common event editor page options.](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/ae3439a3-8406-4267-a225-5f3ed1c9c26f)

- *New Page*: Adds a new page.
- *Copy Page*: Copies the currently selected page.
- *Paste Page*: Paste a page you previously copy onto the currently selected page.
- *Delete Page*: Removes the currently selected page.
- *Clear Page*: Erases the data of the page as if you had just created a new page.

### Conditions
Here you can set the conditions it will spawn under. You will use this to create list(s) and if any of the conditions are true, the event can run/spawn

![Intersect_Editor_KSuot7WHXl](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/03d63922-4e53-4b4f-b45a-0346aa514b93)

For a detailed breakdown on these conditions and how to use them, you can refer to the [Conditions List](../design/conditions.md). These are similar to the [Event Commands](../events/eventcommands.md) but the way they are selected/applied varies a bit.

### Trigger
This is what tells the event that it should be activated.

![A list of common event triggers](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/c2c0ab2b-5795-4b96-9a0e-1c003acfefa4)

In the dropdown, you have the following options:

- *Login*: Will trigger for each player on login.
- *Level Up*: Will trigger on each player level up.
- *On Respawn*: Will trigger when a player respawns.
- */command*: Allows you to configure the event as a chat slash command and will have text entry to enter desired command.
- *Autorun*: Event is constantly running for every player. Considered resource intensive.
	**WARNING! THIS IS THE WORST OPTION YOU CAN DO! ONLY DO THIS IF YOU HAVE NO OTHER OPTION**
- *PVP Kill*: Will trigger when a player kills in PvP.
- *PVP Death*: Will trigger when a player dies in PvP.
- *Player Interact*: Will trigger when interacting with a player.
- *Equipment Changed*: Will trigger any time the player's equipment has changed.
- *Player Variable Changed*: Will trigger when a player variable has changed and will have text entry to enter desired command.
- *Server Variable Changed*: Will trigger when a global variable has changed and will have text entry to enter desired command.
- *Guild Member Joined*: Will trigger when a guild member has joined a guild.
- *Guild Member Left*: Will trigger when a guild member has left the guild.
- *Guild Member Kicked*: Will trigger when a member has been kicked from the guild.
- *Guild Variable Changed*: Will trigger when a guild variable has changed and will have text entry to enter desired command.
- *Inventtory Changed*: Will trigger when a player's inventory has changed.
- *Map Changed*: Will trigger when a player changes map.
- *User Variable Changed*: Will trigger when a user variable has changed and will have text entry to enter desired command.

### Commands
This is where all the magic for events happens and where you will tell your event what it actually does using [Event Commands](../events/eventcommands.md).

![Event Command Window](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/f29b37cd-212b-4f69-922b-ed493132e264)

- To add a command, **double click** anywhere you see a `@` symbol. 
- If you double click a command that you already have placed, it will ask you to add a command and insert it in place, pushing the previous command down.

You will be presented with the Add Command window.

![Event command list](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/529d0e98-9c48-4459-acf0-6285c9393dc5)

These commands are detailed in the [Event Commands](../events/eventcommands.md) section. Some if not most commands will create additional input sections (the `@`) allowing you to enter more commands.

![Event command @ entry](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/0968b94c-1c45-4dc1-9fd4-bb029c6f25b3)

#### Command Flow
It is worth noting how the commands flow through.  When a command is triggered via it's [Trigger](#trigger) from above and assuming it meets all it's [Conditions](#conditions) above, it will start it's commands **FROM THE TOP** and work **DOWN**. Commands that have multiple choices like the [Show Options](../events/eventcommands.md#show-options) or the [Conditional Branch](../events/eventcommand.md#conditional-branch) will have an indented `@` and will execute when the option or condition is chosen, skipping any of the non-relevant ones before leaving the case and continuing down.  An Event only ends when you reach the end of the command window or use an [Exit Event Process](../events/eventcommands.md#exit-event-process) command.
