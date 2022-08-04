# Graphics compositor
# Композитор графики

<span class="label label-doc-level">Advanced</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

>[!Note]
>[!Примечание]
>This page requires a basic understanding of graphics pipelines.
>Эта страница требует базового понимания графических конвейеров.

The **graphics compositor** organizes how [scenes](../../game-studio/scenes.md) are rendered. You can use it to customize almost every part of the rendering pipeline. For example, you can:
**Композитор графики** организует рендеринг [сцен](../../game-studio/scenes.md).  Вы можете использовать его для настройки почти каждой части конвейера рендеринга.  Например, вы можете:

- use one or multiple [cameras](../cameras/index.md)
- использовать одну или несколько [камер](../cameras/index.md)
- filter entities
- фильтровать объекты
- render to one or more [render textures](render-textures.md), with different viewports
- визуализировать в одну или несколько [текстур рендеринга](render-textures.md), с разными окнами просмотра
- set HDR or LDR rendering
- установить HDR или LDR рендеринг
- apply [post effects](../post-effects/index.md) to a render target, selected before or after rendering a camera
- применить [постэффекты](../post-effects/index.md) к цели рендеринга, выбранной до или после рендеринга камеры
- clear a render target or clear only the depth buffer (eg to always render on top of a render target in a FPS game, or render the UI)
- очистить цель рендеринга или очистить только буфер глубины (например, чтобы всегда отображать поверх цели рендеринга в игре FPS или отображать пользовательский интерфейс)
- modify the compositor from scripts (or any animation system), for example to modify post effects
- изменить композитор из скриптов (или любой системы анимации), например, для изменения пост-эффектов

## Create a graphics compositor
## Создать графический компоновщик

Stride includes a graphics compositor when you create a project.
Stride включает графический компоновщик при создании проекта.

If you need to create another graphics compositor, in the **Asset View**, click **Add asset** and select **Misc > Graphics compositor**.
Если вам нужно создать еще один графический компоновщик, в **Просмотре ресурсов** нажмите **Добавить ресурс** и выберите **Разное > Графический компоновщик**.

![Add graphics compositor](media/add-graphics-compositor.png)
![Добавить компоновщик графики](media/add-graphics-compositor.png)

You can choose one of two presets:
Вы можете выбрать один из двух пресетов:

* Level 10 (HDR with [post effects](../post-effects/index.md))
* Уровень 10 (HDR с [постэффектами](../post-effects/index.md))
* Level 9 (LDR with no post effects)
* Уровень 9 (LDR без постэффектов)

## Set the graphics compositor
## Установить графический компоновщик

You can have multiple graphics compositors in your project, but you can only use one compositor at a time. At runtime, Stride uses the graphics compositor you specify in [Game Settings](../../game-studio/game-settings.md).
В вашем проекте может быть несколько графических компоновщиков, но одновременно вы можете использовать только один компоновщик.  Во время выполнения Stride использует компоновщик графики, указанный вами в [Настройки игры](../../game-studio/game-settings.md).

![Set default scene](../../game-studio/media/game-settings-graphics-compositor.png)
![Установить сцену по умолчанию](../../game-studio/media/game-settings-graphics-compositor.png)

You can also change the graphics compositor at runtime in a script. 
Вы также можете изменить компоновщик графики во время выполнения скрипта.

## Open the graphics compositor editor
## Открыть редактор графического компоновщика

You customize the graphics compositor in the **graphics compositor editor**.
Вы настраиваете компоновщик графики в **редакторе графического компоновщика**.

>[!Note]
>[!Примечание]
>The graphics compositor editor is an experimental feature.
> Редактор графического компоновщика является экспериментальной функцией.

In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

![Graphics Compositor asset](media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](media/graphics-compositor-asset.png)

The **graphics compositor editor** opens.
Откроется **редактор графического компоновщика**.

![Graphics Compositor editor](media/graphics-compositor-editor.png)
![Редактор графического компоновщика](media/graphics-compositor-editor.png)

## Nodes
## Узлы

The graphics compositor editor is divided into **nodes**. You can set the properties of each node in the **Property Grid** on the right.
Редактор графического компоновщика разделен на **узлы**.  Вы можете установить свойства каждого узла в **Сетке свойств** справа.

### Entry points
### Точки входа

In the **Entry Points** node, you configure the pipeline for each entry point.
В узле **Точки входа** вы настраиваете конвейер для каждой точки входа.

