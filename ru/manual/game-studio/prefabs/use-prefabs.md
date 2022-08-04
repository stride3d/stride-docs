# Use prefabs
# Использовать готовые сборки

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

To instantiate a prefab, drag and drop it from the **Asset View** to the scene.
Чтобы создать префаб, перетащите его из **Asset View** на сцену.

You can re-arrange entities in the prefab instance just like you do with other entities:
Вы можете переупорядочивать сущности в префабе так же, как и с другими сущностями:

* create child and parent entities
* создавать дочерние и родительские сущности
* drag entities to add them to the prefab instance
* перетащите объекты, чтобы добавить их в сборный экземпляр
* drag entities from the prefab instance to make them independent entities
* перетащите объекты из сборного экземпляра, чтобы сделать их независимыми объектами

## Manage prefab parent entities
## Управление сборными родительскими объектами

By default, Game Studio creates an empty parent entity with the prefab's entities as its children. The Entity Tree displays the prefab parent name in green next to the child entities.
По умолчанию Game Studio создает пустой родительский объект с объектами префаба в качестве его дочерних элементов.  В дереве сущностей имя родительского элемента префаба отображается зеленым цветом рядом с дочерними элементами.

![Prefab parent and children in Entity Tree](media/prefabs-in-scene-editor.png)
![Родительский и дочерний префабы в дереве сущностей](media/prefabs-in-scene-editor.png)

This is useful because you can manage the prefab entities as a group and maintain their relative positions. For example, imagine you have a car prefab assembled from several entities (a body, seats, four wheels, etc). You want its component entities to stay grouped together as you move the car around the scene. You can do this by moving the prefab parent entity.
Это полезно, потому что вы можете управлять сборными объектами как группой и сохранять их относительное положение.  Например, представьте, что у вас есть сборная машина, собранная из нескольких элементов (кузов, сиденья, четыре колеса и т. д.).  Вы хотите, чтобы его составные объекты оставались сгруппированными вместе, когда вы перемещаете машину по сцене.  Вы можете сделать это, переместив родительский объект префаба.

If you don't want to create a parent entity with the prefab, hold **Alt** when you drop the prefab into the scene. This is useful if you don't care about the relative positions of the prefab's entities and don't need to move them together as a group. For example, imagine you have a prefab composed of several crate entities arranged in a random fashion. It's not important that the crates maintain their relative position after you place them; in fact, several identical stacks of "randomly" arranged crates looks artificial.
Если вы не хотите создавать родительский объект с префабом, удерживайте **Alt**, когда перетаскиваете префаб на сцену.  Это полезно, если вас не волнует относительное расположение объектов префаба и вам не нужно перемещать их вместе как группу.  Например, представьте, что у вас есть префаб, состоящий из нескольких сущностей ящиков, расположенных случайным образом.  Неважно, чтобы ящики сохраняли свое относительное положение после того, как вы их поставили;  на самом деле несколько одинаковых стопок «случайно» расставленных ящиков выглядят искусственными.

In this case, a parent entity is unnecessary. Instead, you can create several instances of the prefab, then re-arrange their individual crate entities to create the effect you need.
В этом случае родительский объект не нужен.  Вместо этого вы можете создать несколько экземпляров префаба, а затем переупорядочить их отдельные сущности для создания нужного вам эффекта.

| Relative positions maintained                   | Relative positions ignored
|  Относительные позиции сохраняются |  Относительные позиции игнорируются
|-------------------------------------------------|
|-------------------------------------------------  |
| ![Boxes duplicated](media/boxes-duplicated.jpg) | ![Boxes duplicated](media/boxes-random.jpg)
|  ![Боксы продублированы](media/boxes-duplicated.jpg) |  ![Коробки продублированы](media/boxes-random.jpg)

## Break link to prefab
## Разорвать ссылку на префаб

After you add a prefab instance, you can break the link between the prefab and any of its child entities. This means the child entity is no longer affected by changes you make to the prefab.
После добавления экземпляра префаба вы можете разорвать связь между префабом и любым из его дочерних объектов.  Это означает, что на дочернюю сущность больше не влияют изменения, которые вы вносите в префаб.

