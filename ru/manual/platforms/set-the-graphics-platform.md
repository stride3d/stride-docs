# Set the graphics platform
# Установить графическую платформу

<span class="label label-doc-level">Beginner</span>
<span class=

The **graphics platform** controls the graphics hardware in the device you run your project on. Different devices support different graphics platforms; for example, iOS supports the OpenGL ES graphics platform. You can select which graphics platform your game uses, and add overrides for different platforms (eg Windows, Android, etc).
**Графическая платформа** управляет графическим оборудованием устройства, на котором вы запускаете свой проект.  Разные устройства поддерживают разные графические платформы;  например, iOS поддерживает графическую платформу OpenGL ES.  Вы можете выбрать, какую графическую платформу использует ваша игра, и добавить переопределения для разных платформ (например, Windows, Android и т. д.).

>[!Warning]
>[!Предупреждение]
>Moving from Direct3D to an earlier Direct3D version can create problems. For example, if your game contains HDR textures, it will crash, as Direct3D 9 doesn't support them.
>Переход с Direct3D на более раннюю версию Direct3D может создать проблемы.  Например, если ваша игра содержит HDR-текстуры, она вылетит, так как Direct3D 9 их не поддерживает.

You set the graphics platform in the [game settings](../game-studio/game-settings.md) asset.
Вы устанавливаете графическую платформу в ассете [настройки игры](../game-studio/game-settings.md).

> [!Note]
> [!Примечание]
> Make sure you have the latest drivers for the graphics platforms you want to use.
> Убедитесь, что у вас установлены последние версии драйверов для графических платформ, которые вы хотите использовать.

1. In the **Asset View**, select the **Game Settings** asset.
1. В **Просмотре ресурсов** выберите объект **Настройки игры**.

    ![Game settings asset](media/games-settings-asset.png)
![Актив настроек игры](media/games-settings-asset.png)

2. In the Property Grid, under **Rendering Settings > Target graphics platform**, select the graphics platform you want to use.
2. В таблице свойств в разделе **Настройки рендеринга > Целевая графическая платформа** выберите графическую платформу, которую вы хотите использовать.

    ![Select graphics platform](media/change-graphics-platform.png)
![Выберите графическую платформу](media/change-graphics-platform.png)

    If you select **Default**, Stride uses the graphics platform appropriate for your platform (eg Windows, Android) when you build.
Если вы выберете **По умолчанию**, Stride будет использовать графическую платформу, подходящую для вашей платформы (например, Windows, Android) при сборке.

| Platform      | Default graphics platform 
|  Платформа |  Графическая платформа по умолчанию
|---------------|-------------
|---------------|--------------
| Windows, UWP  | Direct3D11  
|  Windows, UWP |  Direct3D11
| Linux, Mac OS | OpenGL    
|  Linux, Mac OS |  OpenGL
| Other         | OpenGL ES  
|  Другое |  OpenGL ЕС

## Override the graphics platform
## Переопределить графическую платформу

You can override the graphics platform Stride uses for specific platforms. For example, you can have Linux use Vulkan while other platforms use the default.
Вы можете переопределить графическую платформу, которую Stride использует для определенных платформ.  Например, вы можете настроить Linux на использование Vulkan, в то время как на других платформах используется значение по умолчанию.

1. With the **GameSettings** asset selected, in the Property Grid, under **Overrides**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
1. Выбрав ресурс **GameSettings**, в сетке свойств в разделе **Переопределения** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png)  (**Добавлять**).

    ![Select graphics platform](media/add-override.png)
![Выберите графическую платформу](media/add-override.png)

    Game Studio adds an override.
Game Studio добавляет переопределение.

2. In the new override, next to **Platforms**, select the platforms you want this override to apply to.
2. В новом переопределении рядом с **Платформы** выберите платформы, к которым вы хотите применить это переопределение.

    ![Select graphics platform override](media/select-override-platform.png)
![Переопределить выбор графической платформы](media/select-override-platform.png)

3. In the **Configuration** drop-down menu, select **Rendering Settings**.
3. В раскрывающемся меню **Конфигурация** выберите **Настройки рендеринга**.

    ![Select graphics platform override](media/select-override-configuration.png)
![Выберите переопределение графической платформы](media/select-override-configuration.png)

4. Under **Rendering Settings**, in the **Preferred Graphics Platform** drop-down menu, select the graphics platform you want to use.
4. В разделе **Настройки рендеринга** в раскрывающемся меню **Предпочитаемая графическая платформа** выберите нужную графическую платформу.

    ![Select graphics platform override](media/select-override-graphics-platform.png)
![Выбрать переопределение графической платформы](media/select-override-graphics-platform.png)

Stride overrides the graphics platform for the platforms you selected.
Stride переопределяет графическую платформу для выбранных вами платформ.

## Check which graphics platform your project uses
## Проверьте, какую графическую платформу использует ваш проект

1. Add a break point to your game code (eg in a script).
1. Добавьте точку останова в код игры (например, в скрипт).

2. Run the project. 
2. Запустите проект.

3. Check the value of the [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform) variable.
3. Проверьте значение переменной [GraphicsDevice.Platform](xref:Stride.Graphics.GraphicsDevice.Platform).

    For example, this project is using Vulkan:
Например, этот проект использует Vulkan:

    ![Select graphics platform](media/check-platform-at-runtime.png)
![Выберите графическую платформу](media/check-platform-at-runtime.png)

## See also
## Смотрите также

* [Platforms index](index.md)
* [Индекс платформ](index.md)
* [Game settings](../game-studio/game-settings.md)
* [Настройки игры](../game-studio/game-settings.md)
