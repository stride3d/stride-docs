# Use an asset

Assets can be referenced by other assets or components in a scene.

## Components and other assets

In the **Property grid** you can sometimes find a property that looks like this:

TODO: IMAGE

This is where you can assign a reference to another asset. There are two available buttons:
* 👆 **Hand** - opens up a dialogue to select an existing asset.
* **Eraser** - clears the reference.

> [!TIP]
> You can also **drag and drop** an asset from the **Asset view**.
> 
> TODO: IMAGE

## Your own scripts

You can create an assignable reference to another asset in your own script by using [`UrlReference<T>`](xref:Stride.Core.Serialization.UrlReference`1), where `T` is the asset type you want to use.

```csharp
public class Example : StartupScript
{
    public UrlReference<T> MyAssetReference { get; set; }
}
```

For more information on how to use assets in your own code, visit the [assets in code page](assets-in-code.md).

## See also

* [Assets in code](assets-in-code.md)
* [Asset compilation](asset-compilation.md)
