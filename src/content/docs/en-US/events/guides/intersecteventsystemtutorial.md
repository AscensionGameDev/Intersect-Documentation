---
title: Intersect Event System Tutorial
---
<p align="center">Author: Agoraphobic

<p align="center">Edited for the Docs by PyroTech03

---

Welcome, to the Intersect: Event System Tutorial! Intersect uses an advanced Event System
that you might find similar in other game creation engines; however, Intersect’s Event
System has some core differences that are tailored-made for an ORPG game creation
system. If you have worked with Event Systems in other engines, this will tutorial will
help guide you in adjusting from a single-player, game developer mindset, into an ORPG
or MMORPG approach. If you are new to the Event System, this tutorial will be essential
in learning the ins and outs of Intersect’s Event System. Working with Events is crucial in
making a well-rounded ORPG/MMORPG. I promise, that through practice and this
tutorial, that working within the Event System will become second nature to you.

**Overall Goals in Successfully Learning and Using the Event System**
- Read through this tutorial and use it as a reference when you need it
- Apply what you learn by creating your own Events and practicing
- Post questions to the forum or discord when you are stuck
- Have fun, and do not get frustrated. You will get it! ^_^

## Preface

Writing this tutorial has been a large undertaking; however, it has been my pleasure to write
something to help the Intersect Community. My goal with this work is to help our current and
future game developers either adapt or learn Intersect’s Event System. While it is not completely
comprehensive, I hope this tutorial will give you the tools to better understand Intersect and feed
your creativity to surpass what this document encompasses. It is also important to bring up why I
chose to use a more conversational tone in this piece. My goal was to ensure, no matter the
reader’s age or experience, this tutorial could be understood and followed with relative ease.
This document will continue to update as the Engine evolves and as I make corrections.
Please, feel free to email me or send a message/post on the site with bugs, suggestions, or
anything else! Best of luck!
Always Your Friend,
-Agoraphobic

## What are Events?

**Events**: Think of **Events** as different size boxes with clay within it. There are many sizes of
boxes that you can use: small ones, large ones, square ones, round ones, etc. We also can choose
what the box is made from: oak, stone, plastic, or any other material! When we say an **Event**, we
are simply referencing all of the boxes in general; however, we can get more specific with them!
When we create an **Event**, we are doing several things: choosing what type of box it is, what the
box is made from, what are we going to put in this box, and of course we are writing its name on
it. Just like a toy box, we put toys in it, decorate it like a toybox, and we write that it is a
“Toybox” on it. Let us look at an example in game terms.

Event Creation Steps

1. What type of box is it?
   - Let’s make it a “Person Box” that talks to us!
   
2. What is the name of the box?
   - Let’s name the person: “Lady Marie.”

3. Let us decide the material the box is made out of!
   - Choose the Graphic, Move Route, and other conditions.

We now have created an **Event** named Lady Marie that is going to a specific person with her own
movement and graphics. It is important to note that with this example, we could make many
more types of boxes (**Events**): a “Spike Trap” **Event**, a “Button” **Event**, a “Quest” **Event** and
numerous other things that will make our life easier when making our game. The box is
completed, but it is still empty! Now we need to look at the “clay” within the box, also known as
the **Event Commands**.

[Event Commands](../events/eventcommands.md): Whenever we create an **Event** (Box), it is always empty, and we are holding
a big block of clay. What we need to do is “break and mold the clay” into several objects. We are choosing the shapes and forms of the broken clay by molding it in different ways. After
we are done, we put it in the box. To clarify what we are talking about in game terms, this is
choosing Event commands and putting them inside the Event. When the Event activates, it will
run all the Event Commands inside it. Let us look at an example of placing the clay (Event
Commands) within the box (Event):

**Event Commands Steps**

1. What do we want the “Person” to say?
   - We choose the “Show Text” Command to make Lady Marie say “Hello.”

2. Do we want Lady Marie to do anything else?
   - We choose “Play Sound” to have her play the “Hello.wav”

Now, when the player interacts with Lady Marie’s, she is going to greet up in both text and
sound. This is just one example of how we can create different boxes and put things into them.
We created a “Person Box”, decorated it, named it, and put objects in it that a “Person Box”
could have in it.

As we continue in this tutorial, we are going to go through all the [Event Commands](../events/eventcommands.md) to show what
we can create with **Event**. Hint, there will be quite a bit. You might feel a bit overwhelmed at
this point, but do not worry because we will get through it together. This is just to get you
familiar with how **Event** and [Event Commands](../events/eventcommands.md) work together. When we start going through
each [Event Commands](../events/eventcommands.md) and the structures of the **Event**, it will be clearer with how it all comes
together.

---

## Anatomical Structure of an Event

