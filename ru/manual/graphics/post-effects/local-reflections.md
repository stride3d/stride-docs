# Local reflections
# Локальные отражения

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

>[!Warning]
>[!Предупреждение]
>Currently, local reflections aren't compatible with mobile platforms and cause crashes.
>В настоящее время локальные отражения несовместимы с мобильными платформами и вызывают сбои.

>[!Note]
>[!Примечание]
>As with other depth-aware post effects, enabling local reflections nullifies MSAA (multisample anti-aliasing).
> Как и в случае с другими пост-эффектами с учетом глубины, включение локальных отражений сводит на нет MSAA (многосемпловое сглаживание).

When **local reflections** are enabled, the scene is reflected in glossy [materials](../materials/index.md).
Когда включены **локальные отражения**, сцена отражается в глянцевых [материалах](../materials/index.md).

![Local reflections](media/local-reflections.jpg)
![Местные отражения](media/local-reflections.jpg)

Local reflections dramatically increase the realism of scenes. They're most obvious when they reflect bright spots onto other surfaces. The effect is especially striking in dark scenes, which have high contrast, and in conditions with lots of reflective surfaces and highlights.
Локальные отражения резко повышают реалистичность сцен.  Они наиболее очевидны, когда они отражают яркие пятна на другие поверхности.  Эффект особенно заметен в темных сценах с высокой контрастностью, а также в условиях большого количества отражающих поверхностей и бликов.

![Night reflections](media/night-reflections.jpg)
![Ночные отражения](media/night-reflections.jpg)

## Where to use local reflections
## Где использовать локальные отражения

Local reflections are a **screenspace effect**, which means they only reflect objects that are already on the screen; they don't reflect objects that are offscreen or obscured by other objects. Put simply, if the camera can't see an object at that moment, then that object isn't reflected.
Локальные отражения — это **эффект экранного пространства**, то есть они отражают только те объекты, которые уже находятся на экране;  они не отражают объекты, находящиеся за кадром или закрытые другими объектами.  Проще говоря, если камера не может видеть объект в этот момент, то этот объект не отражается.

This means local reflections work well in enclosed areas such as corridors and rooms, but less well in open spaces, where you'd expect more of the world to be reflected. They also work best on bumpy surfaces, which hide imperfections in reflections, and less well on very glossy, mirror-like surfaces. Missing reflections are noticeable in mirrors, for example.
Это означает, что локальные отражения хорошо работают в закрытых помещениях, таких как коридоры и комнаты, но хуже на открытых пространствах, где вы ожидаете отражения большей части мира.  Они также лучше всего работают на неровных поверхностях, которые скрывают дефекты отражений, и хуже на очень глянцевых, зеркальных поверхностях.  Недостающие отражения заметны, например, в зеркалах.

## Algorithm
## Алгоритм

Stride processes local reflections in four passes:
Stride обрабатывает локальные отражения за четыре прохода:

1. The **raycast** pass performs screenspace ray tracing over the depth buffer to find intersections.
1. Проход **raycast** выполняет трассировку лучей в экранном пространстве по буферу глубины для поиска пересечений.

2. The **resolve** pass resolves the rays and calculates the reflection color.
2. Проход **resolve** разрешает лучи и вычисляет цвет отражения.

3. The **temporal** pass uses the history buffer to blur constantly between the current and previous frames. This reduces noise in the reflection, but produces an animated "jittering" effect that is sometimes noticeable. You can adjust or disable this step to create the effect you want.
3. **временной** проход использует буфер истории для постоянного размытия между текущим и предыдущим кадрами.  Это уменьшает шум в отражении, но создает анимированный эффект «дрожания», который иногда бывает заметен.  Вы можете настроить или отключить этот шаг, чтобы создать желаемый эффект.

4. The **combine** pass mixes the results of the effect with the rendered image.
4. Проход **combine** смешивает результаты эффекта с визуализированным изображением.

## Enable local reflections
## Включить локальные отражения

