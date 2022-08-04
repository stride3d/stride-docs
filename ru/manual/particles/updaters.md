# Particle updaters
# Обновление частиц

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

After a particle spawns, it can change over time before it disappears. **Updaters** act on all living particles over time, changing attributes such as position, velocity, color, and so on. For example, a gravity force updates the particle's velocity at a constant rate, accelerating it toward the ground.
После появления частицы она может со временем измениться, прежде чем исчезнет.  **Обновления** воздействуют на все живые частицы с течением времени, изменяя такие атрибуты, как положение, скорость, цвет и т. д.  Например, сила гравитации обновляет скорость частицы с постоянной скоростью, ускоряя ее по направлению к земле.

Stride features several built-in updaters. The [custom particles](tutorials/custom-particles.md) sample demonstrates how you can add updaters to the engine.
Stride имеет несколько встроенных средств обновления.  Образец [пользовательские частицы](tutorials/custom-particles.md) демонстрирует, как вы можете добавить средства обновления в движок.

## Common properties
## Общие свойства

Several properties are common across many updaters.
Некоторые свойства являются общими для многих программ обновления.

![media/particles-reference-updaters-11.png](media/particles-reference-updaters-11.png) 
![media/particles-reference-updaters-11.png](media/particles-reference-updaters-11.png)

| Property     | Description
|  Недвижимость |  Описание
|--------------|-
|---------------|-
| Debug draw     | Draws a debug wireframe shape to show the boundaries for the updater. This feature only works for the editor and is ignored when you run your game.
|  Отладка розыгрыша |  Рисует форму каркаса отладки, чтобы показать границы средства обновления.  Эта функция работает только для редактора и игнорируется при запуске игры.
| Position inheritance        | Inherit the particle system component position, as defined in the Transform field |
|  Наследование позиции |  Наследовать положение компонента системы частиц, как указано в поле Transform |
| Position offset | Additional translation of the module. If it inherits the parent's position, this is applied on top of the inherited one. |
|  Смещение положения |  Дополнительный перевод модуля.  Если он наследует позицию родителя, она применяется поверх унаследованной.  |
| Rotation inheritance | Inherits the particle system component rotation, as defined in the Transform field |
|  Наследование вращения |  Наследует вращение компонента системы частиц, как определено в поле Transform |
| Rotation offset | Additional rotation of the module. If it inherits the parent's rotation, this is applied on top of the inherited one. |
|  Смещение вращения |  Дополнительный поворот модуля.  Если он наследует поворот родителя, он применяется поверх унаследованного.  |
| Scale inheritance | Inherits the particle system component's uniform scale, as defined in the Transform field. |
|  Наследование масштаба |  Наследует единый масштаб компонента системы частиц, как определено в поле Transform.  |
| Scale offset | Additional module scaling. If it inherits the parent scale, this is applied on top of the inherited one. |
|  Смещение шкалы |  Дополнительный модуль масштабирования.  Если он наследует родительскую шкалу, она применяется поверх унаследованной.  |

## Collider
## Коллайдер

![media/particles-reference-updaters-5.gif](media/particles-reference-updaters-5.gif) 
![media/particles-reference-updaters-5.gif](media/particles-reference-updaters-5.gif)

A **collider** is an updater that changes the particle position and velocity when it collides with a predefined shape.
**Коллайдер** — это средство обновления, которое изменяет положение и скорость частицы, когда она сталкивается с предопределенной формой.

![media/particles-reference-updaters-3.png](media/particles-reference-updaters-3.png) 
![media/particles-reference-updaters-3.png](media/particles-reference-updaters-3.png)

| Property | Description
|  Недвижимость |  Описание
| -------- |--------
|  -------- |--------
| Shape | The shape the particles collide with (sphere, cylinder, box, or torus)
|  Форма |  Форма, с которой сталкиваются частицы (сфера, цилиндр, коробка или тор)
| Is hollow | If disabled, the shape is solid and the particles bounce off it. If enabled, the shape is hollow like a container, and the particles stay inside the volume.
|  Полый |  Если отключено, форма становится твердой, и частицы отскакивают от нее.  Если включено, форма становится полой, как контейнер, а частицы остаются внутри объема.
| Kill particles | If enabled, the particles are killed immediately when they collide with the shape.
|  Убить частицы |  Если включено, частицы сразу же убиваются при столкновении с фигурой.
| Restitution  | The coefficient of restitution is the speed the particle retains in comparison to its speed before the collision. In this updater we use restitution as a *vertical only* speed. It doesn't affect the speed along the surface.                    |
|  Реституция |  Коэффициент восстановления — это скорость, которую частица сохраняет по сравнению со своей скоростью до столкновения.  В этом обновлении мы используем реституцию как скорость *только по вертикали*.  На скорость движения по поверхности это не влияет.  |
| Friction | The amount of horizontal speed the particle loses on collision with the shape. It only affects the speed along the surface, and doesn't change the height at which the particle bounces.
|  Трение |  Количество горизонтальной скорости, которую частица теряет при столкновении с формой.  Он влияет только на скорость вдоль поверхности и не меняет высоту, на которой отскакивает частица.

