---
title: Compiling
---

The first step before making changes to the source code is getting it to compile. Intersect relies on dozens of external libraries and tools and our project is designed to fetch those dependencies automatically from Nuget **or** in the case of several libraries like LiteNetLib, these are "linked" in the repository via git submodules.

## Getting started

Note: If you download the repository as a `.zip` file (or a tarball) instead of using Git, you are going to have to manually download our fork of our git submodule dependencies and copy them to the correct directories. **We do not provide support for downloading as a `.zip` file, we only support using Git.**

Before compiling, ensure that you have properly cloned the repository. You should see all of the below files in the `vendor/LiteNetLib` directory. If you do not have `vendor/LiteNetLib` or it is a file instead of a directory, or if it an empty folder, please ensure that you cloned via git and followed the [Getting started](https://github.com/AscensionGameDev/Intersect-Engine/blob/main/README.md#getting-started) section of the main repository's README.md.

![LiteNetLib submodule expanded](https://github.com/AscensionGameDev/Intersect-Documentation/assets/1476550/4e571401-1935-4ab7-a94a-4803bb950fed)

## Opening the project

In order to get started open the Intersect.sln file in the Intersect-Engine folder. The solution should open in your preferred .NET development environment (e.g. Rider, Visual Studio 2022 or later, VS Code, VSCodium). If you use the Windows-only Visual Studio 20XX, do not use prior to VS2022 as it will likely not work (and if you manage to get it to work we can't effectively provide support for it).

![solution](https://www.ascensiongamedev.com/resources/filehost/bb694eabb570f22d541f87d1db2fc68f.png)

## Compiling the project

In most cases all you should have to do is hit Build -> Build Solution at the top of your Visual Studio window and it will fetch all the dependencies for you automatically.

![building](https://www.ascensiongamedev.com/resources/filehost/c1c27a3366987a9279610e40667eecf0.png)

If your build fails, please verify that you have downloaded all of the prerequisites and if a second build attempt doesn't resolve the errors, please manually run `dotnet restore` in the repository root in a terminal/command line. If you are on Linux or MacOS and did not run the setup script and you are seeing editor compilation issues, you need to disable the Windows-only editor project (Intersect.Editor).

If you see the below `Unable to find project LiteNetLib.csproj` errors, **you did not successfully follow the instructions**, please try again before asking for support.

![LiteNetLib.csproj not found](https://github.com/AscensionGameDev/Intersect-Documentation/assets/1476550/c495be85-2d75-4d76-8edf-01b4d1b73b53)


Your first build will probably fail with errors seen below. This is due to the project downloading the dependencies during a build that a successful build depends on.

The compiled version of Intersect can be found in the `bin` directories of each project. There will be a lot of xml files along side the executables but you should only really care about the .exe and .pdb files for the Client, Editor, and Server for now.

**Please note, if you want to run your client or editor using the debugger you will need to [download and place the appropriate assets](https://github.com/AscensionGameDev/Intersect-Assets) in the /assets/development/client and /assets/development/server directories.**
