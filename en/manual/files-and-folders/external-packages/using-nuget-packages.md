# Using Nuget packages

This is a guide on how to use external Nuget packages with Stride.

## The idea

An external Nuget package can be added **as a dependency of another project package** (for .NET developers: as a dependency of another C# project). 

In most cases, you would add this to the **main non-platform project package** (eg. **MyGame**, not **MyGame.Windows**), which contains the majority of the code and assets.

TODO: VISUALIZATION HERE

## Finding Nuget packages

Nuget packages are hosted on [nuget.org](https://nuget.org). **You can use this website to search for them**.

Alternatively, check if your IDE of choice has a built-in browser of it's own (like Visual Studio).

## Adding an external Nuget package as a dependency

> [!NOTE]
> Currently, you cannot do this using **Game Studio**.

### [Visual Studio](#tab/add-visual-studio)

In the **Solution Explorer** panel, right click on the project package you want to add the Nuget package to and select **Manage Nuget packages...**

![](media/visual-studio-manage-nuget-context-menu.webp)

Select the **Browser** tab and search for the package you want to add.

![](media/visual-studio-nuget-browser.webp)

> [!NOTE]
> If no packages are showing up, make sure that the **package source** is set to **nuget.org**.
> 
> ![](media/visual-studio-manage-nuget-source.webp)

> [!NOTE]
> If the package you are looking for isn't showing up, try clicking the **include prerelease** checkbox.
> 
> ![](media/visual-studio-manage-nuget-prerelease.webp)

After selecting the package, click the **install** button on the right.

TODO: IMAGE

> [!NOTE]
> Make sure to save!

### [Command line](#tab/add-command-line)

If your IDE doesn't have a way of adding Nuget packages, you can use the `dotnet` command in the terminal.

```bash
dotnet add Path/To/Project/Package package NameOfNugetPackage
```

---

## Using assets in Game Studio

> [!NOTE]
> This only applies to packages that include custom Stride assets.

In **Game Studio**, in the **Solution explorer** panel, expand **External packages** and look for the package you have just added.

![](media/game-studio-external-package-assets.webp)

> [!NOTE]
> You may need to reload the project in order to make the package show up.

## See also

* [What is Nuget](what-is-nuget.md)
* [Dependencies](../project-packages/dependencies.md)