## Force field
## Силовое поле

![media/particles-reference-updaters-6.gif](media/particles-reference-updaters-6.gif) 
![media/particles-reference-updaters-6.gif](media/particles-reference-updaters-6.gif)

The **force field** is defined by a bounding shape and several force vectors that operate on the particles based on their relative position to the bounding shape.
**Силовое поле** определяется ограничивающей формой и несколькими векторами силы, которые воздействуют на частицы в зависимости от их относительного положения относительно ограничивающей формы.

![media/particles-reference-updaters-1.png](media/particles-reference-updaters-1.png) 
![media/particles-reference-updaters-1.png](media/particles-reference-updaters-1.png)

| Property | Description
|  Недвижимость |  Описание
| -------- | -
|  -------- |  -
| Shape | The bounding shape (sphere, cylinder, box or torus)
|  Форма |  Ограничивающая форма (сфера, цилиндр, коробка или тор)
| Falloff | The falloff is a simple linear function which dictates the intensity of the force applied on particles. It is based on the particle's distance from its center. Strength inside is how much of the magnitude applies when the particle is within *falloff start* distance from the center. Strength outside is how much of the magnitude applies when the particle is more than *falloff end* away from the center. Both values are relative to the bounding shape size; values inbetween are interpolated between the two magnitudes. Values in the center can still be 0, making the force only work *outside* the bounding shape.
|  Падение |  Падение представляет собой простую линейную функцию, которая определяет интенсивность силы, приложенной к частицам.  Он основан на расстоянии частицы от ее центра.  Сила внутри — это то, какая часть величины применяется, когда частица находится на расстоянии *начала спада* от центра.  Сила снаружи — это то, какая часть величины применяется, когда частица удалена от центра более чем на *конец спада*.  Оба значения относятся к размеру ограничивающей фигуры;  промежуточные значения интерполируются между двумя величинами.  Значения в центре все еще могут быть равны 0, поэтому сила действует только *вне* ограничивающей формы.
| Energy conservation   | Which part of the force energy conserved by the particles. Conserved energy is stored as particle velocity and results in gradually increasing speed. Energy not conserved directly applies to the particle's position and is lost when the force vanishes.
|  Энергосбережение |  Какая часть энергии силы сохраняется частицами.  Сохраняемая энергия хранится в виде скорости частиц и приводит к постепенному увеличению скорости.  Несохраняемая энергия напрямую относится к положению частицы и теряется, когда сила исчезает.
| Directed force | The vector force that moves the particle along the field's central axis (normally upwards)
|  Направленная сила |  Векторная сила, которая перемещает частицу вдоль центральной оси поля (обычно вверх).
| Vortex force | The force that moves the particle around the field's central axis using the right-hand rule for rotation
|  Вихревая сила |  Сила, которая перемещает частицу вокруг центральной оси поля с использованием правила правой руки для вращения.
| Repulsive force | The force that moves the particle away from the field's center or towards it, if negative
|  Отталкивающая сила |  Сила, перемещающая частицу от центра поля или к нему, если она отрицательна.
| Fixed force | The force that moves the particle along a fixed non-rotating and non-scaling axis
|  Фиксированная сила |  Сила, которая перемещает частицу вдоль фиксированной невращающейся и немасштабируемой оси.

### Falloff
### Падение

The **falloff** is the change in the forces' strength based on the distance of the particle from the shape's center. The falloff is a function of the relative distance, where distance of `0` is the center, 1 is the shape's boundaries, and more than 1 means the particle is outside the shape.
**Спад** — это изменение силы сил в зависимости от расстояния частицы от центра формы.  Спад является функцией относительного расстояния, где расстояние «0» — это центр, 1 — границы формы, а более 1 означает, что частица находится за пределами формы.

