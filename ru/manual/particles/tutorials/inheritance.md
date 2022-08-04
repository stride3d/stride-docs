# Tutorial: Inheritance
# Учебник: Наследование

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This tutorial explains how to create particles which inherit one or more attributes, such as position or color, from other particles.
В этом руководстве объясняется, как создавать частицы, которые наследуют один или несколько атрибутов, таких как положение или цвет, от других частиц.

## Sample
## Образец

To see some of the techniques described on this page implemented in a project, create a new **Sample: Particles** project and open the **ChildParticles** scene.
Чтобы увидеть некоторые методы, описанные на этой странице, реализованные в проекте, создайте новый проект **Sample: Particles** и откройте сцену **ChildParticles**.

![Particles sample project](media/select-particles-sample-project.png)
![Пример проекта Particles](media/select-particles-sample-project.png)

## Inheriting position
## Наследование позиции

It helps if you think about inheritance in terms of parent and child particles. 
Это помогает, если вы думаете о наследовании с точки зрения родительских и дочерних частиц.

For example, in the **ChildParticles** scene in the **Sample: Particles** project, check out the **Fireworks** entity.
Например, в сцене **ChildParticles** проекта **Sample: Particles** проверьте сущность **Fireworks**.

It contains two emitters. Particles reference parent emitters by name, so in the first emitter you can see we've set the **Emitter Name** property. It's an optional name, but it's required if you want other emitters to be able to reference this emitter's particles.
Он содержит два излучателя.  Частицы ссылаются на родительские эмиттеры по имени, поэтому в первом эмиттере вы можете видеть, что мы установили свойство **Emitter Name**.  Это необязательное имя, но оно необходимо, если вы хотите, чтобы другие эмиттеры могли ссылаться на частицы этого эмиттера.

In the second emitter we create a new initializer, **Position from parent**. This lets us reference the first emitter's particles and use their position to initialize the child particles. In the **Parent emitter** attribute we put the first emitter's name (*Parent*). This randomly assigns a parent particle for each child particle spawned and copy its position to the child particle. 
Во втором эмиттере мы создаем новый инициализатор **Position from parent**.  Это позволяет нам ссылаться на частицы первого эмиттера и использовать их положение для инициализации дочерних частиц.  В атрибуте **Родительский эмиттер** мы помещаем имя первого эмиттера (*Родительский*).  Это случайным образом назначает родительскую частицу для каждой порожденной дочерней частицы и копирует ее положение в дочернюю частицу.

The **Parent Offset** seed matches fields when more than one attributes are inherited. For example, if you want to inherit both **Position** and **Color** from the same parent particle (chosen at random) you should make the *Parent Offset* seed the same. Alternatively, you can make the *Parent Offset* seed for both initializers different, in which case particles spawning from one parent's position can inherit their color from a different random particle. Usually, you want to keep them the same, but in some cases you might want to mix them.
Начальное значение **Родительское смещение** соответствует полям, если унаследовано более одного атрибута.  Например, если вы хотите наследовать как **Положение**, так и **Цвет** от одной и той же родительской частицы (выбранной случайным образом), вы должны сделать исходное значение *Родительское смещение* одинаковым.  Кроме того, вы можете сделать начальное значение *Parent Offset* для обоих инициализаторов разными, и в этом случае частицы, порожденные из позиции одного родителя, могут наследовать свой цвет от другой случайной частицы.  Обычно вы хотите, чтобы они были одинаковыми, но в некоторых случаях вы можете их смешивать.

![media/particles-tutorials-inheritance-1.png](media/particles-tutorials-inheritance-1.png)
![media/particles-tutorials-inheritance-1.png](media/particles-tutorials-inheritance-1.png)

As you can see, this kind of inheritance doesn't control spawn count, maximum particles, or any other parameters, and is very random. For most effects it's sufficient, but sometimes you want more direct control over the particles.
Как видите, этот тип наследования не контролирует количество спавнов, максимальное количество частиц или любые другие параметры и является очень случайным.  Для большинства эффектов этого достаточно, но иногда требуется более прямой контроль над частицами.

## Controlled inheritance
## Контролируемое наследование

On occasion you will want to spawn a certain number of particles from a specific parent and have those particles only inherit attributes from the parent particle that spawned them.
Иногда вам может понадобиться породить определенное количество частиц из определенного родителя, чтобы эти частицы наследуют атрибуты только родительской частицы, которая их породила.

