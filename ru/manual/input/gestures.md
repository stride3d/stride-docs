# Gestures
# Жесты

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Gestures are predefined [pointer](pointers.md) patterns. Stride can recognize gestures and trigger corresponding events. For example, in a strategy game, the player can drag and drop a unit to the battlefield with a **drag** gesture. Gestures can use one or several fingers.
Жесты — это предопределенные шаблоны [указателя](pointers.md).  Stride может распознавать жесты и запускать соответствующие события.  Например, в стратегической игре игрок может перетаскивать юнит на поле битвы жестом **перетаскивания**.  Жесты могут использовать один или несколько пальцев.

> [!Note] 
> [!Примечание]
> All lengths, speeds and error margins of configuration files must use normalized values.
> Для всех длин, скоростей и погрешностей файлов конфигурации должны использоваться нормализованные значения.

## Turn on gesture recognition
## Включить распознавание жестов

By default, the input system doesn't recognize gestures, as this requires CPU time. 
По умолчанию система ввода не распознает жесты, поскольку для этого требуется процессорное время.

To turn on gesture recognition:
Чтобы включить распознавание жестов:

1. Create an instance of the configuration class for the gesture you want to recognize. For example, for the drag gesture, create an instance of @'Stride.Input.GestureConfigDrag'.
1. Создайте экземпляр класса конфигурации для жеста, который вы хотите распознать.  Например, для жеста перетаскивания создайте экземпляр @'Stride.Input.GestureConfigDrag'.
2. Configure the class parameters.
2. Настройте параметры класса.
3. Add the gesture configuration to the @'Stride.Input.InputManager.Gestures' collection.
3. Добавьте конфигурацию жестов в коллекцию @'Stride.Input.InputManager.Gestures'.

> [!Warning] 
> [!Предупреждение]
> After you activate recognition for a gesture, you can't modify the gesture's parameters. If you need to do this, delete the gesture from the @'Stride.Input.InputManager.Gestures' collection and create a new entry with new parameters.
> После того, как вы активируете распознавание жеста, вы не сможете изменить параметры жеста.  Если вам нужно это сделать, удалите жест из коллекции @'Stride.Input.InputManager.Gestures' и создайте новую запись с новыми параметрами.

### Turn off gesture recognition
### Отключить распознавание жестов

Delete the gesture from the [InputManager.Gestures](xref:Stride.Input.InputManager.Gestures) collection.
Удалите жест из коллекции [InputManager.Gestures](xref:Stride.Input.InputManager.Gestures).

## Gesture recognition
## Распознавание жестов

When the input system detects a gesture, it adds a @'Stride.Input.GestureEvent' to the list of [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents). The event contains information about the gesture and its state, such as its location and the number of fingers used.
Когда система ввода обнаруживает жест, она добавляет @'Stride.Input.GestureEvent' в список [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents).  Событие содержит информацию о жесте и его состоянии, например о местоположении и количестве использованных пальцев.

> [!Note]
> [!Примечание]
> Each gesture has its own associated gesture event class (see below).
> Каждому жесту соответствует свой собственный класс события жеста (см. ниже).

The [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) field indicates which gesture has been recognized. You can then cast the base gesture event into the gesture-specific event type to have gesture-type-specific information about the event.
Поле [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) указывает, какой жест был распознан.  Затем вы можете преобразовать базовое событие жеста в тип события, специфичный для жеста, чтобы получить информацию о событии, специфичную для типа жеста.

Stride can detect several gestures simultaneously, so the event list can contain more than one item in an update.
Stride может обнаруживать несколько жестов одновременно, поэтому список событий может содержать более одного элемента в обновлении.

The list is cleared with every update, so you don't need to clear it manually.
Список очищается при каждом обновлении, поэтому вам не нужно очищать его вручную.

## Configure gestures
## Настроить жесты

In the @'Stride.Input.GestureConfig' classes, you can configure parameters including:
В классах @'Stride.Input.GestureConfig' вы можете настроить параметры, в том числе:

