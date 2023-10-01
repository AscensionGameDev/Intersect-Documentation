# Telegraphed Animations Guide
[_Authored by Mcadams_](https://www.ascensiongamedev.com/topic/6934-telegraph-spell-animations/)

Hello! This is a guide for how to add telegraphs for spell animations in your game. If you're unfamiliar with what this means, when you have an enemy cast a spell that is going to fire out projectiles, you can give the spell a casting animation that alerts the player that a projectile spell is about to be cast and that they can dodge it.

## Creating telegraph animations

To make animations for spell telegraphs, you start with a 32x32 blank tile and surround it in 32x32 squares with your choice of color and opacity in the path of the spell's projectiles. You can [download several telegraph animations that Mcadams made][mcadams-telegraph-animation-pack] and add them to your animations folder, or create your own to use. Here is a key for which telegraph animations go with which projectile setups.

![Telegraph Animation Key](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/8885c54a-c08a-4e56-bd50-9852abe0a7e8)

Keep in mind you can create your own telegraphs for any projectile setup, these are just a few basic examples.

## Telegraph animation setup

In order to setup the animation for a spell telegraph, create a new animation. Then, select the graphic in the "Graphic" field, leave the number of frames and frame count at 1, and then set the frame duration to match the length of the spell your telegraphing. For example, if the spell being cast is 5 seconds long, you would set the Frame Duration to 5000ms, so players see that a spell is incoming until it arrives.

![Telegraph animation setup](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/79613cfb-f925-40b2-a9cb-7df54ce30e2c)

## Spell setup

In order for the spell to utilize the telegraph, set the "Extra Cast Animation" to the animation you just created. Now whenever that spell is cast by a player or NPC, the telegraph animation will display while the spell is being cast.

![image](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/277aa7d3-218c-431c-83c2-c96bd45cf3d0)

## Result

Now that the telegraph animation is added to the spell, whenever the spell is cast, it will display the telegraph animation during the cast until the spell goes off.

![Telegraph animation 1](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/769380b5-cb6c-4832-be33-710992c3ce77)

Make sure you also create a projectile for a spell that properly reflects the spells telegraph. If you need help with that, refer to the key posted in step 1.

Other telegraphs available in the download:

  ![Telegraph animation 2](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/d3d183f8-7fda-4e21-819d-dcc4f4b61172) 
	![Telegraph animation 3](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/edfdcf95-157c-41a2-bb67-069a73048ff7)
 ![Telegraph animation 4](https://github.com/Mcadams/Intersect-Documentation/assets/1476550/3cad2812-55fc-487b-85cc-75758d8a5ea8)

[mcadams-telegraph-animation-pack]: https://github.com/Mcadams/Intersect-Documentation/files/12776042/Mcadams.Telegraph.Animation.Pack.1.0.0.2023-09-30.zip "Mcadams' Telegraph Animation Pack 1.0.0 (2023-09-30).zip"
