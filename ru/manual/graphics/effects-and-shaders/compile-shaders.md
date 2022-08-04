# Compile shaders
# Скомпилировать шейдеры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Stride converts Stride shaders (`sdsl` and `.sdfx` files) into the shader language used by the [graphics platform](../../platforms/set-the-graphics-platform.md).
Stride преобразует шейдеры Stride (файлы `sdsl` и `.sdfx`) в язык шейдеров, используемый [графической платформой](../../platforms/set-the-graphics-platform.md).

| Platform       | Shader language 
|  Платформа |  Язык шейдеров
| -------------- | ---- 
|  -------------- |  ----
| Direct3D       | HLSL
|  Директ3D |  HLSL
| OpenGL         | GLSL
|  OpenGL |  GLSL
| Vulkan         | SPIR-V
|  Вулкан |  СПИР-В
| iOS            | OpenGL ES
|  iOS |  OpenGL ЕС

Stride can convert the shaders at runtime (when the game is running) or at build time (when the editor builds the game assets). When Stride generates shaders at runtime, rendering stops until the shader is compiled. This is usually something you want to avoid in your release build — especially on mobile platforms, which have less CPU, so the pause can be more noticable.
Stride может преобразовывать шейдеры во время выполнения (когда игра запущена) или во время сборки (когда редактор создает ресурсы игры).  Когда Stride создает шейдеры во время выполнения, рендеринг останавливается до тех пор, пока шейдер не будет скомпилирован.  Обычно этого следует избегать в сборке релиза — особенно на мобильных платформах, у которых меньше ресурсов ЦП, поэтому пауза может быть более заметной.

## How Stride converts shaders at runtime
## Как Stride преобразует шейдеры во время выполнения

Stride can't know in advance which shaders will be used at runtime. This is because users might generate new shader permutations by, for example, changing material parameters or modifying post-effect parameters from scripts. Additionally, the final shaders depend on the graphics features on the execution platform.
Stride не может знать заранее, какие шейдеры будут использоваться во время выполнения.  Это связано с тем, что пользователи могут генерировать новые перестановки шейдеров, например, изменяя параметры материала или изменяя параметры пост-эффектов из скриптов.  Кроме того, окончательные шейдеры зависят от графических функций на платформе исполнения.

1. When Stride needs a new shader at runtime, it checks its database to see if the shader has already been converted. If the shader is in the database, Stride uses it.
1. Когда Stride требуется новый шейдер во время выполнения, он проверяет свою базу данных, чтобы убедиться, что шейдер уже был преобразован.  Если шейдер находится в базе данных, Stride использует его.

2. If the shader hasn't already been converted, Stride compiles it — either locally (on the device) or remotely (in Game Studio), depending on the package **User Settings** (see below).
2. Если шейдер еще не конвертирован, Stride компилирует его — либо локально (на устройстве), либо удаленно (в Game Studio), в зависимости от пакета **Настройки пользователя** (см. ниже).

3. If **Record used effects** is enabled in the package **User Settings** (see below), Stride notifies Game Studio that it needs a new shader.
3. Если в пакете **Настройки пользователя** включена опция **Записывать используемые эффекты** (см. ниже), Stride уведомляет Game Studio о том, что ей нужен новый шейдер.

4. Game Studio notifies you that there are new shaders to import.
4. Game Studio уведомит вас о наличии новых шейдеров для импорта.

    ![New effects](media/new-effects-to-import.png)
![Новые эффекты](media/new-effects-to-import.png)

    In the **Asset View**, the **Import effects** button becomes available.
В **Asset View** становится доступной кнопка **Import Effects**.

    ![Import effects](media/import-effects-button.png)
![Импорт эффектов](media/import-effects-button.png)

