# Static colliders
# Статические коллайдеры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Static colliders** aren't moved by forces such as gravity and collisions, but other physics objects can bump into them. Typical static colliders are strong immovable objects like walls, floors, large rocks, and so on.
**Статические коллайдеры** не движутся под действием таких сил, как гравитация и столкновения, но другие физические объекты могут столкнуться с ними.  Типичными статическими коллайдерами являются прочные неподвижные объекты, такие как стены, полы, большие камни и т. д.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)
![Статические и твердые коллайдеры](media/rigid-bodies-static-and-rigid-body-colliders.png)

## Add a static collider
## Добавляем статический коллайдер
   
1. Select the entity you want to make a static collider.
1. Выберите объект, который вы хотите сделать статическим коллайдером.

2. In the **Property Grid**, click **Add component** and select **Static Collider**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Статический коллайдер**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-add-collider-component.png)

3. Set the [collider shape](collider-shapes.md) to match the shape of the entity. To do this, in the **Property Grid**, expand the **Static Collider component** to view its properties.
3. Установите [форму коллайдера] (collider-shapes.md), чтобы она соответствовала форме объекта.  Для этого в **Сетке свойств** разверните компонент **Статический коллайдер**, чтобы просмотреть его свойства.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the shape you want.
4. Рядом с **Фигурами коллайдера** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите нужную форму.  .

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-collider-shape.png)

## Static collider properties
## Статические свойства коллайдера

You can adjust the static collider properties in the **Property Grid**.
Вы можете настроить свойства статического коллайдера в **Сетке свойств**.

![Static collider properties](media/static-collider-properties.png)
![Статические свойства коллайдера](media/static-collider-properties.png)

Property              |   Description
Недвижимость |  Описание
----------------------|-----------------------
----------------------|-------------------------------------
Collision Group       | Sets which collision group the object belongs to.
Группа столкновения |  Устанавливает, к какой группе коллизий принадлежит объект.
Can Collide With      | Sets which groups the object collides with.
может столкнуться с |  Устанавливает, с какими группами сталкивается объект.
Collision Events      | If this is enabled, the object reports collision events, which you can use in scripts. It has no effect on physics. If you have no scripts using collision events for the object, disable this option to save CPU.
События столкновения |  Если эта функция включена, объект сообщает о событиях столкновения, которые вы можете использовать в сценариях.  На физику это никак не влияет.  Если у вас нет скриптов, использующих события коллизий для объекта, отключите эту опцию для экономии ресурсов ЦП.
Can Sleep             | If this is enabled, the physics engine doesn't process physics objects when they're not moving. This saves CPU.
Может спать |  Если этот параметр включен, физический движок не обрабатывает физические объекты, когда они не двигаются.  Это экономит процессор.
Restitution           | Sets the amount of kinetic energy lost or gained after a collision. A typical value is between 0 and 1. If the restitution property of colliding entities is 0, the entities lose all energy and stop moving immediately on impact. If the restitution is 1, they lose no energy and rebound with the same velocity they collided at. Use this to change the "bounciness" of rigidbodies.
Реституция |  Устанавливает количество потерянной или полученной кинетической энергии после столкновения.  Типичное значение находится в диапазоне от 0 до 1. Если свойство восстановления сталкивающихся объектов равно 0, объекты теряют всю энергию и сразу же прекращают движение при ударе.  Если восстановление равно 1, они не теряют энергии и отскакивают с той же скоростью, с которой столкнулись.  Используйте это, чтобы изменить 
Friction              | Sets the surface friction.
Трение |  Устанавливает поверхностное трение.
Rolling Friction      | Sets the rolling friction.
Трение качения |  Устанавливает трение качения.
CCD Motion Threshold  | Sets the velocity at which continuous collision detection (CCD) takes over. CCD prevents fast-moving entities (such as bullets) erroneously passing through other entities.
Порог движения ПЗС |  Устанавливает скорость, при которой вступает в действие непрерывное обнаружение столкновений (CCD).  CCD предотвращает ошибочное прохождение быстро движущихся объектов (таких как пули) через другие объекты.
CCD Swept Sphere Radius | Sets the radius of the bounding sphere containing the position between two physics frames during continuous collision detection.
Радиус охватываемой сферы ПЗС |  Устанавливает радиус ограничивающей сферы, содержащей положение между двумя физическими кадрами во время непрерывного обнаружения столкновений.
Is Trigger            | Toggles whether the static collider is a [trigger](triggers.md).
Триггер |  Переключает, является ли статический коллайдер [триггером](triggers.md).

## Move a static collider at runtime
## Переместить статический коллайдер во время выполнения

If you need to move a static collider at runtime, you can do it with a script:
Если вам нужно переместить статический коллайдер во время выполнения, вы можете сделать это с помощью скрипта:

```cs
```CS
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.Position += PhysicsComponent.Entity.Transform.Position + Vector3.UnitX;
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.Entity.Transform.UpdateWorldMatrix();
PhysicsComponent.UpdatePhysicsTransformation();
PhysicsComponent.UpdatePhysicsTransformation();
```
```

## See also
## Смотрите также

* [Rigidbodies](rigid-bodies.md)
* [Жесткие тела](rigid-bodies.md)
* [Characters](characters.md)
* [Персонажи](characters.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Triggers](triggers.md)
* [Триггеры](triggers.md)
