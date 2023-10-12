# Materiais

**materiais** definem a aparência das superfícies do modelo 3D e como reagem à luz. Sem materiais, os modelos são simplesmente formas, telas em branco.

![media/material-layers-2.png](media/material-layers-2.png)

Os materiais podem afetar tanto a geometria de um modelo (soldagem de vértice) quanto suas cores (soldagem de pixel).

Você pode usar camadas de material [multiple](material-layers.md) para construir materiais mais complexos.

Na prática, os materiais geram definições parciais de shaders integrados como parte da sombreamento de modelos ([lights e sombras](../lights-and-shadows/index.md)).

## Nesta secção

* [Mapas de material](material-maps.md)
* [Atributos de material](material-attributes.md)
   * [Atributos de geometria](geometry-attributes.md)
   * [Atributos de Shading](shading-attributes.md)
   * [Atributos diversos](misc-attributes.md)
      * [Shading de cobertura clara](clear-coat-shading.md)
* [Camadas de material](material-layers.md)
* [Slots de material](material-slots.md)
* [Materiais para desenvolvedores](materials-for-developers.md)