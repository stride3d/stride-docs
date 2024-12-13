# Physics simulation

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

Stride's physics are controlled by the [Simulation](xref:Stride.BepuPhysics.BepuSimulation) class.
You can change how Stride initializes the [Simulation](xref:Stride.BepuPhysics.BepuSimulation) by going to the [Configuration](configuration.md) section of your game's settings.

These settings control the rules and parameters your physics simulation run under, enabling customization and fine-tuning of the physics environment to suit your game's requirements.
You may also create multiple simulations and distribute your physics object between them depending on your needs.

Have a look at the [API](https://doc.stride3d.net/latest/en/api/index.html) for more detail on what each property does.

## Collision Layers and the Collision Matrix

You can assign your physics object to specific collision layers, those layers can then be set to ignore objects assigned to other layers. 

Those rules can be set by modifying the collision matrix at runtime, or through the `Layer[...]` fields in the editor.

For example, pressing `Change values...`  next to `Layer0` and un-ticking `Layer1` would cause all objects on `Layer0` to pass through objects on `Layer1`.

## See also
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)