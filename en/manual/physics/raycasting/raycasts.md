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
    
    if (simulation.Raycast(origin, direction, distance, out HitInfo result))
    {
        // Handle a successfull hit
    }
}
```

### Penetrating raycast query

The difference between this type of query and the normal one is that, when the ray reaches an object, it doesn't stop and instead it keeps going until it reaches it's maximum length.

TODO: example on how to do this and allocate a stack
