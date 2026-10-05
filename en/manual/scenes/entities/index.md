# Entities

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Programmer</span>

**Entities** are game elements containing a collection of [components](components.md) that define what they are and how they behave (e.g. [model component](xref:Stride.Engine.ModelComponent)).

Entities can have **child entities** with their own components.

![](media/nesting-entities.webp)

Every entity has a [transform component](xref:Stride.Engine.TransformComponent) that defines how it's positioned in relation to its parent.

## Create an entity in Game Studio

You can open the entity creation menu by pressing the ➕ icon at the top of the **Entity tree** or right clicking anywhere in the **Scene editor**. Here, you can select from one of the entity templates or create an empty entity.

![](media/create-an-entity.webp)

## Entities in code

Entities can be instantiated from a [prefab](../prefabs/index.md), or created at runtime from scratch like so:

```csharp
// Create a blank entity
var myNewEntity = new Entity("Entity name");

// Create an entity with components
var myNewLightEntity = new Entity("Entity name")
{
    new LightComponent(),
    new MyScript()
}
```

These entities exist **outside of the game world** in an inactive state — none of their scripts are doing anything. To change this, they have to be either:

* Assigned a scene:

    ```csharp
    myNewEntity.Scene = MyScene;
    ```

* Added as a child of a scene:

    ```csharp
    MyScene.Children.Add(myNewEntity);
    ```

* Assigned a parent:

    ```csharp
    myNewEntity.Transform.Parent = myParent;
    ```

* Added as a child of an entity:

    ```csharp
    MyEntity.Transform.Children.Add(myNewEntity);
    ```

To remove an entity, simply set their scene to `null`.

```csharp
entityToRemove.Scene = null;
```

## In this section

* [Components](components.md)
* [Transform](transform/index.md)
  * [Types of rotation](transform/types-of-rotation.md)
  * [Local and world matrix](transform/local-and-world-matrix.md)
  * [World units](transform/world-units.md)
