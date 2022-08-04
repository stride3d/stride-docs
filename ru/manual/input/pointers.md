# Pointers
# Указатели

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Pointers** are points on the device screen corresponding to **finger touches**. Devices with multi-touch functionality support multiple simultaneous pointers.
**Указатели** — это точки на экране устройства, соответствующие **касаниям пальцев**.  Устройства с функцией мультитач поддерживают несколько одновременных указателей.

On desktop platforms, the left mouse button can be used to simulate pointers. For more information about mouse input, see [Mouse](mouse.md).
На настольных платформах левая кнопка мыши может использоваться для имитации указателей.  Дополнительные сведения о вводе с помощью мыши см. в разделе [Мышь](mouse.md).

## How Stride processes pointer input
## Как Stride обрабатывает ввод указателя

1. The user touches the screen or clicks the left mouse button.
1. Пользователь касается экрана или щелкает левой кнопкой мыши.

2. Stride creates a pointer.
2. Stride создает указатель.

3. Stride assigns **pointer ID** to that pointer corresponding to a given finger.
3. Stride присваивает **идентификатор указателя** этому указателю, соответствующему данному пальцу.

4. Every time the pointer is modified, Stride creates a new **pointer event** with that pointer.
4. Каждый раз, когда указатель изменяется, Stride создает новое **событие указателя** с этим указателем.

5. For each new finger, Stride creates a new pointer with a new pointer ID.
5. Для каждого нового пальца Stride создает новый указатель с новым идентификатором указателя.

> [!Note] 
> [!Примечание]
> Each pointer event contains information about only one pointer. If several pointers are modified simultaneously in the same update, Stride creates a separate event for each pointer.
> Каждое событие указателя содержит информацию только об одном указателе.  Если несколько указателей изменяются одновременно в одном и том же обновлении, Stride создает отдельное событие для каждого указателя.

> [!Warning]
> [!Предупреждение]
> Each OS handles pointer modifications differently. This means the same finger gesture can generate slightly different pointer event sequences across different platforms. For example, Android doesn't create a new pointer event when a finger touches the screen but doesn't move. For more information, check your OS documentation.
> Каждая ОС обрабатывает изменения указателя по-своему.  Это означает, что один и тот же жест пальцем может генерировать несколько разные последовательности событий указателя на разных платформах.  Например, Android не создает новое событие указателя, когда палец касается экрана, но не двигается.  Дополнительные сведения см. в документации по вашей ОС.

You can enable gesture recognition to detect gestures such as long presses and taps. For more information, see [Gestures](gestures.md).
Вы можете включить распознавание жестов, чтобы обнаруживать такие жесты, как долгое нажатие и касание.  Для получения дополнительной информации см. [Жесты](gestures.md).

## The PointerEvent class
## Класс PointerEvent

[PointerEvent](xref:Stride.Input.PointerEvent) reports pointer events. It contains the current **pointer status** and time information. It is thrown every time the **pointer** is modified.
[PointerEvent](xref:Stride.Input.PointerEvent) сообщает о событиях указателя.  Он содержит текущий **статус указателя** и информацию о времени.  Он вызывается каждый раз при изменении **указателя**.

You can access the list of **pointer events** since the last update using [InputManager.PointerEvents](xref:Stride.Input.InputManager.PointerEvents). Stride lists pointer events in chronological order. The list is cleared at every update, so you don't need to clear it manually.
Вы можете получить доступ к списку **событий указателя** с момента последнего обновления, используя [InputManager.PointerEvents](xref:Stride.Input.InputManager.PointerEvents).  Stride перечисляет события указателя в хронологическом порядке.  Список очищается при каждом обновлении, поэтому вам не нужно очищать его вручную.

### Get pointer information
### Получить информацию об указателе

You can use the following properties to get information about the pointer that triggered the event:
Вы можете использовать следующие свойства, чтобы получить информацию об указателе, вызвавшем событие:

|Property|Description
|Свойство|Описание
|--------|-----------
|--------|-----------
|[PointerEvent.PointerId](xref:Stride.Input.PointerEvent.PointerId) | Indicates the ID of the pointer which triggered the event.
|[PointerEvent.PointerId](xref:Stride.Input.PointerEvent.PointerId) |  Указывает идентификатор указателя, вызвавшего событие.

