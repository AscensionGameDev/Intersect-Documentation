# Compiling
The first step before making changes to the source code is getting it to compile. Intersect relies on dozens of external libraries and tools (ie MonoGame, Newtonsoft Json.Net, etc) and our project is designed to fetch those dependencies automatically from Nuget.

In order to get started open the Intersect.sln file in the Intersect-Engine folder. The solution should open in Visual Studio 2019.

![solution](https://www.ascensiongamedev.com/resources/filehost/bb694eabb570f22d541f87d1db2fc68f.png)

In most cases all you should have to do is hit Build -> Build Solution at the top of your Visual Studio window and it will fetch all the dependencies for you automatically.

![building](https://www.ascensiongamedev.com/resources/filehost/c1c27a3366987a9279610e40667eecf0.png)

Your first build will probably fail with errors seen below. This is due to the project downloading the dependencies during a build that a successful build depends on.

![errors](https://www.ascensiongamedev.com/resources/filehost/3ddd530d599409f7a8a69a510fa3ab70.png)

If you experience the errors above just click Build > Clean Solution and then Build -> Build Solution again. If that doesn't work try restarting visual studio.

![clean](https://www.ascensiongamedev.com/resources/filehost/068c7b0d67e8fa94d998f8b2151f98a1.png)

Visual Studio will notify you of a successful build in the bottom left corner of your ide.

![success](https://www.ascensiongamedev.com/resources/filehost/cfbb467b54914238dcadcde9383f342f.png)

The compiled version of Intersect can be found in your Intersect-Engine/build directory. There will be a lot of xml files along side the executables but you should only really care about the .exe and .pdb files for the Client, Editor, and Server for now.

![output](https://www.ascensiongamedev.com/resources/filehost/5c0070679608ae4d663de3bc34c4527b.png)


** Please note, if you want to run your client or editor using the debugger you will need to download and place the appropriate assets in the /build/debug/client and /build/debug/editor directories. **
