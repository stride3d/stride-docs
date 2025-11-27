# Window Configuration

<span class="badge text-bg-primary">Beginner</span>

Properties of the game's window can be controled through code.

Currently, this cannot be configured in Game Studio, so a simple alternative is to have a [`Startup Script`](../scripts/types-of-script#startup-scripts) in the root scene of your project, that changes values of `Game.Window`.

> [!Note]
> The best solution would be to change these properties before the window is opened, by overriding the `Game` class, but this is outside of the scope of this page.

```csharp
using Stride.Engine;

namespace MyGame
{
    public class WindowSetupScript : StartupScript
    {
        public override void Start()
        {
            // Set window properties here
            
            // Example
            Game.Window.IsBorderLess = true;
        }
    }
}
```

## Making the window resizable

To allow for window resizing, set `AllowUserResizing` to `true`.

```csharp
Game.Window.AllowUserResizing = true
```

## Fullscreen

To enter fullscreen mode, set `IsFullscreen` to `true`.

```csharp
Game.Window.IsFullscreen = true
```

By default, Stride uses **exclusive fullscreen**. This can be changed to **borderless fullscreen** by setting `FullscreenIsBorderlessWindow` to `true`.

```csharp
Game.Window.FullscreenIsBorderlessWindow = true;
```

The main difference between these two fullscreen modes is that **exclusive fullscreen** renders the game directly to the screen, while **borderless fullscreen** resizes the window to take up the entire display.

> [!Note]
> **Exclusive fullscreen** can slightly improve performence, but is generally disliked by most players due to making switching between different applications slower and more cumbersome.

## Resolution

Resolution can be set using the `SetSize` method and read using the `ClientBounds` property.

```csharp
// Setting the window size to 1920x1080
Game.Window.SetSize(new Int2(1920, 1080));

// Reading window size and position
var newBounds = Game.Window.ClientBounds;
```

The size of the entire screen can be found in `Game.GraphicsDevice`.

```csharp
// List of all connected displays
var monitors = Game.GraphicsDevice.Outputs;

// Reading the size and position of the first connected display
var bounds = monitors[0].DesktopBounds;
```

Each output also contains a list of supported display modes for the monitor. This is useful for **creating a resolution dropdown** in a settings menu of your game.

```csharp
var supportedDisplayModes = monitors[0].SupportedDisplayModes;

// Create a list of avaliable resolutions
var resolutions = new List<Int2>();
foreach (var mode in supportedDisplayModes)
{
    var res = new Int2(mode.Width, mode.Height);
    if (!resolutions.Contains(res))
        resolutions.Add(res);
}
```

## Title

The window title can be changed using the `Title` property.

```csharp
Game.Window.Title = "My Title Here";
```

## Other window properties

Here are other miscellaneous window properties. 

```csharp
// Changes window opacity
Game.Window.Opacity = 0.6f;

// Removes window borders
Game.Window.IsBorderless = true;

// Changes mouse visibility
Game.Window.IsMouseVisible = false;

// Changes the position of the window
Game.Window.Position = new Int2(50, 50);


// True when the window has focus
var hasFocus = Game.Window.IsFocused;

// True when the window is minimized
var minimized = Game.Window.IsMinimized;
```
