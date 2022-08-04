# Scene renderers
# Рендереры сцены

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Scene renderers** let you customize the **collect** and **draw** phases of the rendering. For more information about these stages, see [Render features](../rendering-pipeline/render-features.md). 
**Визуализаторы сцены** позволяют настраивать этапы **сбора** и **отрисовки** рендеринга.  Дополнительные сведения об этих этапах см. в разделе [Функции рендеринга](../rendering-pipeline/render-features.md).

You select scene renderers in the **entry points** node properties.
Вы выбираете визуализаторы сцены в свойствах узла **entry points**.

![Select renderer](media/connect-entry-point.png)
![Выберите средство визуализации](media/connect-entry-point.png)

For more information about selecting renderers, see the [Graphics compositor](index.md) page.
Дополнительные сведения о выборе средств визуализации см. на странице [Композитор графики](index.md).

>[!Note]
>[!Примечание]
>Currently, **all** renderers must have a camera, or be a child of a renderer that has a camera. This applies even to renderers that don't necessarily use cameras, such as the single stage renderer (eg to render a UI).
>В настоящее время **все** средства визуализации должны иметь камеру или быть дочерними элементами средства визуализации, у которого есть камера.  Это относится даже к средствам визуализации, которые не обязательно используют камеры, например, средствам визуализации с одним этапом (например, для визуализации пользовательского интерфейса).

## Clear
## Чистый

Clears a frame, with a solid color.
Очищает рамку со сплошным цветом.

![Clear properties](media/clear-renderframe-1.png)
![Очистить свойства](media/clear-renderframe-1.png)

### Properties
### Характеристики

| Property      | Description              
|  Недвижимость |  Описание
| ------------- | ----------
|  ------------- |  ----------
| Clear flags   | <br><p>What to clear in the render frame (**Color only**, **Depth only**, or **Color and depth**)
|  Очистить флаги |  <br><p>Что нужно очистить в кадре рендеринга (**Только цвет**, **Только глубина** или **Цвет и глубина**)
| Color         | The color used to clear the color texture of the render frame. Only valid when **Clear Flags** is set to **Color** or **Color and depth**
|  Цвет |  Цвет, используемый для очистки цветовой текстуры кадра рендеринга.  Действует только в том случае, если для параметра **Очистить флаги** установлено значение **Цвет** или **Цвет и глубина**.
| Depth value   | The depth value used to clear the depth texture of the render frame
|  Значение глубины |  Значение глубины, используемое для очистки текстуры глубины кадра рендеринга.
| Stencil value | The stencil value used to clear the stencil texture of the render frame
|  Значение трафарета |  Значение трафарета, используемое для очистки текстуры трафарета кадра рендеринга.

## Camera renderer
## Рендер камеры

Uses @'Stride.Rendering.Compositing.SceneCameraRenderer.Child' to render a view from a [camera slot](../cameras/camera-slots.md). The **render camera** renderer takes the input from a [camera](../cameras/index.md) in the scene so it can be displayed somewhere.
Использует @'Stride.Rendering.Compositing.SceneCameraRenderer.Child' для рендеринга вида из [слота камеры](../cameras/camera-slots.md).  Средство рендеринга **рендеринга камеры** принимает входные данные с [камеры](../cameras/index.md) в сцене, чтобы их можно было где-нибудь отобразить.

![Camera renderer properties](media/render-camera-1.png)
![Свойства средства визуализации камеры](media/render-camera-1.png)

### Properties
### Характеристики

| Property      | Description                                                             
|  Недвижимость |  Описание
| ------------- | ----------
|  ------------- |  ----------
| Camera        | Specify a [camera slot](../cameras/camera-slots.md) to render from
|  Камера |  Укажите [слот для камеры](../cameras/camera-slots.md) для рендеринга.
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
|  Ребенок |  Укажите модуль визуализации для камеры (например, прямой модуль визуализации или пользовательский модуль визуализации).

## Scene renderer collection
## Коллекция рендереров сцен

The **scene renderer collection** executes multiple renderers (eg camera renderer, render texture, etc) in sequence. This lets you set multiple renderers for an entry point. You can add as many renderers to the collection as you need.
**Коллекция средств рендеринга сцены** последовательно выполняет несколько средств рендеринга (например, средство рендеринга камеры, текстуру рендеринга и т. д.).  Это позволяет вам установить несколько рендереров для точки входа.  Вы можете добавить в коллекцию столько рендереров, сколько вам нужно.

>[!Note]
>[!Примечание]
>Stride executes the renderers in list order.
>Stride выполняет рендереры в порядке списка.

