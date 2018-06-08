# Nested prefabs

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>

You can add prefabs to other prefabs. These are called **nested prefabs**.

For example, imagine you have a table prefab, a chair prefab, and a television prefab. Then you create a living room prefab, which in turn contains the table, chair, and television prefabs. You might then create a house prefab, which in turn contains the living room prefab, which in turn contains the table, chair, and television prefabs. There's no limit to how many prefabs you can nest.

If you modify a nested prefab, all the dependent prefabs inherit the change automatically. For example, if you change the shape of the table prefab, it changes in the living room and house prefabs too.

This video demonstrates an example of nested prefabs:

<p>
<video autoplay loop class="responsive-video" poster="media/create-nested-prefab.jpg">
   <source src="media/create-nested-prefab.mp4" type="video/mp4">
</video>
</p>

In the center pane, we already have a prefab named **Lamp**. In the right pane, we create a new prefab named **Boxes**, comprising several box entities positioned together. We add the Boxes prefab to the Lamp prefab. Changes made to the Boxes prefab are reflected in the Lamp prefab. These are in turn reflected in the instances of the Lamp prefab in the scene (left pane).

## See also

* [Prefab index](index.md)
* [Create a prefab](create-a-prefab.md)
* [Use prefabs](index.md)
* [Edit prefabs](edit-prefabs.md)
* [Override prefab properties](override-prefab-properties.md)
* [Prefab models](prefab-models.md)