# Building the source to Stride engine

??
WIP: make a page that is refernced by the readme.md on Stride: https://github.com/stride3d/stride




COPIED from readme.mdf.............

## Prerequisites

1. **Latest** [Git](https://git-scm.com/downloads) **with Large File Support** selected in the setup on the components dialog.
2. [DotNet SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
    - Run `dotnet --info` in a console or powershell window to see which versions you have installed
3. [Visual Studio 2022](https://www.visualstudio.com/downloads/) with the following workloads:
    - `.NET desktop development` with `.NET Framework 4.7.2 targeting pack`
    - `Desktop development with C++` with
        - `Windows 10 SDK (10.0.18362.0)` (it's currently enabled by default but it might change)
        - `MSVC v143 - VS2022 C++ x64/x86 build tools (v14.30)` or later version (should be enabled by default)
        - `C++/CLI support for v143 build tools (v14.30)` or later version **(not enabled by default)**
    - Optional (to target iOS/Android): `Mobile development with .NET` and `Android SDK setup (API level 27)` individual component, then in Visual Studio go to `Tools > Android > Android SDK Manager` and install `NDK` (version 19+) from `Tools` tab.
4. **[FBX SDK 2019.0 VS2015](https://www.autodesk.com/developer-network/platform-technologies/fbx-sdk-2019-0)**

## Build Stride

1. Open a command prompt, point it to a directory and clone Stride to it: `git clone https://github.com/stride3d/stride.git`
    - Note that when you use GitHub -> Code -> Download ZIP, this doesn't support Large File Support ```lfs```, make sure you use the command above or that your git client does it for you
2. Open `<StrideDir>\build\Stride.sln` with Visual Studio 2022 and build `Stride.GameStudio` in the 60-Editor solution folder (it should be the default startup project) or run it from VS's toolbar.
    - Optionally, open and build `Stride.Android.sln`, `Stride.iOS.sln`, etc.

## Build Stride without Visual Studio

1. Install [Visual Studio Build Tools](https://aka.ms/vs/17/release/vs_BuildTools.exe) with the same prerequisites listed above
2. Add MSBuild's directory to your system's *PATH* (ex: `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\MSBuild\Current\Bin`)
3. Open a command prompt, point it to a directory and clone Stride to it: `git lfs clone https://github.com/stride3d/stride.git`
4. Navigate to `/Build` with the command prompt, input `msbuild /t:Restore Stride.sln` then `compile.bat`

If building failed:
* If you skipped one of the `Prerequisites` thinking that you already have the latest version, update to the latest anyway just to be sure.
* Visual Studio might have issues properly building if an anterior version is present alongside 2022. If you want to keep those version make sure that they are up to date and that you are building Stride through VS 2022.
* Your system's *PATH* should not contain older versions of MSBuild (ex: `...\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin` should be removed)
* Some changes might require a system reboot, try that if you haven't yet.
* Make sure that Git, Git LFS and Visual Studio can access the internet.
* Close VS, clear the nuget cache (in your cmd `dotnet nuget locals all --clear`), delete the hidden `.vs` folder inside `\build` and the files inside `bin\packages`, kill any msbuild and other vs processes, build the whole solution then build and run GameStudio.

Do note that test solutions might fail but it should not prevent you from building `Stride.GameStudio`.