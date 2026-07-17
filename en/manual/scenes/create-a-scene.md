# Create a scene

This page outlines how to create a new scene in Stride.

## Create a scene in Game Studio

1. Select an asset folder in the **Solution explorer**. Typically, this will be the folder located under your main [project package](../files-and-folders/project-packages/index.md) (the one that's not ending with `.Windows` or `.Linux`).

    TODO: IMAGE

2. In the **Asset view**, press the **➕ Add item** button and select **Scene**.

    TODO: IMAGE

3. Name your scene.

## Edit a scene

Scenes are complex assets, meaning they have a dedicated editor, the **scene editor**.

TODO: IMAGE

For more information on how to use it, visit [scene editor](../game-studio/dedicated-editors/scene-editor/index.md).

## Create a blank scene at runtime

In Stride, it's possible to create a blank scene while your game is running.

```csharp
var scene = new Scene();
```

This scene isn't loadable, meaning that it can't be unloaded using the **content system**.

Using empty scenes in code holds no benefit over entities. It can only be useful for replacing the root scene, which isn't the recommended way of structuring your game.

Blank scenes are used by the [splash screen](../game-studio/splash-screen.md) for showing different content before loading the main scene.
