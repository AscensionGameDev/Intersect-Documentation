---
title: Time (Day And Night)
---

*This is the Time Editor Interface.*
![Time Editor Interface](http://www.ascensiongamedev.com/resources/filehost/d862f37d5dded19571ea7fa25b08df52.png)
We have in our *Left*: **Time of Day** that divide the day in intervals.
The day can be divided into intervals of: 24, 12, 8, 6, 4, 3, 2 or 1 hour.
And also in 45, 30, 15 or 10 minute intervals.
And in our *Right* the settings of those hours.

## **Time Settings**
### **Intervals**
Here you select in how many time intervals you will divide 1 day in the game. This division will be used by events to make such a thing happen only in a given time interval.

### **Sync With Server Checkbox**
This checkbox will cause game time to be synchronized with real life, and the game time will be the same as the computer time that serves as the host for the server.

### **Time [] x Normal** - *Time Multiplier*
If you have decided that game time will be faster than real-time then just add a value to this box.
As it says below:
1: Time will walk normal
(Every 1 second).
Above 1: The value added will make the time run every second.
(Value 5, every 5 seconds. Value 10, every 10 seconds, and so on.)
Negative values: the time flow in backwards

### **Range Overlay**
![Range Overlay Interface](http://www.ascensiongamedev.com/resources/filehost/52a0a3545a49db5c96de39ec4226c7b9.png)
(Appears when you select one of the intervals)
This overlay is used to simulate the day and night of the game in the view of the players.

In the main interface of the editor there is how you know how the player will see the screen depending on the color you chose in range overlay. (This Lightning)
![Range Overlay Simulator](http://www.ascensiongamedev.com/resources/filehost/0d96555e68e02121bcad3ac65f0dd7a1.png)
The white square represents the color that the player's screen will be overlapping the maps simulating the day.
To edit these colors, just click on the white square twice and the color palette will appear. The brightness percentage will set the transparency of the overlay on the screen.

On the next page we'll see how all this works together.