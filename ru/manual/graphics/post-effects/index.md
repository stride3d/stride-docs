# Post effects
# Пост-эффекты

**Post effects** are usually applied after your game has completed the rendering of a frame, but before the UI is drawn. You can use post effects to tune or embellish an image — for example, by producing a more natural, realistic look, or creating stylized cinematic effects.
**Постэффекты** обычно применяются после завершения рендеринга кадра в игре, но до отрисовки пользовательского интерфейса.  Вы можете использовать пост-эффекты для настройки или украшения изображения, например, придавая ему более естественный, реалистичный вид или создавая стилизованные кинематографические эффекты.

![media/post-effects-reference-1.png](media/post-effects-reference-1.png) 
![media/post-effects-reference-1.png](media/post-effects-reference-1.png)

Post effects are usually applied to an image. This means they have no connection with vertices or meshes. They only work with the color values of each pixel (and sometimes their depth).
Пост-эффекты обычно применяются к изображению.  Это означает, что они не связаны с вершинами или сетками.  Они работают только со значениями цвета каждого пикселя (а иногда и с их глубиной).

Typically, you set up a post effect by specifying:
Как правило, вы настраиваете пост-эффект, указав:

- input buffers (eg color, depth)
- входные буферы (например, цвет, глубина)
- one or several output buffers
- один или несколько выходных буферов
- parameters to customize the behavior of the post effect during its rendering pass
- параметры для настройки поведения пост-эффекта во время его рендеринга

Stride provides several predefined post effects. You can also [extend the system to create your own color transform effects](color-transforms/custom-color-transforms.md).
Stride предоставляет несколько предопределенных пост-эффектов.  Вы также можете [расширить систему для создания собственных эффектов преобразования цвета](color-transforms/custom-color-transforms.md).

>[!Note]
>[!Примечание]
>Depth-aware post effects ̶  ie [depth of field](depth-of-field.md), ambient occlusion, and [local reflections](local-reflections.md) ̶  nullify MSAA (multisample anti-aliasing).
>Пост-эффекты с учетом глубины, т. е. [глубина резкости](depth-of-field.md), окружающая окклюзия и [локальные отражения](local-reflections.md) ̶ сводят на нет MSAA (мультисэмпловое сглаживание).

## Add or edit a post effect
## Добавить или отредактировать пост-эффект

You add and edit post effects in the [graphics compositor](../graphics-compositor/index.md).
Вы добавляете и редактируете пост-эффекты в [графическом компоновщике](../graphics-compositor/index.md).

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](..\graphics-compositor\media\graphics-compositor-asset.png)
![Ресурс графического компоновщика](..\graphics-compositor\media\graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](..\graphics-compositor\media\graphics-compositor-editor.png)
![Редактор графического редактора](..\graphics-compositor\media\graphics-compositor-editor.png)

2. Select the **Post-processing effects** node.
2. Выберите узел **Эффекты постобработки**.

    > [!Tip]
> [!Подсказка]
    > If there's no post-process effects node, right-click and select **Create > post-processing effects** to create one. On the new **forward renderer** node, on the **PostEffects** slot, click and drag a link to the **post-processing effects** node.
> Если узел эффектов постобработки отсутствует, щелкните правой кнопкой мыши и выберите **Создать > эффекты постобработки**, чтобы создать его.  На новом узле **прямой рендеринг**, в слоте **PostEffects** щелкните и перетащите ссылку на узел **эффектов постобработки**.
    > ![Connect nodes](media/connect-nodes.png)
> ![Подключить узлы](media/connect-nodes.png)

3. In the **Property Grid** (on the right by default), enable the post effects you want to use and configure their properties.
3. В **Сетке свойств** (по умолчанию справа) включите пост-эффекты, которые вы хотите использовать, и настройте их свойства.

    ![Post effect properties](media/post-effect-properties.png)
![Свойства пост-эффекта](media/post-effect-properties.png)

    For details about each post effect and its properties, see the pages below.
Подробнее о каждом пост-эффекте и его свойствах см. на страницах ниже.

## In this section
## В этой секции

* [Anti-aliasing](anti-aliasing.md)
* [Сглаживание](anti-aliasing.md)
* [Fog](fog.md)
* [Туман](fog.md)
* [Outline](outline.md)
* [Контур](контур.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Окружающая окклюзия] (ambient-occlusion.md)
* [Bloom](bloom.md)
* [Блум](bloom.md)
* [Bright filter](bright-filter.md)
* [Яркий фильтр] (bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Цветовые преобразования](color-transforms/index.md)
    * [Film grain](color-transforms/film-grain.md)
* [Зернистость пленки](color-transforms/film-grain.md)
    * [Gamma correction](color-transforms/gamma-correction.md)
* [Гамма-коррекция](color-transforms/gamma-correction.md)
    * [ToneMap](color-transforms/tonemap.md)
* [ToneMap](color-transforms/tonemap.md)
    * [Vignetting](color-transforms/vignetting.md)
* [Виньетирование](color-transforms/vignetting.md)
    * [Custom color transforms](color-transforms/custom-color-transforms.md)
* [Пользовательские преобразования цвета](color-transforms/custom-color-transforms.md)
* [Depth of field](depth-of-field.md)
* [Глубина резкости](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Блики](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Светлые полосы](light-streaks.md)
* [Local reflections](local-reflections.md)
* [Локальные отражения](local-reflections.md)

## See also
## Смотрите также

* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