Particles closer than the falloff start are always affected with the coefficient Strength Inside. Particles farther than falloff end are always affected with the coefficient Strength Outside.
Частицы ближе, чем начало спада, всегда подвергаются воздействию коэффициента Strength Inside.  На частицы, расположенные дальше конца спада, всегда действует коэффициент Strength Outside.

Coefficient for particles in between changes linearly:
Коэффициент для промежуточных частиц изменяется линейно:

![media/particles-reference-updaters-2.png](media/particles-reference-updaters-2.png) 
![media/particles-reference-updaters-2.png](media/particles-reference-updaters-2.png)

For example, if the bounding shape is a sphere with a radius of 10m, particles within 1m from its center (0.1 x 10m) will be moved with full strength. After the 1m distance the strength linearly decreases until it reaches zero at 9m distance (0.9 x 10m). After that point, the forces don't affect the particle.
Например, если ограничивающей формой является сфера радиусом 10 м, частицы в пределах 1 м от ее центра (0,1 x 10 м) будут двигаться с полной силой.  После дистанции 1 м сила линейно уменьшается, пока не достигнет нуля на дистанции 9 м (0,9 х 10 м).  После этого момента силы не действуют на частицу.

### Bounding shapes
### Ограничивающие фигуры

#### Sphere
#### Сфера

![media/particles-reference-updaters-7.png](media/particles-reference-updaters-7.png) 
![media/particles-reference-updaters-7.png](media/particles-reference-updaters-7.png)

<sub>Image license: <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, sphere image from the <a href="https://commons.wikimedia.org/wiki/File:Sphere_wireframe_10deg_6r.svg">"Sphere wireframe" work</a> by <a href="https://commons.wikimedia.org/wiki/User:Geek3">Geek3</a> under <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>
<sub>Лицензия на изображение: <a rel= a href= Пользователь: Geek3

When the bounding shape is a sphere, the falloff distance is based on the radial distance of the particle from the sphere's center. If the sphere is scaled to an ellipsoid, this distance is also scaled. The distance is relative to the radius, with 1.0 being the sphere's surface.
Когда ограничивающей формой является сфера, расстояние спада основано на радиальном расстоянии частицы от центра сферы.  Если сфера масштабируется до эллипсоида, это расстояние также масштабируется.  Расстояние относительно радиуса, где 1.0 — это поверхность сферы.

The directed force vector is parallel to the sphere's local Y axis. The repulsive force vector points from the center to the particle. The vortex force vector goes around the sphere's Y axis at the particle's position (using the right-hand rule for rotation).
Вектор направленной силы параллелен локальной оси Y сферы.  Вектор силы отталкивания направлен от центра к частице.  Вектор вихревой силы движется вокруг оси Y сферы в точке положения частицы (используя правило правой руки для вращения).

#### Box
#### Коробка

![media/particles-reference-updaters-8.png](media/particles-reference-updaters-8.png) 
![media/particles-reference-updaters-8.png](media/particles-reference-updaters-8.png)

When the bounding shape is a box, the falloff distance is the longest of the three distances on the X, Y and Z axes. The distance is relative to the box's sizes, with 1.0 being the box's surface.
Когда ограничивающая форма представляет собой прямоугольник, расстояние спада является самым длинным из трех расстояний по осям X, Y и Z.  Расстояние зависит от размеров коробки, где 1.0 — это поверхность коробки.

The directed force vector is parallel to the box's local Y axis. The repulsive force vector points from the center to the particle. The vortex force vector goes around the box's Y axis at the particle's position (using the right-hand rule for rotation).
Вектор направленной силы параллелен локальной оси Y коробки.  Вектор силы отталкивания направлен от центра к частице.  Вектор вихревой силы движется вокруг оси Y ящика в точке положения частицы (используя правило правой руки для вращения).

#### Cylinder
#### Цилиндр

![media/particles-reference-updaters-9.png](media/particles-reference-updaters-9.png) 
![media/particles-reference-updaters-9.png](media/particles-reference-updaters-9.png)

When the bounding shape is a cylinder, the falloff distance is based on the radial distance of the particle from the cylinder's local Y axis. The particle height (position on the Y axis) is ignored unless the particle is outside the cylinder, in which case the distance is always 1.
Когда ограничивающая форма представляет собой цилиндр, расстояние спада основано на радиальном расстоянии частицы от локальной оси Y цилиндра.  Высота частицы (положение по оси Y) игнорируется, если только частица не находится за пределами цилиндра, и в этом случае расстояние всегда равно 1.

