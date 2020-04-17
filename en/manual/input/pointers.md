# Pointers

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Pointers** are points on the device screen corresponding to **finger touches**. Devices with multi-touch functionality support multiple simultaneous pointers.

On desktop platforms, the left mouse button can be used to simulate pointers. For more information about mouse input, see [Mouse](mouse.md).

## How Stride processes pointer input

1. The user touches the screen or clicks the left mouse button.

2. Stride creates a pointer.

3. Stride assigns **pointer ID** to that pointer corresponding to a given finger.

4. Every time the pointer is modified, Stride creates a new **pointer event** with that pointer.

5. For each new finger, Stride creates a new pointer with a new pointer ID.

> [!Note] 
> Each pointer event contains information about only one pointer. If several pointers are modified simultaneously in the same update, Stride creates a separate event for each pointer.

> [!Warning]
> Each OS handles pointer modifications differently. This means the same finger gesture can generate slightly different pointer event sequences across different platforms. For example, Android doesn't create a new pointer event when a finger touches the screen but doesn't move. For more information, check your OS documentation.

You can enable gesture recognition to detect gestures such as long presses and taps. For more information, see [Gestures](gestures.md).

## The PointerEvent class

[PointerEvent](xref:Stride.Input.PointerEvent) reports pointer events. It contains the current **pointer status** and time information. It is thrown every time the **pointer** is modified.

You can access the list of **pointer events** since the last update using [InputManager.PointerEvents](xref:Stride.Input.InputManager.PointerEvents). Stride lists pointer events in chronological order. The list is cleared at every update, so you don't need to clear it manually.

### Get pointer information

You can use the following properties to get information about the pointer that triggered the event:

|Property|Description
|--------|-----------
|[PointerEvent.PointerId](xref:Stride.Input.PointerEvent.PointerId) | Indicates the ID of the pointer which triggered the event.

> [!Warning]
> The ID of a pointer is valid only during a single _Pressed->Moved->Released_ sequence of pointer events.
> A finger can have different IDs each time it touches the screen (even if this happens very quickly).

> [!Warning]
> Each OS has its own way of assigning IDs to pointers.
> There's no relation between the pointer ID values and corresponding fingers.

To check if a pointer event was triggered by a mouse or touch, use:

```cs
bool isTriggeredByMouse = event.Pointer is IMouseDevice
```

### Get the pointer position

You can get the pointer position in normalized or absolute coordinates.

#### Normalized coordinates

@'Stride.Input.PointerEvent.Position' returns the pointer position in **normalized** X and Y coordinates instead of actual screen sizes in pixels. This means the pointer position adjusts to any resolution and you don't have to write separate code for different resolutions.

* (0,0): the pointer is in the top-left corner of the screen
* (1,1): the pointer is in the bottom-right corner of the screen

#### Absolute coordinates

[PointerEvent.AbsolutePosition](xref:Stride.Input.PointerEvent.AbsolutePosition) returns the pointer position in absolute X and Y coordinates (the actual screen size in pixels). For example, if the pointer is in the top-left corner of the screen, the values are (0,0). If the pointer is in the bottom-right corner, the values depends on the screen resolution (eg 1280, 720).

> [!Tip]
> To get the actual size of the screen, access [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). For example:
> ```cs
> var surfaceSize = Input.Pointer.SurfaceSize;
> ```

### Get pointer events

Use the [PointerEvent.EventType](xref:Stride.Input.PointerEvent.EventType) to check the pointer events.

There are five types of pointer event:

* **Pressed**: The finger touched the screen.
* **Moved**: The finger moved along the screen.
* **Released**: The finger left the screen.
* **Canceled**: The pointer sequence was canceled. This can happen when the application is interrupted; for example, a phone app might be interrupted by an incoming phone call.

> [!Note] 
> A sequence of pointer events for one pointer always starts with a **Pressed** event. This might be followed by one or more **Moved** events, and always ends with a **Released** or **Canceled** event.

### Get delta values

[PointerEvent.DeltaTime](xref:Stride.Input.PointerEvent.DeltaTime) gets the time elapsed from the previous @'Stride.Input.PointerEvent'.

You can get the delta position in normalized or absolute coordinates.

### Normalized delta values

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.DeltaPosition) gets the change in position since the previous @'Stride.Input.PointerEvent' in **normalized** X,Y coordinates.

> [!Note] 
> Delta values are always nulls at the beginning of the sequence of pointer events (ie when the **pointer state** is **down**).

### Absolute delta values

[PointerEvent.DeltaPosition](xref:Stride.Input.PointerEvent.AbsoluteDeltaPosition) gets the change in position since the previous @'Stride.Input.PointerEvent' in **absolute** (X,Y) coordinates.

## Example code

This script tracks the pointer movement and prints its positions:

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Stride.Core.Mathematics;
using Stride.Engine;

namespace Stride.Input.Tests
{
    public class PointerTestScript : AsyncScript
    {
        public override async Task Execute()
        {
            var pointerPositions = new Dictionary<int, Vector2>();
            while (true)
            {
                await Script.NextFrame();
                foreach (var pointerEvent in Input.PointerEvents)
                {
                    switch (pointerEvent.EventType)
                    {
                    case PointerEventType.Pressed:
                        pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                        break;
                    case PointerEventType.Moved:
                        pointerPositions[pointerEvent.PointerId] = pointerEvent.Position;
                        break;
                    case PointerEventType.Released:
                    case PointerEventType.Canceled:
                        pointerPositions.Remove(pointerEvent.PointerId);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                    }
                }
                var positionsStr = pointerPositions.Values.Aggregate("", (current, pointer) => current + (pointer.ToString() + ", "));
                Log.Info("There are currently {0} pointers on the screen located at {1}", pointerPositions.Count, positionsStr);
            }
        }
    }
}
```

## See also
* [Gestures](gestures.md)
* [Mouse](mouse.md)
* [Virtual buttons](virtual-buttons.md)
* [Input overview](index.md)