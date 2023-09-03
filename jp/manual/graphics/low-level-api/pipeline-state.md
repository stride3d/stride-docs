# パイプライン ステート
<!--
# Pipeline states
-->

Stride は、グラフィックスパイプラインステートを完全にコントロールできます。パイプラインステートには、以下のものが含まれます。
<!--
Stride gives you total control over the graphics pipeline state. This includes:
-->

- ラスタライザーステート
- 深度ステンシルステート
- ブレンドステート
- エフェクト
- 入力レイアウト
- 出力記述

<!--
- rasterizer state
- depth and stencil state
- blend state
- effects
- input layout
- output description
-->

ステートは不変の @'Stride.Graphics.PipelineState' オブジェクトにコンパイルされ、これによってパイプライン全体が記述されます。これらのオブジェクトは、@'Stride.Graphics.CommandList' を使って結合されます。
<!--
State is compiled into immutable @'Stride.Graphics.PipelineState' objects, which describe the whole pipeline. They are then bound using a @'Stride.Graphics.CommandList'.
-->

**コード：** ステートオブジェクトを作成する
<!--
**Code:** Create state objects
-->

```cs
// パイプラインステートオブジェクトの作成
// Creating pipeline state object
var pipelineStateDescription = new PipelineStateDescription();
var pipelineState = PipelineState.New(GraphicsDevice, ref pipelineStateDescription);
 
// ステートをパイプラインに適用
// Applying the state to the pipeline
CommandList.SetPipelineState(pipelineState);
```

@'Stride.Graphics.MutablePipelineState' クラスを使うと、基礎となるパイプラインの状態をキャッシュしつつ、独立してステートを設定することができます。
<!--
The @'Stride.Graphics.MutablePipelineState' class let you set states independently, while caching the underlying pipeline states.
-->

**コード：** 可変パイプラインステート
<!--
**Code:** Mutable pipeline state
-->

```cs
// パイプラインステートオブジェクトの作成
// Creating the pipeline state object
var mutablePipelineState = new MutablePipelineState();

// 値を設定して再構築
// Setting values and rebuilding
mutablePipelineState.State.BlendState = BlendStates.AlphaBlend
mutablePipelineState.Update
 
// ステートをパイプラインに適用
// Applying the state to the pipeline
CommandList.SetPipelineState(mutablePipelineState.CurrentState);
```

# ラスタライザーステート
<!--
# Rasterizer state
-->

ラスタライザーは、@'Stride.Graphics.PipelineStateDescription.RasterizerState' プロパティで設定することができます。@'Stride.Graphics.RasterizerStates' クラスには定義済みの記述がいくつか保持されています。これらはカリングモードに関するもので、ほとんどの使用例には十分でしょう。
<!--
The rasterizer can be set using the @'Stride.Graphics.PipelineStateDescription.RasterizerState' property. A set of predefined descriptions is held by the @'Stride.Graphics.RasterizerStates' class. They deal with the cull mode, and should be enough for most use cases:
-->

- @'Stride.Graphics.RasterizerStates.CullNone': カレングなし
- @'Stride.Graphics.RasterizerStates.CullFront': 表面カリング
- @'Stride.Graphics.RasterizerStates.CullBack': 裏面カリング

<!--
- @'Stride.Graphics.RasterizerStates.CullNone': no culling
- @'Stride.Graphics.RasterizerStates.CullFront': front-face culling
- @'Stride.Graphics.RasterizerStates.CullBack': back-face culling
-->

**コード：** カリングモードを設定する
<!--
**Code:** Set the cull mode
-->

```cs
pipelineStateDescription.RasterizerState = RasterizerStates.CullNone;
pipelineStateDescription.RasterizerState = RasterizerStates.CullFront;
pipelineStateDescription.RasterizerState = RasterizerStates.CullBack;
```

