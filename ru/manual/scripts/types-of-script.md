# Types of script
# Типы скриптов

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

There are three main types of script in Stride: **startup scripts**, **synchronous scripts**, and **asynchronous scripts**. 
В Stride существует три основных типа скриптов: **стартовые скрипты**, **синхронные скрипты** и **асинхронные скрипты**.

When you write your script, inherit from the type of script with the behavior that best fits your needs.
Когда вы пишете свой сценарий, наследуйте тип сценария с поведением, которое лучше всего соответствует вашим потребностям.

## Startup scripts
## Сценарии запуска

Startup scripts only run when they are added or removed at runtime. They're mostly used to initialize game elements (eg spawning characters) and destroy them when the scene is unloaded. They have a [Start](xref:Stride.Engine.StartupScript.Start) method for initialization and a [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method. You can override either method if you need to.
Сценарии запуска запускаются только тогда, когда они добавляются или удаляются во время выполнения.  В основном они используются для инициализации игровых элементов (например, появления персонажей) и их уничтожения при выгрузке сцены.  У них есть метод [Start](xref:Stride.Engine.StartupScript.Start) для инициализации и метод [Cancel](xref:Stride.Engine.ScriptComponent.Cancel).  Вы можете переопределить любой метод, если вам нужно.

Example:
Пример:

```cs
```CS
public class StartUpScriptExample : StartupScript
открытый класс StartUpScriptExample : StartupScript
{
{
	public override void Start()
публичное переопределение void Start()
	{
{
		// Do some stuff during initialization
// Делаем что-то во время инициализации
	}
}
}
}
```
```

## Synchronous scripts
## Синхронные скрипты

Synchronous scripts are initialized, then updated every frame, and finally canceled (when the script is removed).
Синхронные сценарии инициализируются, затем обновляются в каждом кадре и, наконец, отменяются (при удалении сценария).

* The initialization code, if any, goes in the [Start](xref:Stride.Engine.StartupScript.Start) method.
* Код инициализации, если он есть, находится в методе [Start](xref:Stride.Engine.StartupScript.Start).
* The code performing the update goes in the [Update](xref:Stride.Engine.SyncScript.Update) method.
* Код, выполняющий обновление, находится в методе [Update](xref:Stride.Engine.SyncScript.Update).
* The code performing the cancellation goes in the [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method.
* Код, выполняющий отмену, находится в методе [Cancel](xref:Stride.Engine.ScriptComponent.Cancel).

The following script performs updates every frame, no matter what:
Следующий скрипт выполняет обновления каждый кадр, несмотря ни на что:

```cs
```CS
public class SampleSyncScript : SyncScript
открытый класс SampleSyncScript : SyncScript
{        
{
	public override void Update()
публичное переопределение void Update()
	{
{
		// Performs the update on the entity — this code is executed every frame
// Выполняет обновление объекта — этот код выполняется каждый кадр
	}
}
}
}
```
```

## Asynchronous scripts
## Асинхронные скрипты

Asynchronous scripts are initialized only once, then canceled when removed from the scene.
Асинхронные скрипты инициализируются только один раз, а затем отменяются при удалении со сцены.

* Asynchronous code goes in the [Execute](xref:Stride.Engine.AsyncScript.Execute) function.
* Асинхронный код помещается в функцию [Execute](xref:Stride.Engine.AsyncScript.Execute).

* Code performing the cancellation goes in the [Cancel](xref:Stride.Engine.ScriptComponent.Cancel) method.
* Код, выполняющий отмену, находится в методе [Cancel](xref:Stride.Engine.ScriptComponent.Cancel).

The following script performs actions that depend on events and triggers:
Следующий сценарий выполняет действия, зависящие от событий и триггеров:

```cs
```CS
public class SampleAsyncScript : AsyncScript
открытый класс SampleAsyncScript : AsyncScript
{        
{
	public override async Task Execute() 
публичное переопределение асинхронной задачи Execute()
	{
{
		// The initialization code should come here, if necessary
// Сюда должен прийти код инициализации, если это необходимо
		
		while (Game.IsRunning) // loop until the game ends (optional depending on the script)
while (Game.IsRunning) // цикл, пока игра не закончится (необязательно, в зависимости от скрипта)
		{
{
			await MyEvent;
ждать MyEvent;

			// Do some stuff
// Делаем что-то
			
			await Script.NextFrame(); // wait for the next frame (optional depending on the script)
ожидайте Script.NextFrame();  // ждем следующего кадра (опционально в зависимости от скрипта)
		}
}
	}
}
}
}
```
```

## See also
## Смотрите также

* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Debugging](debugging.md)
* [Отладка](debugging.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
