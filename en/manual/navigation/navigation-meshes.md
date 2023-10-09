# Navigation meshes

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Level designer</span>
<span class="badge text-bg-success">Programmer</span>

**Navigation meshes** form the area that entities with navigation components can navigate. Stride creates a layer in the navigation mesh for each [navigation group](navigation-groups.md) you create.

Game Studio displays navigation meshes as colored overlays in your scene. The overlay shows where entities in the navigation group for that layer can move. The mesh updates in real time as you edit your scene.

<p>
<video autoplay loop class="responsive-video" poster="media/withOutlineAE.jpg">
   <source src="media/withOutlineAE.mp4" type="video/mp4">
</video>
</p>

## Create a navigation mesh

1. In the **Asset View** (bottom by default), click **Add asset > Scenes > Navigation mesh**.

    ![Select Game Settings asset](media/add-navigation-mesh.png)

    Game Studio adds a **navigation mesh asset** to your project.

    ![Navigation mesh asset](media/navigation-mesh-in-asset-view.png)

2. With the navigation mesh selected in the **Asset View**, in the **Property Grid**, set the **scene** the navigation meshes in this asset apply to.

    ![Set navigation mesh properties](media/navigation-mesh-properties.png)

    For more information about scenes, see [Scenes](../game-studio/scenes.md).

3. Under **Selected groups**, click ![Green plus button](~/manual/game-studio/media/green-plus-icon.png) (**Add**).

    Game Studio adds a new item to the list of groups.

    ![Add navigation group to navigation mesh](media/add-navigation-group-to-navigation-mesh.png)

4. Click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and choose a group from the drop-down menu.

    ![Choose navigation group](media/choose-navigation-group-in-navigation-mesh.png)

    Stride builds a layer in the navigation mesh for this group. For more information about groups, including how to create them, see [Navigation groups](navigation-groups.md).

5. Repeat steps 3 and 4 for as many groups as you want to use the navigation mesh.

    >[!Note]
    >If you want to create a navigation mesh for a different scene, create another navigation mesh asset and select the scene in the asset properties.

## Navigation mesh properties

| Property                  | Description
|---------------------------|--------------
| Scene                     | The scene this navigation mesh applies to
| Included collision groups | Set which collision groups the navigation mesh uses. By default, meshes use all collision groups
| Build settings            | Advanced settings for the navigation mesh
| Groups                    | The groups that use this navigation mesh

## Show or hide a navigation mesh in the Scene Editor

Use the **navigation visibility** menu in the Scene Editor toolbar.

![Navigation group visibility](media/navigation-group-visibility.png)

To show or hide layers belonging to different groups, use the checkboxes. The colored boxes indicate the color of the groups displayed in the Scene Editor.

| Navigation mesh hidden   | Navigation mesh shown
|--------------------------| ------------
|![Bounding box shown](media/navigation-mesh-invisible.jpg) | ![Bounding box hidden](media/navigation-mesh-visible.jpg)

These options have no effect on runtime behavior.

## See also

* [Navigation groups](navigation-groups.md)
* [Navigation bounding boxes](navigation-bounding-boxes.md)
* [Navigation components](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)
* [Scenes](../game-studio/scenes.md)