# Triggers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

If you set a collider to be a **trigger**, other colliders no longer bump into it. Instead, they pass through.

The trigger detects when colliders enter it, which you can use to script events. For example, you can detect when a player character enters a room, and use this in your script to trigger an event. For more information, see [Events](../scripts/events.md).

>[!Note]
>[Character colliders](characters.md) can't be used as triggers.

## Create a trigger 

1. Create a [collider](colliders.md).

2. In the **Property Grid**, under the collider component properties, select **Is Trigger**.

![Select 'Is trigger'](media/triggers-select-is-trigger-checkbox.png)

## Detect trigger collisions

You can see when something enters the trigger using the following code:

```cs
// Wait for an entity to collide with the trigger
                var firstCollision = await trigger.NewCollision();

                var otherCollider = trigger == firstCollision.ColliderA ? firstCollision.ColliderB : firstCollision.ColliderA;
```

Alternatively, directly access the `TrackingHashSet`:

```cs
var trigger = Entity.Get<PhysicsComponent>();
foreach (var collision in trigger.Collisions)
{
    //do something with the collision
}
```

Or use the `TrackingHashSet` events:

```cs
var trigger = Entity.Get<PhysicsComponent>();
trigger.Collisions.CollectionChanged += (sender, args) =>
{
    if (args.Action == NotifyCollectionChangedAction.Add)
    {
        //new collision
        var collision = (Collision) args.Item;
        //do something
    }
    else if (args.Action == NotifyCollectionChangedAction.Remove)
    {
        //old collision
        var collision = (Collision)args.Item;
        //do something
    }
};
```

For an example of how to use triggers, see the [Script a trigger](script-a-trigger.md) tutorial.

## See also

* [Tutorial: Script a trigger](script-a-trigger.md)
* [Colliders](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Events](../scripts/events.md)