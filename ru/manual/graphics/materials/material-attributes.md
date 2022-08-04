# Material attributes
# Атрибуты материала

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Material attributes** define the core characteristics of a material, such as its diffuse color, diffuse shading model, and so on. Attributes are organized into **geometry**, **shading**, and **misc**.
**Атрибуты материала** определяют основные характеристики материала, такие как его диффузный цвет, модель диффузного затенения и т. д.  Атрибуты разделены на **геометрию**, **затенение** и **разное**.

![media/material-attributes-1.png](media/material-attributes-1.png)
![media/material-attributes-1.png](media/material-attributes-1.png)

There are two types of attribute:
Существует два типа атрибута:

- attributes used as input values for a shading model (for example, the **Diffuse** attribute provides only color used by the diffuse shading model)
- атрибуты, используемые в качестве входных значений для модели затенения (например, атрибут **Diffuse** предоставляет только цвет, используемый моделью диффузного затенения)
- attributes that can change the shading model (for example, diffuse shading models, such as the lambert model, interprets the diffuse attribute color)
- атрибуты, которые могут изменить модель затенения (например, модели диффузного затенения, такие как модель Ламберта, интерпретируют цвет диффузного атрибута)

Attributes contribute to a layer of a material. If a material is directly used as a model material, all its root attributes are considered part of the first layer.
Атрибуты вносят вклад в слой материала.  Если материал используется непосредственно в качестве материала модели, все его корневые атрибуты считаются частью первого слоя.

You can also write [custom shaders](../effects-and-shaders/custom-shaders.md) to use in material attributes.
Вы также можете написать [пользовательские шейдеры](../effects-and-shaders/custom-shaders.md) для использования в атрибутах материала.

## In this section
## В этой секции

* [Geometry attributes](geometry-attributes.md)
* [Атрибуты геометрии](geometry-attributes.md)
* [Shading attributes](shading-attributes.md)
* [Атрибуты затенения](shading-attributes.md)
* [Misc attributes](misc-attributes.md)
* [Разные атрибуты](misc-attributes.md)
    * [Clear coat shading](clear-coat-shading.md)
* [Затенение прозрачного покрытия](clear-coat-shading.md)

## See also
## Смотрите также

* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material layers](material-layers.md)
* [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
* [Пользовательские шейдеры](../effects-and-shaders/custom-shaders.md)
