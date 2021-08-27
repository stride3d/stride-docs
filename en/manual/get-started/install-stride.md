# Install Stride

<span class="label label-doc-level">Beginner</span>

1. Download the Stride installer (**StrideSetup.exe**) from the [Stride website](http://stride3d.net/download/).
 
2. Double-click the **StrideSetup.exe** file.
 
    The **Stride Setup Wizard** opens.

3. Stride depends on the .NET Runtime. If you don't have the particular version it needs, Stride prompts you to install it.

    ![Prerequisites installer](media/prerequisites-installer.png)

    Click **Next** and follow the prompts.

    > [!Note]
    > Alternatively, you can [download the .NET Framework from the Microsoft Download Center](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer) and restart the Stride installer.
	
4. The **Stride Setup Wizard** opens.

     ![Stride Setup Wizard](media/install-stride-setup-wizard.png)
 
     Click **Next**.
 
    The **Stride License Agreement** window opens.

    ![Stride license agreement window](media/install-stride-license-agreement.png)

    Click **Accept**.
	
5. The **Stride installation type** window opens.

    ![Stride installation type window](media/install-stride-installation-type.png)
	
    Select an installation type and click **Next**. 

6.  The **Select installation folder** window opens.

    ![Select installation folder window](media/install-stride-select-installation-folder.png)

    Select a folder to install Stride to and click **Next**.
	
7. The **Create application shortcuts** window opens.
    
    ![Create application shortcuts window](media/install-stride-create-application-shortcuts.png)

    Choose which shortcuts you want Stride to create, and click **Next**.
	
8. The **Ready to Install** window opens.
    
    ![Ready to install window](media/install-stride-ready-to-install.png)

    Click **Install**.

9.  Installation begins.
 
    ![Installation status](media/install-stride-installation-status.png)

    After the installer closes, Stride creates shortcuts in locations you selected and the **Stride Launcher** opens. 

    ![Stride Launcher](media/stride-launcher.png)

    The Stride Launcher prompts you to install the latest version of Stride.

    ![No version installed](media/stride-launcher-install-last-version.png)

    Click **Yes**.

10. The Stride Launcher asks if you want to install the Visual Studio integration. This lets you edit shaders directly from Visual Studio and provides syntax highlighting, live code analysis with validation, error-checking, and navigation. Installing the integration isn't mandatory, but we recommend it.

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

11. Windows confirms that Stride can make changes to your computer.

    ![Prerequisites installer](media/prerequsites-installer2.png)

    Click **Yes**.
    
12. The Stride Launcher checks if the prerequisite **Visual C++ Redistributable** is installed. If it's not installed, follow the prompts to install it.

13. The Stride Launcher checks if the prerequisite **Build Tools for Visual Studio** is installed. If you have Visual Studio, then this is already installed. If it's not installed, follow the prompts to install it.

    ![Installing VS build tools](media/installing-vs-build-tools.png)

    >[!Note]
    > Windows uses the Visual Studio installer to install **Build Tools for Visual Studio**, but it doesn't install Visual Studio.

Stride is now installed and ready to use.

>[!Note]

> If you don't install the prerequisites, Stride won't run. In this case, you can download and install the prerequisites separately. For instructions, see [Troubleshooting — Stride doesn't run](../troubleshooting/stride-doesnt-run.md).

> Alternatively, uninstall Stride, restart the Stride installer, and install the prerequisites when prompted.

## What's next?

* [Launch Stride](launch-stride.md)
