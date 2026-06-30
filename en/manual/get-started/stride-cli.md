# Stride CLI

The **Stride CLI** is a tool that allows you to work with Stride through the command line. It isn't required in order to make games, but it can be a useful utility for developers that like using a terminal.

Stride CLI features:

* Manage different versions of the engine
* Create new projects
* Update projects
* Launch Game Studio without the launcher
* Run the asset compiler
* Can be a replacement for the Stride Launcher

> [!WARNING]
> Even though the CLI tool removes the need for the launcher, it is still recommended to [install it](../install-and-update/install-stride.md), as it also includes prerequisites for the engine.

## Install the CLI tool

The CLI tool is available on nuget and can be installed directly through the command line.

```bash
dotnet tool install -g stride.cli
```

After that, you might need to open and close your terminal for the `stride` command to become available. You can check if it's working by running the following command:

```bash
stride --version
```

> [!WARNING]
> If the command is still not working, you might need to update your system's `Path` environment variable to include the directory containing dotnet tools.

## Manage versions

Here's a list of commands that let you manage different versions of the engine on your machine:

| Command | Description |
| :-- | :-- |
| `stride sdk install` | Installs the latest version of the engine. |
| `stride sdk install VERSION` | Installs a specific version of the engine. Version patch number is optional. |
| `stride sdk list` | List all installed versions. |
| `stride sdk update` | Update all installed versions of the engine to the latest patch. |
| `stride sdk update VERSION` | Update a specific installed version of the engine to the latest patch. Version patch number is optional. |
| `stride sdk uninstall VERSION` | Uninstall a specific version of the engine. |

> [!NOTE]
> Stride versions are structured in the following way: `major.minor.patch`. For many commands, the patch version can be skipped (e.g. `4.3`).

## Create a new project

For information on how to create a new project with the CLI, read [Create a project — Create a project with Stride CLI](create-a-project.md#create-a-project-with-stride-cli).

## Launch Game Studio

You can open your project with Game Studio using the following command:

```bash
stride studio
```

## Miscalenious commands

| Command | Description |
| :-- | :-- |
| `stride version` | Displays the version of the CLI tool + the version of the resolved project. |
| `stride asset` | Forwards commands to the Asset Compiler. |
| `stride self update` | Updates the CLI tool to the latest version via `dotnet tool update` |
