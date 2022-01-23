# レンダーステージ
<!--
# Render stages
-->

**レンダーステージ（Render stages）** では、与えられたオブジェクトのレンダリング方法を定義します（通常、関連する[エフェクトやシェーダー](../effects-and-shaders/index.md)を使用します）。また、オブジェクトのソートやフィルタリングなどの高度なプロパティをコントロールすることもできます。
<!--
**Render stages** define how given objects are rendered (usually with their associated [effect/shader](../effects-and-shaders/index.md)). They also let you control advanced properties such as sorting and filtering objects.
-->

オブジェクトは複数のレンダリングステージを予約することができます。例えば、メッシュは通常、`Opaque` と `ShadowCaster` の両方のステージ、あるいは `Transparent` のステージを予約しています。
<!--
Objects can subscribe to multiple render stages. For example, a mesh typically subscribes to both the `Opaque` and `ShadowCaster` stages, or the `Transparent` stage.
-->

> [!Note]
> レンダーステージは、レンダリングの順番を定義するものではありません。レンダリングの順序は、[グラフィックス コンポジター](../graphics-compositor/index.md)によって制御されます。

<!--
> [!Note]
> Render stages don't define the rendering order. The rendering order is controlled by the [graphics compositor](../graphics-compositor/index.md).
-->

## エフェクト スロット
<!--
## Effect slots
-->

**エフェクトスロット（Effect slots）** は、レンダーステージがどの[エフェクトとシェーダー](../effects-and-shaders/index.md)を使うのかの指定に使います。
エフェクトスロットは、@'Stride.Rendering.RenderStage.EffectSlotName' で選択します。
<!--
**Effect slots** determine which [effect/shader](../effects-and-shaders/index.md) a render stage uses. You choose the effect slot with @'Stride.Rendering.RenderStage.EffectSlotName'.
-->

複数のレンダーステージが異なるオブジェクトを排他的にレンダリングする場合、ステージは同じエフェクトスロットを共有することができます。例えば、不透明ステージ（opaque）は不透明なオブジェクトのみをレンダリングし、透明ステージ（transparent）は透明なオブジェクトのみをレンダリングするので、両方のステージがメインのエフェクトスロットを使用することができます。
<!--
If multiple render stages exclusively render different objects, the stages can share the same effect slot. For example, as the opaque stage only renders opaque objects and the transparent stage only renders transparent objects, both stages can use the main effect slot.
-->

両者が同じオブジェクトをレンダリングする場合には、エフェクトスロットを共有することはできません。不透明なメッシュをメインエフェクトスロットでレンダリングし、影を作るためにシャドウキャスターエフェクトスロットで再度不透明なメッシュをレンダリングするのは、このためです。
<!--
If they render any of the same objects, they can't share effect slots. This is why, for example, we typically render opaque meshes with the main effect slot, then render opaque meshes again with the shadow caster effect slot to create shadows.
-->

レンダーステージの典型的な設定は次の通りです。
<!--
A typical setup of render stages:
-->

| レンダーステージ  | エフェクトスロット
| ---------------- | ------------ 
| Opaque           | Main         
| Transparent      | Main         
| UI               | Main         
| Shadow caster    | Shadow caster 

<!--
| Render stage     | Effect slot  
| ---------------- | ------------ 
| Opaque           | Main         
| Transparent      | Main         
| UI               | Main         
| Shadow caster    | Shadow caster 
-->

## レンダーステージでのオブジェクトの並び替え
<!--
## Sort objects in a render stage
-->

@'Stride.Rendering.RenderStage.SortMode' は、Stride がそのレンダーステージでオブジェクトを並べ替える方法を定義します。Stride には、以下のようないくつかの @'Stride.Rendering.SortMode' の実装があります。
<!--
@'Stride.Rendering.RenderStage.SortMode' defines how Stride sorts objects in that render stage. Stride comes with several @'Stride.Rendering.SortMode' implementations, such as:
-->