To do this, in the **Scene Editor**, right-click a child entity or entities and select **Break link to prefab**.
Для этого в **Редакторе сцен** щелкните правой кнопкой мыши дочерний объект или объекты и выберите **Разорвать связь с префабом**.

![Break link between child and prefab](media/use-prefabs-break-link-to-prefab.gif)
![Разорвать связь между дочерним элементом и префабом](media/use-prefabs-break-link-to-prefab.gif)

## Instantiate and add prefabs at runtime
## Создавать и добавлять префабы во время выполнения

To use prefabs at runtime, you need to instantiate them and then add them to the scene in code.
Чтобы использовать префабы во время выполнения, вам нужно создать их экземпляры, а затем добавить их в сцену в коде.

> [!Note]
> [!Примечание]
> Just calling `Instantiate()` isn't enough to add a prefab instance to the scene. You also need to use `Add()`. For example, if your prefab contains a model, the model is invisible until you add the prefab instance. Likewise, if your prefab contains a script, the script won't work until you add the prefab instance.
> Простого вызова `Instantiate()` недостаточно, чтобы добавить экземпляр префаба на сцену.  Вам также необходимо использовать `Add()`.  Например, если ваш префаб содержит модель, модель будет невидимой, пока вы не добавите экземпляр префаба.  Точно так же, если ваш префаб содержит скрипт, скрипт не будет работать, пока вы не добавите экземпляр префаба.

If you have a prefab named *MyBulletPrefab* in the root folder of your project, you can instantiate and add it with the following code:
Если у вас есть префаб с именем *MyBulletPrefab* в корневой папке вашего проекта, вы можете создать и добавить его с помощью следующего кода:

```cs
```CS
private void InstantiateBulletPrefab()
частная пустота InstantiateBulletPrefab()
{
{
    // Note that "MyBulletPrefab" refers to the name and location of your prefab asset
// Обратите внимание, что «MyBulletPrefab» относится к имени и местоположению вашего сборного актива
    var myBulletPrefab = Content.Load<Prefab>("MyBulletPrefab");
var myBulletPrefab = Content.Load<Prefab>(

    // Instantiate a prefab
// Создаем префаб
    var instance = myBulletPrefab.Instantiate();
var instance = myBulletPrefab.Instantiate();
    var bullet = instance[0];
вар пуля = экземпляр [0];

    // Change the X coordinate
// Изменяем координату X
    bullet.Transform.Position.X = 20.0f;
bullet.Transform.Position.X = 20.0f;

    // Add the bullet to the scene
// Добавляем пулю на сцену
    SceneSystem.SceneInstance.RootScene.Entities.Add(bullet);
SceneSystem.SceneInstance.RootScene.Entities.Add(пуля);
}
}
```
```

> [!Note]
> [!Примечание]
> At runtime, changes made to prefabs (*myBulletPrefab* in the above example) don't affect existing prefab instances (*bullet* in the above example). Subsequent calls to ``Instantiate(Prefab)`` include new changes.
> Во время выполнения изменения, внесенные в префабы (*myBulletPrefab* в приведенном выше примере), не влияют на существующие экземпляры префабов (*bullet* в приведенном выше примере).  Последующие вызовы ``Instantiate(Prefab)`` включают новые изменения.
> For example, imagine you have a tree prefab that contains a script to change the tree color from green to red at runtime. The script won't affect existing instances of the prefab; it can only change the color of **future** instances. This means prefabs instantiated after the code runs will have the new color, but existing prefabs won't.
> Например, представьте, что у вас есть префаб дерева, содержащий скрипт для изменения цвета дерева с зеленого на красный во время выполнения.  Скрипт не повлияет на существующие экземпляры префаба;  он может изменить цвет только **будущих** экземпляров.  Это означает, что префабы, созданные после выполнения кода, будут иметь новый цвет, а существующие префабы — нет.

## See also
## Смотрите также

* [Prefab index](index.md)
* [Индекс префаба](index.md)
* [Create a prefab](create-a-prefab.md)
* [Создать префаб](create-a-prefab.md)
* [Edit prefabs](edit-prefabs.md)
* [Редактировать префабы](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
