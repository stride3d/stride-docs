# Debugging
# Отладка

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

If your script isn't producing the expected result at runtime, you can debug it in an IDE such as Visual Studio.
Если ваш сценарий не дает ожидаемого результата во время выполнения, вы можете отладить его в интегрированной среде разработки, такой как Visual Studio.

>[!Note]
>[!Примечание]
>[There are lots of ways to debug code. This page suggests one method, using Visual Studio.]
>[Существует множество способов отладки кода.  На этой странице предлагается один метод с использованием Visual Studio.]

1. Open the script in Visual Studio.
1. Откройте скрипт в Visual Studio.

    >[!Tip]
>[!Подсказка]
    >To open your project in Visual Studio from Game Studio, in the Game Studio toolbar, click ![Open in IDE](media/launch-your-game-ide-icon.png) (**Open in IDE**).
>Чтобы открыть проект в Visual Studio из Game Studio, на панели инструментов Game Studio нажмите ![Открыть в IDE](media/launch-your-game-ide-icon.png) (**Открыть в IDE**).

2. Press **F9** to add a break point at the required places.
2. Нажмите **F9**, чтобы добавить точку останова в необходимых местах.

3. In Visual Studio, press **F5** or click **Start** in the toolbar to run the game in debug mode.
3. В Visual Studio нажмите **F5** или нажмите **Пуск** на панели инструментов, чтобы запустить игру в режиме отладки.

   ![Visual Studio Start button](media/visual-studio-start-button.png)
![Кнопка запуска Visual Studio](media/visual-studio-start-button.png)

   The game starts in a new window. In Visual Studio, on the script page, the first break point highlights and stops the execution.
Игра начинается в новом окне.  В Visual Studio на странице сценария первая точка останова выделяет и останавливает выполнение.
   
4. Verify the state of your variables.
4. Проверьте состояние ваших переменных.

5. Press **F10** (step over) if you want to execute the code line by line, or press **F5** to continue code execution.
5. Нажмите **F10** (переход), если вы хотите выполнить код построчно, или нажмите **F5**, чтобы продолжить выполнение кода.

> [!Note]
> [!Примечание]
> If Visual Studio doesn't stop at the break point, make sure you attached the script to an entity in the active scene.
> Если Visual Studio не останавливается в точке останова, убедитесь, что вы прикрепили сценарий к объекту в активной сцене.

For more information about debugging in Visual Studio, see the [MSDN documentation](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx).
Дополнительные сведения об отладке в Visual Studio см. в [документации MSDN] (https://msdn.microsoft.com/en-us/library/sc65sadd.aspx).

## See also
## Смотрите также

* [Debugging in Visual Studio (MSDN documentation)](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx)
* [Отладка в Visual Studio (документация MSDN)](https://msdn.microsoft.com/en-us/library/sc65sadd.aspx)
* [Types of script](types-of-script.md)
* [Типы скриптов](types-of-script.md)
* [Create a script](create-a-script.md)
* [Создать скрипт](create-a-script.md)
* [Use a script](use-a-script.md)
* [Использовать скрипт](use-a-script.md)
* [Public properties and fields](public-properties-and-fields.md)
* [Общие свойства и поля](public-properties-and-fields.md)
* [Scheduling and priorities](scheduling-and-priorities.md)
* [Расписание и приоритеты](scheduling-and-priorities.md)
* [Events](events.md)
* [События](events.md)
* [Preprocessor variables](preprocessor-variables.md)
* [Переменные препроцессора](preprocessor-variables.md)
