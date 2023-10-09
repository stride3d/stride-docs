# Normal maps

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

**Normal maps** are textures that add the appearance of surface detail, such as cracks and bumps, without changing the actual geometry of a model. They contain information about how meshes should reflect light, creating the illusion of much more complex geometry. This saves lots of processing power.

| No normal map | With a normal map
| --------------| ----------- 
| ![media/material-attributes-15.png](../materials/media/material-attributes-15.png)  | ![media/material-attributes-16.png](../materials/media/material-attributes-16.png)  

| Original mesh | Simplified mesh | Simplified mesh and normal map 
|---------------|-----------------|---------
| ![Example 1](media/normal_map_example1.jpg) | ![Example 2](media/normal_map_example2.jpg) | ![Example 3](media/normal_map_example3.jpg)
| 4m triangles | 500 triangles | 500 triangles

*(Images courtesy of Paolo Cignoni, shared under [Attribution-ShareAlike 1.0 Generic (CC BY-SA 1.0)](https://creativecommons.org/licenses/by-sa/1.0/)*

Normal maps usually represent small changes of the normal vector (the vector which points away from the surface). Stride uses the most common convention: the X and Y components follow the tangent and the bitangent of the surface, and the Z component follows the normal vector of the surface. This means that a value of `(0, 0, 1)` coincides with the normal vector and represents no change, while a value of `(-1, 0, 0)` tilts to the "left" (ie negative X value in the tangent (local) space).

![media/material-attributes-13.png](../materials/media/material-attributes-13.png) 

## Use a normal map

1. In the **Asset View**, select the texture you want to use as a normal map.

    ![Select normal map texture](media/select-normal-map-texture.png)

2. In the **Property Grid**, make sure the **type** is set to **normal map**.

    ![Normal map](media/normal-map-expanded-properties.png)

    This means Stride assumes the texture is in linear color space and converts it to a format suited for normal maps.

3. In the **Asset View**, select the material you want to use the normal map.

    ![Select material](media/select-material.png)

4. In the **Property Grid**, under the material **Geometry** properties, expand **Surface**.

    ![Use normal maps](media/use-normal-map.png)

5. Next to **Normal map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and make sure **Texture** is selected.

6. Next to **Normal map**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

    ![Select asset](media/select-asset-texture.png)

7. Select the normal map texture and click **OK**.

For more information about materials, see [Materials](../materials/index.md).

## Normal map properties

Normal map textures have two properties in addition to the [common texture properties](index.md).

![Normal map textures](media/normal-map-texture-properties.png)

| Property | Description
|----------|---------
| Invert Y | Have positive Y components (green pixels) face up in tangent space. This option depends on the tools you use to create normal maps.

For information about normal map properties in materials, see [Materials — Geometry attributes](../materials/geometry-attributes.md).

## See also

* [Textures](index.md)
* [Materials](../materials/index.md)
* [Normal mapping on Wikipedia](http://en.wikipedia.org/wiki/Normal_mapping)