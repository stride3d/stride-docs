# Particle initializers
# Инициализаторы частиц

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Initializers** control the states of particles such as position, velocity, size, and so on when the particles are first spawned. They have no effect on particles spawned on previous frames.
**Инициализаторы** управляют состояниями частиц, такими как положение, скорость, размер и т. д., когда частицы впервые создаются.  Они не влияют на частицы, созданные на предыдущих кадрах.

> [!Note] 
> [!Примечание]
Some [updaters](updaters.md) act change the particle's value at the *end* of the frame. They effectively overwrite any initial values set by a similar initializer. Such is the case with all animations. They operate on the particle's lifetime and a color animation updater will overwrite any initial values from a color initializer.
Некоторые [апдейтеры](updaters.md) изменяют значение частицы в *конце* кадра.  Они эффективно перезаписывают любые начальные значения, установленные аналогичным инициализатором.  И так со всеми анимациями.  Они работают с временем жизни частицы, и средство обновления цветной анимации перезапишет любые начальные значения из инициализатора цвета.

Similarly, initializers which operate on the same field are exclusive and only the bottom one will have any effect, since they are executed in order. For example if you assign two color initializer, only the second one will have any effect.]
Точно так же инициализаторы, которые работают с одним и тем же полем, являются исключительными, и только нижний из них будет иметь какой-либо эффект, поскольку они выполняются по порядку.  Например, если вы назначите два инициализатора цвета, только второй будет иметь какой-либо эффект.]

## Common properties
## Общие свойства

Several properties are common across many initializers.
Некоторые свойства являются общими для многих инициализаторов.

