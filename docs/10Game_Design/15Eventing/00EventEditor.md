---
title: Event Editor
---

&nbsp;

Overview
---------------------------
![Event Editor](http://www.ascensiongamedev.com/resources/filehost/d8404372e86af7365b125a1d1a746ee8.png)

Our event editor will allow you to create new map events or to modify an existing one with a high level of customization. This page will show you how to create a map event and will give name to each of the panels/areas and provide an overview for what they're for.

&nbsp;

How to create a map event
---------------------------

Select the events tab on the map layers pannel:

![Map Layers event tab](http://www.ascensiongamedev.com/resources/filehost/b8de6b7719751fd610b4a73f0e663007.png)
&nbsp;

After that, you'll need to ubicate the event on the map editor by double clicking on the map tile of your choice.
&nbsp;

![Map Editor event position](http://www.ascensiongamedev.com/resources/filehost/218e83901078b8374b8d3b56cdb1a90a.png)
&nbsp;

Finally, the event editor window will open and you will be able to define its behaviour.

&nbsp;

General
---------------------------

On the general panel you can name your event and define if it is a global event or not(maybe adding a link to the global event explanation video here?).
&nbsp;

![Event Editor general panel](http://www.ascensiongamedev.com/resources/filehost/4e9769492de05e107ed9149f299fd930.png)
&nbsp;

Event Page
---------------------------

The event page is the main pannel of the event editor and it consists on some event edition sub panels.

![Event Editor event page](http://www.ascensiongamedev.com/resources/filehost/ed3ef465fdbe7cfa55ea8ec5bea79a3b.png)

On the upper-left corner you can see the event page tab menu. There you can select the event page you want to work with.
&nbsp;

#### Conditions:

In the conditions sub panel you can define the **Spawn/Execution Conditions** of that event page. This means here you can define when should a specific event page spawn.

![Event Editor conditions sub panel](http://www.ascensiongamedev.com/resources/filehost/fa7cd10780df1855dc3d4135548e2461.png)
&nbsp;

If you click on the **Spawn/Execution Conditions** the **Conditions list** window will appear.
&nbsp;

![Event Editor conditions list](http://www.ascensiongamedev.com/resources/filehost/e1386e4716f1cd9b35eccfd2a0fe8fb5.png)

Here you can manage the event spawn condition lists. If any of the condition lists is met the correspondent page event will spawn.
>- For creating a new list click on the **Add List** button.
>- For removing an existing list select the list of your choice and then click on the **Remove List** button.
>- For editing an existing list double click the list of your choice.

After you finish editing the condition lists click the **Save** button to save the changes or the **Cancel** button to discard them.

&nbsp;
If you click on the **Add List** button, a new condition list window will appear:
&nbsp;

![Event Editor condition list](http://www.ascensiongamedev.com/resources/filehost/f6c5e22014752c9eccbb8f9e7d33961d.png)

&nbsp;

Here you can define the conditions which must be met to the current event page spawn. All the conditions of the list must met to spawn the event page. You can name the list by editing the name textbox.

>- For adding a new condition click the **Add Condition** button.
>- For deleting an existing condition select the condition of your choice and then click the **Remove Condition** button.
>- For editing an existing condition double click the condition of your choice.

When you finish adding conditions to the list you can click the **Okay** button to submit the changes or the **Cancel** button to discard them.

&nbsp;

If you click the **Add Condition** button a new window will appear:

&nbsp;

![Event Editor add condition to the condition list](http://www.ascensiongamedev.com/resources/filehost/531d1bb56f21734fdbcf9b99a1984db1.png)

&nbsp;

On the condition type drop menu you can select one of the multiple possible conditions. Depending on the condition you select some options may appear below. After defining the condition you can click the **Ok** button to add that condition to the list or the **Cancel** button to discard it.

&nbsp;

####Entity Options

&nbsp;

Below the Conditions sub panel you will find the Entity Options sub panel.

![Event Editor entity options](http://www.ascensiongamedev.com/resources/filehost/4315697fcee035470257b88df7d2cab2.png)

&nbsp;

On the left, you can see the preview options. Here you can define how that event page will look and if there will be an animation display over the event.

If you double click the preview sqare you will open a new window:

![Event Editos preview window](http://www.ascensiongamedev.com/resources/filehost/127d3739e7eb2b0114851462fd19b83b.png)

You can choose between sprite or tile graphics. After that, you can choose one of the sprites/tiles graphics and select the sprite/tile of your choice by simply clicking it. Finally, click the **Ok** button to save or the **Cancel** button to discard the changes. Now the preview **Entity Options** sub panel should look like this:

![Event Editors preview window with sprite](http://www.ascensiongamedev.com/resources/filehost/2425e8d107f08e85dfcf91b273ab75fe.png)

On the right, you can see the movement options. You can define here if the event should move or not and how.
>- Select the **None** type for not event movement.
>- Select the **Random** type for random event movement.
>- Select the **Move Route** type for a defined movement route. If you select this, the **Set Route...** button will allow you opening the movement route window shown below.

![Event Editor movement route](http://www.ascensiongamedev.com/resources/filehost/fa6545bc82ddfac96fe6b32798362e89.png)

In order to add any kind of movement to the **Move Route** just double click it. If you want to delete any of the added moves, click it on the list and then pres de supr key.

>- Select the **Ignore if Blocked** checkbox if you want to prevent the event being stuck if it finds an obstacle.
>- Select the **Repeat Route** if you want the event to constantly repeat the **Move Route** each time it finish it.

After setting the route, click the **Ok** button to submit it or the **Cancel** button to cancel the changes.

&nbsp;

Going back to the movement options, you can also set the movement speed and frequency. Finally, you must set the event layer.

>- **Below Player**: The event will be on a lower layer than the player.
>- **Same as Player**: The event will be on the same layer than the player.
>- **Above Player**: The event will be on an upper layer than the player.

&nbsp;

#### Entity Inspector Options

&nbsp;

Below the Entity Options sub panel you will find the Entity Inspector Options panel.

![Event Editor entity inspector options](http://www.ascensiongamedev.com/resources/filehost/ba7ccd4d5676842780e7074def7aa8bc.png)

The event inspector is disabled by default. You can enable it by unchecking the **Disable Inspector** checkbox. After that, you will be able to choose an event face and writting an event description. This should look like this:

![Event Editor entity inspector options enabled](http://www.ascensiongamedev.com/resources/filehost/384a553cc39c6b9fe48413942beeb721.png)

If the player targets this event, he should watch this on his inspector window:

![Event Inspection](http://www.ascensiongamedev.com/resources/filehost/0c9458183a4d8ac0da097fe75cce8e09.png)

&nbsp;

#### Extras

&nbsp;

You will find the **Extras** sub panel below the Entity Inspector Options panel.

![Event Editor extras](http://www.ascensiongamedev.com/resources/filehost/0fa628e2a300a5ed159553aa7eb44cfb.png)

>- Check the **Passable** checkbox if you want players to pass through the event.
>- Check the **Hide Name** checkbox if you don't want a visible event name.
>- Check the **Dir Fix** checkbox if you don't want the event to rotate while moving or interacting with players.
>- Check the **Walking Anim** checkbox if you want the event showing a walking animation when moving(checked by default).
>- ###(I don't actually know what does Interaction Freeze do)###

&nbsp;

#### Trigger

&nbsp;

Finally you will find the Trigger sub panel. Here you can set how the event should run.

![Event Editor trigger](http://www.ascensiongamedev.com/resources/filehost/7967b55de78cdd6f523fc6318acedff4.png)

>- Select **Action Button** if you want the event running when the player interacts with it by pressing the action button (E key for default).
>- Select **Player Touch** if you want the event running when the player touches the event.
>- Select **Autorun** if you want the event to automatically run.

&nbsp;

Commands
---------------------------

On the commands panel you can set the behaviour of the event.

![Event Editor commands](http://www.ascensiongamedev.com/resources/filehost/4650f60c683d06e69965c3d9c921f8e8.png)

If you want to add a command you only have to double click where you want the new command to be added. When you do this, a new window will appear:

![Event Editor command selection](http://www.ascensiongamedev.com/resources/filehost/12fb64a786c03d927158f307a643f221.png)

Here you can select which command you want to be added by double clicking it. Depending on the command a new window may appear. After choosing the command, the Commands panel should look like this:

![Event Editor commands 2](http://www.ascensiongamedev.com/resources/filehost/624c504ae03e4f6b4f2dae4e69ffb4c5.png)

If you want to delete a command you only need to click it and press the supr key.



Page options
---------------------------

On the page options panel you can add a new event page, delete a existing one, copying and pasting a page and clearing a page by simply clicking on the button of your choice.
&nbsp;

![Event Editor page options](http://www.ascensiongamedev.com/resources/filehost/26b18b6348cd96c131cdc3ea4616bf90.png)
&nbsp;

##### Manage event pages:
>- For creating a new event page you only need to click the **new page** button and a new page will be generated. The event pages are enumerated and the new event page will be the last page of the list.
>- For duplicate an existing event page you only have to select that page on the event page tab list and click on the **Copy Page** button. After that, select the page where you want to paste the event you copied before and simply click the **Paste Page** button.
>- For deleting an existing event page simply select the page you want to delete and then click on the **Delete Page** button.
>- For clearing an event page click the **Clear Page** button.