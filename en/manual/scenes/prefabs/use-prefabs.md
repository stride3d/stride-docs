# Use prefabs

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>

Prefab instances can be added to a scene in **Game Studio** or instantiated through code at runtime.

## Add a prefab to a scene in Game Studio

To instantiate a prefab, drag and drop it from the **Asset view** to the scene.

![](media/scene-editor-drag-and-drop-prefab.webp)

By default, Game Studio **creates an empty parent entity with the prefab's entities** as its children. The **Entity tree** displays the prefab parent name in green, next to the child entities.

![](media/scene-editor-prefab-green-text.webp)

> [!TIP]
> If you don't want to create a parent entity for the prefab, hold **Alt** when dropping it into the scene.

## Break link to prefab

After adding a prefab instance to a scene, you can break the link between the prefab and any of its child entities. This means the child entity will no longer be affected by changes you make to the prefab.

To do this, in the **scene editor**, right-click a child entity or entities and select **Break link to prefab**.

![](media/scene-editor-break-link-to-prefab.webp)

## Instantiate prefabs at runtime

To use prefabs at runtime, you need to **instantiate them** and then **add them to the scene** in code.

```csharp
public class Example : StartupScript
{
    public Prefab MyPrefab { get; set; }
    
    public override void Start()
    {
        // Create entities from a prefab
        var entities = MyPrefab.Instantiate();
        // Add entities to the entity's scene.
        Entity.Scene.Entities.AddRange(entities);
    }
}
```

For more information about using entities in code, visit [Entities](../entities/index.md#entities-in-code).

> [!NOTE]
> Changes made to instantiated entities from a prefab at runtime **do not affect the base prefab.**
