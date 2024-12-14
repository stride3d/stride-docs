# Static

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

**Static colliders** aren't moved by forces such as gravity and collisions, but other physics objects can bump into them. Typical static colliders are strong immovable objects like walls, floors, large rocks, and so on.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Add a Static Component to an Entity

1. In the **Scene Editor**, select the entity you want to add the component to.

2. In the **Property Grid**, click `Add component`, hover `Physics - Bepu` and select `StaticComponent`.

   ![Add static component](media/add-static-component.png)

> [!Note]
> You will need to set a collider for this newly created static component, you can do so through the Collider property, see [collider shapes](collider-shapes.md).

Have a look at the [API](xref:Stride.BepuPhysics.StaticComponent) for more detail on the properties of this component.

## Moving Static Components at Runtime

Moving a static collider while your game runs is generally not recommended as it will lead to unexpected collision issues and performance degradation. Moving it every couple of seconds should be fine, but if you have to move it more frequently, use a [Body](rigid-bodies.md) instead.

## See also

* [Bodies](rigid-bodies.md)
* [Characters](characters.md)
* [Collider shapes](collider-shapes.md)
* [Triggers](triggers.md)