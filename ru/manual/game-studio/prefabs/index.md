# Prefabs
# Префабы

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

A **prefab** is a "master" version of an object that you can reuse wherever you need. When you change the prefab, every instance of the prefab changes too.
**Сборник** — это «основная» версия объекта, которую вы можете повторно использовать везде, где вам нужно.  Когда вы меняете префаб, каждый экземпляр префаба тоже меняется.

For example, imagine we make a simple tree object by assembling several entities. The entities contain components such as models, materials, physics colliders, and so on, which in turn reference assets. 
Например, представьте, что мы делаем простой объект дерева, собирая несколько сущностей.  Сущности содержат такие компоненты, как модели, материалы, физические коллайдеры и т. д., которые, в свою очередь, ссылаются на активы.

Now imagine we want to place several trees around the scene. We could simply duplicate the tree, but if we want to modify it later, we have to edit each one individually. This is time-consuming and leaves room for mistakes.
Теперь представьте, что мы хотим разместить вокруг сцены несколько деревьев.  Мы могли бы просто продублировать дерево, но если мы хотим изменить его позже, нам придется редактировать каждое дерево по отдельности.  Это отнимает много времени и оставляет место для ошибок.

The better approach is to make the a tree prefab. Then we can place as many trees as we like, and when we modify the prefab, every tree is instantly updated to match. This saves lots of time.
Лучший подход состоит в том, чтобы сделать сборное дерево.  Затем мы можем разместить столько деревьев, сколько захотим, и когда мы изменим префаб, каждое дерево мгновенно обновится, чтобы соответствовать ему.  Это экономит много времени.

![Creating trees with prefabs](media/create-prefab-trees.gif)
![Создание деревьев из префабов](media/create-prefab-trees.gif)

The most common use for prefabs is to create a small piece of your scene — like a car, NPC, or item of furniture — and duplicate it as many times as you need. When you need to modify it — for example, if you want to change its model — you can change it in one place and apply the change everywhere at once.
Чаще всего префабы используются для создания небольшого фрагмента вашей сцены — например, автомобиля, NPC или предмета мебели — и дублирования его столько раз, сколько вам нужно.  Когда вам нужно изменить его — например, если вы хотите изменить его модель — вы можете изменить его в одном месте и применить изменение сразу везде.

You can make any entity or combination of entities of a prefab; they can be as simple or as complex as you need. Prefabs can even contain other prefabs (known as [nested prefabs](nested-prefabs.md)).
Вы можете сделать любую сущность или комбинацию сущностей префаба;  они могут быть настолько простыми или настолько сложными, насколько вам нужно.  Префабы могут даже содержать другие префабы (известные как [вложенные префабы] (nested-prefabs.md)).

You can [override specific properties](override-prefab-properties.md) in each prefab instance.
Вы можете [переопределить определенные свойства](override-prefab-properties.md) в каждом экземпляре префаба.

## See also
## Смотрите также

* [Create a prefab](create-a-prefab.md)
* [Создать префаб](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Использовать префабы](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Редактировать префабы](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
* [Archetypes](../archetypes.md)
* [Архетипы](../archetypes.md)
