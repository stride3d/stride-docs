# Assets

<span class="badge text-bg-primary">Beginner</span>

An asset is a representation of an element of your game inside Game Studio, such as texture, animation or model.

## Create an asset

To create an asset, click the "Add Asset" button in the  **Asset View** and select the type of asset you want to create.

![Image of the Asset View, showing ](asset-creation-create-new-asset-asset-view-tab.png)

## Create assets from resources

To create an asset from a resource, simply drag and drop it from a folder.

[IMAGE HERE]

Then, select the type of resource you want to create.

[IMAGE HERE]

You will be asked, if you want to **copy the dragged file to the resources folder**. Most of the time, **you want to do this**, in order to make the project easier to share and easier to use version control with.

[IMAGE HERE]

## Green, blue and gray dots

[IMAGE OF 3 DIFFERENT ASSETS WITH 3 DIFFERENT COLORED DOTS HERE]

Every asset has a little dot in the top left corner of their icon. This dot signifies if an asset is going to be included when building the project:
* Green - the asset will be included in the build, because a different asset needs it.
* Blue - the asset will be included in the build no matter if it's needed or not.
* Gray - the asset will not be included in the build.

Stride doesn't include assets which aren't used anywhere, meaning that **the cannot be accessed when running the game**.
In order to ensure, that an asset will be included in the build no matter what, right click on it and select **Mark as root asset** (TODO: change this text to whatever it says in Game Studio).

[IMAGE OF THE CONTEXT MENU HERE]
