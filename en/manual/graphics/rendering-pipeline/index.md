# Rendering pipeline

## Render features

Rendering logic is divided into @'Xenko.Rendering.RenderFeature's. Each render feature processes one type of @'Xenko.Rendering.RenderObject' (eg meshes, sprites, particles, etc).

Xenko executes features in phases: **collect**, **extract**, **prepare** and **draw**. This means each step of the pipeline can be isolated, parallelized and optimized separately.

For more information, see [Render features](render-features.md).

## Render views

You can render scenes from multiple points of view, represented as @'Xenko.Rendering.RenderView's – eg player views in a splitscreen game, or separate shadow views for cascades in a [shadow map cascade](../lights-and-shadows/shadows.md).

Views are a first-class concept available to all rendering phases, allowing batching across multiple views.

## Render stages

@'Xenko.Rendering.RenderStage's select the [effect](../effects-and-shaders/index.md) and [pipeline state](../low-level-api/pipeline-state.md) per object, and define the output of a render pass.

For more information, see [Render stages](render-stages.md).

## Visibility

@'Xenko.Rendering.RenderObject's are registered with a @'Xenko.Rendering.VisibilityGroup'. During the **collect** phase, the visibility group culls and filters them based on the @'Xenko.Rendering.RenderView' and @'Xenko.Rendering.RenderStage'.

## In this section

* [Render features](render-features.md)
* [Render stages](render-stages.md)