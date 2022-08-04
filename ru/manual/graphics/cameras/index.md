# Cameras
# Камеры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Cameras** capture your scene and display it to the player. Without cameras, you can't see anything in your game. 
**Камеры** снимают вашу сцену и отображают ее игроку.  Без камер вы ничего не увидите в своей игре.

You can have an unlimited number of cameras in your scene.
В вашей сцене может быть неограниченное количество камер.

## Create a camera in Game Studio
## Создаем камеру в Game Studio

In the Scene Editor, right-click and select **Camera**, then choose the kind of camera you want to create (**perspective** or **orthographic**).
В редакторе сцен щелкните правой кнопкой мыши и выберите **Камера**, затем выберите тип камеры, которую вы хотите создать (**перспектива** или **ортогональная**).

![Add camera](media/add-camera.png)
![Добавить камеру](media/add-camera.png)

Game Studio creates an entity with a camera component attached.
Game Studio создает объект с прикрепленным компонентом камеры.

Alternatively, select the entity you want to be a camera, and in the **Property Grid**, click **Add component** and select **Camera**.
Либо выберите объект, который вы хотите использовать в качестве камеры, и в **Сетке свойств** нажмите **Добавить компонент** и выберите **Камера**.

![Add a camera component](media/add-camera-component.png)
![Добавить компонент камеры](media/add-camera-component.png)

## Camera properties
## Свойства камеры

![Camera properties](media/camera-properties.png)
![Свойства камеры](media/camera-properties.png)

| Property            | Description                                       
|  Недвижимость |  Описание
|---------------------|--------------------------------------------------
|---------------------|-------------  -----------------------
| Projection          | The type of projection used by the camera (perspective or orthographic)
|  Проекция |  Тип проекции, используемой камерой (перспективная или орфографическая)
| Field of view (degrees)      | The vertical field of view used for perspective projection
|  Поле зрения (градусы) |  Вертикальное поле зрения, используемое для перспективной проекции
| Orthographic size   | The height of the orthographic projection (the orthographic width is automatically calculated based on the target ratio). This has the effect of zooming in and out
|  Орфографический размер |  Высота ортогональной проекции (ортогональная ширина рассчитывается автоматически на основе целевого соотношения).  Это имеет эффект увеличения и уменьшения масштаба.
| Near clip plane     | The nearest point the camera can see
|  Рядом с плоскостью клипа |  Ближайшая точка, которую может видеть камера
| Far clip plane      | The furthest point the camera can see
|  Дальняя плоскость зажима |  Самая дальняя точка, которую может видеть камера
| Custom aspect ratio | Use a custom aspect ratio you specify.  Otherwise, automatically adjust the aspect ratio to the render target ratio
|  Пользовательское соотношение сторон |  Используйте заданное вами соотношение сторон.  В противном случае автоматически настраивайте соотношение сторон в соответствии с целевым соотношением рендеринга.
| Custom aspect ratio | The aspect ratio for the camera (when the **Custom aspect ratio** option is selected)
|  Пользовательское соотношение сторон |  Соотношение сторон камеры (если выбран параметр **Пользовательское соотношение сторон**)
| Slot                | The camera slot used in the graphics compositor. For more information, see [Camera slots](camera-slots.md)
|  Слот |  Слот камеры, используемый в графическом компоновщике.  Для получения дополнительной информации см. [Слоты для камеры](camera-slots.md)

## Perspective and orthographic cameras
## Перспективные и ортогональные камеры

**Perspective cameras** provide a "real-world" perspective of the objects in your scene. In this view, objects close to the camera appear larger, and lines of identical lengths appear different due to foreshortening, as in reality. Perspective cameras are most used for games that require a realistic perspective, such as third-person and first-person games.
**Перспективные камеры** обеспечивают «реальную» перспективу объектов в вашей сцене.  В этом виде близкие к камере объекты кажутся больше, а линии одинаковой длины кажутся разными из-за ракурса, как в реальности.  Перспективные камеры чаще всего используются в играх, требующих реалистичной перспективы, таких как игры от третьего и первого лица.

