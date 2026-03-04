# Physics Queries

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Physics Queries** are a set of operation to test and retrieve physics object in a given simulation, the most well known form of those queries is the `RayCast` which traces an invisible line through the scene to find intersecting [Collidables](colliders.md). This is useful, for example, to check which objects are in a gun's line of fire, or are under the mouse cursor when the user clicks.

> [!Note]
> Physics queries uses **collider shapes** to find objects. It ignores entities that have no Collidable Component attached or no collider shape set, see [Collidables](colliders.md).

To raycast in the current [Simulation](xref:Stride.BepuPhysics.BepuSimulation), see the [Simulation API](xref:Stride.BepuPhysics.BepuSimulation).

For an example of raycasting, see the **Physics Sample** project included with Stride.

## Examples
On left click, if there is a 'HostileUnit' in front of 'MyGun', deal damage to it
```cs
public override void Update()
{
    var simulation = Entity.GetSimulation();
    MyGun.Transform.GetWorldTransformation(out var rayStart, out var worldRot, out _);
    var rayDir = worldRot * Vector3.UnitZ;
    float range = 10;
    // All layers except 0 & 1
    var layers = CollisionMask.Everything & ~(CollisionMask.Layer0 | CollisionMask.Layer1); 

    if (Input.IsMouseButtonPressed(MouseButton.Left) && simulation.RayCast(rayStart, rayDir, range, out HitInfo hitResult, layers))
    {
        var hostile = hitResult.Collidable.Entity.Get<HostileUnit>();
        if (hostile is not null)
            hostile.DealDamage(10);
    }
}
```
Using the non-alloc version of a penetrating query to find multiple objects intersecting with the ray
```cs
var simulation = Entity.GetSimulation();
Entity.Transform.GetWorldTransformation(out var rayStart, out var worldRot, out _);
var rayDir = worldRot * Vector3.UnitZ; 

// Allocates a working buffer on the stack for the penetrating test,
// The 16 specified here would be the maximum item this test would keep track of, 
// if the test finds more than 16 objects, it will yield the 16 closest ones
System.Span<HitInfoStack> buffer = stackalloc HitInfoStack[16];

// The order in which elements are yielded throughout this foreach is not guaranteed
// Some hitInfo with a smaller distance may be returned after one with a larger one,
// and the opposite is also true.
foreach (var hitInfo in simulation.RayCastPenetrating(rayStart, rayDir, 100f, buffer))
{
    Log.Warning($"T: {hitInfo.Distance}\nNormal: {hitInfo.Normal}\nEntity : {hitInfo.Collidable.Entity}");
}
```
Moves a box through the scene and return what it collided with
```cs
var simulation = Entity.GetSimulation();
Entity.Transform.GetWorldTransformation(out var center, out var worldRot, out _);
var rayDir = worldRot * Vector3.UnitZ;
var initialPose = new RigidPose(center, worldRot);
var displacement = new BodyVelocity(rayDir, default);
var shape = new Box(0.25f, 0.25f, 0.25f);

if (simulation.SweepCast(shape, initialPose, displacement, 10, out HitInfo hitInfo))
{
    Log.Warning($"T: {hitInfo.Distance}\nNormal: {hitInfo.Normal}\nEntity : {hitInfo.Collidable.Entity}");
}
```
Find up to 16 physics object a box placed at that position would overlap with
```cs
var simulation = Entity.GetSimulation();
Entity.Transform.GetWorldTransformation(out var center, out var worldRot, out _);
var initialPose = new RigidPose(center, worldRot);
var shape = new Box(0.25f, 0.25f, 0.25f);

System.Span<CollidableStack> buffer = stackalloc CollidableStack[16];
foreach (var hit in simulation.Overlap(shape, initialPose, buffer))
{
    Log.Warning($"Entity : {hit.Entity}");
}
```
Send a raycast from the mouse's screen position:
```cs
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera)
{
    Matrix invViewProj = Matrix.Invert(camera.ViewProjectionMatrix);

    // Reconstruct the projection-space position in the (-1, +1) range.
    //    Don't forget that Y is down in screen coordinates, but up in projection space
    Vector3 sPos;
    sPos.X = screenPos.X * 2f - 1f;
    sPos.Y = 1f - screenPos.Y * 2f;

    // Compute the near (start) point for the raycast
    // It's assumed to have the same projection space (x,y) coordinates and z = 0 (lying on the near plane)
    // We need to unproject it to world space
    sPos.Z = 0f;
    var vectorNear = Vector3.Transform(sPos, invViewProj);
    vectorNear /= vectorNear.W;

    // Compute the far (end) point for the raycast
    // It's assumed to have the same projection space (x,y) coordinates and z = 1 (lying on the far plane)
    // We need to unproject it to world space
    sPos.Z = 1f;
    var vectorFar = Vector3.Transform(sPos, invViewProj);
    vectorFar /= vectorFar.W;

    var delta = (vectorFar - vectorNear).XYZ();
    var maxDistance = delta.Length();
    var dir = delta / maxDistance; // normalize delta

    // Raycast from the point on the near plane to the point on the far plane and get the collision result
    return camera.Entity.GetSimulation().RayCast(vectorNear.XYZ(), dir, maxDistance, out HitInfo hit);
}
```

>[!Note]
>There are multiple ways to retrieve a reference to this `Simulation` from inside one of your `ScriptComponent`:
>- The recommended way is through a reference to a physics component, something like `myBody.Simulation` as it is the fastest.
>- Or through the `Entity.GetSimulation()` extension method.

## See also
* [Colliders](colliders.md)
