# Particle spawners
# Спавнеры частиц

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Particle spawners** control when, how many, and how quickly particles are emitted. Emitters need at least one spawner, but can contain multiple spawners with different settings.
**Создатели частиц** контролируют, когда, сколько и как быстро испускаются частицы.  Излучателям нужен как минимум один спаунер, но они могут содержать несколько спаунеров с разными настройками.

## Per second
## В секунду

Emits a fixed number of particles per second. It balances and interpolates them and is stable even if the framerate changes or drops. For example, at a rate of 20 particles per second, the spawner spawns one particle every three frames for 60fps games and two particles for every three frames (skipping every third frame) for 30fps games.
Испускает фиксированное количество частиц в секунду.  Он уравновешивает и интерполирует их и работает стабильно, даже если частота кадров изменяется или падает.  Например, при скорости 20 частиц в секунду генератор порождает одну частицу каждые три кадра для игр со скоростью 60 кадров в секунду и две частицы для каждых трех кадров (пропуская каждый третий кадр) для игр со скоростью 30 кадров в секунду.

![media/particles-reference-spawners-1.png](media/particles-reference-spawners-1.png) 
![media/particles-reference-spawners-1.png](media/particles-reference-spawners-1.png)

| Property                | Description                                                                                            |
|  Недвижимость |  Описание |
|-------------------------|--------------------------------------------------------------------------------------------------------|
|-------------------------|-----------------------  --------------------------------------------------  -------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
|  Петля |  Чтобы создать цикл создания, когда он достигает конца своей продолжительности, выберите **Цикл** (по умолчанию).  Чтобы создать цикл создания без ожидания между циклами, выберите **Цикл, без задержки**.  Чтобы спаунер появлялся один раз, а затем останавливался, выберите **Один выстрел**.  |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
|  Задержка |  Как долго (в секундах) спаунер ждет перед спауном.  Это случайное значение между значениями X (минимум) и Y (максимум).|
| Duration                | How long (in seconds) the spawner spawns particles for. At the end of the duration, the spawner either starts again or stops, depending on the Loop property.|
|  Продолжительность |  Как долго (в секундах) спаунер создает частицы.  В конце продолжительности генератор либо запускается снова, либо останавливается, в зависимости от свойства Loop.|
| Particles               | The number of particles the spawned per second. This can be a floating value (eg 36.875).                       |
|  Частицы |  Количество частиц, порождаемых в секунду.  Это может быть плавающее значение (например, 36,875).  |

## Per frame
## На кадр

Emits a fixed number of particles per frame, regardless of framerate. This can be useful if you require a fixed number of particles - for example, exactly one every frame, which is useful for trails and ribbons.
Испускает фиксированное количество частиц на кадр, независимо от частоты кадров.  Это может быть полезно, если вам требуется фиксированное количество частиц — например, ровно одна частица в каждом кадре, что полезно для следов и лент.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-2.png) 
![media/particles-reference-spawners-2.png](media/particles-reference-spawners-2.png)

| Property                | Description                                                                                            |
|  Недвижимость |  Описание |
|-------------------------|--------------------------------------------------------------------------------------------------------|
|-------------------------|-----------------------  --------------------------------------------------  -------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
|  Петля |  Чтобы создать цикл создания, когда он достигает конца своей продолжительности, выберите **Цикл** (по умолчанию).  Чтобы создать цикл создания без ожидания между циклами, выберите **Цикл, без задержки**.  Чтобы спаунер появлялся один раз, а затем останавливался, выберите **Один выстрел**.  |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
|  Задержка |  Как долго (в секундах) спаунер ждет перед спауном.  Это случайное значение между значениями X (минимум) и Y (максимум).|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                                 |
|  Продолжительность |  Как долго (в секундах) спаунер создает частицы.  |
| Particles               | The number of particles spawned per frame. The value can be a floating value, including values less than 1, in which case a new particle is spawned every few frames.                                                                              |
|  Частицы |  Количество частиц, порожденных за кадр.  Значение может быть плавающим, включая значения меньше 1, и в этом случае новая частица создается каждые несколько кадров.  |
| Framerate               | This is for estimation purposes only when the engine calculates the maximum number of particles.|
|  Частота кадров |  Это делается только для целей оценки, когда движок вычисляет максимальное количество частиц.|

