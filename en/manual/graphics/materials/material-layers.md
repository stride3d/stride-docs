# Material layers

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>

You can combine layers of materials to build more complex materials. For example, this screenshot shows the blending of a rust material (left) with a gold material (right):

![media/material-layers-2.png](media/material-layers-2.png) 

This diagram shows the definition of the materials blended in the screenshot above:

![media/material-layers-3.png](media/material-layers-3.png)

## Blend maps

**Blend maps** are [material maps](material-maps.md) that determine how Game Studio blends layers. For example, you can use a texture as a blend map:

![Blend map diagram](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)

Note how the blend map texture corresponds to the patterning on the result.

Blend maps work the same way as any other kind of material map. For more information, see [Material maps](material-maps.md).

## Shading models

Xenko blends materials differently depending on whether their shading models (eg diffuse models, specular models, etc) are different.

If you blend materials that have **identical** shading models, Xenko collects the **attributes** of the materials, then applies the shading models to all of them. This saves GPU.

If the materials have **different** shading models, Xenko applies each material's shading models to that material's attributes, then blends the results. This uses more GPU.

## Add a layer

1. Select the material you want to add a layer to.

2. In the **Property Grid** (on the right by default), next to **Layers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    ![Add a layer](media/add-a-layer.png)

    Game Studio adds a layer to the material.

    ![Empty layer](media/empty-layer.png)

3. Next to the layer, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    The **Select an asset** window opens.

    ![Select an asset](media/material-asset-picker.png)

4. Specify a material you want to add as a layer and click **OK**.

    Game Studio adds the material as a layer.
    
    ![Added layer](media/added-layer.png)

5. Next to **Blend Map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select the type of blend map you want to use to blend the layers. For more information about blend maps, see [Material maps](material-maps.md).

    ![Select blend map](media/select-blend-map.png)

Game Studio blends the material layers using the blend map you specified. You can add as many layers as you need.

## Layer properties

| Property        | Description 
| --------------- | --------------- 
| Material        | The material blended in this layer
| Blend Map       | The [blend map](material-maps.md) used to blend this layer with the layer above
| Layer Overrides |  **UV Scale**: A UV scale applied to all textures UV of the material of the layer (excluding the occlusion map)

## See also

* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)