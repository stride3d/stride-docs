# Cached files

Stride caches assets and code in folders inside of your project:
* **~/Bin** - contains the built game executables, including the one used when launching the game from Game Studio.
* **~/PackageName/bin** - contains build files for the specific package.
* **~/PackageName/obj** - contains cached data for that package.

Additionally, Stride also uses these files:
* **\*.sdpkg.user** - file containing user-specific information used by the editor (like camera position and rotation).
* **Asset cache** - contains every asset that was ever loaded by any project. By default, it's located in **%temp%/Stride**, which can be changed in Game Studio in **Edit > Settings > Environment > Build cache directory**.
* **Settings cache** - contains Game Studio's settings. It's located in **%AppData%/Stride**.

You might want to clean the cache if:
* the cache is taking up too much space on disk
* assets don't update in-game after you edit or delete them
* Game Studio is in a bad state.

Cleaning the cache **won't affect your project**.

## Cleaning the project cache

Look for a way to clean the solution in your IDE.

### [Visual Studio](#tab/clean-solution-visual-studio)

1. To clean the code cache, select **Build > Clean Solution**.
2. If you have the [Stride Extension for Visual Studio](../get-started/visual-studio-extension.md), to clean the asset cache, select **Extensions > Stride > Clean intermediate assets for Solution**.

### [Command line](#tab/clean-solution-command-line)

The cache can be cleaned by using the `dotnet` command.

```bash
dotnet clean
```

### [Manual](#tab/clean-solution-manual)

To clean the cache:
1. Delete `bin` and `obj` directories in all packages.
2. Delete the `Bin` directory in the project root.

---

## See also

* [Project structure](project-structure.md)
* [Version control](version-control.md)
