# Manage entities
# Управление сущностями

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=

To build the levels of your game, you need to translate (move), rotate, and resize entities in your scene. These are known as **transformations**.
Чтобы построить уровни вашей игры, вам нужно переводить (перемещать), вращать и изменять размер объектов в вашей сцене.  Они известны как **преобразования**.

## Transformation gizmos
## Трансформационные штуковины

You can select the transformation gizmos from **Scene Editor toolbar**.
Вы можете выбрать гизмо трансформации на **панели инструментов редактора сцен**.

![Transformation gizmo toolbox](media/manage-entities-in-scene-gizmos.png)
![Панель инструментов трансформации](media/manage-entities-in-scene-gizmos.png)

Alternatively, press **Space** to switch between gizmos.
Либо нажмите **Пробел**, чтобы переключиться между гизмо.

There are three types of transformation gizmo:
Существует три типа гизмо преобразования:

- ![Translation gizmo icon](media/manage-entities-in-scene-translation-gizmo.png) The **translation gizmo** moves entities
- ![Значок гизмо перевода](media/manage-entities-in-scene-translation-gizmo.png) **гизмо перевода** перемещает объекты
- ![Rotation gizmo icon](media/manage-entities-in-scene-rotation-gizmo.png) The **rotation gizmo** rotates entities
- ![Значок гизмо вращения](media/manage-entities-in-scene-rotation-gizmo.png) **гизмо вращения** вращает объекты
- ![Scale gizmo icon](media/manage-entities-in-scene-scale-gizmo.png) The **scale gizmo** resizes entities
- ![Значок гизмо масштабирования](media/manage-entities-in-scene-scale-gizmo.png) **гизмо масштабирования** изменяет размеры объектов

Game Studio displays the selected transformation gizmo at the origin of the entity.
Game Studio отображает выбранный гизмо преобразования в начале объекта.

![Transformation gizmos in the scene](media/manage-entities-transformation-gizmo.png)
![Материалы трансформации в сцене](media/manage-entities-transformation-gizmo.png)

### Translation gizmo
### Переводчик

To select the translation gizmo, click the ![Translation gizmo icon](media/manage-entities-in-scene-translation-gizmo.png) icon in the Scene Editor toolbar or press **W**.
Чтобы выбрать гизмо перевода, щелкните значок ![Значок гизмо перевода](media/manage-entities-in-scene-translation-gizmo.png) на панели инструментов редактора сцен или нажмите **W**.

The translation gizmo moves (**translates**) entities in the scene along the axis you select.
Гизмо перевода перемещает (**переводит**) объекты в сцене вдоль выбранной вами оси.

* To move an entity along the X axis, drag it by the **red** arrow.
* Чтобы переместить объект по оси X, перетащите его за **красную** стрелку.
* To move an entity along the Y axis (up and down), drag it by the **green** arrow.
* Чтобы переместить объект по оси Y (вверх и вниз), перетащите его за **зеленую** стрелку.
* To move the entity along the Z axis, drag it by the **blue** arrow.
* Чтобы переместить объект по оси Z, перетащите его за **синюю** стрелку.
* To move the entity in free 3D, drag it by the central sphere.
* Чтобы переместить объект в свободном 3D, перетащите его за центральную сферу.

<video controls autoplay loop height="360" width="480">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/manage-entities-in-scene-translation-gizmo.mp4" type="video/mp4">
<source src=
</video>
</видео>

### Rotation gizmo
### Гизмо вращения

To select the rotation gizmo, click the ![Rotation gizmo icon](media/manage-entities-in-scene-rotation-gizmo.png) icon in the Scene Editor toolbar or press **E**.
Чтобы выбрать гизмо вращения, щелкните значок ![Значок гизмо вращения](media/manage-entities-in-scene-rotation-gizmo.png) на панели инструментов редактора сцен или нажмите **E**.

The rotation gizmo rotates entities in the scene along the axis you select.
Гизмо вращения вращает объекты в сцене вдоль выбранной вами оси.

* To rotate an entity along the X axis (pitch), drag it by the **red** ring.
* Чтобы повернуть объект по оси X (шаг), перетащите его за **красное** кольцо.
* To rotate an entity along the Y axis (yaw), drag it by the **green** ring.
* Чтобы повернуть объект по оси Y (рыскание), перетащите его за **зеленое** кольцо.
* To rotate the entity along the Z axis (roll), drag it by the **blue** ring.
* Чтобы повернуть объект по оси Z (повернуть), перетащите его за **синее** кольцо.

<video controls autoplay loop height="360" width="480">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/manage-entities-in-scene-rotation-gizmo.mp4" type="video/mp4">
<source src=
</video>
</видео>

### Scale gizmo
### Масштабный гизмо

To select the scale gizmo, click the ![Scale gizmo icon](media/manage-entities-in-scene-scale-gizmo.png) icon in the Scene Editor toolbar or press **R**.
Чтобы выбрать гизмо масштабирования, щелкните значок ![Значок гизмо масштабирования](media/manage-entities-in-scene-scale-gizmo.png) на панели инструментов редактора сцен или нажмите **R**.

The scale gizmo resizes entities along a single axis ("stretching" or "squashing" them) or all axes (making them larger or smaller without changing their proportions).
Гизмо масштабирования изменяет размеры объектов по одной оси («растяжение» или «сжатие» их) или по всем осям (увеличивая или уменьшая их без изменения пропорций).

