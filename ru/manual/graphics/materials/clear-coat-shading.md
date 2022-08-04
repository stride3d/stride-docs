# Clear-coat shading
# Прозрачное затенение

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Clear-coat shading** uses physically-based rendering to simulate vehicle paint.
**Затенение прозрачным покрытием** использует физический рендеринг для имитации окраски автомобиля.

![Clear coat](media/clear-coat-2.jpg)
![Прозрачный слой](media/clear-coat-2.jpg)

Real vehicles typically have three layers of paint applied to the body, as in the diagram below:
На кузов реальных автомобилей обычно наносят три слоя краски, как показано на диаграмме ниже:

![Diagram](media/paint-layers.png)
![Диаграмма](media/paint-layers.png)

To keep the shading simple, Stride only simulates the **base coat** (including optional metal flakes) and **clear coat** layers. Stride blends the layers depending on how far the camera is from the material. This reduces visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).
Чтобы сделать затенение простым, Stride имитирует только слои **базового покрытия** (включая дополнительные металлические хлопья) и **прозрачного покрытия**.  Stride смешивает слои в зависимости от того, насколько далеко камера находится от материала.  Это уменьшает визуальные артефакты, вызванные картой нормалей металлических чешуек (которые становятся более заметными по мере удаления камеры от материала).

Clear-coat shading has several advantages over creating the effect manually with [material layers](material-layers.md):
Затенение прозрачным покрытием имеет несколько преимуществ по сравнению с созданием эффекта вручную с помощью [материальных слоев](material-layers.md):

* layers are blended based on distance
* слои смешиваются в зависимости от расстояния
* increased performance
* повышенная производительность
* improved visualization
* улучшенная визуализация

## Add a clear-coat material
## Добавьте прозрачный материал

Stride includes a clear-coat material template. To add it, in the **Asset View**, click **Add asset** and select **Material > PBR material: clear coat**.
Stride включает в себя шаблон материала с прозрачным покрытием.  Чтобы добавить его, в **Представлении активов** нажмите **Добавить актив** и выберите **Материал > Материал PBR: прозрачное покрытие**.

![Add clear coat](media/add-clear-coat.png)
![Добавить прозрачный слой](media/add-clear-coat.png)

Alternatively, to set clear-coat properties yourself:
В качестве альтернативы, чтобы установить свойства прозрачного покрытия самостоятельно:

1. Select the material you want to use clear-coat shading.
1. Выберите материал, для которого вы хотите использовать прозрачное покрытие.

2. In the Property Grid, under the **Misc** properties, next to **Clear coat**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Clear coat**.
2. В сетке свойств в свойствах **Разное** рядом с **Прозрачный слой** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png  ) (**Заменить**) и выберите **Прозрачный слой**.

    ![Select clear coat](media/select-clear-coat.png)
![Выбрать прозрачное покрытие](media/select-clear-coat.png)

    >[!Note]
>[!Примечание]
    >For clear-coat shading to work correctly, make sure you enable **Diffuse**, **Specular** and **Specular model** under the material **Shading** properties.
>Чтобы затенение прозрачного покрытия работало правильно, убедитесь, что вы включили **Diffuse**, **Specular** и **Specular model** в свойствах материала **Shading**.
    
    >![Shading options](media/enable-shading-options.png)
>![Параметры затенения](media/enable-shading-options.png)

## Properties
## Характеристики

You can access the clear-coat shader properties under **Misc > Clear coat**. They're split into three parts: the **base paint** and optional **metal flake** properties simulate the base coat, and the **clear coat** properties simulate the clear coat. 
Вы можете получить доступ к свойствам шейдера прозрачного покрытия в разделе **Разное > Прозрачное покрытие**.  Они разделены на три части: **базовая краска** и дополнительные свойства **металлических чешуек** имитируют базовое покрытие, а свойства **прозрачного покрытия** имитируют прозрачное покрытие.

The metal flake properties simulate a metallic paint effect. To disable the effect, remove the metal flake normal map.
Металлические чешуйки имитируют эффект металлической краски.  Чтобы отключить эффект, удалите карту нормалей металлических чешуек.

![Add clear coat](media/clear-coat-properties.png)
![Добавить прозрачный слой](media/clear-coat-properties.png)

