# Splash screen
# Заставка

<span class="label label-doc-level">Beginner</span>
<span class=

The **splash screen** is the image (usually a logo) displayed when your game starts. It fades in over the color you specify, then fades out.
**Заставка** — это изображение (обычно логотип), отображаемое при запуске игры.  Он проявляется поверх указанного вами цвета, а затем исчезает.

> [!Note]
> [!Примечание]
> The splash screen is only displayed when the game is built in release mode.
> Экран-заставка отображается только тогда, когда игра построена в режиме выпуска.

The default splash screen is the Stride logo.
Экран-заставка по умолчанию — это логотип Stride.

![Default splash screen](media/StrideDefaultSplashScreen.png)
![Заставка по умолчанию](media/StrideDefaultSplashScreen.png)

You can only specify one splash screen in Game Settings. If you want to add more, you need to implement them manually.
Вы можете указать только одну заставку в настройках игры.  Если вы хотите добавить больше, вам нужно реализовать их вручную.

## Edit the splash screen
## Отредактируйте заставку

The splash screen settings are part of the **Game settings** asset.
Настройки экрана-заставки являются частью актива **Настройки игры**.

1. In the **solution explorer** (the bottom-left pane by default), select the **Assets folder**.
1. В **обозревателе решений** (нижняя левая панель по умолчанию) выберите **папку ресурсов**.

    ![Select Assets folder asset](media/select-asset-folder.png)
![Выберите ресурс папки Assets](media/select-asset-folder.png)

2. In the **asset view** (the bottom pane by default), select the **GameSettings** asset.
2. В **представлении ресурсов** (нижняя панель по умолчанию) выберите ресурс **GameSettings**.

    ![Select Game Settings asset](media/select-game-settings-asset.png)
![Выберите актив настроек игры](media/select-game-settings-asset.png)

3. In the **property grid** (the right-hand pane by default), expand **Splash screen**.
3. В **сетке свойств** (правая панель по умолчанию) разверните **Экран-заставка**.

    ![Settings](media/splash-screen.png)
![Настройки](media/splash-screen.png)

### Splash screen properties
### Свойства заставки

| Property | Description
|  Недвижимость |  Описание
|----------|------------
|----------|------------
| Texture  | The image (eg company logo) displayed as the splash screen. By default, this is *StrideDefaultSplashScreen*. 
|  Текстура |  Изображение (например, логотип компании), отображаемое в качестве заставки.  По умолчанию это *StrideDefaultSplashScreen*.
| Color    | The color the splash screen fades in on top of. By default, this is black (*#FF000000*).
|  Цвет |  Цвет, поверх которого появляется экран-заставка.  По умолчанию это черный цвет (*#FF000000*).

>[!Tip]
>[!Подсказка]
>Additionally, you might want to **disable streaming** on the properties of the splash screen texture itself. This makes sure the texture is always loaded and displayed at the highest quality. For more information, see [Textures > Streaming](../graphics/textures/streaming.md).
>Кроме того, вы можете **отключить потоковую передачу** в свойствах самой текстуры заставки.  Это гарантирует, что текстура всегда загружается и отображается в самом высоком качестве.  Для получения дополнительной информации см. [Текстуры > Потоковая передача](../graphics/textures/streaming.md).

## See also
## Смотрите также

* [Assets](../game-studio/game-settings.md)
* [Активы](../game-studio/game-settings.md)
* [Textures](../graphics/textures/index.md)
* [Текстуры](../graphics/textures/index.md)
