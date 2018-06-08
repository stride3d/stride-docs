 # Navigation bounding boxes

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Level designer</span>
<span class="label label-doc-audience">Programmer</span>

**Navigation bounding boxes** define the area that [navigation meshes](navigation-meshes.md) cover. You can use them to create smaller navigation areas in your scene, rather than having a mesh cover the entire scene.

The Scene Editor displays the bounding box as a blue outline.

![Bounding box shown](media/navigation-bounding-box-on.jpg) 

## Create a navigation bounding box

To create a navigation bounding box, add a **navigation bounding box component** to an entity.

1. In the scene, select the entity you want to contain the bounding box, or create a new entity.

2. With the entity selected, in the **Property Grid**, click **Add component** and select **Navigation bounding box**.

    ![Add navigation bounding box](media/add-navigation-bounding-box.png)

    Game Studio adds a navigation bounding box to the entity.

3. Under the **Navigation bounding box** component properties, use the **XYZ** values to set the size of the bounding box.

    ![Navigation bounding box properties](media/navigation-bounding-box-properties.png)

4. Use the entity's **transform component** to position the bounding box in your scene.

## Show or hide the bounding box in the Scene Editor

In the Scene Editor toolbar, open the **gizmo options** menu and use the **Navigation bounding box** checkbox.

![Navigation bounding box checkbox](media/navigation-bounding-box-checkbox.png)

| Bounding box hidden | Bounding box shown (note blue box outline) 
|----------------------|------------
|![Bounding box hidden](media/navigation-bounding-box-off.jpg)| ![Bounding box shown](media/navigation-bounding-box-on.jpg)

## See also

* [Navigation groups](navigation-groups.md)
* [Navigation meshes](navigation-meshes.md)
* [Navigation components](navigation-components.md)
* [Dynamic navigation](dynamic-navigation.md)