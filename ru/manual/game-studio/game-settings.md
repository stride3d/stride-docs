# Game settings
# Настройки игры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

You can configure the global settings of your game in the **Game Settings** asset. By default, the Game Settings asset is stored in your project's **Assets** folder.
Вы можете настроить глобальные параметры своей игры в ресурсе **Настройки игры**.  По умолчанию ресурс Game Settings хранится в папке **Assets** вашего проекта.

## Edit game settings
## Изменить настройки игры

1. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets** folder.
1. В **Обозревателе решений** (нижняя левая панель по умолчанию) выберите папку **Активы**.

    ![Select Assets folder asset](media/select-asset-folder.png)
![Выберите ресурс папки Assets](media/select-asset-folder.png)

2. In the **Asset View** (the bottom pane by default), select the **GameSettings** asset.
2. В **Просмотре ресурсов** (нижняя панель по умолчанию) выберите ресурс **GameSettings**.

    ![Select Game Settings asset](media/select-game-settings-asset.png)
![Выберите актив настроек игры](media/select-game-settings-asset.png)

3. In the **Property Grid** (the right-hand pane by default), edit the Game Settings properties.
3. В **Сетке свойств** (правая панель по умолчанию) отредактируйте свойства настроек игры.

   ![Game settings](media/game-settings.png)
![Настройки игры](media/game-settings.png)

## Default scene
## Сцена по умолчанию

You can have multiple scenes in your project. The **default scene** is the scene Stride loads at runtime.
В вашем проекте может быть несколько сцен.  **Сцена по умолчанию** — это сцена, которую Stride загружает во время выполнения.

To set the default scene:
Чтобы установить сцену по умолчанию:

1. In the **GameSettings** properties, next to **Default Scene**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
1. В свойствах **GameSettings** рядом с **Сцена по умолчанию** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс*  *).
    
    ![Set default scene](media/game-settings-default-scene.png)
![Установить сцену по умолчанию](media/game-settings-default-scene.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

2. Select the default scene and click **OK**.
2. Выберите сцену по умолчанию и нажмите **ОК**.

For more information about scenes, see [Manage scenes](../game-studio/manage-scenes.md).
Дополнительные сведения о сценах см. в разделе [Управление сценами](../game-studio/manage-scenes.md).

## Graphics compositor
## Композитор графики

You can have multiple graphics compositors in your project, but you can only use one at a time.
У вас может быть несколько графических компоновщиков в вашем проекте, но вы можете использовать только один за раз.

To set the graphics compositor:
Чтобы установить графический компоновщик:

1. In the **GameSettings** properties, next to **Graphics compositor**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
1. В свойствах **GameSettings** рядом с **Композитор графики** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс*  *).
    
    ![Set default scene](media/game-settings-graphics-compositor.png)
![Установить сцену по умолчанию](media/game-settings-graphics-compositor.png)

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

2. Select the graphics compositor and click **OK**.
2. Выберите компоновщик графики и нажмите **ОК**.

For more information, see [Graphics compositor](../graphics/graphics-compositor/index.md).
Для получения дополнительной информации см. [Композитор графики](../graphics/graphics-compositor/index.md).

## Audio
## Аудио

![Audio settings](media/audio-settings.png)
![Настройки звука](media/audio-settings.png)

| Property     | Description  
|  Недвижимость |  Описание
|--------------|--------------
|--------------|---------------
| HRTF support | Enable HRTF audio. Note that only audio emitters with HRTF enabled will produce HRTF audio. For more details, see [HRTF](../audio/hrtf.md).
|  Поддержка HRTF |  Включите звук HRTF.  Обратите внимание, что только аудио излучатели с включенным HRTF будут воспроизводить звук HRTF.  Подробнее см. [HRTF](../audio/hrtf.md).

For more details about audio, see [Audio](../audio/index.md).
Дополнительные сведения об аудио см. в разделе [Аудио](../audio/index.md).

## Editor
## Редактор

