# Light shafts

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artist</span>

**Light shafts**, also called **god rays**, are visible rays of light. 

<video autoplay loop class="responsive-video" poster="media/lightshaft_CoS_640.jpg">
   <source src="media/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Stride light shafts are based on [shadow maps](shadows.md) and use raymarching rather than post effects, so they're visible even when the light source isn't. Any light source that casts shadows (ie [point lights](point-lights.md), [directional lights](directional-lights.md) and [spot lights](spot-lights.md)) can cast light shafts.

To create light shafts, use three components together: **lights**, **light shafts**, and **light shaft bounding volumes**.

## 1. Enable light shafts in the graphics compositor

By default, Stride disables light shafts in new projects. To enable them:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

2. Select the **forward renderer** node.

    ![Select forward renderer](../../virtual-reality/media/select-forward-renderer.png)

3. In the **Property Grid** (on the right by default), next to **Light shafts**, click ![Blue arrow button](~/manual/game-studio/media/blue-arrow-icon.png) (**Replace**) and select **LightShafts**.

    ![Select light shafts](media/select-light-shafts.png)

4. Make sure the **light shafts** checkbox is selected.

    ![Enable light shafts](media/enable-light-shafts.png)

    For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.

## 2. Add a light shaft component

1. In your scene, select the entity with the **light** you want to create light shafts. This must be a light that casts shadows (ie a [point light](point-lights.md), [directional light](directional-lights.md), or [spot light](spot-lights.md)).

2. In the **Property Grid**, in the **Light** component properties, make sure the **Shadow** checkbox is selected.

    ![Enable light shafts](media/light-shafts-enable-shadows.png)

3. Click **Add component** and select **Light shaft**.

    ![Add light shaft component](media/add-light-shaft-component.png)

    Game Studio adds a light shaft component to the entity.

## 3. Add a bounding volume

The **light shaft bounding volume** defines the area in which light shafts are created. You can add the bounding volume to the same entity that has the directional light, but it's usually simpler to add it to a separate entity.

1. In the **Asset View**, click **Add asset**.

2. Under **Models**, select a model in the shape you want the volume to be. For example, if you use a cube, light shafts will be created in a cube-shaped area.

    ![Cube model](media/add-cube-model.png)

    The **Select an asset** window opens.

    ![Select an asset](media/asset-picker.png)

3. You don't need a material for the model, so click **Cancel** to create a model without a material.

4. In the scene, create an empty **entity**. For now, it doesn't matter where you put it; you can reposition it later.

5. With the entity selected, in the **Property Grid**, click **Add component** and select **light shaft bounding volume**.

    ![Add light shaft bounding volume component](media/add-light-shaft-bounding-volume.png)

6. In the **light shaft bounding volume** component properties, next to **light shaft**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

7. In the **entity picker**, select the entity with the directional light you want to create light shafts and click **OK**.

8. In the **light shaft bounding volume** component properties, next to **Model**, click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**).

9. In the **Select an asset** window, select the model you created and click **OK**.

    ![Select model](media/select-procedural-model.png)

    This model defines the shape of the light shaft bounding volume.

10. Using the **transform** component, position and scale the entity to cover the area where you want to create light shafts.

    >[!Tip]
    >To show or hide navigation light shaft bounding volumes in the Scene Editor, in the **Scene Editor toolbar**, open the **gizmo options** menu and use the **Light shaft bounding volumes** checkbox.
    
    ![Show light shaft bounding volumes](media/show-or-hide-light-shaft-bounding-volume.png)

## Light shaft properties

![Light shaft properties](media/light-shaft-properties.png)

| Property                  | Description                                               
|---------------------------|----------
| Density                   | Higher values produce brighter light shafts
| Sample count              | Higher values produce better light shafts but use more GPU 
| Process bounding volumes separately  | Preserves light shaft quality when seen through separate bounding boxes, but uses more GPU

### Light shaft graphics compositor properties

To access these properties, in the **graphics compositor editor**, select the **forward renderer** node and expand **Light Shafts**.

These properties apply globally to all the light shafts in the scene.

![Light shaft graphics compositor properties](media/light-shaft-graphics-compositor-properties.png)

| Property                                | Description                                                    
|-----------------------------------------|--------------
| Bounding volume buffer downsample level | Lower values produce more precise volume buffer areas, but use more GPU
| Light buffer downsample level           | Lower values produce sharper light shafts, but use more GPU

## Optimize light shafts

Light shafts work best in dark environments. You can adjust the light and light shaft component properties to achieve different results — for example, by changing the light color (in the **light component properties**) or the light shaft density (in the **light shaft component properties**).

Multiple light shafts viewed through one another can become visually noisy, as in the screenshot below:

![Noisy light shafts](media/noisy-light-shafts.jpg)

To reduce this effect, in the **light shaft component properties**, reduce the **density** and increase the **sample count**.

![Density factor](media/density-factor.png)

Alternatively, add additional bounding volumes and process them separately. To do this:

1. Create additional bounding volumes and position them to cover the areas where you want to create light shafts. Make sure the bounding volumes don't overlap, as this makes light shafts extra-bright.

2. In the **light shaft component properties**, make sure **Process bounding volumes separately** is selected.

![Separate bounding volume](media/separate-bounding-volumes.png)

> [!Note]
> Processing bounding volumes separately uses more GPU.

## See also

* [Directional lights](directional-lights.md)
* [Shadows](shadows.md)
* [Graphics compositor](../graphics-compositor/index.md)