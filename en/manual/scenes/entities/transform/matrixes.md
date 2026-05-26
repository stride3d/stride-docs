# Matrixes

Matrixes are a powerful tool that Stride provides for advanced transform manipulation. They encompass an entity's position, rotation and scale relative to their parent or their world.

> [!WARNING]
> This page goes into using matrixes in the transform component and not how to use matrixes in general. Currently, there is no page available with that information.

## Benefits of matrixes



## Updating matrixes

Matrixes are updated by a processor after every update tick. This means that when an entity is first added to a scene, or when it's transform changes, the matrixes contain invalid information.

Matrixes can be manually updated using `UpdateLocalMatrix` and `UpdateWorldMatrix`. It's recommended to call these methods before doing anything with matrixes to ensure they provide correct information.

## Matrix properties

You can get an entity's position and scale from a matrix using `TranslationVector` and `ScaleVector`. For rotation, you'll have to [decompose](#decomposing).

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

Matrixes
