# Gamma correction
# Гамма-коррекция

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

All post effect calculations are made in a linear space (ie RGB space). This means doubling the color value of a pixel doubles the light it emits. This guarantees correct lighting calculations.
Все расчеты постэффектов выполняются в линейном пространстве (т.е. пространстве RGB).  Это означает, что удвоение значения цвета пикселя удваивает излучаемый им свет.  Это гарантирует правильные расчеты освещения.

However, real-world computer monitors don't behave this way: for dark color values they tend to emit much less light than they should. For this reason, after our other post effects have been applied, we apply **gamma correction** to transform our image from a linear space to a sRGB space (or gamma space). 
Однако реальные компьютерные мониторы ведут себя иначе: при темных значениях цвета они, как правило, излучают гораздо меньше света, чем должны.  По этой причине, после применения других наших пост-эффектов, мы применяем **гамма-коррекцию**, чтобы преобразовать наше изображение из линейного пространства в пространство sRGB (или гамма-пространство).

A buffer in the sRGB space displays correctly on a monitor or a TV screen.
Буфер в пространстве sRGB корректно отображается на мониторе или экране телевизора.

![media/gamma-correction-1.png](media/gamma-correction-1.png) 
![медиа/гамма-коррекция-1.png](медиа/гамма-коррекция-1.png)

Non-gamma-corrected images have dark areas appear darker than they're supposed to.
На изображениях без гамма-коррекции темные области выглядят темнее, чем должны.

![media/gamma-correction-2.png](media/gamma-correction-2.png) 
![медиа/гамма-коррекция-2.png](медиа/гамма-коррекция-2.png)

## Properties
## Характеристики

| Property | Description                                     |
|  Недвижимость |  Описание |
| -------- | ----------------------------------------------- |
|  -------- |  -------------------------------------------------------------- |
| Value    | Gamma value. A typical value is around 2.2. |
|  Значение |  Гамма-значение.  Типичное значение составляет около 2,2.  |

## See also
## Смотрите также

* [Gamma correction (Wikipedia)](http://en.wikipedia.org/wiki/Gamma_correction)
* [Гамма-коррекция (Википедия)](http://en.wikipedia.org/wiki/Gamma_correction)
* [Film grain](film-grain.md)
* [Зерно пленки] (film-grain.md)
* [ToneMap](tonemap.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)
* [Виньетирование](vignetting.md)
* [Custom color transforms](custom-color-transforms.md)
* [Пользовательские преобразования цвета] (custom-color-transforms.md)
