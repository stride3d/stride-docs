# Dependencies

Packages can depend on other packages in order to use their code and/or assets.

TODO: VISUALISATION IMAGE

Packages **cannot be co-dependent**: if **package A** has a dependency on **package B**, **package B** cannot have a dependency on **package A**.

TODO: VISUALISATION IMAGE

## Add a dependency

### [Game Studio](#tab/game-studio)

You can add a package as a dependency to another package by right clicking it in the **Soludion explorer** panel and selecting **Add dependency...**.

![](media/game-studio-add-dependency.webp)

### [Visual Studio](#tab/visual-studio)

You can add a package as a dependency to another package by right clicking it in the **Solution Explorer** panel and selecting **Add > Project Reference...**.

![](media/visual-studio-add-dependency.webp)

> [!NOTE]
> Make sure to save!

### [Command line](#tab/command-line)

If your IDE of choice isn't included in this list, you can add **Package A** as a dependency of **Package B** from the terminal via the `dotnet` command.

```bash
dotnet add PackageB reference PackageA
```

---

## Unused packages

It is possible to have packages in your project that aren't used by other packages.

TODO: VISUALISATION IMAGE

These packages will be ignored by the compiler and **won't be included in the build**. This is useful for creating special versions of your project that include additional libraries and content.

TODO: VISUALISATION IMAGE
