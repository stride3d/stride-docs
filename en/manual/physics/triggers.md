# Triggers

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>

A trigger is a collision shape which detects when colliders enter it, it can be used to run an event when a player character enters a room for example.
 
Triggers in Stride's Bepu implementation fall into what is known as a special kind of Contact Event Handler.

The contact event handler is a class that receives collision data whenever the object it is associated with collides with the world.

If the contact event handler you bind to an object is set to `NoContactResponse`, it is a Trigger, the object will never prevent anything from passing through it, it will only receive collision events.

Here's a basic example of a component which acts as a trigger to display a message in the console:
```cs
using Stride.BepuPhysics;
using Stride.BepuPhysics.Definitions.Contacts;
using Stride.Engine;

public class Test : StartupScript, IContactEventHandler
{
    public bool NoContactResponse => true;

    void IContactEventHandler.OnStartedTouching<TManifold>(CollidableComponent eventSource, CollidableComponent other,
        ref TManifold contactManifold,
        bool flippedManifold,
        int workerIndex,
        BepuSimulation bepuSimulation)
    {
        Log.Warning("Entered!");
    }

    void IContactEventHandler.OnStoppedTouching<TManifold>(CollidableComponent eventSource, CollidableComponent other,
        ref TManifold contactManifold,
        bool flippedManifold,
        int workerIndex,
        BepuSimulation bepuSimulation)
    {
        Log.Warning("Exited!");
    }
}
```

For an example of how to use triggers, see the [Script a trigger](script-a-trigger.md) tutorial.

## See also

* [Tutorial: Script a trigger](script-a-trigger.md)
* [Collidables](colliders.md)
* [Collider shapes](collider-shapes.md)