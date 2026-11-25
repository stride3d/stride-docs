# Sub-scenes

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Level designer</span>
<span class="badge text-bg-success">Programer</span>

On top of holding entities, scenes can also contain **sub-scenes**. In a recommended configuration, different parts of the game (e.g. levels) would be added as a sub-scene of the main root scene.

![](media/entity-tree-sub-scenes.webp)

## Adding a sub-scene in Game Studio

To add a sub scene, **drag and drop** a scene asset onto the **Entity tree**.

![](media/entity-tree-sub-scenes-drag-and-drop.webp)

> [!NOTE]
> Sub-scenes added in Game Studio won't affect how they are loaded at runtime. Adding them here is only done **for organization purposes**.

## Toggling sub-scenes in Game Studio

Sub scenes can be toggled by clicking the **eye symbol** next to them in the **Entity tree**.

![](media/entity-tree-sub-scene-toggle.webp)

> [!NOTE]
> This does not impact how the scenes are loaded at runtime.

## Sub-scenes at runtime

In order to use sub-scenes in the built game, you will have to **manually load and add them in code**.

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

## See also

* [Scene loading](scene-loading.md)
* [Structuring scenes](structuring-scenes.md)
