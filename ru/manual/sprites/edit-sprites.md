# Edit sprites
# Редактировать спрайты

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

After you [import a sprite sheet](import-sprite-sheets.md), you can use the dedicated **Sprite Editor** to select sprites within the sprite sheet.
После того, как вы [импортируете лист спрайтов](import-sprite-sheets.md), вы можете использовать специальный **Редактор спрайтов** для выбора спрайтов на листе спрайтов.

You can also edit sprite properties in the **Property Grid** like any other asset.
Вы также можете редактировать свойства спрайтов в **Сетке свойств**, как и любой другой актив.

## Open the Sprite Editor
## Откройте редактор спрайтов

To open the Sprite Editor, in the **Asset View**, double-click the sprite sheet asset.
Чтобы открыть редактор спрайтов, в **представлении ресурсов** дважды щелкните ресурс листа спрайтов.

The sprite sheet opens in the Sprite Editor.
Лист спрайтов открывается в редакторе спрайтов.

![Sprite Editor](media/sprite-editor.png)
![Редактор спрайтов](media/sprite-editor.png)

### Set sprite sheet type
### Установить тип листа спрайтов

You can set whether the sprite sheet contains gameplay sprites (**Sprite2D**) or UI sprites (**UI**). This has no effect on how the sprite is rendered at runtime, but lets you set slightly different properties, described under **Sprite properties** below. You can change the sprite sheet type any time.
Вы можете указать, содержит ли лист спрайтов игровые спрайты (**Sprite2D**) или спрайты пользовательского интерфейса (**UI**).  Это не влияет на то, как спрайт отображается во время выполнения, но позволяет задать немного другие свойства, описанные в разделе **Свойства спрайта** ниже.  Вы можете изменить тип листа спрайтов в любое время.

![Choose Sprite 2D or UI](media/sprite2D-UI.png)
![Выберите Sprite 2D или UI](media/sprite2D-UI.png)

### Add a sprite
### Добавляем спрайт

1. Click the **Add empty sprite** button.
1. Нажмите кнопку **Добавить пустой спрайт**.

    ![Add sprite](media/add-sprite-button.png)
![Добавить спрайт](media/add-sprite-button.png)

    Game Studio adds a empty sprite to the list.
Game Studio добавляет в список пустой спрайт.

2. In the **Property Grid** on the right, in the **Source** field, specify the sprite sheet that contains the sprite.
2. В **Сетке свойств** справа в поле **Источник** укажите лист спрайтов, содержащий спрайт.

>[!Tip]
>[!Подсказка]
>If you want to create a new sprite from the same sprite sheet as other sprites in the list, it's often faster to duplicate an existing sprite. To duplicate a sprite, select it and click **Duplicate selected sprites** or press **Ctrl + D**.
>Если вы хотите создать новый спрайт из того же листа спрайтов, что и другие спрайты в списке, зачастую быстрее дублировать существующий спрайт.  Чтобы дублировать спрайт, выберите его и нажмите **Дублировать выбранные спрайты** или нажмите **Ctrl + D**.
>
>
>![Duplicate selected sprites](media/duplicate-selected-sprites.png)
>![Дублировать выбранные спрайты](media/duplicate-selected-sprites.png)

### Sprite list
### Список спрайтов

The Sprite Editor lists the sprites in your project on the left. Each sprite has an index number; the first has the index *[0]*, second has index *[1]*, and so on. You can use these indexes in your scripts (see [Use sprites](use-sprites.md)).
Редактор спрайтов перечисляет спрайты в вашем проекте слева.  Каждый спрайт имеет порядковый номер;  первый имеет индекс *[0]*, второй имеет индекс *[1]* и так далее.  Вы можете использовать эти индексы в своих скриптах (см. [Использование спрайтов](use-sprites.md)).

![Sprite list](media/sprite-list.png)
![Список спрайтов](media/sprite-list.png)

To change the order (and index number) of sprites, use the ![Move selected sprite up/down](media/move-sprite-up-and-down.png) (**Move selected sprite up/down**) buttons. For example, if you move *[1] Sprite* down, it becomes *[2] Sprite*.
Чтобы изменить порядок (и порядковый номер) спрайтов, используйте ![Переместить выбранный спрайт вверх/вниз](media/move-sprite-up-and-down.png) (**Переместить выбранный спрайт вверх/вниз**)  кнопки.  Например, если вы переместите *[1] Sprite* вниз, он станет *[2] Sprite*.

