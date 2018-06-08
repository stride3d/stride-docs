# Pipeline states

Xenko gives you total control over the graphics pipeline state. This includes:

- rasterizer state
- depth and stencil state
- blend state
- effects
- input layout
- output description

State is compiled into immutable @'SiliconStudio.Xenko.Graphics.PipelineState' objects, which describe the whole pipeline. They are then bound using a @'SiliconStudio.Xenko.Graphics.CommandList'.

**Code:** Create state objects

```cs
// Creating pipeline state object
var pipelineStateDescription = new PipelineStateDescription();
var pipelineState = PipelineState.New(GraphicsDevice, ref pipelineStateDescription);
 
// Applying the state to the pipeline
CommandList.SetPipelineState(pipelineState);
```

The @'SiliconStudio.Xenko.Graphics.MutablePipelineState' class let you set states independently, while caching the underlying pipeline states.

**Code:** Mutable pipeline state

```cs
// Creating the pipeline state object
var mutablePipelineState = new MutablePipelineState();

// Setting values and rebuilding
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend
mutablePipelineState.Update
 
// Applying the state to the pipeline
CommandList.SetPipelineState(mutablePipelineState.CurrentState);
```

# Rasterizer state

The rasterizer can be set using the @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.RasterizerState' property. A set of predefined descriptions is held by the @'SiliconStudio.Xenko.Graphics.RasterizerStates' class. They deal with the cull mode, and should be enough for most use cases:

- @'SiliconStudio.Xenko.Graphics.RasterizerStates.CullNone': no culling
- @'SiliconStudio.Xenko.Graphics.RasterizerStates.CullFront': front-face culling
- @'SiliconStudio.Xenko.Graphics.RasterizerStates.CullBack': back-face culling

**Code:** Set the cull mode

```cs
pipelineStateDescription.RasterizerState = RasterizerStates.CullNone;
pipelineStateDescription.RasterizerState = RasterizerStates.CullFront;
pipelineStateDescription.RasterizerState = RasterizerStates.CullBack;
```

You can create your own custom state. For the list of options and default values, see the @'SiliconStudio.Xenko.Graphics.RasterizerStateDescription' API documentation.

**Code:** Custom rasterizer states

```cs
var rasterizerStateDescription = new RasterizerStateDescription(CullMode.Front);
rasterizerStateDescription.ScissorTestEnable = true; // enables the scissor test
pipelineStateDescription.RasterizerState = rasterizerStateDescription;
```

# Depth and stencil states

The @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.DepthStencilState' property contains the depth and stencil states. A set of commonly used states is defined by the @'SiliconStudio.Xenko.Graphics.DepthStencilStates' class:

- @'SiliconStudio.Xenko.Graphics.DepthStencilStates.Default': depth read and write with a less-than comparison
- @'SiliconStudio.Xenko.Graphics.DepthStencilStates.DefaultInverse': read and write with a greater-or-equals comparison
- @'SiliconStudio.Xenko.Graphics.DepthStencilStates.DepthRead': read only with a less-than comparison
- @'SiliconStudio.Xenko.Graphics.DepthStencilStates.None': neither read nor write

**Code:** Setting the depth state

```cs
pipelineStateDescription.DepthStencilState = DepthStencilStates.Default;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
pipelineStateDescription.DepthStencilState = DepthStencilStates.None;
```

You can also set custom depth and stencil states. For the  list of options and default values, see the @'SiliconStudio.Xenko.Graphics.DepthStencilStateDescription' API documentation.

**Code:** Custom depth and stencil state

```cs
// depth test is enabled but it doesn't write
var depthStencilStateDescription = new DepthStencilStateDescription(true, false);
pipelineStateDescription.DepthStencilState = depthStencilStateDescription;
```

The stencil reference isn't part of the @'SiliconStudio.Xenko.Graphics.PipelineState'. It's set using @'SiliconStudio.Xenko.Graphics.CommandList.SetStencilReference(System.Int32)'.

**Code:** Set the stencil reference

```cs
CommandList.SetStencilReference(2);
```


# Blend state

The @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.BlendState' and @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.SampleMask' properties control blending. The @'SiliconStudio.Xenko.Graphics.BlendStates' class defines a set of commonly used blend states:

