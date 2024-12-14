# Physics Update

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

When you need your logic to interact, query or otherwise modify the state of a simulation, you may need to do so right before or after physics updates. You can implement the `ISimulationUpdate` interface in your EntityComponent or Scripts to be notified of when simulation updates.

```cs
using System;
using Stride.BepuPhysics;
using Stride.BepuPhysics.Components;
using Stride.Engine;

public class MyPhysicsComponent : SyncScript, ISimulationUpdate
{
    public override void Update()
    {
        // Here you would call stuff you need to do every frame
    }

    public void SimulationUpdate(BepuSimulation simulation, float simTimeStep)
    {
        // Here is for stuff you need to do right before physics runs, 
        // sample player input, setting body velocities, etc.
    }

    public void AfterSimulationUpdate(BepuSimulation simulation, float simTimeStep)
    {
        // Here is for stuff you need to check right after physics ran, 
        // check if an object collided with anything, if it's on the ground, 
        // if it failed to increase in height when jumping, etc.
    }
}
```

## See also

* [Character](characters.md)
* [Physics Jitter](fix-physics-jitter.md)
* [Body](rigid-bodies.md)
* [Index](index.md)