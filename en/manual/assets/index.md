# Assets

<span class="badge text-bg-primary">Beginner</span>

**Assets** are representations of elements in a project (such as scenes, textures or audio), which can be used by scripts or other assets. An example would be the **model component** using a **model asset**.

**Resources** on the other hand are the files containing actual data (such as images or music), which can be used by assets.

In short:
* **Resources** - raw data files (`.png`, `.wav`, `.fbx`)
* **Assets** - usable elements in the game. They can use resource files and contain additional properties.

## Blue, green and gray dots

Stride only compiles assets which are used in the game. This means that if an asset isn't referenced by another asset that is determined as needed, it will be ignored.

TODO: VISUALIZATION

[!INCLUDE [asset-status-dots](../../includes/asset-status-dots.md)]

For more information about how assets are compiled, visit [Asset compilation](asset-compilation.md)

## Location of assets and resources

In **Game Studio** you can view assets in the **Asset view** by selecting an **assets** folder in the **solution explorer**.

![](media/solution-explorer-assets.webp)

As for **resources**, it isn't possible to view them in **Game Studio**. You can browse through them by opening the directory containing your project and going to a resource folder of the target [project package](../files-and-folders/project-packages/index.md).

For more information, visit [Project file structure](../files-and-folders/project-structure.md).

## In this section

* [Create an asset](create-an-asset.md)
* [Edit an asset](edit-an-asset.md)
* [Use an asset](use-an-asset.md)
* [Use an asset in code](use-an-asset-in-code.md)
* [Tags](tags.md)
* [Archetypes](archetypes.md)
* [Asset compilation](asset-compilation.md)
* [Asset bundles](asset-bundles.md)
