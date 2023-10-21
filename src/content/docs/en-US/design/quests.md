---
title: Quests
---

## Overview
Creating quests are done via the `Quest Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/97a1647d-7270-4034-a9ad-aea357d2d246)

## Managing Quests

![Manage](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/30e1d762-b326-4e40-92d5-44d09625c6f6)


- Clicking on the first icon here will create a new quest. Shortcut = Ctrl+N
- Clicking on a quest in the list and clicking the second icon will delete that quest.
- Clicking the third icon will catagorize your quests in alphabetical order.
- Clicking on a quest in the list and clicking the fourth icon will copy that quest. Shortcut = Ctrl+C
- Clicking on a quest in the list and clicking the fifth icon will paste your copied quest. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a quest (Does not revert deletion).

## Editing Quests

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/868ea028-839f-476d-ac66-4a50c5b42819)

- *Name*: Allows you to give a quest a name, this will show in the games quest log.
- *Folder*: Clicking on the + next to this field allows you to create a folder for quest organization.
- *Edit Quest Requirements*: Allows you to add requirements to beginning the quest. Click [here](./conditions.md) for more information on how to use conditions.
- *Quest Repeatable?*: Toggling this will allow your quest to be repeatable.
- *Can Quit Quest?*: Toggling this will enable/disable the ability to abandon a quest.
- *Before Offer Description*: Allows you to add text to the quest log, before offering the quest.
- *Offer Description*: Allows you to add text to the quest offering box.
- *In Progress Description*: Allows you to add text to the quest log, during the quest.
- *Completed Description*: Allows you to add text to the quest log, after the quest is completed.

### Quest Log Options

![Quest Log Opts](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/a8cff5c0-481a-4a24-befd-2f7ef7cfb271)

- *Show in quest log before accepting quest?*: Toggling this will enable/disable the quest to show in the quest log before accepting.
- *Show in quest log after completing quest?*: Toggling this will enable/disable the quest to show in the quest log after completion.
- *Do not show in quest log unless requirements are met*: Toggling this will not show the quest in the quest log until the conditions are met.
- *Unstarted Category*: Allows you to select what category the quest will show in the quest log when not started.
- *In Progress Category*: Allows you to select what category the quest will show in the quest log when in progress.
- *Completed Category*: Allows you to select what category the quest will show in the quest log when completed.
- *Quest Log Sort Order*: Allows you to sort the quests in the quest log. 1 puts the quest on top while 2 puts the quest underneath 1 within the same category.

### Quest Tasks

![Quest Tasks](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/3b9bdf30-d9ac-437a-8c49-6aeac4e66cd0)![add quest task](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/74372f78-e3b2-45e1-8280-a825d20c1d9d)

- *Add Task*: Allows you to add a task for the quest, the second window will show up.
- *Remove Task*: Clicking on the task in the list and then clicking this will remove the task.
- *Sorting Arrows*: On the right, you can sort tasks and move them up or down on the list.
- *Task Type*: Allows you to select what kind of task it will be, (`Event Driven`, `Gather Item(s)`, `Kill NPC(s)`)
- *Desc*: Allows you to add a description to the task which will show in the quest log.
- *Edit Task Completion Event*: Allows you to add event commands after the task is completed. Click [here](../events/introduction.md) for more information on how to use events.
 
### Quest Actions

![Quest Actions](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/cb5208aa-98c7-4cd1-b1c0-de09e9fa4db2)

- *Edit Quest Start Event*: Allows you to add event commands when the quest is accepted.
- *Edit Quest Completion Event*: Allows you to add event commands when the quest is completed.

### Setting the Quest

We have to use the event system to set up the quest. This is more advanced to detail in text. Please refer to the [Events](../events/introduction.md) documentation for more information on how to set up quests.
