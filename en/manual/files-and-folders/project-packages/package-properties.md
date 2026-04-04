# Package properties

Every package contains it's own set of properties, that can be customized.

> [!NOTE]
> Currently there is no way to change package properties via **Game Studio** - you have to **modify the `.sdpkg` file directly**.

| Property | Description |
| :-- | :-- |
| Meta | Package metadata (name, version, authors, etc). |
| AssetFolders | List of directory paths that contain assets. |
| ResourceFolders | List of directory paths that contain resources. |
| OutputGroupDirectories | A dictionary containing a custom output directory for each specified bundle name. |
| ExplicitFolders (currently broken) | List of directory paths that are meant to always be loaded by **Game Studio**, even if they do not contain any assets. |
| Bundles | List of bundles and their metadata. For more information read [Asset Bundles](../../engine/assets/asset-bundles.md). |
| TemplateFolders | List of directory paths containing custom templates in the `.sdtpl` format. For more information read [Custom Assets](../../scripts/custom-assets.md#adding-a-section-for-the-add-asset-menu-inside-the-editor). |
| RootAssets | List of root assets (assets that will always be included with the build). |

## Example

Here is an example `.sdpkg` file.

```yaml
!Package
SerializedVersion: {Assets: 3.1.0.0}
Meta:
    Name: MyGame
    Version: 1.0.0
    Authors: []
    Owners: []
    Dependencies: null
AssetFolders:
    - Path: !dir Assets
    - Path: !dir Effects
ResourceFolders:
    - !dir Resources
OutputGroupDirectories: {}
ExplicitFolders: []
Bundles: []
TemplateFolders: []
RootAssets: []
```
