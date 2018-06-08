# Display a UI in an overlay

This page explains how to render a UI to a texture, then display it as an overlay.

These instructions assume you already have a UI that you want to display in the overlay. For information about creating UIs, see the [UI](../ui/index.md) section.

> [!Note]
> You can't see overlays when you don't run your game in your VR device. This is because the VR device itself creates the overlay, not other hardware.

## 1. Create a render target texture

In the **Asset View**, click **Add asset** and select **Texture** > **Render target**.

![Add render target](../graphics/graphics-compositor/media/add-render-target.png)

Game Studio adds a **render target** texture to your project assets.

![Render texture](../graphics/graphics-compositor/media/render-target-texture-in-asset-view.png)

In the following steps, we'll render the UI to this texture, then display it in the overlay.

## 2. Add a VR overlay

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens. For more information about the graphics compositor, see the [Graphics compositor](../graphics/graphics-compositor/index.md) page.

2. In the graphics compositor editor, select the **forward renderer** node.

    ![Select forward renderer](media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), expand **VR Settings**.

    ![VR settings](media/vr-settings.png)

4. Next to **Overlays**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    Game Studio adds a new overlay to the list.

    ![Add VR item](media/add-overlay.png)

5. Next to **Texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

6. Select the **render texture** you created and click **OK**.

## 3. Set up the UI render feature

1. In the graphics compositor editor, on the left, under **Render Features**, select the **UIRenderFeature**.

    ![Select UI render feature](media/select-UI-render-feature.png)

2. In the Property Grid, make sure **SimpleGroupToRenderStageSelector** is selected.

    ![Select SimpleGroupToRenderStageSelector.png](media/select-SimpleGroupToRenderStageSelector.png)

3. Under **Render Stage**, make sure **UIRenderStage** is selected.

    ![Select UIRenderStage.png](media/select-UIRenderStage.png)

    This makes sure the UI is rendered in the UI render stage, which we'll use in the next step.

## 4. Set up the renderers

To display an overlay, you need at least two renderers:

* one to render your main camera
* one to render the UI to the overlay

This page describes the simplest way to do this from scratch, using two cameras and two renderers. Depending on your pipeline, you might need to create a different setup.

> [!Warning]
> These instructions involve deleting your existing renderers for the game entry point. You might want to make a backup of your project in case you want to restore your pipeline afterwards.

1. In the graphics compositor editor, select the **Entry points** node.

    ![Entry points node](../graphics/graphics-compositor/media/entry-points-node.png)

2. In the **Property Grid** on the right, next to **Game renderer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **None** to delete your existing renderers.

    ![Cleared game renderers](../graphics/graphics-compositor/media/game-renderers-cleared.png)

3. Next to **Game rendererer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Camera Renderer**.

    ![Select camera renderer.png](media/select-camera-renderer.png)

    Currently, **all** renderers must have a camera, or be a child of a renderer that has a camera. This applies even to renderers that don't necessarily use cameras, such as the single stage renderer, which renders the UI. 
    
    For this reason, in these instructions, we'll add a game renderer with a camera, then make the two renderers children of that renderer. This makes sure both renderers have a parent with a camera.

4. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select your main game camera.

    ![Select main camera](media/select-main-camera.png)

5. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **SceneRendererCollection**.

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)

6. Next to **Children**, Click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **RenderTextureSceneRenderer**.

    ![Select RenderTextureSceneRenderer](media/select-RenderTextureSceneRenderer.png)

7. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **SingleStageRenderer**. 

    ![Select single stage renderer](media/select-single-stage-renderer.png)

8. Next to **Render Stage**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **UIRenderStage**. This is the renderer that renders the UI.

    ![Select UI render stage](media/select-UI-render-stage.png)

9. Next to **Render Texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

10. Select the **render texture** and click **OK**.

    ![Select render texture](../graphics/graphics-compositor/media/select-render-frame.png)

    Game Studio adds the render texture to the renderer.

11. Under **Game renderer**, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Forward renderer**.

    ![Select forward renderer](media/overlay-select-forward-renderer.png)

Your game is now ready to render the UI to an overlay in your VR device.

## VR template

For an example of a UI overlay implemented in a VR game, see the VR template included with Xenko.

![VR template](media/template-virtual-reality.png)

## See also

* [Overlays](overlays.md)
* [UI](../ui/index.md)
* [Render textures](../graphics/graphics-compositor/render-textures.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)
