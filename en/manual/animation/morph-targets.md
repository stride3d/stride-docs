# Morph targets

<span class="badge text-bg-primary">Intermediate</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>

A **morph target** (called a **blend shape** in FBX and a **shape key** in Blender) is an alternative shape of a mesh, made in your modeling tool. Each target has a **weight**: at 0 the mesh has its base shape, and at 1 it has the full target shape. Several targets can be mixed at once, for example a smile and closed eyes on a face.

Morph targets are often used for facial expressions, lip sync, muscles and corrective shapes on [skinned models](index.md#skinned-models). They also work on models without a skeleton.

![Morph targets](media/morph-targets.webp)

## Import morph targets

Stride imports morph targets from FBX and glTF files with the model. In the **Asset View**, select the model asset, and set these properties in the **Property Grid**:

![Model asset properties](media/morph-targets-model-asset-properties.webp)

| Property | Description |
| --- | --- |
| Import Morph Targets | Import the morph targets of the source file. When unchecked, the model is imported without them. |
| Morph Normals | Where the normal changes of each target come from. See below. |
| Morph Tangents | Where the tangent changes of each target come from. See below. |

The **Morph Normals** and **Morph Tangents** options are:

| Option | Description |
| --- | --- |
| ImportOrGenerate | Use the normals (or tangents) from the source file, and generate them for targets that have none. This is the default. |
| Import | Use only the normals (or tangents) from the source file. |
| Generate | Always generate them from the target shapes. |
| Zero | Don't change normals (or tangents): the targets only move positions. |

> [!NOTE]
> Meshes with morph targets are not merged with other meshes, even when **Merge Meshes** is checked. Meshes without morph targets are still merged.

## Set weights in Game Studio

When a model has morph targets, its **Model** component shows a **Morphs** section with a slider and a text box for each target. The scene view updates while you move a slider.

![Morphs section of the model component](media/morph-targets-model-component.webp)

| Property | Description |
| --- | --- |
| Enabled | Apply the morph target weights. When unchecked, the model shows its base shape and keeps its weights. |
| Weights | The weight of each target: 0 is the base shape, 1 the full target shape. |

The sliders cover -1 to 1. To set a weight outside that range, type it in the text box. To set every weight at once, click **Min All** (-1), **Reset All** (0) or **Max All** (1).

These weights are saved with the scene, and are the starting weights at runtime.

## Animate weights

Morph weight animation is imported with the model's animations. Add the animation to an [animation component](set-up-animations.md) and play it like any other clip.

An animation curve drives a weight with the path `[ModelComponent.Key].MorphWeights[TargetName]`. A target name drives the target with that name on every mesh of the model, and a model without that target ignores the curve, so one clip can play on different models.

## Set weights in scripts

The [model component](xref:Stride.Engine.ModelComponent) has methods to read and set weights. This script makes a model smile and stop smiling, over and over:

```cs
public class Smile : SyncScript
{
    private ModelComponent model;

    public override void Start()
    {
        model = Entity.Get<ModelComponent>();
    }

    public override void Update()
    {
        float time = (float)Game.UpdateTime.Total.TotalSeconds;
        // Loops the weight between 0 and 1.
        float weight = 0.5f + 0.5f * MathF.Sin(time);

        model.SetMorphWeight("Smile", weight);
    }
}
```

| Member | Description |
| --- | --- |
| [`MorphTargetNames`](xref:Stride.Engine.ModelComponent.MorphTargetNames) | The target names of the model. A name's index is its slot. |
| [`FindMorphTarget(name)`](xref:Stride.Engine.ModelComponent.FindMorphTarget*) | The slot of a target, or -1 if the model has no target with that name. |
| [`GetMorphWeight(slot)`](xref:Stride.Engine.ModelComponent.GetMorphWeight*) | The weight that is rendered. |
| [`SetMorphWeight(slot, value)`](xref:Stride.Engine.ModelComponent.SetMorphWeight*) | Sets a weight. This is the fastest way to change a weight every frame. |
| [`SetMorphWeight(name, value)`](xref:Stride.Engine.ModelComponent.SetMorphWeight*) | Sets a weight by name. It looks the name up on every call. |
| [`SetAllMorphWeights(value)`](xref:Stride.Engine.ModelComponent.SetAllMorphWeights*) | Sets every weight, for example 0 to go back to the base shape. |
| [`Morphs`](xref:Stride.Engine.ModelComponent.Morphs) | The weights set in Game Studio, and whether morphs are enabled. |

The weights set by scripts and animations don't change the weights saved in `Morphs`. If a script changes `Morphs.Weights`, those weights replace the runtime weights on the next frame.

Weights are not clamped, in Game Studio or in scripts: any finite value is allowed. Values below 0 or above 1 can be used to invert or exaggerate a shape.

## Performance

Where Stride deforms a mesh depends on the mesh and the device:

| Mesh | Device with compute shaders | Device without compute shaders |
| --- | --- | --- |
| Morph targets, with or without skinning | Compute shader (morph targets and skinning together) | Vertex shader |
| Skinning only | Vertex shader | Vertex shader |

Stride only deforms the models that a camera or a shadow sees, so models outside the view cost almost nothing on the GPU.

## Limitations

* **Bounds are not updated with the shapes.** The bounding box of a model is computed from its base shape, and morph weights don't change it. If a target moves vertices outside the base shape, the model can be culled while part of it is still on screen, and its shadow can disappear. This matters most for targets that move vertices far from the base shape.
* **Mixed targets give approximate normals and tangents.** Each target adds its own normal and tangent changes to the base, and the sum is not recomputed from the final shape. A single target at weight 1 gives its own normals and tangents, but the more targets overlap on the same vertices, and the further their weights go past 1, the less accurate the lighting gets.

## Sample

For an example of how morph targets work in Stride, load the **Sample: morph targets** sample project. It drives the morph targets of glTF and FBX models from a script, from sliders and from an animation, combined with skeletal animation. For more information, see [Create a project](../get-started/create-a-project.md).

## See also

* [Import animations](import-animations.md)
* [Set up animations](set-up-animations.md)
* [Animation scripts](animation-scripts.md)
* [Procedural animation](procedural-animation.md)
