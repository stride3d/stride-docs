# Textures
# Текстуры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Textures** are images mainly used in [materials](../materials/index.md). Stride maps textures to the surfaces the material covers.
**Текстуры** — это изображения, которые в основном используются в [материалах](../materials/index.md).  Stride накладывает текстуры на поверхности, которые покрывает материал.

Textures can add color information to a material — for example, to add a brick pattern to a wall or a wood pattern to a table. The values of the pixels in a texture (**texels**) can also be used for other calculations, such as in specular maps, metalness maps, or [normal maps](normal-maps.md). 
Текстуры могут добавлять к материалу информацию о цвете — например, чтобы добавить рисунок кирпича на стену или рисунок дерева на стол.  Значения пикселей в текстуре (**тексели**) также можно использовать для других расчетов, например, в картах бликов, картах металличности или [картах нормалей](normal-maps.md).

Materials typically contain multiple textures; for example, a material might contain a color texture, a normal map texture, and a roughness texture.
Материалы обычно содержат несколько текстур;  например, материал может содержать текстуру цвета, текстуру карты нормалей и текстуру шероховатости.

Textures can also be used outside materials; for example, you can draw them directly to the UI, or use them in [sprites](../../sprites/index.md).
Текстуры также могут использоваться вне материалов;  например, вы можете нарисовать их прямо в пользовательском интерфейсе или использовать в [спрайтах](../../sprites/index.md).

## Supported file types
## Поддерживаемые типы файлов

You can use the following file types as textures:
В качестве текстур можно использовать следующие типы файлов:

* `.dds`
* `.dds`
* `.jpg`
* `.jpg`
* `.jpeg`
* `.jpeg`
* `.png`
* `.png`
* `.gif`
* `.gif`
* `.bmp`
* `.bmp`
* `.tga`
* `.tga`
* `.psd`
* `.psd`
* `.tif`
* `.tif`
* `.tiff`
* `.tiff`

> [!Note]
> [!Примечание]
> * Stride only imports the first frame of animated image files, such as animated gifs or PNGs. They don't animate in Stride; they appear as static images.
> * Stride импортирует только первый кадр файлов анимированных изображений, таких как анимированные GIF или PNG.  Они не анимируются в Stride;  они отображаются как статические изображения.
> * Stride currently doesn't support movie files.
> * В настоящее время Stride не поддерживает видеофайлы.

## Add a texture
## Добавляем текстуру

In the **Asset View**, click **Add asset** > **Texture**, then select a template for the texture (**color**, **grayscale** or **normal map**):
В **Просмотре активов** нажмите **Добавить актив** > **Текстура**, затем выберите шаблон текстуры (**цвет**, **оттенки серого** или **карта нормалей**).  :

![Add texture](media/add-texture.png)
![Добавить текстуру](media/add-texture.png)

> [!Note]
> [!Примечание]
> Render targets are a different kind of texture, and don't use images. Instead, they render the output from a [camera](../cameras/index.md). For more information, see [Render targets](../graphics-compositor/render-textures.md).
> Цели рендеринга представляют собой текстуру другого типа и не используют изображения.  Вместо этого они отображают вывод с [камеры](../cameras/index.md).  Для получения дополнительной информации см. [Цели рендеринга](../graphics-compositor/render-textures.md).

Alternatively, drag the texture file from Explorer to the Asset View:
Либо перетащите файл текстуры из проводника в представление активов:

![Drap and drop a resource file to the Asset View](../get-started/media/create-assets-drop-resource.png)
![Перетащите файл ресурсов в представление активов](../get-started/media/create-assets-drop-resource.png)

Then select a texture template (**color**, **grayscale** or **normal map**):
Затем выберите шаблон текстуры (**цвет**, **оттенки серого** или **карта нормалей**):
   
![List of asset templates](media/create-assets-drag-drop-select-asset-template.png)
![Список шаблонов активов](media/create-assets-drag-drop-select-asset-template.png)

Game Studio adds the texture to the Asset View:
Game Studio добавляет текстуру в Asset View:

![Texture asset created](../../get-started/media/create-assets-drag-drop-asset-created.png)
![Текстура создана](../../get-started/media/create-assets-drag-drop-asset-created.png)

## Texture properties
## Свойства текстуры

The following properties are common to all textures.
Следующие свойства являются общими для всех текстур.

![Texture properties](media/texture-properties.png)
![Свойства текстуры](media/texture-properties.png)

