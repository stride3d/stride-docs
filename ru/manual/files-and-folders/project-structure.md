# Project structure
# Структура проекта

Stride saves your projects as [Visual Studio solution files](https://msdn.microsoft.com/en-us/library/bb165951.aspx?f=255&MSPPError=-2147217396). You can open the projects with Stride Game Studio or any IDE such as Visual Studio.
Stride сохраняет ваши проекты как [файлы решений Visual Studio] (https://msdn.microsoft.com/en-us/library/bb165951.aspx?f=255&MSPPError=-2147217396).  Вы можете открывать проекты с помощью Stride Game Studio или любой IDE, такой как Visual Studio.

Stride organizes project files into **packages**. Each package comprises several folders and an *.sdpkg file which describes the package. 
Stride организует файлы проекта в **пакеты**.  Каждый пакет состоит из нескольких папок и файла *.sdpkg с описанием пакета.

A project can contain one package or several. You can share packages between projects.
Проект может содержать один пакет или несколько.  Вы можете обмениваться пакетами между проектами.

## Package folder structure
## Структура папки пакета

![Folder structure](media/folder-structure.png)
![Структура папки](media/folder-structure.png)

* **Assets** contains the [asset](../game-studio/assets.md) files which represent elements in your game.
* **Assets** содержит файлы [asset](../game-studio/assets.md), представляющие элементы вашей игры.

* **Bin** contains the compiled binaries and data. Stride creates the folder when you build the project, with a subdirectory for each platform.
* **Bin** содержит скомпилированные двоичные файлы и данные.  Stride создает папку при сборке проекта с подкаталогом для каждой платформы.

* **MyGame.Game** contains the source code of your game as a cross-platform Visual Studio project (.csproj). You can add multiple projects to the same game.
* **MyGame.Game** содержит исходный код вашей игры в виде кроссплатформенного проекта Visual Studio (.csproj).  Вы можете добавить несколько проектов в одну и ту же игру.

*	**MyGame.Platform** contains additional code for the platforms your project supports. Game Studio creates folders for each platform (eg *MyPackage.Windows*, *MyPackage.Linux*, etc). These folders are usually small, and only contain the entry point of the program.
* **MyGame.Platform** содержит дополнительный код для платформ, которые поддерживает ваш проект.  Game Studio создает папки для каждой платформы (например, *MyPackage.Windows*, *MyPackage.Linux* и т. д.).  Эти папки обычно небольшие и содержат только точку входа программы.

* **obj** contains cached files. Game Studio creates this folder when you build your project.
* **obj** содержит кэшированные файлы.  Game Studio создает эту папку, когда вы создаете свой проект.

* **Resources** is a suggested location for files such as images and audio files used by your assets.
* **Ресурсы** — рекомендуемое место для файлов, таких как изображения и аудиофайлы, которые используются вашими активами.

## Recommended project structure
## Рекомендуемая структура проекта

For advice about the best way to organize your project, see the [Version control](version-control.md) page.
Советы о том, как лучше всего организовать ваш проект, см. на странице [Контроль версий](version-control.md).

## See also
## Смотрите также

* [Version control](version-control.md)
* [Контроль версий](version-control.md)
* [Distribute a game](distribute-a-game.md)
* [Распространить игру](distribute-a-game.md)
