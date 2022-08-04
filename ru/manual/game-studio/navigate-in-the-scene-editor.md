# Navigate in the Scene Editor
# Навигация в редакторе сцен

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=

You can move around the scene and change the perspective of the editor camera. The XYZ axes in the bottom left show your orientation in 3D space.
Вы можете перемещаться по сцене и менять перспективу камеры редактора.  Оси XYZ в левом нижнем углу показывают вашу ориентацию в трехмерном пространстве.

   ![Scene orientation gizmo](media/navigate-in-a-scene-scene-orientation-gizmo.png)
![Gizmo ориентации сцены](media/navigate-in-a-scene-scene-orientation-gizmo.png)

## Move around in the scene
## Перемещение по сцене

There are several ways to move the editor camera around the Scene Editor.
Существует несколько способов перемещения камеры редактора по редактору сцен.

> [!TIP]
> [!СОВЕТ]
> Holding the **Shift** key speeds up movement.
> Удерживание клавиши **Shift** ускоряет движение.

### Fly
### Летать

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/navigate-in-scene-fly-in-the-scene.mp4" type="video/mp4">
<source src=
</video>
</видео>

Hold the **right mouse button** and **move the mouse** to change the camera direction. Hold the **right mouse button** and use the **WASD keys** to move. This is similar to the controls of many action games.
Удерживайте **правую кнопку мыши** и **двигайте мышь**, чтобы изменить направление камеры.  Удерживайте **правую кнопку мыши** и используйте **клавиши WASD** для перемещения.  Это похоже на элементы управления многих экшн-игр.

### Pan
### Сковорода

Hold the **right mouse button** and the **center mouse button** and move the mouse.
Удерживайте **правую кнопку мыши** и **центральную кнопку мыши** и перемещайте мышь.


### Dolly
### Долли

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/navigate-in-scene-dolly-camera.mp4" type="video/mp4">
<source src=
</video>
</видео>

To dolly (move the camera forward and backward), use the **mouse wheel**.
Для тележки (перемещения камеры вперед и назад) используйте **колесо мыши**.


### Orbit
### Орбита

Hold **Alt** and the **left mouse button** and move the **mouse**.
Удерживая **Alt** и **левую кнопку мыши**, перемещайте **мышь**.

The point of rotation is always the center of the screen. To adjust the distance to the center, use the **mouse wheel**.
Точка вращения всегда находится в центре экрана.  Чтобы отрегулировать расстояние до центра, используйте **колесо мыши**.

![Rotation](media/navigate-in-scene-orbital-rotation-schema.png)
![Вращение](media/navigate-in-scene-orbital-rotation-schema.png)

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/navigate-in-scene-orbital-rotation.mp4" type="video/mp4">
<source src=
</video>
</видео>

### Focus on an entity
### Фокус на объекте

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/navigate-in-scene-focus-on-entity-using-f-key.mp4" type="video/mp4">
<source src=
</video>
</видео>

After you select an entity, press the **F** key. This zooms in on the entity and centers it in the camera editor.
После выбора объекта нажмите клавишу **F**.  Это увеличивает объект и центрирует его в редакторе камеры.

You can also focus by clicking the **magnifying glass icon** next to the entity in the Entity Tree.
Вы также можете сфокусироваться, щелкнув **значок увеличительного стекла** рядом с объектом в дереве объектов.

![Focus icon](media/focus-icon.png)
![Значок фокуса](media/focus-icon.png)


> [!TIP] 
> [!СОВЕТ]
> Focusing and then orbiting with **Alt + left mouse button** is useful for inspecting entities.
> Фокусировка, а затем вращение по орбите с помощью **Alt + левая кнопка мыши** полезно для проверки объектов.

### Controls
### Элементы управления

Action                 | Control
Действие |  Контроль
-----------------------|--------------
-----------------------|---------------
Move                    | Arrow keys + right mouse button <p><br>WASDQE keys + right mouse button </p></br><p>
Переместить |  Клавиши со стрелками + правая кнопка мыши <p><br>клавиши WASDQE + правая кнопка мыши </p></br><p>
Look around             | Hold right mouse button + move mouse
Оглянитесь вокруг |  Удерживать правую кнопку мыши + двигать мышью
Dolly                     | Middle mouse button + right mouse button + move mouse
Долли |  Средняя кнопка мыши + правая кнопка мыши + перемещение мыши
Orbit                   | Alt key + left mouse button
Орбита |  Клавиша Alt + левая кнопка мыши
Zoom                    | Mouse wheel <p><br>Alt + Right mouse button + move mouse</p></br>
Увеличить |  Колесико мыши <p><br>Alt + правая кнопка мыши + движение мыши</p></br>
Pan                    | Middle mouse button + move mouse
Пан |  Средняя кнопка мыши + перемещение мыши
Focus                  | F (with entity selected)
Фокус |  F (с выбранным объектом)

> [!TIP] 
> [!СОВЕТ]
> You can change the scene navigator controls in **Edit > Settings** under **Scene Editor > Key bindings**.
> Вы можете изменить элементы управления навигатора сцен в **Правка > Настройки** в разделе **Редактор сцен > Привязки клавиш**.
> ![Key bindings](media/settings-key-bindings.png)
> ![Привязки клавиш](media/settings-key-bindings.png)

## Change camera editor perspective
## Изменить перспективу редактора камеры

You can change the camera editor perspective using the **view camera gizmo** in the top-right of the Scene Editor.
Вы можете изменить перспективу редактора камеры, используя **гизмо просмотра камеры** в правом верхнем углу редактора сцен.

