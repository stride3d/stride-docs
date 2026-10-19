# Input capture

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

A UI or an overlay can **capture** an input device. While a device is captured, game code that reads the device sees no input. The owner of the capture still receives the input.

For example, when the player clicks a UI button, the UI captures the mouse. The button receives the click, and [IsMouseButtonPressed](xref:Stride.Input.InputManager.IsMouseButtonPressed\(Stride.Input.MouseButton\)) in your scripts returns `false`. When the player types in an @'Stride.UI.Controls.EditText', the UI captures the keyboard, so `IsKeyDown(Keys.W)` doesn't move the character.

The Stride UI captures input automatically. For more information, see [UI and game input](../ui/ui-and-game-input.md). You can also use the capture API for your own overlays, such as a debug console or an ImGui integration.

## What the game sees

While a device is captured, these reads report no input:

* the key and button queries, such as `IsKeyDown`, `IsKeyPressed`, `IsMouseButtonPressed` and `IsButtonDown`
* the key and button sets, such as [DownKeys](xref:Stride.Input.InputManager.DownKeys)
* [IGamePadDevice.State](xref:Stride.Input.IGamePadDevice.State)
* [MouseDelta](xref:Stride.Input.InputManager.MouseDelta), [AbsoluteMouseDelta](xref:Stride.Input.InputManager.AbsoluteMouseDelta) and [MouseWheelDelta](xref:Stride.Input.InputManager.MouseWheelDelta)
* the event lists [Events](xref:Stride.Input.InputManager.Events), [KeyEvents](xref:Stride.Input.InputManager.KeyEvents) and [PointerEvents](xref:Stride.Input.InputManager.PointerEvents)
* [gestures](gestures.md) and [virtual buttons](virtual-buttons.md)

The **mouse position** isn't hidden. [MousePosition](xref:Stride.Input.InputManager.MousePosition) and [AbsoluteMousePosition](xref:Stride.Input.InputManager.AbsoluteMousePosition) always show where the pointer is, because a position isn't an action.

Captures don't cause stuck keys or phantom input:

* When a capture begins, keys and buttons that the game saw held are reported released for one frame.
* When a capture ends, a key that is still held stays hidden until the player presses it again. A key repeat from the operating system doesn't count as a new press.

## Capture a device

To capture a whole device, call [TryCapture](xref:Stride.Input.InputManager.TryCapture\(Stride.Input.IInputDevice,System.Object,System.Int32\)) with the device, an owner object and a priority. The owner is usually the script or system that takes the input. The method returns `true` if the owner holds the device after the call.

To release the device, call [Release](xref:Stride.Input.InputManager.Release\(Stride.Input.IInputDevice,System.Object\)) with the same owner. To release all the devices and pointers of an owner, call [ReleaseAll](xref:Stride.Input.InputManager.ReleaseAll\(System.Object\)).

A capture lasts until the owner releases it. If the owner calls `TryCapture` again, the priority of the capture changes.

```cs
using Stride.Engine;
using Stride.Input;

public class PauseMenu : SyncScript
{
    // Set by the code that opens and closes the menu
    public bool IsOpen { get; set; }

    public override void Update()
    {
        // While the menu is open, the game doesn't see the keyboard and the gamepad
        if (IsOpen)
        {
            if (Input.HasKeyboard)
                Input.TryCapture(Input.Keyboard, this, InputCapturePriority.Modal);
            if (Input.DefaultGamePad != null)
                Input.TryCapture(Input.DefaultGamePad, this, InputCapturePriority.Modal);
        }
        else
        {
            Input.ReleaseAll(this);
        }
    }

    public override void Cancel()
    {
        Input.ReleaseAll(this);
    }
}
```

