# Building

Currently, release versions of Stride games cannot be built using **Game Studio**. Instead, you can use your **IDE** or **the command line**.

## [Visual Studio](#tab/visual-studio)

1. Make sure to setup your game properly. For more information, visit [this page](setup.md).

2. In the **Solution Explorer** panel, right click on the platform package you want to build and select **Publish**.

    ![](media/visual-studio-publish-context-menu.webp)

3. In the newly opened tab, click the **Publish** button.

4. Once the application finishes building, click the TODO: FINISH to open the folder containing your build.

## [Command line](#tab/command-line)

1. Make sure to setup your game properly. For more information, visit [this page](setup.md).
2. Use the `dotnet` command in order to build the game.

    ```bash
    dotnet publish Path/To/Project/Package
    ```

---

## See also

* [Cleaning up](cleaning-up.md)
* [Build file structure](build-file-structure.md)
