# Prefabs

Prefabs are reusable entity templates that can be used to create copies of the same object.

**In the editor**, prefabs instanced remain synchronized, meaning that when you make a change to the original prefab, all other instances are updated.

TODO: VISUALIZATION

**During runtime**, prefabs can be used to create new instances of premade objects on demand, letting you easily create entities without having to manually recreate them in code.

```csharp
// Load a prefab
var prefab = Content.Load("Prefabs/Enemy");

// Create an enemy entity from a prefab
var enemy = MyPrefab.Instantiate();

// Add the enemy to the scene
Entity.Scene.Entities.AddRange(entities);
```

The most common use for prefabs is to create a small piece of your scene (like a car, NPC, or item of furniture) and duplicate it as many times as you need. When you need to modify it (e.g. if you want to replace its model), you can change it in one place and apply the change everywhere at once.
