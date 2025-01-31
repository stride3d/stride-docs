# Bepu Physics

![Physics in Stride](media/physics-index-physics-in-stride.png)

> [!WARNING]
> These pages are being updated. [Bullet Physics](../physics-bullet/index.md) is being phased out. We no longer plan to support or expand its features as our focus shifts to Bepu Physics. We recommend transitioning to Bepu Physics for access to the latest updates and ongoing improvements.

Stride simulates real-world physics such as gravity and collisions using "Bepu physics".
This section explains how physics components work, how to add them to your project, and how to use them with scripts.

## In this section

* [Configuration](configuration.md): Setting up Bepu
* [Simulation](simulation.md): Managing the simulations parameters
* [Collidables](colliders.md): Physics objects in your game world
    * [Statics](static-colliders.md): Strong immovable objects such as terrain, walls, floors, or large rocks
    * [Bodies](rigid-bodies.md): Movable objects that can be knocked around, like cans, balls, or boxes
    * [Kinematic Bodies](kinematic-rigid-bodies.md): Entities moved programmatically, such as moving platforms or doors
    * [Characters](characters.md): Creatures moved programmatically, such as the player character, animals, or NPCs (non-player characters)
* [Collider Shapes](collider-shapes.md): Define the geometric shape of yours collidable components
* [Triggers](triggers.md): Use triggers to detect passing objects
* [Constraints](constraints.md): Join physics objects together, constrain them around points
* [Physics Queries](raycasting.md): Operations to find objects in the scene
* [Physics Update](physics-update.md): Updating logic alongside physics

### Tutorials

* [Physics tutorials](tutorials.md)
* [Create a bouncing ball](create-a-bouncing-ball.md): Use the static collider and rigidbody components to create a ball bouncing on a floor
* [Script a trigger](script-a-trigger.md): Create a trigger that doubles the size of a ball when the ball passes through it

## Additional physics resources

- Stride integrates the open-source [Bepu Physics engine](https://github.com/bepu/bepuphysics2). 
   - Explore the [official Bepu website](https://www.bepuentertainment.com/)
   - Watch demos on the [Bepu YouTube](https://www.youtube.com/@bepu)
- For solutions on mitigating physics jitter, refer to our guide on [Fixing Physics Jitter](fix-physics-jitter.md)