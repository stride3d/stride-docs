# Rigidbodies
# Жесткие тела

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

**Rigidbodies** move based on physical forces applied to them, such as gravity and collisions. Typical rigidbodies are boxes, balls, furniture, and so on — objects that are pushed, pulled, and knocked around, and also have effects on other rigidbodies they collide with.
**Твердые тела** двигаются под действием приложенных к ним физических сил, таких как гравитация и столкновения.  Типичными твердыми телами являются коробки, шары, мебель и т. д. — объекты, которые толкают, тянут и толкают, а также воздействуют на другие твердые тела, с которыми они сталкиваются.

![Static and rigidbody colliders](media/rigid-bodies-static-and-rigid-body-colliders.png)
![Статические и твердые коллайдеры](media/rigid-bodies-static-and-rigid-body-colliders.png)


## Add a rigidbody collider
## Добавляем коллайдер с твердым телом

1. Select the entity you want to be a rigidbody collider.
1. Выберите объект, который вы хотите использовать в качестве жесткого коллайдера.

2. In the **Property Grid**, click **Add component** and select **Rigidbody**.
2. В **Сетке свойств** нажмите **Добавить компонент** и выберите **Жесткое тело**.

    ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-add-rigitbody-component.png)

3. Set the [collider shape](collider-shapes.md) to match the entity. To do this, in the **Property Grid**, expand the **Rigidbody component** to view its properties.
3. Установите [форму коллайдера] (collider-shapes.md), чтобы она соответствовала объекту.  Для этого в **Сетке свойств** разверните **Компонент Rigidbody**, чтобы просмотреть его свойства.

4. Next to **Collider Shapes**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**) and select the shape you want.
4. Рядом с **Фигурами коллайдера** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**) и выберите нужную форму.  .

     ![Add Static collider component](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)
![Добавить компонент статического коллайдера](media/physics-tutorials-create-a-bouncing-ball-rigitbody-shape.png)

## Component properties
## Свойства компонента

You can adjust the rigidbody properties in the **Property Grid**.
Вы можете настроить свойства твердого тела в **Сетке свойств**.

![Rigidbody properties](media/rigid-body-properties.png)
![Свойства твердого тела](media/rigid-body-properties.png)

Property              | Description
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
Is Trigger            | Toggles whether the rigidbody is a [trigger](triggers.md).
Триггер |  Переключает, является ли твердое тело [триггером](triggers.md).
Is Kinematic          | Toggles whether the rigidbody is [kinematic](kinematic-rigid-bodies.md) and therefore moved only by its Transform property.
Кинематический |  Переключает, является ли твердое тело [кинематическим](kinematic-rigid-bodies.md) и, следовательно, перемещается только его свойством Transform.
Mass                  | Sets the collider mass. For large differences, use a point value; for example, write *0.1* or *10*, not *1* or *100000*.
масса |  Устанавливает массу коллайдера.  Для больших различий используйте значение в баллах;  например, пишите *0.1* или *10*, а не *1* или *100000*.
Linear damping        | The amount of damping for directional forces.
Линейное демпфирование |  Величина демпфирования направленных сил.
Angular damping       | The amount of damping for rotational forces.
Угловое демпфирование |  Величина демпфирования вращательных сил.
Override Gravity      | Overrides gravity with the vector specified in Gravity.
Переопределить гравитацию |  Переопределяет гравитацию с помощью вектора, указанного в Gravity.
Gravity               | Sets a custom gravity vector applied if Override Gravity is selected.
Гравитация |  Устанавливает пользовательский вектор гравитации, применяемый, если выбран параметр «Переопределить гравитацию».
Node Name             | If the collider entity contains a bone structure, the node name can refer to a bones node name to be linked to that specific bone.
Имя узла |  Если объект коллайдера содержит костную структуру, имя узла может ссылаться на имя узла костей, которое должно быть связано с этой конкретной костью.
Collider Shapes       | Adds a [collider shape](collider-shapes.md).
Коллайдер Формы |  Добавляет [форму коллайдера](collider-shapes.md).

## See also
## Смотрите также

* [Kinematic rigidbodies](kinematic-rigid-bodies.md)
* [Кинематические жесткие тела](кинематические-жесткие-тела.md)
* [Static colliders](static-colliders.md)
* [Статические коллайдеры](static-colliders.md)
* [Characters](characters.md)
* [Персонажи](characters.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Triggers](triggers.md)
* [Триггеры](triggers.md)
