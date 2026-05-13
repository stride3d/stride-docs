# Add or remove an entity

This page explains how to add or remove an entity in **Game Studio** and at runtime.

## Add an entity in Game Studio

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
    myNewEntity.Transform.Parent = myNewEntity;
    ```

* Added as a child of an entity:

    ```csharp
    MyEntity.Transform.Children.Add(myNewEntity);
    ```

## Remove an entity in Game Studio

## Remove an entity in code

To remove an entity, simply set their scene to `null`.

```csharp
entityToRemove.Scene = null;
```
