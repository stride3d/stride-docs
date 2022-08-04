# Emitters
# Излучатели

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Particle emitters** manage how many particles are in an effect, how they appear, move, and disappear, and how they are drawn. For example, a fire effect might be composed of three separate particle effects: flames, embers, and smoke. Each of these effects is managed by a separate particle emitter.
**Эмиттеры частиц** управляют количеством частиц в эффекте, их появлением, перемещением и исчезновением, а также способом их рисования.  Например, эффект огня может состоять из трех отдельных эффектов частиц: пламени, угольков и дыма.  Каждый из этих эффектов управляется отдельным излучателем частиц.

Emitters contain further controls such as [spawners](spawners.md), [initializers](initializers.md), and [updaters](updaters.md).
Эмиттеры содержат дополнительные элементы управления, такие как [spawners] (spawners.md), [initializers] (initializers.md) и [updaters] (updaters.md).

![media/particles-reference-emitters-1.png](media/particles-reference-emitters-1.png) 
![media/particles-reference-emitters-1.png](media/particles-reference-emitters-1.png)

| Property         | Description
|  Недвижимость |  Описание
| ---------------- | -----------
|  ---------------- |  -----------
| Emitter name     | A unique identifier for the particle emitter
|  Имя эмиттера |  Уникальный идентификатор излучателя частиц
| Max particles    | The maximum number of active particles the emitter can manage at a given time, based on the particles' spawn rate and lifespan. If you leave this at 0, Stride uses its own estimate.
|  Максимум частиц |  Максимальное количество активных частиц, которыми эмиттер может управлять в данный момент времени, в зависимости от скорости появления частиц и продолжительности жизни.  Если вы оставите это значение равным 0, Stride использует собственную оценку.
| Lifespan         | New particles have a lifespan between these two values
|  Срок службы |  Новые частицы имеют продолжительность жизни между этими двумя значениями.
| Space            | Particles in **world** space remain in the world space when the emitter moves away from them. Particles in **local** space always exist in the emitter's local coordinate system; if the emitter moves, rotates, or scales, the particles move with it.
|  Космос |  Частицы в **мировом** пространстве остаются в мировом пространстве, когда излучатель удаляется от них.  Частицы в **локальном** пространстве всегда существуют в локальной системе координат излучателя;  если эмиттер движется, вращается или масштабируется, частицы движутся вместе с ним.
| Randomize        | Particles use pseudo-random values for everything which requires randomness. If you set this to **Time**, different emitters generate different random numbers. If you set it to **Fixed**, different instances of the same effect behave identically. **Position** acts as Fixed but is different for different positions.
|  Рандомизировать |  Частицы используют псевдослучайные значения для всего, что требует случайности.  Если вы установите для этого параметра значение **Время**, разные эмиттеры будут генерировать разные случайные числа.  Если вы установите значение **Fixed**, разные экземпляры одного и того же эффекта будут вести себя одинаково.  **Позиция** действует как Фиксированная, но отличается для разных позиций.
| Draw priority    |  This controls the order in which particles are drawn. Higher numbers have higher priority. For example, if this particle effect has a draw priority of 2, it will be drawn after a particle effect with a draw priority of 1.
|  Приоритет розыгрыша |  Это управляет порядком, в котором рисуются частицы.  Более высокие числа имеют более высокий приоритет.  Например, если этот эффект частиц имеет приоритет прорисовки 2, он будет прорисовываться после эффекта частиц с приоритетом прорисовки 1.
| Sorting          | Choose if the articles should be drawn by **depth** (away from the camera), **age** (particles spawned first are drawn on top), **order**, or in no order **none** (good for additive particles, which need no sorting). |
|  Сортировка |  Выберите, должны ли статьи отображаться по **глубине** (вдали от камеры), **возрасту** (частицы, созданные первыми, рисуются сверху), **порядку** или в любом порядке **нет**  (хорошо для аддитивных частиц, которые не нуждаются в сортировке).  |
| Shape            | Specifies the [shape](shapes.md) used to draw the particles
|  Форма |  Указывает [shape](shapes.md), используемый для рисования частиц
| Material         | Specifies the [material](materials.md) used to render the particles
|  Материал |  Определяет [материал] (materials.md), используемый для рендеринга частиц.
| Spawners         | [Spawners](spawners.md) control how quickly new particles are emitted. To emit particles, emitters must have at least one spawner.
|  Спавнеры |  [Spawners](spawners.md) контролируют скорость испускания новых частиц.  Чтобы излучать частицы, у эмиттеров должен быть хотя бы один спаунер.
| Initializers     | [Initializers](initializers.md) set the initial values of new particles
|  Инициализаторы |  [Initializers](initializers.md) устанавливает начальные значения новых частиц
| Updaters         | [Updaters](updaters.md) update living particles every frame, changing their attributes. Updaters execute in the order in which they appear on the list.
|  Обновления |  [Updaters](updaters.md) обновляют живые частицы каждый кадр, меняя их атрибуты.  Модули обновления выполняются в том порядке, в котором они появляются в списке.

## See also
## Смотрите также

* [Create particles](create-particles.md)
* [Создать частицы](create-particles.md)

* [Shapes](shapes.md)
* [Фигуры](shapes.md)

* [Materials](materials.md)
* [Материалы](materials.md)

* [Spawners](spawners.md)
* [Спаунеры](spawners.md)

* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)

* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
