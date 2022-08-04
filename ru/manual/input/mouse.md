# Mouse
# Мышь

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The **mouse** is a common input device for desktop games.
**Мышь** — обычное устройство ввода для настольных игр.

There are two ways to handle mouse input in Stride:
В Stride есть два способа обработки ввода с помощью мыши:

* Query **mouse button states**.
* Запрос **состояний кнопок мыши**.
* For cross-platform games that target mobile devices, you can use [PointerEvent](xref:Stride.Input.PointerEvent) lists.
* Для кроссплатформенных игр, предназначенных для мобильных устройств, вы можете использовать списки [PointerEvent](xref:Stride.Input.PointerEvent).
For more information, see [Pointers](pointers.md).
Для получения дополнительной информации см. [Указатели](pointers.md).

You can access **mouse button states** and **pointer events list** from the [Input manager](xref:Stride.Input.InputManager).
Вы можете получить доступ к **состояниям кнопок мыши** и **списку событий указателя** из [Диспетчера ввода](xref:Stride.Input.InputManager).

| Class | Project type | When to use |
|  Класс |  Тип проекта |  Когда использовать |
| --- | --- | --- |
|  --- |  --- |  --- |
| [InputManager](xref:Stride.Input.InputManager) | Desktop only | For desktop games, you usually handle input with multiple mouse buttons. This means you should use **mouse button states**. |
|  [InputManager](xref:Stride.Input.InputManager) |  Только рабочий стол |  Для настольных игр вы обычно обрабатываете ввод с помощью нескольких кнопок мыши.  Это означает, что вы должны использовать **состояния кнопки мыши**.  |
| [PointerEvent](xref:Stride.Input.PointerEvent) | Cross-platform | For mobile games, you usually simulate pointers with just the left mouse button. This means you can treat the mouse input like pointers. There's no need to create separate mouse-specific controls. For more information, see [Pointers](pointers.md).|
|  [PointerEvent](внешняя ссылка:Stride.Input.PointerEvent) |  Кроссплатформенность |  В мобильных играх вы обычно имитируете указатели с помощью только левой кнопки мыши.  Это означает, что вы можете рассматривать ввод с помощью мыши как указатели.  Нет необходимости создавать отдельные элементы управления для мыши.  Дополнительные сведения см. в разделе [Указатели](pointers.md).|

For more information about these options, see the [Input index](index.md).
Для получения дополнительной информации об этих параметрах см. [Входной индекс](index.md).

## Check mouse availability
## Проверить доступность мыши

Before handling mouse input, use [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse) to check if a mouse is connected.
Перед обработкой ввода с помощью мыши используйте [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse), чтобы проверить, подключена ли мышь.

## Get the mouse position
## Получить положение мыши

You can get the mouse position in normalized or absolute coordinates.
Вы можете получить положение мыши в нормализованных или абсолютных координатах.

### Normalized coordinates
### Нормализованные координаты

@'Stride.Input.InputManager.MousePosition' returns the mouse pointer position in **normalized** X, Y coordinates instead of actual screen sizes in pixels. This means the pointer position adjusts to any resolution and you don't have to write separate code for different resolutions.
@'Stride.Input.InputManager.MousePosition' возвращает положение указателя мыши в **нормализованных** координатах X, Y вместо фактических размеров экрана в пикселях.  Это означает, что положение указателя подстраивается под любое разрешение, и вам не нужно писать отдельный код для разных разрешений.

* (0,0): the pointer is in the top-left corner of the screen
* (0,0): указатель находится в верхнем левом углу экрана
* (1,1): the pointer is in the bottom-right corner of the screen
* (1,1): указатель находится в правом нижнем углу экрана.

### Absolute coordinates
### Абсолютные координаты