![View camera gizmo](media/navigate-in-a-scene-view-camera-gizmo.png)
![Просмотр устройства камеры](media/navigate-in-a-scene-view-camera-gizmo.png)

### Snap camera to position
### Привязать камеру к положению

To change the angle of the editor camera, click the corresponding face, edge, or corner of the **view camera gizmo**.
Чтобы изменить угол камеры редактора, щелкните соответствующую грань, край или угол **гизмо камеры просмотра**.

Click    | Camera position
Нажмите |  Положение камеры
---------|--------------
---------|---------------
Face     | Faces the selected face
Лицо |  Лицом к выбранному лицу
Edge     | Faces the two adjacent faces at a 45° angle
Край |  Повернута к двум соседним граням под углом 45°.
Corner   | Faces the three adjacent faces at a 45° angle
Угол |  Повернута к трем соседним граням под углом 45°.

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/navigate-in-scene-change-view-angle.mp4" type="video/mp4">
<source src=
</video>
</видео>

## Camera options
## Параметры камеры

> [!Note]
> [!Примечание]
> This page explains how to use the Scene Editor camera. For information about how to use cameras in your game, see [Graphics — Cameras](../cameras/index.md).
> На этой странице объясняется, как использовать камеру редактора сцен.  Информацию о том, как использовать камеры в игре, см. в разделе [Графика — Камеры](../cameras/index.md).

To display the Scene Editor camera options, click the **camera icon** in the top-right of the Scene Editor.
Чтобы отобразить параметры камеры редактора сцен, щелкните **значок камеры** в правом верхнем углу редактора сцен.

![Switch to orthographic](../get-started/media/switch-to-orthographic.png)
![Переключиться на орфографический](../get-started/media/switch-to-orthographic.png)

### Perspective and orthographic views
### Перспективный и орфографический виды

**Perspective view** is a "real-world" perspective of the objects in your scene. In this view, objects close to the camera appear larger, and lines of identical lengths appear different due to foreshortening, as in reality.
**Вид в перспективе** — это «реальная» перспектива объектов вашей сцены.  В этом виде близкие к камере объекты кажутся больше, а линии одинаковой длины кажутся разными из-за ракурса, как в реальности.

In **orthographic view**, objects are always the same size, no matter how far their distance from the camera. Parallel lines never touch, and there's no vanishing point. It's easy to tell if objects are lined up exactly in orthographic view.
В **ортогональном виде** объекты всегда имеют одинаковый размер, независимо от того, насколько далеко они находятся от камеры.  Параллельные линии никогда не соприкасаются, и нет точки схода.  Легко определить, выстроены ли объекты точно в ортогональном виде.

![Perspective and orthographic diagram](media/perspective-orthographic-diagram.png)
![Перспектива и орфографическая диаграмма](media/perspective-orthographic-diagram.png)

![Perspective and orthographic views](media/perspective-and-orthographic-views.png)
![Перспектива и орфография](media/perspective-and-orthographic-views.png)

You can also switch between perspective and orthographic views by clicking the **view camera gizmo** as it faces you.
Вы также можете переключаться между перспективным и ортогональным видами, нажимая на **гизмо камеры**, обращенную к вам.

<video controls autoplay loop height="240" width="320">
<видео управляет циклом автоматического воспроизведения height=
              <source src="media/navigate-in-scene-switch-projection-mode.mp4" type="video/mp4">
<source src=
</video>
</видео>

#### Field of view
#### Поле зрения

You can change the camera field of view. This changes the camera frustum, and has the effect of zooming in and out of the scene. At high settings (90 and above), the field of view creates stretched "fish-eye lens" views. The default setting is 45.
Вы можете изменить поле зрения камеры.  Это изменяет усеченную пирамиду камеры и приводит к увеличению и уменьшению масштаба сцены.  При высоких настройках (90 и выше) поле зрения создает растянутое изображение типа «рыбий глаз».  По умолчанию установлено значение 45.

#### Near and far planes
#### Ближний и дальний самолеты

The near and far planes determine where the camera's view begins and ends.
Ближняя и дальняя плоскости определяют, где начинается и заканчивается обзор камеры.

* The **near plane** is the closest point the camera can see. The default setting is 0.1. Objects before this point aren't drawn.
* **ближняя плоскость** — это ближайшая точка, которую может видеть камера.  По умолчанию установлено значение 0,1.  Объекты до этой точки не рисуются.

* The **far plane**, also known as the draw distance, is the furthest point the camera can see. Objects beyond this point aren't drawn. The default setting is 1000.
* **Дальняя плоскость**, также известная как расстояние прорисовки, — это самая дальняя точка, которую может видеть камера.  Объекты за пределами этой точки не рисуются.  Значение по умолчанию — 1000.

Game Studio renders the area between the near and far planes.
Game Studio визуализирует область между ближней и дальней плоскостями.

![Camera position](../get-started/media/camera-position.png)
![Положение камеры](../get-started/media/camera-position.png)

#### Camera speed
#### Скорость камеры

The **camera speed** setting changes how quickly the camera moves in the editor.
Параметр **скорость камеры** меняет скорость перемещения камеры в редакторе.

## See also
## Смотрите также

* [Create and open a scene](create-a-scene.md)
* [Создать и открыть сцену](create-a-scene.md)
* [Load scenes](load-scenes.md)
* [Загрузить сцены](load-scenes.md)
* [Add entities](add-entities.md)
* [Добавить сущности](add-entities.md)
* [Manage entities](manage-entities.md)
* [Управление объектами](manage-entities.md)