To do this, choose a spawner for the child emitter from type **From parent**. Fill in the parent emitter's name in the **Parent emitter** field.
Для этого выберите спавнер для дочернего эмиттера из типа **От родителя**.  Введите имя родительского эмиттера в поле **Родительский эмиттер**.

The **Spawn Control Group** determines how the particles save their control information. You need to assign the same control group on all initializers later in order to retrieve the spawning information.
Группа **Spawn Control Group** определяет, как частицы сохраняют свою управляющую информацию.  Позже вам потребуется назначить одну и ту же группу управления для всех инициализаторов, чтобы получить информацию о порождении.

There can be up to 4 control groups. If you spawn particles based on different conditions, or spawn more than two different child particles from the same parent, assign them different control groups so they don't get mixed up.
Может быть до 4 групп управления.  Если вы создаете частицы на основе разных условий или создаете более двух разных дочерних частиц от одного и того же родителя, назначьте им разные контрольные группы, чтобы они не перепутались.

The **Particle Spawn Trigger** is the triggering condition on the parent side, which determines if particles should be spawned. If you leave it as **None**, no particles are spawned, so set it to **On Hit** or **Lifetime**.
**Триггер создания частиц** — это условие срабатывания на родительской стороне, которое определяет, следует ли создавать частицы.  Если вы оставите значение **Нет**, частицы не будут создаваться, поэтому установите для него значение **При попадании** или **Время жизни**.

**On hit** works for parent particles with a [collider](../../physics/colliders.md) assigned, and triggers every time they hit the surface.
**При попадании** работает для родительских частиц с назначенным [коллайдером](../../physics/colliders.md) и срабатывает каждый раз, когда они сталкиваются с поверхностью.

**Lifetime** is based on the parent particle's relative lifetime, and triggers every frame the lifetime is within the limits. There are two sliders to control from which point to which point particles should be spawned. Alternatively, you can reverse them to reverse the spawning condition. For example, a particle with lifetime condition (0.9 - 1.0) only spawns child particles in the last 10% of its lifetime.
**Время жизни** основано на относительном времени жизни родительской частицы и срабатывает каждый кадр, время жизни которого находится в установленных пределах.  Есть два ползунка, чтобы контролировать, от какой точки до какой точки должны создаваться частицы.  Кроме того, вы можете изменить их, чтобы изменить условия нереста.  Например, частица с условием времени жизни (0,9–1,0) порождает дочерние частицы только в течение последних 10% своего времени жизни.

Finally, the **Particles/trigger** determines how many particles are spawned each time the condition is met.
Наконец, параметр **Частицы/триггер** определяет, сколько частиц создается при каждом выполнении условия.

For child emitters, it's good practice to control the maximum number of particles the emitter can have, especially for non-deterministic cases, such as the collision hit.
Для дочерних эмиттеров рекомендуется контролировать максимальное количество частиц, которые может иметь эмиттер, особенно для недетерминированных случаев, таких как столкновение.

### Determinism
### Детерминизм

On the initializers, choose a **Spawn Control Group** corresponding to the spawner's control group. This forces the initializers to only work for particles spawned with the triggering condition, skipping the rest (if more than one spawner is assigned).
В инициализаторах выберите **Группу управления порождением**, соответствующую группе управления порождения.  Это заставляет инициализаторы работать только с частицами, созданными с условием срабатывания, пропуская остальные (если назначено более одного генератора).

## Ribbons and trails
## Ленты и дорожки

[Ribbon and trail renderers](../ribbons-and-trails.md) are a little more difficult to set up in the beginning, as they are dependent on spawn order. In case of parents, they also become dependent on the parent's spawn order.
[Визуализаторы лент и следов](../ribbons-and-trails.md) немного сложнее настроить в начале, так как они зависят от порядка появления.  В случае с родителями они также становятся зависимыми от порядка появления родителей.

1. Add a **Spawn Order** initializer to the parent. It will be used in the children particles.
1. Добавьте инициализатор **Spawn Order** к родителю.  Он будет использоваться в дочерних частицах.

