# Character

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Character** colliders are used for player and script-controlled characters such as NPCs. Entities with [character components](xref:Stride.BepuPhysics.CharacterComponent) can be moved with [Move](xref:Stride.BepuPhysics.CharacterComponent.Move\(Stride.Core.Mathematics.Vector3\)), [TryJump](xref:Stride.BepuPhysics.CharacterComponent.TryJump), and teleported by setting its [Position](xref:Stride.BepuPhysics.BodyComponent.Position) property.

## Add a character component to an entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property Grid**, click `Add component`, hover `Physics - Bepu` and select `CharacterComponent`.

    ![Add character component](media/add-character-component.png)

>[!Note]
> You will need to set a collider for this newly created character, you can do so through the Collider property. The capsule shape is appropriate for most character colliders. For more information, see [collider shapes](collider-shapes.md).

> [!WARNING]
> Never use mesh colliders for characters, use them only for statics, they are far too slow to be used as bodies. If you absolutely need a more complex shape than the primitive ones, use a convex hull instead, see [collider shapes](collider-shapes.md).

Have a look at the [API](xref:Stride.BepuPhysics.CharacterComponent) for more detail on what each property does.

## See also

* [Static colliders](static-colliders.md)
* [Rigidbodies](rigid-bodies.md)
* [Collider shapes](collider-shapes.md)