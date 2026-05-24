# Overlap

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

An **overlap** checks for intersecting collisions in the bounds of a shape. In more basic terms, **it checks which colliders are inside or partially inside of a shape**.

## Overlap query

In order to query an **overlap**, use [`Simulation.Overlap`](xref:Stride.BepuPhysics.BepuSimulation.Overlap*).

### Shape

An overlap requires a **shape**, which can be one of: [`Box`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Box.html), [`Capsule`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Capsule.html), [`ConvexHull`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.ConvexHull.html), [`Sphere`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Sphere.html), [`Triangle`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Triangle.html).

### Pose

The **pose** describes how the shape will be positioned in the world.

Creating a new instance of [RigidPose](xref:Stride.BepuPhysics.Definitions.RigidPose) requires two arguments: position and rotation.

If you want to use the position and rotation of an entity in the scene, you can use [`Transform.GetWorldTransform`](xref:Stride.Engine.EntityTransformExtensions.GetWorldTransformation*).

```csharp
Entity.Transform.GetWorldTransformation(out var position, out var rotation, out _);
var pose = new RigidPose(position, rotation);
```

### Collection

The **collection** is used for getting the intersecting [collidables](xref:Stride.BepuPhysics.CollidableComponent) from the overlap.

The most basic collection that you can use is a [list](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1).

```csharp
var collection = new List<OverlapInfo>();
```

## Overlap query (with `stackalloc`)

When repeatedly performing an overlap, it has to keep allocating memory on the heap for the results, which puts more strain on the Garbage Collector (meaning more ram usage). A more optimal solution would be to use `stackalloc`.

When using the stack, the method won't require a collection anymore and instead will return an enumerable.

```csharp
public void Overlap()
{
    // Allocate a buffer that can hold up to 16 elements
    Span<CollidableStack> buffer = stackalloc CollidableStack[16];
    
    // Iterate over all results
    foreach (var collidable in simulation.Overlap(shape, pose, buffer))
    {
        // Handle a successful hit
    }
}
```

> [!NOTE]
> **A span has a limited amount of elements it can contain**. If there are more hits than the buffer size, only the closest ones will be returned.

## OverlapInfo query

This query works almost in the same way as the others. The main difference is that it treats each shape of a [compound collider](../collider-shapes.md#compound) separately. This can result in the same [collidables](xref:Stride.BepuPhysics.CollidableComponent) being returned multiple times.

```csharp
public void Overlap()
{
    // Allocate a buffer that can hold up to 16 elements
    Span<CollidableStack> buffer = stackalloc CollidableStack[16];
    
    // Iterate over all results
    foreach (var info in simulation.OverlapInfo(shape, pose, buffer))
    {
        // Handle a successful hit
    }
}
```

## Using a collision mask

Every query has an optional parameter specifying which colliders layers it should be performed on.

For more information on how to use collision masks, visit the [main physics queries page](index.md#querying-specific-collision-masks).

## Examples

Here are a few examples of using **overlaps** in a game.

### Checking if the player is on the ground

This example will perform an overlap using a sphere slightly below the player to check if it's touching the ground.

It's assumed the player is using a capsule for it's collision with the height of `2`. So the overlap needs to be offsetted from the center by `-0.5` in order to perfectly match the bottom of the capsule with the sphere and then by an additional small value of `-0.01` to be able to check the ground.

```csharp
public bool CheckGrounded(BodyComponent body)
{
    var sim = body.Simulation;
    
    // Sphere's radius needs to match the capsule's radius
    var shape = new Sphere(0.5f);
    var pose = new RigidPose(Entity.Transform.WorldMatrix.TranslationVector - 0.51f, Vector3.Zero);
    
    // Checking every layer except the one the player is on
    var mask = ~body.CollisionLayer.ToMask();
    
    Stack<CollidableStack> buffer = stackalloc CollidableStack[1];
    
    // If there are any collisions under the player, the player is on the ground
    return sim.Overlap(sphere, pose, buffer, mask).Any();
}
```
