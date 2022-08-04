# Material layers
# Материальные слои

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

You can combine layers of materials to build more complex materials. For example, this screenshot shows the blending of a rust material (left) with a gold material (right):
Вы можете комбинировать слои материалов для создания более сложных материалов.  Например, на этом снимке экрана показано смешивание материала ржавчины (слева) с материалом золота (справа):

![media/material-layers-2.png](media/material-layers-2.png) 
![media/material-layers-2.png](media/material-layers-2.png)

This diagram shows the definition of the materials blended in the screenshot above:
На этой диаграмме показано определение материалов, смешанных на снимке экрана выше:

![media/material-layers-3.png](media/material-layers-3.png)
![media/material-layers-3.png](media/material-layers-3.png)

## Blend maps
## Карты смешивания

**Blend maps** are [material maps](material-maps.md) that determine how Game Studio blends layers. For example, you can use a texture as a blend map:
**Карты смешивания** — это [карты материалов](material-maps.md), которые определяют, как Game Studio смешивает слои.  Например, вы можете использовать текстуру в качестве карты смешивания:

![Blend map diagram](media/blend-map-diagram.png)
![Схема карты смешивания](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)
![Схема карты смешивания](media/blend-map-diagram2.png)

Note how the blend map texture corresponds to the patterning on the result.
Обратите внимание, как текстура карты смешивания соответствует рисунку в результате.

Blend maps work the same way as any other kind of material map. For more information, see [Material maps](material-maps.md).
Карты смешивания работают так же, как и любые другие карты материалов.  Для получения дополнительной информации см. [Material maps](material-maps.md).

## Shading models
## Модели затенения

Stride blends materials differently depending on whether their shading models (eg diffuse models, specular models, etc) are different.
Stride по-разному смешивает материалы в зависимости от того, различаются ли их модели затенения (например, диффузные модели, зеркальные модели и т. д.).

If you blend materials that have **identical** shading models, Stride collects the **attributes** of the materials, then applies the shading models to all of them. This saves GPU.
Если вы смешиваете материалы с **идентичными** моделями затенения, Stride собирает **атрибуты** материалов, а затем применяет модели затенения ко всем из них.  Это экономит GPU.

If the materials have **different** shading models, Stride applies each material's shading models to that material's attributes, then blends the results. This uses more GPU.
Если материалы имеют **разные** модели затенения, Stride применяет модели затенения каждого материала к атрибутам этого материала, а затем смешивает результаты.  Это использует больше GPU.

## Add a layer
## Добавить слой

1. Select the material you want to add a layer to.
1. Выберите материал, к которому вы хотите добавить слой.

2. In the **Property Grid** (on the right by default), next to **Layers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
2. В **Сетке свойств** (по умолчанию справа) рядом с **Слоями** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.  png) (**Добавить**).

    ![Add a layer](media/add-a-layer.png)
![Добавить слой](media/add-a-layer.png)

    Game Studio adds a layer to the material.
Game Studio добавляет слой к материалу.

    ![Empty layer](media/empty-layer.png)
![Пустой слой](media/empty-layer.png)

3. Next to the layer, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
3. Рядом со слоем нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите ресурс**).

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select an asset](media/material-asset-picker.png)
![Выберите ресурс](media/material-asset-picker.png)

4. Specify a material you want to add as a layer and click **OK**.
4. Укажите материал, который вы хотите добавить в качестве слоя, и нажмите **ОК**.

    Game Studio adds the material as a layer.
Game Studio добавляет материал в виде слоя.
    
    ![Added layer](media/added-layer.png)
![Добавленный слой](media/added-layer.png)

5. Next to **Blend Map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the type of blend map you want to use to blend the layers. For more information about blend maps, see [Material maps](material-maps.md).
5. Рядом с **Карта смешивания** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите тип смешивания.  карту, которую вы хотите использовать для смешивания слоев.  Дополнительные сведения о картах смешивания см. в разделе [Карты материалов](material-maps.md).

    ![Select blend map](media/select-blend-map.png)
![Выбрать карту смешивания](media/select-blend-map.png)

Game Studio blends the material layers using the blend map you specified. You can add as many layers as you need.
Game Studio смешивает слои материала, используя указанную вами карту смешивания.  Вы можете добавить столько слоев, сколько вам нужно.

## Layer properties
## Свойства слоя

| Property        | Description 
|  Недвижимость |  Описание
| --------------- | --------------- 
|  --------------- |  ---------------
| Material        | The material blended in this layer
|  Материал |  Материал, смешанный в этом слое
| Blend Map       | The [blend map](material-maps.md) used to blend this layer with the layer above
|  Карта смешивания |  [blend map](material-maps.md), используемый для смешивания этого слоя со слоем выше.
| Layer Overrides |  **UV Scale**: A UV scale applied to all textures UV of the material of the layer (excluding the occlusion map)
|  Переопределения слоев |  **UV Scale**: UV-масштаб, применяемый ко всем текстурам UV материала слоя (за исключением карты окклюзии).

## See also
## Смотрите также

* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material attributes](material-attributes.md)
* [Атрибуты материала](material-attributes.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
