# Profiling
# Профилирование

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can **profile** your project to check its runtime performance and find problems. Use the Stride **Game Profiler** script or an external profiling tool such as the Performance Profiler in Visual Studio.
Вы можете **профилировать** свой проект, чтобы проверить его производительность во время выполнения и найти проблемы.  Используйте сценарий Stride **Game Profiler** или внешний инструмент профилирования, например Performance Profiler в Visual Studio.

![Profiling](media/profiling.png)
![Профилирование](media/profiling.png)

## Profile with the Stride **Game Profiler** script
## Профиль с помощью скрипта Stride **Game Profiler**

The **Game Profiler** script shows how performance costs change at runtime. This helps isolate bottlenecks and find their cause.
Сценарий **Game Profiler** показывает, как затраты на производительность меняются во время выполнения.  Это помогает изолировать узкие места и найти их причину.

![Profiler at runtime](media/profiling-profiler-at-runtime.jpg)
![Профилировщик во время выполнения](media/profiling-profiler-at-runtime.jpg)

To use the script:
Чтобы использовать скрипт:

1. In the **Asset View**, click ![Add new asset button](media/profiling-add-new-asset-button.png) and select **Scripts > Game Profiler**.
1. В **Просмотре активов** нажмите ![Добавить новую кнопку актива](media/profiling-add-new-asset-button.png) и выберите **Скрипты > Game Profiler**.

    ![Add Game Profiler script](media/profiling-add-game-profiler-script.png)
![Добавить скрипт Game Profiler](media/profiling-add-game-profiler-script.png)

2. The **New script dialog** opens. Leave the default information and click **Create script**.
2. Откроется **Диалоговое окно создания сценария**.  Оставьте информацию по умолчанию и нажмите **Создать скрипт**.

    ![New script](media/create-profiler-script.png)
![Новый скрипт](media/create-profiler-script.png)

    Game Studio adds the GameProfiler script to your project.
Game Studio добавляет в ваш проект скрипт GameProfiler.

3. Add the script to an entity. For instructions, see [Use scripts](../scripts/use-a-script.md).
3. Добавьте сценарий к объекту.  Инструкции см. в разделе [Использование скриптов](../scripts/use-a-script.md).

4. Select the entity that contains the **GameProfiler**.
4. Выберите сущность, содержащую **GameProfiler**.

5. In the **Property Grid** (on the right by default), enable the **Game Profiler** component.
5. В **Сетке свойств** (по умолчанию справа) включите компонент **Game Profiler**.

    ![Enable component](media/enable-profiler-component.png)
![Включить компонент](media/enable-profiler-component.png)

    >[!Tip]
>[!Подсказка]
    >You can also enable and disable the profiler at runtime with **Left Ctrl + Left Shift + P**.
> Вы также можете включать и отключать профилировщик во время выполнения с помощью **Left Ctrl + Left Shift + P**.

6. Run the game.
6. Запускаем игру.

    The Game Profiler shows profiling results as your game runs.
Game Profiler показывает результаты профилирования во время работы игры.

    >[!Note]
>[!Примечание]
    >Game Profiler disables VSync. This gives you the true profiling values, ignoring sync time.
>Game Profiler отключает VSync.  Это дает вам истинные значения профилирования, игнорируя время синхронизации.

### Game Profiler properties
### Свойства Game Profiler

To change the Game Profiler properties, select the **GameProfiler** entity and use the **Property Grid**.
Чтобы изменить свойства Game Profiler, выберите объект **GameProfiler** и используйте **Сетку свойств**.

![Profiler properties](media/profiler-properties.png)
![Свойства профайлера](media/profiler-properties.png)

