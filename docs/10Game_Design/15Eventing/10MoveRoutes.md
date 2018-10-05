---
title: Move Routes
---

![Game Editor](http://www.ascensiongamedev.com/resources/filehost/ecaf5fa5ef698200967949d65cdbfcaa.png)

Move Routes within Events control where, how, and when an Event will move across your map. This feature can be used to achieve a wide variety of different functions. You can do anything from animate a windmill to create a bar maid in your village's local inn.

Selecting an option from the Commands will add it to a list on the left of the editor. You can edit a move route for any event on the map from any other event.

![Commands](http://ascensiongamedev.com/resources/filehost/5d7a05947ec3060726cef80736512b0a.png)

The Move Route Editor for Events are segmented into 6 seperate categories. Let's start on the first: *Move*
&nbsp;

Move
---------------------------

![Move](http://www.ascensiongamedev.com/resources/filehost/65b893d525933897873ce33db8d0a824.png)

- *Move Up* will move your Event up 1 Tile on your map.
- *Move Down* will move your Event down 1 Tile on your map.
- *Move Left* will move your Event left 1 Tile on your map.
- *Move Right* will move your Event right 1 Tile on your map.
- *Move Randomly* will move your Event 1 Tile in a random direction if not blocked.
- *Move Toward Player* will move your Event 1 Tile in a direction headed towards the player if not blocked.
- *Move Away From Player* will move your Event 1 Tile in a random direction away from the player if not blocked.
- *Step Forward* will move your Event 1 Tile forward in the direction it is currently facing.
- *Step Backward* will move your Event 1 Tile backward in the direction it is currently facing.

Some things to note about the *Move* tree. When selecting these options, keep in mind that your base attributes for your event will be kept. If your event is set to keep the walking animation of your selected sprite, selecting the *Move Up* will play the *Walk Up* frame of the sprite.

&nbsp;

Turn
---------------------------

![Turn](http://www.ascensiongamedev.com/resources/filehost/c275f1266fbdebbe1389d1ceb964002b.png)

- *Face Up* will turn your Event to face the upwards direction.
- *Face Down* will turn your Event to face the downwards direction.
- *Face Left* will turn your Event to face the left direction.
- *Face Right* will turn your Event to face the right direction.
- *Turn 90 degrees Clockwise* will turn your Event 90 degress clockwise from its current direction.
- *Turn 90 degrees Counter Clockwise* will turn your Event 90 degress clockwise from its current direction.
- *Turn 180 degrees* will turn your Event to face the opposite direction of its current direction.
- *Turn Randomly* will turn your Event to face a random direction.
- *Turn Toward Player* will turn your Event to face the Player.
- *Turn Away From Player* will turn your Event to face away from the Player.

Most of this tree will be used on Events that have a Monster or NPC sprite selected for its graphic.

&nbsp;

Set Speed
---------------------------

![SetSpeed](http://ascensiongamedev.com/resources/filehost/b823872c5b8385194c0075a9b5504194.png)

- *Slowest* will set your Event's Movement Speed to Slowest.
- *Slower* will set your Event's Movement Speed to Slower.
- *Normal* will set your Event's Movement Speed to Normal.
- *Faster* will set your Event's Movement Speed to Faster.
- *Fastest* will set your Event's Movement Speed to Fastest.


&nbsp;

Set Speed
---------------------------

![Set Movement Frequency](http://ascensiongamedev.com/resources/filehost/aef2f3ca5ce5dcc4b945b2824ca00651.png)

- *Lowest* will set your Event's Movement Frequency to Lowest.
- *Lower* will set your Event's Movement Frequency to Lower.
- *Normal* will set your Event's Movement Frequency to Normal.
- *Higher* will set your Event's Movement Frequency to Higher.
- *Highest* will set your Event's Movement Frequency to Highest.

It should be noted that Movement Speed is the Speed at which the Event finishes moving to the next tile. Movement Frequency is how often the Event will move.

&nbsp;

Set Attribute
---------------------------

![Set Attribute](http://ascensiongamedev.com/resources/filehost/9a109d6be99e160f2a96f345c7b85e63.png)

- *Walking Animation: On* will set your Event's *Walking Animation* Attribute to On. This will make your Event's Graphic act like a player, playing through animation frames when moving.
- *Walking Animation: Off* will set your Event's *Walking Animation* Attribute to Off. This will make your Event's Graphic stop playing through animation frames when moving.
- *Direction Fix: On* will set your Event's *Direction Fix* Attribute to On. This will make your Event not change its direction, even when moving in that direction.
- *Direction Fix: Off* will set your Event's *Direction Fix* Attribute to Off. This will make your Event change its direction to the direction its moving in.
- *Walkthrough: On* will set your Event's *Walkthrough* attribute to On. This will allow players and other entities to move through the Event.
- *Walkthrough: Off* will set your Event's *Walkthrough* attribute to Off. This will allow players and other entities to not move through the Event.


&nbsp;

Etc
---------------------------


![Ect](http://ascensiongamedev.com/resources/filehost/d6c7533e6d20a419f903351dcc87f13a.png)

- *Wait 100ms* will make your Event wait 100 milleseconds (1/10 of a second) before moving to complete the next Command in the list.
- *Wait 500ms* will make your Event wait 500 milleseconds (1/2 of a second) before moving to complete the next Command in the list.
- *Wait 1000ms* will make your Event wait a whole second before moving to complete the next Command in the list.
- *Set Graphic* will let you change your Event's set graphic during the Move Route. If you have special animation frames for a character, this is most likely where you'd use them.
- *Set Animation* will let you change/set your Event's animation during the Move Route.

You can use these Wait Commands to give pacing and structure to your Event's move route. Adding a delay to your NPC before he turns around and continues his pacing back and forth, for example.


&nbsp;

Additional Options
---------------------------
![Options](http://ascensiongamedev.com/resources/filehost/7641e18b84e2c9541d066527ea11538d.png)

- *Ignore if Blocked* will pause your Event's Move Route if you are telling an Event to do something that it's blocked from doing. For Example, when telling an Event to Walk into a Blocked wall.
- *Repeat Route* will loop your commands so that they replay when finished. For Example: Use this when you want an NPC to walk in a circle for an infinite amount of times.

&nbsp;

End Result
---------------------------

By using this powerful set of commands in tight congruence will allow you to do anything from have fish swimming around in a lake, to having a shopkeeper move about and inspect his wares. Feel free to experiment and explore the near endless possiblities that this command list allows.