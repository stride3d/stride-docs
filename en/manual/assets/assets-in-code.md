# Assets in code

This page explains how to use assets in code.

## Url reference

You can create an assignable reference to another asset in your own script by using [`UrlReference<T>`](xref:Stride.Core.Serialization.UrlReference`1), where `T` is the asset type you want to use.

```csharp
public class Example : StartupScript
{
    public UrlReference<T> MyAssetReference { get; set; }
}
```

It will show up in the **Property grid** like so:

TODO: IMAGE

For more information on how to assign an asset, visit the [use an asset page](use-an-asset.md).

## Loading from path

You can load assets at runtime through code [`Content.Load`](xref:Stride.Core.Serialization.Contents.ContentManager.Load*) or [`Content.LoadAsync`](xref:Stride.Core.Serialization.Contents.ContentManager.LoadAsync*).

```csharp
public const string PATH_TO_ASSET = "path/to/asset";

public override void Start()
{
    var loadedModel = Content.Load<Model>(PATH_TO_ASSET);
}

public override void Cancel()
{
    Content.Unload(PATH_TO_ASSET);
}
```

> [!WARNING]
> **Make sure to unload!** Content manager keeps loaded items in memory until the amount of `Unload` calls matches the amount of those for `Load`.
> 
> TODO: VISUALIZATION
> 
> This is why it's crucial to unload assets once your script is done with them.

### Assets not loading

The asset compiler only knows which assets to include based on their references. When loading assets from a path, we are not telling Stride that we need to use them.

To fix that, you can [include the target assets as root](asset-compilation.md#how-to-mark-an-asset-as-root) to make sure they are always included with the build, or try using [url references](#url-reference) instead.
