# Navigation groups
# Группы навигации

<span class="label label-doc-level">Beginner</span>
<span class=
<span class="label label-doc-audience">Level designer</span>
<span class=
<span class="label label-doc-audience">Programmer</span>
<span class=

**Navigation groups** define different navigation properties for the entities you add to them. You define navigation groups in the project **game settings**.
**Группы навигации** определяют различные свойства навигации для объектов, которые вы к ним добавляете.  Вы определяете группы навигации в проекте **настройки игры**.

You can create different navigation groups for different kinds of entity. For example, if your game features vehicles controlled by scripts, you might create different navigation groups for different sizes of vehicle, each with different properties: a car group, a bus group, a motorcycle group, and so on.
Вы можете создавать разные группы навигации для разных типов объектов.  Например, если в вашей игре есть транспортные средства, управляемые сценариями, вы можете создать разные навигационные группы для различных размеров транспортных средств, каждая из которых имеет разные свойства: группа автомобилей, группа автобусов, группа мотоциклов и т. д.

## Create a navigation group
## Создать группу навигации

1. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets folder**.
1. В **Solution Explorer** (нижняя левая панель по умолчанию) выберите **папку Assets**.

    ![Select Assets folder asset](media/select-asset-folder.png)
![Выберите ресурс папки Assets](media/select-asset-folder.png)

2. In the **Asset View** (the bottom pane by default), select the **Game Settings** asset.
2. В **Просмотре ресурсов** (нижняя панель по умолчанию) выберите ресурс **Настройки игры**.

    ![Select Game Settings asset](media/select-game-settings-asset.png)
![Выберите актив настроек игры](media/select-game-settings-asset.png)

3. In the **Property Grid** (the right-hand pane by default), expand **Navigation Settings**.
3. В **Сетке свойств** (правая панель по умолчанию) разверните **Настройки навигации**.

   ![Game settings](media/navigation-settings.png)
![Настройки игры](media/navigation-settings.png)

4. Next to **Groups**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).
4. Рядом с **Группы** нажмите ![Зеленая кнопка с плюсом](~/manual/game-studio/media/green-plus-icon.png) (**Добавить**).

    Game Studio adds a new item to the list of navigation groups.
Game Studio добавляет новый элемент в список групп навигации.

    ![Navigation group properties](media/navigation-group-properties.png)
![Свойства группы навигации](media/navigation-group-properties.png)

5. Set the properties for the navigation group. Entities you add to this group use these properties.
5. Задайте свойства группы навигации.  Объекты, которые вы добавляете в эту группу, используют эти свойства.

## Navigation group properties
## Свойства группы навигации

In most cases, the navigation group properties should approximately match the properties in the [character component](../physics/characters.md) of the entities in the group, if they have one.
В большинстве случаев свойства группы навигации должны примерно совпадать со свойствами в [компоненте персонажа](../physics/characters.md) сущностей в группе, если они есть.

| Property             | Description
|  Недвижимость |  Описание
|----------------------|------------
|----------------------|------------
| Item                 | The name of the group
|  Товар |  Название группы
| Height               | The height of the entities in this group. Entities can't enter areas with ceilings lower than this value
|  Высота |  Высота объектов в этой группе.  Сущности не могут входить в области с потолками ниже этого значения.
| Maximum climb height | The maximum height that entities in this group can climb
|  Максимальная высота подъема |  Максимальная высота, на которую могут подняться объекты в этой группе.
| Maximum slope        | The maximum incline (in degrees) that entities in this group can climb. Entities can't go up or down slopes higher than this value. In most cases, this should be approximately the same value as the **max slope** property in the [character component](../physics/characters.md) of the entities in this group, if they have one.
|  Максимальный уклон |  Максимальный уклон (в градусах), на который могут подняться объекты в этой группе.  Сущности не могут подниматься или спускаться по склонам выше этого значения.  В большинстве случаев это должно быть примерно то же значение, что и свойство **максимальный наклон** в [компоненте персонажа](../physics/characters.md) сущностей в этой группе, если они есть.
| Radius               | The larger this value, the larger the area of the navigation mesh entities use. Entities can't pass through gaps of less than twice the radius.
|  Радиус |  Чем больше это значение, тем большую площадь используют объекты навигационной сетки.  Сущности не могут проходить через промежутки менее чем в два раза больше радиуса.

## See also
## Смотрите также

* [Navigation meshes](navigation-meshes.md)
* [Навигационные сетки](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Ограничивающие рамки навигации](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)
* [Компоненты навигации](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Динамическая навигация](dynamic-navigation.md)
* [Physics — Characters](../physics/characters.md)
* [Физика — Персонажи](../physics/characters.md)
