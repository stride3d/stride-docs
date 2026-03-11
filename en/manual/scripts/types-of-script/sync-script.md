# Sync script

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

Synchronous scripts run for every frame of the game. They feature the same methods as [startup scripts](./startup-script.md), with the addition of [`Update()`](#update).

```csharp
public class Example : SyncScript
{
    public override void Start()
    {
        // Do stuff for when the script is loaded
    }
    
    public override void Update()
    {
        // Do stuff that needs to be performed every frame
    }
    
    public override void Cancel()
    {
        // Do stuff for when the script is unloaded
    }
}
```

## When to use

Synchronous scripts are meant to be used for doing game logic that needs to be performed every frame or that needs to react to changes (like user input).

However, if your code **needs to await asynchronous methods**, then it's advised to **use an [asynchronous script](./async-script.md)** instead.

## Initialization

Often, synchronization scripts need to access things from the rest of the game. Doing this every frame is unnecessary, which is why it's recommended to do the initialization in the [Start](#start) method and then access data from it in [Update](#update).

```csharp
public class Example : SyncScript
{
    private MyExampleService service;
    
    // Initialize our script
    public class Start()
    {
        service = Services.GetService<MyExampleService>();
    }
    
    // Perform logic every frame
    public class Update()
    {
        service.DoSomething();
    }
}
```

## Time between Update

Sync scripts often use the time in between frames in order to calculate certain values (eg changing an entity's position every frame in order to move it at a constant speed). For this, we use [`Game.UpdateTime.Elapsed`](xref:Stride.Games.GameTime.Elapsed).

```csharp
public class Example : SyncScript
{
    public override void Update()
    {
        // This will keep moving the entity up at a constant rate
        Entity.Transform.Position += (float)Game.UpdateTime.Elapsed.TotalSeconds * Vector3.UnitY;
    }
}
```

Keep in mind, **this value isn't influenced by the [time factor](xref:Stride.Games.GameTime.Factor)**, which is a variable that can be modified in order to speed up or slow down the game. Most commonly, it's used when **pausing the game** which in the above example, **won't do anything**.

To change this, we can either multiply [`Elapsed`](xref:Stride.Games.GameTime.Elapsed) by [`Factor`](xref:Stride.Games.GameTime.Factor) or simply use [`WarpElapsed`](xref:Stride.Games.GameTime.WarpElapsed).

```csharp
public class Example : SyncScript
{
    public override void Start()
    {
        // Pausing the game
        Game.UpdateTime.Factor = 0;
    }
    
    public override void Update()
    {
        // This won't do anything, because the factor is set to 0
        Entity.Transform.Position += (float)Game.UpdateTime.WarpElapsed.TotalSeconds * Vector3.UnitY;
    }
}
```

## Overridable methods

Synchronous scripts feature 3 methods which can be overridden in order to perform game logic.

> [!NOTE]
> These methods **only get called during runtime** - they will never be called in Game Studio.

### `Start()`

The [Start](xref:Stride.Engine.StartupScript.Start) method gets called when the script is added to the game. For example:
* When a scene the script is in gets loaded
* When a new entity containing the script is added to a scene
* When the script gets added to an already existing entity

The method may be executed more than once if an entity the script is attached to gets removed and then re-added to the scene.

### `Update()`

The [Update](xref:Stride.Engine.SyncScript.Update) method gets called every frame when the script is in a scene.

### `Cancel()`

The [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method gets called when the script is removed from the game. This includes:
* When a scene the script is in gets unloaded
* When an entity the script is attached to gets removed from it's scene
* When the script gets removed from a scene entity
* When the game gets closed

The method may be executed more than once if an entity the script is attached to gets re-added and then removed from the scene.