The directed force vector is parallel to the cylinder's local Y axis. The repulsive force vector points from the cylinder's local Y axis to the particle, so the repulsive force is always horizontal. The vortex force vector goes around the cylinder's Y axis at the particle position (using the right-hand rule for rotation).
Вектор направленной силы параллелен локальной оси Y цилиндра.  Вектор силы отталкивания направлен от локальной оси Y цилиндра к частице, поэтому сила отталкивания всегда горизонтальна.  Вектор вихревой силы проходит вокруг оси Y цилиндра в положении частицы (используя правило правой руки для вращения).

#### Torus
#### Тор

![media/particles-reference-updaters-10.png](media/particles-reference-updaters-10.png) 
![media/particles-reference-updaters-10.png](media/particles-reference-updaters-10.png)

<sub>Image license: <a href="https://gnu.org/licenses/fdl.html">GFDL</a>, <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>, torus image from the <a href="https://commons.wikimedia.org/wiki/File:Simple_Torus.svg">"A simple Torus" work</a> by Yassine Mrabet under GFDL, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA 3.0</a></sub>
<sub>Лицензия на изображение: <a href= licenses/by-sa/4.0/ Работа Яссин Мрабет  суб>

When the bounding shape is a torus, the field's nature changes completely. The falloff distance is based on the radial distance of the particle from the torus's inner circle (axis of revolution, shown in red), choosing a point on the circle closest to the particle.
Когда ограничивающей формой является тор, природа поля полностью меняется.  Расстояние спада основано на радиальном расстоянии частицы от внутренней окружности тора (ось вращения, показанная красным), выбирая точку на окружности, ближайшую к частице.

The directed force vector is tangent to the axis of revolution at the point closest to the particle. The repulsive force vector points from the axis to the particle. The vortex force vector goes around the directed force vector using the particle's position relative to the axis (using the right-hand rule for rotation).
Вектор направленной силы касается оси вращения в ближайшей к частице точке.  Вектор силы отталкивания направлен от оси к частице.  Вектор вихревой силы огибает направленный вектор силы, используя положение частицы относительно оси (используя правило правой руки для вращения).

While the math is a little complicated, using the torus force field isn't. Try it out!
Хотя математика немного сложна, использование силового поля тора — нет.  Попробуйте!

## Gravity
## Сила тяжести

The **gravity updater** is a simplified force which affects all particles regardless of their position, with a constant force vector which doesn't scale or rotate. It's editable, so you can use it in projects with different scales and behavior.
**Обновление гравитации** — это упрощенная сила, которая воздействует на все частицы независимо от их положения, с постоянным вектором силы, который не масштабируется и не вращается.  Его можно редактировать, поэтому вы можете использовать его в проектах с разными масштабами и поведением.

![media/particles-reference-updaters-4.png](media/particles-reference-updaters-4.png) 
![media/particles-reference-updaters-4.png](media/particles-reference-updaters-4.png)

The gravity force ignores most properties such as offset and inheritance, and only uses the following attributes:
Сила гравитации игнорирует большинство свойств, таких как смещение и наследование, и использует только следующие атрибуты:

| Property  | Description  
|  Недвижимость |  Описание
| --------- | -- 
|  --------- |  --
| Gravitational acceleration | The gravity force vector that defines the acceleration for all affected particles. The default value matches the average gravity on Earth.
|  Гравитационное ускорение |  Вектор силы тяжести, определяющий ускорение для всех затронутых частиц.  Значение по умолчанию соответствует средней гравитации на Земле.

## Direction from speed
## Направление от скорости

**Direction from speed** is a post-updater, meaning it resolves after updaters which are not post-updaters, even if they appear later in the list.
**Направление от скорости** — это средство после обновления, то есть оно разрешается после средств обновления, которые не являются средствами после обновления, даже если они появляются позже в списке.

It has no properties and simply updates the particle's direction to match its speed. It uses the difference between the positions of the particle from the last frame and isn't directly dependent on velocity. This means even if the particle's own velocity is 0 and it's only moved by external forces, direction from speed resolves correctly.
Он не имеет свойств и просто обновляет направление частицы в соответствии с ее скоростью.  Он использует разницу между позициями частицы из последнего кадра и не зависит напрямую от скорости.  Это означает, что даже если собственная скорость частицы равна 0 и она движется только внешними силами, направление от скорости определяется правильно.

