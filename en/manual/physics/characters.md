# Character

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Characters** are used for player and NPC movement. Entities with [character components](xref:Stride.BepuPhysics.CharacterComponent) can be moved with [Move](xref:Stride.BepuPhysics.CharacterComponent.Move\(Stride.Core.Mathematics.Vector3\)), [TryJump](xref:Stride.BepuPhysics.CharacterComponent.TryJump), and teleported by setting its [Position](xref:Stride.BepuPhysics.BodyComponent.Position) property.

## Add a Character Component to an Entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property Grid**, click `Add component`, hover `Physics - Bepu` and select `CharacterComponent`.

    ![Add character component](media/add-character-component.png)

> [!Note]
> You will need to set a collider for this newly created character, you can do so through the Collider property. The capsule shape is appropriate for most character colliders. For more information, see [collider shapes](collider-shapes.md).

> [!WARNING]
> Never use mesh colliders for characters, use them only for statics, they are far too slow to be used as characters. If you absolutely need a more complex shape than the primitive ones, use a convex hull instead, see [collider shapes](collider-shapes.md).

Have a look at the [API](xref:Stride.BepuPhysics.CharacterComponent) for more detail on the properties of this component.

## Custom Character Controllers

> [!IMPORTANT]
> The `CharacterComponent`'s default `IsGrounded` handling temporarily overrides the `Gravity` flag: when the character is grounded and idle, `Gravity` is set to `false` to prevent sliding down slopes. If you need to disable or customize gravity (for flying characters or special movement modes), derive from `CharacterComponent` and adjust the update logic.

When creating a controller, it is recommended to create a new class inheriting from this component instead of using it as is, you can access its internal state and override it with your own logic to better fit your game.

```cs
using Stride.BepuPhysics;
using Stride.Core.Mathematics;

public class MyCharacterController : CharacterComponent
{
    public override void Move(Vector3 direction)
    {
        base.Move(direction);
    }

    public override void TryJump()
    {
        base.TryJump();
    }

    public override void SimulationUpdate(BepuSimulation sim, float simTimeStep)
    {
        base.SimulationUpdate(sim, simTimeStep);
    }

    public override void AfterSimulationUpdate(BepuSimulation sim, float simTimeStep)
    {
        base.AfterSimulationUpdate(sim, simTimeStep);
    }
}
```

## See also

* [Statics](static-colliders.md)
* [Bodies](rigid-bodies.md)
* [Collider shapes](collider-shapes.md)