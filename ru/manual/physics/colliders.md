# Colliders
# Коллайдеры

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

To use physics in your project, add a **collider** component to an entity. 
Чтобы использовать физику в своем проекте, добавьте к объекту компонент **коллайдер**.

Colliders define the shapes and rules of physics objects. There are three types:
Коллайдеры определяют формы и правила физических объектов.  Есть три типа:

* [static colliders](static-colliders.md) don't move (eg walls, floors, heavy objects, etc)
* [статические коллайдеры](static-colliders.md) не двигаются (например, стены, полы, тяжелые предметы и т. д.)
* [rigidbodies](rigid-bodies.md) are moved around by forces such as collision and gravity (eg balls, barrels, etc)
* [твердые тела](rigid-bodies.md) перемещаются под действием таких сил, как столкновение и гравитация (например, шары, бочки и т. д.)
* [characters](characters.md) are controlled by user input (ie player characters)
* [персонажи](characters.md) контролируются пользовательским вводом (т.е. персонажи игроков)

You can also: 
Вы также можете:

* set the [shape of collider components](collider-shapes.md)
* установить [форму компонентов коллайдера](collider-shapes.md)
* make [triggers](triggers.md), and detect when objects pass through them
* создавать [триггеры](triggers.md) и обнаруживать, когда объекты проходят через них
* constrict collider movement with [constraints](constraints.md)
* ограничить движение коллайдера с помощью [constraints](constraints.md)

## How colliders interact
## Как взаимодействуют коллайдеры

Colliders interact according to the table below.
Коллайдеры взаимодействуют согласно таблице ниже.

|   | Kinematic objects   | Kinematic triggers   | Rigidbody colliders   | Rigidbody triggers   | Static colliders        | Static triggers   
|  |  Кинематические объекты |  Кинематические триггеры |  Коллайдеры с жестким корпусом |  Жесткие триггеры |  Статические коллайдеры |  Статические триггеры
|---|-------------|---------------------|-------------|---------------------|----------|------------------
|---|--------------|-------|---------  ----|---------------------|-----------|------------  ------
| Kinematic objects        | Collisions           | Collisions  | Collisions and dynamic| Collisions   | Collisions    | Collisions     
|  Кинематические объекты |  Столкновения |  Столкновения |  Столкновения и динамика|  Столкновения |  Столкновения |  Столкновения
| Kinematic triggers | Collisions           | Collisions   |Collisions           | Collisions     | Collisions     | Collisions   
|  Кинематические триггеры |  Столкновения |  Столкновения |Столкновения |  Столкновения |  Столкновения |  Столкновения
| Rigidbody colliders          | Collisions and dynamic     | Collisions     | Collisions and dynamic     | Collisions     | Collisions and dynamic| Collisions
|  Коллайдеры с жестким корпусом |  Столкновения и динамические |  Столкновения |  Столкновения и динамические |  Столкновения |  Столкновения и динамика|  Столкновения
| Rigidbody triggers | Collisions         | Collisions  | Collisions | Collisions     | Collisions     | Collisions
|  Жесткие триггеры |  Столкновения |  Столкновения |  Столкновения |  Столкновения |  Столкновения |  Столкновения
| Static colliders| Collisions| Collisions| Collisions and dynamic | Collisions   | Nothing   | Nothing
|  Статические коллайдеры|  Столкновения|  Столкновения|  Столкновения и динамические |  Столкновения |  Ничего |  Ничего такого
|Static triggers     | Collisions     | Collisions     | Collisions     | Collisions    | Nothing    | Nothing
|Статические триггеры |  Столкновения |  Столкновения |  Столкновения |  Столкновения |  Ничего |  Ничего такого

* "Collisions" refers to collision information and events only. This means the collision is detected in the code, but the objects don't bump into each other (no dynamic response).
* «Столкновения» относится только к информации о столкновениях и событиях.  Это означает, что столкновение обнаружено в коде, но объекты не сталкиваются друг с другом (нет динамического ответа).

* "Dynamic" means both collision information and events, plus dynamic response (ie the colliders bump into each other instead of passing through).
* «Динамический» означает как информацию о столкновении, так и события, а также динамический отклик (т. е. коллайдеры сталкиваются друг с другом, а не проходят сквозь них).

