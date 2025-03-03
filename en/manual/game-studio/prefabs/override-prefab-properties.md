# Override prefab properties

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>

If you modify a property in a prefab instance, the instance no longer inherits changes from the prefab for that property. This is called an **override**.

![How prefabs work](media/create-manage-prefabs-how-prefabs-work.png)

In the following video, the **Lamp** prefab contains several box entities that belong to the **Boxes** parent. When we delete the boxes from the instance, only that instance is affected. The prefab (shown on the right) is unchanged.

If we add another box to the **Boxes** parent in the prefab, it doesn't appear in the overridden instance. That's because we deleted the **Boxes** parent from that instance.

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</div>

## View overridden properties

In the **Property Grid**, you can see which properties of the prefab instance differ from the base values in the prefab.

* **Overridden** and **unique** properties are **white and bold**:

    ![Overridden properties are white](media/use-prefabs-overriden-properties-appear-white.png)

* **Identical** properties are **gray**:

    ![Identical properties are gray](media/use-prefabs-identical-properties-appear-gray.png)

### Reset a property to the prefab value

To reset an overridden property to the value in the parent prefab, right-click the property and click **Reset to base value**.

![Reset to base value](media/use-prefabs-reset-property-to-base-value.png)

## Example

In this example, we have a prefab of a futuristic lamppost.

![Lamppost](media/lamppost-prefab.jpg)

The lamppost prefab is composed of three entities: a column, a pillar, and a spot light. These are listed in the Entity Tree in the Prefab Editor.

![Add entities](media/lamppost-prefab-entities.png)

Let's add five instances of the lamppost prefab to our scene.

![Five lampposts](media/lamppost-prefab-instances.jpg)

Now we'll modify one of the instances. In the Scene Editor, we select one **spot light** entity and, in the spot light component properties, change its color to red. The Property Grid displays the modified **Color** property in **bold white**. This means it's overriding the prefab property.

![Overridden property](media/override-prefab-property.png)

We can see this in the scene view.

![Pink spotlight](media/pink-lamppost-prefab.jpg)

Now let's see what happens when we go back to the Prefab Editor and change the color of the spot light in the prefab to green.

![Change color to green](media/change-prefab-color-to-green.png)

Four of the lampposts now have a green light. The fifth is still red, as overridden properties don't change when you modify the prefab.

![Changed colors](media/lamppost-prefab-instances-with-override.jpg)

## See also

* [Prefab index](index.md)
* [Create a prefab](create-a-prefab.md)
* [Use prefabs](use-prefabs.md)
* [Edit prefabs](edit-prefabs.md)
* [Nested prefabs](nested-prefabs.md)
* [Prefab models](prefab-models.md)