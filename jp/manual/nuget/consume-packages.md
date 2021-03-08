# Consume packages

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

## Open your project in Visual Studio

> [!Note]
> Game Studio will later support adding NuGet packages directly.

First of all, after saving all your changes, open your project with Visual Studio. You can easily do this by clicking the appropriate button on the toolbar:

![Open project in Visual Studio](../game-studio/media/open-project-in-visual-studio.png)

## Add a reference

1. In the **Solution Explorer**, right-click on the project and click on **Manage NuGet Packages...**

   ![Visual Studio Start button](media/manage-nuget-packages.png)

2. For our example, let's use `Stride.AssetPack.BuildingBlocks` package:
   * Choose "nuget.org" or "All" as the **Package source**
   * Make sure **Include prerelease** is checked (if necessary)
   * Go to the **Browse** tab
   * **Search** for a Stride asset package (i.e. **Stride.AssetPack.BuildingBlocks**) and select **Install**

   ![Install package](media/install-package.png)

3. Save the Visual Studio project.

## Use assets in Game Studio

1. In **Game Studio**, go to the **File** menu and select **Reload project**

2. You should now be able to see the referenced project and its assets in **Solution explorer**

   ![Use package](media/use-package-from-game-studio.png)

> [!Note]
> Those assets are readonly and as such can't be dragged and dropped into the scene. This will be fixed soon.
> In the meantime, you can still use the asset selector to change an existing model or material reference to one from the asset pack.