5. If you click **Import effects**, Game Studio updates the **Effect Log** (or creates it if it doesn't exist) and adds them to the game database to be used the next time you build (see step 1).
5. Если вы нажмете **Импортировать эффекты**, Game Studio обновит **Журнал эффектов** (или создаст его, если он не существует) и добавит их в базу данных игры для использования при следующей сборке (см.  шаг 1).

    ![Effect log](media/effect-log.png)
![Журнал эффектов](media/effect-log.png)

## Change how Stride compiles shaders
## Изменить способ компиляции шейдеров Stride

1. In Game Studio, in the **Solution Explorer**, select the package and click **Package properties**.
1. В Game Studio в **Обозревателе решений** выберите пакет и нажмите **Свойства пакета**.

    ![Package properties](media/package-properties-button.png)
![Свойства пакета](media/package-properties-button.png)

2. In the **Property Grid**, set the properties.
2. В **Сетке свойств** задайте свойства.

    ![Package properties](media/package-properties.png)
![Свойства пакета](media/package-properties.png)

The **Effect compiler** property specifies how to compile the shader.
Свойство **Компилятор эффектов** указывает, как компилировать шейдер.

* **Local**: Convert the shader on the device. This is recommended for release versions of your game.
* **Локальный**: преобразование шейдера на устройстве.  Это рекомендуется для выпускных версий вашей игры.

* **Remote**: Convert the shader on the developer machine. There's no reason to use this for release versions of your game, as it won't be able to connect to the developer machine.
* **Remote**: преобразование шейдера на компьютере разработчика.  Нет причин использовать это для выпускных версий вашей игры, так как она не сможет подключиться к машине разработчика.

* **LocalOrRemote**: Convert the shader on the developer machine; if this fails, try to convert it on the device. Like the **Remote** setting, this has no use for release versions of your game.
* **LocalOrRemote**: преобразование шейдера на компьютере разработчика;  если это не удается, попробуйте преобразовать его на устройстве.  Как и параметр **Remote**, он не используется для релизных версий вашей игры.

* **None**: Don't convert shaders. Note that the application will crash if it requires a shader that isn't in the database. Currently, using this feature doesn't save any space your application, so there's no advantage in using it. However, it might be useful for making sure you have every shader in the database; if the game crashes, you know the database is missing at least one shader.
* **Нет**: Не преобразовывать шейдеры.  Обратите внимание, что приложение аварийно завершает работу, если ему требуется шейдер, которого нет в базе данных.  В настоящее время использование этой функции не экономит место в вашем приложении, поэтому в ее использовании нет никаких преимуществ.  Однако может быть полезно убедиться, что у вас есть все шейдеры в базе данных;  если игра вылетает, вы знаете, что в базе данных отсутствует по крайней мере один шейдер.

If you enable **Record used effects**, Game Studio adds new shaders to the Effect Log as soon as they're needed. We recommend you disable this for release versions of your game, as it can't connect to the developer machine.
Если вы включите **Записывать использованные эффекты**, Game Studio добавит новые шейдеры в журнал эффектов, как только они понадобятся.  Мы рекомендуем вам отключить это для выпускных версий вашей игры, так как она не может подключиться к машине разработчика.

## Compile shaders remotely when developing for iOS
## Удаленная компиляция шейдеров при разработке для iOS

As iOS devices can't connect directly to PC, to convert Stride shaders remotely when developing for iOS, you need to use a Python script as a relay between the device, a Mac, and the developer PC.
Поскольку устройства iOS не могут подключаться напрямую к ПК, для удаленного преобразования шейдеров Stride при разработке для iOS необходимо использовать скрипт Python в качестве ретранслятора между устройством, Mac и ПК разработчика.

1. Make sure your PC and Mac are connected to the same network.
1. Убедитесь, что ваш ПК и Mac подключены к одной сети.

2. On your Mac, install Python. You can download Python from the [Python site](https://www.python.org/downloads/).
2. Установите Python на свой Mac.  Вы можете загрузить Python с [сайта Python] (https://www.python.org/downloads/).

3. Download and unzip [ios-tcreplay.zip](media/ios-tcprelay.zip).
3. Загрузите и разархивируйте [ios-tcreplay.zip](media/ios-tcprelay.zip).

4. Open **Terminal**, navigate to the folder where you unzipped the file, and execute **stride-ios-relay.py MyPcName**, where **MyPcName** is the name of your developer PC.
4. Откройте **Терминал**, перейдите в папку, в которую вы распаковали файл, и выполните **stride-ios-relay.py MyPcName**, где **MyPcName** — имя вашего ПК разработчика.

    >[!Tip]
>[!Подсказка]
    >To find the name of your developer PC, on the PC, press the Windows key, type **About**, and press **Enter**. The PC name is listed under **PC name**.
>Чтобы найти имя вашего ПК разработчика, на ПК нажмите клавишу Windows, введите **О программе** и нажмите **Ввод**.  Имя ПК указано в разделе **Имя ПК**.

The iOS device should now be able to communicate with the PC via your Mac to build shaders remotely.
Теперь устройство iOS должно иметь возможность связываться с ПК через ваш Mac для удаленного создания шейдеров.

## Error messages
## Сообщения об ошибках

If your application tries to connect to Game Studio to compile a shader or to notify Game Studio that it needs new shaders, but can't connect, the Visual Studio output displays this error:
Если ваше приложение пытается подключиться к Game Studio, чтобы скомпилировать шейдер или уведомить Game Studio о том, что ему нужны новые шейдеры, но не может подключиться, в выходных данных Visual Studio отображается следующая ошибка:

"[RouterClient]: Error: Could not connect to connection router using mode Connect. System.AggregateException: One or more errors occurred. ---> System.Net.Sockets.SocketException: No connection could be made because the target machine actively refused it 127.0.0.1:31254"
«[RouterClient]: ошибка: не удалось подключиться к маршрутизатору подключения в режиме Connect. System.AggregateException: произошла одна или несколько ошибок. ---> System.Net.Sockets.SocketException: не удалось установить соединение, поскольку целевая машина активно отказывалась  это 127.0.0.1:31254
