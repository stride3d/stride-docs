# Pipeline states

Stride gives you total control over the graphics pipeline state. This includes:

- rasterizer state
- depth and stencil state
- blend state
- effects
- input layout
- output description

State is compiled into immutable @'Stride.Graphics.PipelineState' objects, which describe the whole pipeline. They are then bound using a @'Stride.Graphics.CommandList'.

**Code:** Create state objects

```cs
// Creating pipeline state object
var pipelineStateDescription = new PipelineStateDescription();
var pipelineState = PipelineState.New(GraphicsDevice, ref pipelineStateDescription);
 
// Applying the state to the pipeline
CommandList.SetPipelineState(pipelineState);
```

The @'Stride.Graphics.MutablePipelineState' class let you set states independently, while caching the underlying pipeline states.

**Code:** Mutable pipeline state

```cs
// Creating the pipeline state object
var mutablePipelineState = new MutablePipelineState();

// Setting values and rebuilding
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend;
mutablePipelineState.Update();
 
// Applying the state to the pipeline
CommandList.SetPipelineState(mutablePipelineState.CurrentState);
```

# Rasterizer state

The rasterizer can be set using the @'Stride.Graphics.PipelineStateDescription.RasterizerState' property. A set of predefined descriptions is held by the @'Stride.Graphics.RasterizerStates' class. They deal with the cull mode, and should be enough for most use cases:

- @'Stride.Graphics.RasterizerStates.CullNone': no culling
- @'Stride.Graphics.RasterizerStates.CullFront': front-face culling
- @'Stride.Graphics.RasterizerStates.CullBack': back-face culling

**Code:** Set the cull mode

```cs
pipelineStateDescription.RasterizerState = RasterizerStates.CullNone;
pipelineStateDescription.RasterizerState = RasterizerStates.CullFront;
pipelineStateDescription.RasterizerState = RasterizerStates.CullBack;
```

You can create your own custom state. For the list of options and default values, see the @'Stride.Graphics.RasterizerStateDescription' API documentation.

**Code:** Custom rasterizer states

```cs
var rasterizerStateDescription = new RasterizerStateDescription(CullMode.Front);
rasterizerStateDescription.ScissorTestEnable = true; // enables the scissor test
pipelineStateDescription.RasterizerState = rasterizerStateDescription;
```

# Depth and stencil states

The @'Stride.Graphics.PipelineStateDescription.DepthStencilState' property contains the depth and stencil states. A set of commonly used states is defined by the @'Stride.Graphics.DepthStencilStates' class:

- @'Stride.Graphics.DepthStencilStates.Default': depth read and write with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': read and write with a greater-or-equals comparison
- @'Stride.Graphics.DepthStencilStates.DepthRead': read only with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.None': neither read nor write

**Code:** Setting the depth state

```cs
pipelineStateDescription.DepthStencilState = DepthStencilStates.Default;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
pipelineStateDescription.DepthStencilState = DepthStencilStates.None;
```

You can also set custom depth and stencil states. For the  list of options and default values, see the @'Stride.Graphics.DepthStencilStateDescription' API documentation.

**Code:** Custom depth and stencil state

```cs
// depth test is enabled but it doesn't write
var depthStencilStateDescription = new DepthStencilStateDescription(true, false);
pipelineStateDescription.DepthStencilState = depthStencilStateDescription;
```

The stencil reference isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetStencilReference(System.Int32)'.

**Code:** Set the stencil reference

```cs
CommandList.SetStencilReference(2);
```


# Blend state

The @'Stride.Graphics.PipelineStateDescription.BlendState' and @'Stride.Graphics.PipelineStateDescription.SampleMask' properties control blending. The @'Stride.Graphics.BlendStates' class defines a set of commonly used blend states:

- @'Stride.Graphics.BlendStates.Additive': sums the colors 
- @'Stride.Graphics.BlendStates.AlphaBlend': sums the colors using the alpha of the source on the destination color
- @'Stride.Graphics.BlendStates.NonPremultiplied': sums using the alpha of the source on both colors
- @'Stride.Graphics.BlendStates.Opaque': replaces the color

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

You can set custom depth and blend states. For a list of options and default values, see the @'Stride.Graphics.BlendStateDescription' API documentation.

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

The blend factor isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)'.

**Code:** Set the blend factor

```cs
CommandList.SetBlendFactor(Color4.White);
```

## Effects

The pipeline state also includes the shaders you want to use for drawing.
To bind an @'Stride.Graphics.Effect' to the pipeline, set the @'Stride.Graphics.PipelineStateDescription.EffectBytecode'
and @'Stride.Graphics.PipelineStateDescription.RootSignature' properties of the @'Stride.Graphics.PipelineStateDescription' to the matching values of the effect.

An @'Stride.Shaders.EffectBytecode' contains the actual shader programs. For more information, see [Effects and Shaders](../effects-and-shaders/index.md).

The @'Stride.Graphics.RootSignature' describes the number and kind of resources expected by the effect. The next chapter covers how to [bind resources](resources.md) to the pipeline.

**Code:** Bind an effect

```cs
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;
```

## Input layout

The pipeline state describes the layout in which vertices are sent to the device through the @'Stride.Graphics.PipelineStateDescription.InputElements' and @'Stride.Graphics.PipelineStateDescription.PrimitiveType' properties.

The [Draw vertices](draw-vertices.md) page describes how to create custom vertex buffers and their @'Stride.Graphics.VertexDeclaration' in more detail.

**Code:** Set an input layout

```cs
VertexDeclaration vertexDeclaration = new VertexDeclaration();
pipelineStateDescription.InputElements = vertexDeclaration.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
```

## Output description

The @'Stride.Graphics.PipelineStateDescription.Output' property of the @'Stride.Graphics.PipelineStateDescription' defines the number and @'Stride.Graphics.PixelFormat' of all bound render textures.

For information on how to bind render textures to the pipeline, see [Textures and render textures](textures-and-render-textures.md).

**Code:** Create an output description

```cs
var renderOutputDescription = new RenderOutputDescription(GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
pipelineStateDescription.Output = renderOutputDescription;
```

You can use the @'Stride.Graphics.RenderOutputDescription.CaptureState(Stride.Graphics.CommandList)' to retrieve the output description last set on a @'Stride.Graphics.CommandList'. This is especially useful in combination with @'Stride.Graphics.MutablePipelineState', when the render target might not be known up front.

**Code:** Capture output description

```cs
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.Update();
```