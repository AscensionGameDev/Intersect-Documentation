---
title: Commands
---

You can use the following variables in event commands that display text (Show Text / Show Options / Add Chatbox Text):

| Event Command Variable        | Description                                                                                                       |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `\pn`                         | Shows the player's name that triggered the event                                                                  |
| `\en`                         | Shows the name of the event that is activated                                                                     |
| `\onlinecount`                | Shows the number of players that are online                                                                       |
| `\onlinelist`                 | Lists all the players that are online                                                                             |
| `\param`                      | Takes the string after a /command. Example: /welcome juanito, will return "juanito" in the text display.          |
| `\hour`                       | Displays the hour component of the game's time (12 hour format)                                                   |
| `\24hour`                     | Displays the hour component of the game's time (24 hour format)                                                   |
| `\minute`                     | Displays the minute component of the game's time                                                                  |
| `\second`                     | Displays the second component of the game's time                                                                  |
| `\period`                     | Displays whether or not it is morning/night in game (AM or PM)                                                    |
| `\pv{#}`                      | Displays the value of a player variable (replace # with the variable id set in the switch & variable editor)      |
| `\ps{#}`                      | Displays the value of a player switch (replace # with the switch id set in the switch & variable editor)          |
| `\gs{#}`                      | Displays the value of a global switch (replace # with the switch id set in the switch & variable editor)          |
| `\gv{#}`                      | Displays the value of a global variable (replace # with the variable id set in the switch & variable editor)      |
| `\evtParams`                  | Lists all available parameters for an event                                                                       |
| `\evtparam{#}`                | Displays the value of an event parameter (replace # with the parameter id set in the event editor)                |
| `\uservar{#}`                 | Displays the value of a user variable (replace # with the variable id set in the user variable editor)            |
| `\pg`                         | Shows the guild name of the player that triggered the event                                                       |
| `\guildvar{#}`                | Displays the value of a guild variable (replace # with the variable id set in the guild switch & variable editor) |

Note: Some variables may require additional setup in the switch & variable editor before they can be used.
