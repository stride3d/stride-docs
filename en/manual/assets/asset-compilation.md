# Asset compilation

<span class="badge text-bg-primary">Beginner</span>

Assets are compiled into **bundles**.

## Which assets are compiled

Stride only compiles assets which are used in the game. This means that if an asset is unreferenced by other assets that are needed by the game, they will be ignored and won't be available to load from code.

TODO: VISUALIZATION

## Blue, green and gray dots

[!INCLUDE [asset-status-dots](../../includes/asset-status-dots.md)]

## Root assets

🔵 **Root assets** are assets that will always be compiled no matter if they are referenced or not.

A few remarks:

* Root assets can be defined in any project package (TODO: CHECK THIS).
* You can only mark individual assets as root, not folders.

### How to mark an asset as root

You can mark an asset as root by right clicking on it in the **Asset view** and selecting **🔵 Include in build as root asset**.

![](media/asset-view-include-root.webp)

> [!WARNING]
> Marking an asset as root in **Game Studio** will only mark it **for the selected platform**. Make sure to either:
> * Mark the asset as root for every platform your project targets
> * Edit the main project package `.sdpkg` manually. For more information, visit the [package properties page](../files-and-folders/project-packages/package-properties.md).

## Checking assets

You can use [`Content.FileProvider.ContentIndexMap`](xref:Stride.Core.Serialization.Contents.IContentIndexMap) to check what assets are available.

```csharp
if (Content.FileProvider.ContentIndexMap.Contains("Models/Enemy"))
{
    // Execute code if the asset exists
}

var allContent = Content.FileProvider.ContentIndexMap.GetMergedIdMap()
    .Select(x => x.Key);
```

> [!NOTE]
> The content system also contains shaders and shader information. If you want to use [`GetMergedIdMap`](xref:Stride.Core.Serialization.Contents.IContentIndexMap.GetMergedIdMap) to check which assets are loaded, consider filtering out paths that start with `shaders/` and `__shaders_bytecode__/`.
> 
> ```csharp
> var allAssets = Content.FileProvider.ContentIndexMap.GetMergedIdMap()
>     .Select(x => x.Key)
>     .Where(x => !x.StartsWith("shaders/") && !x.StartsWith("__shaders_bytecode__/"));
> ```

## See also

* [Use an asset in code](use-an-asset-in-code.md)
