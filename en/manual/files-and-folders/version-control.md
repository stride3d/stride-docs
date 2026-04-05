# Version control

Version control software allows you to work on your project with multiple people at the same time and keep a history of changes that can be used for backups.

The most commonly used version controlled system is [Git](https://git-scm.com/).

> [!NOTE]
> Explaining how to use version control software is outside of the scope of this page.

## Files to ignore

There are certain files that version control should ignore, as they are used for caching or storing local data:
1. Project package **bin** and project **Bin** folders - these folders contain the build results of your game. This includes the builds that are created when launching the game from Game Studio.
2. Project package **obj** folders - these folders contain cached data used by C# and Stride.
3. **\*.user** files - these files store save data for the local user (such as the camera position in Game Studio).

### For Git

We recommend using the [official Github `.gitignore` for Dotnet projects](https://github.com/github/gitignore/blob/main/Dotnet.gitignore).

> [!WARNING]
> This file should be placed at the root of the Stride project, next to the `.sln` file. If your git repository isn't initialized at the root, the `.gitignore` file will still be detected.
>
> TODO: ADD PICTURE

## Large files

Some version control systems have special mechanisms for handling large files that can improve performance of those systems in large projects. In Stride, **these are most commonly the resource files**. For more information, visit the [project structure page](project-structure.md).

## Content creation files

Files that are used for creating assets, but aren't used in the game (such `.psd` photoshop files) **shouldn't be included in the project files**. If you want to keep them in version control, considering having them in a separate directory.

TODO: VISUALIZATION

## See also

* [Project structure](project-structure.md)
