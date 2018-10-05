---
title: Usage Examples
---

## Creating an Equipment Item.
Selecting the equipment type, we have:
![Equipment 1](http://www.ascensiongamedev.com/resources/filehost/327ba12f6cc95c0dd3057165de221b97.png)

What's additional here is:
 - Slot Equipment: Where the item will be equipped.
>Intersect offers 5 initial options that can be changed in config.xml in the resources folder inside the server folder.
Helmet, Armor, Weapon, Shield and Boots.

For all these types the settings remain normal, however if you select Weapon, will appear more.
![Equipment 1.1](http://www.ascensiongamedev.com/resources/filehost/dde101f70762ee4e0bce87b04be0b0e0.png)

 - Stat Bonuses
 These are addictions that will happen in character status when the weapon is equipped.
 - Bonus Effect
   - Cooldown Reduction - Reduction of the waiting time of a spell.
   - Life Steal - Effect of draining the life of the enemy.
   > Both values are set in percentage.
 - Weapon Properties.
   1. Base Damage - Basic weapon damage.
   2. Crit Chance - Percentage of get a critic attack.
   3. Damage Type - Type of damage it will cause.
   4. Scaling stat -  Is the value of the players stat in the character menu. It includes points players have put into each stat and buffs that items/spells provide.
   5. Scaling Amount - Can be 100%, 200%, 300% or more so it could add 200 damage, 400 damage, or a whole lot more.
   6. Projectile - Defines a projectile for the weapon.
   7. Attack Animation - Animation for each attack.
   8. Tool Type - If it is a tool, you can specify it here.
 - Paperdolls - Overlays on the character image that will appear when the player equips the equipment.
 >To make paperdoll choices appear. You must add PNG format images in: client and editor/resources/paperdolls.

## Creating an Consumable Item.
We do not have much.
![Equipment 2](http://www.ascensiongamedev.com/resources/filehost/4bef11e6d04a9f20c16010f6893bc326.png)
Because it is consumable, simply add if you want to increase Health or mana and add value.

## Creating an Currency Item.
Only the basic settings shown at the top of the page appear.
![Equipment 3](http://www.ascensiongamedev.com/resources/filehost/03a1fb85b49283d4e5f7a695580e8c82.png)
This is for use only in the Shop Editor. That will set a default currency used in Player-Shop transitions.

## Creating an Spell Item.
![Equipment 4](http://www.ascensiongamedev.com/resources/filehost/9db8358e6e25d7354e06099604facd9a.png)
Select the spell.
When the player uses this item will learn the selected magic.

## Creating an Event Item.
![Equipment 5](http://www.ascensiongamedev.com/resources/filehost/19a157714d7a36de460ce81c2fa3d1eb.png)
Select the event.
When the player uses this item will activate a common event.

## Creating an Bag Item
![Equipment 6](http://www.ascensiongamedev.com/resources/filehost/635644fda2d1e8f04b06477a96ce5eaa.png)
When selecting this type of item. You will receive an option to add a value. This value is the amount of Slots that the bag will have.

Now you know how everything works and knows how to create all kinds of items. A lot can be done if you use your imagination. Remember that only the basics of everything are shown here, but if you explore more you can learn a lot more.