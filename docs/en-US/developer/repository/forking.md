# Forking
#### A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.

Most commonly, forks are used to either propose changes to someone else's project to which you do not have write access, or to use someone else's project as a starting point for your own idea. You can fork a repository to create a copy of the repository and make changes without affecting the upstream repository.

## Propose changes to our official repository

_For example_, you can use forks to propose changes related to fixing a bug. Rather than just reporting an issue for a bug you have found, you may also:

![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/d7f0cafd118bcffebb9716b74c5c16d3.png)

* Fork the official Intersect Engine repository.
* Make the fix.
* Submit a pull request to the official Intersect Engine repository.



## Forking our official repository

You might fork a project to propose changes to the upstream, or original, repository. In this case, it's good practice to regularly sync your fork with the upstream repository.


1. On GitHub.com, navigate to the [AscensionGameDev/Intersect-Engine](https://github.com/AscensionGameDev/Intersect-Engine) repository.


3. In the top-right corner of the page, click **Fork**.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/680070ea8ea1cc078d13271227e078c9.png)


3. Select an owner for the forked repository.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/4521b82af1c14fe325839e450294be23.png)


4. By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/acb38e896a45b54b16e1a0dfa596d585.png)


5. Optionally, add a description of your fork.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/73f66cba456ed797c3bef98bc5d5bbdd.png)


6. Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. By default, only the default branch is copied.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/499f34fc98661c79f34f9facce24c7ba.png)


7. Click Create fork.

   ![](https://s3.us-east-2.amazonaws.com/ascensiongamedev/filehost/b8ac87ff48db5b6b34e23f86abfbce8b.png)


**Note:** _If you want to copy additional branches from the parent repository, you can do so from the Branches page._

## Forking with GitHub CLI

To create a fork of a repository, use the ``gh repo fork`` subcommand.
```
gh repo fork repository
```

To learn more about GitHub CLI, see ["About GitHub CLI" (Github Docs)](https://docs.github.com/en/github-cli/github-cli/about-github-cli)