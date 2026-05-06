# Use an asset in code

There are a few ways of using assets in code:

* [**Referencing**](#referencing-an-asset) - the easiest way, creates an assignable reference in the **property grid**.
* [**Loading from path**](#loading-from-path) - a manual way of loading assets based on their path. You also have to make sure the assets are included in the build and to unload them when you're done using them.
* [**Url reference**](#url-reference) - a mix between referencing and loading from path. It creates an assignable reference in the **property grid**, while allowing you to manually handle loading and unloading.

## Referencing an asset

The easiest way of using an asset in your own script is to create a assignable reference using a public property or field.

```csharp
public class Example : StartupScript
{
    public Model ModelAsset { get; set; }
}
```

The above will show up in the **property grid** like so:

TODO: IMAGE

Stride will then automatically handle assigning and manage the reference count. However, if you want more control, consider using a [url reference](#url-reference) instead.

## Loading from path

> [!WARNING]
> When assets are loaded manually, **they have to be manually unloaded too**, or else Stride will keep the assets **loaded in memory forever**.

You can load assets at runtime through code using [`Content.Load<T>`](xref:Stride.Core.Serialization.Contents.ContentManager.Load``1(System.String,Stride.Core.Serialization.Contents.ContentManagerLoaderSettings)) or [`Content.LoadAsync<T>`](xref:Stride.Core.Serialization.Contents.ContentManager.LoadAsync``1(System.String,Stride.Core.Serialization.Contents.ContentManagerLoaderSettings)) and then unload them using [`Content.Unload`](xref:Stride.Core.Serialization.Contents.ContentManager.Unload*).

```csharp
public override void Start()
{
    var loadedModel = Content.Load<Model>("path/to/asset");
}

public override void Cancel()
{
    Content.Unload("path/to/asset");
}
```

### Missing assets

The asset compiler only knows which assets to include based on their references. When loading assets only from a path, **Stride doesn't know that the asset is needed in the build**.

To fix that, you can [include the missing assets as root](asset-compilation.md#how-to-mark-an-asset-as-root) to make sure they are always included with the build, or try using [url references](#url-reference) instead.

## Url reference

Url references provide a way of assigning an asset in the property grid **without loading it**.

Unlike [loading from path](#loading-from-path), the references asset will be included in the build, as Stride will see it as needed by the component.

You can create an assignable url reference to an asset in your own script by using [`UrlReference<T>`](xref:Stride.Core.Serialization.UrlReference`1), where `T` is the asset type you want to use.

```csharp
public class Example : StartupScript
{
    public UrlReference<T> MyAssetReference { get; set; }
}
```

It will show up in the **property grid** like so:

TODO: IMAGE

You can retrieve the asset through code via the **content system** by using [`Content.Load`](xref:Stride.Core.Serialization.UrlReferenceContentManagerExtenstions.Load*) or [`Content.LoadAsync`](xref:Stride.Core.Serialization.UrlReferenceContentManagerExtenstions.LoadAsync*) and and then unload it using [`Content.Unload`](xref:Stride.Core.Serialization.Contents.ContentManager.Unload*).

```csharp
public override void Start()
{
    var asset = Content.Load(MyAssetReference);
}

public override void Cancel()
{
    var asset = Content.Unload(MyAssetReference);
}
```

## See also

* [Use an asset](use-an-asset.md)
* [Asset compilation](asset-compilation.md)
