# Tutorial: Lasers and lightning
# Учебник: Лазеры и молнии

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This tutorial explains how to create lasers and lightnings using particles and custom materials.
В этом уроке объясняется, как создавать лазеры и молнии с использованием частиц и пользовательских материалов.

Imagine we want to create a lightning arc like this one:
Представьте, что мы хотим создать дугу молнии, подобную этой:

![media/particles-tutorials-lasers-1.gif](media/particles-tutorials-lasers-1.gif)
![media/particles-tutorials-lasers-1.gif](media/particles-tutorials-lasers-1.gif)

This effect is a strip which:
Этот эффект представляет собой полосу, которая:

* connects two fixed points
* соединяет две неподвижные точки

* changes positions very quickly
* очень быстро меняет позицию

* can be rendered as a single strip
* может отображаться как одна полоса
 
Because the lightning is a single-line strip, we can render it using the ribbon shape builder, but with a few major differences. The particles:
Поскольку молния представляет собой полосу из одной линии, мы можем визуализировать ее с помощью построителя формы ленты, но с несколькими существенными отличиями.  Частицы:

* spawn at the same time, rather than in sequence
* появляются одновременно, а не последовательно

* appear on a single line or arc, but with semi-randomized positions to give the illusion of lightning
* появляются на одной линии или дуге, но с полуслучайным расположением, чтобы создать иллюзию молнии

* should reappear very quickly
* должен появиться снова очень быстро

## Simultaneous spawning
## Одновременный нерест

We can create a looping Spawner by frame which spawns a certain number of particles (lets say 50) **every** frame.
Мы можем создать циклический спаунер по кадрам, который порождает определенное количество частиц (скажем, 50) **каждый** кадр.

Because we only need one set visible at a time we limit the Maxmimum Particles on the emitter to 50 and give them the same lifespan (for example 0.2 seconds).
Поскольку нам нужен только один видимый набор за раз, мы ограничиваем максимальное количество частиц на эмиттере до 50 и даем им одинаковую продолжительность жизни (например, 0,2 секунды).

This means the Spawner will try to emit 50 particles every frame, but because we have limited them it will only spawn 50 particles the first frame.
Это означает, что Spawner будет пытаться испускать 50 частиц в каждом кадре, но, поскольку мы ограничили их количество, он будет создавать только 50 частиц в первом кадре.

They all have the same lifespan, so when they die at the same time a new batch of 50 particles will be spawned.
Все они имеют одинаковую продолжительность жизни, поэтому, когда они умрут одновременно, будет создана новая партия из 50 частиц.

#### Connect two points
#### Соединить две точки

We are going to use the **Position (Arc)** initializer. It picks a second point from another Entity and sets the particles' positions to lie on an arc between the Emitter and the target Entity.
Мы собираемся использовать инициализатор **Position (Arc)**.  Он выбирает вторую точку из другого объекта и устанавливает положения частиц так, чтобы они лежали на дуге между излучателем и целевым объектом.

By clicking the Ordered checkbox we can force the particles to be placed at equal distances starting from the emitter and moving towards the target Entity.
Установив флажок «Упорядочено», мы можем заставить частицы размещаться на равных расстояниях, начиная от излучателя и двигаясь к целевому объекту.
This is important when we render them using a Ribbon shape builder because if they appear at random (unordered) positions along the arc it will be a mess. 
Это важно, когда мы визуализируем их с помощью построителя формы ленты, потому что, если они появятся в случайных (неупорядоченных) положениях вдоль дуги, это будет беспорядок.
We also have to add Spawn Order initializer and sort the particles by Order (this is true for all ribbons, not just lightning.)
Мы также должны добавить инициализатор порядка появления и сортировать частицы по порядку (это верно для всех лент, а не только для молнии).

The arc position initialzier also allows for a random offset which we set to some small number.
Инициализатор положения дуги также допускает случайное смещение, которое мы устанавливаем на небольшое число.

