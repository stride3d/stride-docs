# Input
# Вход

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Users interact with games and applications using **input devices** such as gamepads, mice, and keyboards. Every interactive application must support at least one input device.
Пользователи взаимодействуют с играми и приложениями с помощью **устройств ввода**, таких как геймпады, мыши и клавиатуры.  Каждое интерактивное приложение должно поддерживать как минимум одно устройство ввода.

![Input devices](media/input_intro.png)
![Устройства ввода](media/input_intro.png)

Stride handles input entirely via scripts. There are low-level and high-level APIs to handle different input types:
Stride полностью обрабатывает ввод с помощью скриптов.  Существуют низкоуровневые и высокоуровневые API для обработки различных типов ввода:

* **Low-level** APIs are close to hardware, so they have lower latency. These allow fast processing of the input from [pointers](pointers.md), [keyboards](keyboards.md), [mouse](mouse.md), [gamepads](gamepads.md), and some [sensors](sensors.md).
* **Низкоуровневые** API-интерфейсы близки к аппаратным, поэтому они имеют меньшую задержку.  Они позволяют быстро обрабатывать ввод от [указателей](pointers.md), [клавиатур](keyboards.md), [мыши](mouse.md), [геймпадов](gamepads.md) и некоторых [сенсоров](  датчики.мд).

* **High-level** APIs interpret input for you, so they have higher latency. These APIs are used for [gestures](gestures.md) and some [sensors](sensors.md).
* API-интерфейсы **высокого уровня** интерпретируют входные данные для вас, поэтому они имеют более высокую задержку.  Эти API используются для [жестов] (gestures.md) и некоторых [сенсоров] (sensors.md).

* There are also **special APIs** for some [sensors](sensors.md) and [virtual buttons](virtual-buttons.md).
* Также существуют **специальные API** для некоторых [сенсоров](sensors.md) и [виртуальных кнопок](virtual-buttons.md).

## Handle input
## Обработка ввода

Handle input with the [InputManager](xref:Stride.Input.InputManager) class. You can access this class from a script with its properties and methods.
Обрабатывайте ввод с помощью класса [InputManager](xref:Stride.Input.InputManager).  Вы можете получить доступ к этому классу из скрипта с его свойствами и методами.

To check whether a particular input device is available, use the corresponding @'Stride.Input.InputManager' property. For example, to check if a mouse is connected, use [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse).
Чтобы проверить, доступно ли конкретное устройство ввода, используйте соответствующее свойство @'Stride.Input.InputManager'.  Например, чтобы проверить, подключена ли мышь, используйте [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse).

After you check the device availability, there are four ways to handle input in Stride.
После того, как вы проверите доступность устройства, в Stride есть четыре способа обработки ввода.

### Query state
### Состояние запроса

You can query the state of digital keys and buttons (ie _Up_ or _Down_) and the numeric values of analog buttons and sensors. For example, @'Stride.Input.InputManager.DownKeys' gets a list of the keys that were in the state _Down_ in the last update.
Вы можете запросить состояние цифровых клавиш и кнопок (т.е. _Up_ или _Down_) и числовые значения аналоговых кнопок и датчиков.  Например, @'Stride.Input.InputManager.DownKeys' получает список клавиш, которые были в состоянии _Down_ при последнем обновлении.

![Query key and button states](media/index-state-one-action-between-updates.png)
![Состояния ключа и кнопки запроса](media/index-state-one-action-between-updates.png)

![Analog stick positions](media/index-state-analog-stick-position.png)
![Положения аналоговых стиков](media/index-state-analog-stick-position.png)

Sometimes a user performs more than one action between updates. If there's no state change between the updates (the end result is the same), Stride registers no action:
Иногда пользователь выполняет более одного действия между обновлениями.  Если между обновлениями нет изменения состояния (конечный результат тот же), Stride не регистрирует никаких действий:

![Several actions between updates](media/index-state-several-actions-between-updates.png)
![Несколько действий между обновлениями](media/index-state-several-actions-between-updates.png)

### Query a state change
### Запрос изменения состояния

You can query the change of state of buttons and keys since the previous update.
Вы можете запросить изменение состояния кнопок и клавиш с момента предыдущего обновления.
In this case, you don't get the list of all buttons and keys, but have to query each button and key separately.
В этом случае вы не получите список всех кнопок и клавиш, а должны запрашивать каждую кнопку и клавишу отдельно.

* For digital buttons and keys, query if the button or key was _Pressed_, _Down_ or _Released_ in the last update.
* Для цифровых кнопок и клавиш запросите, была ли кнопка или клавиша _нажата_, _нажата_ или _отпущена_ в последнем обновлении.

    ![Query key state change](media/index-state-change-one-action-between-updates.png)
![Изменение состояния ключа запроса](media/index-state-change-one-action-between-updates.png)

* For mouse positions and mouse wheel scrolling, query _Delta Values_ since the previous update:
* Для положения мыши и прокрутки колесика мыши запросите _Delta Values_ с момента предыдущего обновления:

    ![Mouse wheel delta](media/index-state-change-mouse-wheel-scroll.png)
![Дельта колесика мыши](media/index-state-change-mouse-wheel-scroll.png)

Sometimes a user performs several actions between two updates. If there's no state change between two updates (the end result is the same), Stride registers no action.
Иногда пользователь выполняет несколько действий между двумя обновлениями.  Если между двумя обновлениями состояние не изменилось (конечный результат один и тот же), Stride не регистрирует никаких действий.

### Query the list of events
### Запрос списка событий

For pointers, gestures, and keyboards, you can query all the events that happened in the last update.
Для указателей, жестов и клавиатур вы можете запросить все события, произошедшие в последнем обновлении.

![Several actions between updates](media/index-events-list-several-actions-between-updates.png)
![Несколько действий между обновлениями](media/index-events-list-several-actions-between-updates.png)

> [!Note] 
> [!Примечание]
> Even if a user performs several actions between two updates, Stride registers all these events.
> Даже если пользователь выполняет несколько действий между двумя обновлениями, Stride регистрирует все эти события.

### Use virtual buttons
### Использовать виртуальные кнопки

You can use **virtual buttons** to associate input to actions rather than physical keys, then let the user define their own keys. For more information, see [virtual buttons](virtual-buttons.md).
Вы можете использовать **виртуальные кнопки**, чтобы связать ввод с действиями, а не с физическими клавишами, а затем позволить пользователю определить свои собственные клавиши.  Для получения дополнительной информации см. [виртуальные кнопки](virtual-buttons.md).

## In this section
## В этой секции

* [Gamepads](gamepads.md)
* [Геймпады](gamepads.md)
* [Gestures](gestures.md)
* [Жесты](gestures.md)
* [Keyboards](keyboards.md)
* [Клавиатуры](keyboards.md)
* [Mouse](mouse.md)
* [Мышь](mouse.md)
* [Pointers](pointers.md)
* [Указатели](pointers.md)
* [Sensors](sensors.md)
* [Датчики](sensors.md)
* [Virtual buttons](virtual-buttons.md)
* [Виртуальные кнопки](virtual-buttons.md)
