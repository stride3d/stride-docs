# Depth of field
# Глубина резкости

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

By default, rendering produces a very sharp image, which can look artificial. **Depth of field** effects simulate the behavior of a real camera lens focusing an object, leaving background and foreground objects out of focus.
По умолчанию рендеринг создает очень резкое изображение, которое может выглядеть искусственным.  Эффекты **Глубины резкости** имитируют поведение объектива реальной камеры, фокусирующего объект, оставляя объекты заднего и переднего плана не в фокусе.

![media/realworld_dof_agave_flowers.jpg](media/realworld_dof_agave_flowers.jpg) 
![media/realworld_dof_agave_flowers.jpg](media/realworld_dof_agave_flowers.jpg)

To create the effect, Stride creates several versions of the original image with different intensities of blur, and interpolates between them. The more layers used, the better the quality, but at performance cost.
Для создания эффекта Stride создает несколько версий исходного изображения с разной интенсивностью размытия и выполняет интерполяцию между ними.  Чем больше слоев используется, тем выше качество, но за счет производительности.

## Properties
## Характеристики

![media/depth-of-field-2.png](media/depth-of-field-2.png)
![медиа/глубина резкости-2.png](медиа/глубина резкости-2.png)

| Property   | Description     
|  Недвижимость |  Описание
| ---------- | -------- 
|  ---------- |  --------
| Size       | Size of the [bokeh (Wikipedia)](https://en.wikipedia.org/wiki/Bokeh), expressed as a factor of the image width so it's resolution-independent. The bigger the size, the worse the performance                                              
|  Размер |  Размер [боке (Википедия)] (https://en.wikipedia.org/wiki/Bokeh), выраженный как коэффициент ширины изображения, поэтому он не зависит от разрешения.  Чем больше размер, тем хуже производительность
| DOF Areas  | Areas of the depth of field. There are three main zones defined by their distance from the camera: near out-of-focus area (from X to Y), in-focus area (from Y to Z), and far out-of-focus area (from Z to W) 
|  ФО Области |  Области глубины резкости.  Существуют три основные зоны, определяемые их расстоянием от камеры: ближняя зона нерезкости (от X до Y), зона фокусировки (от Y до Z) и дальняя зона нерезкости (от Z до Z).  Вт)
| Technique  | The technique affects both the performance and the shape of the bokeh.  <p><br>**Circular Gaussian** is fast but unrealistic. <p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Hexagonal Triple Rhombi** is heavier than Gaussian. <p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Hexagonal McIntosh** is the heaviest. <p><br>![media/depth-of-field-5.png](media/depth-of-field-5.png)   
|  Техника |  Техника влияет как на производительность, так и на форму боке.  <p><br>**Круговая диаграмма Гаусса** выполняется быстро, но нереалистично.  <p><br>![media/depth-of-field-3.png](media/depth-of-field-3.png) <p><br>**Гексагональный тройной ромб** тяжелее, чем гауссовский  .  <p><br>![media/depth-of-field-4.png](media/depth-of-field-4.png) <p><br>**Гексагональный McIntosh** — самый тяжелый.  <p><br>![медиа/глубина резкости-5.png](медиа/глубина резкости-5.png)
| Auto Focus | Automatically updates the DOF areas so the camera focuses on the object at the center of the screen
|  Автофокус |  Автоматически обновляет области глубины резкости, чтобы камера фокусировалась на объекте в центре экрана.

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
* [Bloom](bloom.md)
* [Блум](bloom.md)
* [Bright filter](bright-filter.md)
* [Яркий фильтр] (bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Цветовые преобразования](color-transforms/index.md)
* [Lens flare](lens-flare.md)
* [Блики](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Светлые полосы](light-streaks.md)
