# Events
# События

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Events** facilitate communication between scripts. They work one-way, broadcast from **broadcasters** to **receivers**. Events come in two flavors, a non-generic version for basic event broadcasting, and a generic version for when data needs to be passed to receivers.
**События** облегчают взаимодействие между сценариями.  Они работают в одну сторону, вещают от **вещателей** к **приемникам**.  События бывают двух видов: неуниверсальная версия для базовой трансляции событий и универсальная версия для передачи данных получателям.

For example, imagine your game has a "Game Over" state that occurs when the player dies. To handle this, you can create a "Game Over" event, which is broadcast to all scripts with receivers listening for the event. When the event is broadcast, the receivers run appropriate scripts to handle the Game Over event (eg reset enemies, replace level objects, start a new timer, etc). You can also send information related to the "Game Over" state (eg game stats, who won, etc).
Например, представьте, что в вашей игре есть состояние «Игра окончена», которое возникает, когда игрок умирает.  Чтобы справиться с этим, вы можете создать событие «Game Over», которое транслируется на все сценарии с приемниками, прослушивающими событие.  Когда событие транслируется, приемники запускают соответствующие сценарии для обработки события Game Over (например, сброс врагов, замена объектов уровня, запуск нового таймера и т. д.).  Вы также можете отправить информацию, связанную с состоянием «Игра окончена» (например, статистику игры, кто выиграл и т. д.).

>[!Note]
>[!Примечание]
>Events are handled entirely in scripts. You can't configure them in Game Studio.
> События обрабатываются полностью в сценариях.  Вы не можете настроить их в Game Studio.

## Create and broadcast an event
## Создать и транслировать событие

Broadcasters in the Stride API are of type [EventKey](xref:Stride.Engine.Events.EventKey) or [EventKey&lt;T>](xref:Stride.Engine.Events.EventKey`1). They use the method [Broadcast](xref:Stride.Engine.Events.EventKey#Stride_Engine_Events_EventKey_Broadcast) or [Broadcast(T)](xref:Stride.Engine.Events.EventKey`1#Stride_Engine_Events_EventKey_1_Broadcast__0_) to broadcast events to receivers.
Вещатели в Stride API имеют тип [EventKey](xref:Stride.Engine.Events.EventKey) или [EventKey<T>](xref:Stride.Engine.Events.EventKey`1).  Они используют метод [Broadcast](xref:Stride.Engine.Events.EventKey#Stride_Engine_Events_EventKey_Broadcast) или [Broadcast(T)](xref:Stride.Engine.Events.EventKey`1#Stride_Engine_Events_EventKey_1_Broadcast__0_) для трансляции событий получателям.

For example, this code creates two "Game Over" events. One with a non-generic and the other with a generic version of EventKey:
Например, этот код создает два события Game Over.  Один с неуниверсальным, а другой с универсальной версией EventKey:

```cs
```CS
public static class GlobalEvents
общедоступный статический класс GlobalEvents
{
{
    public static EventKey GameOverEventKey = new EventKey("Global", "Game Over");
public static EventKey GameOverEventKey = new EventKey (
    public static EventKey<string> GameOverWithDataEventKey = new EventKey<string>("Global", "Game Over With Data");
public static EventKey<string> GameOverWithDataEventKey = new EventKey<string>(

    public static void SendGameOverEvent()
public static void SendGameOverEvent()
    {
{
        GameOverEventKey.Broadcast();
GameOverEventKey.Broadcast();
        GameOverWithDataEventKey.Broadcast("Player 1");
GameOverWithDataEventKey.Broadcast(
    }
}
}
}
```
```

## Create a receiver
## Создать приемник

Receivers in the Stride API are of type [EventReceiver](xref:Stride.Engine.Events.EventReceiver) or [EventReceiver&lt;T>](xref:Stride.Engine.Events.EventReceiver`1).
Приемники в API Stride имеют тип [EventReceiver](xref:Stride.Engine.Events.EventReceiver) или [EventReceiver<T>](xref:Stride.Engine.Events.EventReceiver`1).

To receive the "Game Over" events described above, use:
Чтобы получить события Game Over, описанные выше, используйте:

```cs
```CS
var gameOverListener = new EventReceiver(GlobalEvents.GameOverEventKey);
var gameOverListener = новый EventReceiver(GlobalEvents.GameOverEventKey);
var gameIsOver = gameOverListener.TryReceive();
var gameIsOver = gameOverListener.TryReceive();

var gameOverListenerWithData = new EventReceiver<string>(GlobalEvents.GameOverWithDataEventKey);
var gameOverListenerWithData = new EventReceiver<string>(GlobalEvents.GameOverWithDataEventKey);
if(gameOverListenerWithData.TryReceive(out string data))
if(gameOverListenerWithData.TryReceive(выходные строковые данные))
{
{
	//data == "Player 1"
//данные == 
}
}

//Or in Async
//Или в асинхронном режиме
await gameOverListener.ReceiveAsync();
ожидайте gameOverListener.ReceiveAsync();
string asyncData = await gameOverListenerWithData.ReceiveAsync();
строка asyncData = await gameOverListenerWithData.ReceiveAsync();
//asyncData == "Player 1"
//asyncData == 
```
```

## See also
## Смотрите также

* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
