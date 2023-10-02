---
title: Items
---

## Overview
Creating items are done via the `Item Editor` under the `Game Editors` tab on the main interface.

![Editor](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/62eb26ef-89cd-47c4-aff3-f9ec8780af98)

## Managing Items
![Management](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/29045f19-a4b1-47ef-bfe4-9102ca2abc58)

- Clicking on the first icon here will create a new item. Shortcut = Ctrl+N
- Clicking on an item in the list and clicking the second icon will delete that item.
- Clicking the third icon will catagorize your items in alphabetical order.
- Clicking on an item in the list and clicking the fourth icon will copy that item. Shortcut = Ctrl+C
- Clicking on an item in the list and clicking the fifth icon will paste your copied item. Shortcut = Ctrl+V
- Clicking on the sixth icon will revert your last change to an item (Does not revert deletion).

## Editing Items

### General
![General](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f4fbdac4-92a8-4b1f-9704-28072e7efbcd)

- *Name*: Allows you to set a name for your item.
- *Folder*: Clicking on the X next to this field allows you to create a folder for item organization.
- *Type*: Please click [here](#item-types) for more information on each item type.
- *Rarity*: Allows you to set a rarity to your items which will change the color of the item name in the description window and when mouse hovering the items on the map.
- *Desc*: Allows you to write a description of the item which will show in the description window.
- *Can Drop?*: Ticking this off will disable the item from being dropped.
- *Can Trade?*: Ticking this off will disable the item from being traded.
- *Can Sell?*: Ticking this off will disable the item from being sold.
- *Can Bank?*: Ticking this off will disable the item from being banked.
- *Can Guild Bank?*: Ticking this off will disable the item from being guild banked.
- *Can Bag?*: Ticking this off will disable the item from being bagged.
- *Drop chance on Death (%)*: Allows you to set a percentage value of whether you want the item to be dropped upon death.
- *Item Despawn Time (ms)*: Allows you to set a despawn timer on the dropped item in milliseconds. 1000 (ms) = 1 second.
- *Pic*: Allows you to set a pic for the item that will be shown in the game. The location for these images would be in the clients `resources\items` folder.
- *Hue*: `Red, Green, Blue, Alpha` adds hue color and alpha changes to your items image in the client.
- *Price*: Allows you to set a price at which the item can be sold.
- *Animation On Use*: Allows you to add an animation to the item that shows when used. If you don’t have any animations created, refer to the `Animation Editor` in the `Game Editors` tab on the main interface.
- *Equipment Animation*: Allows you to add an animation to the item that shows when equipped. 

### Usage Requirements
![Requirements](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/706a3b3e-2631-441d-aa50-90fa9291a31c)

- *Edit Usage Requirements*: Clicking this will open another window which is used for `Conditions`. Refer to the [Conditions](./conditions.md) documentation section for more information about this.
- *Cannot Use Message*: Allows you to set a message as to why the item can’t be used.

### Cooldown Options
![Cooldown Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/7e2a5918-3146-492a-8bd6-232c93fa2c66)

- *Cooldown (ms)*: Allows you to set a cooldown timer in milliseconds. 1000 (ms) = 1 second. This disables the item from being used until the timer ends.
- *Cooldown Group*: Clicking the + next to this field allows you to create a group which you can place multiple items in a cooldown catagory, which disables all of those items in the group from being used until the cooldown timer ends.
- *Ignore Global Cooldown?*: Toggling this will ignore the global cooldown of items. The `server config` has global cooldowns disabled by default.
- *Ignore Cooldown Reduction?*: Toggling this will disable/enable the players cooldown reduction percentage effect.

### Stackable Options
![Stackable Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/3f2dcf96-f3f7-49c0-9d61-8ffd7ff64777)

- *Stackable?*: Toggling this will define whether you want the item to be stackable or not.
- *Inventory Stack Limit*: Setting this allows you to set an inventory stack limit on the item that will take another inventory slot.
- *Bank Stack Limit*: Setting this allows you to set a bank stack limit on the item that will take another bank slot.

## Item Types
![Types](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/76a7ec47-3e5b-418d-9470-c919cf8fd99b)

## Item Type: None
When this type is selected, it is an item that has no click interaction with the character.

## Item Type: Equipment
When this type is selected, it shows you another container window on the bottom where you can select which equipment type your item is.

![Equipment Slot](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/0a1876df-99e1-48df-8439-169027bb37f7)

### Vital Bonuses
![Vital Bonus](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/24e330e4-d4a9-4451-8782-f49c2011efcd)

- *Health*: Allows you to add health vital to the equipment in raw value and/or percentage value.
- *Mana*: Allows you to add mana vital to the equipment in raw value and/or percentage value.

### Regen
![Regen](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/1c976bd1-686c-4243-b880-7be41d95dbb3)

- *HP (%)*: Setting this allows you to set the equipments HP regen percentage per tick. Tick timer for regen can be modified inside the `servers config` file. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.
- *MP (%)*: Setting this allows you to set the equipments MP regen percentage per tick. Tick timer for regen can be modified inside the `servers config file`. Under `Combat`, `RegenTime`. Default is 3000 (ms) = 3 seconds.

### Bonus Effects
![Bonus Effects](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b9103475-6c19-43ff-9807-e8f5b0c7c5e7)

- *Cooldown Reduction*: Clicking on this will allow you to add the effect amount below it.
- *Life Steal*: Clicking on this will allow you to add the effect amount below it.
- *Tenacity*: Clicking on this will allow you to add the effect amount below it.
- *Luck*: Clicking on this will allow you to add the effect amount below it.
- *EXP*: Clicking on this will allow you to add the effect amount below it.
- *Mana Steal*: Clicking on this will allow you to add the effect amount below it.

### Stat Bonuses
![Stat Bonuses](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/57aec106-21d9-482e-884e-86f15c945e9d)

- *Attack*: Allows you to set an attack stat bonus on the item in raw value and/or percentage value.
- *Ability Pwr*: Allows you to set an ability power stat bonus on the item in raw value and/or percentage value. 
- *Defense*: Allows you to set a defense stat bonus on the item in raw value and/or percentage value.
- *Magic Resist*: Allows you to set a magic resist stat bonus on the item in raw value and/or percentage value.
- *Speed*: Allows you to set a speed stat bonus on the item in raw value and/or percentage value.
- *Stat Bonus Range (+-)*: Allows you to set a stat range on all stats (negative or positive) of value given.

### Paperdoll Options
![Paperdoll Options](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/8d416a6e-d4da-41ae-9f99-32c2c7d59551)

- *Male Paperdoll*: Allows you to set the male paperdoll, the images will be located in the clients `resources\paperdoll` folder.
- *Female Paperdoll*: Allows you to set the female paperdoll.

### Additional Weapon Options
When the weapon type is selected, it shows you another container on the right where you can set further options for.

![Weapon Properties](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/b61d1a12-d7d1-4ac3-97a4-9e2efc0c5f24)

- *2 Hand*: Toggling this on will make your weapon two handed and will utilize the weapon and shield slot.
- *Base Damage*: Setting this will give the weapon a raw base damage value.
- *Crit Chance (%)*: Setting this will increase the crit chance percentage.
- *Crit Multiplier (Default 1.5x)*: Setting this will increase the crit damage based on a multiplier of the base damage.
- *Damage Type*: Setting this will allow you to select whether the damage is Physical, Magic or True. True damage negates resistance.
- *Scaling Stat*: Setting this will link the base damage with the characters stat selected here.
- *Scaling Amount (%)*: Setting this will scale the scaling stat based on percentage. Example, if the character has 10 Attack and its scaled amount is set at 50%. The base damage will include 5 Attack as base damage before resistances.
- *Projectile*: Allows you to select a projectile from the `Projectile Editor` to use here.
- *Sprite Attack Animation*: You can select a sprite attack animation here. The sprite needs to be located in your clients `resources/entities` folder and they must be in `.png` format with the naming convention, `spritename_weapon_customname.png`. This option will override the engine default sprite animation named, `spritename_weapon.png`.
- *Extra Attack Animation*: You can select an extra attack animation here. If you don’t have any animations created, refer to the `Animation Editor` in the `Game Editors` tab on the main interface.
- *Tool Type*: Allows you to select a tool type for resource gathering, additional tool types can be added in the `server config` file.

### Additional Shield Options
When the shield type is selected, it shows you another container on the right where you can set further options for.

![Shield Properties](https://github.com/Richy1111/Intersect-Documentation/assets/72468758/0903635e-76fe-4e91-bc60-f9a35ac1a1d9)

- *Block Chance (%)*: Allows you to add a block chance percentage to the shield.
- *Block Amount (%)*: Allows you to add a block amount percentage to the shield.
- *Block Damage Absorption (%)*: Allows you to add a block damage absorption percentage to the shield.

## Item Type: Consumable
When this type is selected, it shows you another container window which allows you to set the vitals upon use.

![Consumable](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/315a661e-ee56-4b43-aba6-48afbe1f5661)

- *Health*: Allows you to add health points as a raw value and/or percentage upon consumption.
- *Mana*: Allows you to add mana points as a raw value and/or percentage upon consumption.
- *Experience*: Allows you to add experience points as a raw value and/or percentage upon consumption.

## Item Type: Currency
When this type is selected, it defines the item as currency which will automatically set it as stackable.

![Stackable Options](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/c8690d83-e460-44c4-9e88-cd4117c39a7b)

- *Stackable?*: Item type currency disables you from turning this option off.
- *Inventory Stack Limit*: Setting this allows you to set an inventory stack limit on the currency that will take another inventory slot.
- *Bank Stack Limit*: Setting this allows you to set a bank stack limit on the currency that will take another bank slot.

## Item Type: Spell
When this type is selected, it shows you another container window which you can select a spell from the spell editors list to cast as an item.

![Spell](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/f3811299-49b4-422e-95f7-8db0727a23d9)

- *Spell*: Allows you to select a spell from the `Spell Editor` list.
- *Quick Cast Spell?*: Ticking this box allows you to quick cast a spell.
- *Destroy On Use?*: Ticking this box allows you to destroy the item upon usage, or -1 if stacked.
 
## Item Type: Event
When this type is selected, it shows you another container window which you can select an event from the list of common events when using the item.

![Event](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/b5da3c25-8818-4139-aa6b-93a5caaedf0a)

- *Event*: Allows you to select an event from the `Common Event` list. Refer to the [Events](../events/introduction.md) documentation page for more information on how to create events!
- *Destroy On Use?*: Ticking this box allows you to destroy the item upon usage, or -1 if stacked.

## Item Type: Bag
When this type is selected, it shows you another container window which you can select the amount of slots within the item to be used like a bag.

![Bag](https://github.com/AscensionGameDev/Intersect-Documentation/assets/72468758/e74e3bf7-d6e4-4e7b-915a-69a2d8429457)

- *Bag Slots*: Allows you to add the amount of slots that will be in the bag.