With **orthographic cameras**, objects are always the same size, no matter their distance from the camera. Parallel lines never touch, and there's no vanishing point. Orthographic cameras are most used for games with isometric perspectives, such as some strategy, 4X, or role-playing games.
С **ортографическими камерами** объекты всегда имеют одинаковый размер, независимо от их расстояния от камеры.  Параллельные линии никогда не соприкасаются, и нет точки схода.  Ортогональные камеры чаще всего используются для игр с изометрической перспективой, таких как некоторые стратегии, 4X или ролевые игры.

![Perspective and orthographic diagram](../../game-studio/media/perspective-orthographic-diagram.png)
![Перспектива и орфографическая диаграмма](../../game-studio/media/perspective-orthographic-diagram.png)

| Perspective  | Orthographic
|  Перспектива |  Орфографический
|--------------|------------
|--------------|------------
| ![Perspective view](media/perspective-screenshot.png)| ![Orthographic view](media/orthographic-screenshot.png)
|  ![Вид в перспективе](media/perspective-screenshot.png)|  ![Орфографический вид](media/orthographic-screenshot.png)

### Field of view (perspective mode only)
### Поле зрения (только режим перспективы)

When the camera is set to **perspective** mode, the **field of view** changes the camera frustum, and has the effect of zooming in and out of the scene. At high settings (90 and above), the field of view creates stretched "fish-eye lens" views. The default setting is 45.
Когда камера установлена ​​в режим **перспективы**, **поле зрения** изменяет усеченную пирамиду камеры и имеет эффект увеличения и уменьшения масштаба сцены.  При высоких настройках (90 и выше) поле зрения создает растянутое изображение типа «рыбий глаз».  По умолчанию установлено значение 45.

| Field of view: 45 (default) | Field of view: 90
|  Поле зрения: 45 (по умолчанию) |  Поле зрения: 90
|-----------------------------|------------------
|-----------------------------------
| ![Default FOV](media/perspective-screenshot.png)| ![High FOV](media/90-degree-fov.png)
|  ![FOV по умолчанию](media/perspective-screenshot.png)|  ![Высокое поле зрения](media/90-grade-fov.png)

### Orthographic size (orthographic mode only)
### Орфографический размер (только в ортогональном режиме)

When the camera is set to **orthographic** mode, the **orthographic size** has the effect of zooming in and out.
Когда камера установлена ​​в **ортогональный** режим, **ортогональный размер** влияет на увеличение и уменьшение масштаба.

| Orthographic size: 10 (default) | Orthographic size: 50
|  Орфографический размер: 10 (по умолчанию) |  Орфографический размер: 50
|-----------------------------|------------------
|-----------------------------------
| ![Default FOV](media/orthographic-size-10.png)| ![High FOV](media/orthographic-size-50.png)
|  ![FOV по умолчанию](media/orthographic-size-10.png)|  ![Высокое поле зрения](media/orthographic-size-50.png)

## Near and far planes
## Ближняя и дальняя плоскости

The near and far planes determine where the camera's view begins and ends.
Ближняя и дальняя плоскости определяют, где начинается и заканчивается обзор камеры.

* The **near plane** is the closest point the camera can see. The default setting is 0.1. Objects before this point aren't drawn.
* **ближняя плоскость** — это ближайшая точка, которую может видеть камера.  По умолчанию установлено значение 0,1.  Объекты до этой точки не рисуются.

* The **far plane**, also known as the draw distance, is the furthest point the camera can see. Objects beyond this point aren't drawn. The default setting is 1000.
* **Дальняя плоскость**, также известная как расстояние прорисовки, — это самая дальняя точка, которую может видеть камера.  Объекты за пределами этой точки не рисуются.  Значение по умолчанию — 1000.

Stride renders the area between the near and far planes.
Stride визуализирует область между ближней и дальней плоскостями.

![Camera position](../../get-started/media/camera-position.png)
![Положение камеры](../../get-started/media/camera-position.png)

