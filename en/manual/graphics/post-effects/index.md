# Post effects

**Post effects** are usually applied after your game has completed the rendering of a frame, but before the UI is drawn. You can use post effects to tune or embellish an image — for example, by producing a more natural, realistic look, or creating stylized cinematic effects.

![media/post-effects-reference-1.png](media/post-effects-reference-1.png) 

Post effects are usually applied to an image. This means they have no connection with vertices or meshes. They only work with the color values of each pixel (and sometimes their depth).

Typically, you set up a post effect by specifying:

- input buffers (eg color, depth)
- one or several output buffers
- parameters to customize the behavior of the post effect during its rendering pass

Stride provides several predefined post effects. You can also [extend the system to create your own color transform effects](color-transforms/custom-color-transforms.md).

>[!Note]
>Depth-aware post effects ̶  ie [depth of field](depth-of-field.md), ambient occlusion, and [local reflections](local-reflections.md) ̶  nullify MSAA (multisample anti-aliasing).

## Add or edit a post effect

You add and edit post effects in the [graphics compositor](../graphics-compositor/index.md).

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **Post-processing effects** node.

    > [!Tip]
    > If there's no post-process effects node, right-click and select **Create > post-processing effects** to create one. On the new **forward renderer** node, on the **PostEffects** slot, click and drag a link to the **post-processing effects** node.
    > ![Connect nodes](media/connect-nodes.png)

3. In the **Property Grid** (on the right by default), enable the post effects you want to use and configure their properties.

    ![Post effect properties](media/post-effect-properties.png)

    For details about each post effect and its properties, see the pages below.

## In this section

* [Anti-aliasing](anti-aliasing.md)
* [Fog](fog.md)
* [Outline](outline.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
    * [Film grain](color-transforms/film-grain.md)
    * [Gamma correction](color-transforms/gamma-correction.md)
    * [ToneMap](color-transforms/tonemap.md)
    * [Vignetting](color-transforms/vignetting.md)
    * [Custom color transforms](color-transforms/custom-color-transforms.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Local reflections](local-reflections.md)

## See also

* [Graphics compositor](../graphics-compositor/index.md)