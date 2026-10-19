# UI and game input

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

When the player uses the UI, your game scripts don't also receive that input. If the player clicks a button, the button receives the click and your scripts don't. If the player types in a text box, the character doesn't move.

The UI does this with [input capture](../input/input-capture.md). While the UI holds a device, game-facing reads of the device report no input.

## What the UI captures

| Input | When the UI captures it |
| --- | --- |
| Mouse | While the mouse is over a UI element that can be hit, or while a press that started on the UI is held |
| Touch | One pointer (finger) that was pressed on the UI, until it is released. Other fingers stay with the game. |
| Keyboard | While a UI element has the focus (@'Stride.UI.UISystem.FocusedElement' isn't `null`), for example a selected @'Stride.UI.Controls.EditText' |

Only elements with [CanBeHitByUser](xref:Stride.UI.UIElement.CanBeHitByUser) set to `true` capture the mouse. A click on an image that can't be hit goes to the game.

The UI doesn't capture the mouse in these cases:

* **A game drag crosses the UI.** If the player pressed a button outside the UI and moves over the UI, the game keeps the drag. The game also sees the release when the drag ends over the UI.
* **The mouse is locked**, for example for mouse-look. The position of a locked mouse isn't a cursor, so a UI element at the screen center doesn't freeze the camera.

The mouse position is never hidden. For more information, see [What the game sees](../input/input-capture.md#what-the-game-sees).

## Focus and the keyboard

While an element has the focus, the UI holds the keyboard with the [Focus](xref:Stride.Input.InputCapturePriority.Focus) priority. A [Modal](xref:Stride.Input.InputCapturePriority.Modal) capture, such as a console, can take the keyboard from the UI. When the modal layer releases the keyboard, the focused element gets it back.

If the focused element becomes hidden or disabled, it loses the focus and the keyboard goes back to the game. For example, when you close a popup that contains a text box, the player doesn't have to press **Esc** before the game sees keys again.

### Check keys in UI key handlers

While the UI holds the keyboard, the @'Stride.Input.InputManager' in [KeyEventArgs.Input](xref:Stride.UI.KeyEventArgs.Input) is masked. To check other keys in a key handler, for example **Shift** for text selection, use [KeyEventArgs.IsKeyDown](xref:Stride.UI.KeyEventArgs.IsKeyDown\(Stride.Input.Keys\)) or [KeyEventArgs.DownKeys](xref:Stride.UI.KeyEventArgs.DownKeys). They give the keys that the UI sees held.

```cs
private void OnKeyPressed(object sender, KeyEventArgs e)
{
    var shift = e.IsKeyDown(Keys.LeftShift) || e.IsKeyDown(Keys.RightShift);
    // ...
}
```

## When the UI finds the element under the pointer

The UI finds the element under the pointer during the input update, before your scripts run. @'Stride.UI.UISystem.UIElementUnderMouseCursor' is current when your scripts read it.

The UI uses the layout and the camera matrices of the last frame that it drew. This is the frame that was on the screen when the player clicked. A UI component can receive input from the frame after its first draw.

If several cameras draw the same UI component, the UI finds elements in each of these views.

## Let the game see UI input

To let your scripts see all input, as in Stride 4.4 and earlier, turn off masking. In the [game settings](../game-studio/game-settings.md#input), clear **Hide captured input from the game**, or set [InputManager.MaskCapturedInput](xref:Stride.Input.InputManager.MaskCapturedInput) to `false`. The UI still works as usual.

## Sample project

The **game menu UI** sample shows what game code sees of the input. The overlay at the top left of the screen shows the keys that are down, the left clicks, the mouse wheel total, and who holds the mouse and the keyboard.

* Click a menu button. The button works, and the game doesn't see the click. Click the background, and the game sees the click.
* Type a name in the welcome popup. The game sees no keys.
* Press **F9** to turn masking off and on.

## See also

* [Input capture](../input/input-capture.md)
* [Add a UI to a scene](add-a-ui-to-a-scene.md)
* [Game settings](../game-studio/game-settings.md)
