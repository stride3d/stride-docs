# Project structure

This page explains in detail how a Stride project is structured in the files.

## Overview

A Stride project is a standard **C# solution**, consisting of a single **[solution file](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/solution-dot-sln-file)** and multiple **[package](#packages) folders**, which contain code, assets and resources.

IMAGE OF THE FILE STRUCTURE

## Packages

At the root, a Stride project is comprised of multiple [packages](project-packages/index.md). They are used for separating code, assets and resources.

**For C# developers**: a Stride package is a [standard C# project](https://learn.microsoft.com/en-us/visualstudio/get-started/tutorial-projects-solutions).

By default, there are at least 2 packages in a Stride project:
* `NameOfGame` - contains most code, assets and resources for the game
* `NameOfGame.PlatformName` (eg. `NameOfGame.Windows`) - dedicated package for a given platform, contains the [**entry point**](#entry-point) and other files specific to the platform (such as the window icon).

Every package contains:
* **Assets** - the assets folder. Name of this folder or additional folders can be configured in the `.sdpkg` file.
* **Resources** - the resources folder. Name of this folder or additional folders can be configured in the `.sdpkg` file.
* **`.sdpkg` file** - contains configurable metadata of the package.
* **`.sdpkg.user` file** - contains user-specific data about the editor that is not meant to be shared with source control.
* **`.csprj` file** - a C# project file containing information about how it's code will be compiled.

TODO: VISUALISATION

## Entry point

The **entry point** refers to the place in code where execution starts from. Each platform's entry point is stored in their dedicated [package](#packages). For most platforms, it's the `Program.cs` file.

IMAGE OF WINDOWS, LINUX AND MACOS PACKAGES

Every entry point needs to **create a game instance** and **start it**.

```csharp
using Stride.Engine;

using var game = new Game();
game.Run();
```

> [!NOTE]
> The file containing the **entry point** and the code needed to start the game is automatically generated when a platform is added to the project.

## Package bin and obj folders

Every package has a `bin` and an `obj` folders which are automatically created when opening or running the project. They stored cached data used by Stride.

> [!NOTE]
> These folders **can be safely deleted without affecting the rest of the project**. For more information, visit the [cached files page](cached-files.md).

## Project Bin folder

In the root of the project, there is a `Bin` folder that contains game builds for each platform. Every time the game is launched from Game Studio or from an IDE, a debug version is built and placed in that folder.

The location of this folder can be changed by going to the `.csproj` file of a platform's package and changing the value of `<OutputPath>`.

> [!NOTE]
> To build the **release version** of the game, visit the [distribute a game page](distribute-a-game.md).

## See also

* [Version control](version-control.md)
* [Distribute a game](distribute-a-game.md)
