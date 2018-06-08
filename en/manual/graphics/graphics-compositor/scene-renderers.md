# Scene renderers

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>

**Scene renderers** let you customize the **collect** and **draw** phases of the rendering. For more information about these stages, see [Render features](../rendering-pipeline/render-features.md). 

You select scene renderers in the **entry points** node properties.

![Select renderer](media/connect-entry-point.png)

For more information about selecting renderers, see the [Graphics compositor](index.md) page.

>[!Note]
>Currently, **all** renderers must have a camera, or be a child of a renderer that has a camera. This applies even to renderers that don't necessarily use cameras, such as the single stage renderer (eg to render a UI).

## Clear

Clears a frame, with a solid color.

![Clear properties](media/clear-renderframe-1.png)

### Properties

| Property      | Description              
| ------------- | ----------
| Clear flags   | <br><p>What to clear in the render frame (**Color only**, **Depth only**, or **Color and depth**)
| Color         | The color used to clear the color texture of the render frame. Only valid when **Clear Flags** is set to **Color** or **Color and depth**
| Depth value   | The depth value used to clear the depth texture of the render frame
| Stencil value | The stencil value used to clear the stencil texture of the render frame

## Camera renderer

Uses @'SiliconStudio.Xenko.Rendering.Compositing.SceneCameraRenderer.Child' to render a view from a [camera slot](../cameras/camera-slots.md). The **render camera** renderer takes the input from a [camera](../cameras/index.md) in the scene so it can be displayed somewhere.

![Camera renderer properties](media/render-camera-1.png)

### Properties

| Property      | Description                                                             
| ------------- | ----------
| Camera        | Specify a [camera slot](../cameras/camera-slots.md) to render from
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)

## Scene renderer collection

The **scene renderer collection** executes multiple renderers (eg camera renderer, render texture, etc) in sequence. This lets you set multiple renderers for an entry point. You can add as many renderers to the collection as you need.

>[!Note]
>Xenko executes the renderers in list order.

To add a renderer to the collection, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the renderer you want to add.

![Add to scene collection](media/add-renderer-to-scene-renderer-collection.png)

## Forward renderer

In a typical setup, the **forward renderer** renders almost everything in your scene. It renders, in order:

1. opaque objects
2. transparent objects
3. [post effects](../post-effects/index.md)

The forward renderer is also where you set VR options. For more information, see [Virtual reality](../../virtual-reality/index.md). 

You configure the forward renderer properties in the **forward entry node**. 

## Single stage renderer

![Single stage renderer](media/single-stage-renderer.png)

## Force aspect ratio scene renderer

Uses @'SiliconStudio.Xenko.Rendering.Compositing.ForceAspectRatioSceneRenderer' to force an aspect ratio and applies a letterbox if the ratio is different from the screen. Use this before the **render camera**.

![Force aspect ratio](media/force-aspect-ratio-properties.png)

| Property      | Description                                                             
| ------------- | ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
| Fixed aspect ratio | The aspect ratio to force the view to
| Force aspect ratio | Enable forced aspect ratio

## Render texture

Renders to a render texture, which you can display in your scene (eg to display security camera footage on a screen). For more information, see [Render textures](render-textures.md).

![Render texture properties](media/render-texture-scene-renderer-properties.png)

| Property      | Description                                                             
| ------------- | ----------
| Child         | Specify a renderer for the camera (eg a forward renderer or a custom renderer)
| Render texture| Specify a texture to render to

## Render mask

![Render mask](media/change-render-mask.png)

The **render mask** filters which groups are rendered. You can use it to only render particular models. For more information, see [Render groups and render masks](render-groups-and-masks.md)

## See also

* [Graphics compositor](index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Custom scene renders](custom-scene-renderers.md)
* [Debug renderers](debug-renderers.md)
* [Render groups and render masks](render-groups-and-masks.md)