---
title: Animations
---

Creating animations is done via the Animation Editor under the 'Game Editors' menu.

## Managing Animations

![CRUD and Sorting Menu](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/618685af-4820-4490-a647-7d05230cbf1f)

- To add a new Animation, click on the top left first icon or use the key shortcut Ctrl+N.
- To delete an existing Animation, click on the Animation in the list and click on the top left second icon.
- You can arrange the list in alphabetical order by clicking on the top left third icon.
- You can copy an existing Animation by clicking on the Animation in the list and then click on the top left fourth icon or use the key shortcut Ctrl+C.
- You can paste the copy inside a New Animation or overwrite another by clicking on that Animation in the list and then click on the top left fifth icon or use the key shortcut Ctrl+V.
- You can undo a change by clicking the top left sixth icon (This does not revert changes to Animation deletion). 

## Editing Animations

![Animation Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/8037f701-6366-4746-a903-9fe4360de917)

It's important to notice that there are two different sections. The section on the right will play the animation under the target, while the section on the left will play the animation over the target. Keep this in mind as you create your animation because you'll only need to utilize one section.

### General

![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/dde29e9c-3834-4576-81d7-248f71fa362a)

- *Name*: Giving your Animation a name.
- *Sound*: Applying a sound effect when the animation plays, it will play this sound.
- *Simulate Darkness*: For testing what your animation will look like on darker or lighter maps.
- *Folder*: You can add a folder to the animation list for organization.
- *Complete Sound Playback After Anim Dies*: With this checked on, it will play the sound file all the way through even after the Animation has ended.
- *Swap Upper/Lower*: This will move your animation between the two sections.

### Frame Options

![Frame Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/53aaaf62-74ac-46ce-8219-03c56fc5d7e7)![Upper](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/de1a3ab0-642a-41c2-b45e-5ca17349f011)![Lower](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7081592d-4994-4e4b-a4f1-6274b05510dc)

- *Graphic*: This allows you to choose from a graphic that should be in your client resources\animations folder.
- *Graphic Horizontal Frames*: This allows you to set how many frames your animation will be going horizontal.
- *Graphic Vertical Frames*: This allows you to set how many frames your animation will be going vertical.
- *Frame Duration (ms)*: This allows you to time your animation frame processing, 1000 (ms) is equal to 1 second.
- *Loop Count*: This allows you to set a loop to the animation sequence. Not required for map or event set animations.
- *Disable Rotations*: Check this box if you have static animations that have no direction. Rotations are best for projectile animations that have direction.
- *Render Above Player*: Check this box if you want the Animation to play above the character.  
- *Render Below Fringe*: Check this box if you want the Animation to play below fringe tiles, such as behind walls or trees.

### Light Editing

![Lighting](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/95e80a89-b526-4d26-aeb7-ecf2f9c12932)

- *Frame*: This allows you to scroll through each frame to set lighting options per frame. You can clone previous frame light settings for easier editing.
- *Play Animation*: This will show you how the animation will play in real time and lighting effects when you simulate darkness.
- *Offset X*: Creates an offset horizontally by pixel. Positive value will offset and go right while a negative value will offset and go left.
- *Offset Y*: Creates an offset vertically by pixel. Positive value will offset and go bottom while a negative value will offset and go top.
- *Intensity*: 255 is default as it gives the full lighting effect, this can be decreased if you wish your animation to be less lit.
- *Size*: Setting this will give your light a size ratio.
- *Expand Amt*: Setting this expands the intensity further in size.

Now that we've covered everything about the animation creation process, we can click 'Save' and now we can use the animation in the other editors.

- *Spell Editor*: Animation is huge in spell creation.
- *Projectile Editor*: For animations like arrows and projectiled spells.
- *Map Editor*: We can use the Animation attribute to add our animation to a map. 
- *Item Editor*: We can use Animation on most if not all the items!
- *Class Editor*: Yes, there's even an Animation option here as well for unarmed mages!
- *Event Editor*: You can have an animation shown in an event, this works well for Quest NPC icons and for animations even played during dialogues.
- *Resource Editor*: They are everywhere!

If you need further assistance on how to set your animations in these editors, refer to the related Editor documentation section for more information!