Direction isn't a normalized vector and changes its magnitude to match the delta distance. It overwrites any previous direction parameters, such as from an initializer.
Направление не является нормализованным вектором и изменяет свою величину, чтобы соответствовать дельта-расстоянию.  Он перезаписывает любые предыдущие параметры направления, например, из инициализатора.

## Color animation
## Цветная анимация

**Color animation** is a post-updater, meaning it resolves after updaters which aren't post-updaters, even if they appear later in the list.
**Цветная анимация** выполняется после обновления, то есть она разрешается после обновлений, которые не являются постобновителями, даже если они появляются позже в списке.

Color animation updates the particle Color field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve in which case the particles will have slightly varied colors. Color animation overwrites any previous Color parameters, such as Initial Color.
Цветовая анимация обновляет поле Color частицы путем выборки кривой в течение нормализованного времени жизни частицы (от 0 до 1).  Вы можете установить вторичную кривую, в этом случае частицы будут иметь немного разные цвета.  Цветовая анимация перезаписывает любые предыдущие параметры цвета, такие как начальный цвет.

The curve values are given as Vector4, corresponding to RGBA with standard values between 0 and 1. Values above 1 are valid for RGB only (not Alpha) and can be used for HDR rendering.
Значения кривой задаются как Vector4, что соответствует RGBA со стандартными значениями от 0 до 1. Значения выше 1 действительны только для RGB (не для альфа-канала) и могут использоваться для визуализации HDR.

## Rotation animation
## Анимация вращения

**Rotation animation** is a post-updater, meaning it resolves after updaters which are not post-updaters, even if they appear later in the list. It's strictly a single axis rotation, used for billboarded particles.
**Анимация вращения** — это пост-обновляющая, то есть она разрешается после обновляющих, которые не являются пост-обновляющими, даже если они появляются позже в списке.  Это строго одноосевое вращение, используемое для частиц на билбордах.

Rotation animation updates the particle's Rotation field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve in which case the particles will have slightly varied rotations.
Анимация вращения обновляет поле вращения частицы путем выборки кривой в течение нормализованного времени жизни частицы (от 0 до 1).  Вы можете установить вторичную кривую, и в этом случае частицы будут иметь немного разные вращения.

Rotation animation overwrites any previous Rotation parameters, such as Initial Rotation. If you need additive kind of animation check if the Shape Builder supports it (found in the Shape Builder's properties). Additive animations are not preserved in particle fields and do not persist, but can be applied in addition to any fields the particles already have.
Анимация вращения перезаписывает любые предыдущие параметры вращения, такие как начальное вращение.  Если вам нужна дополнительная анимация, проверьте, поддерживает ли ее Конструктор фигур (можно найти в свойствах Конструктора фигур).  Аддитивные анимации не сохраняются в полях частиц и не сохраняются, но могут применяться в дополнение к любым полям, которые уже есть у частиц.

## Size animation
## Размер анимации

**Size animation** is a post-updater, meaning it resolves after updaters which aren't post-updaters, even if they appear later in the list. 
**Анимация размера** является пост-обновляющей, то есть она разрешается после обновляющих программ, которые не являются пост-обновляющими, даже если они появляются позже в списке.

This is strictly a uniform size. Size animation updates the particle's Size field by sampling a curve over the particle's normalized lifetime (0 to 1). You can set a secondary curve, in which case the particles have slightly varied sizes.
Это строго единый размер.  Анимация размера обновляет поле размера частицы путем выборки кривой в течение нормализованного времени жизни частицы (от 0 до 1).  Вы можете установить вторичную кривую, и в этом случае частицы будут немного различаться по размеру.

Size animation overwrites any previous Size parameters, such as Initial Size. If you need additive kind of animation, check if the Shape Builder supports it (in the Shape Builder properties). Additive animations aren't preserved in particle fields and don't persist, but can be applied in addition to any fields the particles already have.
Анимация размера перезаписывает любые предыдущие параметры размера, такие как начальный размер.  Если вам нужна аддитивная анимация, проверьте, поддерживает ли ее Конструктор фигур (в свойствах Конструктора фигур).  Аддитивная анимация не сохраняется в полях частиц и не сохраняется, но может применяться в дополнение к любым полям, которые уже есть у частиц.

* [Create particles](create-particles.md)
* [Создать частицы](create-particles.md)
* [Emitters](emitters.md)
* [Излучатели](emitters.md)
* [Shapes](shapes.md)
* [Фигуры](shapes.md)
* [Materials](materials.md)
* [Материалы](materials.md)
* [Spawners](spawners.md)
* [Спаунеры](spawners.md)
* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)
