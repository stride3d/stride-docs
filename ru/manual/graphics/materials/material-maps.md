# Material maps
# Карты материалов

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Material maps** calculate how materials are rendered. They can use two kinds of values: color (RGB) values or scalar (single float) values.
**Карты материалов** рассчитывают, как материалы визуализируются.  Они могут использовать два типа значений: цветовые (RGB) значения или скалярные (одиночные значения с плавающей запятой).

You can use material maps for several purposes, including gloss maps, diffuse maps, or  blend maps (for combining [material layers](material-layers.md))
Вы можете использовать карты материалов для нескольких целей, включая карты глянца, карты диффузии или карты смешивания (для комбинирования [материальных слоев](material-layers.md))

Material maps can fetch values using one of several providers:
Карты материалов могут извлекать значения, используя одного из нескольких поставщиков:

* **Vertex stream**: a value taken from mesh attributes
* **Вершинный поток**: значение, взятое из атрибутов сетки.
* **Binary operator**: a combination of any other two providers
* **Бинарный оператор**: комбинация любых двух других провайдеров.
* **Float4 / Float**: a constant value
* **Float4 / Float**: постоянное значение
* **Color**: a hex color value
* **Цвет**: шестнадцатеричное значение цвета.
* **Shader**: a value provided by a ComputeColor shader. This lets you use procedural values
* **Shader**: значение, предоставляемое шейдером ComputeColor.  Это позволяет использовать процедурные значения
* **Texture**: a value sampled from a [texture](../textures/index.md)
* **Текстура**: значение, взятое из [текстуры](../textures/index.md)

To choose the provider, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select it from the drop-down menu:
Чтобы выбрать поставщика, нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите его в раскрывающемся меню:

![media/material-colors-1.png](media/material-colors-1.png) 
![media/material-colors-1.png](media/material-colors-1.png)

## Vertex stream
## Вершинный поток

This provider takes a value from an attribute of the mesh of the model you apply the material to.
Этот провайдер получает значение из атрибута сетки модели, к которой вы применяете материал.

It has two modes: **Color Vertex Stream** and **Custom Vertex Stream**. To switch between them, with **Vertex Stream** selected as the provider, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose the mode you want to use.
Он имеет два режима: **Цветной поток вершин** и **Пользовательский поток вершин**.  Чтобы переключиться между ними, выбрав **Vertex Stream** в качестве поставщика, нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**)  и выберите режим, который вы хотите использовать.

![Vertex stream mode](media/vertex-stream-mode.png)
![Режим вершинного потока](media/vertex-stream-mode.png)

### Color vertex stream
### Цветной поток вершин

Takes a color value from the mesh.
Принимает значение цвета из сетки.

| Property | Description                                      
|  Недвижимость |  Описание
| -------- | -----------
|  -------- |  -----------
| Index | The index in the named stream  
|  Индекс |  Индекс в именованном потоке
| Channel  | The channel (RGBA) to sample from the stream
|  Канал |  Канал (RGBA) для выборки из потока

### Custom vertex stream
### Пользовательский поток вершин

Takes a value from the mesh channel you specify.
Принимает значение из указанного вами канала сетки.

| Property | Description                                      
|  Недвижимость |  Описание
| -------- | -----------
|  -------- |  -----------
| Name | Semantic name of the channel to read data from 
|  Имя |  Семантическое имя канала для чтения данных
| Channel  | The channel (RGBA) to sample from the stream
|  Канал |  Канал (RGBA) для выборки из потока

## Binary operator
## Бинарный оператор

Perform a binary operation from two color/scalar value providers. You can nest as many material maps inside binary operators as you need (including further binary operators).
Выполните бинарную операцию от двух поставщиков цветовых/скалярных значений.  Вы можете вложить в бинарные операторы столько карт материалов, сколько вам нужно (включая дополнительные бинарные операторы).

To choose how the operation works, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select from the drop-down menu. The operations are similar to options when blending layers in Photoshop.
Чтобы выбрать способ работы, нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите из раскрывающегося меню.  Операции аналогичны параметрам при смешивании слоев в Photoshop.

![Operation mode](media/operation-mode.png)
![Режим работы](media/operation-mode.png)

`Result = LeftColor  <operator> RightColor`
`Результат = LeftColor <оператор> RightColor`

![media/material-colors-4.png](media/material-colors-4.png)
![media/material-colors-4.png](media/material-colors-4.png)

| Property | Description                                      
|  Недвижимость |  Описание
| -------- | -----------
|  -------- |  -----------
| Operator | A binary operator (eg add, multiply, etc)     
|  Оператор |  Бинарный оператор (например, добавить, умножить и т. д.)
| Left     | The left color/scalar used in the operation  
|  Слева |  Левый цвет/скаляр, используемый в операции
| Right    | The right color/scalar used in the operation 
|  Право |  Правильный цвет/скаляр, используемый в операции

