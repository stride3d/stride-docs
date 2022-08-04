# Light streaks
# Светлые полосы

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=

Similar to the [bloom effect](bloom.md), the **light streak** effect uses the result of the [bright filter](bright-filter.md) to make the bright areas bleed along a direction. It creates star-pattern beams from the light point.
Подобно [эффекту цветения](bloom.md), эффект **световой полосы** использует результат [яркого фильтра](bright-filter.md), чтобы заставить яркие области растекаться по направлению.  Он создает звездообразные лучи из световой точки.

![media/light-streaks-1.png](media/light-streaks-1.png) 
![media/light-streaks-1.png](media/light-streaks-1.png)

## Properties
## Характеристики

![media/light-streaks-2.png](media/light-streaks-2.png) 
![media/light-streaks-2.png](media/light-streaks-2.png)

| Property                  | Description   
|  Недвижимость |  Описание
| ------------------------- | ---------------- 
|  ------------------------- |  ----------------
| Amount                    | Strength of the light streak
|  Сумма |  Сила световой полосы
| Streak Count              | Number of beams emitted by a bright point. The more streaks, the higher the performance cost.
|  количество серий |  Количество лучей, испускаемых яркой точкой.  Чем больше полос, тем выше стоимость производительности.
| Attenuation               | How fast the light attenuates along a streak (0 for immediate attenuation, 1 for no attenuation)  
|  Затухание |  Как быстро свет затухает вдоль полосы (0 для немедленного затухания, 1 для отсутствия затухания)
| Phase                     | Phase (angle) of the star-like pattern
|  Фаза |  Фаза (угол) звездообразного узора
| Color Aberration Strength | Strength of the color aberration along the streaks. <br>![media/light-streaks-3.png](media/light-streaks-3.png) <br>Notice the streaks involve multiple colors (yellow, purple, green, pink).                                        
|  Сила цветовой аберрации |  Сила цветовой аберрации вдоль полос.  <br>![media/light-streaks-3.png](media/light-streaks-3.png) <br>Обратите внимание, что полосы включают несколько цветов (желтый, фиолетовый, зеленый, розовый).
| Is Anamorphic             | Simulates the behavior of anamorphic lenses, widely used in Hollywood productions. <br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> The effect above is achieved by using two light streaks with a phase of 0, enabling anamorphic mode, and slightly distorting the bright pass result horizontally.                                                                         
|  Анаморфный |  Имитирует поведение анаморфотных линз, широко используемых в голливудских постановках.  <br>![media/light-streaks-4.png](media/light-streaks-4.png) <br> Описанный выше эффект достигается за счет использования двух световых полос с нулевой фазой, включения анаморфотного режима и  слегка искажая результат яркого прохода по горизонтали.

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
* [Depth of field](depth-of-field.md)
* [Глубина резкости](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Блики](lens-flare.md)
