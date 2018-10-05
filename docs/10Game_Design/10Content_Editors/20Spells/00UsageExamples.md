---
title: Usage Examples
---

### Combat Spell

![Combat 1](http://www.ascensiongamedev.com/resources/filehost/af7dda25228071ca285b68bdbb430374.png)
![Combat 2](http://www.ascensiongamedev.com/resources/filehost/fd38125d3828bfff1c4d47370145fa1e.png)

Let's create a basic combat spell.
Looking at the images above, let's define the attributes that our magic has.

  - Name - Fire Lion.
  - Type - Combat Spell
  - Icon - 1.
  - Desc - A flaming lion of great fury.
  - Cast Animation - We will not have to change here.
  - Hit Animation - Let's use the animation we created in the animation editor.

>Tip: Almost always when creating a combat spell, there will be a hit animation. It's almost necessary (except if you're going to use the linear target and set up the animation in the project editor), if you'd like to add one more effect, add an animation to Cast Animation.

- HP and MP cost - Set the value 15 to MP and do not change in HP.
- Cast Time and Cooldown Time - Set the value 500 to Cast Time and 5000 to Cooldown Time.

- Target - Single Target (includes self).
Cast range - 3
Hit Radius - 0

 Combat
1. HP and MP Damage - Set the value to 50 on HP and do not change MP.
2. Damage Type - Magic.
3. Scaling stat - Ability Power. This function will select one of your statuses.
4. Scaling Amount - 5% - This function will pick up the percentage of the status selected above and add to the basic damage.
5. Crit Chance - 10%

- Heal / Damage Over Time
Select the box and set 1000 ms.

- Stats Modifiers
Here it is at your discretion. In the same way that you can use this magic for your own good, you can use it for the evil of others. Negative values will decrease from the enemy's attributes. Use this tip in your favor.

- Stat Boost / Effect Duration - 5000 ms.

- Effect - None.

If you are testing on the client, you will see that the spell will work perfectly.
Select a target, use the spell. The animation will keep repeating for the duration of the spell. It can happen that the animation is spinning sideways in relation to the side you are on, sometimes this happens with some animations.

> Tip: For healing spells, simply set negative damage by making sure that the "Friendly" option is checked and the target is set to "Self". For spells of temporary status increase, it is not necessary to define damage or anything from the combat area, just add the values in "Stats Boost", set the duration duration of the effects, making sure the "Friendly" option is checked and the target is in "Self". The statuses will not receive a boost if you do not change the time.

### Warp To Map
![Warp Spell 1](http://www.ascensiongamedev.com/resources/filehost/7b382bdb5932854248b19c3676bf1374.png)

Again the same base reappears, what changes is the new configuration that allows the player to be teleported to any map and location. It is a fixed magic, there is no way to change the location all the time.

### Warp to Target
![Warp spell 2](http://www.ascensiongamedev.com/resources/filehost/9f025a54a6af1d3723b2499854869496.png)

In this one you will define the same basic values. As the name says, you will teleport to a target instead of a map, so you must have a target to activate that spell. Simply add the values and names you need and set the maximum distance the character can teleport to.

### Dash Spell
![Dash Spell](http://www.ascensiongamedev.com/resources/filehost/744301d58e1e722654a99d2de70ee84d.png)

At this point you only have to set the basic values and dash distance limit. This allows you to ignore certain map properties as you can see. This means that the dash will allow him to go over these obstacles, if it is not his will not need to mark the boxes, they will be obstacles even if the character uses dash type magic.

> Tip: Invest in the casting animation, as there is no target to hit, no set time to cast, delay magic that is "fast", invest in rest time.

## Event Spell
![Event Spell](http://www.ascensiongamedev.com/resources/filehost/898f27fd95513fe662d5af7fb29bd3b3.png)

Following the examples above, set the basic values of the spell, after that select a common event that will serve as the spell effect. If you realize everything an event can do, that kind of magic can. What to include, receive items, other spells, appear texts on the screen, play sounds or animations, among many other things, that is why it is not necessary to choose a target, because the target is you. Everything the event will reproduce will be for your own benefit.

> Tip: Another way to create healing magic. Just create a common event with the "retrieve HP" function and select this event in the event type spell. So every time the character uses this spell will restore all HP.

Much more can be done if you decide to explore the editor. We introduce the basics to encourage you to discover more utilities for the same functions presented here.