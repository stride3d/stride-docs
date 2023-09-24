# Mouse

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Programmer</span>

The **mouse** is a common input device for desktop games.

There are two ways to handle mouse input in Stride:

* Query **mouse button states**.
* For cross-platform games that target mobile devices, you can use [PointerEvent](xref:Stride.Input.PointerEvent) lists.
For more information, see [Pointers](pointers.md).

You can access **mouse button states** and **pointer events list** from the [Input manager](xref:Stride.Input.InputManager).

| Class | Project type | When to use |
| --- | --- | --- |
| [InputManager](xref:Stride.Input.InputManager) | Desktop only | For desktop games, you usually handle input with multiple mouse buttons. This means you should use **mouse button states**. |
| [PointerEvent](xref:Stride.Input.PointerEvent) | Cross-platform | For mobile games, you usually simulate pointers with just the left mouse button. This means you can treat the mouse input like pointers. There's no need to create separate mouse-specific controls. For more information, see [Pointers](pointers.md).|

For more information about these options, see the [Input index](index.md).

## Check mouse availability

Before handling mouse input, use [Input.HasMouse](xref:Stride.Input.InputManager.HasMouse) to check if a mouse is connected.

## Get the mouse position

You can get the mouse position in normalized or absolute coordinates.

### Normalized coordinates

@'Stride.Input.InputManager.MousePosition' returns the mouse pointer position in **normalized** X, Y coordinates instead of actual screen sizes in pixels. This means the pointer position adjusts to any resolution and you don't have to write separate code for different resolutions.

* (0,0): the pointer is in the top-left corner of the screen
* (1,1): the pointer is in the bottom-right corner of the screen

### Absolute coordinates

[InputManager.AbsoluteMousePosition](xref:Stride.Input.InputManager.AbsoluteMousePosition) returns the mouse pointer position in absolute X and Y coordinates (the actual screen size in pixels). For example, if the pointer is in the top-left corner of the screen, the values are (0,0). If the pointer is in the bottom-right corner, the values depends on the screen resolution (eg 1280, 720).

> [!Tip]
> To get the actual size of the screen, access [IPointerDevice.SurfaceSize](xref:Stride.Input.IPointerDevice.SurfaceSize). For example:
> ```cs
> var surfaceSize = Input.Mouse.SurfaceSize;
> ```

## Query mouse button state changes

You can use the mouse buttons to trigger actions in a project. For example, in first-person shooter games, the left mouse button is commonly used to shoot.

The [Input manager](xref:Stride.Input.InputManager) has several methods that check mouse button states (_Pressed_, _Down_, or _Released_):

| Method | Description 
| ------ | --- 
| [HasDownMouseButtons](xref:Stride.Input.InputManager.HasDownMouseButtons) | Checks if one or more mouse buttons are currently pressed down. 
| [HasPressedMouseButtons](xref:Stride.Input.InputManager.HasPressedMouseButtons) | Checks if one or more mouse buttons were pressed in the last update. 
| [HasReleasedMouseButtons](xref:Stride.Input.InputManager.HasReleasedMouseButtons) | Checks if one or more mouse buttons were released in the last update. 
| [IsMouseButtonDown (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonDown\(Stride.Input.MouseButton\)) | Checks if a specified mouse button is currently pressed down.
| [IsMouseButtonPressed (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonPressed\(Stride.Input.MouseButton\)) | Checks if a specified mouse button was pressed in the last update. 
| [IsMouseButtonReleased (MouseButton)](xref:Stride.Input.InputManager.IsMouseButtonReleased\(Stride.Input.MouseButton\)) | Checks if a specified mouse button was released in the last update. 

### Mouse delta

Use [InputManager.MouseDelta](xref:Stride.Input.InputManager.MouseDelta) to get the change in mouse position in normalized coordinates since the last update. You can use this to analyze mouse movement speed and direction.

### Mouse wheel delta 

You can use the mouse wheel to trigger actions in a project. For example, in a first-person shooter game, moving the mouse wheel might switch weapons or zoom a camera.

The [InputManager.MouseWheelDelta](xref:Stride.Input.InputManager.MouseWheelDelta) returns a positive value when the user scrolls forwards and a negative value when the user scrolls backwards. A value of `0` indicates no movement.

## Lock the mouse position

For some projects, the user needs to move the mouse cursor beyond the borders of the screen. For example, first-person shooter games usually need 360-degree camera rotation. In these cases, you also probably want the mouse cursor to be hidden.

You can lock the mouse position and hide the cursor with the following properties and methods:

| Method or property | Description |
| --- | --- |
| [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) | Locks the mouse position until the next call to the [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) event. 
| [UnlockMousePosition()](xref:Stride.Input.InputManager.UnlockMousePosition) | Unlocks the mouse position locked by the [LockMousePosition(Boolean)](xref:Stride.Input.InputManager.LockMousePosition\(System.Boolean\)) event. 
| [IsMousePositionLocked](xref:Stride.Input.InputManager.IsMousePositionLocked) | Checks if the mouse position is locked. 

> [!Tip] 
> You can get or set mouse visibility with [GameWindow.IsMouseVisible](xref:Stride.Games.GameWindow.IsMouseVisible).

## Example code

```cs
public class MouseInputScript : SyncScript
{
	public override void Update()
	{
		//If the left mouse button is pressed in this update, do something.
		if (Input.IsMouseButtonDown(MouseButton.Left))
		{   
		}
		//If the middle mouse button has been pressed since the last update, do something.
		if (Input.IsMouseButtonPressed(MouseButton.Middle))
		{  
		}

		//If the mouse moved more than 0.2 units of the screen size in X direction, do something.
		if (Input.MouseDelta.X > 0.2f)
		{
		}
		
	}
}
```

## See also

* [Pointers](pointers.md)
* [Virtual buttons](virtual-buttons.md)
* [Keyboard](keyboards.md)
* [Gamepads](gamepads.md)
* [Input overview](index.md)