> [!Warning]
> [!Предупреждение]
> The ID of a pointer is valid only during a single _Pressed->Moved->Released_ sequence of pointer events.
> Идентификатор указателя действителен только во время одной последовательности _Pressed->Moved->Released_ событий указателя.
> A finger can have different IDs each time it touches the screen (even if this happens very quickly).
> У пальца могут быть разные идентификаторы каждый раз, когда он касается экрана (даже если это происходит очень быстро).

> [!Warning]
> [!Предупреждение]
> Each OS has its own way of assigning IDs to pointers.
> Каждая ОС имеет свой собственный способ присвоения идентификаторов указателям.
> There's no relation between the pointer ID values and corresponding fingers.
> Между значениями идентификатора указателя и соответствующими пальцами нет никакой связи.

To check if a pointer event was triggered by a mouse or touch, use:
Чтобы проверить, было ли событие указателя вызвано мышью или касанием, используйте:

```cs
```CS
bool isTriggeredByMouse = event.Pointer is IMouseDevice
bool isTriggeredByMouse = event.Pointer — это IMouseDevice
```
```

### Get the pointer position
### Получить позицию указателя

You can get the pointer position in normalized or absolute coordinates.
Вы можете получить положение указателя в нормализованных или абсолютных координатах.

#### Normalized coordinates
#### Нормализованные координаты

@'Stride.Input.PointerEvent.Position' returns the pointer position in **normalized** X and Y coordinates instead of actual screen sizes in pixels. This means the pointer position adjusts to any resolution and you don't have to write separate code for different resolutions.
@'Stride.Input.PointerEvent.Position' возвращает положение указателя в **нормализованных** координатах X и Y вместо фактических размеров экрана в пикселях.  Это означает, что положение указателя подстраивается под любое разрешение, и вам не нужно писать отдельный код для разных разрешений.

* (0,0): the pointer is in the top-left corner of the screen
* (0,0): указатель находится в верхнем левом углу экрана
* (1,1): the pointer is in the bottom-right corner of the screen
* (1,1): указатель находится в правом нижнем углу экрана.

#### Absolute coordinates
#### Абсолютные координаты

[PointerEvent.AbsolutePosition](xref:Stride.Input.PointerEvent.AbsolutePosition) returns the pointer position in absolute X and Y coordinates (the actual screen size in pixels). For example, if the pointer is in the top-left corner of the screen, the values are (0,0). If the pointer is in the bottom-right corner, the values depends on the screen resolution (eg 1280, 720).
[PointerEvent.AbsolutePosition](xref:Stride.Input.PointerEvent.AbsolutePosition) возвращает положение указателя в абсолютных координатах X и Y (фактический размер экрана в пикселях).  Например, если указатель находится в верхнем левом углу экрана, значения равны (0,0).  Если указатель находится в правом нижнем углу, значения зависят от разрешения экрана (например, 1280, 720).

> [!Tip]
> [!Подсказка]
> To get the actual size of the screen, access [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). For example:
> Чтобы получить фактический размер экрана, откройте [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize).  Например:
> ```cs
> ```кс
> var surfaceSize = Input.Pointer.SurfaceSize;
> var SurfaceSize = Input.Pointer.SurfaceSize;
> ```
> ```

### Get pointer events
### Получить события указателя

Use the [PointerEvent.EventType](xref:Stride.Input.PointerEvent.EventType) to check the pointer events.
Используйте [PointerEvent.EventType](xref:Stride.Input.PointerEvent.EventType) для проверки событий указателя.

There are five types of pointer event:
Существует пять типов событий указателя:

* **Pressed**: The finger touched the screen.
* **Нажатие**: Палец коснулся экрана.
* **Moved**: The finger moved along the screen.
* **Перемещено**: Палец двигался по экрану.
* **Released**: The finger left the screen.
* **Отпущено**: Палец покинул экран.
* **Canceled**: The pointer sequence was canceled. This can happen when the application is interrupted; for example, a phone app might be interrupted by an incoming phone call.
* **Canceled**: последовательность указателя отменена.  Это может произойти, когда приложение прерывается;  например, телефонное приложение может быть прервано входящим телефонным звонком.

