# Use an asset

Assets can be referenced by other assets or components in a scene.

## Components and other assets

In the **property grid**, you can sometimes find a property that looks like this:

TODO: IMAGE

In here, you can assign a reference to another asset. There are two available buttons:

* 👆 **Hand** - opens up a dialogue to select an existing asset.
* TODO: IMAGE **Eraser** - clears the reference.

> [!TIP]
> You can also **drag and drop** an asset from the **asset view**.
> 
> TODO: IMAGE

## Your own scripts

You can create an assignable reference to an asset in your script by creating a property or field with an asset type.

```csharp
public Model MyModel { get; set; }
```

This will show up in the **property grid** like so.

TODO: IMAGE

This way, the asset will be loaded automatically. However, Stride also provides a way of **managing loading manually**. For more information, visit the [use an asset in code page](use-an-asset-in-code.md).

## See also

* [Use an asset in code](use-an-asset-in-code.md)
* [Asset compilation](asset-compilation.md)
