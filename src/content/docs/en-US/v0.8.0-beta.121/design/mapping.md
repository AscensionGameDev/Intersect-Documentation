---
title: Mapping
---

## Overview

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d5dc511e-619c-4e17-bced-6a22d6eba440)

A large majority of your time creating a 2D ORPG will be spent designing maps in order to create an expansive game world. The following steps will get you started on creating your first map.

## Creating or Editing Maps

> - To begin mapping. Click on the **Brush**![Screenshot_1](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/c9f78ae9-b4f6-4d5b-8fae-6674df8d2d2a) in the menubar above your map.
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
 	- *Autotile (VX Format)*: Allows you to select a 2x3 tile autotile.
  - *Fake (VX Format)*: Allows you to fake an autotile by using 1 tile.
  - *Animated {VX Format)*: Allows you to select a 6x3 animated tile.
  - *Cliff (VX Format)*: Allows you to select a 2x2 tile.
  - *Waterfall (VX Format)*: Allows you to select a 2x3 animated waterfall tile.
  - *Autotile (XP Format)*: Allows you to select a 3x4 tile autotile.
  - *Animated (XP Format)*: Allows you to select a 9x4 animated tile.

## Attributes

![attribute](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0211e7ae-da7f-47ba-839b-9844f557f510)

You probably noticed a big flaw in our game right now. You can walk **through** the tree! <a href="http://www.ascensiongamedev.com/resources/filehost/194f6d759286418f42910c9aafca0962.gif" data-lity><i class="fa fa-play-circle"></i></a>

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

![light](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/573ea6be-bfe5-4e35-ae25-c40569506d6c)

Clicking the **Lights** tab will show this window above. Double click on the map to set your light and open the options window.

- *Select Color*: Allows you to set a color for your light.
- *Offset X*: Allows you to set a horizontal offset in pixels, a negative number offsets to the left, a positive number offsets to the right.
- *Offset Y*: Allows you to set a vertical offset in pixels, a negative number offsets to the top, a positive number offsets to the bottom.
- *Intensity*: Allows you to set your lights intensity, this strengthens the color at 255 while 0 would be alpha.
- *Size*: Allows you to set your lights size.
- *Expand Amt*: Allows you to expand your radius.

When you're finished setting your options, click 'Save' to save the light (Make sure to also save your map!). Clicking 'Revert' will reset the lights options.

## Events

![event](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/822d6a85-bfe5-4979-bac4-0ad742f3df2b)

Clicking the **Events** tab will show this window above. Double click on the map to set your event and the event editor will show. Click [here](../events/introduction.md) for more information on how to set up events!

## NPC's

![npc](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/bbce0279-7ee7-4b1b-8685-83fd2099e693)

Clicking the **Npcs** tab will show this window above. We'll go over what all of the settings are for.

- *Declared*: Clicking on this will allow you to set a spawn on your map that declares where your Npc will spawn. Double click on the map after you've added your Npc.
- *Random*: Clicking on this will randomize the Npc spawn point.
- *Direction*: Allows you to set a facing direction for the Npc when it spawns.
- *Add/Remove Map Npcs*: Allows you to select an Npc to add/remove. Click on the Npc in the list and then click on 'Remove' to remove the Npc. Click 'Add' to add the Npc to the list for the map.

## Map Properties

![Properties](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/4342f1e9-6080-49c0-97fa-557bc6510550)

On the bottom right of the map editor, you'll see a window named 'Map Properties'. We will go over what all the setting are.

### Audio

- *Music*: Allows you to set music to your map. Music is located in your client subfolder `resources\music` and they are in the `.ogg` format.
- *Sound*: Allows you to set sound to your map. Sounds are located in your clients subfolder `resources\sounds` and they are in the `.wav` format.

### Fog

