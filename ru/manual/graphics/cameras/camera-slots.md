# Camera slots
# Слоты для камеры

**Camera slots** link the [graphics compositor](../graphics-compositor/index.md) to the cameras in your scene. You bind each camera to a slot, then define which slot the compositor uses. This means you can change the [root scene](../../game-studio/manage-scenes.md) or graphics compositor without having to assign new cameras each time.
**Слоты для камер** связывают [графический композитор](../graphics-compositor/index.md) с камерами в вашей сцене.  Вы привязываете каждую камеру к слоту, а затем определяете, какой слот использует композитор.  Это означает, что вы можете изменить [корневую сцену](../../game-studio/manage-scenes.md) или графический компоновщик без необходимости каждый раз назначать новые камеры.

You don't have to create a different camera slot for each camera. Instead, you can just change which cameras use each slot. The best practice is to disable the camera components on cameras you don't need.
Вам не нужно создавать отдельный слот для каждой камеры.  Вместо этого вы можете просто изменить, какие камеры используют каждый слот.  Лучше всего отключить компоненты камеры на камерах, которые вам не нужны.

> [!Note]
> [!Примечание]
> Each camera slot must have a camera assigned to it. If you have an unused camera slot, delete it.
> Каждому слоту камеры должна быть назначена камера.  Если у вас есть неиспользуемый слот для камеры, удалите его.
>
>
> You can't assign a single camera to more than one slot. If you need to do this, duplicate the camera entity and assign it to a different slot.
> Вы не можете назначить одну камеру более чем одному слоту.  Если вам нужно сделать это, продублируйте объект камеры и назначьте его другому слоту.

> If multiple enabled cameras in your scene use the same camera slot, the result is undefined.
> Если несколько включенных камер в вашей сцене используют один и тот же слот камеры, результат не определен.

## Create a camera slot
## Создать слот для камеры

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.
1. В **Представлении активов** (по умолчанию на нижней панели) дважды щелкните ресурс **Графический компоновщик**.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)
![Ресурс графического компоновщика](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.
Откроется редактор графического компоновщика.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)
![Редактор графического компоновщика](../graphics-compositor/media/graphics-compositor-editor.png)

    For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.
Дополнительные сведения о графическом компоновщике см. на странице [Графический компоновщик](../graphics-compositor/index.md).

2. In the graphics compositor editor, on the left, under **Camera slots**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
2. В графическом редакторе слева в разделе **Слоты для камеры** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить  **).

    ![Camera slots](../graphics-compositor/media/graphics-compositor-camera-slots.png)
![Слоты для камеры](../graphics-compositor/media/graphics-compositor-camera-slots.png)

    Game Studio adds a new camera slot to the list:
Game Studio добавляет в список новый слот для камеры:

    ![Camera slot added](../graphics-compositor/media/camera-slot-added.png)
![Добавлен слот для камеры](../graphics-compositor/media/camera-slot-added.png)

    > [!Tip]
> [!Подсказка]
    > To name a camera slot, double-click it in the list and type a new name.
> Чтобы назвать слот камеры, дважды щелкните его в списке и введите новое имя.

## Bind a camera to a camera slot
## Привязать камеру к слоту камеры

1. In your scene, select the **entity** with the camera component you want to bind.
1. В вашей сцене выберите **сущность** с компонентом камеры, который вы хотите привязать.

2. In the **Property Grid** (on the right by default), in the **Camera** component properties, under **Slot**, select the slot you want to bind the camera to.
2. В **Сетке свойств** (по умолчанию справа) в свойствах компонента **Камера** в разделе **Слот** выберите слот, к которому вы хотите привязать камеру.

    > [!Note]
> [!Примечание]
    > The drop-down menu lists camera slots from the graphics compositor selected in the [game settings](../../game-studio/game-settings.md).
> В раскрывающемся меню перечислены слоты камер из графического компоновщика, выбранного в [настройках игры](../../game-studio/game-settings.md).

    ![media/graphics-compositor-overview-2.png](../graphics-compositor/media/graphics-compositor-overview-2.png)
![media/graphics-compositor-overview-2.png](../graphics-compositor/media/graphics-compositor-overview-2.png)

The graphics compositor matches enabled cameras to their appropriate slots each frame.
Композитор графики сопоставляет включенные камеры с соответствующими слотами в каждом кадре.

## Create a camera and assign a camera slot from a script
## Создать камеру и назначить слот камеры из скрипта

Use:
Использовать:

```cs
```CS
var camera = new CameraComponent();
var camera = новый CameraComponent();
 camera.Slot = SceneSystem.GraphicsCompositor.Cameras[0].ToSlotId();
camera.Slot = SceneSystem.GraphicsCompositor.Cameras[0].ToSlotId();
```
```

To change the camera at runtime, toggle the ``Enabled`` property.
Чтобы изменить камеру во время выполнения, переключите свойство Enabled.

> [!Note]
> [!Примечание]
> Make sure you:
> Убедитесь, что вы:
>
>
> * always have at least one enabled camera
> * всегда иметь хотя бы одну включенную камеру
>
>
> * don't have multiple cameras enabled and assigned to the same slot at the same time
> * нельзя одновременно включать несколько камер и назначать их одному и тому же слоту

## See also
## Смотрите также

* [Cameras](index.md)
* [Камеры](index.md)
* [Graphics compositor](../graphics-compositor/index.md)
* [Композитор графики](../graphics-compositor/index.md)
* [Game Studio — Game settings](../../game-studio/game-settings.md)
* [Game Studio — Настройки игры](../../game-studio/game-settings.md)
* [Game Studio — Manage scenes](../../game-studio/manage-scenes.md)
* [Game Studio — Управление сценами](../../game-studio/manage-scenes.md)
