# Geometry attributes

<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>

The material **geometry** attributes define the shape of a material.

![Geometry properties](media/geometry-properties.png)

## Tessellation

Real-time tessellation uses a HW feature of the GPU to massively subdivide triangles. This increases the realism and potential of deformations of the surface geometry.

You can choose **none**, **flat tessellation**, or **point normal tesellation**.

| No tessellation  | Flat tessellation | Point normal tessellation 
| --------------  | -------------- | -------------------- 
| ![media/material-attributes-2.png](media/material-attributes-2.png)  | ![media/material-attributes-3.png](media/material-attributes-3.png)  | ![media/material-attributes-4.png](media/material-attributes-4.png)

### Flat tessellation

This option tessellates the mesh uniformly.

![media/material-attributes-5.png](media/material-attributes-5.png) 

In the images below, notice how the flat tessellation adds extra triangles, but doesn't take the curve into account:

| No tessellation  | Flat tessellation  
| ---------------- | ----------------- 
| ![media/material-attributes-6.png](media/material-attributes-6.png)  | ![media/material-attributes-7.png](media/material-attributes-7.png)   

| Property               | Description      
| ---------------------- | ------------
| Triangle size          | The size of a tessellated triangle in screen-space units
| Adjacent edges average | Adjust the triangle size values from the average of adjacent edges values 

### Point normal tessellation

This option tessellates the mesh using the curvature provided by the mesh normals.

![media/material-attributes-8.png](media/material-attributes-8.png) 

The images below show how point normal tessellation adds extra triangles while taking the curvature of the mesh into account:

| No tessellation | Point normal tessellation 
| ---------------|  ---------------------- |
| ![media/material-attributes-6.png](media/material-attributes-6.png)  |![media/material-attributes-9.png](media/material-attributes-9.png)         

| Property               | Description 
| ---------------------- | ------------
| Triangle size          | The size of a tessellated triangle in screen-space units
| Adjacent edge average | Adjust the **triangle size** and **normal curvature** values from the average of adjacent edge values

## Displacement

Under the **Displacement** properties, you can specify **displacement map**. This displaces the geometry of the mesh.

![media/material-attributes-10.png](media/material-attributes-10.png) 
 
Depending on the stage at which the displacement is applied, the results can be very different:

| Displacement with vertex shader  | Tessellation with displacement  
| ------| ----------------- |
| ![media/material-attributes-11.png](media/material-attributes-11.png)  | ![media/material-attributes-12.png](media/material-attributes-12.png)

| Property         | Description     
| ---------------- | ------------ 
| Displacement Map | The displacement texture as a [material color provider](material-maps.md) 
| Intensity        | The amount of displacement                                         
| Scale & Bias     | When enabled, the value coming from the texture is considered a positive value ranging from `0.0` to `1.0` and the shader applies a scale to get the range -1.0 to `1.0`
| Shader Stage     | Specify which shader stage the displacement map should be applied to: vertex shader or domain shader (used with tessellation)

## Surface

![media/material-attributes-14.png](media/material-attributes-14.png) 

Under the **Surface** properties, you can define a [Normal maps](../textures/normal-maps.md) to define **macro** surface normals. The **normal map** provides per-pixel normal perturbation of the normal of the mesh. Normal maps create the appearance of bumps and indents in the mesh:

| Flat | Using a normal map   
| -----| ----------- 
| ![media/material-attributes-15.png](media/material-attributes-15.png)  | ![media/material-attributes-16.png](media/material-attributes-16.png)  

| Property     | Description 
| ------------ | ---------------
| Normal map   | The normal map color provider
| Scale and offset | Interpret values from the texture as positive values ranging from `0.0` to `1.0`. The shader applies a scale to get the range `-1.0` to `1.0`.
| Reconstruct Z    | If there's no Z component in the texture, reconstruct it from the X and Y components. This assumes that X<sup>2</sup> + Y<sup>2</sup> + Z<sup>2</sup> = 1 and that Z is always positive, so no normal vector can point to the back side of the surface. We recommend you enable this option, as Xenko might remove the Z component when you compress normal maps.

For more information about normal maps, see the [normal maps](../textures/normal-maps.md) page.

## Micro surface

Under the **Micro surface** setting, you can provide a **gloss map** to provide per-pixel information for gloss.

![media/material-attributes-17.png](media/material-attributes-17.png)

If you select **Float**:

- a value of `1.0` means the surface is highly glossy (the coarse normal isn't perturbed)
- a value of `0.0` means the surface is very rough (the coarse normal is highly perturbed in several directions)

The screenshots below show different levels of gloss on a material:

- Diffuse = #848484, Lambert
- Specular Metalness = 1.0, GGX

| Gloss = 0.0 | 0.25 | 0.5  | 0.8  | 1.0 
| ---------------- | ---- | ---- |----- | ---
| ![media/material-attributes-18.png](media/material-attributes-18.png)  | ![media/material-attributes-19.png](media/material-attributes-19.png)  | ![media/material-attributes-20.png](media/material-attributes-20.png)  | ![media/material-attributes-21.png](media/material-attributes-21.png)  | ![media/material-attributes-22.png](media/material-attributes-22.png)  

| Property       | Description
| -------------- | -- |
| Gloss map | The gloss map color provider
| Invert         | Inverts the gloss value (eg a value of `1.0` produces zero gloss instead of maximum). This effectively turns the gloss value into a **roughness** value, as used in other game engines

If you have local reflections enabled, the scene is reflected in materials with a gloss map value higher than the threshold you specify in the local reflections properties. For more information, see [Local reflections](../post-effects/local-reflections.md).

## See also

* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
    * [Clear-coat shading](clear-coat-shading.md)
* [Clear-coating shading](clear-coat-shading.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
* [Custom shaders](../effects-and-shaders/custom-shaders.md)