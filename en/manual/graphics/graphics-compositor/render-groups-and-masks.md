# Render groups and masks

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Designer</span>

With **render groups** and **render masks**, you can choose which parts of your scene are rendered by different [cameras](../cameras/index.md). For example, you can have a model be visible to Camera A but invisible to Camera B.

## Set a render group

1. In the scene, select the entity with the component (such as a model or [UI component](../../ui/add-a-ui-to-a-scene.md)) you want to add to a render group.

2. In the **Property Grid**, next to **Render group**, select the group you want the entity to belong to.

    ![Select render group](media/select-render-group.png)

## Set a render mask

The **render mask** filters which groups are rendered.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](media/graphics-compositor-asset.png)

    The Graphics Compositor Editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-editor.png)

2. Select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

3. In the **Property Grid**, expand the renderer you want to render the model.

4. Next to **Render mask**, click **Change values** and select the render groups you want the camera to render.

    ![Render mask](media/change-render-mask.png)

## See also

* [Cameras](../cameras/index.md)
* [Camera slots](../cameras/camera-slots.md)
* [Graphics compositor](index.md)
* [Scene renderers](scene-renderers.md)
* [Render textures](render-textures.md)