> [!Note] 
> [!Примечание]
> A sequence of pointer events for one pointer always starts with a **Pressed** event. This might be followed by one or more **Moved** events, and always ends with a **Released** or **Canceled** event.
> Последовательность событий указателя для одного указателя всегда начинается с события **Pressed**.  За этим может следовать одно или несколько событий **Перемещено**, и оно всегда заканчивается событием **Выпущено** или **Отменено**.

### Get delta values
### Получить дельта-значения

[PointerEvent.DeltaTime](xref:Stride.Input.PointerEvent.DeltaTime) gets the time elapsed from the previous @'Stride.Input.PointerEvent'.
[PointerEvent.DeltaTime](xref:Stride.Input.PointerEvent.DeltaTime) получает время, прошедшее с предыдущего @'Stride.Input.PointerEvent'.

You can get the delta position in normalized or absolute coordinates.
Вы можете получить положение дельты в нормированных или абсолютных координатах.

### Normalized delta values
### Нормализованные дельта-значения

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.DeltaPosition) gets the change in position since the previous @'Stride.Input.PointerEvent' in **normalized** X,Y coordinates.
[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.DeltaPosition) получает изменение положения с момента предыдущего @'Stride.Input.PointerEvent' в **нормализованных** координатах X,Y.

> [!Note] 
> [!Примечание]
> Delta values are always nulls at the beginning of the sequence of pointer events (ie when the **pointer state** is **down**).
> Дельта-значения всегда равны нулю в начале последовательности событий указателя (т. е. когда **состояние указателя** — **вниз**).

### Absolute delta values
### Абсолютные значения дельты

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.AbsoluteDeltaPosition) gets the change in position since the previous @'Stride.Input.PointerEvent' in **absolute** (X,Y) coordinates.
[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.AbsoluteDeltaPosition) получает изменение положения с момента предыдущего @'Stride.Input.PointerEvent' в **абсолютных** (X,Y) координатах.

## Example code
## Пример кода

This script tracks the pointer movement and prints its positions:
Этот скрипт отслеживает движение указателя и печатает его позиции:

```cs
```CS
using System;
с помощью системы;
using System.Collections.Generic;
используя System.Collections.Generic;
using System.Linq;
с помощью System.Linq;
using System.Threading.Tasks;
использование System.Threading.Tasks;
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
using Stride.Engine;
с помощью Stride.Engine;

namespace Stride.Input.Tests
пространство имен Stride.Input.Tests
{
{
    public class PointerTestScript : AsyncScript
открытый класс PointerTestScript: AsyncScript
    {
{
        public override async Task Execute()
публичное переопределение асинхронной задачи Execute()
        {
{
            var pointerPositions = new Dictionary<int, Vector2>();
var pointerPositions = new Dictionary<int, Vector2>();
            while (true)
пока (правда)
            {
{
                await Script.NextFrame();
ожидайте Script.NextFrame();
                foreach (var pointerEvent in Input.PointerEvents)
foreach (var pointerEvent в Input.PointerEvents)
                {
{
                    switch (pointerEvent.EventType)
переключатель (pointerEvent.EventType)
                    {
{
                    case PointerEventType.Pressed:
case PointerEventType.Pressed:
                        pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                        break;
ломать;
                    case PointerEventType.Moved:
case PointerEventType.Moved:
                        pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                        break;
ломать;
                    case PointerEventType.Released:
случай PointerEventType.Released:
                    case PointerEventType.Canceled:
case PointerEventType.Canceled:
                        pointerPositions.Remove(pointerEvent.PointerId);
pointerPositions.Remove(pointerEvent.PointerId);
                        break;
ломать;
                    default:
дефолт:
                        throw new ArgumentOutOfRangeException();
бросить новое исключение ArgumentOutOfRangeException();
                    }
}
                }
}
                var positionsStr = pointerPositions.Values.Aggregate("", (current, pointer) => current + (pointer.ToString() + ", "));
var positionStr = pointerPositions.Values.Aggregate(
                Log.Info("There are currently {0} pointers on the screen located at {1}", pointerPositions.Count, positionsStr);
Log.Info(
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
* [Gestures](gestures.md)
* [Жесты](gestures.md)
* [Mouse](mouse.md)
* [Мышь](mouse.md)
* [Virtual buttons](virtual-buttons.md)
* [Виртуальные кнопки](virtual-buttons.md)
* [Input overview](index.md)
* [Обзор ввода](index.md)
