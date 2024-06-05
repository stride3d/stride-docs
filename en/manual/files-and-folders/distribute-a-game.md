# Distribute a game

When you're ready to publish your game, create a release build from Visual Studio, then distribute it.

## 1. Create a release build

1. If you've built your game in Release mode before, in your project folder (eg *MyGame/Bin/MyPlatform/Release/*), delete the *Data* folder. This folder might contain unnecessary files, such as old versions of assets, so it's simplest to build it again from scratch.

2. Open your project in Game Studio.

3. In the toolbar, click the drop-down menu and select **Visual Studio**.

    ![Open in VS](media/open-in-visual-studio.png)

    Your project opens in Visual Studio.

4. In Visual Studio, from the **Solution Configurations** drop-down menu, select **Release**.

    ![Select release](media/select-release.png)

5. From the **Solution platforms** drop-down menu, select the platform you want to create a build for.

    ![Select platform](media/select-platform.png)

    >[!Note]
    >
    >You can only build for platforms you've added to your Stride project. For instructions about how to do this, see [Add or remove a platform](../platforms/add-or-remove-a-platform.md).
    >
    >To build for Android or iOS, you need Xamarin, which is included with Visual Studio licenses. For instructions about how to install Xamarin with Visual Studio 2017, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

6. Under **Build**, select **Build solution**.

    ![Build solution](media/build-solution.png)

    Visual Studio creates a release build in your project bin folder (eg *MyGame/Bin/MyPlatform/Release*).

> [!Tip]
> You might want to rename the **Release** folder to something more descriptive (such as the title of your game).

### To build using terminal instead of Visual Studio

 1. You would need to install Visual Studio to get **Developer Command Prompt for Visual Studio (Version)**
 2. In Developer Command Prompt for Visual Studio
 3. ```console
    C:\User> msbuild PathToSln\NameOfProject.sln /p:Configuration=Release /p:OutputPath=YourPreferredPath
    ```

## 2. Delete unnecessary files

In the release folder in your project bin folder (eg *MyGame/Bin/MyPlatform/Release*), you can delete the following unnecessary files:

* `.pdb` files (debug information)

* `.xml` files (API documentation)

* files that contain `vshost` in their filenames (eg `MyGame5.vshost.exe` and `MyGame5.vshost.exe.manifest`) 

* folders other than the `x64`, `x86`, or `data` folders

* other unnecessary files, such as custom configuration files (ie files not created with Stride)

## 3. Distribute your game

After you create a release build, how you distribute it is up to you. 

To run games made with Stride on Windows, users need:

* .NET 8 SDK

* DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan

* Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)

## See also

* [Add or remove a platform](../platforms/add-or-remove-a-platform.md)
* [Version control](version-control.md)
* [Project structure](project-structure.md)
