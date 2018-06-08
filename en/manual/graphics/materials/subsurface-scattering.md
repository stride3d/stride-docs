# Subsurface scattering

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>

When you enable **subsurface scattering** on a material, light is reflected at irregular angles inside the model. You can use this to realistically render translucent materials such as skin, wax, leaves, marble, and porcelain.

The photo below demonstrates a real-life example of the effect:

![Photo](media/skin-subsurface-scattering-photo.jpg)

*(Image courtesy of Davepoo2014, shared under [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en))*

The screenshots below demonstrate the use of subsurface scattering in Xenko to render wax:

| Subsurface scattering off       | Subsurface scattering on
|---------------------------------|------------------------
| ![On](media/candles-ss-off.jpg) | ![Off](media/candles-ss-on.jpg)

The shadows are much softer in the second image, as more light passes through the candles.

## Enable subsurface scattering

1. Select the material you want to use subsurface shading.

2. In the Property Grid, under **Shading**, next to **Subsurface scattering**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Subsurface scattering**.

    ![Enable subsurface scattering](media/enable-subsurface-scattering.png)

## Properties

![Properties](media/subsurface-scattering-properties.png)

| Property           | Function
|--------------------|--------------------
| Scattering width   | How far the light scatters in [world units](../../game-studio/world-units.md)
| Translucency       | How much light pentrates the material. `0.0` is no translucency; `1.0` is max.
| Translucency map   | Specify a [grayscale map](material-maps.md) to control how translucent different regions of the material are. Brighter values produce more scattering. For example, ears should scatter more light than the top of the head, because they're thinner and therefore light passes through them more easily. The texture is multiplied by the **Translucency** parameter.
| Scattering profile | The scattering profile to use during the forward render pass. <p><br>**Skin:** A preconfigured shader for rendering skin <p><br>**Custom (skin-based):** A profile based on the Skin profile you can customize yourself
| Scattering kernel  | The scattering kernel to use in the subsurface scattering post process. <p><br>**Falloff:** Scattered light is masked to this color. For example, in the screenshot of the candles, the light fades to an orange-yellow. <p><br>**Strength:** Fades to this color

| Transluency: `0.2`                        | Transluency: `0.98`
|-------------------------------------------|--------------------
| ![On](media/candles-translucency-02.jpg)  | ![Off](media/candles-translucency-98.jpg)

## Graphics compositor options

There are additional subsurface scattering options in the **[graphics compositor editor](../graphics-compositor/index.md)**. These options apply globally to **all** materials that use subsurface scattering.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

2. Select the **Subsurface scattering** node.

    ![Select node](media/select-subsurface-scattering-node.png)

3. In the **Property Grid** (on the right by default), edit the properties.

    ![Subsurface scattering blur](media/subsurface-scattering-blur-properties.png)

### Properties

| Property       | Function
|----------------|-----------
| Follow surface | Prevent light scattering across large depth differences. Affects GPU performance.
| Passes         | The number of times the blur is executed. More passes produce smoother results (less noise and banding).
| Jitter kernel size | Use noise to reduce banding artifacts caused by undersampling. Creates a smoother effect, but is technically less accurate (sometimes noticeable at close distances).
| Render mode    | Change the render mode for debugging purposes

## See also

* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Material layers](material-layers.md)
* [Materials for developers](materials-for-developers.md)