## Burst
## Лопаться

Emits all particles in one burst.
Испускает все частицы одним выстрелом.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-3.png) 
![media/particles-reference-spawners-2.png](media/particles-reference-spawners-3.png)

| Property                | Description                                                                                            |
|  Недвижимость |  Описание |
|-------------------------|--------------------------------------------------------------------------------------------------------|
|-------------------------|-----------------------  --------------------------------------------------  -------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
|  Петля |  Чтобы создать цикл создания, когда он достигает конца своей продолжительности, выберите **Цикл** (по умолчанию).  Чтобы создать цикл создания без ожидания между циклами, выберите **Цикл, без задержки**.  Чтобы спаунер появлялся один раз, а затем останавливался, выберите **Один выстрел**.  |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
|  Задержка |  Как долго (в секундах) спаунер ждет перед спауном.  Это случайное значение между значениями X (минимум) и Y (максимум).|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                             |
|  Продолжительность |  Как долго (в секундах) спаунер создает частицы.  |
| Particles/burst         | The number of particles spawned in each burst. |
|  Частицы/взрыв |  Количество частиц, порожденных в каждом всплеске.  |

## Distance
## Расстояние

Emits particles based on the distance traveled by the emitter. If the emitter doesn't move, it spawns no particles.
Испускает частицы в зависимости от расстояния, пройденного излучателем.  Если эмиттер не движется, он не порождает частиц.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-4.png) 
![media/particles-reference-spawners-2.png](media/particles-reference-spawners-4.png)

| Property                | Description                                                                                            |
|  Недвижимость |  Описание |
|-------------------------|--------------------------------------------------------------------------------------------------------|
|-------------------------|-----------------------  --------------------------------------------------  -------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
|  Петля |  Чтобы создать цикл создания, когда он достигает конца своей продолжительности, выберите **Цикл** (по умолчанию).  Чтобы создать цикл создания без ожидания между циклами, выберите **Цикл, без задержки**.  Чтобы спаунер появлялся один раз, а затем останавливался, выберите **Один выстрел**.  |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
|  Задержка |  Как долго (в секундах) спаунер ждет перед спауном.  Это случайное значение между значениями X (минимум) и Y (максимум).|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                              |
|  Продолжительность |  Как долго (в секундах) спаунер создает частицы.  |
| Particles/unit          | The number of particles spawned for every distance unit the spawner moves. You can use fractions if you need fewer than one particle per distance unit. The rate adjusts with scaling. |
|  Частицы/единица |  Количество частиц, порожденных на каждую единицу расстояния, на которую перемещается генератор.  Вы можете использовать дроби, если вам нужно меньше одной частицы на единицу расстояния.  Скорость регулируется масштабированием.  |

## From parent
## От родителя

Emits particles based on other particles (parents). When certain conditions in a parent particle are met, the spawner spawns particles.
Испускает частицы на основе других частиц (родителей).  Когда в родительской частице выполняются определенные условия, создатель порождает частицы.

![media/particles-reference-spawners-2.png](media/particles-reference-spawners-5.png) 
![media/particles-reference-spawners-2.png](media/particles-reference-spawners-5.png)

