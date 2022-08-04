# Bloom
# Цвести

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

The **bloom** effect takes the brightest areas of an image, extends them, and bleeds them into the surrounding areas to simulate bright light overwhelming the camera.
Эффект **bloom** берет самые яркие области изображения, расширяет их и накладывает на окружающие области, чтобы имитировать яркий свет, подавляющий камеру.

![media/bloom-1.png](media/bloom-1.png) 
![media/bloom-1.png](media/bloom-1.png)

It uses the result of the [bright filter](bright-filter.md) effect as input.
Он использует результат эффекта [яркий фильтр](bright-filter.md) в качестве входных данных.

## Properties
## Характеристики

![media/bloom-2.png](media/bloom-2.png) 
![media/bloom-2.png](media/bloom-2.png)

| Property       | Description 
|  Недвижимость |  Описание
| -------------- | ---- 
|  -------------- |  ----
| Radius         | Radius of the bloom. Note that high values can affect performance.        
|  Радиус |  Радиус цветка.  Обратите внимание, что высокие значения могут повлиять на производительность.
| Amount         | Amount/strength of bloom. 
|  Сумма |  Количество/сила цветения.
| Sigma Ratio    | This affects the fall-off of the bloom. It's the [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation) (sigma) used in the [Gaussian blur](http://en.wikipedia.org/wiki/Gaussian_blur) formula when calculating the kernel of the bloom. 
|  Коэффициент сигмы |  Это влияет на опадение цветка.  Это [стандартное отклонение](http://en.wikipedia.org/wiki/Standard_deviation) (сигма), используемое в формуле [размытие по Гауссу](http://en.wikipedia.org/wiki/Gaussian_blur) при расчете  ядро цветка.
| Distortion     | Stretches the image horizontally or vertically.
|  Искажение |  Растягивает изображение по горизонтали или вертикали.
| Afterimage     | Simulates [afterimage (Wikipedia)](http://en.wikipedia.org/wiki/Afterimage) — the effect of bright spots "burning" into the  retina the longer you look at them, before fading away.  <p><br>![media/bloom-3.png](media/bloom-3.png)                                                                        
|  Остаточное изображение |  Имитирует [остаточное изображение (Википедия)](http://en.wikipedia.org/wiki/Afterimage) — эффект ярких пятен, «вжигающихся» в сетчатку, чем дольше вы смотрите на них, прежде чем исчезнуть.  <p><br>![media/bloom-3.png](media/bloom-3.png)
| Fade Out Speed | The factor by which the afterimage (if enabled) decreases at each frame (1 means infinite persistence, while 0 means no persistence at all)
|  скорость затухания |  Коэффициент, на который остаточное изображение (если оно включено) уменьшается в каждом кадре (1 означает бесконечное сохранение, а 0 означает полное отсутствие сохранения)
| Sensitivity    | How sensitive the afterimage (if enabled) is to light. The higher this value is, the faster the effect is created when the camera focuses on a light.
|  Чувствительность |  Насколько чувствительно остаточное изображение (если оно включено) к свету.  Чем выше это значение, тем быстрее создается эффект, когда камера фокусируется на источнике света.
| Expanded filtering | Reverses FXAA and bloom, and uses a richer convolution kernel during blurring. This helps reduce temporal shimmering.
|  Расширенная фильтрация |  Отменяет FXAA и блум, а также использует более богатое ядро ​​свертки во время размытия.  Это помогает уменьшить временное мерцание.

## See also
## Смотрите также

* [Anti-aliasing](anti-aliasing.md)
* [Сглаживание](anti-aliasing.md)
* [Fog](fog.md)
* [Туман](fog.md)
* [Outline](outline.md)
* [Контур](контур.md)
* [Ambient occlusion](ambient-occlusion.md)
* [Окружающая окклюзия] (ambient-occlusion.md)
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
