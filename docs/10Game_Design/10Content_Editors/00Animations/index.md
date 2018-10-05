---
title: Animations
---

Let's get to know the animation editor interface.
![Editor interface](http://www.ascensiongamedev.com/resources/filehost/37784f99a51f25dffa9d42ae0c448087.png)

The Editor of animations serves to create animations of all types. What will change will be the creator's mind, it may be for spells, character effects, map effects and among several other things.
On the left:
New, Delete, Copy and Paste, Undo Changes and Animation List.

On the right:
We have the Animation Settings.

 - General
Name: Name of the Animation.
Sound: Sound that the animation will play.
Swap Upper/Lower: It works to change the animation from upper layer to lower layer and vice versa.
> To display the list of sounds, you must place files in .WAV format in: client and editor/resources/sounds

Now, before we go to the next concepts. You need to know that there are two sections in the animation editor.
Lower and Upper Layer.
Taking into account the player, the bottom layer will cause the animation to execute below the character and the top layer will cause the animation to execute over the character. But in their configurations the two are the same.

![Editor Interface 1](http://www.ascensiongamedev.com/resources/filehost/52ae2064556193c17675bf1443de382c.png)

 - Preview - It's black box you see. Once the animation is selected you can see the changes you make.
 - Graphic: PNG image in Client and Editor / resources / animations.
 - Graphic Horizontal Frame: Number of Horizontal Frames.
 - Graphic Vertical Frame: Number of Vertical Frames.
 - Graphic Frame Count: Graphic Horizontal Frame multiplied by Graphic Vertical Frame.
 - Frame Duration: If you want to increase or decrease the speed of the animation.
 - Loop Count: Number of repetitions of the animation when executed on the client.
 - Play / Stop Animation - Just like the name says.
 
## Light Editor.
The Light Editor is for inserting a light into the animation just as it work on the map.
Here we have:
 - Offset X and Y - Will move the beam of light out of the center. In the X axis positive values to move to the right and negatives to move to the left. In the Y axis positive values to move down and negative to move up.
 - For Intensity, size and amt. Just add values. Images will explain their functions better than words could explain.
 - Intensity
![Intensity](http://www.ascensiongamedev.com/resources/filehost/9142daf0b0b4a891c12f067d4c1a5a71.png)
 - Size
![Size](http://www.ascensiongamedev.com/resources/filehost/f9057d54d2e7068d32b6e287be360849.png)
 - AMT
![AMT](http://www.ascensiongamedev.com/resources/filehost/48b0a0a9b4e0909fa572626fd119ca33.png)
For you to know how the light is in function of the animation simply increase the bar in "simulating darkness".
The revert button will make the size 0.

On the next page we will see how everything works.