# Anti-aliasing
# Сглаживание

**Anti-aliasing** smooths jagged edges. For post-processing, Stride uses fast-approximate anti-aliasing (FXAA), a single-pass screen-space technique with low performance impact.
**Сглаживание** сглаживает неровные края.  Для постобработки Stride использует быстрое приближенное сглаживание (FXAA), однопроходную технику экранного пространства с низким влиянием на производительность.

![Properties](media/anti-aliasing-closeup-comparison.png)
![Свойства](media/anti-aliasing-closeup-comparison.png)

>[!Note]
>[!Примечание]
>Currently, the anti-aliasing post-effect doesn't work correctly on Android devices.
>В настоящее время пост-эффект сглаживания работает некорректно на устройствах Android.

Stride also includes **MSAA** (multisample anti-aliasing), but this isn't a post effect. You can enable MSAA in the **forward renderer** properties.
Stride также включает **MSAA** (многосемпловое сглаживание), но это не пост-эффект.  Вы можете включить MSAA в свойствах **forward renderer**.

## Properties
## Характеристики

![Properties](media/anti-aliasing.png)
![Свойства](media/anti-aliasing.png)

| Property          | Description 
|  Недвижимость |  Описание
| --------------    | ---- 
|  -------------- |  ----
| Dither            | The amount of dither. Less dither produces better results, but is slower.
|  дизеринг |  Количество дизеринга.  Меньше дизеринга дает лучшие результаты, но работает медленнее.
| Quality           | The quality of the effect. This directly affects performance.
|  Качество |  Качество эффекта.  Это напрямую влияет на производительность.
| Input luminance from alpha | Retrieve the luminance from the alpha channel of the input color. This is slower but more accurate. If disabled, the effect uses the green component of the input color as an approximation for the luminance.
|  Входная яркость из альфа |  Получите яркость из альфа-канала входного цвета.  Это медленнее, но точнее.  Если этот параметр отключен, эффект использует зеленый компонент входного цвета в качестве приблизительного значения яркости.

## See also
## Смотрите также

* [Ambient occlusion](ambient-occlusion.md)
* [Окружающая окклюзия] (ambient-occlusion.md)
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
