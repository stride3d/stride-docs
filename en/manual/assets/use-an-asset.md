# Use an asset

<span class="badge text-bg-primary">Beginner</span>

Assets can be referenced by other assets or components in a scene.

## Components and other assets

In the **Property grid**, you can sometimes find a property that looks like this:

![](media/property-grid-asset-reference.webp)

In here, you can assign a reference to another asset. There are two available buttons:

* **Hand** - opens up a dialogue to select an existing asset.
* **Eraser** - clears the reference.

> [!TIP]
> You can also **drag and drop** an asset from the **Asset view**.
> 
> ![](media/property-grid-asset-reference-drag-and-drop.webp)

## Your own scripts

You can create an assignable reference to an asset in your script by creating a property or field with an asset type.

```csharp
public Model ModelAsset { get; set; }
```

This will show up in the **Property grid** like so.

![](media/property-grid-direct-reference-example.webp)

This way, the asset will be loaded automatically. However, Stride also provides a way of **managing loading manually**. For more information, visit the [use an asset in code page](use-an-asset-in-code.md).

## See also

* [Use an asset in code](use-an-asset-in-code.md)
* [Asset compilation](asset-compilation.md)
