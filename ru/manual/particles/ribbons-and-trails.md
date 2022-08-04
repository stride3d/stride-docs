# Ribbons and trails
# Ленты и тропы

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

To create **ribbons** and **trails**, Stride builds the mesh data as a strip connecting the particles, rather than individual quads. Ribbons and trails are often used to create visual effects such as sword slashes.
Чтобы создать **ленты** и **следы**, Stride строит данные сетки как полосу, соединяющую частицы, а не отдельные квадраты.  Ленты и дорожки часто используются для создания визуальных эффектов, таких как удары мечом.

![media/particles-tutorials-ribbons-0.jpg](media/ribbons-and-trails.jpg)
![медиа/частицы-учебники-ленты-0.jpg](медиа/ленты-и-тропы.jpg)

In the diagram below, several particles (represented as red dots) are rendered as individual quads (blue squares):
На приведенной ниже диаграмме несколько частиц (обозначенных красными точками) отображаются как отдельные четырехугольники (синие квадраты):

![Diagram: individual quads](media/particles-diagram-quads.png)
![Диаграмма: отдельные четырехугольники](media/particles-diagram-quads.png)

In the diagram below, a strip is created by connecting the particles and rendering quads between the adjacent particles:
На диаграмме ниже полоса создается путем соединения частиц и рендеринга четырехугольников между соседними частицами:

![Diagram: ribbon of particles](media/particles-diagram-strip.png)
![Диаграмма: лента частиц](media/particles-diagram-strip.png)

## Ribbons vs trails
## Ленты против следов

Both ribbons and trails generate a flat surface which follows an axis connecting adjacent particles in a line. This line defines one of the axes of the surface. The difference is that ribbons always face the camera, and trails don't.
И ленты, и следы создают плоскую поверхность, которая следует оси, соединяющей соседние частицы в линию.  Эта линия определяет одну из осей поверхности.  Разница в том, что ленты всегда обращены к камере, а следы — нет.

The gif below shows the different behavior of ribbons (red) and trails (yellow) when viewed from different camera angles. Note how the ribbon doesn't change as the camera moves; it's fixed in space.
На гифке ниже показано различное поведение лент (красные) и следов (желтые) при просмотре с разных ракурсов камеры.  Обратите внимание, что лента не меняется при движении камеры;  он зафиксирован в пространстве.

![Ribbons vs trails](media/ribbons-vs-trails.gif)
![Ленты и тропы](media/ribbons-vs-trails.gif)

## Sort particles
## Сортировка частиц

To create ribbons and trails, you usually need to sort the particles into an order. If you don't sort the particles, they connect erratically, as in this diagram:
Чтобы создать ленты и следы, вам обычно нужно рассортировать частицы по порядку.  Если вы не сортируете частицы, они соединяются хаотично, как на этой диаграмме:

![Diagram: unordered particles/particles-tutorials-ribbons-2.png](media/particles-diagram-unordered.png)
![Диаграмма: неупорядоченные частицы/частицы-учебники-ленты-2.png](media/particles-diagram-unordered.png)

Here's an example of how unsorted particles look at runtime:
Вот пример того, как несортированные частицы выглядят во время выполнения:

<p>
<p>
<video autoplay loop class="responsive-video" poster="tutorials/media/sword-slash-2.jpg">
<цикл автовоспроизведения видео class=
   <source src="tutorials/media/sword-slash-2.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

