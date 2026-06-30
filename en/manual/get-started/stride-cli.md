# Stride CLI

<span class="badge text-bg-primary">Intermediate</span>

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

## Installing Stride CLI

The CLI tool is available on nuget and can be installed directly through the command line.

```bash
dotnet tool install -g stride.cli
```

After that, you might need to open and close your terminal for the `stride` command to become available. You can check if it's working by running the following:

```bash
stride --version
```

> [!WARNING]
> If the command is still not working, you might need to update your system's `Path` environment variable to include the directory containing dotnet tools.

## Using Stride CLI

The CLI consists of many commands that provide different utilities. You can view all of them by running the `stride` command without any arguments.

```bash
stride
```

| Command | Description |
| :-- | :-- |
| `stride sdk` | Manage installed Stride versions (list, install, uninstall, update). For more information, read [Manage versions — Managing versions with Stride CLI](../install-and-update/manage-versions.md#managing-versions-with-stride-cli). |
| `stride new` | Create a project from an installed Stride version's templates. For more information, read [Create a project — Create a project with Stride CLI](create-a-project.md#create-a-project-with-stride-cli). |
| `stride upgrade` | Upgrade a project to a newer installed Stride version. For more information, read [Update Stride — Updating your project with Stride CLI](../install-and-update/update-stride.md#updating-your-project-with-stride-cli). |
| `stride studio` | Open Game Studio. |
| `self` | Manage the Stride CLI itself. |
| `version` | Show the Stride CLI version and the resolved Stride version. |
