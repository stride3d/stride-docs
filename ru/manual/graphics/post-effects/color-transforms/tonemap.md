# ToneMap
# Тоновая карта

**Tone-mapping** takes an HDR buffer as input, and remaps its color to a [0, 255] range so we can display it on a screen.
**Tone-mapping** принимает буфер HDR в качестве входных данных и переназначает его цвет в диапазоне [0, 255], чтобы мы могли отобразить его на экране.

There are many ways to remap colors from an HDR space to an LDR, depending on the formula you choose.
Есть много способов переназначить цвета из пространства HDR в LDR, в зависимости от выбранной вами формулы.

![media/tonemap-1.png](media/tonemap-1.png) 
![media/tonemap-1.png](media/tonemap-1.png)

Stride supports several tone-mapping operators out of the box:
Stride по умолчанию поддерживает несколько операторов тонального отображения:

- Reinhard (the classic operator)
- Рейнхард (классический оператор)
- Exponential
- Экспоненциальный
- Logarithmic
- Логарифмический
- Drago
- Драго
- Hejl-Dawson
- Хейл-Доусон
- Mike-Day
- Майк-Дэй
- U2-Filmic
- U2-Фильмик

## See also
## Смотрите также

* [Film grain](film-grain.md)
* [Зерно пленки] (film-grain.md)
* [Gamma correction](gamma-correction.md)
* [Гамма-коррекция](gamma-correction.md)
* [Vignetting](vignetting.md)
* [Виньетирование](vignetting.md)
