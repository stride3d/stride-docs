# Assets

<span class="badge text-bg-primary">Beginner</span>

An asset is a representation of an element of your game inside Game Studio, such as texture, animation or model.

## Create an asset

To create an asset, click the "Add Asset" button in the  **Asset View** and select the type of asset you want to create.

![Image of the "Add Asset" menu in the asset view.](media/asset-view-create-new.webp)

## Create assets from resources

To create an asset from a resource, simply drag and drop it from a folder.

Then, select the type of resource you want to create.

![Popup showing a list of assets that can be created from the dragged resource.](media/asset-view-from-resource-type.webp)

You will be asked, if you want to **copy the dragged file to the resources folder**. Most of the time, **you want to do this**, in order to make the project easier to share and easier to use version control with.

![A popup "Source file 'C:/Users/franc/Downloads/Grass0044K-PNG/Grass0044K-PNG_Color.png' is not inside of your project's resource folders, do you want to copy it?" with two options "yes" and "no".](media/asset-view-copy-resource.webp)

Finally, you will be asked if you want to **move it to the default location**. Again, most of the time **you want to do this**, unless you want to have more control over where resources end up.

![A popup "Do you want to place the resource in the default location ?" with two options "yes" and "no"](media/asset-view-resource-default-location.webp)

## Green, blue and gray dots

![A screenshot of three items in the Asset View, all having a small circle in the top left corner of their icon with one being blue, one green and one gray.](media/asset-view-indicators.webp)

Every asset has a little dot in the top left corner of their icon. This dot signifies if an asset is going to be included when building the project:
* **Green** - the asset will be included in the build, because a different asset needs it.
* **Blue** - the asset will be included in the build no matter if it's needed or not.
* **Gray** - the asset will not be included in the build.

Stride doesn't include assets which aren't used anywhere, meaning that **the cannot be accessed when running the game**. In order to ensure, that an asset will be included in the build no matter what, right click on it and select **Include in build as root asset**.

![A screenshot of an asset's context menu, highlighting an item "Include in build as root asset".](media/asset-view-include-root.webp)
