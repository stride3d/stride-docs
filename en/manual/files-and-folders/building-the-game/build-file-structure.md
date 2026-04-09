# Build file structure

<span class="badge text-bg-primary">Intermediate</span>

This page explains the file structure of a built Stride game.

## Overview

By default, all builds are located in the **Bin** directory. It contains multiple sub-directories that categorize builds based on their configuration and platform.

When building the Release version of the game, the actual published files **aren't located in the standard directory**, but in it's subdirectory called **publish**.

![](media/build-file-structure-publish-subdirectory.webp)

> [!NOTE]
> The build location can be configured. For more information visit the [setup page](setup.md).

## Contents of the build folder

> [!NOTE]
> Depending on [your setup](setup.md), some of these files might not be generated.

The build folder contains the following files:

* **MyGame.PlatformName** - the executable. It's file extension depends on the platform (eg. `.exe` on Windows).
* **data** - folder containing asset bundles.
* **`.dll` and `.so` files** - libraries used by the game. They can be embedded in the executable itself, in order to declutter the folder.
* **`.json` files** - contain information needed to launch the game. Depending on the configuration, they might not be needed and won't be generated.

Additionally, there are also these files, that don't need to be included with the game.

* **createdump.exe** - application for capturing information about a crash.
* **`.pdb` files** - they contain debug information, used for attaching a debugger (using breakpoints), creating more detailed logs or helping players make mods more easily. For more information, read the [Microsoft article](https://learn.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger).
* **`.xml` files** - they contain generated documentation for every package in your project. For more information, read the [Microsoft article](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/xml-documentation).

## See also:

* [Setup](setup.md)
* [Cleaning up](cleaning-up.md)
* [Specifying symbol (.pdb) and source files in the Visual Studio debugger](https://learn.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger)
* [Tutorial: Create XML documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/xml-documentation)
