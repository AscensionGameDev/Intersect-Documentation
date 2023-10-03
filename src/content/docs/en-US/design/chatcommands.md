---
title: Chat Commands
---
Chat Commands are shorthand ways to display various bits of dynamic info and variables.  These can be used in many text locations in the various editors.

## Common Commands
These commands work with little to no work from you.
| Name               | Description                                                         | Example Use                            | Example Output
| ------------------ | ------------------------------------------------------------------- | -------------------------------------- | ------------------------------------
| \pn                | Shows the players name that triggered event.                        | Hello \pn!                             | Hello Player!
| \en                | Whows the name of the event that is activated.                      | I'm \en...                             | I'm Lord NPC...
| \onlinecount       | Shows the number of players that are online.                        | There are \onlinecount players online! | There are 52 players online! 
| \onlinelist        | Lists all the players that are currently online.                    | Users online: \onlinelist...           | Users online: JC, Panda, Richy, PyroTech03
| \param             | Takes the string after a /command                                   | /welcome kibbelz                       | kibbelz
| \hour              | Displays the hour component of the in-game time (12 hour format).   | **\hour**:\minute:\second \period      | **3**:34:10 pm
| \24hour            | Displays the hour component of the in-game time (24 hour format).   | **\24hour**:\minute:\second \period      | **15**:34:10
| \minute            | Displays the minute component of the in-game time.                  | \hour:**\minute**:\second \period      | 3:**34**:10 pm
| \second            | Displays the second component of the in-game time.                  | \hour:\minute:**\second** \period      | 3:34:**10** pm
| \period            | Displays the period component of the in-game time.                  | \hour:\minute:\second **\period**      | 3:34:10 **pm**

---

## Variable Commands
The following use variables that must be set in the Variable Editor. This allows you to call and display these variables in different ways.

Note: Replace "#" with the variable ID set in the Variable Editor. Examles given below would require you to setup the variable to make them work.

| Name                     | Description                                          | Example Use                                               | Example Output
| ------------------------ | ---------------------------------------------------- | --------------------------------------------------------- | ------------------------------------
| \pv{#}                   | Displays the value of a Player Variable.             | My guild name is \pv{guildname}!                          | My guild name is Fluffy Bunnies! 
| \gv{#}                   | Displays the value of a Global Variable.             | Total number of characters are \gv{charactercount}!       | Total number of characters are 864!
| \uservar{#}              | Displays the value of a User Variable.               | Account VIP Status: \uservar{VIP}.                        | Account VIP Status: Active. 
| \guildvar{#}             | Displays the value of a Guild Variable.              | Current guild rank: \guildvar{rank}.                      | Current guild rank: 8.

---

## Event Parameters
These are situation fields related to events.

- *\evtParams*: Lists all avaliable parameters for an event.
- *\evtparam{#}*: displays value of an event parameter. Replace the "#" with the below paramaters.

The following is a list of the possible event paramaters and their usage.
| Name                     | Description                                                                                               | Example Output
| ------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------
| evtName                  | Displays the name of the Event.                                                                           | trap
| evtMap                   | Displays the map of the event.                                                                            | Tutorial Island
| evtX                     | Displays the 'X' coordinate of the event.                                                                 | 12
| evtY                     | Displays the 'Y' coordinate of the event.                                                                 | 7
| plyrName                 | Displays the Player Name.                                                                                 | jcsnider3
| plyrMap                  | Displays the Player's Map.                                                                                | Tutorial Island
| plyrX                    | Displays the 'X' coordinate of the player.                                                                | 12
| plyrY                    | Displays the 'Y' coordinate of the player.                                                                | 7
| plyrZ                    | Displays the 'Z' coordinate of the player.                                                                | 0
| plyrSprite               | Displays the players current sprite.                                                                      | base.png
| plyrFace                 | Displays the players current face.                                                                        | base.png
| plyrLvl                  | Displays the players level.                                                                               | 15
| plyrVit0                 | Displays the players current vital 0 (default HP).                                                        | 455
| plyrMaxVit0              | Displays the players max vital 0 (default HP).                                                            | 455
| plyrVit1                 | Displays the players current vital 1 (default MP).                                                        | 100
| plyrMaxVit1              | Displays the players max vital 1 (default MP).                                                            | 100
| plyrStat0                | Displays the players current Stat 0 value (default Attack).                                               | 20
| plyrStat1                | Displays the players current Stat 1 value (default Magic Power).                                          | 20
| plyrStat2                | Displays the players current Stat 2 value (default Defense).                                              | 20
| plyrStat3                | Displays the players current Stat 3 value (default Magic Resist).                                         | 20
| plyrStat4                | Displays the players current Stat 4 value (default Speed).                                                | 20
| killer                   | Displays the player that killed someone in PvP (must be used in PvP Death trigger).                       | jcsnider3
| victim                   | Displays the player that was killed in PvP (must be used in PvP Kill trigger).                            | Richy