> [!NOTE]
> After the owner captures a device, game-facing reads hide the device from the owner too. To read a device that you hold, use an event listener. For more information, see [Read input as the owner](#read-input-as-the-owner).

### Priorities

A higher priority takes a device from a lower priority. A capture with the same or a lower priority fails, and `TryCapture` returns `false`.

[InputCapturePriority](xref:Stride.Input.InputCapturePriority) gives names to common priorities:

| Priority | Value | Use |
| --- | --- | --- |
| [Hover](xref:Stride.Input.InputCapturePriority.Hover) | 0 | Capture because the pointer is over a UI panel. This is the default. |
| [Focus](xref:Stride.Input.InputCapturePriority.Focus) | 100 | Capture because an element has the focus, such as a text box that receives the keyboard. |
| [Modal](xref:Stride.Input.InputCapturePriority.Modal) | 1000 | Capture for modal layers, such as a console or a pause menu. |

You can use any integer value.

## Capture one pointer

On a touch screen, you can capture one pointer (finger) and leave the other pointers to the game. For example, a finger on a UI joystick doesn't hide a second finger that drags the camera.

To capture one pointer, call [TryCapturePointer](xref:Stride.Input.InputManager.TryCapturePointer\(Stride.Input.IPointerDevice,System.Int32,System.Object,System.Int32\)) with the pointer device and the [PointerId](xref:Stride.Input.PointerEvent.PointerId). To release it, call [ReleasePointer](xref:Stride.Input.InputManager.ReleasePointer\(Stride.Input.IPointerDevice,System.Int32,System.Object\)).

```cs
foreach (var pointerEvent in pointerEventsFromMyListener)
{
    if (pointerEvent.EventType == PointerEventType.Pressed && IsOnJoystick(pointerEvent.Position))
        Input.TryCapturePointer(pointerEvent.Pointer, pointerEvent.PointerId, this);
    else if (pointerEvent.EventType == PointerEventType.Released)
        Input.ReleasePointer(pointerEvent.Pointer, pointerEvent.PointerId, this);
}
```

## Read input as the owner

Capture hides input from game-facing reads only. The owner reads the input through an **event listener**. Listeners receive all events before the input manager hides them.

To add a listener, implement [IInputEventListener&lt;TEventType&gt;](xref:Stride.Input.IInputEventListener`1) and call [AddListener](xref:Stride.Input.InputManager.AddListener\(Stride.Input.IInputEventListener\)). To remove it, call [RemoveListener](xref:Stride.Input.InputManager.RemoveListener\(Stride.Input.IInputEventListener\)).

```cs
using System.Collections.Generic;
using Stride.Engine;
using Stride.Input;

public class PauseMenu : SyncScript, IInputEventListener<KeyEvent>
{
    private readonly List<KeyEvent> keyEvents = new List<KeyEvent>();

    public override void Start()
    {
        Input.AddListener(this);
    }

    public override void Cancel()
    {
        Input.RemoveListener(this);
        Input.ReleaseAll(this);
    }

    void IInputEventListener<KeyEvent>.ProcessEvent(KeyEvent inputEvent) => keyEvents.Add(inputEvent);

    public override void Update()
    {
        foreach (var keyEvent in keyEvents)
        {
            // Every key event, also while the menu holds the keyboard
        }
        keyEvents.Clear();
    }
}
```

## Know when a capture changes

The [CaptureChanged](xref:Stride.Input.InputManager.CaptureChanged) event occurs when the owner of a device or a pointer changes. Its [DeviceCaptureChangedEventArgs](xref:Stride.Input.DeviceCaptureChangedEventArgs) give the [Device](xref:Stride.Input.DeviceCaptureChangedEventArgs.Device), the [PointerId](xref:Stride.Input.DeviceCaptureChangedEventArgs.PointerId) (`null` for a whole device), the [PreviousOwner](xref:Stride.Input.DeviceCaptureChangedEventArgs.PreviousOwner) and the [NewOwner](xref:Stride.Input.DeviceCaptureChangedEventArgs.NewOwner).

Each device also has a [CaptureState](xref:Stride.Input.IInputDevice.CaptureState):

| Property | Description |
| --- | --- |
| [Owner](xref:Stride.Input.DeviceCaptureState.Owner) | The owner that holds the whole device, or `null` |
| [Priority](xref:Stride.Input.DeviceCaptureState.Priority) | The priority of the current capture |
| [IsCaptured](xref:Stride.Input.DeviceCaptureState.IsCaptured) | `true` if an owner holds the whole device |
| [IsMasked](xref:Stride.Input.DeviceCaptureState.IsMasked) | `true` if game-facing reads of the device report no input |

For example, to show who holds the mouse:

```cs
var owner = Input.Mouse.CaptureState.Owner;
DebugText.Print($"Mouse held by: {owner?.GetType().Name ?? "nobody"}", new Int2(10, 10));
```

### When to capture

The input manager raises the [ResolvingCapture](xref:Stride.Input.InputManager.ResolvingCapture) event during each update. It occurs after the input manager sends events to the listeners, and before it builds the state that game code reads. If you capture or release a device in this event, the change applies to the same frame. The Stride UI uses this event.

You can also capture a device in a script. Reads that come after the capture are masked. The input manager builds virtual buttons and gestures before scripts run, so these show the capture from the next frame.

## ImGui integrations

ImGui tells you when it wants the mouse or the keyboard. To hide that input from the game, add these lines to each frame of your integration:

```cs
if (io.WantCaptureMouse) input.TryCapture(input.Mouse, this); else input.Release(input.Mouse, this);
if (io.WantCaptureKeyboard) input.TryCapture(input.Keyboard, this, InputCapturePriority.Focus); else input.Release(input.Keyboard, this);
```

The integration must feed ImGui from event listeners, not from game-facing reads such as `input.IsMouseButtonDown`. Otherwise, ImGui doesn't receive the input that it captures. For more information, see [Read input as the owner](#read-input-as-the-owner).

## Turn off masking

By default, game code doesn't see captured input. To let game code see all input, as in Stride 4.4 and earlier, do one of these:

* In the [game settings](../game-studio/game-settings.md#input), clear **Hide captured input from the game**.
* In code, set [MaskCapturedInput](xref:Stride.Input.InputManager.MaskCapturedInput) to `false`:

    ```cs
    Input.MaskCapturedInput = false;
    ```

When masking is off, the input manager still records captures and still raises `CaptureChanged`. Only the masking stops.

> [!NOTE]
> Game Studio turns off masking in its editor views, because the editor tools read input over the UI they edit.

## Custom input devices

Every input device has a [CaptureState](xref:Stride.Input.IInputDevice.CaptureState). Devices that derive from the engine base classes, such as @'Stride.Input.KeyboardDeviceBase', @'Stride.Input.MouseDeviceBase' and @'Stride.Input.GamePadDeviceBase', already have it.

A device that implements the input interfaces directly must add this property:

```cs
public DeviceCaptureState CaptureState { get; } = new DeviceCaptureState();
```

Return the same instance each time. Only the input manager changes it.

The input manager and the shared query methods mask these devices too. Their own properties aren't masked, unless the device checks [CaptureState.IsMasked](xref:Stride.Input.DeviceCaptureState.IsMasked).

## Upgrade from Stride 4.4

* **Masking is on by default.** If your scripts read clicks or keys that the UI also uses, they don't see them anymore. To get the old behavior, [turn off masking](#turn-off-masking).

* **UI picking runs before scripts.** The UI finds the element under the pointer in the input update, not when it draws. @'Stride.UI.UISystem.UIElementUnderMouseCursor' is current in scripts, not one frame late. For more information, see [UI and game input](../ui/ui-and-game-input.md).

* **UI key handlers** that check other keys through [KeyEventArgs.Input](xref:Stride.UI.KeyEventArgs.Input) must use [KeyEventArgs.IsKeyDown](xref:Stride.UI.KeyEventArgs.IsKeyDown\(Stride.Input.Keys\)) or [KeyEventArgs.DownKeys](xref:Stride.UI.KeyEventArgs.DownKeys). While the UI holds the keyboard, `KeyEventArgs.Input` is masked.

* **Custom devices that implement the input interfaces directly** must have a `CaptureState` property. When you upgrade a project, Stride adds the property to these classes. For more information, see [Custom input devices](#custom-input-devices).

* **Subclasses of `GamePadDeviceBase`** must change. [GamePadDeviceBase.State](xref:Stride.Input.GamePadDeviceBase.State) isn't virtual anymore, because it applies the masking. Rename your `State` override to `RawState`:

    ```cs
    // Stride 4.4
    public override GamePadState State => state;

    // Stride 4.5
    protected override GamePadState RawState => state;
    ```

    When you upgrade a project, Stride makes this change. In these overrides, it also changes `base.State` to `base.RawState`. The [IGamePadDevice](xref:Stride.Input.IGamePadDevice) interface doesn't change.

* **Custom UI renderers**: the `UIRenderFeature.Flush` override is removed. It only cleared the pointer events, which the UI system now handles.

The project upgrade changes only the code in the projects of your solution. If a custom device comes from a library package, the author of the library must make these changes.

## See also

* [UI and game input](../ui/ui-and-game-input.md)
* [Game settings](../game-studio/game-settings.md)
* [Keyboards](keyboards.md)
* [Mouse](mouse.md)
* [Pointers](pointers.md)
* [Input overview](index.md)
