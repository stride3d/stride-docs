# Bullet Physics

[!INCLUDE [bullet-deprecation](../../includes/bullet-physics-deprecation.md)]

![Physics in Stride](media/physics-index-physics-in-stride.png)

Stride simulates real-world physics such as gravity and collisions. This section explains how physics components work, how to add them to your project, and how to use them with scripts.

## In this section

* [Colliders](colliders.md): Create physics by adding collider components to entities
    * [Static colliders](static-colliders.md): Colliders that don't move
    * [Rigidbodies](rigid-bodies.md): Moving objects, affected by gravity and collisions
    * [Kinematic rigidbodies](kinematic-rigid-bodies.md): Physics objects controlled by scripts
    * [Characters](characters.md): Colliders for characters (such as player characters and NPCs)
    * [Collider shapes](collider-shapes.md): Define the shape of collider components
    * [Triggers](triggers.md): Use triggers to detect passing objects
    * [Constraints](constraints.md): Create appealing and realistic physics
* [Raycasting](raycasting.md): Trace intersecting objects
* [Simulation](simulation.md): How Stride controls physics

### Tutorials

* [Create a bouncing ball](create-a-bouncing-ball.md): Use the static collider and rigidbody components to create a ball bouncing on a floor
* [Script a trigger](script-a-trigger.md): Create a trigger that doubles the size of a ball when the ball passes through it

## Additional physics resources

- Stride integrates the open-source [Bullet Physics](http://bulletphysics.org/wordpress/) engine. For comprehensive details, consult the [Bullet User Manual](https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf)
- For solutions on mitigating physics jitter, refer to our guide on [Fixing Physics Jitter](fix-physics-jitter.md)