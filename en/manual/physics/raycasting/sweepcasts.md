# Sweepcasts

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

A **sweepcast** is similar to a raycast, with the distinction of using shapes instead of a ray. It casts a shape in a direction and returns what it collided with. In more basic terms, it's like **launching an invisible object and seeing what it hits**.

## Sweepcast query

In order to perform a sweepcast, use [`Simulation.SweepCast`](xref:Stride.BepuPhysics.BepuSimulation.SweepCast*). The method returns true, if it manages to hit something. In that case, all information about the hit will be contained in [HitInfo](xref:Stride.BepuPhysics.HitInfo).

### Shape

A sweepcast requires a **shape**, which can be one of: [`Box`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Box.html), [`Capsule`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Capsule.html), [`ConvexHull`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.ConvexHull.html), [`Sphere`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Sphere.html), [`Triangle`](https://docs.bepuphysics.com/api/BepuPhysics.Collidables.Triangle.html).

### Pose

The **pose** describes how the shape will be positioned in the world at the start of the sweepcast. 

Creating a new instance of [RigidPose](xref:Stride.BepuPhysics.Definitions.RigidPose) requires two arguments: position and rotation.

If you want to use the position and rotation of an entity in the scene, you can use [`Transform.GetWorldTransform`](xref:Stride.Engine.EntityTransformExtensions.GetWorldTransformation*).

```csharp
Entity.Transform.GetWorldTransformation(out var position, out var rotation, out _);
var pose = new RigidPose(position, rotation);
```

### Velocity

The **velocity** describes the path that the shape will be following in the sweepcast.

Creating a new instance of [BodyVelocity](xref:Stride.BepuPhysics.Definitions.BodyVelocity) requires two arguments: linear velocity (velocity used for changing position) and angular velocity (velocity used for changing rotation).

### Max distance

The **maximum distance** controls the length of the sweepcast. However, the actual maximum distance is **also influenced by the magnitute of the linear velocity vector**.

The actual maximum distance can be calculated by multiplying `maxDistance` with the length of `velocity.Linear`.

```csharp
var maxDistance = 16f;
var velocity = new BodyVelocity(2f * Vector2.UnitY, Vector2.Zero);

var actualMaxDistance = maxDistance * velocity.Linear.Length();
```

> [!NOTE]
> The actual max distance is **not something you need to worry about most of the time**. When using `WorldMatrix.Forward` or similar for the linear velocity, the vector's length will always be equal to 1, meaning that `maxDistance` will be the actual maximum distance.

## Penetrating sweepcast query

The difference between this type of query and the normal one is that, when the shape reaches an object, it doesn't stop and instead it keeps going until it reaches it's maximum length.

To perform a penetrating sweepcast, use [`Simulation.SweepCastPenetrating`](xref:Stride.BepuPhysics.BepuSimulation.SweepCastPenetrating*).

```csharp
public void Shoot()
{
    var hits = new List<HitInfo>();
    simulation.SweepCastPenetrating(shape, pose, velocity, hits)
    
    // Iterate over all results
    foreach (var hitInfo in hits)
    {
        // Handle a successful hit
    }
}
```

> [!NOTE]
> **There are no guarantees as to the order hits are returned in**. If you want them to be ordered by distance, you will have to sort the results yourself.

## Penetrating sweepcast query (with `stackalloc`)

When repeatedly performing a penetrating sweepcast, it has to keep allocating memory on the heap for the results, which puts more strain on the Garbage Collector (meaning more ram usage). A more optimal solution would be to use `stackalloc`.

```csharp
public void Shoot()
{
    // Allocate a buffer that can hold up to 16 elements
    Span<HitInfoStack> buffer = stackalloc HitInfoStack[16];
    
    // Iterate over all results
    foreach (var hitInfo in simulation.SweepCastPenetrating(shape, pose, velocity, maxDistance, buffer))
    {
        // Handle a successful hit
    }
}
```

> [!NOTE]
> **A span has a limited amount of elements it can contain**. If there are more hits than the buffer size, only the closest ones will be returned.

## Handling a hit

Every hit is represented by [`HitInfo`](xref:Stride.BepuPhysics.HitInfo), which contains all information about the hit.
* [`Point`](xref:Stride.BepuPhysics.HitInfo.Point) - the position in the world where the collidable was hit.
* [`Normal`](xref:Stride.BepuPhysics.HitInfo.Normal) - the normal vector of the surface that was hit.
* [`Distance`](xref:Stride.BepuPhysics.HitInfo.Distance) - the actual distance the shape travelled multiplied by it's velocity (Distance = directionLength * actualDistance).
* [`Collidable`](xref:Stride.BepuPhysics.HitInfo.Collidable) - the [collidable component](xref:Stride.BepuPhysics.CollidableComponent) that was hit.
* [`ChildIndex`](xref:Stride.BepuPhysics.HitInfo.ChildIndex) - the index of the shape used in a [collidables](xref:Stride.BepuPhysics.HitInfo.Distance) [collider](xref:Stride.BepuPhysics.CollidableComponent.Collider) if it's a [compound collider](../collider-shapes.md#compound).

### Getting the entity

Because [`Collidable`](xref:Stride.BepuPhysics.HitInfo.Collidable) is a component, you can get the entity from it.

```csharp
var entity = hit.Collidable.Entity;
```

### Getting the actual distance

The actual distance can be calculated by using [Vector3.Distance](xref:Stride.Core.Mathematics.Vector3.Distance*) with the ray origin and [`Point`](xref:Stride.BepuPhysics.HitInfo.Point).

```csharp
var actualDistance = Vector3.Distance(pose.Position, hit.Point);
```

## Using a collision mask

Every query has an optional parameter specifying which collision layers it should be performed on.

For more information on how to use collision masks, visit the [main physics queries page](index.md#querying-specific-collision-masks).

## Examples

Here are a few examples of using **sweepcasts** in a game.

### Thick raycast

This method will sweepcast a sphere, which is similar to a raycast with thickness. The sweepcast will be performed in the direction the entity is facing.

```csharp
public void Shoot()
{
    var simulation = Entity.GetSimulation();
    
    // A sphere shape with the radius of 1
    var shape = new Sphere(1f);
    
    // The start pose of the shape (start position and start rotation)
    // We can ignore the rotation, because spheres are unaffected by it
    var pose = new RigidPose(Entity.Transform.WorldMatrix.TranslationVector, Quaternion.Identity);
    
    // The velocity of the shape
    // In this case, it will go in the forward direction of the entity
    var velocity = new BodyVelocity(Entity.Transform.WorldMatrix.Forward, Vector3.Zero);
    
    // The maximum distance or "amount of time" the object will travel for
    var maxDistance = 16f;
    
    if (simulation.SweepCast(shape, pose, velocity, maxDistance, out HitInfo result))
    {
        // Handle a successful hit
    }
}
```

### Sweepcasting a box with penetration

This method will perform [`SweepCastPenetrating`](xref:Stride.BepuPhysics.BepuSimulation.SweepCastPenetrating*) with a box in the direction the entity is looking at.

```csharp
public void SweepcastBox()
{
    var simulation = Entity.GetSimulation();
    
    Entity.Transform.GetWorldTransformation(out var position, out var rotation, out _);
    var pose = new RigidPose(position, rotation);
    var velocity = new BodyVelocity(Entity.Transform.WorldMatrix.Forward, Vector3.Zero);
    
    // Allocate a buffer with a maximum size of 16
    Span<HitInfo> buffer = stackalloc HitInfoSpan[16];
    
    foreach (var hitInfo in simulation.SweepCastPenetrating(new Box(1f, 1f, 1f), pose, velocity, 16f, buffer))
    {
        // Handle a successful hit
    }
}
```
