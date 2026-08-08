# Create a scene

This page outlines how to create a new scene in the editor and during runtime.

## Create a scene in Game Studio

1. Select an asset folder in the **Solution explorer**. In a standard project, it will be the folder located under your main [project package](../files-and-folders/project-packages/index.md) (the one ending with `.Game`).

    ![](media/solution-explorer-main-project-package-assets.webp)

2. In the **Asset view**, press the **➕ Add item** button and select **Scene > Scene**.

    ![](media/asset-view-add-scene.webp)

3. Press **F2** or right click and select **Rename** to change the name of your scene and save it by pressing **Ctrl + S**.

    ![](media/asset-view-name-scene.webp)

## Create a blank scene at runtime

In Stride, it is possible to create a blank scene through code while your game is running:

```csharp
var scene = new Scene();
```

This scene isn't loadable, meaning that it can't be unloaded using the **content system**.

Scenes created in code hold no benefit over entities. They can only be useful for replacing the root scene, which isn't the recommended way of structuring your game.

Blank scenes are used by the [splash screen](../files-and-folders/game-settings/splash-screen.md) for showing different content before loading the main scene.
