# Geometry attributes
# Атрибуты геометрии

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The material **geometry** attributes define the shape of a material.
Атрибуты материала **геометрия** определяют форму материала.

![Geometry properties](media/geometry-properties.png)
![Свойства геометрии](media/geometry-properties.png)

## Tessellation
## Мозаика

Real-time tessellation uses a HW feature of the GPU to massively subdivide triangles. This increases the realism and potential of deformations of the surface geometry.
Тесселяция в реальном времени использует аппаратную функцию графического процессора для массового разделения треугольников.  Это увеличивает реалистичность и потенциал деформаций геометрии поверхности.

You can choose **none**, **flat tessellation**, or **point normal tessellation**.
Вы можете выбрать **нет**, **плоская мозаика** или **точечная нормальная мозаика**.

| No tessellation  | Flat tessellation | Point normal tessellation 
|  Нет тесселяции |  Плоская мозаика |  Точечная нормальная тесселяция
| --------------  | -------------- | -------------------- 
|  -------------- |  -------------- |  --------------------
| ![media/material-attributes-2.png](media/material-attributes-2.png)  | ![media/material-attributes-3.png](media/material-attributes-3.png)  | ![media/material-attributes-4.png](media/material-attributes-4.png)
|  ![media/material-attributes-2.png](media/material-attributes-2.png) |  ![media/material-attributes-3.png](media/material-attributes-3.png) |  ![media/material-attributes-4.png](media/material-attributes-4.png)

### Flat tessellation
### Плоская тесселяция

This option tessellates the mesh uniformly.
Этот параметр позволяет равномерно разбить сетку.

![media/material-attributes-5.png](media/material-attributes-5.png) 
![media/material-attributes-5.png](media/material-attributes-5.png)

In the images below, notice how the flat tessellation adds extra triangles, but doesn't take the curve into account:
На изображениях ниже обратите внимание, как плоская мозаика добавляет дополнительные треугольники, но не учитывает кривую:

| No tessellation  | Flat tessellation  
|  Нет тесселяции |  Плоская мозаика
| ---------------- | ----------------- 
|  ---------------- |  ------------------
| ![media/material-attributes-6.png](media/material-attributes-6.png)  | ![media/material-attributes-7.png](media/material-attributes-7.png)   
|  ![media/material-attributes-6.png](media/material-attributes-6.png) |  ![media/material-attributes-7.png](media/material-attributes-7.png)

| Property               | Description      
|  Недвижимость |  Описание
| ---------------------- | ------------
|  ---------------------- |  ------------
| Triangle size          | The size of a tessellated triangle in screen-space units
|  Размер треугольника |  Размер мозаичного треугольника в единицах экранного пространства.
| Adjacent edges average | Adjust the triangle size values from the average of adjacent edges values 
|  Смежные ребра средние |  Отрегулируйте значения размера треугольника по среднему значению соседних краев.

### Point normal tessellation
### Мозаика точек нормалей

This option tessellates the mesh using the curvature provided by the mesh normals.
Этот параметр создает мозаику сетки с использованием кривизны, обеспечиваемой нормалями сетки.

![media/material-attributes-8.png](media/material-attributes-8.png) 
![media/material-attributes-8.png](media/material-attributes-8.png)

The images below show how point normal tessellation adds extra triangles while taking the curvature of the mesh into account:
На изображениях ниже показано, как тесселяция точечных нормалей добавляет дополнительные треугольники с учетом кривизны сетки:

| No tessellation | Point normal tessellation 
|  Нет тесселяции |  Точечная нормальная тесселяция
| ---------------|  ---------------------- |
|  ---------------|  ---------------------- |
| ![media/material-attributes-6.png](media/material-attributes-6.png)  |![media/material-attributes-9.png](media/material-attributes-9.png)         
|  ![media/material-attributes-6.png](media/material-attributes-6.png) |![media/material-attributes-9.png](media/material-attributes-9.png)

| Property               | Description 
|  Недвижимость |  Описание
| ---------------------- | ------------
|  ---------------------- |  ------------
| Triangle size          | The size of a tessellated triangle in screen-space units
|  Размер треугольника |  Размер мозаичного треугольника в единицах экранного пространства.
| Adjacent edge average | Adjust the **triangle size** and **normal curvature** values from the average of adjacent edge values
|  Смежное среднее ребро |  Отрегулируйте значения **размера треугольника** и **нормальной кривизны**, исходя из среднего значения соседних ребер.

