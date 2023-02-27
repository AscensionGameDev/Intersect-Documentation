---
title: Branches
---


The repository has multiple branches in order to separate multiple versions, and allow fixing bugs in both the older releases and the current release, rather than only putting bug fixes in the new release and telling people to "wait" until it reaches its release date.

Currently, Intersect has 3 separate branches for different versions.

|        Name | Current Version | Notes                                                                         |
|------------:|-----------------|-------------------------------------------------------------------------------|
|      master | 0.6.1           | Receives only critical bug fixes, intended to not change often.               |
|  prerelease | 0.6.2           | Receives all bug fixes with relatively minor solutions, as well as features with minor impact to the code. <br/><br/> **Only critical database schema changes are made in this branch.** |
| development | 0.7.0           | Volatile. Can have major changes to both the codebase and database structure. |

When new versions are released, the **prerelease** branch replaces the **master** branch.

Milestone releases (Beta 6, Beta 7, Beta 8, 1.0) will remain in **development** until they are ready for the general public to begin user testing them.

When milestone releases reach **prerelease**, **development** will become the next milestone release. **prerelease** is essentially an active "release candidate" branch.

When milestone releases reach **master**, **prerelease** will be the next patch version, and **development** will be the next milestone release.

For betas, milestone release versions will follow this pattern: `0.<beta number>.<patch number>`.
For releases post-1.0, milestone version numbers will fit this pattern: `<major>.<minor>.<patch/hotfix>`.

You can create and switch branches using the GitHub desktop app by clicking the branch dropdown:

![GitHub desktop app branch dropdown](https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png)

When branching off you should always fetch the latest changes for that branch. When fixing a bug, you create a new branch based on the lowest version number branch that is affected by the bug.

One benefit to the commit and branching system is that we can merge changes into master, and then merge master's changes into prerelease, and then prerelease into development. That way we are not independently fixing the bug on each branch from scratch, and instead we only have to resolve conflicts due to changes between the versions if there are any.

Branches to fix bugs are usually named with the following convention:

`fix-<issue number>-<bug name>`

Branches to implement new features are usually named with the following convention:

`feature-<issue number>-<feature name>`
