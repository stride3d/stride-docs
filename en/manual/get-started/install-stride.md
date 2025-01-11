# Install Stride

<span class="badge text-bg-primary">Beginner</span>

## Introduction

If you want to **create games using Stride**, this guide provides the installation steps you'll need to follow. You'll need to install the Stride installer and launcher. The Stride installer is approximately **55 MB** and is downloaded directly from our main GitHub repository.

The installer will automatically download and install the prerequisites if they are not detected, including the [Stride Launcher](launch-stride.md), which is essential for downloading and installing the latest version of Stride for game development.

If you're interested in **building the Stride engine from source** or **contributing to its development**, please visit the [Stride GitHub repository](https://github.com/stride3d/stride) for instructions on how to build from source and contribute to the project.

**Prerequisites (automatically installed if not present):**

- Latest **.NET SDK** supported by Stride
- Microsoft Visual C++ Redistributable

The **Stride Launcher** will download and install the latest version of Stride.

## Installation Steps

1. Download the Stride installer (**StrideSetup.exe**) from the [Stride website](http://stride3d.net/download/).
 
2. Run the installer by double-clicking the **StrideSetup.exe** file.
    
3. The **Stride Setup Wizard** opens.

    ![Stride Setup Wizard](media/install-stride-setup-wizard.webp)
 
    Click **Next**.
    
4. The **Stride installation type** window opens.

    ![Stride installation type window](media/install-stride-installation-type.webp)
    
    Select an installation type and click **Next**. 

5.  The **Select installation folder** window opens.

    ![Select installation folder window](media/install-stride-select-installation-folder.webp)

    Choose a folder where you want to install Stride, then click **Next**.
    
6. The **Create application shortcuts** window opens.
    
    ![Create application shortcuts window](media/install-stride-create-application-shortcuts.webp)

    Choose which shortcuts you want Stride to create, then click **Next**.
    
7. The **Ready to Install** window opens.
    
    ![Ready to install window](media/install-stride-ready-to-install.webp)

    Click **Install** to begin the installation.

8.  Installation begins.
 
    ![Installation status](media/install-stride-installation-status.webp)

    The installer will proceed with the installation. After it completes, Stride creates shortcuts in the locations you selected, and the **Stride Launcher** starts automatically.

9. The first time you run the Stride Launcher, you will be asked to accept the privacy policy.

    ![Stride privacy policy](media/stride-privacy-policy-prompt.webp)

    Check *I agree to the Privacy Policy*, then click **I Accept**.

10. The **Stride Launcher** window opens.

    ![Stride Launcher](media/stride-launcher.webp)

    The Stride Launcher prompts you to install the latest version of Stride.

    ![No version installed](media/stride-launcher-install-latest-version-prompt.webp)

    Click **Yes** to install the latest version.

11. Installation of the latest version of Stride begins.

    ![Installation of Stride](media/stride-launcher-install-latest-version.webp)

    While the installation is in progress, the release notes are displayed.

    > [!Warning]
    > If the .NET SDK has never been installed on your machine, the .NET SDK installation window might appear below the Stride installation window. Please check step 12 for details and be prepared to manually continue the .NET SDK installation.

12. During the installation, you might be asked to install the .NET SDK if it's not already on your machine.

    ![Installation of .NET SDK](media/install-dotnet-SDK.webp)

    Click **Install**.

13. The Stride Launcher asks if you want to install the Visual Studio integration. This allows you to edit shaders directly from Visual Studio, providing syntax highlighting, live code analysis with validation, error-checking, and navigation. Installing the integration isn't mandatory, but we recommend it.

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.webp)

    Click **Yes** to install the integration, or **No** to skip.

14. Stride is now installed and ready to use.

    ![Stride ready to use](media/stride-launcher-ready.webp)

> [!Note]
>  **Stride Launcher:** If you click **Start** and see an error message such as `Could not find a compatible version of MSBuild.` or `Path to dotnet executable is not set.`, close the Stride Launcher and restart it. This issue is caused by the Stride Launcher not detecting the .NET SDK installation. Restarting the Stride Launcher should resolve the issue. Alternatively, restart your computer.
>
> Example error: ![First launch error](media/stride-launcher-first-time-after-installation-error.webp)
 
> [!Note]
> If you don't install the prerequisites, Stride won't run. In this case, you can download and install the prerequisites separately. For instructions, see [Troubleshooting — Stride doesn't run](../troubleshooting/stride-doesnt-run.md).
>
> Alternatively, uninstall Stride, restart the Stride installer, and install the prerequisites when prompted.

## What's next?

* [Launch Stride](launch-stride.md)