To add a renderer to the collection, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the renderer you want to add.
Чтобы добавить средство визуализации в коллекцию, рядом с **Дети** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и  выберите средство визуализации, которое вы хотите добавить.

![Add to scene collection](media/add-renderer-to-scene-renderer-collection.png)
![Добавить в коллекцию сцен](media/add-renderer-to-scene-renderer-collection.png)

## Forward renderer
## Передовой рендерер

In a typical setup, the **forward renderer** renders almost everything in your scene. It renders, in order:
В типичной настройке **прямой рендерер** рендерит почти все в вашей сцене.  Он отображает по порядку:

1. opaque objects
1. непрозрачные объекты
2. transparent objects
2. прозрачные объекты
3. [post effects](../post-effects/index.md)
3. [постэффекты](../post-effects/index.md)

The forward renderer is also where you set VR options. For more information, see [Virtual reality](../../virtual-reality/index.md). 
В прямом рендерере вы также устанавливаете параметры VR.  Для получения дополнительной информации см. [Виртуальная реальность](../../virtual-reality/index.md).

You configure the forward renderer properties in the **forward entry node**. 
Вы настраиваете свойства прямого рендерера в **узле прямого входа**.

## Single stage renderer
## Одноэтапный рендерер

![Single stage renderer](media/single-stage-renderer.png)
![Одноэтапный рендерер](media/single-stage-renderer.png)

## Force aspect ratio scene renderer
## Включить визуализатор сцены с соотношением сторон

Uses @'Stride.Rendering.Compositing.ForceAspectRatioSceneRenderer' to force an aspect ratio and applies a letterbox if the ratio is different from the screen. Use this before the **render camera**.
Использует @'Stride.Rendering.Compositing.ForceAspectRatioSceneRenderer' для принудительного соотношения сторон и применяет почтовый ящик, если соотношение отличается от экрана.  Используйте это перед **рендерингом камеры**.

![Force aspect ratio](media/force-aspect-ratio-properties.png)
![Принудительное соотношение сторон](media/force-aspect-ratio-properties.png)

| Property      | Description                                                             
|  Недвижимость |  Описание
| ------------- | ----------
|  ------------- |  ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
|  Ребенок |  Укажите модуль визуализации для камеры (например, прямой модуль визуализации или пользовательский модуль визуализации).
| Fixed aspect ratio | The aspect ratio to force the view to
|  Фиксированное соотношение сторон |  Соотношение сторон для принудительного просмотра
| Force aspect ratio | Enable forced aspect ratio
|  Соотношение сторон силы |  Включить принудительное соотношение сторон

## Render texture
## Отрисовка текстуры

Renders to a render texture, which you can display in your scene (eg to display security camera footage on a screen). For more information, see [Render textures](render-textures.md).
Визуализирует текстуру рендеринга, которую вы можете отобразить в своей сцене (например, чтобы отобразить кадры с камеры видеонаблюдения на экране).  Для получения дополнительной информации см. [Визуализировать текстуры](render-textures.md).

![Render texture properties](media/render-texture-scene-renderer-properties.png)
![Свойства текстуры рендеринга](media/render-texture-scene-renderer-properties.png)

| Property      | Description                                                             
|  Недвижимость |  Описание
| ------------- | ----------
|  ------------- |  ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
|  Ребенок |  Укажите модуль визуализации для камеры (например, прямой модуль визуализации или пользовательский модуль визуализации).
| Render texture| Specify a texture to render to
|  Визуализировать текстуру|  Укажите текстуру для рендеринга

## Render mask
## Рендер-маска

![Render mask](media/change-render-mask.png)
![Маска рендеринга](media/change-render-mask.png)

The **render mask** filters which groups are rendered. You can use it to only render particular models. For more information, see [Render groups and render masks](render-groups-and-masks.md)
**Маска рендеринга** фильтрует, какие группы рендерятся.  Вы можете использовать его только для рендеринга определенных моделей.  Дополнительные сведения см. в разделе [Группы рендеринга и маски рендеринга](render-groups-and-masks.md).

## See also
## Смотрите также

* [Graphics compositor](index.md)
* [Композитор графики](index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Слоты для камеры](../cameras/camera-slots.md)
* [Custom scene renders](custom-scene-renderers.md)
* [Пользовательские рендеры сцен](custom-scene-renderers.md)
* [Debug renderers](debug-renderers.md)
* [Отладка рендереров](debug-renderers.md)
* [Render groups and render masks](render-groups-and-masks.md)
* [Группы рендеринга и маски рендеринга](render-groups-and-masks.md)
