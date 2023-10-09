# Material slots

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

Models can use multiple materials. You can set the materials in the model's **material slots**.

![Material slots](media/material-slots.png)

For example, the second material slot in this model specifies the material for the visor and the shoulder and chest plate stripes. By changing the material in this slot, we change the material used in these parts of the model.

![Materials](media/model-materials-both.png)

The material slots themselves — their number and position — are defined in the model source file (eg  `.fbx`, `.obj`, etc). You can't edit material slots in Game Studio; you can only change which materials are used in each slot.

## Set materials on a model

You can change the materials a model uses in two places:

* Under the **Materials** properties of the model itself:

    ![Model materials](media/model-materials.png)

    >[!Note]
    >This affects every instance of this model.
 
* In the **model component** of an entity or [prefab](../../game-studio/prefabs/index.md):

    ![Model materials on entity](media/model-materials-in-entity.png)

     This only affects **this** instance or prefab.

## Meshes and material slots

Models imported from modeling software can contain meshes. Meshes can share materials via material slots.

![Mesh](media/material-slot-diagram-1.png)

The association between a mesh and a material slot is defined in the model source file. You can't change these associations in Game Studio, but you can change them in code at runtime.

To change the association between a mesh and a material, use:

```cs
MyModelComponent.Model.Meshes[submeshIndex].MaterialIndex = materialIndex;
```

To change or add a material to the list of materials:

```cs
MyModelComponent.Materials[ExistingOrNewMaterialIndex] = myMaterial;
```

### Merging meshes

When Stride draws a model with meshes, it performs one GPU draw call for each mesh. By default, to improve performance, at build time, Stride merges meshes that share materials.

![Mesh](media/material-slot-diagram-2.png)

In the example above, there are five meshes and five draw calls. After merging, there are three meshes and three draw calls.

>[!Note]
>When Stride merges meshes, it merges the vertex and index buffers. This means you can't draw the meshes separately at runtime, and you can't change the original mesh position (transformation matrix). The meshes become a single mesh with a single material and a single transformation matrix (relative to the model).

>[!Note]
>When Stride merges meshes, it changes the draw order of elements. In the case of transparent materials, this can produce different results.

>[!Note]
>When you create a [physics collider from a model](../../physics/collider-shapes.md), Stride builds separate convex hulls for each mesh in the model. If the meshes are merged, only one mesh remains per material, so convex hulls are also built from merged meshes.

### Disable mesh merging

You might want to disable mesh merging if you want to:

* animate a mesh

* change the material of a mesh at runtime

To disable mesh merging on a model:

1. Select the model you want to disable mesh merging for.

2. In the **Property Grid**, disable **Merge meshes**.

    ![Disable merge meshes](media/disable-merge-meshes.png)

#### Disable merging for specific meshes

To disable merging only for specific meshes, enable their corresponding **nodes**.

1. Select the model that contains the meshes.

2. In the **Property Grid**, under **Skeleton**, make sure the model has a skeleton associated with it.

    ![Model skeleton](media/model-skeleton.png)

    For more information about skeletons, see [Animation](../../animation/index.md).

3. In the **Asset View**, select the skeleton.

    ![Select model skeleton](media/select-model-skeleton.png)

4. In the **Property Grid**, under **Nodes**, select the nodes that correspond to the meshes you don't want to merge.

    ![Nodes](media/select-model-skeleton-nodes.png)

    >[!Tip]
    >To see which nodes correspond to which mesh, open the model source file in a modeling application such as Maya.

    >[!Note]
    >Make sure you don't disable nodes that are animated at runtime.

## See also

* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
* [Material slots](material-slots.md)