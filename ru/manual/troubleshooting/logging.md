# Logging
# Логирование

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can **log** information about your game while it runs using [Log](xref:Stride.Engine.ScriptComponent.Log).
Вы можете **логировать** информацию о своей игре во время ее работы, используя [Журнал](xref:Stride.Engine.ScriptComponent.Log).

Unlike [profiling](profiling.md), which retrieves information automatically, it's up to you to create your own log messages and define when they're triggered. For example, you can create a log message that triggers when a character performs a certain action. This is useful to investigate how your game is performing.
В отличие от [профилирования](profiling.md), который извлекает информацию автоматически, вы можете создавать свои собственные сообщения журнала и определять, когда они инициируются.  Например, вы можете создать сообщение журнала, которое срабатывает, когда персонаж выполняет определенное действие.  Это полезно для изучения производительности вашей игры.

>[!Note]
>[!Примечание]
>Logging is disabled when you build the game in release mode.
> Ведение журнала отключено, когда вы собираете игру в режиме выпуска.

When you use logging and run your game in debug mode, Stride opens a console in a second window to display logging information. The messages are color-coded by level. 
Когда вы используете ведение журнала и запускаете игру в режиме отладки, Stride открывает консоль во втором окне для отображения информации журнала.  Сообщения имеют цветовую кодировку по уровню.
The name of the module (such as the script containing the log message) is displayed in brackets. This is followed by the log level (eg **Warning**, **Error**, etc), then the log message.
Имя модуля (например, скрипт, содержащий сообщение журнала) отображается в скобках.  Далее следует уровень журнала (например, **Предупреждение**, **Ошибка** и т. д.), а затем сообщение журнала.

![Logging in console](media/logging-in-console.png)
![Вход в консоль](media/log-in-console.png)

The console displays log messages from all modules, not just your own scripts. For example, it also displays messages from the @'Stride.Core.Serialization.Contents.ContentManager'.
Консоль отображает сообщения журнала из всех модулей, а не только из ваших собственных скриптов.  Например, он также отображает сообщения от @'Stride.Core.Serialization.Contents.ContentManager'.

If you run your game from Visual Studio, log messages are shown in the Visual Studio **Output** window instead.
Если вы запускаете игру из Visual Studio, вместо этого сообщения журнала отображаются в окне **Вывод** Visual Studio.

![Log output window](media/log-output-in-visual-studio.png)
![Окно вывода журнала](media/log-output-in-visual-studio.png)

## Log levels
## Уровни журнала

There are six levels of log message, used for different levels of severity.
Существует шесть уровней сообщений журнала, используемых для разных уровней серьезности.

| Log level | Color | Description
|  Уровень журнала |  Цвет |  Описание
|-----------|-------|-----
|-----------|-------|-----
| Debug | Gray | Step-by-step information for advanced debugging purposes
|  Отладка |  серый |  Пошаговая информация для расширенных целей отладки
| Verbose | White | Detailed information
|  Многословный |  Белый |  Подробная информация
| Info | Green | General information
|  Информация |  Зеленый |  Главная Информация
| Warning | Yellow | Minor errors that might cause problems
|  Предупреждение |  Желтый |  Незначительные ошибки, которые могут вызвать проблемы
| Error | Red |Errors
|  Ошибка |  Красный |Ошибки
| Fatal | Red | Serious errors that crash the game
|  Фатальный |  Красный |  Серьезные ошибки, приводящие к краху игры

By default, the log displays messages for the level **Info** and higher. This means it doesn't display **Debug** or **Verbose** messages. To change this, see **Set the minimum level** below.
По умолчанию в журнале отображаются сообщения для уровня **Info** и выше.  Это означает, что он не отображает сообщения **Отладка** или **Подробные**.  Чтобы изменить это, см. раздел **Установка минимального уровня** ниже.

## Write a log message
## Написать сообщение журнала

In the script containing code you want to log, write:
В сценарии, содержащем код, который вы хотите зарегистрировать, напишите:

