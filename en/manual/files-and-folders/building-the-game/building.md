# Building

<span class="badge text-bg-primary">Beginner</span>

Currently, release versions of Stride games cannot be built using **Game Studio**. Instead, you can use your **IDE** or **the command line**.

> [!TIP]
> It's recommended to first delete everything in the [publish directory](setup.md#the-output-directory) to cleanup any unused folders.

## [Visual Studio](#tab/visual-studio)

1. Make sure to setup your game properly. For more information, visit [this page](setup.md).

2. In the **Solution Explorer** panel, right click on the platform package you want to build and select **Publish**.

    ![](media/visual-studio-publish-context-menu.webp)

3. In the newly opened tab, click the **Publish** button.
    
    ![](media/visual-studio-publish-button.webp)

4. Once the application finishes building, click the **Navigate** button to open the folder containing your build.
    
    ![](media/visual-studio-publish-navigate.webp)

## [Command line](#tab/command-line)

1. Make sure to setup your game properly. For more information, visit [this page](setup.md).

2. Use the `dotnet` command in order to publish the game (build a release version).

    ```bash
    dotnet publish Path/To/Project/Package
    ```

---

## See also

* [Setup](setup.md)
* [Cleaning up](cleaning-up.md)
* [Cleaning up](distributing.md)
* [Build file structure](build-file-structure.md)