#### Change positions fast
#### Быстрая смена позиций

We can set the particles' lifespan to a small number (eg 0.2 seconds). With the Time scale parameter, we can additionally control the speed of the entire particle system.
Мы можем установить время жизни частиц на небольшое число (например, 0,2 секунды).  Параметр Масштаб времени позволяет дополнительно контролировать скорость всей системы частиц.

To illustrate better what's going on here is the same effect with Billboard shape builder instead of Ribbon, and slowed down 30 times:
Чтобы лучше проиллюстрировать, что здесь происходит, тот же эффект с конструктором форм Billboard вместо Ribbon, но с замедлением в 30 раз:

![media/particles-tutorials-lasers-2.gif](media/particles-tutorials-lasers-2.gif)
![media/particles-tutorials-lasers-2.gif](media/particles-tutorials-lasers-2.gif)

#### Moving lightning
#### Движущаяся молния

There is a way to make the lightning arc move from point A to point B instead of being static.
Существует способ заставить дугу молнии перемещаться из точки А в точку Б, а не оставаться статичной.

![media/particles-tutorials-lasers-3.gif](media/particles-tutorials-lasers-3.gif)
![media/particles-tutorials-lasers-3.gif](media/particles-tutorials-lasers-3.gif)

There are a few adjustments we need to make:
Нам нужно внести несколько корректировок:

* Change the spawn rate to a lower one. The example above uses 600/second and is played at 0.1 time scale, which means around 1 particle per frame.
* Измените скорость появления на более низкую.  В приведенном выше примере используется 600 кадров в секунду, и он воспроизводится в масштабе времени 0,1, что означает около 1 частицы на кадр.

* Set a fixed count on the arc positioner (50). Because it interpolates the distances based on the number of particles spawned *each* frame, if we spawn them sequentially they'll all stay in the beginning of the arc. By setting the count to 50 we tell the arc positioner to expect 50 particles in total.
* Установите фиксированный счет на позиционере дуги (50).  Поскольку он интерполирует расстояния на основе количества частиц, порожденных *в каждом* кадре, если мы создадим их последовательно, все они останутся в начале дуги.  Установив значение счетчика на 50, мы сообщаем позиционеру дуги ожидать всего 50 частиц.

* Set a delay to the spawner to allow the old arc to completely disappear before starting again. Otherwise the Ribbon will wrongly connect the old and the new particles, as it can't know how to split them.
* Установите задержку для спаунера, чтобы старая дуга полностью исчезла перед запуском снова.  В противном случае лента неправильно соединит старые и новые частицы, так как не сможет их разделить.

## Lasers using particles
## Лазеры, использующие частицы

Creating lasers with particles is very similar to making lightning. We actually need less particles, because the lasers are straight and do not deviate. 
Создание лазеров с частицами очень похоже на создание молнии.  На самом деле нам нужно меньше частиц, потому что лазеры прямые и не отклоняются.
By setting the arc positioner's arc height to 0 and random offset to (0, 0, 0) we can spawn the particles in a straight line. If you want you can give them slightly different sizes to make the laser beam appear shimmering.
Установив высоту дуги позиционера дуги на 0 и случайное смещение на (0, 0, 0), мы можем создавать частицы по прямой линии.  Если вы хотите, вы можете придать им немного разные размеры, чтобы лазерный луч казался мерцающим.

One thing to be mindful about lasers is that usually when the target moves you want the laser to move with it. Because the arc positioner is an initializer and not an updater, it has no effect on particles already spawned, which and stay behind. There are three ways to counter this.
Одна вещь, которую следует помнить о лазерах, заключается в том, что обычно, когда цель движется, вы хотите, чтобы лазер двигался вместе с ней.  Поскольку позиционер дуги является инициализатором, а не средством обновления, он не влияет на уже созданные частицы, которые остаются позади.  Есть три способа противостоять этому.

