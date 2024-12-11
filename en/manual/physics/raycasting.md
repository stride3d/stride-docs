# Raycasting

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

> [!WARNING]
TODO

**Raycasting** traces an invisible line through the scene to find intersecting [colliders](colliders.md). This is useful, for example, to check which objects are in a gun's line of fire, or are under the mouse cursor when the user clicks.

>[!Note]
>Raycasting uses **colliders** to calculate intersections. It ignores entities that have no collider component. For more information, see [Colliders](colliders.md).

To use a raycast, in the current [Simulation](xref:Stride.Physics.Simulation), use [Simulation.Raycast](xref:Stride.Physics.Simulation.Raycast(Stride.Core.Mathematics.Vector3,Stride.Core.Mathematics.Vector3,Stride.Physics.CollisionFilterGroups,Stride.Physics.CollisionFilterGroupFlags,System.Boolean,Stride.Physics.EFlags)).

For an example of raycasting, see the **Physics Sample** project included with Stride.

## Example code

This code sends a raycast from the mouse's screen position:

```cs
public static bool ScreenPositionToWorldPositionRaycast(Vector2 screenPos, CameraComponent camera, Simulation simulation)
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

    // Raycast from the point on the near plane to the point on the far plane and get the collision result
    var result = simulation.Raycast(vectorNear.XYZ(), vectorFar.XYZ());
    return result.Succeeded;
}
```

>[!Note]
>There are multiple ways to retrieve a reference to this `Simulation` from inside one of your `ScriptComponent`:
>- The recommended way is through a reference to a physics component, something like `myRigidBody.Simulation` or `myCollision.Simulation` as it is the fastest.
>- Then through `SceneSystem` by calling `SceneSystem.SceneInstance.GetProcessor<PhysicsProcessor>()?.Simulation`.
>- Or through `this.GetSimulation()`, note that the `this` is required as it is an extension method.

## See also
* [Colliders](colliders.md)
