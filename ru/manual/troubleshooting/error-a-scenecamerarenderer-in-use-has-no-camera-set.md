# Error: "A SceneCameraRenderer in use has no camera assigned to its [Slot]. Make sure a camera is enabled and assigned to the [Slot]."
# Ошибка: «Используемый объект SceneCameraRenderer не имеет камеры, назначенной его [слоту]. Убедитесь, что камера включена и назначена [слоту]».

>[!Note]
>[!Примечание]
>In earlier versions of Stride, this error message was: "A SceneCameraRenderer in use has no camera set. Make sure the camera component to use is enabled and has its [Slot] property correctly set."
> В более ранних версиях Stride это сообщение об ошибке было следующим: «Используемый SceneCameraRenderer не имеет установленной камеры. Убедитесь, что используемый компонент камеры включен и его свойство [Slot] установлено правильно».

This error means there's no camera available for the scene renderer to use. This has several possible causes:
Эта ошибка означает, что для рендеринга сцены нет доступных камер.  Это имеет несколько возможных причин:

* there's no enabled [camera](../graphics/cameras/index.md)
* нет включенной [камеры](../graphics/cameras/index.md)
* the camera is set to the wrong [camera slot](../graphics/cameras/camera-slots.md)
* камера установлена ​​на неправильный [слот камеры](../graphics/cameras/camera-slots.md)
* there are multiple enabled cameras assigned to the same camera slot
* на один и тот же слот камеры назначено несколько включенных камер

## Fix
## Исправить

If you create your camera components in Game Studio, make sure:
Если вы создаете компоненты камеры в Game Studio, убедитесь, что:

* the camera slots are set to the **Main** slot (see [Graphics — Camera slots](../graphics/cameras/camera-slots.md))
* слоты для камер установлены в слот **Main** (см. [Графика — Слоты для камер](../graphics/cameras/camera-slots.md))
* only the initial camera is enabled
* включена только начальная камера

If you create your camera components in code, make sure you retrieve the correct slot from the graphics compositor. Use:
Если вы создаете компоненты камеры в коде, убедитесь, что вы извлекли правильный слот из графического компоновщика.  Использовать:

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

* [Graphics — Camera slots](../graphics/cameras/camera-slots.md)
* [Графика — Слоты камеры](../graphics/cameras/camera-slots.md)
* [Graphics — Cameras](../graphics/cameras/index.md)
* [Графика — Камеры](../graphics/cameras/index.md)