The **editor** settings control how Game Studio displays entities in the Scene Editor. These settings have no effect on your game.
Настройки **редактора** управляют тем, как Game Studio отображает объекты в редакторе сцен.  Эти настройки не влияют на вашу игру.

>[!Note]
>[!Примечание]
>How Game Studio displays entities is also affected by the **Color space** setting under **Rendering**.
>То, как Game Studio отображает объекты, также зависит от параметра **Цветовое пространство** в разделе **Визуализация**.

![Editor settings](media/editor-settings.png)
![Настройки редактора](media/editor-settings.png)

| Property            | Description    
|  Недвижимость |  Описание
|---------------------|--------------
|---------------------|---------------
| Rendering mode      | How Game Studio renders thumbnails and Asset Previews
|  Режим рендеринга |  Как Game Studio визуализирует миниатюры и превью активов
| Animation framerate | The framerate of animations shown in Game Studio. This doesn't affect animation data. 
|  Частота кадров анимации |  Частота кадров анимации, отображаемой в Game Studio.  Это не влияет на данные анимации.

## Navigation
## Навигация

![Navigation settings](../navigation/media/navigation-settings.png)
![Настройки навигации](../navigation/media/navigation-settings.png)

### Dynamic navigation mesh properties
### Свойства динамической сетки навигации

| Property                  | Description                                                    
|  Недвижимость |  Описание
|---------------------------|--------------
|---------------------------|---------------
| Enabled                   | Enable dynamic navigation on navigation components that have no assigned navigation mesh
|  Включено |  Включить динамическую навигацию для компонентов навигации, которым не назначена навигационная сетка
| Included collision groups | Set which collision groups dynamically-generated navigation meshes use. By default, meshes use all collision groups
|  Включенные группы коллизий |  Установите, какие группы столкновений используют динамически генерируемые навигационные сетки.  По умолчанию сетки используют все группы коллизий.
| Build settings            | Advanced settings for dynamically-generated navigation meshes
|  Настройки сборки |  Расширенные настройки для динамически генерируемых навигационных сеток

For more details, see [Dynamic navigation](../navigation/dynamic-navigation.md).
Подробнее см. [Динамическая навигация](../navigation/dynamic-navigation.md).

### Navigation group properties
### Свойства группы навигации

| Property             | Description
|  Недвижимость |  Описание
|----------------------|------------
|----------------------|------------
| Item                 | The name of the group.
|  Товар |  Название группы.
| Height               | The height of the entities in this group. Entities can't enter areas with ceilings lower than this value.
|  Высота |  Высота объектов в этой группе.  Сущности не могут входить в области с потолками ниже этого значения.
| Maximum climb height | The maximum height that entities in this group can climb.
|  Максимальная высота подъема |  Максимальная высота, на которую могут подняться сущности в этой группе.
| Maximum slope        | The maximum incline (in degrees) that entities in this group can climb. Entities can't go up or down slopes higher than this value.
|  Максимальный уклон |  Максимальный уклон (в градусах), на который могут подняться объекты в этой группе.  Сущности не могут подниматься или спускаться по склонам выше этого значения.
| Radius               | The larger this value, the larger the area of the navigation mesh entities use. Entities can't pass through gaps of less than twice the radius.
|  Радиус |  Чем больше это значение, тем большую площадь используют объекты навигационной сетки.  Сущности не могут проходить через промежутки менее чем в два раза больше радиуса.

For more details, see [Navigation](../navigation/index.md).
Подробнее см. [Навигация](../navigation/index.md).

## Physics
## Физика

![Physics settings](media/physics-settings.png)
![Настройки физики](media/physics-settings.png)

