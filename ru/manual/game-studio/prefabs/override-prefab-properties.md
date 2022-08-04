# Override prefab properties
# Переопределить свойства префаба

<span class="label label-doc-level">Intermediate</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=
<span class="label label-doc-audience">Designer</span>
<span class=

If you modify a property in a prefab instance, the instance no longer inherits changes from the prefab for that property. This is called an **override**.
Если вы измените свойство в экземпляре префаба, экземпляр больше не наследует изменения этого свойства из префаба.  Это называется **переопределением**.

![How prefabs work](media/create-manage-prefabs-how-prefabs-work.png)
![Как работают префабы](media/create-manage-prefabs-how-prefabs-work.png)

In the following video, the **Lamp** prefab contains several box entities that belong to the **Boxes** parent. When we delete the boxes from the instance, only that instance is affected. The prefab (shown on the right) is unchanged.
В следующем видео префаб **Lamp** содержит несколько объектов-боксов, принадлежащих родительскому элементу **Boxes**.  Когда мы удаляем ящики из экземпляра, затрагивается только этот экземпляр.  Префаб (показан справа) не изменился.

If we add another box to the **Boxes** parent in the prefab, it doesn't appear in the overridden instance. That's because we deleted the **Boxes** parent from that instance.
Если мы добавим еще один блок к родительскому элементу **Boxes** в префабе, он не появится в переопределенном экземпляре.  Это потому, что мы удалили родительский элемент **Boxes** из этого экземпляра.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
<цикл автоматического воспроизведения видео class=
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## View overridden properties
## Просмотр переопределенных свойств

In the **Property Grid**, you can see which properties of the prefab instance differ from the base values in the prefab.
В **Сетке свойств** можно увидеть, какие свойства экземпляра префаба отличаются от базовых значений в префабе.

* **Overridden** and **unique** properties are **white and bold**:
* **Переопределенные** и **уникальные** свойства отмечены **белым цветом и жирным шрифтом**:

    ![Overridden properties are white](media/use-prefabs-overriden-properties-appear-white.png)
![Переопределенные свойства имеют белый цвет](media/use-prefabs-overriden-properties-appear-white.png)

* **Identical** properties are **gray**:
* **Идентичные** свойства отмечены **серым цветом**:

    ![Identical properties are gray](media/use-prefabs-identical-properties-appear-gray.png)
![Идентичные свойства выделены серым цветом](media/use-prefabs-identical-properties-appear-gray.png)

### Reset a property to the prefab value
### Сбросить свойство до предварительно заданного значения

To reset an overridden property to the value in the parent prefab, right-click the property and click **Reset to base value**.
Чтобы сбросить переопределенное свойство до значения в родительском префабе, щелкните свойство правой кнопкой мыши и выберите **Восстановить базовое значение**.

![Reset to base value](media/use-prefabs-reset-property-to-base-value.png)
![Сбросить до базового значения](media/use-prefabs-reset-property-to-base-value.png)

## Example
## Пример

In this example, we have a prefab of a futuristic lamppost.
В этом примере у нас есть префаб футуристического фонарного столба.

![Lamppost](media/lamppost-prefab.jpg)
![Фонарный столб](media/lamppost-prefab.jpg)

The lamppost prefab is composed of three entities: a column, a pillar, and a spot light. These are listed in the Entity Tree in the Prefab Editor.
Сборный фонарный столб состоит из трех объектов: колонны, столба и прожектора.  Они перечислены в дереве сущностей в редакторе префабов.

![Add entities](media/lamppost-prefab-entities.png)
![Добавить объекты](media/lamppost-prefab-entities.png)

Let's add five instances of the lamppost prefab to our scene.
Давайте добавим в нашу сцену пять экземпляров префаба фонарного столба.

![Five lampposts](media/lamppost-prefab-instances.jpg)
![Пять фонарных столбов](media/lamppost-prefab-instances.jpg)

Now we'll modify one of the instances. In the Scene Editor, we select one **spot light** entity and, in the spot light component properties, change its color to red. The Property Grid displays the modified **Color** property in **bold white**. This means it's overriding the prefab property.
Теперь мы изменим один из экземпляров.  В редакторе сцен мы выбираем один объект **прожектор** и в свойствах компонента прожектора меняем его цвет на красный.  В сетке свойств измененное свойство **Цвет** отображается **жирным белым шрифтом**.  Это означает, что он переопределяет свойство prefab.

![Overridden property](media/override-prefab-property.png)
![Переопределенное свойство](media/override-prefab-property.png)

We can see this in the scene view.
Мы можем видеть это в представлении сцены.

![Pink spotlight](media/pink-lamppost-prefab.jpg)
![Розовый прожектор](media/pink-lamppost-prefab.jpg)

Now let's see what happens when we go back to the Prefab Editor and change the color of the spot light in the prefab to green.
Теперь давайте посмотрим, что произойдет, когда мы вернемся в редактор префабов и изменим цвет прожектора в префабе на зеленый.

![Change color to green](media/change-prefab-color-to-green.png)
![Изменить цвет на зеленый](media/change-prefab-color-to-green.png)

Four of the lampposts now have a green light. The fifth is still red, as overridden properties don't change when you modify the prefab.
На четырех фонарных столбах горит зеленый свет.  Пятый по-прежнему красный, так как переопределенные свойства не меняются при изменении префаба.

![Changed colors](media/lamppost-prefab-instances-with-override.jpg)
![Изменены цвета](media/lamppost-prefab-instances-with-override.jpg)

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
* [Nested prefabs](nested-prefabs.md)
* [Вложенные префабы](nested-prefabs.md)
* [Prefab models](prefab-models.md)
* [Сборные модели](prefab-models.md)