- *Fog*: Allows you to set fog to your map. Fogs would be located in your clients subfolder `resources\fogs`.
- *Fog Alpha*: Allows you to set your fogs alpha, 255 being solid while 0 is invisible.
- *Fog X Speed*/*Fog Y Speed*: Allows you to set a fogs horizontal/vertical movement speed (0 being no movement, 5 being the strongest)

### General

- *Name*: Allows you to set a name for your map.
- *Zone Type*: Allows you to set a zone type, those options are (`Normal`, `Safe`, `Arena`). Normal and Arena are PvP enabled.

### Lighting

- *Brightness*: Allows you to set the brightness of indoor maps. 100 being the brightest while 0 is darkness.
- *Is Indoors*: Allows you to set your map as an interior map. Interiors are not affected by day/night settings, nor fog or weather settings.
- *Player Light Color*: Allows you to give players a color light source for when it is dark.
- *Player Light Expand*: Allows you to set a fade around the players light, 0.00 to 1.00.
- *Player Light Intensity*: Allows you to set the players light intensity. 255 being the strongest while 0 being invisible.
- *Player Light Size*: Allows you to set the players light size.

### Misc

- *Overlay Graphic*: Allows you to set a graphic that will appear above the map, images would be found inside your clients subfolder, `resources\images`.
- *Panorama*: Allows you to set a graphic that will appear below the map. Also in the same subfolder.

### Overlay

- *AHue*: Allows you to set an alpha color hue. 0 being invisible, 255 being solid.
- *BHue*: Allows you to set a blue hue. 255 being the strongest color.
- *GHue*: Allows you to set a green hue. 255 being the strongest color.
- *RHue*: Allows you to set a red hue. 255 being the strongest color.

### Player

- *Hide Equipment*: Allows you to stop rendering paperdoll equipment on this map.

### Weather

- *Weather*: Allows you to set weather particles on this map. It will show you a list of animations from the animation editor.
- *Weather Imtemsity*: Allows you to set the weathers intensity. 255 being the strongest while 0 is invisible.
- *Weather X Speed*: Allows you to set the weathers horizontal movement. 5 being the strongest, 0 being no movement.
- *Weather Y Speed*: Allows you to set the weathers vertical movement. 5 being the strongest, 0 being no movement.

## Toolbar

![Toolbox](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c2cb7981-72fa-4af9-bf4f-800d3c2318c5)

- Clicking ![New](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/08cb6470-ee6f-44ed-83fb-ceba6237d98d) will create a new map.
- Clicking ![Save](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/9ce7858d-28b8-4362-993c-0bd17ea06ee0) will allow you to save the current map you're on. Shortcut = (Ctrl+S)
- Clicking ![Cut](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/a033e928-7677-46ad-8bd2-24d94c13e425) will allow you to cut tiles. Shortcut = (Ctrl+X)
- Clicking ![Copy](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0b31a6dd-0dba-49da-90c3-52969ff81fa7) will allow you to copy tiles. Shortcut = (Ctrl+C)
- Clicking ![Paste](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/ceb38220-946a-4ae7-b4e5-6724f532fd26) will allow you to paste tiles. Shortcut = (Ctrl+V)
- Clicking ![Undo](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0a8e2083-1b93-42cc-af33-bfef97bb7c00) will allow you to undo an action. Shortcut = (Ctrl+Z)
- Clicking ![Redo](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/42ccc2c4-ec4f-4ddc-bb5b-8b291b982c05) will allow you to redo an action. Shortcut = (Ctrl+Y)
- Clicking ![Brush](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/a19f4919-ec53-4a45-830e-8ea36a3454fd) will allow you to lay single tiles. Shortcut = (B)
- Clicking ![Selection](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/96404e36-e55d-4ce7-803f-3612270a95d7) will allow you to select tiles in a map by clicking and dragging from top/left to bottom/right. Shortcut = (M)
- Clicking ![Rectangle](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/3bacadf7-b4c6-4e41-888b-e69fb6afd4e8) will allow you to drop multiple tiles in a rectangular fill. Shortcut = (R)
- Clicking ![Flip H](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/77971fb1-4b5f-4bc5-abce-569970572714) will flip your selection horizontally. Shortcut = (PageUp)
- Clicking ![Flip V](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b6fa6df9-9497-4e61-8aae-55740bbfcf6f) will flip your selection vertically. Shortcut = (PageDown)
- Clicking ![Fill](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/522e4255-4df0-4b9c-acd0-9ff5d9745f72) will allow you to fill the entire map with a tile selected on any layer selected. Shortcut = (F)
- Clicking ![Erase](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/22f4a026-b40a-4393-9821-7ba45fd50e04) will allow you to erase any layer selected. Shortcut (E)
- Clicking ![Eyes](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b49e9119-2b4f-4d63-bd37-44592a0a46f0) will allow you to click on a tile to duplicate it. Shortcut = (I)
- Clicking ![Sim Day Night](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/5a14f1e1-964e-4968-8a4d-b24a56d6f19e) will allow you to simulate day/night within the editor.
- Clicking ![Screenshot](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/4f024576-364d-4ad4-8852-1e0c2835b1ac) will allow you to screenshot your map.
- Clicking ![Start Client](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/715c2a6c-e963-4c52-8f5d-c5e8ff5bc2ea) will allow you to run the client after the path setting is set in (`File`, `Options`)

> Please go to [World Design](./world.md) for information on how to connect / unconnect maps!
