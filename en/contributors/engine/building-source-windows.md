# Building the source to Stride engine

## Prerequisites

1. **Latest [Git](https://git-scm.com/downloads)** with **Large File Support** selected during setup. For convenience, you might also use a Git UI client like [GitExtensions](https://gitextensions.github.io/).
2. **[.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)**
   - Run `dotnet --info` in a console or PowerShell window to see which versions you have installed.
3. **[Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)** (the Community edition is free) with the following workloads:
   - **.NET desktop development** with **.NET Framework 4.7.2 targeting pack** (should be enabled by default)
   - **Desktop development with C++** with:
     - **Windows 11 SDK (10.0.22621.0)** or a later version (should be enabled by default)
     - **MSVC v143 - VS2022 C++ x64/x86 build tools (Latest)** (should be enabled by default)
     - **C++/CLI support for v143 build tools (Latest)** *(not enabled by default)*
   - *Optional* (to target iOS/Android): **.NET Multi-platform App UI development** and the **Android SDK setup** individual component (enabled by default). Then, in Visual Studio, go to `Tools > Android > Android SDK Manager` and install **NDK** (version 20.1+) from the `Tools` tab.
   - *Optional* (to build the VSIX package): **Visual Studio extension development**

> [!NOTE]
> The installation of Visual Studio with the required components may require up to **14 GB of disk space**, depending on your system and selected components.

> [!WARNING]
> If this is your first time installing the .NET SDK, you might need to restart your system after the installation so that the system can recognize the new environment variables.

## Build Stride with Visual Studio 2022
Here are the steps to build Stride with Visual Studio. If you do not have or want to use Visual Studio, see [building with other IDEs](building-source-windows-other-ide.md)

1. **Clone the repository** using a Git UI client or from the command line:
   ```bash
   git lfs clone https://github.com/stride3d/stride.git
   ```
2. **Open the solution:**
   - Open `<StrideDir>\build\Stride.sln` with Visual Studio 2022. 
   - Build the `Stride.GameStudio` project in the `60-Editor` solution folder (it should be the default startup project) or run it directly from Visual Studio's toolbar.
   - _Optionally_, open and build `Stride.Android.sln`, `Stride.iOS.sln`, etc.

> [!WARNING]
> **Do NOT use GitHub -> Code -> Download ZIP** option, as this won't include the LFS files.

### If building failed
* If you skipped one of the `Prerequisites` thinking that you already have the latest version, update to the latest anyway just to be sure.
* Visual Studio might have issues properly building if an anterior version is present alongside 2022. If you want to keep those version make sure that they are up to date and that you are building Stride through VS 2022.
* Your system's *PATH* should not contain older versions of MSBuild (ex: `...\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin` should be removed)
* Some changes might require a system reboot. Try that if you haven't yet, for example, if you see these errors:
  * `Could not find a compatible version of MSBuild.`
  * `Path to dotnet executable is not set.`
* Make sure that Git, Git LFS and Visual Studio can access the internet.
* Close VS, clear the nuget cache (in your cmd `dotnet nuget locals all --clear`), delete the hidden `.vs` folder inside `\build` and the files inside `bin\packages`, kill any msbuild and other vs processes, build the whole solution then build and run GameStudio.

Do note that test solutions might fail but it should not prevent you from building `Stride.GameStudio`.

## Other IDEs
You are not required to use Visual Studio to build the Stride engine with Visual Studio. You can also build entirely from command line or other IDE's such as [Rider or Visual Studio Code](building-source-windows-other-ide.md).
