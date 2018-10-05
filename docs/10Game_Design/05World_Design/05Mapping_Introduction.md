---
title: Mapping Introduction
---

[TOC]

The Basics
---------------------------
A large majority of your time creating a 2D ORPG will be spent designing maps and linking them together in order to create an expansive game world.

The following steps will get you started on creating your first map.

**Start Mapping:**
>- Click on the **Pen Tool** ![Pen Tool](http://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png) in the menubar above your map.
>- Select **Tiles** in the **Map Layers** pane.
>- Use your mouse to select a tile or group of tiles to place in your empty map. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
>- Finally click and drag your mouse on the empty map to place your selected tiles. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
>- Congratulations, you're mapping! Don't forget to save your changes by hitting the save icon in the top left of your screen. ![](http://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png)

&nbsp;

Introducing Layers
---------------------------
While creating your maps you may realize that you want to place objects like houses, trees, and shrubs above the ground. This is where layers come into play. Under the **Tiles** tab in your **Map Layers** panel you will see a group of five icons.

![Map Layers](http://www.ascensiongamedev.com/resources/filehost/e96fbf144210c97ebdd679bfac49e06a.png)

Each of these icons represent a tile layer. When you left click an icon you will switch to that layer. The character's face on the selected layer will have a little color to it.

Tiles on the first layer will appear below tiles on all other layers. Tiles on the second layer will appear below the tiles on the third, fourth, and fifth layers.

Before going further, let's give a name to these layers. We refer to them as:
- Ground
- Mask
- Mask 2
- Fringe
- Fringe 2

Utilizing multiple tile layers in your maps is how you can place trees, and other objects on top of other tiles. <a href="http://www.ascensiongamedev.com/resources/filehost/1b0126badf74d9bcdd0fd115e476c106.gif" data-lity><i class="fa fa-play-circle"></i></a>

Notice how the last two layer icons are drawn over the character's face? Those are the two Fringe layers, and they exist above players and npcs in game.

In the demo above I placed entire trees on the Mask layer. The tiles on the Ground layer and the trees on the Mask layer are all drawn below my character in the game giving an unwanted effect of my character walking over the entire tree.

![](http://www.ascensiongamedev.com/resources/filehost/5db4fbdae4be4fe060651bb3849d2300.gif)

The solution isn't as simple as moving the whole tree to the Fringe layer, we don't want the tree trunk to be above my character <a href="http://www.ascensiongamedev.com/resources/filehost/6814ea253162f66d65bae1012f9ca605.gif" data-lity><i class="fa fa-play-circle"></i></a>, we need to find a compromise.

The solution in this case is to place the bottom half of the tree on the Mask layer, and the top half of the tree on the Fringe layer. <a href="http://www.ascensiongamedev.com/resources/filehost/be935bfd755be1bf55ed9ec34e989949.gif" data-lity><i class="fa fa-play-circle"></i></a>

We finally end up with the effect that we're looking for all thanks to layers!

![Working Layers](http://www.ascensiongamedev.com/resources/filehost/6c2d4d1d52fd65145f5e44271b3b1bd1.gif)

&nbsp;

Attributes
---------------------------
If you followed the steps above you probably noticed a big flaw in our game right now. You can walk **through** the tree! <a href="http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif" data-lity><i class="fa fa-play-circle"></i></a>

No worries though, this section will help fix that! Attributes are like a sixth layer of the map. Attributes allow you to place tiles with special properties such as being blocks that players cannot pass.

Go back to your editor and open the **Attributes** tab in the **Map Layers** panel. Select the **Block** attribute and place it over the trunk of your tree. <a href="http://www.ascensiongamedev.com/resources/filehost/60984ce488de64b42ddec0bed012cb52.gif" data-lity><i class="fa fa-play-circle"></i></a>

Using the **Block** attribute you will find that you finally have a tree that renders correctly and, despite your best efforts, you won't be able to phase through.

![No More No Clip!](http://www.ascensiongamedev.com/resources/filehost/8ae4ea6cfdb97b1f7e1cf0efa4d1677a.gif)

You won't use any attribute more than the **Block** attribute. That being said here is a quick rundown of the rest of the attributes and what they do.

|Attribute|Description|
| ------------ | ------------ |
|Block| Marks a tile on the map as being unpassable, neither npcs nor players can traverse through blocked tiles.|
|NPC Avoid|Acts as a block tile for npcs only. This is often used so monsters won't enter friendly areas or block narrow pathways.|
|Warp|When a player steps on a warp tile they will be teleported to a location in the game of your choosing.|
|Item Spawn|An item of your choosing and design will periodically spawn on this time.|
|Map Sound|A sound effect will be playing on tiles where this attribute are placeed. The sound will grow louder and softer at the player approaches and moves away from this attribute.|
|Resource|A harvestable resource will spawn on this tile. This is commonly used for woodcutting, mining, fishing, and more. We will discuss this later in the resource editor documentation.|
|Animation|An animation from the animation editor will play on this tile. Animations when properly setup can bring your game world to life. Ex: <a href="https://www.freemmorpgmaker.com/wp-content/uploads/2017/10/windmill.gif" data-lity><i class="fa fa-play-circle"></i></a>|
|Grappling Stone|When combined with grappling hook projectiles you can allow your character to traverse terrain that he wouldn't be able to otherwise. This will be discussed in-depth in the projectile editor documentation and examples.|
|Slide|This tile forces your player to slide in a direction of your choosing. You can use it for puzzles, traps, and more!|




&nbsp;

Connecting Maps
---------------------------
So let's assume that you've made it this far and have started to put together a decent map. Have you thought about how you'd like to expand your world?

![Connecting Maps](http://www.ascensiongamedev.com/resources/filehost/aee57f600d5c0dd5042bf3025cefd904.png)

Simply *double click* on any adjacent edge of your map (in red above) to expand your world outward. <a href="http://www.ascensiongamedev.com/resources/filehost/478961f66760c103ee02761fd8de9ac3.gif" data-lity><i class="fa fa-play-circle"></i></a>

By continously creating connected maps you can create massive worlds. There are no limitations and having hundreds or thousands of maps is on par with some of our bigger games.

When on a connected map you will see maps that you've previously designed, you can always double click on them to go back and make alterations!

&nbsp;

Unconnected Maps
---------------------------
Let's assume you want to create the interior of a house, maybe a cave, or maybe a whole new region of your game world that you don't want to connect to your existing maps. This is possible by clicking the **New Map** icon in the top left corner of your editor window. ![New Map](http://www.ascensiongamedev.com/resources/filehost/d01941dfd69bdff6add5e41863390be0.png)

Your new map will be completely unconnected to your existing maps. You can use the **Map List** to navigate back to other maps at any time.

A good use for unconnected maps is to make caves and dungeons. You can use **Warp** attributes in order to for players to enter and leave the cave. <a href="http://www.ascensiongamedev.com/resources/filehost/e52c6a2233c8717d426f1d04125300b6.png" data-lity><i class="fa fa-play-circle"></i></a>

![House](http://www.ascensiongamedev.com/resources/filehost/94d22810779f3ab67fe800db7cfbf626.png)


&nbsp;

Map Grid
---------------------------
Have you noticed the **Map Grid** tab above your map editor? Go ahead and click it!

The **Map Grid** gives you an overview of all the maps connected to the one that you're currently editing. When browsing the **Map Grid** you can click and drag to see different parts of your world and zoom in and out using your mouse wheel or the + and - keys on your keyboard.

<a href="https://youtu.be/FqSK-QV2jRU" data-lity>Click here to see the map grid in action! <i class="fa fa-play-circle"></i></a>

There are a few other tricks here too, while navigating the map grid you can double click on an exisiting map to begin editting it.

There is a screenshot button in the top left ![Screenshot](http://www.ascensiongamedev.com/resources/filehost/93dff71784b1de7a15f9fb548c692259.png), that button will allow you to take a high resolution snap shot of your whole world. Fair warning, this could take awhile on larger worlds!

If your map grid has maps that won't render OR your map grid/screenshots contain visual artifacts (lights, fogs, etc) that you don't want:
- Adjust your visual settings using the **View** menu in the top left of your editor.
- Then click the Refresh button on the top right of the map grid.
- Finally select "Re-Download All Previews"

If you've made it this far then you should now have a basic understanding of mapping and world design in Intersect! Moving forward we will cover more advanced mapping concepts and start talking about the other game editors. If you're looking for specific information use the navigation on the left to skip to different sections!
