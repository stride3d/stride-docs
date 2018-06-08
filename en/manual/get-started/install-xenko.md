# Install Xenko

<span class="label label-doc-level">Beginner</span>

1. Download the Xenko installer (**XenkoSetup.exe**) from the [Xenko website](http://xenko.com/download/).
 
2. Double-click the **XenkoSetup.exe** file.
 
    The **Xenko Setup Wizard** opens.

3. Xenko requires .NET Framework 4.6.2. If you don't have this, Xenko prompts you to install it.

    ![Prerequisites installer](media/prerequisites-installer.png)

    Click **Next** and follow the prompts.

    > [!Note]
    > Alternatively, you can [download the .NET Framework from the Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=53345) and restart the Xenko installer.
	
4. The **Xenko Setup Wizard** opens.

     ![Xenko Setup Wizard](media/install-xenko-setup-wizard.png)
 
     Click **Next**.
 
    The **Xenko License Agreement** window opens.

    ![Xenko license agreement window](media/install-xenko-license-agreement.png)

    Click **Accept**.
	
5. The **Xenko installation type** window opens.

    ![Xenko installation type window](media/install-xenko-installation-type.png)
	
    Select an installation type and click **Next**. 

6.  The **Select installation folder** window opens.

    ![Select installation folder window](media/install-xenko-select-installation-folder.png)

    Select a folder to install Xenko to and click **Next**.
	
7. The **Create application shortcuts** window opens.
    
    ![Create application shortcuts window](media/install-xenko-create-application-shortcuts.png)

    Choose which shortcuts you want Xenko to create, and click **Next**.
	
8. The **Ready to Install** window opens.
    
    ![Ready to install window](media/install-xenko-ready-to-install.png)

    Click **Install**.

9.  Installation begins.
 
    ![Installation status](media/install-xenko-installation-status.png)

    After the installer closes, Xenko creates shortcuts in locations you selected and the **Xenko Launcher** opens. 

    ![Xenko Launcher](media/xenko-launcher.png)

    The Xenko Launcher prompts you to install the latest version of Xenko.

    ![No version installed](media/xenko-launcher-install-last-version.png)

    Click **Yes**.

10. The Xenko Launcher asks if you want to install the Visual Studio integration. This lets you edit shaders directly from Visual Studio and provides syntax highlighting, live code analysis with validation, error-checking, and navigation. Installing the integration isn't mandatory, but we recommend it.

    ![Install Visual Studio integration](media/install-VS-plug-in-prompt.png)

11. Windows confirms that Xenko can make changes to your computer.

    ![Prerequisites installer](media/prerequsites-installer2.png)

    Click **Yes**.
    
12. The Xenko Launcher checks if the prerequisite **Visual C++ Redistributable** is installed. If it's not installed, follow the prompts to install it.

13. The Xenko Launcher checks if the prerequisite **Build Tools for Visual Studio** is installed. If you have Visual Studio, then this is already installed. If it's not installed, follow the prompts to install it.

    ![Installing VS build tools](media/installing-vs-build-tools.png)

    >[!Note]
    > Windows uses the Visual Studio installer to install **Build Tools for Visual Studio**, but it doesn't install Visual Studio.

Xenko is now installed and ready to use.

>[!Note]

> If you don't install the prerequisites, Xenko won't run. In this case, you can download and install the prerequisites separately. For instructions, see [Troubleshooting — Xenko doesn't run](../troubleshooting/xenko-doesnt-run.md).

> Alternatively, uninstall Xenko, restart the Xenko installer, and install the prerequisites when prompted.

## What's next?

* [Launch Xenko](launch-xenko.md)
