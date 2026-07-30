# Sub-scenes

On top of holding entities, scenes can also contain **sub-scenes**. In a recommended configuration, different parts of the game (e.g. levels) would be added as a sub-scene of the main root scene.

TODO: IMAGE OF THE HIERARCHY

## Adding a sub-scene in Game Studio

Sub-scenes added in Game Studio won't affect how they are loaded at runtime. Adding them here is only done for organization purposes.

To add a sub scene, **drag and drop** a scene asset onto the entity tree..

TODO: IMAGE

## Toggling sub-scenes in Game Studio

Sub scenes can be toggled by clicking the **eye symbol** next to them in the **hierarchy**.

TODO: IMAGE

> [!NOTE]
> This does not impact how the scenes are loaded at runtime.

## Sub-scenes at runtime

In order to use sub-scenes while the game is running, you will have to **manually load and add them**.

```csharp
public class Example : StartupScript
{
    public UrlReference<Scene> SceneToLoad { get; set; }

    public override void Start()
    {
        var scene = Content.Load(SceneToLoad);
        Entity.Scene.Children.Add(scene);
    }
}
```

For more information on how to load scenes, visit [Scene loading](scene-loading.md).
