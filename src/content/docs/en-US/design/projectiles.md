---
title: Projectiles
---

## Overview
Creating projectiles are done via the `Projectile Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/140d0cda-c0e4-4ffe-a6b5-a0f439a6e64c)

## Managing Projectiles

![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/95f61f4d-168a-465c-a8e2-7a1b55c9fcbf)

- Clicking on the first icon here will create a new projectile. Shortcut = Ctrl+N
- Clicking on a projectile in the list and clicking the second icon will delete that projectile.
- Clicking the third icon will catagorize your projectiles in alphabetical order.
- Clicking on a projectile in the list and clicking the fourth icon will copy that projectile. Shortcut = Ctrl+C
- Clicking on a projectile in the list and clicking the fifth icon will paste your copied projectile. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to a projectile (Does not revert deletion).

## Editing Projectiles

### Properties

![Properties](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/923c25ad-0f19-4630-b503-4ad6072ffd89)

- *Name*: Allows you to give your projectile a name.
- *Folder*: Clicking on the + next to this field will allow you to create a folder in the projectile list for organization
- *Speed (ms)*: Is actually the time it takes the projectile to travel the number of tiles specified by "Range". 1000 (ms) = 1 second.
- *Spawn Delay (ms)*: Allows you to set a spawn delay which is the time between each 'wave' which is defined by quantity.
- *Quantity*: Allows you to set a quantity of how many projectile shot waves are being used.
- *Range*: Allows you to set a range in tiles for how far the projectile will travel.
- *Knockback*: Allows you to set a knockback by tile. When a projectile hits an opponent, it can knock them backward.
- *Collision Spell*: Allows you to set a spell that will cast after the projectile hits an opponent.

### Projectile Spawns

![Projectile Spawn](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/44d761e2-1357-4593-b7c3-d8f1ef6fed7a)

> This allows you to set a projectiles path. Clicking on the red arrows will make them green in which the projectile will be shot in.
> This current screen shot orientation will rotate based on where the player is facing. You configure the projectile assuming the player is facing north/up.
> When selecting more projectile spawns, it allows the player to shoot in multiple directions.

### Animations

![Animation](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/fdbdd9e9-ec88-4da2-99cb-3a701e25a120)![Spawn](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/8da339f7-8e88-41f6-bbd9-4743acdf4ba7)


- *Animation*: Allows you to select an animation for the projectile.
- *Spawn Range*: When you change the quantity of projectiles, you can have different projectiles spawn on different sets. You can have a projectile with Quantity: 3 that fires the same projectile 3 times. However, if you add another animation to the animation list, you can set the spawn range of each animation which indicates in which wave those projectiles will fire.
-
- For example, have a projectile with Quantity: 5, with the animation "Arcane Missile" set to spawn range 1-3, and the animation "Fire Missile" set to 4-5. So the first 3 waves will be Arcane Missiles, and the 4th and 5th will be Fire Missiles. (Shout to Mcadams for explanation.)
- *Auto Rotate Animation*: Ticking this box will automatically rotate the animation.

### Grapple Options

![Grapple Opts](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/d28214b8-3478-467b-9e01-6fd74d22f677)

- *On Map Attribute*: Ticking this box will enable grapple to map attribute.
- *On Player*: Ticking this box will enable grapple to another player.
- *On NPC*: Ticking this box will enable grapple to an NPC.
- *On Resource*: Ticking this box will enable grapple to a resource.

### Ignore Collision

![Ignore Collision](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/24b32a1b-d35d-4a57-adf3-a40a9077276e)

- *Map Blocks*: Ticking this box will allow the projectile to go through map block attributes.
- *Active Resources*: Ticking this box will allow the projectile to go through active resources.
- *Inactive Resources*: Ticking this box will allow the projectile to go through inactive resources.
- *Z-Dimension Blocks*: Ticking this box will allow the projectile to go through Z-Dimension blocks.
- *Pierce Target*: Ticking this box will allow the projectile to pierce the target.
  
### Ammunition Requirements

![Ammunition Req](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/3552faa1-fee8-426d-bf93-9eb6d68668b5)

- *Item*: Allows you to select an item to be used as a projectile.
- *Amount*: Allows you to set the amount used per shot.
