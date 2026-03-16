# Physics queries

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Physics Queries** are a set of operations to test and retrieve physics object in a given simulation. The most well known form of those queries is the [RayCast](raycasts.md) which traces an invisible line through the scene to find intersecting [Collidables](../colliders.md).

> [!Note]
> Physics queries use **collider shapes** to find objects. They ignore entities that have no Collidable Component attached or no collider shape set, see [Collidables](../colliders.md).

## Query types

* [**Raycast**](raycasts.md) - fires a ray from a point in a direction and retrieves the object(s) it hits.
* [**Sweepcast**](sweepcasts.md) - fires a shape in a direction and retrieves the object(s) it hits.
* [**Overlap**](overlaps.md) - retrieves the objects that overlap an area.

## Querying specific collision masks

[Collidables](../colliders.md) are organized into **layers**, which can be used for filtering collisions in queries.

![Image of the Collision Layer property on a Body component](media/body-component-layer.webp)

By default, every query checks all layers. This can be changed by specifying a **collision mask**.

```csharp
var mask = CollisionMask.Layer3;
var isHit = simulation.RayCast(Vector3.ZERO, -Vector3.UnitY, 3f, out var hit, mask);
```

You can create a mask for multiple layers, using [bitwise and shift operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators).

```csharp
// A mask for Layer1 and Layer 2
var mask1 = CollisionMask.Layer1 | CollisionMask.Layer2;

// A mask for every layer except layer 3
var mask2 = CollisionMask.Everything ^ CollisionMask.Layer3;

// An inverted mask2 - only for layer 3
var mask3 = ~mask2;
```
