# Create a package

In this guide, we will dive into how to create custom packages.

## Create a platform package

TODO: IMAGE OF PLATFORM PACKAGES

Platform packages are created when adding a platform to the project. Steps on how to do that are located on the [add or remove a platform page](../../platforms/add-or-remove-a-platform.md).

## Create a standard package

### [Game Studio](#tab/game-studio)

You can create a new package in the **Solution explorer** panel by right clicking on the solution and selecting **"New project..."**.

![](media/game-studio-new-package.webp)

You can select from one of two templates:
* **New game** - creates a new game package along additional packages for selected platforms.
* **Code library** - a standard empty package that is meant to be used by other packages for code and assets.

### [Visual Studio](#tab/visual-studio)

You can create a new package in the **Solution Explorer** panel by right clicking on the solution and selecting **Add > New Project...**

![](media/visual-studio-new-package.webp)

You will be prompted to select one of the templates provided by Visual Studio. Select **Class Library** for the C# language.

![](media/visual-studio-new-package-template.webp)

Give the package a name and then continue through the steps until the package is created.

> [!NOTE]
> Make sure to save!

> [!WARNING]
> The created package **will be missing references to Stride libraries**. You will have to add them yourself.

> [!WARNING]
> Creating a package through Visual Studio **won't create the `.sdpkg` file** nor the **Assets** and **Resources** folders. Make sure to create them yourself.
> 
> ![](media/visual-studio-new-package-created.webp)
> 
> Here is a template for the `.sdpkg` file.
> 
> ```yaml
> !Package
> SerializedVersion: {Assets: 3.1.0.0}
> Meta:
>     Name: MyGame.MyLibrary
>     Version: 1.0.0
>     Authors: []
>     Owners: []
>     Dependencies: null
> AssetFolders:
>     - Path: !dir Assets
>     - Path: !dir Effects
> ResourceFolders:
>     - !dir Resources
> OutputGroupDirectories: {}
> ExplicitFolders: []
> Bundles: []
> TemplateFolders: []
> RootAssets: []
> ```

### [Command line](#tab/command-line)

If your IDE of choice isn't included on this page, you can create a new package from the terminal instead via the `dotnet` command.

```bash
dotnet new classlib --name MyGame.MyLibrary
```

You also need to add it to your solution.

```bash
dotnet sln add MyGame.MyLibrary
```

> [!WARNING]
> The created package **will be missing references to Stride libraries**. You will have to add them yourself.

> [!WARNING]
> Creating a package through the command line **won't create the `.sdpkg` file** nor the *> *Assets** and **Resources** folders. Make sure to create them yourself.
> 
> Here is a template for the `.sdpkg` file.
> 
> ```yaml
> !Package
> SerializedVersion: {Assets: 3.1.0.0}
> Meta:
>     Name: MyGame.MyLibrary
>     Version: 1.0.0
>     Authors: []
>     Owners: []
>     Dependencies: null
> AssetFolders:
>     - Path: !dir Assets
>     - Path: !dir Effects
> ResourceFolders:
>     - !dir Resources
> OutputGroupDirectories: {}
> ExplicitFolders: []
> Bundles: []
> TemplateFolders: []
> RootAssets: []
> ```

---

## Using your new package

After creating a new package, it won't be possible to use it anywhere in your game, because by default, it won't be used by any other package.

TODO: ADD VISUALISATION

To change that, you'll have to add it as a dependency to the package(s) that you want to use it.

For more information, visit the [dependencies page](dependencies.md#add-a-dependency).

## See also

* [Add or remove a platform](../../platforms/add-or-remove-platform.md)
* [Package properties](package-properties.md)
* [Dependencies](dependencies.md)
