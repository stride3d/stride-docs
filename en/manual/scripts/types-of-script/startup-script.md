# Startup script

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

Startup scripts run when they are added or removed from a scene.

```csharp
public class Example : StartupScript
{
    public override void Start()
    {
        // Do stuff for when the script is loaded
    }
    
    public override void Cancel()
    {
        // Do stuff for when the script is unloaded
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

The [Start](xref:Stride.Engine.StartupScript.Start) method gets called when the script is added to the game. For example:
* When a scene the script is in gets loaded
* When a new entity containing the script is added to a scene
* When the script gets added to an already existing entity

The method may be executed more than once if an entity the script is attached to gets removed and then re-added to the scene.

### `Cancel()`

The [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method gets called when the script is removed from the game. This includes:
* When a scene the script is in gets unloaded
* When an entity the script is attached to gets removed from it's scene
* When the script gets removed from a scene entity
* When the game gets closed

The method may be executed more than once if an entity the script is attached to gets re-added and then removed from the scene.
