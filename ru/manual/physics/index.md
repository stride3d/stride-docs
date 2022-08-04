# Physics
# Физика

![Physics in Stride](media/physics-index-physics-in-stride.png)
![Physics in Stride](media/physics-index-physics-in-stride.png)

Stride simulates real-world physics such as gravity and collisions. This section explains how physics components work, how to add them to your project, and how to use them with scripts.
Stride имитирует физику реального мира, такую ​​как гравитация и столкновения.  В этом разделе объясняется, как работают физические компоненты, как добавить их в проект и как использовать их со скриптами.

## In this section
## В этой секции

* [Colliders](colliders.md): Create physics by adding collider components to entities
* [Коллайдеры](colliders.md): Создавайте физику, добавляя компоненты коллайдера к сущностям.
    * [Static colliders](static-colliders.md): Colliders that don't move
* [Статические коллайдеры](static-colliders.md): Коллайдеры, которые не двигаются.
    * [Rigidbodies](rigid-bodies.md): Moving objects, affected by gravity and collisions
* [Rigidbodies](rigid-bodies.md): Движущиеся объекты, подверженные гравитации и столкновениям
    * [Kinematic rigidbodies](kinematic-rigid-bodies.md): Physics objects controlled by scripts
* [Кинематические твердые тела](kinematic-rigid-bodies.md): Физические объекты, управляемые скриптами
    * [Characters](characters.md): Colliders for characters (such as player characters and NPCs)
* [Персонажи](characters.md): коллайдеры для персонажей (таких как персонажи игроков и неигровые персонажи)
    * [Collider shapes](collider-shapes.md): Define the shape of collider components
* [Формы коллайдера](collider-shapes.md): определение формы компонентов коллайдера.
    * [Triggers](triggers.md): Use triggers to detect passing objects
* [Триггеры](triggers.md): Используйте триггеры для обнаружения проходящих объектов
    * [Constraints](constraints.md): Create appealing and realistic physics
* [Ограничения](constraints.md): Создайте привлекательную и реалистичную физику.
* [Raycasting](raycasting.md): Trace intersecting objects
* [Raycasting](raycasting.md): Трассировка пересекающихся объектов
* [Simulation](simulation.md): How Stride controls physics
* [Simulation](simulation.md): Как Stride управляет физикой

### Tutorials
### Учебники

* [Create a bouncing ball](create-a-bouncing-ball.md): Use the static collider and rigidbody components to create a ball bouncing on a floor
* [Создать прыгающий мяч](create-a-bouncing-ball.md): Используйте компоненты статического коллайдера и твердого тела, чтобы создать мяч, прыгающий по полу.
* [Script a trigger](script-a-trigger.md): Create a trigger that doubles the size of a ball when the ball passes through it
* [Сценарий триггера](script-a-trigger.md): Создайте триггер, который удваивает размер мяча, когда мяч проходит через него.

## Further reference
## Дополнительная ссылка

Stride uses the open-source [Bullet Physics](http://bulletphysics.org/wordpress/) engine. For detailed information, see the [Bullet User Manual](https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf).
Stride использует движок Bullet Physics с открытым исходным кодом (http://bulletphysics.org/wordpress/).  Для получения подробной информации см. [Руководство пользователя Bullet] (https://github.com/bulletphysics/bullet3/blob/master/docs/Bullet_User_Manual.pdf).