![media/particles-reference-initializers-1.png](media/particles-reference-initializers-1.png) 
![media/particles-reference-initializers-1.png](media/particles-reference-initializers-1.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Debug draw                  | Draws a debug wireframe in the scene to show the boundaries of the initializer. This is only visible in the Scene Editor, not at runtime.
|  Отладка розыгрыша |  Рисует каркас отладки в сцене, чтобы показать границы инициализатора.  Это видно только в редакторе сцен, но не во время выполнения.
| Position inheritance        | Inherit the particle system component position, as defined in the particle entity's Transform component
|  Наследование позиции |  Наследовать положение компонента системы частиц, как определено в компоненте Transform объекта частиц.
| Position offset             | Additional translation of the module. If it inherits the parent position, this is applied on top of the inherited position.
|  Смещение положения |  Дополнительный перевод модуля.  Если он наследует родительскую позицию, это применяется поверх унаследованной позиции.
| Rotation inheritance        | Inherit the particle system component's rotation, as defined in the Transform component
|  Наследование вращения |  Наследовать вращение компонента системы частиц, как определено в компоненте Transform.
| Rotation offset             | Additional rotation of the module. If it inherits the parent's rotation, this is applied on top of the inherited rotation.
|  Смещение вращения |  Дополнительный поворот модуля.  Если он наследует поворот родителя, он применяется поверх унаследованного поворота.
| Scale inheritance           | Inherit the particle system component's uniform scale, as defined in the Transform component
|  Наследование масштаба |  Наследовать равномерный масштаб компонента системы частиц, как определено в компоненте Transform.
| Scale offset                | Additional scaling of the module. If it inherits the parent's scale, this is applied on top of the inherited scale.
|  Смещение шкалы |  Дополнительное масштабирование модуля.  Если он наследует масштаб родителя, он применяется поверх унаследованного масштаба.

For example, a velocity initializer can change its direction depending on the parent's rotation or decide to ignore it and always shoot particles in a fixed direction.
Например, инициализатор скорости может изменить свое направление в зависимости от вращения родителя или принять решение игнорировать его и всегда стрелять частицами в фиксированном направлении.

On the other hand, size initializers don't change based on the parent's rotation, so the rotation fields won't appear at all.
С другой стороны, инициализаторы размера не меняются в зависимости от поворота родителя, поэтому поля поворота вообще не отображаются.

## Position
## Должность

Particles are spawned in an axis-aligned bounding box, defined by its left lower back corner and its right upper front corner.
Частицы создаются в ограничивающей рамке, выровненной по оси, определяемой ее левым нижним задним углом и правым верхним передним углом.

![media/particles-reference-initializers-2.png](media/particles-reference-initializers-2.png) 
![media/particles-reference-initializers-2.png](media/particles-reference-initializers-2.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Seed offset                 | Used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have three properties (X, Y, Z), eg velocity. Make them different to force the position to be unique and independent from other fields
|  Смещение семян |  Используется для случайных чисел.  Установите его на то же значение, чтобы заставить положение быть связанным с другими другими полями частиц, которые имеют три свойства (X, Y, Z), например, скорость.  Сделайте их разными, чтобы сделать позицию уникальной и независимой от других полей.
| Position min                | Left lower back corner for the box
|  Позиция мин |  Левый нижний задний угол для коробки
| Position max                | Right upper front corner for the box
|  Максимальное положение |  Правый верхний передний угол для коробки

This image shows the bounding box where particles initially appear for this emitter. In addition to the corners (-1, 0.8, -1) ~ (1, 1, 1), the box is further rotated by 45 degrees as seen from the offset rotation.
На этом изображении показана ограничивающая рамка, в которой первоначально появляются частицы для этого излучателя.  В дополнение к углам (-1, 0,8, -1) ~ (1, 1, 1) блок дополнительно поворачивается на 45 градусов, если смотреть со смещения.

![media/particles-reference-initializers-3.png](media/particles-reference-initializers-3.png) 
![media/particles-reference-initializers-3.png](media/particles-reference-initializers-3.png)

## Velocity
## Скорость

Particles spawn with initial velocity which ranges between the defined values. The velocity is independent in all three directions between X, Y and Z.
Частицы появляются с начальной скоростью, которая колеблется между заданными значениями.  Скорость независима во всех трех направлениях между X, Y и Z.

![media/particles-reference-initializers-4.png](media/particles-reference-initializers-4.png) 
![media/particles-reference-initializers-4.png](media/particles-reference-initializers-4.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the velocity to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить скорость быть связанной с другими другими полями частиц, которые имеют 3 свойства (x, Y, Z), например, позицию.  Сделайте их разными, чтобы скорость была уникальной и независимой от других полей.
| Velocity min                | Left lower back corner for the box
|  Скорость мин |  Левый нижний задний угол для коробки
| Velocity max                | Right upper front corner for the box
|  Максимальная скорость |  Правый верхний передний угол для коробки

## Size
## Размер

Initial size sets the particle's uniform size when it's spawned for the first time. A size of 1 will result in a 1 meter by 1 meter billboard or quad when rendered.
Начальный размер задает единый размер частицы при ее первом порождении.  Размер 1 приведет к созданию рекламного щита или четырехугольника размером 1 метр на 1 метр при рендеринге.

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-5.png) 
![media/particles-reference-initializers-5.png](media/particles-reference-initializers-5.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|--------------
|-----------------------------|---------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the size to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the size to be unique and independent from other fields
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить размер быть связанным с другими полями частиц, которые имеют 1 свойство, например, цвет.  Сделайте их разными, чтобы размер был уникальным и независимым от других полей.
| Random size                 | Shows the minimum and maximum size a particle can have at spawn time
|  Случайный размер |  Показывает минимальный и максимальный размер частицы во время появления.

## Rotation
## Вращение

Initial rotation sets the particle's angular rotation when facing the camera. Positive values are clockwise rotations. The field only has meaning for camera-facing particles, such as billboards. It has no effect on oriented quads and models.
Начальное вращение задает угловое вращение частицы, если смотреть на камеру.  Положительные значения соответствуют вращению по часовой стрелке.  Поле имеет значение только для обращенных к камере частиц, таких как рекламные щиты.  Это не влияет на ориентированные квадроциклы и модели.

![media/particles-reference-initializers-6.png](media/particles-reference-initializers-6.png) 
![media/particles-reference-initializers-6.png](media/particles-reference-initializers-6.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the angle to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the angle to be unique and independent from other fields
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить угол быть связанным с другими полями частиц, которые имеют 1 свойство, например, цвет.  Сделайте их разными, чтобы сделать угол уникальным и независимым от других полей.
| Angle (degrees)             | The minimum and maximum value, in degrees, for the initial rotation
|  Угол (градусы) |  Минимальное и максимальное значение в градусах для начального вращения

## Color
## Цвет

Initial color sets the particle's initial color at spawn time. It goes into the vertex buffer when building the particles and can be used by the material, but might not if the option is not set in the material itself. If setting the color has no effect please refer to the [Material](materials.md) page for further discussion.
Начальный цвет устанавливает начальный цвет частицы во время появления.  Он помещается в буфер вершин при построении частиц и может использоваться материалом, но может и не использоваться, если параметр не установлен в самом материале.  Если установка цвета не имеет эффекта, обратитесь к странице [Материал](materials.md) для дальнейшего обсуждения.

![media/particles-reference-initializers-7.png](media/particles-reference-initializers-7.png) 
![media/particles-reference-initializers-7.png](media/particles-reference-initializers-7.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the color to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the color to be unique and independent from other fields
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить цвет быть связанным с другими полями частиц, которые имеют 1 свойство, например размер.  Сделайте их разными, чтобы сделать цвет уникальным и независимым от других полей.
| Color A                     | The first value, in hexadecimal code. The color will be a random tint between this and the second color.
|  Цвет А |  Первое значение в шестнадцатеричном коде.  Цвет будет случайным оттенком между этим и вторым цветом.
| Color B                     | The second value, in hexadecimal code. The color will be a random tint between this and the first color.
|  Цвет Б |  Второе значение в шестнадцатеричном коде.  Цвет будет случайным оттенком между этим и первым цветом.

## 3D Orientation
## 3D-ориентация

Initial 3D orientation sets the orientation for 3D-aware particles when they first spawn. The editable fields use euclidean rotation which is packed into a quaternion orientation by the engine. The interpolated value is on the shortest path  between the two orientations, rather than interpolating each value separately.
Начальная 3D-ориентация задает ориентацию для 3D-осведомленных частиц при их первом появлении.  Редактируемые поля используют евклидово вращение, которое движок упаковывает в кватернионную ориентацию.  Интерполированное значение находится на кратчайшем пути между двумя ориентациями, а не интерполируется каждое значение отдельно.

![media/particles-reference-initializers-8.png](media/particles-reference-initializers-8.png) 
![media/particles-reference-initializers-8.png](media/particles-reference-initializers-8.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the orientation to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the orientation to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы принудительно совместить ориентацию с другими полями частиц, которые имеют 1 свойство, например размер.  Сделайте их разными, чтобы ориентация была уникальной и независимой от других полей.
| Orientation A               | The first oriented position
|  Ориентация А |  Первая ориентированная позиция
| Orientation B               | The second oriented position
|  Ориентация Б |  Второе ориентированное положение

## Direction
## Направление

This initializer creates the **Direction** field in the particle properties and sets its initial value. Some shape builders, like the Trail shape or the Direction Aligned Sprite shape use the particle's direction to properly display it.
Этот инициализатор создает поле **Direction** в свойствах частицы и устанавливает его начальное значение.  Некоторые построители форм, такие как фигура Trail или фигура Direction Aligned Sprite, используют направление частицы для ее правильного отображения.

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the direction to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить направление быть связанным с другими другими полями частиц, которые имеют 3 свойства (x, Y, Z), например, позицию.  Сделайте их разными, чтобы скорость была уникальной и независимой от других полей.
| Direction min               | Left lower back corner for the box
|  Направление мин |  Левый нижний задний угол для коробки
| Direction max               | Right upper front corner for the box
|  Максимальное направление |  Правый верхний передний угол для коробки

## Spawn Order
## Порядок появления

This initializer has no properties. It simply sets an increasing number to each particle spawned from this emitter, starting from 0. The spawn order can be used for sorting or some custom calculations.
Этот инициализатор не имеет свойств.  Он просто устанавливает возрастающее число для каждой частицы, порожденной этим эмиттером, начиная с 0. Порядок появления может использоваться для сортировки или некоторых пользовательских вычислений.

## Position (Arc)
## Позиция (Дуга)

The arc position initializer positions the particles in an arc (or a straight line if the arc's height is 0) between two point, the emitter's position and a target transform component. With random position offset you can cause the particles to deviate a little from their original location on the arc.
Инициализатор положения дуги размещает частицы по дуге (или по прямой линии, если высота дуги равна 0) между двумя точками, позицией эмиттера и целевым компонентом преобразования.  При случайном смещении положения вы можете заставить частицы немного отклоняться от их исходного положения на дуге.

![media/particles-reference-initializers-5.png](media/particles-reference-initializers-9.png) 
![media/particles-reference-initializers-5.png](media/particles-reference-initializers-9.png)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы связать положение с другими другими полями частиц, которые имеют 3 свойства (X, Y, Z), например, скорость.  Сделайте их разными, чтобы позиция была уникальной и независимой от других полей.
| Position min                | Left lower back corner for the box
|  Позиция мин |  Левый нижний задний угол для коробки
| Position max                | Right upper front corner for the box
|  Максимальное положение |  Правый верхний передний угол для коробки
| Target                      | Allows you to pick up an Entity for the end of the arc. If no Entity is set, Fallback Target will be used, which is an offset from the emitter's location.
|  Цель |  Позволяет подобрать Сущность для конца дуги.  Если Entity не установлен, будет использоваться Fallback Target, который представляет собой смещение от местоположения эмиттера.
| Fallback Target             | Offset from the emitter's location used as the end point in case Target is not set
|  Резервная цель |  Смещение от местоположения эмиттера, используемого в качестве конечной точки, если цель не установлена.
| Arc Height                  | The height of the arc at its highest point (middle of the distance between the two points). By default it's the Y-up vector, but can be rotated with rotation offset and rotation inheritance
|  Высота дуги |  Высота дуги в самой высокой точке (середина расстояния между двумя точками).  По умолчанию это вектор Y-up, но его можно поворачивать со смещением вращения и наследованием вращения.
| Ordered                     | If checked, new particles will appear in order from the emitter towards the target. If unchecked, new particles will appear randomly on the arc anywhere between the emitter and the target. If you plan to visualize the particles as a ribbon or a trail you should set this box to checked.
|  Заказано |  Если флажок установлен, новые частицы будут появляться по порядку от излучателя к цели.  Если флажок не установлен, новые частицы будут случайным образом появляться на дуге в любом месте между эмиттером и целью.  Если вы планируете визуализировать частицы в виде ленты или следа, вы должны установить этот флажок.
| Fixed count                 | By default particles will appear on the arc at distances enough for the maximum number of particles to fit exactly on the line. If you want to control spawn rate and distance, you can set how many fixed "positions" are there on the arc. For example, with a fixed count of 10 and Ordered spawning, the first 10 particles will appear in order, then the 11th particle will appear from the beginning, at the same position as the first, and so on.
|  Фиксированный счет |  По умолчанию частицы появляются на дуге на расстоянии, достаточном для того, чтобы максимальное количество частиц точно поместилось на линии.  Если вы хотите контролировать скорость появления и расстояние, вы можете установить количество фиксированных «позиций» на дуге.  Например, при фиксированном количестве 10 и упорядоченном появлении первые 10 частиц появятся по порядку, затем 11-я частица появится с самого начала в том же месте, что и первая, и так далее.
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы связать положение с другими другими полями частиц, которые имеют 3 свойства (X, Y, Z), например, скорость.  Сделайте их разными, чтобы позиция была уникальной и независимой от других полей.
| Position min                | Left lower back corner for the box. This is an offset in addition to the arc position.
|  Позиция мин |  Левый нижний задний угол для коробки.  Это смещение в дополнение к позиции дуги.
| Position max                | Right upper front corner for the box. This is an offset in addition to the arc position.
|  Максимальное положение |  Правый верхний передний угол для коробки.  Это смещение в дополнение к позиции дуги.

## Position (parent)
## Позиция (родительская)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the position to be coupled with other other particle fields which have 3 properties (X, Y, Z), like velocity for example. Make them different to force the position to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы связать положение с другими другими полями частиц, которые имеют 3 свойства (X, Y, Z), например, скорость.  Сделайте их разными, чтобы позиция была уникальной и независимой от других полей.
| Position min                | Left lower back corner for the box
|  Позиция мин |  Левый нижний задний угол для коробки
| Position max                | Right upper front corner for the box
|  Максимальное положение |  Правый верхний передний угол для коробки
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
|  Родительский эмиттер |  Вы должны ввести имя родительского эмиттера.  Позиции дочерних частиц будут соответствовать позициям частиц родительского эмиттера.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
|  Родительское смещение |  Случайное начальное число, используемое для связывания или разъединения способа выбора родительской частицы.  Например, если вы хотите выбрать положение * и * цвет из, казалось бы, случайных частиц, вы можете использовать одно и то же смещение.  Если вы хотите избежать такой связи, вы можете использовать разные смещения для инициализаторов позиции и цвета.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the **Spawn from Parent** spawner to work properly.
|  Группа контроля появления |  Если нет, родители будут выбраны случайным образом.  Если установлено значение одной из четырех групп, будут инициализированы только частицы определенного родителя.  Для правильной работы он должен соответствовать контрольной группе из генератора **Spawn from Parent**.

## Velocity (parent)
## Скорость (родительский)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|-------------
|-----------------------------|--------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the velocity to be coupled with other other particle fields which have 3 properties (x, Y, Z), like position for example. Make them different to force the velocity to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить скорость быть связанной с другими другими полями частиц, которые имеют 3 свойства (x, Y, Z), например, позицию.  Сделайте их разными, чтобы скорость была уникальной и независимой от других полей.
| Velocity min                | Left lower back corner for the box
|  Скорость мин |  Левый нижний задний угол для коробки
| Velocity max                | Right upper front corner for the box
|  Максимальная скорость |  Правый верхний передний угол для коробки
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
|  Родительский эмиттер |  Вы должны ввести имя родительского эмиттера.  Позиции дочерних частиц будут соответствовать позициям частиц родительского эмиттера.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
|  Родительское смещение |  Случайное начальное число, используемое для связывания или разъединения способа выбора родительской частицы.  Например, если вы хотите выбрать положение * и * цвет из, казалось бы, случайных частиц, вы можете использовать одно и то же смещение.  Если вы хотите избежать такой связи, вы можете использовать разные смещения для инициализаторов позиции и цвета.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
|  Группа контроля появления |  Если нет, родители будут выбраны случайным образом.  Если установлено значение одной из четырех групп, будут инициализированы только частицы определенного родителя.  Для правильной работы он должен соответствовать контрольной группе из спавнера *Spawn from Parent*.

## Size (parent)
## Размер (родительский)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the size to be coupled with other particle fields which have 1 property, like color for example. Make them different to force the size to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить размер быть связанным с другими полями частиц, которые имеют 1 свойство, например, цвет.  Сделайте их разными, чтобы размер был уникальным и независимым от других полей.
| Random size                 | Shows the minimum and maximum size a particle can have at spawn time
|  Случайный размер |  Показывает минимальный и максимальный размер частицы во время появления.
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
|  Родительский эмиттер |  Вы должны ввести имя родительского эмиттера.  Позиции дочерних частиц будут соответствовать позициям частиц родительского эмиттера.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
|  Родительское смещение |  Случайное начальное число, используемое для связывания или разъединения способа выбора родительской частицы.  Например, если вы хотите выбрать положение * и * цвет из, казалось бы, случайных частиц, вы можете использовать одно и то же смещение.  Если вы хотите избежать такой связи, вы можете использовать разные смещения для инициализаторов позиции и цвета.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
|  Группа контроля появления |  Если нет, родители будут выбраны случайным образом.  Если установлено значение одной из четырех групп, будут инициализированы только частицы определенного родителя.  Для правильной работы он должен соответствовать контрольной группе из спавнера *Spawn from Parent*.

## Color (parent)
## Цвет (родительский)

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Seed offset                 | This is used for random numbers. Set it to the same value to force the color to be coupled with other particle fields which have 1 property, like size for example. Make them different to force the color to be unique and independent from other fields.
|  Смещение семян |  Это используется для случайных чисел.  Установите его на то же значение, чтобы заставить цвет быть связанным с другими полями частиц, которые имеют 1 свойство, например размер.  Сделайте их разными, чтобы сделать цвет уникальным и независимым от других полей.
| Color A                     | The first value, in hexadecimal code. The color will be a random tint between this and the second color.
|  Цвет А |  Первое значение в шестнадцатеричном коде.  Цвет будет случайным оттенком между этим и вторым цветом.
| Color B                     | The second value, in hexadecimal code. The color will be a random tint between this and the first color.
|  Цвет Б |  Второе значение в шестнадцатеричном коде.  Цвет будет случайным оттенком между этим и первым цветом.
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
|  Родительский эмиттер |  Вы должны ввести имя родительского эмиттера.  Позиции дочерних частиц будут соответствовать позициям частиц родительского эмиттера.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
|  Родительское смещение |  Случайное начальное число, используемое для связывания или разъединения способа выбора родительской частицы.  Например, если вы хотите выбрать положение * и * цвет из, казалось бы, случайных частиц, вы можете использовать одно и то же смещение.  Если вы хотите избежать такой связи, вы можете использовать разные смещения для инициализаторов позиции и цвета.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
|  Группа контроля появления |  Если нет, родители будут выбраны случайным образом.  Если установлено значение одной из четырех групп, будут инициализированы только частицы определенного родителя.  Для правильной работы он должен соответствовать контрольной группе из спавнера *Spawn from Parent*.

## Spawn Order (parent)
## Порядок появления (родительский)

This initializer requires the parent emitter to also have a Spawn Order initializer. It combines the parent's spawn number with its own, effectively creating groups of particles among the children. This initializer is required to properly sort and render child ribbon particles.
Этот инициализатор требует, чтобы родительский эмиттер также имел инициализатор Spawn Order.  Он комбинирует номер спавна родителя со своим собственным, эффективно создавая группы частиц среди дочерних элементов.  Этот инициализатор необходим для правильной сортировки и рендеринга дочерних частиц ленты.

| Property                    | Description
|  Недвижимость |  Описание
|-----------------------------|------------
|-----------------------------|------------
| Parent emitter              | You have to type the name of the parent emitter. Child particles' positions will match the parent emitter's particles' positions.
|  Родительский эмиттер |  Вы должны ввести имя родительского эмиттера.  Позиции дочерних частиц будут соответствовать позициям частиц родительского эмиттера.
| Parent Offset               | Random seed used to couple or decouple the way a parent particle is chosen. For example, if you want to pick position *and* color from seemingly random particles, you can use the same offset. If you want to avoid such connection, you can use different offsets for position and color initializers.
|  Родительское смещение |  Случайное начальное число, используемое для связывания или разъединения способа выбора родительской частицы.  Например, если вы хотите выбрать положение * и * цвет из, казалось бы, случайных частиц, вы можете использовать одно и то же смещение.  Если вы хотите избежать такой связи, вы можете использовать разные смещения для инициализаторов позиции и цвета.
| Spawn Control Group         | When None, parents will be picked randomly. When set to one of the four groups, only particles from a specific parent will be initialized. It should match a control group from the *Spawn from Parent* spawner to work properly.
|  Группа контроля появления |  Если нет, родители будут выбраны случайным образом.  Если установлено значение одной из четырех групп, будут инициализированы только частицы определенного родителя.  Для правильной работы он должен соответствовать контрольной группе из спавнера *Spawn from Parent*.

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

* [Spawners](spawners.md)
* [Спаунеры](spawners.md)

* [Updaters](updaters.md)
* [Апдейтеры](updaters.md)
