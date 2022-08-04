# Tutorial: Custom particles
# Учебник: Пользовательские частицы

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Artist</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

This walkthrough shows how you can create custom extensions for the particle system, providing functionality not available in the core engine.
В этом пошаговом руководстве показано, как можно создавать пользовательские расширения для системы частиц, предоставляя функциональные возможности, недоступные в основном движке.

If you're not familiar with editing particles, see [Create particles](../create-particles.md).
Если вы не знакомы с редактированием частиц, см. [Создание частиц](../create-particles.md).

Start by creating a new **Sample: Particles** project.
Начните с создания нового проекта **Sample: Particles**.

![Particles sample project](media/select-particles-sample-project.png)
![Пример проекта Particles](media/select-particles-sample-project.png)

This project contains different scenes that demonstrate different ways to use particles. Open the **CustomParticles** scene.
Этот проект содержит различные сцены, демонстрирующие различные способы использования частиц.  Откройте сцену **CustomParticles**.

There are three particle entities in the scene: **ConeEmitter15**, **ConeEmitter30**, and **ConeEmitter45**.
В сцене есть три объекта частиц: **ConeEmitter15**, **ConeEmitter30** и **ConeEmitter45**.

Select one of the particle entities. In the Property Grid, navigate to its source particle system and expand the emitter.
Выберите одну из частиц.  В сетке свойств перейдите к исходной системе частиц и разверните эмиттер.

![media/particles-samples-custom-1.png](media/particles-samples-custom-1.png)
![media/particles-samples-custom-1.png](media/particles-samples-custom-1.png)

There are four custom elements in this emitter:
В этом эмиттере есть четыре настраиваемых элемента:

* The custom [spawner](../spawners.md) is similar to the spawn-per-second spawner, but also emits a burst of particles every time it loops.
* Пользовательский [spawner](../spawners.md) аналогичен спаунеру с посекундным спауном, но также испускает всплеск частиц каждый раз, когда он зацикливается.

* The custom [initializer](../initializers.md) initially positions the particles in a cone shape and sets their velocity accordingly.
* Пользовательский [initializer](../initializers.md) изначально размещает частицы в форме конуса и соответствующим образом устанавливает их скорость.

* The custom [updater](../updaters.md) operates on a new particle field named **RactangleXY**, allowing the shape builder to use non-uniform sizes when building the billboards.
* Пользовательский [updater](../updaters.md) работает с новым полем частиц с именем **RactangleXY**, что позволяет конструктору форм использовать неоднородные размеры при построении рекламных щитов.

* The custom [shape builder](../shapes.md) is similar to the billboard with two additions. It can create non-uniform rectangles, rather than the standard squares, and it can align (fix) the rectangle's Y axis to the world's Y axis rather than the camera space.
* Пользовательский [конструктор форм](../shapes.md) аналогичен билборду с двумя дополнениями.  Он может создавать неоднородные прямоугольники, а не стандартные квадраты, и может выравнивать (фиксировать) ось Y прямоугольника по оси Y мира, а не по пространству камеры.

## Spawner
## Спаунер

We'll create a spawner which emits particles per second **and** in bursts every few seconds. We could do this by adding two different spawners, but for this sample we'll combine them.
Мы создадим генератор, который испускает частицы в секунду ** и ** всплесками каждые несколько секунд.  Мы могли бы сделать это, добавив два разных спавнера, но для этого примера мы объединим их.

  ```cs
```CS
    [DataContract("CustomParticleSpawner")] // Used for serialization, a good practice is to have the data contract have the same name as the class
