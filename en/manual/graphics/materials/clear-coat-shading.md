# Clear-coat shading

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>

**Clear-coat shading** uses physically-based rendering to simulate vehicle paint.

![Clear coat](media/clear-coat-2.jpg)

Real vehicles typically have three layers of paint applied to the body, as in the diagram below:

![Diagram](media/paint-layers.png)

To keep the shading simple, Xenko only simulates the **base coat** (including optional metal flakes) and **clear coat** layers. Xenko blends the layers depending on how far the camera is from the material. This reduces visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).

Clear-coat shading has several advantages over creating the effect manually with [material layers](material-layers.md):

* layers are blended based on distance
* increased performance
* improved visualization

## Add a clear-coat material

Xenko includes a clear-coat material template. To add it, in the **Asset View**, click **Add asset** and select **Material > PBR material: clear coat**.

![Add clear coat](media/add-clear-coat.png)

Alternatively, to set clear-coat properties yourself:

1. Select the material you want to use clear-coat shading.

2. In the Property Grid, under the **Misc** properties, next to **Clear coat**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose **Clear coat**.

    ![Select clear coat](media/select-clear-coat.png)

    >[!Note]
    >For clear-coat shading to work correctly, make sure you enable **Diffuse**, **Specular** and **Specular model** under the material **Shading** properties.
    
    >![Shading options](media/enable-shading-options.png)

## Properties

You can access the clear-coat shader properties under **Misc > Clear coat**. They're split into three parts: the **base paint** and optional **metal flake** properties simulate the base coat, and the **clear coat** properties simulate the clear coat. 

The metal flake properties simulate a metallic paint effect. To disable the effect, remove the metal flake normal map.

![Add clear coat](media/clear-coat-properties.png)

| Property | Description 
|------------------------------|----------
| Base paint diffuse map  |  The [diffuse map](shading-attributes.md) used by the base paint layer (the lowest  layer). This determines the color of the layer.
| Base paint gloss map |  The [gloss map](geometry-attributes.md) used by the base paint layer. For a coherent result, use the **metal flake normal map** as a mask.         
| Metal flakes diffuse map  |  The [diffuse map](shading-attributes.md) used by the metal flake layer (the layer above the base paint). For a coherent result, use a value close to the base paint value.
| Metal flakes gloss map | The [gloss map](geometry-attributes.md) used by the metal flake layer. For a coherent result, use the **metal flake normal map** as a mask. 
| Metal flakes metalness map | The [metalness map](shading-attributes.md) used by the metal flake layer. For best results, use high values.
| Metal flake normal map  | The [normal map](../textures/normal-maps.md) used by the metal flake layer. This shapes the flake geometry. A metal flake normal map  (**XenkoClearCoatMetalFlakesNM**) is included in the Xenko assets package. If the texture has a high UV scale, enable **Use random texture coordinates** below to reduce tiling effects. To disable the metal flakes effect, remove the normal map.
| Coat gloss map  | The [gloss map](geometry-attributes.md) used by the clear coat layer. Change this value to simulate different kinds of paint (eg matte).
| Clear coat metalness map  | The [metalness map](shading-attributes.md) used by the clear coat layer
| Orange peel normal map  | The [normal map](../textures/normal-maps.md) used by the clear coat layer to create an "orange peel" effect. This reflects light in different angles, simulating paint imperfections whereby the texture appears bumpy, like the skin of an orange. An orange peel normal map (**XenkoClearCoatOrangePeelNM**) is included in the Xenko assets package.
| Layer transition distance  | The distance (in meters) at which the base paint layer transitions to the metal flake layer. This helps fight visual artifacts caused by the metal flake normal map (which becomes more visible as the camera moves away from the material).

## Reduce tiling and artifacts

Properties that use binary operators should use **normalized values** (ie between `0.0` and `1.0`). For example, in the screenshot below, the **left** operator uses a value of `0.5`.

![Binary operator](media/clear-coat-binary-operator.png)

Values over `1.0` might produce tiling artifacts, as in the image below (note the grid pattern):

![Artifact](media/clear-coat-artifact1.jpg)

### XenkoClearCoatMetalFlakesNM

The metal flakes in the metal flake normal map included in the Xenko assets package (**XenkoClearCoatMetalFlakesNM**) are quite large. For this reason, we recommend you: 

* use a high **UV scale factor** which tiles the texture (thereby shrinking the flakes) 

* enable **Use random texture coordinates**, preventing an obvious tiling effect

    ![Use random texture coordinates](media/use-random-texture-coordinates.png)

>[!Note]
>The **Use random texture coordinates** option is costly, so we don't recommend you use it for mobile platforms.

Alternatively, use a normal map with a higher density of smaller metal flakes.

## See also

* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)