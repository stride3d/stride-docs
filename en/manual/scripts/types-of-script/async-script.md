# Async script

Asynchronous scripts get executed only once asynchronously. They can be used for initializing the scene and it's contents or performing game logic for every frame.

```csharp
public class Example : StartupScript
{
    public override Task Execute()
    {
        // Run the asynchronous code
    }
    
    public override void Cancel()
    {
        // Do logic for when the script is unloaded
    }
}
```

## When to use

Asynchronous scripts are meant to be used for doing game logic that needs to await something.

If you **don't need to await any tasks**, consider **using a [startup script](./startup-script.md) or a [synchronous script](./sync-script.md)** instead.

## What is asynchronous code?

Asynchronous programming in C# means writing code that can **run in parallel**.

For example: let's say we have a method for saving the game's state that **takes 10 seconds** to execute. Instead of pausing everything untill it finishes running, **we can run it asynchronously**, meaning that **the game can continue while we are saving the player's progress**.

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

## Threading safety

When executing asynchronous code we can run into a situation, where **two different threads want to access or modify certain values at the same time**. This can result in **unwanted behaviours** or a **race condition**.

This is why it's important to **do everything related to the engine on the main thread**.

At the **start of the [execute](#execute) method**, all non asynchronous code is being executed **on the main thread**. However, after awaiting any task, **proceeding code will be executed on the thread pool**.

In order to return to using the main thread, you can use [`Script.NextFrame()`](xref:Stride.Engine.Processors.ScriptSystem.NextFrame).

```csharp
public class Example : AsyncScript
{
    public override async Task Execute()
    {
        // Main Thread
        // This is where you can interact with other scripts and entities
        
        await Task.Delay(1000);
        
        // Thread Pool
        // Do not interact with other scripts or entities here
        
        await Script.NextFrame();
        
        // Main Thread
        // You can interact with other scripts and entities again
    }
}
```

## Executing tasks in parallel

TODO: write this.

## Overridable methods

Asynchronous scripts feature 2 methods which can be overriden in order to perform game logic.

> [!NOTE]
> These methods **only get called during runtime** - they will never be called in Game Studio.

### `Execute()`

The execute method gets called asynchronously when the script is loaded. This includes:
* When a scene the script is in gets loaded
* When an entity the script is on gets added to the scene
* When the script gets added to a scene entity

### `Cancel()`

The cancel method gets called only once when the script is unloaded. This includes:
* When a scene the script is in gets unloaded
* When an entity the script is attached to gets removed from the scene
* When the script gets removed from a scene entity
* When the game gets closed
