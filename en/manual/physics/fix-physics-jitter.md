# Fix Physics Jitter

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

In Stride there is no default smoothing applied to Entities that are attached to physics entities. This can cause a noticable jitter especially if you have the camera attached to a character component.
In this tutorial we will look at whats needed to add smoothing to an entity through a SyncScript.

>[!Note]
>You can also decrease the `Fixed Time Step` in the physics configuration, for example change it from `0.016667` to `0.008` for more accurate physics but this will be more expensive on the CPU.

## Code to handle smoothing between 2 entities
This should be all thats needed to attach 2 entities together. Make sure that you unparent the entity you are trying to smooth or else the transofrm processor will override this script.
```cs
[ComponentCategory("Utils")]
[DataContract("SmoothFollowAndRotate")]
public class SmoothFollowAndRotate : SyncScript
{
	public Entity EntityToFollow { get; set; }
	public float Speed { get; set; } = 1;

	public override void Update()
	{
		var deltaTime = (float)this.Game.UpdateTime.Elapsed.TotalSeconds;
		var currentPosition = Entity.Transform.Position;
		var currentRotation = Entity.Transform.Rotation;

		EntityToFollow.Transform.GetWorldTransformation(out var otherPosition, out var otherRotation, out var _);

		var newPosition = Vector3.Lerp(currentPosition, otherPosition, Speed * deltaTime);
		Entity.Transform.Position = newPosition;

		Quaternion.Slerp(ref currentRotation, ref otherRotation, Speed * deltaTime, out var newRotation);
		Entity.Transform.Rotation = newRotation;
	}
}
```

## Example Usage
For this example we will modify the First Person Shooter Template.

Step 1: Detach the camera from the Physics entity

Step 2: Remove the FPS camera script from the camera

Step 3: create a new entity as a child to the character body

Step 4: Add the FPS script to the new entity

Step 5: change the following code since they reference the CameraComponent directly

### PlayerInput.cs
change
```cs
public CameraComponent Camera { get; set; }
```
to
```cs
public Entity Camera { get; set; }
```

---

### Utils.cs
change
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
`var inverseView = camera.Transform.WorldMatrix;`

---

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
            var rotation = Quaternion.RotationYawPitchRoll(Yaw, Pitch, 0);

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

That should be all thats needed to see the smoothing in action as a before and after. You can see the original issue in the Stride Github [here](https://github.com/stride3d/stride/issues/2216) if you need to find more info on the problem.
