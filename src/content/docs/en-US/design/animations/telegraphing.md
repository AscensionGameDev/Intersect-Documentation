Putting this here for Panda to format correctly

Hello! This is a guide for how to add telegraphs for spell animations in your game. If you're unfamiliar with what this means, when you have an enemy cast a spell that is going to fire out projectiles, you can give the spell a casting animation that alerts the player that a projectile spell is about to be cast and that they can dodge it.


I. Creating telegraph animations

To make animations for spell telegraphs, you start with a 32x32 blank tile and surround it in 32x32 squares with your choice of color and opacity in the path of the spell's projectiles. You can download several telegraphs that I've made here and add them to your animations folder, or create your own to use. Here is a key for which telegraph animations go with which projectile setups.

1VWOFpY.png

Keep in mind you can create your own telegraphs for any projectile setup, these are just a few basic examples.


II. Telegraph animation setup

In order to setup the animation for a spell telegraph, create a new animation. Then, select the graphic in the "Graphic" field, leave the number of frames and frame count at 1, and then set the frame duration to match the length of the spell your telegraphing. For example, if the spell being cast is 5 seconds long, you would set the Frame Duration to 5000ms, so players see that a spell is incoming until it arrives.

skUeMPr.png


III. Spell setup

In order for the spell to utilize the telegraph, set the "Extra Cast Animation" to the animation you just created. Now whenever that spell is cast by a player or NPC, the telegraph animation will display while the spell is being cast.

jqP6IBR.png


IV. Result

Now that the telegraph animation is added to the spell, whenever the spell is cast, it will display the telegraph animation during the cast until the spell goes off.

PLkxxqv.gif

Make sure you also create a projectile for a spell that properly reflects the spells telegraph. If you need help with that, refer to the key posted in step 1.


Other telegraphs available in the download:

  d1iadlp.gif  jrb5DvA.gif  AD1pemV.gif
