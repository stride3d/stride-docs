# Render textures

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

With **render textures**, you can send a camera's view to a texture and use the texture on objects in your scene. For example, you can use this to display part of your scene on a TV screen in the same scene, such as security camera footage.

For API details, see [Textures and render textures](../low-level-api/textures-and-render-textures.md).

## 1. Create an extra camera slot

Camera slots link the graphics compositor to the cameras in your scene. You need to add a camera slot for a new camera to use. For more information about camera slots, see [Camera slots](../cameras/camera-slots.md).

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. On the left, under **Camera slots**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Camera slots](media/graphics-compositor-camera-slots.png)

    Game Studio adds a new camera slot.

    > [!Tip]
    > To rename a camera slot, double-click it in the list and type a new name.
    > ![Name a camera slot](media/name-camera-slot.png)

## 2. Create a camera and bind it to the slot

1. In your scene, add a **camera component** to the entity you want to be your camera.

    ![Add camera component](media/add-camera-component.png)

2. Position the entity so the camera captures the area of the scene you want to render to a texture.

3. In the entity **Property Grid**, enable the **Camera** component using the checkbox.

    ![Enable camera component](media/enable-camera-component.png)

4. in the **Camera** component properties, under **Slot**, select the slot you created in the previous step.

    ![Select camera slot](media/graphics-compositor-overview-2.png)

## 3. Create a render target texture

In the **Asset View**, click **Add asset** and select **Texture** > **Render target**.

![Add render target](media/add-render-target.png)

Game Studio adds a **render target** texture to your project assets.

![Render texture](media/render-target-texture-in-asset-view.png) 

## 4. Place the render target texture in the scene

There are various ways you can use the render target texture.

### Example 1: Use the render target texture in a material

1. In the material properties, under **Shading**, next to **Diffuse map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.

    ![Select texture](media/select-texture.png)

2. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

3. Select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)

### Example 2: Use the render target texture in a sprite component

1. Create an entity and position it where you want to display the texture.

2. With the entity selected, in the **Property Grid**, click **Add component** and add a **sprite** component.

    ![Add sprite component](media/add-sprite-component.png)

3. In the sprite component properties, next to **Source**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Texture**.

    ![Select sprite source](media/sprite-source-texture.png)

4. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

5. Select the **Render texture** asset and click **OK**.

    ![Select render frame](media/select-render-frame.png)

6. If you don't want the texture to be semi-transparent, under the **Source** properties, clear the **Is transparent** checkbox.

    ![Clear-is-transparent](media/clear-is-transparent.png)

## 5. Set up the graphics compositor

To display a render texture in your scene, you need at least two renderers:

* one to render your main camera
* one to render the second camera to the render texture

This page describes the simplest way to do this from scratch, using two cameras and two renderers. Depending on your pipeline, you might need to create a different setup.

> [!Warning]
> These instructions involve deleting your existing renderers for the game entry point. You might want to make a backup of your project in case you want to restore your pipeline afterwards.

1. In the graphics compositor editor, select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

2. In the **Property Grid** on the right, next to **Game renderer**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **None** to delete your existing renderers.

    ![Cleared game renderers](media/game-renderers-cleared.png)

3. Click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **Scene renderer collection**.

    ![Select scene renderer collection](media/select-scene-renderer-collection.png)

    This lets you set multiple renderers for the game entry point.

### 1. Render the main camera

1. Under **Game renderer**, next to **Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.

    ![Select camera renderer](media/select-render-camera.png)

2. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select your main game camera.

    ![Select main camera](media/select-main-camera.png)

4. Next to **Child**, select the renderer for your main game camera (eg the **forward renderer**).

    ![Select forward render](media/select-main-camera-forward-renderer.png)

### 2. Render the texture

1. Under **Game renderer**, next to **Add to Children**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Camera renderer**.

    ![Select camera renderer](media/select-render-camera2.png)

    Game Studio adds a camera renderer to the list of children.

    ![Second camera renderer](media/added-camera-renderer.png)

2. Expand the second **camera renderer**.

    ![Expand second renderer](media/expand-second-camera-renderer.png)

3. Next to **Camera**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the camera you want to render to a texture.

    ![Select texture camera](media/select-texture-camera.png)

4. Next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **RenderTextureSceneRenderer**.

    ![Select render texture scene renderer](media/render-texture-scene-renderer.png)

5. Under the **RenderTextureSceneRenderer**, next to **Child**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the renderer for your main game camera (eg the **forward renderer**).

    ![Select forward renderer](media/select-forward-renderer2.png)

6. Next to **Render texture**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

7. Select the **render texture** and click **OK**.

    ![Select render texture](media/select-render-frame.png)

    Game Studio adds the render texture to the renderer.

    ![Render texture added](media/render-texture-added.png)

Your game is now ready to render the camera to the texture in the scene.

## Set a render mask

You can use the **render mask** to filter which groups are rendered in the render texture.

Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.

![Render mask](media/change-render-mask.png)

 For more information, see [Render groups and masks](render-groups-and-masks.md).

## Sample

For an example of rendering to a texture in a project, see the **Animation** sample included with Stride.

## See also

* [Cameras](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Low-level API – Textures and render textures](../low-level-api/textures-and-render-textures.md)
* [Render groups and masks](render-groups-and-masks.md)
* [Graphics compositor](index.md)
* [Scene renderers](scene-renderers.md)