[InputManager.AbsoluteMousePosition](xref:Stride.Input.InputManager.AbsoluteMousePosition) returns the mouse pointer position in absolute X and Y coordinates (the actual screen size in pixels). For example, if the pointer is in the top-left corner of the screen, the values are (0,0). If the pointer is in the bottom-right corner, the values depends on the screen resolution (eg 1280, 720).
[InputManager.AbsoluteMousePosition](xref:Stride.Input.InputManager.AbsoluteMousePosition) возвращает положение указателя мыши в абсолютных координатах X и Y (фактический размер экрана в пикселях).  Например, если указатель находится в верхнем левом углу экрана, значения равны (0,0).  Если указатель находится в правом нижнем углу, значения зависят от разрешения экрана (например, 1280, 720).

> [!Tip]
> [!Подсказка]
> To get the actual size of the screen, access [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). For example:
> Чтобы получить фактический размер экрана, откройте [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize).  Например:
> ```cs
> ```кс
> var surfaceSize = Input.Mouse.SurfaceSize;
> var SurfaceSize = Input.Mouse.SurfaceSize;
> ```
> ```

## Query mouse button state changes
## Запрос изменения состояния кнопки мыши

You can use the mouse buttons to trigger actions in a project. For example, in first-person shooter games, the left mouse button is commonly used to shoot.
Вы можете использовать кнопки мыши для запуска действий в проекте.  Например, в шутерах от первого лица для стрельбы обычно используется левая кнопка мыши.

The [Input manager](xref:Stride.Input.InputManager) has several methods that check mouse button states (_Pressed_, _Down_, or _Released_):
[Диспетчер ввода](xref:Stride.Input.InputManager) имеет несколько методов, которые проверяют состояния кнопок мыши (_Pressed_, _Down_ или _Released_):