Now that we got all the terminology out of the way, is time for us to learn how to create an
**Event**. In this section, we will be looking at the overall structure of an **Event**. Then we will also
be taking a look at each individual [Event Commands](../events/eventcommands.md) to gain a better understanding of how it
operates on its own and overall within the **Event**. Most of the [Event Commands](../events/eventcommands.md) are
straightforward; however, there will also be **Events** that are more complex than their initial
nature suggests. Let us jump right in at looking at how to even create an **Event**:

<p align="center">Open the Intersect Editor
	
![Intersect_Editor_JQAk6nnDxq](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/514e2184-25e6-493a-ad8a-f8d6dd466ea3)

Click the “Events” tab, and double click on the map to place an Event down. Double clicking a
New Event or double clicking a previously placed Event will open the Event Editor for us.

<p align="center">Event Editor
This is what our empty box looks like before we choose anything. Stop, breathe, it will be okay.
This may look a bit overwhelming, but we will get through this. The best way to tackle this
monster is to divide it up via color coding it!

![firefox_I2avNyoyy9](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/bda35c41-1ba8-4e3e-abdd-5b528d05a7c1)

Note that your editor will only show 1 page, not 2-21. Clicking **Add Page** will add more.

## Color-Coded Event System

Now, that is much better. Let’s go through each colored box and see how each part works within
the **Event**, and examine which color represents the analogy of the box and clay.

![firefox_tBXEkZbVUi](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/505480bf-d923-42f6-807d-c57494b3229e)

### General

![firefox_OjqUOwIloZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/06310704-ec87-48bb-9dce-150bf9a94389)

**Name**

This is the name of the **Event** that the engine will reference when using [Event Commands](../events/eventcommands.md). Also,
if you enable it, the Player will also see the name hovering over the **Event**. Because of this, we
must not only give the **Event** a name, but it needs to be good and/or descriptive. By not naming
**Events** or assigning terrible or nonsensical names will cause problems for you in the long run.
There are several rules of thumb things you should keep in mind when naming an **Event**:

1. Do not leave the name empty
2. Do not put random letters, words, numbers, or other weirdness to identify it.
3. Use Names for characters, numbers after if referenced more than once on a map.
4. For objects, be descriptive or the general function of it.

Let’s look at a few examples of what I mean:

*Terrible Name Examples*:
- “Tbgth2”
- “Thisperson”
- “Spike Trap”
- “Player”

Why are these terrible Event Names or names for our boxes that we are creating? The first
example makes no sense. While it is fresh on your mind, you might know what this Event
will do; however, what about a month down the road when you start going back to find edit
or fix bugs? What about if someone joins your team? While the second, third, and fourth examples are in fact cohesive names, they are too broad. What if you had fifty “Thisperson”
on a map or 50 spike traps on a map? Which one are you referencing?

*Good Name Examples*:
- “Lady Marie”
- “Sir Edgar”
- “Lady Marie Shot”
- “Spike Trap 1”
- “Spike Trap 2”
- “Player Healing Point”

Looking at these examples, we see which person we are refencing. Not only that we are able
to distinguish each **Event** apart, and get a general idea about what the Event will do. It makes
no sense to name one of our boxes, “Toy Box,” then cram it full of glass jars.

This is important. Because getting in the practice of properly naming **Event** and
commenting **Event** will make you a better Game Developer and save you major headache
later down the road.

I recommend keeping a notebook next to you or a word document where you write down
important **Event** and characters. This practice will keep you organized, especially once we
start going into **Switches** and **Variables**

**Global Event**
This is important… all Events are Player Events. What this means, is when a player activates an
Event, no one else on the map will see what is happening. So, in example, when a player opens a
door by pressing a “Button Event,” only that player will see the door open. No other player will
see it. By checking the Global Event box, this bypasses this rule and makes it affect everyone on
the map.

Let’s take a closer look:
We have two players on a map: Cecil and Sara. Cecil has an iron key in his inventory and opens
the door by a “Door Event”. He sees that the door is open and he can now walk through it with
no problem; however, Sara still sees the door closed and locked. In fact, it looks like Cecil just
walked through a closed door! By checking Global… BAM. The door is opened for all players
on the map when Cecil uses his key, so now Cecil and Sara both can walk through the door.

### Page Numbers

![firefox_vdu8YnI5no](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/86ee1072-2c0a-4bad-956a-c7aa7e152fc2)