To rename a sprite in the list, double-click it and type a new name.
Чтобы переименовать спрайт в списке, дважды щелкните его и введите новое имя.

### Set the texture region
### Установить область текстуры

You create sprites by defining rectangular **texture regions** in the sprite sheet.
Вы создаете спрайты, определяя прямоугольные **области текстуры** на листе спрайтов.

![Select a sprite region](media/select-sprite.png)
![Выберите область спрайта](media/select-sprite.png)

There are three ways to do this: by using the Magic Wand tool, by setting the edges of the region manually, or by specifying the pixel coordinates in the sprite properties.
Сделать это можно тремя способами: с помощью инструмента «Волшебная палочка», задав края области вручную или указав координаты пикселя в свойствах спрайта.

#### Use the Magic Wand
#### Используйте волшебную палочку

The **Magic Wand** selects the texture region around a sprite automatically. This is usually the fastest way to select sprites.
**Волшебная палочка** автоматически выбирает область текстуры вокруг спрайта.  Обычно это самый быстрый способ выбора спрайтов.

![Magic wand](media/magic-wand.gif)
![Волшебная палочка](media/magic-wand.gif)

To select or deselect the Magic Wand, click the icon in the Sprite Editor toolbar, or press the **M** key.
Чтобы выбрать или отменить выбор волшебной палочки, щелкните значок на панели инструментов редактора спрайтов или нажмите клавишу **M**.

![Select Magic Wand](media/select-magic-wand.png)
![Выбрать волшебную палочку](media/select-magic-wand.png)

To choose how the Magic Wand identifies texture regions, use the **drop-down list** in the toolbar.
Чтобы выбрать, как Magic Wand идентифицирует области текстуры, используйте **раскрывающийся список** на панели инструментов.

![Select transparency or color key](media/magic-wand-select-transparency-or-color-key.png)
![Выберите ключ прозрачности или цвета](media/magic-wand-select-transparency-or-color-key.png)

* **Transparency**: The Magic Wand treats the edges of the non-transparent regions as the edges of the texture region. For example, if the sprite is surrounded by transparent space, it sets the texture region at the edge of the transparent space.
* **Прозрачность**: Magic Wand обрабатывает края непрозрачных областей как края области текстуры.  Например, если спрайт окружен прозрачным пространством, он устанавливает область текстуры на краю прозрачного пространства.

