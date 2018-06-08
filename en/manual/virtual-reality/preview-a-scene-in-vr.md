# Preview a scene in VR

To preview your scene in your VR device, connect the editor to a [VR-enabled](enable-vr.md) renderer.

<p>
<video autoplay loop class="responsive-video" poster="media/vr-editor_640.jpg">
   <source src="media/vr-editor_640.mp4" type="video/mp4">
</video>
</p>

To do this:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](media/graphics-compositor-VR-template.png)

2. Select the **forward render node** connected to the editor node. For example, in the screenshot below (taken from the Xenko VR sample project), the editor is connected to the lower forward renderer node.

    ![Node connections](media/node-connections.png)

3. With the forward renderer node selected, in the **Property Grid**, enable **VRRendererSettings**.

    ![Select editor renderer](media/enable-vr.png)

Your VR device displays the scene preview. To display the scene on your monitor instead, disable **VRRendererSettings**.

## Create a separate renderer to preview scenes in VR

If your editor and game nodes are connected to the same forward renderer, you might want to create a separate renderer dedicated to the editor. This lets you easily switch between previewing the scene in your VR device and on your monitor.

>[!Note]
>If your editor and game nodes already use separate renderers (as in the VR sample project), you don't need to follow these instructions.

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics/graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics compositor editor](media/graphics-compositor-no-editor-node.png)

2. Create a new forward renderer node. To do this, right-click the game compositor editor and select **Create > Forward renderer**.

    ![Create forward renderer](media/create-forward-renderer.png)

3. Select the **Entry points** node.

    ![Entry points node](media/entry-points-node.png)

4. In the **Property Grid**, next to **Editor renderer**, select the forward renderer you created.

    ![Select forward renderer](media/select-editor-forward-renderer.png)

    Xenko links the editor to the forward renderer node.

    ![Node connections](media/node-connections.png)

5. Set the properties of the new forward renderer so they're identical to the forward renderer you use to run the game in VR, including the VR settings.

    > [!Tip]
    > You can right-click a property to copy or paste it.

    > ![Copy-paste properties](media/copy-paste-properties.png)

    > [!Note]
    > Make sure the forward renderer has VR enabled. For instructions, see [Enable VR](enable-vr.md).

Xenko displays the scene preview in your VR device. To display the scene on your monitor instead, disable **VRRendererSettings** in the properties of the new forward renderer.

![Enable VR](media/vr-renderer-settings.png)

## See also

* [Enable VR](enable-vr.md)
* [Graphics compositor](../graphics/graphics-compositor/index.md)