- @'Stride.Rendering.FrontToBackSortMode' は、限られた精度でオブジェクトを前から後ろに向かってレンダリングし、オブジェクトが同じ深度範囲を持つ場合にはステートの変更を避けようとします（不透明なオブジェクトや影に便利です）。
- @'Stride.Rendering.BackToFrontSortMode' は、オブジェクトを後ろから前に向かって厳密にレンダリングします（透明なオブジェクトに便利です）。
- @'Stride.Rendering.StateChangeSortMode' は、ステートの変化をできる限り減らせるように並び替えます。

<!--
- @'Stride.Rendering.FrontToBackSortMode', which renders objects from front to back with limited precision, and tries to avoid state changes in the same depth range of objects (useful for opaque objects and shadows)
- @'Stride.Rendering.BackToFrontSortMode', which renders objects strictly from back to front (useful for transparent objects)
- @'Stride.Rendering.StateChangeSortMode', which tries to reduce state changes
-->

もちろん、あなたが独自に実装することも自由です。
<!--
Of course, you're free to implement your own, too.
-->

## レンダーステージでのオブジェクトのフィルタリング
<!--
## Filter objects in a render stage
-->

レンダーステージ内のオブジェクトに対する独自のフィルターを作成するには、@'Stride.Rendering.RenderStageFilter' を継承します。
<!--
To create your own filter for objects in a render stage, inherit from @'Stride.Rendering.RenderStageFilter'.
-->

### レンダーステージセレクター
<!--
### Render stage selectors
-->

**レンダーステージセレクター（Render stage selectors）** は、シーン内のどのオブジェクトをどのレンダリングステージに送るかを定義し、オブジェクトをレンダリングする際に使用する[エフェクト](../effects-and-shaders/effect-language.md)を選択します。
<!--
**Render stage selectors** define which objects in your scene are sent to which render stage, and choose which [effect](../effects-and-shaders/effect-language.md) to use when rendering a given object.
-->

例えば、メッシュに対する典型的な設定は以下の通りです。
<!--
For example, this is the typical setup for meshes:
-->

- @'Stride.Rendering.MeshTransparentRenderStageSelector' は、マテリアルのプロパティに応じて、`Main` または `Transparent` のいずれかのレンダーステージを選択します。既定のエフェクトは、Stride で定義された `StrideForwardShadingEffect` です（必要であれば、独自に作成することもできます）。
- @'Stride.Rendering.Shadows.ShadowMapRenderStageSelector' は、影を落とす不透明なメッシュを選択して、`ShadowMapCaster` レンダーステージに追加します。既定のエフェクトは、Stride で定義された`StrideForwardShadingEffect.ShadowMapCaster` です。

<!--
- @'Stride.Rendering.MeshTransparentRenderStageSelector' chooses either the `Main` or `Transparent` render stage, depending on the material properties. The default effect is `StrideForwardShadingEffect` defined by Stride (you can create your own if you want).
- @'Stride.Rendering.Shadows.ShadowMapRenderStageSelector' selects opaque meshes that cast shadows and adds them to the `ShadowMapCaster` render stage. The default effect is `StrideForwardShadingEffect.ShadowMapCaster`, defined by Stride.
-->

どちらも、[レンダーグループ](../graphics-compositor/render-groups-and-masks.md)でフィルタリングすることができます。
<!--
Either can filter by [render group](../graphics-compositor/render-groups-and-masks.md).
-->

すべてカスタマイズできるので、定義済みのレンダーステージセレクターを追加したり（例：後のフルスクリーンパスに UI を追加する）、ゲームに特化した独自のセレクターを作成したりすることができます。
<!--
You can customize everything, so you can add other predefined render stage selectors (eg to add UI to a later full-screen pass), or create your own selector specific to your game.
-->

## 関連項目
<!--
## See also
-->

* [レンダリング パイプライン](index.md)
* [レンダーの機能](render-features.md)
* [エフェクトとシェーダー](../effects-and-shaders/index.md)
* [グラフィックス コンポジター](../graphics-compositor/index.md)

<!--
* [Rendering pipeline](index.md)
* [Render features](render-features.md)
* [Effects and shaders](../effects-and-shaders/index.md)
* [Graphics compositor](../graphics-compositor/index.md)
-->
