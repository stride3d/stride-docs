# Edit prefabs

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

You can edit prefabs in the **Prefab Editor**.

## Open the Prefab Editor ##

To open the Prefab Editor from the **Asset View**:

* Right-click the prefab you want to edit and select **Edit asset**:

    ![Right-click prefab](media/edit-prefab-with-edit-asset-button.png)

* Alternatively, double-click the prefab you want to edit:

    ![Double-click prefab](media/open-prefab-editor.gif)

To open the Prefab Editor from the **Scene Editor**, right-click any child of a prefab instance and select **Open prefab in editor**.

![Open prefab in editor](media/use-prefabs-prefab-open-prefab-from-prefab-instance.png)

## Use the Prefab Editor ##

![Edit prefabs](media/prefab-editor.png)

The Prefab Editor works similarly to the Scene Editor. For example, you can:

* add and delete entities
* use transformation gizmos to translate, rotate and scale entities
* create parent-child relations between entities
* add and modify entity components (scripts, materials, models, animations, etc)

For more information about managing entities, see [Populate a scene](../add-entities.md).

![Prefab Editor](media/prefab-editor.png)

When you edit a prefab in the Prefab Editor, the changes are applied to the instances of the prefab in the scene in **real time**.

This video demonstrates what happens when we make changes to the prefab. The Scene Editor is on the left, and the Prefab Editor on the right:

<p>
<video autoplay loop class="responsive-video" poster="media/edit-prefab-and-update-instances.jpg">
   <source src="media/edit-prefab-and-update-instances.mp4" type="video/mp4">
</video>
</p>

## See also

* [Prefab index](index.md)
* [Create a prefab](create-a-prefab.md)
* [Use prefabs](index.md)
* [Nested prefabs](nested-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Prefab models](prefab-models.md)