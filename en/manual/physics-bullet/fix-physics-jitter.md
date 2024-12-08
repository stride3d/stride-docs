# Fix physics jitter

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

[!INCLUDE [bullet-deprecation](../../includes/bullet-physics-deprecation.md)]

In Stride, there is no default smoothing applied to entities that are attached to physics entities. This can cause noticeable jitter, especially if the camera is attached to a character component.

In this tutorial, we will explore how to add smoothing to an entity using a SyncScript.

> [!Note]
> You can also decrease the `FixedTimeStep` in the physics settings configuration to achieve more accurate physics simulations. For example, changing it from `0.016667` to `0.008` will increase accuracy but at the cost of higher CPU usage.

## Code to handle smoothing between two entities
The following code is all that's needed to smoothly attach two entities. Ensure that you unparent the entity you are trying to smooth, otherwise the transform processor will override this script.

```cs
[ComponentCategory("Utils")]
[DataContract("SmoothFollowAndRotate")]
public class SmoothFollowAndRotate : SyncScript
{
    public Entity EntityToFollow { get; set; }
    public float Speed { get; set; } = 1;

    public override void Update()
    {
        var deltaTime = (float)Game.UpdateTime.Elapsed.TotalSeconds;
        var currentPosition = Entity.Transform.Position;
        var currentRotation = Entity.Transform.Rotation;

        var lerpSpeed = 1f - MathF.Exp(-Speed * deltaTime);

        EntityToFollow.Transform.GetWorldTransformation(out var otherPosition, out var otherRotation, out var _);

        var newPosition = Vector3.Lerp(currentPosition, otherPosition, lerpSpeed);
        Entity.Transform.Position = newPosition;

        Quaternion.Slerp(ref currentRotation, ref otherRotation, lerpSpeed, out var newRotation);
        Entity.Transform.Rotation = newRotation;
    }
}
```

## Example Usage

This example demonstrates modifications to the **First Person Shooter** template to integrate smooth camera movement.

1. Detach the camera from the physics entity.
2. Remove the FPS camera script from the camera.
3. Create a new entity as a child of the character body.
4. Add the FPS script to the new entity.
5. Adjust any code that directly references the `CameraComponent` to reflect these changes.

### PlayerInput.cs

Change

```cs
public CameraComponent Camera { get; set; }
```
to

```cs
public Entity Camera { get; set; }
```

### Utils.cs

Change

```cs
CameraComponent camera
```
to

```cs
Entity camera,
```

and change

```cs
camera.Update();
var inverseView = Matrix.Invert(camera.ViewMatrix);
```

to

```cs
var inverseView = camera.Transform.WorldMatrix;
```

### FpsCamera.cs

Remove

```cs
/// <summary>
/// Gets the camera component used to visualized the scene.
/// </summary>
private Entity Component;
```
and change

```cs
private void UpdateViewMatrix()
{
    var camera = Component;
    if (camera == null) return;
    var rotation = Quaternion.RotationYawPitchRoll(Yaw, Pitch0);

    Entity.Transform.Rotation = rotation;
}
```
to

```cs
private void UpdateViewMatrix()
{
    var rotation = Quaternion.RotationYawPitchRoll(Yaw, Pitch, 0);

    Entity.Transform.Rotation = rotation;
}
```

That should be all that is needed to see the smoothing in action as a before and after. You can see the original issue in the Stride GitHub [here](https://github.com/stride3d/stride/issues/2216) if you need to find more info on the problem.
