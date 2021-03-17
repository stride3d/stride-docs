# テクスチャーの圧縮
<!--
# Texture compression
-->

<span class="label label-doc-level">初級</span>
<span class="label label-doc-audience">アーティスト</span>
<span class="label label-doc-audience">プログラマー</span>
<!--
<span class="label label-doc-level">Beginner</span>
<span class="label label-doc-audience">Artist</span>
<span class="label label-doc-audience">Programmer</span>
-->

**圧縮されたテクスチャー**は、データ容量が最大 50 % 削減され、読み込みも速くなります。
圧縮は、JPEG 圧縮と同様の結果をもたらします。
下図のアニメーションは、カメラをテクスチャーに極端に近づけて撮影したものですが、通常の距離であれば、その差は気になりません。
<!--
**Compressed textures** use up to 50% less space and are faster to load. Compression produces results similar to JPEG compression. The animation below was recorded with the camera positioned extremely close to the texture; at normal distances, the difference isn't noticable.
-->

![Texture compression](media/texture-compression.gif)

カラーテクスチャの場合、圧縮は、効果が目立たない視覚的に忙しい画像に使用するのが最適です。[スプラッシュ画面](../../Game-studio/splash-screen.md)に使われているロゴのような、細かいエッジを持つテクスチャーは圧縮しない方がいいでしょう。
<!--
For color textures, compression is best used for visually busy images, where the effects are less noticeable. You probably don't want to compress textures with fine edges, such as logos used in [splash screens](../../game-studio/splash-screen.md).
-->

圧縮の際、テクスチャーは 4 の倍数に変換されます。
テクスチャーがまだ 4 の倍数でない場合、Stride はそれを拡大します。
<!--
Compression converts the texture to a multiple of 4. If the texture isn't already a multiple of 4, Stride expands it.
-->

圧縮では、テクスチャーの種類に応じて、画像からデータを取り除きます。
<!--
Compression removes data from the image based on the texture type:
-->

| テクスチャーの種類 | 圧縮
|--------------|----------
| Color        | すべての RGBA チャンネルを圧縮します。テクスチャーのプロパティで `Alpha` プロパティが `None` に設定されている場合、アルファチャンネルは削除されます。
| Grayscale    | 赤を除くすべてのRGBAチャンネルを削除します。
| Normal map   | 青チャンネルとアルファチャンネルを削除します（法線マップではアルファは使われません）。青チャンネルは，赤と緑のチャンネルから再構成されます（1 つのピクセルのベクトル長が 1 であると仮定します）。

<!--
| Texture type | Compression 
|--------------|----------
| Color        | Compresses all RGBA channels. If the `Alpha` property is set to `None` in the texture properties, the alpha channel is removed
| Grayscale    | Removes all RGBA channels except red
| Normal map   | Removes the blue and alpha channels (alpha isn't used in normal maps anyway). The blue channel is reconstructed from the red and green channels (assuming a pixel has a vector length of 1)
-->

## 関連項目

* [テクスチャー](index.md)
* [法線マップ](normal-maps.md)
* [マテリアル](../materials/index.md)
* [スプライト](../../sprites/index.md)
* [レンダーテクスチャー](../graphics-compositor/render-textures.md)

<!--
* [Textures index](index.md)
* [Normal maps](normal-maps.md)
* [Materials](../materials/index.md)
* [Sprites](../../sprites/index.md)
* [Render textures](../graphics-compositor/render-textures.md)
-->
