# Physics simulation

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

[!INCLUDE [bullet-deprecation](../../includes/bullet-physics-deprecation.md)]

Stride's physics are controlled by the [Simulation](xref:Stride.Physics.Simulation) class.
You can change how Stride initializes the [simulation](xref:Stride.Physics.Simulation) by modifying flags in [PhysicsSettings](xref:Stride.Physics.PhysicsSettings), accessed in the **GameSettings** asset properties.

>[!Note]
>Your scene must have at least one [Collider](colliders.md) in order for Stride to initialize the [Simulation](xref:Stride.Physics.Simulation) instance.

![Physics Settings](media/simulation-physics-settings.png)

* `CollisionsOnly` initializes the [Simulation](xref:Stride.Physics.Simulation) with collision detection turned on, but no other physics. Objects won't react to physical forces.

* `ContinuousCollisionDetection` initializes the [Simulation](xref:Stride.Physics.Simulation) with continuous collision detection (CCD). CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.

> [!Note] 
> The ``SoftBodySupport``, ``MultiThreaded``, and ``UseHardwareWhenPossible`` flags are currently disabled.

At runtime, you can change some [Simulation](xref:Stride.Physics.Simulation) parameters:

* `Gravity` — the global gravity, in [world units](../game-studio/world-units.md) per second squared
* `FixedTimeStep` — the length of a simulation timestep, in seconds
* `MaxSubSteps` — the maximum number of fixed timesteps the engine takes per update

## See also
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)