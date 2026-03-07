# Startup script

Startup scripts run when they are added or removed from a scene.

```csharp
public class Example : StartupScript
{
    public override void Start()
    {
        // Do logic for when the script is loaded
    }
    
    public override void Cancel()
    {
        // Do logic for when the script is unloaded
    }
}
```

## When to use

Startup scripts are meant to be used for **executing code once when the scene is loaded or when an entity the script is attached to is added to a scene**. They serve as a way to initialize other scripts and entities, but not control them every frame.

However, if your code **needs to await asynchronous methods**, then it's advised to **use an [asynchronous script](./async-script.md)** instead.

## Overridable methods

Startup scripts feature 2 methods which can be overridden in order to perform game logic.

> [!NOTE]
> These methods **only get called during runtime** - they will never be called in Game Studio.

### `Start()`

The start method gets called only once when the script is loaded. This includes:
* When a scene the script is in gets loaded
* When an entity the script is attached to gets added to the scene
* When the script gets added to an entity in a scene

### `Cancel()`

The cancel method gets called only once when the script is unloaded. This includes:
* When a scene the script is in gets unloaded
* When an entity the script is attached to gets removed from the scene
* When the script gets removed from a scene entity
* When the game gets closed
