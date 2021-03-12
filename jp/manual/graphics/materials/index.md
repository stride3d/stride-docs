# マテリアル
<!--
# Materials
-->

**マテリアル**は、3D モデルの表面の外観や、光への反応を定義します。マテリアルがなければ、モデルは単なる形であり、真っ白なキャンバスです。

<!--
**Materials** define the appearance of 3D model surfaces and how they react to light. Without materials, models are simply shapes, blank canvases.
-->

![media/material-layers-2.png](media/material-layers-2.png)

マテリアルは、モデルのジオメトリ（頂点シェーディング）と色（ピクセルシェーディング）の両方に影響を与えます。
<!--
Materials can affect both the geometry of a model (vertex shading) and its colors (pixel shading).
-->

[複数のマテリアルレイヤー](material-layers.md)を使って、さらに複雑なマテリアルを作ることもできます。
<!--
You can use [multiple material layers](material-layers.md) to build more complex materials.
-->

実際には、マテリアルは、モデルのシェーディングの一部として統合されたシェーダーの、部分的な定義を生成します（[ライトとシャドウ](../lights-and-shadows/index.md)）。
<!--
In practice, materials generate partial definitions of shaders integrated as part of the shading of models ([lights and shadows](../lights-and-shadows/index.md)).
-->

## このセクションの内容
<!--
## In this section
-->

* [マテリアル マップ](material-maps.md)
* [マテリアル属性](material-attributes.md)
    * [ジオメトリ属性](geometry-attributes.md)
    * [シェーディング属性](shading-attributes.md)
    * [その他の属性](misc-attributes.md)
        * [クリアコートシェーディング](clear-coat-shading.md)
* [マテリアルレイヤー](material-layers.md)
* [マテリアルスロット](material-slots.md)
* [開発者向けマテリアル](materials-for-developers.md)

<!--
* [Material maps](material-maps.md)
* [Material attributes](material-attributes.md)
    * [Geometry attributes](geometry-attributes.md)
    * [Shading attributes](shading-attributes.md)
    * [Misc attributes](misc-attributes.md)
        * [Clear-coating shading](clear-coat-shading.md)
* [Material layers](material-layers.md)
* [Material slots](material-slots.md)
* [Materials for developers](materials-for-developers.md)
-->