| Near plane 0.1 (default); far plane: 50  | Near plane: 7; far plane 1000 (default)
|  Рядом с плоскостью 0,1 (по умолчанию);  дальняя плоскость: 50 |  Рядом с самолетом: 7;  дальняя плоскость 1000 (по умолчанию)
|--------------------|------------------
|----------------------------------|----
| ![Far plane: 50](media/far-clip-50.png) | ![Near plane: 7](media/near-clip-7.png)
|  ![Дальняя плоскость: 50](media/far-clip-50.png) |  ![Ближняя плоскость: 7](media/near-clip-7.png)
| With a low **far plane** value, objects in the near distance aren't drawn. | With a high **near plane** value, objects close to the camera aren't drawn.
|  При низком значении **дальней плоскости** объекты на близком расстоянии не отображаются.  |  При высоком значении **ближней плоскости** объекты, находящиеся рядом с камерой, не отображаются.

## Camera scripts
## Скрипты камеры

You can control cameras using **camera scripts**. Stride includes three camera script templates: an FPS camera script, a side-scrolling camera script, and a basic camera controller script.
Вы можете управлять камерами с помощью **скриптов камеры**.  Stride включает в себя три шаблона сценария камеры: сценарий камеры FPS, сценарий камеры с боковой прокруткой и базовый сценарий контроллера камеры.

### Add a camera script in Game Studio
### Добавляем скрипт камеры в Game Studio

1. In the **Asset View** (in the bottom by default), click **Add asset > Scripts** and choose the camera script you want to add.
1. В **Просмотре активов** (по умолчанию внизу) нажмите **Добавить актив > Сценарии** и выберите сценарий камеры, который вы хотите добавить.

    ![Add a camera script](media/add-camera-script.png)
![Добавить скрипт камеры](media/add-camera-script.png)

2. In the **Scene Editor**, select the entity with the camera you want to control.
2. В **Редакторе сцен** выберите объект с камерой, которой вы хотите управлять.

3. In the **Property Grid** (on the right by default), click **Add component** and select the camera script you want to use.
3. В **Сетке свойств** (по умолчанию справа) нажмите **Добавить компонент** и выберите сценарий камеры, который хотите использовать.

    ![Add script component](media/add-camera-script-component.png)
![Добавить компонент сценария](media/add-camera-script-component.png)

    Game Studio adds the camera script to the entity.
Game Studio добавляет сценарий камеры к объекту.

For more information about how to create and use scripts, see [Scripts](../../scripts/index.md).
Для получения дополнительной информации о том, как создавать и использовать скрипты, см. [Скрипты](../../scripts/index.md).

## Camera slots
## Слоты для камеры

**Camera slots** link the [graphics compositor](index.md) to the cameras in your scene. You bind each camera to a slot, then define which slot the compositor uses. This means you can change the [root scene](../../game-studio/manage-scenes.md) or graphics compositor without having to assign new cameras each time.
**Слоты для камер** связывают [графический компоновщик](index.md) с камерами в вашей сцене.  Вы привязываете каждую камеру к слоту, а затем определяете, какой слот использует композитор.  Это означает, что вы можете изменить [корневую сцену](../../game-studio/manage-scenes.md) или графический компоновщик без необходимости каждый раз назначать новые камеры.

For more information, see [Camera slots](camera-slots.md).
Для получения дополнительной информации см. [Слоты для камеры](camera-slots.md).

## Render a camera to a texture
## Рендерим камеру в текстуру

You can send a camera's view to a texture and use the texture on objects in your scene. For example, you can use this to display part of your scene on a TV screen in the same scene, such as security camera footage. For more information, see [Render textures](../graphics-compositor/render-textures.md).
Вы можете отправить вид камеры в текстуру и использовать текстуру на объектах в вашей сцене.  Например, вы можете использовать это, чтобы отобразить часть вашей сцены на экране телевизора в той же сцене, например, кадры с камеры наблюдения.  Для получения дополнительной информации см. [Визуализация текстур](../graphics-compositor/render-textures.md).

## See also
## Смотрите также

* [Camera slots](camera-slots.md)
* [Слоты для камеры](camera-slots.md)
* [Animate a camera](animate-a-camera-with-a-model-file.md)
* [Анимировать камеру](анимировать-камеру-с-файлом-модели.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