| Property         | Description
|  Недвижимость |  Описание
|------------------|---------
|-----------------|---------
| Width            | The width of the texture in-game
|  Ширина |  Ширина текстуры в игре
| Height           | The height of the texture in-game
|  Высота |  Высота текстуры в игре
| Use percentages    | Use percentages for width and height instead of actual pixel size
|  Используйте проценты |  Используйте проценты для ширины и высоты вместо фактического размера пикселя
| Width            | The width of the texture in-game
|  Ширина |  Ширина текстуры в игре
| Height           | The height of the texture in-game
|  Высота |  Высота текстуры в игре
| Type             | Use **Color** for textures you want to display as images, **Normal map** for normal maps, and **Grayscale** to provide values for other things (eg specular maps, metalness maps, roughness maps). Color textures and normal maps have additional properties (see below).
|  Тип |  Используйте **Цвет** для текстур, которые вы хотите отображать в виде изображений, **Карта нормалей** для карт нормалей и **Оттенки серого**, чтобы указать значения для других вещей (например, карты бликов, карты металличности, карты шероховатости).  Цветовые текстуры и карты нормалей имеют дополнительные свойства (см. ниже).
| Generate mipmaps | Generate different versions of the texture at different resolutions to be displayed at different distances. Improves performance, removes visual artifacts, and reduces pop-in when using **streaming**, but uses more memory. Unnecessary for textures always at the same distance from the camera (such as UIs).
|  Создание MIP-карт |  Создавайте разные версии текстуры с разным разрешением для отображения на разных расстояниях.  Повышает производительность, удаляет визуальные артефакты и уменьшает количество всплывающих окон при использовании **потоковой передачи**, но использует больше памяти.  Ненужно для текстур всегда на одном и том же расстоянии от камеры (например, UI).
| Compress         | Compress the final texture to a format based on the target platform and usage. The final texture is a multiple of 4. For more information, see [Texture compression](compression.md).
|  Сжать |  Сожмите окончательную текстуру в формат, основанный на целевой платформе и использовании.  Окончательная текстура кратна 4. Для получения дополнительной информации см. [Сжатие текстур](compression.md).
| Stream         | Stream the texture dynamically at runtime. This improves performance and scene loading times. Not recommended for important textures you always want to be loaded, such as splash screens. For more information, see [Streaming](streaming.md).
|  Поток |  Потоковая передача текстуры динамически во время выполнения.  Это улучшает производительность и время загрузки сцены.  Не рекомендуется для важных текстур, которые вы всегда хотите загружать, таких как заставки.  Для получения дополнительной информации см. [Потоковое вещание](streaming.md).

### Color texture properties
### Свойства текстуры цвета

The following properties apply if you set the texture **type** to **color**.
Следующие свойства применяются, если для **типа** текстуры установлено значение **цвет**.

![Color texture properties](media/color-texture-properties.png)
![Свойства текстуры цвета](media/color-texture-properties.png)

| Property | Description
|  Недвижимость |  Описание
|----------|---------
|----------|---------
| sRGB sampling | Store the texture in sRGB format and convert to linear space when sampled. Recommended for all color textures, unless they're explicitly in linear space.
|  Выборка sRGB |  Сохраните текстуру в формате sRGB и преобразуйте ее в линейное пространство при выборке.  Рекомендуется для всех цветовых текстур, если они явно не находятся в линейном пространстве.
| Color key enabled | Use the color set in the **Color key color** property for transparency at runtime. If disabled, the project uses transparent areas of the texture instead
|  Цветной ключ включен |  Используйте цвет, заданный в свойстве **Color key color**, для прозрачности во время выполнения.  Если отключено, проект вместо этого использует прозрачные области текстуры.
| Color key color | The color used for transparency at runtime. Only applied if **Color key enabled** is selected.
|  Цвет ключевой цвет |  Цвет, используемый для прозрачности во время выполнения.  Применяется только в том случае, если выбран параметр **Цветной ключ включен**.
| Alpha | The texture alpha format (**None**, **Mask**, **Explicit**, **Interpolated**, or **Auto**)
|  Альфа |  Альфа-формат текстуры (**Нет**, **Маска**, **Явный**, **Интерполированный** или **Авто**)
| Premultiply alpha |  Premultiply all color components of the images by their alpha component
|  Предумножить альфа |  Предварительно умножить все цветовые компоненты изображений на их альфа-компонент

### Normal map properties
### Свойства карты нормалей

