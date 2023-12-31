# Voxel Cone Tracing Global Illumination

## How to set up an existing project with Voxel Cone Tracing GI



### Prerequesites:
VoxelGI requires Graphics Profile Level 11 or Higher (Direct3D 11.0 / OpenGL ES 3.1). This can be set in the Game Settings asset under the Rendering category.

Since Stride is modular, we need to add a reference to the `Stride.Voxels` plugin:

1. In the **Solution Explorer**, right-click on the user project

2. Select `Add Dependency`

   ![Add dependency](media/voxelgi-add-dependency.png)

3. Select `Stride.Voxels` in the list and press `OK`

4. Close and re-open the project.

### Graphics Compositor

Voxel Cone Tracing requires several changes to the graphics compositor.

To make this easier, we prepared a graphics compositor ready to use with Voxel GI in the asset templates:

1. In the **Asset View**, click ![](../../game-studio/media/create-and-add-assets-add-new-asset-button.png)

2. Start to type `Voxel` in the search bar

3. Select `Graphics Compositor (Voxel Cone Tracing)`

   ![Create Graphics Compositor](media/voxelgi-create-graphics-compositor.png)

4. In your `Game Settings` asset, change the graphics compositor to the newly created one:

   ![Set Graphics Compositor](media/voxelgi-set-graphics-compositor.png)

### Setup scene: Volume and Light

1. In the scene explorer, above the **Entity Tree**, click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon and select `Lights` then `Voxel volume`

2. Click the ![Plus](../../game-studio/media/add-entities-to-a-scene-plus-icon.png) icon again and select `Lights` then `Voxel light`

   At that point, the scene rendering will likely crash due to the light not being setup correctly (with error `No Voxel Volume Component selected for voxel light.`), but that's expected.

3. In the property grid, change the Light Volume to the previously created entity:

   ![Setup light volume](media/voxelgi-setup-light-volume.png)

4. At that point, you can click the `Resume` button in scene renderer, and everything should be setup!

### Play with it

To do a quick test, you can disable Skybox light (keep only directional light), go in shadow area and see if some ambient light spread there. You can also play with [emissive materials](../materials/shading-attributes.md#emissive).

### Video tutorial

Here's a youtube alternative tutorial made by David Jeske on how to set it up:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NEMZ_HJzJ7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