独自のカスタムステートを作成することもできます。オプションと既定値の一覧については、@'Stride.Graphics.RasterizerStateDescription' API ドキュメントを参照してください。
<!--
You can create your own custom state. For the list of options and default values, see the @'Stride.Graphics.RasterizerStateDescription' API documentation.
-->

**コード：** カスタム ラスタライザー ステート
<!--
**Code:** Custom rasterizer states
-->

```cs
var rasterizerStateDescription = new RasterizerStateDescription(CullMode.Front);
rasterizerStateDescription.ScissorTestEnable = true; // enables the scissor test
pipelineStateDescription.RasterizerState = rasterizerStateDescription;
```

# 深度ステンシル ステート
<!--
# Depth and stencil states
-->

@'Stride.Graphics.PipelineStateDescription.DepthStencilState' プロパティは、深度とステンシルのステートを表します。@'Stride.Graphics.DepthStencilStates' クラスでは、よく使われるステートのセットが定義されています。
<!--
The @'Stride.Graphics.PipelineStateDescription.DepthStencilState' property contains the depth and stencil states. A set of commonly used states is defined by the @'Stride.Graphics.DepthStencilStates' class:
-->

- @'Stride.Graphics.DepthStencilStates.Default': 比較条件に「＜」(less)を使う深度値の Read/Write
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': 比較条件に「≧」(greater or equal)を使う Read/Write
- @'Stride.Graphics.DepthStencilStates.DepthRead': 比較条件に「＜」(less)を使う read only
- @'Stride.Graphics.DepthStencilStates.None': Read/Write のいずれも不可

<!--
- @'Stride.Graphics.DepthStencilStates.Default': depth read and write with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.DefaultInverse': read and write with a greater-or-equals comparison
- @'Stride.Graphics.DepthStencilStates.DepthRead': read only with a less-than comparison
- @'Stride.Graphics.DepthStencilStates.None': neither read nor write
-->

**コード：** 深度ステンシルステートを設定する　
<!--
**Code:** Setting the depth state
-->

```cs
pipelineStateDescription.DepthStencilState = DepthStencilStates.Default;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DefaultInverse;
pipelineStateDescription.DepthStencilState = DepthStencilStates.DepthRead;
pipelineStateDescription.DepthStencilState = DepthStencilStates.None;
```

また、独自の深度ステンシルステートを設定することもできます。オプションと既定値の一覧については、@'Stride.Graphics.DepthStencilStateDescription' API ドキュメントを参照してください。
<!--
You can also set custom depth and stencil states. For the  list of options and default values, see the @'Stride.Graphics.DepthStencilStateDescription' API documentation.
-->

**コード：** カスタム深度ステンシルステート
<!--
**Code:** Custom depth and stencil state
-->

```cs
// 深度テストは有効、Write は不可。
// depth test is enabled but it doesn't write
var depthStencilStateDescription = new DepthStencilStateDescription(true, false);
pipelineStateDescription.DepthStencilState = depthStencilStateDescription;
```

ステンシル参照は @'Stride.Graphics.PipelineState' の一部ではありません。ステンシル参照の値は @'Stride.Graphics.CommandList.SetStencilReference(System.Int32)' を使って設定します。
<!--
The stencil reference isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetStencilReference(System.Int32)'.
-->

**コード：** ステンシル参照を設定する
<!--
**Code:** Set the stencil reference
-->

```cs
CommandList.SetStencilReference(2);
```

# ブレンドステート
<!--
# Blend state
-->

@'Stride.Graphics.PipelineStateDescription.BlendState' プロパティと @'Stride.Graphics.PipelineStateDescription.SampleMask' プロパティにより、ブレンドを制御することができます。@'Stride.Graphics.BlendStates' クラスには、よく使われるブレンドステートのセットが定義されています。
<!--
The @'Stride.Graphics.PipelineStateDescription.BlendState' and @'Stride.Graphics.PipelineStateDescription.SampleMask' properties control blending. The @'Stride.Graphics.BlendStates' class defines a set of commonly used blend states:
-->

