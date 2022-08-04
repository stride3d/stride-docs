# Collider shapes
# Формы коллайдера

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

For [colliders](colliders.md) to interact, you need to set their shape in the **Property Grid**. You can specify a geometric shape, or use a collider shape asset.
Чтобы [colliders](colliders.md) взаимодействовали, вам нужно установить их форму в **Сетке свойств**.  Вы можете указать геометрическую форму или использовать актив формы коллайдера.

![Select a collider shape](media/select-collider-shape.png)
![Выберите форму коллайдера](media/select-collider-shape.png)

Components can have multiple intersecting shapes, and don't have to match the entity model, if it has one. Each shape has additional properties including size, orientation, offset, and so on.
Компоненты могут иметь несколько пересекающихся форм и не обязаны соответствовать модели сущности, если она есть.  Каждая фигура имеет дополнительные свойства, включая размер, ориентацию, смещение и т. д.

## Types of collider shape
## Типы формы коллайдера

### Box
### Коробка

![Box](media/box.png)
![Коробка](media/box.png)

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Is 2D | Makes the box infinitely flat in one dimension. |
|  2D |  Делает коробку бесконечно плоской в ​​одном измерении.  |
| Size    | The box size in XYZ values. |
|  Размер |  Размер коробки в значениях XYZ.  |
| Local offset     | The box position relative its entity.|
|  Локальное смещение |  Позиция блока относительно его сущности.|
| Local rotation      | The box rotation in XYZ values.|
|  Местное вращение |  Поворот блока в значениях XYZ.|

### Capsule
### Капсула

![Capsule](media/capsule.png)
![Капсула](media/capsule.png)

The capsule shape is especially useful for character components, as its curved base lets the entity move to higher planes (eg when climbing staircases).
Форма капсулы особенно полезна для компонентов персонажа, поскольку ее изогнутое основание позволяет сущности перемещаться на более высокие уровни (например, при подъеме по лестнице).

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Is 2D | Makes the capsule infinitely flat in one dimension.|
|  2D |  Делает капсулу бесконечно плоской в ​​одном измерении.|
| Length | The length of the capsule.|
|  Длина |  Длина капсулы.|
| Radius | The radius of the capsule.|
|  Радиус |  Радиус капсулы.|
| Orientation | The axis along which the shape is stretched (X, Y, or Z).|
|  Ориентация |  Ось, вдоль которой растягивается фигура (X, Y или Z).|
| Local offset     | The capsule position relative to its entity.|
|  Локальное смещение |  Положение капсулы относительно ее сущности.|
| Local rotation      | The capsule rotation in XYZ values.|
|  Местное вращение |  Вращение капсулы в значениях XYZ.|

### Cone
### Конус

![Cone](media/cone.png)
![Конус](media/cone.png)

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Height | The height of the cone.|
|  Высота |  Высота конуса.|
| Radius | The radius of the cone at the bottom end.|
|  Радиус |  Радиус конуса на нижнем конце.|
| Orientation | The axis along which the shape is stretched (X, Y, or Z).|
|  Ориентация |  Ось, вдоль которой растягивается фигура (X, Y или Z).|
| Local offset     | The cone position relative to its entity.|
|  Локальное смещение |  Положение конуса относительно его сущности.|
| Local rotation      | The cone rotation in XYZ values.|
|  Местное вращение |  Вращение конуса в значениях XYZ.|

### Cylinder
### Цилиндр

![Cylinder](media/cylinder.png)
![Цилиндр](media/cylinder.png)

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Height | The length of the cylinder.|
|  Высота |  Длина цилиндра.|
| Radius | The radius of the cylinder.|
|  Радиус |  Радиус цилиндра.|
| Orientation | Sets the axis along which the shape is stretched (X, Y, or Z).|
|  Ориентация |  Задает ось, вдоль которой растягивается фигура (X, Y или Z).|
| Local offset     | The cylinder position relative to its entity.|
|  Локальное смещение |  Положение цилиндра относительно его сущности.|
| Local rotation      | The cylinder  rotation in XYZ values.|
|  Местное вращение |  Вращение цилиндра в значениях XYZ.|

### Sphere
### Сфера

![Sphere](media/sphere.png)
![Сфера](media/sphere.png)

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Is 2D | Makes the sphere infinitely flat in one dimension. |
|  2D |  Делает сферу бесконечно плоской в ​​одном измерении.  |
| Radius | The radius of the sphere.|
|  Радиус |  Радиус сферы.|
| Local offset     | The sphere position relative to its entity.|
|  Локальное смещение |  Положение сферы относительно ее сущности.|

### Infinite plane
### Бесконечный самолет

![Infinite plane](media/infinite-plane.png)
![Бесконечный самолет](media/infinite-plane.png)

