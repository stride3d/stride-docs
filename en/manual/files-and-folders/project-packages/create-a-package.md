# Create a package

In this guide, we will dive into how to create custom project packages.

**For .NET developers:** a Stride project package is a standard C# project.

## Create a platform package

![](media/platform-packages.webp)

Platform packages are created when adding a platform to the project. Steps on how to do that are located on the [add or remove a platform page](../../platforms/add-or-remove-a-platform.md).

## Create a standard package

### [Game Studio](#tab/game-studio)

To create a new platform package, in the **Solution explorer** panel right click on your solution and select **New project...**

![](media/game-studio-new-package.webp)

You can select from one of two templates:
* **New game** - creates a new project package for a new game, along with additional platform packages for selected targets.
* **Code library** - a standard empty project package that is meant to be used by other packages for code and assets.

### [Visual Studio](#tab/visual-studio)

You can create a new platform package in the **Solution Explorer** panel by right clicking on the solution and selecting **Add > New Project...**

![](media/visual-studio-new-package.webp)

You will be prompted to select one of the templates provided by Visual Studio. Select **Class Library** for the C# language.

![](media/visual-studio-new-package-template.webp)

Give the package a name and then continue through the steps until the package is created.

> [!NOTE]
> Make sure to save!

> [!WARNING]
> The created project package **will be missing references to Stride libraries**! You will have to add them yourself.

> [!WARNING]
> Creating a project package through Visual Studio **won't create the `.sdpkg` file** nor the **Assets** and **Resources** folders! Make sure to create them yourself.
> 
> ![](media/visual-studio-new-package-created.webp)
> 
> Here is a template for the `.sdpkg` file. Change **MyGame.MyLibrary** to the name of your package. For more information on how to configure this file, visit the [package properties page](package-properties.md).
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
> 
> To properly support asset compilation, add a reference to the `Stride.Core.Assets.CompilerApp` package.
> 
> ```xml
> <PackageReference Include="Stride.Core.Assets.CompilerApp" Version="ENGINE VERSION HERE" IncludeAssets="build;buildTransitive" />
> ```

### [Command line](#tab/command-line)

If your IDE of choice isn't included on this page, you can create a new project package from the terminal instead via the `dotnet` command.

```bash
dotnet new classlib --name MyGame.MyLibrary
```

You will also need to add it to your project's solution file.

```bash
dotnet sln add MyGame.MyLibrary
```

> [!WARNING]
> The created project package **will be missing references to Stride libraries**! You will have to add them yourself.

> [!WARNING]
> Creating a project package through the command line **won't create the `.sdpkg` file** nor the **Assets** and **Resources** folders! Make sure to create them yourself.
> 
> Here is a template for the `.sdpkg` file. Change **MyGame.MyLibrary** to the name of your package. For more information on how to configure this file, visit the [package properties page](package-properties.md).
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
> 
> To properly support asset compilation, add a reference to the `Stride.Core.Assets.CompilerApp` package.
> 
> ```xml
> <PackageReference Include="Stride.Core.Assets.CompilerApp" Version="ENGINE VERSION HERE" IncludeAssets="build;buildTransitive" />
> ```

---

## Using your new project package

By default, all code and assets in a newly created project package won't be accessible from any other package, due to not being referenced.

TODO: ADD VISUALISATION

To change that, you'll have to add it as a dependency to the package(s) that you want to use it.

For more information, visit the [dependencies page](dependencies.md#add-a-dependency).

## See also

* [Add or remove a platform](../../platforms/add-or-remove-a-platform.md)
* [Package properties](package-properties.md)
* [Dependencies](dependencies.md)
