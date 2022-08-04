 # Navigation bounding boxes
# Ограничивающие рамки навигации

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Navigation bounding boxes** define the area that [navigation meshes](navigation-meshes.md) cover. You can use them to create smaller navigation areas in your scene, rather than having a mesh cover the entire scene.
**Ограничивающие рамки навигации** определяют область, которую покрывают [навигационные сетки](navigation-meshes.md).  Вы можете использовать их для создания меньших областей навигации в вашей сцене, вместо того, чтобы сетка покрывала всю сцену.

The Scene Editor displays the bounding box as a blue outline.
Редактор сцен отображает ограничивающую рамку в виде синего контура.

![Bounding box shown](media/navigation-bounding-box-on.jpg) 
![Показана ограничивающая рамка](media/navigation-bounding-box-on.jpg)

## Create a navigation bounding box
## Создать ограничивающую навигационную рамку

To create a navigation bounding box, add a **navigation bounding box component** to an entity.
Чтобы создать ограничивающую навигационную рамку, добавьте к объекту **компонент ограничивающей рамки навигации**.

1. In the scene, select the entity you want to contain the bounding box, or create a new entity.
1. В сцене выберите объект, в который вы хотите включить ограничивающую рамку, или создайте новый объект.

2. With the entity selected, in the **Property Grid**, click **Add component** and select **Navigation bounding box**.
2. Выбрав объект, в **Сетке свойств** нажмите **Добавить компонент** и выберите **Ограничивающий прямоугольник навигации**.

    ![Add navigation bounding box](media/add-navigation-bounding-box.png)
![Добавить ограничивающую навигационную рамку](media/add-navigation-bounding-box.png)

    Game Studio adds a navigation bounding box to the entity.
Game Studio добавляет к сущности ограничивающую навигационную рамку.

3. Under the **Navigation bounding box** component properties, use the **XYZ** values to set the size of the bounding box.
3. В свойствах компонента **Ограничивающая рамка навигации** используйте значения **XYZ**, чтобы задать размер ограничивающей рамки.

    ![Navigation bounding box properties](media/navigation-bounding-box-properties.png)
![Свойства ограничивающей рамки навигации](media/navigation-bounding-box-properties.png)

4. Use the entity's **transform component** to position the bounding box in your scene.
4. Используйте **компонент преобразования** сущности, чтобы расположить ограничивающую рамку в вашей сцене.

## Show or hide the bounding box in the Scene Editor
## Показать или скрыть ограничивающую рамку в редакторе сцен

In the Scene Editor toolbar, open the **gizmo options** menu and use the **Navigation bounding box** checkbox.
На панели инструментов редактора сцен откройте меню **параметров гизмо** и установите флажок **ограничивающая рамка навигации**.

![Navigation bounding box checkbox](media/navigation-bounding-box-checkbox.png)
![Флажок ограничивающей рамки навигации](media/navigation-bounding-box-checkbox.png)

| Bounding box hidden | Bounding box shown (note blue box outline) 
|  Ограничительная рамка скрыта |  Показана ограничивающая рамка (обратите внимание на контур синей рамки)
|----------------------|------------
|----------------------|------------
|![Bounding box hidden](media/navigation-bounding-box-off.jpg)| ![Bounding box shown](media/navigation-bounding-box-on.jpg)
|![Ограничивающая рамка скрыта](media/navigation-bounding-box-off.jpg)|  ![Показана ограничивающая рамка](media/navigation-bounding-box-on.jpg)

## See also
## Смотрите также

* [Navigation groups](navigation-groups.md)
* [Группы навигации](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Навигационные сетки](navigation-meshes.md)
* [Navigation components](navigation-components.md)
* [Компоненты навигации](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Динамическая навигация](dynamic-navigation.md)
