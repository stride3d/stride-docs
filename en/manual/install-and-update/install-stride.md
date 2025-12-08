# Install Stride

<span class="badge text-bg-primary">Beginner</span>

## Introduction

If you want to **create games using Stride**, this guide provides the installation steps you'll need to follow.

The installer will automatically download and install the prerequisites if they are not detected, including the [Stride Launcher](launch-stride.md), which is essential for downloading and installing the latest version of Stride for game development.

If you're interested in **building the Stride engine from source** or **contributing to its development**, please visit the [Stride GitHub repository](https://github.com/stride3d/stride) for instructions on how to build from source and contribute to the project.

**Prerequisites (automatically installed if not present):**

- Latest **.NET SDK** supported by Stride
- Microsoft Visual C++ Redistributable

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

> [!Note]
>  If you click **Start** and see an error message such as `Could not find a compatible version of MSBuild.` or `Path to dotnet executable is not set.`, close the Stride Launcher and restart it. This issue is caused by the Stride Launcher not detecting the .NET SDK installation. Restarting the Stride Launcher should resolve the issue. Alternatively, restart your computer.
>
> Example error: ![First launch error](media/stride-launcher-first-time-after-installation-error.webp)
 
# Troubleshooting

If you don't install the prerequisites, Stride won't run. In this case, you can download and install the prerequisites separately. For instructions, see [Troubleshooting — Stride doesn't run](../troubleshooting/stride-doesnt-run.md).

Alternatively, uninstall Stride, restart the Stride installer, and install the prerequisites when prompted.

## Visual Studio integration

The Visual Studio integration is an optional extension for Visual Studio.

- **🟩 What it does**: provides syntax highlighting to shaders in Visual Studio.
- **🟥 What it doesn't do**: provide C# syntax highlighting for Stride (that works without the extension).

The extension can be installed via the launcher, by navigating to the **Visual Studio extension** section.

[INSERT PHOTO HERE]

## What's next?

* [Launch Stride](launch-stride.md)
