---
title: Animations
---

- Enhancing Maps via Attributes
- Attacks/Spells
- Projectiles
- Weather
- More?

## Configuration

First to create an Animation, we go to the Animation Editor under the 'Game Editors' tab.
We will examine the menu tabs and go over what they do here.
![menu tabs](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/618685af-4820-4490-a647-7d05230cbf1f)

- To add a new Animation, click on the top left first icon or use the key shortcut Ctrl+N.
- To delete an existing Animation, click on the Animation in the list and click on the top left second icon.
- You can arrange the list in alphabetical order by clicking on the top left third icon.
- You can copy an existing Animation by clicking on the Animation in the list and then click on the top left fourth icon or use the key shortcut Ctrl+C.
- You can paste the copy inside a New Animation or overwrite another by clicking on that Animation in the list and then click on the top left fifth icon or use the key shortcut Ctrl+V.
- You can undo a change by clicking the top left sixth icon (This does not revert changes to Animation deletion). 

After knowing the menu tab functions, we'll now focus on the main editor. 
![Animation Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8037f701-6366-4746-a903-9fe4360de917)

It's important to notice that there are two different sections. The section on the right will play the animation under the target, while the section on the left will play the animation over the target. Keep this in mind as you create your animation because you'll only need to utilize one section.
Now we'll focus on what each of the options do.

**General**
- *Name:* Giving your Animation a name.
- *Sound:* Applying a sound effect when the animation plays, it will play this sound.
- *Simulate Darkness:* For testing what your animation will look like on darker or lighter maps.
- *Folder:* You can add a folder to the animation list for organization.
- *Complete Sound Playback After Anim Dies:* With this checked on, it will play the sound file all the way through even after the Animation has ended.
- *Swap Upper/Lower:* This will move your animation between the two sections.
**Frame Options**
*Graphic:* This allows you to choose from a graphic that should be in your resource\animations folder.
*Graphic Horizontal Frames:* This allows you to set how many frames your Animation will be going horizontal.
*Graphic Vertical Frames:* This allows you to set how many frames your Animation will be going Vertical.
*Frame Duration (ms):* This allows you to time your animation frame processing, 1000 (ms) is equal to 1 second.
*Loop Count:* This allows you to set a loop to the animation sequence.
*Disable Rotations:* Check this box if you have static animations that have no direction. Rotations are best for projectile animations that have direction.
*Render Above Player:* Check this box if you want the Animation to play above the character.  
*Render Below Fringe:* Check this box if you want the Animation to play below fringe tiles, such as behind walls or trees.
**Light Editing**
*Frame:* This allows you to scroll through each frame to set lighting options per frame.
*Play Animation:* This will show you how the animation will play in real time and lighting effects when you simulate darkness.
*Offset X:* Creates an offset horizontally by pixel. Positive value will offset and go right while a negative value will offset and go left.
*Offset Y:* Creates an offset vertically by pixel. Positive value will offset and go bottom while a negative value will offset and go top.
*Intensity:* 255 is default as it gives the full lighting effect, this can be decreased if you wish your animation to be less lit.
*Size:* Setting this will give your light a size ratio.
*Expand Amt:* Setting this expands the intensity further in size.

Now that we've covered everything about the animation creation process, we can click 'Save' and now we can use the animation anywhere there's an option.

*Spell Editor:* Animation is huge in spell creation.
*Projectile Editor:* For animations like arrows and projectiled spells.
*Map Editor:* We can use the Animation attribute to add our animation to a map. 
*Item Editor:* We can use Animation on most if not all the items!
*Class Editor:* Yes, there's even an Animation option here as well for unarmed mages!
*Event Editor:* You can have an animation shown in an event, this works well for Quest NPC icons and for animations even played during dialogues.
*Resource Editor:* They are everywhere!



## Graphic Layout

- Columns and Rows
- Frame Count
- Center of Animation frame will be centered on a player.
