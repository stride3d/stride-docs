# Dependencies

Packages can depend on other packages in order to use their code and/or assets.

TODO: VISUALISATION IMAGE

Packages **cannot be co-dependent**: if **package A** has a dependency on **package B**, **package B** cannot have a dependency on **package A**.

TODO: VISUALISATION IMAGE

## Add a dependency

### [Game Studio](#tab/game-studio)

You can add a **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**) by right clicking on **PackageB** in the **Solution explorer** panel and selecting **Add dependency...**

![](media/game-studio-add-dependency.webp)

### [Visual Studio](#tab/visual-studio)

You can add a **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**) by right clicking **PackageB** in the **Solution Explorer** panel and selecting **Add > Project Reference...**

> [!NOTE]
> Make sure to save!

![](media/visual-studio-add-dependency.webp)

### [Command line](#tab/command-line)

If your IDE of choice isn't included in this list, you can do this from the terminal instead via the `dotnet` command.

The below command will add **PackageA** as a dependency of **PackageB** (**PackageA** will be used by **PackageB**).

```bash
dotnet add PackageB reference PackageA
```

---

## Unused packages

It is possible to have packages in your project that aren't used by other packages.

TODO: VISUALISATION IMAGE

These packages will be ignored by the compiler and **won't be included in the build**. This is useful for creating special versions of your project that include additional libraries and content.

TODO: VISUALISATION IMAGE

> [!WARNING]
> If at least one of the used project packages are using assets from an unused package, **Game Studio will fail to open and the game will fail to build**.

## See also

* [Create a package](create-a-package.md)
* [Package properties](package-properties.md)
