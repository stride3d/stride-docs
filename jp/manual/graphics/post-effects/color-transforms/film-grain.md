# フィルム グレイン
<!--
# Film grain
-->

<span class="badge text-bg-primary">初級</span>
<span class="badge text-bg-success">アーティスト</span>
<span class="badge text-bg-success">プログラマー</span>
<!--
<span class="badge text-bg-primary">Beginner</span>
<span class="badge text-bg-success">Artist</span>
<span class="badge text-bg-success">Programmer</span>
-->

**フィルムグレイン（film grain）** は、フレームごとにノイズを加えて、実際のカメラで使われている[フィルムの粒子](https://ja.wikipedia.org/wiki/%E7%B2%92%E7%8A%B6%E6%80%A7)を再現します。
<!--
The **film grain** adds noise at each frame to simulate the grain of films used in real cameras.
-->

![media/film-grain-1.png](media/film-grain-1.png) 

粒子パターンは自動的に生成され、フレームごとに変化します。
<!--
The pattern is procedurally generated and changes at each frame.
-->

本物のフィルムグレインをシミュレートするために、ノイズは、光量が中程度の部分では目立って、明るい部分や暗い部分では目立たないようにする必要があります。
<!--
To simulate real film grain, the noise should be more visible in areas of medium light intensity, and less visible in bright or dark areas.
-->

粒子パターンは、影響を受けるピクセルの輝度を局所的に変化させます。
<!--
The pattern locally modifies the luminance of the pixels affected.
-->

![media/film-grain-2.png](media/film-grain-2.png) 

## プロパティ
<!--
## Properties
-->

| プロパティ        | 説明
| ---------------- | --------------------
| Amount           | エフェクトの量／強さ
| Grain Size       | 粒子のサイズ
| Animate          | 有効にすると、フレームごとに粒子パターンが変化します。
| Luminance Factor | オリジナルのピクセルの輝度がグレインパターンの影響をどれだけ強く受けるか。

<!--
| Property         | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| Amount           | Amount/strength of the effect                                         
| Grain Size       | Size of the grain                                                     
| Animate          | When enabled, the procedural pattern changes at each frame            
| Luminance Factor | How strongly the original pixel luminance is affected by the grain pattern
-->

## 関連項目
<!--
## See also
-->

* [ガンマ補正](gamma-correction.md)
* [トーンマップ](tonemap.md)
* [ヴィネッティング](vignetting.md)

<!--
* [Gamma correction](gamma-correction.md)
* [ToneMap](tonemap.md)
* [Vignetting](vignetting.md)
-->