| Property | Description
|  Недвижимость |  Описание
| -------- | --------
|  -------- |  --------
| Filter | The kind of information the profiler displays (FPS only, CPU, or GPU). At runtime, change with **F1**.
|  Фильтр |  Тип информации, которую отображает профилировщик (только FPS, CPU или GPU).  Во время выполнения измените с помощью **F1**.
| Sort by | Sort the result pages by: <br><p>**Name**: the profile key (the thing being profiled) <br><p>**Time**: the key that uses the most time <br><p>At runtime, toggle with **F2**.
|  Сортировать по |  Отсортируйте страницы результатов по: <br><p>**Название**: ключ профиля (то, что профилируется) <br><p>**Время**: ключ, который использует больше всего времени <br><  p>Во время выполнения переключайтесь с помощью **F2**.
| Refresh interval (ms) | How frequently the profiler gets and displays new results. At runtime, control with **- / +**.
|  Интервал обновления (мс) |  Как часто профилировщик получает и отображает новые результаты.  Во время выполнения управляйте с помощью **-/+**.
| Display page | The results page displayed. At runtime, jump to a page with the **number keys**, or move forward and backwards with **F3** and **F4**.
|  Показать страницу |  Отобразится страница результатов.  Во время выполнения переходите на страницу с помощью **цифровых клавиш** или перемещайтесь вперед и назад с помощью **F3** и **F4**.
| Text color | The color of the profiler text
|  Цвет текста |  Цвет текста профайлера
| Priority | See [Scheduling and priorities](../scripts/scheduling-and-priorities.md)
|  Приоритет |  См. [Расписание и приоритеты](../scripts/scheduling-and-priorities.md)

### Understanding the Game Profiler results
### Понимание результатов Game Profiler

The top row displays information about basic performance.
В верхней строке отображается информация об основных характеристиках.

![FPS profiling](media/fps-profiling.png)
![Профилирование FPS](media/fps-profiling.png)

* `Displaying`: the kind of information the profiler displays (FPS only, CPU, or GPU)
* «Отображение»: тип информации, которую отображает профилировщик (только FPS, CPU или GPU)
* `Frame`: the current frame
* `Кадр`: текущий кадр
* `Update`: the average time (ms) taken to update the game since the profiler last refreshed
* «Обновление»: среднее время (мс), необходимое для обновления игры с момента последнего обновления профилировщика.
* `Draw`: the average time (ms) taken to render the frame since the profiler last refreshed
* `Draw`: среднее время (мс), необходимое для рендеринга кадра с момента последнего обновления профилировщика.
* `FPS`: the average number of frames rendered per second
* `FPS`: среднее количество кадров, отображаемых в секунду.

If you select **CPU** as the display mode, the profiler displays:
Если вы выберете **ЦП** в качестве режима отображения, профилировщик отобразит:

![CPU profiling](media/fps-cpu.png)
![Профилирование процессора](media/fps-cpu.png)

* `Total`: the amount of memory currently used
* «Всего»: объем используемой в данный момент памяти.
* `Peak`: the peak memory use since the game started
* `Пик`: пиковое использование памяти с момента запуска игры.
* `Allocations`: the amount of memory allocated or freed since the profiler last refreshed
* «Выделения»: объем памяти, выделенной или освобожденной с момента последнего обновления профилировщика.
* `Gen0`, `Gen1`, `Gen1`: the number of garbage collections per each generation of object (`Gen0` is the most recent generation)
* `Gen0`, `Gen1`, `Gen1`: количество сборок мусора для каждого поколения объекта («Gen0» — самое последнее поколение)

If you select **GPU** as the display mode, the profiler displays:
Если вы выберете **GPU** в качестве режима отображения, профилировщик отобразит:

![GPU profiling](media/fps-gpu.png)
![Профилирование GPU](media/fps-gpu.png)

