# Matrixes

Matrixes are a powerful tool that Stride provides for advanced transform manipulation. They encompass an entity's position, rotation and scale relative to their parent or their world.

> [!WARNING]
> This page goes into using matrixes in the transform component and not how to use matrixes in general. Currently, there is no page available with that information.

## Benefits and drawbacks of matrixes

* 🟩 More control over local and world transformations.
* 🟩 Already used by many utility methods (e.g. `SetWorld`).
* 🟩 Easier access to world values.
* 🟥 To ensure correct values, matrixes need to be [manually updated](#updating-matrixes) first.
* 🟥 Matrix values are read-only.

## Updating matrixes

Matrixes are updated by a processor after every update tick. This means that when an entity is first added to a scene, or when it's transform changes, the matrixes contain invalid information.

Matrixes can be manually updated using [`UpdateLocalMatrix`](xref:Stride.Engine.TransformComponent.UpdateLocalMatrix) and [`UpdateWorldMatrix`](xref:Stride.Engine.TransformComponent.UpdateWorldMatrix). It's recommended to call these methods before doing anything with matrixes to ensure they provide correct information.

## Matrix properties

You can get an entity's position and scale from a matrix using [`TranslationVector`](xref:Stride.Core.Mathematics.Matrix.TranslationVector) and [`ScaleVector`](xref:Stride.Core.Mathematics.Matrix.ScaleVector). For rotation, you'll have to [decompose](#decomposing).

```csharp
Entity.Transform.UpdateWorldMatrix();

var worldPosition = Entity.Transform.WorldMatrix.TranslationVector;
var worldScale = Entity.Transform.WorldMatrix.ScaleVector;
```

A matrix also provides vectors that provide information about different directions of an entity.

```csharp
Entity.Transform.UpdateWorldMatrix();

var forward = Entity.Transform.WorldMatrix.Forward;
var backward = Entity.Transform.WorldMatrix.Backward;
var left = Entity.Transform.WorldMatrix.Left;
var right = Entity.Transform.WorldMatrix.Right;
var up = Entity.Transform.WorldMatrix.Up;
var down = Entity.Transform.WorldMatrix.Down;
```

This is most commonly used with [physics queries](../../../physics/physics-queries/index.md) (e.g. checking if an enemy was hit in the direction the player is looking).

## Decomposing

In order to retrieve quaternion rotation or euler angles from a matrix, it has to be **decomposed**.

```csharp
Entity.Transform.UpdateWorldMatrix();

// Retrieve quaternion rotation
Entity.Transform.WorldMatrix.Decompose(out Vector3 scale, out Quaternion rotation, out Vector3 position);

// Retrieve euler angles
Entity.Transform.WorldMatrix.Decompose(out float yaw, out float pitch, out float yaw);
// Remember to swap order of yaw and pitch
var eulerAngles = new Vector3(pitch, yaw, roll);
```
