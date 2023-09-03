# Material attributes

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

**Material attributes** define the core characteristics of a material, such as its diffuse color, diffuse shading model, and so on. Attributes are organized into **geometry**, **shading**, and **misc**.

![media/material-attributes-1.png](media/material-attributes-1.png)

There are two types of attribute:

- attributes used as input values for a shading model (for example, the **Diffuse** attribute provides only color used by the diffuse shading model)
- attributes that can change the shading model (for example, diffuse shading models, such as the lambert model, interprets the diffuse attribute color)

Attributes contribute to a layer of a material. If a material is directly used as a model material, all its root attributes are considered part of the first layer.

You can also write [custom shaders](../effects-and-shaders/custom-shaders.md) to use in material attributes.

## In this section

* [Geometry attributes](geometry-attributes.md)
* [Shading attributes](shading-attributes.md)
* [Misc attributes](misc-attributes.md)
    * [Clear coat shading](clear-coat-shading.md)

## See also

* [Material maps](material-maps.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