To use local reflections, enable the effect in the **graphics compositor**.
Чтобы использовать локальные отражения, включите эффект в **графическом компоновщике**.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)
![Редактор графического компоновщика](../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **post-processing effects** node.
2. Выберите узел **эффекты постобработки**.

    > [!Tip]
> [!Подсказка]
    > If there's no post-process effects node, right-click and select **Create > post-processing effects** to create one. On the new **forward renderer** node, on the **PostEffects** slot, click and drag a link to the **post-processing effects** node.
> Если узел эффектов постобработки отсутствует, щелкните правой кнопкой мыши и выберите **Создать > эффекты постобработки**, чтобы создать его.  На новом узле **прямой рендеринг**, в слоте **PostEffects** щелкните и перетащите ссылку на узел **эффектов постобработки**.
    
    > ![Connect nodes](media/connect-nodes.png)
> ![Подключить узлы](media/connect-nodes.png)

3. In the **Property Grid** (on the right by default), enable **Local reflections**.
3. В **Сетке свойств** (по умолчанию справа) включите **Локальные отражения**.

    ![Enable local reflections](media/enable-local-reflections.png)
![Включить локальные отражения](media/enable-local-reflections.png)

After you enable local reflections, the scene is reflected in glossy materials. 
После того, как вы включите локальные отражения, сцена будет отражаться в глянцевых материалах.
You can use the **gloss threshold** (see below) to set how glossy materials should be to reflect the scene. 
Вы можете использовать **порог блеска** (см. ниже), чтобы установить, насколько глянцевыми должны быть материалы для отражения сцены.

## Properties
## Характеристики

The local reflections properties affect all reflections in the scene.
Свойства локальных отражений влияют на все отражения в сцене.

### Raycast properties
### Свойства Raycast

![Raycast properties](media/ray-trace-properties.png)
![Свойства Raycast](media/ray-trace-properties.png)

#### BRDF bias
#### смещение BRDF

The reflection spread. Higher values provide finer, more mirror-like reflections. This setting has no effect on performance. The default value is `0.82`.
Отражение распространилось.  Более высокие значения обеспечивают более тонкие, более зеркальные отражения.  Этот параметр не влияет на производительность.  Значение по умолчанию — «0,82».

| BRDF: `0.6` | BRDF: `0.8` | BRDF: `1.0`  
|  BRDF: `0,6` |  BRDF: `0,8` |  BRDF: `1.0`
|---------------------|---------|---------
|--------------------|----------|---------
| ![BRDF: 0.6](media/brdf-06.jpg) | ![BRDF: 0.8](media/brdf-08.jpg) | ![BRDF: 1.0](media/brdf-10.jpg)
|  ![BRDF: 0.6](media/brdf-06.jpg) |  ![BRDF: 0.8](media/brdf-08.jpg) |  ![BRDF: 1.0](media/brdf-10.jpg)

#### Depth resolution
#### Разрешение по глубине

Downscales the depth buffer to optimize raycast performance. Full gives better quality, but half improves performance. The default is half.
Уменьшает буфер глубины для оптимизации производительности raycast.  Полный дает лучшее качество, но половинный улучшает производительность.  По умолчанию половина.

#### Gloss threshold
#### Порог блеска

The amount of gloss a material must have to reflect the scene. For example, if this value is set to `0.4`, only materials with a **gloss map** value of `0.4` or above reflect the scene. The default value is `0.55`.
Количество блеска, которое должен иметь материал, чтобы отражать сцену.  Например, если для этого значения установлено значение «0,4», только материалы со значением **карты блеска**, равным «0,4» или выше, отражают сцену.  Значение по умолчанию — «0,55».

>[!Note]
>[!Примечание]
>If the **Invert** check box is selected in the material **micro surface** properties, the opposite is true. For example, if the reflections gloss value is set to `0.4`, only materials with a **gloss map** value of less than `0.4` reflect the scene.
>Если в свойствах материала **микроповерхность** установлен флажок **Инвертировать**, происходит обратное.  Например, если значение блеска отражений установлено на «0,4», только материалы со значением **карты блеска** меньше «0,4» отражают сцену.

For more information about gloss, see [Materials — geometry attributes](../materials/geometry-attributes.md).
Для получения дополнительной информации о глянце см. [Материалы — атрибуты геометрии](../materials/geometry-attributes.md).

#### Max steps 
#### Максимальное количество шагов

The maximum number of raycast steps allowed per pixel. Higher values produce better results, but worse performance. The default value is `60`. 
Максимальное количество шагов raycast, разрешенных на пиксель.  Более высокие значения дают лучшие результаты, но худшую производительность.  Значение по умолчанию `60`.

>[!Note]
>[!Примечание]
>This is the most important property for controlling performance.
>Это самое важное свойство для управления производительностью.

#### Resolution
#### Разрешение

The raycast resolution. There are two options: **full** and **half**. Full gives better quality, but half improves performance. The default value is half.
Разрешение рейкаста.  Есть два варианта: **полный** и **половина**.  Полный дает лучшее качество, но половинный улучшает производительность.  Значение по умолчанию — половина.

#### Ray start bias
#### Начальное смещение луча

The offset of the raycast origin. Lower values produce more correct reflection placement, but produce more artifacts. We recommend values of `0.03` or lower. The default value is `0.01`.
Смещение источника raycast.  Более низкие значения обеспечивают более правильное размещение отражения, но создают больше артефактов.  Мы рекомендуем значения «0,03» или ниже.  Значение по умолчанию — «0,01».

| Start bias: `0.01` | Start bias: `0.1`
|  Начальное смещение: `0,01` |  Начальное смещение: `0,1`
|---------------------|---------
|---------------------|---------
|  ![Start bias: 0.03](media/low-ray-start-bias.jpg) |   ![Start bias: 0.1](media/high-ray-start-bias.jpg)
|  ![Начальное смещение: 0,03](media/low-ray-start-bias.jpg) |  ![Начальное смещение: 0,1](media/high-ray-start-bias.jpg)
| Larger gap between reflection and box (more correct) | Narrower gap between reflection and box (less correct)
|  Больший зазор между отражением и коробкой (более правильно) |  Более узкий зазор между отражением и коробкой (менее правильный)

### Resolve properties
### Разрешить свойства

![Resolve properties](media/resolve-properties.png)
![Свойства разрешения](media/resolve-properties.png)

#### Resolution 
#### Разрешение

Calculates reflection color using raycast results. There are two options: **full** and **half**. Full gives the best results, but half improves performance. The default value is **full**.
Вычисляет цвет отражения, используя результаты raycast.  Есть два варианта: **полный** и **половина**.  Полный дает наилучшие результаты, но половина улучшает производительность.  Значение по умолчанию — **полный**.

#### Samples 
#### Образцы

The number of rays used to resolve the reflection color. Higher values produce less noise, but worse performance. The default value is `4`.
Количество лучей, используемых для разрешения цвета отражения.  Чем выше значение, тем меньше шума, но хуже производительность.  Значение по умолчанию — «4».

#### Reduce highlights
#### Уменьшить блики

Reduces the brightness of particularly bright areas of reflections. This has no effect on performance.
Уменьшает яркость особенно ярких областей отражений.  Это не влияет на производительность.

| Reduce highlights: on | Reduce highlights: off
|  Уменьшить блики: вкл |  Уменьшить блики: выкл.
|---------------------|---------
|---------------------|---------
|  ![Edge fade factor: 0.5](media/reduce-highlights-on.jpg) | ![Edge fade factor: 0](media/reduce-highlights-off.jpg) 
|  ![Коэффициент затухания краев: 0,5](media/reduce-highlights-on.jpg) |  ![Коэффициент затухания краев: 0](media/reduce-highlights-off.jpg)

#### Edge fade factor
#### Фактор затухания края

The point at which the far edges of the reflection begin to fade. This has no effect on performance. The default value is `0.1`. 
Точка, в которой дальние края отражения начинают исчезать.  Это не влияет на производительность.  Значение по умолчанию — «0,1».

| Edge fade factor: `0` | Edge fade factor: `0.5`
|  Коэффициент затухания края: `0` |  Коэффициент затухания края: `0,5`
|---------------------|---------
|---------------------|---------
|  ![Edge fade factor: 0](media/zero-edgefade.jpg) |   ![Edge fade factor: 0.5](media/half-edgefade.jpg) 
|  ![Коэффициент затухания краев: 0](media/zero-edgefade.jpg) |  ![Коэффициент затухания края: 0,5](media/half-edgefade.jpg)

#### Use color buffer mips 
#### Использовать mips цветового буфера

Downscales the input color buffer and uses blurred mipmaps when resolving the reflection color. This produces more realistic results by blurring distant parts of reflections in rough (low-gloss) materials. It also improves performance on most platforms. However, it uses more memory, so you might want to disable it on (for example) mobile platforms.
Уменьшает масштаб входного цветового буфера и использует размытые MIP-карты при разрешении цвета отражения.  Это дает более реалистичные результаты за счет размытия отдаленных частей отражений в шероховатых (маловатых) материалах.  Это также повышает производительность на большинстве платформ.  Однако он использует больше памяти, поэтому вы можете отключить его (например) на мобильных платформах.

### Temporal properties
### Временные свойства

![Temporal properties](media/temporal-properties.png)
![Временные свойства](media/temporal-properties.png)

#### Temporal effect
#### Временной эффект

Enables the temporal pass. This reduces noise, but produces an animated "jittering" effect that is sometimes noticeable. The temporal effect is enabled by default.
Включает временной проход.  Это уменьшает шум, но создает анимированный эффект «дрожания», который иногда заметен.  Временной эффект включен по умолчанию.

| Temporal effect: on | Temporal effect: off
|  Временной эффект: на |  Временной эффект: выключен
|---------------------|---------
|---------------------|---------
| ![Temporal effect enabled](media/temporal-effect-enabled.jpg)| ![Temporal effect disabled](media/temporal-effect-disabled.jpg)
|  ![Временный эффект включен](media/temporal-effect-enabled.jpg)|  ![Временной эффект отключен](media/temporal-effect-disabled.jpg)

>[!Note]
>[!Примечание]
>If the temporal effect is disabled, the other temporal properties have no effect.
>Если временной эффект отключен, другие временные свойства не действуют.

#### Response
#### Ответ

How quickly reflections blend between the reflection in the current frame and the history buffer. Lower values produce reflections faster, but with more jittering.   Note the jittering in the reflection below:
Насколько быстро смешиваются отражения между отражением в текущем кадре и буфером истории.  Меньшие значения создают отражения быстрее, но с большим дрожанием.  Обратите внимание на дрожание в отражении ниже:

![Jittering](media/response-jiterring.gif) 
![Дрожание](media/response-jiterring.gif)

If the camera in your game doesn't move much, we recommend values closer to `1`. The default value is `0.9`.
Если камера в вашей игре мало двигается, мы рекомендуем значения ближе к «1».  Значение по умолчанию — «0,9».

#### Scale
#### Шкала

The intensity of the temporal effect. Lower values produce reflections faster, but with more noise. The default value is `4`.
Интенсивность временного эффекта.  Меньшие значения производят отражения быстрее, но с большим количеством шума.  Значение по умолчанию — «4».

## See also
## Смотрите также

* [Materials](../materials/index.md)
* [Материалы](../materials/index.md)
* [Materials — geometry attributes](../materials/geometry-attributes.md)
* [Материалы — атрибуты геометрии](../materials/geometry-attributes.md)
* [Post effects](index.md)
* [Постэффекты](index.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
