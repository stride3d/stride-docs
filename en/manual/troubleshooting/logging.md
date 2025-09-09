# Logging

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>

You can **log** information about your game while it runs using [Log](xref:Stride.Engine.ScriptComponent.Log).

Unlike [profiling](profiling.md), which retrieves information automatically, it's up to you to create your own log messages and define when they're triggered. For example, you can create a log message that triggers when a character performs a certain action. This is useful to investigate how your game is performing.

>[!Note]
>Logging is disabled when you build the game in release mode.

When you use logging and run your game in debug mode, Stride opens a console in a second window to display logging information. The messages are color-coded by level. 
The name of the module (such as the script containing the log message) is displayed in brackets. This is followed by the log level (eg **Warning**, **Error**, etc), then the log message.

![Logging in console](media/logging-in-console.png)

The console displays log messages from all modules, not just your own scripts. For example, it also displays messages from the @'Stride.Core.Serialization.Contents.ContentManager'.

If you run your game from Visual Studio, log messages are not shown in the **Output** window by default.
To display them, you need to manually register a log listener that writes to `Debug.WriteLine` (see example below).

```csharp
GlobalLogger.GlobalMessageLogged += new TextWriterLogListener(new DebugTextWriter());

// Minimal TextWriter for Output window logging
public class DebugTextWriter : TextWriter
{
    public override Encoding Encoding => Encoding.UTF8;
    public override void WriteLine(string? value) => Debug.WriteLine(value);
}
```

![Log output window](media/log-output-in-visual-studio.png)

## Log levels

There are six levels of log message, used for different levels of severity.

| Log level | Color | Description
|-----------|-------|-----
| Debug | Gray | Step-by-step information for advanced debugging purposes
| Verbose | White | Detailed information
| Info | Green | General information
| Warning | Yellow | Minor errors that might cause problems
| Error | Red |Errors
| Fatal | Red | Serious errors that crash the game

By default, the log displays messages for the level **Info** and higher. This means it doesn't display **Debug** or **Verbose** messages. To change this, see **Set the minimum level** below.

## Write a log message

In the script containing code you want to log, write:

```cs
Log.Debug("My log message");
```

You can replace `Debug` with the level you want to use for the log message (see **Log levels** above).

You can combine this with `if` statements to log this message under certain conditions (see **Example script** below).

## Set the log level

You can set a minimum log level to display. For example, if you only want to see messages as severe as **Warning** or higher, use:

```cs
Log.ActivateLog(LogMessageType.Warning);
```

>[!Note]
>This isn't a global setting. The log level you set only applies to the script you set it in.

### Change the log level at runtime

```cs
((Game)Game).ConsoleLogLevel = LogMessageType.myLogLevel;
```

### Disable a specific log

```cs
GlobalLogger.GetLogger("RouterClient").ActivateLog(LogMessageType.Debug, LogMessageType.Fatal, false); 
// Disables logging of the RouterClient module
```

### Disable logging in the console

```cs
((Game)Game).ConsoleLogMode = ConsoleLogMode.None;
```

### Create a log file

To save the log output to a text file, add this code to the `Start` method:

```cs
var fileWriter = new TextWriterLogListener(new FileStream("myLogFile.txt", FileMode.Create));
GlobalLogger.GlobalMessageLogged += fileWriter;
```

This creates a file in the Debug folder of your project (eg *MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*).

## Example script

The following script checks that the texture `MyTexture` is loaded. When the texture loads, the log displays a debug message (`Log.Debug`). If it doesn't load, the log records an error message (`Log.Error`).

```cs
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Stride.Core.Diagnostics;
using Stride.Core.Mathematics;
using Stride.Input;
using Stride.Engine;
using Stride.Graphics;

namespace MyGame
{
    public class Script : SyncScript
    {
		public Texture myTexture;

        public override void Start()
        {
            // Initialization of the script.
            Log.ActivateLog(LogMessageType.Debug);
            Log.Debug("Start loading MyTexture");

            myTexture = Content.Load<Texture>("MyTexture");
            if (myTexture == null)
            {
                Log.Error("MyTexture not loaded");
            }
            else
            {
                Log.Debug("MyTexture loaded successfully");
            }
        }
    }
}
```

## See also

* [Debug text](debug-text.md)
* [Profiling](profiling.md)
* [Scripts](../scripts/index.md)
