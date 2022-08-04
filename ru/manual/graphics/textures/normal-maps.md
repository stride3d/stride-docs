# Normal maps
# Карты нормалей

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Normal maps** are textures that add the appearance of surface detail, such as cracks and bumps, without changing the actual geometry of a model. They contain information about how meshes should reflect light, creating the illusion of much more complex geometry. This saves lots of processing power.
**Карты нормалей** — это текстуры, которые добавляют детали поверхности, такие как трещины и неровности, без изменения фактической геометрии модели.  Они содержат информацию о том, как сетки должны отражать свет, создавая иллюзию гораздо более сложной геометрии.  Это экономит много вычислительной мощности.

| No normal map | With a normal map
|  Нет карты нормалей |  С обычной картой
| --------------| ----------- 
|  --------------|  -----------
| ![media/material-attributes-15.png](../materials/media/material-attributes-15.png)  | ![media/material-attributes-16.png](../materials/media/material-attributes-16.png)  
|  ![media/material-attributes-15.png](../materials/media/material-attributes-15.png) |  ![media/material-attributes-16.png](../materials/media/material-attributes-16.png)

| Original mesh | Simplified mesh | Simplified mesh and normal map 
|  Оригинальная сетка |  Упрощенная сетка |  Упрощенная сетка и карта нормалей
|---------------|-----------------|---------
|---------------|-----------------|---------
| ![Example 1](media/normal_map_example1.jpg) | ![Example 2](media/normal_map_example2.jpg) | ![Example 3](media/normal_map_example3.jpg)
|  ![Пример 1](media/normal_map_example1.jpg) |  ![Пример 2](media/normal_map_example2.jpg) |  ![Пример 3](media/normal_map_example3.jpg)
| 4m triangles | 500 triangles | 500 triangles
|  4м треугольники |  500 треугольников |  500 треугольников

*(Images courtesy of Paolo Cignoni, shared under [Attribution-ShareAlike 1.0 Generic (CC BY-SA 1.0)](https://creativecommons.org/licenses/by-sa/1.0/)*
*(Изображения предоставлены Паоло Чиньони, размещены в [Attribution-ShareAlike 1.0 Generic (CC BY-SA 1.0)](https://creativecommons.org/licenses/by-sa/1.0/)*

Normal maps usually represent small changes of the normal vector (the vector which points away from the surface). Stride uses the most common convention: the X and Y components follow the tangent and the bitangent of the surface, and the Z component follows the normal vector of the surface. This means that a value of `(0, 0, 1)` coincides with the normal vector and represents no change, while a value of `(-1, 0, 0)` tilts to the "left" (ie negative X value in the tangent (local) space).
Карты нормалей обычно представляют собой небольшие изменения вектора нормали (вектора, направленного от поверхности).  Stride использует наиболее распространенное соглашение: компоненты X и Y следуют касательной и бикасательной поверхности, а компонента Z следует вектору нормали к поверхности.  Это означает, что значение `(0, 0, 1)` совпадает с вектором нормали и не представляет изменения, в то время как значение `(-1, 0, 0)` наклоняется влево (т.е. отрицательное значение X  в касательном (локальном) пространстве).

![media/material-attributes-13.png](../materials/media/material-attributes-13.png) 
![media/material-attributes-13.png](../materials/media/material-attributes-13.png)

## Use a normal map
## Использовать карту нормалей

1. In the **Asset View**, select the texture you want to use as a normal map.
1. В **Asset View** выберите текстуру, которую вы хотите использовать в качестве карты нормалей.

    ![Select normal map texture](media/select-normal-map-texture.png)
![Выберите текстуру карты нормалей](media/select-normal-map-texture.png)

2. In the **Property Grid**, make sure the **type** is set to **normal map**.
2. В **Сетке свойств** убедитесь, что для **типа** установлено значение **карта нормалей**.

    ![Normal map](media/normal-map-expanded-properties.png)
![Карта нормалей](media/normal-map-expanded-properties.png)

    This means Stride assumes the texture is in linear color space and converts it to a format suited for normal maps.
Это означает, что Stride предполагает, что текстура находится в линейном цветовом пространстве, и преобразует ее в формат, подходящий для карт нормалей.

3. In the **Asset View**, select the material you want to use the normal map.
3. В **Asset View** выберите материал, для которого вы хотите использовать карту нормалей.

    ![Select material](media/select-material.png)
![Выбрать материал](media/select-material.png)

4. In the **Property Grid**, under the material **Geometry** properties, expand **Surface**.
4. В **Сетке свойств** под свойствами материала **Геометрия** разверните **Поверхность**.

    ![Use normal maps](media/use-normal-map.png)
![Использовать карты нормалей](media/use-normal-map.png)

5. Next to **Normal map**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and make sure **Texture** is selected.
5. Рядом с **Картой нормалей** нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и убедитесь, что **Текстура  ** выбран.

6. Next to **Normal map**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).
6. Рядом с **Картой нормалей** нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите актив**).

    ![Select asset](media/select-asset-texture.png)
![Выберите ресурс](media/select-asset-texture.png)

7. Select the normal map texture and click **OK**.
7. Выберите текстуру карты нормалей и нажмите **ОК**.

For more information about materials, see [Materials](../materials/index.md).
Для получения дополнительной информации о материалах см. [Материалы](../materials/index.md).

## Normal map properties
## Свойства карты нормалей

Normal map textures have two properties in addition to the [common texture properties](index.md).
Текстуры карты нормалей имеют два свойства в дополнение к [общим свойствам текстуры] (index.md).

![Normal map textures](media/normal-map-texture-properties.png)
![Текстуры карты нормалей](media/normal-map-texture-properties.png)

| Property | Description
|  Недвижимость |  Описание
|----------|---------
|----------|---------
| Invert Y | Have positive Y components (green pixels) face up in tangent space. This option depends on the tools you use to create normal maps.
|  Инвертировать Y |  Положите положительные компоненты Y (зеленые пиксели) лицом вверх в касательном пространстве.  Этот параметр зависит от инструментов, которые вы используете для создания карт нормалей.

For information about normal map properties in materials, see [Materials — Geometry attributes](../materials/geometry-attributes.md).
Информацию о свойствах карт нормалей в материалах см. в разделе [Материалы — Атрибуты геометрии](../materials/geometry-attributes.md).

## See also
## Смотрите также

* [Textures](index.md)
* [Текстуры](index.md)
* [Materials](../materials/index.md)
* [Материалы](../materials/index.md)
* [Normal mapping on Wikipedia](http://en.wikipedia.org/wiki/Normal_mapping)
* [Сопоставление нормалей в Википедии](http://en.wikipedia.org/wiki/Normal_mapping)