The infinite plane covers an infinite distance across one dimension.
Бесконечная плоскость покрывает бесконечное расстояние в одном измерении.
Think of it like a wall or floor stretching into the distance for ever.
Думайте об этом как о стене или полу, уходящем вдаль навсегда.
You can use several infinite planes together to box users in and stop them "tunneling" outside the level.
Вы можете использовать несколько бесконечных плоскостей вместе, чтобы ограничить пользователей и остановить их «туннелирование» за пределами уровня.

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Normal  | Which vector (X, Y, or Z) is perpendicular to the plane. For example, to make an infinite floor, set the normal property to: _X:0, Y:1, Z:0_. |
|  Нормальный |  Какой вектор (X, Y или Z) перпендикулярен плоскости.  Например, чтобы сделать бесконечный пол, установите для свойства normal значение: _X:0, Y:1, Z:0_.  |
| Offset     | The plane position relative to its entity.|
|  Смещение |  Положение плоскости относительно ее сущности.|

### Asset
### Актив

Assigns a collider shape from a collider shape asset (see **Collider shape assets** below).
Назначает форму коллайдера из ресурса формы коллайдера (см. **Активы формы коллайдера** ниже).

| Property       | Description |
|  Недвижимость |  Описание |
| -------------- |-------------| 
|  -------------- |--------------|
| Shape | The collider shape asset used to generate the collider shape.|
|  Форма |  Ресурс формы коллайдера, используемый для создания формы коллайдера. |

## Collider shape assets
## Ассеты формы коллайдера

You can also create **collider shape assets** and use them as your collider shape. This means you can edit the collider shape asset and automatically update it in every entity that uses it.
Вы также можете создать **активы формы коллайдера** и использовать их в качестве формы коллайдера.  Это означает, что вы можете редактировать актив формы коллайдера и автоматически обновлять его в каждой сущности, которая его использует.

## Create a collider shape asset
## Создать актив формы коллайдера

1. In the **Asset View** (bottom by default), click **Add asset**.
1. В **Просмотре активов** (по умолчанию внизу) нажмите **Добавить актив**.

2. Select **Physics**, then select the shape you want to create.
2. Выберите **Физика**, затем выберите фигуру, которую хотите создать.

    ![Create collider shape asset](media/create-collider-shape-asset.png)
![Создать актив формы коллайдера](media/create-collider-shape-asset.png)

Game Studio creates the new collider shape asset in the **CollisionMeshes** folder.
Game Studio создает новый актив формы коллайдера в папке **CollisionMeshes**.

![Collider shape asset in Asset View](media/collider-shape-in-asset-view.png)
![Ресурс формы коллайдера в представлении активов](media/collider-shape-in-asset-view.png)

### Create a collider shape asset from a model
### Создание актива формы коллайдера из модели

This is useful to quickly create a collider shape that matches a model.
Это полезно для быстрого создания формы коллайдера, соответствующей модели.

1. In the **Asset View** (bottom by default), click **Add asset**.
1. В **Просмотре активов** (по умолчанию внизу) нажмите **Добавить актив**.

2. Select **Physics** > **Convex hull**.
2. Выберите **Физика** > **Выпуклая оболочка**.

    The **Select an asset** window opens.
Откроется окно **Выберите объект**.

    ![Select model](media/select-model.png)
![Выберите модель](media/select-model.png)

3. Browse to the model asset you want to create a collider shape asset from and click **OK**.
3. Перейдите к активу модели, из которого вы хотите создать актив формы коллайдера, и нажмите **ОК**.

Game Studio creates a collider shape asset from the model.
Game Studio создает актив формы коллайдера из модели.

## Use a collider shape asset
## Использовать актив формы коллайдера

1. Under the **static collider** or **rigidbody** properties, under **Collider Shapes**, select **Asset**. 
1. В свойствах **статического коллайдера** или **жесткого тела** в разделе **Формы коллайдера** выберите **Актив**.

    ![Select collider shape asset](media/select-asset-collider-shape.png)
![Выберите актив формы коллайдера](media/select-asset-collider-shape.png)

2. Next to **Shape**, specify the collider shape asset you want to use.
2. Рядом с **Shape** укажите актив формы коллайдера, который вы хотите использовать.

    ![Select collider shape asset](media/select-collider-shape-asset.png)
![Выберите актив формы коллайдера](media/select-collider-shape-asset.png)

    To do this, drag the asset from the **Asset View** to the **Shape** field in the Property Grid. Alternatively, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**) and browse to the asset.
Для этого перетащите ресурс из **представления объекта** в поле **форма** в таблице свойств.  Либо нажмите ![Значок руки](~/manual/game-studio/media/hand-icon.png) (**Выберите объект**) и перейдите к нему.

## See also
## Смотрите также

* [Colliders](colliders.md)
* [Коллайдеры](colliders.md)
* [Tutorial: Create a bouncing ball](create-a-bouncing-ball.md)
* [Учебник: Создание прыгающего мяча](create-a-bouncing-ball.md)
* [Tutorial: Script a trigger](script-a-trigger.md)
* [Учебник: Скрипт триггера](script-a-trigger.md)
