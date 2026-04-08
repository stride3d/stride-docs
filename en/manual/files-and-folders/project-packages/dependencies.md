# Dependencies

Project packages can depend on other packages in order to use their code and/or assets.

**For .NET developers:** a Stride project package is a standard C# project.

TODO: VISUALISATION IMAGE

Packages **cannot be co-dependent**: if **packageA** has a dependency on **packageB**, **packageB** cannot have a dependency on **packageA**.

TODO: VISUALISATION IMAGE

## Add a dependency

### [Game Studio](#tab/game-studio)

You can add **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**) by right clicking on **PackageB** in the **Solution explorer** panel and selecting **Add dependency...**

![](media/game-studio-add-dependency.webp)

### [Visual Studio](#tab/visual-studio)

You can add **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**) by right clicking **PackageB** in the **Solution Explorer** panel and selecting **Add > Project Reference...**

> [!NOTE]
> Make sure to save!

![](media/visual-studio-add-dependency.webp)

### [Command line](#tab/command-line)

If your IDE of choice isn't listed here, you can do this from the terminal instead via the `dotnet` command.

The below command will add **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**).

```bash
dotnet add PackageB reference PackageA
```

---

## Unreferenced packages

It is possible to have project packages that aren't referenced by any of the platform packages nor their dependencies.

TODO: VISUALISATION IMAGE

These packages will be ignored by the compiler and **won't be included in the build**. This is useful for creating special builds of your project that include additional content, or only include a portion of the game (like a demo).

TODO: VISUALISATION IMAGE

> [!WARNING]
> If at least one of the project packages that are included in the build are using assets from an unreferenced package, **Game Studio will fail to open and the game will fail to build**.

## See also

* [Create a package](create-a-package.md)
* [Package properties](package-properties.md)
