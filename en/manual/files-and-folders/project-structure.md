# File structure

This page explains in detail how a Stride project's files are structured.

## Overview

A Stride project is a **standard C# solution**, consisting of a single **[solution file](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/solution-dot-sln-file) (`.sln`)** and multiple **[package](#packages) folders**, which contain code, assets and resources.

IMAGE OF THE FILE STRUCTURE

* [**Bin**](#Project Bin folder) - folder containing build files.
* **NameOfGame**, **NameOfGame.PlatformName** - package folders
* **`.sln` file** - the solution file used by C# and Game Studio for opening the project.

## Packages

At the root, a Stride project is comprised of multiple [packages](project-packages/index.md). They are used for separating code, assets and resources.

**For C# developers**: a Stride package is a [standard C# project](https://learn.microsoft.com/en-us/visualstudio/get-started/tutorial-projects-solutions).

By default, there are at least 2 packages in a Stride project:
* **NameOfGame** - contains most code, assets and resources for the game.
* **NameOfGame.PlatformName** (eg. NameOfGame.Windows) - dedicated package for a given platform, contains the [**entry point**](project-packages/index.md#entry-point) and other files specific to the platform (such as the window icon).

Every package contains:
* **Assets** - the assets folder. Name of this folder or additional folders can be configured in the `.sdpkg` file.
* **Resources** - the resources folder. Name of this folder or additional folders can be configured in the `.sdpkg` file.
* **`.sdpkg` file** - contains configurable metadata of the package.
* **`.sdpkg.user` file** - contains user-specific data about the editor that is not meant to be shared with source control.
* **`.csprj` file** - a C# project file containing information about how it's code will be compiled.

TODO: VISUALISATION

> [!NOTE]
> The file containing the **entry point** and the code needed to start the game is automatically generated when a platform is added to the project.

## Package bin and obj folders

Every package has a `bin` and an `obj` folders which are automatically created when opening or running the project. They store cached data used by Stride.

> [!NOTE]
> These folders **can be safely deleted without affecting the rest of the project**. For more information, visit the [cached files page](cached-files.md).

## Project Bin folder

In the root of the project folder, there is a `Bin` folder that contains game builds for each platform. Every time the game is launched from Game Studio or from an IDE, a debug version is built and placed in that folder.

The location of this folder can be changed by going to the `.csproj` file of a platform's package and changing the value of `<OutputPath>`. For more information, read the [building setup page](building-the-game/setup.md).

> [!NOTE]
> To build the **release version** of the game, visit the [building the game section](building-the-game/index.md).

## See also

* [Packages](project-packages/index.md)
* [Version control](version-control.md)
* [Building the game section](building-the-game/index.md)
