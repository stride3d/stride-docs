# Raycasts

Raycasts are the most commonly used type of physics queries. It can be described as **"shooting an invisible laser" and seeing what it hits**.

Raycasts are most commonly used in firing weapons and NPC AI.

## Raycast query

In order to query a raycast, use `Simulation.Raycast`.

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
    var maxDistance = 16;
    
    if (simulation.RayCast(origin, direction, distance, out HitInfo result))
    {
        // Handle a successfull hit
    }
}
```

### Penetrating raycast query

The difference between this type of query and the normal one is that, when the ray reaches an object, it doesn't stop and instead it keeps going until it reaches it's maximum length.

A penetrating raycast returns multiple objects and also requires a **buffer**.

```csharp
public void Shoot()
{
    // Create a buffer
    var buffer = new List<HitInfo>();
    
    // Iterate over all results
    foreach (var item in simulation.RayCastPenetrating(origin, direction, distance, buffer))
    {
        // Handle a successfull hit
    }
}
```

> [!NOTE]
> **There are no guarantees as to the order hits are returned in**. If you want them to be ordered by distance, you will have to do it yourself.

### Penetrating raycast query (with `stackalloc`)

When repeatedly performing a penetrating raycast, we have to keep allocating memory on the heap for the results, which puts more strain on the Garbage Collector. A prefered solution would be to use `stackalloc`.

```csharp
public void Shoot()
{
    // Allocate a buffer that can hold 16 elements
    Span<HitInfo> buffer = stackalloc HitInfoSpan[16];
    
    // Iterate over all results
    foreach (var item in simulation.RayCastPenetrating(origin, direction, distance, buffer))
    {
        // Handle a successfull hit
    }
}
```

#### Size limitation

A span has a limited amount of elements it can contain. If there are more hits than the buffer size, only the closest ones will be returned.