- @'SiliconStudio.Xenko.Graphics.BlendStates.Additive': sums the colors 
- @'SiliconStudio.Xenko.Graphics.BlendStates.AlphaBlend': sums the colors using the alpha of the source on the destination color
- @'SiliconStudio.Xenko.Graphics.BlendStates.NonPremultiplied': sums using the alpha of the source on both colors
- @'SiliconStudio.Xenko.Graphics.BlendStates.Opaque': replaces the color

**Code:** Set the blend state

```cs
// Set common blend states
pipelineStateDescription.BlendState = BlendStates.Additive;
pipelineStateDescription.BlendState = BlendStates.AlphaBlend;
pipelineStateDescription.BlendState = BlendStates.NonPremultiplied;
pipelineStateDescription.BlendState = BlendStates.Opaque;

// Set the sample mask
pipelineStateDescription.SampleMask = 0xFFFFFFFF;
```

You can set custom depth and blend states. For a list of options and default values, see the @'SiliconStudio.Xenko.Graphics.BlendStateDescription' API documentation.

**Code:** Custom blend state

```cs
// create the object describing the blend state per target
var blendStateRenderTargetDescription = new BlendStateRenderTargetDescription();
blendStateRenderTargetDescription.BlendEnable = true;
blendStateRenderTargetDescription.ColorSourceBlend = Blend.SourceColor;
// etc.

// create the blendStateDescription object
var blendStateDescription = new BlendStateDescription(Blend.SourceColor, Blend.InverseSourceColor);
blendStateDescription.AlphaToCoverageEnable = true; // enable alpha to coverage
blendStateDescription.RenderTargets[0] = blendStateRenderTargetDescription;
pipelineStateDescription.BlendState = blendStateDescription;
```

The blend factor isn't part of the @'SiliconStudio.Xenko.Graphics.PipelineState'. It's set using @'SiliconStudio.Xenko.Graphics.CommandList.SetBlendFactor(SiliconStudio.Core.Mathematics.Color4)'.

**Code:** Set the blend factor

```cs
CommandList.SetBlendFactor(Color4.White);
```

## Effects

The pipeline state also includes the shaders you want to use for drawing.
To bind an @'SiliconStudio.Xenko.Graphics.Effect' to the pipeline, set the @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.EffectBytecode'
and @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.RootSignature' properties of the @'SiliconStudio.Xenko.Graphics.PipelineStateDescription' to the matching values of the effect.

An @'SiliconStudio.Xenko.Shaders.EffectBytecode' contains the actual shader programs. For more information, see [Effects and Shaders](../effects-and-shaders/index.md).

The @'SiliconStudio.Xenko.Graphics.RootSignature' describes the number and kind of resources expected by the effect. The next chapter covers how to [bind resources](resources.md) to the pipeline.

**Code:** Bind an effect

```cs
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;
```

## Input layout

The pipeline state describes the layout in which vertices are sent to the device through the @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.InputElements' and @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.PrimitiveType' properties.

The [Draw vertices](draw-vertices.md) page describes how to create custom vertex buffers and their @'SiliconStudio.Xenko.Graphics.VertexDeclaration' in more detail.

**Code:** Set an input layout

```cs
VertexDeclaration vertexDeclaration = ...
pipelineStateDescription.InputElements = vertexDeclaration.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
```

## Output description

The @'SiliconStudio.Xenko.Graphics.PipelineStateDescription.Output' property of the @'SiliconStudio.Xenko.Graphics.PipelineStateDescription' defines the number and @'SiliconStudio.Xenko.Graphics.PixelFormat' of all bound render textures.

For information on how to bind render textures to the pipeline, see [Textures and render textures](textures-and-render-textures.md).

**Code:** Create an output description

```cs
var renderOutputDescription = new RenderOutputDescription(GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
pipelineStateDescription.Output = renderOutputDescription;
```

You can use the @'SiliconStudio.Xenko.Graphics.RenderOutputDescription.CaptureState(SiliconStudio.Xenko.Graphics.CommandList)' to retrieve the output description last set on a @'SiliconStudio.Xenko.Graphics.CommandList'. This is especially useful in combination with @'SiliconStudio.Xenko.Graphics.MutablePipelineState', when the render target might not be known up front.

**Code:** Capture output description

```cs
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.Update();
```