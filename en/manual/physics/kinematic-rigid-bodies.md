# Kinematic Bodies

Sometimes you want to move [bodies](rigid-bodies.md) in a specific way rather than have physics apply outside forces, like drag, inertia, etc. For example, you might control an elevator directly through its `LinearVelocity` property, rather than have other objects push and pull it. This is a **kinematic** body.

Although kinematic bodies aren't bound by physics, other objects can still collide with them. For example, in the case of the elevator, objects placed inside won't fall through the elevator floor.

![Kinematic elevator](media/rigid-bodies-kinematic-elevator.png)

## Make a Kinematic Body

1. Select the entity you want to be a kinematic body.

2. In the **Property Grid**, under the **Body** component properties, select `Kinematic`.

    ![Check 'Is kinematic'](media/rigid-bodies-is-kinematic-checkbox.png)

## Scripting Kinematic Bodies

You can script the `Kinematic` property to turn on and off on certain events. For example, imagine our kinematic elevator's suspension cables are cut. You can script the **Kinematic** property to change to *false* when this happens. The elevator becomes subject to the usual forces of physics, and falls.

![Non-kinematic elevator](media/rigid-bodies-non-kinematic-elevator.png)

## See also

* [bodies](rigid-bodies.md)
* [Statics](static-colliders.md)
* [Characters](characters.md)
* [Collider shapes](collider-shapes.md)
* [Triggers](triggers.md)