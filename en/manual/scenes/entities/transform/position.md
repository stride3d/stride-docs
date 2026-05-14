# Position

In Stride, 1 unit of translation is **1 meter**.

## In code

The local position of an entity can be controlled using `Transform.Position`.

```csharp
var position = Entity.Transform.Position;
Entity.Transform.Position = new Vector3(0f, 10f, 0f);
```

The world position can be read using `Transform.GetWorldTransformation` and set using `Transform.SetWorld`.

```csharp
// Make sure to update the world matrix before doing anything
Entity.Transform.UpdateWorldMatrix();

Entity.Transform.GetWorldTransformation(out var position, out _, out _);

Entity.Transform.SetWorld(new Vector3(0f, 10f, 0f));
```
