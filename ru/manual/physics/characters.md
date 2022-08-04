# Characters
# Персонажи

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Character** colliders are used for player and script-controlled characters such as NPCs. Entities with [character components](xref:Stride.Physics.CharacterComponent) can only be moved with [SetVelocity](xref:Stride.Physics.CharacterComponent.SetVelocity\(Stride.Core.Mathematics.Vector3\)), [Jump](xref:Stride.Physics.CharacterComponent.Jump), and [Teleport](xref:Stride.Physics.CharacterComponent.Teleport\(Stride.Core.Mathematics.Vector3\)).
**Character** коллайдеры используются для персонажей, управляемых игроком и сценарием, таких как NPC.  Объекты с [компонентами персонажа](xref:Stride.Physics.CharacterComponent) можно перемещать только с помощью [SetVelocity](xref:Stride.Physics.CharacterComponent.SetVelocity\(Stride.Core.Mathematics.Vector3\)), [Jump](  xref:Stride.Physics.CharacterComponent.Jump) и [Teleport](xref:Stride.Physics.CharacterComponent.Teleport\(Stride.Core.Mathematics.Vector3\)).

## Add a character component to an entity
## Добавить компонент персонажа к сущности

1. In the **Scene Editor**, select the entity you want to add the component to.
1. В **Редакторе сцен** выберите объект, к которому вы хотите добавить компонент.

2. In the **Property Grid**, click **Add component** and select **Character**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Символ**.

    ![Add character component](media/add-character-component.png)
![Добавить символьный компонент](media/add-character-component.png)

>[!Note]
>[!Примечание]
> For the character collider to interact with other physics objects, you also need to set a  collider shape in the collider component properties. The capsule shape is appropriate for most character colliders. For more information, see [collider shapes](collider-shapes.md).
> Чтобы коллайдер персонажа взаимодействовал с другими физическими объектами, вам также необходимо установить форму коллайдера в свойствах компонента коллайдера.  Форма капсулы подходит для большинства коллайдеров персонажей.  Для получения дополнительной информации см. [формы коллайдера](collider-shapes.md).

## Component properties
## Свойства компонента

You can adjust the character component properties in the **Property Grid**.
Вы можете настроить свойства компонента персонажа в **Сетке свойств**.

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
Gravity               | For rigidbodies, sets a custom gravity vector applied if Override Gravity is selected. For characters, specifies how much gravity affects the character.
Гравитация |  Для твердых тел задает пользовательский вектор силы тяжести, применяемый, если выбран параметр «Переопределить силу тяжести».  Для персонажей указывает, насколько гравитация влияет на персонажа.
Step Height           | The maximum height the character can step onto.
Высота шага |  Максимальная высота, на которую может ступить персонаж.
Fall Speed            | The maximum fall speed.
Скорость падения |  Максимальная скорость падения.
Max Slope             | The maximum slope the character can climb, in degrees. 
Максимальный уклон |  Максимальный уклон, на который может подняться персонаж, в градусах.
Jump Speed            | The amount of jump force.
Скорость прыжка |  Количество силы прыжка.

## See also
## Смотрите также

* [Static colliders](static-colliders.md)
* [Статические коллайдеры](static-colliders.md)
* [Rigidbodies](rigid-bodies.md)
* [Жесткие тела](rigid-bodies.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
