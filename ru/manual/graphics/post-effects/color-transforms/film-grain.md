# Film grain
# Зернистость

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

The **film grain** adds noise at each frame to simulate the grain of films used in real cameras.
**Зернистость пленки** добавляет шум в каждый кадр, чтобы имитировать зернистость пленки, используемой в реальных камерах.

![media/film-grain-1.png](media/film-grain-1.png) 
![media/film-grain-1.png](media/film-grain-1.png)

The pattern is procedurally generated and changes at each frame.
Паттерн генерируется процедурно и меняется в каждом кадре.

To simulate real film grain, the noise should be more visible in areas of medium light intensity, and less visible in bright or dark areas.
Чтобы имитировать реальную зернистость пленки, шум должен быть более заметен в областях со средней интенсивностью света и менее заметен в ярких или темных областях.

The pattern locally modifies the luminance of the pixels affected.
Шаблон локально изменяет яркость затронутых пикселей.

![media/film-grain-2.png](media/film-grain-2.png) 
![media/film-grain-2.png](media/film-grain-2.png)

## Properties
## Характеристики

| Property         | Description                                                                 |
|  Недвижимость |  Описание |
| ---------------- | --------------------------------------------------------------------------- |
|  ---------------- |  --------------------------------------------------  ------------------------- |
| Amount           | Amount/strength of the effect                                         
|  Сумма |  Количество/сила эффекта
| Grain Size       | Size of the grain                                                     
|  Размер зерна |  Размер зерна
| Animate          | When enabled, the procedural pattern changes at each frame            
|  Анимировать |  При включении процедурный шаблон меняется в каждом кадре.
| Luminance Factor | How strongly the original pixel luminance is affected by the grain pattern
|  Коэффициент яркости |  Насколько сильно исходная яркость пикселя зависит от зернистости

## See also
## Смотрите также

* [Gamma correction](gamma-correction.md)
* [Гамма-коррекция](gamma-correction.md)
* [ToneMap](tonemap.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)
* [Виньетирование](vignetting.md)
