# Build Stride with Visual Studio 2026

Here are the steps to build Stride with Visual Studio. If you do not have or want to use Visual Studio, see [building with other IDEs](building-source-windows-other-ide.md).

1. **Clone the repository** using a Git UI client or from the command line:
   ```bash
   git lfs clone https://github.com/stride3d/stride.git
   ```
2. **Open the solution:**
   - Open `<StrideDir>\build\Stride.sln` with Visual Studio. 
   - Build the `Stride.GameStudio` project in the `60-Editor` solution folder (it should be the default startup project) or run it directly from Visual Studio's toolbar.
   - _Optionally_, open and build `Stride.Android.sln`, `Stride.iOS.sln`, etc.

> [!WARNING]
> **Do NOT use GitHub -> Code -> Download ZIP** option, as this won't include the LFS files.

## If building failed

* Some errors for test projects are normal, GameStudio will start anyway.
* The Visual Studio extension might fail to build if you are missing the [Visual Studio SDK](https://learn.microsoft.com/en-us/visualstudio/extensibility/installing-the-visual-studio-sdk?view=visualstudio), but Game Studio will start anyway.
* If you skipped any of the **Prerequisites** thinking you already have the latest version, please update to the latest to be sure.
* Visual Studio might have issues building properly if an older version is present alongside 2026. If you want to keep those versions, ensure they are up to date and that you are building Stride using Visual Studio 2026.
* Your system's `PATH` should not contain older versions of MSBuild (e.g., `...\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin` should be removed).
* Some changes might require a system reboot. Try that if you haven't yet, for example, if you see these errors:
  * `Could not find a compatible version of MSBuild.`
  * `Path to dotnet executable is not set.`
* Ensure that Git, Git LFS, and Visual Studio can access the internet.
* Close Visual Studio, clear the NuGet cache (`dotnet nuget locals all --clear`), delete the hidden `.vs` folder inside `\build` and the files inside `bin\packages`, kill any `msbuild` and other Visual Studio processes, then build the whole solution and run GameStudio.

> [!WARNING]
> Test solutions might fail, but this should not prevent you from building `Stride.GameStudio`.

## Other IDEs

You are not required to use Visual Studio to build the Stride engine with Visual Studio. You can also build entirely from command line or other IDE's such as [Rider or Visual Studio Code](building-source-windows-other-ide.md).
