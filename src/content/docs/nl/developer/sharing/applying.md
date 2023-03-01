---
title: Applying Patches
---

GitHub patches are very easy to apply, and they allow you to check compatibility before doing so.

Please note, applying git patches modifies your engines source code. Patches can impact performance and introduce bugs into your game. Only install patches from trusted developers!

Download your patch and move it to the root of your Intersect repository. Then open a command prompt window and navigate to your local Intersect repo. This can be done easily by clicking Repository -> Open In Command Prompt within GitHub Desktop.

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

In order to check for compatibility enter the following command replacing the patch filename with the one you downloaded. If there are compatibility issues the patch author may need to remake the patch using your version of Intersect, or you maybe applying multiple patches that conflict and are not compatible with each other.

```
git apply --check patchName.patch
```

![check](https://www.ascensiongamedev.com/resources/filehost/e3e6c8d588a49bd1ef2ebd69c67f115f.png)

If no errors appear the patch is compatible, go ahead and run the following command to apply the patch. You might see some warnings, but as long as there are no errors you are good to go!

```
git am --signoff < patchName.patch
```

![apply](https://www.ascensiongamedev.com/resources/filehost/7fb32c944b7147a3397c8a39e634af1f.png)

If you need to remove a patch use the git apply -R command as shown below

```
git apply -R patchName.patch
```

![reverting](https://www.ascensiongamedev.com/resources/filehost/cbd407c31ce1c87beaaea3277e32a788.png)
