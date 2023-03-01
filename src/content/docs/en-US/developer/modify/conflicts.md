---
title: Dealing with Conflicts
---

A merge conflict occurs when you try to merge branches where the same lines or sections of code have been modified. Unfortunately in these instances Git requires a little help to sort things out.

Whether you're working with pull requests or trying to merge branches locally you're eventually going to have to deal with a merge conflict.

In the event of a merge conflict Git will alert you of the files needing attention. Within each file you will find conflict blocks.

![conflictalert](https://www.ascensiongamedev.com/resources/filehost/46efc74d34c68ffe9a424b898f365cb8.png)

Here is a conflict I dealt with recently.

The original code looked like the following:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
);
```

We were working on refactoring our code in two different branches at the same time. In one branch we were replacing usages of client with player. In another branch we were refactoring colors.

Upon merging the second branch I was left to solve the following conflict:

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
<<<<<<< HEAD
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.NoTarget
=======
    client, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
>>>>>>> updating-colors
);
```

The ======= separates the code from both branches. In the top half we changed client to player. In the bottom half we changed CustomColors.NoTarget to CustomColors.Combat.NoTarget.

In some instances you will decide to keep the code above the divider in others you will keep the code below the divider. In this case we want to keep code from both so I manually updated the file to end up with the resulting code.

```cs
//Player Out of Range Or Offline
PacketSender.SendChatMsg(
    player, Strings.Trading.outofrange.ToString(),
    CustomColors.Combat.NoTarget
);
```

After resolving the conflcit, removing the conflict markers, and saving the file GitHub allowed the merge to proceed as planned.

![mergeable](https://www.ascensiongamedev.com/resources/filehost/98036a1ec4daea465a9526987444d8c7.png)

In your programming endeavors you will eventually come across merge conflicts. Although annoying they are generally easy to work out. Hopefully this example and explaination helps in dealing with that process.
