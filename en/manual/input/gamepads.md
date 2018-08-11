# Gamepads

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

**Gamepads**, such as the Xbox Elite Wireless Controller and the PS4 DualShock, are popular input devices for consoles and desktop.

> [!Note] 
> Xenko is currently optimized for the Xbox Elite gamepad. Other controllers work, but might have unexpected button mappings. Gamepad-specific features like the PS4 DualShock touchpad aren't supported.

## Digital and analog buttons

* **Digital** buttons have two states: **up** and **down**. The D-pad, Start, Back, Thumbstick (press), A, B, X and Y buttons are digital buttons.

* **Analog** buttons return a value depending on how hard the user presses. The triggers are analog buttons, and return a value between 0 and 1. The thumbsticks are also analog, and return values between -1 and 1 on the X and Y axes. 

The Xbox Elite controller buttons have the following names in Xenko:

![Xbox gamepad](media/input-gamepad-standard-gamepad.png)

## Handle gamepad input

### Check that gamepads are connected

Before handling gamepad input:

* To check if any gamepads are connected, use [InputManager.HasGamePad](xref:Xenko.Input.InputManager.HasGamePad).

* To check how many gamepads are connected, use [InputManager.GamePadCount](xref:Xenko.Input.InputManager.GamePadCount).

* To check if the current device has been disconnected, use the [InputManager.DeviceRemoved](xref:Xenko.Input.InputManager.DeviceRemoved) event.

* To check if a device has been connected, use the [InputManager.DeviceAdded](xref:Xenko.Input.InputManager.DeviceAdded) event.

### Digital buttons

To query the states and state changes of digital gamepad buttons, on the `GamePad` object, call:

| Method | Functionality
|--------|--------------
| [IsButtonDown(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonDown\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | Checks whether the button is in the _down_ state.
| [IsButtonPressed(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonPressed\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | Checks whether the user has _pressed_ the button since the previous update. 
| [IsButtonReleased(IGamePadDevice, GamePadButton)](xref:Xenko.Input.GamePadDeviceExtensions.IsButtonReleased\(Xenko.Input.IGamePadDevice,Xenko.Input.GamePadButton\)) | Checks whether the user has _released_ the button since the previous update.

**Button (GamePadButton)** is the gamepad button you want to check.

You can also get the state of digital buttons using [GamePadState.Buttons](xref:Xenko.Input.GamePadState.Buttons).

> [!Note] 
> The [GamePadState.Buttons](xref:Xenko.Input.GamePadState.Buttons) field is a bitmask that uses binary system. Depending on the bitmask value, you can determine which buttons are *up* or *down*.

To get the gamepad state, use [IGamePadDevice.State](xref:Xenko.Input.IGamePadDevice.State).

### Analog buttons

To query values of analog buttons, first get the current state of gamepad using 
[GetGamePadByIndex(index)](xref:Xenko.Input.InputManager.GetGamePadByIndex\(System.Int32\)), where _index (Integer)_ is the index of the gamepad you want to check.

> [!WARNING]
> The value returned by [IGamePadDevice.State](xref:Xenko.Input.IGamePadDevice.State) is the state of the gamepad at the **current** update. You can't reuse this value for the next updates. You have to query it again in every update.

To get trigger and thumbstick positions, use these 
[GamePadState](xref:Xenko.Input.GamePadState) fields:

| Field | Description 
|-------|------------
| [GamePadState.LeftThumb](xref:Xenko.Input.GamePadState.LeftThumb) | Left thumbstick X-axis/Y-axis value in the range [-1.0f, 1.0f] for both axes. |
| [GamePadState.RightThumb](xref:Xenko.Input.GamePadState.RightThumb) | Right thumbstick X-axis/Y-axis value in the range [-1.0f, 1.0f] for both axes. |
| [GamePadState.LeftTrigger](xref:Xenko.Input.GamePadState.LeftTrigger) | Left trigger analog control value in the range [0, 1.0f] for a single axes. |
| [GamePadState.RightTrigger](xref:Xenko.Input.GamePadState.RightTrigger) | Right trigger analog control value in the range [0, 1.0f] for a single axis. |

Thumbsticks move along the X and Y axes. Their positions read as follows:

![Query thumb position](media/index-gamepad-stick-position-1.png)
![Query thumb position](media/index-gamepad-stick-position-2.png)

Triggers move along the X axis. Their positions read as follows:

![Query trigger position](media/index-gamepad-trigger-position.png)

### Vibration

To set the gamepad vibration level, use [IGamePadDevice.SetVibration](xref:Xenko.Input.IGamePadDevice.SetVibration\(System.Single,System.Single,System.Single,System.Single\)).

> [!Note] 
> Xenko currently only supports vibration for Xbox gamepads.

## Example code

```cs
using Xenko.Core.Mathematics;
using Xenko.Engine;

public class TestScript : SyncScript
{
    public override void Update()
    {
        //Check if a gamepad is connected
        if (Input.HasGamePad)
        {
            //Get the number of connected gamepads
            int gamepadCount = Input.GamePadCount;

            // Check each gamepad's status
            foreach(var gamepad in Input.GamePads)
            {
                // Get the analog thumbstick positions
                Vector2 speed = gamepad.State.LeftThumb;
                Vector2 direction = gamepad.State.RightThumb;

                // Get the digital buttons' status
                if (gamepad.IsButtonDown(GamePadButton.X))
                {
                    // The action repeats for as long as the user holds the button down.
                    // This is useful for continuous actions such as firing a machine gun.
                }
                if (gamepad.IsButtonPressed(GamePadButton.A))
                {
                    // The action is triggered only once, even if the user holds the button down.
                    // This is useful for one-time actions such as jumping.
                }
            }
        }
    }
}
```

## See also
* [Keyboards](keyboards.md)
* [Virtual buttons](virtual-buttons.md)
* [Input overview](index.md)