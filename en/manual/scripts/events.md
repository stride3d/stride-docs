# Events

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

**Events** facilitate communication between scripts. They work one-way, broadcast from **broadcasters** to **receivers**.

For example, imagine your game has a "Game Over" state that occurs when the player dies. To handle this, you can create a "Game Over" event, which is broadcast to all scripts with receivers listening for the event. When the event is broadcast, the receivers run appropriate scripts to handle the Game Over event (eg reset enemies, replace level objects, start a new timer, etc).

>[!Note]
>Events are handled entirely in scripts. You can't configure them in Game Studio.

## Create and broadcast an event

Broadcasters in the Xenko API are of type [EventKey](xref:Xenko.Engine.Events.EventKey). They use the method [Broadcast](xref:Xenko.Engine.Events.EventKey#Xenko_Engine_Events_EventKey_Broadcast) to broadcast events to receivers.

For example, this code creates a "Game Over" event:

```cs
public static class GlobalEvents
{
    public static EventKey GameOverEventKey = new EventKey("Global", "Game Over");

    public static void SendGameOverEvent()
    {
        GameOverEventKey.Broadcast();
    }
}
```

## Create a receiver

Receivers in the Xenko API are of type [EventReceiver](xref:Xenko.Engine.Events.EventReceiver).

To receive the "Game Over" event described above, use:

```cs
var gameOverListener = new EventReceiver(GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();

//Or in Async
await gameOverListener.ReceiveAsync();
```

## See also

* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)