* Spawn the particles very fast. If they only live for 1-2 frames the laser will be recreated too fast for the user to notice any visual differences.
* Спаун частиц очень быстро.  Если они живут только 1-2 кадра, лазер будет воссоздан слишком быстро, чтобы пользователь мог заметить какие-либо визуальные различия.

* Spawn particles in Local space. This means they will move together with the emitter, but then you will have to rotate and scale the emitter to always point to the target Entity.
* Спавн частиц в локальном пространстве.  Это означает, что они будут двигаться вместе с эмиттером, но тогда вам придется вращать и масштабировать эмиттер, чтобы он всегда указывал на целевую сущность.

* Create a custom Updater. If you create a custom post-updater similar (or simpler) to the arc positioner you can force it to update the particle positions every frame, correctly placing them between the two points even if they move.
* Создайте пользовательский модуль обновления.  Если вы создадите пользовательский пост-обновитель, похожий (или более простой) на позиционер дуги, вы можете заставить его обновлять позиции частиц в каждом кадре, правильно размещая их между двумя точками, даже если они перемещаются.

Depending on the type of game you want to make each of these options can have benefits or drawbacks. Spawning the particles every frame is the easiest and simplest way to do it and will be sufficient for most needs.
В зависимости от типа игры, которую вы хотите сделать, каждый из этих вариантов может иметь преимущества или недостатки.  Создание частиц в каждом кадре — это самый простой и простой способ сделать это, и его будет достаточно для большинства нужд.

## Lasers using custom materials
## Лазеры с использованием нестандартных материалов

Creating lasers using custom materials is similar to using particles in Local space. We need to manually rotate the scale the emitter to always face a target entity.
Создание лазеров с использованием пользовательских материалов аналогично использованию частиц в локальном пространстве.  Нам нужно вручную повернуть шкалу эмиттера, чтобы он всегда был обращен к целевому объекту.

We can designate one axis which points towards the target to be our length, leaving the other two axes for width of the laser.
Мы можем обозначить одну ось, которая указывает на цель, как нашу длину, оставив две другие оси для ширины лазера.

Rendering a cylinder with height of 1 which is placed under the rotated entity will cause it to stretch and reach the target point.
Визуализация цилиндра высотой 1, помещенного под повернутый объект, заставит его растянуться и достичь целевой точки.

The custom material is required to place a scrolling texture on the cylinder. Or you can use a regular Emissive map with no scrolling in which case you won't need a custom material.
Пользовательский материал необходим для размещения текстуры прокрутки на цилиндре.  Или вы можете использовать обычную карту Emissive без прокрутки, и в этом случае вам не понадобится специальный материал.

The particles sample already contains an example of how to create lasers this way. The LaserOrientationScript rotates and scales the entity towards a target point and the ComputeColorTextureScroll shader samples a scrolling texture.
Образец частиц уже содержит пример создания лазеров таким образом.  LaserOrientationScript поворачивает и масштабирует объект по направлению к целевой точке, а шейдер ComputeColorTextureScroll сэмплирует текстуру прокрутки.

## Sample project
## Пример проекта

To see some of the techniques described on this page implemented in a project, create a new **Sample: Particles** project and open the **Lasers** scene.
Чтобы увидеть некоторые методы, описанные на этой странице, реализованные в проекте, создайте новый проект **Sample: Particles** и откройте сцену **Lasers**.

![Particles sample project](media/select-particles-sample-project.png)
![Пример проекта Particles](media/select-particles-sample-project.png)

## See also
## Смотрите также

* [Tutorial: Create a trail](create-a-trail.md)
* [Учебник: создание тропы](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Учебник: Пользовательские частицы](custom-particles.md)
* [Tutorial: Inheritance](inheritance.md)
* [Учебник: Наследование](inheritance.md)
* [Particles](../index.md)
* [Частицы](../index.md)
* [Create particles](../create-particles.md)
* [Создать частицы](../create-particles.md)
