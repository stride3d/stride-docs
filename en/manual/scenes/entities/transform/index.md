# Transform

The [transform component](xref:Stride.Engine.TransformComponent) exists on every entity in Stride. It defines the position, rotation and scale of an entity in the world relative to it's parent.

## Local and world

An entity's transform is **relative to it's parent**. This means that the parent transform creates a sort of isolated world for it's children.

For example: if two entities are 1m apart from each other and the parent's scale is set to 20, those entities will in reality be spaced 20m from each other.

TODO: VISUALIZATION

Transforms relative to their parent are referred to as **local-space** and the "real world" result as **world-space**.

Typically, we work with values from the **local-space**, but sometimes, if we need to access entities nested in other entities, we use their **world** values.

## Get or set position, rotation and scale 

Position, rotation, euler angles and scale can be accessed from `Position`, `Rotation`, `RotationXYZ` and `Scale` respectively.

```csharp
// Getting values
var position = Entity.Transform.Position;
var rotation = Entity.Transform.Rotation;
var eulerAngles = Entity.Transform.RotationXYZ;
var scale = Entity.Transform.Scale;

// Setting values
Entity.Transform.Position = Vector3.Zero;
Entity.Transform.Rotation = Quaternion.Identity;
Entity.Transform.EulerAngles = Vector3.Zero;
Entity.Transform.Scale = Vector3.One;
```

## Get or set world position rotation and scale

There are many utilities for settings and changing world values. Most of them involve the **world matrix**, which needs to be updated before anything is done with it.

To get the world transformation, you can use `GetWorldTransformation`.

```csharp
Entity.Transform.UpdateWorldMatrix();
Entity.Transform.GetWorldTransformation(out var position, out var rotation, out var scale);
```

To set the world position and/or rotation, you can use `SetWorld`.

```csharp
var worldPosition = Vector3.Zero;
var worldRotation = Quaternion.Identity;

Entity.Transform.UpdateWorldMatrix();
Entity.Transform.SetWorld(worldPosition, worldRotation);
```

To set the world scale, you can set the local position to your desired world scale demodulated by the parent world scale.

```csharp
var worldScale = new Vector3(1f, 1f, 1f);

// Updating your own world matrix will also update all parents
Entity.Transform.UpdateWorldMatrix();

if (Entity.Transform.Parent == null)
{
    // Local scale is world scale if there are no parents
    Entity.Transform.Scale = worldScale;
}
else
{
    Entity.Transform.Scale = Vector3.Demodulate(worldScale, Entity.Transform.Parent.WorldMatrix.ScaleVector);
}
```
