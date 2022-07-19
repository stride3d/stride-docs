# Animate a camera with a model file

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

Like other entities, you can [animate](../../animation/index.md) cameras using animations imported from 3D model files such as `.3ds`, `.fbx`, and `.obj`.

>[!Note]
>To animate a camera using a model file, you first need to bake the animation using your modeling tool (eg Maya, 3ds Max or Blender).
>Stride doesn't support cameras animated using target cameras.

If the camera moves independently, the simplest method is to export the camera animation as a separate file, enable the **root motion** option on the animation, then add the camera, animation, and animation script to the same entity. If the animations include FOV or near or far plane animations, the Stride camera updates accordingly. With this method, you don't need a model or a skeleton.

If you want the camera to move in tandem with another animation — for example, if the camera is held by a cameraman character with its own model, skeleton and animation — use a [model node link](../../animation/model-node-links.md) component to link the camera entity to the cameraman's movements.

## Animate a camera independently

To do this, you need the following assets in your project:

* a [camera entity](../index.md), the camera to be animated
* an [animation](../../animation/import-animations.md), to animate the camera (exported separately in your modeling tool)
* an [animation script](../../animation/animation-scripts.md), to play the animation

1. In the **Asset View**, select the animation asset you want to use to animate the camera.

    ![Select animation asset](media/select-animation1.png)

    >[!Note]
    >For instructions about how import animations, see [Import animations](../../animation/import-animations.md).

2. In the **Property Grid**, enable **Root motion**.

    ![Enable root motion](media/enable-root-motion.png)

    When root motion is enabled, Stride applies the **root node animation** to the [TransformComponent](xref:Stride.Engine.TransformComponent) of the entity you add the animation to, instead of applying it to the skeleton.

    >[!Note]
    >If there is no skeleton specified in **Skeleton**, Stride always applies the animation to [TransformComponent](xref:Stride.Engine.TransformComponent), even if **root motion** is disabled.

3. In the **Scene Editor**, select the entity that contains the camera you want to animate.

    >[!Note]
    >For instructions about how add cameras, see [Cameras](index.md).

4. In the **Property Grid**, click **Add component** and select **Animations**.

    ![Select an entity](media/add-animations-component-to-camera.png)

    Game Studio adds an animation component to the entity.

    ![Animation component](media/animation-component-added-to-camera.png)

5. Next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and type a name.

    ![Add animation](media/animation-name.png)

    Game Studio adds an animation to the list.

    ![Animation added](media/animation-added.png)

6. Next to the animation you added, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/select-mycamera-animation.png)

7. Select the animation you want to use to animate the camera and click **OK**.

8. Click **Add component** and select the animation script you want to use to animate the camera.

    ![Add animation script](media/add-animation-script.png)

    Game Studio adds the script to the entity as a component.

    >[!Note]
    >For instructions about how to add animation scripts, see [Animation scripts](../../animation/animation-scripts.md).

9. Under the script component, next to **Animations**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Add animation to the list](../../animation/media/add-animation-to-list.png)

10. Next to **Clip**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/select-mycamera-animation.png)

11. Select the animation asset you want to use to animate the camera and click **OK**.

At runtime, the camera uses the animation. If the animation includes FOV or near or far plane animations, the Stride camera updates accordingly.

## Attach the camera to a node on another model

To move a camera in tandem with another model, create a separate entity for the camera, then use a **model node link** component to link the entity to the correct node.

To do this, you need the following assets in your project:

* a [camera entity](../index.md), the camera you want to animate
* a [model](../../animation/index.md), to attach the camera to
* a [skeleton](../../animation/index.md) that matches the model
* an [animation](../../animation/index.md), to animate the model
* an [animation script](../../animation/animation-scripts.md), to play the animation

>[!Note]
>FOV and near or far plane animations are ignored if you use this method.

1. In the **Asset View**, select the model you want to link the camera to. Next to **Skeleton**, make sure a skeleton is specified that matches the model.

2. Make sure the entity you want to attach the camera to has the model, animation clip, and animation script components needed to animate it.

    >[!Note]
    >For instructions about how to add these, see [Animation](../../animation/index.md).

3. With the camera entity selected, in the **Property Grid**, click **Add component** and select **Model node link**.

    ![Add component](../../particles/tutorials/media/add-model-node-link.png)

    >[!Note]
    >The [TransformComponent](xref:Stride.Engine.TransformComponent) applies an offset to the model node position. If you don't want to add an offset, make sure the [TransformComponent](xref:Stride.Engine.TransformComponent) is set to `0,0,0`.

    Game Studio adds a model link component to the entity.

    ![Model node link component](../../animation/media/model-node-component.png)

4. Next to **Target**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) and select the entity that has the model you want to link the camera to.

    ![Select an entity](../../animation/media/select-an-entity-window.png)

    Alternatively, leave the **Target** field blank. In the **Entity Tree**, drag the **camera entity** you want to animate to the entity that contains the model. Stride links the entity to the model on the parent entity.

    ![Parent and child](media/parent-and-child.png)

5. In **Node name**, select the node you want to link the camera to.

    ![Node link](media/select-node.png)

    >[!Note]
    >The entity you link to must have a model with a skeleton, even if the model isn't visible at runtime.

At runtime, the camera uses the animation.

## See also

* [Cameras](index.md)
* [Model node links](../../animation/model-node-links.md)
* [Animation](../../animation/index.md)
* [Animation scripts](../../animation/animation-scripts.md)