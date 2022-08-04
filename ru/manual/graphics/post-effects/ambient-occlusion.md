# Ambient occlusion
# Окружающая окклюзия

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

>[!Note]
>[!Примечание]
>As with other depth-aware post effects, enabling ambient occlusion nullifies MSAA (multisample anti-aliasing).
> Как и в случае с другими пост-эффектами с учетом глубины, включение затенения окружающей среды сводит на нет MSAA (многосемпловое сглаживание).

**Ambient occlusion** darkens areas where light is occluded by opaque objects, such as corners and crevices. You can use it to add subtle realism to scenes.
**Ambient occlusion** затемняет области, где свет закрыт непрозрачными объектами, например, углы и щели.  Вы можете использовать его для добавления тонкого реализма к сценам.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/occlusion-on.jpg">
<цикл автоматического воспроизведения видео class=
   <source src="media/occlusion.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## Properties
## Характеристики

![Properties](media/ambient-occlusion-properties.png)
![Свойства](media/ambient-occlusion-properties.png)

| Property | Function
|  Недвижимость |  Функция
|----------|---------
|----------|---------
| Samples | The number of pixels sampled to determine how occluded a point is. Higher values reduce noise, but affect performance. Use with **Blur count** to find a balance between results and performance.
|  Образцы |  Количество пикселей, отобранных для определения степени перекрытия точки.  Более высокие значения уменьшают шум, но влияют на производительность.  Используйте с **счетчиком размытия**, чтобы найти баланс между результатами и производительностью.
| Projection scale | Scales the sample radius. In most cases, `1` (no scaling) produces the most accurate result.
|  Масштаб проекции |  Масштабирует радиус образца.  В большинстве случаев «1» (без масштабирования) дает наиболее точный результат.
| Intensity | The strength of the darkening effect in occluded areas
|  Интенсивность |  Сила эффекта затемнения в закрытых областях
| Sample bias | The angle at which Stride considers an area of geometry an occluder. At high values, only narrow joins and crevices are considered occluders.
|  Смещение выборки |  Угол, под которым Stride считает область геометрии окклюдером.  При высоких значениях окклюдерами считаются только узкие стыки и щели.
| Sample radius | Use with **projection scale** to control the radius of the occlusion effect
|  Образец радиуса |  Используйте с **масштабом проекции** для управления радиусом эффекта окклюзии.
| Blur count | The number of times the ambient occlusion image is blurred. Higher numbers reduce noise, but can produce artifacts.
|  Количество размытий |  Количество раз размытия изображения окружающего затенения.  Более высокие значения уменьшают шум, но могут создавать артефакты.
| Blur scale | The blur radius in pixels
|  Масштаб размытия |  Радиус размытия в пикселях
| Edge sharpness | How much the blur respects the depth differences of occluded areas. Lower numbers create more blur, but might blur unwanted areas (ie beyond occluded areas).
|  Резкость края |  Насколько размытие учитывает разницу в глубине закрытых областей.  Меньшие числа создают большее размытие, но могут размыть нежелательные области (например, за пределами перекрытых областей).
| Buffer size | The resolution the ambient occlusion is calculated at. The result is upscaled to the game resolution. Larger sizes produce better results but use more memory and affect performance.
|  Размер буфера |  Разрешение, при котором рассчитывается окружающее затенение.  Результат масштабируется до разрешения игры.  Большие размеры дают лучшие результаты, но используют больше памяти и влияют на производительность.

## See also
## Смотрите также

* [Anti-aliasing](anti-aliasing.md)
* [Сглаживание](anti-aliasing.md)
* [Fog](fog.md)
* [Туман](fog.md)
* [Outline](outline.md)
* [Контур](контур.md)
* [Bloom](bloom.md)
* [Блум](bloom.md)
* [Bright filter](bright-filter.md)
* [Яркий фильтр] (bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Цветовые преобразования](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Глубина резкости](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Блики](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Светлые полосы](light-streaks.md)
* [Local reflections](local-reflections.md)
* [Локальные отражения](local-reflections.md)
