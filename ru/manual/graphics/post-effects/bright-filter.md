# Bright filter
# Яркий фильтр

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

The **bright filter** extracts the brightest areas of an image. The bright filter itself isn't a post effect, but its result is used later by other effects such as [bloom](bloom.md), [light streaks](light-streaks.md), and [lens flare](lens-flare.md).
**Яркий фильтр** извлекает самые яркие области изображения.  Яркий фильтр сам по себе не является пост-эффектом, но его результат позже используется другими эффектами, такими как [bloom](bloom.md), [световые полосы](light-streaks.md) и [блики](lens  -flare.md).

## Properties
## Характеристики

![media/bright-filter-1.png](media/bright-filter-1.png)
![медиа/яркий-фильтр-1.png](медиа/яркий-фильтр-1.png)

| Property  | Description     
|  Недвижимость |  Описание
| --------- | --------- 
|  --------- |  ---------
| Threshold | The threshold used to determine if a color passes or fails the bright filter. 
|  Порог |  Порог, используемый для определения того, проходит ли цвет яркий фильтр или нет.
| Steepness     | Increasing the steepness has a similar effect to increasing the threshold, but causes less aliasing risk. However, the effect is more washed out. For better temporal stability, if your scene has HDR spreads, setting the steepness to a value somewhere in the middle of the expected maximum allows for smooth filtering of bright spots. For sharpness, we recommend you keep a threshold.
|  Крутизна |  Увеличение крутизны имеет эффект, аналогичный увеличению порога, но вызывает меньший риск алиасинга.  Однако эффект более размыт.  Для лучшей временной стабильности, если ваша сцена имеет разброс HDR, установка значения крутизны на значение где-то в середине ожидаемого максимума обеспечивает плавную фильтрацию ярких пятен.  Для резкости мы рекомендуем сохранить пороговое значение.
| Color     | The result of the bright filter is modulated by this color value, then affects the color of other post effects. If set to white, the color isn't modified.
|  Цвет |  Результат яркого фильтра модулируется этим значением цвета, а затем влияет на цвет других пост-эффектов.  Если установлено значение «белый», цвет не изменяется.

## In this section
## В этой секции

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
* [Color transforms](color-transforms/index.md)
* [Цветовые преобразования](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Глубина резкости](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Блики](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Светлые полосы](light-streaks.md)
