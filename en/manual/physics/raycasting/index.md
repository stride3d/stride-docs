# Physics Queries

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

**Physics Queries** are a set of operation to test and retrieve physics object in a given simulation. The most well known form of those queries is the `RayCast` which traces an invisible line through the scene to find intersecting [Collidables](colliders.md).

> [!Note]
> Physics queries uses **collider shapes** to find objects. It ignores entities that have no Collidable Component attached or no collider shape set, see [Collidables](colliders.md).

## Query types

* **Raycast** - fires a ray from a point in a specified direction and retrieves the object(s) it hits.
* **Overlap** - retrieves the object(s) that overlap a specified area.

## Querying specific collision masks

Collisions can be separated into different **layers**, which then can be used for filtering them in queries.

[IMAGE OF BODY COMPONENT]

By default, every query checks all layers. This can be changed by specifying a **collision mask**.

```csharp
var mask = CollisionMask.Layer3;
var isHit = simulation.RayCast(Vector3.ZERO, -Vector3.UnitY, 3f, out var hit, mask);
```

You can create a mask for multiple layers at once, using [bitwise and shift operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators).

```csharp
// A mask containing Layer1 and Layer 2
var mask1 = CollisionMask.Layer1 | CollisionMask.Layer2;

// A mask for every layer except layer 3
var mask2 = CollisionMask.Everything ^ CollisionMask.Layer3;

// An inverted mask2 - only layer 3
var mask2 = ~mask3;
```
