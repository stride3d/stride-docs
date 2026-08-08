# Transform

The [transform component](xref:Stride.Engine.TransformComponent) exists on every entity in Stride. It defines the position, rotation and scale of an entity in the world, relative to its parent.

## Local and world

An entity's transform is **relative to its parent**. This means that the parent transform creates a sort of isolated world for its children.

For example: if two entities are 1m apart from each other and the parent's scale is set to 20, those entities will in reality be spaced 20m from each other.

TODO: VISUALIZATION

Values relative to their parent are referred to as **local-space** and the "real world" ones as **world-space**.

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

## Get or set world position, rotation and scale

There are many utilities for managing world values. Most of them involve the **world matrix**, which needs to be updated before anything is done with it.

To get the world transformation, you can use `GetWorldTransformation`.

```csharp
Entity.Transform.UpdateWorldMatrix();
Entity.Transform.GetWorldTransformation(out var position, out var rotation, out var scale);

// Get yaw pitch roll
rotation.YawPitchRoll(out var yaw, out var pitch, out var yaw);

// Get euler angles (notice the order)
var eulerAngles = new Vector3(pitch, yaw, roll);
```

> [!WARNING]
> The world scale may be inaccurate due to the nature of how it's represented.

To set the world position and/or rotation, you can use `SetWorld`.

```csharp
var worldPosition = Vector3.Zero;
var worldRotation = Quaternion.Identity;

Entity.Transform.UpdateWorldMatrix();
Entity.Transform.SetWorld(worldPosition, worldRotation);
```

As mentioned previously, the world scale may not be what you expect it to be. In certain configurations of rotations and uneven scales you can achieve scale modifications which are impossible to represent in a standard Vector3.

TODO: IMAGE

However **if you're using even scales** (meaning that `X`, `Y` and `Z` are set to the same value) for the entity and its parents, then you can set the world scale by modifying the local scale to your desired value demodulated by the parent world scale.

```csharp
var lossyWorldScale = new Vector3(1f, 1f, 1f);

// Updating your own world matrix will also update all parents
Entity.Transform.UpdateWorldMatrix();

if (Entity.Transform.Parent == null)
{
    // Local scale is world scale if the entity has no parents
    Entity.Transform.Scale = worldScale;
}
else
{
    Entity.Transform.Scale = Vector3.Demodulate(worldScale, Entity.Transform.Parent.WorldMatrix.ScaleVector);
}
```
