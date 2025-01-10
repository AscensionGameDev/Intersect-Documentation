---
title: File Structure
---

The top-level file structure of the repository is as follows for the current version:

|             File/Directory | Description                                                                                                                                       |
| -------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|              Documentation | Licensing for each individual project and shortcuts to these docs.                                                                                |
|           Intersect (Core) | Shared assembly between the Client, Editor, and Server. Contains class definitions for game objects, configurations, and more.                    |
| Intersect.Client.Framework | Abstracted client code for audio playback, file management, graphic output and more. This also contains our heavily modified Gwen UI library.     |
|           Intersect.Client | The actual Intersect Client code. MonoGame inherits the Client Framework to power the engine using MonoGame DesktopGl for cross platform support. |
|           Intersect.Editor | Intersect Game Editor which is also powered by MonoGame DirectX. DirectX is required due our use of SwapChainRenderTargets.                       |
|           Intersect.Server | Intersect Server which runs as a console application. This authoritative server controls every action taken within Intersect games.               |
|           Intersect.Shared | Shared helper functions and information for all the projects above.                                                                               |
|         Intersect.Tests.\* | Unit testing for all of the projects listed above.                                                                                                |
|                 AUTHORS.md | List of Intersect Authors and Contributors.                                                                                                       |
|         CODE_OF_CONDUCT.md | Documentation of the Intersect repository code of conduct guidelines.                                                                             |
|            CONTRIBUTING.md | Documentation for contributing to the Intersect codebase.                                                                                         |
|              Intersect.sln | Visual Studio Solution file that loads all of the aforementioned projects in Visual Studio.                                                       |
|                  README.md | Readme file for GitHub that describes the Intersect engine, libraries we use, and more.                                                           |
