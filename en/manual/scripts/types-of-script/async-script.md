# Async script

<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>

Asynchronous scripts get executed only once asynchronously. They can be used for initializing the scene and it's contents or performing game logic for every frame.

```csharp
public class Example : AsyncScript
{
    public override Task Execute()
    {
        // Execute the asynchronous code
    }
    
    public override void Cancel()
    {
        // Do stuff for when the script is unloaded
    }
}
```

## When to use

Asynchronous scripts are meant to be used for doing game logic that needs to await something.

If you **don't need to await any tasks**, consider **using a [startup script](./startup-script.md) or a [synchronous script](./sync-script.md)** instead.

## What is asynchronous code?

Asynchronous programming in C# means writing code that can **run in parallel**.

For example: let's say we have a method for saving the game's state that **takes 10 seconds** to execute. Instead of pausing everything until it finishes running, **we can run it asynchronously**, meaning that **the game can continue while we are saving the player's progress**.

An asynchronous method is a normal method that returns a `Task`, which can then be awaited. While it's running, other non asynchronous and asynchronous code will be allowed to run.

```csharp
protected override async Task Execute()
{
    // Waits for 1 second without freezing the game
    await Task.Delay(1000);
}
```

## Performing code every frame

In order to keep performing logic for every frame (like a synchronous script), you can use `Script.NextFrame()` in a loop.

```csharp
public class Example : AsyncScript
{
    public override async Task Execute()
    {
        // Initialization code goes here
        
        // A loop that will keep running as long as the script is active
        while (Game.IsRunning)
        {
            // Code that gets executed every frame goes here
            
            await Script.NextFrame();
        }
    }
}
```

## Executing tasks in parallel

Sometimes it's useful to execute two async tasks in the same script. This can be achieved using [`Script.AddTask()`](xref:Stride.Engine.Processors.ScriptSystem.AddTask).

```csharp
public class Example : AsyncScript
{
    public override async Task Execute()
    {
        Script.AddTask(ParallelTask);
        
        // Execute code at the same time as ParallelTask
    }
    
    private async Task ParallelTask()
    {        
        // Execute code at the same time as Execute
    }
}
```

> [!WARNING]
> **Avoid using [`Task.Run`](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.run)** for parallel tasks, as it will execute your code **on the thread pool instead of the main thread**. This will make interacting with the engine **unsafe** and could result in **unexpected behaviours**.

## Overridable methods

Asynchronous scripts feature 2 methods which can be overridden in order to perform game logic.

> [!NOTE]
> These methods **only get called during runtime** - they will never be called in Game Studio.

### `Execute()`

The [Execute](xref:Stride.Engine.AsyncScript.Execute) method gets called when the script is added to the game. For example:
* When a scene the script is in gets loaded
* When a new entity containing the script is added to a scene
* When the script is added to an already existing entity

The method may be executed more than once if an entity the script is attached to gets removed and then re-added to the scene.

### `Cancel()`

The [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method gets called when the script is removed from the game. This includes:
* When a scene the script is in gets unloaded
* When an entity the script is attached to gets removed from it's scene
* When the script gets removed from a scene entity
* When the game gets closed

The method may be executed more than once if an entity the script is attached to gets re-added and then removed from the scene.

## Tutorial

Check out the [Async scripts tutorial](../../../tutorials/csharpintermediate/async-scripts.md) for more examples.