Rather than the particles connecting in order, the strip erratically jumps between particles. (This is the same problem alpha-blended quads have when they're not properly sorted.)
Вместо того, чтобы частицы соединялись по порядку, полоса беспорядочно прыгает между частицами.  (Это та же проблема, что и у четырехугольников с альфа-смешением, когда они не отсортированы должным образом.)

To sort the particles, under **Particle System > Source > Emitters**, change the **Sorting** property.
Чтобы отсортировать частицы, в разделе **Система частиц > Источник > Излучатели** измените свойство **Сортировка**.

![Sort particles](tutorials/media/sort-by-order.png)
![Сортировка частиц](tutorials/media/sort-by-order.png)

If your particles have the same **lifespan** property, and are emitted no more than once per frame (usually the case at 30 particles per second or fewer), you can sort them by age. 
Если ваши частицы имеют одинаковое свойство **срок жизни** и испускаются не более одного раза за кадр (обычно это 30 частиц в секунду или меньше), вы можете отсортировать их по возрасту.

However, if you spawn several particles per second or your particles vary in lifespan, sorting by age doesn't provide a consistent order, as the sorting parameter changes between frames. In this case, you should sort the particles by order. To do this, you need to add a **spawn order initializer**. To do this, in the entity properties, under **Particle System > Source > Emitters**, next to **Initializers**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select **Spawn Order**.
Однако, если вы создаете несколько частиц в секунду или ваши частицы различаются по продолжительности жизни, сортировка по возрасту не обеспечивает постоянного порядка, поскольку параметр сортировки меняется между кадрами.  В этом случае вы должны отсортировать частицы по порядку.  Для этого вам нужно добавить **инициализатор порядка появления**.  Для этого в свойствах сущности в разделе **Система частиц > Источник > Излучатели** рядом с **Инициализаторы** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus  -icon.png) (**Добавить**) и выберите **Порядок появления**.

![Add spawn-order initializer](tutorials/media/add-spawn-order-initializer.png)
![Добавить инициализатор порядка появления](tutorials/media/add-spawn-order-initializer.png)

This adds a spawn order initializer to the emitter. It doesn't have any properties, but it gives the particles a SpawnID we can sort them by.
Это добавляет к эмиттеру инициализатор порядка появления.  У него нет никаких свойств, но он дает частицам SpawnID, по которому мы можем их сортировать.

>[!Note]
>[!Примечание]
>Sorting by depth might work in niche cases, but this doesn't preserve the order between different frames. We don't recommend it for most situations.
>Сортировка по глубине может работать в узкоспециализированных случаях, но она не сохраняет порядок между разными кадрами.  Мы не рекомендуем его для большинства ситуаций.

## Texture coordinates
## Текстурные координаты

Unlike billboards, which are individual quads, ribbons and trails have a single surface across all particles. To define how textures are mapped across the surface, under **Particle System > Source > Emitters > Shape**, change the **UV Coords** property.
В отличие от рекламных щитов, которые представляют собой отдельные квадраты, ленты и дорожки имеют единую поверхность для всех частиц.  Чтобы определить, как текстуры накладываются на поверхность, в разделе **Система частиц > Источник > Излучатели > Форма** измените свойство **УФ-координаты**.

![UV coords property](media/uv-coords.png)
![свойство UV-координат](media/uv-coords.png)

 * **AsIs**: The texture is mapped per segment, copying the same quad stretched between every two particles. This is sometimes useful with flipbook animations (in the [Material](materials.md) settings).
* **AsIs**: текстура накладывается на сегмент, копируя один и тот же четырехугольник, растянутый между каждыми двумя частицами.  Иногда это полезно с анимацией флипбука (в настройках [Материал](materials.md)).

    ![As-is texture mapping](media/particles-diagram-asis.png)
![Наложение текстуры как есть](media/particles-diagram-asis.png)
 
 * **Stretched**: The texture is stretched between the first and last particle of the trail or ribbon. The **UV Factor** defines how many times the texture appears across the entire trail or ribbon (1 = once).
* **Растянутый**: Текстура растягивается между первой и последней частицей следа или ленты.  **УФ-фактор** определяет, сколько раз текстура появляется на всей дорожке или ленте (1 = один раз).

     ![Stretched texture mapping](media/particles-diagram-stretched.png)
![Растянутое наложение текстуры](media/particles-diagram-stretched.png)

 * **DistanceBased**: The texture is repeated based on the actual world length of the ribbon or trail rather than the number of particles. The **UV Factor** defines the distance in [world units](../game-studio/world-units.md) after which the texture repeats
* **DistanceBased**: текстура повторяется на основе фактической мировой длины ленты или следа, а не количества частиц.  **УФ-фактор** определяет расстояние в [мировых единицах измерения](../game-studio/world-units.md), после которого текстура повторяется.

     ![Distance-based texture mapping](media/particles-diagram-distancebased.png)