![Entry points node](media/entry-points-node.png)
![Узел точек входа](media/entry-points-node.png)

There are three entry points:
Есть три точки входа:

* **Game**, to render your game
* **Игра**, чтобы визуализировать вашу игру
* **Editor**, to render the Game Studio editor
* **Редактор**, чтобы отобразить редактор Game Studio.
* **Single view** (referred to as **Utility** in the Property Grid), to render other things, such as [light probes](../lights-and-shadows/light-probes.md) and [cubemaps](../textures/skyboxes-and-backgrounds.md)
* **Один вид** (называемый **Утилита** в сетке свойств) для рендеринга других вещей, таких как [световые зонды](../lights-and-shadows/light-probes.md) и  [cubemaps](../textures/skyboxes-and-backgrounds.md)

Each entry point can use a separate rendering pipeline. For example, the game and editor might share the same forward renderer and [post-processing effects](../post-effects/index.md) while your single view uses a separate forward renderer.
Каждая точка входа может использовать отдельный конвейер рендеринга.  Например, игра и редактор могут использовать один и тот же модуль прямого рендеринга и [эффекты постобработки](../post-effects/index.md), в то время как ваш единственный вид использует отдельный модуль прямого рендеринга.

#### Connect an entry point to a renderer
#### Подключить точку входа к рендереру

1. Select the **Entry point** node.
1. Выберите узел **Точка входа**.

2. In the **Property Grid**, next to the entry point you want to connect (**Editor**, **Game** or **Utility**), select the renderer you want to connect to.
2. В **Сетке свойств** рядом с точкой входа, к которой вы хотите подключиться (**Редактор**, **Игра** или **Утилита**), выберите средство визуализации, к которому вы хотите подключиться.

    ![Select renderer](media/connect-entry-point.png)
![Выберите средство визуализации](media/connect-entry-point.png)

For information about the different renderers, see [Scene renderers](scene-renderers.md).
Для получения информации о различных средствах визуализации см. [Визуализаторы сцены](scene-renderers.md).

### Forward renderer
### Передовой рендерер

In a typical setup, the **forward renderer** renders almost everything in your scene. It renders, in order:
В типичной настройке **прямой рендерер** рендерит почти все в вашей сцене.  Он отображает по порядку:

1. opaque objects
1. непрозрачные объекты
2. transparent objects
2. прозрачные объекты
3. [post effects](../post-effects/index.md)
3. [постэффекты](../post-effects/index.md)

The forward renderer is also where you set [virtual reality](../../virtual-reality/index.md) options. You configure the forward renderer properties in the **forward entry node**. 
В прямом рендерере вы также устанавливаете параметры [виртуальной реальности](../../virtual-reality/index.md).  Вы настраиваете свойства прямого рендерера в **узле прямого входа**.

### Debug renderer
### Отладка рендерера

The **debug renderer** is used by scripts to print debug information. For more information, see [Debug renderers](debug-renderers.md).
**Средство отладки** используется сценариями для печати отладочной информации.  Дополнительные сведения см. в разделе [Отладка средств визуализации](debug-renderers.md).

### Post-processing effects
### Эффекты постобработки

The **post-processing effects** node comes after the forward renderer and controls the post effects in your game. For more information, see [post-processing effects](../post-effects/index.md).
Узел **эффекты постобработки** идет после прямого рендерера и управляет постэффектами в вашей игре.  Для получения дополнительной информации см. [Эффекты постобработки](../post-effects/index.md).

## Create a node
## Создать узел

To create a node, right-click the graphics compositor editor and select the type of node you want to create:
Чтобы создать узел, щелкните правой кнопкой мыши редактор графического компоновщика и выберите тип узла, который вы хотите создать:

![Create node](../../virtual-reality/media/create-node.png)
![Создать узел](../../виртуальная-реальность/медиа/создать-узел.png)

## See also
## Смотрите также

* [Camera slots](../cameras/camera-slots.md)
* [Слоты для камеры](../cameras/camera-slots.md)
* [Scene renderers](scene-renderers.md)
* [Визуализация сцены] (scene-renderers.md)
    * [Custom scene renders](custom-scene-renderers.md)
* [Пользовательские рендеры сцен](custom-scene-renderers.md)
* [Debug renderers](debug-renderers.md)
* [Отладка рендереров](debug-renderers.md)
