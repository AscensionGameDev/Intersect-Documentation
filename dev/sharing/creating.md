# Creating Patches

A Git patch is a text file that contains one or more Git commits. Using Github you can very easily export your work into patches in order to distrbute outside of typical merging and pull requests. Using patches is the defacto method for sharing source edits on Ascension Game Dev.

The best practice is to branch off master or development, make your changes, commit, and then create the patch based off your branch.

Open command prompt in your local repository directory. This can be done easily by clicking Repository -> Open In Command Prompt within Github Desktop.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

Next type in the following command. Make sure you are still on the branch where you made your modifications. In the command replace master if you originally branched off of development.

```
git format-patch master --stdout > patchName.patch
```

![createpatch](https://www.ascensiongamedev.com/resources/filehost/ad6434b2e74bb658b8565b6dd227d961.png)

The patch file you've created can be found in the directory of your local repository.

You can upload your patch to [Diffy](https://diffy.org) in order to view it's contents.