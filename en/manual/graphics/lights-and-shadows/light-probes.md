# Light probes

<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Designer</span>
<span class="badge text-bg-success">Artist</span>

**Light probes** capture the lighting at the position you place them. They simulate **indirect light**, the effect of light bouncing off surfaces and illuminating other surfaces. They can make a dramatic difference to the mood and appearance of your scene.

<p>
<video autoplay loop class="responsive-video" poster="media/light_probes_640.jpg">
   <source src="media/light_probes_640.mp4" type="video/mp4">
</video>
</p>

The screenshot below shows a [point light](point-lights.md) surrounded by light probes in the Scene Editor. The probes form 3D areas (shown in the Scene Editor by the yellow wireframe connecting the probes).

![Cornell box](media/light-probes-cornell.png)

Stride colors pixels within a light probe area to simulate the effect of light bouncing from nearby surfaces. To find a color for a given pixel, Stride interpolates from the lighting captured by the four surrounding light probes.

For example, in the screenshot below, notice how the red of the wall is reflected on the other objects. In the Scene Editor, this is also visible on the surface of the light probes themselves.

![Light probes — more reflection](media/light-probes-illumination.png)

Light probes affect all objects in the area they cover, including static and dynamic objects. You don't need to enable any extra options on the entities that light probes affect.

## 1. Enable light probes in the graphics compositor

Stride enables light probes by default in new projects. To make sure light probes are enabled:

1. In the **Asset View** (in the bottom pane by default), double-click the **Graphics Compositor** asset.

    ![Graphics Compositor asset](../graphics-compositor/media/graphics-compositor-asset.png)

    The graphics compositor editor opens.

    ![Graphics Compositor editor](../graphics-compositor/media/graphics-compositor-editor.png)

2. Select the **forward renderer** node.

3. In the **Property Grid** (on the right by default), make sure the **Light probes** checkbox is selected.

    ![Enable light probes](media/enable-light-probes.png)

For more information about the graphics compositor, see the [Graphics compositor](../graphics-compositor/index.md) page.

## 2. Create a light probe

Right-click the scene or Entity Tree and select **Light > Light probe**.

![Add light probe](media/add-light-probe.png)

Alternatively, create an empty entity and add a **Light probe component** in the Property Grid.

![Add light probe component](media/add-light-probe-component.png)

Light probes appear as spheres in the Scene Editor. Before you capture a light bounce for the first time, they have a completely black surface.

![Light](media/light-probes-black.jpg)

## 3. Place light probes

Light probes must be placed in a way that creates a **3D volume**. This means:

* You need **at least four light probes** in the scene — enough to create the four points of a tetrahedron, as below:

    ![Tetrahedron](media/light-probes-tetrahedron.png)

* At least one light probe must be on a different plane from the rest. For example, the probes in the screenshot below won't work, as they are on a flat plane and create no volume:

    ![Flat probes](media/bad-light-probe-arrangement.png)

A typical method is to place light probes in a grid across your scene covering a general area, as in the screenshots below:

![Grid layout](media/light-probes-grid-layout.jpg)

![Light probes in the editor](media/light-probes-in-editor.jpg)

>[!Tip]
>You can quickly duplicate light probes just like other entities. To do this, select a light probe, hold **Ctrl**, and move it with the mouse.

## 4. Capture lighting

1. In the Scene Editor toolbar, click the **lighting options** button to open the lighting options menu.

    ![Lighting options](media/lighting-options-menu.png)

2. Next to **Bounces**, set the number of light bounces you want to capture. 

    Multiple bounces simulate the effect of light bouncing between surfaces multiple times. This generally has the effect of brightening the lighting. Three or four bounces should be enough; beyond this, changes are almost unnoticeable. The number of bounces has no impact on runtime performance.

3. To capture the lighting, click **Compute**.

    You can see the lighting on the surface of the light probes in the Scene Editor.

    ![Light probe surface](media/light-probes-illumination-on-surface.png)

## Reset light probes

To reset the light probes, in the **lighting options** menu, click **Reset**. This is useful after you change the lights in your scene and need to capture the lighting from scratch.

![Reset light probes](media/reset-light-probes.png)

## Show and hide light probes in the Scene Editor

Under the **gizmo options** in the Scene Editor toolbar, use the **Light probes** checkbox.

![Hide light probes](media/light-probes-checkbox.png)

## Show and hide light probe volumes in the Scene Editor

Under the **gizmo options** in the Scene Editor toolbar, use the **Light probe volumes** checkbox.

![Hide light probe volumes](media/light-probe-volumes-checkbox.png)

![Light probe volumes on and off](media/light-probe-wireframe-on.jpg)

## See also

* [Add a light](add-a-light.md)
* [Point lights](point-lights.md)
* [Ambient lights](ambient-lights.md)
* [Directional lights](directional-lights.md)
* [Skybox lights](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Shadows](shadows.md)