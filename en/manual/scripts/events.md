# Events

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Programmer</span>

**Events** facilitate communication between scripts. They work one-way, broadcast from **broadcasters** to **receivers**. Events come in two flavors, a non-generic version for basic event broadcasting, and a generic version for when data needs to be passed to receivers.

For example, imagine your game has a "Game Over" state that occurs when the player dies. To handle this, you can create a "Game Over" event, which is broadcast to all scripts with receivers listening for the event. When the event is broadcast, the receivers run appropriate scripts to handle the Game Over event (eg reset enemies, replace level objects, start a new timer, etc). You can also send information related to the "Game Over" state (eg game stats, who won, etc).

>[!Note]
>Events are handled entirely in scripts. You can't configure them in Game Studio.

## Create and broadcast an event

Broadcasters in the Stride API are of type [EventKey](xref:Stride.Engine.Events.EventKey) or [EventKey&lt;T>](xref:Stride.Engine.Events.EventKey`1). They use the method [Broadcast](xref:Stride.Engine.Events.EventKey#Stride_Engine_Events_EventKey_Broadcast) or [Broadcast(T)](xref:Stride.Engine.Events.EventKey`1#Stride_Engine_Events_EventKey_1_Broadcast__0_) to broadcast events to receivers.

For example, this code creates two "Game Over" events. One with a non-generic and the other with a generic version of EventKey:

```cs
public static class GlobalEvents
{
    public static EventKey GameOverEventKey = new EventKey("Global", "Game Over");
    public static EventKey<string> GameOverWithDataEventKey = new EventKeyKey<string>("Global", "Game Over With Data");

    public static void SendGameOverEvent()
    {
        GameOverEventKey.Broadcast();
        GameOverWithDataEventKey.Broadcast("Player 1");
    }
}
```

## Create a receiver

Receivers in the Stride API are of type [EventReceiver](xref:Stride.Engine.Events.EventReceiver) or [EventReceiver&lt;T>](xref:Stride.Engine.Events.EventReceiver`1).

To receive the "Game Over" events described above, use:

```cs
var gameOverListener = new EventReceiver(GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();

var gameOverListenerWithData = new EventReceiver<string>(GlobalEvents.GameOverWithDataEventKey);
if(gameOverListenerWithData.TryReceive(out string data))
{
	//data == "Player 1"
}

//Or in Async
await gameOverListener.ReceiveAsync();
string asyncData = await gameOverListenerWithData.ReceiveAsync();
//asyncData == "Player 1"
```

## See also

* [Types of script](types-of-script.md)
* [Create a script](create-a-script.md)
* [Use a script](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Debugging](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)