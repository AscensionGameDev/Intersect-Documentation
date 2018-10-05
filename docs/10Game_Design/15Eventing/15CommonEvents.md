---
title: Common Events
---

Common Events are a global set of events that can be used to trigger unique effects and scenarios.

&nbsp;

Overview
---------------------------

The Common Event Editor can be found under the *Class Editor* in the **Game Editors** dropdown list.

![CommonEvents](http://ascensiongamedev.com/resources/filehost/86194bf70cce3c3b9c4901fbd7f29971.png)

Opening this Editor will bring up a a new list that you can populate with Events!

![CEE](http://ascensiongamedev.com/resources/filehost/30628e2fba419d02797c303cab5a4e3d.png)

Clicking *New* will allow you to create new Events. This will add a new item to your Common Events List.

![CEE2](http://ascensiongamedev.com/resources/filehost/f557029d23e6e61ec7cd14aa267bafcd.png)

Double Clicking this new item in your list will open a familiar editor we've seen previously in this documentation.

![CEE3](http://ascensiongamedev.com/resources/filehost/3ecc711d55f367a7d213682a2a876b33.png)

You'll notice this Event has a slightly more limited structure than most other events. This is because all events created here are handled as Global Triggers.

&nbsp;

Examples of Use
---------------------------

**Example 1**

For this example we're going to be creating an event that will warp your player to a Graveyard map whenever they die in-game. To do this, we're going to first set its **Condition**.

When we click on *Spawn/Execution Conditions*, we open a new window:

![ConditionsList](http://ascensiongamedev.com/resources/filehost/e4b1af5e9b5e0c308be9f896fbea69b3.png)

We're going to be clicking *Add List*. From here you can rename your list and add conditions. We're going to click *Add Condition*. After that, we're going to select *Player Death* from the list we're given.

![PlayerDeath](http://ascensiongamedev.com/resources/filehost/39b28fb1027a81946f95de7363c0ecac.png)

After this, save your Conditions list and then add a Player Warp command to your event.

![Warp](http://ascensiongamedev.com/resources/filehost/de8588ce81e23cc861d0b8f409ab839b.png)

And now when a player dies in your game, they'll be warped to the map and location specified by you!

**Example 2**

For this example we're going to be creating a common event that will play an Animation over any player who levels up in your game!

Navigate down to the Triggers in this Event Editor and select the *Level Up* option.

![LevelUp](http://ascensiongamedev.com/resources/filehost/40dbaa176ea28f8b80ca0f7cd67ba870.png)

This will allow this event to play whenever a player Levels Up in your game. Use a *Play Animation* command for this event and you're done!


&nbsp;

Conclusion
---------------------------

The Common Event system can be used to create some global events with specific triggers that you control. Be sure to experiment with this system and create some truly unique Global Events!



