# Particle shapes
# Формы частиц

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Because particles are essentially only points in space, they have no defined shape. Instead, Stride draws shapes **between** the points. 
Поскольку частицы — это всего лишь точки в пространстве, они не имеют определенной формы.  Вместо этого Stride рисует фигуры **между** точками.

The major difference between particle shapes is whether they always face the camera, or if they can rotate freely in 3D space.
Основное различие между формами частиц заключается в том, всегда ли они обращены к камере или могут свободно вращаться в трехмерном пространстве.

Currently, emitters can only emit one type of shape at a time.
В настоящее время эмиттеры могут излучать только один тип формы за раз.

## Billboards
## Рекламные щиты

**Billboards** always face the camera. They appear **fixed in 3D space**, so they don't change with the camera position.
**Рекламные щиты** всегда обращены к камере.  Они отображаются **фиксированными в 3D-пространстве**, поэтому они не меняются в зависимости от положения камеры.

Because they always face the camera, billboards support angular rotation only. This means they only rotate clockwise or counter-clockwise.
Поскольку рекламные щиты всегда обращены к камере, они поддерживают только угловое вращение.  Это означает, что они вращаются только по часовой стрелке или против часовой стрелки.

## Hexagon
## Шестиугольник

**Hexagons** are identical to billboards, but are hexagonal in shape. Like billboards, they always face the camera and support angular rotation only.
**Шестиугольники** идентичны рекламным щитам, но имеют шестиугольную форму.  Как и рекламные щиты, они всегда обращены к камере и поддерживают только угловое вращение.

## Quads
## квадроциклы

Quads are identical to billboards, but don't rotate to face the camera, and so support 3D orientation and rotation.
Четырехугольники идентичны рекламным щитам, но не поворачиваются лицом к камере и поэтому поддерживают трехмерную ориентацию и вращение.

Stride draws billboard particles to the **Size** value in the particle effect properties. If you don't specify a size, Stride expands the quads to 1m x 1m. 
Stride рисует частицы рекламного щита до значения **Size** в свойствах эффекта частиц.  Если вы не укажете размер, Stride расширит квадраты до 1 м x 1 м.

![media/particles-reference-shapebuilders-1.png](media/particles-reference-shapebuilders-1.png) 
![media/particles-reference-shapebuilders-1.png](media/particles-reference-shapebuilders-1.png)

## Direction-aligned sprite
## Спрайт, выровненный по направлению

This sprite is billboard-aligned and stretched in the direction of the particle. You can set an initial direction for the particles with an initializer, or add an updater which writes particle speed as direction.
Этот спрайт выровнен по рекламному щиту и вытянут в направлении частицы.  Вы можете установить начальное направление для частиц с помощью инициализатора или добавить средство обновления, которое записывает скорость частиц как направление.

## Ribbons and trails
## Ленты и дорожки

See [Ribbons and trails](ribbons-and-trails.md).
См. [Ленты и тропы](ribbons-and-trails.md).

## See also
## Смотрите также

* [Create particles](create-particles.md)
* [Создать частицы](create-particles.md)
* [Emitters](emitters.md)
* [Излучатели](emitters.md)
* [Materials](materials.md)
* [Материалы](materials.md)
* [Spawners](spawners.md)
* [Спаунеры](spawners.md)
* [Initializers](initializers.md)
* [Инициализаторы](initializers.md)
* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
