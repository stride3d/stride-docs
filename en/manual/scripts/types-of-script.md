# Types of script

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

There are three main types of script in Xenko: **startup scripts**, **synchronous scripts**, and **asynchronous scripts**. 

When you write your script, inherit from the type of script with the behavior that best fits your needs.

## Startup scripts

Startup scripts only run when they are added or removed at runtime. They're mostly used to initialize game elements (eg spawning characters) and destroy them when the scene is unloaded. They have a [Start](xref:Xenko.Engine.StartupScript.Start) method for initialization and a [Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) method. You can override either method if you need to.

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

* The initialization code, if any, goes in the [Start](xref:Xenko.Engine.StartupScript.Start) method.
* The code performing the update goes in the [Update](xref:Xenko.Engine.SyncScript.Update) method.
* The code performing the cancellation goes in the [Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) method.

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

* Asynchronous code goes in the [Execute](xref:Xenko.Engine.AsyncScript.Execute) function.

* Code performing the cancellation goes in the [Cancel](xref:Xenko.Engine.ScriptComponent.Cancel) method.

The following script performs actions that depend on events and triggers:

```cs
public class SampleAsyncScript : AsyncScript
{        
	public override async Task Execute() 
	{
		// The initialization code should come here, if necessary
		
		while (Game.IsRunning) // loop until the game ends (optional depending on the script)
		{
			await MyEvent;

			// Do some stuff
			
			await Script.NextFrame(); // wait for the next frame (optional depending on the script)
		}
	}
}
```

## See also

* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Events](events.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)