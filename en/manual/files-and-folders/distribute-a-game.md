# Distribute a game

When you're ready to publish your game, create a release build from Visual Studio, then distribute it.

## 1. Create a release build

1. If you've built your game in Release mode before, in your project folder (eg *MyGame/Bin/MyPlatform/Release/*), delete the *Data* folder. This folder might contain unnecessary files, such as old versions of assets, so it's simplest to build it again from scratch.

2. Open your project in Game Studio.

3. In the toolbar, click the drop-down menu and select **Visual Studio**.

    ![Open in VS](media/open-in-visual-studio.png)

    Your project opens in Visual Studio.

4. In Visual Studio, from the **Solution Explorer** right click your Windows project and select **Publish**

    ![Select Publish](media\publish-project-dropdown.png)

5. Select the **Target** **Folder** in the publish window.

6. Select the **Specified target** **Folder** again.

7. Confirm the output folder and Click **Finish**.

8. You should now see the **Publish** view where you can manage the project export settings.

    ![Publish View](media\publish-view.png)

9. Finally you can click publish and see your project in the output folder you selected at **step 6**

    Optionally you can also include the .NET runtime in your exported game to reduce a dependancy on the user.

    Select **Show all settings** -> **Deployment mode** -> **Self-contained** -> **Save**

    ![Publish Self Contained](media\publish-self-contained.png)

    > [!Note]
    >
    > You can only build for platforms you've added to your Stride project. For instructions about how to do this, see [Add or remove a platform](../platforms/add-or-remove-a-platform.md).
    >
    > To build for Android or iOS, you need Xamarin, which is included with Visual Studio licenses. For instructions about how to install Xamarin with Visual Studio 2017, see [this MSDN page](https://docs.microsoft.com/en-us/visualstudio/cross-platform/setup-and-install).

10. Under **Build**, select **Publish Selection** and click the **Publish** button.

    ![Publish Solution](media/publish-project.png)

    Visual Studio creates a release build in your selected output folder.

> [!Tip]
> You might want to rename the **Release** folder to something more descriptive (such as the title of your game).

### To build using terminal instead of Visual Studio

 1. Ensure the relevant .NET SDK is installed (Stride 4.2 is on .NET 8)
 2. open the folder of your project where the *.Windows.csproj file sits.

    ![Project Folder](media/project-folder.png)

 3. Type `cmd` in the search bar to open the folder easily in terminal.
    
    ![Open terminal](media/open-terminal.png)

 4. finally publish with the command 
 
 ```
 dotnet publish
 ```

 or the below to include the .NET runtime with your game

 ```
 dotnet publish -r win-x64 --self-contained true --framework net8.0-windows
 ```
 
 You can also append `--output <YOUR_EXPORT_FOLDER>` to specify where to export to.

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

* .NET 8 Runtime (Unless you published with **self-contained**)

* DirectX11 (included with Windows 10 and later), OpenGL, or Vulkan

* Visual C++ 2015 runtimes (x86 and/or x64, depending on what you set in your project properties in Visual Studio)

## See also

* [Add or remove a platform](../platforms/add-or-remove-a-platform.md)
* [Version control](version-control.md)
* [Project structure](project-structure.md)

* [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-publish)