* **Color key**: The Magic Wand identifies texture regions using the color set under **Color key** in the Sprite Editor. For example, if the sprite is surrounded by absolute black (#FF000000), and you set absolute black as the color key, the Magic Wand sets the texture region at the edge of the absolute black space.
* **Цветовой ключ**: Волшебная палочка идентифицирует области текстуры, используя цвет, заданный в **Цветовом ключе** в редакторе спрайтов.  Например, если спрайт окружен абсолютным черным цветом (#FF000000), и вы установили абсолютный черный цвет в качестве цветового ключа, волшебная палочка устанавливает область текстуры на краю абсолютно черного пространства.

#### Set texture region manually
#### Установить область текстуры вручную

You can drag the edges of the texture region and reposition the region manually.
Вы можете перетаскивать края области текстуры и перемещать область вручную.

<p>
<p>
    <video autoplay loop class="responsive-video" poster="media\select-sprite-borders.jpg">
<цикл автоматического воспроизведения видео class=
       <source src="media\select-sprite-borders.mp4" type="video/mp4">
<source src=
    </video>
</видео>
</p>
</p>

#### Set the texture region in the Property Grid
#### Установите область текстуры в сетке свойств

You can define the pixel coordinates of the texture region in **Property Grid** under **Texture Region**. X is the left edge, Y is the top, Z is the right, and W is the bottom.
Вы можете определить пиксельные координаты области текстуры в **Сетке свойств** в разделе **Область текстуры**.  X — левый край, Y — верхний, Z — правый, W — нижний.

![Set texture region in Property Grid](media/set-texture-region-in-property-grid.png)
![Установить область текстуры в сетке свойств](media/set-texture-region-in-property-grid.png)

#### Use entire sprite sheet for the sprite
#### Использовать весь лист спрайтов для спрайта

If you want to use the entire sprite sheet image for the sprite, you can do this quickly by clicking **Use whole image for this sprite** in the toolbar. This is useful when you have only one sprite in a sprite sheet.
Если вы хотите использовать для спрайта все изображение листа спрайтов, вы можете быстро сделать это, нажав **Использовать все изображение для этого спрайта** на панели инструментов.  Это полезно, когда у вас есть только один спрайт на листе спрайтов.

![Use entire sprite sheet](media/use-entire-sprite-sheet.png)
![Использовать весь лист спрайтов](media/use-entire-sprite-sheet.png)

### Set transparency
### Установить прозрачность

By default, Stride treats transparent areas of the sprite sheet as transparent at runtime. Alternatively, you can set a key color as transparent. To do this, select **Use color key** and define a color. For example, if you set absolute black (#FF000000), areas of absolute black are transparent at runtime.
По умолчанию Stride обрабатывает прозрачные области листа спрайтов как прозрачные во время выполнения.  Кроме того, вы можете установить ключевой цвет как прозрачный.  Для этого выберите **Использовать цветовую клавишу** и определите цвет.  Например, если вы установите абсолютный черный цвет (#FF000000), области абсолютно черного цвета будут прозрачными во время выполнения.

![Select color key](media/color-key.png)
![Выбрать цветовую клавишу](media/color-key.png)

You can also use the **color picker** tool to select a color from the sprite sheet.
Вы также можете использовать инструмент **выбор цвета**, чтобы выбрать цвет на листе спрайтов.

![Color picker](media/color-picker.png)
![Палитра цветов](media/color-picker.png)

## Sprite properties
## Свойства спрайта

You can set the properties of individual sprites in the **Property Grid**.
Вы можете установить свойства отдельных спрайтов в **Сетке свойств**.

![Adjust frame properties](media/adjust-frame-properties.png)
![Настроить свойства кадра](media/adjust-frame-properties.png)

| Property | Description |
|  Недвижимость |  Описание |
|--------------------|------------------------- |
|-------------------|------------------------- |
| Source | The path to the sprite sheet |
|  Источник |  Путь к листу спрайтов |
| Name | The name of this sprite. You can also edit this by double-clicking a sprite in the sprite list in the Sprite Editor |
|  Имя |  Имя этого спрайта.  Вы также можете отредактировать это, дважды щелкнув спрайт в списке спрайтов в Редакторе спрайтов |
| Texture region | The region of the sprite sheet used for this sprite |
|  Текстурная область |  Область листа спрайтов, используемая для этого спрайта |
| Pixels per unit | The number of pixels representing a unit in the scene. The higher this number, the smaller the sprite is rendered in the scene |
|  Пикселей на единицу |  Количество пикселей, представляющих единицу в сцене.  Чем выше это число, тем меньше спрайт отображается в сцене |
| Orientation | If you select **Rotated90**, Stride rotates the sprite 90 degrees at runtime |
|  Ориентация |  Если вы выберете **Rotated90**, Stride повернет спрайт на 90 градусов во время выполнения |
| Center | The position of the center of the sprite, in pixels. By default, the center is **0, 0**. Note: this property is only available if the sprite sheet type is set to **Sprite2D** in the Sprite Editor. |
|  центр |  Положение центра спрайта в пикселях.  По умолчанию центр равен **0, 0**.  Примечание. Это свойство доступно, только если для типа листа спрайтов установлено значение **Sprite2D** в редакторе спрайтов.  |
| Center from middle | Have the value in the Center property represent the offset of the sprite center from the middle of the sprite. Note: this property is only available if the sprite sheet type is set to **Sprite2D** in the Sprite Editor. |
|  Центр от середины |  Пусть значение свойства Center представляет собой смещение центра спрайта от середины спрайта.  Примечание. Это свойство доступно, только если для типа листа спрайтов установлено значение **Sprite2D** в редакторе спрайтов.  |
| Borders |  The size in pixels of the sprite borders (areas that don't deform when stretched). X is the left border, Y is the top, Z is the right, and W is the bottom. For more information, see [Set sprite borders](set-sprite-borders.md). Note: this property is only available if the sprite sheet is set to **UI** on the left. |
|  Границы |  Размер в пикселях границ спрайта (областей, которые не деформируются при растяжении).  X — левая граница, Y — верхняя, Z — правая, W — нижняя.  Дополнительные сведения см. в разделе [Установить границы спрайтов](set-sprite-borders.md).  Примечание. Это свойство доступно только в том случае, если лист спрайтов установлен на **UI** слева.  |

## Sprite sheet properties
## Свойства листа спрайтов

You can also set the properties for the entire sprite sheet asset. To access the properties:
Вы также можете установить свойства для всего актива листа спрайтов.  Чтобы получить доступ к свойствам:

* select the sprite sheet asset in the **Asset View** and set the properties in the **Property Grid**, or
* выберите ресурс листа спрайтов в **Представлении активов** и задайте свойства в **Сетке свойств**, или
* in the Sprite Editor, click **Sprite sheet properties**.
* в редакторе спрайтов нажмите **Свойства листа спрайтов**.

    ![Sprite sheet properties button](media/sprite-sheet-properties-button.png)
![Кнопка свойств листа спрайтов](media/sprite-sheet-properties-button.png)

Many of the properties are the same as texture properties. 
Многие свойства аналогичны свойствам текстуры.

![Sprite sheet properties](media/sprite-sheet-properties.png)
![Свойства листа спрайтов](media/sprite-sheet-properties.png)

| Property | Description |
|  Недвижимость |  Описание |
|--------------------|---------------|
|--------------------|----------------|
| Sheet Type | Specify whether this sprite sheet is used for 2D sprites or UI elements. If you select **Sprite sheet for UI**, you can define [sprite borders](set-sprite-borders.md) in the sprites.|
|  Тип листа |  Укажите, используется ли этот лист спрайтов для 2D-спрайтов или элементов пользовательского интерфейса.  Если вы выберете **Лист спрайтов для пользовательского интерфейса**, вы сможете определить [границы спрайтов](set-sprite-borders.md) в спрайтах.|
| Color Key Color | The color used for transparency at runtime. This is only applied if **Color Key Enabled** is selected below |
|  Цвет Ключевой цвет |  Цвет, используемый для прозрачности во время выполнения.  Это применяется только в том случае, если **Цветной ключ включен** выбран ниже |
| Color Key Enabled | Use the color set in the **Color Key Color** property for transparency at runtime. If this isn't selected, the project uses transparent areas of the sprite sheet instead |
|  Цветной ключ включен |  Используйте цвет, заданный в свойстве **Color Key Color**, для прозрачности во время выполнения.  Если этот параметр не выбран, вместо этого в проекте используются прозрачные области листа спрайтов |
| Compress | Compress the texture to a format based on the target platform. The final texture size will be a multiple of 4. |
|  Сжать |  Сожмите текстуру в формат, основанный на целевой платформе.  Окончательный размер текстуры будет кратен 4. |
| ColorSpace | The color space for the sprites in the sprite sheet (Auto, Linear, or Gamma) |
|  Цветное пространство |  Цветовое пространство для спрайтов на листе спрайтов (Авто, Линейный или Гамма) |
| Alpha | The texture alpha format which all the sprites in the sprite sheet are converted to (None, Mask, Explicit, Interpolated, or Auto) |
|  Альфа |  Альфа-формат текстуры, в который преобразуются все спрайты на листе спрайтов (Нет, Маска, Явный, Интерполированный или Авто) |
| Generate Mipmaps | Generates mipmaps for all sprites in the sprite sheet |
|  Генерировать мип-карты |  Генерирует MIP-карты для всех спрайтов на листе спрайтов |
| Premultiply Alpha |  Premultiply all color components of the images by their alpha component |
|  Предумножить Альфа |  Предварительно умножить все цветовые компоненты изображений на их альфа-компонент |
| Allow Multipacking | Generate multiple atlas textures if the sprites can't fit into a single atlas |
|  Разрешить мультиупаковку |  Создать несколько текстур атласа, если спрайты не помещаются в один атлас |
| Allow rotations | Rotate sprites inside the sprite sheet to optimize space. This doesn't affect how sprites are displayed at runtime. |
|  Разрешить вращения |  Поворачивайте спрайты внутри листа спрайтов, чтобы оптимизировать пространство.  Это не влияет на то, как спрайты отображаются во время выполнения.  |
| Border size | The size in pixels of the border around the sprites. This prevents side effects in the sprite sheet. |
|  Размер границы |  Размер в пикселях границы вокруг спрайтов.  Это предотвращает побочные эффекты в листе спрайтов.  |

## See also
## Смотрите также

* [Import sprite sheets](import-sprite-sheets.md)
* [Импорт листов спрайтов](import-sprite-sheets.md)
* [Set sprite borders](set-sprite-borders.md)
* [Установить границы спрайта](set-sprite-borders.md)
* [Use sprites](use-sprites.md)
* [Использовать спрайты](use-sprites.md)