* To resize an entity along the X axis, drag it by the **red** ring.
* Чтобы изменить размер объекта по оси X, перетащите его за **красное** кольцо.
* To resize an entity along the Y axis, drag it by the **green** ring.
* Чтобы изменить размер объекта по оси Y, перетащите его за **зеленое** кольцо.
* To resize the entity along the Z axis, drag it by the **blue** ring.
* Чтобы изменить размер объекта по оси Z, перетащите его за **синее** кольцо.
* To resize the entity in all axes, drag it by the central sphere.
* Чтобы изменить размер объекта по всем осям, перетащите его за центральную сферу.

<video controls autoplay loop height="360" width="480">
<видео управляет циклом автоматического воспроизведения height=
                <source src="media/manage-entities-in-scene-scale-gizmo.mp4" type="video/mp4">
<source src=
</video>
</видео>

> [!Note] 
> [!Примечание]
> The scale gizmo only works with the **local** coordinate system (see below). When you select the scale gizmo, Game Studio switches to local coordinates.
> Гизмо масштабирования работает только с **местной** системой координат (см. ниже).  Когда вы выбираете гизмо масштабирования, Game Studio переключается на локальные координаты.

## Change gizmo coordinate system
## Изменить систему координат гизмо

You can change how the gizmo coordinates work.
Вы можете изменить способ работы координат гизмо.

1. Select the entity whose gizmo coordinates you want to change.
1. Выберите объект, координаты гизмо которого вы хотите изменить.
2. In the Scene Editor toolbar, select the coordinate system you want.
2. На панели инструментов редактора сцен выберите нужную систему координат.

| Coordinate system | Function |
|  Система координат |  Функция |
| ------  |  ------  |
|  ------ |  ------ |
| ![World coordinates](media/manage-entities-in-scene-wsc.png) <br><p><p>World coordinates | Uses world coordinates for transformations. The X, Y, and Z axes are the same for every entity. |
|  ![Мировые координаты](media/manage-entities-in-scene-wsc.png) <br><p><p>Мировые координаты |  Использует мировые координаты для преобразований.  Оси X, Y и Z одинаковы для всех объектов.  |
| ![Local coordinates](media/manage-entities-in-scene-osc.png) <br><p><p>Local coordinates | Uses local coordinates for transformations. The axes are oriented in the same direction as the selected entity. |
|  ![Локальные координаты](media/manage-entities-in-scene-osc.png) <br><p><p>Локальные координаты |  Использует локальные координаты для преобразований.  Оси ориентированы в том же направлении, что и выбранный объект.  |
| ![Camera coordinates](media/manage-entities-in-scene-csc.png) <br><p><p>Camera coordinates | Uses the current camera coordinates for transformations. The axes are oriented in the same direction as the editor camera. |
|  ![Координаты камеры](media/manage-entities-in-scene-csc.png) <br><p><p>Координаты камеры |  Использует текущие координаты камеры для преобразований.  Оси ориентированы в том же направлении, что и камера редактора.  |

## Snap transformations to grid
## Привязка преобразований к сетке

You can "snap" transformations to the grid. This means that the degree of transformation you apply to entities is rounded to the closest multiple of the number you specify. For example, if you set the rotation snap value to 10, entities rotate in multiples of 10 (0, 10, 20, 30, etc).
Вы можете «привязать» преобразования к сетке.  Это означает, что степень преобразования, которую вы применяете к объектам, округляется до ближайшего числа, кратного указанному вами числу.  Например, если вы установите значение привязки поворота равным 10, объекты будут вращаться кратно 10 (0, 10, 20, 30 и т. д.).

You can change the snap values for each gizmo in the scene view toolbar. Snap values apply to all entities in the scene. For example:
Вы можете изменить значения привязки для каждого гизмо на панели инструментов просмотра сцены.  Значения привязки применяются ко всем объектам в сцене.  Например:

| Icon | Function |
|  Значок |  Функция |
| --- | ---- |
|  --- |  ---- |
| ![](media/manage-entities-in-scene-snap-translation.png) | Snap translation to multiple of 1 |
|  ![](media/manage-entities-in-scene-snap-translation.png) |  Привязать перевод к кратному 1 |
| ![](media/manage-entities-in-scene-snap-rotation.png) | Snap rotation to multiple of 22.5 |
|  ![](media/manage-entities-in-scene-snap-rotation.png) |  Привязать вращение к кратному 22,5 |
| ![](media/manage-entities-in-scene-snap-scale.png) | Snap scale to multiple of 1.1 |
|  ![](media/manage-entities-in-scene-snap-scale.png) |  Привязать масштаб к кратному 1,1 |

## See also
## Смотрите также

* [Create and open a scene](create-a-scene.md)
* [Создать и открыть сцену](create-a-scene.md)
* [Navigate in the Scene Editor](navigate-in-the-scene-editor.md)
* [Навигация в редакторе сцен](navigate-in-the-scene-editor.md)
* [Load scenes](load-scenes.md)
* [Загрузить сцены](load-scenes.md)
* [Add entities](add-entities.md)
* [Добавить сущности](add-entities.md)
* [Manage entities](manage-entities.md)
* [Управление объектами](manage-entities.md)
