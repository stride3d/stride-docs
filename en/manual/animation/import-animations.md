# Import animations

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

To animate a model, you need to use three kinds of assets together:

* models
* skeletons
* animations

You can import these assets from 3D model files. Xenko supports the following model file types: ``.3ds``, ``.blend``, ``.dae``, ``.dxf``, ``.fbx``, ``.md2``, ``.md3``, ``.obj``, ``.x``

## Import a model, skeleton, or animation from a model file

1. Drag the model file from Explorer to the **Asset View** (in the bottom pane by default).

    ![Choose asset type](media/create-and-add-assets-drag-and-drop-model.png)

    Alternatively, in the **Asset View**:

    1a. Click ![Add asset](media/create-and-add-assets-add-new-asset-button.png) and select **Import directly from files**.
    
    ![Choose asset type](media/create-and-add-assets-add-new1.png)

    2b. Browse to the file and click **Open**.

2. Specify whether you want to import the **3D model**, **animation**, or **skeleton** from the model file.

    ![Choose asset type](media/create-and-add-assets-choose-asset-type.png)

    * If you choose **3D model**, Xenko can import any additional materials, textures and skeletons it finds in the model file. You can also import the skeleton from the model (**Import new skeleton**), import no skeleton (**Don't use skeleton**), or specify a different skeleton (**Use existing skeleton**) in the lower field.

    ![Choose asset type](media/create-and-add-assets-model-import-parameters.png)

    * If you choose **Skeleton**, Xenko imports only the skeleton from the model file. You might want to do this, for example, if you want to use it for a new skeleton that uses a subset of its nodes.

    * If you choose **Animation**, Xenko imports only the animation from the model file. This is sufficient for regular animations; for additive information, there are some extra steps. For details, see [Additive animation](additive-animation.md).

After you import the assets, Game Studio adds them to the **Asset View**.

![Assets in Asset View](media/assets-in-asset-view1.png)

You can view and edit their properties in the **Property Grid** (on the right by default). For more information, see [Animation properties](animation-properties.md).

![Properties](media/animations-properties.png)

## Use an animation asset

To use an animation asset, add an [AnimationComponent](xref:Xenko.Engine.AnimationComponent) to an entity, then add the animation asset to the animation component. For more information, see [Set up animations](set-up-animations.md).

>[!Note]
>Make sure you correctly skin your mesh to the skeleton. If you don't, you won't be able to animate your model correctly.

## See also

* [Animation index](index.md)
* [Animation properties](animation-properties.md)
* [Set up animations](set-up-animations.md)
* [Preview animations](preview-animations.md)
* [Animation scripts](animation-scripts.md)
* [Additive animation](additive-animation.md)
* [Procedural animation](procedural-animation.md)
* [Custom blend trees](custom-blend-trees.md)
* [Model node links](model-node-links.md)
* [custom attributes](custom-attributes.md)