# Directional lights

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Artist</span>

**Directional lights** come uniformly from one direction. They're often used for simulating large, distant light sources such as the sun, and cast shadows. By default, new scenes you create in Xenko contain a directional light.

![media/DirectionalLightOverview.png](media/DirectionalLightOverview.png) 

The Scene Editor shows the position of directional lights with the following icon:

![media/DirectionalLight.png](media/DirectionalLight.png) 

When you select a directional light, the gizmo displays the light's main direction:

![media/DirectionalLightSelected.png](media/DirectionalLightSelected.png) 

## Properties

![media/DirectionalLightProperties.png](media/DirectionalLightProperties.png) 

| Property     | Description                                                                                    
| ------------ | ---------- |
| Color        | The color of the light (RGB)
| Shadow       | See **Shadow properties** below
| Intensity    | The intensity of the light. The color is multiplied by this value before being sent to the shader. Note: negative values produce darkness and have unpredictable effects
| Culling Mask | Defines which entity groups are affected by this light. By default, all groups are affected

## Shadows cast by directional lights

Like [point lights](point-lights.md) and [spot lights](spot-lights.md), directional lights cast shadows. However, shadows cast by directional lights can spawn across a large view range, so they require special treatment to improve their realism.

Directional lights use an additional technique, **cascaded shadow mapping**. This consists of rendering the depth of occluding objects from the point of view of the light to a texture, then rendering the scene taking the occluder information into account.

This method slices the depth range from the camera's point of view into different sections or "cascades" of different resolutions. The nearer each cascade is to the camera, the higher resolution it has, and the higher-resolution its shadows are.

![media/ShadowMappingCascades.png](media/ShadowMappingCascades.png) 

Put simply, the closer shadows are to the camera, the better quality they are. This means you can spend more memory on shadows closer to the camera, where you can see them, and less on distant shadows.

You can have one, two, or four cascades. The more cascades you use, the more memory you save, but the lower resolution your shadows become over distance.

This an example of a shadow map generated from a directional light, using four cascades:

![FPS scene shadow map](media/shadow-atlas-2x.png)

### See shadow cascades in the editor

In the **Property Grid**, under the **Shadow** properties, enable the **Debug** option.

| Cascades debug off    | Cascades debug on     
| ---------------------- | ----------
| ![media/directional-lights-8.png](media/directional-lights-8.png)  | ![media/directional-lights-9.png](media/directional-lights-9.png)

The different colors indicate the cascade for each distance range (Green: 0, Blue: 1, Purple: 2, Red: 3).

### Directional light shadow properties

| Property            | Description             
| ------------------- | ------------
| Filter              | Filtering produces **soft shadows** instead of **hard shadows**. Currently, the implemented technique is PCF (Percentage Closer Filtering)
| Size                | The size of the shadow map texture. For the directional light, this value is **x1** by default, as a directional light has more visual impact than lights with shorter ranges
| Cascade Count       | The number of cascades used for slicing the range of depth covered by the light. Values are 1, 2 or 4 cascades; a typical scene uses 4 cascades
| Stabilization mode  | <p><br>The technique used to reduce shadow map flickering. Flickering is a result of the potential aliasing introduced by the shadow map when a texel from the perspective of the light covers more space than a texel from the camera's perspective.</p></br> <p><br> **Projection snapping** tries to snap the projection matrix of the light to a texel dependent on the resolution of the shadow map texture</p></br> <p><br>**View snapping** tries to snap the target of the view matrix of the light (center of the camera view cascade frustum)</p></br> <p><br>Both projection and view snapping force the shadow matrix to cover a larger region, increasing the aliasing of the shadow map texture. Note that when using depth range camera is set to automatic, the stabilization mode is ignored</p></br>
| Depth Range         | How the visible depth range from the camera's perspective is calculated. This directly affects how near and how far cascades splits occur
| Blend Cascades      | Smooths the transition between cascades  
| Partition mode      | <p><br>How the cascade split distance is determined.</p></br> <p><br> **Manual**: the split is defined manually for each cascade, in percentage of the visible depth range. A value of 0.1 for a cascade means that the cascade is rendered on the distance 0.1 * (VisibleDepthMax - VisibleDepthMin)<p><br> <p><br> **Logarithmic**: the split is automatically calculated using a logarithmic scale <p><br> The PSSM factor lets you blend from a pure logarithmic scale (0.0f) to a pure uniform scale (1.0f)<p><br>
| Depth Bias          | The amount of depth to add to the sampling depth to avoid the phenomenon of shadow acne
| Normal Offset Scale | A factor multiplied by the depth bias toward the normal
| Debug               | Displays the shadow map cascades in the Scene Editor

## See also

* [Add a light](add-a-light.md)
* [Point lights](point-lights.md)
* [Ambient lights](ambient-lights.md)
* [Skybox lights](skybox-lights.md)
* [Spot lights](spot-lights.md)
* [Light probes](light-probes.md)
* [Light shafts](light-shafts.md)
* [Shadows](shadows.md)