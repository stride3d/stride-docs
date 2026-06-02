# Add or remove a platform

<span class="badge text-bg-primary">Beginner</span>

When creating a new game, Stride prompts you to select the platforms which you want to target. This can be changed after the fact.

## Add or remove a platform

1. In the **Solution explorer**, locate the main [**project package**](../files-and-folders/project-packages/index.md). Typically it's the one that doesn't end with `.NameOfPlatform`.

    ![](media/solution-explorer-main-project-package.webp)

2. Right click on it and select **Update package > Update platforms**.

    ![](media/solution-explorer-update-platforms.webp)

3. Select which platforms you want to support and click **Ok**.

    ![](media/select-platforms.webp)

    Stride will then delete [platform packages](../files-and-folders/project-packages/index.md#platform-packages) for removed platforms and create new ones for the platforms that were added.

4. Reload the assemblies by clicking the **reload game assemblies** button in the toolbar.

    ![](media/reload-assemblies.webp)

## See also

* [Platforms](index.md)
* [Project packages](../files-and-folders/project-packages/index.md)
* [Project file structure](../files-and-folders/project-structure.md)
