---
title: Distribution
---

Once you have a game in the works the you're going to want to share with friends. This will give you an overview of how to prepare your game for distribution and tell you which files you should send to your players.

## Preparing

Before sending your game to someone you need to fill in your host ip address or domain and port in the `Client and Editor/Resources/Config.json` file.

The host and port can generally be found on your server console.

![ConnectionInfo](https://www.ascensiongamedev.com/resources/filehost/70a5bade6f21a447be2fc5cd67f595e2.png)

Enter the host and port in your clients configuration like so:

![Config](https://www.ascensiongamedev.com/resources/filehost/92bf25d1b796322e3b44538ae614b33f.png)

If players are unable to connect to your server please [read this topic regarding firewalls and port fowarding](https://www.ascensiongamedev.com/topic/3432-read-first-getting-your-game-online/), it contains extra information on how to get help if necessary.

## Standalone

If you are wanting to distrbute your game without any sort of updating capabilities you need to send all of the resources up front. Create a zip archive or installer with the following files:

- Intersect Client.exe
- Intersect Client.pdb
- Resources/_._

**Note:** Resources/mapcache.db is for editors, and can grow to be fairly big in size. It's safe to delete, and you should remove this file instead of sending it to your players.

## Auto Updater

If you want to distrbute your game using Intersect's embedded updater then the files you can include far fewer files in your installer/zip archive. Click here for instructions on how to [setup and configure your updater](autoupdater.md).

The files you will want to include are below:

- Intersect Client.exe
- Intersect Client.pdb
- Resources/Config.json
- Resources/Client_Strings.json
- Resources/Updater/_._

## Important Notes

If you're distributing your game with an installer, set the default installation target to the `C:\Users\<Username>\AppData\Local\<GameName>` directory instead of the Program Files or Program Files (x86) folders so that your users won't need admin rights to run or update your game!
