# Building the game

<span class="badge text-bg-primary">Beginner</span>

In order to turn the uncompiled project into an executable application, it has to be **built** first.

For it's build system, Stride uses [MSBuild](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild). It's a powerful platform that's used by most C# projects.

> [!NOTE]
> Currently, it's not possible to build the final version of the game using **Game Studio**.

## Configurations

Games can be built using one of two different configurations:
* **Debug** - used for testing and debugging, allows you to connect a debugger to create break points and inspect the game while it's running.
* **Release** - used for creating the final version of the game.

When you launch a game from **Game Studio** or your **IDE**, it gets built in the **Debug** configuration.

## What is publishing?

**Publishing** refers to the process of creating the final version of the game made for distribution.

## In this section

* [Setup](setup.md)
* [Building](building.md)
* [Cleaning up](cleaning-up.md)
* [Build file structure](build-file-structure.md)
* [Distributing](distributing.md)
