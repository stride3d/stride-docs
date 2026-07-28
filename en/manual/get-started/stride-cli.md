# Stride CLI

<span class="badge text-bg-primary">Intermediate</span>

The **Stride CLI** is a tool that allows you to work with Stride through the command line. It isn't required in order to make games, but it can be a useful utility for developers that like using a terminal.

Stride CLI features:

* Manage installed versions of the engine
* Create new projects
* Update projects
* Launch Game Studio
* Run the asset compiler
* Can be a replacement for the Stride Launcher

> [!WARNING]
> Even though the CLI tool can be a replacement for the launcher, it is still recommended to [install it](../install-and-update/install-stride.md), as it also includes prerequisites for the engine.

## Installing Stride CLI

The CLI tool is available for all platforms via nuget and can be installed directly through the command line.

```bash
dotnet tool install -g stride.cli
```

After that, you might need to open and close your terminal for the `stride` command to become available. You can check if it's working by running the following:

```bash
stride --version
```

> [!WARNING]
> If the command still isn't working, you might need to update your system's `Path` environment variable to include the directory containing dotnet tools.

## Using Stride CLI

The CLI consists of many commands that provide different utilities. You can view all of them by running `stride` without any arguments.

```bash
stride
```

| Command | Description |
| :-- | :-- |
| `stride sdk` | Manage installed Stride versions (list, available, install, uninstall, update). For more information, visit the [Manage versions](#manage-versions) section. |
| `stride new` | Create a project from an installed Stride version's templates. For more information, visit the [Create a new project](#create-a-new-project) section. |
| `stride upgrade` | Upgrade a project to a newer installed Stride version. For more information, read [Update Stride — Updating your project with Stride CLI](../install-and-update/update-stride.md#updating-your-project-with-stride-cli). |
| `stride studio` | Open Game Studio. |
| `stride self` | Manage the Stride CLI itself. |
| `stride version` | Show the Stride CLI version and the resolved Stride version. |
| `stride legacy` | List commands kept for older (pre-4.4) Stride projects. |
| `stride asset` | Run the Stride Asset Compiler directly (advanced; arguments are forwarded). |

For more information about how to use a given command, use the `--help` flag. For example:

```bash
stride sdk --help
```

### Create a new project

Here's an example on how to create a new project on the latest version of the engine using the CLI.

```bash
stride sdk install # Install the latest version
stride new game -n ProjectX && cd ProjectX # Create a new project and enter it's directory
dotnet run --project ProjectX.Windows # Build and run the project
stride studio # Open Game Studio
```

[!INCLUDE [cli-new-project-parameters](../../includes/cli-new-project-parameters.md)]

For more detailed instructions, visit [Create a project — Create a project with Stride CLI](create-a-project.md#create-a-project-with-stride-cli).

### Manage versions

As mentioned previously, Stride CLI let's you do everything you could do with the launcher directly through the command line.

```bash
stride sdk install # Install the latest version
stride sdk update # Update all installed versions to the latest patch.
stride sdk uninstall 4.3 # Unintall Stride 4.3
```

[!INCLUDE [cli-manage-versions-command](../../includes/cli-manage-versions-commands.md)]

### Upgrade project to a newer version

The CLI can upgrade projects similarly to Game Studio. On top of changing the engine version, it will use additional utilities to modify assets and code, to ensure everything works properly.

```bash
stride upgrade # Upgrade the project to the latest version
stride upgrade --prerelease # Consider beta versions
stride upgrade 4.3 # Upgrade the project to 4.3
```

For more information visit [Update Stride — Updating your project with Stride CLI](../install-and-update/update-stride.md#updating-your-project-with-stride-cli).

## See also

* [Manage versions](../install-and-update/manage-versions.md)
* [Update Stride](../install-and-update/update-stride.md)
* [Create a project](create-a-project.md)
