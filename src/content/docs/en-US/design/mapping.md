---
title: Mapping
---

## Overview

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d5dc511e-619c-4e17-bced-6a22d6eba440)

A large majority of your time creating a 2D ORPG will be spent designing maps in order to create an expansive game world. The following steps will get you started on creating your first map.

## Creating or Editing Maps

> - To begin mapping. Click on the **Pen Tool** ![Pen Tool](https://www.ascensiongamedev.com/resources/filehost/a20847da4a43f52234ccda97b1125a88.png) in the menubar above your map.
> - Select **Tiles** in the **Map Layers** pane.
> - Use your mouse to select a tile or group of tiles to place in your empty map. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
> - Finally click and drag your mouse on the empty map to place your selected tiles. <a href="http://www.ascensiongamedev.com/resources/filehost/03856cde2da1c67f07b0123b90b6b0dc.gif" data-lity><i class="fa fa-play-circle"></i></a>
> - Congratulations, you're mapping! Don't forget to save your changes by hitting the save icon in the top left of your screen. ![](https://www.ascensiongamedev.com/resources/filehost/7f974a7fc91ef6666e3211c8622fe088.png)

### Layers

While creating your maps you may realize that you want to place objects like houses, trees, and shrubs above the ground. This is where layers come into play. Under the **Tiles** tab in your **Map Layers** panel you will see a group of five icons.

![Map Layers](https://www.ascensiongamedev.com/resources/filehost/e96fbf144210c97ebdd679bfac49e06a.png)

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

![](https://www.ascensiongamedev.com/resources/filehost/5db4fbdae4be4fe060651bb3849d2300.gif)

The solution isn't as simple as moving the whole tree to the Fringe layer, we don't want the tree trunk to be above my character <a href="http://www.ascensiongamedev.com/resources/filehost/6814ea253162f66d65bae1012f9ca605.gif" data-lity><i class="fa fa-play-circle"></i></a>, we need to find a compromise.

The solution in this case is to place the bottom half of the tree on the Mask layer, and the top half of the tree on the Fringe layer. <a href="http://www.ascensiongamedev.com/resources/filehost/be935bfd755be1bf55ed9ec34e989949.gif" data-lity><i class="fa fa-play-circle"></i></a>

We finally end up with the effect that we're looking for all thanks to layers!

![Working Layers](https://www.ascensiongamedev.com/resources/filehost/6c2d4d1d52fd65145f5e44271b3b1bd1.gif)

### Tilesets and Tile Types

Under the Layer properties. Are the tilesets and tile types. The tilesets can be found in your clients subfolder, `resources\tilesets`.

![Tileset and Types](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/639e0c20-f146-440b-a8ce-bc4e7d3fcd2e)

- The list of tile types are described below.
	- *Normal*: Allows you to set normal tiles on the map. You can select multiple tiles by clicking and dragging the selection across the tileset.
 	- *Autotile (VX Format)*: Allows you to select a 3x2 tile autotile.
  - *Fake (VX Format)*: Allows you to fake an autotile by using 1 tile.
  - *Animated {VX Format)*: Allows you to select a 3x6 animated tile.
  - *Cliff (VX Format)*: Allows you to select a 2x2 tile.
  - *Waterfall (VX Format)*: Allows you to select a 3x2 animated waterfall tile.
  - *Autotile (XP Format)*: Allows you to select a 4x3 tile autotile.
  - *Animated (XP Format)*: Allows you to select a 4x9 animated tile.

## Attributes

![Attributes](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/9a227959-89d4-4b63-ad18-1130b4e410cd)

If you followed the steps above you probably noticed a big flaw in our game right now. You can walk **through** the tree! <a href="http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif" data-lity><i class="fa fa-play-circle"></i></a>

No worries though, this section will help fix that! Attributes are like a sixth layer of the map. Attributes allow you to place tiles with special properties such as being blocks that players cannot pass.

Go back to your editor and open the **Attributes** tab in the **Map Layers** panel. Select the **Block** attribute and place it over the trunk of your tree. <a href="http://www.ascensiongamedev.com/resources/filehost/60984ce488de64b42ddec0bed012cb52.gif" data-lity><i class="fa fa-play-circle"></i></a>

Using the **Block** attribute you will find that you finally have a tree that renders correctly and, despite your best efforts, you won't be able to phase through.

![No More No Clip!](https://www.ascensiongamedev.com/resources/filehost/8ae4ea6cfdb97b1f7e1cf0efa4d1677a.gif)

You won't use any attribute more than the **Block** attribute. That being said here is a quick rundown of the rest of the attributes and what they do.

| Attribute       | Description                                                                                                                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Block           | Marks a tile on the map as being unpassable, neither npcs nor players can traverse through blocked tiles.                                                                                                                                                              |
| NPC Avoid       | Acts as a block tile for npcs only. This is often used so monsters won't enter friendly areas or block narrow pathways.                                                                                                                                                |
| Warp            | When a player steps on a warp tile they will be teleported to a location in the game of your choosing.                                                                                                                                                                 |
| Item Spawn      | An item of your choosing and design will periodically spawn on this time.                                                                                                                                                                                              |
| Map Sound       | A sound effect will be playing on tiles where this attribute are placeed. The sound will grow louder and softer at the player approaches and moves away from this attribute.                                                                                           |
| Resource        | A harvestable resource will spawn on this tile. This is commonly used for woodcutting, mining, fishing, and more. We will discuss this later in the resource editor documentation.                                                                                     |
| Animation       | An animation from the animation editor will play on this tile. Animations when properly setup can bring your game world to life. Ex: <a href="https://www.freemmorpgmaker.com/wp-content/uploads/2017/10/windmill.gif" data-lity><i class="fa fa-play-circle"></i></a> |
| Grappling Stone | When combined with grappling hook projectiles you can allow your character to traverse terrain that he wouldn't be able to otherwise. This will be discussed in-depth in the projectile editor documentation and examples.                                             |
| Slide           | This tile forces your player to slide in a direction of your choosing. You can use it for puzzles, traps, and more!                                                              |
| Critter         | This allows you to add quality of life NPC's such as butterflies, crows, etc. These NPC's do not attack and can not be attacked. |

## Lights

![Lights](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/ec818323-88c4-49d4-baa4-28a98acc4b8f)

## Events

![Events](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/dbc82bc0-4c0d-4ce6-a046-771f0f4fdaac)

## NPC's

![Npcs](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b23db3d8-79f4-446b-b8f3-89dfdf27d83f)

## Map Properties

![Properties](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4342f1e9-6080-49c0-97fa-557bc6510550)

## Toolbar

![Toolbox](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c2cb7981-72fa-4af9-bf4f-800d3c2318c5)
