# Asset bundles

When assets get compiled with the final game, they are turned into **asset bundles**. By default, only one asset bundle is created, but this can be changed to for example: split off DLC content into a separate bundle, so that it could be sold separately.

When an application starts Stride only loads the `default` bundle. Other bundles need to be loaded through code.

## Create an asset bundle

> [!NOTE]
> Currently, this has to be done manually.

TODO: TEST IF YOU CAN DO THIS IN BASE PROJECT PACKAGE AND NOT PLATFORM

In order to create new asset bundles, you'll have to modify the `.sdpkg` file of a project package. For more information about project package properties visit [this page](../files-and-folders/project-packages/package-properties.md).

Bundles are defined under the `Bundle` property. Each bundle has a `Name`, a list of `Dependencies` on other bundles and a list of `Selectors` that specify which assets belong to the bundle.

There are 2 types of selectors:
* 🏷️ **Tag selector** - selects assets that have at least one of the specified tags in `Tags`.
* 📁 **Path selector** - selects assets based on the provided list of paths in `Paths`. Filters work similarly to the [`.gitignore` filtering convention](https://git-scm.com/docs/gitignore#_pattern_format) with a few exceptions: `!` (negate), `[]` (groups) and `#` (comments). This means that you can select **individual files**, **entire folders** or **files with a specific extension**.

Here's an example showing how to create asset bundles:

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
        - *.bin
        - folder3/*.xml
```

### Root assets

It's important to note that assets contained in custom asset bundles **shouldn't be referenced by the base game**, as Stride will fail to load them if their asset bundle is unavailable. However, doing this will result in Stride not compiling them in any bundle, due to seeing them as being unused.

To make sure this doesn't happen, make sure to **mark the appropriate assets as root** (such as scene assets), to make it possible to load them through code.

For more information about root assets, visit the [asset compilation page](asset-compilation.md).

### Compiling behaviour

When compiling, assets are placed in the most appropriate bundle.

1. Assets not defined in `Bundles` are placed in the **default** bundle, which is loaded automatically
2. If an asset is needed by **BundleA** and **BundleB**, but **BundleB** has a dependency on **BundleA**, that asset is placed only in **BundleA**
3. If an asset is needed by **BundleA** and **BundleB** and both of them aren't dependent on each other, that asset is placed in both of them.

TODO: VISUALIZATION

> [!NOTE]
> Loading two bundles with the same asset won't result in a duplicate!

TODO: CHECK ABOVE

## Loading bundles

Stride **automatically loads the default bundle**. However other bundles need to be manually loaded through code.

```csharp
Content.DatabaseFileProvider.ObjectDatabase.LoadBundle("NameOfBundle");
```

TODO: CHECK IF THIS THROW AN ERROR IF THE BUNDLE ISN'T PRESENT

Then, assets can be loaded via the **content system**. For more information, visit the [assets in code page](assets-in-code.md).

## Bundle location

Bundles are located in `data/db/bundles` next to the built executable.

TODO: VISUALIZATION

TODO: CHECK THE ACTUAL RESULT IF BUNDLES ARE CONTAINED IN MULTIPLE FILES

TODO: CHECK IF YOU CAN REMOVE A BUNDLE WITHOUT STRIDE COMPLAINING
