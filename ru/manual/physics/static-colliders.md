# Static colliders

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

**Static colliders** aren't moved by forces such as gravity and collisions, but other physics objects can bump into them. Typical static colliders are strong immovable objects like walls, floors, large rocks, and so on.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Add a static collider
   
1. Select the entity you want to make a static collider.

2. In the **Property Grid**, click **Add component** and select **Static Collider**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

3. Set the [collider shape](collider-shapes.md) to match the shape of the entity. To do this, in the **Property Grid**, expand the **Static Collider component** to view its properties.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the shape you want.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)

## Static collider properties

You can adjust the static collider properties in the **Property Grid**.

![Static collider properties](media/static-collider-properties.png)

Property              |   Description
----------------------|-----------------------
Collision Group       | Sets which collision group the object belongs to.
Can Collide With      | Sets which groups the object collides with.
Collision Events      | If this is enabled, the object reports collision events, which you can use in scripts. It has no effect on physics. If you have no scripts using collision events for the object, disable this option to save CPU.
Can Sleep             | If this is enabled, the physics engine doesn't process physics objects when they're not moving. This saves CPU.
Restitution           | Sets the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. Use this to change the "bounciness" of rigidbodies.
Friction              | Sets the surface friction.
Rolling Friction      | Sets the rolling friction.
CCD Motion Threshold  | Sets the velocity at which continuous collision detection (CCD) takes over. CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.
CCD Swept Sphere Radius | Sets the radius of the bounding sphere containing the position between two physics frames during continuous collision detection.
Is Trigger            | Toggles whether the static collider is a [trigger](triggers.md).

## Move a static collider at runtime

If you need to move a static collider at runtime, you can do it with a script:

```cs
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
```

## See also

* [Rigidbodies](rigid-bodies.md)
* [Characters](characters.md)
* [Collider shapes](collider-shapes.md)
* [Triggers](triggers.md)