| Method | Description 
|  Метод |  Описание
| ------ | --- 
|  ------ |  ---
| [HasDownMouseButtons](xref:Stride.Input.InputManager.HasDownMouseButtons) | Checks if one or more mouse buttons are currently pressed down. 
|  [HasDownMouseButtons](xref:Stride.Input.InputManager.HasDownMouseButtons) |  Проверяет, нажаты ли в данный момент одна или несколько кнопок мыши.
| [HasPressedMouseButtons](xref:Stride.Input.InputManager.HasPressedMouseButtons) | Checks if one or more mouse buttons were pressed in the last update. 
|  [HasPressedMouseButtons](xref:Stride.Input.InputManager.HasPressedMouseButtons) |  Проверяет, была ли нажата одна или несколько кнопок мыши при последнем обновлении.
| [HasReleasedMouseButtons](xref:Stride.Input.InputManager.HasReleasedMouseButtons) | Checks if one or more mouse buttons were released in the last update. 
|  [HasReleasedMouseButtons](xref:Stride.Input.InputManager.HasReleasedMouseButtons) |  Проверяет, были ли отпущены одна или несколько кнопок мыши в последнем обновлении.
| [IsMouseButtonDown (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonDown\(Stride.Input.MouseButton\)) | Checks if a specified mouse button is currently pressed down.
|  [IsMouseButtonDown (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonDown\(Stride.Input.MouseButton\)) |  Проверяет, нажата ли в данный момент указанная кнопка мыши.
| [IsMouseButtonPressed (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonPressed\(Stride.Input.MouseButton\)) | Checks if a specified mouse button was pressed in the last update. 
|  [IsMouseButtonPressed (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonPressed\(Stride.Input.MouseButton\)) |  Проверяет, была ли нажата указанная кнопка мыши при последнем обновлении.
| [IsMouseButtonReleased (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonReleased\(Stride.Input.MouseButton\)) | Checks if a specified mouse button was released in the last update. 
|  [IsMouseButtonReleased (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonReleased\(Stride.Input.MouseButton\)) |  Проверяет, была ли отпущена указанная кнопка мыши в последнем обновлении.

### Mouse delta
### Дельта мыши

Use [InputManager.MouseDelta](xref:Stride.Input.InputManager.MouseDelta) to get the change in mouse position in normalized coordinates since the last update. You can use this to analyze mouse movement speed and direction.
Используйте [InputManager.MouseDelta](xref:Stride.Input.InputManager.MouseDelta), чтобы получить изменение положения мыши в нормализованных координатах с момента последнего обновления.  Вы можете использовать это для анализа скорости и направления движения мыши.

### Mouse wheel delta 
### Дельта колеса мыши

You can use the mouse wheel to trigger actions in a project. For example, in a first-person shooter game, moving the mouse wheel might switch weapons or zoom a camera.
Вы можете использовать колесо мыши для запуска действий в проекте.  Например, в шутере от первого лица перемещение колесика мыши может переключать оружие или изменять масштаб камеры.

The [InputManager.MouseWheelDelta](xref:Stride.Input.InputManager.MouseWheelDelta) returns a positive value when the user scrolls forwards and a negative value when the user scrolls backwards. A value of `0` indicates no movement.
[InputManager.MouseWheelDelta](xref:Stride.Input.InputManager.MouseWheelDelta) возвращает положительное значение, когда пользователь прокручивает вперед, и отрицательное значение, когда пользователь прокручивает назад.  Значение `0` указывает на отсутствие движения.

## Lock the mouse position
## Зафиксировать положение мыши

For some projects, the user needs to move the mouse cursor beyond the borders of the screen. For example, first-person shooter games usually need 360-degree camera rotation. In these cases, you also probably want the mouse cursor to be hidden.
Для некоторых проектов пользователю необходимо вывести курсор мыши за границы экрана.  Например, в шутерах от первого лица обычно требуется поворот камеры на 360 градусов.  В этих случаях вы также, вероятно, захотите, чтобы курсор мыши был скрыт.

You can lock the mouse position and hide the cursor with the following properties and methods:
Вы можете заблокировать положение мыши и скрыть курсор с помощью следующих свойств и методов:

| Method or property | Description |
|  Метод или свойство |  Описание |
| --- | --- |
|  --- |  --- |
| [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) | Locks the mouse position until the next call to the [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) event. 
|  [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) |  Блокирует положение мыши до следующего вызова события [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition).
| [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) | Unlocks the mouse position locked by the [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) event. 
|  [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) |  Разблокирует положение мыши, заблокированное событием [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) .
| [IsMousePositionLocked](xref:Stride.Input.InputManager.IsMousePositionLocked) | Checks if the mouse position is locked. 
|  [IsMousePositionLocked](xref:Stride.Input.InputManager.IsMousePositionLocked) |  Проверяет, заблокировано ли положение мыши.

> [!Tip] 
> [!Подсказка]
> You can get or set mouse visibility with [GameWindow.IsMouseVisible](xref:Stride.Games.GameWindow.IsMouseVisible).
> Вы можете получить или установить видимость мыши с помощью [GameWindow.IsMouseVisible](xref:Stride.Games.GameWindow.IsMouseVisible).

## Example code
## Пример кода

```cs
```CS
public class MouseInputScript : SyncScript
открытый класс MouseInputScript: SyncScript
{
{
	public override void Update()
публичное переопределение void Update()
	{
{
		//If the left mouse button is pressed in this update, do something.
//Если в этом обновлении нажата левая кнопка мыши, сделайте что-нибудь.
		if (Input.IsMouseButtonDown(MouseButton.Left))
если (Input.IsMouseButtonDown(MouseButton.Left))
		{   
{
		}
}
		//If the middle mouse button has been pressed since the last update, do something.
//Если средняя кнопка мыши была нажата с момента последнего обновления, сделайте что-нибудь.
		if (Input.IsMouseButtonPressed(MouseButton.Middle))
если (Input.IsMouseButtonPressed(MouseButton.Middle))
		{  
{
		}
}

		//If the mouse moved more than 0.2 units of the screen size in X direction, do something.
//Если мышь переместилась более чем на 0,2 единицы размера экрана в направлении X, сделайте что-нибудь.
		if (Input.MouseDelta.X > 0.2f)
если (Input.MouseDelta.X > 0,2f)
		{
{
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

* [Pointers](pointers.md)
* [Указатели](pointers.md)
* [Virtual buttons](virtual-buttons.md)
* [Виртуальные кнопки](virtual-buttons.md)
* [Keyboard](keyboards.md)
* [Клавиатура](keyboards.md)
* [Gamepads](gamepads.md)
* [Геймпады](gamepads.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
