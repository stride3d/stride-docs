# Bepu Physics

![Physics in Stride](media/physics-index-physics-in-stride.png)

> [!WARNING]
> These pages are being updated. [Bullet Physics](../physics-bullet/index.md) is being phased out. We no longer plan to support or expand its features as our focus shifts to Bepu Physics. We recommend transitioning to Bepu Physics for access to the latest updates and ongoing improvements.

Stride simulates real-world physics such as gravity and collisions using "Bepu physics".
This section explains how physics components work, how to add them to your project, and how to use them with scripts.

## In this section

* [Configuration](configuration.md): Manage simulations and all global parameters
* [Collidables](collidables.md): Let's define our object type
    * [Static collidable](static-colliders.md): Objects that don't move (terrain, ..)
    * [Body collidable](rigid-bodies.md): Moving objects, affected by gravity and collisions or Kinematics
    * [Character collidable](characters.md): Colliders for basic characters (such as players, annimals, npcs, ..)
    * [Colliders](colliders.md): Define the geometric shape of yours collidable components
    * [Triggers](triggers.md): Use triggers to detect passing objects
    * [Constraints](constraints.md): Create appealing and realistic physics
* [Raycasting](raycasting.md): Trace intersecting objects

> [!WARNING]
> Pages to redirect or recycle
* [Simulation](simulation.md): How Stride controls physics
* [Collider Shapes](collider-shapes.md): How Stride controls physics
* [Kinematic Rigid Bodies](kinematic-rigid-bodies.md): How Stride controls physics

### Tutorials

* [Physics tutorials](tutorials.md)
* [Create a bouncing ball](create-a-bouncing-ball.md): Use the static collider and rigidbody components to create a ball bouncing on a floor
* [Script a trigger](script-a-trigger.md): Create a trigger that doubles the size of a ball when the ball passes through it

## Additional physics resources

- Stride integrates the open-source [Bepu Physics engine](https://github.com/bepu/bepuphysics2). 
   - Explore the [official Bepu website](https://www.bepuentertainment.com/)
   - Watch demos on the [Bepu YouTube](https://www.youtube.com/@bepu)
- For solutions on mitigating physics jitter, refer to our guide on [Fixing Physics Jitter](fix-physics-jitter.md)