![Наложение текстуры на основе расстояния](media/particles-diagram-distancebased.png)

## Smooth ribbons and trails
## Гладкие ленты и следы

You can add extra segments between adjacent particles to smooth the lines between particles. To do this, under **Particle System > Source > Emitters > Shape**, change the **Smoothing** property.
Вы можете добавить дополнительные сегменты между соседними частицами, чтобы сгладить линии между частицами.  Для этого в разделе **Particle System > Source > Emitters > Shape** измените свойство **Smoothing**.

 * **None** — No smoothing creates only one segment joining two particles. This creates trails and ribbons with sharp angles.
* **None** — Без сглаживания создается только один сегмент, соединяющий две частицы.  Это создает следы и ленты с острыми углами.

    ![Diagram: particle smoothing](media/diagram-smoothing-none.png)
![Диаграмма: сглаживание частиц](media/diagram-smoothing-none.png)
 
 * **Fast** — This uses [Catmull-Rom interpolation (Wikipedia)](https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline) to add extra segments between particles, creating a smoother effect. You can set the number of segments with the **Segments** property.
* **Быстро** — используется [интерполяция Катмулла-Рома (Википедия)](https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline) для добавления дополнительных сегментов между частицами, создавая более плавный эффект.  .  Вы можете установить количество сегментов с помощью свойства **Segments**.

     ![Diagram: particle smoothing](media/diagram-smoothing-fast.png)
![Диаграмма: сглаживание частиц](media/diagram-smoothing-fast.png)
 
 * **Best** — This generally creates the smoothest effect, but requires more CPU. It calculates a circumcircle around every three sequential particles along the control axis, then adds extra control points on the circle, keeping the segments in an arc. For the first and the last segment, there is only one arc to be followed, but for mid-sections, two different arcs from two different circles overlap; Stride interpolates the control points from the first arc and the second as the point approaches the second particle. You can set the number of segments between every two particles with the **Segments** property.
* **Best** — Обычно это создает наиболее плавный эффект, но требует больше процессорного времени.  Он вычисляет описанную окружность вокруг каждых трех последовательных частиц вдоль оси управления, а затем добавляет дополнительные контрольные точки на окружность, сохраняя сегменты в виде дуги.  Для первого и последнего сегментов нужно следовать только по одной дуге, но для средних секций две разные дуги из двух разных окружностей перекрываются;  Stride интерполирует контрольные точки из первой дуги и второй по мере приближения точки ко второй частице.  Вы можете установить количество сегментов между каждыми двумя частицами с помощью свойства **Segments**.

    ![Diagram: particle smoothing](media/diagram-smoothing-best.png)
![Диаграмма: сглаживание частиц](media/diagram-smoothing-best.png)

This video shows the difference between the three smoothing methods. Note that the rightmost trail (using the **Best** method) is slightly more circular, closer to the actual path of the sword swing.
В этом видео показана разница между тремя методами сглаживания.  Обратите внимание, что самый правый след (используя метод **Best**) немного более круглый, ближе к фактическому пути взмаха меча.

![media/particles-tutorials-ribbons-6.gif](media/smoothing-comparison.gif)
![media/particles-tutorials-ribbons-6.gif](media/smoothing-comparison.gif)

## Sample project
## Пример проекта

For an example of a project that uses ribbons and trails, try the **Ribbon Particles Sample** included with Stride.
В качестве примера проекта, в котором используются ленты и дорожки, попробуйте **образец частиц ленты**, включенный в Stride.

## See also
## Смотрите также

* [Shapes](shapes.md)
* [Фигуры](shapes.md)
* [Tutorial: Create a trail](tutorials/create-a-trail.md)
* [Учебник: Создание тропы](tutorials/create-a-trail.md)
* [Tutorial: Lasers and lightning](tutorials/lasers-and-lightning.md)
* [Учебник: Лазеры и молния](tutorials/lasers-and-lightning.md)
