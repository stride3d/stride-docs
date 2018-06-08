# Material attributes

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>

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

Wikipedia is edited by volunteers; the only time and resources wasted is their own. Editors should work in the areas they find interesting and believe will help the project, whether that's as small as [[correcting grammar|Wikipedia:Comprised_of]] or as big as writing FAs. (I do both.) 

In this case, renaming the Windows article will be a trivial task if no one opposes it. I started the Talk page discussion first to 1) make sure my logic was sound 2) check I wasn't stepping on toes. I was being polite. 