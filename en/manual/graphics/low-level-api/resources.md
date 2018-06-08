# Resource binding

<span class="label label-doc-level">Advanced</span>
<span class="label label-doc-audience">Programmer</span>

When [drawing vertices](draw-vertices.md) using an [effect](../effects-and-shaders/index.md), the shaders expect certain resources to be available, including:

- textures and buffers
- samplers
- constant buffers

## Automatic resource binding

The @'SiliconStudio.Xenko.Rendering.EffectInstance' class handles the details of enumerating these resources from a loaded effect as well as binding them.

It exposes the @'SiliconStudio.Xenko.Graphics.RootSignature', which has to be set as [pipeline state](pipeline-state.md),
and allows to fill constant buffers and bind resources based on a @'SiliconStudio.Xenko.Rendering.ParameterCollection'.

**Code:** Using an EffectInstance

```cs
// Create a EffectInstance and use it to set up the pipeline
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;

// Update constant buffers and bind resources
effectInstance.Apply(context.GraphicsContext);
```

## Manual resource binding

When more optimized code is required (eg in the [rendering pipeline](../rendering-pipeline/index.md)), constant buffer updates and resource binding can be done manually.