- @'Stride.Graphics.BlendStates.Additive': 加算合成
- @'Stride.Graphics.BlendStates.AlphaBlend': 転送元の色と転送先のアルファを使った合成
- @'Stride.Graphics.BlendStates.NonPremultiplied': 転送元のアルファと両方の色を使った合成
- @'Stride.Graphics.BlendStates.Opaque': 色の置換

<!--
- @'Stride.Graphics.BlendStates.Additive': sums the colors 
- @'Stride.Graphics.BlendStates.AlphaBlend': sums the colors using the alpha of the source on the destination color
- @'Stride.Graphics.BlendStates.NonPremultiplied': sums using the alpha of the source on both colors
- @'Stride.Graphics.BlendStates.Opaque': replaces the color
-->

**コード：** ブレンドステートを設定する
<!--
**Code:** Set the blend state
-->

```cs
// ありふれたブレンドステートの設定
// Set common blend states
pipelineStateDescription.BlendState = BlendStates.Additive;
pipelineStateDescription.BlendState = BlendStates.AlphaBlend;
pipelineStateDescription.BlendState = BlendStates.NonPremultiplied;
pipelineStateDescription.BlendState = BlendStates.Opaque;

// サンプルマスクの設定
// Set the sample mask
pipelineStateDescription.SampleMask = 0xFFFFFFFF;
```

独自の深度ステートやブレンドステートを設定することができます。オプションと既定値の一覧については、@'Stride.Graphics.BlendStateDescription' API ドキュメントを参照してください。
<!--
You can set custom depth and blend states. For a list of options and default values, see the @'Stride.Graphics.BlendStateDescription' API documentation.
-->

**コード：** カスタムブレンドステート
<!--
**Code:** Custom blend state
-->

```cs
// ターゲットごとのブレンドステートを作成
// create the object describing the blend state per target
var blendStateRenderTargetDescription = new BlendStateRenderTargetDescription();
blendStateRenderTargetDescription.BlendEnable = true;
blendStateRenderTargetDescription.ColorSourceBlend = Blend.SourceColor;
// etc.

// BlentStateDescription オブジェクトを作成
// create the blendStateDescription object
var blendStateDescription = new BlendStateDescription(Blend.SourceColor, Blend.InverseSourceColor);
blendStateDescription.AlphaToCoverageEnable = true; // enable alpha to coverage
blendStateDescription.RenderTargets[0] = blendStateRenderTargetDescription;
pipelineStateDescription.BlendState = blendStateDescription;
```

ブレンド係数は @'Stride.Graphics.PipelineState' の一部ではありません。ブレンド係数は @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)' を使って設定します。
<!--
The blend factor isn't part of the @'Stride.Graphics.PipelineState'. It's set using @'Stride.Graphics.CommandList.SetBlendFactor(Stride.Core.Mathematics.Color4)'.
-->

**Code:** ブレンド係数の設定
<!--
**Code:** Set the blend factor
-->

```cs
CommandList.SetBlendFactor(Color4.White);
```

## エフェクト
<!--
## Effects
-->

パイプラインステートには、描画で使用するシェーダーも指定します。
@'Stride.Graphics.Effect' をパイプラインにバインドするには、@'Stride.Graphics.PipelineStateDescription.EffectBytecode' と @'Stride.Graphics.PipelineStateDescription' の @'Stride.Graphics.PipelineStateDescription.RootSignature' プロパティを、エフェクトの一致する値に設定します。
<!--
The pipeline state also includes the shaders you want to use for drawing.
To bind an @'Stride.Graphics.Effect' to the pipeline, set the @'Stride.Graphics.PipelineStateDescription.EffectBytecode'
and @'Stride.Graphics.PipelineStateDescription.RootSignature' properties of the @'Stride.Graphics.PipelineStateDescription' to the matching values of the effect.
-->

