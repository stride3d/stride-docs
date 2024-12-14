# Body

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

> [!WARNING]
> This page is outdated, the information contained therein are for Bullet, the previous physics engine

**Body** move based on physical forces applied to them, such as gravity and collisions. Typical (rigid)bodies are boxes, balls, furniture, and so on — objects that are pushed, pulled, and knocked around, and also have effects on other rigidbodies they collide with.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Add a rigidbody collider

1. Select the entity you want to be a body.

2. In the **Property Grid**, click **Add component** and select **body**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)

3. Set the [collider shape](collider-shapes.md) to match the entity. To do this, in the **Property Grid**, expand the **Rigidbody component** to view its properties.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the shape you want.

     ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)

## Component properties

You can adjust the rigidbody properties in the **Property Grid**.

![Rigidbody properties](media/rigid-body-properties.png)

Property              | Description
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
Is Trigger            | Toggles whether the rigidbody is a [trigger](triggers.md).
Is Kinematic          | Toggles whether the rigidbody is [kinematic](kinematic-rigid-bodies.md) and therefore moved only by its Transform property.
Mass                  | Sets the collider mass. For large differences, use a point value; for example, write *0.1* or *10*, not *1* or *100000*.
Linear damping        | The amount of damping for directional forces.
Angular damping       | The amount of damping for rotational forces.
Override Gravity      | Overrides gravity with the vector specified in Gravity.
Gravity               | Sets a custom gravity vector applied if Override Gravity is selected.
Node Name             | If the collider entity contains a bone structure, the node name can refer to a bones node name to be linked to that specific bone.
Collider Shapes       | Adds a [collider shape](collider-shapes.md).

## See also

* [Kinematic rigidbodies](kinematic-rigid-bodies.md)
* [Static colliders](static-colliders.md)
* [Characters](characters.md)
* [Collider shapes](collider-shapes.md)
* [Triggers](triggers.md)