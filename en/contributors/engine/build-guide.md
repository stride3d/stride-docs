# Building Stride from source — beginner guide

This guide will walk you through how to build Stride from its source code.

## Prerequsities

1. **Latest [Git](https://git-scm.com/downloads)** — the Windows installer includes Git LFS by default; make sure it stays enabled. For convenience, you can also use a UI client like [GitExtensions](https://gitextensions.github.io/).
2. **[Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)** (Community edition is free), with these two workloads:
    * **.NET desktop development** (bundles the .NET 10 SDK)
    * **Desktop development with C++**

> [!NOTE]
> For a more detailed list of dependencies, check out [the detailed build guide](architecture/build/index.md#detailed-prerequisites).

## Download the source code

You can clone the source code using a GUI git client or from the command line:

1. (Recommended) **Fork the engine's [source code](https://github.com/stride3d/stride)** in order to be able to contribute back in the future.

    ![The fork button is located at the top of the repository page, next to its name.](media/stride-fork.webp)

2. **Copy the Git URL** of the repository.

    ![The git URL is located under the green "Code" dropdown on the right side at the top of the repository page.](media/stride-copy-url.webp)

    > [!WARNING]
    > **Do NOT use Code > Download ZIP** option, as this won't include the LFS files.

3. **Clone the repository** using a Git GUI client or through command line:

    ```bash
    git clone GitUrlHere
    ```

    This will create a new folder in your current directory containing the engine's source code.

    > [!NOTE]
    > If you notice that the samples folder **weighs less than 200MB,** it means that the **LFS files weren't pulled successfully.** To fix this, run the following command:
    >
    > ```bash
    > git lfs pull
    > ```

## Solution files

**The main `Stride.slnx` solution file** is located in the root of the source directory and contains every project used for building the engine and its tools.

Additionally, there are these `.slnx` files:

* `samples/StrideSamples.slnx` - contains all sample projects
  * Each sample also has it's own `.slnx` solution file
* `sources/launcher/Stride.Launcher.slnx` - contains projects for the launcher and [Stride CLI](../../manual/get-started/stride-cli.md)
* `sources/tools/Stride.VisualStudio.slnx` - contains projects for the Stride Visual Studio extension

There are also `.slnf` files in the `sources/` directory, which are used by the CI for running tests.

## Building

### Building with Visual Studio

Build the `Stride.GameStudio` project in the `60-Editor/Wpf` solution folder (it should be the default startup project) or run it directly from Visual Studio's toolbar.

![The build and run button is located in the top toolbar (look for the green play icon).](media/vs-build-gamestudio.webp)

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
