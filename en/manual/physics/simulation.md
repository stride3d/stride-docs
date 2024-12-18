# Physics simulation

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

Stride's physics are controlled by the [Simulation](xref:Stride.BepuPhysics.BepuSimulation) class.
You can change how Stride initializes the [Simulation](xref:Stride.BepuPhysics.BepuSimulation) by going to the [Configuration](configuration.md) section of your game's settings.

These settings control the rules and parameters your physics simulation run under, enabling customization and fine-tuning of the physics environment to suit your game's requirements.
You may also create multiple simulations and distribute your physics object between them depending on your needs.

Have a look at the [API](xref:Stride.BepuPhysics.BepuSimulation) for more detail on what each property does.

## Collision Layers and the Collision Matrix

You can assign your physics object to specific collision layers, those layers can then be set to ignore objects assigned to other layers. 

Those rules can be set by modifying the collision matrix at runtime, or through the `Layer[...]` fields in the editor.

For example, pressing `Change values...`  next to `Layer0` and un-ticking `Layer1` would cause all objects on `Layer0` to pass through objects on `Layer1`.

## Retrieving the Simulation

There are multiple ways to retrieve a reference to this `BepuSimulation` from inside one of your `ScriptComponent`:
- The recommended way is through a reference to a physics component, something like `myBody.Simulation` as it is the fastest.
- Or through the `Entity.GetSimulation()` extension method.

## Performance Considerations

The following are relevant excerpts from [Bepu's documentation](https://github.com/bepu/bepuphysics2/blob/master/Documentation/PerformanceTips.md)

### General
- **JIT Compilation Spikes**: Large spikes in physics step time after launch may be due to JIT compilation. Consider running a small simulation behind a loading screen to prime all relevant code paths. AOT compilation can also help.
- **Thread Oversubscription**: If recurring spikes occur (especially in the solver), the operating system may be oversubscribing threads. Too many threads vying for CPU time can stall physics. In such cases, reduce the number of threads used by the simulation or by other parts of the engine.

### Shape Optimization
- **Use Simple Shapes**: Spheres and capsules are fastest, then boxes and triangles, followed by cylinders and convex hulls.  
- **Keep Hulls Small**: If using convex hulls, minimize vertex count. Complexity directly affects collision cost.
- **Limit Concave and Mesh Shapes**: Use compounds of simpler shapes instead of concave meshes whenever possible. If absolutely necessary, keep the triangle count low and shapes uniform in size.
- **Reuse Shapes**: Avoid creating many duplicate, large shapes (like complex hulls or meshes). Reusing shapes reduces memory bandwidth and cache issues.
- **Type Consistency**: Using similar shape types can yield small SIMD efficiency gains in the narrow phase.

### Solver Optimization
- **Minimize Iterations**: Use the smallest number of solver iterations that keep the simulation stable. The solver cost grows linearly with iteration count.
- **Substepping**: For complex or stiff constraint configurations, using solver substeps can dramatically improve stability. With substeps, you can often reduce the number of velocity iterations. Consider using substepping if no reasonable iteration count alone stabilizes the simulation. See the [Substepping documentation](Constraints.md) for more details.

## See also
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Constraints](Constraints.md)