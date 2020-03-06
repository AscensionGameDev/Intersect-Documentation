# Creating Patches

A Git patch is a text file that contains one or more Git commits. Using Github you can very easily export your work into patches in order to distrbute outside of typical merging and pull requests. Using patches is the defacto method for sharing source edits on Ascension Game Dev.

Locate the first and last commit ids for the range of commits you want to include in your patch. Commit ids can be found by browsing the history within Github Desktop

![commitids](https://www.ascensiongamedev.com/resources/filehost/075f8cc8d535186c50d3c963480c2910.png)

Open command prompt in your local repository directory. This can be done easily by clicking Repository -> Open In Command Prompt within Github Desktop.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

Next type in the following command. If you only have one commit you can omit the second commit id.

```
git diff commitId1 commitId2 > patchName.patch
```

![createpatch](https://www.ascensiongamedev.com/resources/filehost/fd93626751b26a56d1be787c69b4853c.png)

The patch file you've created can be found in the directory of your local repository.

You can upload your patch to [Diffy](https://diffy.org) in order to view it's contents.