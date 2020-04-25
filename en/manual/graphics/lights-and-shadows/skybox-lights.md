# Skybox lights

<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Designer</span>
<span class="label label-doc-audience">Programmer</span>

A **skybox light** is an [ambient light](ambient-lights.md) emitted by a [skybox](../textures/skyboxes-and-backgrounds.md). Stride analyzes the skybox texture and generates lighting using [image-based lighting (Wikipedia)](https://en.wikipedia.org/wiki/Image-based_lighting).

![media/SkyboxLightOverview.png](media/SkyboxLightOverview.png)

Skybox lights are good for exterior scenes, where the skybox is visible. They're less useful for interior scenes, such as in rooms where the skybox is only visible through windows; as the skybox light nonetheless lights the entire room, this creates an unnatural effect.

## How skyboxes light the scene

These images show the difference between ambient and skybox lighting on two pure diffuse [materials](../materials/index.md):

| Ambient lighting  | Skybox lighting     
| ----------------- | ----
| ![Ambient lighting](media/AmbientLight.png)  | ![Skybox lighting.png](media/SkyboxLight-MaterialPureDiffuse.png) 
                    
These images show the effect of skybox lighting on a material with different metal and gloss properties:

| Material Plastic    | Metal 100% Gloss 50%     | Metal 100% Gloss 100% 
--------- | -------- | --- | -------- |
 ![Material plastic](media/SkyboxLight-MaterialPlastic.png)  | ![Material 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss50.png)  | ![Metal 100% Gloss 100%](media/SkyboxLight-MaterialMetal100Gloss100.png)  

Notice how the skybox texture colors are reflected.

## Set up a skybox light

To use a skybox as a light, you need to add a skybox asset, then select it in a [Light component](xref:Stride.Engine.LightComponent).

1. In the **Asset View**, click ![Add asset](media/engine-skybox-add-new-asset-button.png)

2. Select **Miscellaneous** > **Skybox**.

    ![Choose asset type](media/engine-skybox-choose-asset-type.png)

    The **Select an asset** window opens.

3. Choose a skybox texture from the project assets and click **OK**.
    
    ![Choose texture](media/engine-skybox-select-skybox-texture.png)

	Game Studio adds the skybox asset with the texture you specified.

4. Select the entity you want to be the skybox light.

5. In the **Property Grid** (on the right by default), click **Add component** and select [Light](xref:Stride.Engine.LightComponent).

    ![Background component properties](media/skybox-add-light-component.png)

6. In the **Light** component properties, under **Light**, select **Skybox**.

    ![Light component property](media/light-component-property.png)

7. Click ![Hand icon](~/manual/game-studio/media/hand-icon.png) (**Select an asset**):

	![No skybox asset selected](media/no-skybox-asset-selected.png)

8. Select the skybox asset you want to use as a light source and click **OK**.

	![Select an asset](media/select-skybox-asset.png)

The [Light component](xref:Stride.Engine.LightComponent) uses the skybox asset to light the scene.

## Skybox asset properties

When you use a skybox as a light, Stride uses it both in compressed form ([spherical harmonics (Wikipedia)](https://en.wikipedia.org/wiki/Spherical_harmonics)) and as a texture to light different kinds of material. You can control the detail of both in the skybox asset properties.

![Skybox lighting properties](media/skybox-asset-properties.png)

| Property     | Description                  
| ------------ | ---------- 
| Texture |  The texture to use as skybox (eg a cubemap or panoramic texture)
| Specular Only      |  Use the skybox only for specular lighting
| Diffuse SH order  | The level of detail of the compressed skybox, used for diffuse lighting (dull materials). `Order5` is more detailed than `Order3`.
| Specular Cubemap Size | The texture size used for specular lighting. Larger textures have more detail.

## Skybox light properties

![media/SkyboxLightProperties.png](media/SkyboxLightProperties.png) 

| Property     | Description   
| ------------ | ----------
| Intensity    | The light intensity 
| Culling Mask | Which entity groups are affected by the light. By default, all groups are affected

## Example code

The following code changes the skybox light and its intensity:

```cs
public Skybox skybox;
public void ChangeSkyboxParameters()
{
    // Get the light component from an entity
	var light = Entity.Get<LightComponent>();

	// Get the Skybox Light settings from the light component
	var skyboxLight = light.Type as LightSkybox;

	// Replace the existing skybox
	skyboxLight.Skybox = skybox;

	// Change the skybox light intensity
	light.Intensity = 1.5f;
}
```

## See also

* [Skyboxes and backgrounds](../textures/skyboxes-and-backgrounds.md)