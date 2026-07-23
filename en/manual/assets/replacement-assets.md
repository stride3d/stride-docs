# Replacement assets

**Replacement assets** are a type of a [derived asset](archetypes.md), that take place of their archetype during compilation. This means that the original asset is overridden by the replacement in the built game.

![](media/replacement-assets.webp)

This is useful when trying to **modify an asset from an [external package](../files-and-folders/external-packages/index.md) or the engine**. For example: you can create a replacement asset in order to override the default [sprite font](../graphics/sprite-fonts.md) used by Stride.

## Create a replacement asset

To create a replacement asset, right clicking on the asset you want to replace and select **Create replacing asset**.

![](media/asset-view-create-replacement.webp)

This will create a [derived asset](archetypes.md) that is set to replace the original.

> [!NOTE]
> The replacement asset **will still work** if it's marked as **⚫ not included in build**.

## See also

* [Archetypes](archetypes.md)
* [Asset compilation](asset-compilation.md)