2. On the child emitter, remove all spawners and add only one, **From parent**. You want to control the spawning of the children particles so all particles can be properly grouped in a ribbon behind the parent particle. If you add another spawner that adds random behavior to the system, the ribbons will connect in the wrong way. Set the triggering condition to **Lifetime**.
2. На дочернем эмиттере удалите все спаунеры и добавьте только один, **От родителя**.  Вы хотите управлять порождением дочерних частиц, чтобы все частицы могли быть правильно сгруппированы в ленту за родительской частицей.  Если вы добавите еще один спаунер, который добавляет системе случайное поведение, ленты будут соединяться неправильным образом.  Установите условие срабатывания на **Время жизни**.

3. On the **child emitter** side again, add an **Order from parent** initializer. This assigns a spawning order to the particles, but also groups them by parent. If you set the **Sort** to use this order and assign a ribbon shape builder, you'll see how each trail is properly grouped behind the parent particle that spawned it.
3. На стороне **дочернего эмиттера** снова добавьте инициализатор **Order from parent**.  Это назначает порядок появления частиц, но также группирует их по родителю.  Если вы установите **Sort** для использования этого порядка и назначите построитель формы ленты, вы увидите, как каждый след правильно сгруппирован за родительской частицей, которая его породила.

## Circular behavior
## Круговое поведение

Particle emitters can inherit attributes circularly from each other, or even inherit attributes from particles in the same emitter. This can produce random or "swingy" effects, but can be interesting.
Излучатели частиц могут циклически наследовать атрибуты друг от друга или даже наследовать атрибуты от частиц в одном и том же излучателе.  Это может привести к случайным или «качающимся» эффектам, но может быть интересным.

In the **Colliding Particles** particle entity (in the **MainScene** of the **Sample: Particles** project), you can see that particles are spawned on hit, but the parent emitter is the same. This means that each time a particle hits the surface, it produces more of the same kind. There are two important elements which allow this to happen. 
В объекте частиц **Colliding Particles** (в **MainScene** проекта **Sample: Particles**) вы можете видеть, что частицы создаются при попадании, но родительский излучатель тот же.  Это означает, что каждый раз, когда частица попадает на поверхность, она производит больше частиц того же типа.  Есть два важных элемента, которые позволяют это сделать.

First, we have two spawners. One spawns a small number of particles per second, which give us the initial elements to populate the system. The other spawner spawns more particles on hit and uses a control group.
Во-первых, у нас есть два спавнера.  Один порождает небольшое количество частиц в секунду, что дает нам начальные элементы для заполнения системы.  Другой генератор порождает больше частиц при попадании и использует контрольную группу.

Second, we have two **Position** initializers. The first assigns a position where we want the particles to appear. It works over all particles (even those spawned from parents), so if you leave it like this, it will fire more particles from the initial position every time they hit the surface. 
Во-вторых, у нас есть два инициализатора **Position**.  Первый назначает позицию, в которой мы хотим, чтобы частицы появлялись.  Он работает со всеми частицами (даже с порожденными от родителей), поэтому, если вы оставите его таким, он будет запускать больше частиц из начального положения каждый раз, когда они попадают на поверхность.

The second initializer is **Position from parent** and initializes the particle positions using the same control group as the **On hit** spawner. The **Position from parent** overwrites the positions for the particles with control group, leaving the particles spawned from the **Per second** spawner untouched. This creates a small number of particles constantly coming from a single entry point and multiplying like an avalanche every time they hit the surface.
Второй инициализатор — **Position from parent** — инициализирует позиции частиц, используя ту же группу управления, что и генератор **On hit**.  **Position from parent** перезаписывает позиции частиц с контрольной группой, оставляя частицы, порожденные из генератора **Per second**, нетронутыми.  Это создает небольшое количество частиц, постоянно поступающих из одной точки входа и лавинообразно размножающихся каждый раз, когда они достигают поверхности.

## See also
## Смотрите также

* [Tutorial: Create a trail](create-a-trail.md)
* [Учебник: создание тропы](create-a-trail.md)
* [Tutorial: Custom particles](custom-particles.md)
* [Учебник: Пользовательские частицы](custom-particles.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Учебник: Лазеры и молния](lasers-and-lightning.md)
* [Particles](../index.md)
* [Частицы](../index.md)
* [Create particles](../create-particles.md)
* [Создать частицы](../create-particles.md)