The following property applies if you set the texture **type** to **normal map**.
Следующее свойство применяется, если для **типа** текстуры установлено значение **карта нормалей**.

![Normal map textures](media/normal-map-texture-properties.png)
![Текстуры карты нормалей](media/normal-map-texture-properties.png)

| Property | Description
|  Недвижимость |  Описание
|----------|---------
|----------|---------
| Invert Y | Have positive Y-component (green) face up in tangent space. This depends on the tools you use to create normal maps.
|  Инвертировать Y |  Положите положительную Y-компоненту (зеленую) лицевой стороной вверх в касательном пространстве.  Это зависит от инструментов, которые вы используете для создания карт нормалей.

For more information about normal maps, see the [Normal maps](normal-maps.md) page.
Для получения дополнительной информации о картах нормалей см. страницу [Карты нормалей](normal-maps.md).

## Grayscale textures
## Текстуры в градациях серого

Grayscale texture use only the R channel of the image (finalRGBA = originalRRRR).
Текстура в градациях серого использует только R-канал изображения (finalRGBA = originalRRRR).

>[!Note]
>[!Примечание]
>If you add a texture to a scene (as a sprite component), and set the texture type to grayscale, it appears red, not monochrome. This is because the image uses the R (red) channel.
>Если вы добавите текстуру в сцену (как компонент спрайта) и установите тип текстуры в оттенки серого, она будет красной, а не монохромной.  Это связано с тем, что изображение использует канал R (красный).

> To make the channel monochrome, in the **Sprite** component properties, set the **Type** as **Grayscale**. For more information about the sprite component properties, see [Use sprites](../../sprites/use-sprites.md).
> Чтобы сделать канал монохромным, в свойствах компонента **Sprite** установите **Type** как **Grayscale**.  Дополнительные сведения о свойствах компонентов спрайтов см. в разделе [Использование спрайтов](../../sprites/use-sprites.md).

You can use grayscale textures to provide values in [material maps](../materials/material-maps.md). For example, you can use a texture as a **blend map** to blend two material layers:
Вы можете использовать текстуры в градациях серого для предоставления значений в [картах материалов](../materials/material-maps.md).  Например, вы можете использовать текстуру в качестве **карты смешивания** для смешивания двух слоев материала:

![Blend map diagram](../materials/media/blend-map-diagram.png)
![Схема карты смешивания](../materials/media/blend-map-diagram.png)

![Blend map diagram](../materials/media/blend-map-diagram2.png)
![Схема карты смешивания](../materials/media/blend-map-diagram2.png)

Note how the blend map texture corresponds to the patterning on the result. 
Обратите внимание, как текстура карты смешивания соответствует рисунку в результате.

For more information, see [Material maps](../materials/material-maps.md).
Для получения дополнительной информации см. [Карты материалов](../materials/material-maps.md).

### Global texture settings
### Глобальные настройки текстуры

For instructions about how to access the global texture settings, see the [Game Settings](../../game-studio/game-settings.md) page.
Инструкции по доступу к глобальным настройкам текстур см. на странице [Настройки игры](../../game-studio/game-settings.md).

![Texture settings](../../game-studio/media/texture-settings.png)
![Настройки текстуры](../../game-studio/media/texture-settings.png)

| Property        | Description  
|  Недвижимость |  Описание
|-----------------|--------------
|-----------------|---------------
| Texture quality | The texture quality when encoding textures. **Fast** uses the least CPU, but has the lowest quality. Higher settings might result in slower builds, depending on the target platform.
|  Качество текстур |  Качество текстур при кодировании текстур.  **Быстрый** использует меньше ресурсов ЦП, но имеет самое низкое качество.  Более высокие значения могут привести к более медленной сборке, в зависимости от целевой платформы.

## See also
## Смотрите также

* [Normal maps](normal-maps.md)
* [Карты нормалей](normal-maps.md)
* [Texture compression](compression.md)
* [Сжатие текстур](compression.md)
* [Texture streaming](streaming.md)
* [Потоковая передача текстур](streaming.md)
* [Materials](../materials/index.md)
* [Материалы](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Спрайты](../../sprites/index.md)
* [Render textures](../graphics-compositor/render-textures.md)
* [Рендеринг текстур](../graphics-compositor/render-textures.md)
* [Skyboxes and backgrounds](skyboxes-and-backgrounds.md)
* [Скайбоксы и фоны](skyboxes-and-backgrounds.md)
