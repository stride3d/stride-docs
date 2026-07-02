# Manage versions

<span class="badge text-bg-primary">Beginner</span>

Different versions of the engine can be managed using the **Stride Launcher**.

> [!NOTE]
> The instructions provided here can be used as a general guide for updating to any new version of Stride.

## Versioning scheme

Versions follow the formula `major.minor.patch`.

## Changing the version

You can select a different version of the engine by clicking on one under **Stride versions**.

To change the patch number of a version (the last part in a version string), click the dropdown menu next to it.

![](media/stride-launcher-change-version.webp)

## Installing a version

To install a specific version of the engine:

1. Select the version you want to install (see [changing the version](#changing-the-version)).
2. Press the install button.

![Picture of the install button](media/stride-launcher-download.webp)

## Uninstalling a version

To remove a specific installed version of the engine:

1. Select the version you want to get rid of (see [changing the version](#changing-the-version)).
2. Click the uninstall button.

![Picture of the uninstall button](media/stride-launcher-delete.webp)

## Managing versions with Stride CLI

The **Stride CLI** let's you install, uninstall and update versions of the engine directly through the command line. For steps on how to install it, read [Stride CLI](../get-started/stride-cli.md).

| Command | Description |
| :-- | :-- |
| `stride sdk install` | Install the latest version of the engine. |
| `stride sdk install VERSION` | Install a specific version of the engine. Version patch number is optional. |
| `stride sdk list` | List all installed versions. |
| `stride sdk update` | Update all installed versions of the engine to the latest patch. |
| `stride sdk update VERSION` | Update a specific installed version of the engine to the latest patch. Version patch number is optional. |
| `stride sdk uninstall VERSION` | Uninstall a specific version of the engine. |
| `stride studio` | Launch Game Studio. |

> [!NOTE]
> For many commands, the patch version can be skipped (e.g. `4.3`).
