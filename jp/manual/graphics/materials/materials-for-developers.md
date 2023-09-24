# 開発者向けのマテリアル情報
<!--
# Materials for developers
-->

<span class="badge text-bg-primary">上級</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Advanced</span>
<span class="badge text-bg-success">Programmer</span>
-->

次の図は、マテリアルのインターフェースと実装クラスを示しています。
<!--
This diagram shows the Material interfaces and implementation classes:
-->

![media/materials-for-developers-1.png](media/materials-for-developers-1.png) 

- @'Stride.Rendering.Materials.IMaterialDescriptor' インターフェースは、マテリアル記述のルートインターフェースです。
- @'Stride.Rendering.Materials.IMaterialShaderGenerator' は、マテリアルのマテリアルシェーダーを生成するために使用されるメインインターフェースです。
- それぞれの属性とレイヤーは、最終的なマテリアルシェーダーを修正するためにこのインターフェースを実装します。
- @'Stride.Rendering.Materials.MaterialDescriptor' は、マテリアルシェーダーにコンパイルされる前のマテリアルのエディター時の記述です。
- @'Stride.Rendering.Material' クラスは、@'Stride.Rendering.Materials.MaterialDescriptor' から生成される、実行時のマテリアルシェーダーです。

<!--
- The interface @'Stride.Rendering.Materials.IMaterialDescriptor' is the root interface for a material description.
- The @'Stride.Rendering.Materials.IMaterialShaderGenerator' is the main interface used to generate a material shader of the material.
- Each attribute and layer implements this interface to modify the final material shader.
- The @'Stride.Rendering.Materials.MaterialDescriptor' is the editor-time description of the material before being compiled into a material shader.
- The @'Stride.Rendering.Material' class is the runtime material shader generated from the @'Stride.Rendering.Materials.MaterialDescriptor'
-->

## 関連項目
<!--
## See also
-->

- [マテリアルマップ](material-maps.md)
- [マテリアル属性](material-attributes.md)
- [マテリアルレイヤー](material-layers.md)
- [マテリアルスロット](material-slots.md)

<!--
- [Material maps](material-maps.md)
- [Material attributes](material-attributes.md)
- [Material layers](material-layers.md)
* [Material slots](material-slots.md)
-->
