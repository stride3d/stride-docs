# Color transforms
# Преобразование цвета

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Color transforms** are special effects designed to be combined in a chain at runtime. You can define a series of color transforms to apply to an image. Each transform uses the previous transform's output as its own input. At runtime, the series of transforms is squashed into one shader and rendered in a single draw call for maximum performance.
**Преобразование цвета** — это специальные эффекты, предназначенные для объединения в цепочку во время выполнения.  Вы можете определить ряд цветовых преобразований для применения к изображению.  Каждое преобразование использует выходные данные предыдущего преобразования в качестве собственного ввода.  Во время выполнения последовательность преобразований сжимается в один шейдер и визуализируется в одном вызове отрисовки для максимальной производительности.

You can also write your own [custom color transforms](custom-color-transforms.md) to create unique effects.
Вы также можете написать свои собственные [пользовательские преобразования цвета] (custom-color-transforms.md) для создания уникальных эффектов.

## In this section
## В этой секции

* [Film grain](film-grain.md)
* [Зерно пленки] (film-grain.md)
* [Gamma correction](gamma-correction.md)
* [Гамма-коррекция](gamma-correction.md)
* [ToneMap](tonemap.md)
* [ToneMap](tonemap.md)