## Float4 / Float
## Плавающая4 / Плавающая

Provided directly as a constant value over the whole material. 
Предоставляется непосредственно как постоянное значение для всего материала.

In the case of RGB values, you control the RGBA value with the X, Y, Z and W values (*Float4*).
В случае значений RGB вы управляете значением RGBA с помощью значений X, Y, Z и W (*Float4*).

![xyzw](media/material-colors-xyzw.png)
![xyzw](media/material-colors-xyzw.png)

In the case of scalar values, you control the value with a slider (*Float*).
В случае скалярных значений вы управляете значением с помощью ползунка (*Плавающая*).

![Blend map slider](media/blend-map-slider.png)
![Слайдер карты](media/blend-map-slider.png)

## Color
## Цвет

A value provided from a color hex value. This is only available for material maps that use RGB values.
Значение, полученное из шестнадцатеричного значения цвета.  Это доступно только для карт материалов, которые используют значения RGB.

![media/material-colors-3.png](media/material-colors-3.png)
![media/material-colors-3.png](media/material-colors-3.png)

## Shader
## Шейдер

A value provided by a ComputeColor shader. This lets you use procedural values.
Значение, предоставляемое шейдером ComputeColor.  Это позволяет использовать процедурные значения.

For an example of a ComputeColor shader, see the [Particle materials tutorial](../../particles/tutorials/particle-materials.md).
Пример шейдера ComputeColor см. в [Руководстве по материалам частиц](../../particles/tutorials/particle-materials.md).

## Texture
## Текстура

Sample the color/scalar from a [texture](../textures/index.md).
Пример цвета/скаляра из [texture](../textures/index.md).

For example, the images below demonstrate how the texture changes the way Stride blends materials.
Например, изображения ниже демонстрируют, как текстура меняет способ, которым Stride смешивает материалы.

![Blend map diagram](media/blend-map-diagram.png)
![Схема карты смешивания](media/blend-map-diagram.png)

![Blend map diagram](media/blend-map-diagram2.png)
![Схема карты смешивания](media/blend-map-diagram2.png)

![media/material-colors-2.png](media/material-colors-2.png)
![media/material-colors-2.png](media/material-colors-2.png)

| Property           | Description               
|  Недвижимость |  Описание
| ------------------ | --------------- 
|  ------------------ |  ---------------
| Texture            | A reference to a texture
|  Текстура |  ссылка на текстуру
| Channel            | The channel (R, G, B, A) used to extract the scalar value. Only valid for scalar textures
|  Канал |  Канал (R, G, B, A), используемый для извлечения скалярного значения.  Действительно только для скалярных текстур
| Texcoord Index     | The texture coordinates (u,v) to use from the mesh with this texture
|  Индекс Тескоорда |  Координаты текстуры (u,v) для использования из меша с этой текстурой
| Filtering          | The sampling method (eg Linear, Point, Anisotropic, etc) 
|  Фильтрация |  Метод отбора проб (например, линейный, точечный, анизотропный и т. д.)
| Address Mode U / V | <p><br>Defines how (u,v) coordinates are addressed</p></br> <p><br> **Wrap**: Tiles (u,v) at integer junctions. For example, if u ranges from 0.0 to 3.0, the texture repeats three times on the U axis</p></br> <p><br>**Mirror**: Flips (u,v) at integer junctions. For example, if u ranges from 0.0 to 1.0, the texture is displayed as expected; but from 1.0 to 2.0, the texture is mirrored </p></br> <p><br> **Clamp**: Clamps (u,v) to the range (0.0, 1.0)</p></br>
|  Адресный режим U/V |  <p><br>Определяет, как адресуются координаты (u,v)</p></br> <p><br> **Обтекание**: плитки (u,v) на целочисленных соединениях.  Например, если u находится в диапазоне от 0,0 до 3,0, текстура повторяется три раза по оси U</p></br> <p><br>**Зеркало**: переворачивает (u,v) на целочисленных соединениях.  Например, если u находится в диапазоне от 0,0 до 1,0, текстура отображается, как и ожидалось;  но от 1.0 до 2.0 текстура зеркально </p></br> <p><br> **Clamp**: Зажимы (u,v) до диапазона (0.0, 1.0)</p></  бр>
| Scale | A scale applied to (u,v) 
|  Масштаб |  Шкала, применяемая к (u, v)
| Offset  | An offset applied to (u,v)
|  Смещение |  Смещение, примененное к (u,v)

## See also
## Смотрите также

- [Material attributes](material-attributes.md)
- [Атрибуты материала](material-attributes.md)
- [Material layers](material-layers.md)
- [Слои материала](material-layers.md)
* [Material slots](material-slots.md)
* [Слоты материалов](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Материалы для разработчиков](materials-for-developers.md)
