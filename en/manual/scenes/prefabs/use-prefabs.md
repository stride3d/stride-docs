# Use prefabs

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>

Prefab instances can be added to a scene in **Game Studio** or a prefab can be manually instantiated at runtime through code.

## Add a prefab to a scene in Game Studio

To instantiate a prefab, drag and drop it from the **Asset view** to the scene.

By default, Game Studio **creates an empty parent entity with the prefab's entities** as its children. The **Entity tree** displays the prefab parent name in green next to the child entities.

TODO: IMAGE

If you don't want to create a parent entity with the prefab, hold **Alt** when you drop the prefab into the scene.

## Break link to prefab in Game Studio

After you add a prefab instance, you can break the link between the prefab and any of its child entities. This means the child entity is no longer affected by changes you make to the prefab.

To do this, in the **Scene Editor**, right-click a child entity or entities and select **Break link to prefab**.

TODO: IMAGE

## Instantiate and add prefabs at runtime

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
