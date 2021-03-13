# レンダリング パイプライン
<!--
# Rendering pipeline
-->

## レンダーの機能
<!--
## Render features
-->

レンダリングロジックは、@'Stride.Rendering.RenderFeature' に分離されています。各レンダリング機能は、1 種類の @'Stride.Rendering.RenderObject'（例：メッシュ、スプライト、パーティクルなど）を処理します。
<!--
Rendering logic is divided into @'Stride.Rendering.RenderFeature's. Each render feature processes one type of @'Stride.Rendering.RenderObject' (eg meshes, sprites, particles, etc).
-->

Stride は、レンダー機能をいくつかのフェーズに分けて実行します。
**収集（collect）**、**抽出（extract）**、**準備（prepare）**、**描画（draw）** です。
これは、パイプラインの各ステップを個別に分離、並列化、最適化できることを意味します。
<!--
Stride executes features in phases: **collect**, **extract**, **prepare** and **draw**. This means each step of the pipeline can be isolated, parallelized and optimized separately.
-->

詳細については、[レンダーの機能](render-features.md)を参照してください。
<!--
For more information, see [Render features](render-features.md).
-->

## レンダービュー
<!--
## Render views
-->

@'Stride.Rendering.RenderView' を使って、複数の視点からシーンをレンダリングすることができます。
例えば、画面分割ゲームのプレイヤービューや、[シャドウマップカスケード](../lights-and-shadows/shadows.md)のための別々のシャドウビューなどです。
<!--
You can render scenes from multiple points of view, represented as @'Stride.Rendering.RenderView's – eg player views in a splitscreen game, or separate shadow views for cascades in a [shadow map cascade](../lights-and-shadows/shadows.md).
-->

ビューは、すべてのレンダリングフェーズで利用可能なファーストクラスの概念であり、複数のビューにまたがるバッチ処理が可能です。
<!--
Views are a first-class concept available to all rendering phases, allowing batching across multiple views.
-->

## レンダーステージ
<!--
## Render stages
-->

@'Stride.Rendering.RenderStage' は、オブジェクトごとに[エフェクト](../effects-and-shaders/index.md)と[パイプラインステート](../low-level-api/pipeline-state.md)を選択して、レンダーパスの出力を定義します。
<!--
@'Stride.Rendering.RenderStage's select the [effect](../effects-and-shaders/index.md) and [pipeline state](../low-level-api/pipeline-state.md) per object, and define the output of a render pass.
-->

詳細については、[レンダー ステージ](render-stages.md)を参照してください。
<!--
For more information, see [Render stages](render-stages.md).
-->

## 可視グループ
<!--
## Visibility
-->

@'Stride.Rendering.RenderObject' は、@'Stride.Rendering.VisibilityGroup' に登録されます。**収集**フェーズでは、@'Stride.Rendering.RenderView' と @'Stride.Rendering.RenderStage' に基づいて、可視グループがオブジェクトをカリングしフィルタリングします。
<!--
@'Stride.Rendering.RenderObject's are registered with a @'Stride.Rendering.VisibilityGroup'. During the **collect** phase, the visibility group culls and filters them based on the @'Stride.Rendering.RenderView' and @'Stride.Rendering.RenderStage'.
-->

## このセクションの内容
<!--
## In this section
-->

* [レンダーの機能](render-features.md)
* [レンダー ステージ](render-stages.md)

<!--
* [Render features](render-features.md)
* [Render stages](render-stages.md)
-->
