# Physics Jitter

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

Physics engine operate on a fixed time step; instead of updating physics every frame, physics engine update at a fixed frequency, 60 times per second for example.

> [!Note]
> This is controlled through the `FixedTimeStep` property in your [Simulation Settings](simulation.md)

The discrepancy between when your game updates and when physics updates means that you may see physics objects, or things that are attached to physics objects, move in a jittery manner. They jitter because they stay static after every physics update while the whole rest of the world moves every single frame.

It becomes less noticeable when your frame rate approaches the physics update rate, but it will always occasionally jitter as there is no feasible way to reach exact parity between frame rate and physics.

There are ways to combat this issue though.

## Body Component Interpolation Mode

Bodies have an `Interpolation Mode` property, this property smooth out the jitter by interpolating the bodies' position and rotation between every physics update.
- `Interpolated` takes the two last position and rotation the physics engine set for this body and smoothly moves the object from the oldest to the youngest position. This means that the object is always 'in the past' compared to its physics representation since it is always between the two last position instead of exactly at the last one.
- `Extrapolated` also takes the two last position and rotation, but instead of being between the two, it starts from the last position and continues moving in the same direction. If the velocity of the object is constant, this works perfectly, but if it suddenly collides along that path, it will 'correct' itself leading to some jerky motion.

## Jitter when a physics object follows another

There is a fair amount of jitter issues that may come up when setting up objects to move relative to each other.
Here's everything that may prevent those objects from moving smoothly:
- The objects are not set to interpolate
- Your logic does not run in [Physics Update](physics-update.md), it overrides interpolation
- You are setting the entity's position/rotation instead of the physics object's `LinearVelocity`/`AngularVelocity`
- Your objects are not `Awake`

Lastly, maybe consider using a [Constraint](constraints.md) instead.

## See also

* [Simulation](simulation.md)
* [Index](index.md)