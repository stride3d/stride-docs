# Project Packages

Stride separates project files into **project packages**. This allows for better organization, faster compilation and splitting the game into separate parts (eg. DLC).

**For .NET developers:** a Stride project package is a standard C# project.

## Platform packages

IMAGE OF WINDOWS, LINUX AND MACOS PACKAGES

Every project contains one or more **platform packages** that represent each platform the game is being developed for. Those packages also contain the [entry point](#entry-point) of the executable.

Platform packages are automatically created when adding a platform. For more information on how to do this, read the [add or remove platform page](../../platforms/add-or-remove-a-platform.md).

## Entry point

The **entry point** refers to the place in code where execution starts from. Each platform's entry point is stored in their dedicated [platform package](#platform-packages). For most platforms, it's the `NameOfGameApp.cs` file.

Every entry point needs to **create a game instance** and **start it**.

```csharp
using Stride.Engine;

using var game = new Game();
game.Run();
```

> [!NOTE]
> The entry point and it's code is automatically generated when a platform is added to the project.

## In this section
* [Create a package](create-a-package.md)
* [Package properties](package-properties.md)
* [Dependencies](dependencies.md)
