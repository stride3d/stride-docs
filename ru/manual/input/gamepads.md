# Gamepads
# Геймпады

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Gamepads**, such as the Xbox Elite Wireless Controller and the PS4 DualShock, are popular input devices for consoles and desktop.
**Геймпады**, такие как беспроводной контроллер Xbox Elite и PS4 DualShock, являются популярными устройствами ввода для консолей и настольных компьютеров.

> [!Note] 
> [!Примечание]
> Stride is currently optimized for the Xbox Elite gamepad. Other controllers work, but might have unexpected button mappings. Gamepad-specific features like the PS4 DualShock touchpad aren't supported.
> В настоящее время Stride оптимизирован для геймпада Xbox Elite.  Другие контроллеры работают, но могут иметь непредвиденные назначения кнопок.  Функции геймпада, такие как сенсорная панель PS4 DualShock, не поддерживаются.

## Digital and analog buttons
## Цифровые и аналоговые кнопки

* **Digital** buttons have two states: **up** and **down**. The D-pad, Start, Back, Thumbstick (press), A, B, X and Y buttons are digital buttons.
* **Цифровые** кнопки имеют два состояния: **вверх** и **вниз**.  Кнопки D-pad, Start, Back, Thumbstick (нажмите), A, B, X и Y являются цифровыми кнопками.

* **Analog** buttons return a value depending on how hard the user presses. The triggers are analog buttons, and return a value between 0 and 1. The thumbsticks are also analog, and return values between -1 and 1 on the X and Y axes. 
* **Аналоговые** кнопки возвращают значение в зависимости от того, насколько сильно пользователь нажимает.  Триггеры представляют собой аналоговые кнопки и возвращают значение от 0 до 1. Манипуляторы также являются аналоговыми и возвращают значения от -1 до 1 по осям X и Y.

The Xbox Elite controller buttons have the following names in Stride:
Кнопки контроллера Xbox Elite имеют в Stride следующие названия:

![Xbox gamepad](media/input-gamepad-standard-gamepad.png)
![Геймпад Xbox](media/input-gamepad-standard-gamepad.png)

## Handle gamepad input
## Обработка ввода с геймпада

### Check that gamepads are connected
### Проверяем, подключены ли геймпады

Before handling gamepad input:
Перед обработкой ввода с геймпада:

* To check if any gamepads are connected, use [InputManager.HasGamePad](xref:Stride.Input.InputManager.HasGamePad).
* Чтобы проверить, подключены ли геймпады, используйте [InputManager.HasGamePad](xref:Stride.Input.InputManager.HasGamePad).

* To check how many gamepads are connected, use [InputManager.GamePadCount](xref:Stride.Input.InputManager.GamePadCount).
* Чтобы проверить, сколько геймпадов подключено, используйте [InputManager.GamePadCount](xref:Stride.Input.InputManager.GamePadCount).

* To check if the current device has been disconnected, use the [InputManager.DeviceRemoved](xref:Stride.Input.InputManager.DeviceRemoved) event.
* Чтобы проверить, было ли отключено текущее устройство, используйте событие [InputManager.DeviceRemoved](xref:Stride.Input.InputManager.DeviceRemoved).

* To check if a device has been connected, use the [InputManager.DeviceAdded](xref:Stride.Input.InputManager.DeviceAdded) event.
* Чтобы проверить, было ли подключено устройство, используйте событие [InputManager.DeviceAdded](xref:Stride.Input.InputManager.DeviceAdded).

### Digital buttons
### Цифровые кнопки

To query the states and state changes of digital gamepad buttons, on the `GamePad` object, call:
Чтобы запросить состояния и изменения состояния кнопок цифрового геймпада, на объекте `GamePad` вызовите:

