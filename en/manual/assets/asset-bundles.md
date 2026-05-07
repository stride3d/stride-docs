# Asset bundles

After compilation, assets are turned into **asset bundles**. By default, only one asset bundle is created, but this can be changed in order to, for example: separate DLC content into it's own bundle, so that it could be sold separately.

When the game starts, Stride only loads the `default` bundle. Other bundles need to be loaded manually through code.

## Create an asset bundle

> [!NOTE]
> Currently, this has to be done manually.

In order to create new asset bundles, you'll have to modify the `.sdpkg` file of a project package. For more information about project package properties visit [this page](../files-and-folders/project-packages/package-properties.md).

Bundles are defined under the `Bundle` property. Each bundle has a `Name`, a list of `Dependencies` on other bundles and a list of `Selectors` that specify which assets belong to the bundle.

There are 2 types of selectors:
* 🏷️ **Tag selector** - selects assets that have at least one of the specified `Tags`.
* 📁 **Path selector** - selects assets based on the provided list of `Paths`. Filters work similarly to the [`.gitignore` filtering convention](https://git-scm.com/docs/gitignore#_pattern_format) with a few exceptions: `!` (negations), `[]` (groups) and `#` (comments). This means that you can select **individual files**, **entire folders** or **files with a specific extension**.

Here's an example configuration:

```yaml
Bundles:
 - Name: CustomBundleA
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag1
        - MyTag2
 - Name: CustomBundleB
   Dependencies:
    - CustomBundleA
   Selectors:
    - !TagSelector
      Tags: 
        - MyTag3
        - MyTag4
    - !PathSelector
      Paths:
        - folder1/
        - /folder2/
        - *.sdtex
        - folder3/*.sdscene
```

> [!CAUTION]
> If any of your custom bundles are **empty**, Stride will **fail to build** the game.

### Root assets

It's important to note that assets from optional bundles (such as DLC content) **shouldn't be referenced by assets from the default bundle**. If the other bundle is missing, Stride will fail when trying to load it's assets.

However, if a bundle's assets are unreferenced, Stride will not compile them. To prevent this, make sure to **mark the appropriate assets (such as scenes) as root**. This will allow you to access the bundle's assets in code.

For more information about root assets, visit the [asset compilation page](asset-compilation.md).

### Compiling behaviour

Stride tries to place assets in the most appropriate bundle.

1. Assets not defined in `Bundles` are placed in the **default** bundle, which is loaded automatically when the game starts.
2. If an asset is selected by **BundleA** and **BundleB**, but **BundleB** has a dependency on **BundleA**, that asset is placed only in **BundleA**.
3. If an asset is selected by **BundleA** and **BundleB** and both of them aren't dependent on each other, that asset is placed in both of them.

TODO: VISUALIZATION

> [!NOTE]
> Loading two bundles with the same asset won't result in a duplicate!

TODO: CHECK ABOVE

## Loading bundles

Stride **automatically loads the default bundle**. However, other bundles need to be manually loaded through code.

```csharp
await Content.FileProvider.ObjectDatabase.LoadBundle("NameOfBundle");
```

TODO: CHECK IF DEPENDENCIES ARE LOADED AUTOMATICALLY

Assets can then be loaded via the **content system**. For more information, visit the [use an asset in code page](use-an-asset-in-code.md).

## Bundle location

Bundles are located in `data/db/bundles` next to the built executable. You can recognize them by their name.

TODO: VISUALIZATION

> [!NOTE]
> Bundles tend to be split into multiple files that start with the same name.
> 
> TODO: VISUALIZATION (WHY NOT)

## See also

* [Asset compilation](asset-compilation.md)
* [Use an asset in code](use-an-asset-in-code.md)