| Property        | Description         
|  Недвижимость |  Описание
|-----------------|----------------
|-----------------|----------------
| Flags           | **CollisionsOnly** disables [physics](../physics/index.md) except for collisions. For example, if this is enabled, objects aren't moved by gravity, but will still collide if you move them manually. **ContinuousCollisionDetection** prevents fast-moving entities erroneously moving through other entities. Note: other flags listed here currently aren't enabled in Stride.
|  Флаги |  **CollisionsOnly** отключает [физику](../physics/index.md), за исключением столкновений.  Например, если эта функция включена, объекты не перемещаются под действием силы тяжести, но все равно будут сталкиваться, если вы перемещаете их вручную.  **ContinuousCollisionDetection** предотвращает ошибочное перемещение быстро движущихся объектов через другие объекты.  Примечание: другие перечисленные здесь флаги в настоящее время не включены в Stride.
| Max sub steps   | The maximum number of simulations the physics engine can run in a frame to compensate for slowdown.
|  Максимальное количество дополнительных шагов |  Максимальное количество симуляций, которые физический движок может запустить в кадре, чтобы компенсировать замедление.
| Fixed time step | The length in seconds of a physics simulation frame. The default is 0.016667 (one sixtieth of a second). 
|  Фиксированный временной шаг |  Длина кадра моделирования физики в секундах.  Значение по умолчанию — 0,016667 (одна шестидесятая секунды).

## Rendering
## Рендеринг

![Rendering settings](media/rendering-settings.png)
![Настройки рендеринга](media/rendering-settings.png)

| Property                    | Description  
|  Недвижимость |  Описание
|-----------------------------|----------------
|------------------------------|----------------
| Default back buffer width   | This might be overridden depending on the ratio and/or resolution of the device. On Windows, this is the window size. On Android/iOS, this is the off-screen target resolution.
|  Ширина заднего буфера по умолчанию |  Это может быть переопределено в зависимости от соотношения и/или разрешения устройства.  В Windows это размер окна.  На Android/iOS это целевое разрешение вне экрана.
| Default back buffer height  | This might be overridden depending on the ratio and/or resolution of the device. On Windows, this is the window size. On Android/iOS, this is the off-screen target resolution.
|  Высота заднего буфера по умолчанию |  Это может быть переопределено в зависимости от соотношения и/или разрешения устройства.  В Windows это размер окна.  На Android/iOS это целевое разрешение вне экрана.
| Adapt back buffer to screen | Adapt the ratio of the back buffer to fit the screen ratio
|  Адаптировать задний буфер к экрану |  Адаптируйте соотношение заднего буфера к соотношению экрана
| Default graphics profile    | The graphics feature level required by the project
|  Графический профиль по умолчанию |  Уровень графических функций, требуемый проектом
| Color space                 | The color space (gamma or linear) used for rendering. This affects the game at runtime and how elements are displayed in Game Studio.
|  Цветовое пространство |  Цветовое пространство (гамма или линейное), используемое для рендеринга.  Это влияет на игру во время выполнения и на то, как элементы отображаются в Game Studio.
| Display orientation         | The display orientation of the game (default, portrait, left landscape, or right landscape).
|  Ориентация дисплея |  Ориентация экрана в игре (по умолчанию, книжная, левая альбомная или правая альбомная).
| Target graphics platform    | The target platform Stride builds the project for. If you set this to **Default**, Stride chooses the most appropriate platform. For more information, see [Set the graphics platform](../platforms/set-the-graphics-platform.md).
|  Целевая графическая платформа |  Целевая платформа, для которой Stride создает проект.  Если вы установите значение **По умолчанию**, Stride выберет наиболее подходящую платформу.  Для получения дополнительной информации см. [Установка графической платформы](../platforms/set-the-graphics-platform.md).

> [!Tip]
> [!Подсказка]
> To check which default platform your project uses, add a break point to your code (eg in a script), run the project, and check the value of the [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) variable.
> Чтобы проверить, какую платформу по умолчанию использует ваш проект, добавьте точку останова в свой код (например, в скрипт), запустите проект и проверьте значение [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform)  переменная.

## Streaming
## Потоковое

![Streaming settings](media/streaming-settings.png)
![Настройки потоковой передачи](media/streaming-settings.png)

