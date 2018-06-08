# Navigation groups

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level designer</span>
<span class="label label-doc-audience">Programmer</span>

**Navigation groups** define different navigation properties for the entities you add to them. You define navigation groups in the project **game settings**.

You can create different navigation groups for different kinds of entity. For example, if your game features vehicles controlled by scripts, you might create different navigation groups for different sizes of vehicle, each with different properties: a car group, a bus group, a motorcycle group, and so on.

## Create a navigation group

1. In the **Solution Explorer** (the bottom-left pane by default), select the **Assets folder**.

    ![Select Assets folder asset](media/select-asset-folder.png)

2. In the **Asset View** (the bottom pane by default), select the **Game Settings** asset.

    ![Select Game Settings asset](media/select-game-settings-asset.png)

3. In the **Property Grid** (the right-hand pane by default), expand **Navigation Settings**.

   ![Game settings](media/navigation-settings.png)

4. Next to **Groups**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    Game Studio adds a new item to the list of navigation groups.

    ![Navigation group properties](media/navigation-group-properties.png)

5. Set the properties for the navigation group. Entities you add to this group use these properties.

## Navigation group properties

In most cases, the navigation group properties should approximately match the properties in the [character component](../physics/characters.md) of the entities in the group, if they have one.

| Property             | Description
|----------------------|------------
| Item                 | The name of the group
| Height               | The height of the entities in this group. Entities can't enter areas with ceilings lower than this value
| Maximum climb height | The maximum height that entities in this group can climb
| Maximum slope        | The maximum incline (in degrees) that entities in this group can climb. Entities can't go up or down slopes higher than this value. In most cases, this should be approximately the same value as the **max slope** property in the [character component](../physics/characters.md) of the entities in this group, if they have one.
| Radius               | The larger this value, the larger the area of the navigation mesh entities use. Entities can't pass through gaps of less than twice the radius.

## See also

* [Navigation meshes](navigation-meshes.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Physics — Characters](../physics/characters.md)