# アンビエント オクルージョン
<!--
# Ambient occlusion
-->

<span class="label label-doc-level">中級</span>
<span class="label label-doc-audience">アーティスト</span>
<!--
<span class="label label-doc-level">Intermediate</span>
<span class="label label-doc-audience">Artist</span>
-->

>[!Note]
>深度を使う他のポストエフェクトと同様に、アンビエント オクルージョンを有効にすると、MSAA（マルチサンプル アンチエイリアシング）が無効になります。

<!--
>[!Note]
>As with other depth-aware post effects, enabling ambient occlusion nullifies MSAA (multisample anti-aliasing).
-->

**アンビエント オクルージョン（Ambient occlusion）** は、角や隙間など、不透明な物体によって光が遮られた部分を暗く表現します。シーンに微妙な臨場感を与えたいときに使用します。
<!--
**Ambient occlusion** darkens areas where light is occluded by opaque objects, such as corners and crevices. You can use it to add subtle realism to scenes.
-->

<p>
<video autoplay loop class="responsive-video" poster="media/occlusion-on.jpg">
   <source src="media/occlusion.mp4" type="video/mp4">
</video>
</p>

## プロパティ
<!--
## Properties
-->

![Properties](media/ambient-occlusion-properties.png)

| プロパティ | 機能
|----------|---------
| Samples | ある点がどの程度遮蔽されているかを判断するためにサンプリングされるピクセル数です。値を大きくするとノイズが減少しますが、パフォーマンスに影響します。**Blur count**と併用することで、結果とパフォーマンスのバランスをとることができます。
| Projection scale | サンプルの半径をスケーリングします。ほとんどの場合、`1`（スケーリングなし）が最も正確な結果を得ることができます。
| Intensity | 遮蔽された領域の、暗転効果の強さ。
| Sample bias | Stride がジオメトリのある領域を遮蔽とみなす角度です。値が高いと、狭いつなぎ目や隙間だけが遮蔽とみなされます。
| Sample radius | オクルージョンエフェクトの半径を調整するために、**Projection scale**と併用します。
| Blur count | アンビエントオクルージョン画像をぼかす回数です。回数が多いほどノイズは減少しますが、アーティファクトが発生する可能性があります。
| Blur scale | ピクセル単位のぼかし半径です。
| Edge sharpness | オクルージョン領域の深度差をどの程度考慮してぼかしをかけるかを設定します。値を小さくするとより多くのぼかしがかかりますが、不要な部分（つまりオクルージョン領域を超えた部分）をぼかしてしまう可能性があります。
| Buffer size | アンビエントオクルージョンを計算する際の解像度です。計算結果はゲームの解像度にアップスケールされます。サイズを大きくすると良い結果が得られますが、メモリの使用量が増え、パフォーマンスに影響します。

<!--
| Property | Function
|----------|---------
| Samples | The number of pixels sampled to determine how occluded a point is. Higher values reduce noise, but affect performance. Use with **Blur count** to find a balance between results and performance.
| Projection scale | Scales the sample radius. In most cases, `1` (no scaling) produces the most accurate result.
| Intensity | The strength of the darkening effect in occluded areas
| Sample bias | The angle at which Stride considers an area of geometry an occluder. At high values, only narrow joins and crevices are considered occluders.
| Sample radius | Use with **projection scale** to control the radius of the occlusion effect
| Blur count | The number of times the ambient occlusion image is blurred. Higher numbers reduce noise, but can produce artifacts.
| Blur scale | The blur radius in pixels
| Edge sharpness | How much the blur respects the depth differences of occluded areas. Lower numbers create more blur, but might blur unwanted areas (ie beyond occluded areas).
| Buffer size | The resolution the ambient occlusion is calculated at. The result is upscaled to the game resolution. Larger sizes produce better results but use more memory and affect performance.
-->

## 関連項目
<!--
## See also
-->

* [アンチエイリアシング](anti-aliasing.md)
* [アウトライン](outline.md)
* [ブルーム](bloom.md)
* [明度フィルター](bright-filter.md)
* [色変換](color-transforms/index.md)
* [被写界深度](depth-of-field.md)
* [レンズ フレア](lens-flare.md)
* [ライト ストリーク](light-streaks.md)
* [ローカル反射](local-reflections.md)

<!--
* [Anti-aliasing](anti-aliasing.md)
* [Outline](outline.md)
* [Bloom](bloom.md)
* [Bright filter](bright-filter.md)
* [Color transforms](color-transforms/index.md)
* [Depth of field](depth-of-field.md)
* [Lens flare](lens-flare.md)
* [Light streaks](light-streaks.md)
* [Local reflections](local-reflections.md)
-->
