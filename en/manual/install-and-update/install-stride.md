# Install Stride

<span class="badge text-bg-primary">Beginner</span>

## Introduction

If you want to **create games using Stride**, this guide provides the installation steps you'll need to follow.

If you're interested in **building the Stride engine from source** or **contributing to its development**, please visit the [Stride GitHub repository](https://github.com/stride3d/stride) for instructions on how to build from source and contribute to the project.

## Installation Steps

1. Download the Stride Installer from the [Stride website](http://stride3d.net/download/).
 
2. Run the installer by double-clicking the **StrideSetup.exe** file and follow the on screen instructions until the **Stride Launcher** is installed.

3. Open the launcher.

4. The Stride Launcher prompts you to install the latest version of Stride.

    ![No version installed](media/stride-launcher-install-latest-version-prompt.webp)

    Click **Yes** to install the latest version.

5. (Optional) The Stride Launcher asks if you want to install the Visual Studio integration. Installing it isn't mandatory and it can be done later with the launcher. For more information, visit [this section](#visual-studio-integration).

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.webp)

    Click **Yes** to install the integration, or **No** to skip.

6. Stride is now installed and ready to use.

    ![Stride ready to use](media/stride-launcher-ready.webp)

## Installation Location

The engine and it's editor Game Studio are a [NuGet package](https://learn.microsoft.com/en-us/nuget/what-is-nuget), which is the packaging format used in C# projects. This means that **Stride's installation location is managed by the NuGet package manager** and **can't be easily changed by the user**.

Changing the installation location is possible, but it is outside of the scope of this page.

## Visual Studio integration

The Visual Studio integration is an optional extension for Visual Studio.

- **🟩 What it does**: provides syntax highlighting to shaders in Visual Studio.
- **🟥 What it doesn't do**: provide C# syntax highlighting for Stride (that works without the extension).

The extension can be installed via the launcher, by navigating to the **Visual Studio extension** section.

![Image of the "Visual Studio extension" section in the Stride Launcher.](media/vs-extension.webp)

## Troubleshooting

### `Could not find a compatible version of MSBuild.` or `Path to dotnet executable is not set.`

If you click **Start** and see one of the above error messages, close the Stride Launcher and restart it. This issue is caused by the Stride Launcher not detecting the .NET SDK installation. Restarting the Stride Launcher should resolve the issue. Alternatively, restart your computer.

Example error: ![First launch error](media/stride-launcher-first-time-after-installation-error.webp)

### Stride still refuses to open

If you are still having issues with getting Stride to run, see [Troubleshooting — Stride doesn't run](../troubleshooting/stride-doesnt-run.md).
