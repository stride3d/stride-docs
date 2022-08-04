# Nested prefabs
# Вложенные префабы

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

You can add prefabs to other prefabs. These are called **nested prefabs**.
Вы можете добавлять префабы к другим префабам.  Они называются **вложенными префабами**.

For example, imagine you have a table prefab, a chair prefab, and a television prefab. Then you create a living room prefab, which in turn contains the table, chair, and television prefabs. You might then create a house prefab, which in turn contains the living room prefab, which in turn contains the table, chair, and television prefabs. There's no limit to how many prefabs you can nest.
Например, представьте, что у вас есть сборный стол, сборный стул и сборный телевизор.  Затем вы создаете префаб гостиной, который, в свою очередь, содержит префабы стола, стула и телевизора.  Затем вы можете создать префаб дома, который, в свою очередь, содержит префаб гостиной, который, в свою очередь, содержит префаб стола, стула и телевизора.  Количество сборных элементов, которые вы можете вложить, не ограничено.

If you modify a nested prefab, all the dependent prefabs inherit the change automatically. For example, if you change the shape of the table prefab, it changes in the living room and house prefabs too.
Если вы измените вложенный префаб, все зависимые префабы автоматически наследуют это изменение.  Например, если вы измените форму заготовки стола, она изменится и в гостиной, и в сборных домах.

This video demonstrates an example of nested prefabs:
В этом видео демонстрируется пример вложенных префабов:

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/create-nested-prefab.jpg">
<цикл автовоспроизведения видео class=
   <source src="media/create-nested-prefab.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

In the center pane, we already have a prefab named **Lamp**. In the right pane, we create a new prefab named **Boxes**, comprising several box entities positioned together. We add the Boxes prefab to the Lamp prefab. Changes made to the Boxes prefab are reflected in the Lamp prefab. These are in turn reflected in the instances of the Lamp prefab in the scene (left pane).
В центральной панели у нас уже есть префаб с именем **Lamp**.  На правой панели мы создаем новый префаб с именем **Boxes**, состоящий из нескольких объектов-боксов, расположенных вместе.  Мы добавляем префаб Boxes к префабу Lamp.  Изменения, внесенные в префаб Boxes, отражаются в префабе Lamp.  Они, в свою очередь, отражаются в экземплярах префаба Lamp в сцене (левая панель).

## See also
## Смотрите также

* [Prefab index](index.md)
* [Индекс префаба](index.md)
* [Create a prefab](create-a-prefab.md)
* [Создать префаб](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Использовать префабы](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Редактировать префабы](edit-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Переопределить свойства префаба](override-prefab-properties.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
