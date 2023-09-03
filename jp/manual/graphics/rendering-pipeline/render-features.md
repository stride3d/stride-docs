# レンダーの機能
<!--
# Render features
-->

@'Stride.Rendering.RenderFeature' は、指定されたタイプの @'Stride.Rendering.RenderObject' の描画を担当します。
<!--
A @'Stride.Rendering.RenderFeature' is responsible for drawing a given type of @'Stride.Rendering.RenderObject'.
-->

## レンダーフェーズ
<!--
## Render phases
-->

レンダー機能は、いくつかのフェーズを持ちます。
<!--
Render features have several phases.
-->

### 収集（Collect）

**収集（collection）** フェーズでは、何を処理してレンダリングする必要があるかを決定します。
これは通常、[グラフィックス コンポジター](../graphics-compositor/index.md)によって行われます。
<!--
The **collect** phase determines what needs to be processed and rendered. It's usually driven by the [graphics compositor](../graphics-compositor/index.md).
-->

収集フェーズの内容は以下の通りです。
<!--
The collect phase:
-->

* レンダービューを作成し、ビューや投影行列などの最新のデータで更新する。
* レンダーステージを作成し、セットアップする。
* 可視物のカリングと並べ替えを行う。

<!--
* creates render views, and updating them with the most recent data such as view and projection matrices
* creates and setting up render stages
* performes visibility culling and sorting
-->

### 抽出（Extract）
<!--
### Extract
-->

**抽出（extract）** フェーズでは、先に収集したオブジェクトのゲームステートから、レンダー固有の短命な構造体にデータをコピーします。これは通常、@'Stride.Rendering.RenderSystem' と @'Stride.Rendering.RenderFeature' によって行われます。
<!--
The **extract** phase copies data from game states of previously collected objects to short-lived render-specific structures. It's usually driven by the @'Stride.Rendering.RenderSystem' and @'Stride.Rendering.RenderFeature's.
-->

ゲームの更新やスクリプトがブロックされるため、できるだけ速く、できるだけ重い計算をしないようにします。重い計算は[準備](#prepare)に回すべきです。
<!--
This should be as fast as possible and avoid heavy computations since game update and scripts are blocked. Heavy computations should be deferred to [Prepare](#prepare).
-->

> [!Note]
> 今のところ、Stride ではゲームの更新やスクリプトの並列化は行っていないため、**準備（prepare）** と **描画（draw）** のフェーズが終了するまでブロックは解除されません。

<!--
> [!Note]
> Currently, Stride doesn't parallelize game updates and scripts, so they won't be resumed until the **prepare** and **draw** phases are finished.
-->

タスクの例：
<!--
Example tasks:
-->

* オブジェクトの行列のコピー
* マテリアルパラメーターのコピー

<!--
* copying object matrices
* copying material parameters
-->

### 準備（Prepare）
<!--
### Prepare
-->

**準備（prepare）** フェーズでは、GPU リソースを準備し、重たい計算を行います。
これは通常、@'Stride.Rendering.RenderSystem' と @'Stride.Rendering.RenderFeature' によって行われます。
<!--
The **prepare** phase prepares GPU resources and performs heavy computations. This is usually driven by the @'Stride.Rendering.RenderSystem' and @'Stride.Rendering.RenderFeature's.
-->

タスクの例：
<!--
Example tasks:
-->

* ライティングのデータ構造体の計算
* 定数バッファとリソーステーブルへの書き込み

<!--
* computing lighting data and structures
* filling constant buffers and resource tables
-->

### 描画（Draw）
<!--
### Draw
-->

**描画（draw）** フェーズでは、GPU のコマンドリストを埋めます。
<!--
The **draw** phase fills the GPU command list.
-->

タスクの例：
<!--
Example tasks:
-->

* レンダーテクスチャーのセットアップ
* レンダービューとレンダーステージを組み合わせて描画

<!--
* setting up render textures
* drawing combinations of render stage with render view.
-->

### 例
<!--
### Example
-->

**収集（collection）** フェーズで作成され、**描画（draw）** フェーズで使用されるビューとステージの典型的な例を示します。
<!--
A typical example of views and stages created during **collect** phase, used during the **draw** phase:
-->

![media/render-features-draw-example.png](media/render-features-draw-example.png)

### パイプライン プロセッサー
<!--
### Pipeline processors
-->

**パイプラインプロセッサー（Pipeline processors）** は、[パイプライン ステート](../low-level-api/pipeline-state.md)を作る際に呼び出されるクラスです。これにより、特定のレンダーステージでアルファブレンディングやワイヤーフレームレンダリングを有効にするといったことが可能になります。
<!--
**Pipeline processors** are classes called when creating the [pipeline state](../low-level-api/pipeline-state.md). This lets you do things such as enable alpha blending or wireframe rendering in a specific render stage.
-->

Stride には、定義済みのパイプラインプロセッサーがいくつか含まれています。
また、自分で作成することもできます。
<!--
Stride includes several predefined pipeline processors. You can also create your own.
-->

## 関連項目
<!--
## See also
-->

* [レンダリング パイプライン](index.md)
* [レンダー ステージ](render-stages.md)
* [エフェクトとシェーダー](../effects-and-shaders/index.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Rendering pipeline](index.md)
* [Render stages](render-stages.md)
* [Effects and shaders](../effects-and-shaders/index.md)
* [Graphics compositor](../graphics-compositor/index.md)
-->
