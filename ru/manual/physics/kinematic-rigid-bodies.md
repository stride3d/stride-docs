# Kinematic rigidbodies
# Кинематические твердые тела

Sometimes you want to move [rigidbodies](rigid-bodies.md) in a specific way rather than have other objects move them. For example, you might control an elevator with a script, via its `Transform` property, rather than have other objects push and pull it. This is a **kinematic** rigidbody.
Иногда вы хотите перемещать [твердые тела](rigid-bodies.md) определенным образом, а не заставлять их перемещаться другими объектами.  Например, вы можете управлять лифтом с помощью сценария через его свойство Transform, вместо того, чтобы другие объекты толкали и тянули его.  Это **кинематическое** твердое тело.

Although kinematic rigidbodies aren't moved by physics, other objects can still collide with them. For example, in the case of the elevator, objects placed inside won't fall through the elevator floor.
Хотя кинематические твердые тела не двигаются физикой, другие объекты могут сталкиваться с ними.  Например, в случае с лифтом предметы, помещенные внутрь, не провалятся сквозь пол лифта.

![Kinematic elevator](media/rigid-bodies-kinematic-elevator.png)
![Кинематический лифт](media/rigid-bodies-kinematic-elevator.png)

## Make a kinematic rigidbody
## Создание кинематического твердого тела

1. Select the entity you want to be a kinematic rigidbody.
1. Выберите объект, который вы хотите сделать кинематическим твердым телом.

2. In the **Property Grid**, under the **Rigidbody** component properties, select **Is kinematic**.
2. В **Сетке свойств** в свойствах компонента **Жесткое тело** выберите **Кинематический**.

    ![Check 'Is kinematic'](media/rigid-bodies-is-kinematic-checkbox.png)
![Отметьте «Кинематический»](media/rigid-bodies-is-kinematic-checkbox.png)

## Scripting kinematic rigidbodies
## Скрипты кинематических твердых тел

You can script the **Is kinematic** property to turn on and off on certain events. For example, imagine our kinematic elevator's suspension cables are cut. You can script the **Is kinematic** property to change to *false* when this happens. The elevator becomes subject to the usual forces of physics, and falls.
Вы можете написать свойство **Is kinematic**, чтобы включать и выключать определенные события.  Например, представьте, что подвесные тросы нашего кинематического лифта обрезаны.  Вы можете написать для свойства **Is kinematic** значение *false*, когда это произойдет.  Лифт подчиняется обычным силам физики и падает.

![Non-kinematic elevator](media/rigid-bodies-non-kinematic-elevator.png)
![Некинематический лифт](media/rigid-bodies-non-kinematic-elevator.png)

## See also
## Смотрите также

* [Rigidbodies](rigid-bodies.md)
* [Жесткие тела](rigid-bodies.md)
* [Static colliders](static-colliders.md)
* [Статические коллайдеры](static-colliders.md)
* [Characters](characters.md)
* [Персонажи](characters.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Triggers](triggers.md)
* [Триггеры](triggers.md)
