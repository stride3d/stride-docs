# Building Stride from source — beginner guide

This guide will walk you through how to build Stride from its source code.

## Prerequsities

1. **Latest [Git](https://git-scm.com/downloads)** with **Large File Support** selected during setup. For convenience, you might also use a Git UI client like [GitHub Desktop](https://desktop.github.com/download/).

2. **[.NET 10.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)**

    > [!TIP]
    > Run `dotnet --info` in a console or PowerShell window to see which versions you have installed.

    > [!WARNING]
    > If this is your first time installing the .NET SDK, you might need to restart your system after the installation so that the system can recognize the new environment variables.

3. **[Visual Studio build tools](https://aka.ms/vs/stable/vs_BuildTools.exe)** (you can skip this if you're using Visual Studio and follow the steps below)

If you want to work with Stride's code with **Visual Studio:**

* Make sure you have the **latest version** of [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)
* Make sure **have the following workloads installed:**
  * .NET desktop development workload (defaults are sufficient)
  * Desktop development with C++ workload (defaults are sufficient)
* Optional components:
  * **MSVC Build Tools for ARM64/ARM64EC (Latest)** - required when building for Windows ARM64
  * **.NET Multi-platform App UI development + Android NDK 20.1+** (via Tools > Android > Android SDK Manager) - required when targeting Android/iOS
  * **Visual Studio extension development + .NET Framework 4.7.2 targeting pack** - required when building the Stride Visual Studio extension

## Download the source code

You can clone the source code using a GUI git client or from the command line:

1. (Recommended) Fork the engine's source code in order to be able to contribute back in the future.

    TODO: IMAGE

2. Copy the Git URL of the repository.

    TODO: IMAGE

3. Clone the repository using a Git GUI client or through command line:

    ```bash
    git clone GitUrlHere
    ```

    This will create a new folder in your current directory containing the engine's source code.

    > [!WARNING]
    > **Do NOT use GitHub > Code > Download ZIP** option, as this won't include the LFS files.

    > [!NOTE]
    > If you notice that LFS files are missing, run the following command: 
    >
    > ```bash
    > git lfs pull
    > ```

## Solution files

The main `Stride.slnx` solution file is located in the root of the source directory and contains every project used for building the engine and its tools.

Additionally, there are these `.slnx` files:

* `samples/StrideSamples.slnx` - contains all sample projects
  * Each sample also has it's own `.slnx` solution file
* `sources/launcher/Stride.Launcher.slnx` - contains projects for the launcher and [Stride CLI](../../manual/get-started/stride-cli.md)

There are also `.slnf` files in the `sources/` directory which contains solution filters used by the CI for running tests.

## Building

### Building with Visual Studio

Build the `Stride.GameStudio` project in the `60-Editor` solution folder (it should be the default startup project) or run it directly from Visual Studio's toolbar.

### Building with command line

In order to build the engine and the editor, run the following command:

```bash
dotnet build Stride.slnx
```

You can also build and run the editor directly using the following command:

```bash
dotnet run --project sources/editor/Stride.GameStudio
```

## Additional properties

While running the build command, you can set certain parameters in order to change how Stride gets compiled.

```bash
dotnet build Stride.slnx -p:MyProperty=MyValue
```

Here's a list of some of those parameters:

<!-- Taken from https://github.com/stride3d/stride/blob/master/sources/sdk/Stride.Build.Sdk/Sdk/Stride.Local.props.template -->

| Parameter | Description |
| :-- | :-- |
| `StrideGraphicsApiDependentBuildAll` | When true, all graphics APIs get built instead of only the OS default. |
| `StrideGraphicsApis` | Specifies which Graphics APIs should be built, each value is separated by `;`. |
| `StridePublicVersion` | Sets the version of Stride that the build will use (e.g. `4.4.1`). |
| `StridePackContentTemplates` | When true, samples get packed with the build. |

> [!TIP]
> These properties can also be configured by modifying the `/build/Stride.Local.props` file.

## Troubleshooting & further reading

For more information and troubleshooting tips, check out [the detailed build guide](architecture/build/index.md).
