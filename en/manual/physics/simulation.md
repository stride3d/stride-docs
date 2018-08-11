# Physics simulation

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

Xenko's physics are controlled by the [Simulation](xref:Xenko.Physics.Simulation) class.
You can change how Xenko initializes the [simulation](xref:Xenko.Physics.Simulation) by modifying flags in [PhysicsSettings](xref:Xenko.Physics.PhysicsSettings), accessed in the **GameSettings** asset properties.

![Physics Settings](media/simulation-physics-settings.png)

* `CollisionsOnly` initializes the [Simulation](xref:Xenko.Physics.Simulation) with collision detection turned on, but no other physics. Objects won't react to physical forces.

* `ContinuousCollisionDetection` initializes the [Simulation](xref:Xenko.Physics.Simulation) with continuous collision detection (CCD). CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.

> [!Note] 
> The ``SoftBodySupport``, ``MultiThreaded``, and ``UseHardwareWhenPossible`` flags are currently disabled.

At runtime, you can change some [Simulation](xref:Xenko.Physics.Simulation) parameters:

* `Gravity` — the global gravity, in [world units](../game-studio/world-units.md) per second squared
* `FixedTimeStep` — the length of a simulation timestep, in seconds
* `MaxSubSteps` — the maximum number of fixed timesteps the engine takes per update

## See also
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)