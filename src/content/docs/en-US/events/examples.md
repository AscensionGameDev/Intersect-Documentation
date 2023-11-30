---
title: Examples & Guides
---

Below is a list of examples and guides for using Intersect's Event Editor. Guides will be long form examples or walkthroughs while examples will be shorter digestible uses.

## Guides

[Intersect Event System Tutorial](../events/guides/intersecteventsystemtutorial.md) by Agoraphobic - A great resource for explaining the basics of the event system.

## Examples

The following are example setups for using the event system.

### Message of the Day on login - Difficulty 1/5

This is the simplest event to setup as it's just a [common event](../events/common.md).

Here is what our event window looks like.

![MOTD Common Event](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/f229c2c5-233b-4d92-ac0a-abbfab9f56e3)

As you can see, it's just a common event with the trigger "Login" and whatever you want it to do.  You can expand on this by adding a check to see if they viewed it before which would require a couple of variables. 

### Daily Login Rewards - Difficulty 1/5

This expands on the MOTD and we'll hook into it for that matter so it's all just one event.

For this you will need to configure a few variables, all integers:
 - *Current time*: This allows us to store the current time for comparison
 - *Last MOTD time*: This will allow us to store the last time they received the MOTD/Rewards
 - *Next MOTD time*: This will allow us to store the next time they are supposed to receive the MOTD/Rewards.

Here's what the finished event looks like, and we'll work through it.

![Login Reward Event](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/aeadb947-21f0-472b-a9ea-a4b556f7043d)

We'll go line by line.

- Our first line we set the player variable to "Current time" so that we always have the most current working value.
- Our next line, we show the MOTD text as it's going to show no matter what.
- Our third line we start our conditional to see if it's been enough time for their daily login reward.
  - Compare the player variable `Current Time` as a greater than or equal to `Next MOTD Time`. On first login, `Next MOTD Time` will always be zero so will pass. Here is what the conditional window will look like for it.

  ![Conditional window comparing times](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/1ff9e47e-e353-4e49-bf1e-383426743710)

- If it passes we give a reward text box to tell them about it and then use change player items to give them gold, allowing overflow in case they don't have room.
- We then Set player variable `Last MOTD Time` to `Current Time`
- Set `Next MOTD Time` to equal `Last MOTD Time`
- Set again `Next MOTD Time` but **ADD** `86400000` as it is in milliseconds. 86,400,000 is 24 hours.

This sets up the loop for logins and updates it every time it passes. But if the conditional fails, we just show the player some text that it's not time yet and move on.

### 2 Stage interaction - Difficulty 1/5 to 3/5

A two stage interaction is what you'd expect to see when you are opening a door or chest.  Or in the instance we're going to show, adding a pot to a campfire (it was avaliable in the included sprites). This is a [Map Event](../events/introduction.md) and uses two pages.

First, lets show what the event pages look like...Note that we're setting this as a global event so that anyone around will see us add the pot to the campfire.

![2stageexample1of2](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/2c0848c8-4a8c-49a7-b94c-034e844ce2f7)
![2stageexample2of2 png](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/45002d22-b317-4d81-9e44-7ac2b71d2222)

In this first page we took the campfire with the hanger from the interior spritesheet.  We want to be able to add a pot to it.  Trigger is the action button and the commands is Setting `Set Self Switch A to True`.  In the Spawn/Execution conditions we make a list for if Self Switch A is FALSE, this page is what spawns.

![Intersect_Editor_3mzc44YlPD](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/c2bc2996-a958-4375-83f6-94c8fba2e591)

On page 2, we do the same thing. You could copy the page and paste it if you like. The differences here are our sprite, commands, and the spawn condition.

You'll see the command is now settting the Self Switch to FALSE instead.  And in our spawn condition, we want to set it to TRUE.

So the flow of why this works....

The default state is the self switch to be FALSE, so there is no pot.  We walk up to it and interact, thus triggering the event and the commands to set the self switch to true. Now the page 2 with the pot spawn condition is true.  If we interact again, it removes the pot and we're back to one.

![Intersect_Client_G7e0GiOXvh](https://github.com/AscensionGameDev/Intersect-Documentation/assets/13249558/a03747f1-6e72-4c10-a5d0-f23d0d6bc915)

The concept here can be applied to doors, chests, and anything else with a state toggle.  You can also add funcionality to these via the commands for giving loot or walking through to warp you to a location. Just remember that self switches do not persist through map reloads so if a map is unloaded, everything switches to default states.