[DataContract(
    [Display("CustomParticleSpawner")]
[Отображение(
    public sealed class CustomParticleSpawner : ParticleSpawner
общедоступный закрытый класс CustomParticleSpawner : ParticleSpawner
    {
{
        [DataMemberIgnore]
[DataMemberIgnore]
        private float carryOver;    // Private members do not appear on the Property Grid
частный плавающий перенос;  // Частные элементы не отображаются в сетке свойств

        [DataMember(100)]                // When data is serialized, this attribute decides its priority
[DataMember(100)] // При сериализации данных этот атрибут определяет свой приоритет
        [Display("Number of particles")] // This is the name which will be displayed on the Property Grid
[Display(
        public float SpawnCount { get; set; }
общественный поплавок SpawnCount { получить;  установлен;  }

        [DataMemberIgnore]
[DataMemberIgnore]
        private float burstTimer;    // Private members do not appear on the Property Grid
частный поплавок BurstTimer;  // Частные элементы не отображаются в сетке свойств

        [DataMember(200)]                // When data is serialized, this attribute decides its priority
[DataMember(200)] // Когда данные сериализуются, этот атрибут определяет свой приоритет
        [Display("Burst particles")]     // This is the name which will be displayed on the Property Grid
[Display(
        public float BurstCount {get;set;}
публичный плавающий BurstCount {get;set;}

		...
...

        public override int GetMaxParticlesPerSecond()
публичное переопределение int GetMaxParticlesPerSecond()
        {
{
            return (int)Math.Ceiling(SpawnCount) + (int)Math.Ceiling(BurstCount);
return (int)Math.Ceiling(SpawnCount) + (int)Math.Ceiling(BurstCount);
        }
}

        public override void SpawnNew(float dt, ParticleEmitter emitter)
public override void SpawnNew (float dt, эмиттер ParticleEmitter)
        {
{
            // State is handled by the base class. Generally you only want to spawn particle when in active state
// Состояние обрабатывается базовым классом.  Как правило, вы хотите создавать частицы только в активном состоянии.
            var spawnerState = GetUpdatedState(dt, emitter);
var spawnerState = GetUpdatedState(dt, эмиттер);
            if (spawnerState != SpawnerState.Active)
если (spawnerState != SpawnerState.Active)
                return;
возвращаться;

            // Calculate particles per second
// Расчет частиц в секунду
            var toSpawn = spawnCount * dt + carryOver;
var toSpawn = spawnCount * dt + CarryOver;
            var integerPart = (int)Math.Floor(toSpawn);
var integerPart = (int)Math.Floor(toSpawn);
            carryOver = toSpawn - integerPart;
CarryOver = toSpawn - целая часть;

            // Calculate burst particles
// Расчет частиц взрыва
            burstTimer -= dt;
BurstTimer -= дт;
            if (burstTimer < 0)
если (burstTimer < 0)
            {
{
                burstTimer += 1f;
BurstTimer += 1f;
                integerPart += (int)Math.Floor(BurstCount);
integerPart += (int)Math.Floor(BurstCount);
            }
}

            // Lastly, tell the emitter how many new particles do we want to spawn this frame
// Наконец, сообщаем эмиттеру, сколько новых частиц мы хотим создать в этом кадре
            emitter.EmitParticles(integerPart);
эмиттер.EmitParticles(целая часть);
        }
}
    }
}
```
```

This class mimics the @'Stride.Particles.Spawners.ParticleSpawner', with the addition of a `BurstCount` and a `burstTimer` to control how often and how many particles are spawned in bursts.
Этот класс имитирует @'Stride.Particles.Spawners.ParticleSpawner' с добавлением BurstCount и BurstTimer для контроля того, как часто и сколько частиц порождается вспышками.

The `SpawnNew` method is called every frame to allow the spawner to calculate how many new particles should be emitted in the emitter based on the elapsed time.
Метод `SpawnNew` вызывается каждый кадр, чтобы позволить генератору рассчитать, сколько новых частиц должно быть испущено в излучателе на основе прошедшего времени.

As an exercise, try implementing the following changes:
В качестве упражнения попробуйте внести следующие изменения:

- Rather than one-second bursts, create a property and have the user control the timing.
- Вместо односекундных пакетов создайте свойство и позвольте пользователю контролировать время.
- Remove the spawn-per-second fields and make it a pure burst spawner.
- Удалите поля появления в секунду и сделайте его чистым спаунером.

Our spawner only emits particles, but doesn't set any fields. This is done by the initializer.
Наш спаунер только испускает частицы, но не устанавливает никаких полей.  Это делается инициализатором.

## Initializer
## Инициализатор

We want to place the particles in a cone and shoot them outwards when they spawn.
Мы хотим поместить частицы в конус и стрелять ими наружу, когда они появляются.

  ```cs
```CS
    [DataContract("CustomParticleInitializer")]
[DataContract(
    [Display("Cone Initializer")]
[Отображение(
    public class CustomParticleInitializer : ParticleInitializer
открытый класс CustomParticleInitializer : ParticleInitializer
    {
{
        [DataMember(100)]
[Член данных (100)]
        [DataMemberRange(0, 120, 0.01, 0.1)]
[DataMemberRange(0, 120, 0,01, 0,1)]
        [Display("Arc")]
[Отображение(
        public float Angle = 20f;
общественный поплавок Угол = 20f;

        [DataMember(200)]
[Член данных (200)]
        [Display("Velocity")]
[Отображение(
        public float Strength = 1f;
общественная плавающая сила = 1f;

        public CustomParticleInitializer()
публичный CustomParticleInitializer()
        {
{
            RequiredFields.Add(ParticleFields.Position);
RequiredFields.Add(ParticleFields.Position);
            RequiredFields.Add(ParticleFields.Velocity);
RequiredFields.Add(ParticleFields.Velocity);
            RequiredFields.Add(ParticleFields.RandomSeed);
RequiredFields.Add(ParticleFields.RandomSeed);
        }
}

        public unsafe override void Initialize(ParticlePool pool, int startIdx, int endIdx, int maxCapacity)
public unsafe override void Initialize (пул ParticlePool, int startIdx, int endIdx, int maxCapacity)
        {
{
			...
...
        }
}
    }
}
```
```

Our initializer simply defines an angle for the cone and strength for the velocity. Any scaling and rotation of the cone come from the location inheritance and offset, which are common for all initializers and updaters and are ready to use. For more information, see the @'Stride.Particles.Initializers.ParticleInitializer'.
Наш инициализатор просто определяет угол для конуса и силу для скорости.  Любое масштабирование и вращение конуса происходят из наследования и смещения местоположения, которые являются общими для всех инициализаторов и средств обновления и готовы к использованию.  Для получения дополнительной информации см. @'Stride.Particles.Initializers.ParticleInitializer'.

The constructor for the initializer is important, as it sets the list of required fields we'll use. The initializer sets the particle's position and velocity, so we add those, and needs to generate some randomness, so we also add the random seed which we are going to use. All particles have `Life` and `RandomSeed` fields when they spawn.
Конструктор инициализатора важен, так как он устанавливает список обязательных полей, которые мы будем использовать.  Инициализатор задает положение и скорость частицы, поэтому мы добавляем их, и нам нужно создать некоторую случайность, поэтому мы также добавляем случайное начальное число, которое мы собираемся использовать.  Все частицы имеют поля Life и RandomSeed при появлении.

  ```cs
```CS
// This method is called for all new particles once the initializer is added to an emitter. Rather than updating all of them, we are given a starting and end indices and must only use particles in the defined range.
// Этот метод вызывается для всех новых частиц после добавления инициализатора к эмиттеру.  Вместо того, чтобы обновлять их все, нам даются начальный и конечный индексы, и мы должны использовать только частицы в определенном диапазоне.
public unsafe override void Initialize(ParticlePool pool, int startIdx, int endIdx, int maxCapacity)
public unsafe override void Initialize (пул ParticlePool, int startIdx, int endIdx, int maxCapacity)
{
{
    // Make sure the fields exist and avoid illegal memory access
// Убедитесь, что поля существуют, и избегайте несанкционированного доступа к памяти
	if (!pool.FieldExists(ParticleFields.Position) || !pool.FieldExists(ParticleFields.Velocity) || !pool.FieldExists(ParticleFields.RandomSeed))
if (!pool.FieldExists(ParticleFields.Position) || !pool.FieldExists(ParticleFields.Velocity) || !pool.FieldExists(ParticleFields.RandomSeed))
		return;
возвращаться;

	var posField = pool.GetField(ParticleFields.Position);
var posField = pool.GetField(ParticleFields.Position);
	var velField = pool.GetField(ParticleFields.Velocity);
var velField = pool.GetField(ParticleFields.Velocity);
	var rndField = pool.GetField(ParticleFields.RandomSeed);
var rndField = pool.GetField(ParticleFields.RandomSeed);

	var range = (float) (Angle*Math.PI/180f);
var range = (float) (Angle*Math.PI/180f);
	var magnitude = WorldScale.X;
переменная величина = WorldScale.X;

	var i = startIdx;
переменная я = startIdx;
	while (i != endIdx)
пока (я != endIdx)
	{
{
		var particle = pool.FromIndex(i);
var частица = pool.FromIndex(i);
		var randSeed = particle.Get(rndField);
var randSeed = частица.Get(rndField);

		var x = (randSeed.GetFloat(RandomOffset.Offset2A + SeedOffset) - 0.5f)*range;
var x = (randSeed.GetFloat(RandomOffset.Offset2A + SeedOffset) - 0,5f)*диапазон;
		var z = (randSeed.GetFloat(RandomOffset.Offset2B + SeedOffset) - 0.5f) * range;
var z = (randSeed.GetFloat(RandomOffset.Offset2B + SeedOffset) - 0,5f) * диапазон;

		var u = (randSeed.GetFloat(RandomOffset.Offset2A + SeedOffset) - 0.5f) * range;
var u = (randSeed.GetFloat(RandomOffset.Offset2A + SeedOffset) - 0,5f) * диапазон;
		var v = (randSeed.GetFloat(RandomOffset.Offset2B + SeedOffset) - 0.5f) * Math.PI;
var v = (randSeed.GetFloat(RandomOffset.Offset2B + SeedOffset) - 0,5f) * Math.PI;

		var xz = (float) Math.Sin(u);
var xz = (с плавающей запятой) Math.Sin(u);
		var particleRandPos = new Vector3((float) Math.Cos(v) * xz, (float)Math.Sqrt(1 - u*u), (float)Math.Sin(v) * xz);
var частицаRandPos = новый Vector3((float)Math.Cos(v) * xz, (float)Math.Sqrt(1 - u*u), (float)Math.Sin(v) * xz);
		particleRandPos.Normalize();
частицаRandPos.Normalize();

		particleRandPos *= magnitude;
частицаRandPos *= величина;
		WorldRotation.Rotate(ref particleRandPos); // WorldRotation is the current rotation of our initializer. We can use it as it is, since inheritance and offset are already taken in account.
WorldRotation.Rotate(ref частицаRandPos);  // WorldRotation — это текущее вращение нашего инициализатора.  Мы можем использовать его как есть, так как наследование и смещение уже учтены.

		(*((Vector3*) particle[posField])) = particleRandPos + WorldPosition; // WorldPosition is the current position of our initializer. We can use it as it is, since inheritance and offset are already taken in account.
(*((Vector3*) частица[posField])) = частицаRandPos + WorldPosition;  // WorldPosition — текущая позиция нашего инициализатора.  Мы можем использовать его как есть, так как наследование и смещение уже учтены.

		(*((Vector3*) particle[velField])) = particleRandPos * Strength;
(*((Vector3*) частица[velField])) = частицаRandPos * Сила;

		i = (i + 1) % maxCapacity;
я = (я + 1) % maxCapacity;
	}
}
}
}
```
```

## Updater
## Обновление

We want our updater to change a particle's width and height every frame based on a simple sine function over the particle's life.
Мы хотим, чтобы наш модуль обновления изменял ширину и высоту частицы в каждом кадре на основе простой синусоидальной функции в течение жизни частицы.

Because there's no such field yet, start by creating a new particle field. Let's name it `RactangleXY`:
Поскольку такого поля еще нет, начните с создания нового поля частиц.  Назовем его `RactangleXY`:

  ```cs
```CS
    public static class CustomParticleFields
общедоступный статический класс CustomParticleFields
    {
{
        public static readonly ParticleFieldDescription<Vector2> RectangleXY = new ParticleFieldDescription<Vector2>("RectangleXY", new Vector2(1, 1));
public static только для чтения ParticleFieldDescription<Vector2> RectangleXY = new ParticleFieldDescription<Vector2>(
    }
}
```
```

The field has type @'Stride.Core.Mathematics.Vector2', since we only need two values for the width and the height. No fields are added automatically to the particles, so even if you have many declarations, the particle size won't change. Fields are only added when we plug a module which requires them, such as the custom updater below.
Поле имеет тип @'Stride.Core.Mathematics.Vector2', поскольку нам нужны только два значения ширины и высоты.  Никакие поля не добавляются к частицам автоматически, поэтому даже если у вас много объявлений, размер частиц не изменится.  Поля добавляются только тогда, когда мы подключаем модуль, который их требует, например, настраиваемый модуль обновления ниже.

For API reference, see @'Stride.Particles.Modules.ParticleUpdater'.
Справку по API см. в разделе @'Stride.Particles.Modules.ParticleUpdater'.

  ```cs
```CS
    [DataContract("CustomParticleUpdater")] // Used for serialization so that our custom object can be saved. A good practice is to have the data contract have the same name as the class name.
[DataContract( Хорошей практикой является использование контракта данных с тем же именем, что и имя класса.
    [Display("CustomUpdater")]				// Unless a display name is specified, the name of the data contract will be used. Sometimes we want to hide it and display something simpler instead.
[Display( Иногда мы хотим скрыть это и вместо этого отобразить что-то более простое.
    public class CustomParticleUpdater : ParticleUpdater
открытый класс CustomParticleUpdater : ParticleUpdater
    {
{
        [DataMemberIgnore]	// Public fields and properties are serialized. We want to avoid this in some cases and can use the DataMemberIgnore attribute.
[DataMemberIgnore] // Публичные поля и свойства сериализуются.  В некоторых случаях мы хотим избежать этого и можем использовать атрибут DataMemberIgnore.
        public override bool IsPostUpdater => true; // By making this updater a post-updater we can ensure it will be called for both newly spawned and old particles (1 frame or older)
общественное переопределение bool IsPostUpdater => true;  // Делая этот модуль обновления постобновляющим, мы можем гарантировать, что он будет вызываться как для новых, так и для старых частиц (1 кадр или старше)

        [DataMember(10)]	// This public field will be serialized. With the DataMember attribute we can specify the serialization and display order.
[DataMember(10)] // Это общедоступное поле будет сериализовано.  С помощью атрибута DataMember мы можем указать сериализацию и порядок отображения.
        public AnimatedCurveEnum Curve; // Refer to the actual sample code for AnimatedCurveEnum
общедоступная кривая AnimatedCurveEnum;  // Обратитесь к реальному примеру кода для AnimatedCurveEnum

		// In the constructor we have to specify all the fields we need for this updater.
// В конструкторе мы должны указать все поля, которые нам нужны для этого апдейтера.
		// It calculates our newly created field by using the particle's lifetime so we need "RectangleXY" and "Life"
// Он вычисляет наше только что созданное поле, используя время жизни частицы, поэтому нам нужны «RectangleXY» и «Life».
        public CustomParticleUpdater()
публичный CustomParticleUpdater()
        {
{
            // This is going to be our "input" field
// Это будет наше поле ввода
            RequiredFields.Add(ParticleFields.Life);
RequiredFields.Add(ParticleFields.Life);

            // This is the field we want to update
// Это поле, которое мы хотим обновить
            // It is not part of the basic fields - we created it just for this updater
// Это не часть базовых полей - мы создали его только для этого апдейтера
            RequiredFields.Add(CustomParticleFields.RectangleXY);
RequiredFields.Add(CustomParticleFields.RectangleXY);
        }
}

		// The update method is called once every frame and requires the updater to iterate over all particles in the pool and update their fields.
// Метод update вызывается один раз в каждом кадре и требует, чтобы средство обновления перебирало все частицы в пуле и обновляло их поля.
		// If the updater is a post-updater it will get called **after** spawning new particles for this frame and might overwrite their initial values on the same frame
// Если средство обновления является средством пост-обновления, оно будет вызвано **после** создания новых частиц для этого кадра и может перезаписать их начальные значения в том же кадре
		// If the updater is not a post-updater it will get called **before** spawning new particles for this frame and can't overwrite their initial values for the first frame
// Если средство обновления не является средством пост-обновления, оно будет вызвано **перед** созданием новых частиц для этого кадра и не сможет перезаписать их начальные значения для первого кадра
        public override void Update(float dt, ParticlePool pool)
public override void Update (float dt, пул ParticlePool)
        {
{
			...
...
        }
}
    }
}
```
```

Let's take a look at the `Update` method. The sample code is longer, but here we've trimmed it for the sake of simplicity.
Давайте посмотрим на метод `Update`.  Пример кода длиннее, но здесь мы урезали его для простоты.

  ```cs
```CS
public override void Update(float dt, ParticlePool pool)
public override void Update (float dt, пул ParticlePool)
{
{
    // Make sure the fields exist and avoid illegal memory access
// Убедитесь, что поля существуют, и избегайте несанкционированного доступа к памяти
    if (!pool.FieldExists(ParticleFields.Life) || !pool.FieldExists(CustomParticleFields.RectangleXY))
if (!pool.FieldExists(ParticleFields.Life) || !pool.FieldExists(CustomParticleFields.RectangleXY))
        return;
возвращаться;

    var lifeField = pool.GetField(ParticleFields.Life);
var lifeField = pool.GetField(ParticleFields.Life);
    var rectangleField = pool.GetField(CustomParticleFields.RectangleXY);
var RectangleField = pool.GetField(CustomParticleFields.RectangleXY);

    // X and Y sides depend on sin(time) and cos(time)
// стороны X и Y зависят от sin(time) и cos(time)
    foreach (var particle in pool)
foreach (частица var в пуле)
    {
{
        // Get the particle's remaining life. It's already normalized between 0 and 1
// Получить оставшуюся жизнь частицы.  Он уже нормализован между 0 и 1
        var lifePi = particle.Get(lifeField) * MathUtil.Pi;
var lifePi = частица.Get(lifeField) * MathUtil.Pi;

        // Set the rectangle as a simple function over time
// Установить прямоугольник как простую функцию с течением времени
        particle.Set(rectangleField, new Vector2((float)Math.Sin(lifePi), (float)Math.Cos(lifePi)));
частица.Set(rectangleField, новый Vector2((float)Math.Sin(lifePi), (float)Math.Cos(lifePi)));
    }
}
}
}
```
```

The updater will animate all particles' RectangleXY fields with a simple sine and cosine functions over their life.
Программа обновления будет анимировать поля RectangleXY всех частиц с помощью простых синусоидальных и косинусных функций в течение их жизни.

In the next step we'll demonstrate how to display the created values.
На следующем шаге мы покажем, как отображать созданные значения.

## Shape builder
## Конструктор форм

The `shape builder` is the class which takes all particle fields and creates the actual shape we are going to render. It's a little long, so let's break it down.
«Конструктор форм» — это класс, который берет все поля частиц и создает реальную форму, которую мы собираемся визуализировать.  Это немного длинно, поэтому давайте сломаем это.

  ```cs
```CS
	public override int QuadsPerParticle { get; protected set; } = 1;
общественное переопределение int QuadsPerParticle { get;  защищенный набор;  } = 1;
```
```

The engine draws quads using 1 quad = 4 vertices = 6 indices, but we can only specify the number of quads we need. For a rectangle we need only one.
Движок рисует четырехугольники, используя 1 четырехугольник = 4 вершины = 6 индексов, но мы можем указать только необходимое нам количество четырехугольников.  Для прямоугольника нам нужен только один.

>[!Note]
>[!Примечание]
> The number of quads is important because the vertex buffer is allocated and mapped prior to writing out the vertex data. If we allocate smaller buffer it might result in illegal memory access and corruption.
> Количество квадов важно, потому что буфер вершин выделяется и отображается до записи данных вершин.  Если мы выделим меньший буфер, это может привести к нелегальному доступу к памяти и повреждению.

  ```cs
```CS
public unsafe override int BuildVertexBuffer(ParticleVertexBuilder vtxBuilder, Vector3 inverseViewX, Vector3 inverseViewY,
публичное небезопасное переопределение int BuildVertexBuffer(ParticleVertexBuilder vtxBuilder, Vector3 inverseViewX, Vector3 inverseViewY,
    ref Vector3 spaceTranslation, ref Quaternion spaceRotation, float spaceScale, ParticleSorter sorter)
ref Vector3 spaceTranslation, ref Quaternion spaceRotation, float spaceScale, сортировщик ParticleSorter)
```
```

This method is called when it needs our shape builder to iterate over all particles and build the shape. The @'Stride.Particles.VertexLayouts.ParticleVertexBuilder' is the wrapper around our vertex stream. We'll use it to write out the vertex data for the particles.
Этот метод вызывается, когда ему нужно, чтобы наш построитель форм перебрал все частицы и построил форму.  @'Stride.Particles.VertexLayouts.ParticleVertexBuilder' — это оболочка вокруг нашего потока вершин.  Мы будем использовать его для записи данных вершин для частиц.

`inverseViewX` and `inverseViewY` are unit vectors in camera space passed down to the shape builder if we need to generate camera-facing shapes.
`inverseViewX` и `inverseViewY` — это единичные векторы в пространстве камеры, которые передаются конструктору форм, если нам нужно сгенерировать формы, обращенные к камере.

  ```cs
```CS
    foreach (var particle in sorter)
foreach (частица var в сортировщике)
    {
{
        var centralPos = particle.Get(positionField);
var CentralPos = частица.Get(positionField);

        var particleSize = sizeField.IsValid() ? particle.Get(sizeField) : 1f;
var частицаSize = sizeField.IsValid() ?  частица.Получить(sizeField): 1f;
        var rectangleSize = rectangleField.IsValid() ? particle.Get(rectangleField) : new Vector2(1, 1);
var прямоугольникSize = прямоугольникField.IsValid() ?  частица.Get(rectangleField): новый Vector2(1, 1);
        var unitX = invViewX * (particleSize * 0.5f) * rectangleSize.X;
var unitX = invViewX * (размер частицы * 0,5f) * размер прямоугольника.X;
        var unitY = invViewY * (particleSize * 0.5f) * rectangleSize.Y;
var unitY = invViewY * (particleSize * 0,5f) * прямоугольникSize.Y;

        // Particle rotation. Positive value means clockwise rotation.
// Вращение частицы.  Положительное значение означает вращение по часовой стрелке.
        if (hasAngle) { ... }
если (угол) {...}

        var particlePos = centralPos - unitX + unitY;
var частицаПос = центральнаяПос - единица X + единица Y;
        var uvCoord = new Vector2(0, 0);
var uvCoord = новый Vector2 (0, 0);

        // 0f 0f
// 0f 0f
        vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
        vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
        vtxBuilder.NextVertex();
vtxBuilder.NextVertex();

        // 1f 0f
// 1f 0f
        particlePos += unitX * 2;
частицаПос += единицаХ * 2;
        uvCoord.X = 1;
увКоорд.Х = 1;
        vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
        vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
        vtxBuilder.NextVertex();
vtxBuilder.NextVertex();

        // 1f 1f
// 1ф 1ф
        particlePos -= unitY * 2;
частицаПос -= единица Y * 2;
        uvCoord.Y = 1;
uvCoord.Y = 1;
        vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
        vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
        vtxBuilder.NextVertex();
vtxBuilder.NextVertex();

        // 0f 1f
// 0f 1f
        particlePos -= unitX * 2;
частицаПос -= единицаХ * 2;
        uvCoord.X = 0;
увКоорд.Х = 0;
        vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
vtxBuilder.SetAttribute(posAttribute, (IntPtr)(&particlePos));
        vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
vtxBuilder.SetAttribute(texAttribute, (IntPtr)(&uvCoord));
        vtxBuilder.NextVertex();
vtxBuilder.NextVertex();

        renderedParticles++;
визуализированные частицы++;
    }
}
```
```

Our particles' width and height depend both on the uniform size field `Size` and the field we created earlier in this walkthrough, `RectangleXY`. From there, we need to set the positions and texture coordinates for the four corner vertices of our quad. The number of vertices we have to set is per particle four times the number of quads we requested.
Ширина и высота наших частиц зависят как от поля единого размера «Size», так и от поля «RectangleXY», которое мы создали ранее в этом пошаговом руководстве.  Оттуда нам нужно установить позиции и координаты текстуры для четырех угловых вершин нашего четырехугольника.  Количество вершин, которые мы должны установить, на одну частицу в четыре раза превышает количество запрошенных нами четырехугольников.

You can add more complicated shapes or attributes here if your game requires them.
Вы можете добавить сюда более сложные формы или атрибуты, если они требуются вашей игре.

## Conclusion
## Вывод

With these 4 custom modules you can add a lot of functionality to the particle engine and tailor behavior to your needs. Because they're all serialized and loaded in Game Studio, once you create them, you can use them directly from Game Studio, together with the core modules.
С помощью этих 4 пользовательских модулей вы можете добавить множество функций в движок частиц и настроить поведение в соответствии с вашими потребностями.  Поскольку все они сериализованы и загружены в Game Studio, после их создания вы можете использовать их непосредственно из Game Studio вместе с основными модулями.

If you want to experiment with the modules, try adding a new `.cs` file to the `CustomParticles.Game` project. You can duplicate one of the existing classes, but don't forget to change the class name and the data contract to avoid collisions.
Если вы хотите поэкспериментировать с модулями, попробуйте добавить новый файл `.cs` в проект `CustomParticles.Game`.  Вы можете продублировать один из существующих классов, но не забудьте изменить имя класса и контракт данных, чтобы избежать коллизий.

You can then reload the scripts in Game Studio. If they don't load, relaunch your project. If there are no compilation errors in your code you should see the new modules in the spawners, initializers, updaters and shape builders lists.
Затем вы можете перезагрузить сценарии в Game Studio.  Если они не загружаются, перезапустите проект.  Если в вашем коде нет ошибок компиляции, вы должны увидеть новые модули в списках генераторов, инициализаторов, обновлений и построителей форм.

## See also
## Смотрите также

* [Tutorial: Create a trail](create-a-trail.md)
* [Учебник: создание тропы](create-a-trail.md)
* [Tutorial: Particle materials](particle-materials.md)
* [Учебник: Материалы частиц](particle-materials.md)
* [Tutorial: Inheritance](inheritance.md)
* [Учебник: Наследование](inheritance.md)
* [Tutorial: Lasers and lightning](lasers-and-lightning.md)
* [Учебник: Лазеры и молния](lasers-and-lightning.md)
* [Particles](../index.md)
* [Частицы](../index.md)
* [Create particles](../create-particles.md)
* [Создать частицы](../create-particles.md)
