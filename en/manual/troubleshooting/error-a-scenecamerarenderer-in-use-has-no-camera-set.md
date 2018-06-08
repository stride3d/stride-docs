# Error: "A SceneCameraRenderer in use has no camera assigned to its [Slot]. Make sure a camera is enabled and assigned to the [Slot]."

>[!Note]
>In earlier versions of Xenko, this error message was: "A SceneCameraRenderer in use has no camera set. Make sure the camera component to use is enabled and has its [Slot] property correctly set."

This error means there's no camera available for the scene renderer to use. This has several possible causes:

* there's no enabled [camera](../graphics/cameras/index.md)
* the camera is set to the wrong [camera slot](../graphics/cameras/camera-slots.md)
* there are multiple enabled cameras assigned to the same camera slot

## Fix

If you create your camera components in Game Studio, make sure:

* the camera slots are set to the **Main** slot (see [Graphics — Camera slots](../graphics/cameras/camera-slots.md))
* only the initial camera is enabled

If you create your camera components in code, make sure you retrieve the correct slot from the graphics compositor. Use:

```cs
var camera = new CameraComponent();
camera.Slot = SceneSystem.GraphicsCompositor.Cameras[0].ToSlotId();
```

To change the camera at runtime, toggle the ``Enabled`` property.

> [!Note]
> Make sure you:
>
> * always have at least one enabled camera
>
> * don't have multiple cameras enabled and assigned to the same slot at the same time

## See also

* [Graphics — Camera slots](../graphics/cameras/camera-slots.md)
* [Graphics — Cameras](../graphics/cameras/index.md)