**Page Numbers: 1+**
Remember the rule that every new box (**Event**) we create is empty? This is another rule: every
new box (**Event**) starts with 1 Page within it. Think of each page as a divider that you may place
inside our box to separate things. So, not only does our box have toys in it, but we divided the
toys into two or more categories: toys with wings, toys with cars, toys with hats, or any other
category we want to create. That way we keep everything separated. An **Event** with 1 Page in it
has no dividers within it, an **Event** with 2 pages has two dividers, an **Event** with 3 Pages has
three dividers, and so on. This is crucial when we get into Event Conditions. Refer to the
advanced section: [Event Pages and Conditions](#event-pages-and-conditions).

### Page Options

![firefox_WRVXSGQ35M](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/58e475e0-6bb6-4217-b99b-467f3c237262)

**New Page**
Each time you press the “New Page” button, it adds a divider (page) to our box (Event). Create
only the amount needed for the Event, and do not create one-hundred pages and jump between
them randomly for fun. It will not work out well for us.

**Copy & Paste Page**
These buttons allow you to copy the entirety of a page to your clipboard. The Copy/Paste
function will save you an enormous amount of time when using similar **events** on the same or
different maps. Let’s say we have a 10-page **Event**, with changing dialogue on different pages
for Lady Marie. If we did ten pages by hand this is what it would look like:

1. Set Character Sprite, Movement, conditions, and anything else we needed.
2. Then we must create each [Event Commands](../events/eventcommands.md) and conditional branches all over again.
3. We have to do this ten times for our **Event**, with increasing probability of errors.

We will never finish anything if we did it all by hand. That is where our Copy-Paste friend
comes into play. We copy a page, then paste a new page. Our second, third, fourth, all the
way to tenth page are all the same now and took less than 60 seconds to do it. Now we can
just go through and change dialogue, conditions, and/or anything else we want on each
individual page. This a considerably less amount of work and less chance of messing
something up.

*Outside the Event, we can hold Ctrl + C and click the Event, then Ctrl+V and click a new
part of the map to copy-paste the entire Event from location to location or map to map.

**Delete Page**
Oops! We made too many pages! No problem, just click the page number and hit Delete Page
button. All done, but be careful to not delete the wrong page!

**Clear Page**
Oops! We really messed something up on this page. We want to keep the page’s location within
the **Event**, but we want everything cleared? This is the button for us; by clicking the Clear Page
button, all the data within the selected page is blanked out as if it were a new page!

### Entity Options

![firefox_hpXIm0bQhZ](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/5a5122ee-af25-4691-b0ac-fd169ec8e74e)

**Preview**
This is where we set the decoration of our box (The graphic the player sees on the map). Without
placing a graphic, the **Event** is invisible and the player is unable to see it. Essentially, we painted
our box with invisible paint. We want to set graphics that match what our box is: a person
graphic our “Person Box,” or a treasure chest graphic for our “Treasure Chest Box.” The choices
are numerous and is one of the best parts of designing your game.

**Animation**
Whenever the **Event** is interacted with, a chosen animation plays on our **Event**. This means we
can set our box to also become a music box. it could play a smiley face with a sound of a giggle.

### Entity Options: Movement

![firefox_7ko9NN2xtb](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/068a1b27-f091-49a4-b552-9ece64a4231c)

**Type**:
**None**
Our **Event** will not move, unless it is forced to move via Event Commands.
**Random**
The **Event** will move Randomly on the map. This is often used for a village NPC or
monster.
**Move Route**
This Movement Type is the one you will be using the most within mobile **Events**. We can
set it approach or flee from the player. We can set speed, jumps, and a wide variety of
other types of Movements. This is a bit trickier, but is more fun.
**Speed**
After we set a Movement Type, we need to set the Speed of the **Event**. When the **Event**
moves, how fast is it moving? Does it saunter, shamble, dash, or frolic?
**Frequency**
After we set a Movement Type, we need to set the Frequency of the **Event**. The **Event**
will follow the assigned movement type; however, the frequency affects how often the **Event** will move. So, slower speeds make the **Event** move rarely, while a higher speed
makes it move more often.
**Layer**
The chosen layer is crucial for our **Event**. Should we choose an incompatible layer with
what we want for our box, the graphics will look skewed to the player. Think of it as
being in front of the box, above the box or below the box. For most cases, we will be
using Same as Player, but let us take a closer look at the three choices:
- *Same as Player*: The Event is layered to cause no overlap with the player.
- *Below Player*: The player always looks like they are standing on the event.
- *Above Player*: The Event is always above the player (on their head).

Now what does this mean and how can we use it? Let us look at three different scenarios.

**In the first scenario**...
We are creating Lady Marie as a village NPC; her goal is to simply walk around
randomly and talk when a player activates her. In this instance, we will use Same as
Player layering. This means Lady Marie is on the same plane of existence as us and we
will bump into each other should we walk into each other.

**In the second scenario**...
We want to make a spike trap. By using the Below Player layer, the spikes appear to be
below the player with them standing on top of it. We are stepping on the trap, so it cannot
be bumping into us or over our head.

**In the third scenario**...
We are creating a bird that flies overhead; thus, we need to use the Above Player layer.
Now when the bird occupies the same space as us, it appears over our character because
it is flying. If we bumped into each other, it would mean we both are flying! Then if it was
below us, it would mean we were flying and they were crawling!

Looking at the different types of layering, we can see how important it is to apply the
correct layer or it will cause the game to look “buggy.” It also allows the developer to
experiment with the layers and do creative things with them.

### Entity Inspector Options

![firefox_Jr0gI1Ko9R](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/dd8c4212-bb2d-41a0-b853-7b7116d4214f)

**Face**
This is where we put a picture over the keyhole, also known as assigning the Event a face when
activated by the player. The player selecting this Event can see the face (picture of lock) when
activated. What this means is by selecting this Event (inspecting), the face will show up with its
description beside it (if applicable).
**Disable Inspector**
The Event cannot be inspected; thus, the face is never shown on this event.
**Inspector Description**
Selecting the Event (Inspecting), will make a window popup with this description in it.

### Extras

![firefox_vn5yMrcifb](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/4471c8f2-d8ad-47d7-a5cc-e048158f8ec9)

**Passable**
Ow! You just walked into your box and it hurt. Likewise, in your game the player cannot walk
through the box (**Event**). When enable the “Passable” button, we effectively make our Chest turn
into a ghost chest! Spooky! We can now walk through it without ever knowing it is there. This is
usually used in video games when making a closed door open.
**Hide Name**
Remember when we discussed the importance of naming Events? This box hides the Event
Name from being seen by anyone while in the game.
**Direction Fix**
When you activate or talk to an **Event**, the Event turns and faces the player from the direction
they were activated from. Checking this box makes the **Event** to always face the initial direction
we selected for it.
**Walking Animation**
Checking this box allows the sprite to play through its sprite sheet to create a walking animation.
This is necessary for a NPC walking around; however, we want this box checked if we have
several different sprites on the same sheet, as it will just change the graphic between them.
I.E: Having several treasure chests on 1 sheet.
**Interaction Freeze**
This freezes the **Event** in place when activated. Without having this box checked, the **Event** will
continue to move while it runs. This box is necessary if you want NPCs to stand in place to talk
to us, else they just wander away while chat boxes still appear.

### Triggers

![firefox_7IO1JHmLEs](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/1ac8086b-1b80-4c90-b8b2-8a8bbce7ec7f)

There are three ways for the **Event** to be activated.
**Action Button**
The player must use their action button on the **Event** to activate it. This is a familiar concept,
“push the button to talk to the NPC.”
**Player Touch**
When the player touches the **Event**, the **Event** activates.
**Auto-run**
This **Event** activates automatically when the player loads on the map. (EDITOR NOTE: Autorun events are constantly running and should only be used if there's no other way to achieve what you need).

### Conditions

![firefox_LvvHeciMW9](https://github.com/PyroTech03/Intersect-Documentation/assets/13249558/f96aa54c-1e1a-463a-8929-296e55f3d494)

**Spawn/Execution Conditions**
Okay... We are going to have to come back to this. This is some advanced stuff we will be
discussing here, and we have not gone through everything yet to tackle this topic. We will go
into [Event Commands](../events/eventcommands.md) first, then tackle Switches, Variables, Conditional Branches, and
[Conditions](../design/conditions.md) after we gone through all the [Event Commands](../events/eventcommands.md)

## Event Commands
[Event Commands](../events/eventcommands.md) can be simple or complex as the developer needs them to be. Before we can
discuss **Complex** [Event Commands](../events/eventcommands.md), we need to understand the **Simple** [Event Commands](../events/eventcommands.md) and
how they work. So, following our box and clay analogy, let us look at the [Event Commands](../events/eventcommands.md).

[Event Commands](../events/eventcommands.md) are the blocks of clay that we are taking from our boxes and molding into
different objects. Essentially, each clay object we make is an [Event Commands](../events/eventcommands.md) that is placed in
our box. When we activate the **Event** by a Trigger, what we are doing is picking up each clay
object in our box one at a time. This is always done by picking up the first one, then we play
with it based on what it is, then we place it behind the very last clay object. We repeat this
process until we have gone through all the clay objects.

What this means in game terms: each [Event Command](../events/eventcommands.md) is ran in descending order from the first
Event Command until the last when the Event is triggered.

At its basest of levels, an **Event** operates in the following way: The **Event** is Activated, the **Event**
runs every [Event Command](../events/eventcommands.md), and finally the **Event** Ends. Before we can get into Complex Event
Commands, we need to go through each Event Command. Afterwards we are going to go into
Complex Events, Conditional Branches, Switches, and Variables. Do not worry, we will get
through this.

EDITOR: The original guide has a breakdown of all the [Event Commands](../events/eventcommands.md) and how they are used.  As they are already linked, I will not be duplicating that here. However you can see the original pdf [here](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/4032b79f3abdaaee4aad4bffb0304de5.pdf) on pages 20-40. 

## Advanced Event System Tutorial
