# Override prefab properties

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Programmer</span>
<span class="badge text-bg-success">Designer</span>

If you modify a property in a prefab instance, the instance no longer inherits changes from the prefab for that property. This is called an **override**.

![](media/create-manage-prefabs-how-prefabs-work.png)

In the following video, the *Lamp* prefab contains several box entities that belong to the *Boxes* parent. When we delete the boxes from the instance, only that instance is affected. The prefab (shown on the right) is unchanged.

If we add another box to the *Boxes* parent in the prefab, it doesn't appear in the overridden instance. That's because we deleted the *Boxes* parent from that instance.

<div class="ratio ratio-16x9 mb-3">
<video autoplay loop class="responsive-video" poster="media/delete-boxes-from-prefab-instance.jpg">
   <source src="media/delete-boxes-from-prefab-instance.mp4" type="video/mp4">
</video>
</div>

## View overridden properties

In the **Property grid**, you can see which properties of the prefab instance differ from the base values in the prefab.

* **Overridden** and **unique** properties are **white and bold**:

    ![](media/property-grid-overriden-value.webp)

* **Non-overridden** properties are **gray**:

    ![](media/property-grid-non-overriden-value.webp)

### Reset a property to the prefab value

To reset an overridden property to the value in the parent prefab, right-click the property and click **Reset to base value**.

![](media/property-grid-reset-to-base-value.webp)

## Example

In this example, we have a prefab of a futuristic lamppost.

![](media/lamppost-prefab.png)

The lamppost prefab is composed of three entities: a column, a pillar, and a spot light. These are listed in the Entity tree in the prefab editor.

![](media/lamppost-prefab-entity-tree.webp)

Let's add five instances of the lamppost prefab to our scene.

![](media/lamppost-prefab-instances.png)

Now we'll modify one of the instances. In the **scene editor**, we select one **spot light** entity and, in the spot light component properties, change its color to red. The Property Grid displays the modified **Color** property in **bold white**. This means it's overriding the prefab property.

![](media/lamppost-override-instance.webp)

We can see this in the scene view.

![](media/lamppost-prefab-pink.png)

Now let's see what happens when we go back to the prefab editor and change the color of the spot light in the prefab to green.

![](media/lamppost-change-prefab.webp)

Four of the lampposts now have a green light. The fifth is still red, as overridden properties don't change when you modify the prefab.

![Changed colors](media/lamppost-prefab-instances-with-override.png)