| Method | Functionality
|  Метод |  Функциональность
|--------|--------------
|--------|--------------
| [IsButtonDown(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonDown\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) | Checks whether the button is in the _down_ state.
|  [IsButtonDown(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonDown\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) |  Проверяет, находится ли кнопка в состоянии _down_.
| [IsButtonPressed(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonPressed\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) | Checks whether the user has _pressed_ the button since the previous update. 
|  [IsButtonPressed(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonPressed\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) |  Проверяет, нажимал ли пользователь кнопку после предыдущего обновления.
| [IsButtonReleased(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonReleased\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) | Checks whether the user has _released_ the button since the previous update.
|  [IsButtonReleased(IGamePadDevice, GamePadButton)](xref:Stride.Input.GamePadDeviceExtensions.IsButtonReleased\(Stride.Input.IGamePadDevice,Stride.Input.GamePadButton\)) |  Проверяет, _отпустил ли_ пользователь кнопку после предыдущего обновления.

**Button (GamePadButton)** is the gamepad button you want to check.
**Кнопка (GamePadButton)** — это кнопка геймпада, которую вы хотите проверить.

You can also get the state of digital buttons using [GamePadState.Buttons](xref:Stride.Input.GamePadState.Buttons).
Вы также можете получить состояние цифровых кнопок, используя [GamePadState.Buttons](xref:Stride.Input.GamePadState.Buttons).

> [!Note] 
> [!Примечание]
> The [GamePadState.Buttons](xref:Stride.Input.GamePadState.Buttons) field is a bitmask that uses binary system. Depending on the bitmask value, you can determine which buttons are *up* or *down*.
> Поле [GamePadState.Buttons](xref:Stride.Input.GamePadState.Buttons) — это битовая маска, использующая двоичную систему.  В зависимости от значения битовой маски вы можете определить, какие кнопки являются *вверх* или *вниз*.

To get the gamepad state, use [IGamePadDevice.State](xref:Stride.Input.IGamePadDevice.State).
Чтобы получить состояние геймпада, используйте [IGamePadDevice.State](xref:Stride.Input.IGamePadDevice.State).

### Analog buttons
### Аналоговые кнопки

To query values of analog buttons, first get the current state of gamepad using 
Чтобы запросить значения аналоговых кнопок, сначала получите текущее состояние геймпада, используя
[GetGamePadByIndex(index)](xref:Stride.Input.InputManager.GetGamePadByIndex\(System.Int32\)), where _index (Integer)_ is the index of the gamepad you want to check.
[GetGamePadByIndex(index)](xref:Stride.Input.InputManager.GetGamePadByIndex\(System.Int32\)), где _index (Integer)_ — это индекс геймпада, который вы хотите проверить.

> [!WARNING]
> [!ВНИМАНИЕ]
> The value returned by [IGamePadDevice.State](xref:Stride.Input.IGamePadDevice.State) is the state of the gamepad at the **current** update. You can't reuse this value for the next updates. You have to query it again in every update.
> Значение, возвращаемое [IGamePadDevice.State](xref:Stride.Input.IGamePadDevice.State), представляет собой состояние геймпада при **текущем** обновлении.  Вы не можете повторно использовать это значение для следующих обновлений.  Вы должны запрашивать его снова при каждом обновлении.

To get trigger and thumbstick positions, use these 
Чтобы получить положения триггера и мини-джойстика, используйте эти
[GamePadState](xref:Stride.Input.GamePadState) fields:
Поля [GamePadState](xref:Stride.Input.GamePadState):

| Field | Description 
|  Поле |  Описание
|-------|------------
|-------|------------
| [GamePadState.LeftThumb](xref:Stride.Input.GamePadState.LeftThumb) | Left thumbstick X-axis/Y-axis value in the range [-1.0f, 1.0f] for both axes. |
|  [GamePadState.LeftThumb](xref:Stride.Input.GamePadState.LeftThumb) |  Значение оси X/Y левого джойстика в диапазоне [-1.0f, 1.0f] для обеих осей.  |
| [GamePadState.RightThumb](xref:Stride.Input.GamePadState.RightThumb) | Right thumbstick X-axis/Y-axis value in the range [-1.0f, 1.0f] for both axes. |
|  [GamePadState.RightThumb](xref:Stride.Input.GamePadState.RightThumb) |  Значение оси X/Y правого джойстика в диапазоне [-1.0f, 1.0f] для обеих осей.  |
| [GamePadState.LeftTrigger](xref:Stride.Input.GamePadState.LeftTrigger) | Left trigger analog control value in the range [0, 1.0f] for a single axes. |
|  [GamePadState.LeftTrigger](xref:Stride.Input.GamePadState.LeftTrigger) |  Значение аналогового управления левым триггером в диапазоне [0, 1.0f] для одной оси.  |
| [GamePadState.RightTrigger](xref:Stride.Input.GamePadState.RightTrigger) | Right trigger analog control value in the range [0, 1.0f] for a single axis. |
|  [GamePadState.RightTrigger](xref:Stride.Input.GamePadState.RightTrigger) |  Значение аналогового управления правым триггером в диапазоне [0, 1.0f] для одной оси.  |

Thumbsticks move along the X and Y axes. Their positions read as follows:
Стики перемещаются по осям X и Y.  Их позиции звучат следующим образом:

![Query thumb position](media/index-gamepad-stick-position-1.png)
![Положение большого пальца запроса](media/index-gamepad-stick-position-1.png)
![Query thumb position](media/index-gamepad-stick-position-2.png)
![Положение большого пальца запроса](media/index-gamepad-stick-position-2.png)

Triggers move along the X axis. Their positions read as follows:
Триггеры перемещаются по оси X.  Их позиции звучат следующим образом:

![Query trigger position](media/index-gamepad-trigger-position.png)
![Позиция триггера запроса](media/index-gamepad-trigger-position.png)

### Vibration
### Вибрация

To set the gamepad vibration level, use [IGamePadDevice.SetVibration](xref:Stride.Input.IGamePadDevice.SetVibration\(System.Single,System.Single,System.Single,System.Single\)).
Чтобы установить уровень вибрации геймпада, используйте [IGamePadDevice.SetVibration](xref:Stride.Input.IGamePadDevice.SetVibration\(System.Single,System.Single,System.Single,System.Single\)).

> [!Note] 
> [!Примечание]
> Stride currently only supports vibration for Xbox gamepads.
> В настоящее время Stride поддерживает вибрацию только для геймпадов Xbox.

## Example code
## Пример кода

```cs
```CS
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
using Stride.Engine;
с помощью Stride.Engine;

public class TestScript : SyncScript
открытый класс TestScript: SyncScript
{
{
    public override void Update()
публичное переопределение void Update()
    {
{
        //Check if a gamepad is connected
//Проверяем, подключен ли геймпад
        if (Input.HasGamePad)
если (Input.HasGamePad)
        {
{
            //Get the number of connected gamepads
//Получить количество подключенных геймпадов
            int gamepadCount = Input.GamePadCount;
int gamepadCount = Input.GamePadCount;

            // Check each gamepad's status
// Проверяем состояние каждого геймпада
            foreach(var gamepad in Input.GamePads)
foreach(var геймпад в Input.GamePads)
            {
{
                // Get the analog thumbstick positions
// Получить положение аналогового стика
                Vector2 speed = gamepad.State.LeftThumb;
Скорость Vector2 = геймпад.State.LeftThumb;
                Vector2 direction = gamepad.State.RightThumb;
Направление Vector2 = геймпад.State.RightThumb;

                // Get the digital buttons' status
// Получить статус цифровых кнопок
                if (gamepad.IsButtonDown(GamePadButton.X))
если (геймпад.IsButtonDown(GamePadButton.X))
                {
{
                    // The action repeats for as long as the user holds the button down.
// Действие повторяется до тех пор, пока пользователь держит кнопку нажатой.
                    // This is useful for continuous actions such as firing a machine gun.
// Это полезно для непрерывных действий, таких как стрельба из пулемета.
                }
}
                if (gamepad.IsButtonPressed(GamePadButton.A))
если (геймпад.IsButtonPressed(GamePadButton.A))
                {
{
                    // The action is triggered only once, even if the user holds the button down.
// Действие запускается только один раз, даже если пользователь удерживает кнопку нажатой.
                    // This is useful for one-time actions such as jumping.
// Это полезно для одноразовых действий, таких как прыжок.
                }
}
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
* [Keyboards](keyboards.md)
* [Клавиатуры](keyboards.md)
* [Virtual buttons](virtual-buttons.md)
* [Виртуальные кнопки](virtual-buttons.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