| Property             | Description
|  Недвижимость |  Описание
|----------------------|------------
|----------------------|------------
| Streaming            | Enable streaming
|  Потоковое |  Включить потоковую передачу
| Update interval | How frequently Stride updates the streaming. Smaller intervals mean the streaming system reacts faster, but use more CPU and cause more memory fluctuations.
|  Интервал обновления |  Как часто Stride обновляет потоковую передачу.  Меньшие интервалы означают, что система потоковой передачи реагирует быстрее, но использует больше ресурсов ЦП и вызывает больше колебаний памяти.
| Max resources per update | The maximum number of textures loaded or unloaded per streaming update. Higher numbers reduce pop-in but might slow down the framerate.
|  Макс. ресурсы на обновление |  Максимальное количество загружаемых или выгружаемых текстур за одно потоковое обновление.  Более высокие значения уменьшают всплывающие окна, но могут снизить частоту кадров.
| Resource timeout (ms)| How long resources stay loaded after they're no longer used (when the **memory budget** is exceeded)
|  Время ожидания ресурса (мс)|  Как долго ресурсы остаются загруженными после того, как они больше не используются (при превышении **бюджета памяти**)
| Memory budget (in MB) | When the memory used by streaming exceeds this budget, Stride unloads unused textures. You can increase this to keep more textures loaded when you have memory to spare, and vice versa.
|  Бюджет памяти (в МБ) |  Когда память, используемая потоковой передачей, превышает этот бюджет, Stride выгружает неиспользуемые текстуры.  Вы можете увеличить это значение, чтобы загрузить больше текстур, когда у вас есть свободная память, и наоборот.

>[!Note]
>[!Примечание]
>Currently, only textures can be streamed.
>В настоящее время можно передавать только текстуры.

For more details, see [Streaming](../graphics/textures/streaming.md).
Подробнее см. [Потоковая передача](../graphics/textures/streaming.md).

## Textures
## Текстуры

![Texture settings](media/texture-settings.png)
![Настройки текстуры](media/texture-settings.png)

| Property        | Description  
|  Недвижимость |  Описание
|-----------------|--------------
|-----------------|---------------
| Texture quality | The texture quality when encoding textures. **Fast** uses the least CPU, but has the lowest quality. Higher settings might result in slower builds, depending on the target platform. 
|  Качество текстур |  Качество текстур при кодировании текстур.  **Быстрый** использует меньше ресурсов ЦП, но имеет самое низкое качество.  Более высокие значения могут привести к более медленной сборке, в зависимости от целевой платформы.

## Overrides
## Переопределяет

You can override settings for particular platforms, graphics APIs, and so on. For example, you can set different texture qualities for different platforms.
Вы можете переопределить настройки для определенных платформ, графических API и т. д.  Например, вы можете установить разное качество текстур для разных платформ.

1. With the **GameSettings** asset selected, in the **Property Grid**, under **Overrides**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
1. Выбрав ресурс **GameSettings**, в **Сетке свойств** в разделе **Переопределения** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-  icon.png) (**Добавить**).

    ![Select graphics platform](../platforms/media/add-override.png)
![Выберите графическую платформу](../platforms/media/add-override.png)

    Game Studio adds an override.
Game Studio добавляет переопределение.

2. In the new override, next to **Platforms**, select the platforms you want the override to apply to. You can select as many as you need.
2. В новом переопределении рядом с **Платформы** выберите платформы, к которым вы хотите применить переопределение.  Вы можете выбрать столько, сколько вам нужно.

    ![Select graphics platform override](../platforms/media/select-override-platform.png)
![Выбрать переопределение графической платформы](../platforms/media/select-override-platform.png)

3. **Optional**: If you want this override to apply only to a specific GPU platform, choose it from the **Specific filter** drop-down list.
3. **Необязательно**: если вы хотите, чтобы это переопределение применялось только к определенной платформе графического процессора, выберите его в раскрывающемся списке **Конкретный фильтр**.

    ![Specific filter](media/specific-filter.png)