For example, rigidbody colliders dynamically collide with static colliders (ie bump into them). However, no objects dynamically collide with triggers; collisions are detected in the code, but objects simply pass through.
Например, коллайдеры с твердым телом динамически сталкиваются со статическими коллайдерами (т.е. сталкиваются с ними).  Однако никакие объекты не сталкиваются с триггерами динамически;  коллизии обнаруживаются в коде, но объекты просто проходят.

## Show colliders in the Scene Editor
## Показать коллайдеры в редакторе сцен

By default, colliders are invisible in the Scene Editor. To show them:
По умолчанию коллайдеры невидимы в редакторе сцен.  Чтобы показать их:

1. In the Game Studio toolbar, in the top right, click the **Display gizmo options** icon.
1. На панели инструментов Game Studio в правом верхнем углу щелкните значок **Параметры гизмо отображения**.

   ![Display gizmo options](media/display-gizmo-options.png)
![Параметры отображения gizmo](media/display-gizmo-options.png)

2. Select **Physics**.
2. Выберите **Физика**.

    ![Display physics option](media/display-physics-option.png)
![Отображать параметры физики](media/display-physics-option.png)

The Scene Editor displays collider shapes.
Редактор сцен отображает формы коллайдера.

![Display physics](media/display-physics.png)
![Отображение физики](media/display-physics.png)

## Show colliders at runtime
## Показать коллайдеры во время выполнения

You can make colliders visible at runtime, which is useful for debugging problems with physics. To do this, use:
Вы можете сделать коллайдеры видимыми во время выполнения, что полезно для отладки проблем с физикой.  Для этого используйте:

``
``
this.GetSimulation().ColliderShapesRendering = true;
this.GetSimulation().ColliderShapesRendering = true;
``
``

> [!Note]
> [!Примечание]
> Collider shapes for infinite planes are always invisible.
> Формы коллайдера для бесконечных плоскостей всегда невидимы.

### Keyboard shortcut
### Сочетание клавиш

To show or hide collider shapes at runtime with a keyboard shortcut, use the **Debug physics shapes** script.
Чтобы показать или скрыть формы коллайдера во время выполнения с помощью сочетания клавиш, используйте скрипт **Отладка физических фигур**.

1. In the **Asset View**, click **Add asset**.
1. В **Просмотре активов** нажмите **Добавить актив**.

2. Select **Scripts** > **Debug physics shapes**.
2. Выберите **Скрипты** > **Отладка физических фигур**.

    ![Add debug physics shape script](media/add-debug-physics-shapes-script.png)
![Добавить сценарий формы отладки физики](media/add-debug-physics-shapes-script.png)

3. In the Game Studio toolbar, click **Reload assemblies and update scripts**.
3. На панели инструментов Game Studio нажмите **Перезагрузить сборки и обновить скрипты**.

    ![Reload assemblies](../platforms/media/reload-assemblies.png)
![Перезагрузить сборки](../platforms/media/reload-assemblies.png)

4. Add the **Debug physics shapes** script as a component to an entity in the scene. It doesn't matter which entity.
4. Добавьте скрипт **Отладка физических фигур** в качестве компонента объекта в сцене.  Неважно, какая сущность.

    ![Add debug physics shapes script component](media/add-debug-physics-shapes-component.png)
![Добавить компонент скрипта отладки физических фигур](media/add-debug-physics-shapes-component.png)

The script binds the collider shape visibility to **Left Shift + Left Ctrl + P**, so you can turn it on and off at runtime. You can edit the script to bind a different key combination.
Скрипт привязывает видимость формы коллайдера к **Left Shift + Left Ctrl + P**, поэтому вы можете включать и выключать его во время выполнения.  Вы можете отредактировать скрипт, чтобы привязать другую комбинацию клавиш.

## See also
## Смотрите также

* [Collider shapes](collider-shapes.md)
* [Формы коллайдера](collider-shapes.md)
* [Static colliders](static-colliders.md)
* [Статические коллайдеры](static-colliders.md)
* [Rigidbodies](rigid-bodies.md)
* [Жесткие тела](rigid-bodies.md)
* [Kinematic rigidbodies](kinematic-rigid-bodies.md)
* [Кинематические жесткие тела](кинематические-жесткие-тела.md)
* [Simulation](simulation.md)
* [Симулятор](simulation.md)
* [Physics tutorials](tutorials.md)
* [Учебники по физике](tutorials.md)
