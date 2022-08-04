# Physics simulation
# Моделирование физики

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

Stride's physics are controlled by the [Simulation](xref:Stride.Physics.Simulation) class.
Физика Stride управляется классом [Simulation](xref:Stride.Physics.Simulation).
You can change how Stride initializes the [simulation](xref:Stride.Physics.Simulation) by modifying flags in [PhysicsSettings](xref:Stride.Physics.PhysicsSettings), accessed in the **GameSettings** asset properties.
Вы можете изменить то, как Stride инициализирует [симуляцию](xref:Stride.Physics.Simulation), изменив флаги в [PhysicsSettings](xref:Stride.Physics.PhysicsSettings), доступные в свойствах ресурса **GameSettings**.

>[!Note]
>[!Примечание]
>Your scene must have at least one [Collider](colliders.md) in order for Stride to initialize the [Simulation](xref:Stride.Physics.Simulation) instance.
>В вашей сцене должен быть хотя бы один [Collider](colliders.md), чтобы Stride мог инициализировать экземпляр [Simulation](xref:Stride.Physics.Simulation).

![Physics Settings](media/simulation-physics-settings.png)
![Настройки физики](media/simulation-physics-settings.png)

* `CollisionsOnly` initializes the [Simulation](xref:Stride.Physics.Simulation) with collision detection turned on, but no other physics. Objects won't react to physical forces.
* `CollisionsOnly` инициализирует [Simulation](xref:Stride.Physics.Simulation) с включенным обнаружением столкновений, но без другой физики.  Объекты не будут реагировать на физические воздействия.

* `ContinuousCollisionDetection` initializes the [Simulation](xref:Stride.Physics.Simulation) with continuous collision detection (CCD). CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.
* `ContinuousCollisionDetection` инициализирует [Simulation](xref:Stride.Physics.Simulation) с непрерывным обнаружением столкновений (CCD).  CCD предотвращает ошибочное прохождение быстро движущихся объектов (таких как пули) через другие объекты.

> [!Note] 
> [!Примечание]
> The ``SoftBodySupport``, ``MultiThreaded``, and ``UseHardwareWhenPossible`` flags are currently disabled.
> Флаги ``SoftBodySupport``, ``MultiThreaded`` и ``UseHardwareWhenPossible`` в настоящее время отключены.

At runtime, you can change some [Simulation](xref:Stride.Physics.Simulation) parameters:
Во время выполнения вы можете изменить некоторые параметры [Simulation](xref:Stride.Physics.Simulation):

* `Gravity` — the global gravity, in [world units](../game-studio/world-units.md) per second squared
* `Гравитация` — глобальная гравитация, в [мировых единицах](../game-studio/world-units.md) на секунду в квадрате
* `FixedTimeStep` — the length of a simulation timestep, in seconds
* `FixedTimeStep` — длина временного шага симуляции в секундах.
* `MaxSubSteps` — the maximum number of fixed timesteps the engine takes per update
* `MaxSubSteps` — максимальное количество фиксированных временных шагов, которое движок выполняет за одно обновление.

## See also
## Смотрите также
* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
