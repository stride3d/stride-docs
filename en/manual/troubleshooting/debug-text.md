# Debug text

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Programmer</span>

You can print debug text at runtime with [DebugText](xref:Xenko.Engine.ScriptComponent.DebugText). For example, you can use this to display a message when a problem occurs.

>[!Note]
>Debug text is automatically disabled when you build the game in release mode.

In the `Update` method of your script, add:

```cs
DebugText.Print("My debug text",new Int2(x: 50, y: 50));
```

Where `x` and `y` are the pixel coordinates to display the text at.

The debug message is displayed when you run the game.

![Debug text](media/my-debug-text.jpg)

To hide debug text, use:

```cs
DebugText.Visible = false;
```

## Example script

The following script checks that the texture `MyTexture` is loaded. If it isn't loaded, the game displays the debug text "MyTexture not loaded".

```cs
using Xenko.Core.Mathematics;
using Xenko.Engine;
using Xenko.Graphics;

namespace MyGame
{
    public class Script : SyncScript
    {
		public Texture myTexture;

        public override void Start()
        {
            // Initialization of the script.
            myTexture = Content.Load<Texture>("MyTexture");
        }

        public override void Update()
        {
			if (myTexture == null)
                DebugText.Print("MyTexture not loaded", new Int2(x: 50, y: 50));
        }
    }
}
```

## See also

* [Logging](logging.md)
* [Scripts](../scripts/index.md)