```cs
```CS
Log.Debug("My log message");
Log.Debug(
```
```

You can replace `Debug` with the level you want to use for the log message (see **Log levels** above).
Вы можете заменить «Отладка» уровнем, который вы хотите использовать для сообщения журнала (см. **Уровни журнала** выше).

You can combine this with `if` statements to log this message under certain conditions (see **Example script** below).
Вы можете комбинировать это с операторами `if`, чтобы регистрировать это сообщение при определенных условиях (см. **Пример сценария** ниже).

## Set the log level
## Установить уровень журнала

You can set a minimum log level to display. For example, if you only want to see messages as severe as **Warning** or higher, use:
Вы можете установить минимальный уровень журнала для отображения.  Например, если вы хотите видеть только серьезные сообщения типа **Предупреждение** или выше, используйте:

```cs
```CS
Log.ActivateLog(LogMessageType.Warning);
Журнал.АктивироватьЖурнал(ТипСообщенияЖурнала.Предупреждение);
```
```

>[!Note]
>[!Примечание]
>This isn't a global setting. The log level you set only applies to the script you set it in.
>Это не глобальная настройка.  Установленный вами уровень журнала применяется только к сценарию, в котором вы его установили.

### Change the log level at runtime
### Изменение уровня журнала во время выполнения

```cs
```CS
((Game)Game).ConsoleLogLevel = LogMessageType.myLogLevel;
((Игра)Игра).ConsoleLogLevel = LogMessageType.myLogLevel;
```
```

### Disable a specific log
### Отключить определенный журнал

```cs
```CS
GlobalLogger.GetLogger("RouterClient").ActivateLog(LogMessageType.Debug, LogMessageType.Fatal, false); 
GlobalLogger.GetLogger(
// Disables logging of the RouterClient module
// Отключаем логирование модуля RouterClient
```
```

### Disable logging in the console
### Отключить логирование в консоли

```cs
```CS
((Game)Game).ConsoleLogMode = ConsoleLogMode.None;
((Игра)Игра).ConsoleLogMode = ConsoleLogMode.None;
```
```

### Create a log file
### Создать файл журнала

To save the log output to a text file, add this code to the `Start` method:
Чтобы сохранить вывод журнала в текстовый файл, добавьте этот код в метод Start:

```cs
```CS
var fileWriter = new TextWriterLogListener(new FileStream("myLogFile.txt", FileMode.Create));
var fileWriter = новый TextWriterLogListener (новый FileStream (
GlobalLogger.GlobalMessageLogged += fileWriter;
GlobalLogger.GlobalMessageLogged += FileWriter;
```
```

This creates a file in the Debug folder of your project (eg *MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*).
Это создает файл в папке Debug вашего проекта (например, *MyGame\MyGame\Bin\Windows\Debug\myLogFile.txt*).

## Example script
## Пример скрипта

The following script checks that the texture `MyTexture` is loaded. When the texture loads, the log displays a debug message (`Log.Error`). If it doesn't load, the log records an error message (`Log.Debug`).
Следующий скрипт проверяет, загружена ли текстура MyTexture.  Когда текстура загружается, в журнале отображается сообщение об отладке (`Log.Error`).  Если он не загружается, журнал записывает сообщение об ошибке (`Log.Debug`).

```cs
```CS
using System.Linq;
с помощью System.Linq;
using System.Text;
используя System.Text;
using System.Threading.Tasks;
использование System.Threading.Tasks;
using Stride.Core.Diagnostics;
с помощью Stride.Core.Diagnostics;
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
using Stride.Input;
используя Stride.Input;
using Stride.Engine;
с помощью Stride.Engine;
using Stride.Graphics;
с помощью Stride.Graphics;

namespace MyGame
пространство имен MyGame
{
{
    public class Script : SyncScript
Сценарий открытого класса: SyncScript
    {
{
		public Texture myTexture;
публичная текстура myTexture;

        public override void Start()
публичное переопределение void Start()
        {
{
            // Initialization of the script.
// Инициализация скрипта.
            Log.ActivateLog(LogMessageType.Debug);
Log.ActivateLog(LogMessageType.Debug);
            Log.Debug("Start loading MyTexture");
Log.Debug(

            myTexture = Content.Load<Texture>("MyTexture");
myTexture = Content.Load<Texture>(
            if (myTexture == null)
если (myTexture == ноль)
            {
{
                Log.Error("MyTexture not loaded");
Log.Error(
            }
}
            else
еще
            {
{
                Log.Debug("MyTexture loaded successfully");
Log.Debug(
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

* [Debug text](debug-text.md)
* [Отладочный текст](debug-text.md)
* [Profiling](profiling.md)
* [Профилирование](profiling.md)
* [Scripts](../scripts/index.md)
* [Скрипты](../scripts/index.md)