@'Stride.Shaders.EffectBytecode' には、実際のシェーダープログラムが含まれています。詳細については、[エフェクトとシェーダー](../effects-and-shaders/index.md)を参照してください。
<!--
An @'Stride.Shaders.EffectBytecode' contains the actual shader programs. For more information, see [Effects and Shaders](../effects-and-shaders/index.md).
-->

@'Stride.Graphics.RootSignature' には、エフェクトが必要とするリソースの数と種類が記述されています。次の章では、パイプラインに[リソースをバインド](resources.md)する方法について説明します。
<!--
The @'Stride.Graphics.RootSignature' describes the number and kind of resources expected by the effect. The next chapter covers how to [bind resources](resources.md) to the pipeline.
-->

**コード：** エフェクトのバインド
<!--
**Code:** Bind an effect
-->

```cs
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;
```

## 入力レイアウト
<!--
## Input layout
-->

パイプラインステートには、@'Stride.Graphics.PipelineStateDescription.InputElements' と @'Stride.Graphics.PipelineStateDescription.PrimitiveType' を介して頂点がデバイスに送られる際のレイアウトを記述します。
<!--
The pipeline state describes the layout in which vertices are sent to the device through the @'Stride.Graphics.PipelineStateDescription.InputElements' and @'Stride.Graphics.PipelineStateDescription.PrimitiveType' properties.
-->

[頂点の描画](draw-vertices.md)のページでは、カスタム頂点バッファの作成方法とその @'Stride.Graphics.VertexDeclaration' について詳しく説明しています。
<!--
The [Draw vertices](draw-vertices.md) page describes how to create custom vertex buffers and their @'Stride.Graphics.VertexDeclaration' in more detail.
-->

**コード：** 入力レイアウトを設定する
<!--
**Code:** Set an input layout
-->

```cs
VertexDeclaration vertexDeclaration = ...
pipelineStateDescription.InputElements = vertexDeclaration.CreateInputElements();
pipelineStateDescription.PrimitiveType = PrimitiveType.TriangleStrip;
```

## 出力記述
<!--
## Output description
-->

@'Stride.Graphics.PipelineStateDescription.Output' プロパティには、バインドされたすべてのレンダリングテクスチャーの数と @'Stride.Graphics.PixelFormat' を設定します。
<!--
The @'Stride.Graphics.PipelineStateDescription.Output' property of the @'Stride.Graphics.PipelineStateDescription' defines the number and @'Stride.Graphics.PixelFormat' of all bound render textures.
-->

レンダーテクスチャーをパイプラインにバインドする方法については、[テクスチャーとレンダーテクスチャー](textures-and-render-textures.md)を参照してください。
<!--
For information on how to bind render textures to the pipeline, see [Textures and render textures](textures-and-render-textures.md).
-->

**コード：** 出力記述を作成する
<!--
**Code:** Create an output description
-->

```cs
var renderOutputDescription = new RenderOutputDescription(GraphicsDevice.Presenter.BackBuffer.Format, GraphicsDevice.Presenter.DepthStencilBuffer.Format);
pipelineStateDescription.Output = renderOutputDescription;
```

@'Stride.Graphics.RenderOutputDescription.CaptureState(Stride.Graphics.CommandList)' を使って、@'Stride.Graphics.CommandList' に最後に設定された出力記述を取得することができます。これは、レンダーターゲットについて前もって知ることができない場合に @'Stride.Graphics.MutablePipelineState' と組み合わせると、特に便利です。
<!--
You can use the @'Stride.Graphics.RenderOutputDescription.CaptureState(Stride.Graphics.CommandList)' to retrieve the output description last set on a @'Stride.Graphics.CommandList'. This is especially useful in combination with @'Stride.Graphics.MutablePipelineState', when the render target might not be known up front.
-->

**コード：** 出力記述をキャプチャする
<!--
**Code:** Capture output description
-->

```cs
mutablePipelineState.State.Output.CaptureState(CommandList);
mutablePipelineState.Update();
```
