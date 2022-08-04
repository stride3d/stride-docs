# Subsurface scattering
# Подповерхностное рассеяние

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

When you enable **subsurface scattering** on a material, light is reflected at irregular angles inside the model. You can use this to realistically render translucent materials such as skin, wax, leaves, marble, and porcelain.
Когда вы включаете **подповерхностное рассеяние** на материале, свет отражается под неправильными углами внутри модели.  Вы можете использовать это для реалистичной визуализации полупрозрачных материалов, таких как кожа, воск, листья, мрамор и фарфор.

The photo below demonstrates a real-life example of the effect:
Фото ниже демонстрирует реальный пример эффекта:

![Photo](media/skin-subsurface-scattering-photo.jpg)
![Фото](media/skin-subsurface-scattering-photo.jpg)

*(Image courtesy of Davepoo2014, shared under [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en))*
*(Изображение предоставлено Davepoo2014, предоставлено согласно [Международной лицензии Creative Commons Attribution-Share Alike 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en))*

The screenshots below demonstrate the use of subsurface scattering in Stride to render wax:
Скриншоты ниже демонстрируют использование подповерхностного рассеяния в Stride для рендеринга воска:

| Subsurface scattering off       | Subsurface scattering on
|  Подповерхностное рассеяние выключено |  Подповерхностное рассеяние на
|---------------------------------|------------------------
|---------------------------------|----------------  ---------
| ![On](media/candles-ss-off.jpg) | ![Off](media/candles-ss-on.jpg)
|  ![Вкл.](media/candles-ss-off.jpg) |  ![Выкл.](media/candles-ss-on.jpg)

The shadows are much softer in the second image, as more light passes through the candles.
Тени на втором изображении намного мягче, так как через свечи проходит больше света.

## Enable subsurface scattering
## Включить подповерхностное рассеивание

1. Select the material you want to use subsurface shading.
1. Выберите материал, для которого вы хотите использовать подповерхностное затенение.

2. In the Property Grid, under **Shading**, next to **Subsurface scattering**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Subsurface scattering**.
2. В таблице свойств в разделе **Затенение** рядом с **Подповерхностное рассеивание** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (  **Заменить**) и выберите **Подповерхностное рассеивание**.

    ![Enable subsurface scattering](media/enable-subsurface-scattering.png)
![Включить подповерхностное рассеяние](media/enable-subsurface-scattering.png)

## Properties
## Характеристики

![Properties](media/subsurface-scattering-properties.png)
![Свойства](media/subsurface-scattering-properties.png)

| Property           | Function
|  Недвижимость |  Функция
|--------------------|--------------------
|--------------------|------
| Scattering width   | How far the light scatters in [world units](../../game-studio/world-units.md)
|  Ширина рассеяния |  Как далеко рассеивается свет в [worldunits](../../game-studio/world-units.md)
| Translucency       | How much light pentrates the material. `0.0` is no translucency; `1.0` is max.
|  Прозрачность |  Сколько света проникает в материал.  «0.0» — отсутствие прозрачности;  «1.0» — это макс.
| Translucency map   | Specify a [grayscale map](material-maps.md) to control how translucent different regions of the material are. Brighter values produce more scattering. For example, ears should scatter more light than the top of the head, because they're thinner and therefore light passes through them more easily. The texture is multiplied by the **Translucency** parameter.
|  Карта прозрачности |  Укажите [карту в градациях серого](material-maps.md), чтобы управлять прозрачностью различных областей материала.  Более яркие значения вызывают большее рассеяние.  Например, уши должны рассеивать больше света, чем макушка, потому что они тоньше и поэтому свет проходит через них легче.  Текстура умножается на параметр **Translucency**.
| Scattering profile | The scattering profile to use during the forward render pass. <p><br>**Skin:** A preconfigured shader for rendering skin <p><br>**Custom (skin-based):** A profile based on the Skin profile you can customize yourself
|  Профиль рассеяния |  Профиль рассеивания для использования во время прямого прохода рендеринга.  <p><br>**Скин:** предварительно настроенный шейдер для рендеринга скина. <p><br>**Пользовательский (на основе скина):** профиль, основанный на профиле скина, который вы можете настроить самостоятельно.
| Scattering kernel  | The scattering kernel to use in the subsurface scattering post process. <p><br>**Falloff:** Scattered light is masked to this color. For example, in the screenshot of the candles, the light fades to an orange-yellow. <p><br>**Strength:** Fades to this color
|  Ядро рассеяния |  Ядро рассеяния для использования в постобработке подповерхностного рассеяния.  <p><br>**Затухание:** Рассеянный свет маскируется этим цветом.  Например, на скриншоте со свечами свет становится оранжево-желтым.  <p><br>**Стойкость:** Окрашивается до этого цвета

| Transluency: `0.2`                        | Transluency: `0.98`
|  Прозрачность: «0,2» |  Прозрачность: `0,98`
|-------------------------------------------|--------------------
|----------------------------------------------------------|-----  ---------------
| ![On](media/candles-translucency-02.jpg)  | ![Off](media/candles-translucency-98.jpg)
|  ![On](media/candles-translucency-02.jpg) |  ![Выкл.](media/candles-translucency-98.jpg)

## Graphics compositor options
## Опции графического компоновщика

There are additional subsurface scattering options in the **[graphics compositor editor](../graphics-compositor/index.md)**. These options apply globally to **all** materials that use subsurface scattering.
В **[графическом редакторе](../graphics-compositor/index.md)** есть дополнительные параметры подповерхностного рассеяния.  Эти параметры применяются глобально ко **всем** материалам, использующим подповерхностное рассеяние.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)
![Актив графического композитора](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

2. Select the **Subsurface scattering** node.
2. Выберите узел **Подповерхностное рассеяние**.

    ![Select node](media/select-subsurface-scattering-node.png)
![Выбрать узел](media/select-subsurface-scattering-node.png)

3. In the **Property Grid** (on the right by default), edit the properties.
3. В **Сетке свойств** (по умолчанию справа) отредактируйте свойства.

    ![Subsurface scattering blur](media/subsurface-scattering-blur-properties.png)
![Размытие подповерхностного рассеяния](media/subsurface-scattering-blur-properties.png)

### Properties
### Характеристики

| Property       | Function
|  Недвижимость |  Функция
|----------------|-----------
|----------------|-----------
| Follow surface | Prevent light scattering across large depth differences. Affects GPU performance.
|  Следуйте поверхности |  Предотвращает рассеивание света при больших перепадах глубины.  Влияет на производительность графического процессора.
| Passes         | The number of times the blur is executed. More passes produce smoother results (less noise and banding).
|  Проходит |  Количество раз, когда выполняется размытие.  Больше проходов дает более гладкие результаты (меньше шума и полос).
| Jitter kernel size | Use noise to reduce banding artifacts caused by undersampling. Creates a smoother effect, but is technically less accurate (sometimes noticeable at close distances).
|  Размер ядра джиттера |  Используйте шум, чтобы уменьшить артефакты полос, вызванные недостаточной дискретизацией.  Создает более плавный эффект, но технически менее точен (иногда заметен на близком расстоянии).
| Render mode    | Change the render mode for debugging purposes
|  Режим рендеринга |  Измените режим рендеринга в целях отладки

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
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
