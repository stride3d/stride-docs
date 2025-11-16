# Building source on Windows

## Prerequisites

1. **Latest [Git](https://git-scm.com/downloads)** with **Large File Support** selected during setup. For convenience, you might also use a Git UI client like [GitExtensions](https://gitextensions.github.io/).
2. **[.NET 10.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)**
   - Run `dotnet --info` in a console or PowerShell window to see which versions you have installed.
3. **[Visual Studio 2026](https://visualstudio.microsoft.com/downloads/)** (the Community edition is free), with the following workloads. Follow this link if you would rather use [a different IDE or the command line](#build-stride-without-visual-studio).
   - **.NET desktop development** with **.NET Framework 4.7.2 targeting pack** *(should be enabled by default)*
   - **Desktop development with C++** with:
     - **Windows 11 SDK (10.0.22621.0)** or a later version *(should be enabled by default)*
     - **MSVC v143 - VS 2022 C++ x64/x86 build tools (Latest)** *(should be enabled by default)*
     - **MSVC v143 - VS 2022 C++ ARM64/ARM64EC build tools (Latest)** *(not enabled by default, click Individual components tab to select or search)*
     - **C++/CLI support for v143 build tools (Latest)** *(not enabled by default)*
   - *Optional* (to target iOS/Android): **.NET Multi-platform App UI development** and the **Android SDK setup** individual component (enabled by default). Then, in Visual Studio, go to `Tools > Android > Android SDK Manager` and install **NDK** (version 20.1+) from the `Tools` tab.
   - *Optional* (to build the VSIX package): **Visual Studio extension development**

> [!NOTE]
> The installation of Visual Studio with the required components may require up to **19 GB of disk space**, depending on your system and selected components.

> [!WARNING]
> If this is your first time installing the .NET SDK, you might need to restart your system after the installation so that the system can recognize the new environment variables.

## Build Stride

- [Visual Studio 2026 instructions](building-source-windows-visual-studio.md)
- [Rider or Visual Studio Code instructions](building-source-windows-other-ide.md)