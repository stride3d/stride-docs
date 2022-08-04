# Navigation meshes
# Навигационные сетки

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Navigation meshes** form the area that entities with navigation components can navigate. Stride creates a layer in the navigation mesh for each [navigation group](navigation-groups.md) you create.
**Навигационные сетки** образуют область, по которой могут перемещаться объекты с навигационными компонентами.  Stride создает слой в навигационной сетке для каждой [группы навигации] (navigation-groups.md), которую вы создаете.

Game Studio displays navigation meshes as colored overlays in your scene. The overlay shows where entities in the navigation group for that layer can move. The mesh updates in real time as you edit your scene.
Game Studio отображает навигационные сетки в виде цветных наложений на вашей сцене.  Наложение показывает, куда могут перемещаться объекты в группе навигации для этого слоя.  Сетка обновляется в реальном времени по мере редактирования сцены.

<p>
<p>
<video autoplay loop class="responsive-video" poster="media/withOutlineAE.jpg">
<цикл автоматического воспроизведения видео class=
   <source src="media/withOutlineAE.mp4" type="video/mp4">
<source src=
</video>
</видео>
</p>
</p>

## Create a navigation mesh
## Создать навигационную сетку

1. In the **Asset View** (bottom by default), click **Add asset > Scenes > Navigation mesh**.
1. В **Просмотре активов** (по умолчанию внизу) нажмите **Добавить актив > Сцены > Сетка навигации**.

    ![Select Game Settings asset](media/add-navigation-mesh.png)
![Выберите актив настроек игры](media/add-navigation-mesh.png)

    Game Studio adds a **navigation mesh asset** to your project.
Game Studio добавляет в ваш проект **ресурс навигационной сетки**.

    ![Navigation mesh asset](media/navigation-mesh-in-asset-view.png)
![Актив навигационной сетки](media/navigation-mesh-in-asset-view.png)

2. With the navigation mesh selected in the **Asset View**, in the **Property Grid**, set the **scene** the navigation meshes in this asset apply to.
2. Выбрав навигационную сетку в **Asset View**, в **Property Grid** задайте **сцену**, к которой применяются навигационные сетки в этом активе.

    ![Set navigation mesh properties](media/navigation-mesh-properties.png)
![Установить свойства сетки навигации](media/navigation-mesh-properties.png)

    For more information about scenes, see [Scenes](../game-studio/scenes.md).
Для получения дополнительной информации о сценах см. [Сцены](../game-studio/scenes.md).

3. Under **Selected groups**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
3. В разделе **Выбранные группы** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    Game Studio adds a new item to the list of groups.
Game Studio добавляет новый пункт в список групп.

    ![Add navigation group to navigation mesh](media/add-navigation-group-to-navigation-mesh.png)
![Добавить группу навигации в сетку навигации](media/add-navigation-group-to-navigation-mesh.png)

4. Click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose a group from the drop-down menu.
4. Нажмите ![Кнопка с синей стрелкой](~/manual/game-studio/media/blue-arrow-icon.png) (**Заменить**) и выберите группу из раскрывающегося меню.

    ![Choose navigation group](media/choose-navigation-group-in-navigation-mesh.png)
![Выбрать группу навигации](media/choose-navigation-group-in-navigation-mesh.png)

    Stride builds a layer in the navigation mesh for this group. For more information about groups, including how to create them, see [Navigation groups](navigation-groups.md).
Stride строит слой в навигационной сетке для этой группы.  Для получения дополнительной информации о группах, в том числе о том, как их создавать, см. [Группы навигации](navigation-groups.md).

5. Repeat steps 3 and 4 for as many groups as you want to use the navigation mesh.
5. Повторите шаги 3 и 4 для стольких групп, сколько вы хотите использовать навигационную сетку.

    >[!Note]
>[!Примечание]
    >If you want to create a navigation mesh for a different scene, create another navigation mesh asset and select the scene in the asset properties.
>Если вы хотите создать навигационную сетку для другой сцены, создайте другой ассет навигационной сетки и выберите сцену в свойствах ассета.

## Navigation mesh properties
## Свойства сетки навигации

| Property                  | Description
|  Недвижимость |  Описание
|---------------------------|--------------
|---------------------------|---------------
| Scene                     | The scene this navigation mesh applies to
|  Сцена |  Сцена, к которой применяется этот навигационный меш
| Included collision groups | Set which collision groups the navigation mesh uses. By default, meshes use all collision groups
|  Включенные группы коллизий |  Установите, какие группы столкновений использует навигационная сетка.  По умолчанию сетки используют все группы коллизий.
| Build settings            | Advanced settings for the navigation mesh
|  Настройки сборки |  Расширенные настройки навигационной сетки
| Groups                    | The groups that use this navigation mesh
|  Группы |  Группы, использующие эту навигационную сетку

## Show or hide a navigation mesh in the Scene Editor
## Показать или скрыть навигационную сетку в редакторе сцен

Use the **navigation visibility** menu in the Scene Editor toolbar.
Используйте меню **видимости навигации** на панели инструментов редактора сцен.

![Navigation group visibility](media/navigation-group-visibility.png)
![Видимость группы навигации](media/navigation-group-visibility.png)

To show or hide layers belonging to different groups, use the checkboxes. The colored boxes indicate the color of the groups displayed in the Scene Editor.
Чтобы показать или скрыть слои, принадлежащие к разным группам, используйте флажки.  Цветные прямоугольники обозначают цвет групп, отображаемых в редакторе сцен.

| Navigation mesh hidden   | Navigation mesh shown
|  Навигационная сетка скрыта |  Показана навигационная сетка
|--------------------------| ------------
|---------------------------|  ------------
|![Bounding box shown](media/navigation-mesh-invisible.jpg) | ![Bounding box hidden](media/navigation-mesh-visible.jpg)
|![Показана ограничивающая рамка](media/navigation-mesh-invisible.jpg) |  ![Ограничивающая рамка скрыта](media/navigation-mesh-visible.jpg)

These options have no effect on runtime behavior.
Эти параметры не влияют на поведение во время выполнения.

## See also
## Смотрите также

* [Navigation groups](navigation-groups.md)
* [Группы навигации](navigation-groups.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Ограничивающие рамки навигации](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)
* [Компоненты навигации](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Динамическая навигация](dynamic-navigation.md)
* [Scenes](../game-studio/scenes.md)
* [Сцены](../game-studio/scenes.md)