![Конкретный фильтр](media/specific-filter.png)

    You can add GPU platforms to this list under **Platform filters** (see **Add a platform filter** below).
Вы можете добавить платформы GPU в этот список в разделе **Фильтры платформ** (см. **Добавление фильтра платформ** ниже).

4. In the **Configuration** drop-down menu, select the kind of setting you want to override (**Editor**, **Texture**, **Rendering** or **Physics**).
4. В раскрывающемся меню **Конфигурация** выберите тип настройки, которую вы хотите переопределить (**Редактор**, **Текстура**, **Визуализация** или **Физика**).

    ![Select graphics platform override](../platforms/media/select-override-configuration.png)
![Выбрать переопределение графической платформы](../platforms/media/select-override-configuration.png)

5. Set the options you want to override.
5. Установите параметры, которые вы хотите переопределить.

### Add a platform filter
### Добавить фильтр платформы

You can choose items in the **Platform Filters** list as a specific platform filter when you set an override (see above).
Вы можете выбрать элементы в списке **Фильтры платформы** в качестве фильтра конкретной платформы при установке переопределения (см. выше).

![Specific filter](media/specific-filter.png)
![Конкретный фильтр](media/specific-filter.png)

1. With the **GameSettings** asset selected, in the **Property Grid**, expand **Platform Filters**.
1. Выбрав объект **GameSettings**, в **Сетке свойств** разверните **Фильтры платформы**.

    The Property Grid displays a list of platform filters you can use.
В сетке свойств отображается список фильтров платформы, которые вы можете использовать.

    ![List of platform filters](media/list-of-platform-filters.png)
![Список фильтров платформы](media/list-of-platform-filters.png)

2. At the bottom of the list, click **Add to Platform Filters**.
2. Внизу списка нажмите **Добавить в фильтры платформы**.

    Game Studio adds a new empty item.
Game Studio добавляет новый пустой элемент.

3. In the item field, type the GPU filter you want to add.
3. В поле элемента введите фильтр графического процессора, который вы хотите добавить.

    ![Type platform filter](media/add-platform-filter-name.png)
![Введите фильтр платформы](media/add-platform-filter-name.png)

After you add a platform filter, you can select it under **Override > Specific filter**.
После добавления фильтра платформы его можно выбрать в разделе **Переопределить > Конкретный фильтр**.

![Override](media/new-GPU-in-override-list.png)
![Переопределить](media/new-GPU-in-override-list.png)

>[!Note]
>[!Примечание]
>If the new filter isn't listed, remove the override and re-add it.
>Если нового фильтра нет в списке, удалите переопределение и снова добавьте его.

## Splash screen
## Заставка

The **splash screen** is displayed when your game starts. The default is the Stride splash screen.
**Заставка** отображается при запуске игры.  По умолчанию используется экран-заставка Stride.

> [!Note]
> [!Примечание]
> The splash screen is only displayed when the game is built in release mode.
> Экран-заставка отображается только тогда, когда игра построена в режиме выпуска.

![Settings](media/splash-screen.png)
![Настройки](media/splash-screen.png)

| Property | Description
|  Недвижимость |  Описание
|----------|------------
|----------|------------
| Texture  | The image (eg company logo) displayed as the splash screen. By default, this is *StrideDefaultSplashScreen*. 
|  Текстура |  Изображение (например, логотип компании), отображаемое в качестве заставки.  По умолчанию это *StrideDefaultSplashScreen*.
| Color    | The color the splash screen fades in on top of. By default, this is black  (*#FF000000*).
|  Цвет |  Цвет, поверх которого появляется экран-заставка.  По умолчанию это черный цвет (*#FF000000*).

For more information, see [Splash screen](/splash-screen.md).
Для получения дополнительной информации см. [Заставка](/splash-screen.md).

## See also
## Смотрите также

* [Assets](../game-studio/assets.md)
* [Активы](../game-studio/assets.md)
