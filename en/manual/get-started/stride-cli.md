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
> Even though the CLI tool removes the need for the launcher, it's still recommended to [install it](../install-and-update/install-stride.md), as it also installs prerequsities for the engine.

## Install the CLI tool

The CLI tool is available on nuget and can be installed directly through the command line.

```bash
dotnet tool install -g Stride.Cli
```

After that you might need to open and close your terminal for the `stride` command to become available. You can check if it's working by running the following command:

```bash
stride --version
```

> [!WARNING]
> If the command is still not working, you might need to update your Path environment variable in your system to include the path to dotnet tools. Steps on how to do this differ between operating systems and explaining this is outside of the scope of this page.

## Manage versions

Here's a list of commands that let you manage different versions of the engine on your machine:

| Command | Description |
| :-- | :-- |
| `stride install` | Installs the latest version of the engine. |
| `stride install VERSION` | Installs a specific version of the engine. Version patch number is optional. |
| `stride list` | List all installed versions. |
| `stride update` | Update all installed versions of the engine to the latest patch. |
| `stride update VERSION` | Update a specific installed version of the engine to the latest patch. Version patch number is optional. |
| `stride uninstall VERSION` | Uninstall a specific version of the engine. |

> [!NOTE]
> Stride versions are structured in the following way: `major.minor.patch`. For many commands, the patch version can be skipped (e.g. `4.3`).

## Create a new project

New projects are created from templates that are built into the engine. The most basic and most commonly used template is named `game`. You can view a list of all templates with the following command:

```bash
stride new list
```

New projects can then be created from the template with the following command:

```bash
stride new NameOfTemplate -n NameOfGame
```

Every template can have an additional list of parameters. To view them, pass the `--help` parameter to the command.

```bash
stride new NameOfTemplate --help
```

> [!NOTE]
> You can create new projects from the command line without the Stride CLI.
> 
> ```bash
> dotnet new install Stride.Templates.Games # Install the templates
> dotnet new list --tag stride              # List all installed templates for stride
> dotnet new stride-game --help             # Display all parameters for a template
> dotnet new stride-game -n NameOfGame      # Create a new project from a template
> ```

## Launch Game Studio

You can Game Studio in your current folder with the following command:

```bash
stride studio
```

## Miscalenious commands

| Command | Description |
| :-- | :-- |
| `stride version` | Displays the version of the CLI tool + the version of the resolved project. |
| `stride asset build ./NameOfGame.slnx` | Runs the Asset Compiler (all arguments are forwarded). |
| `stride self update` | Updates the CLI tool to the latest version via `dotnet tool update` |