| Property | Description 
|  Недвижимость |  Описание
|------------------------------|----------
|------------------------------|----------
| Base paint diffuse map  |  The [diffuse map](shading-attributes.md) used by the base paint layer (the lowest  layer). This determines the color of the layer.
|  Базовая краска диффузная карта |  [diffuse map](shading-attributes.md), используемая базовым слоем краски (самый нижний слой).  Это определяет цвет слоя.
| Base paint gloss map |  The [gloss map](geometry-attributes.md) used by the base paint layer. For a coherent result, use the **metal flake normal map** as a mask.         
|  Базовая карта блеска краски |  [Карта глянца](geometry-attributes.md), используемая базовым слоем краски.  Для согласованного результата используйте **карту нормалей металлических чешуек** в качестве маски.
| Metal flakes diffuse map  |  The [diffuse map](shading-attributes.md) used by the metal flake layer (the layer above the base paint). For a coherent result, use a value close to the base paint value.
|  Металлические хлопья диффузная карта |  [diffuse map](shading-attributes.md), используемая слоем металлических чешуек (слой над базовой краской).  Для согласованного результата используйте значение, близкое к значению базовой краски.
| Metal flakes gloss map | The [gloss map](geometry-attributes.md) used by the metal flake layer. For a coherent result, use the **metal flake normal map** as a mask. 
|  Карта блеска металлических хлопьев |  [Карта глянца] (geometry-attributes.md), используемая слоем металлических чешуек.  Для согласованного результата используйте **карту нормалей металлических чешуек** в качестве маски.
| Metal flakes metalness map | The [metalness map](shading-attributes.md) used by the metal flake layer. For best results, use high values.
|  Карта металличности металлических чешуек |  [Карта металличности] (shading-attributes.md), используемая слоем металлических чешуек.  Для достижения наилучших результатов используйте высокие значения.
| Metal flake normal map  | The [normal map](../textures/normal-maps.md) used by the metal flake layer. This shapes the flake geometry. A metal flake normal map  (**StrideClearCoatMetalFlakesNM**) is included in the Stride assets package. If the texture has a high UV scale, enable **Use random texture coordinates** below to reduce tiling effects. To disable the metal flakes effect, remove the normal map.
|  Карта нормалей металлических чешуек |  [Карта нормалей](../textures/normal-maps.md), используемая слоем металлических чешуек.  Это формирует геометрию чешуек.  Карта нормалей металлических чешуек (**StrideClearCoatMetalFlakesNM**) включена в пакет активов Stride.  Если текстура имеет большой масштаб UV, включите **Использовать случайные координаты текстуры** ниже, чтобы уменьшить эффекты мозаики.  Чтобы отключить эффект металлических хлопьев, удалите карту нормалей.
| Coat gloss map  | The [gloss map](geometry-attributes.md) used by the clear coat layer. Change this value to simulate different kinds of paint (eg matte).
|  Карта блеска |  [Карта глянца] (geometry-attributes.md), используемая слоем прозрачного покрытия.  Измените это значение, чтобы имитировать разные виды краски (например, матовую).
| Clear coat metalness map  | The [metalness map](shading-attributes.md) used by the clear coat layer
|  Карта металличности прозрачного покрытия |  [Карта металличности] (shading-attributes.md), используемая слоем прозрачного покрытия.
| Orange peel normal map  | The [normal map](../textures/normal-maps.md) used by the clear coat layer to create an "orange peel" effect. This reflects light in different angles, simulating paint imperfections whereby the texture appears bumpy, like the skin of an orange. An orange peel normal map (**StrideClearCoatOrangePeelNM**) is included in the Stride assets package.
|  Карта нормалей апельсиновой корки |  [Карта нормалей](../textures/normal-maps.md), используемая прозрачным слоем для создания эффекта «апельсиновой корки».  Это отражает свет под разными углами, имитируя дефекты краски, из-за чего текстура кажется бугристой, как кожура апельсина.  Карта нормалей апельсиновой корки (**StrideClearCoatOrangePeelNM**) включена в пакет активов Stride.
| Layer transition distance  | The distance (in meters) at which the base paint layer transitions to the metal flake layer. This helps fight visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).
|  Расстояние перехода слоя |  Расстояние (в метрах), на котором базовый слой краски переходит в слой металлической чешуи.  Это помогает бороться с визуальными артефактами, вызванными картой нормалей металлических хлопьев (которая становится более заметной по мере удаления камеры от материала).

## Reduce tiling and artifacts
## Уменьшить тайлинг и артефакты

Properties that use binary operators should use **normalized values** (ie between `0.0` and `1.0`). For example, in the screenshot below, the **left** operator uses a value of `0.5`.
Свойства, использующие бинарные операторы, должны использовать **нормализованные значения** (т. е. между `0,0` и `1,0`).  Например, на снимке экрана ниже оператор **left** использует значение «0,5».

![Binary operator](media/clear-coat-binary-operator.png)
![Двоичный оператор](media/clear-coat-binary-operator.png)

Values over `1.0` might produce tiling artifacts, as in the image below (note the grid pattern):
Значения выше 1,0 могут привести к артефактам мозаики, как на изображении ниже (обратите внимание на сетку):

![Artifact](media/clear-coat-artifact1.jpg)
![Артефакт](media/clear-coat-artifact1.jpg)

### StrideClearCoatMetalFlakesNM
### StrideClearCoatMetalFlakesNM

The metal flakes in the metal flake normal map included in the Stride assets package (**StrideClearCoatMetalFlakesNM**) are quite large. For this reason, we recommend you: 
Металлические чешуйки на карте нормалей металлических чешуек, включенной в пакет активов Stride (**StrideClearCoatMetalFlakesNM**), довольно велики.  По этой причине мы рекомендуем вам:

* use a high **UV scale factor** which tiles the texture (thereby shrinking the flakes) 
* используйте высокий коэффициент масштабирования **UV**, который мозаично накладывает текстуру (таким образом уменьшая чешуйки)

* enable **Use random texture coordinates**, preventing an obvious tiling effect
* включить **Использовать случайные координаты текстуры**, предотвращая очевидный эффект мозаики

    ![Use random texture coordinates](media/use-random-texture-coordinates.png)
![Использовать случайные координаты текстуры](media/use-random-texture-coordinates.png)

>[!Note]
>[!Примечание]
>The **Use random texture coordinates** option is costly, so we don't recommend you use it for mobile platforms.
>Опция **Использовать случайные координаты текстуры** стоит дорого, поэтому мы не рекомендуем использовать ее для мобильных платформ.

Alternatively, use a normal map with a higher density of smaller metal flakes.
В качестве альтернативы используйте карту нормалей с более высокой плотностью мелких металлических чешуек.

## See also
## Смотрите также

* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material attributes](material-attributes.md)
* [Атрибуты материала](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
* [Атрибуты геометрии](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
* [Атрибуты затенения](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Разные атрибуты](misc-attributes.md)
* [Material layers](material-layers.md)
* [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
