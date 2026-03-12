# Raycasts

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Raycast** is the most commonly used type of physics query. It casts a ray in a direction and returns what it collided with. In more basic terms, it's like shooting an invisible laser and seeing what it hits.

Raycasts can be used for firing weapons or NPC AI.

## Raycast query

In order to query a raycast, use [`Simulation.RayCast`](xref:Stride.BepuPhysics.BepuSimulation.RayCast*). The method returns true, if it managed to hit something. In that case, all information about the hit will be contained in [HitInfo](xref:Stride.BepuPhysics.HitInfo).

```csharp
public void Shoot()
{
    var simulation = Entity.GetSimulation();
    
    // The origin point from which the ray will start
    var origin = Entity.Transform.WorldMatrix.TranslationVector;
    
    // The direction of the ray
    // In this case, it will go in the forward direction of the entity
    var direction = Entity.Transform.WorldMatrix.Forward;
    
    // The maximum distance of the ray
    var maxDistance = 16f;
    
    if (simulation.RayCast(origin, direction, distance, maxDistance, out HitInfo result))
    {
        // Handle a successful hit
    }
}
```

### Penetrating raycast query

The difference between this type of query and the normal one is that, when the ray reaches an object, it doesn't stop and instead it keeps going until it reaches it's maximum length.

To query a penetrating raycast, use [`Simulation.RayCastPenetrating`](xref:Stride.BepuPhysics.BepuSimulation.RayCastPenetrating*).

```csharp
public void Shoot()
{
    var hits = new List<HitInfo>();
    simulation.RayCastPenetrating(origin, direction, distance, maxDistance, hits);
    
    // Iterate over all results
    foreach (var hitInfo in hits)
    {
        // Handle a successful hit
    }
}
```

> [!NOTE]
> **There are no guarantees as to the order hits are returned in**. If you want them to be ordered by distance, you will have to do it yourself.

### Penetrating raycast query (with `stackalloc`)

When repeatedly performing a penetrating raycast, it has to keep allocating memory on the heap for the results, which puts more strain on the Garbage Collector (meaning more ram usage). A more optimal solution would be to use `stackalloc`.

```csharp
public void Shoot()
{
    // Allocate a buffer that can hold up to 16 elements
    Span<HitInfo> buffer = stackalloc HitInfoSpan[16];
    
    // Iterate over all results
    foreach (var hitInfo in simulation.RayCastPenetrating(origin, direction, distance, maxDistance, buffer))
    {
        // Handle a successful hit
    }
}
```

> [!NOTE]
> **A span has a limited amount of elements it can contain**. If there are more hits than the buffer size, only the closest ones will be returned.

## Examples

Here is a list of examples of using **raycasts** in a game.

### Dealing damage

On left click, if there is an entity with a 'HostileUnit' script in front the entity that this script is attached to, deal damage to it. Collision Layers 0 and 1 will be ignored.

```csharp
public override void Update()
{
    var simulation = Entity.GetSimulation();
    var rayDir = Entity.Transform.WorldMatrix.Forward;
    var maxDistance = 10f;
    
    // All layers except 0 & 1
    var layers = CollisionMask.Everything & ~(CollisionMask.Layer0 | CollisionMask.Layer1); 

    if (Input.IsMouseButtonPressed(MouseButton.Left) && simulation.RayCast(rayStart, rayDir, maxDistance, out HitInfo hitResult, layers))
    {
        var hostile = hitResult.Collidable.Entity.Get<HostileUnit>();
        
        // If the hit is a hostile unit, apply damage
        if (hostile != null)
            hostile.DealDamage();
    }
}
```

### Getting info from a penetrating raycast

This method will query a penetrating raycast in the direction the entity is looking at, in a range of 16 meters.

The method will only log information of the first 16 hits.

```csharp
public void Shoot()
{
    var simulation = Entity.GetSimulation();
    var origin = Entity.Transform.WorldMatrix.TranslationVector;
    var direction = Entity.Transform.WorldMatrix.Forward;
    
    Span<HitInfoStack> buffer = stackalloc HitInfoStack[16];
    
    foreach (var hitInfo in simulation.RayCastPenetrating(origin, direction, 16f, buffer))
    {
        Log.Warning($"T: {hitInfo.Distance}\nNormal: {hitInfo.Normal}\nEntity : {hitInfo.Collidable.Entity}");
    }
}
```

### Raycasting from the mouse

This method will query a raycast from the mouse's position on the screen.

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