## Displacement
## Смещение

Under the **Displacement** properties, you can specify **displacement map**. This displaces the geometry of the mesh.
В свойствах **Displacement** вы можете указать **карту смещения**.  Это смещает геометрию сетки.

![media/material-attributes-10.png](media/material-attributes-10.png) 
![media/material-attributes-10.png](media/material-attributes-10.png)
 
Depending on the stage at which the displacement is applied, the results can be very different:
В зависимости от этапа, на котором применяется смещение, результаты могут быть самыми разными:

| Displacement with vertex shader  | Tessellation with displacement  
|  Смещение с помощью вершинного шейдера |  Тесселяция со смещением
| ------| ----------------- |
|  ------|  ----------------- |
| ![media/material-attributes-11.png](media/material-attributes-11.png)  | ![media/material-attributes-12.png](media/material-attributes-12.png)
|  ![media/material-attributes-11.png](media/material-attributes-11.png) |  ![media/material-attributes-12.png](media/material-attributes-12.png)

| Property         | Description     
|  Недвижимость |  Описание
| ---------------- | ------------ 
|  ---------------- |  ------------
| Displacement Map | The displacement texture as a [material color provider](material-maps.md) 
|  Карта смещения |  Текстура смещения как [поставщик цвета материала](material-maps.md)
| Intensity        | The amount of displacement                                         
|  Интенсивность |  Объем смещения
| Scale & Bias     | When enabled, the value coming from the texture is considered a positive value ranging from `0.0` to `1.0` and the shader applies a scale to get the range -1.0 to `1.0`
|  Масштаб и смещение |  Когда эта функция включена, значение, поступающее из текстуры, считается положительным значением в диапазоне от «0,0» до «1,0», а шейдер применяет шкалу для получения диапазона от -1,0 до «1,0».
| Shader Stage     | Specify which shader stage the displacement map should be applied to: vertex shader or domain shader (used with tessellation)
|  Этап шейдера |  Укажите, к какому этапу шейдера должна применяться карта смещения: вершинному шейдеру или доменному шейдеру (используется с тесселяцией)

## Surface
## Поверхность

![media/material-attributes-14.png](media/material-attributes-14.png) 
![media/material-attributes-14.png](media/material-attributes-14.png)

Under the **Surface** properties, you can define a [Normal maps](../textures/normal-maps.md) to define **macro** surface normals. The **normal map** provides per-pixel normal perturbation of the normal of the mesh. Normal maps create the appearance of bumps and indents in the mesh:
В свойствах **Поверхности** вы можете определить [Карты нормалей](../textures/normal-maps.md) для определения **макро** нормалей поверхности.  **Карта нормалей** обеспечивает попиксельное возмущение нормалей меша.  Карты нормалей создают видимость выпуклостей и углублений в сетке:

| Flat | Using a normal map   
|  Квартира |  Использование карты нормалей
| -----| ----------- 
|  -----|  -----------
| ![media/material-attributes-15.png](media/material-attributes-15.png)  | ![media/material-attributes-16.png](media/material-attributes-16.png)  
|  ![media/material-attributes-15.png](media/material-attributes-15.png) |  ![media/material-attributes-16.png](media/material-attributes-16.png)

| Property     | Description 
|  Недвижимость |  Описание
| ------------ | ---------------
|  ------------ |  ---------------
| Normal map   | The normal map color provider
|  Нормальная карта |  Поставщик цвета карты нормалей
| Scale and offset | Interpret values from the texture as positive values ranging from `0.0` to `1.0`. The shader applies a scale to get the range `-1.0` to `1.0`.
|  Масштаб и смещение |  Интерпретируйте значения из текстуры как положительные значения в диапазоне от «0,0» до «1,0».  Шейдер применяет шкалу, чтобы получить диапазон от «-1,0» до «1,0».
| Reconstruct Z    | If there's no Z component in the texture, reconstruct it from the X and Y components. This assumes that X<sup>2</sup> + Y<sup>2</sup> + Z<sup>2</sup> = 1 and that Z is always positive, so no normal vector can point to the back side of the surface. We recommend you enable this option, as Stride might remove the Z component when you compress normal maps.
|  Реконструировать Z |  Если в текстуре нет компонента Z, восстановите ее из компонентов X и Y.  Это предполагает, что X<sup>2</sup> + Y<sup>2</sup> + Z<sup>2</sup> = 1 и что Z всегда положителен, поэтому ни один вектор нормали не может указывать на обратную сторону.  сторону поверхности.  Мы рекомендуем вам включить эту опцию, так как Stride может удалить компонент Z при сжатии карт нормалей.

