---
title: Spells
---

Now let's look at the interface of this editor.
![Interface 1](http://www.ascensiongamedev.com/resources/filehost/af7dda25228071ca285b68bdbb430374.png)

On the left:
New, Delete, Copy and Paste, Undo Changes, and Spell List.

On the right:
We have the spell settings.

#### Let's start with the essential which it will appear in all kinds.

General

  - Name - Name of the Magic.
  - Type - Type of Magic. (We will go deeper)
  - Icon - Icon that represents magic.
  - Desc - Description of the spell.
  - Cast Animation - Animation at the exact moment the spell is cast.
  - Hit Animation - Animation when the target is hit.

Casting Requirements: Requirements to use magic.

Spell Cost

  - HP and MP cost - Amount of HP or MP needed to cast the spell.
  - Cast Time and Cooldown Time - Respectively, Time to cast a spell and time that the magic takes to recharge.

#### Let's look at the target session.

 - Self - This type of magic will cause benefits for the player who uses it, so make sure that the "Friendly" option is checked. You will soon see how everything works.
 - Single Target (includes self) - The spell will only play if a target is selected and the target is within range. You too can be a victim. When you choose this option, two new options appear:
  1. Cast Range - Set the distance the magic reaches.
  2. Hit Radius - Spell's hit radius when the target is hit.
 - AOE - "Area of Effect" - The "Caste Range" option is disabled, this type of spell affects all targets within a certain range of radius. The value is defined here and this type of target dont need a select a target.
 - Linear - Use a projectile as the base to cast a spell linearly, the distance is set there. With regard to animation it is at the discretion of the admin set up here or in Projectile Editor.

#### Now we are going to study the types of magic.

- Combat Spell - It is the most used type of magic that serves both for combat and for its own benefit. It can be used in many ways depending on the creator's mind.
Lets you select the target type and additional status effects.

- Warp to Map - There is no secret, there will be only one configuration screen that will allow you to define where the player will be teleported.
Does not allow you to select target type.

- Warp to Target - Allows the player to teleport to the target.
It does not allow selecting the target type, it is already pre-configured for "Single Target (includes self)".

- Dash - A "leap" spell where the player leaves from one place to another. By selecting this type you can set the jump distance and which conditions can be ignored.
Do not be able select targets.

- Event - A spell that when used will activate a common event.
Do not be able select targets.

#### By selecting "Combat Spell", new options will be evaluated.

- Damage:
 1. HP and MP Damage - Basic HP and MP damage. Positive values for damage and negatives for healing.
 2. Damage Type - Type of damage it will cause.
 3. Scaling stat - Is the value of the players stat in the character menu. It includes points players have put into each stat and buffs that items/spells provide.
 4. Scaling Amount - ScalingAmount can be 100%, 200%, 300% or more so it could add 200 damage, 400 damage, or a whole lot more.
 5. Crit Chance - Percentage of getting a critical attack.

- Heal / Damage Over Time
By selecting this box you will be activating the possibility of multiple conjurations, here you configure how many times the spell will be repeated taking into account the time defined in "Stat Boost / Effect Duration".
In a brief explanation, if the time set in "Stat Boost / Effect Duration" is 5000 ms (5 seconds) and the time set in "Heal / Damage Over Time" is 1000 ms (1 second), then in a period of 5 seconds the magic will repeat itself every 1 second. It is important to remember that the hit animation, if any, will also be repeated 5 times in this example.

- Stats Modifiers
Changing character statuses during the time set in "Stat Boost / Effect Duration".

- Effects
An extra effect that magic can cause, the current effects are:
 1. Silence: Blocks the player from casting magic.
 2. Stun: Blocks the player from casting spells and walking.
 3. Snare: Blocks the player from walking.
 4. Blind: Makes all basic damage dealt to 0.
 5. Stealth: Makes the player invisible.
 6. Transform: Transforms the player into another sprite.

Now we will learn how to create each of these spells to make sure everything was well seized.