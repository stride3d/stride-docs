# Debug text
# Отладочный текст

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can print debug text at runtime with [DebugText](xref:Stride.Engine.ScriptComponent.DebugText). For example, you can use this to display a message when a problem occurs.
Вы можете распечатать отладочный текст во время выполнения с помощью [DebugText](xref:Stride.Engine.ScriptComponent.DebugText).  Например, вы можете использовать это для отображения сообщения при возникновении проблемы.

>[!Note]
>[!Примечание]
>Debug text is automatically disabled when you build the game in release mode.
> Текст отладки автоматически отключается при сборке игры в режиме выпуска.

In the `Update` method of your script, add:
В методе `Update` вашего скрипта добавьте:

```cs
```CS
DebugText.Print("My debug text",new Int2(x: 50, y: 50));
DebugText.Print(
```
```

Where `x` and `y` are the pixel coordinates to display the text at.
Где `x` и `y` — координаты пикселей для отображения текста.

The debug message is displayed when you run the game.
Отладочное сообщение отображается при запуске игры.

![Debug text](media/my-debug-text.jpg)
![Отладочный текст](media/my-debug-text.jpg)

To hide debug text, use:
Чтобы скрыть отладочный текст, используйте:

```cs
```CS
DebugText.Visible = false;
DebugText.Visible = ложь;
```
```

## Example script
## Пример скрипта

The following script checks that the texture `MyTexture` is loaded. If it isn't loaded, the game displays the debug text "MyTexture not loaded".
Следующий скрипт проверяет, загружена ли текстура MyTexture.  Если он не загружен, игра отображает отладочный текст «Моя текстура не загружена».

```cs
```CS
using Stride.Core.Mathematics;
с помощью Stride.Core.Mathematics;
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
            myTexture = Content.Load<Texture>("MyTexture");
myTexture = Content.Load<Texture>(
        }
}

        public override void Update()
публичное переопределение void Update()
        {
{
			if (myTexture == null)
если (myTexture == ноль)
                DebugText.Print("MyTexture not loaded", new Int2(x: 50, y: 50));
DebugText.Print(
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

* [Logging](logging.md)
* [Ведение журнала](logging.md)
* [Scripts](../scripts/index.md)
* [Скрипты](../scripts/index.md)
