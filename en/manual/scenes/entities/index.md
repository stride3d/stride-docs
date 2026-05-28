# Entities

Entities are blank elements containing a collection of components that define what they are and how they behave (e.g. [model component](xref:Stride.Engine.ModelComponent)).

Entities can have **child entities** with their own components.

TODO: VISUALIZATION

Every entity has a [transform component](xref:Stride.Engine.TransformComponent) that defines how it's positioned in relation to it's parent.

## Add an entity in Game Studio

You can open the entity creation menu by pressing the ➕ icon at the top of the hierarchy or right clicking anywhere in the hierarchy or scene view.

TODO: IMAGE

Here, you can select one of the entity templates or create an empty entity.

TODO: IMAGE

## Add an entity in code

Entities can be created at runtime or instantiated from a prefab.

```csharp
// Create a blank entity
var myNewEntity = new Entity("Entity name");

// Create an entity with components
var myNewEntity = new Entity("Entity name")
{
    new LightComponent(),
    new MyScript()
}
```

These entities exist **outside of the game world** in an inactive state: all scripts aren't being updated. To change this, they have to be either:

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

## Remove an entity in Game Studio

To remove an entity, right click on it and select **Delete** or alternatively press the **delete key** on your keyboard.

TODO: IMAGE

## Remove an entity in code

To remove an entity, simply set their scene to `null`.

```csharp
entityToRemove.Scene = null;
```