| Property                | Description                                                                                            |
|  Недвижимость |  Описание |
|-------------------------|--------------------------------------------------------------------------------------------------------|
|-------------------------|-----------------------  --------------------------------------------------  -------------------------------|
| Loop                    | To have the spawner loop when it reaches the end of its duration, select **Looping** (default). To have the spawner loop with no wait between each loop, select **Looping, no delay**. To have the spawner spawn once and then stop, select **One shot**. |
|  Петля |  Чтобы создать цикл создания, когда он достигает конца своей продолжительности, выберите **Цикл** (по умолчанию).  Чтобы создать цикл создания без ожидания между циклами, выберите **Цикл, без задержки**.  Чтобы спаунер появлялся один раз, а затем останавливался, выберите **Один выстрел**.  |
| Delay                   | How long (in seconds) the spawner waits before spawning. This is a random value between the X (minimum) and Y (maximum) values.|
|  Задержка |  Как долго (в секундах) спаунер ждет перед спауном.  Это случайное значение между значениями X (минимум) и Y (максимум).|
| Duration                | How long (in seconds) the spawner spawns particles for.                                                                    |
|  Продолжительность |  Как долго (в секундах) спаунер создает частицы.  |
| Parent emitter          | The parent emitter, which should match the emitter's name set on that emitter. |
|  Родительский эмиттер |  Родительский эмиттер, который должен соответствовать имени эмиттера, установленному на этом эмиттере.  |
| Spawn Control Group     | This field will be added to the parent particles for more precise control over which parent particle spawns how many children. There are 4 groups you can choose from and they should match the initializers' groups, if initializers require control. |
|  Группа контроля появления |  Это поле будет добавлено к родительским частицам для более точного контроля над тем, какая родительская частица порождает сколько потомков.  Есть 4 группы, которые вы можете выбрать, и они должны соответствовать группам инициализаторов, если инициализаторы требуют контроля.  |
| Particles/trigger       | How many particles (min and max) are spawned from a parent each time the triggering condition is met. |
|  Частицы/триггер |  Сколько частиц (минимум и максимум) порождаются из родителя каждый раз, когда выполняется условие срабатывания.  |
| Particle Spawn Trigger  | What condition triggers child particles spawning (detailed below) |
|  Триггер появления частиц |  Какое условие вызывает появление дочерних частиц (подробно ниже) |

### Particle Spawn Trigger
### Триггер создания частиц
 - On Birth - Child particles are spawned once when a parent particle is born (once per parent)
- При рождении - дочерние частицы создаются один раз при рождении родительской частицы (один раз для каждого родителя).
 - On Death - Child particles are spawned once when a parent particle dies (once per parent)
- При смерти - дочерние частицы создаются один раз, когда родительская частица умирает (один раз для каждого родителя).
 - Distance - Child particles are spawned per distance traveled as the parent particle moves
- Расстояние - дочерние частицы создаются на расстояние, пройденное при перемещении родительской частицы.
 - On Hit - Parent particles need to implement *Collision Updater*. Child particles are spawned when a parent particle hits the surface.
- On Hit - Родительские частицы должны реализовать *Collision Updater*.  Дочерние частицы создаются, когда родительская частица попадает на поверхность.
 - Lifetime - Child particles are spawned when the parent particle's lifetime is between two limits, A and B, expressed as normalized values (0 to 1) over the particle's lifetime. If A < B, the period is 0..(A..B)..1, if B > A the period is reversed to (0..B)..(A..1). This method is less precise than the On Birth/On Death conditions.
- Время жизни — дочерние частицы создаются, когда время жизни родительской частицы находится между двумя пределами, A и B, выраженными как нормализованные значения (от 0 до 1) за время жизни частицы.  Если A < B, период равен 0..(A..B)..1, если B > A, период меняется на (0..B)..(A..1).  Этот метод менее точен, чем условия «При рождении/при смерти».

## See also
## Смотрите также

* [Create particles](create-particles.md)
* [Создать частицы](create-particles.md)
* [Emitters](emitters.md)
* [Излучатели](emitters.md)
* [Shapes](shapes.md)
* [Фигуры](shapes.md)
* [Materials](materials.md)
* [Материалы](materials.md)
* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)
* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