* the number of fingers the gesture uses
* количество пальцев, которые использует жест

* the number and duration of taps the gesture uses
* количество и продолжительность нажатий, которые использует жест

* the gesture direction
* направление жеста

> [!Note] 
> [!Примечание]
> Each gesture has its own configuration class with specific configuration parameters (see below).
> Каждый жест имеет свой собственный класс конфигурации с определенными параметрами конфигурации (см. ниже).

## Types of gesture
## Типы жестов

Stride supports two main types of gesture:
Stride поддерживает два основных типа жестов:

* **Discrete** gestures (tap, flick, long press) trigger a single event.
* **Отдельные** жесты (касание, пролистывание, длительное нажатие) вызывают одно событие.

    * [Tap](#Tap)
* [Нажмите](#Нажмите)

    * [Flick](#Flick)
* [Пролистывание](#Пролистывание)
    
	* [Long press](#Long-press)
* [Длительное нажатие](#Длинное нажатие)

* **Continuous** gestures (drag and composite) trigger a series of events when the user changes the direction of the gesture.
* **Непрерывные** жесты (перетаскивание и составные) запускают серию событий, когда пользователь меняет направление жеста.

    * [Drag](#Drag)
* [Перетаскивание](#Перетаскивание)

    * [Composite](#Composite)
* [Составной](#Составной)

### Discrete gestures
### Дискретные жесты

#### <a name="Tap"> Tap </a>
#### <a name=

![Tap gesture](media/gestures_tap_gesture.png) 
![Жест касанием](media/gestures_tap_gesture.png)

The user touches the screen and quickly removes their finger.
Пользователь касается экрана и быстро убирает палец.

**Configuration class**: @'Stride.Input.GestureConfigTap'
**Класс конфигурации**: @'Stride.Input.GestureConfigTap'

**Event class**: @'Stride.Input.GestureEventTap'
**Класс события**: @'Stride.Input.GestureEventTap'

The number of fingers on the screen can't vary during the gesture. To set the number of fingers required for a tap, modify @'Stride.Input.GestureConfig.RequiredNumberOfFingers'.
Количество пальцев на экране не может меняться во время жеста.  Чтобы установить количество пальцев, необходимое для касания, измените @'Stride.Input.GestureConfig.RequiredNumberOfFingers'.

> [!TIP] 
> [!СОВЕТ]
> To distinguish single taps from multi-taps, the system uses latency in tap events. To disable this, set the [GestureConfigTap.MaximumTimeBetweenTaps](xref:Stride.Input.GestureConfigTap.MaximumTimeBetweenTaps) field to **0**.
> Чтобы отличать одиночные нажатия от множественных, система использует задержку в событиях касания.  Чтобы отключить это, установите для поля [GestureConfigTap.MaximumTimeBetweenTaps](xref:Stride.Input.GestureConfigTap.MaximumTimeBetweenTaps) значение **0**.

#### <a name="Flick"> Flick</a>
#### <a name=

![Flick gesture](media/gestures_flick_gesture.png)
![Пролистывание](media/gestures_flick_gesture.png)

The user touches the screen, performs a quick straight translation, and withdraws their finger(s).
Пользователь касается экрана, выполняет быстрый прямой перевод и убирает палец(и).

**Configuration class**: @'Stride.Input.GestureConfigFlick'
**Класс конфигурации**: @'Stride.Input.GestureConfigFlick'

**Event class**: @'Stride.Input.GestureEventFlick'
**Класс события**: @'Stride.Input.GestureEventFlick'

The number of fingers on the screen can't during the gesture.
Количество пальцев на экране не может во время жеста.

To set a minimum length for the flick gesture, use [GestureConfigFlick.MinimumFlickLength](xref:Stride.Input.GestureConfigFlick.MinimumFlickLength).
Чтобы установить минимальную длину жеста щелчка, используйте [GestureConfigFlick.MinimumFlickLength](xref:Stride.Input.GestureConfigFlick.MinimumFlickLength).

To restrict the direction of the flick to **vertical** or **horizontal**, use 
Чтобы ограничить направление пролистывания **вертикальным** или **горизонтальным**, используйте
[GestureConfigFlick.FlickShape](xref:Stride.Input.GestureConfigFlick.FlickShape).
[GestureConfigFlick.FlickShape](xref:Stride.Input.GestureConfigFlick.FlickShape).

#### <a name="Long-press"> Long press</a>
#### <a name=

![Long press gesture](media/gestures_long_pres_gesture.png) 
![Жест длительного нажатия](media/gestures_long_pres_gesture.png)

The user touches the screen and maintains pressure without removing their finger for a certain period of time (the default time is one second).
Пользователь касается экрана и поддерживает давление, не убирая палец в течение определенного периода времени (время по умолчанию — одна секунда).

**Configuration class**: [GestureConfigLongPress](xref:Stride.Input.GestureConfigLongPress)
**Класс конфигурации**: [GestureConfigLongPress](xref:Stride.Input.GestureConfigLongPress)

**Event class**: [GestureEventLongPress](xref:Stride.Input.GestureEventLongPress)
**Класс события**: [GestureEventLongPress](xref:Stride.Input.GestureEventLongPress)

The number of fingers on the screen can't vary during the gesture.
Количество пальцев на экране не может меняться во время жеста.

To change the minimum press length for the long press gesture, modify  [GestureConfigLongPress.RequiredPressTime](xref:Stride.Input.GestureConfigLongPress.RequiredPressTime).
Чтобы изменить минимальную длину нажатия для жеста длительного нажатия, измените [GestureConfigLongPress.RequiredPressTime](xref:Stride.Input.GestureConfigLongPress.RequiredPressTime).

### Continuous gestures
### Непрерывные жесты

#### <a name="Drag"> Drag</a>
#### <a name=

![Drag gesture](media/gestures_drag_gesture.png)
![Жест перетаскивания](media/gestures_drag_gesture.png)

The user touches the screen, performs a translation, and withdraws their finger(s).
Пользователь касается экрана, выполняет перевод и убирает палец(и).

**Configuration class**: [GestureConfigDrag](xref:Stride.Input.GestureConfigDrag)
**Класс конфигурации**: [GestureConfigDrag](xref:Stride.Input.GestureConfigDrag)

**Event class**: [GestureEventDrag](xref:Stride.Input.GestureEventDrag)
**Класс события**: [GestureEventDrag](xref:Stride.Input.GestureEventDrag)

The number of fingers on the screen can't vary during the gesture.
Количество пальцев на экране не может меняться во время жеста.

To detect smaller drags, decrease [GestureConfigDrag.MinimumDragDistance](xref:Stride.Input.GestureConfigDrag.MinimumDragDistance).
Чтобы обнаружить меньшее перетаскивание, уменьшите [GestureConfigDrag.MinimumDragDistance](xref:Stride.Input.GestureConfigDrag.MinimumDragDistance).

To restrict the direction of the drag to **vertical** or **horizontal**, use [GestureConfigDrag.DragShape](xref:Stride.Input.GestureConfigDrag.DragShape).
Чтобы ограничить направление перетаскивания **вертикальным** или **горизонтальным**, используйте [GestureConfigDrag.DragShape](xref:Stride.Input.GestureConfigDrag.DragShape).

#### <a name="Composite"> Composite</a>
#### <a name=

![Translation gesture](media/gestures_translation_gesture.png) ![Scale gesture](media/gestures_scale_gesture.png) ![Rotation gesture](media/gestures_rotation_gesture.png)
![Жест перевода](media/gestures_translation_gesture.png) ![Жест масштабирования](media/gestures_scale_gesture.png) ![Жест вращения](media/gestures_rotation_gesture.png)

The user touches the screen with two fingers and moves them independently.
Пользователь касается экрана двумя пальцами и перемещает их независимо друг от друга.

**Configuration class**: @'Stride.Input.GestureConfigComposite'
**Класс конфигурации**: @'Stride.Input.GestureConfigComposite'

**Event class**: @'Stride.Input.GestureEventComposite'
**Класс события**: @'Stride.Input.GestureEventComposite'

The composite gesture requires exactly two fingers on the screen. It's triggered when the system detects one of the three basic actions:
Для составного жеста требуется ровно два пальца на экране.  Он срабатывает, когда система обнаруживает одно из трех основных действий:
* _Translation_: the user translates two fingers together in the same direction.
* _Translation_: пользователь переводит два пальца вместе в одном направлении.
* _Scale_: the user moves two fingers closer together or further apart.
* _Scale_: пользователь перемещает два пальца ближе или дальше друг от друга.
* _Rotation_: the user rotates two fingers around a center point.
* _Rotation_: пользователь вращает два пальца вокруг центральной точки.

## Gesture states
## Состояния жестов

A gesture always has one of four states:
Жест всегда имеет одно из четырех состояний:

* Began
* Началось

* Changed
* Измененный

* Ended
* Завершено

* Occurred
* Произошел

**Discrete** gestures (tap, flick, long press) always have the state _occurred_. **Continuous** gestures (drag and composite) always begin with the state _began_, followed by any  _changed_ states, and end with the _ended_ state.
**Дискретные** жесты (касание, пролистывание, длительное нажатие) всегда имеют состояние _произошло_.  **Непрерывные** жесты (перетаскивание и составные) всегда начинаются с состояния _начало_, за которым следуют любые состояния _изменено_, и заканчиваются состоянием _завершено_.

To query the current state of a gesture, use the [GestureEvent.State](xref:Stride.Input.GestureEvent.State) field of the triggered gesture event.
Чтобы запросить текущее состояние жеста, используйте поле [GestureEvent.State](xref:Stride.Input.GestureEvent.State) инициированного события жеста.

## Example code
## Пример кода

### Activate or deactivate gesture recognition
### Активировать или деактивировать распознавание жестов

To create the configuration of a gesture you want to recognize:
Чтобы создать конфигурацию жеста, который вы хотите распознать:

```cs
```CS
// Create the configuration of a gesture you want to recognize.
// Создайте конфигурацию жеста, который вы хотите распознать.
var singleTapConfig = new GestureConfigTap();
var singleTapConfig = новый GestureConfigTap();

// Start tap gesture recognition.
// Запустить распознавание жестов касания.
Input.Gestures.Add(singleTapConfig);
Input.Gestures.Add(singleTapConfig);

// Create the configuration of the gesture you want to recognize.
// Создайте конфигурацию жеста, который вы хотите распознать.
var doubleTapConfig = new GestureConfigTap(2, 1);
var doubleTapConfig = новый GestureConfigTap(2, 1);

// Start double tap gesture recognition.
// Запустить распознавание жестов двойного нажатия.
Input.Gestures.Add(doubleTapConfig);
Input.Gestures.Add(doubleTapConfig);

// Stop tap gesture recognition.
// Остановить распознавание жестов касания.
Input.Gestures.Remove(singleTapConfig);
Input.Gestures.Remove(singleTapConfig);

// Stop all gesture recognitions.
// Остановить все распознавания жестов.
Input.Gestures.Clear();
Ввод.Жесты.Очистить();
```
```

### Configure the gesture
### Настроить жест

Each configuration class has a parameterless constructor that corresponds to the default gesture configuration. You can use special constructors for frequently-modified parameters.
Каждый класс конфигурации имеет конструктор без параметров, который соответствует конфигурации жестов по умолчанию.  Вы можете использовать специальные конструкторы для часто изменяемых параметров.

> [!warning] 
> [!предупреждение]
> We don't recommend you modify other fields as this might break the input system. But if you need to, you can modify them using the corresponding properties.
> Мы не рекомендуем изменять другие поля, так как это может нарушить работу системы ввода.  Но если вам нужно, вы можете изменить их, используя соответствующие свойства.

```cs
```CS
// Default gesture config.
// Конфигурация жестов по умолчанию.
var singleTapConfig = new GestureConfigTap();
var singleTapConfig = новый GestureConfigTap();

// Personalize gesture config using the dedicated constructor.
// Персонализируйте конфигурацию жестов с помощью специального конструктора.
var doubleTapConfig = new GestureConfigTap(2, 2);
var doubleTapConfig = новый GestureConfigTap(2, 2);

// Personalize gesture config by directly accessing the desired property.
// Персонализируйте конфигурацию жестов, напрямую обратившись к нужному свойству.
// Make sure you know what you're doing! Modifying this might break the input system.
// Убедитесь, что вы знаете, что делаете!  Изменение этого может привести к поломке системы ввода.
var noLatencyTap = new GestureConfigTap() { MaximumTimeBetweenTaps= TimeSpan.Zero };
var noLatencyTap = new GestureConfigTap() {MaximumTimeBetweenTaps= TimeSpan.Zero};
```
```

### Access gesture events
### Доступ к событиям жестов

You can access the list of events triggered by recognized gestures using the [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents) collection. The collection is automatically cleared at every update.
Вы можете получить доступ к списку событий, вызванных распознанными жестами, используя коллекцию [InputManager.GestureEvents](xref:Stride.Input.InputManager.GestureEvents).  Коллекция автоматически очищается при каждом обновлении.

```cs
```CS
var currentFrameGestureEvents = Input.GestureEvents;
var currentFrameGestureEvents = Input.GestureEvents;
```
```

### Identify the gesture type
### Определите тип жеста

Use the [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type) field to identity the gesture type, then cast it to the appropriate event type to get extra information about the event. 
Используйте поле [GestureEvent.Type](xref:Stride.Input.GestureEvent.Type), чтобы определить тип жеста, а затем приведите его к соответствующему типу события, чтобы получить дополнительную информацию о событии.

```cs
```CS
foreach( var gestureEvent in Input.GestureEvents)
foreach ( var жестевент в Input.GestureEvents)
{
{
   	// Determine if the event is from a tap gesture
// Определяем, произошло ли событие от касания
	if (gestureEvent.Type != GestureType.Tap)
если (gestureEvent.Type != GestureType.Tap)
		continue;
Продолжать;
   
	// Cast a specific tap event class.
// Приведение определенного класса события касания.
	GestureEventTap  tapEvent = (GestureEventTap) gestureEvent;
GestureEventTap tapEvent = (GestureEventTap) жестEvent;
	
    // Access tap-event-specific field.
// Доступ к полю, специфичному для события касания.
    log.Info("Tap position: {0}.", tapEvent.TapPosition);
log.Info(
}
}
```
```

### Identify the gesture state
### Определите состояние жеста

Use the [GestureEvent.State](xref:Stride.Input.GestureEvent.State) field to get gesture event state.
Используйте поле [GestureEvent.State](xref:Stride.Input.GestureEvent.State), чтобы получить состояние события жеста.

```cs
```CS
switch(compositeGestureEvent.State)
переключатель (compositeGestureEvent.State)
{
{
case GestureState.Began:
случай GestureState.Began:
	image.ComputePreview();
image.ComputePreview();
	break;
ломать;
case GestureState.Changed:
случай GestureState.Changed:
	image.TransformPreview(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
image.TransformPreview(compositeGestureEvent.TotalScale, композицияGestureEvent.TotalRotation);
	break;
ломать;
case GestureState.Ended:
случай GestureState.Ended:
	image.TransformRealImage(compositeGestureEvent.TotalScale, compositionGestureEvent.TotalRotation);
image.TransformRealImage(compositeGestureEvent.TotalScale, композицияGestureEvent.TotalRotation);
	break;
ломать;
default:
дефолт:
	break;
ломать;
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
* [Input overview](index.md)
* [Обзор ввода](index.md)
