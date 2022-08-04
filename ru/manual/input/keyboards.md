# Keyboards
# Клавиатуры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The **keyboard** is the most common input device for desktop games. There are two ways to handle keyboard input in Stride:
**Клавиатура** — наиболее распространенное устройство ввода для настольных игр.  В Stride есть два способа обработки ввода с клавиатуры:

* query **key states**
* запросить **ключевые состояния**
* use [KeyEvent](xref:Stride.Input.KeyEvent) lists
* использовать списки [KeyEvent](xref:Stride.Input.KeyEvent)

You can access both from the [input](xref:Stride.Input.InputManager) base class. For more information about these options, see the [input index](index.md)
Вы можете получить доступ к обоим из базового класса [input](xref:Stride.Input.InputManager).  Для получения дополнительной информации об этих параметрах см. [input index](index.md)

## Check keyboard availability
## Проверить доступность клавиатуры

Before handling keyboard input, check whether a keyboard is connected using [Input.HasKeyboard](xref:Stride.Input.InputManager.HasKeyboard).
Перед обработкой ввода с клавиатуры проверьте, подключена ли клавиатура с помощью [Input.HasKeyboard](xref:Stride.Input.InputManager.HasKeyboard).

## Get key states
## Получить ключевые состояния

You can query **key states** and **state changes** with the following methods:
Вы можете запрашивать **ключевые состояния** и **изменения состояний** следующими способами:

| Method | Description |
|  Метод |  Описание |
| --- | --- |
|  --- |  --- |
| [IsKeyDown(Keys)](xref:Stride.Input.InputManager.IsKeyDown\(Stride.Input.Keys\)) | Checks if a specified key is in the **down** state. 
|  [IsKeyDown(Keys)](xref:Stride.Input.InputManager.IsKeyDown\(Stride.Input.Keys\)) |  Проверяет, находится ли указанный ключ в состоянии **down**.
| [IsKeyPressed(Keys)](xref:Stride.Input.InputManager.IsKeyPressed\(Stride.Input.Keys\)) | Checks if a specified key has been **pressed** since the last update. 
|  [IsKeyPressed(Keys)](xref:Stride.Input.InputManager.IsKeyPressed\(Stride.Input.Keys\)) |  Проверяет, была ли указанная клавиша **нажата** с момента последнего обновления.
| [IsKeyReleased(Keys)](xref:Stride.Input.InputManager.IsKeyReleased\(Stride.Input.Keys\)) | Checks if a specified key has been **released** since the last update. 
|  [IsKeyReleased(Keys)](xref:Stride.Input.InputManager.IsKeyReleased\(Stride.Input.Keys\)) |  Проверяет, был ли указанный ключ **выпущен** с момента последнего обновления.

> [!Note] 
> [!Примечание]
> Stride doesn't support retrieving interpreted keys, such as special characters and capital letters.
> Stride не поддерживает извлечение интерпретируемых ключей, таких как специальные символы и заглавные буквы.

## Get key events
## Получить ключевые события

In some cases, you want to know all the keys that are currently _Down_, or all the keys that have been _Pressed_ since the last update. The key state API isn't good for this situation, as you have to query each available key separately.
В некоторых случаях вам нужно знать все клавиши, которые в настоящее время _нажаты_, или все клавиши, которые были _нажаты_ с момента последнего обновления.  API состояния ключа не подходит для этой ситуации, так как вам нужно запрашивать каждый доступный ключ отдельно.

Instead, use the **key events** collections available in the [Input](xref:Stride.Input.InputManager) base class.
Вместо этого используйте коллекции **ключевых событий**, доступные в базовом классе [Input](xref:Stride.Input.InputManager).

| Public List | Description l
|  Публичный список |  Описание л
| ----------- | --- 
|  ----------- |  ---
| [InputManager.DownKeys](xref:Stride.Input.InputManager.DownKeys) | Gets a list of the keys that were down in the last update.
|  [InputManager.DownKeys](xref:Stride.Input.InputManager.DownKeys) |  Получает список ключей, которые были отключены при последнем обновлении.
| [InputManager.PressedKeys](xref:Stride.Input.InputManager.PressedKeys) | Gets a list of the keys pressed in the last update.
|  [InputManager.PressedKeys](xref:Stride.Input.InputManager.PressedKeys) |  Получает список клавиш, нажатых при последнем обновлении.
| [InputManager.ReleasedKeys](xref:Stride.Input.InputManager.ReleasedKeys) | Gets a list of the keys released in the last update.
|  [InputManager.ReleasedKeys](xref:Stride.Input.InputManager.ReleasedKeys) |  Получает список ключей, выпущенных в последнем обновлении.
| [InputManager.KeyEvents](xref:Stride.Input.InputManager.KeyEvents) | Gets a list of the key events in the last update (keys pressed or released).
|  [InputManager.KeyEvents](xref:Stride.Input.InputManager.KeyEvents) |  Получает список ключевых событий в последнем обновлении (клавиши нажаты или отпущены).

Every @'Stride.Input.KeyEvent' has two properties: @'Stride.Input.KeyEvent.Key' (the affected key) and @'Stride.Input.ButtonEvent.IsDown' (the new state of the key).
Каждый @'Stride.Input.KeyEvent' имеет два свойства: @'Stride.Input.KeyEvent.Key' (затронутая клавиша) и @'Stride.Input.ButtonEvent.IsDown' (новое состояние клавиши).

## Example code
## Пример кода

```cs
```CS
public class KeyboardEventsScript : SyncScript
открытый класс KeyboardEventsScript: SyncScript
{
{
	//Declared public member variables and properties show in Game Studio.
//Объявленные общедоступные переменные-члены и свойства отображаются в Game Studio.

	public override void Update()
публичное переопределение void Update()
	{
{
		//Perform an action in every update.
//Выполнять действие при каждом обновлении.
		if (Game.IsRunning)
если (Игра.Выполняется)
		{
{
			if (Input.IsKeyDown(Keys.Left))
если (Input.IsKeyDown(Keys.Left))
			{
{
				this.Entity.Transform.Position.X -= 0.1f;
this.Entity.Transform.Position.X -= 0.1f;
			}
}
			if (Input.IsKeyDown(Keys.Right))
если (Input.IsKeyDown(Keys.Right))
			{
{
				this.Entity.Transform.Position.X += 0.1f;
this.Entity.Transform.Position.X += 0.1f;
			}
}
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

* [Gamepads](gamepads.md)
* [Геймпады](gamepads.md)
* [Mouse](mouse.md)
* [Мышь](mouse.md)
* [Virtual buttons](virtual-buttons.md)
* [Виртуальные кнопки](virtual-buttons.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
