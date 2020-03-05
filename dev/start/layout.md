# Repo Layout

## Branches
Branching allows you to create independent lines of development. Intersect has two main branches of code. Master contains our most recent stable build, and Development contains the latest features that are still being developed and debugged. You can switch branches or create new branches in the Github Desktop app by clicking the branches dropdown box.

![branching](https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png)

It is considered best practice to always branch off of Master or Development when making code changes. For example, if I wanted to fix a bug in Master I would make a new branch off Master called 'fixing-xyz'. I would then fix the bug, test my fix, commit my changes and then finally merge 'fixing-xyz' back into Master. That way the Master branch is always able to compile and work even if fixing that bug takes awhile.

One major benefit of branching is the ability to avoid duplicate work. As an example, since our Development branch is based on and is a a continuation of Master we can often fix bugs in Master and automatically pull those fixes into Development without coding the same fix twice.


## Projects
The actual Intersect directory layout is fairly simple.

| File/Directory | Description |
| ----------- | ----------- |
| Documentation | Licensing for each individual project and shortcuts to these docs. |
| Intersect (Core) | Shared assembly between the Client, Editor, and Server. Contains class definitions for game objects, configurations, and more. |
| Intersect.Client.Framework | Abtracted client code for audio playback, file management, graphic output and more. This also contains our heavily modified Gwen UI library.  |
| Intersect.Client | The actual Intersect Client code. MonoGame inherits the Client Framework to power the engine using MonoGame DesktopGl for cross platform support. |
| Intersect.Editor | Intersect Game Editor which is also powered by MonoGame DirectX. DirectX is required due our use of SwapChainRenderTargets. |
| Intersect.Server | Intersect Server which runs as a console application. This authoritative server controls every action taken within Intersect games. |
| Intersect.Shared | Shared helper functions and information for all the projects above. |
| Intersect.Tests.* | Unit testing for all of the projects listed above.  |
| Intersect.Utilities | Contains useful tools for working with Intersect. Stuff like generating rsa encryption keys for networking. Not used often. |
| AUTHORS.md | List of Intersect Authors. |
| CONTRIBUTORS.md | List of Intersect Contributors. |
| Intersect.sln | Visual Studio Solution file that loads all of the aforementioned projects in Visual Studio. |
| README.md | Readme file for Github that describes the Intersect engine, libraries we use, and more. |

