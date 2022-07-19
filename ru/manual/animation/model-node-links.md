# Model node links

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>

>[!Note]
>In some versions of Stride, **Model node links** are called **Bone links**.

The **model node link** component attaches an entity to a node of a skeleton on another entity.

For example, imagine you have two models: a knight, and a sword. The character has a sword swinging animation. You can use a model link node to place the sword in the knight's hand and attach it to the correct node in the knight skeleton, so the sword swings with the knight animation.

<p>
<video autoplay loop class="responsive-video" poster="../particles/tutorials/media/sword-slash-1.jpg">
   <source src="../particles/tutorials/media/sword-slash-1.mp4" type="video/mp4">
</video>
</p>

## Set up a model node link component

1. In the **Scene Editor**, select the entity you want to link to a node in another entity.

2. In the **Property Grid**, click **Add component** and select **Model node link**.

    ![Add component](../particles/tutorials/media/add-model-node-link.png)

    Game Studio adds a model node link component to the entity.

    ![Model node link component](media/model-node-component.png)

    The component only has two properties: **Node name** and **Target**.

3. Next to **Target**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png).

    The **Select an entity** window opens.

    ![Select an entity](media/select-an-entity-window.png)

4. Select the model you want to link the entity to and click **OK**.

    >[!Note]
    >The entity you link to must have a model with a skeleton, even if the model isn't visible at runtime.

    >[!Tip]
    >If you don't specify a model, Stride links the entity to the model on the parent entity.

5. In **Node name**, select the node in the model you want to attach this entity to.

    ![Select node](media/select-node.png)

    After you link the node, the Entity Tree shows the link in blue next to the entity name.
    
    ![Model node link](media/model-node-link-sword-added.png)

## Offset

To add an offset to the linked entity, use the entity's [TransformComponent](xref:Stride.Engine.TransformComponent).

![Transform](media/transform-component.png)

>[!Note]
>If you don't want to add an offset, make sure the values are all set to `0,0,0`.

## See also

* [Import animations](import-animations.md)
* [Animation properties](animation-properties.md)
* [Set up animations](set-up-animations.md)
* [Preview animations](preview-animations.md)
* [Animation scripts](animation-scripts.md)
* [Additive animation](additive-animation.md)
* [Procedural animation](procedural-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [custom attributes](custom-attributes.md)

For examples of how model node links are used, see:

* [Particles — Create a trail](../particles/tutorials/create-a-trail.md)
* [Cameras — Animate a camera with a model file](../graphics/cameras/animate-a-camera-with-a-model-file.md)
