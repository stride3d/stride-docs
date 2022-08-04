# Particle materials
# Материалы частиц

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Materials** define how the expanded shape should be rendered. They defines color, textures, and other parameters.
**Материалы** определяют, как должна отображаться развернутая форма.  Они определяют цвет, текстуры и другие параметры.

**Particle materials** are simplified versions of [materials used for meshes](../graphics/materials/index.md). There is only one type of material currently, the Dynamic Emissive material.
**Материалы частиц** являются упрощенными версиями [материалов, используемых для мешей](../graphics/materials/index.md).  В настоящее время существует только один тип материала — Dynamic Emissive.

## Dynamic emissive
## Динамический эмиссионный

This material uses a translucent emissive color RGBA for the pixel shading. In HDR rendering mode, the values are used as intensity, and can be higher than 1.
Этот материал использует полупрозрачный излучающий цвет RGBA для затенения пикселей.  В режиме рендеринга HDR значения используются как интенсивность и могут быть больше 1.

![media/particles-reference-materials-1.png](media/particles-reference-materials-1.png)
![media/particles-reference-materials-1.png](media/particles-reference-materials-1.png)

| Property            | Description  
|  Недвижимость |  Описание
|---------------------|------------
|---------------------|------------
| Alpha-Add           | Translucent rendering supports alpha-blending, additive blending or anything in-between. With this parameter you can control how much alpha-blended (0) or additive (1) the particles should be.
|  Альфа-Добавить |  Полупрозрачный рендеринг поддерживает альфа-смешение, аддитивное смешение или что-то промежуточное.  С помощью этого параметра вы можете контролировать, насколько альфа-смешанными (0) или аддитивными (1) должны быть частицы.
| Culling             | There are options for no culling, front face culling and back face culling. Camera-facing particles always have their front face towards the camera.
|  Выбраковка |  Существуют варианты без выбраковки, выбраковки передней грани и выбраковки задней грани.  Частицы, обращенные к камере, всегда обращены лицевой стороной к камере.
| Emissive            | The emissive RGBA color for the particle. See [Material maps](../graphics/materials/material-maps.md) for a full description.
|  Эмиссионный |  Испускаемый цвет RGBA для частицы.  См. [Material maps](../graphics/materials/material-maps.md) для полного описания.
| UV coords           | For particles which use texture sampling uv coordinates animation can be specified. The two currently existing types are specified below.
|  УФ-координаты |  Для частиц, использующих сэмплирование текстуры, можно задать анимацию uv-координат.  Два существующих в настоящее время типа указаны ниже.
### UV Coords — Flipbook
### UV-координаты — Flipbook

The flipbook animation considers a texture a sequence of frames and displays it one frame at a time, like a flipbook.
Анимация флипбука рассматривает текстуру как последовательность кадров и отображает ее по одному кадру за раз, как флипбук.

This image is an example of a 4x4 flipbook animation texture of an explosion:
Это изображение является примером анимационной текстуры взрыва 4x4 флипбука:

![media/particles-reference-materials-4.png](media/particles-reference-materials-4.png)
![media/particles-reference-materials-4.png](media/particles-reference-materials-4.png)

The flipbook animation has the following properties:
Анимация флипбука имеет следующие свойства:

![media/particles-reference-materials-2.png](media/particles-reference-materials-2.png)
![media/particles-reference-materials-2.png](media/particles-reference-materials-2.png)

| Property            | Description    
|  Недвижимость |  Описание
|---------------------|------------
|---------------------|------------
| X divisions         | The number of columns to split the texture into
|  Х дивизий |  Количество столбцов для разделения текстуры на
| Y divisions         | The number of rows to split the texture into
|  Y подразделения |  Количество строк для разделения текстуры на
| Starting frame      | The frame to start the animation at. The top-left frame is 0 and increases by 1 from left to right before moving down.
|  Стартовый кадр |  Кадр, с которого начинается анимация.  Верхний левый кадр равен 0 и увеличивается на 1 слева направо перед перемещением вниз.
| Animation speed     | The total number of frames to show over the particle lifetime. If Speed = X x Y, then the animation shows **all** frames over the particle lifetime. The speed is relative; particles with longer lifespans have slower animation. 
|  Скорость анимации |  Общее количество кадров, отображаемых за время существования частицы.  Если скорость = X x Y, то анимация показывает **все** кадры за время существования частицы.  Скорость относительна;  частицы с большей продолжительностью жизни имеют более медленную анимацию.

### UV Coords — Scrolling
### UV-координаты — прокрутка

The scrolling animation defines a starting rectangle for the billboard or quad, which moves across the texture to its end position. This creates a scrolling or a scaling effect of the texture across the quad's surface.
Анимация прокрутки определяет начальный прямоугольник для рекламного щита или четырехугольника, который перемещается по текстуре в конечное положение.  Это создает эффект прокрутки или масштабирования текстуры по поверхности четырехугольника.

The texture coordinates can go below 0 or above 1. How the texture is sampled depends on the addressing mode defined in the [material maps](../graphics/materials/material-maps.md). For more information, see the [MSDN documentation](http://tinyurl.com/TextureAddressingModes).
Координаты текстуры могут быть ниже 0 или выше 1. Выбор текстуры зависит от режима адресации, определенного в [material maps](../graphics/materials/material-maps.md).  Дополнительные сведения см. в [документации MSDN] (http://tinyurl.com/TextureAddressingModes).

The scrolling animation has the following properties:
Анимация прокрутки имеет следующие свойства:

![media/particles-reference-materials-3.png](media/particles-reference-materials-3.png)
![media/particles-reference-materials-3.png](media/particles-reference-materials-3.png)

| Property            | Description
|  Недвижимость |  Описание
|---------------------|-------------
|---------------------|--------------
| Start frame         | The initial rectangle for texture sampling when the particle first spawns
|  Начальный кадр |  Начальный прямоугольник для выборки текстуры при первом появлении частицы
| End frame           | The last rectangle for texture sampling when the particle disappears
|  Конечный кадр |  Последний прямоугольник для выборки текстуры, когда частица исчезает

## See also
## Смотрите также

* [Create particles](create-particles.md)
* [Создать частицы](create-particles.md)
* [Emitters](emitters.md)
* [Излучатели](emitters.md)
* [Shapes](shapes.md)
* [Фигуры](shapes.md)
* [Spawners](spawners.md)
* [Спаунеры](spawners.md)
* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)
* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