* `Device`: the graphics device (manufacturer's description)
* `Device`: графическое устройство (описание производителя)
* `Platform`: the currently used backend (eg DirectX, OpenGL, Vulkan, etc)
* «Платформа»: используемый в настоящее время бэкенд (например, DirectX, OpenGL, Vulkan и т. д.)
* `Profile`: the feature level for your game, set in **Game Settings > Rendering** (see [Game settings](../game-studio/game-settings.md))
* `Профиль`: уровень возможностей вашей игры, установленный в **Настройки игры > Рендеринг** (см. [Настройки игры](../game-studio/game-settings.md))
* `Resolution`: the game resolution
* «Разрешение»: разрешение игры.
* `Drawn triangles`: the number of triangles drawn per frame
* «Нарисованные треугольники»: количество треугольников, нарисованных за кадр.
* `Draw calls`: the number of draw calls per frame
* `Вызовы отрисовки`: количество вызовов отрисовки на кадр
* `Buffer memory`: the amount of memory allocated to buffers 
* `Буферная память`: объем памяти, выделенный для буферов
* `Texture memory`: the amount of memory allocated to textures
* `Память текстур`: объем памяти, выделенный для текстур

In the **GPU** and **CPU** modes, the profiler displays information about the parts of the code being profiled, including active scripts.
В режимах **GPU** и **CPU** профилировщик отображает информацию о профилируемых частях кода, включая активные скрипты.

![Profiler columns](media/profiler-columns.png)
![Столбцы профайлера](media/profiler-columns.png)

>[!Note]
>[!Примечание]
>Each value describes the events per frame since the last profiler refresh.
>Каждое значение описывает количество событий на кадр с момента последнего обновления профилировщика.

Column  | Description
Колонка |  Описание
--------|--------
--------|--------
`TOTAL` | The total time taken to execute the code in one frame
`ИТОГО` |  Общее время выполнения кода в одном кадре
`AVG/CALL` | Average time taken to execute a single call of the code
`СРЕДНИЙ/ЗВОНОК` |  Среднее время выполнения одного вызова кода
`MIN/CALL` | The shortest amount of time taken to execute a single call of the code
`МИН/ЗВОНОК` |  Кратчайшее время, затрачиваемое на выполнение одного вызова кода
`MAX/CALL` | The longest amount of time taken to execute a single call of the code
`МАКС/ЗВОНОК` |  Наибольшее количество времени, затрачиваемое на выполнение одного вызова кода
`CALLS` | The number of times the code was executed in one frame
`ЗВОНКИ` |  Сколько раз код выполнялся в одном кадре
`MARKS` | The number of times per frame marked code is executed. This column is only displayed if marked code is executed
`МЕТКИ` |  Количество раз, которое за кадр выполняется отмеченный код.  Этот столбец отображается только в том случае, если отмеченный код выполняется
`PROFILE KEY / EXTRA INFO` | The part of the code (such as a function or script) being profiled. This column also displays additional information, such as the number of entities affected.
`ПРОФИЛЬ КЛЮЧ/ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ` |  Профилируемая часть кода (такая как функция или скрипт).  В этом столбце также отображается дополнительная информация, например, количество затронутых объектов.

### Game Profiler runtime controls
### Элементы управления средой выполнения Game Profiler

You can change the Game Profiler settings at runtime using keyboard shortcuts.
Вы можете изменить настройки Game Profiler во время выполнения с помощью сочетаний клавиш.

Action  | Control
Действие |  Контроль
--------|--------
--------|--------
Left Ctrl + Left Shift + P  | Enable/disable the profiler
Левый Ctrl + Левый Shift + P |  Включить/отключить профилировщик
F1 | Toggle between CPU, GPU, and FPS-only results
F1 |  Переключение между результатами ЦП, ГП и только FPS
F2 | Toggle between sorting by profile key and time
F2 |  Переключение между сортировкой по ключу профиля и времени
- / +  | Slow down / speed up the refresh time
- / + |  Замедлить/ускорить время обновления
F3 / F4 | Page back / page forward
Ф3/Ф4 |  Страница назад/страница вперед
Number keys | Jump to a page
Цифровые клавиши |  Перейти на страницу

### Use the Game Profiler in code
### Используйте Game Profiler в коде

* Enable profiling:
* Включить профилирование:

    ```cs
```CS
    GameProfiler.EnableProfiling();
GameProfiler.EnableProfiling();
    ```
```

* Enable profiling only for the profiler keys you specify:
* Включите профилирование только для указанных вами ключей профилировщика:

    ```cs
```CS
    GameProfiler.EnableProfiling(true, {mykey1,mykey2});
GameProfiler.EnableProfiling(true, {mykey1,mykey2});
    ```
```

* Enable the profiling except for the profiler keys you specify:
* Включите профилирование, за исключением указанных вами ключей профилировщика:

    ```cs
```CS
    GameProfiler.EnableProfiling(false, {mykey1,mykey2});
GameProfiler.EnableProfiling(false, {mykey1,mykey2});
    ```
```

* To access the prolifing key of a script, use [ProfilingKey](xref:Stride.Engine.ScriptComponent.ProfilingKey).
* Чтобы получить доступ к ключу распространения скрипта, используйте [ProfilingKey](xref:Stride.Engine.ScriptComponent.ProfilingKey).

## Use external profiling tools
## Используйте внешние инструменты профилирования

Instead of using the Stride Game Profiler, you can use external profiling tools to profile your project.
Вместо использования Stride Game Profiler вы можете использовать внешние инструменты профилирования для профилирования вашего проекта.

| Profiler | Type | Platforms
|  Профайлер |  Тип |  Платформы
| ---- | ---- | -----
|  ---- |  ---- |  -----
| [Visual Studio profiler](https://msdn.microsoft.com/en-us/library/mt210448.aspx) | Visual Studio feature | Desktop and mobile 
|  [Профилировщик Visual Studio] (https://msdn.microsoft.com/en-us/library/mt210448.aspx) |  Функция Visual Studio |  Настольный и мобильный
| [Xamarin Profiler](https://www.xamarin.com/profiler) | Standalone tool distributed with Xamarin Studio | Mobile 
|  [Xamarin Profiler](https://www.xamarin.com/profiler) |  Автономный инструмент, распространяемый с Xamarin Studio |  Мобильный
| [RenderDoc](https://renderdoc.org/builds) | Standalone | Desktop and mobile
|  [RenderDoc](https://renderdoc.org/builds) |  Автономный |  Настольный и мобильный

### Use the Visual Studio profiler
### Используйте профилировщик Visual Studio

Visual Studio has powerful in-built profiling tools that can identify common performance issues.
Visual Studio имеет мощные встроенные инструменты профилирования, которые могут выявлять распространенные проблемы с производительностью.

1. In Visual Studio, open your project solution (`.sln`) file.
1. В Visual Studio откройте файл решения проекта (`.sln`).

2. To open the profiler, press **Alt + F2**, or in the task bar click **Analyze > Performance Profiler**.
2. Чтобы открыть профилировщик, нажмите **Alt + F2** или на панели задач щелкните **Анализ > Профилировщик производительности**.

    ![Launch Visual Studio profiler](media/profiling-profiling-in-visual-studio-start-profiler.png)
![Запустить профилировщик Visual Studio](media/profiling-profiling-in-visual-studio-start-profiler.png)

3. In the **Profiler** window, select the profiling tools you want to run.
3. В окне **Profiler** выберите инструменты профилирования, которые вы хотите запустить.

    ![Launch Visual Studio profiler](media/profiling-profiling-in-visual-studio-gpu-cpu-profiling-launch.png)
![Запустить профилировщик Visual Studio](media/profiling-profiling-in-visual-studio-gpu-cpu-profiling-launch.png)

    You can run multiple profiling tools at once.
Вы можете запускать несколько инструментов профилирования одновременно.

4. To launch the profiler, in the Performance Profiler tab, at the bottom, click **Start**.
4. Чтобы запустить профилировщик, на вкладке «Профилировщик производительности» внизу нажмите **Пуск**.
   
   ![Profiler Start button](media/profiler-start-button.png)
![Кнопка запуска профайлера](media/profiler-start-button.png)
    
    Visual Studio runs your application and begins profiling.
Visual Studio запускает ваше приложение и начинает профилирование.

For more information about the Visual Studio profiler, see the [MSDN documentation](https://msdn.microsoft.com/en-us/library/mt210448.aspx).
Дополнительные сведения о профилировщике Visual Studio см. в [документации MSDN] (https://msdn.microsoft.com/en-us/library/mt210448.aspx).

### Use RenderDoc
### Использовать RenderDoc

RenderDoc is a free MIT licensed stand-alone graphics debugger that allows quick and easy single-frame capture and detailed introspection of any application using Vulkan, D3D11, OpenGL & OpenGL ES or D3D12 across Windows 7 - 10, Linux, Android, or Nintendo Switch™.
RenderDoc — это бесплатный автономный графический отладчик с лицензией MIT, который позволяет быстро и легко захватывать отдельные кадры и детально анализировать любое приложение, использующее Vulkan, D3D11, OpenGL и OpenGL ES или D3D12 в Windows 7–10, Linux, Android или Nintendo Switch.  ™.

1. Download [RenderDoc](https://renderdoc.org/builds).
1. Загрузите [RenderDoc] (https://renderdoc.org/builds).

2. Optional: This step is optional and only necessary if you want to have render pass markers with name following the Graphics Compositor:
2. Необязательно: этот шаг является необязательным и необходим только в том случае, если вы хотите иметь маркеры прохода рендеринга с именем, следующим за графическим компоновщиком:

   2.1. In your executable project (Windows), locate `game.Run();` and insert the following code just before:
2.1.  В вашем исполняемом проекте (Windows) найдите `game.Run();` и вставьте следующий код прямо перед ним:

   ```cs
```CS
   game.GraphicsDeviceManager.DeviceCreationFlags |= DeviceCreationFlags.Debug;
game.GraphicsDeviceManager.DeviceCreationFlags |= DeviceCreationFlags.Debug;
   ```
```
   >[!Note]
>[!Примечание]
   >If you have a `SharpDXException` of type `DXGI_ERROR_SDK_COMPONENT_MISSING`, please follow the instructions from https://docs.microsoft.com/en-us/windows/uwp/gaming/use-the-directx-runtime-and-visual-studio-graphics-diagnostic-features
>Если у вас есть исключение SharpDXException типа DXGI_ERROR_SDK_COMPONENT_MISSING, следуйте инструкциям на странице https://docs.microsoft.com/en-us/windows/uwp/gaming/use-the-directx-runtime-and-visual.  -studio-graphics-diagnostic-features

   2.2. Also, make sure profiler is enabled by calling this code from any of your game script:
2.2.  Также убедитесь, что профилировщик включен, вызвав этот код из любого игрового скрипта:

    ```cs
```CS
    GameProfiler.EnableProfiling();
GameProfiler.EnableProfiling();
    ```
```

3. Optional: Add a package reference to `Stride.Graphics.RenderDocPlugin`.
3. Необязательно: добавьте ссылку на пакет в Stride.Graphics.RenderDocPlugin.

   You can then use the @'Stride.Graphics.RenderDocManager' class to trigger captures:
Затем вы можете использовать класс @'Stride.Graphics.RenderDocManager' для запуска захвата:
   
   ```cs
```CS
   var renderDocManager = new RenderDocManager();
var renderDocManager = новый RenderDocManager();
   renderDocManager.StartCapture(GraphicsDevice, IntPtr.Zero);
renderDocManager.StartCapture(GraphicsDevice, IntPtr.Zero);
   // Some rendering code...
// Какой-то код рендеринга...
   renderDocManager.EndFrameCapture(GraphicsDevice, IntPtr.Zero);
renderDocManager.EndFrameCapture(GraphicsDevice, IntPtr.Zero);
   ```
```

## Common bottlenecks
## Общие узкие места

As CPU and GPU process different types of data, it's usually easy to identify which part is causing a bottleneck.
Поскольку ЦП и ГП обрабатывают разные типы данных, обычно легко определить, какая часть является узким местом.

Most GPU problems arise when the application uses expensive rendering techniques, such as post effects, lighting, shadows, and tessellation. To identify the problem, disable rendering features.
Большинство проблем с графическим процессором возникает, когда приложение использует дорогостоящие методы рендеринга, такие как пост-эффекты, освещение, тени и тесселяция.  Чтобы выявить проблему, отключите функции рендеринга.

If instead there seems to be a CPU bottleneck, reduce the complexity of the scene.
Если вместо этого кажется, что есть узкое место в процессоре, уменьшите сложность сцены.

For graphics:
Для графики:

* decrease the resolution of your game
* уменьшить разрешение вашей игры
* reduce the quality of your [post effects](../graphics/post-effects/index.md)
* уменьшите качество ваших [постэффектов](../graphics/post-effects/index.md)
* reduce the number of lights and size of [shadow maps](../graphics/lights-and-shadows/shadows.md)
* уменьшить количество источников света и размер [карт теней](../graphics/lights-and-shadows/shadows.md)
* reduce shadow map sizes
* уменьшить размеры карты теней
* use culling techniques to reduce the number of objects and vertices rendered
* используйте методы отбраковки, чтобы уменьшить количество визуализируемых объектов и вершин

For textures:
Для текстур:

* use [compressed textures](../graphics/textures/compression.md) on slower devices
* используйте [сжатые текстуры](../graphics/textures/compression.md) на более медленных устройствах
* use sprite sheets, not individual images
* используйте листы спрайтов, а не отдельные изображения
* use texture atlases, not separate textures
* используйте атласы текстур, а не отдельные текстуры

## See also
## Смотрите также

* [Profiling](profiling.md)
* [Профилирование](profiling.md)
