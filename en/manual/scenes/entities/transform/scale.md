# Scale

Scale defines the size of an object.

## In code

The local scale of an entity can be controlled using `Transform.Scale`.

```csharp
var scale = Entity.Transform.Scale;
Entity.Transform.Scale = new Vector3(1f, 2f, 1f);
```

The world scale can be read from the [**world matrix**](matrixes.md) or by using [`Transform.GetWorldTransformation`].

```csharp
// Make sure to update the world matrix before doing anything
Entity.Transform.UpdateWorldMatrix();

var scaleVector = Entity.Transform.WorldMatrix.ScaleVector;

Entity.Transform.GetWorldTransformation(out var position, out var rotation, out var scale);
```

Setting the world scale is done by dividing it by the parent's
