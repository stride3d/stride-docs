# Types of script

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

There are three main types of script in Stride: **startup scripts**, **synchronous scripts**, and **asynchronous scripts**. 

When you write your script, inherit from the type of script with the behavior that best fits your needs.

## Startup scripts

Startup scripts only run when they are added or removed at runtime. They're mostly used to initialize game elements (eg spawning characters) and destroy them when the scene is unloaded. They have a [Start](xref:Stride.Engine.StartupScript.Start) method for initialization and a [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method. You can override either method if you need to.

Example:

```cs
public class StartUpScriptExample : StartupScript
{
  public override void Start()
  {
    // Do some stuff during initialization
  }
}
```

## Synchronous scripts

Synchronous scripts are initialized, then updated every frame, and finally canceled (when the script is removed).

* The initialization code, if any, goes in the [Start](xref:Stride.Engine.StartupScript.Start) method.
* The code performing the update goes in the [Update](xref:Stride.Engine.SyncScript.Update) method.
* The code performing the cancellation goes in the [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method.

The following script performs updates every frame, no matter what:

```cs
public class SampleSyncScript : SyncScript
{        
  public override void Update()
  {
    // Performs the update on the entity — this code is executed every frame
  }
}
```

## Asynchronous scripts

Asynchronous scripts are initialized only once, then canceled when removed from the scene.

* Asynchronous code goes in the [Execute](xref:Stride.Engine.AsyncScript.Execute) function.
* Code performing the cancellation goes in the [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method.

The following script performs actions that depend on events and triggers:

```cs
public class SampleAsyncScript : AsyncScript
{        
  public override async Task Execute() 
  {
    // The initialization code should come here, if necessary
    // This method starts running on the main thread
      
    while (Game.IsRunning) // loop until the game ends (optionalpendingon the script)
    {
      // We're still on the main thread

      // Task.Run will pause the execution of this method until the task is completed,
      // while that's going on, the game will continue running, it will display new frames and process inputs appropriately
      var lobbies = await Task.Run(() => GetMultiplayerLobbies());

      // After awaiting a task, the thread the method runs on will have changed,
      // this method now runs on a thread pool thread instead of the main thread
      // You can manipulate the data returned by the task here if needed
      // But if you want to interact with the engine safely, you have to make sure the method runs on the main thread

      // await Script.NextFrame() yields execution of this method to the main thread,
      // meaning that this method is paused, and once the main thread processes the next frame,
      // it will pick that method up and run it
      await Script.NextFrame();
      // So after this call, this method is back on the main thread

      // You can now safely interact with the engine's systems by displaying the lobbies retrieved above in a UI for example
    }
  }
}
```

Check out an example from our [Async scripts tutorial](../../tutorials/csharpintermediate/async-scripts.md).

## See also

* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
