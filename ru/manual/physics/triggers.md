# Triggers
# Триггеры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

If you set a collider to be a **trigger**, other colliders no longer bump into it. Instead, they pass through.
Если вы сделаете коллайдер **триггером**, другие коллайдеры больше не будут сталкиваться с ним.  Вместо этого они проходят.

The trigger detects when colliders enter it, which you can use to script events. For example, you can detect when a player character enters a room, and use this in your script to trigger an event. For more information, see [Events](../scripts/events.md).
Триггер определяет, когда в него входят коллайдеры, которые вы можете использовать для сценариев событий.  Например, вы можете определить, когда персонаж игрока входит в комнату, и использовать это в своем скрипте для запуска события.  Для получения дополнительной информации см. [События](../scripts/events.md).

>[!Note]
>[!Примечание]
>[Character colliders](characters.md) can't be used as triggers.
>[Character colliders](characters.md) нельзя использовать в качестве триггеров.

## Create a trigger 
## Создать триггер

1. Create a [collider](colliders.md).
1. Создайте [коллайдер](colliders.md).

2. In the **Property Grid**, under the collider component properties, select **Is Trigger**.
2. В **Сетке свойств** в свойствах компонента коллайдера выберите **Является триггером**.

![Select 'Is trigger'](media/triggers-select-is-trigger-checkbox.png)
![Выберите «Является триггером»](media/triggers-select-is-trigger-checkbox.png)

## Detect trigger collisions
## Обнаружение коллизий триггеров

You can see when something enters the trigger using the following code:
Вы можете увидеть, когда что-то входит в триггер, используя следующий код:

```cs
```CS
// Wait for an entity to collide with the trigger
// Ждем, пока объект не столкнется с триггером
var firstCollision = await trigger.NewCollision();
var firstCollision = await trigger.NewCollision();

var otherCollider = trigger == firstCollision.ColliderA
вар otherCollider = триггер == firstCollision.ColliderA
    ? firstCollision.ColliderB
?  firstCollision.ColliderB
    : firstCollision.ColliderA;
: firstCollision.ColliderA;
```
```

Alternatively, directly access the `TrackingHashSet`:
В качестве альтернативы можно напрямую получить доступ к `TrackingHashSet`:

```cs
```CS
var trigger = Entity.Get<PhysicsComponent>();
var trigger = Entity.Get<PhysicsComponent>();
foreach (var collision in trigger.Collisions)
foreach (коллизия var в trigger.Collisions)
{
{
    //do something with the collision
//сделать что-то с коллизией
}
}
```
```

Or use the `TrackingHashSet` events:
Или используйте события TrackingHashSet:

```cs
```CS
var trigger = Entity.Get<PhysicsComponent>();
var trigger = Entity.Get<PhysicsComponent>();
trigger.Collisions.CollectionChanged += (sender, args) =>
trigger.Collisions.CollectionChanged += (отправитель, аргументы) =>
{
{
    if (args.Action == NotifyCollectionChangedAction.Add)
если (args.Action == NotifyCollectionChangedAction.Add)
    {
{
        //new collision
//новое столкновение
        var collision = (Collision) args.Item;
var столкновения = (Столкновение) args.Item;
        //do something
//сделай что-нибудь
    }
}
    else if (args.Action == NotifyCollectionChangedAction.Remove)
иначе если (args.Action == NotifyCollectionChangedAction.Remove)
    {
{
        //old collision
// старая коллизия
        var collision = (Collision)args.Item;
вар столкновения = (Столкновение) args.Item;
        //do something
//сделай что-нибудь
    }
}
};
};
```
```

For an example of how to use triggers, see the [Script a trigger](script-a-trigger.md) tutorial.
Пример использования триггеров см. в руководстве [Скрипт триггера](script-a-trigger.md).

## See also
## Смотрите также

* [Tutorial: Script a trigger](script-a-trigger.md)
* [Учебник: Скрипт триггера](script-a-trigger.md)
* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Events](../scripts/events.md)
* [События](../scripts/events.md)
