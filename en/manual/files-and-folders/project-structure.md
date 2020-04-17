# Project structure

Stride saves your projects as [Visual Studio solution files](https://msdn.microsoft.com/en-us/library/bb165951.aspx?f=255&MSPPError=-2147217396). You can open the projects with Stride Game Studio or any IDE such as Visual Studio.

Stride organizes project files into **packages**. Each package comprises several folders and an *.sdpkg file which describes the package. 

A project can contain one package or several. You can share packages between projects.

## Package folder structure

![Folder structure](media/folder-structure.png)

* **Assets** contains the [asset](../game-studio/assets.md) files which represent elements in your game.

* **Bin** contains the compiled binaries and data. Stride creates the folder when you build the project, with a subdirectory for each platform.

* **MyGame.Game** contains the source code of your game as a cross-platform Visual Studio project (.csproj). You can add multiple projects to the same game.

*	**MyGame.Platform** contains additional code for the platforms your project supports. Game Studio creates folders for each platform (eg *MyPackage.Windows*, *MyPackage.Linux*, etc). These folders are usually small, and only contain the entry point of the program.

* **obj** contains cached files. Game Studio creates this folder when you build your project.

* **Resources** is a suggested location for files such as images and audio files used by your assets.

## Recommended project structure

For advice about the best way to organize your project, see the [Version control](version-control.md) page.

## See also

* [Version control](version-control.md)
* [Distribute a game](distribute-a-game.md)