# リソース バインディング
<!--
# Resource binding
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

[エフェクト](../effects-and-shaders/index.md)を使った[頂点の描画](draw-vertices.md)を行う場合、シェーダーは次のような特定のリソースが利用可能であることが期待されます。
<!--
When [drawing vertices](draw-vertices.md) using an [effect](../effects-and-shaders/index.md), the shaders expect certain resources to be available, including:
-->

- テクスチャーとバッファ
- サンプラー
- 定数バッファ

<!--
- textures and buffers
- samplers
- constant buffers
-->

## 自動リソースバインディング
<!--
## Automatic resource binding
-->

@'Stride.Rendering.EffectInstance' クラスは、読み込まれたエフェクトから列挙されるリソースの詳細を処理します。
<!--
The @'Stride.Rendering.EffectInstance' class handles the details of enumerating these resources from a loaded effect as well as binding them.
-->

また、エフェクトは @'Stride.Graphics.RootSignature' を公開しており、これを[パイプライン ステート](pipeline-state.md)として設定する必要があります。
そして、@'Stride.Rendering.ParameterCollection' に基づいて、定数バッファを満たし、リソースをバインドすることができます。
<!--
It exposes the @'Stride.Graphics.RootSignature', which has to be set as [pipeline state](pipeline-state.md),
and allows to fill constant buffers and bind resources based on a @'Stride.Rendering.ParameterCollection'.
-->

**コード：** EffectInstance を使用する
<!--
**Code:** Using an EffectInstance
-->

```cs
// EffectInstance を作成しパイプラインの設定に使う
// Create a EffectInstance and use it to set up the pipeline
var effectInstance = new EffectInstance(EffectSystem.LoadEffect("MyEffect").WaitForResult());
pipelineStateDescription.EffectBytecode = effectInstance.Effect.Bytecode;
pipelineStateDescription.RootSignature = effectInstance.RootSignature;

// 定数バッファを更新しリソースをバインドする
// Update constant buffers and bind resources
effectInstance.Apply(context.GraphicsContext);
```

## 手動リソースバインディング
<!--
## Manual resource binding
-->

さらに最適化されたコードが必要な場合（例：[レンダリング パイプライン](../rendering-pipeline/index.md)）、定数バッファの更新とリソースバインディングを手動で行うことができます。
<!--
When more optimized code is required (eg in the [rendering pipeline](../rendering-pipeline/index.md)), constant buffer updates and resource binding can be done manually.
-->