For more information about normal maps, see the [normal maps](../textures/normal-maps.md) page.
Для получения дополнительной информации о картах нормалей см. страницу [карты нормалей](../textures/normal-maps.md).

## Micro surface
## Микроповерхность

Under the **Micro surface** setting, you can provide a **gloss map** to provide per-pixel information for gloss.
В настройках **Микроповерхность** вы можете предоставить **карту глянца**, чтобы предоставить информацию о глянце для каждого пикселя.

![media/material-attributes-17.png](media/material-attributes-17.png)
![media/material-attributes-17.png](media/material-attributes-17.png)

If you select **Float**:
Если вы выберете **Плавающая**:

- a value of `1.0` means the surface is highly glossy (the coarse normal isn't perturbed)
- значение `1.0` означает, что поверхность очень глянцевая (грубая нормаль не нарушена)
- a value of `0.0` means the surface is very rough (the coarse normal is highly perturbed in several directions)
- значение «0.0» означает, что поверхность очень шероховатая (грубая нормаль сильно возмущена в нескольких направлениях)

The screenshots below show different levels of gloss on a material:
На скриншотах ниже показаны различные уровни блеска материала:

- Diffuse = #848484, Lambert
- Рассеянный = #848484, Ламберт
- Specular Metalness = 1.0, GGX
- Specular Metalness = 1.0, GGX

| Gloss = 0.0 | 0.25 | 0.5  | 0.8  | 1.0 
|  Блеск = 0,0 |  0,25 |  0,5 |  0,8 |  1,0
| ---------------- | ---- | ---- |----- | ---
|  ---------------- |  ---- |  ---- |----- |  ---
| ![media/material-attributes-18.png](media/material-attributes-18.png)  | ![media/material-attributes-19.png](media/material-attributes-19.png)  | ![media/material-attributes-20.png](media/material-attributes-20.png)  | ![media/material-attributes-21.png](media/material-attributes-21.png)  | ![media/material-attributes-22.png](media/material-attributes-22.png)  
|  ![media/material-attributes-18.png](media/material-attributes-18.png) |  ![media/material-attributes-19.png](media/material-attributes-19.png) |  ![media/material-attributes-20.png](media/material-attributes-20.png) |  ![media/material-attributes-21.png](media/material-attributes-21.png) |  ![media/material-attributes-22.png](media/material-attributes-22.png)

| Property       | Description
|  Недвижимость |  Описание
| -------------- | -- |
|  -------------- |  -- |
| Gloss map | The gloss map color provider
|  Глянцевая карта |  Поставщик цветов карты глянца
| Invert         | Inverts the gloss value (eg a value of `1.0` produces zero gloss instead of maximum). This effectively turns the gloss value into a **roughness** value, as used in other game engines
|  Инвертировать |  Инвертирует значение блеска (например, значение «1,0» дает нулевой блеск вместо максимального).  Это эффективно превращает значение блеска в значение **шероховатости**, как это используется в других игровых движках.

If you have local reflections enabled, the scene is reflected in materials with a gloss map value higher than the threshold you specify in the local reflections properties. For more information, see [Local reflections](../post-effects/local-reflections.md).
Если у вас включены локальные отражения, сцена отражается в материалах со значением карты блеска выше порогового значения, указанного в свойствах локальных отражений.  Для получения дополнительной информации см. [Локальные отражения](../post-effects/local-reflections.md).

## See also
## Смотрите также

* [Material maps](material-maps.md)
* [Материальные карты](material-maps.md)
* [Material attributes](material-attributes.md)
* [Атрибуты материала](material-attributes.md)
    * [Shading attributes](shading-attributes.md)
* [Атрибуты затенения](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
* [Разные атрибуты](misc-attributes.md)
    * [Clear-coat shading](clear-coat-shading.md)
* [Прозрачное затенение](clear-coat-shading.md)
* [Clear-coating shading](clear-coat-shading.md)
* [Оттенение прозрачного покрытия] (clear-coat-shading.md)
* [Material layers](material-layers.md)
* [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)
* [Пользовательские шейдеры](../effects-and-shaders/custom-shaders.md)
