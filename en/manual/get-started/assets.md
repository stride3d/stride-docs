# Assets

<span class="badge text-bg-primary">Beginner</span>

An asset is a representation of an element of your game inside Game Studio, such as texture, animation or model.

## Create an asset

To create an asset, click the **➕ Add assets** button in the **Asset view** and select the type of asset you want to create.

![](../assets/media/asset-view-create-new.webp)

## Create assets from resources

To create an asset from a resource, simply drag and drop it into the **Asset view** and select the type of asset you want to create.

![](../assets/media/asset-view-from-resource-type.webp)

If the resource isn't present in the resources folder, **Game Studio** will ask you if you want to move it there. In the majority of cases, **you will want to click yes**.

![](../assets/media/asset-view-copy-resource.webp)

Finally, you will be asked if you want to **move it to the default location**. Again, most of the time **you will want to do this**, unless you need more control over where resources end up.

![](../assets/media/asset-view-resource-default-location.webp)

## Blue, green and gray dots

[!INCLUDE [asset-status-dots](../../includes/asset-status-dots.md)]

Stride doesn't include assets which aren't used anywhere, meaning that **they cannot be accessed when running the game**. In order to ensure, that an asset will always be included in the build, right click on it and select **🔵 Include in build as root asset**.

![](../assets/media/asset-view-include-root.webp)

## Further reading

For more information, visit the [Assets](../assets/index.md) page.
